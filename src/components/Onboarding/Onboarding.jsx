import { useCallback, useMemo } from 'react';
import Splash from './Splash.jsx';
import Welcome from './Welcome.jsx';
import CaptureConversation from './CaptureConversation.jsx';
import Thinking from './Thinking.jsx';
import Draft from './Draft.jsx';
import { AccountSheet, KeepPlan } from './Account.jsx';
import ChoosePlan from './ChoosePlan.jsx';
import Calendar from './Calendar.jsx';
import Schools from './Schools.jsx';
import GettingReady from './GettingReady.jsx';
import Intro from './Intro.jsx';
import { useSession } from '../../demo/SessionContext.js';
import {
  childrenInWords, draftDates, draftOutcome, draftReminder, draftView, introRecap, isEmail, reminderDay,
} from '../../demo/onboarding.js';
import { dateOf } from '../../demo/calendar.js';
import { fillDates, monthDay } from '../../demo/dateTokens.js';
import { fill } from '../../demo/today.js';
import { accountPrompt, draft as draftWords, gettingReady, grades as gradeList, thinking } from '../../copy/onboarding.js';

// C-00 from the splash to the coach's introduction (spec §3): ten screens on Charlotte's path before her
// first board since fixtures 3.56 (issues O35 and O36): 0s, 0w, 0a, 0t, 0c, 0e-p, 0q, 0f, 0p and 0j.
// The capture conversation holds the preview, the reading, the question of whose it is, the read-back
// and the hand-off; the account sheet with nothing captured opens over it (0c-b); keeping the plan ends
// the draft (0c-c); and the calendar's permission and connected state belong to 0q. Every onboarding
// and setup screen after 0w carries Back (spec §2, issue O30), and no screen carries a step counter.
// Each screen is its own component in the shell for its layout type, and this one moves her between
// them through the session, so a jump or Reset returns everything to the splash. The coach's lines,
// the capture and the draft come from the seed's C-00; nothing calls a network or a model.
export default function Onboarding() {
  const { session, dispatch, household } = useSession();
  const seed = household.seed;
  const { screen, entries, flags, failure } = session.onboarding;
  const moment = seed.moments.find((entry) => entry.id === session.momentId);
  const answers = moment.state.onboarding;
  const anchor = seed.meta.demoWeekStart;

  const act = useCallback((action) => dispatch({ type: 'ONBOARDING', action }), [dispatch]);
  const go = useCallback((to) => act({ type: 'GO', screen: to }), [act]);
  const back = () => act({ type: 'BACK' });
  const set = (field, value) => act({ type: 'SET', field, value });
  const setRow = (field) => (index, value) => act({ type: 'SET_ROW', field, index, value });

  const capture = seed.captures.find((entry) => entry.id === answers.capture);
  const conversation = useMemo(() => Object.fromEntries(
    ['c00-naming', 'c00-readback', 'c00-question', 'c00-answer', 'c00-handoff', 'c00-welcome']
      .map((id) => seed.conversation.find((entry) => entry.id === id))
      .map((entry) => [entry.id.slice(4), { ...entry, text: fillDates(entry.text, { demoWeekStart: anchor, now: moment.time }) }]),
  ), [seed, anchor, moment.time]);
  const draftChild = seed.children.find((child) => child.id === answers.draft.child);

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
        addChild={() => act({ type: 'ADD_CHILD' })}
        openGradeList={(index) => act({ type: 'OPEN_GRADE_LIST', index })}
        chooseGrade={(index, grade) => act({ type: 'CHOOSE_GRADE', index, grade })}
        onContinue={() => go('0a')}
      />
    );
    case '0a': {
      const choices = conversation.naming.confirm.choices.map((id) => {
        const child = seed.children.find((entry) => entry.id === id);
        return { id, name: child.name, short: child.gradeShort };
      });
      return (
        <CaptureConversation
          flags={flags}
          failure={failure}
          naming={conversation.naming}
          readBack={conversation.readback}
          question={conversation.question}
          answer={conversation.answer}
          handoff={conversation.handoff}
          choices={choices}
          draftChild={draftChild.name}
          alt={capture.label}
          act={act}
          onBack={back}
          onMake={() => go('0t')}
          sheet={(
            <AccountSheet open={flags.accountSheet} email={entries.email} setEmail={(value) => set('email', value)} canContinue={isEmail(entries.email)} onContinue={() => go('0e-p')} onBack={back} />
          )}
        />
      );
    }
    case '0t': return <Thinking key="0t" line={fill(thinking.making, { child: draftChild.name })} slow={failure === 'slow-draft'} onDone={toDraft} onTryAgain={() => go('0t')} />;
    case '0c': {
      // Each card is titled with its date and letter over what the letter means, such as "Tuesday,
      // Oct. 6 · D" over "Motor skills", and the event with its date over its name. A skipped card
      // folds to one line, such as "Thursday, Oct. 8 · Back-to-school night" (fixtures C-00).
      const days = draftView(answers.draft, flags.draft).map((day) => {
        const date = `${dateOf(day.row.day, anchor).weekday}, ${monthDay(day.row.day, anchor)}`;
        if (day.kind === 'event') return { ...day, title: date, meaning: day.row.event, folded: `${date} · ${day.row.event}` };
        const title = `${date} · ${day.row.letter}`;
        return { ...day, title, meaning: day.row.meaning, folded: title };
      });
      const removed = flags.draft.notice && draftReminder(answers.draft, flags.draft, flags.draft.notice);
      const notice = removed && fill(draftWords.removed, { item: removed.text, child: draftChild.name, day: reminderDay(removed.row, moment.time, anchor) });
      return (
        <Draft
          child={draftChild.name}
          dates={draftDates(answers.draft, anchor)}
          days={days}
          notice={notice}
          scrollToKeep={flags.scrollToKeep}
          act={act}
          onBack={back}
          keep={(
            <KeepPlan
              heading={fill(accountPrompt.heading, { child: draftChild.name })}
              email={entries.email}
              setEmail={(value) => set('email', value)}
              canContinue={isEmail(entries.email)}
              onContinue={() => act({ type: 'KEEP_PLAN', outcome: draftOutcome(answers.draft, flags.draft) })}
              onNotNow={() => dispatch({ type: 'START_OVER' })}
            />
          )}
        />
      );
    }
    case '0e-p': return <ChoosePlan onBuy={() => go('0q')} onBack={back} />;
    case '0q': return (
      <Calendar
        connected={flags.calendar}
        asking={flags.permissionFor}
        onPick={(calendar) => act({ type: 'ASK_CALENDAR', calendar })}
        onAllow={() => act({ type: 'ALLOW_CALENDAR' })}
        onCancel={() => act({ type: 'CANCEL_CALENDAR' })}
        onSkip={() => act({ type: 'SKIP_CALENDAR' })}
        onContinue={() => go('0f')}
        onBack={back}
      />
    );
    case '0f': return (
      <Schools
        kids={entries.children}
        schools={entries.schools}
        flags={flags}
        notInSchool={gradeList[0]}
        entries={entries}
        set={set}
        setSchool={setRow('schools')}
        setHelper={setRow('helpers')}
        addHelper={() => act({ type: 'ADD_ROW', field: 'helpers', value: { name: '', relationship: '' } })}
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
        recap={introRecap(conversation.welcome, session.onboarding)}
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
