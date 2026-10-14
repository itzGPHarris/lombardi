# **Most Valuable Parent (Lombardi): Product specification**

*Investor prototype · Version 0.11 · October 13, 2026*

## **Summary of this version**

Version 0.11 follows the Today redesign and the type and color work in the Figma master library. The coach card is marked with the coach's fill, outline and dot, and the Coach Alert is added, which settles how the coach card is marked and retires saffron. The coach speaks in Fraunces on the Today coach card and in onboarding, and in Inter in the coach chat. Children appear as name chips in plan rows, and the parent's avatar replaces her monogram. The Recommends label line drops its capitals. Appendix A lists the changes.

Version 0.10 changes three design rules. Everything the coach says is set in Inter, and Fraunces is reserved for headlines and titles. Icons come from Material Symbols first, then Lucide, then custom drawings, and each icon is named by its meaning. Olive is removed from Hearth, and cerulean is the anchor color.

Version 0.9 closes the gaps the calendar wireframe pass reported, following story fixtures version 3.9. Requests are answered item by item with an optional note, answers and changed answers reach the parent as notifications, there are no read receipts, every handoff to another app leaves a task, and the capture bar has no Send. Appendix A lists the changes, and the summary of version 0.8 follows.

Version 0.8 adds the parent's own calendar, following story fixtures version 3.8. MVP connects to her Google Calendar, Apple Calendar or Outlook once, right after the account is created, reads it, and keeps the plan in step with it. It never changes anything on her calendar. Calendar items come into the plan owned by her, carry a calendar mark on Today and in the game plan, and raise a conflict and a coach card when a new event runs into the plan. Section 7 gains "Her calendar", onboarding gains a calendar screen and a fifth setup step, and moment C-06b shows a checkup booked outside MVP reaching the plan through her calendar. Appendix A lists the changes.

The summary of version 0.7 follows.

Version 0.7 brings the spec into line with story fixtures version 3.6, which is now the source of truth for where MVP is going, and with the grayscale wireframes built from it. The prototype no longer turns on one shared Thursday. Each household is shown across its week as a series of moments with IDs, such as C-03, and the household switcher jumps between them. The demo shows no calendar dates. The tabs are now Today, Coach, Game plan, Team and Kids, with Settings behind the parent's monogram. Four sections are new: the plan model with owners, statuses and marks (§4), capture (§7), requests (§9, replacing Sharing a plan) and the Kids tab with school cards (§11). Onboarding (§3) is rewritten as sixteen screens in three parts. The build moves from Claude Code to OpenAI Codex, which reads `AGENTS.md` in the repository. Appendix A lists every change and the old-to-new section numbers.

Charlotte and Edward are the only household written at version 3.6. The other three households keep their version 2.2 facts until the fixtures rewrite them, and the build order in `docs/backlog.md` builds Charlotte's week end to end first.

# 1. Overview

Most Valuable Parent (MVP) is a planning app and a support system for busy parents. A parent receives the week's logistics in six or seven places at once: school emails and newsletters, messages in WhatsApp and other apps, texts, paper handouts and her own thoughts in the car. She gives MVP whatever arrives, by sharing it from another app, forwarding it to her own MVP address, photographing it or talking, and the coach turns it into a plan for the day and the week. The plan says where everyone needs to be, who takes them, what goes with each child, and what still needs her.

The same coach answers the parenting questions she would otherwise take to Reddit or a Facebook group. It already knows her family, so its answers fit her children, and every answer shows the family details it was based on. Around her are two groups of people. Her **inner circle** is the people she trusts with her children and her private life, such as her partner, family, a nanny and the family's doctors, therapists and tutors. Her **village** is everyone else who shares her children's week for a few hours at a time, such as school parents and carpool families, and she talks with them in **village groups** she creates inside MVP. When part of the plan needs someone else, the coach drafts a request in her voice and she sends it herself.

MVP also publishes short articles written by its staff, under the name **MVP Recommends**. There is no tab for them. One appears on Today when something in her week makes it useful, and one is attached to a coach answer when she asks for ideas.

This version of the product is a web prototype built to raise a funding round. It is a scripted demonstration rather than a working beta. Every coach response, capture and reply from another person comes from prepared data, so the demo behaves the same way every time and never waits on a network or a model.

The demo shows each household across a real stretch of its week, because a parent is responsible for her children every hour of every day and what changes from hour to hour is the logistics. Each household has a set of moments at different days and times, such as getting the children out of the house on Monday morning, a change that arrives in the middle of Wednesday, an evening spent getting ready for tomorrow, and a question asked once the house is quiet. Within a household the moments run in order, so the presenter can show the same plan changing over several days.

This spec says what to build and how we will know it is finished. The creative brief explains why and for whom. The story fixtures (`docs/story-fixtures.md`) hold every household's data, every moment, and every word that appears on screen. The wireframes show each screen in place. Figma holds every visual decision.

## **What every household shows**

Every household shows the same eight things, so the demo makes the argument that one product handles households that look nothing alike. The order varies with each family's week, and each family shows one or two of them in depth.

1. The parent gives MVP something messy and MVP turns it into the plan, and what is already on her own calendar reaches the plan without her sending it.
2. When something needs a decision, the coach offers several ways it could go, recommends one and says why. Sometimes she chooses another, because she knows things the coach does not.
3. Part of the plan goes to another person as a request, and their answer comes back as a status.
4. Something changes after a person has accepted, and that part of the plan reopens with options beside it.
5. The parent works the game plan directly, without the coach.
6. The parent asks the coach a parenting question and gets an answer from what it knows about her family, with an MVP Recommends article attached.
7. The parent takes a question to her village or inner circle, because it needs people rather than a product.
8. The parent uses Today to get the children out of the house prepared.

## **Households**

| Household | Shown in depth | Fixtures |
| ----- | ----- | ----- |
| Charlotte and Edward | Onboarding, the Today board, and how much of the week the coach can build from what she photographs, forwards and says | Version 3.6, moments C-00 to C-08 |
| Calypso | The coach answering a hard parenting question, and a village that is still forming | Proposed. Version 2.2 facts until rewritten |
| Alexandra and Ben | The game plan worked directly, and a plan that changes more than once | Proposed. Version 2.2 facts until rewritten |
| Marcus | Sending parts of the plan to several people, and what each person is allowed to see | Proposed. Version 2.2 facts until rewritten |

A household is built only once its fixtures are written at the current version. Until then its section in the fixtures is the reference for its facts, and nothing in this spec about it is buildable.

## **Presenter**

Greg or Heather runs the demo on a laptop or a 1920 × 1080 display. The app can be shown in its desktop layout or inside a phone frame, so investors can see that it is built for the phone first. The presenter uses the hidden demo controls (§15) to move between households and moments and to reset them between runs. The presenter script is a separate document, written once the prototype runs so its timings can be measured, and it refers to moments by their IDs.

## **Platform**

The prototype runs in any modern browser. It is designed mobile first, starting from a phone screen, with a responsive layout that scales to tablet and desktop widths up to 1920 × 1080 (§19). It is built with React and Vite, deployed on Netlify, and draws its icons from Material Symbols first, then Lucide, then custom drawings (§17). Figma is the design source, and the engineer exports the frames and token values the build needs into the repository (§17), so the build never depends on a design tool at run time.

Each household is one JSON seed file, held in memory while the app runs, with no backend and no database. MVP Recommends articles live in a shared library in `src/data/articles/`, written by MVP staff. Coach output, captures and replies are scripted from the seed files. A live model can be switched on for the coach from the debug menu, and never during a presented demo. The build is done with OpenAI Codex, working from `AGENTS.md`, this spec and the fixtures.

### **Standing decisions**

1. **Moments, not one shared day.** The demo shows each household across its week. The single-Thursday frame is retired, because one day cannot show a plan that keeps changing.
2. **No calendar dates in the prototype.** It shows days of the week only, describes anything further away relative to the demo week, holds no calendar dates in its seed files, and ignores the device clock, so it can be presented in any week. The real product shows full dates on Today and in the game plan. The two rules are kept apart, and the second does not apply to the prototype.
3. **Every word on screen comes from the fixtures.** Moments give the words in place, and fixtures section 4 gives every label, heading and button. Nothing visible is invented during the build. A gap is an issue, not a guess.

# 2. Navigation

The app has five tabs. On a phone they sit across the bottom of the screen, and from tablet width up they move to a sidebar on the left in the same order.

| Tab | Purpose | Wireframes |
| ----- | ----- | ----- |
| Today | The logistics for the current day: the next departure, what goes with each child, a row for each person, the coach card and at most one article card. The screen the app opens to once a household is set up (§5). | 01, 01b, 02, 03, onboarding 0i |
| Coach | The parent's conversation with the coach, by voice, typing, a photo or a file, including the coach's read-backs, its options and its answers (§6). | 01a, 04, 08 |
| Game plan | The whole week, including routine items, with "This week's changes" at the top. Where she works the plan directly (§8). | 06, 06b |
| Team | The adults around her: her inner circle, her village and her village groups, and the conversations in those groups (§10). | 07, 10 |
| Kids | A page for each child and a card for each school (§11). | 12a to 12e |

Tab labels are written as in fixtures section 4: Today · Coach · Game plan · Team · Kids.

## **The avatar and Back**

The parent's avatar, an outlined circle with her initial, sits at the top right of every tab's own screen, with the accessible label "Settings and account", and opens Settings (§13). At tablet width and above, Settings also sits at the bottom of the sidebar, below a rule. Pages opened inside a tab, such as a child page, a school card, an article or a draft, show a Back link in place of the avatar.

## **Getting things in**

The Coach tab carries the full capture bar: camera, attach and microphone, with the microphone turning into an arrow while she has typed text. Today carries a single capture button, labeled Add, which floats above the tab bar so it never pushes the next departure down, and opens a sheet with Take a photo, Attach a file and Talk or type. Each school card carries its own Add to this card button. Things also arrive from outside the app through the share menu and the forwarding address, and from her own calendar once it is connected (§7).

## **At wider screens**

From tablet width up, the bottom tabs become a sidebar with the same five tabs in the same order. On Today the rows open into a full-day grid (§5). In the game plan, "This week's changes" becomes a strip across the top and the week shows seven columns, with next week beneath it. Nothing else about navigation changes between sizes.

### **Standing decisions**

1. **Five tabs: Today, Coach, Game plan, Team and Kids.** Adults live on Team, and the children and the organizations around them live under Kids, so a parent can guess where anything is.
2. **Kids replaces Settings as the fifth tab.** Parents look at their children's schools every week and at settings rarely, so Settings moves behind the avatar.
3. **One way in to the coach.** Captures and questions go to the same coach, because the parent thinks of it as one helper rather than two tools. She never has to say which she is doing.
4. **No tab for articles.** Articles arrive through Today and coach answers, because each one has to earn its place through something in her week.
5. **No meals tab and no month view.** Dinner appears in a plan only when the schedule forces it to move. Meal planning and the shopping list are parked as F16, and the month view as F1.
6. **One navigation at every size.** The same five tabs move from the bottom of a phone to the side of a larger screen. A wider layout never adds or hides a tab.

### **Open conditions**

1. **The tab names face customers and need brand sign-off from Heather.** If the sports naming of Team is judged too much, the plain fallback is Kids and People.

# 3. Onboarding

Onboarding appears in the demo only in Charlotte's household, as moment C-00, two weeks before the demo week. The other households open already set up.

Onboarding has three parts. Before any account, the parent tells MVP her first name and who she is planning for, then gives it one thing from this week and sees it come back as a plan. In the second part she creates the account, connects her calendar and answers three short setup screens. In the third part MVP finishes setting up, the coach introduces itself, and she lands on Today.

The wireframes are the onboarding flow map and screens onboarding-01 to onboarding-17, with the failure and waiting states on onboarding-17 and the lines taught in her first week on onboarding-16.

