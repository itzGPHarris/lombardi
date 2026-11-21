# **Most Valuable Parent (Lombardi): Product specification**

*Investor prototype · Version 0.15 · October 15, 2026*

## **Summary of this version**

Version 0.15 follows story fixtures 3.15, which works out every state of Now on Today. Now follows one rule for what leads it, and a departure becomes a leg on a run drawn as a line of stops that need not start or end at home (§5). Today gains one way to change a time, the Leave sheet, and the coach keeps a Plan B and a Plan C at its foot, which "Other options" now opens on Today instead of the Coach tab (§5, §6). Now reads like a boarding pass, and checklists are grouped under each child's name without chips (§4, §5). Sheets become one pattern with a way out and a set state, and the reminder sheet gains a state for notifications that are off (§5, §17). Every leaving time follows one rule, and the seed holds runs with a due time and a leaving time at every stop (§4, §16). C-03b replaces the Monday afternoon board as a built moment (§15). Now stays in place while the canvas sheet scrolls up over it, stopping below the header (§5, F28). Plan B and Plan C are F26, and a note to whoever is waiting when she runs late is parked as F27.

Version 0.14 followed story fixtures 3.14, which records Greg's design decisions after reviewing the board drafts, and his answers to the decisions that blocked review build 1. The coach is set in Inter everywhere in the app, and Fraunces is kept for onboarding, titles and large headlines (§3, §5, §6, §19). The capture bar replaces the floating "Send to coach" button on Today (§2, §5, §7, §17). A person's answer shows as their initial and an icon rather than their name (§4, §9). A person page lists the week as lanes, with three-letter days (§10). Today's Now sits on paper above a canvas sheet, and the countdown moves under the departure time (§5). A staged plan screen follows the account (§3). The household switcher opens from the monogram only (§15). MVP reads her calendar and never writes to it, the cup is the MVP mark, and the invented email domains stay. No moment, coach line or person changes.

Version 0.13 followed story fixtures 3.13, which made Team a working tab so the whole app can be tested end to end, at Greg's direction.

The main change is to §10. The parent now talks with her inner circle in chats. She messages one person directly, or several people, or everyone in her inner circle who has MVP, and she chooses them when she starts the chat. The same composer posts to a village group. Team gains person pages, the group page, adding someone, inviting by text and creating a group, and the coach still reads none of it. Smaller changes follow from it:

- §9 writes the recipient's side of every request in Charlotte's week, and invitations and calls leave no task.
- §6 gains C-08b, where the coach names Dr. Ortiz and stops short of medical advice.
- §15 gains four moments, C-04b, C-05c, C-06c and C-08b, scopes View as, and says what every tab shows between moments.
- §16 gains chats and contacts in the seed, and §17 and §18 follow.

Appendix A lists every change, and Appendix B gains F22 to F25 for what this version leaves out.

Charlotte and Edward are the only household written at the current fixtures version. The other three households keep their version 2.2 facts until the fixtures rewrite them, and the build order in `docs/backlog.md` builds Charlotte's week end to end first.

# 1. Overview

Most Valuable Parent (MVP) is a planning app and a support system for busy parents. A parent receives the week's logistics in six or seven places at once: school emails and newsletters, messages in WhatsApp and other apps, texts, paper handouts and her own thoughts in the car. She gives MVP whatever arrives, by sharing it from another app, forwarding it to her own MVP address, photographing it or talking, and the coach turns it into a plan for the day and the week. The plan says where everyone needs to be, who takes them, what goes with each child, and what still needs her.

The same coach answers the parenting questions she would otherwise take to Reddit or a Facebook group. It already knows her family, so its answers fit her children, and every answer shows the family details it was based on. Around her are two groups of people. Her **inner circle** is the people she trusts with her children and her private life, such as her partner, family, a nanny and the family's doctors, therapists and tutors. Her **village** is everyone else who shares her children's week for a few hours at a time, such as school parents and carpool families, and she talks with them in **village groups** she creates inside MVP. She talks with her inner circle in private **chats**, with one of them or several at once. When part of the plan needs someone else, the coach drafts a request in her voice and she sends it herself.

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
| Charlotte and Edward | Onboarding, the Today board, and how much of the week the coach can build from what she photographs, forwards and says and from her own calendar | Version 3.15, moments C-00 to C-08 |
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
2. **The prototype runs on a fixed calendar.** The demo week is Monday, Oct. 12 to Sunday, Oct. 18, 2026, and C-00 is Monday, Oct. 5. Today's dateline shows the day and the date, and the draft on 0c shows the dates it covers. Everything else names the day of the week. The prototype never reads the device clock, so it behaves the same way whenever it is presented. The real product follows the same rule on the dateline.
3. **Every word on screen comes from the fixtures.** Moments give the words in place, and fixtures section 4 gives every label, heading and button. Nothing visible is invented during the build. A gap is an issue, not a guess.

### **Open conditions**

1. **A demo presented weeks after Oct. 12 shows dates in the past.** The seed's single anchor date (§16) moves the whole demo to another week, and the presenter checklist needs a step to set it before each pitch (issue C26).

# 2. Navigation

The app has five tabs. On a phone they sit across the bottom of the screen, and from tablet width up they move to a sidebar on the left in the same order.

| Tab | Purpose | Wireframes |
| ----- | ----- | ----- |
| Today | The logistics for the current day, in four parts: Now, the coach card, Later today and at most one MVP Recommends article. The screen the app opens to once a household is set up (§5). | 01, 01b, 02, 02b, 03, onboarding 0i, and the Today states in wireframe pass 12 |
| Coach | The parent's conversation with the coach, by voice, typing, a photo or a file, including the coach's read-backs, its options and its answers (§6). | 01a, 04, 08 |
| Game plan | The whole week, including routine items, with "This week's changes" at the top. Where she works the plan directly (§8). | 06, 06b |
| Team | The adults around her: her inner circle and her village, her chats with her inner circle, and her village groups (§10). | 07, 10 |
| Kids | A page for each child and a card for each school (§11). | 12a to 12e |

Tab labels are written as in fixtures section 4: Today · Coach · Game plan · Team · Kids. The Kids tab's icon is two figures of different heights, `kids-heights` in the icon set, so it fits a toddler and a teenager alike.

## **The monogram and Back**

The parent's monogram sits at the top right of every tab's own screen, with the accessible label "Settings and account", and opens Settings (§13). At tablet width and above, Settings also sits at the bottom of the sidebar, below a rule. Pages opened inside a tab, such as a child page, a school card, an article, a draft, a person page, a chat or a group page, show a Back link in place of the monogram. The monogram belongs to the parent alone. Children never appear as monograms (§4).

## **Getting things in**

The Coach tab carries the capture bar: the coach's dot and the placeholder "Type, talk or add an image", then attach, camera and microphone, with the microphone turning into an arrow while she has typed text. Today carries the same capture bar, docked between the page and the tab bar, and hides it while the coach card is asking for a capture. In review build 1 no other tab carries the capture bar. Each school card carries its own Add to this card button. Things also arrive from outside the app through the share menu and the forwarding address, and from her own calendar once it is connected (§7).

## **At wider screens**

From tablet width up, the bottom tabs become a sidebar with the same five tabs in the same order. Today keeps its phone layout in a centered column beside the sidebar, because the quiet layout is designed for a phone and a wide Today is parked as F20. In the game plan, "This week's changes" becomes a strip across the top and the week shows seven columns, with next week beneath it. Coach, Team and Kids keep their phone layout in a centered column. Nothing else about navigation changes between sizes.

### **Standing decisions**

1. **Five tabs: Today, Coach, Game plan, Team and Kids.** Adults live on Team, and the children and the organizations around them live under Kids, so a parent can guess where anything is.
2. **Kids replaces Settings as the fifth tab.** Parents look at their children's schools every week and at settings rarely, so Settings moves behind the monogram.
3. **One way in to the coach.** Captures and questions go to the same coach, because the parent thinks of it as one helper rather than two tools. She never has to say which she is doing.
4. **No tab for articles.** Articles arrive through Today and coach answers, because each one has to earn its place through something in her week.
5. **No meals tab and no month view.** Dinner appears in a plan only when the schedule forces it to move. Meal planning and the shopping list are parked as F16, and the month view as F1.
6. **One navigation at every size.** The same five tabs move from the bottom of a phone to the side of a larger screen. A wider layout never adds or hides a tab.
7. **One capture bar, on Today and Coach.** The capture bar is drawn as a field with the coach's dot, not as a button, so it can't be mistaken for one of the coach card's commands. Its placeholder says where things go without the word Send, because Send on its own means sending something to another person. It replaces the floating "Send to coach" button of earlier versions, which looked like every other button and could sit beside a coach card asking for the same thing.

### **Open conditions**

1. **The tab names face customers and need brand sign-off from Heather.** If the sports naming of Team is judged too much, the plain fallback is Kids and People.
2. **Whether the capture bar appears on Game plan, Team and Kids is not decided** (fixtures Appendix B item 34). Review build 1 shows it on Today and Coach only.

# 3. Onboarding

Onboarding appears in the demo only in Charlotte's household, as moment C-00, on Monday, Oct. 5, the week before the demo week. The other households open already set up.

Onboarding has three parts. Before any account, the parent tells MVP her first name and who she is planning for, then gives it one thing from this week and sees it come back as a plan. In the second part she creates the account, connects her calendar and answers three short setup screens. In the third part MVP finishes setting up, the coach introduces itself, and she lands on Today, where she answers the coach's first question.

The wireframes are the onboarding flow map and screens onboarding-01 to onboarding-19, with the failure and waiting states on onboarding-19, the lines taught in her first week on onboarding-18, and her first board as the standalone 0i wireframe in three states.

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
| 0c | The draft, with the dates it covers and the account prompt over it | Before the account | None | Not now ends the session |
| 0e | Create your account: an email address or sign-in with Apple | Setup | 01 of 05 | No |
| 0e-p | Choose a plan: Basic or Family, each with a free trial, staged | Setup | None | No |
| 0q | Connect your calendar: Google Calendar, Apple Calendar or Outlook, with a staged permission screen and a connected state | Setup | 02 of 05 | Not now, to 0f |
| 0f | Who's on your calendar: each child's school | Setup | 03 of 05 | No |
| 0g | Your household: household type and home language | Setup | 04 of 05 | No |
| 0h | Who else helps: the adults she counts on | Setup | 05 of 05 | No |
| 0p | Getting everything ready, while the account is created | Finishing | None | No |
| 0j | Nice to meet you: the coach's introduction and a recap | Finishing | None | No |
| 0i | Her first board on Today, in three states: on arrival (0i-a), the answer sheet (0i-b) and after she answers (0i-c) | Finishing | None | No |

The words on every screen are in fixtures C-00 and fixtures section 4, "Onboarding".

## **Inputs**

| Field | Screen | Type | Description |
| ----- | ----- | ----- | ----- |
| First name | 0w | string | Used in the coach's greeting and the children screen's heading. Optional, because 0w can be skipped. |
| Zip code | 0w | string | Used to work out travel times and the local school calendar. Optional. Charlotte enters 00123. |
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
| Start time | 0i-b | time | The answer to the coach's first question, such as Mallory's start time at Westview. Charlotte sets 8:30 am. |

## **Behavior notes**

* **Value still comes before the account.** The welcome and the children screen come before the first capture so the coach knows whose week the capture belongs to. Without them the coach could only guess which child a calendar was for. Both are short and skippable, and neither asks for an account.
* **The coach always confirms which child a capture is for.** It preselects a child by matching the grade on the document to a child's grade, and she changes it with one tap. If two children share a grade or the document shows none, nothing is preselected. If she skipped the children screen, the confirmation offers a Child name field and the grade choices instead. The confirmation is a control, not a question, so the coach can still ask its one question.
* **She hands the draft to the coach.** The read-back never runs straight into the draft. Once the child is confirmed and the coach's question is answered, the coach says what it will make and what it keeps for later, and she starts the draft herself with a button such as "Make Mallory's plan". A "Something's not right" link lets her correct the read-back first.
* **The first draft covers the rest of this week, and shows its dates.** The draft is headed "Mallory's plan for this week" with "Oct. 6 to 9" beneath it. Anything on a capture that falls in a later week goes onto the school card and enters the plan when its week arrives.
* **Waits are shown, never hidden.** A thinking screen with the MVP mark and a line saying what the coach is doing appears while it reads a capture (0r) and while it builds the draft (0t), and each moves on by itself. The getting ready screen (0p) shows its steps finishing in turn, five of them when she has connected a calendar, each marked done, working or waiting, with no percentage, because a number that stalls or jumps looks broken.
* **Failure states have their own screens.** A capture that cannot be read replaces 0b, with Retake photo and Choose another. A wait longer than twenty seconds replaces 0r or 0t, with Try again. Account creation that fails replaces 0p's steps, keeps everything she entered, and offers Try again. If she leaves during 0p, MVP opens at 0p or 0j when she returns. The words are in fixtures section 4.
* **Her first board is never empty.** If she captured something, Today shows tonight's preparation from it, every child under "Tomorrow starts" with "Start time needed" where a time is not known, and a coach card asking for the time that matters most tomorrow. Answering opens a sheet, fills in that child's row at once, and turns the card to the rest of the week, with a button that opens the game plan (§5). If she skipped the capture, the coach card asks for one thing to start with and holds Take a photo, Attach a file and Talk or type, and the capture bar is hidden.
* **Leaving before the account starts over.** A parent who taps Not now on the account prompt, or leaves before creating the account, starts again at the splash the next time she opens the app.
* **Back from the account screen** returns to the draft with the account prompt open.
* **Her calendar comes right after the account.** It follows the first draft, so she has seen what MVP does before it asks for her calendar, and it comes before the school screen, so the coach can fill in what the calendar already shows. While the account is created, 0p reads the calendar, and the coach's introduction on 0j says what came in. If she taps Not now, connecting stays in Settings, and the coach offers it once, the first time she gives it an appointment.
* **Entry points are taught when they become useful,** not during onboarding (§7).

## **Prototype timing**

