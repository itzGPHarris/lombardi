# AGENTS.md

These are the instructions for the build agent working in this repository. The AI development tool for the build is not decided, so this file names no tool and applies to whichever one writes the code, and to the engineer who takes the build over. Read this file first, then the spec section and the fixtures for the task in front of you. When this file, the spec and the fixtures disagree, the fixtures win, then the spec, then this file, and the disagreement goes in `docs/issues.csv` rather than being settled in code.

*Current versions: story fixtures 3.19, spec 0.19. Last updated October 17, 2026.*

## What this repository is

This is the investor prototype for Most Valuable Parent (MVP), a planning app and support system for busy parents. "Lombardi" is the internal code name for this build. It never appears in the product, in the UI or in any string a user or investor can see.

A parent gives MVP whatever arrives in her week, by sharing a message from another app, forwarding an email, photographing a handout or talking, and she connects the calendar she already keeps. MVP turns all of it into one plan for the day and the week. The plan is the product. Around it are her inner circle, the people she trusts with her children, and her village, the other parents who share her children's week, whom she talks with in village groups inside MVP. She talks with her inner circle in private chats. The coach is one more helper beside them. It sorts what she sends, drafts the messages she sends to other people, and answers parenting questions from what it knows about her family. It is a feature of the plan, not the center of the product, and nothing in the UI or the copy should present it as the thing that leads.

The prototype is a scripted web demo. Each household is a JSON seed file, every coach response, capture, calendar event and reply from another person is prepared data, and nothing depends on a network or a model during a presented demo. The demo shows each household across its week as a series of moments with IDs, such as C-03, and a hidden household switcher jumps between them. Charlotte and Edward's household is the only one written at the current fixtures version, so it is the only one to build until the others are rewritten.

## Sources of truth

| Document | What it decides |
| ----- | ----- |
| `docs/story-fixtures.md` | Every household, every moment, and every word and data value on screen. Section 2 holds the product rules and the type scale, section 4 holds every label, heading and button, and Appendix A holds every invented fact. |
| `docs/spec.md` | What to build, how it behaves, what is out of scope, and how we know it is done. Each section names the wireframes it describes. |
| Figma, the frames named in `docs/screen-map.md` | How each screen looks and what is on it: composition, components, type, spacing and states. Read only the frames the screen map names, by ID. |
| `docs/screen-map.md` | Which Figma frame, by ID, each screen is built from, and what to build from when no frame exists. |
| `docs/wireframes/` | Grayscale wireframes, one per screen, numbered as the spec cites them. Layout reference for screens with no Figma frame. |
| `src/tokens.css` | Every design value. Exported from the current Figma library. |
| `docs/issues.csv` | Observed problems and open decisions. Status lives here and nowhere else. |
| `docs/backlog.md` | Build order, grouped into review builds. |
| `docs/brief.md` | Why, for whom, and how it should feel. Read it, never build from it directly. |

Build only what the spec describes. Every spec section has an out-of-scope list and open conditions, and anything they fence off stays unbuilt even if it seems obvious. If something you need is not in the spec or the fixtures, add a row to `docs/issues.csv` and stop rather than inventing it.

Do not seed `src/tokens.css` from the old `hearth-tokens.json` in Greg's design folder. It predates the current palette and sets pure white and near-black values the design rules forbid (issue C20).

## Stack

- React with functional components and hooks, built with Vite, deployed on Netlify from `main`.
- Mobile first: write every style for a 440 × 956 phone, the width of the Figma frames, then extend with min-width media queries at the tablet (768) and desktop (1280) breakpoints, which are tokens. Check at 440 × 956, 390 × 844, 768 × 1024, 1440 × 900 and 1920 × 1080. Content width stops growing at 1200.
- At tablet and desktop widths the tab bar becomes a sidebar. Today, Coach, Team and Kids keep their phone layout in a centered column, and the game plan opens into seven columns. Do not build a wide Today (F20).
- Plain CSS modules. No UI component library and no CSS framework.
- Every color, space, radius, size and type value comes from a custom property in `src/tokens.css`. Never write a raw hex value, pixel size or font name in a component.
- `useReducer` and context, one reducer per household session. No persistence of any kind, so state resets on reload.
- Icons from Material Symbols first (`@material-symbols/svg-400`, Outlined, through `vite-plugin-svgr`), then `lucide-react`, then custom SVGs, all drawn through one `Icon` component that takes the name used in Figma, such as `phase-morning` or `calendar-mark`. The source for each name is in the variant description on the Figma Icons page. Never import an icon directly in a screen, and never use `@mui/icons-material`.
- Fraunces, Inter and JetBrains Mono, self-hosted through `@fontsource`. No fourth font. The type scale is in fixtures section 2, "Type": nine styles named as in the library. The coach is set in Inter everywhere in the app: Body large on the Today coach card and Body in the Coach tab. Voice (Fraunces) is used for the coach only in onboarding, and for article titles. JetBrains Mono is used only for the Label style, which sets the labels the coach owns: the coach card's label, the read-back strip's label and the day labels on the review card.
- The live coach model is debug only, behind a Netlify function that holds the API key. The browser never sees the key.