| # | Screen | Part | Step counter | Skip |
| ----- | ----- | ----- | ----- | ----- |
| 0s | Splash | Before the account | None | No |
| 0w | Welcome: her first name and zip code | Before the account | None | Yes, to 0k |
| 0k | Who are you planning for: each child's name and grade | Before the account | None | Yes, to 0a |
| 0a | Show me one thing | Before the account | None | Yes, to 0e |
| 0v | Check the photo: Use this photo or Retake, for a photo only | Before the account | None | No |
| 0r | Thinking, while the coach reads the capture | Before the account | None | No |
| 0b | Read-back, with a control to confirm which child it is for, at most one question, and the hand-off | Before the account | None | No |
| 0t | Thinking, while the coach builds the draft | Before the account | None | No |
| 0c | The draft, with the account prompt over it | Before the account | None | Not now ends the session |
| 0e | Create your account: an email address or sign-in with Apple | Setup | 01 of 05 | No |
| 0q | Connect your calendar: Google Calendar, Apple Calendar or Outlook, with a staged permission screen | Setup | 02 of 05 | Not now, to 0f |
| 0f | Who's on your calendar: each child's school | Setup | 03 of 05 | No |
| 0g | Your household: household type and home language | Setup | 04 of 05 | No |
| 0h | Who else helps: the adults she counts on | Setup | 05 of 05 | No |
| 0p | Getting everything ready, while the account is created | Finishing | None | No |
| 0j | Nice to meet you: the coach's introduction and a recap | Finishing | None | No |
| 0i | Her first board on Today | Finishing | None | No |

The words on every screen are in fixtures C-00 and fixtures section 4, "Onboarding".

## **Inputs**

| Field | Screen | Type | Description |
| ----- | ----- | ----- | ----- |
| First name | 0w | string | Used in the coach's greeting and the children screen's heading. Optional, because 0w can be skipped. |
| Zip code | 0w | string | Used for travel times and the local school calendar. Optional. Charlotte enters 00123. |
| Child name | 0k | string | One per child. |
| Grade | 0k | enum | Not in school yet, Pre-K, K, 1 to 8, or 9–12. |
| Capture | 0a | photo, file, or voice or text | The one thing from this week. Optional, because 0a can be skipped. |
| Child for this capture | 0b | child reference | Preselected by matching the document's grade to a child's grade. |
| Email or Apple sign-in | 0e | string or action | Creates the account. Her name is already known from 0w. |
| Calendar | 0q | choice | Google Calendar, Apple Calendar or Outlook, or Not now. Charlotte connects Google Calendar. |
| School | 0f | string | One per child in school. Filled in from the capture where it can be, with the note "From your calendar photo". |
| Age | 0f | number | Only for a child marked Not in school yet, in place of School. |
| Household type | 0g | single choice | Two parents, One parent, Two homes, Something else. |
| Language at home | 0g | select | English is the only working option in the prototype. |
| Other adult | 0h | name and who they are | One row per adult. They become the first members of her inner circle. |
| Reminder | 0j | checkbox | Ticked by default, such as "Remind me the night before a library day". Tapping Next with it ticked brings up the notification permission. |

## **Behavior notes**

* **Value still comes before the account.** The welcome and the children screen come before the first capture so the coach knows whose week the capture belongs to. Without them the coach could only guess which child a calendar was for. Both are short and skippable, and neither asks for an account.
* **The coach always confirms which child a capture is for.** It preselects a child by matching the grade on the document to a child's grade, and she changes it with one tap. If two children share a grade or the document shows none, nothing is preselected. If she skipped the children screen, the confirmation offers a Child name field and the grade choices instead. The confirmation is a control, not a question, so the coach can still ask its one question.
* **She hands the draft to the coach.** The read-back never runs straight into the draft. Once the child is confirmed and the coach's question is answered, the coach says what it will make and what it keeps for later, and she starts the draft herself with a button such as "Make Mallory's plan". A "Something's not right" link lets her correct the read-back first.
* **The first draft covers the rest of this week.** Anything on a capture that falls in a later week goes onto the school card and enters the plan when its week arrives.
* **Waits are shown, never hidden.** A thinking screen with the MVP mark and a line saying what the coach is doing appears while it reads a capture (0r) and while it builds the draft (0t), and each moves on by itself. The getting ready screen (0p) shows its steps finishing in turn, five of them when she has connected a calendar, each marked done, working or waiting, with no percentage, because a number that stalls or jumps looks broken.
* **Failure states have their own screens.** A capture that cannot be read replaces 0b, with Retake photo and Choose another. A wait longer than twenty seconds replaces 0r or 0t, with Try again. Account creation that fails replaces 0p's steps, keeps everything she entered, and offers Try again. If she leaves during 0p, MVP opens at 0p or 0j when she returns. The words are in fixtures section 4.
* **Her first board is never empty.** If she captured something, Today shows tomorrow's first departure and the coach's first question about a child. If she skipped the capture, the coach card asks for one thing to start with, with an Add button.
* **Leaving before the account starts over.** A parent who taps Not now on the account prompt, or leaves before creating the account, starts again at the splash the next time she opens the app.
* **Back from the account screen** returns to the draft with the account prompt open.
* **Her calendar comes right after the account.** It follows the first draft, so she has seen what MVP does before it asks for her calendar, and it comes before the school screen, so the coach can fill in what the calendar already shows. While the account is created, 0p reads the calendar, and the coach's introduction on 0j says what came in. If she taps Not now, connecting stays in Settings, and the coach offers it once, the first time she gives it an appointment.
* **Entry points are taught when they become useful,** not during onboarding (§7).

## **Prototype timing**

The prototype does not read photos, so each thinking screen lasts two seconds and the getting ready screen lasts four. The capture is the prepared photo of Westview's rotation calendar, and the read-back, the coach's question, Charlotte's reply and the draft are scripted. The account screens and the calendar permission screen look real and create or connect nothing. The failure states are built so they can be shown on request, but they do not appear in Charlotte's path.

### **Standing decisions**

1. **Value before account.** She sees her first draft before she is asked to create an account. This is a locked decision. Its wording changes in this version, because her first name and her children's names and grades now come before the first capture (open condition 1).
2. **Nothing before the account is kept.** Her name, zip code, children, photo and draft are held only for the session and discarded if no account is created.
3. **Collect progressively.** After the account, she connects her calendar, and three setup screens ask for each child's school, the household type and home language, and the adults who help. Everything else about each child comes later, through the coach's questions on Today. There is no per-child intake form.
4. **The step counter appears on setup only,** running from 01 of 05 to 05 of 05. The screens before the account are not a form, and the screens after setup leave her nothing to do.
5. **Onboarding has no step for adding schools beyond naming them.** The first school card is built from the first capture (§11).
6. **The village is not part of onboarding.** The adults on 0h join her inner circle. The coach introduces the village when a question needs other parents.
7. **No pricing screen and no statistic.** Onboarding ends with the coach's introduction and her first board. The getting ready screen carries no percentage or figure.
8. **Headlines are display type.** Every onboarding and setup headline is set in Fraunces. Fields, labels, helper lines and buttons are set in Inter. What the coach says in onboarding is set in Fraunces, in the voice style.
9. **"Time saved" is left out of the coach's introduction,** because nothing in the product measures it.

### **Open conditions**

1. **Heather signs off the new onboarding order.** "Value before account" still holds, but the line that onboarding asks for one thing before it asks who she is no longer does. The brief carries the same change.
2. **The zip code's purpose needs agreeing.** This version says it helps with travel times and the local school calendar, because MVP is not a directory of activities. If location is meant for anything else, this section needs to say what.
3. **The mark on the welcome and thinking screens needs confirming.** This version treats the small cup on Greg's Figma screens as the MVP mark. If it is a separate drawing, it is an illustration outside the articles and needs an exception to §19.
4. **The getting ready screen uses proposed wording.** Greg's Figma screen has its own headline and step labels, which replace the fixtures' wording once he confirms them, as long as they describe what is actually being saved.

# 4. The plan: items, owners, statuses and marks

A family's plan is the best current version of the week, and it changes whenever someone's day does. Every screen that shows the plan, which is Today, the game plan, requests and coach cards, uses the model in this section.

## **Plan item**

| Field | Type | Description |
| ----- | ----- | ----- |
| Day and time | demo time | When the thing itself starts, as a day of the week and a time, or "All day" (§16). Ballet is at 4:15 pm. When to leave belongs to the departure on Today, such as 3:55 pm. |
| Title | string | The on-screen wording, such as "Alexis · Pick up at Cedar Grove, early dismissal". Taken verbatim from the fixtures. |
| Child | reference | The child it concerns, when there is one. |
| Place | reference | Where it happens. |
| Owner | person reference or none | The adult responsible. Shown as their name, as "You" for the parent, or as "Nobody yet". |
| Kind | enum | Routine, which repeats every week, or This week, which happens once. |
| Status | enum or none | Where a request or suggestion stands (below). Present only when another person or the coach is involved. |
| Marks | set | Changed and Conflict, which can sit on any item whoever owns it. |
| Note | string | A note the parent added, such as "Green dress, hanging in the laundry room". |
| Source | source reference | Where the item came from: a capture (§7), her calendar, or "From you". An item can have more than one. |
| From her calendar | boolean | True when the item came from her connected calendar. It shows the calendar mark, and it is moved or deleted in her calendar rather than in MVP. |
| Going with | strings | What goes with the child for this item, when anything does. |

## **Owner**

The owner is the adult responsible for the item. "Nobody yet" is drawn with its own mark, because an item with no owner is always something the week still needs from her. A suggested item has no owner until she chooses it.

## **Status**

The seed file uses the internal names. The screen always names the person.

| Internal name | On screen | What it means |
| ----- | ----- | ----- |
| Proposed | Suggested | The coach has suggested it and the parent has not chosen it yet. |
| Asked | Asked Edward | The parent has sent it to someone, and that person has not answered. |
| Accepted | Edward: yes | The person asked has said yes. The item can still change. |
| Declined | Edward can't | The person asked has said no. The item reopens with options beside it. |

## **Marks**

| Internal name | On screen | What it means |
| ----- | ----- | ----- |
| Changed | Changed | Something about the item moved since the parent last looked, because of a message or another person. The mark stays until she opens the item. |
| Conflict | Conflicts with yoga | The item collides with another one. |

When the plan asks one adult to be in two places at once, or leaves a child with nobody, both items show "Conflicts with" followed by the other item until the parent resolves it. An item that collides with two or more items names them together where it can, such as "Conflicts with both pickups", and otherwise gives the number, such as "Conflicts with 3 items".

## **Behavior notes**

* **A change she makes herself is never flagged back to her.** Taking the Wednesday carpool from the coach card shows "You" with no status and no Changed mark.
* **A decline always leads somewhere.** When a status becomes Declined, the coach card returns with options (§5, §6).
* **Conflicts are written into each moment in the prototype,** not computed at run time, because the seed is the source of truth for what appears on screen. The rule above is what the seed must agree with and what the real product computes, counting the fixed travel times between places.
* **Calendar items are hers.** An item that comes from her calendar has "You" as owner and no status, because she put it there herself. A new or moved calendar event that collides with the plan gets the Conflict mark like any other item.
* **Tasks are plan items too.** "Send Westview the pickup note" or "Call Brightwater and ask for Dana Whitfield" is an item owned by the parent, with no status, that she ticks off herself.

### **Standing decisions**

1. **Nothing is ever shown as settled.** The coach never calls a plan set, covered, sorted, done or final, and nothing else on screen does either. Accepted means a person said yes, and the item can still change.
2. **Owner, status and marks are separate.** The owner says who is responsible, the status says where a request or suggestion stands, and the marks say what has changed or collides. An item can carry one of each.
3. **The parent's own items show "You" and no status,** because there is nobody to wait on.

### **Open conditions**

1. **How conflicts are detected in the real product** beyond the rule above, including whether a child at home with another adult counts as covered, needs defining before launch. The prototype does not depend on it.

# 5. Today

Today is the home tab, and it shows the logistics for the current day and nothing else. It works like a departures board. It borrows from transit boards, where the next departure and its status can be read at a glance from across a room, and from subway maps, where each child's day reads as a line of stops and a handoff between adults works like a change of trains.