The prototype does not read photos, so each thinking screen lasts two seconds and the getting ready screen lasts four. The capture is the prepared photo of Westview's rotation calendar, headed "Westview Kindergarten" with "October 2026" beneath it, and the read-back, the coach's question, Charlotte's reply, the draft and her answer on the first board are scripted. The account screens and the calendar permission screen look real and create or connect nothing. The failure states are built so they can be shown on request, but they do not appear in Charlotte's path.

### **Standing decisions**

1. **Value before account.** She sees her first draft before she is asked to create an account. This is a locked decision. Its wording changes, because her first name and her children's names and grades now come before the first capture (open condition 1).
2. **Nothing before the account is kept.** Her name, zip code, children, photo and draft are held only for the session and discarded if no account is created.
3. **Collect progressively.** After the account, she connects her calendar, and three setup screens ask for each child's school, the household type and home language, and the adults who help. Everything else about each child comes later, through the coach's questions on Today. There is no per-child intake form.
4. **The step counter appears on setup only,** running from 01 of 05 to 05 of 05. The screens before the account are not a form, and the screens after setup leave her nothing to do.
5. **Onboarding has no step for adding schools beyond naming them.** The first school card is built from the first capture (§11).
6. **The village is not part of onboarding.** The adults on 0h join her inner circle. The coach introduces the village when a question needs other parents.
7. **A plan screen follows the account, and nothing else asks for money.** "Choose a plan" (0e-p) comes right after she creates her account and shows the two plans, Basic and Family, each with a free trial, so the demo shows how MVP is sold. Choosing a plan starts the trial and moves on to 0q. A free trial means she can cancel before she pays, so the screen comes after she has seen her first draft and before setup asks anything more of her. In the prototype the screen is staged: no payment is taken, nothing opens Stripe, and either button moves on. Onboarding still ends with the coach's introduction and her first board, and the getting ready screen carries no percentage or figure.
8. **Headlines are display type, and the coach speaks in Voice in onboarding only.** Every onboarding and setup headline is set in Fraunces. The coach's lines in onboarding are set in the Voice style, and once she reaches Today the coach is set in Inter. Fields, labels, helper lines and buttons are set in Inter (§19).
9. **"Time saved" is left out of the coach's introduction,** because nothing in the product measures it.
10. **The zip code is the starting point for travel times.** MVP never asks for a home address. It works out each drive from the zip code and adds five minutes, so an estimate errs early. Directions opens her maps app, which routes from wherever she is.

### **Open conditions**

1. **Heather signs off the new onboarding order.** "Value before account" still holds, but the line that onboarding asks for one thing before it asks who she is no longer does. The brief carries the same change (issue O3).
2. **The plan screen's words are proposed.** The plan names, prices and features on 0e-p come from Greg's board and need Greg's and Heather's confirmation before they go into fixtures section 4 (issue O17).
3. **The school screen's heading may change.** It reads "Who's on your calendar?" and follows "Connect your calendar", so the two may read as the same thing (issue O11).

# 4. The plan: items, owners, statuses and marks

A family's plan is the best current version of the week, and it changes whenever someone's day does. Every screen that shows the plan, which is Today, the game plan, requests and coach cards, uses the model in this section.

## **Plan item**

| Field | Type | Description |
| ----- | ----- | ----- |
| Day and time | demo time | When the thing itself starts, as a day of the week and a time, or "All day" (§16). Ballet is at 4:15 pm, and Mallory's school run is at 8:30 am, when Westview starts. When she leaves belongs to the run on Today (§5, §16), such as 3:55 pm for ballet. |
| Title | string | The on-screen wording, such as "Alexis · Pick up at Cedar Grove, early dismissal". Taken verbatim from the fixtures. The child's name before the dot is drawn as her name chip, and the dot is dropped. |
| Children | references | The children it concerns, when there are any. Drawn as name chips or a group chip (below). |
| Place | reference | Where it happens. |
| Owner | person reference or none | The adult responsible. Shown as their name, as "You" for the parent, or as "Nobody yet". |
| Kind | enum | Routine, which repeats every week, or This week, which happens once. |
| Status | enum or none | Where a request or suggestion stands (below). Present only when another person or the coach is involved. |
| Marks | set | Changed and Conflict, which can sit on any item whoever owns it. |
| Note | string | A note the parent added, such as "Green dress, hanging in the laundry room". |
| Source | source reference | Where the item came from: a capture (§7), her calendar, or "From you". An item can have more than one. |
| From her calendar | boolean | True when the item came from her connected calendar. It shows the calendar mark, and it is moved or deleted in her calendar rather than in MVP. |
| Going with | strings | What goes with the child for this item, when anything does. On Today these items join the checklist under Now. |
| Task kind | enum | Tasks only. For this trip, which joins the checklist of the run it names, or Anytime, which shows "Anytime" in Later today (§5). |
| Steps | strings | Tasks only, optional. Steps the parent wrote herself, shown as a checklist when the task leads Now. |

## **Owner**

The owner is the adult responsible for the item. "Nobody yet" is drawn with its own mark, because an item with no owner is always something the week still needs from her. A suggested item has no owner until she chooses it.

## **Status**

The seed file uses the internal names. On screen, a person's answer is their outlined initial and an icon, so every status shows whose it is without spelling out a name that may be long. The words in the table are what each status says in notifications, in the coach's lines and in the accessible label every status carries. On a person's own page the initial is left off, because the page already belongs to that person.

| Internal name | On screen | What it means |
| ----- | ----- | ----- |
| Proposed | Suggested | The coach has suggested it and the parent has not chosen it yet. |
| Asked | Edward's initial and an hourglass, labeled "Asked Edward" | The parent has sent it to someone, and that person has not answered. |
| Accepted | Edward's initial and a thumbs up, labeled "Edward: yes" | The person asked has said yes. The item can still change. |
| Declined | Edward's initial and a thumbs down, labeled "Edward can't" | The person asked has said no. The item reopens with options beside it. |

## **Marks**

| Internal name | On screen | What it means |
| ----- | ----- | ----- |
| Changed | Changed | Something about the item moved since the parent last looked, because of a message or another person. The mark stays until she opens the item. |
| Conflict | Conflicts with yoga | The item collides with another one. |

When the plan asks one adult to be in two places at once, or leaves a child with nobody, both items show "Conflicts with" followed by the other item until the parent resolves it. An item that collides with two or more items names them together where it can, such as "Conflicts with both pickups", and otherwise gives the number, such as "Conflicts with 3 items".

A recurring item that collides with another every week, such as violin and therapy on Mondays, carries the Conflict mark on every week it applies, and the coach raises it once, before the first week it applies, rather than every week.

## **How people are shown**

Children, adults and the coach each appear in their own way, so a row can be read at a glance and the three never look alike, even in grayscale.

| Who | Shown as | Token |
| ----- | ----- | ----- |
| A child | A name chip, which is the first name in a filled pill | `kid`, `kid-bg` |
| Every child in a row, without adults | One group chip, reading "Both" or "All three" | `kid`, `kid-bg` |
| The whole household | One chip reading "Family", outlined | `adult` on `bg/card` |
| An adult who owns an item | An outlined initial | `adult` on `bg/card` |
| The parent herself | The word "You" | none |
| The coach | A solid dot | `coach` |

* **Children never appear as initials,** because children in one family can share an initial.
* **Chips lead each row in a list of items,** such as Later today, the game plan and requests, and the chip replaces the child's name in the row's text, so a row reads "[Mallory] Pick up at Westview". Checklists are grouped instead, under the child's first name in `kid`, and their rows carry no chips.
* **A row carries at most two chips.** A row that involves every child uses the group chip.
* **Guests are named in the row's text,** such as "Dinner with Claire", and carry no avatar.
* **The coach writes names in full.** Chips label items in the plan and never appear inside the coach's sentences.
* **A child who comes along gets the group chip,** and the row names the place rather than the activity, such as "[Both] Studio Ten".
* **There is one color for each kind of person.** All children share the children's green, and cerulean is for buttons, links and the active tab, never for a person.

## **Behavior notes**

* **A change she makes herself is never flagged back to her.** Taking the Wednesday carpool from the coach card shows "You" with no status and no Changed mark.
* **A decline always leads somewhere.** When a status becomes Declined, the coach card returns with a recommendation (§5, §6).
* **Conflicts are written into each moment in the prototype,** not computed at run time, because the seed is the source of truth for what appears on screen. The rule above is what the seed must agree with and what the real product computes, counting the fixed travel times between places.
* **Calendar items are hers.** An item that comes from her calendar has "You" as owner and no status, because she put it there herself. A new or moved calendar event that collides with the plan gets the Conflict mark like any other item.
* **Tasks are plan items too.** "Send Westview the pickup note" or "Call Brightwater and ask for Dana Whitfield" is an item owned by the parent, with no status, that she ticks off herself.

### **Standing decisions**

1. **Nothing is ever shown as settled.** The coach never calls a plan set, covered, sorted, done or final, and nothing else on screen does either. Accepted means a person said yes, and the item can still change.
2. **Owner, status and marks are separate.** The owner says who is responsible, the status says where a request or suggestion stands, and the marks say what has changed or collides. An item can carry one of each.
3. **The parent's own items show "You" and no status,** because there is nobody to wait on.
4. **People are shown by kind, not by person.** Name chips for children, outlined initials for adults and a dot for the coach replace the per-person colors and children's monograms of earlier versions.

### **Open conditions**

1. **How conflicts are detected in the real product** beyond the rule above, including whether a child at home with another adult counts as covered, needs defining before launch. The prototype does not depend on it.
2. **Why Alexis's 1:30 pm pickup conflicts with 2:15 pm yoga in C-01** is not explained by the travel times (issue G4). The seed follows the fixtures either way.

# 5. Today

Today is the home tab, and it shows the logistics for the current day and nothing else. It is quiet on purpose. A parent glances at it on her way out the door, so it leads with the one thing she needs next and keeps everything else out of the way.

The wireframes are 01 (C-03, Monday morning), 01b (C-03b, Monday afternoon), 02 (C-06, Wednesday morning), 02b (C-06b, Wednesday afternoon), 03 (C-07, Tonight), the standalone 0i wireframe (her first board, in three states) onboarding-19 (failure and waiting states), and the states added in wireframe pass 12: running late, the Leave sheet, the reminder sheet in its set and notifications-off states, Wednesday at 5:10 pm and Sunday.

## **Parts**

Today has a header and four parts, always in this order.

| Part | Shows | Words |
| ----- | ----- | ----- |
| Header | A dateline with the day and the date, then the phase of the day with its icon and the parent's monogram on one row. | Fixtures section 4, "Today" |
| Now | The next thing today that needs her at a set time: usually the current leg, laid out as a boarding pass: the route and the next station, the leaving time in Display with a status pill, the Drive, Arrive and Pickup or Starts fields, a perforation, then the grouped checklist, Remind me and Directions. When nothing timed is left, her leading task. When there is no task, a quiet line. | Each moment, and fixtures section 2, "Now, from one moment to the next" |
| Coach card | Only when the coach needs an answer from her, or for a short while after she has given one. It may concern any day. | Each moment |
| Later today | The rest of the day as a list, with times in a column, and a count of what is done beside the heading. | Each moment |
| MVP Recommends | At most one article, only when something in the week makes it useful. | Each moment |
| Capture bar | The coach's dot, "Type, talk or add an image", then attach, camera and microphone, docked above the tab bar. Hidden while the coach card asks for a capture. | Fixtures section 4 |

**Today has two surfaces.** The header and Now sit on paper (`bg/card`) at the top of the screen, because Now is the one thing she acts on next. The coach card, Later today and MVP Recommends sit below on a canvas sheet (`bg/canvas`) whose top corners are rounded at `radius/xl`, so the eye reads Now first and the rest of the day second. In the evening, Ready tonight takes the paper surface and Tomorrow starts the sheet. The sheet runs into the capture bar and the tab bar, which sit on canvas too. The surfaces are not cards: the coach card is still the only card, and everything else sits directly on its surface, with space between the parts instead of borders, divider lines or a timeline rail. There are no per-person rows and no column headings. The two surfaces also move differently. The header and Now stay in place, and the sheet scrolls up over Now until it meets the bottom of the header, so the dateline, the phase and the monogram stay in view. When Now is taller than the space between the header and the capture bar, it scrolls up under the header until its actions sit just above the capture bar, and then holds still. In the evening, Ready tonight stays in place and Tomorrow starts rises over it.

## **Phase of the day**

| Phase | Icon | Runs | Board |
| ----- | ----- | ----- | ----- |
| This morning | `phase-morning` | Midnight to noon | Now, the coach card, Later today, MVP Recommends |
| This afternoon | `phase-afternoon` | Noon until the board turns to tomorrow | The same, with what is done dropped from Later today and counted beside its heading |
| Tonight | `phase-tonight` | From 7:00 pm, or after the last activity scheduled past 7:00 pm | "Ready tonight", then "Tomorrow starts" with tomorrow's first departures and their checklists, then the coach card when there is one |

The word always appears with its icon, and the header is no taller than a plain title, so Now stays near the top. Tonight shows the day it is, not tomorrow. In the prototype the phase follows the moment's demo time, never the device clock.

## **Now**

| Field | Type | Description |
| ----- | ----- | ----- |
| Time | demo time | When she leaves on the current leg, in Display, such as "2:15 pm", or the time of a timed thing at home, such as "6:30 pm". |
| Route | string | Where she leaves from and where she is going, such as "Home → Westview", in Body strong, with a chevron. The arrow's accessible name is "to". Tapping the route or the time opens the Leave sheet. For a timed thing at home, the item instead, such as "Dinner with Claire". |
| Status pill | derived | Beside the time, at the right: "in 15 min", or "in 2 hr 30 min" for anything an hour or more away, and from the leaving time "Time to leave", filled. The only part of the pass that changes through a leg's stages. |
| Fields | derived | Three fields under the time, each a label in Meta over a value in Body strong: Drive, Arrive, and Pickup or Starts. Arrive is worked out from the leaving time, and from the leaving time onward from now, and is set in the warning ink with a clock icon when it falls after the stop's time. For a child leaving with someone else: With and Starts. |
| Perforation | | A dashed line across Now under the fields, separating the trip from the checklist and actions. |
| Checklist | groups | Items grouped under each child's first name in Body strong in `kid`, or "Both" or "All three", and her tasks marked for this trip under "Before you leave" in ink. Rows carry no chips and no counts. The check is a circle in a fixed left column, the whole row is the target, and a ticked row stays in place, dimmed. |
| Actions | buttons | Remind me, with a bell, and Directions, with a navigation arrow, both outlined. Directions appears only on a leg she drives. Remind me goes away from the leaving time. A task leading Now has Remind me and Ask someone. |
| Next station | derived | Under the route, in Meta: "Then Cedar Grove, 2:45", naming the next stop on her run, or "Then at 8:15, you leave for Westview" when a separate run leaves within 30 minutes. Absent when nothing follows soon. |