## Commands

| Command | What it does |
| ----- | ----- |
| `npm install` | Installs dependencies. |
| `npm run dev` | Runs the prototype locally. |
| `npm run build` | Builds for production. Must pass before any commit. |
| `npm run voicecheck` | Checks every coach string for banned words and punctuation, checks articles for em-dashes, and fails on any calendar date or year typed into a seed, article or copy file outside `meta.demoWeekStart` and the prepared documents. Must pass before any commit that touches `src/data/` or `src/copy/`. |
| `npm run lint` | Lints the source. Must pass before any commit. |

## Where things live

- `src/data/households/` holds one seed file per household, written directly from the fixtures. Its shape is in spec §16, including `meta.demoWeekStart`, the `calendar` object, coach cards with their after states, reminders and the `moments` array.
- `src/data/articles/` holds the MVP Recommends library, one file per article.
- `src/copy/` holds every interface string from fixtures section 4.
- `src/components/` follows the inventory in spec §17.
- `scripts/voicecheck.mjs` is the voice and date check.
- `netlify/functions/coach.js` is the debug-only live-model proxy.

## Who decides what

Each source decides one thing, and none of them overrules another on that thing.

| Question | Decided by |
| ----- | ----- |
| How a screen looks: layout, which elements appear and in what order, components, type styles, spacing and states | The Figma frame named for that screen in `docs/screen-map.md` |
| Token values: color, space, radius, type sizes | The master library, exported to `src/tokens.css` |
| The words on screen and the household's facts: names, times, dates, places, grades, every label and every coach line | The story fixtures |
| What happens when she taps, what is out of scope, and the rules that apply across screens | The spec |

When a frame and another source disagree about something only that source decides, follow the source that decides it and keep everything else in the frame. A frame that shows an old word is followed for its layout, and the fixtures supply the word. When a frame and a rule genuinely conflict, the reading is written in `docs/screen-map.md` or the spec. If you find a conflict that neither covers, build the frame as drawn, add a row to `docs/issues.csv` naming the frame ID and the rule, and carry on. Never reinterpret a whole screen because one part of it conflicts.

## Reading Figma

Read Figma through the Figma MCP server, and only the frames whose IDs are listed in `docs/screen-map.md`. The file holds older frames with the same names on other pages, and building from one of those is the most likely way to build the wrong screen. Use each frame's design context and a screenshot of it at its native 440 px width. Token values come from `src/tokens.css`, never from the frame, so if a frame uses a value that is not a token, use the nearest token and add an issue. When a screen has no frame, the screen map says what to build it from.

## The product in brief

Read the spec section for the details. This is the shape you should hold in your head while building.

**Navigation (spec §2).** Five tabs: Today, Coach, Game plan, Team and Kids. On a phone they sit at the bottom, and from tablet width up they become a left sidebar headed "Most Valuable Parent". Settings opens from the parent's monogram at the top right of every tab, and from the bottom of the sidebar at wider sizes. A page opened inside a tab, such as a child page, a school card, an article or a draft, shows Back in place of the monogram. Settings is itself a page, with Back, a large title and five cards, each with a heading, a line saying what it holds and label-and-value rows (spec §13). Its controls are staged in the prototype.

**Layout (spec §2, "Layout and scrolling").** Every screen is one of eight layout types: Today, tab list, page, conversation, composer, onboarding and setup, sheet and still. Each type has one rule for what stays fixed, what scrolls and what is anchored at the foot, and one shell in `components/Layout/`, and `docs/screen-map.md` names the type of every frame. Build a screen's scrolling from its type, never from how its frame is layered. Tab lists and pages have a title bar whose controls never move, with a large title that fades into a small title in the bar as she scrolls and back again, and the small title scrolls to the top. The keyboard follows iOS: anchored feet ride above it, the tab bar does not, and chats, composers and a village group's page hide the tab bar. A sheet never opens another sheet. The page scrolls, never a box inside it.