The wireframes are 01 (C-03, Monday morning), 02b (C-06b, Wednesday afternoon, to be drawn), 01b (Monday afternoon, wireframe only), 02 (C-06, Wednesday), 03 (C-07, Tonight) and onboarding-15 (her first board).

## **Blocks**

| Block | Shows | Words |
| ----- | ----- | ----- |
| Header | The day of the week and the parent's avatar on one row, with a rule below it, then the phase of the day with its icon. A Coach Alert sits above them when one is showing. | Fixtures section 4, "Today" |
| Next departure | The next departure at the top, with a countdown, and a going with list headed with the child's name. Further departures follow. | Each moment |
| The day | One row per person through the day, children first, then the parent as "You", then the other adults. Columns are Morning, School, After school and Evening. Children appear as name chips and adults as outlined avatars, and "You" is plain text. | Each moment |
| Coach card | The single most useful open decision, which can concern any day. | Each moment |
| Coach Alert | One line naming a conflict the coach is holding, such as "Coach Alert: Conflict found with Edward". | Fixtures section 4 |
| MVP Recommends | At most one article card, only when something in the week makes it useful. | Each moment |
| Add | The capture button, floating above the tab bar. | Fixtures section 4 |

## **Phase of the day**

| Phase | Icon | Runs | Board |
| ----- | ----- | ----- | ----- |
| This morning | `phase-morning` | Midnight to noon | Departures, the day's rows, the coach card |
| This afternoon | `phase-afternoon` | Noon until the board turns to tomorrow | Departures, the day's rows with the morning shown as done, the coach card |
| Tonight | `phase-tonight` | From 7:00 pm, or after the last activity scheduled past 7:00 pm | "Ready tonight", then "Tomorrow starts" with tomorrow's first departures and their going with lists, then the coach card |

The word always appears with its icon, and the header is no taller than a plain title, so the next departure stays near the top. Tonight shows the day it is, not tomorrow. In the prototype the phase follows the moment's demo time, never the device clock.

## **Departure**

| Field | Type | Description |
| ----- | ----- | ----- |
| Time | demo time | When they leave. |
| Line | string | Who goes where with whom, such as "Alexis leaves with the Parks" or "You take Mallory to Westview". |
| Countdown | derived | "in 15 min", or "in 1 hr 5 min" for anything an hour or more away. Shown only for today's departures. |
| Child | reference | Shown as a name chip (`ChildChip`). |
| Letter day | string | The school's letter, such as "E day", when the child's school has a rotation. |
| Going with | checklist | Headed "Going with" and the child's name. Ticked off at the door. |

## **Behavior notes**

* **The next departure leads.** When a departure's time passes, it leaves the top of the board and the next one moves up. At 7:40 am on Monday, Alexis's departure leaves and Mallory's moves up.
* **Going with lists draw on standing rules.** A rotation rule puts "Sneakers, it's a motor skills day" on Mallory's list on B, D and F days, and a library rule puts "Library book" on A days. The items come from the child's page and the school card (§11).
* **Anything that has changed today is marked in place** on the row it affects.
* **Items from her calendar carry the calendar mark,** the `calendar-mark` icon, on their row, so she can tell what MVP read from her calendar from what MVP made. In C-06b, Alexis's dance at Studio Ten carries it.
* **A new calendar event that runs into the plan becomes the coach card.** The card names the day, says the event is new on her calendar, and offers ways to resolve it, as in C-06b.
* **The coach card is the one exception to showing only today.** If it were limited to today, a change to Thursday that arrives on Wednesday would stay invisible until Thursday morning, which is too late to act on. The card names the day it concerns, such as "Thursday", and its link names the same day, such as "Open Thursday in the game plan". A card that concerns no particular day, such as the therapist news in C-05, has no day label and no link, and tapping it opens the full message on the Coach tab.
* **The coach card can hold options.** In C-06 it quotes Edward's answer and carries three options with the Recommended tag on the first (§6).
* **A reply handed to another app makes her the owner.** When the coach card's reply goes to WhatsApp, Wednesday's carpool shows her as the owner with no status.
* **The MVP Recommends card** carries a label line in the meta style, such as "Recommended · School · 3 min read", the title, and a single reason line beginning "Because", such as "Because Cedar Grove conferences are this week." It never carries the coach card's fill, outline or dot.
* **Her first board** after onboarding is Tonight, with a shortened "Tomorrow starts" line, because the coach knows Mallory's letter day but not yet her start time, and a coach card asking for it. Her answer goes onto the Westview card with the source "From you".

## **Coach card and Coach Alert**

The coach card is marked by the coach's color and by shape, so it reads in grayscale. The treatment is drawn in Figma frame 2486:1078 and closes T3.

| Part | Treatment |
| ----- | ----- |
| Card | Filled with `--color-coach-bg` and outlined in `--color-coach`. |
| Label | A solid `--color-coach` dot, then "Coach · for" and the day it concerns, such as "Coach · for Thursday", in `meta-strong` and `--color-coach-ink`. A card that concerns no particular day reads "Coach". |
| Text | What the coach says, in `voice` (Fraunces) and `--color-ink-primary`. |
| Actions | One primary button, filled with `--color-interactive-default`, with an icon and a label in `body-strong`, then a "More options" link in `body-strong` and `--color-interactive-default`, underlined. |
| Coach Alert | A pill at the top of Today, above the day line, filled with `--color-coach-bg` and with no outline. It holds a solid `--color-coach` dot and one line in `meta-strong` and `--color-coach-ink`, such as "Coach Alert: Conflict found with Edward". |

The dot is the coach's mark wherever the coach appears, as filled chips are for children and outlines are for adults. Nothing else on Today uses the coach's colors.

## **At wider screens**

From tablet width up, the departures and the coach card share the top row, and the rows open into a full-day grid with time running left to right from 7 am to 6 pm. School and activities are bars, a handoff is a stop, riding along is a dashed bar, and a line marks now. The Recommends card sits below the grid. Tonight has no grid at wider sizes, because tomorrow's full day belongs to the game plan, so "Ready tonight" and the coach card share the top row with tomorrow's first departures below.

### **Standing decisions**

1. **Today shows today.** Anything later in the week lives in the game plan. The only exception is the coach card.
2. **There is one coach card at a time,** and it holds the single most useful open decision.
3. **Tonight turns to preparation.** Most of the work of getting children out the door happens the night before, so in the evening the board shows what has to be ready tonight and how tomorrow starts, and leaves the rest of tomorrow to the game plan.
4. **The day line is never a date.** It shows the day of the week only, in the prototype. A design frame that shows a date, such as "Tuesday, Oct. 13", is read as the day of the week only.
5. **Every board uses the same four columns,** including Evening.

### **Open conditions**

1. **Following the family rather than the clock,** such as ending the morning when the last child is dropped off, is parked as F15.
2. **What "More options" opens, and when the Coach Alert appears and goes away, are not yet specified** (T13).

# 6. Coach

The Coach tab is where the parent talks to the coach. Captures land here with the coach's read-back, decisions come back as options, and her parenting questions get answers that fit her family. What makes the coach useful is that it already knows the family. When Charlotte asks about picture day morning, the answer is about Mallory, who is six, at Westview, with a green dress already chosen, leaving at 7:40.

The wireframes are 01a (the newsletter read-back in C-01), 04 (the voice note and the three options in C-01) and 08 (the question in C-08).

## **Layout**

The conversation runs newest at the bottom, with the capture bar below it: camera, attach and microphone, with the placeholder "Talk, type or add a photo". While the field holds typed text, the microphone becomes an arrow labeled "Give this to the coach". There is no Send on the bar, because Send means sending something to another person. The parent's messages and everything the coach says in the conversation are set in Inter, in one style still to be chosen (K5). Fraunces is kept for the coach on the Today coach card and in onboarding.

## **Message**

| Field | Type | Description |
| ----- | ----- | ----- |
| From | enum | Parent or Coach. |
| Kind | enum | For the parent: Capture, Voice note or Question. For the coach: Read-back, Options, Plan, Answer or Taught line. |
| Text | string | What was said. A voice note shows its label, such as "Voice note · 0:20", with the transcript. |
| Source | source reference | Read-backs only. Shown as the source link (§7). |
| Question | string | Read-backs only, when the coach has one. At most one per capture. |
| Options | array | Options messages only (below). |
| Based on | strings | Answers only. The family details the answer used. |
| Article | reference | Answers only, when she asked for ideas. One article. |
| Actions | array | Buttons under the message, each with its label from the fixtures. |

## **Options**

When something needs a decision, the coach names the day that needs her, says what collides, offers two or three ways it could go, recommends one and says why.

| Field | Type | Description |
| ----- | ----- | ----- |
| Title | string | Set bold, such as "Edward takes both pickups." |
| Text | string | What happens under this option, with places and times. |
| Recommended | boolean | True on exactly one option, shown with the tag "Recommended". |
| Result | reference | The plan state and the coach's follow-up when she chooses it. |

## **Actions**

| Action | Example | What it does |
| ----- | ----- | ----- |
| Add to the plan | Newsletter read-back | Moves the suggested items into the plan. |
| Show the original | "Show the newsletter", "Show the email" | Opens the captured document. |
| Open a card | "Open the Westview card" | Opens the school card the read-back changed. |
| Ask a person | "Ask Edward", "Ask Min-jung" | Opens a request drafted in her voice (§9). |
| Note to an organization | "Note to Westview" | Opens a drafted message handed to another app (§9). |
| Ask my village | C-05 coach card | Opens a new village post drafted in her voice (§10). |
| Remind me | "Remind me Monday" | Adds a reminder to the plan for that day. |
| Read | Attached article | Opens the MVP Recommends article (§12). |

## **Behavior notes**

* **Read-backs say what the coach took and what it left out.** The newsletter read-back keeps the two things that apply to Alexis and says the fifth-grade trip and the rest of the newsletter are not for her. The source link and the buttons sit beneath it.
* **The coach handles the rest of the week without comment and names the one day that needs her.** After Charlotte's voice note it matches what she said to the messages it already has and spends its words on Thursday.
* **She may choose against the recommendation.** Choosing another option is normal and leads to a plan as complete as the recommended one. In C-06 Charlotte chooses Min-jung over the 12:15 class because she knows something the coach does not.
* **The coach is plain about what is not yet true.** After she chooses, it lays out the day and says that none of it holds until the person asked has answered.
* **Every answer shows what it was based on,** under the heading "Based on", listing the family details used, such as "Mallory, 6, kindergarten at Westview · Picture day on Friday".
* **Support questions get support.** When a question is about how she is holding up, the first sentence acknowledges it plainly, without sympathy phrases, before the answer gets practical.
* **The coach knows its limits.** It does not plan money, find or recommend service providers or sitters, buy anything, or advise on custody, legal or medical questions. When a question needs a doctor, a therapist or a teacher, it says so and names the person from her inner circle where she has one. When names or local knowledge are needed, it points her to her village, as in C-05.
* **The coach never reads village groups.** It knows what she has entered about each person, such as which class their children are in.

### **Standing decisions**

1. **One coach, one conversation.** Captures, decisions and questions share the Coach tab.
2. **The coach offers ways, not one answer.** Every planning decision comes back as two or three options with one recommended and a reason, and a decline brings the coach back with options.
3. **Answers use the family and show it.** The Based on line is required on every answer.
4. **The coach is an agent, a helper and one part of her support system.** It is not a therapist, a doctor or a lawyer.
5. **Coach answers carry no product links.** Links reach the parent only through staff-written articles.

### **Open conditions**

1. **The emotional register needs Heather's review** for every household's support answer before it is built.
2. **The coach lines rewritten in fixtures 3.0 to 3.6 need Heather's read for tone.**

# 7. Capture

Capture is how things get into MVP. If the only way in were opening the app and pasting into the coach, the parent would still be doing the sorting herself, so MVP meets her where each thing already is, and everything she gives it goes to the coach.

The wireframes are 01a (a forwarded newsletter), 01c (sharing from WhatsApp), 04 (a voice note), onboarding-04 to onboarding-08 (the first capture), onboarding-16 (entry points taught when useful), onboarding-17 (failure states and the Add sheet) and 12d (a capture filed on a school card).