The drive line of version 0.14 is retired. Drive and Arrive carry what it said, and a set reminder shows only in its button.

### **What leads Now**

Now shows the next thing today that needs her at a set time. A leg she drives leads it, and so does a child leaving home with someone else, because the checklist is hers. Her own trips, such as yoga, lead it too. A timed thing at home, such as dinner with Claire, leads it when no leg comes first. When no timed thing is left, her leading task takes Now: a Meta line, "Nothing to drive to today." or "Nothing else to drive to today.", the task in Title, its steps, and a line saying what depends on it when the coach knows. When there is no task either, Now shows "Nothing else today."

Three kinds of item never lead her Now. Someone else's trip that does not start from her home stays in Later today with that person's initial and answer. An item that is Asked or owned by Nobody yet stays in Later today, and if an Asked item is still unanswered at the time she would have to leave, the coach card asks her to decide. An item with no known time stays in Later today with "Start time needed", and the coach card asks for the time.

When several tasks are left, the one with the earliest deadline leads, then the one something else depends on, then the one she added first. A task leading Now counts as done when she ticks it. Tasks on a leg's checklist do not count.

### **A leg from start to finish**

| Stage | When | What changes |
| ----- | ----- | ----- |
| Coming up | Before the leaving time | The status pill reads "in 15 min". |
| Time to leave | From the leaving time until five minutes after it | The status pill reads "Time to leave", filled, and Remind me goes away. |
| Running late | From five minutes after the leaving time until the destination is due | Arrive shows the real arrival, such as 2:31 against a 2:30 pickup, in the warning ink with a clock icon. |
| Passed | The destination is due | The leg leaves Now, adds to the done count, and the next leg on her run takes over from that stop. |

MVP follows the run and never asks her to tap that she has left or arrived. Directions routes from wherever she actually is.

### **The Leave sheet**

The Leave sheet is the one place Today changes a time. It opens from the time or the leg line under Now, from a Tomorrow starts row at Tonight, and from "Other options" on a coach card, which opens it scrolled to the backups. It is a tall sheet headed "When to leave", with a line naming the part of the day and the number of stops.

The body draws her run as a line of stations on a rail: the place, the item with its chips and start time, and "Leave at" with the time she leaves that stop. Home appears only where the run starts or ends there, and the last station reads "Back about" and the time. Tapping a "Leave at" time opens a time picker in place, and a line under that station gives the result as she turns it, such as "You reach Westview at 2:25, five minutes before pickup." Later stations follow. A late choice is stated and never blocked. Save keeps the change, and Close leaves everything as it was.

| Case | What happens |
| ----- | ----- |
| She changes when she leaves | The leaving time changes on that leg. The change carries no Changed mark, and a reminder she has set keeps its offset and moves with it. If the reminder's new time has already passed, the reminder is removed and the button reads Remind me again. |
| She changes the start time of her own item | "Change the start time" edits the item, the time's source becomes "From you", and the original source link stays. |
| A calendar item | Its start time reads "Change this in Google Calendar." Its leaving time can still change, because the leaving time belongs to MVP. |
| An item someone else owns or has answered | Nothing on Today changes it. It is changed in the game plan (§8). |
| A change that runs into another item | Both items carry "Conflicts with", and the coach card appears. |

### **Plan B and Plan C**

For a run the coach has worked out, the Leave sheet ends with "Other ways this could go": up to two backups, "Plan B ·" and "Plan C ·", each the coach's line and one button named for what it does, and a Why link that opens the coach's full message on the Coach tab.

- **A backup that involves a person is an ask.** Choosing it closes the sheet and opens a draft in her voice, and the item shows the person's initial and an hourglass once it is sent.
- **At least one backup depends on nobody else saying yes,** wherever one exists, and when there are two it is Plan C.
- **Backups respect the rules on the school card,** so a plan that needs a pickup note after the school's deadline is never offered.
- **When there is no second honest backup, the sheet says so** in the coach's words, such as "I don't see another way that keeps both on Friday."
- **When nobody in her plan can help,** the sheet offers Ask my village, because the coach does not find or recommend providers.
- **Choosing a backup that changes only her own plan works like accepting from the card:** no Changed mark, and Undo on the card until she leaves Today. A backup that sends a request has no Undo, because the request has gone.

In the prototype, backups are written only for the runs the demo shows (fixtures Appendix B item 56). Every other Leave sheet shows no backups.

### **Sheets**

A sheet holds a short decision about something already on screen and returns her to the same place. Anything she reads or works in is a page with Back. After she acts, the sheet closes and the screen shows the result. A sheet never opens another sheet.

| Part | Rule |
| ----- | ----- |
| Top | A grabber, and a Close icon at the top right with the accessible label "Close". Closing never changes anything. |
| Header | The heading, and an optional line in Meta naming what the sheet is about. |
| Body | One of four kinds: choices (radio rows), a single field, a line of stations, or a list of actions, each a line with one button. |
| Footer | The primary button, and an optional link for a second action, such as "Remove reminder". |
| Height | Compact, fitting its content, or tall and scrolling, which only the Leave sheet uses. |
| Set state | Reopened on something already chosen, the choice is selected and the button says so, such as "Update reminder". |

The sheets on Today are the reminder sheet, the answer sheet, the Leave sheet, the reminder sheets for a timed thing at home and for a task, and Ask someone.

## **Reminders and directions**

* **A reminder never sets itself.** Tapping Remind me opens a sheet headed "Remind me to leave", with the leaving time and the next stop beneath it and three choices: 15 minutes before, which is preselected, 30 minutes before, and when it's time to leave. Once she sets it, the button reads "Reminder at" and the time in its active state until it goes off, and tapping it reopens the sheet in its set state, with "Update reminder" and "Remove reminder". A timed thing at home offers 15 and 30 minutes before, and a task offers times of day, because it has no time of its own.
* **Directions opens her phone's maps app** with every stop in order. MVP draws no map of its own.
* **The reminder arrives as a notification,** only if she allowed notifications on 0j, naming the first stop and the last stop before home, such as "Leave in 15 min for Westview, then Brightwater", with Directions and a five-minute snooze. In the prototype the notification is drawn rather than fired (F5).
* **Reminders need notifications on.** When notifications are off, the reminder sheet says so above the choices. If she has never been asked, Set reminder brings up the phone's own request. If she has said no before, the line carries an "Open settings" link, because the phone will not ask again. The reminder is kept either way and goes off once notifications are on. In the prototype both cases are staged, and Charlotte's path has notifications on.
* **Driving times come from her zip code** with five minutes added, and in the prototype from the fixed travel times in the seed. "When it's time to leave" keeps the product's wording and sets its time from the same table, because the prototype cannot check traffic.

## **The coach card**

* **It appears only when the coach needs an answer from her,** with one exception: after she accepts a move or answers a question, the card says how the plan stands now until she leaves Today.
* **Its label names the day it concerns,** such as "Your coach · for Thursday", beside the coach's dot, in the Label style. A card that concerns no particular day is labeled "Your coach", and tapping it opens the full message on the Coach tab. A card about today reads "Your coach · for today".
* **It makes one recommendation with one button.** The button is named for what it does, such as "Move yoga to 12:15", and the line under it says what it changes, such as "Updates your game plan" or "Opens a text for you to send to Ms. Reyes". A button that only opens something she reads, or a sheet for her answer, has no line under it.
* **Pressing the button is her decision.** There is no second confirmation, and because the change is hers it carries no Changed mark. Afterwards the card shows the coach's line saying how the plan stands, a button for anything left for her to do, an Undo link and the meta line "Game plan updated". Undo puts every item back as it was, including any status the move resolved.
* **"Other options" opens the Leave sheet on Today,** scrolled to the coach's Plan B and Plan C, so she can choose another way without leaving Today. The Why link in the sheet opens the full message on the Coach tab. A card with only one way forward names the alternative instead, such as "Not this week" or "Remind me Monday".
* **When the coach asks for a fact,** the button reads "Answer" and opens a sheet, such as "Mallory's start time at Westview" with a time picker and Save. Her answer changes the board at once, and the card then says how the plan stands, with a button for what comes next, a link to change the answer and a meta line saying what was updated, such as "Westview card updated".
* **A move from the card never writes to her calendar and never books anything.** When a move needs a booking, the card hands her a link to the place, with an external-link icon.
* **A new calendar event that runs into the plan becomes the coach card,** naming the event, the calendar and what it runs into, as in C-06b.
* **The card carries no game plan link.** The day it concerns is in its label, and the full message on the Coach tab is the way to that day.

## **Later today**

* **Each row has its time in Meta, its chips and the item,** such as "2:30 pm · [Mallory] Pick up at Westview", and the times line up in a column. The time is when the thing starts, so a school run reads 8:30 am, and the leaving time belongs to Now. An anytime task reads "Anytime" in the time column.
* **What is done drops off the list,** and a count beside the heading says how much, "2 done this morning" before noon and "3 done today" from noon. When nothing is left, the heading stays with its count and no rows. When nothing was planned, Later today is hidden.
* **Anything that has changed today carries the Changed mark** on its row, and items from her calendar carry the calendar mark, `calendar-mark`.
* **A letter day follows the school's name,** such as "To Westview · B day".

## **Scrolling**

| Layer | How it moves |
| ----- | ----- |
| Header | Stays at the top of the screen, above everything that scrolls. |
| Now, or Ready tonight | Stays in place below the header. When it is taller than the space between the header and the capture bar, it scrolls up under the header until its foot sits just above the capture bar, and then stays. |
| The canvas sheet | Scrolls over Now, and passes under the header. |
| Capture bar and tab bar | Stay at the bottom of the screen. |
| Sheets | Rise over everything, with the scrim behind them, as before. |

* **Nothing on Now changes when the sheet covers it.** Her ticks, the countdown and a set reminder are exactly as she left them when she scrolls back.
* **Now keeps its place in the reading order.** A screen reader reads the header, Now, then the sheet, whatever is covered. When a control in a covered Now receives keyboard focus, the page scrolls back to the top so the control can be seen.
* **The build uses sticky positioning, not a scroll container inside the page.** The header is sticky at the top and stacked above the sheet. Now is sticky with its top set to the smaller of the header's height and the space above the capture bar minus Now's own height, and stacked below the sheet. The sheet stays in normal flow. Both offsets are worked out from the rendered heights, so the rule holds on every phone and when Now's height changes between moments.
* **The page itself scrolls,** so the browser's own scrolling, the address bar's behavior on a phone and the scroll position on returning from a sheet all work as they do on any web page.

## **Tonight**

In the evening Today turns to tonight's preparation. "Ready tonight" is a checklist laid out by the same rules as Now's, and "Tomorrow starts" shows tomorrow's first departures, each with its checklist. Tomorrow's full day stays in the game plan. On her first night, a child whose times MVP does not know yet shows "Start time needed" in the time column, in Meta, inside a dashed outline. Each Tomorrow starts row opens the Leave sheet for that leg, so she can change tomorrow's leaving time the night before.

## **Her first board**

Her first board after onboarding is Tonight on Monday, Oct. 5, in three states.

1. **On arrival (0i-a).** "Ready tonight" holds Mallory's sneakers, because Tuesday is a D day. "Tomorrow starts" holds both girls with "Start time needed", and the coach card, labeled "Your coach · for Tuesday", asks for Mallory's start time with Answer.
2. **The answer sheet (0i-b).** The board dims behind a sheet headed "Mallory's start time at Westview", with a time picker set to 8:30 am and Save.
3. **After she answers (0i-c).** Mallory's row shows 8:15 am, the leaving time worked out from her zip code, with no driver and no Changed mark. The card turns to the rest of the week with "Open the game plan", "Change the start time" and "Westview card updated". Her answer goes onto the Westview card with the source "From you".

The first board has no MVP Recommends card, because on Oct. 5 MVP has seen nothing that would give an article a reason. A parent who skipped the capture sees only the coach card asking for one thing to start with, holding Take a photo, Attach a file and Talk or type, and no capture bar.

## **MVP Recommends on Today**

At most one article appears, below Later today, with the label line "MVP Recommends · 3 min read" in Meta, the title in Voice at semibold, and a single reason line beginning "Because", such as "Because Cedar Grove conferences are this week." It never carries the coach's dot or tint, and it has no "See all".

## **At wider screens**

Today keeps the phone layout in a centered column beside the sidebar at tablet and desktop widths. A wide Today is parked as F20, because the quiet layout is designed for a phone, and the full-day grid of earlier versions is retired.

### **Standing decisions**

