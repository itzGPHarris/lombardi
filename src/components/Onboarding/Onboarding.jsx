import { useCallback, useMemo } from 'react';
import Splash from './Splash.jsx';
import Welcome from './Welcome.jsx';
import FirstCapture from './FirstCapture.jsx';
import CheckPhoto from './CheckPhoto.jsx';
import Thinking from './Thinking.jsx';
import ReadBack from './ReadBack.jsx';
import Draft from './Draft.jsx';
import AccountPrompt from './Account.jsx';
import ChoosePlan from './ChoosePlan.jsx';
import { Calendar, CalendarPermission } from './Calendar.jsx';
import Schools from './Schools.jsx';
import GettingReady from './GettingReady.jsx';
import Intro from './Intro.jsx';
import { useSession } from '../../demo/SessionContext.js';
import { backFrom, childrenInWords, draftDates, introRecap } from '../../demo/onboarding.js';
import { dateOf } from '../../demo/calendar.js';
import { fillDates } from '../../demo/dateTokens.js';
import { fill } from '../../demo/today.js';
import { accountPrompt, gettingReady, grades as gradeList, thinking } from '../../copy/onboarding.js';

// C-00 from the splash to the coach's introduction (spec §3), fourteen screens on Charlotte's path
// since fixtures 3.54 (issue O35). Every onboarding and setup screen after 0w carries Back, even where
// its frame draws none (spec §2, issue O30), and no screen carries a step counter. Each screen is its
// own component in the shell for its layout type, and this one moves her from screen to screen through the session, so a
// jump or Reset returns everything to the splash. The coach's lines, the capture and the draft come
// from the seed's C-00; nothing calls a network or a model.
export default function Onboarding() {
  const { session, dispatch, household } = useSession();
  const seed = household.seed;
  const { screen, entries, flags, failure } = session.onboarding;
  const moment = seed.moments.find((entry) => entry.id === session.momentId);
  const answers = moment.state.onboarding;
  const anchor = seed.meta.demoWeekStart;

  const act = useCallback((action) => dispatch({ type: 'ONBOARDING', action }), [dispatch]);
  const go = useCallback((to) => act({ type: 'GO', screen: to }), [act]);
  const back = () => act({ type: 'BACK', to: backFrom(session.onboarding) });
  const set = (field, value) => act({ type: 'SET', field, value });
  const setRow = (field) => (index, value) => act({ type: 'SET_ROW', field, index, value });

  const capture = seed.captures.find((entry) => entry.id === answers.capture);
  const conversation = useMemo(
    () => ['c00-readback', 'c00-question', 'c00-answer', 'c00-handoff', 'c00-draft', 'c00-welcome']
      .map((id) => seed.conversation.find((entry) => entry.id === id))
      .map((entry) => ({ ...entry, text: fillDates(entry.text, { demoWeekStart: anchor, now: moment.time }) })),
    [seed, anchor, moment.time],
  );
  const draftChild = seed.children.find((child) => child.id === answers.draft.child);

  const toReadBack = useCallback(() => go('0b'), [go]);
  const toDraft = useCallback(() => go('0c'), [go]);
  const toIntro = useCallback(() => go('0j'), [go]);

  switch (screen) {
    case '0s': return <Splash onNext={() => go('0w')} />;
    case '0w': return (
      <Welcome
        entries={entries}
        openGrade={flags.gradeListOpen}
        set={set}
        setChild={setRow('children')}
        setBirth={(index, birth) => act({ type: 'SET_BIRTH', index, birth, demoWeekStart: anchor })}
        addChild={() => act({ type: 'ADD_ROW', field: 'children', value: { id: null, name: '', birth: null, grade: gradeList[0] } })}
        openGradeList={(index) => act({ type: 'OPEN_GRADE_LIST', index })}
        chooseGrade={(index, grade) => act({ type: 'CHOOSE_GRADE', index, grade })}
        onContinue={() => go('0a')}
      />
    );
    case '0a':
    case '0c-b': {
      // With nothing captured, the account prompt opens over 0a, and Back closes it (0c-b).
      const prompt = screen === '0c-b' && (
        <AccountPrompt heading={accountPrompt.headingNoCapture} email={entries.email} setEmail={(value) => set('email', value)} onContinue={() => go('0e-p')} />
      );
      return <FirstCapture prompt={prompt || undefined} onCapture={(kind) => act({ type: 'CAPTURE', kind })} onSkip={() => act({ type: 'SKIP_CAPTURE' })} onBack={back} />;
    }
    case '0v': return <CheckPhoto alt={capture.label} onUse={() => go('0r')} onRetake={() => go('0v')} onBack={back} />;
    case '0r': {
      const line = { photo: thinking.photo, file: thinking.file, voice: thinking.listening }[flags.captureKind ?? 'photo'];
      return <Thinking key="0r" line={line} slow={failure === 'slow-read'} onDone={toReadBack} onTryAgain={() => go('0r')} />;
    }
    case '0b': {
      const readBack = conversation[0];
      const choices = readBack.confirm.choices.map((id) => {
        const child = seed.children.find((entry) => entry.id === id);
        return { id, name: child.name, short: child.gradeShort };
      });
      return (
        <ReadBack
          conversation={conversation}
          choices={choices}
          chosen={flags.chosenChild}
          onChoose={(child) => act({ type: 'CHOOSE_CHILD', child })}
          draftChild={draftChild.name}
          unreadable={failure === 'unreadable'}
          alt={capture.label}
          onMake={() => go('0t')}
          onRetake={() => go('0v')}
          onChooseAnother={() => go('0a')}
          onBack={back}
        />
      );
    }
    case '0t': return <Thinking key="0t" line={fill(thinking.making, { child: draftChild.name })} slow={failure === 'slow-draft'} onDone={toDraft} onTryAgain={() => go('0t')} />;
    case '0c': {
      const rows = answers.draft.rows.map((row, index) => {
        const day = dateOf(row.day, anchor).weekday;
        if (row.event) return { key: index, day: `${day} · ${row.event}`, what: null, suggested: true };
        return { key: index, day: `${day} · ${row.letter}`, what: [row.meaning, row.checklistItem].filter(Boolean).join(' · ') };
      });
      return (
        <Draft
          child={draftChild.name}
          dates={draftDates(answers.draft, anchor)}
          line={conversation[4].text}
          rows={rows}
          prompt={(
            <AccountPrompt
              heading={fill(accountPrompt.heading, { child: draftChild.name })}
              line={accountPrompt.line}
              email={entries.email}
              setEmail={(value) => set('email', value)}
              onContinue={() => go('0e-p')}
              onNotNow={() => dispatch({ type: 'START_OVER' })}
            />
          )}
          onBack={back}
        />
      );
    }
    case '0e-p': return <ChoosePlan onBuy={() => go('0q')} onBack={back} />;
    case '0q': return <Calendar onPick={(calendar) => act({ type: 'ASK_CALENDAR', calendar })} onSkip={() => act({ type: 'SKIP_CALENDAR' })} onBack={back} />;
    case '0q-b': return <CalendarPermission calendar={flags.pendingCalendar ?? seed.calendar.name} onAllow={() => act({ type: 'ALLOW_CALENDAR' })} onCancel={() => act({ type: 'CANCEL_CALENDAR' })} />;
    case '0f': return (
      <Schools
        kids={entries.children}
        schools={entries.schools}
        notInSchool={gradeList[0]}
        capturedFrom={!flags.skippedCapture}
        calendar={flags.calendar}
        entries={entries}
        set={set}
        setSchool={setRow('schools')}
        setHelper={setRow('helpers')}
        addHelper={() => act({ type: 'ADD_ROW', field: 'helpers', value: { name: '', relationship: '' } })}
        onAdd={() => {
          act({ type: 'ADD_ROW', field: 'children', value: { id: null, name: '', birth: null, grade: '' } });
          act({ type: 'ADD_ROW', field: 'schools', value: { school: '', startTime: '', fromCapture: null, age: '' } });
        }}
        onBack={back}
        onDone={() => go('0p')}
      />
    );
    case '0p': {
      // Five steps when she connected a calendar and made a draft; the calendar and the draft each
      // drop out when she skipped them (fixtures section 4, "Getting ready screen").
      const steps = [
        gettingReady.saving,
        fill(gettingReady.adding, { children: childrenInWords(entries.children) }),
        flags.calendar && fill(gettingReady.reading, { calendar: flags.calendar }),
        !flags.skippedCapture && fill(gettingReady.settingUp, { child: draftChild.name }),
        gettingReady.today,
      ].filter(Boolean);
      return <GettingReady steps={steps} failed={failure === 'account'} onDone={toIntro} onTryAgain={() => go('0p')} />;
    }
    case '0j': return (
      <Intro
        name={entries.name.trim() || null}
        recap={introRecap(conversation[5], session.onboarding)}
        calendarConnected={!!flags.calendar}
        captured={!flags.skippedCapture}
        onBack={back}
        ticks={flags.ticks}
        onTick={(tick) => act({ type: 'TICK', tick })}
        onNext={() => dispatch({ type: 'FINISH_ONBOARDING' })}
      />
    );
    default: return <Splash onNext={() => go('0w')} />;
  }
}