## **Entry points**

| Entry point | What she does | What it is for |
| ----- | ----- | ----- |
| The share menu | She presses and holds a message, email or photo in any app, taps Share and chooses MVP. MVP shows "Sent to the coach" and returns her to the Coach tab. | Messages from WhatsApp, WeChat, Telegram, Messages and Mail. Those apps do not let other apps read their chats, and MVP would not read them if they did, because nothing reaches the coach unless she sends it. |
| The forwarding address | She forwards an email to her private MVP address, or sets her email to forward a sender automatically. | School email, the largest source by volume. Once forwarding is set up, newsletters arrive without her doing anything. |
| The camera | She photographs a handout, a calendar on the fridge or a permission slip. | Paper that comes home from school. |
| Her voice | She taps the microphone and talks. | The stream of thought, such as a voice note in traffic that mixes three days, two children and a correction. |

## **What the coach does with a capture**

| Kind | Example | What the coach does |
| ----- | ----- | ----- |
| A one-off event | The Cedar Grove newsletter | Keeps only what applies to her children, using the grades it knows, and leaves out the rest. |
| A recurring rule | Westview's rotation calendar | Turns the rule into standing items on the going with lists, such as "Library book" on library days and "Sneakers" on motor skills days. |
| Reference | Westview's family contact list, or the pickup change email | Files it on the school card and uses it later, such as addressing a note to the right office (§11). |

## **Capture record**

| Field | Type | Description |
| ----- | ----- | ----- |
| Entry point | enum | Share menu, Forwarding, Camera, Voice, Typed, Card add, or Calendar for an event read from her calendar. |
| From | string | The sender or document as named in the source link, such as "the Cedar Grove newsletter". |
| Received | demo time | When it reached MVP. |
| Original | reference | The prepared document, image or transcript shown by "Show the newsletter". |
| Kinds | set | One-off event, Recurring rule, Reference. A capture can hold more than one. |
| Read-back | message reference | The coach's read-back (§6). |
| Produces | references | The plan items, rules and card facts it created or changed. |

## **Behavior notes**

* **Every capture gets a short read-back** that says what the coach took, and the coach asks at most one question when something is unclear.
* **Nothing enters the plan unseen.** New items arrive as Suggested, and a change to an item already in the plan shows the Changed mark.
* **Every captured item keeps a source link,** such as "From the Cedar Grove newsletter · Sunday", so she can check the original. A fact she told the coach herself shows "From you". The one thing a parent cannot forgive is a date the coach made up.
* **When a new document contradicts an old one** in a way the coach cannot resolve, such as two different end times, it asks which is right instead of choosing.
* **Entry points are taught when they become useful.** The first time she pastes a WhatsApp message into the coach, it tells her she can share from WhatsApp directly. After she forwards her first newsletter, it offers to set up automatic forwarding for that sender. The lines are in fixtures "Taught when useful".
* **A capture that cannot be read, and a wait longer than twenty seconds,** each have their own screen with a way to try again (§3).

## **Prototype**

The prototype is a web app, which cannot fully appear in an iPhone's share menu, and it reads no live photos or email. Sharing, forwarding and photographing are scripted moments with prepared results. Sharing is shown as a staged sequence: the WhatsApp message, the share sheet with MVP in it, "Sent to the coach", and the Coach tab. The voice note plays a prepared recording with its transcript. Capturing on the Add sheet or the capture bar outside a scripted moment shows the prepared result for that moment, or nothing when the moment has none.

## **Her calendar**

Most parents already keep one main calendar, and much of the family's week is already in it. MVP connects to it once, on setup screen 0q, so she never gives MVP anything twice. The prototype covers Google Calendar, Apple Calendar and Outlook.

| Behavior | Rule |
| ----- | ----- |
| Reading | MVP reads her calendar and never adds, changes or deletes anything in it. |
| Sorting | The coach reads each event and works out whom it concerns. The children's activities, appointments and school events come in on the child's row. Her own appointments come in on her row, because they decide when she can drive. Events with no time, such as birthdays and holidays, stay on the calendar. When the coach cannot tell whom an event concerns, it asks, still one question at a time. |
| Owner and status | Calendar items come in with "You" as owner and no status. She put them on her calendar herself, so they are not suggestions, and approving each one would undo the point of connecting. |
| Marking | Each calendar item carries the calendar mark on Today and in the game plan, and the source link "From your Google Calendar", or the calendar she connected. |
| Keeping in step | When she adds, moves or deletes an event, the plan follows. A change she makes herself is not marked Changed. When a new or moved event runs into the plan, both items show "Conflicts with", and the coach card offers ways to resolve it. |
| Editing | A calendar item is moved or deleted in her calendar. In MVP she can add a note or put someone's name against it. Dragging it in the game plan shows "Change this in Google Calendar." |
| Duplicates | When a capture and a calendar event describe the same thing, the coach keeps one item with both source links. |
| Privacy | Nobody else sees her calendar. People see only what she sends them. |

In the prototype, the connect screen and the permission screen are staged, Charlotte's calendar events are written into the seed, and the checkup in C-06b arrives as a scripted step. The real product reads Google Calendar and Outlook through their own accounts, and reads Apple Calendar through the native app on an iPhone.

### **Standing decisions**

1. **There are four entry points and one connection.** Each entry point meets the parent where a kind of message already is, and her calendar is connected once rather than used each time. Connecting her email account directly is a later feature (F4), because reading a whole inbox asks for much more trust than sharing one email at a time.
2. **Nothing reaches the coach unless she sends it or connects it.** MVP never reads her messaging apps or her inbox. Her calendar is the one source she connects, and she can disconnect it in Settings.
3. **MVP reads her calendar and never writes to it.** Her calendar stays hers. Writing MVP's own plan items back to it is parked as F18.
4. **Source links are required** on every captured item, every calendar item and every school card fact.
5. **One capture is enough for onboarding.** Everything else is taught when it becomes useful.

### **Open conditions**

1. **The share menu needs a platform decision for the real product.** A web app cannot register as a share target on iOS. The real product needs a native share extension or an installed web app on platforms that allow it.
2. **How the coach decides that a captured fact is reference for a card rather than an event for the game plan** needs a rule before launch (§11).
3. **Apple Calendar needs the native app.** A web app cannot read an iPhone's calendar, so Apple Calendar is staged in the prototype, as the share menu is.
4. **How quickly the plan follows her calendar** needs a number before launch, along with what happens when she deletes an event that someone has already been asked about.
5. **Edward's own calendar is out of scope.** Edward has MVP and could connect his own calendar. The prototype does not show it (F19).

# 8. Game plan

The game plan shows the whole week, from Monday to Sunday, and every item in it, including routine ones such as the daily school runs. It is where anything later in the week lives, together with every change and conflict, and where the parent decides. The coach suggests, and the game plan is hers.

The wireframes are 06 (C-04, Monday evening) and 06b (the conflict in C-01).

## **Layout**

| Block | Shows |
| ----- | ----- |
| This week's changes | Every item for the rest of the week that is suggested, asked, declined, changed, owned by nobody or in conflict, one entry per item, each with its day, title and status or mark. Tapping an entry opens its day. |
| This week | Each day from Monday to Sunday, with every item in time order showing its time, title, owner, and status or marks when it has them. Days already past are dimmed. |
| Next week | Shown when an item has been moved into it, such as the second tutoring session. |

Headings read "This week's changes", "This week" and "Next week".

## **Behavior notes**

* **Routine items are visually quieter** than items that happen only this week, so the week stays readable. A routine item that carries a status, a Changed mark or a conflict is drawn at full weight until it clears.
* **One entry per item in This week's changes,** so an item in conflict appears once with its conflict mark.
* **Opening an item clears its Changed mark.**
* **Notes show under the item** at full weight, even on a quiet routine item.
* **Calendar items carry the calendar mark,** so the week shows what came from her calendar.

## **Working the plan directly**

The parent works the game plan without the coach.

| Action | How | What happens |
| ----- | ----- | ----- |
| Move an item | Drag it to another time or day, including into next week | The item moves. A suggested item she moves stays Suggested at its new place. A calendar item does not move, and the game plan shows "Change this in Google Calendar." |
| Add a note | Tap the item and type | The note shows under the item. |
| Put someone's name against it | Tap the item and choose a person | Sends that person a request (§9), and the item shows "Asked" and their name. |
| Tick off a task | Tap its checkbox | The task shows as done. |

At wider sizes, next week sits under this week in the same seven columns, so moving an item to the following Tuesday is a straight drag down its own column.

### **Standing decisions**

1. **The game plan holds every item,** including routine ones, because the parent needs to see the whole week to change it.
2. **This week's changes is where the rest of the week asks for her.** Nothing later in the week appears on Today except through the coach card.
3. **Direct edits are hers.** A change she makes herself is never flagged back to her, and nothing she does here goes through the coach.
4. **Dinner appears only when the schedule forces it to move.** There is no dinner row and no shopping list in the prototype (F16).

# 9. Requests

Part of the plan often belongs to someone else. A request is that part, sent to a person and asking them to take it on. The coach drafts it, the parent changes whatever she wants, and she sends it herself.

The wireframes are 05 (C-02 and C-06), 05b (the handoff to Edward), 05c (answering), 1e (the reply handed to WhatsApp) and 02b (the text to Ms. Reyes).

## **How a request reaches someone**

| Recipient | How it arrives | How the answer comes back |
| ----- | ----- | ----- |
| Someone who has MVP, such as Edward or Min-jung | As a request card in their own MVP, with a notification on their phone. They see only the requests she sends them and nothing else of her plan. | They answer each item with "I've got it" or "I can't do this", and each answer appears as a status on her plan. |
| Someone without MVP, such as a tutor | As a text message to the mobile number she entered, reading "Charlotte sent you a request through MVP. You can answer here:" and a link to a single web page with the request and the same buttons on each item. No account is needed. | The same two buttons update her plan in the same way. |
| A group or organization outside MVP, such as a parents' WhatsApp group or a school office | MVP hands the drafted text to the app she chooses, and she sends it from there. | Nothing comes back. Sending it becomes a task on her own list, which she ticks off herself. |

## **Request**

| Field | Type | Description |
| ----- | ----- | ----- |
| To | person or organization | Shown as "To Edward", or for an organization its name and the contact used, such as "To Westview Kindergarten, pickup changes · pickups@westviewk.org". |
| Items | references | The plan items it covers. Each item is answered on its own. |
| Answers | array | One per item: the answer, an optional note, and when it was given. An answer can be changed. |
| Text | string | Written as the parent, in the first person and her own plain voice. Editable before sending. |
| Channel | enum | In MVP, Text with link, or Handoff. Set by the recipient, not chosen by the parent. |
| App | string | Handoff only. The app it goes to, such as WhatsApp or Mail. |
| Sent | demo time | When she sent it. Shown to the recipient as "Request from Charlotte · 6:40 am". |
| State | enum | Draft, Sent, Accepted, Declined. Drives the item statuses in §4. |

## **The draft screen**

The draft shows the address line, the text in an editable field, a preview of each item with the recipient's two buttons under "Edward answers each item with" (in-MVP and text-link requests only), the line "You send this. MVP never sends anything for you.", and the button: Send, or "Send from WhatsApp", "Send from Mail" or the app that applies.

## **The recipient's view**

Edward's own MVP shows his avatar and the phase title. His Today holds only the items he owns and the requests Charlotte sends him, with the request card at the top. The web page for someone without MVP shows the same heading, text and buttons, with "You don't need MVP to answer." under the buttons, and no tabs.

## **Behavior notes**