1. **Today shows today.** Anything later in the week lives in the game plan. The only exception is the coach card.
2. **There is one coach card at a time,** and it holds the single decision the coach most needs from her. It sits directly under Now, so the decision fits on the first screen.
3. **Tonight turns to preparation.** Most of the work of getting children out the door happens the night before.
4. **The dateline shows the day and the date,** such as "Monday, Oct. 12", above the title. The date comes from the demo calendar, never the device clock.
5. **The coach card is marked by the coach's dot and tint.** It carries no other signal, and saffron has no reserved role.
6. **A reminder is always her choice.** The coach can suggest one, but nothing sets a reminder for her.
7. **Today changes one kind of thing: when she leaves.** The Leave sheet is the only edit on Today, and it changes start times only on her own items. Notes, owners and moving an item to another day stay in the game plan, so Today stays quiet and never turns into busy work. Tapping a time never switches tabs.
8. **A run is a line, and home is just a station.** Now shows one leg at a time and steps down the line as each stop comes due.
9. **The coach keeps backups ready.** Plan B and Plan C are worked out before anything goes wrong and wait one tap away, and at least one depends on nobody else, wherever one exists.
10. **Leave and Remind me are separate sheets.** Leave changes the plan and can raise a conflict, and Remind me changes nothing anyone else sees, so neither hides behind the other's label.
11. **Two lines are drawn on Today, and no others.** The rail inside the Leave sheet and the perforation inside Now are the only lines. Today's surfaces keep no other rail, borders or divider lines, and Now has no border, so it is not a card.
12. **Now reads like a boarding pass when it holds a leg.** Each fact has a fixed place and a small label, so she learns where to look once. A timed thing at home, a task and the quiet line keep the plain layout.
13. **Checklists are grouped under each child's name, without chips.** Grouping does the job a chip does in a mixed list, so chips stay on rows in lists of items and leave checklists.
14. **Now stays in place, and the day rises over it.** The rounded top of the canvas sheet says it is a layer, so it moves like one. Now keeps its place because it is the next thing she acts on, the header never moves because the monogram leads to Settings and the demo controls, and a tall Now pins its foot rather than its head so nothing in it is ever out of reach.

### **Open conditions**

1. **Following the family rather than the clock,** such as ending the morning when the last child is dropped off, is parked as F15.
2. **The places need addresses for Directions** in the real product. The prototype stages the maps app.
3. **A two-home household gives one zip code** on the welcome screen. Whether it needs one for each home is open (issue O15).
4. **Whether parents find the Leave sheet without a separate Change link** goes to user testing (fixtures Appendix B item 53).
5. **The notification title names two stops** for a run with more, which needs checking on a lock screen (fixtures Appendix B item 54).
6. **The real product works out backups,** and the prototype carries only the ones the fixtures write (fixtures Appendix B item 56).
7. **Legs between places need the places' addresses** in the real product, because the zip code covers only legs from home (issue D2).
8. **Whether the sheet's edge reads clearly over Now** needs checking on a phone, because canvas and paper are close in tone and Today allows no new line (fixtures Appendix B item 58).
9. **Whether parents lose track of the leaving time** once the sheet covers Now goes to user testing. A compact strip with the route and time is parked as F29.

# 6. Coach

The Coach tab is where the parent talks to the coach. Captures land here with the coach's read-back, decisions come back as options, and her parenting questions get answers that fit her family. What makes the coach useful is that it already knows the family. When Charlotte asks about picture day morning, the answer is about Mallory, who is six, at Westview, with a green dress already chosen, leaving at 7:40.

The wireframes are 01a (the newsletter read-back in C-01), 04 (the voice note and the three options in C-01), 04b (the capture bar) and 08 (the question in C-08). The C-08b answer has no wireframe yet (issue W5). The full messages behind "Other options" in C-06 and C-06b have no wireframe yet (issue W4).

## **Layout**

The conversation runs newest at the bottom, with the capture bar below it: the coach's dot and the placeholder "Type, talk or add an image", then attach, camera and microphone. While the field holds typed text, the microphone becomes an arrow labeled "Give this to the coach". There is no Send on the bar, because Send means sending something to another person. The parent's messages and everything the coach says in the conversation are set in Inter, as Body. Each day of the conversation has a heading, "Today" for the current day and the day of the week, such as "Monday", for earlier days.

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
| Call a practice | "Call Northside" in C-08b | Opens her phone app with the practice's number. Staged in the prototype, and it leaves no task. |
| Add to an appointment | "Add the cough to Friday's checkup" in C-08b | Adds her question as a note on the plan item, with no Changed mark because the note is hers. |

## **Behavior notes**

* **Read-backs say what the coach took and what it left out.** The newsletter read-back keeps the two things that apply to Alexis and says the fifth-grade trip and the rest of the newsletter are not for her. The source link and the buttons sit beneath it.
* **The coach handles the rest of the week without comment and names the one day that needs her.** After Charlotte's voice note it matches what she said to the messages it already has and spends its words on Thursday.
* **The full message behind a coach card** quotes what changed, such as Edward's answer in C-06, and sets out every option the coach considered, with the recommended one first. It opens from the Why link in the Leave sheet. On Today, the same options appear as the recommendation on the card and Plan B and Plan C in the sheet.
* **She may choose against the recommendation.** Choosing another option is normal and leads to a plan as complete as the recommended one. In C-06 Charlotte chooses Min-jung over the 12:15 class because she knows something the coach does not.
* **The coach is plain about what is not yet true.** After she chooses, it lays out the day and says that none of it holds until the person asked has answered.
* **Every answer shows what it was based on,** under the heading "Based on", listing the family details used, such as "Mallory, 6, kindergarten at Westview · Picture day on Friday".
* **Support questions get support.** When a question is about how she is holding up, the first sentence acknowledges it plainly, without sympathy phrases, before the answer gets practical.
* **The coach knows its limits.** It does not plan money, find or recommend service providers or sitters, buy anything, or advise on custody, legal or medical questions. When a question needs a doctor, a therapist or a teacher, it says so and names the person from her inner circle where she has one. In C-08b it names Dr. Ortiz for Mallory's cough, gives Northside's number, offers to add the question to Friday's checkup, and attaches no article, because a medical question gets a person rather than reading. When names or local knowledge are needed, it points her to her village, as in C-05.
* **The coach never reads village groups or chats.** It knows what she has entered about each person, such as which class their children are in.

### **Standing decisions**

1. **One coach, one conversation.** Captures, decisions and questions share the Coach tab.
2. **The coach offers ways, not one answer.** Every planning decision comes back as two or three options with one recommended and a reason, and a decline brings the coach back with a recommendation. On Today the card shows the recommendation, and the Coach tab holds all the options.
3. **Answers use the family and show it.** The Based on line is required on every answer.
4. **The coach is an agent, a helper and one part of her support system.** It is not a therapist, a doctor or a lawyer.
5. **Coach answers carry no product links.** Links reach the parent only through staff-written articles.
6. **The coach is set in Inter in the app.** Body large on the Today coach card, where it speaks in a line or two, and Body in the Coach tab conversation, where it says more. Fraunces is kept for onboarding, titles and large headlines, so the coach reads as part of a sans-serif interface rather than as a display face.

### **Open conditions**

1. **The emotional register needs Heather's review** for every household's support answer before it is built (issue K1).
2. **The coach lines rewritten in fixtures 3.0 to 3.12 need Heather's read for tone,** including the lines on the first board and the coach cards (issue K2).

# 7. Capture

Capture is how things get into MVP. If the only way in were opening the app and pasting into the coach, the parent would still be doing the sorting herself, so MVP meets her where each thing already is, and everything she gives it goes to the coach.

The wireframes are 01a (a forwarded newsletter), 01c (sharing from WhatsApp), 01d (forwarding an email), 04 (a voice note), 04b (the capture bar), onboarding-04 to onboarding-08 (the first capture), onboarding-18 (entry points taught when useful), onboarding-19 (failure states) and 12d (a capture filed on a school card).

## **Entry points**

| Entry point | What she does | What it is for |
| ----- | ----- | ----- |
| The share menu | She presses and holds a message, email or photo in any app, taps Share and chooses MVP. MVP shows "Sent to the coach" and returns her to the Coach tab. | Messages from WhatsApp, WeChat, Telegram, Messages and Mail. Those apps do not let other apps read their chats, and MVP would not read them if they did, because nothing reaches the coach unless she sends it. |
| The forwarding address | She forwards an email to her private MVP address, or sets her email to forward a sender automatically. | School email, the largest source by volume. Once forwarding is set up, newsletters arrive without her doing anything. |
| The camera | She photographs a handout, a calendar on the fridge or a permission slip. | Paper that comes home from school. |
| Her voice | She taps the microphone and talks. | The stream of thought, such as a voice note in traffic that mixes three days, two children and a correction. |

Inside the app, she reaches the camera, a file or her voice from the capture bar on Today or the Coach tab, or from "Add to this card" on a school card.

## **What the coach does with a capture**

| Kind | Example | What the coach does |
| ----- | ----- | ----- |
| A one-off event | The Cedar Grove newsletter | Keeps only what applies to her children, using the grades it knows, and leaves out the rest. |
| A recurring rule | Westview's rotation calendar | Turns the rule into standing items on the children's checklists, such as "Library book" on library days and "Sneakers" on motor skills days. |
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

The prototype is a web app, which cannot fully appear in an iPhone's share menu, and it reads no live photos or email. Sharing, forwarding and photographing are scripted moments with prepared results. Sharing is shown as a staged sequence: the WhatsApp message, Forward, the selection with the share button, the share sheet with MVP in it, "Sent to the coach", and the Coach tab. The voice note plays a prepared recording with its transcript. Capturing from the capture bar outside a scripted moment shows the prepared result for that moment, or nothing when the moment has none.

## **Her calendar**

Most parents already keep one main calendar, and much of the family's week is already in it. MVP connects to it once, on setup screen 0q, so she never gives MVP anything twice. The prototype covers Google Calendar, Apple Calendar and Outlook.

| Behavior | Rule |
| ----- | ----- |
| Reading | MVP reads her calendar and never adds, changes or deletes anything in it. |
| Sorting | The coach reads each event and works out whom it concerns. The children's activities, appointments and school events come in under the child's name chip. Her own appointments come in as hers, because they decide when she can drive. Events with no time, such as birthdays and holidays, stay on the calendar. When the coach cannot tell whom an event concerns, it asks, still one question at a time. |
| Owner and status | Calendar items come in with "You" as owner and no status. She put them on her calendar herself, so they are not suggestions, and approving each one would undo the point of connecting. |
| Marking | Each calendar item carries the calendar mark on Today, in the game plan and on child pages, and the source link "From your Google Calendar", or the calendar she connected. |
| Keeping in step | When she adds, moves or deletes an event, the plan follows. A change she makes herself is not marked Changed. When a new or moved event runs into the plan, both items show "Conflicts with", and the coach card offers a way to resolve it. |
| Editing | A calendar item is moved or deleted in her calendar. In MVP she can add a note or put someone's name against it. Dragging it in the game plan shows "Change this in Google Calendar." |
| Moves from the coach card | A move she accepts from the coach card changes the plan and nothing on her calendar. |
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

1. **The share menu needs a platform decision for the real product.** A web app cannot register as a share target on iOS. The real product needs a native share extension or an installed web app on platforms that allow it (issue A1).
2. **How the coach decides that a captured fact is reference for a card rather than an event for the game plan** needs a rule before launch (§11, issue L2).
3. **Apple Calendar needs the native app.** A web app cannot read an iPhone's calendar, so Apple Calendar is staged in the prototype, as the share menu is (issue A7).
4. **How quickly the plan follows her calendar** needs a number before launch, along with what happens when she deletes an event that someone has already been asked about (issue A8).
5. **Edward's own calendar is out of scope.** Edward has MVP and could connect his own calendar. The prototype does not show it (F19).

# 8. Game plan

The game plan shows the whole week, from Monday to Sunday, and every item in it, including routine ones such as the daily school runs. It is where anything later in the week lives, together with every change and conflict, and where the parent decides. The coach suggests, and the game plan is hers.

The wireframes are 06 (C-04, Monday evening, with the wide layout) and 06b (the conflict in C-01).

## **Layout**

| Block | Shows |
| ----- | ----- |
| This week's changes | Every item for the rest of the week that is suggested, asked, declined, changed, owned by nobody or in conflict, one entry per item, each with its day, title and status or mark. Tapping an entry opens its day. |
| This week | Each day from Monday to Sunday, with every item in time order showing its time, chips, title, owner, and status or marks when it has them. Days already past are dimmed. |
| Next week | Shown when an item has been moved into it, such as the second tutoring session. |

Headings read "This week's changes", "This week" and "Next week". Day headings name the day of the week only.

## **Behavior notes**

* **Routine items are visually quieter** than items that happen only this week, so the week stays readable. A routine item that carries a status, a Changed mark or a conflict is drawn at full weight until it clears.
* **Children appear as name chips,** following §4, at every size.
* **One entry per item in This week's changes,** so an item in conflict appears once with its conflict mark.
* **Opening an item clears its Changed mark.**
* **Notes show under the item** at full weight, even on a quiet routine item.
* **Calendar items carry the calendar mark,** so the week shows what came from her calendar.
* **Every item shows the time it starts,** such as ballet at 4:15 pm, never the leaving time.
* **School runs show the time school starts,** such as 8:30 am, because every item shows when the thing starts. The leaving time belongs to the run on Today.

## **Working the plan directly**

The parent works the game plan without the coach.

| Action | How | What happens |
| ----- | ----- | ----- |
| Move an item | Drag it to another time or day, including into next week | The item moves. A suggested item she moves stays Suggested at its new place. A calendar item does not move, and the game plan shows "Change this in Google Calendar." |
| Add a note | Tap the item and type | The note shows under the item. |
| Put someone's name against it | Tap the item and choose a person | Sends that person a request (§9), and the item shows "Asked" and their name. |
| Tick off a task | Tap its checkbox | The task shows as done. |
| Change the time of an item someone has answered | Tap the item and change its time | The item's answer stays until she sends the change. Sending it returns the item to Asked, and until she sends it the coach card says the person has not seen the new time. |

At wider sizes, next week sits under this week in the same seven columns, so moving an item to the following Tuesday is a straight drag down its own column.

### **Standing decisions**

1. **The game plan holds every item,** including routine ones, because the parent needs to see the whole week to change it.
2. **This week's changes is where the rest of the week asks for her.** Nothing later in the week appears on Today except through the coach card.
3. **Direct edits are hers.** A change she makes herself is never flagged back to her, and nothing she does here goes through the coach.
4. **Dinner appears only when the schedule forces it to move, or as an event in the week,** such as Wednesday's dinner with Claire. There is no dinner row and no shopping list in the prototype (F16).

### **Open conditions**