**Onboarding (spec §3).** Before any account: splash (0s), welcome with first name and zip code (0w), who she is planning for (0k), show me one thing (0a), check the photo (0v), reading (0r), the read-back with the child confirmation, one question and the hand-off (0b), making the draft (0t), and the draft with its dates and the account prompt (0c). Setup, with a counter from 01 of 05 to 05 of 05: create your account (0e), a staged plan screen with no counter (0e-p), connect your calendar (0q), schools (0f), household (0g) and who else helps (0h). Then getting ready (0p), the coach's introduction (0j) and her first board on Today (0i) in three states: on arrival, the answer sheet, and after she answers, plus the skipped-capture board. The plan screen takes no payment and opens nothing outside the app. Nothing before the account is kept if she leaves.

**People (spec §4).** Children appear as name chips, never as initials or monograms, with "Both", "All three" and "Family" as group chips. Adults who own an item appear as outlined initials, the parent as "You", and the coach as a solid dot. In lists of items, such as Later today and the game plan, chips lead each row and replace the child's name in its text. Checklists carry no chips: their items are grouped under a heading in the children's indigo that says what the list is, such as "Mallory needs" or "Both girls need", with her own tasks under "Before you leave". The parent's monogram at the top right is the only monogram in the app.

**The plan (spec §4).** Every item has an owner ("You", a name, or "Nobody yet"), at most one status (Suggested, or the person's outlined initial with an hourglass for asked, a thumbs up for yes or a thumbs down for can't, with the accessible label "Asked Edward", "Edward: yes" or "Edward can't"), and two possible marks (Changed and Conflict, shown as "Conflicts with" and the other item). An item shows the time the thing itself starts, such as ballet at 4:15 pm or Westview at 8:30 am, and the run on Today shows when to leave, such as 3:55 pm. Every leaving time is the next stop's due time, minus the drive, minus five minutes, rounded down to five minutes, and never before the stop it leaves is due. The seed holds the computed values in its runs. A change she makes herself is never flagged back to her.

**Today (spec §5).** Today shows the current day only. The header is a dateline with the day and the date, such as "Monday, Oct. 12", worked out from the demo calendar, above the phase of the day ("This morning", "This afternoon" or "Tonight", each with its icon). Then come four parts in order. Now holds the next thing today that needs her at a set time, usually the current leg of her run, and it steps down the run as each stop comes due. A leg is laid out like a boarding pass: a title repeating the item she is going to, with its chip, then the route with the next station under it, the leaving time in Display with a status pill that is plain, then in the warning tint from 15 minutes before, then "Time to leave" and then "Running late", the Drive, Arrive and Pickup or Starts fields, a dashed perforation, then the grouped checklist and Remind me and Directions. There is no drive line. When nothing timed is left Now holds her leading task, and then a quiet line. Today changes one thing, when she leaves, through the Leave sheet, which draws her run as a line of stops with each "Leave at" time as a control, shows Save only after a change, and holds the coach's Plan B and Plan C. "Other options" on the coach card opens that sheet on Today. Every other edit belongs to the game plan. The coach card appears only when the coach needs an answer, or briefly after she has given one, and may concern another day. Later today lists the rest of the day. MVP Recommends shows at most one article. The header and Now sit on paper, and the coach card, Later today and MVP Recommends sit on a canvas sheet with rounded top corners below it. When she scrolls, the header and Now stay in place and the sheet rises over both, built with sticky positioning as spec §5 "Scrolling" describes. A covered monogram is expected while the sheet is up. The coach card is still the only card, and the capture bar is docked above the tab bar, hidden while the coach card asks for a capture. Tonight turns to "Ready tonight" and "Tomorrow starts". A finished checklist folds away: a child's group folds to one line, such as "Alexis needs · 3 packed", and the whole checklist under Now folds to "Everything is packed for 7:40" with a check that draws in once, and a tap opens either again. Nothing praises her and nothing celebrates (spec §5, "When a checklist is finished").