* **Each item is answered on its own.** Edward can take one pickup and decline the other. The card lists each item with its own "I've got it" and "I can't do this", and a note field reading "Add a note for Charlotte".
* **A note never edits her plan.** A note with "I can't do this" reopens the item, and the coach card turns it into options, as in C-06. A note with "I've got it" shows under the item with the Changed mark until she opens it.
* **Answers can be changed.** After answering, each item shows the answer and a Change link, under the line "Charlotte can see your answers. If anything changes, change your answer here."
* **She hears about every answer.** Each answer and each changed answer arrives as a notification, such as "Edward: yes to both pickups on Thursday." or "Edward changed his answer for Thursday.", and as a status on the item.
* **No read receipts.** Nobody can see whether the other person has opened a request.
* **Sending marks the items.** Once sent, the items show "Asked" and the person's name. The answer changes them to "Edward: yes" or "Edward can't".
* **An accepted request can reopen.** In C-06 Edward answers again that he can't collect Mallory, which reopens her pickup with options on the coach card while Alexis's stays "Edward: yes".
* **A decline always leads somewhere.** The coach card returns with options. When Edward can't, it offers three new ways Thursday could go, and when Min-jung can't, it offers the two Charlotte did not take, one line each.
* **Every handoff leaves a task.** MVP cannot see whether a message handed to another app was sent, so each handoff leaves a task on her list until she ticks it off, such as "Send Westview the pickup note" in C-06 and "Reply to the parents' group" in C-03. The plan itself follows her choice in MVP, not the sending.
* **The address for an organization comes from its card.** The Westview note goes to the pickup changes contact on the Westview card, which the Westview email updated in C-05b.
* **In the prototype, the recipient's view is reached through the demo controls** (§15), and answers are scripted at their times in the fixtures.

### **Standing decisions**

1. **Nothing goes to another person unless she sends it herself.** The coach drafts and she sends.
2. **Every message to another person is in her voice,** because the person reading it is hearing from her.
3. **Recipients see only what she sends them.** Nobody sees her plan, her coach conversations or anything else she has not sent.
4. **Coverage is never shown as settled.** Asked is not yes, and yes can still change.
5. **Answers are per item, and notes never edit the plan.** "Yes with changes" is not a status. A changed answer or a note reaches her, and she decides.
6. **No read receipts.** Seeing whether someone has opened a request would put pressure on the people she relies on.

### **Open conditions**

1. **What someone else's MVP shows beyond requests** needs defining for the real product. This version assumes Edward's Today holds only the items he owns and the requests Charlotte sends him.
2. **Marcus's household will show recipient-scoped views across several people.** Those views are specified when his fixtures are rewritten.

# 10. Team

Parents take their questions and their logistics to two different groups of people, and MVP keeps them apart because they do different jobs. Both live on the Team tab.

The wireframes are 10 (the lists) and 07 (C-05, asking the village).

## **Sections**

| Section | Who | Shown with |
| ----- | ----- | ----- |
| Inner circle | The people she trusts with her children and her private life: her partner, grandparents, close friends, a nanny, and the family's own doctors, therapists and tutors. | Name, "On MVP" when they have it, and a line written to her, such as "Your husband" or "Pediatrician, Northside Pediatrics". |
| Village | Everyone else who shares her children's week for a few hours at a time: school parents, carpool families, coaches and team parents. | Name, "On MVP", and a line such as "Sophie and Hana's mom · Monday carpool". |
| Village groups | Groups she creates inside MVP and invites village members to, such as Cedar Grove parents. | Name and the number of members, such as "8 members". |

Buttons at the foot of the tab read "Add someone", which puts a person in either list, and "New village group".

## **Person**

| Field | Type | Description |
| ----- | ----- | ----- |
| Name | string | As she entered it. |
| Group | enum | Inner circle or Village. |
| Line | string | The line shown under the name, written to her. |
| Has MVP | boolean | Decides how a request reaches them (§9). |
| Mobile number | string | For a text-link request, when they don't have MVP. |
| What she has told the coach | strings | Such as which class their children are in. The coach uses this, and only this. |

## **Village group and post**

| Field | Type | Description |
| ----- | ----- | ----- |
| Group name | string | Such as "Cedar Grove parents". |
| Members | references | Village members, each of whom has MVP. |
| Post author | reference | Shown as "You" on her own posts. |
| Post text | string | Text only. |
| Posted | demo time | Shown as a fixed time, such as "12:20 pm", never as relative time. |
| Replies | array | Each with an author, text and fixed time, listed newest first. |

## **Behavior notes**

* **Asking the village starts from the coach.** "Ask my village" on a coach card opens a new post headed "New post", with the audience choice "Inner circle | Village", the group it goes to, a draft in her own words, the note "Only the people in this group see this. The coach doesn't read it.", and a Post button. She can change any of it before it goes.
* **Replies arrive on a script** at the times in the fixtures, and the screen is shown as she sees it at a fixed time, such as 5:00 pm on Tuesday in C-05.
* **What she does with replies is hers.** In C-05 she reads Min-jung's and Jenna's replies and adds "Call Brightwater and ask for Dana Whitfield" to Wednesday herself.
* **Groups outside MVP stay where they are.** A parents' WhatsApp group stays in WhatsApp. She shares messages from it into MVP when she wants the coach to see them, and she replies to it from WhatsApp (§9).
* **Adding a person or a group** opens a picker with a short list of made-up contacts in the prototype. Invitations are not sent.

### **Standing decisions**

1. **Inner circle and village are separate lists on one tab,** because a parent hands parts of the plan to her inner circle and takes local questions to her village.
2. **Village groups live inside MVP.** Only members see a group's posts, and members need MVP to take part.
3. **The coach never reads village groups.** It drafts a post for her, and it does not read, summarize or reply to anything posted. Members expect to be talking to her, and that is why the village is worth having.
4. **The village is where requests the product declines can land.** The coach does not find or recommend providers, so when a question needs names, such as a new therapist, it sends her to her village.
5. **Groups are invite only.** There are no public groups, no search for other parents and no suggested members.
6. **Posts are text only,** which also keeps photographs of children out of the product.

### **Open conditions**

1. **Children's names in posts.** Parents will name their children in a private group. Whether the product should do anything about that is a question for Heather before launch, not for the prototype.
2. **What posting to the Inner circle means.** The composer offers Inner circle or Village, but only village groups are defined. Whether the inner circle has groups, or a post to it goes to everyone in it, needs a decision before any household posts to its inner circle.

# 11. Kids and school cards

The Kids tab holds a page for each child and a card for each school. A school card holds what a parent otherwise keeps in a drawer of handouts and a folder of emails, and the coach uses it when a message needs to go to the school.