1. **Whether day headings should also show dates** is open (fixtures Appendix B item 26). The prototype shows day names.

# 9. Requests

Part of the plan often belongs to someone else. A request is that part, sent to a person and asking them to take it on. The coach drafts it, the parent changes whatever she wants, and she sends it herself.

The wireframes are 05 (C-02 and C-06), 05b (the handoff to Edward), 05c (answering), 1e (the reply handed to WhatsApp) and 02b (the text to Ms. Reyes and her web page). Edward's library run card with a note (C-04b), Edward changing his answer and Min-jung's card (C-06), and Ms. Reyes's text message have no wireframes yet (issue W5).

## **How a request reaches someone**

| Recipient | How it arrives | How the answer comes back |
| ----- | ----- | ----- |
| Someone who has MVP, such as Edward or Min-jung | As a request card in their own MVP, with a notification on their phone. They see only the requests she sends them and nothing else of her plan. | They answer each item with "I've got it" or "I can't do this", and each answer appears as a status on her plan. |
| Someone without MVP, such as Ms. Reyes | As a text message to the mobile number she entered, reading "Charlotte sent you a request through MVP. You can answer here:" and a link to a single web page with the request and the same buttons on each item. No account is needed. | The same two buttons update her plan in the same way. |
| A group or organization outside MVP, such as a parents' WhatsApp group or a school office | MVP hands the drafted text to the app she chooses, and she sends it from there. | Nothing comes back. Sending it becomes a task on her own list, which she ticks off herself. |

Charlotte's week uses all three: Edward and Min-jung through their own MVP, Ms. Reyes through the web page in C-06b, and the parents' WhatsApp group and the Westview office through another app.

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

Edward's own MVP shows his monogram, the dateline and the phase title, such as "Monday, Oct. 12" over "This morning". His Today holds only the items he owns and the requests Charlotte sends him, with the request card at the top. The web page for someone without MVP shows the same heading, text and buttons, with "You don't need MVP to answer." under the buttons, and no tabs.

The fixtures write every recipient screen in Charlotte's week, and View as (§15) shows each of them.

| Moment | Recipient | Screens |
| ----- | ----- | ----- |
| C-02 | Edward | The request card, and the card after he answers both items |
| C-04b | Edward | The library run card, his "I've got it" with the note "I'll take Mallory too, she wants new books.", and the item in her game plan with the note and the Changed mark |
| C-06 | Edward | Changing his answer on Mallory's pickup, with his note and the button "Send answer" |
| C-06 | Min-jung | The request card, and the card after she answers |
| C-06b | Ms. Reyes | The text message with its link, the web page, and the page after she answers |

The recipient's other tabs are not part of the demo.

## **Behavior notes**

* **Each item is answered on its own.** Edward can take one pickup and decline the other. The card lists each item with its own "I've got it" and "I can't do this", and a note field reading "Add a note for Charlotte".
* **A note never edits her plan.** A note with "I can't do this" reopens the item, and the coach card turns it into a recommendation, as in C-06. A note with "I've got it" shows under the item with the Changed mark until she opens it.
* **Answers can be changed.** After answering, each item shows the answer and a Change link, under the line "Charlotte can see your answers. If anything changes, change your answer here."
* **She hears about every answer.** Each answer and each changed answer arrives as a notification, such as "Edward: yes to both pickups on Thursday." or "Edward changed his answer for Thursday.", and as a status on the item.
* **No read receipts.** Nobody can see whether the other person has opened a request.
* **Sending marks the items.** Once sent, the items show the person's initial and an hourglass. The answer changes the icon to a thumbs up or a thumbs down, and the accessible label reads "Asked Edward", "Edward: yes" or "Edward can't".
* **An accepted request can reopen.** In C-06 Edward answers again that he can't collect Mallory, which reopens her pickup and brings back the coach card while Alexis's keeps Edward's thumbs up.
* **A decline always leads somewhere.** The coach card returns with a recommendation, and "Other options" opens the Leave sheet with Plan B and Plan C. When Edward can't, it recommends the 12:15 yoga class. When Min-jung can't, it recommends the same move, and Other options holds the one Charlotte has not tried.
* **Every handoff leaves a task.** MVP cannot see whether a message handed to another app was sent, so each handoff leaves a task on her list until she ticks it off, such as "Send Westview the pickup note" in C-06 and "Reply to the parents' group" in C-03. The plan itself follows her choice in MVP, not the sending. Two handoffs leave no task, because neither is a message about the plan: an invitation to MVP (§10) and a call (§6, §10).
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

1. **What someone else's MVP shows beyond their Today and their requests** needs defining for the real product. The prototype shows only those, through View as.
2. **Marcus's household will show recipient-scoped views across several people.** Those views are specified when his fixtures are rewritten.

# 10. Team

Parents take their questions and their logistics to two different groups of people, and MVP keeps them apart because they do different jobs. Her inner circle is who she hands parts of the plan to and who she talks with about private things, such as how to tell Alexis that her therapist is leaving. Her village knows the local answers, such as which therapist has openings. Both live on the Team tab, together with the conversations she has with each: chats with her inner circle and posts in her village groups.

The wireframes are 10 (the lists) and 07 (C-05, asking the village). The chats, the person pages, the group page, both composers, adding someone and creating a group have no wireframes yet (issue W5). Until they do, they are built from fixtures section 3, "The Team tab", with the components already built.

## **Sections**

"New message" sits at the top of the tab, and the sections follow in this order.

| Section | Holds | Each row shows |
| ----- | ----- | ----- |
| Chats | Her chats with people in her inner circle, ordered by the latest message, newest first | The other people's names, such as "Edward and Claire", the latest message cut to one line with its author's name unless it is hers, its time today or its day, and "1 new" when unread. Before her first chat the section shows the line from fixtures section 4. |
| Village groups | Groups she creates inside MVP, ordered by the latest post or reply | The group's name, the number of members, the latest post or reply with its author, and "1 new" when unread. |
| Inner circle | The people she trusts with her children and her private life: her partner, grandparents, close friends, a nanny, and the family's own doctors, therapists and tutors | Outlined initial, name, a line written to her, such as "Your husband" or "Pediatrician, Northside Pediatrics", and "On MVP" when they have it. |
| Village | Everyone else who shares her children's week for a few hours at a time: school parents, carpool families, coaches and team parents | The same as the inner circle, with a line such as "Sophie and Hana's mom · Monday carpool". |

"Add someone" and "New village group" sit below the lists. When anything is unread, the Team tab carries a dot, with the accessible label "Team, 1 new" or the number that applies.

## **Person**

| Field | Type | Description |
| ----- | ----- | ----- |
| Name | string | As she entered it. |
| Group | enum | Inner circle or Village. |
| Line | string | The line shown under the name, written to her. |
| Has MVP | boolean | Decides whether they can be in a chat or a group, and how a request reaches them (§9). |
| Contact | object | A mobile number, or for a professional the practice's name and number, such as "Northside Pediatrics · 555-0160". |
| What she has told the coach | strings | Such as which class their children are in. The coach uses this, and only this. |

## **Person page**

Tapping a person opens their page, which shows Back in place of the monogram.

| Part | What it shows |
| ----- | ----- |
| Header | Their name. |
| Line | Their line, then "On MVP" or "Not on MVP". |
| Actions | Message, for inner circle members on MVP. Call, for anyone with a number. Text, for anyone not on MVP who has a mobile number. |
| Contact | "Mobile" and the number, or the practice's name and number. |
| This week | Each item this week that they own or have been asked about, laid out as lanes like Later today: the day abbreviated to three letters, such as "Thu", in the time column, then the chip, the item and the answer icon without the initial, and every request sent to them this week, even after its item has left the plan. When there is none, "Nothing in this week's plan with Claire." with their name. |
| Under This week | For someone on MVP, their name and "sees only what you send." |
| Chats or Groups | The chats she shares with an inner circle member, or the groups a village member belongs to. |

## **Chat**

| Field | Type | Description |
| ----- | ----- | ----- |
| Members | references | One or more people from her inner circle, each of whom has MVP. The parent is always a member. |
| Name | derived | The other members' names, such as "Claire" or "Edward and Claire". It cannot be edited. |
| Messages | array | Each with an author, text and a fixed demo time, listed oldest first. Her own are labeled "You". |
| Unread | integer | Messages that arrived since she last opened it. Shown as "1 new". |

A chat opens with Back and its name, the line "Only you, Edward and Claire see this chat. The coach doesn't read it." with the members named, the messages, and a Message field with a Send button.

## **Village group and post**

| Field | Type | Description |
| ----- | ----- | ----- |
| Group name | string | Such as "Cedar Grove parents". |
| Members | references | Village members, each of whom has MVP, and the parent. Shown on the group page as "8 members · See members". |
| Created | demo time | Shown as "You created this group last week." until the group has posts, and at the end of the list after that. |
| Post author | reference | Shown as "You" on her own posts. |
| Post text | string | Text only. |
| Posted | demo time | Shown as a fixed time, such as "12:20 pm", never as relative time. |
| Replies | array | Each with an author, text and fixed time, listed newest first. |
| Unread | integer | Posts and replies since she last opened the group. |

The group page shows Back, the group's name, "8 members · See members", a New post button and the posts, newest first.

## **The composer**

"New message" opens one composer for both audiences, headed "New message", with the choice "Inner circle | Village" at the top.

| Audience | Who she chooses | Note above the button | Button |
| ----- | ----- | ----- | ----- |
| Inner circle | One or more members who have MVP, or "Everyone on MVP", which chooses all of them. Members without MVP are listed beneath, marked "Not on MVP", and cannot be chosen, with the line "People who aren't on MVP can't be in a chat. Call or text them from their page." | "Only Edward and Claire see this chat. The coach doesn't read it.", naming the people chosen | Send |
| Village | One village group | "Only the people in this group see this. The coach doesn't read it." | Post |

Sending to the inner circle starts a chat, or adds to the chat she already has with exactly those people. Posting to the village adds a post to the group.

## **Adding people and groups**

"Add someone" asks for a name, a mobile number, who they are to her, with the helper "Shown under their name on your Team.", and Inner circle or Village. MVP checks the number. If the person has MVP, the screen says "Min-jung Park is on MVP." with Done. If not, it says that requests reach them by text message and offers "Invite by text" and "Not now". "Invite by text" hands a short text to her messages app, addressed to the number she entered, for her to send herself.

"New village group" asks for a group name and the members, chosen from the people in her village who have MVP, with the line "Everyone in a group needs MVP to see its posts. Only members see what's posted, and the coach doesn't read it."

## **Behavior notes**

* **Message on a person page** opens her chat with that person alone, or the composer with only that person chosen when there is none, as in C-06c.
* **"Everyone on MVP" is how she asks her whole circle.** It shows as chosen whenever every member on MVP is chosen, so choosing Edward and Claire by hand in C-05c ticks it too.
* **Asking the village can start from the coach.** "Ask my village" on a coach card opens the composer with Village chosen, the group it goes to and a draft in her own words, as in C-05. She can change any of it before it goes.
* **Chats are written by the parent alone.** The coach drafts requests, village posts and handoffs, but it never drafts, starts or joins a chat (F23).
* **Messages and replies arrive on a script** at the times in the fixtures, and each screen is shown as she sees it at a fixed time, such as 5:00 pm on Tuesday in C-05. Each arrival is drawn as a notification, such as "Claire: Yes, see you at 6:30. I'll bring dessert." or "Jenna Okafor replied to your post in Cedar Grove parents.", and "1 new" and the tab's dot clear when she opens the chat or group.
* **Nothing said on Team changes the plan.** In C-05 she reads the replies and adds "Call Brightwater and ask for Dana Whitfield" to Wednesday herself. In C-05c Edward suggests Sunday night, and she does not add it.
* **Requests stay separate from chats.** A request carries plan items and answer buttons, and a chat does not, so part of the plan always goes to someone as a request (§9), even to someone she also chats with.
* **Groups outside MVP stay where they are.** A parents' WhatsApp group stays in WhatsApp. She shares messages from it into MVP when she wants the coach to see them, and she replies to it from WhatsApp (§9).
* **The prototype stages adding, checking, inviting and calling.** The result of checking a number comes from the seed, and Call, Text and Invite by text show the handoff without leaving the app. Nothing is sent and no call is made.

### **Standing decisions**

1. **Inner circle and village are separate lists on one tab,** because a parent hands parts of the plan and private questions to her inner circle and takes local questions to her village.
2. **The inner circle is reached in chats and the village in groups.** A chat with one person is a direct message, a chat with several is a group chat, and "Everyone on MVP" reaches all of them. Village members are not messaged one to one in this version (F22).
3. **Conversations live inside MVP, and everyone in one needs MVP.** Only the members of a chat or a group see it.
4. **The coach never reads chats or village groups.** It does not read, summarize or reply to anything in them. The people in them expect to be talking to her, and that is why they are worth having.
5. **The village is where requests the product declines can land.** The coach does not find or recommend providers, so when a question needs names, such as a new therapist, it sends her to her village.
6. **Chats and groups are invite only.** There are no public groups, no search for other parents and no suggested members.
7. **Posts and messages are text only,** which also keeps photographs of children out of the product.
8. **Invitations and calls leave no task,** because neither is a message about the plan that she might forget to send (§9).

### **Open conditions**

1. **Children's names in posts and chats.** Parents will name their children in private conversations. Whether the product should do anything about that is a question for Heather before launch, not for the prototype (issue M2).
2. **Sharing a chat message with the coach is not decided.** A chat might hold something the plan needs, such as Edward offering to drive, and nothing in this version sends it to the coach (F25).

# 11. Kids and school cards

The Kids tab holds a page for each child and a card for each school. A school card holds what a parent otherwise keeps in a drawer of handouts and a folder of emails, and the coach uses it when a message needs to go to the school.