**Capture (spec §7).** Four entry points (the share menu, the forwarding address, the camera and her voice) and one connection (her calendar). Every capture gets a short read-back, at most one question, new items as Suggested on the game plan's review card, and a source link such as "From the Cedar Grove newsletter · Sunday". What she types or says about her own week joins as hers. The capture bar, on Today, the game plan and the Coach tab, starts with the coach's dot and the placeholder "Type, talk or add an image", then attach, camera and microphone. While the field holds typed text, an arrow labeled "Give this to the coach" joins them and the microphone stays, and past one line the text takes the full width and grows up to five lines. She types in place on every tab with the bar, and the read-back lands where she is: the coach card on Today, the read-back strip on the game plan, the conversation on Coach. Nothing switches her to another tab without saying so in its label. There is no Send on the capture bar, and Team and Kids carry none. Sharing, forwarding and photographing are staged in the prototype.

**Her calendar (spec §7).** She connects Google Calendar, Apple Calendar or Outlook on setup screen 0q. MVP reads her calendar and never adds, changes or deletes anything in it. Nothing from her calendar joins the plan until she adds it: each event the coach finds waits on the game plan's review card with "I don't need this" and "Add to the plan". An event she adds is hers with no status, carries the calendar mark on Today, in the game plan and on child pages, and shows the source link "From your Google Calendar", and the coach then suggests the trips around it. A calendar item is never moved in MVP: its page says "Change this in Google Calendar." where other items offer "Move to another day or time". A new calendar event that runs into the plan becomes the coach card, which asks her to add it before it recommends a way through, as in C-06b. The connection and the permission screen are staged in the prototype.

**Game plan (spec §8).** This week and next as an agenda under a week strip that sticks under the title bar and marks the day she is reading. A review card at the top, in the coach's tint, holds anything new waiting to go in her plan, grouped by day, with a full-sentence heading such as "Three new things are waiting to go in your plan." Past days fold into one line, today and tomorrow open, the other days are collapsed with their counts, tapping a day's heading opens or closes it, and an open day sits in a container on `bg/subtle`. Routine items are quieter unless they carry a status, a mark or a note. Tapping an item opens its page, with "Ask someone to take this", her note, the source, the coach's backups under "Other ways this could go" and "Move to another day or time". Dragging is a shortcut at wider sizes. The capture bar sits at the foot, and the coach's read-back rises above it as a strip. An item she adds or moves is shown where it lands with a highlight in the coach's tint that fades after about two seconds and leaves no mark. The game plan never shows the coach card.

**Requests (spec §9).** A request reaches someone as a card in their own MVP, as a text message with a link to a single web page for someone without MVP, or as text handed to another app. Each item on a request is answered on its own with "I've got it" or "I can't do this", and the person can add a note and change an answer later. A note never edits her plan: a "can't" reopens the item and brings back the coach card, and a note on a "yes" shows under the item with the Changed mark. Every answer and changed answer reaches her as a notification and a status. There are no read receipts. Every handoff to another app leaves a task on her list until she ticks it off.

**Team (spec §10).** Chats, village groups, the inner circle and the village, in that order, with "On MVP" after anyone who has it and "New message" at the top. A chat is with one person or several from her inner circle, chosen when she starts it, or with "Everyone on MVP". The same composer posts to a village group. Only people with MVP can be in a chat or a group. Each person has a page with Message, Call or Text and what in this week's plan involves them. New messages arrive as notifications and show "1 new" until opened. Messages and posts are text only, and the coach never reads, drafts or summarizes any of it.

**Kids (spec §11).** A page for each child and a card for each school. Cards are kept current from what she captures, mark what changed and keep the earlier version.

**MVP Recommends (spec §12).** Short articles by MVP staff, never generated, with a staff byline. No tab, no library, no "See all" and no sharing in this build.

**Demo controls (spec §15).** The prototype opens on C-00, at the splash, so a reviewer goes through onboarding first. The household switcher opens from a long press on the monogram, on every tab and at every size, and jumps between households and moments, shows a moment from the recipient's side with View as, switches the phone frame and resets. The debug menu holds the live-model toggle. View as shows the recipient's Today and the screens they answer on, and nothing else of their MVP. Every tab shows its state at the current moment. Charlotte's moments are C-00 to C-08, including C-03a, C-03b, C-04b, C-05b, C-05c, C-06b, C-06c and C-08b.

## Rules that must never be broken