The wireframes are 12a (the Kids tab), 12b (Mallory's page), 12c and 12d (the Westview card, before and after C-05b) and 12e (the Cedar Grove card).

## **The tab**

| Section | Each row shows |
| ----- | ----- |
| Kids | The child's name, with the grade and school beneath it, such as "Alexis" over "Fourth grade · Cedar Grove". |
| Schools | The school's full name, with the children who attend it beneath it, and the Changed mark when anything on its card has changed. |

An "Add a school" button sits at the foot of the tab for parents who would rather type a school in.

## **Child page**

| Section | Shows |
| ----- | ----- |
| Header | The child's name, age and grade, such as "Mallory · 6 · Kindergarten", with a monogram. |
| School | The school and teacher, linking to the school's card. |
| Every week | The child's recurring activities with place, day and time. Activities from her calendar carry the calendar mark. |
| Going with, by day | The items that regularly go with the child, such as "Sneakers on B, D and F days". |

## **School card**

| Section | Holds | How it changes during the year |
| ----- | ----- | ----- |
| Hours | Start and end times, early dismissal days, before- and after-school care | For conferences, testing weeks and a new term |
| Contacts | Who to contact for what, organized by reason, such as absences, pickup changes, learning support and the counselor | A new teacher or office address |
| Rules | The pickup list policy, dress days, lunch, and what each letter day means | Occasionally, often announced in a newsletter |
| Calendar | Term dates, holidays, conferences and school-wide events | In pieces all year |
| Rotation | The letter for each school day this week | A new sheet each month |
| Documents | The original photos, PDFs and emails the card was built from | With every capture |
| Earlier version | What a changed fact said before, with the day it stopped applying | When a fact changes |

The card is headed with the school's name and carries an "Add to this card" button, which opens capture already addressed to that school.

## **Card fact**

| Field | Type | Description |
| ----- | ----- | ----- |
| Section | enum | One of the sections above. |
| Text | string | As shown on the card. |
| Source | source reference | Shown when she opens the fact, such as "From the family contact list · photo", or "From you". |
| Changed | boolean | True until she opens it. |
| History | array | Earlier versions, each with its text and when it stopped applying. |

## **Behavior notes**

* **The card opens from the Kids tab and from the school's name anywhere it appears,** such as "Westview" on Mallory's row on Today.
* **Siblings at the same school share one card,** so an update reaches both.
* **Source links appear when she opens a fact,** not under every line.
* **Sections with nothing in them are hidden.**
* **Cards are kept current through capture.** When a capture contains reference, the coach files it on the right card and says so in its read-back, while events go to the game plan and rules become standing items. In C-05b the Westview email changes the pickup contact and rule, both carry the Changed mark until she has seen them, and the earlier version stays in the card's history.
* **Cards start from the first capture.** The first card is created from whatever she captures first. When the coach does not know a child's school, or a fact such as a start time, it asks on Today.
* **The coach asks at predictable moments.** Near the end of each month it asks for the next rotation sheet, after a long break it asks whether the hours have changed, and in late summer it asks for the new year's handouts, keeping the contacts but marking the teacher and grade for a check. None of these falls in the demo week.

### **Standing decisions**

1. **Kids is a tab.** Parents look at their children's schools every week.
2. **No separate flow for adding school information.** The four entry points already cover it, and each card has its own Add.
3. **A change from a school is never a silent edit.** It is marked, and the old version is kept.
4. **The coach asks instead of choosing** when a new document contradicts an old one in a way it cannot resolve.
5. **The prototype covers schools only.** Cards for studios, teams and clinics are parked as F14.

### **Open conditions**

1. **How long a card's history is kept** needs defining before launch.
2. **The rule for reference versus event** needs defining before launch: how the coach decides that a captured fact belongs on a card rather than in the game plan.
3. **The coach's line asking for next month's rotation sheet is not written,** because it falls outside the demo week.

# 12. MVP Recommends

MVP Recommends is MVP's own editorial content: short, practical articles written by MVP staff for parents. There is no tab. An article reaches the parent in one of two ways: as a card on Today, chosen because of something in her week, or attached to a coach answer when she asks for ideas.

The wireframes are 09 (the article view from C-08), with the Today card on 01 and 02.

## **Card**

| Field | Type | Description |
| ----- | ----- | ----- |
| Label line | derived | "Recommended", the topic and the reading time, such as "Recommended · School · 3 min read", in the meta style. Never in capitals. |
| Title | string | Set in `voice-strong`, in Fraunces. |
| Reason | string | Today only. A single sentence beginning "Because", such as "Because Cedar Grove conferences are this week." |

## **Article**

| Field | Type | Description |
| ----- | ----- | ----- |
| Label line and title | as above | Shown at the top. |
| Byline | string | "By" followed by the writer's name and "MVP staff", such as "By Sam Adeyemi, MVP staff". The names are placeholders until real staff writers are named. |
| Illustration | image | Optional spot illustration, drawn by a person. |
| Body | sections | The article text from the fixtures, set in sans because it is written by a person, not the coach. |
| Links | array | Optional links to where a recommended product is sold. Never sponsored and never affiliate. |

The article view has a Back link. Topics in use are School and Mornings, and earlier topics such as We tried it, Care, Food, Gear, Weekends and Camps remain available to the other households.

## **Behavior notes**

* **Every card on Today has a reason,** and the card appears only while the reason holds. The conference article appears on Today from Monday to Thursday, because Cedar Grove conferences fall on Thursday and Friday.
* **At most one card on Today,** below the plan and the coach card.
* **An answer carries at most one article.**
* **Articles never carry the coach card's fill, outline or dot.**

### **Standing decisions**

1. **MVP staff write every article, and none is generated.** Each carries its writer's name.
2. **Articles follow the coach's rules only where they overlap:** no em-dashes and no filler. They are otherwise written in the writer's own voice.
3. **Links are editorial, never paid,** in the manner of Wirecutter.
4. **Camps are covered as advice, not listings.**
5. **Some articles carry spot illustrations** drawn by people, and an article without one is complete.

### **Open conditions**

1. **Six articles still need writing,** two for each of the other three households, and who writes them is not decided. Charlotte's two are written in full in the fixtures.
2. **The library and sharing an article** to the village or another adult, which v0.6 specified, have no wireframe or copy in fixtures 3.6. They are not built for Charlotte's household, and they come back only when the fixtures give them words.

# 13. Settings

Settings opens from the parent's avatar at the top right of every tab on a phone, and from the bottom of the sidebar at wider sizes. It holds Your account, Your calendar, Notifications, Your forwarding address, Language at home and Privacy. Your calendar shows the connected calendar and lets her disconnect it or connect one later. Settings is not drawn for the demo, and in the prototype the avatar opens a placeholder page listing those six headings with a Back link.

The child profile that v0.6 kept in Settings is now the child page on the Kids tab (§11), and the people who help are on Team (§10).

### **Standing decisions**

1. **Settings sits behind the avatar,** because parents visit it rarely.
2. **No photographs of children anywhere.** Children appear as monograms, the child's initial in the display face, except in plan rows, where they appear as name chips (`ChildChip`).

# 14. Coach voice

Every line the coach writes follows the rules below. Codex should treat any violation as a bug.

## **Rules for every line**

**The coach always** writes in the present tense, addresses the parent directly, and refers to children by name.

**The coach never** opens with a filler such as "Okay" or "Alright," praises the parent, or describes what it has just done. It never uses em-dashes, sentence fragments, sets of three parallel phrases, or planner words such as window, slot, block, buffer or lane. It never uses a pronoun in place of a child's name. Nothing it writes should read as though a machine wrote it.

## **Plans**

Plans tell the parent what she needs to do, with specific places, the time she needs to be ready, and what to bring. This is the standard every plan line is measured against:

> You need to be at the Northgate Aquatic Center with Lily, ready to go by 4:15 on Tuesday. Benjamin has soccer at Cedar Field at 9am Saturday. Bring snacks and warm clothes, it'll be chilly. That leaves you Saturday afternoon to shop for the party gift.

## **Answers**

Answers can explain, because a question deserves a reason as well as a suggestion. An answer starts with the most useful thing, gives her something specific to try, and stays to four or five sentences. When the question is about how she is coping, the first sentence acknowledges that plainly, without sympathy language like "I hear you". The coach's answer in C-08 is the standard for answers.

## **Messages to other people**

Requests, notes to organizations and village posts are written as the parent, in the first person, in plain everyday language. They should not sound like the coach, because the person reading them is hearing from her.

## **Articles and interface copy**

MVP Recommends articles are written by staff in their own voice and follow only the rules against em-dashes and filler. Labels, headings and buttons are interface text and follow plain language rather than the coach's rules.

### **Standing decisions**

1. **`npm run voicecheck` scans every coach string in the seed files** for em-dashes, the banned openers and the banned planner words, and scans articles for em-dashes. It cannot judge tone, so it does not replace reading the lines.
2. **`voicecheck` also enforces the no-dates rule.** It fails on any month name, any four-digit year and any calendar date in the seed files, the articles and the interface copy.
3. **A coach line is changed in the fixtures first,** then in the seed, so the two never drift.

# 15. Demo controls

| Control | How it opens | What it does |
| ----- | ----- | ----- |
| Household switcher | Long press on the parent's avatar, or a keyboard shortcut on the presenter's laptop | Switches between households that are built. |
| Moments | Inside the switcher | Jumps the current household to a moment by ID. |
| View as | Inside the switcher | Shows the current moment from another person's side: Edward's own MVP, Min-jung's, or the web page for someone without MVP. |
| Phone frame | Inside the switcher | At desktop widths, shows the app inside a phone frame or in its full desktop layout. |
| Reset | Inside the switcher | Returns the current household to its first moment. |
| Debug menu | Inside the switcher | Switches the coach between scripted responses and a live model, and shows the current moment and demo time. |

## **Charlotte's moments**

| ID | Demo time | What happens | Opens on | For the script |
| ----- | ----- | ----- | ----- | ----- |
| C-00 | Two weeks earlier, Monday, 8:30 pm | Onboarding, from the splash to her first board | Splash | Core |
| C-01 | Monday, 6:15 am | The newsletter read-back, sharing Jenna's message, the voice note and three ways Thursday could go | Coach | Core |
| C-02 | Monday, 6:40 am | Charlotte asks Edward, and Edward sees the request in his own MVP | Coach, the draft | Core |
| C-03 | Monday, 7:25 am | Getting both girls out of the house | Today | Core |
| C-04 | Monday, 8:50 pm | Working the game plan without the coach | Game plan | Optional |
| C-05 | Tuesday, 12:20 pm | Asking the village about a new therapist | Today, the coach card | Core |
| C-05b | Tuesday, 3:40 pm | A Westview email updates the Westview card | Coach, the read-back | Optional |
| C-06 | Wednesday, 11:45 am | Edward can't collect Mallory, and Charlotte chooses against the recommendation | Today | Core |
| C-06b | Wednesday, 1:15 pm | A checkup she booked outside MVP reaches the plan through her Google Calendar and runs into Friday's tutoring, and she asks Ms. Reyes by text message | Today, the coach card | Core |
| C-07 | Wednesday, 9:10 pm | Tonight, getting ready for Thursday | Today | Optional |
| C-08 | Thursday, 8:40 pm | A question about picture day morning, with an article | Coach | Core |

Each moment holds the full state of the household at that point, so jumping to any moment shows exactly what the fixtures describe, whatever was tapped before. Within a moment, the scripted steps play in order as the presenter taps, such as Edward's answer at 7:52 am in C-02 or Min-jung's answer at 12:30 pm in C-06. The Monday afternoon board on wireframe 01b is not a moment and is not built as one.

The other three households get moments when their fixtures are rewritten.

## **Behavior notes**

* **The demo time drives everything time-based,** including the phase of the day, countdowns and what has passed. The device clock is never read.
* **Switching households or moments leaves nothing behind.** No data, open panel, conversation or scroll position survives the switch.
* **The debug menu is never used during a presented demo.** The live model needs a network connection and adds wait time, which are the two things the scripted design exists to avoid.
* **The live model covers the coach only.** Village replies and other people's answers are always scripted, because a model writing as a real person would break the village's promise even in a demo.

### **Open conditions**

1. **The switcher's trigger needs Greg's confirmation.** v0.6 opened it with a long press on the wordmark, which no longer appears on the tab screens, and opened the debug menu from the version number in Settings, which is no longer drawn.

# 16. Data model

Each household is one JSON file in `src/data/households/`, written directly from the fixtures, and all four share this structure:

`{ meta, people, children, schools, places, travel, calendar, planItems, rules, captures, requests, villageGroups, conversation, coachCards, recommended, moments }`

Articles live separately, one file per article in `src/data/articles/`, because the library is shared. Interface copy from fixtures section 4 lives in `src/copy/`, so every visible word has one home.

## **Demo time**

The seed holds no calendar dates. Every time is a demo time:

| Field | Type | Description |
| ----- | ----- | ----- |
| week | integer | Weeks relative to the demo week. 0 is the demo week, -2 is two weeks before, 1 is the week after. |
| day | enum | `mon` to `sun`. |
| time | string or null | 24-hour time such as `"14:15"`, or null for all day. |

## **Meta**

| Field | Type | Description |
| ----- | ----- | ----- |
| id | string | `charlotte`, `calypso`, `alexandra` or `marcus`. |
| fixturesVersion | string | The fixtures version the file was written from, such as `"3.6"`. |
| invented | array | Every invented fact from the fixtures' Appendix A, with what was decided and why. |

## **People, children and places**

| Object | Field | Type | Description |
| ----- | ----- | ----- | ----- |
| Person | id, name | string | Stable identifier and name as used in the story. |
| | group | enum | `parent`, `inner`, `village`. |
| | line | string | The line shown under the name on Team. |
| | hasMVP | boolean | Decides the request channel. |
| | knownFacts | strings | What the parent has entered about them. |
| Child | id, name, age | | |
| | grade | enum | As in §3. |
| | school | reference | |
| | teacher | string | Such as "Ms. Hollis, Room 3". |
| | weekly | references | Recurring activities. |
| | goingWith | array | Standing items, each with a rule such as a letter day or a weekday. |
| Place | id, name | string | Such as "Studio Ten". |
| Travel | from, to, minutes | | Fixed in the seed, never calculated. |

## **Schools and rules**

| Object | Field | Type | Description |
| ----- | ----- | ----- | ----- |
| School | id, name, shortName | string | "Westview Kindergarten" and "Westview". |
| | facts | array | Card facts (§11), each with section, text, source, changed and history. |
| | rotation | object | Letter per day for the demo week. |
| | documents | references | Captures the card was built from. |
| Rule | id, school, kind | | A recurring rule, such as a letter day meaning, and the going with item it creates. |

## **Plan items, captures and requests**

Plan items follow §4. Captures follow §7. Requests follow §9. Each references people, places and sources by id.

## **Calendar**

| Field | Type | Description |
| ----- | ----- | ----- |
| provider | enum or null | `google`, `apple`, `outlook`, or null when she has not connected one. Charlotte's is `google`. |
| name | string | As shown in copy, such as "Google Calendar". |
| events | array | Each event with an id, a title as it appears on her calendar, demo time, whether it repeats weekly, the place, and the plan item it became. |

Calendar events are written into the seed from fixtures Appendix A. An event that arrives during a moment, such as the checkup in C-06b, is a scripted step in that moment.

## **Conversation and coach cards**

| Object | Field | Type | Description |
| ----- | ----- | ----- | ----- |
| Message | as §6 | | Including `options` with title, text, recommended and result. |
| Coach card | day | enum or null | The day it concerns, or null for none. |
| | text | string | Checked by `voicecheck`. |
| | options | array | Optional, as §6. |
| | actions | array | Buttons with labels from the fixtures. |

## **Village groups and articles**

Village groups follow §10. Articles follow §12, with `recommended[]` pairing an article with its reason line for a household.

## **Moment**

| Field | Type | Description |
| ----- | ----- | ----- |
| id | string | Such as `C-03`. |
| label | string | Shown in the switcher. |
| time | demo time | The demo time at the start of the moment. |
| opensOn | string | The screen it opens on. |
| state | object | The full plan items, statuses, marks, cards, conversation, captures, requests and posts in effect. |
| steps | array | Scripted steps that play in order within the moment, each with its demo time and the change it makes. |

### **Standing decisions**

1. **No calendar dates anywhere in the seed.** Every time is a demo time.
2. **Every invented fact is listed in `meta.invented`,** so the engineer can tell a story fact from a demo choice.
3. **Every identifier is stable,** so a reset returns a household to exactly the state it started in.
4. **Each moment carries its full state** rather than a list of changes from the moment before, so any moment can be opened first.
5. **Nothing is saved.** All state lives in the running app and is lost on reload, which is right for a demo.

# 17. Technical stack

| Layer | Choice |
| ----- | ----- |
| Framework | React with functional components and hooks, built with Vite. |
| Layout | Mobile first. Styles are written for the phone and extended with min-width media queries at the breakpoints in §19, defined as tokens. |
| Styling | Plain CSS modules. Every design value is a CSS custom property in `src/tokens.css`. No UI component library, because the product has to look made for this purpose. |
| State | `useReducer` and context. One reducer per household session. |
| Persistence | None. |
| Fonts | Fraunces, Inter and JetBrains Mono, self-hosted through `@fontsource` so the demo renders identically offline. |
| Icons | Icons come from Material Symbols first, Lucide where Material Symbols has nothing that fits, and a custom drawing only where neither does. Every icon is drawn through one `Icon` component that takes the name used in Figma, such as `calendar-mark`, so an icon's source changes in one place. Material Symbols come from `@material-symbols/svg-400` in the Outlined style, imported as React components through `vite-plugin-svgr`, and Lucide icons come from `lucide-react`. MUI's `@mui/icons-material` is not used, because it depends on MUI's component library. The icon names, the source each one uses and its code name are in the Figma library's Icons page. The five tab icons are the exception: Today, Coach and Team use Lucide, and Game plan and Kids use custom drawings, so the tab bar reads as one set. |
| Live model | Debug only, and for the coach only. A Netlify function holds the API key in an environment variable, and the browser never sees it. |
| Deployment | Netlify, auto-deploying from the `main` branch. |
| Build tool | OpenAI Codex, reading `AGENTS.md`. |

## **Design source**

Figma is the design source. The engineer exports the Figma variables into `src/tokens.css` and saves the frames a task needs as images under `docs/design/`, named by wireframe number, so Codex works from files in the repository rather than from a design tool. The grayscale wireframes are kept in `docs/wireframes/` for the same reason. Codex reads a frame image and the spec section that names it, and never invents a value that is not in `tokens.css`.

## **Component inventory**

* `App.jsx`: root, tab routing, household session
* `components/Onboarding/`: one component per screen, 0s to 0i, and the failure states
* `components/Today/`: TodayTab, PhaseHeader, Departure, GoingWithList, DayRows, DayGrid, ReadyTonight, TomorrowStarts, CoachCard, CoachAlert, AddButton, AddSheet
* `components/Coach/`: CoachTab, Conversation, ReadBack, SourceLink, VoiceNote, Options, CoachAnswer, BasedOn, CaptureBar
* `components/Capture/`: ShareSequence, ThinkingScreen, CaptureFailed
* `components/Calendar/`: ConnectCalendar, CalendarPermission, CalendarMark
* `components/GamePlan/`: GamePlanTab, ChangesList, WeekView, DayColumn, PlanItem, ItemSheet, DragLayer
* `components/Requests/`: RequestDraft, RequestCard, RecipientToday, RequestWebPage, HandoffSheet
* `components/Team/`: TeamTab, PersonRow, GroupRow, PostComposer, Post, ContactPicker
* `components/Kids/`: KidsTab, ChildPage, SchoolCard, CardFact, CardHistory
* `components/Recommends/`: RecommendsCard, ArticleView
* `components/Settings/`: SettingsPlaceholder, including the Your calendar heading
* `components/Demo/`: HouseholdSwitcher, MomentList, ViewAs, PhoneFrame, DebugMenu
* `components/shared/`: Monogram, ChildChip, AdultAvatar, Button, StatusMark, ChangedMark, ConflictMark, OwnerLabel, CoachLine, BackLink, TabBar, Sidebar
* `hooks/`: `useHousehold`, `useDemoTime`, `useMomentSteps`
* `data/households/`, `data/articles/`, `copy/`
* `scripts/voicecheck.mjs`: the voice and date check (§14)
* `netlify/functions/coach.js`: the live-model proxy, debug only

## **Repository**

The repository holds a `README.md` explaining how to run and present the prototype, and an `AGENTS.md` explaining how Codex should work in it. Project documents live in `docs/`: `spec.md` (this document), `brief.md`, `story-fixtures.md`, `issues.csv` for observed problems and open decisions, and `backlog.md` for build order. Decisions are recorded where they apply, as standing decisions in each section and as rows in Appendix A, so there is no separate decision log.

# 18. Out of scope for the prototype

The following are not built in this phase:

* Calendar dates on screen or in the seed files
* Reading the device clock
* A month view (F1)
* Live voice transcription (F3)
* Connecting her email account directly (F4)
* A real connection to Google Calendar, Apple Calendar or Outlook, which the prototype stages
* Writing anything to her calendar (F18)
* Edward or anyone else connecting their own calendar (F19)
* Real notifications (F5)
* Grocery ordering, meal planning and the shopping list (F6, F16)
* Any language other than English (F7)
* A shared household account (F8)
* Moderation and reporting for village groups (F9)
* Photos in posts (F10)
* Saving articles (F12) and searching the library (F13)
* School cards for studios, teams and clinics (F14)
* A tab for articles, a browsable article feed, the article library and sharing an article (§12)
* A searchable directory of camps, activities, providers or products
* The coach finding or recommending providers or sitters, buying anything, planning money, or giving custody, legal or medical advice
* Sponsored links, affiliate links and product links inside coach answers
* The coach reading or summarizing village posts
* Real sharing from another app, real forwarding, and reading real photos or email
* Real invitations, real text messages and real accounts, sign-in or payments
* A pricing screen
* Kid-facing features of any kind
* Dark mode and native apps
* Anything carried over from the June 2026 iOS build, including Swift, TestFlight and SF Symbols

# 19. Design tokens and platform constraints

Every design value in the app, including color, spacing, radius and type, is a CSS custom property in `src/tokens.css`, exported from the Figma file. **That file is the source of truth, and this document deliberately holds no copy of any value.**

The design system is called Hearth: warm, editorial and quiet, with a cream canvas, ink rather than black, and cerulean as the anchor color and for anything the parent can tap. Fraunces is reserved for headlines and titles, including every onboarding and setup headline, and for the coach on the Today coach card and in onboarding. Inter is used for everything else the parent reads or taps, including the coach chat, fields, labels, buttons, posts and article bodies. JetBrains Mono is used for card and alert labels, such as the coach card's label and the Coach Alert. Other metadata, including the Recommends label line and reading times, is set in Inter.

## **Rules that apply across screens**

These live here rather than in Figma because a single frame cannot show them.

* **Three typefaces only.** No fourth font is added for any reason.
* **No uppercase labels and no letter-spaced eyebrows.**
* **No photographs of people, no stock images and no generated images.**
* **Illustration appears only inside MVP Recommends articles,** as spot illustrations drawn by people. The MVP mark is not an illustration.
* **No pure white and no pure black.**
* **The wordmark always reads "Most Valuable Parent."** "MVP" never appears alone in the wordmark, including at the top of the sidebar.
* **Status marks never rely on color alone.** Each has its own shape and label, so the plan reads in grayscale.

## **Platform constraints**

| Size | Width | Checked at | Layout |
| ----- | ----- | ----- | ----- |
| Phone | Up to 767 | 390 × 844 | The base design. Single column, tabs at the bottom. |
| Tablet | 768 to 1279 | 768 × 1024 | Tabs become a left sidebar. Today opens into the full-day grid. |
| Desktop | 1280 and up | 1440 × 900 and 1920 × 1080 | Sidebar, full-day grid on Today, seven-column week in the game plan. Content width stops growing at 1200. |

* **The phone design comes first.** Every screen is designed at 390 × 844 before any other size, and nothing exists only on desktop.
* **Tap targets are at least 44 pt** at every size.

# **Appendix A: Change log**

This appendix tracks changes to the specification. The body above always reflects the latest version.

## **v0.11, October 13, 2026**

Follows the Today redesign and the type and color work in the Figma master library, decided by Greg.

| # | Where | Change |
| ----- | ----- | ----- |
| 1 | §5, §19 | The coach card is filled with the coach's background, outlined in the coach's color and labeled with a solid dot and "Coach · for" and the day. The coach's text is in the voice style, with one primary button and "More options". The Coach Alert is added at the top of Today. Saffron has no role. Closes T3. |
| 2 | §3, §6, §19 | The coach speaks in Fraunces, in the voice style, on the Today coach card and in onboarding, and in Inter in the coach chat. This replaces v0.10 row 1. |
| 3 | §2, §5, §9, §13, §15 | The parent's avatar, an outlined circle with her initial, replaces her monogram in the header and opens Settings. |
| 4 | §5, §13 | Children appear as name chips in plan rows, and adults in plan rows as outlined avatars. Monograms stay everywhere else children appear. |
| 5 | §5 | The day line moves to its own row above the title, with the parent's avatar, and stays the day of the week only. |
| 6 | §5, §12, §19 | The Recommends label line reads "Recommended · School · 3 min read", in the meta style. Card and alert labels use meta-strong, in JetBrains Mono. Labels are never set in capitals. Closes R6. |
| 7 | §17 | Today, Coach and Team use Lucide tab icons, and Game plan and Kids use custom drawings. ChildChip, AdultAvatar, Button and CoachAlert join the component inventory. |

## **v0.10, October 8, 2026**

Changes three design rules, decided by Greg while cleaning up the Figma library.

| # | Where | Change |
| ----- | ----- | ----- |
| 1 | §3, §6, §19 | Everything the coach says is set in Inter. Fraunces is reserved for headlines and titles. |
| 2 | Summary, §5, §17 | Icons come from Material Symbols first, then Lucide, then custom drawings. Each icon is named by meaning, such as `phase-morning` and `calendar-mark`, and drawn through one `Icon` component. |
| 3 | §19 | Olive is removed from Hearth, and cerulean is the anchor color. |

## **v0.9, October 6, 2026**

Closes the gaps from the calendar wireframe pass, following story fixtures version 3.9.

| # | Where | Change |
| ----- | ----- | ----- |
| 1 | §9 | Requests are answered item by item with an optional note and a Change link. A note never edits the plan. Answers and changed answers arrive as notifications. There are no read receipts. Every handoff leaves a task. |
| 2 | §2, §6 | The capture bar has camera, attach and microphone, and the microphone becomes an arrow while she has typed text. |
| 3 | §4 | An item's time is when the thing starts, and leaving times belong to departures. |
| 4 | §11 | The child page carries the calendar mark on activities from her calendar. |

## **v0.8, October 6, 2026**

Adds the parent's own calendar, following story fixtures version 3.8.

| # | Where | Change |
| ----- | ----- | ----- |
| 1 | §7 | "Her calendar" is added. MVP connects to Google Calendar, Apple Calendar or Outlook, reads it, never writes to it, sorts events by whom they concern, and keeps the plan in step. Standing decisions now count four entry points and one connection, and say MVP reads her calendar and never writes to it. |
| 2 | §3 | Setup screen 0q, Connect your calendar, follows the account. Setup has five screens, 0p reads the calendar, and 0j reports what came in. |
| 3 | §4, §5, §8 | Calendar items are owned by her with no status, carry the calendar mark on Today and in the game plan, are moved in her calendar rather than dragged, and raise a conflict and a coach card when they run into the plan. |
| 4 | §13 | Settings gains Your calendar. |
| 5 | §15 | Moment C-06b is added. |
| 6 | §16, §17 | The seed gains a calendar object, and the inventory gains the calendar components. |
| 7 | §18, Appendix B | F4 narrows to email. F18, writing to her calendar, and F19, other adults' calendars, are added. |

## **v0.7, October 1, 2026**

A correction pass bringing the spec into line with story fixtures version 3.6 and the wireframes built from it, and moving the build from Claude Code to OpenAI Codex. Fixtures 3.6 wins wherever the two disagreed.

| # | Where | Change |
| ----- | ----- | ----- |
| 1 | Summary, §1 | The single shared Thursday is retired. Each household is shown across its week as moments with IDs, and the eight things every household shows replace the support and article tables. Only Charlotte's household is buildable until the other fixtures are rewritten. |
| 2 | §1, §14, §16, §18 | No calendar dates in the prototype. The seed holds demo times as weeks relative to the demo week plus a weekday and time, the device clock is never read, and `voicecheck` fails on dates. The real product's dates are kept as a separate rule. |
| 3 | §2 | The tabs become Today, Coach, Game plan, Team and Kids. Settings moves behind the monogram, and pages inside a tab show Back. |
| 4 | §3 | Onboarding is rewritten as sixteen screens in three parts, with the welcome and children screens before the first capture, a step counter on setup only, thinking and failure screens, and the coach's introduction before Today. The pricing screen, the take-on choices and the time-for-herself screen are removed. |
| 5 | §4 (new) | The plan model: owner including "Nobody yet", four statuses, and the Changed and Conflict marks. It replaces v0.6's Covered, Waiting on someone and Open. |
| 6 | §5 | Today shows only today, with the phase of the day, departures with going with lists, one row per person, a single coach card that may concern another day, and at most one Recommends card. Caught and sorted, the coach's plan paragraph and the team notice are removed. |
| 7 | §6 | The coach offers two or three options with one recommended, and read-backs carry source links. The shopping list and dinner actions are removed. |
| 8 | §7 (new) | Capture: four entry points, three kinds of input, read-backs, source links, and staging in the prototype. F2 moves into the prototype as the camera entry point. |
| 9 | §8 | The game plan holds every item, with "This week's changes" at the top and direct editing. Dinner rows and the shopping list are removed and parked as F16. |
| 10 | §9 | Sharing a plan becomes Requests, with three channels and the parent's own voice. Briefs written in the coach's voice are retired. |
| 11 | §10 | Team holds the inner circle, the village and village groups. Village groups replace the single team, which closes F11. |
| 12 | §11 (new) | The Kids tab, child pages and school cards. |
| 13 | §12 | One Recommends card on Today with a "Because" reason line, staff bylines, and the library and article sharing held out until the fixtures give them words. |
| 14 | §13 | Settings is a placeholder behind the monogram. The child profile moves to the Kids tab. |
| 15 | §15 | Checkpoints become moments, with Charlotte's ten listed. A View as control shows the recipient's side. The switcher and debug menu need new triggers. |
| 16 | §16 | The data model is rewritten around demo time, people groups, schools, captures, requests, coach cards and moments. |
| 17 | §17, Summary | Codex replaces Claude Code, `AGENTS.md` replaces `CLAUDE.md`, and the Figma MCP workflow is replaced by exporting tokens and frames into the repository. |
| 18 | §19 | The saffron once-per-screen rule is withdrawn as an open condition. Onboarding headlines are named as display type. The wordmark rule now covers the sidebar. |
| 19 | §1 | MVP is no longer described as led by a coach. The plan is the product, and the coach is one helper beside the inner circle and the village, in line with the locked decision. |
| 20 | §3 | Fixtures v3.7: a check-the-photo screen (0v), a hand-off at the end of the read-back, and a first draft that covers a week rather than a month. |

**Section numbers.** From v0.6 to v0.7, §1, §2 and §3 keep their numbers, §4 Today becomes §5, §5 Coach becomes §6, §6 Game plan becomes §8, §7 Team becomes §10, §8 MVP Recommends becomes §12, §9 Sharing a plan becomes §9 Requests, §10 Settings becomes §13, §11 Coach voice becomes §14, §12 Demo controls becomes §15, §13 Data model becomes §16, §14 Technical stack becomes §17, §15 Out of scope becomes §18, and §16 Design tokens becomes §19. The new sections are §4 The plan, §7 Capture and §11 Kids and school cards.

## **v0.6, September 21, 2026**

Greg closed the open items in the creative brief. This pass carries those decisions into the spec.

| # | Where | Change |
| ----- | ----- | ----- |
| 1 | §1, §16 | Mobile first with a responsive layout up to 1920 × 1080, replacing the phone-only canvas. Three sizes are defined, each with the dimensions it is checked at. |
| 2 | §2 | At tablet width and above, the tab bar becomes a left sidebar with the same five tabs. Desktop adds a second panel beside Coach and Team. |
| 3 | §12 | A phone-frame switch in the demo controls, so the presenter can show the phone design on a large screen. |
| 4 | §5 | The coach is described as an agent, a helper and one part of the parent's support system. It is not a therapist, a doctor or a lawyer. |
| 5 | §5, §8 | Articles can link to where a product is sold, with no sponsored or affiliate links. Coach answers carry no product links of their own; links reach the parent through staff-written articles. |
| 6 | §8 | MVP staff write every article. Some articles carry spot illustrations drawn by people. The three open conditions on writers, illustration and links are closed. |
| 7 | §15, Appendix B | Tablet and desktop layouts leave the out-of-scope list. Sponsored and affiliate links join it. F6 narrows to grocery ordering. |

## **v0.5, September 21, 2026**

The navigation returns to the five Heisman tabs at Greg's direction, with Home renamed Today. This reverses the navigation in v0.2 through v0.4.

| # | Where | Change |
| ----- | ----- | ----- |
| 1 | §2 | Five tabs: Today, Coach, Game plan, Team, Settings. Home is renamed Today. Tab labels are set in title case. |
| 2 | §6 | Week and Meals merge into Game plan. Each day card carries that evening's dinner, and the shopping list opens from the top of the tab. |
| 3 | §7 | The circle is renamed Team throughout, matching the Heisman tab. Team means the invited group; the adults who carry out plans are the household. |
| 4 | §10 | The household view becomes the Settings tab, with sections for the household, the account and an About section whose version number opens the debug menu. |
| 5 | §5, §6 | The coach's "Add to Meals" action becomes "Add to dinner". |
| 6 | Whole document | Sections reordered to follow the tabs: Coach is now §5, Game plan §6, Team §7, Sharing §9 and Settings §10. |
| 7 | §14 | Project documents move to `docs/` with the farm journal's names, and `issues.csv` and `backlog.md` are added. The separate decision log is dropped, since standing decisions and Appendix A already record decisions. |

## **v0.4, September 21, 2026**

Editorial content returns at Greg's direction, as MVP Recommends. This reverses the cut recorded in v0.1 row 4 and narrows the out-of-scope line changed in v0.3 row 8.

| # | Where | Change |
| ----- | ----- | ----- |
| 1 | §1 | MVP Recommends described, with an articles-by-household table. |
| 2 | §2 | Articles have no tab. They are reached from Today, the library behind "See all", and coach answers. |
| 3 | §4 | A "For you this week" block added to Today, with at most two cards, each carrying a line on why it is there. |
| 4 | §7 | Coach answers can attach up to two articles, and idea questions (strollers, baby food, weekends, camps) always do. |
| 5 | §8 | New section for MVP Recommends: kinds of article, the card, the library, the article view, and sharing to the circle or another adult. Sections 8 onward renumber by one. |
| 6 | §8 | **Camps are covered as advice, not listings.** This keeps the project's rule that MVP is not an activity or camp finder while allowing articles about camps. |
| 7 | §8, §12 | Articles are written by people with bylines, never generated, and use no em-dashes. |
| 8 | §9 | Circle posts can carry a shared article. |
| 9 | §16, §17 | The out-of-scope list now excludes a content tab, a camp or product directory, and saved articles. Illustration is allowed only inside articles, pending Heather's brand decision. |
| 10 | Appendix B | F12 and F13 added. |

## **v0.3, September 21, 2026**

Two features added at Greg's direction: the coach as an advisor and source of support, and the circle. Both are in the prototype.

| # | Where | Change |
| ----- | ----- | ----- |
| 1 | §1 | MVP is described as a planning app and a support system. A support table gives each household its question for the coach and its circle. |
| 2 | §2 | Two tabs added, Coach and Circle, for five in total. The capture control becomes a microphone button that opens the Coach tab, so planning input and questions go to the same coach. |
| 3 | §7 | New section for the Coach tab: conversation, answers, the "based on" line, actions, and the limits on medical, clinical and legal advice. |
| 4 | §8 | New section for the circle: invite-only members added like contacts, a text feed, coach-drafted posts, and scripted replies. |
| 5 | §8 | **The coach does not read the circle.** Members expect to be talking to the parent. |
| 6 | §11 | The voice rules split into rules for every line, rules for plans, rules for answers, and rules for circle drafts. Answers may explain; circle drafts are written as the parent. |
| 7 | §3 | "Questions about the kids" added to what the coach can take on. The circle is deliberately left out of onboarding. |
| 8 | §15 | "Any content feed" narrowed to editorial content. The circle is a feed of posts among invited people, which earlier decisions did not anticipate. This changes the project's "not a content feed" rule, and the project instructions should be updated to match. |
| 9 | §12, §13, §14 | Checkpoints, seed data and components added for both features. |
| 10 | Appendix B | F9, F10 and F11 added. |

## **v0.2, September 20, 2026**

The spec is converted to the format used by the Three Bees Farm Journal, so both projects share one structure. No product decision changed.

| # | Where | Change |
| ----- | ----- | ----- |
| 1 | Whole document | Rewritten into numbered sections, one per screen, with field tables, behavior notes, and standing decisions and open conditions at the end of each section. |
| 2 | §1 | A households table and a platform list replace the opening prose. |
| 3 | §2 | A navigation table replaces the navigation paragraphs. |
| 4 | §3 | The Heisman carry-over decisions move into the onboarding step table, with a column saying what changed. |
| 5 | Demo controls | Checkpoints for all four households are listed for the first time. |
| 6 | Data model | The seed file is defined object by object. v0.1 described it in one paragraph. |
| 7 | Technical stack | A technical stack table and component inventory are added. Two decisions are new: plain CSS modules with no UI library, and self-hosted fonts. |
| 8 | Coach voice | A `voicecheck` script is added to catch the voice-rule violations a machine can detect. |
| 9 | Design tokens | Hearth's values are removed from the spec and left to `tokens.css`, following the farm journal's §15. The rules that apply across screens stay. |
| 10 | Appendix B | Parked ideas receive F-numbers. |

## **v0.1, September 20, 2026**

First draft, built from the Heisman screens, the creative brief and the story fixtures.

| # | Where | Change |
| ----- | ----- | ----- |
| 1 | Onboarding | Heisman's onboarding kept as the base. Voice added as the first input, and the "to-do this week" screen reframed as time for herself. |
| 2 | Onboarding | Household, home language and "who else helps" screens added after the account step. |
| 3 | Onboarding | The "79%" statistic removed from the progress screen until a source is confirmed. |
| 4 | Today | Heisman's content cards cut, because MVP does not publish editorial content. |
| 5 | Profiles | Heisman's per-child personality form moved to coach questions on Today. Child photographs replaced by monograms. |
| 6 | Navigation | Today absorbs the inbox, and the month view is parked. |
| 7 | Sharing | The brief and the recipient view designed from scratch, since Heisman had neither. |

# **Appendix B: Roadmap**

Ideas worth keeping that are not built in the prototype. Each has a number so it can be referred to without restating it.

| # | Feature | Why it waits | Source |
| ----- | ----- | ----- | ----- |
| F1 | Month view | No moment needs one. The game plan covers the week. | §2 |
| F2 | Photographing a flyer | **Moved into the prototype in v0.7** as the camera entry point (§7). Kept here so the number is not reused. | §7 |
| F3 | Live voice transcription | Room noise and latency make it a risk in a presented demo. Prepared recordings stand in. | §7 |
| F4 | Connecting her email account directly | Reading a whole inbox asks for much more trust than sharing one email at a time. Her calendar moved into the prototype in v0.8. | §7 |
| F5 | Real notifications | The prototype shows where they would appear, and the demo does not need them to fire. | §9 |
| F6 | Grocery ordering | The product plans rather than buys. | §8 |
| F7 | Spanish-language household | Home language is collected, but a second language doubles every coach string. | §3 |
| F8 | A shared household account | Edward sees only the requests Charlotte sends him. A shared account where both parents see the whole plan is a product decision for later. | §9 |
| F9 | Moderation and reporting for village groups | Needed before real people use groups, and not needed for a scripted demo. | §10 |
| F10 | Photos in posts | Parents will want them, and they bring photographs of children into the product. | §10 |
| F11 | More than one group | **Moved into the prototype in v0.7.** A parent creates as many village groups as she needs (§10). | §10 |
| F12 | Saving articles | No moment needs it, so the bookmark is hidden. | §12 |
| F13 | Searching the article library | Eight articles do not need search. A real library will. | §12 |
| F14 | Cards for studios, teams and clinics | The school card would suit them, and the prototype covers schools only. | §11 |
| F15 | Today following the family rather than the clock | Ending the morning when the last child is dropped off is better, and needs real data to know when that happens. | §5 |
| F16 | Meal planning and the shopping list | v0.6 put dinner in every day and a shopping list at the top of the game plan. Fixtures 3.6 shows dinner only when the schedule forces it to move, and no household opens MVP to plan dinner. | §8 |
| F17 | A fifth household | Suggested and parked. Four households already make the argument. | §1 |

| F18 | Writing MVP's plan items to her calendar | It would keep her calendar complete, such as showing Edward's pickups there, but it changes something she did not touch. Read only proves the idea. | §7 |
| F19 | Other adults connecting their own calendars | Edward could connect his, so the coach would see his Thursday meeting without being told. One calendar proves the idea. | §7 |

**F20 is next free.**