The wireframes are 12a (the Kids tab), 12b (Mallory's page), 12c and 12d (the Westview card, before and after C-05b) and 12e (the Cedar Grove card). Alexis's page follows 12b and has no wireframe of its own yet.

## **The tab**

| Section | Each row shows |
| ----- | ----- |
| Kids | The child's name, with the grade and school beneath it, such as "Alexis" over "Fourth grade · Cedar Grove". No initial or chip, because the row is the child. |
| Schools | The school's full name, with the children who attend it beneath it, and the Changed mark when anything on its card has changed. |

An "Add a school" button sits at the foot of the tab for parents who would rather type a school in.

## **Child page**

| Section | Shows |
| ----- | ----- |
| Header | The child's name, age and grade, such as "Mallory · 6 · Kindergarten". There is no monogram and no photograph. |
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

The card is headed with the school's name and carries an "Add to this card" button, which opens capture already addressed to that school. Events further away than this week may be written with their date, such as "Harvest fair, Friday, Oct. 23, 3:00 pm".

## **Card fact**

| Field | Type | Description |
| ----- | ----- | ----- |
| Section | enum | One of the sections above. |
| Text | string | As shown on the card. |
| Source | source reference | Shown when she opens the fact, such as "From the family contact list · photo", or "From you". |
| Changed | boolean | True until she opens it. |
| History | array | Earlier versions, each with its text and when it stopped applying. |

## **Behavior notes**

* **The card opens from the Kids tab and from the school's name anywhere it appears,** such as "Westview" in "[Mallory] Pick up at Westview" on Today.
* **Siblings at the same school share one card,** so an update reaches both.
* **Source links appear when she opens a fact,** not under every line.
* **Sections with nothing in them are hidden.**
* **Cards are kept current through capture.** When a capture contains reference, the coach files it on the right card and says so in its read-back, while events go to the game plan and rules become standing items. In C-05b the Westview email changes the pickup contact and rule, both carry the Changed mark until she has seen them, and the earlier version stays in the card's history.
* **Cards start from the first capture.** The first card is created from whatever she captures first. When the coach does not know a child's school, or a fact such as a start time, it asks on Today, as it does for Mallory's start time on her first board.
* **The coach asks at predictable moments.** Near the end of each month it asks for the next rotation sheet, after a long break it asks whether the hours have changed, and in late summer it asks for the new year's handouts, keeping the contacts but marking the teacher and grade for a check. None of these falls in the demo week.

### **Standing decisions**

1. **Kids is a tab.** Parents look at their children's schools every week.
2. **No separate flow for adding school information.** The four entry points already cover it, and each card has its own Add.
3. **A change from a school is never a silent edit.** It is marked, and the old version is kept.
4. **The coach asks instead of choosing** when a new document contradicts an old one in a way it cannot resolve.
5. **The prototype covers schools only.** Cards for studios, teams and clinics are parked as F14.

### **Open conditions**

1. **How long a card's history is kept** needs defining before launch (issue L1).
2. **The rule for reference versus event** needs defining before launch: how the coach decides that a captured fact belongs on a card rather than in the game plan (issue L2).
3. **The coach's line asking for next month's rotation sheet is not written,** because it falls outside the demo week (issue K3).

# 12. MVP Recommends

MVP Recommends is MVP's own editorial content: short, practical articles written by MVP staff for parents. There is no tab. An article reaches the parent in one of two ways: as a card on Today, chosen because of something in her week, or attached to a coach answer when she asks for ideas.

The wireframes are 09 (the article view from C-08), with the Today card on 01 and 02 and the attached card on 08.

## **Card**

| Field | Type | Description |
| ----- | ----- | ----- |
| Label line | derived | "MVP Recommends ·" and the reading time, such as "MVP Recommends · 3 min read", in sentence case, in Meta. |
| Title | string | In the Voice style at semibold. |
| Reason | string | Today only. A single sentence beginning "Because", such as "Because Cedar Grove conferences are this week." |

## **Article**

| Field | Type | Description |
| ----- | ----- | ----- |
| Label line and title | as above | Shown at the top. |
| Byline | string | "By" followed by the writer's name and "MVP staff", such as "By Sam Adeyemi, MVP staff". The names are placeholders until real staff writers are named. |
| Illustration | image | Optional spot illustration, drawn by a person. |
| Body | sections | The article text from the fixtures, set in Body, because it is written by a person, not the coach. |
| Links | array | Optional links to where a recommended product is sold. Never sponsored and never affiliate. |

The article view has a Back link. Topics in use are School and Mornings, and earlier topics such as We tried it, Care, Food, Gear, Weekends and Camps remain available to the other households. The topic is kept in the seed for the library and is not shown on the card.

## **Behavior notes**

* **Every card on Today has a reason,** and the card appears only while the reason holds. The conference article appears on Today from Monday to Thursday, because Cedar Grove conferences fall on Thursday and Friday.
* **Today shows at most one article,** below Later today. There is no "See all", because there is no library to open.
* **An answer carries at most one article.**
* **Articles never carry the coach's dot or tint.**

### **Standing decisions**

1. **MVP staff write every article, and none is generated.** Each carries its writer's name.
2. **Articles follow the coach's rules only where they overlap:** no em-dashes and no filler. They are otherwise written in the writer's own voice.
3. **Links are editorial, never paid,** in the manner of Wirecutter.
4. **Camps are covered as advice, not listings.**
5. **Some articles carry spot illustrations** drawn by people, and an article without one is complete.

### **Open conditions**

1. **Six articles still need writing,** two for each of the other three households, and who writes them is not decided (issue R10). Charlotte's two are written in full in the fixtures.
2. **The library and sharing an article** to the village or another adult have no wireframe or copy in the fixtures. They are not built for Charlotte's household (issue R11).

# 13. Settings

Settings opens from the parent's monogram at the top right of every tab on a phone, and from the bottom of the sidebar at wider sizes. It holds Your account, Your calendar, Notifications, Your forwarding address, Language at home and Privacy. Your calendar shows the connected calendar and lets her disconnect it or connect one later. Settings is not drawn for the demo, and in the prototype the monogram opens a placeholder page listing those six headings with a Back link.

The child profile that v0.6 kept in Settings is now the child page on the Kids tab (§11), and the people who help are on Team (§10).

### **Standing decisions**

1. **Settings sits behind the monogram,** because parents visit it rarely.
2. **No photographs of children anywhere.** Children appear as name chips (§4), and a child page is headed with the child's name. Optional child photos are not adopted (fixtures Appendix B item 35).

# 14. Coach voice

Every line the coach writes follows the rules below. Codex should treat any violation as a bug.

## **Rules for every line**

**The coach always** writes in the present tense, addresses the parent directly, and refers to children by name.

**The coach never** opens with a filler such as "Okay" or "Alright," praises the parent, or describes what it has just done. It never uses em-dashes, sentence fragments, sets of three parallel phrases, or planner words such as window, slot, block, buffer or lane. It never uses a pronoun in place of a child's name. Nothing it writes should read as though a machine wrote it.

## **Plans**

Plans tell the parent what she needs to do, with specific places, the time she needs to be ready, and what to bring. This is the standard every plan line is measured against:

> You need to be at the Northgate Aquatic Center with Lily, ready to go by 4:15 on Tuesday. Benjamin has soccer at Cedar Field at 9am Saturday. Bring snacks and warm clothes, it'll be chilly. That leaves you Saturday afternoon to shop for the party gift.

## **Coach cards**

A coach card on Today speaks in a line or two. It says what changed, recommends one thing, and gives the reason in the same sentence where it can, such as "Edward can't get Mallory at 2:30 on Thursday. I'd move your yoga to the 12:15 class, so you can collect Mallory yourself." The full reasoning and the other options belong on the Coach tab.

## **Answers**

Answers can explain, because a question deserves a reason as well as a suggestion. An answer starts with the most useful thing, gives her something specific to try, and stays to four or five sentences. When the question is about how she is coping, the first sentence acknowledges that plainly, without sympathy language like "I hear you". The coach's answer in C-08 is the standard for answers.

## **Messages to other people**

Requests, notes to organizations and village posts are written as the parent, in the first person, in plain everyday language. They should not sound like the coach, because the person reading them is hearing from her.

## **Articles and interface copy**

MVP Recommends articles are written by staff in their own voice and follow only the rules against em-dashes and filler. Labels, headings and buttons are interface text and follow plain language rather than the coach's rules.

### **Standing decisions**

1. **`npm run voicecheck` scans every coach string in the seed files** for em-dashes, the banned openers and the banned planner words, and scans articles for em-dashes. It cannot judge tone, so it does not replace reading the lines.
2. **`voicecheck` also checks dates.** It fails on any calendar date or four-digit year written into a coach line or an interface string, because on-screen dates are worked out from the demo calendar and never typed in. Month names are allowed only in the prepared documents, such as the rotation calendar, and in the coach's read-back of that calendar.
3. **A coach line is changed in the fixtures first,** then in the seed, so the two never drift.

# 15. Demo controls

| Control | How it opens | What it does |
| ----- | ----- | ----- |
| Opening | Loading the prototype | Opens on C-00 at the splash, so a reviewer goes through onboarding first. Every other moment, such as C-03, is a jump in the switcher. |
| Household switcher | Long press on the parent's monogram, on every tab and at every size | Switches between households that are built. There is no keyboard shortcut, because the demo runs on phones and tablets as well as laptops. |
| Moments | Inside the switcher | Jumps the current household to a moment by ID. |
| View as | Inside the switcher | Shows the current moment from the recipient's side: their Today with the requests she has sent them, and the screens they answer on, for Edward, Min-jung, or Ms. Reyes's text and web page (§9). The recipient's other tabs are not part of the demo. |
| Phone frame | Inside the switcher | At desktop widths, shows the app inside a phone frame or in its full desktop layout. |
| Reset | Inside the switcher | Returns the current household to its first moment. |
| Debug menu | Inside the switcher | Switches the coach between scripted responses and a live model, and shows the current moment and demo time. |

## **Charlotte's moments**

| ID | Demo time | What happens | Opens on | For the script |
| ----- | ----- | ----- | ----- | ----- |
| C-00 | Monday, Oct. 5, 8:30 pm, the week before | Onboarding, from the splash to her first board and her first answer | Splash | Core |
| C-01 | Monday, Oct. 12, 6:15 am | The newsletter read-back, sharing Jenna's message, the voice note and three ways Thursday could go | Coach | Core |
| C-02 | Monday, Oct. 12, 6:40 am | Charlotte asks Edward, and Edward sees the request in his own MVP | Coach, the draft | Core |
| C-03 | Monday, Oct. 12, 7:25 am | Getting both girls out of the house | Today | Core |
| C-03b | Monday, Oct. 12, 2:00 pm | The afternoon run as a line: the reminder, two pickups and therapy, and the Leave sheet | Lock screen, the reminder, then Today | Core |
| C-04 | Monday, Oct. 12, 8:50 pm | Working the game plan without the coach | Game plan | Optional |
| C-04b | Tuesday, Oct. 13, 7:05 am | Edward says yes to the library run and adds a note | Edward's request card, through View as | Optional |
| C-05 | Tuesday, Oct. 13, 12:20 pm | Asking the village about a new therapist | Today, the coach card | Core |
| C-05b | Tuesday, Oct. 13, 3:40 pm | A Westview email updates the Westview card | Coach, the read-back | Optional |
| C-05c | Tuesday, Oct. 13, 8:15 pm | Charlotte asks Edward and Claire together how to tell Alexis about her therapist | Team | Core |
| C-06 | Wednesday, Oct. 14, 11:45 am | Edward can't collect Mallory, and Charlotte chooses against the recommendation | Today | Core |
| C-06b | Wednesday, Oct. 14, 1:15 pm | A checkup she booked outside MVP reaches the plan through her Google Calendar and runs into Friday's tutoring, and she asks Ms. Reyes by text message | Today, the coach card | Core |
| C-06c | Wednesday, Oct. 14, 4:50 pm | A direct message to Claire about dinner, and Claire's reply as a notification | Team, Claire's page | Optional |
| C-07 | Wednesday, Oct. 14, 9:10 pm | Tonight, getting ready for Thursday | Today | Optional |
| C-08 | Thursday, Oct. 15, 8:40 pm | A question about picture day morning, with an article | Coach | Core |
| C-08b | Thursday, Oct. 15, 9:05 pm | A question about Mallory's cough, where the coach names Dr. Ortiz | Coach | Core |

Each moment holds the full state of the household at that point, so jumping to any moment shows exactly what the fixtures describe, whatever was tapped before. Within a moment, the scripted steps play in order as the presenter taps, such as Charlotte's answer at 8:41 pm in C-00, Edward's answer at 7:52 am in C-02, Min-jung's answer at 12:30 pm in C-06 or Claire's reply at 4:58 pm in C-06c. The boards for running late, Wednesday at 5:10 pm and Sunday are not moments and are not built in review build 1.

The other three households get moments when their fixtures are rewritten.

## **Behavior notes**

* **The demo calendar drives everything time-based,** including the dateline, the phase of the day, countdowns and what has passed. The device clock is never read.
* **Every tab shows its state at the moment.** After a jump, the tester can open any tab. The Coach tab shows the conversation up to the moment, the game plan shows the week as the fixtures' table stands at that moment, Team shows the chats, posts and replies that exist by then, and Kids shows each card as it stands then. Nothing is blank, and nothing from later in the week shows early.
* **Switching households or moments leaves nothing behind.** No data, open panel, conversation or scroll position survives the switch.
* **The debug menu is never used during a presented demo.** The live model needs a network connection and adds wait time, which are the two things the scripted design exists to avoid.
* **The live model covers the coach only.** Village replies and other people's answers are always scripted, because a model writing as a real person would break the village's promise even in a demo.

### **Open conditions**

1. **None.** The switcher's trigger is decided: a long press on the monogram (issue X1, closed October 14, 2026).

# 16. Data model

Each household is one JSON file in `src/data/households/`, written directly from the fixtures, and all four share this structure:

`{ meta, people, children, schools, places, travel, calendar, planItems, rules, captures, requests, villageGroups, chats, conversation, coachCards, reminders, recommended, moments }`

Articles live separately, one file per article in `src/data/articles/`, because the library is shared. Interface copy from fixtures section 4 lives in `src/copy/`, so every visible word has one home.

## **Demo time**

Every time in the seed is a demo time, and the seed holds one calendar date, the demo week's Monday, in `meta.demoWeekStart`. On-screen dates are worked out from it.

| Field | Type | Description |
| ----- | ----- | ----- |
| week | integer | Weeks relative to the demo week. 0 is the demo week, -1 is the week before, which holds C-00, and 1 is the week after. |
| day | enum | `mon` to `sun`. |
| time | string or null | 24-hour time such as `"14:15"`, or null for all day. |

## **Meta**

| Field | Type | Description |
| ----- | ----- | ----- |
| id | string | `charlotte`, `calypso`, `alexandra` or `marcus`. |
| fixturesVersion | string | The fixtures version the file was written from, such as `"3.12"`. |
| demoWeekStart | ISO date | The demo week's Monday, `2026-10-12`. The only calendar date in the seed. Changing it moves the whole demo to another week. |
| zip | string | The zip code she gave on 0w, such as `"00123"`, which the travel table stands for. |
| invented | array | Every invented fact from the fixtures' Appendix A, with what was decided and why. |
| notifications | enum | `on`, `off-never-asked` or `off-declined`. Charlotte's is `on`. |

## **People, children and places**

| Object | Field | Type | Description |
| ----- | ----- | ----- | ----- |
| Person | id, name | string | Stable identifier and name as used in the story. |
| | group | enum | `parent`, `inner`, `village`. |
| | line | string | The line shown under the name on Team. |
| | hasMVP | boolean | Decides the request channel, and whether they can be in a chat or a group. |
| | contact | object | `{ kind, label, number }`, where kind is `mobile` or `practice`, such as `{ "kind": "practice", "label": "Northside Pediatrics", "number": "555-0160" }`. |
| | knownFacts | strings | What the parent has entered about them. |
| Child | id, name, age | | |
| | grade | enum | As in §3. |
| | school | reference | |
| | teacher | string | Such as "Ms. Hollis, Room 3". |
| | weekly | references | Recurring activities. |
| | goingWith | array | Standing items, each with a rule such as a letter day or a weekday. |
| Place | id, name | string | Such as "Studio Ten". |
| Travel | from, to, minutes | | Fixed in the seed, never calculated, for legs from home and between places. |

## **Schools and rules**

| Object | Field | Type | Description |
| ----- | ----- | ----- | ----- |
| School | id, name, shortName | string | "Westview Kindergarten" and "Westview". |
| | facts | array | Card facts (§11), each with section, text, source, changed and history. |
| | rotation | object | Letter per day for the demo week and the week before. |
| | documents | references | Captures the card was built from. |
| Rule | id, school, kind | | A recurring rule, such as a letter day meaning, and the checklist item it creates. |

## **Plan items, captures and requests**

Plan items follow §4, including the children each concerns, which the screen draws as chips, and for tasks the task kind and any steps. Captures follow §7. Requests follow §9. Each references people, places and sources by id.

## **Runs**

| Object | Field | Type | Description |
| ----- | ----- | ----- | ----- |
| Run | id, day | | One run per stretch she drives before she is home again. |
| | stops | array | In order. Each stop has a place, the plan item there if any, the children who get on or off, `dueAt` (when she must be there) and `leaveAt` (when she leaves it). Home is a stop only where the run starts or ends there. |
| | backups | array | Optional. Each backup has a label (B or C), the coach's line, a button with its action, whether it depends on someone else, and its result. |
| | noMoreBackups | string | Optional. The coach's line when there is no second honest backup. |

Every `leaveAt` follows the rule in fixtures "Dates, times and places": the next stop's `dueAt`, minus the drive, minus five minutes, rounded down to five minutes, but never before the stop it leaves is due, so a leg from a pickup leaves no earlier than the pickup. The seed holds the computed values, and the rule is what they must agree with.

## **Calendar**

| Field | Type | Description |
| ----- | ----- | ----- |
| provider | enum or null | `google`, `apple`, `outlook`, or null when she has not connected one. Charlotte's is `google`. |
| name | string | As shown in copy, such as "Google Calendar". |
| events | array | Each event with an id, a title as it appears on her calendar, demo time, whether it repeats weekly, the place, and the plan item it became. |

Calendar events are written into the seed from fixtures Appendix A. An event that arrives during a moment, such as the checkup in C-06b, is a scripted step in that moment.

## **Conversation, coach cards and reminders**

| Object | Field | Type | Description |
| ----- | ----- | ----- | ----- |
| Message | as §6 | | Including `options` with title, text, recommended and result. |
| Coach card | day | enum or null | The day it concerns, or null for none. |
| | text | string | Checked by `voicecheck`. |
| | button | object | The label, what it does, and the line under it, if any. |
| | secondary | object | "Other options", which opens the Leave sheet on Today at its backups, or a named alternative. |
| | after | object | Optional. The card's text, button, link and meta line after she accepts or answers, and what Undo restores. |
| | answerSheet | object | Optional. The heading, the field and its starting value, for a card that asks for a fact. |
| Reminder | target | reference | The run leg, timed thing or task it belongs to. |
| | minutesBefore | integer or null | 15 or 30, or null for "when it's time to leave". For a task, `at` holds a time instead. |
| | set | boolean | Whether she has set it. Charlotte sets one in C-03b, for 2:00 pm. |

## **Village groups, chats and articles**

Village groups and chats follow §10, including each one's members, messages, posts and replies with their demo times. A message, post or reply that arrives during a moment, such as Claire's reply in C-06c, is a scripted step in that moment. Articles follow §12, with `recommended[]` pairing an article with its reason line for a household.

## **Moment**

| Field | Type | Description |
| ----- | ----- | ----- |
| id | string | Such as `C-03`. |
| label | string | Shown in the switcher. |
| time | demo time | The demo time at the start of the moment. |
| opensOn | string | The screen it opens on. |
| state | object | The full plan items, statuses, marks, cards, conversation, captures, requests, chats, posts and unread counts in effect. |
| steps | array | Scripted steps that play in order within the moment, each with its demo time and the change it makes. |

### **Standing decisions**

1. **One calendar date in the seed.** Every time is a demo time, and `meta.demoWeekStart` is the only calendar date. Nothing else in the seed, the articles or the copy holds a date.
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
| Fonts | Fraunces, Inter and JetBrains Mono, self-hosted through `@fontsource` so the demo renders identically offline. JetBrains Mono is loaded for the Label style only. |
| Icons | Icons come from Material Symbols first, Lucide where Material Symbols has nothing that fits, and a custom drawing only where neither does. Every icon is drawn through one `Icon` component that takes the name used in Figma, such as `calendar-mark`, so an icon's source changes in one place. Material Symbols come from `@material-symbols/svg-400` in the Outlined style, imported as React components through `vite-plugin-svgr`, and Lucide icons come from `lucide-react`. MUI's `@mui/icons-material` is not used, because it depends on MUI's component library. The icon names, the source each one uses and its code name are in the Figma library's Icons page. |
| Live model | Debug only, and for the coach only. A Netlify function holds the API key in an environment variable, and the browser never sees it. |
| Deployment | Netlify, auto-deploying from the `main` branch. |
| Build tool | OpenAI Codex, reading `AGENTS.md`. |

## **Design source**

Figma is the design source. The frames marked Ready for dev decide how each screen looks, and `docs/screen-map.md` ties each screen to one frame by ID, because the file holds older frames with the same names on several pages. Codex reads those frames through the Figma MCP server. The master library's variables and text styles are exported into `src/tokens.css`, and Codex never invents a value that is not in it. Screens with no Ready for dev frame are built from the grayscale wireframes in `docs/wireframes/`, drawn with the components already built, as the screen map says. The fixtures still decide every word, and this spec still decides behavior (AGENTS.md, "Who decides what").

## **Component inventory**

* `App.jsx`: root, tab routing, household session
* `components/Onboarding/`: one component per screen, 0s to 0j, the three 0i states, and the failure states
* `components/Today/`: TodayTab, PhaseHeader, Now, NowPass, StatusPill, PassFields, NowTask, NowQuiet, NextStation, ChecklistGroup, LaterToday, ReadyTonight, TomorrowStarts, CoachCard, CaptureBar (shared with Coach), and the sheets ReminderSheet, AnswerSheet, LeaveSheet, RouteLine, BackupList and AskSomeoneSheet
* `components/Coach/`: CoachTab, Conversation, ReadBack, SourceLink, VoiceNote, Options, CoachAnswer, BasedOn, CaptureBar
* `components/Capture/`: ShareSequence, ThinkingScreen, CaptureFailed
* `components/Calendar/`: ConnectCalendar, CalendarPermission, CalendarMark
* `components/GamePlan/`: GamePlanTab, ChangesList, WeekView, DayColumn, PlanItem, ItemSheet, DragLayer
* `components/Requests/`: RequestDraft, RequestCard, RecipientToday, RequestWebPage, HandoffSheet
* `components/Team/`: TeamTab, ChatRow, GroupRow, PersonRow, PersonPage, GroupPage, MembersList, Composer, AudiencePicker, ChatView, ChatMessage, Post, AddSomeone, NewGroup, InviteHandoff
* `components/shared/` also holds UnreadMark and CallHandoff
* `components/Kids/`: KidsTab, ChildPage, SchoolCard, CardFact, CardHistory
* `components/Recommends/`: RecommendsCard, ArticleView
* `components/Settings/`: SettingsPlaceholder, including the Your calendar heading
* `components/Demo/`: HouseholdSwitcher, MomentList, ViewAs, PhoneFrame, DebugMenu
* `components/shared/`: Monogram (the parent only), ChildChip, AdultAvatar, CoachDot, StatusMark, ChangedMark, ConflictMark, OwnerLabel, CoachLine, BackLink, TabBar, Sidebar, Sheet, with its parts SheetHeader, SheetOption, ActionRow and SheetFooter, and Icon
* `hooks/`: `useHousehold`, `useDemoTime`, `useMomentSteps`
* `data/households/`, `data/articles/`, `copy/`
* `scripts/voicecheck.mjs`: the voice and date check (§14)
* `netlify/functions/coach.js`: the live-model proxy, debug only

## **Repository**

The repository holds a `README.md` explaining how to run and present the prototype, and an `AGENTS.md` explaining how Codex should work in it. Project documents live in `docs/`: `spec.md` (this document), `brief.md`, `story-fixtures.md`, `screen-map.md`, `issues.csv` for observed problems and open decisions, and `backlog.md` for build order. Decisions are recorded where they apply, as standing decisions in each section and as rows in Appendix A, so there is no separate decision log.

# 18. Out of scope for the prototype

The following are not built in this phase:

* Reading the device clock
* Calendar dates anywhere except Today's dateline, the 0c draft, the prepared documents and events on a school card beyond this week
* A month view (F1)
* Live voice transcription (F3)
* Connecting her email account directly (F4)
* A real connection to Google Calendar, Apple Calendar or Outlook, which the prototype stages
* Writing anything to her calendar (F18)
* Edward or anyone else connecting their own calendar (F19)
* Real notifications (F5), including the reminder notification, which is drawn rather than fired
* A real maps app or traffic check, which the prototype stages
* Grocery ordering, meal planning and the shopping list (F6, F16)
* Any language other than English (F7)
* A shared household account (F8)
* Moderation and reporting for village groups (F9)
* Photos in posts (F10)
* Saving articles (F12) and searching the library (F13)
* School cards for studios, teams and clinics (F14)
* A wide Today layout at tablet and desktop widths (F20)
* Talking to the coach from Today with the read-back on the coach card (F21)
* The capture bar on Game plan, Team and Kids
* A tab for articles, a browsable article feed, the article library, "See all" and sharing an article (§12)
* A searchable directory of camps, activities, providers or products
* The coach finding or recommending providers or sitters, buying anything, planning money, or giving custody, legal or medical advice
* Sponsored links, affiliate links and product links inside coach answers
* The coach reading or summarizing village posts or chats, and the coach drafting or starting a chat (F23)
* Messaging one village member directly (F22)
* Renaming, leaving, muting or adding people to a chat (F24)
* Sending a chat message to the coach (F25)
* Real phone calls, which the prototype stages
* Real sharing from another app, real forwarding, and reading real photos or email
* Real invitations, real text messages and real accounts, sign-in or payments
* Real payments, Stripe or any billing. The plan screen (0e-p) is staged.
* Editing notes, owners or days from Today, and changing the time of an item someone else owns or has answered from Today
* Working out backups at run time, which the prototype takes from the seed
* A note to whoever is waiting when she runs late (F27)
* A compact route-and-time strip above the sheet once it covers Now (F29)
* Real notification permission, which the prototype stages
* Photographs of children, including optional child photos
* Kid-facing features of any kind
* Dark mode and native apps

# 19. Design tokens and platform constraints

Every design value in the app, including color, spacing, radius and type, is a CSS custom property in `src/tokens.css`, exported from the Figma library. **That file is the source of truth, and this document deliberately holds no copy of any value.**

The design system is called Hearth: warm, editorial and quiet, with a cream canvas, ink rather than black, and cerulean as the anchor color and for anything the parent can tap. Children share one green, and the coach has one amber, each with its own tokens (`kid` and `kid-bg`, and `coach`, `coach-ink` and `coach-bg`).

## **Type**

The type scale is the one in fixtures section 2, "Type", and the library's text styles carry the same names.

| Style | Library name | Use |
| ----- | ----- | ----- |
| Display | display | The one number that matters now, such as the leaving time on Now. Fraunces. |
| Title | title | Section names on Today, and a task when it leads Now. Inter. |
| Subtitle | subtitle | Headings inside a page or a card, such as the sections of a school card and Team's section names. Inter. |
| Voice | voice, voice-strong | The coach's lines in onboarding, and article titles. Fraunces. |
| Body large | body-large | The coach's lines on the Today coach card, checklist items and the rows in Later today and Tomorrow starts. Inter 17. |
| Body | body | Everything else, including the coach's messages in the Coach tab. Inter. |
| Body strong | body-strong | Buttons, links, names in rows, field labels, the route and field values on Now, and checklist group headings. Inter 15, extra bold. |
| Meta | meta | Times, sources, counts and small labels. Inter. |
| Label | meta-strong | The coach card's label, and nothing else. JetBrains Mono. |

Screen headers, onboarding and setup headlines, article page headlines and the wordmark use the library's `header`, `headline` and `wordmark` styles, outside the scale. Chips use the Meta size in a heavier Inter weight.

## **Rules that apply across screens**

These live here rather than in Figma because a single frame cannot show them.

* **Three typefaces only.** Fraunces, Inter and JetBrains Mono, and JetBrains Mono only in the Label style. No fourth font is added for any reason.
* **No uppercase labels, no letter-spaced eyebrows and no bold words inside paragraphs.**
* **No photographs of people, no stock images and no generated images.**
* **Illustration appears only inside MVP Recommends articles,** as spot illustrations drawn by people. The MVP mark is not an illustration.
* **No pure white and no pure black.**
* **The wordmark always reads "Most Valuable Parent."** "MVP" never appears alone in the wordmark, including at the top of the sidebar.
* **Status marks never rely on color alone.** Each has its own shape and label, so the plan reads in grayscale. The same holds for chips, avatars and the coach's dot.

## **Platform constraints**

| Size | Width | Checked at | Layout |
| ----- | ----- | ----- | ----- |
| Phone | Up to 767 | 440 × 956 and 390 × 844 | The base design, built at 440, the width of the Figma frames. Single column, tabs at the bottom. |
| Tablet | 768 to 1279 | 768 × 1024 | Tabs become a left sidebar. Today, Coach, Team and Kids keep the phone layout in a centered column. The game plan shows seven columns. |
| Desktop | 1280 and up | 1440 × 900 and 1920 × 1080 | Sidebar, with the same layouts as tablet. Content width stops growing at 1200. |

* **The phone design comes first.** Every screen is designed at 440 × 956 before any other size, and checked at 390 × 844, and nothing exists only on desktop.
* **Tap targets are at least 44 pt** at every size.

# **Appendix A: Change log**

This appendix tracks changes to the specification. The body above always reflects the latest version.

## **v0.15, October 15, 2026**

Follows story fixtures 3.15, the session on the states of Now. Closes nothing yet. The rows it carries are T16 to T33, T36, D1, D2, G8 and C34, which close when the fixtures and this spec are applied.

| # | Section | Change |
| ----- | ----- | ----- |
| 1 | §5 | Now follows one rule for what leads it: the next timed thing that needs her, then her leading task, then a quiet line. Asked, Nobody yet and untimed items, and other people's trips, stay in Later today. |
| 2 | §5, §16 | A departure is a leg on a run, drawn as a line of stops. Now steps down the line, names the next station, and passes through four stages. The seed gains runs with `dueAt` and `leaveAt` at every stop. |
| 3 | §5 | The Leave sheet is the one edit on Today. It changes leaving times, and start times only on her own items. |
| 4 | §5, §6 | Plan B and Plan C sit at the foot of the Leave sheet, and Other options opens it on Today. The Coach tab's full message is reached through Why. F26. |
| 5 | §5, §17 | Sheets become one pattern with a Close icon, four bodies, two heights and a set state. The reminder sheet gains the notifications-off state, and the seed gains `meta.notifications`. |
| 6 | §4, §8, §16 | Every leaving time follows one rule. School runs show the time school starts. Tasks gain a kind and steps. A recurring conflict is raised once. Changing an answered item's time returns it to Asked. |
| 7 | §15 | C-03b is a moment. The Monday afternoon board is retired, and three boards are wireframe-only. |
| 8 | §18, Appendix B | Editing beyond leaving times on Today, run-time backups and real notification permission are out of scope. F26 and F27 are added. |
| 9 | §4, §5, §17 | Now reads like a boarding pass: route, leaving time with a status pill, Drive, Arrive and Pickup or Starts, and a perforation. The drive line is retired. Checklists are grouped under each child's name in `kid` and "Before you leave", without chips or counts. Today keeps two drawn lines, the rail and the perforation. |
| 10 | §1, §2, §6, §16, §19 | Followers: the households table names fixtures 3.15, the Today wireframes include C-03b and the pass 12 states, a decline's "Other options" opens the Leave sheet, the coach card's secondary action opens the sheet in the seed, and the type table gives the route, field values and group headings to Body strong and a leading task to Title. |
| 11 | §5, Appendix B | Now stays in place, and the canvas sheet scrolls over it, stopping below the header. A Now taller than the screen scrolls until its actions clear the capture bar, then holds. The build uses sticky positioning on the header and Now. F28 is moved into the prototype, and the compact strip is parked as F29. Issue T36. |

## **v0.14, October 14, 2026**

Follows story fixtures 3.14, Greg's design decisions after reviewing the board drafts. Closes C32, T13, G7, M7, T14, T15, O5, X1, A6 and C19.

| # | Section | Change |
| ----- | ----- | ----- |
| 1 | §3, §5, §6, §19 | The coach is set in Inter everywhere in the app: Body large on the Today coach card and Body in the Coach tab. Voice (Fraunces) is kept for the coach's lines in onboarding and for article titles. |
| 2 | §2, §3, §5, §7, §17, §18 | The capture bar replaces the floating "Send to coach" button on Today. It is docked above the tab bar, starts with the coach's dot, reads "Type, talk or add an image", and hides while the coach card asks for a capture. The skipped first board's coach card holds Take a photo, Attach a file and Talk or type. The Send to coach sheet is removed. |
| 3 | §4, §9 | A person's answer shows as their initial and an icon: an hourglass for asked, a thumbs up for yes and a thumbs down for can't. The words remain in notifications, coach lines and accessible labels. |
| 4 | §10 | A person page's This week is laid out as lanes, with the day abbreviated to three letters and the answer icon on the right without the initial. |
| 5 | §5 | Today has two surfaces: the header and Now on paper, and the coach card, Later today and MVP Recommends on a canvas sheet with rounded top corners. In the evening, Ready tonight is on paper and Tomorrow starts on the sheet. Closes T14. |
| 6 | §5 | The countdown moves under the departure time and loses "Next ·", so Now reads as the time, how far off it is, then who leaves. Closes T15. |
| 7 | §3 | A staged plan screen, "Choose a plan" (0e-p), follows the account, replacing the standing decision that ruled pricing out. Its words are proposed until confirmed (O17). The MVP mark is the cup (O5 closed), and the open condition about it is removed. |
| 8 | §15 | The household switcher opens from a long press on the monogram only (X1 closed). |
| 9 | §7, §16 | Confirmed: MVP reads her calendar and never writes to it (A6 closed). The invented email domains westviewk.org and cedargrovees.org stay (C19 closed). |

## **v0.13, October 14, 2026**

Follows story fixtures 3.13 and Greg's decision on issue M4. Closes M6.

| # | Where | Change |
| ----- | ----- | ----- |
| 1 | §1, §2, §10 | Team is rewritten. The parent talks with her inner circle in chats, choosing one person, several or "Everyone on MVP", and posts to her village groups from the same composer. Team gains the Chats section, person pages, the group page, adding someone, inviting by text, creating a group, notifications and the unread mark. Only people with MVP can be in a chat or a group, and the coach reads neither. This closes the open condition on posting to the inner circle (issue M4). |
| 2 | §9 | Every recipient screen in Charlotte's week is listed, and View as shows them. Invitations and calls leave no task. The open condition on Edward's own Today is replaced, because the prototype shows only what View as needs (issue S1). |
| 3 | §6 | The conversation gains day headings. C-08b adds the Call and Add to an appointment actions, and the coach names Dr. Ortiz without giving medical advice. The coach never reads chats. |
| 4 | §15 | C-04b, C-05c, C-06c and C-08b are added. View as is scoped to the recipient's Today and answer screens, and every tab shows its state at the current moment. |
| 5 | §16, §17 | The seed gains `chats` and a contact for each person. The Team components are listed. |
| 6 | §18, Appendix B | Village direct messages, coach-drafted chats, chat management and sending a chat message to the coach are out of scope, as F22 to F25. |
| 7 | §19 | The type scale has nine styles. Body large and Body strong join it with the uses the boards already give them, Subtitle's role is confirmed, and `body-small` is removed from the library. This closes issue C28. |

## **v0.12, October 14, 2026**

Follows story fixtures 3.10, 3.11 and 3.12, and Greg's decisions after the readiness scrub. Carries the spec's part of C25. The screen map and the review build prompt remain (C27).

| # | Where | Change |
| ----- | ----- | ----- |
| 1 | §1, §5, §14, §15, §16, §18 | The prototype runs on a fixed demo calendar from Monday, Oct. 12, 2026. The dateline shows the day and the date, and the 0c draft shows its dates. The seed keeps demo times and gains `meta.demoWeekStart`. `voicecheck` fails on typed dates rather than on every date. This reverses v0.7 row 2. |
| 2 | §3, §15 | C-00 moves to Monday, Oct. 5, the week before the demo week. Her first board has three states, and her answer to the coach's first question is a step in C-00. The zip code's purpose is settled, and MVP never asks for an address. |
| 3 | §2, §5 | Today becomes the quiet layout: Now, the coach card, Later today and at most one article. The per-person rows, the four columns, the going with list as a separate block, the game plan link on the coach card and the full-day grid are retired. Now gains Remind me, Directions, the drive line and the reminder sheet. The coach card gains its button-and-line form, Undo, the answer sheet and the state after an answer. |
| 4 | §2, §7 | The capture button on Today reads "Send to coach", with an up arrow, in place of Add, and appears on Today only in review build 1. |
| 5 | §4, §8, §11, §13 | "How people are shown" is added. Children appear as name chips, the household as a Family chip, adults as outlined initials and the coach as a dot. Children's monograms are retired everywhere. |
| 6 | §3, §6, §19 | The coach is set in Voice (Fraunces) on the Today coach card and in onboarding, and in Body (Inter) in the Coach tab. The type scale has seven styles, with Title and Subtitle both kept and JetBrains Mono used only for the coach card's label. |
| 7 | §12 | Today shows at most one article, with the label line in sentence case and Meta and no topic. "See all" is out of scope. |
| 8 | §2, §5, §18, §19 | Today, Coach, Team and Kids keep the phone layout at tablet and desktop widths in review build 1. The wide Today is parked as F20. |
| 9 | §5 | The coach card is marked by the coach's dot and tint, which closes issue T3. |
| 10 | §16, §17 | The seed gains `zip`, coach card button and after states, the answer sheet and reminders. The component inventory follows the quiet Today and the people model. |
| 11 | §18, Appendix B | F20 and F21 are added. The talk-to-the-coach flow on the Figma boards page is parked as F21. |
| 12 | Summary | Earlier versions' summaries are kept only in this appendix. |

## **v0.11, October 8, 2026**

Follows the first Codex build, which built only C-03 and could not tell which Figma frames to follow.

| # | Where | Change |
| ----- | ----- | ----- |
| 1 | §17 | The Ready for dev frames decide how screens look, the fixtures decide words and facts, the spec decides behavior, and `docs/screen-map.md` names one frame per screen. |
| 2 | §19 | The phone layout is built at 440 × 956 and checked at 390 × 844. |
| 3 | §5 | The day of the week moves above the title as a dateline, as drawn. It still shows no date. |
| 4 | §2, §12 | The MVP Recommends card holds up to two articles, as drawn. "See all" waits for a library. |
| 5 | §15 | The prototype opens on C-00. C-03 and the other moments are jumps in the switcher. |

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
| F5 | Real notifications | The prototype shows where they would appear, and the demo does not need them to fire. | §5, §9 |
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
| F16 | Meal planning and the shopping list | v0.6 put dinner in every day and a shopping list at the top of the game plan. The fixtures show dinner only when the schedule forces it to move, and no household opens MVP to plan dinner. | §8 |
| F17 | A fifth household | Suggested and parked. Four households already make the argument. | §1 |
| F18 | Writing MVP's plan items to her calendar | It would keep her calendar complete, such as showing Edward's pickups there, but it changes something she did not touch. Read only proves the idea. | §7 |
| F19 | Other adults connecting their own calendars | Edward could connect his, so the coach would see his Thursday meeting without being told. One calendar proves the idea. | §7 |
| F20 | A wide Today at tablet and desktop widths | The quiet layout is designed for a phone, and the full-day grid it replaced is retired. A centered phone column is enough for review build 1. | §5 |
| F21 | Talking to the coach from Today, with the read-back on the coach card | A frame on the Figma boards page shows it, and no moment in the fixtures does. Today's capture bar already reaches the coach. | §5, fixtures Appendix B item 45 |
| F22 | Messaging one village member directly | Chats are for the inner circle, and the village is reached through groups. A Message button on village members' pages would follow the same "On MVP" rule. | §10, fixtures Appendix B item 46 |
| F23 | The coach offering to start a chat | A line such as "Ask Edward and Claire" on a coach card could open a chat with a draft. Chats are written by the parent alone for now. | §10, fixtures Appendix B item 47 |
| F24 | Renaming, leaving, muting and adding people to a chat | A chat's name is its members' names, and its members are fixed when it starts. Real use will need all four. | §10, fixtures Appendix B item 48 |
| F25 | Sending a chat message to the coach | A chat might hold something the plan needs, such as Edward offering to drive. The share menu could carry it to the coach as it does from WhatsApp. | §10, fixtures Appendix B item 50 |
| F26 | Plan B and Plan C | **Moved into the prototype in v0.15** for the runs the demo shows. The real product works out backups for every run. | §5, fixtures Appendix B item 56 |
| F27 | A note to whoever is waiting when she runs late | Late to a pickup, the coach could draft a note to the school or the person waiting. No moment needs it. | §5, fixtures Appendix B item 57 |
| F28 | Now stays in place while the day scrolls over it | **Moved into the prototype in v0.15.** The canvas sheet already looked like a layer, and now it moves like one. | §5, issue T36 |
| F29 | A compact strip with the route and leaving time above the sheet | Once the sheet covers Now, the leaving time is out of sight until she scrolls back. Building the strip now would add a third state to Now before anyone has shown it is needed. | §5, fixtures Appendix B item 59 |

**F30 is next free.**