1. **Copy comes only from the fixtures.** Every visible word is in a moment or in fixtures section 4. Do not write, shorten, rephrase or "improve" any of it. A missing word is an issue, not a placeholder you fill in.
2. **One calendar, never the clock.** The prototype runs on the demo calendar, with the demo week starting on the date in `meta.demoWeekStart`. Every time in the seed is a demo time, a week relative to the demo week, a weekday and a time, and every date on screen is worked out from the anchor, never typed into copy. Dates appear only on Today's dateline, on the 0c draft, in the prepared documents and for school card events beyond this week. Never read the device clock. The demo calendar drives the dateline, the phase of the day, countdowns and what has passed.
3. **Nothing is sent without the parent.** Every message to another person is a draft she can edit, and it goes only when she taps Send or hands it to another app herself. Nothing in the app sends, posts or answers on her behalf.
4. **MVP never writes to her calendar.** No code path adds, changes or deletes a calendar event, and no copy or icon suggests that MVP does. A move accepted from the coach card changes the plan only.
5. **Nothing is shown as settled.** No string, label or state calls a plan set, covered, sorted, done or final. An accepted item can still change.
5a. **Today edits only leaving times and her own start times.** Nothing on Today changes a note, an owner, a day, or an item someone else owns or has answered. Tapping a time never switches tabs. What she tells the coach through the capture bar on Today joins the plan as hers, because it is her words, and anything taken from someone else's document waits on the coach card for her to add it (spec §5, C-03a).
6. **People see only what she sends them.** Recipients see their requests and nothing else of her plan, her calendar or her coach conversations.
7. **The coach never reads chats or village groups.** No code path passes a chat message, post or reply to the coach, the live model or any summary.
8. **Coach voice.** Every line the coach writes is in the present tense, speaks to the parent, and names children rather than using pronouns for them. It never uses em-dashes, sentence fragments, sets of three parallel phrases, openers such as "Okay" or "Alright", praise for the parent, a description of what it just did, or the planner words window, slot, block, buffer or lane. These lines come from the fixtures, so a violation means the seed drifted from the fixtures.
9. **Messages to other people are in the parent's voice,** in the first person, not the coach's.
10. **The coach stays within its limits.** It does not find or recommend providers or sitters, buy anything, plan money, or advise on custody, legal or medical questions. It names the right person from her inner circle when a question needs one.
11. **No photographs of people, no stock and no generated images.** Children appear as name chips, never as initials, monograms or photos. Illustration appears only inside articles.
12. **No pure white and no pure black,** and the wordmark always reads "Most Valuable Parent" as a unit.
13. **Status marks never rely on color alone.** Each has its own shape and label, and so do the calendar mark, the chips and the coach's dot.
14. **No uppercase labels and no letter-spaced eyebrows.** Labels are written in sentence case, as the fixtures give them.
15. **The live model is never on in a presented demo,** and it never writes as another person.

## Decisions that are still open

Build around these rather than settling them in code. Each is a row in `docs/issues.csv`.

- **Where items already in the plan go when they come to need her (G34).** Build them on their rows with their marks and the dot in the week strip, and expect them to move onto the review card.
- **When a recurring conflict first shows (G26)** and **the Sunday moment (G21)** are open. Build the boards as drawn.
- **The plan screen's words (O17).** Build 0e-p from its frame with the board's words, and expect them to change.
- **The Voice style (C33).** The library's voice style is Inter, while the documents set the coach's onboarding lines in Fraunces. Use `--text-voice` from `src/tokens.css` as exported, and expect it to change.
- **The school screen's heading (O11).** It reads "Who's on your calendar?" until Greg decides.
- **The plan screen beyond the prototype.** Real payments are out of scope. The screen is staged.
- **Tab names (C21), the onboarding order (O3) and the calendar's positioning (C22)** need Heather's sign-off, and the copy may change.

## How to work

- Work through the current review build in `docs/backlog.md`, in order, until every line in it is done. A review build is the amount Greg needs in order to review, so stopping after one line leaves him nothing to review. Read the spec section, the screen map entries and the wireframes each line names before building it.
- Build at phone size first, then extend to tablet and desktop in the same change.
- One backlog line per commit. Say in the commit message which spec section or issue ID it delivers.
- Before you finish, compare every screen you built with its Figma frame at 440 px and list the differences you could not fix in `docs/issues.csv`.
- Keep what already works. Correct the existing code rather than recreating the repository.
- When you find a problem or a gap, add a row to `docs/issues.csv` with the columns ID, Section, Priority, Status, Source, Where, Now, Expected and Fix. Do not change a status you did not resolve.
- A new feature idea goes to Greg for an F-number in spec Appendix B. Do not build it.
- Do not edit `docs/spec.md`, `docs/story-fixtures.md`, `docs/brief.md` or `docs/screen-map.md`. Changes to them go through Greg.
- Keep README accurate when you change how the prototype is run or presented.
