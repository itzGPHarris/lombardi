# **Most Valuable Parent (Lombardi): Product specification**

*Investor prototype · Version 0.35 · November 19, 2026*

## **Summary of this version**

Version 0.35 follows story fixtures 3.36. The playbook says where she is staying: her view gains Where you're staying, drafted from her itinerary, and his gains Where Charlotte is, between If plans change and Who to call, with the front desk's number, a Call button and, when her time zone differs from home, a line giving the difference in his own hours (§20).

Version 0.34 follows story fixtures 3.35. On the day Charlotte flies home, Edward's Today shows her flight's status on a line under "Your playbook", and his phone alerts him when a change to the flight moves his leaving time. MVP follows the flight itself from her itinerary, so a delay no longer depends on her email forwarding the airline's messages. F38, flight status, is registered and moves into the prototype for the playbook only (§20).

Version 0.33 follows story fixtures 3.34 and Greg's review of the playbook drafts. A playbook is a handover rather than a request, so Edward acknowledges it with Got it and has no Yes or No. On his screen it is titled Your playbook, with the weekend first and the call list after what to do if plans change. Charlotte's view says where each part came from, and she chooses who Edward can call on a sheet of suggestions. On the playbook days, help needed the same day leads with a call from his own phone, with a deadline after which the coach turns to the backup that depends on nobody (§20).

Version 0.32 follows story fixtures 3.33, which adds a second journey for Charlotte's household, the weekend she is away, called auto pilot in the team. F37 moves into the prototype as a new §20, The playbook: the part of her plan for days she is away, built with the coach in the game plan, sent to Edward as one request, read by him in a shorter view, run by his own Today and coach, and closed by a weekend summary on her first morning back. Three locked decisions bend for this journey only, each named in §20's standing decisions. §15 gains the moments C-10 to C-15, and §18 fences off what the journey does not build. Version 0.32 also records, from fixtures 3.32, the decline draft in C-03 and the style of a request's heading.

Version 0.31 changes one line of §5. The checklist roll-up was lost from the Figma prototype on Oct. 28, 2026, when every checklist on Today moved to ReminderItem rows and the library's ChecklistGroup, which held the folded states, stopped being used. The library now draws it as ReminderGroup, built on ReminderItem rows, and ChecklistGroup is deprecated (issue T71). What the build does is unchanged.

Version 0.30 follows story fixtures 3.31, which carries six changes Greg made to Now on Oct. 28, 2026. The phase icon is back beside the dateline, and the dateline is set in Title (§5, standing decision 27). The trip timetable marks each row with an icon for its kind of place instead of dots, and the row she acts on next carries its icon in a cerulean circle (§5, standing decision 26). The evening reminders are headed with the phase of tomorrow's first departure, such as "Reminders for tomorrow morning", in Subtitle. Every checklist row on Today sits in its own container with a remove button, "Edit this list" and its edit state are gone, removing a repeating item asks Heather's "Just tonight" or "Every night" and raises a notice with Undo, and each child's group ends with "Add something else for" and the child's name (§5, standing decision 25). Her tasks take the same container with their own button. The coach's dot comes off the capture bar (§2, §5, §6).

Version 0.29 follows story fixtures 3.30, which writes in Heather's second wording review of Oct. 28, 2026 and Greg's agreement with it. The backups' heading reads "Backup plans" (§5, §8). A request opens with a sentence saying what is asked, with the time sent beneath it (§9). Team's sections become Chats, Groups and Team, with everyone in one list and a Circle tag on the people in her circle (§10). Removing an evening reminder asks "Just tonight" or "Every night", and she can add her own item (§5). Settings gains an optional age range (§13). The household question reads "How is your household set up?" (§3). MVP Editorial's drafted articles are withdrawn until approved articles arrive, and Claude writes no article copy (§12, issue R15).

Version 0.28 follows story fixtures 3.29. Changing a leaving time on the Leave sheet uses two outlined buttons, "5 min earlier" and "5 min later", in place of a time picker, and a late arrival anywhere down the run is stated in the warning ink (§5, issue T64).

Version 0.27 follows story fixtures 3.28. The game plan's day headings drop "this" and "next", so the agenda reads Today, Tomorrow, then Wednesday to Sunday, and the days under the Next week heading read Monday to Sunday with no date (§8). "This" and the day stay everywhere a day appears without a heading, and the conflict notice's link now reads "Show me next Monday, Oct. 12", as the fixtures write it.

Version 0.26 follows story fixtures 3.27. Today always has a pass at the top, showing her next departure, today or on a later day (§5, standing decision 24). In the evening the pass shows tomorrow's first departure, "Reminders for the morning" becomes its checklist and holds only what goes with that departure, and For tomorrow lists her later departures tomorrow that take a child, each with its own items, so nothing appears twice. A departure nobody owns still gets the pass, marked "Needs an owner", so on her first board the pass shows the trip the coach recommends and turns to "Tomorrow" when she agrees. A task no longer leads Now, the quiet line sits above a pass, and a timed thing at home gets a pass with "At home" in place of the route.

Version 0.25 follows story fixtures 3.26, which writes in Heather's first wording pass, the onboarding changes and two fixes Greg found in the Figma Make trial of the first board, all applied on the Figma page "Design - lombardi · post-review" on Oct. 27, 2026. Today's dateline carries the phase of the day, such as "Monday morning, Oct. 12", and the phase title and its icons are gone (§5). The evening leads with "Reminders for the morning", which she can edit, and once they fold, tomorrow's first departure appears as a pass when the leg is hers, replacing the rule that the evening had no Now (§5). A trip with more than one child and more than one stop gets a trip pass, with a timetable of its stops in place of the fields, which stays for the whole trip as its top moves to the next leg (§5, F36). The coach card keeps the thread after she answers: the recommendation stays in muted ink, and the card shows either "Agreed" or the plan she chose beside a check, then only what comes next (§5). Onboarding asks for each child's birth month and suggests the grade on a new screen, 0k-b, and setup asks for each school's start time, so her first board opens with the coach's first recommendation rather than a question (§3). Labels follow the review: "MVP Coach", "MVP Editorial", "Conflict:", "Needs an owner", "Updated", "Yes, I can" and "No, I can't", and "See the coach's reasons" is gone. This version also catches the spec up with fixtures 3.25's vocabulary, which it had not carried: times are written "2:15pm", places are named in full, and "village" and "inner circle" become her people and her circle. Code identifiers such as the `village` enum value are unchanged, and renaming them is issue C50.

Version 0.24 follows story fixtures 3.24. Back sits at the top left of every page, and a page shows no monogram, replacing "in place of the monogram", which led 29 boards to draw Back at the top right (§2, §10, issue C49). Version 0.23 followed story fixtures 3.23. The cerulean tint is #E1EEFC, Body strong is Inter bold rather than extra bold, and every screen except Today sits on card, with control filling any part of those screens that has no fill of its own (§19, issues C46, C47 and C48).

Version 0.21 follows story fixtures 3.21, which carries Greg's redesign of the Now block (issue T51). What, when and where sit together on a tinted pass: the title, the leaving time with its pill and a rule under it, and the route with the next station. The fields sit under the pass, and two dashed lines tie the checklist and the actions together. The chip leaves the pass, because the list names the child, and the title names a child in words when no list does. The pass is a surface for the trip and not a card, so the coach card stays the only card the coach speaks in, and standing decision 11 now counts a rule and two dashed lines inside Now. Checklist headings read "Mallory will need" (§4, §5, §17, §19).

Version 0.20 follows story fixtures 3.20, which carries Greg's decisions of October 17 and 18, 2026 and his third round of prototype findings. The largest change is a rule for what the coach adds. The coach now adds to her plan what she has already committed to somewhere else: her own calendar events that take a child somewhere or decide when she can drive, changes to her children's school day, and trips she is free to take. It asks her only about proposals from other people and about choices that involve another person or a conflict. She agrees once on 0j, controls each kind from a Settings card and takes anything out from its page, and the review card becomes small and rare (§4, §7, §8, §13, F35, issue G42). This partly reverses v0.17's rule that nothing from her calendar joins the plan until she adds it. Lines on screen that read as disclaimers come off (§8, §9, §10, issue G41). A recurring conflict is marked as soon as the coach finds it, and a notice above the tab bar tells her in the moment (§4, §17, issues G26 and G43). C-09, Sunday evening, is a new Optional moment (§15, issue G21). From prototype scrub 3, the done count moves to the foot of Later today, the calendar mark sits before the item's text, a task carries its reason, contact and a one-tap action, and a conflict on the pass sits under its title (§5, §8, issues T47 to T50). The coach card's button for a fact says what she adds, such as "Add the start time" (issue G37). The demo stays in its October week, and the anchor moves only for a new season (§16, issue C26). Each household lives in its own town (§1, issue C18). The Hearth values change with the new surface ramp and indigo (§19, issues C42 and C44). The roadmap gains F34 and F35.

Version 0.19 follows story fixtures 3.19, which carries Greg's findings from playing the investor demo from C-03 and his decisions of October 17, 2026. The pass on Now gains a title naming what the trip is for, taken from the plan's own words (§5, issue T43). A child's checklist is headed "Mallory needs" rather than a bare name (§4, §5, issue T44). The status pill grows more urgent as the leaving time approaches and reads "Running late" once she is late, so a leg now has five stages (§5, issue T45). The Leave sheet says what she can change, draws each leaving time as a control, and shows Save only after a change (§5, issue T46). In the game plan, an item she adds or moves is shown where it lands with a short highlight (§8, issue G40). Capture on Today moves into the prototype as moment C-03a, with the read-back on the coach card, and §5 records why it keeps Today's rule that only leaving times change there (F21, issue A12). Greg accepted the proposals in T41 and S6, so their open conditions close.

Version 0.18 follows story fixtures 3.18, which writes the words for every board the investor demo reaches that had none, after Claude's audit of the Figma prototype in prototype-scrub-1.md. A finished checklist now folds away: a child's group folds to one line when its last item is ticked, and the whole checklist under Now folds to "Everything is packed for" and the leaving time, with a check that draws in once and no praise (§5, issue T38). F30 moves into the prototype. Settings becomes a drawn page with five cards, following Greg's earlier design and Charlotte's values, and the coach's voice and personality card is parked as F33 (§13, issue U3). Days in the game plan open and close on tap, and DayGroup joins the library with both states (§8, issues G32, G36 and G39). The reminder sheet offers only the times still ahead. The build tool is no longer named, because the development tool is not decided, and the documents call whoever writes the code the build agent (§1, §14, §17).

Version 0.17 follows story fixtures 3.17, which records Greg's decisions from the game plan session on October 16, 2026. §8 is rewritten. The game plan becomes an agenda under a week strip that sticks under the title bar, with a review card at the top for anything new waiting to go in her plan, days that open and close, and a page for each item where she moves it, notes it, asks someone to take it and finds the coach's backups (§8). Nothing from her calendar joins the plan until she adds it, and once she adds an event the coach suggests the trips around it, so the plan item gains a kind, event or trip (§4, §7). The capture bar comes to the game plan, she types in place on every tab with the bar, and the coach's read-back lands where she is (§2, §6, §7). Links that were one word now say what they do. The roadmap gains F31 and F32.

Version 0.16 settles what stays fixed, what scrolls and what is anchored on every screen, at Greg's direction after he played the prototype flows (§2, "Layout and scrolling"). Every screen is one of eight types, each with one rule, and the screen map names each frame's type. Tab lists and pages get a title bar like Apple Music's, whose controls never move and whose title fades from large to small as she scrolls. The keyboard follows iOS, chats and composers hide the tab bar, and a sheet never opens another sheet. Today keeps the rule in §5. Story fixtures 3.16 carries the matching words.

Version 0.15 follows story fixtures 3.15, which works out every state of Now on Today. Now follows one rule for what leads it, and a departure becomes a leg on a run drawn as a line of stops that need not start or end at home (§5). Today gains one way to change a time, the Leave sheet, and the coach keeps a Plan B and a Plan C at its foot, which "Other options" now opens on Today instead of the Coach tab (§5, §6). Now reads like a boarding pass, and checklists are grouped under each child's name without chips (§4, §5). Sheets become one pattern with a way out and a set state, and the reminder sheet gains a state for notifications that are off (§5, §17). Every leaving time follows one rule, and the seed holds runs with a due time and a leaving time at every stop (§4, §16). C-03b replaces the Monday afternoon board as a built moment (§15). The header and Now stay in place while the canvas sheet scrolls up over them (§5, F28). Plan B and Plan C are F26, and a note to whoever is waiting when she runs late is parked as F27.

Version 0.14 followed story fixtures 3.14, which records Greg's design decisions after reviewing the board drafts, and his answers to the decisions that blocked review build 1. The coach is set in Inter everywhere in the app, and Fraunces is kept for onboarding, titles and large headlines (§3, §5, §6, §19). The capture bar replaces the floating "Send to coach" button on Today (§2, §5, §7, §17). A person's answer shows as their initial and an icon rather than their name (§4, §9). A person page lists the week as lanes, with three-letter days (§10). Today's Now sits on paper above a canvas sheet, and the countdown moves under the departure time (§5). A staged plan screen follows the account (§3). The household switcher opens from the monogram only (§15). MVP reads her calendar and never writes to it, the cup is the MVP mark, and the invented email domains stay. No moment, coach line or person changes.

Version 0.13 followed story fixtures 3.13, which made Team a working tab so the whole app can be tested end to end, at Greg's direction.

The main change is to §10. The parent now talks with her circle in chats. She messages one person directly, or several people, or everyone in her circle who has MVP, and she chooses them when she starts the chat. The same composer posts to a group. Team gains person pages, the group page, adding someone, inviting by text and creating a group, and the coach still reads none of it. Smaller changes follow from it:

- §9 writes the recipient's side of every request in Charlotte's week, and invitations and calls leave no task.
- §6 gains C-08b, where the coach names Dr. Ortiz and stops short of medical advice.
- §15 gains four moments, C-04b, C-05c, C-06c and C-08b, scopes View as, and says what every tab shows between moments.
- §16 gains chats and contacts in the seed, and §17 and §18 follow.

Appendix A lists every change, and Appendix B gains F22 to F25 for what this version leaves out.

Charlotte and Edward are the only household written at the current fixtures version. The other three households keep their version 2.2 facts until the fixtures rewrite them, and the build order in `docs/backlog.md` builds Charlotte's week end to end first.

# 1. Overview

Most Valuable Parent (MVP) is a planning app and a support system for busy parents. A parent receives the week's logistics in six or seven places at once: school emails and newsletters, messages in WhatsApp and other apps, texts, paper handouts and her own thoughts in the car. She gives MVP whatever arrives, by sharing it from another app, forwarding it to her own MVP address, photographing it or talking, and the coach turns it into a plan for the day and the week. The plan says where everyone needs to be, who takes them, what goes with each child, and what still needs her.

The same coach answers the parenting questions she would otherwise take to Reddit or a Facebook group. It already knows her family, so its answers fit her children, and every answer shows the family details it was based on. Around her are two groups of people. Her **circle** is the people she trusts with her children and her private life, such as her partner, family, a nanny and the family's doctors, therapists and tutors. Her **people** are everyone else who shares her children's week for a few hours at a time, such as school parents and carpool families, and she talks with them in **groups** she creates inside MVP. She talks with her circle in private **chats**, with one of them or several at once. When part of the plan needs someone else, the coach drafts a request in her voice and she sends it herself.

MVP also publishes short articles written by its staff, under the name **MVP Editorial**. There is no tab for them. One appears on Today when something in her week makes it useful, and one is attached to a coach answer when she asks for ideas.

This version of the product is a web prototype built to raise a funding round. It is a scripted demonstration rather than a working beta. Every coach response, capture and reply from another person comes from prepared data, so the demo behaves the same way every time and never waits on a network or a model.

The demo shows each household across a real stretch of its week, because a parent is responsible for her children every hour of every day and what changes from hour to hour is the logistics. Each household has a set of moments at different days and times, such as getting the children out of the house on Monday morning, a change that arrives in the middle of Wednesday, an evening spent getting ready for tomorrow, and a question asked once the house is quiet. Within a household the moments run in order, so the presenter can show the same plan changing over several days.

This spec says what to build and how we will know it is finished. The creative brief explains why and for whom. The story fixtures (`docs/story-fixtures.md`) hold every household's data, every moment, and every word that appears on screen. The wireframes show each screen in place. Figma holds every visual decision.

## **What every household shows**

Every household shows the same eight things, so the demo makes the argument that one product handles households that look nothing alike. The order varies with each family's week, and each family shows one or two of them in depth.

1. The parent gives MVP something messy and MVP turns it into the plan, and what is already on her own calendar reaches the game plan's review card without her sending it.
2. When something needs a decision, the coach offers several ways it could go, recommends one and says why. Sometimes she chooses another, because she knows things the coach does not.
3. Part of the plan goes to another person as a request, and their answer comes back as a status.
4. Something changes after a person has accepted, and that part of the plan reopens with options beside it.
5. The parent works the game plan directly, without the coach.
6. The parent asks the coach a parenting question and gets an answer from what it knows about her family, with an MVP Editorial article attached.
7. The parent takes a question to her people or circle, because it needs people rather than a product.
8. The parent uses Today to get the children out of the house prepared.

## **Households**

Each household lives in its own invented town, with its own schools and places, so each week's driving is simple to follow and each seed file stands on its own (issue C18).

| Household | Shown in depth | Fixtures |
| ----- | ----- | ----- |
| Charlotte and Edward | Onboarding, the Today board, and how much of the week the coach can build from what she photographs, forwards and says and from her own calendar | Version 3.19, moments C-00 to C-08b |
| Calypso | The coach answering a hard parenting question, and a set of people that is still forming | Proposed. Version 2.2 facts until rewritten |
| Alexandra and Ben | The game plan worked directly, and a plan that changes more than once | Proposed. Version 2.2 facts until rewritten |
| Marcus | Sending parts of the plan to several people, and what each person is allowed to see | Proposed. Version 2.2 facts until rewritten |

A household is built only once its fixtures are written at the current version. Until then its section in the fixtures is the reference for its facts, and nothing in this spec about it is buildable.

## **Presenter**

Greg or Heather runs the demo on a laptop or a 1920 × 1080 display. The app can be shown in its desktop layout or inside a phone frame, so investors can see that it is built for the phone first. The presenter uses the hidden demo controls (§15) to move between households and moments and to reset them between runs. The presenter script is a separate document, written once the prototype runs so its timings can be measured, and it refers to moments by their IDs.

## **Platform**

The prototype runs in any modern browser. It is designed mobile first, starting from a phone screen, with a responsive layout that scales to tablet and desktop widths up to 1920 × 1080 (§19). It is built with React and Vite, deployed on Netlify, and draws its icons from Material Symbols first, then Lucide, then custom drawings (§17). Figma is the design source, and the engineer exports the frames and token values the build needs into the repository (§17), so the build never depends on a design tool at run time.

Each household is one JSON seed file, held in memory while the app runs, with no backend and no database. MVP Editorial articles live in a shared library in `src/data/articles/`, written by MVP staff. Coach output, captures and replies are scripted from the seed files. A live model can be switched on for the coach from the debug menu, and never during a presented demo. The development tool for the build is not decided, so these documents call whoever writes the code the build agent. The build agent works from `AGENTS.md`, this spec and the fixtures, and the engineer takes the build over after funding.

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
| Today | The logistics for the current day, in four parts: Now, the coach card, Later today and at most one MVP Editorial article. The screen the app opens to once a household is set up (§5). | 01, 01b, 02, 02b, 03, onboarding 0i, and the Today states in wireframe pass 12 |
| Coach | The parent's conversation with the coach, by voice, typing, a photo or a file, including the coach's read-backs, its options and its answers (§6). | 01a, 04, 08 |
| Game plan | This week and next as an agenda of days under a week strip, with a review card at the top when anything new is waiting. Where she works the plan directly (§8). | 06, 06b, and the game plan boards on Design - lombardi |
| Team | The adults around her: her circle and her people, her chats with her circle, and her groups (§10). | 07, 10 |
| Kids | A page for each child and a card for each school (§11). | 12a to 12e |

Tab labels are written as in fixtures section 4: Today · Coach · Game plan · Team · Kids. The Kids tab's icon is two figures of different heights, `kids-heights` in the icon set, so it fits a toddler and a teenager alike.

## **The monogram and Back**

The parent's monogram sits at the top right of every tab's own screen, with the accessible label "Settings and account", and opens Settings (§13). At tablet width and above, Settings also sits at the bottom of the sidebar, below a rule. Pages opened inside a tab, such as a child page, a school card, an article, a draft, a person page, a chat or a group page, show a Back link at the top left and no monogram, as the title bar below sets out. The monogram belongs to the parent alone. Children never appear as monograms (§4).

## **Getting things in**

The Coach tab carries the capture bar: the placeholder "Type, talk or add an image", then attach, camera and microphone. While she has typed text, an arrow labeled "Give this to the coach" joins them and the microphone stays. Once the text runs past one line, the text takes the full width and grows up to five lines before it scrolls inside, and the controls sit on a row beneath it. Today and the game plan carry the same capture bar, docked between the page and the tab bar, and Today hides it while the coach card is asking for a capture. Team and Kids carry none. On every tab with the bar she types in place: the keyboard rises over the tab bar, the bar rides on top of it, and the coach's read-back lands where she is, on the coach card on Today, in the read-back strip on the game plan (§8) and in the conversation on the Coach tab. MVP never moves her to another tab without warning, so a control that would take her somewhere else says where in its label. Each school card carries its own Add to this card button. Things also arrive from outside the app through the share menu and the forwarding address, and from her own calendar once it is connected (§7).

## **Layout and scrolling**

Every screen in the app is one of eight types, and each type has one rule for what stays fixed, what scrolls and what is anchored at the foot. A screen never makes up its own scrolling. The screen map names the type of every frame, and the build has one layout shell for each type, so a new screen inherits its behavior from its type rather than from whoever draws it. The types follow how iOS apps behave, because most parents will open MVP on an iPhone and expect it to move like the apps they already use.

| Type | Screens | Fixed at the top | Scrolls | Anchored at the foot |
| ----- | ----- | ----- | ----- | ----- |
| Today | Every Today state, including her first board, and the recipient's Today in View as | Nothing. The header and Now hold in place, and the canvas sheet rises over them, as "Scrolling" in §5 sets out. | The canvas sheet | The capture bar and the tab bar |
| Tab list | Game plan, Team and Kids | The title bar, holding the tab's actions and the monogram | The large title and everything beneath it | The tab bar |
| Page | A person page, a child page, a school card, an article, the members of a group, and Settings | The title bar, holding Back and the page's actions | The large title and everything beneath it | The tab bar |
| Conversation | The Coach tab, a chat, and a group's page | The title bar, holding the title or Back, and the monogram on the Coach tab | The messages or posts | The capture bar or the message field. The Coach tab also keeps the tab bar beneath it. |
| Composer | New message, a post to a group, a request draft, a draft handed to another app, Add someone and New group | The title bar, holding Back and the heading | The fields and the message | The primary button, such as Send, Post, Add or Create group |
| Onboarding and setup | 0w to 0j, except the thinking screens | The top bar, holding Back and, on setup screens, the step counter | The content | The primary button and the skip link |
| Sheet | The reminder sheet, the answer sheet, the Leave sheet, Ask someone and the other sheets on Today | The grabber, Close and the heading | Only a tall sheet scrolls, and a compact sheet fits its content | The primary button and its link |
| Still | The splash, the thinking screens, getting ready, a notification, the staged calendar permission and Ms. Reyes's web page | Nothing | Nothing, except Ms. Reyes's web page, which scrolls as any web page does | Nothing |

### **The title bar**

Tab lists and pages share one title bar, which behaves like the one in Apple Music.

* **The title bar's controls never move.** The monogram, Back and the screen's actions, such as New message on Team, sit in the title bar at the top of the screen and stay there however far she scrolls, so nothing she needs to tap is ever scrolled away. On a tab, the monogram sits at the right with the tab's actions before it. On a page, Back sits at the left and the page's actions at the right.
* **The large title sits beneath the bar and scrolls with the page.** At rest the screen shows the title bar's controls with the large title directly below them, such as "Team".
* **The title fades into the bar.** As the large title passes under the title bar, it fades out and the same words fade in, smaller, at the center of the bar. Scrolling back down reverses it, so the large title fades back in and the small title fades out. The fade follows the scroll position rather than a timer, so it stops wherever she stops.
* **The small title is a link to the top.** Tapping the small title, or tapping the active tab again, scrolls the page back to the top, which brings the large title back.
* **The bar has no line and no shadow.** It takes the screen's own surface color, so the content passes beneath it unseen.
* **On the game plan, the week strip sticks.** The week strip holds under the title bar and marks the day she is reading, and the review card and the day headings scroll with the page, so only one layer sticks (§8).
* **Reduced motion.** When the phone asks for reduced motion, the two titles swap at the halfway point without fading.

### **The keyboard**

The keyboard follows iOS.

* **The keyboard rises over the tab bar.** The tab bar is never lifted above the keyboard, and the sidebar at wider sizes is unaffected.
* **Whatever is anchored at the foot of a screen with a field rides directly above the keyboard.** That covers the capture bar, a message field, a composer's Send and an onboarding screen's Continue.
* **The field she is typing in is always in view.** When the keyboard opens, the screen scrolls so the focused field sits above whatever is anchored at the foot.
* **She dismisses the keyboard the iOS way.** In a conversation, dragging the messages down lowers the keyboard as she drags. On any other screen, tapping outside a field or scrolling the screen lowers it.
* **Return moves her on.** In a form, Return moves to the next field, and on the last field it does what the primary button does. In a message field, Return starts a new line, and only Send sends.
* **A sheet with a field rises with the keyboard,** so its primary button stays in view.
* **Chats and composers hide the tab bar.** A screen whose foot is a message field or Send hides the tab bar while it is open, as Messages does, because the keyboard owns the foot of the screen there. Back returns her to the tab, with the tab bar. The Coach tab keeps its tab bar, because it is a tab rather than a page opened from one.

### **Sheets never nest**

A sheet never opens another sheet, and nothing opens on top of a sheet except the keyboard and the phone's own permission prompts. When something in a sheet leads to another screen, such as Ask Min-jung under Plan B opening a draft, or Next in Ask someone, the sheet closes first and the screen opens in its place. A choice that would need a second sheet is made inside the first one instead, which is why a leaving time on the Leave sheet opens in place under its station. The scrim behind a sheet covers the tab bar and the capture bar, and dragging a sheet down closes it, the same as Close.

### **At wider sizes**

From tablet width up, the sidebar replaces the tab bar and every rule above applies inside the content column. The title bar spans the column, and on the game plan the week strip becomes the headings of the seven columns and stays there. A composer or chat hides nothing at these sizes, because the sidebar is never covered by the keyboard.

### **Building the types**

* **One shell per type.** The build has one layout component for each type, and every screen is built inside the shell its screen map entry names. A screen that needs to behave differently is a new issue, not a local exception.
* **The page scrolls, not a box inside it,** on every type, so the browser's own scrolling and the scroll position on returning from a page or a sheet work as they do on any web page. Fixed and anchored parts use sticky or fixed positioning, as Today does.
* **The title fade is worked out from scroll position.** The build watches how far the large title has passed under the title bar and sets both titles' opacity from it.
* **The keyboard is handled with the visual viewport.** The viewport is set to resize the content when the keyboard opens, and anchored feet sit at the bottom of the visual viewport, so they ride above the keyboard on iOS Safari as they would in a native app.
* **The Figma prototype can show only part of this.** Figma cannot fade a layer as she scrolls, so each tab list and page board draws its title bar fixed and its large title inside the scroll frame, and one reference board per type shows the scrolled state with the small title in the bar. Figma also cannot raise a keyboard, so anchored feet are drawn at rest.

## **At wider screens**

From tablet width up, the bottom tabs become a sidebar with the same five tabs in the same order. Today keeps its phone layout in a centered column beside the sidebar, because the quiet layout is designed for a phone and a wide Today is parked as F20. In the game plan, the review card sits across the top and the week shows seven columns under the week strip, with next week beneath it. Coach, Team and Kids keep their phone layout in a centered column. Nothing else about navigation changes between sizes.

### **Standing decisions**

1. **Five tabs: Today, Coach, Game plan, Team and Kids.** Adults live on Team, and the children and the organizations around them live under Kids, so a parent can guess where anything is.
2. **Kids replaces Settings as the fifth tab.** Parents look at their children's schools every week and at settings rarely, so Settings moves behind the monogram.
3. **One way in to the coach.** Captures and questions go to the same coach, because the parent thinks of it as one helper rather than two tools. She never has to say which she is doing.
4. **No tab for articles.** Articles arrive through Today and coach answers, because each one has to earn its place through something in her week.
5. **No meals tab and no month view.** Dinner appears in a plan only when the schedule forces it to move. Meal planning and the shopping list are parked as F16, and the month view as F1.
6. **One navigation at every size.** The same five tabs move from the bottom of a phone to the side of a larger screen. A wider layout never adds or hides a tab.
7. **One capture bar, on Today, Coach and the game plan.** The capture bar is drawn as a field, not as a button, so it can't be mistaken for one of the coach card's commands. The coach's dot that once started its placeholder came off on Oct. 28, 2026, because a dot in a field read as a status light rather than as the coach. Its placeholder says where things go without the word Send, because Send on its own means sending something to another person. It replaces the floating "Send to coach" button of earlier versions, which looked like every other button and could sit beside a coach card asking for the same thing. She types in place, and the read-back lands where she is, because switching her to the Coach tab mid-thought loses her place.
8. **Every screen is one of eight layout types,** each with one rule for what is fixed, what scrolls and what is anchored. Rules written once per type hold across a hundred boards, where rules written per screen drifted apart as the boards were drawn.
9. **Tab lists and pages use a title bar like Apple Music's.** Its controls never scroll away, because losing the monogram or New message to a scroll is losing a way out. The title fades from large to small rather than disappearing, so she always knows where she is, and the small title takes her back to the top.
10. **The keyboard follows iOS.** Anchored feet ride above the keyboard, the tab bar does not, and chats and composers hide the tab bar while they are open, because that is how the apps she already uses behave.
11. **A sheet never opens another sheet.** Anything a sheet leads to opens after the sheet closes, so she is never two layers deep in a decision.

### **Open conditions**

1. **The tab names face customers and need brand sign-off from Heather.** If the sports naming of Team is judged too much, the plain fallback is Kids and People.
2. **The capture bar's limit of five lines is Claude's proposal** (issue A10, fixtures Appendix B item 68). Greg decided that the text area grows as she types.
3. **Two readings of the layout rules are Claude's and need Greg's confirmation** (issue C39). The Coach tab is a conversation with a fixed title bar rather than a tab list with a fading title, and chats, composers and a group's page hide the tab bar. The game plan's part of C39 is decided: the week strip sticks (issue G22).
4. **New message stays a labeled button in Team's title bar.** An icon would take less room, but it needs a new icon in the library, and the label is clearer. Whether to change it is open.

# 3. Onboarding

Onboarding appears in the demo only in Charlotte's household, as moment C-00, on Monday, Oct. 5, the week before the demo week. The other households open already set up.

Onboarding has three parts. Before any account, the parent tells MVP her first name and who she is planning for, then gives it one thing from this week and sees it come back as a plan. In the second part she creates the account, connects her calendar and answers three short setup screens. In the third part MVP finishes setting up, the coach introduces itself, and she lands on Today, where the coach makes its first recommendation.

The wireframes are the onboarding flow map and screens onboarding-01 to onboarding-19, with the failure and waiting states on onboarding-19 and the lines taught in her first week on onboarding-18. Since the wording review of Oct. 27, 2026, the frames on the Figma page "Design - lombardi · post-review" are the source for 0w, 0k, 0k-b, 0k-c, 0c, 0f, 0h, 0j and every 0i state, and the screen map names them.

| # | Screen | Part | Step counter | Skip |
| ----- | ----- | ----- | ----- | ----- |
| 0s | Splash | Before the account | None | No |
| 0w | Welcome: her first name and zip code | Before the account | None | Yes, to 0k |
| 0k | Who are you planning for: each child's first name and birth month and year | Before the account | None | No |
| 0k-b | The grades the MVP Coach suggests, in list boxes she can change, with 0k-c showing a list open | Before the account | None | No |
| 0a | Show me one thing | Before the account | None | Yes, to 0e |
| 0v | Check the photo: Use this photo or Retake, for a photo only | Before the account | None | No |
| 0r | Thinking, while the coach reads the capture | Before the account | None | No |
| 0b | Read-back, with a control to confirm which child it is for, at most one question, and the hand-off | Before the account | None | No |
| 0t | Thinking, while the coach builds the draft | Before the account | None | No |
| 0c | The draft, with the dates it covers and the account prompt over it | Before the account | None | Not now ends the session |
| 0e | Create your account: an email address or sign-in with Apple | Setup | 01 of 05 | No |
| 0e-p | Choose a plan: Basic or Family, each with a free trial, staged | Setup | None | No |
| 0q | Connect your calendar: Google Calendar, Apple Calendar or Outlook, with a staged permission screen and a connected state | Setup | 02 of 05 | Not now, to 0f |
| 0f | Who's on your calendar: each child's school and start time | Setup | 03 of 05 | No |
| 0g | Your household: household type and home language | Setup | 04 of 05 | No |
| 0h | Who else helps: the adults she counts on | Setup | 05 of 05 | No |
| 0p | Getting everything ready, while the account is created | Finishing | None | No |
| 0j | Welcome to the team: the coach's introduction and a recap | Finishing | None | No |
| 0i | Her first board on Today: on arrival (0i-a), the other options (0i-b), after she agrees (0i-c), with nothing captured (0i-d), ready for the morning (0i-f), after she removes a reminder (0i-i), adding a reminder (0i-j) and after she picks Plan B (0i-g), with 0i-h showing the next morning | Finishing | None | No |

The words on every screen are in fixtures C-00 and fixtures section 4, "Onboarding".

## **Inputs**

| Field | Screen | Type | Description |
| ----- | ----- | ----- | ----- |
| First name | 0w | string | Used in the coach's greeting and the children screen's heading. Optional, because 0w can be skipped. |
| Zip code | 0w | string | Used to work out travel times and the local school calendar. Optional. Charlotte enters 00123. |
| Child's first name | 0k | string | One per child, labeled "Your kiddo's first name". |
| Birth month and year | 0k | month and year | One per child, such as "October 2016". |
| Grade | 0k-b | enum | Suggested from the birth month against a September 1 cutoff and changed in a list box: Not in school yet, Pre-K, Kindergarten, then First grade through Twelfth grade. No College. |
| Capture | 0a | photo, file, or voice or text | The one thing from this week. Optional, because 0a can be skipped. |
| Child for this capture | 0b | child reference | Preselected by matching the document's grade to a child's grade. |
| Email or Apple sign-in | 0e | string or action | Creates the account. Her name is already known from 0w. |
| Calendar | 0q | choice | Google Calendar, Apple Calendar or Outlook, or Not now. Charlotte connects Google Calendar. |
| School | 0f | string | One per child in school. Filled in from the capture where it can be, with the note "From your calendar photo". |
| Start time | 0f | time | One per child in school, such as 8:00am for Alexis and 8:30am for Mallory. It lets her first board open with a recommendation. |
| Age | 0f | number | Only for a child marked Not in school yet, in place of School and Start time. |
| Household type | 0g | single choice | Asked as "How is your household set up?": Two parents, One parent, Two homes, Something else. |
| Language at home | 0g | select | English is the only working option in the prototype. |
| Other adult | 0h | name and relationship | One row per adult, with the fields Name and Relationship. They become the first members of her circle. |
| Reminder | 0j | checkbox | Ticked by default, such as "Remind me the night before a library day". Tapping Next with it ticked brings up the notification permission. |

## **Behavior notes**

* **Value still comes before the account.** The welcome and the children screens come before the first capture so the coach knows whose week the capture belongs to. Without them the coach could only guess which child a calendar was for. They are short, and none of them asks for an account. The welcome can be skipped and the children screen can't, because every later screen depends on knowing the children.
* **The coach always confirms which child a capture is for.** It asks "Whose calendar is this?", or names the kind of document, and preselects a child by matching the grade on the document to a child's grade, and she changes it with one tap. If two children share a grade or the document shows none, nothing is preselected. The confirmation is a control, not a question, so the coach can still ask its one question.
* **She hands the draft to the coach.** The read-back never runs straight into the draft. Once the child is confirmed and the coach's question is answered, the coach says what it will make and what it keeps for later, and she starts the draft herself with a button such as "Make Mallory's plan". A "Something's not right" link lets her correct the read-back first.
* **The first draft covers the rest of this week, and shows its dates.** The draft is headed "Mallory's plan for this week" with "Oct. 6 to 9" beneath it. Anything on a capture that falls in a later week goes onto the school card and enters the plan when its week arrives.
* **Waits are shown, never hidden.** A thinking screen with the MVP mark and a line saying what the coach is doing appears while it reads a capture (0r) and while it builds the draft (0t), and each moves on by itself. The getting ready screen (0p) shows its steps finishing in turn, five of them when she has connected a calendar, each marked done, working or waiting, with no percentage, because a number that stalls or jumps looks broken.
* **Failure states have their own screens.** A capture that cannot be read replaces 0b, with Retake photo and Choose another. A wait longer than twenty seconds replaces 0r or 0t, with Try again. Account creation that fails replaces 0p's steps, keeps everything she entered, and offers Try again. If she leaves during 0p, MVP opens at 0p or 0j when she returns. The words are in fixtures section 4.
* **Her first board opens with the coach's first recommendation.** Setup has given the coach each school's start time on 0f, so if she captured something, the pass at the top of Today shows the trip the coach recommends, marked "Needs an owner", with the evening reminders as its checklist, and the coach card beneath it recommends how tomorrow morning goes, such as "Take both girls at 7:40am". When she agrees, the card keeps the thread and the same pass turns to "Tomorrow" (§5). If she skipped the capture, the pass shows tomorrow's first school start, marked "Needs an owner", and the coach card asks for one thing to start with and holds Take a photo, Attach a file and Talk or type, and the capture bar is hidden.
* **Leaving before the account starts over.** A parent who taps Not now on the account prompt, or leaves before creating the account, starts again at the splash the next time she opens the app.
* **Back from the account screen** returns to the draft with the account prompt open.
* **Her calendar comes right after the account.** It follows the first draft, so she has seen what MVP does before it asks for her calendar, and it comes before the school screen, so the coach can fill in what the calendar already shows. While the account is created, 0p reads the calendar, and the coach's introduction on 0j says what came in. If she taps Not now, connecting stays in Settings, and the coach offers it once, the first time she gives it an appointment.
* **Entry points are taught when they become useful,** not during onboarding (§7).

## **Prototype timing**

The prototype does not read photos, so each thinking screen lasts two seconds and the getting ready screen lasts four. The capture is the prepared photo of Westview Kindergarten's rotation calendar, headed "Westview Kindergarten" with "October 2026" beneath it, and the read-back, the coach's question, Charlotte's reply, the draft and the first board's recommendation are scripted. The account screens and the calendar permission screen look real and create or connect nothing. The failure states are built so they can be shown on request, but they do not appear in Charlotte's path.

### **Standing decisions**

1. **Value before account.** She sees her first draft before she is asked to create an account. This is a locked decision. Its wording changes, because her first name and her children's names and birth months now come before the first capture (open condition 1).
2. **Nothing before the account is kept.** Her name, zip code, children, photo and draft are held only for the session and discarded if no account is created.
3. **Collect progressively.** After the account, she connects her calendar, and three setup screens ask for each child's school and start time, the household type and home language, and the adults who help. Everything else about each child comes later, through the coach on Today, which opens with its first recommendation. There is no per-child intake form.
4. **The step counter appears on setup only,** running from 01 of 05 to 05 of 05. The screens before the account are not a form, and the screens after setup leave her nothing to do.
5. **Onboarding has no step for adding schools beyond naming them.** The first school card is built from the first capture (§11).
6. **Her people is not part of onboarding.** The adults on 0h join her circle. The coach introduces her people when a question needs other parents.
7. **A plan screen follows the account, and nothing else asks for money.** "Choose a plan" (0e-p) comes right after she creates her account and shows the two plans, Basic and Family, each with a free trial, so the demo shows how MVP is sold. Choosing a plan starts the trial and moves on to 0q. A free trial means she can cancel before she pays, so the screen comes after she has seen her first draft and before setup asks anything more of her. In the prototype the screen is staged: no payment is taken, nothing opens Stripe, and either button moves on. Onboarding still ends with the coach's introduction and her first board, and the getting ready screen carries no percentage or figure.
8. **Headlines are display type, and the coach speaks in Voice in onboarding only.** Every onboarding and setup headline is set in Fraunces. The coach's lines in onboarding are set in the Voice style, and once she reaches Today the coach is set in Inter. Fields, labels, helper lines and buttons are set in Inter (§19).
9. **"Time saved" is left out of the coach's introduction,** because nothing in the product measures it.
10. **The zip code is the starting point for travel times.** MVP never asks for a home address. It works out each drive from the zip code and adds five minutes, so an estimate errs early. Directions opens her maps app, which routes from wherever she is.

### **Open conditions**

1. **Heather signs off the new onboarding order.** "Value before account" still holds, but the line that onboarding asks for one thing before it asks who she is no longer does. The brief carries the same change (issue O3).
2. **The plan screen's words are proposed.** The plan names, prices and features on 0e-p come from Greg's board and need Greg's and Heather's confirmation before they go into fixtures section 4 (issue O17).
3. **The school screen's heading may change.** It reads "Who's on your calendar?" and follows "Connect your calendar", so the two may read as the same thing (issue O11).

4. **0g and 0h may become one screen.** Heather's wording for 0g arrived on Oct. 28, 2026, so the combined screen is Greg's to draw (fixtures Appendix B item 93).
5. **The Figma read-back reads "Who's calendar is this?"** and needs to read "Whose calendar is this?" (fixtures Appendix B item 92).

# 4. The plan: items, owners, statuses and marks

A family's plan is the best current version of the week, and it changes whenever someone's day does. Every screen that shows the plan, which is Today, the game plan, requests and coach cards, uses the model in this section.

## **Plan item**

| Field | Type | Description |
| ----- | ----- | ----- |
| Day and time | demo time | When the thing itself starts, as a day of the week and a time, or "All day" (§16). Ballet is at 4:15pm, and Mallory's school run is at 8:30am, when Westview Kindergarten starts. When she leaves belongs to the run on Today (§5, §16), such as 3:55pm for ballet. |
| Title | string | The on-screen wording, such as "Alexis · Pick up at Cedar Grove Elementary, early dismissal". Taken verbatim from the fixtures. The child's name before the dot is drawn as her name chip, and the dot is dropped. |
| Children | references | The children it concerns, when there are any. Drawn as name chips or a group chip (below). |
| Place | reference | Where it happens. |
| Owner | person reference or none | The adult responsible. Shown as their name, as "You" for the parent, or as "Needs an owner". |
| Kind | enum | Routine, which repeats every week, or This week, which happens once. |
| Type | enum | Event, the thing itself, such as ballet or a party, or Trip, how a child gets there and back, such as a drop-off or a pickup. Tasks keep their own kind. |
| For event | reference | Trips only. The event the trip serves, such as Ada's birthday party for the drop-off at the Okafors'. |
| Status | enum or none | Where a request or suggestion stands (below). Present only when another person or the coach is involved. |
| Marks | set | Changed and Conflict, which can sit on any item whoever owns it. |
| Note | string | A note the parent added, such as "Green dress, hanging in the laundry room". |
| Source | source reference | Where the item came from: a capture (§7), her calendar, or "From you". An item can have more than one. |
| From her calendar | boolean | True when the item came from her connected calendar. It shows the calendar mark, and it is moved or deleted in her calendar rather than in MVP. |
| Going with | strings | What goes with the child for this item, when anything does. On Today these items join the checklist under Now. |
| Task kind | enum | Tasks only. For this trip, which joins the checklist of the run it names, or Anytime, which shows "Anytime" in Later today (§5). |
| Steps | strings | Tasks only, optional. Steps the parent wrote herself, shown as a checklist on the task's item page. |

## **Owner**

The owner is the adult responsible for the item. "Needs an owner" is drawn with its own mark, because an item with no owner is always something the week still needs from her. A suggested item has no owner until she chooses it.

## **Status**

The seed file uses the internal names. On screen, a person's answer is their outlined initial and an icon, so every status shows whose it is without spelling out a name that may be long. The words in the table are what each status says in notifications, in the coach's lines and in the accessible label every status carries. On a person's own page the initial is left off, because the page already belongs to that person.

| Internal name | On screen | What it means |
| ----- | ----- | ----- |
| Proposed | Suggested | The coach has suggested it and the parent has not chosen it yet. It waits on the game plan's review card until she adds it or says she doesn't need it (§8). |
| Asked | Edward's initial and an hourglass, labeled "Asked Edward" | The parent has sent it to someone, and that person has not answered. |
| Accepted | Edward's initial and a thumbs up, labeled "Edward: yes" | The person asked has said yes. The item can still change. |
| Declined | Edward's initial and a thumbs down, labeled "Edward can't" | The person asked has said no. The item reopens with options beside it. |

## **Marks**

| Internal name | On screen | What it means |
| ----- | ----- | ----- |
| Changed | Updated | Something about the item moved since the parent last looked, because of a message or another person. The mark stays until she opens the item. |
| Conflict | Conflict: yoga | The item collides with another one. |

When the plan asks one adult to be in two places at once, or leaves a child with nobody, both items show "Conflict:" followed by the other item until the parent resolves it. When the other item is on another day, the mark names its day, such as "Conflict: Monday's therapy". An item that collides with two or more items names them together where it can, such as "Conflict: both pickups", and otherwise gives the number, such as "Conflict: 3 items".

A recurring item that collides with another every week, such as violin and therapy on Mondays, carries the Conflict mark on every week it applies, from the moment the coach finds it, with the dot in the week strip. When she is in the app, a notice tells her once (§8, "A new conflict"). The coach card raises it in the Sunday look-ahead before the first week it applies, when nothing more pressing is waiting, rather than every week (issue G26).

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
* **Chips lead each row in a list of items,** such as Later today, the game plan and requests, and the chip replaces the child's name in the row's text, so a row reads "[Mallory] Pick up at Westview Kindergarten". Checklists are grouped instead, under a heading in `kid` that names the child and says what the list is, such as "Mallory", and their rows carry no chips. The title on Now's pass carries no chip either (§5).
* **A row carries at most two chips.** A row that involves every child uses the group chip.
* **Guests are named in the row's text,** such as "Dinner with Claire", and carry no avatar.
* **The coach writes names in full.** Chips label items in the plan and never appear inside the coach's sentences.
* **A child who comes along gets the group chip,** and the row names the place rather than the activity, such as "[Both] Studio Ten Dance".
* **There is one color for each kind of person.** All children share the children's indigo, and cerulean is for buttons, links and the active tab, never for a person.

## **Behavior notes**

* **A change she makes herself is never flagged back to her.** Taking the Wednesday carpool from the coach card shows "You" with no status and no Updated mark.
* **A decline always leads somewhere.** When a status becomes Declined, the coach card returns with a recommendation (§5, §6).
* **Conflicts are written into each moment in the prototype,** not computed at run time, because the seed is the source of truth for what appears on screen. The rule above is what the seed must agree with and what the real product computes, counting the fixed travel times between places.
* **The coach adds what she has already committed to (F35).** An event on her own calendar that takes a child somewhere, or her own appointment that decides when she can drive, joins the plan with "You" as owner and no status, because she put it on her calendar herself. A change to her children's school day, such as an early dismissal, a closure, a dress day or picture day, joins as hers or changes the item it affects, because it happens whether she plans for it or not. Each carries its source, and none carries a mark for being new. A calendar event that collides with the plan gets the Conflict mark as soon as it is added. Invitations she hasn't accepted, events with no time and events for other grades stay out. The table in fixtures section 2, "What the coach adds for her", is the rule.
* **Things she says are hers.** Something she types or says about her own week, such as the yoga class in C-01, joins the plan as hers with no status, because she said it.
* **Choices wait for her.** A proposal from someone else, such as Ms. Reyes's second session, and a school event a parent chooses to attend, such as a fair, arrive as Suggested on the review card (§8).
* **An event brings its trips.** Once an event that takes a child somewhere is in the plan, the coach adds the drop-off at its start and the pickup at its end, linked to the event. A trip she is free to take joins with "You" as owner, and asking someone else stays on its page as a backup. A trip she can't take shows "Needs an owner". A pickup whose time the coach does not know reads "time needed", and the coach asks for it one question at a time.
* **She can take anything out.** Every item the coach added has "Take this out of the plan" on its page. Taking it out is never flagged back to her, and an event she takes out is not added again unless it changes on her calendar.
* **Tasks are plan items too.** "Send Westview Kindergarten the pickup note" or "Call Brightwater Family Therapy to ask for Dana Whitfield" is an item owned by the parent, with no status, that she ticks off herself. A task the coach or a handoff creates also holds who to reach and how, from what MVP already holds (§5, "Tasks").

### **Standing decisions**

1. **Nothing is ever shown as settled.** The coach never calls a plan set, covered, sorted, done or final, and nothing else on screen does either. Accepted means a person said yes, and the item can still change.
2. **Owner, status and marks are separate.** The owner says who is responsible, the status says where a request or suggestion stands, and the marks say what has changed or collides. An item can carry one of each.
3. **The parent's own items show "You" and no status,** because there is nobody to wait on.
4. **People are shown by kind, not by person.** Name chips for children, outlined initials for adults and a dot for the coach replace the per-person colors and children's monograms of earlier versions.
5. **The coach adds what happens whether she plans for it or not, and asks about choices.** A busy week should not turn the plan into a queue of approvals, so what she has already committed to elsewhere joins the plan, and only proposals from other people and choices that involve another person or a conflict reach her. The coach still sends nothing to anyone, so the rule that nothing reaches another person unless she sends it is untouched (issue G42, F35).

### **Open conditions**

1. **How conflicts are detected in the real product** beyond the rule above, including whether a child at home with another adult counts as covered, needs defining before launch. The prototype does not depend on it.
2. **None.** The mark shows as soon as the coach finds the conflict (issue G26, decided October 17, 2026).
3. **None.** The children's color is indigo, `kid` #22549A on `kid-bg` #DDE5ED, and the library is published (issues C42 and C44).

# 5. Today

Today is the home tab, and it shows the logistics for the current day and nothing else. It is quiet on purpose. A parent glances at it on her way out the door, so it leads with the one thing she needs next and keeps everything else out of the way.

The wireframes are 01 (C-03, Monday morning), 01b (C-03b, Monday afternoon), 02 (C-06, Wednesday morning), 02b (C-06b, Wednesday afternoon), 03 (C-07, the evening), the 0i frames on the post-review Figma page (her first board in seven states, and 0i-h, the next morning between drop-offs), onboarding-19 (failure and waiting states), and the states added in wireframe pass 12: running late, the Leave sheet, the reminder sheet in its set and notifications-off states, Wednesday at 5:10pm and Sunday.

## **Parts**

Today has a header and four parts, always in this order.

| Part | Shows | Words |
| ----- | ----- | ----- |
| Header | The phase icon, then one dateline in Title naming the day, the phase of the day and the date, such as "Monday morning, Oct. 12", with the parent's monogram on the same row. There is no separate phase title. | Fixtures section 4, "Today" |
| Now | The next thing today that needs her at a set time: usually the current leg, laid out as a boarding pass: a tinted pass holding the title, the leaving time in Display with a status pill, and the route with the next station; under it the Drive, Arrive and Pickup or Starts fields, a dashed line, the grouped checklist, a second dashed line, and Remind me and Directions. Now always holds a pass: when nothing timed is left today, the pass shows her next departure on a later day, under a line in Meta saying why. | Each moment, and fixtures section 2, "Now, from one moment to the next" |
| Coach card | Only when the coach needs an answer from her, and after she answers, when it keeps the thread until she leaves Today. It may concern any day. | Each moment |
| Later today | The rest of the day as a list, with times in a column, and a line at its foot counting what is done. | Each moment |
| MVP Editorial | At most one article, only when something in the week makes it useful. | Each moment |
| Capture bar | "Type, talk or add an image", then attach, camera and microphone, docked above the tab bar. Hidden while the coach card asks for a capture. | Fixtures section 4 |

**Today has two surfaces.** The header and Now sit on paper (`bg/card`) at the top of the screen, because Now is the one thing she acts on next. The coach card, Later today and MVP Editorial sit below on a canvas sheet (`bg/canvas`) whose top corners are rounded at `radius/xl`, so the eye reads Now first and the rest of the day second. In the evening, tomorrow's pass, with the evening reminders as its checklist, takes the paper surface, and the coach card and For tomorrow take the sheet. The sheet runs into the capture bar and the tab bar, which sit on canvas too. The surfaces are not cards: the coach card is still the only card, and everything else sits directly on its surface, with space between the parts instead of borders, divider lines or a timeline rail. There are no per-person rows and no column headings. The two surfaces also move differently. The header and Now stay in place, and the sheet scrolls up over both. When the header and Now together are taller than the space above the capture bar, they scroll up until Now's actions sit just above the capture bar, and then hold still. In the evening, tomorrow's pass stays in place and the sheet rises over it.

## **Phase of the day**

| Phase | Dateline | Runs | Board |
| ----- | ----- | ----- | ----- |
| Morning | "Monday morning, Oct. 12" | Midnight to noon | Now, the coach card, Later today, MVP Editorial |
| Afternoon | "Monday afternoon, Oct. 12" | Noon until the board turns to tomorrow | The same, with what is done dropped from Later today and counted at its foot |
| Evening | "Monday evening, Oct. 5" | From 7:00pm, or after the last activity scheduled past 7:00pm | Tomorrow's pass, with "Reminders for tomorrow morning", or the phase of that departure, as its checklist, then the coach card when there is one and "For tomorrow" with her later departures tomorrow that take a child |

The phase is a word in the dateline, and its icon sits before the dateline on the same line, so the header is still one line and Now stays near the top. The icons are `phase-morning`, a sunrise, `phase-afternoon`, a sun, and `phase-tonight`, a moon, in `ink/primary`, drawn through the Icon component. The separate phase title and its icons came off in the wording review of Oct. 27, 2026, but Heather's review asked only for the title to go, so Greg put the icon back on Oct. 28, 2026, beside the dateline. The icons stay in the library. The evening shows the day it is, not tomorrow. In the prototype the phase follows the moment's demo time, never the device clock.

## **Now**

| Field | Type | Description |
| ----- | ----- | ----- |
| Time | demo time | When she leaves on the current leg, in Display, such as "2:15pm", or the time of a timed thing at home, such as "6:30pm", or the leaving time of her next departure on a later day. |
| Pass | surface | A panel with large rounded corners (`radius/xl`) at the top of Now, holding the title, the time row and the route. It is filled with `kid-bg` when a child is on the leg and with `bg/subtle` when the leg is hers alone, such as yoga. A rule in `focus/ring` runs under the time row. The pass is a surface for the trip and not a card: the coach speaks only in the coach card. A timed thing at home gets a pass too, tinted `kid-bg` when a child is part of it, with "At home" in place of the route. Since version 0.26 Now always holds a pass. |
| Title | derived | The item at the stop she is heading to, in the words a parent says aloud, always naming the child, such as "Pick Mallory up at Westview Kindergarten", in Subtitle at the top of the pass, with no chip. The tint says a child is on the leg, never which one, so it never names a child on its own. On a run it names the item at the next stop and changes as each leg takes over. On a trip pass before the trip starts, it names the trip and the children, such as "Take Alexis and Mallory to school". A leg that ends at home has no title. |
| Route | string | On the pass, under the rule: where she leaves from and where she is going, such as "Home → Westview Kindergarten", in Body strong, with a chevron. The arrow's accessible name is "to". Tapping the route or the time opens the Leave sheet. The chevron appears only on a leg she travels herself. A pass for a child leaving with someone else, such as Alexis with the Parks, has no chevron, and its route and time do nothing when tapped, because nothing on the Leave sheet is hers to change on that leg. For a timed thing at home: "At home", with no chevron and no Leave sheet, and the item, such as "Dinner with Claire", as the title. |
| Status pill | derived | Beside the time, at the right, on the pass. Plain while more than 15 minutes are left, such as "in 30 min" or "in 2 hr 30 min". On the control surface with a hairline while it counts down, and from 15 minutes before with the countdown in `status/warning`, still counting down. "Time to leave", filled, from the leaving time. "Running late" in the warning fill from five minutes after it. On a pass for a later day it names the day, such as "Tomorrow" or "This Friday", plain, and on a departure nobody owns yet it reads "Needs an owner", plain. The only part of the pass that changes through a leg's stages. |
| Fields | derived | Three fields under the pass, on the paper, each a label in Meta over a value in Body strong: Drive, Arrive, and Pickup or Starts. Arrive is worked out from the leaving time, and from the leaving time onward from now, and is set in the warning ink with a clock icon when it falls after the stop's time. For a child leaving with someone else: With and Starts. A trip pass shows a timetable in their place. |
| Timetable | rows | On a trip pass only, under the first dashed line, drawn on RouteStation's rail: one row for each departure and each stop, with the time in Body strong at the left. A stop row has the child's chip, the place and a Meta line such as "Drop off · D day · Starts 8:30am". A departure row reads "Leave home" or "Leave" and the stop. The last row reads "Back home". Each row carries a StopMarker, an icon for the kind of place the row happens at, home or school, so both rows at a school show the school icon. The rail stops above and below each marker rather than running behind it. The row she acts on next has its icon in a solid cerulean circle and bold text, which on the evening before is "Leave home". During the trip, rows behind her are muted, with muted icons and faded chips, and the rows ahead stay in full ink. |
| Dashed lines | | One dashed line under the fields, above the checklist, and a second under the checklist, above the actions, so the actions read as part of the trip and its list. With no checklist, the second line goes. |
| Checklist | groups | Items grouped under a heading in Body strong in `kid` that is the child's name alone, such as "Mallory", or "Both" or "All three", and her tasks marked for this trip under "Before you leave home" in ink. Each item is a ReminderItem: a container in `kid-bg` with the check in a fixed left column, the item, and a remove button at the right with the accessible name "Remove" and the item. Each child's group ends with "Add something else for" and the child's name. A task is ReminderItem's Task kind: the task's words, a Meta line naming who to reach, and the button that does it in place of the remove button. Rows carry no chips and no counts, the whole row outside its button is the target, and a ticked row stays in place, dimmed. Removing and adding work as in "The evening". A finished group folds to one line, and a finished checklist folds to one line (below). The same rows serve the evening reminders and For tomorrow. |
| Actions | buttons | Remind me, with a bell, and Directions, with a navigation arrow, both outlined, side by side at equal width under the second dashed line. Directions appears only on a leg she drives. Remind me goes away from the leaving time. On a pass for a later day the action is Remind me, or "Remind me to leave home" in the evening, and a pass nobody owns has no action. |
| Next station | derived | Under the route, in Meta: "Then Cedar Grove Elementary, 2:45pm", naming the next stop on her run, or "Then at 8:15am, you leave home for Westview Kindergarten" when a separate run leaves within 30 minutes. Absent when nothing follows soon. |

The drive line of version 0.14 is retired. Drive and Arrive carry what it said, and a set reminder shows only in its button.

### **When a checklist is finished**

Ticking the last item used to give her nothing back. Now a finished list folds away, so she can see at a glance that it is done, and nothing about it congratulates her.

| State | When | Shows |
| ----- | ----- | ----- |
| Open group | Any item in the group is unticked, or she has opened a folded group | The heading and its rows, as above, with no count. |
| Folded group | Every item in the group is ticked | One line: the heading, a check and the count, such as "Alexis · 3 packed", or "Before you leave · 1 done" for her own tasks. Tapping it opens the group with every item still ticked. |
| Folded checklist | Every group under Now is ticked | One line: a check that draws in once, then "Everything is packed for" and the leaving time, such as "Everything is packed for 7:40am". Tapping it opens the groups, each folded. |

* **The check draws in once,** when the checklist folds, over about 300 milliseconds, and not again when she scrolls or returns to Today. When the phone asks for reduced motion, it appears without drawing in.
* **Nothing else happens.** There is no praise, no coach line, no sound and no confetti, because the coach never praises her (§14). A light haptic is allowed in the native product and is not part of the prototype.
* **Unticking reopens.** Unticking an item inside an opened group leaves the group open, and the checklist line goes back to its groups. Ticking the last item again folds them again, and the check draws in again.
* **The evening reminders fold on tomorrow's pass.** When every group on the pass is ticked, the list folds into "Everything is packed for" and the leaving time while anything under For tomorrow is still open, and into "Everything is ready for" and the same phase as the heading, such as "Everything is ready for tomorrow morning.", once nothing for tomorrow is left, so the line is always true. The pass stays. In For tomorrow each group folds and the departure keeps its row.
* **The fold never counts as done.** A folded checklist changes nothing in Later today's count and nothing anyone else sees. The leg leaves Now only when its stop comes due.
* **Ticks live in the running app.** In the prototype they are kept for the moment and cleared when she jumps to another moment, like every other state (§15).

The library draws the states as ReminderGroup, built on ReminderItem rows, with a variant for each number of ticked rows, the folded group line, the folded checklist line and a tap between them, and ChecklistGroup is deprecated (issue T71). In the Figma prototype a tap ticks the next open row from the top, and when her tasks share the checklist the child's group folds as soon as its rows are ticked. A component cannot fold across two separate passes, so in the evening the pass's list folds to "Everything is packed for" and the leaving time on its own, and the line that reads "Everything is ready for tomorrow morning." is drawn only where nothing under For tomorrow is left, as on the first board. The build has none of these limits and follows the table above.

### **What leads Now**

Now shows the next thing today that needs her at a set time. A leg she drives leads it, and so does a child leaving home with someone else, because the checklist is hers. Her own trips, such as yoga, lead it too. A timed thing at home, such as dinner with Claire, leads it when no leg comes first, as a pass with "At home" in place of the route. When no timed thing is left today, the pass shows her next departure on a later day, with its day in the status pill and Remind me as its action, and a line in Meta above it says why: "Nothing to drive to today." when nothing today was timed, "Nothing else to drive to today." once the legs are done and tasks are left, and "Nothing else today." when nothing is left. Its checklist appears only from the evening before, as the evening reminders. A task never leads Now: anytime tasks lead Later today, earliest deadline first, and tapping one opens its item page, where she ticks its steps, sets a reminder and asks for help (issue T61). Only when the plan holds no departure ahead at all does the line stand alone, which no moment reaches.

A leg in conflict carries "Conflict:" and the other item on a line in Meta under the title, such as "Conflict: Alexis's carpool". The pill, the time and the fields stay as they are, because the leg still leaves when it leaves, and the coach card beneath holds the recommendation, with "Other options" opening the Leave sheet's backups. NowBlock has a Conflict state for it (issue T50).

Three kinds of item never lead her Now. Someone else's trip that does not start from her home stays in Later today with that person's initial and answer. An item that is Asked or that needs an owner stays in Later today, and if an Asked item is still unanswered at the time she would have to leave, the coach card asks her to decide. An item with no known time stays in Later today with "Start time needed", and the coach card asks for the time.

**Tasks.** A task's words say what to do and why, such as "Call Brightwater Family Therapy to ask for Dana Whitfield". Beneath them a line in Meta names who to reach, such as "Brightwater Family Therapy · 555-0170", and a button at the end of the row does it in one tap: Call for a phone number, "Send from" and the app for a handoff, which reopens its draft, and Message for someone on MVP, which opens the composer with them chosen. Tapping the row anywhere but the button ticks it. Every task the coach or a handoff creates names who, why and how to reach them from what MVP already holds, and a task she writes herself carries only her words. ReminderItem's Task kind draws it (issue T49).

When several tasks are left, the one with the earliest deadline leads, then the one something else depends on, then the one she added first. A task leading Now counts as done when she ticks it. Tasks on a leg's checklist do not count.

### **A leg from start to finish**

| Stage | When | What changes |
| ----- | ----- | ----- |
| Coming up | More than 15 minutes before the leaving time | The status pill counts down, plain, such as "in 30 min". |
| Getting close | From 15 minutes before the leaving time | The pill takes the warning tint and keeps counting down, such as "in 15 min". The minutes say what the tint says, so the stage does not rely on color. |
| Time to leave | From the leaving time until five minutes after it | The status pill reads "Time to leave", filled, and Remind me goes away. |
| Running late | From five minutes after the leaving time until the destination is due | The pill reads "Running late" in the warning fill, and Arrive shows the real arrival, such as 2:31 against a 2:30 pickup, in the warning ink with a clock icon. |
| Passed | The destination is due | The leg leaves Now, adds to the done count at the foot of Later today, and the next leg on her run takes over from that stop. |

MVP follows the run and never asks her to tap that she has left or arrived. Directions routes from wherever she actually is. The 15 minutes match the reminder's default, because that is when a parent starts to move, and the pill states where she stands without scolding her.

### **The Leave sheet**

The Leave sheet is the one place Today changes a time. It opens from the time or the leg line under Now on a leg she travels herself, from tomorrow's pass or a For tomorrow row in the evening, and from "Other options" on a coach card, which opens it scrolled to the backups. It is a tall sheet headed with where she leaves from and where she is going, such as "Leave home for Westview Kindergarten", with the day when it isn't today, such as "Leave home for Willow Yoga tomorrow". When the heading doesn't name the day, a line beneath it names the part of the day and the number of stops, such as "This afternoon · 3 stops", or the day, such as "This Friday afternoon". Under that, a line in Body reads "Tap a time to leave earlier or later. The stops come from your game plan, and that's where they change."

The body draws her run as a line of stations on a rail: the place, the item with its chips and start time, and "Leave at" with the time she leaves that stop. Home appears only where the run starts or ends there, and the last station reads "Back around" and the time. Each "Leave at" time is drawn as a control, cerulean text in a 1 px `interactive/default` outline on `bg/card`, because it is the one thing on the sheet she taps. Cerulean text on `interactive/tint` measured 4.2:1, below AA at this size, so the outline carries the control. Tapping it opens it in place: the time takes `interactive/tint`, and two Outlined buttons sit beneath it, "5 min earlier" and "5 min later". Each tap moves the leaving time by five minutes, because every leaving time is worked out in five-minute steps and a change is almost always a step or two, which two buttons do faster than a wheel and with a larger target. A line under that station gives the result after each tap, such as "You reach Westview Kindergarten at 2:25pm, five minutes before pickup." Later stations follow: each stop's leaving time becomes the later of its due time and the time she reaches it, and a later stop she would now reach after it is due gets the same "You reach" line. A line that says she arrives after the item starts is set in `status/warning`. A late choice is stated and never blocked. Fixtures C-03b draws the three states for the wireframes only. Until the library's RouteStation gains the buttons, the boards use a detached LeaveSheet (issue T64). Save appears only after she has changed a time, and keeps the change. Close leaves everything as it was. Earlier versions showed Save inactive from the start, which read as a button with nothing to save (issue T46).

| Case | What happens |
| ----- | ----- |
| She changes when she leaves | The leaving time changes on that leg. The change carries no Updated mark, and a reminder she has set keeps its offset and moves with it. If the reminder's new time has already passed, the reminder is removed and the button reads Remind me again. |
| She changes the start time of her own item | "Change the start time" edits the item, the time's source becomes "From you", and the original source link stays. |
| A calendar item | Its start time reads "Change this in Google Calendar." Its leaving time can still change, because the leaving time belongs to MVP. |
| An item someone else owns or has answered | Nothing on Today changes it. It is changed in the game plan (§8). |
| A change that runs into another item | Both items carry the Conflict mark, and the coach card appears. |

### **Plan B and Plan C**

For a run the coach has worked out, the Leave sheet ends with "Backup plans": up to two backups, "Plan B ·" and "Plan C ·", each the coach's line and one button named for what it does. The link "See the coach's reasons" came off in the wording review of Oct. 27, 2026, and the full message stays on the Coach tab.

- **The same backups sit on the item's page in the game plan,** under "Backup plans" (§8), from the same seed data.
- **A backup that involves a person is an ask.** Choosing it closes the sheet and opens a draft in her voice, and the item shows the person's initial and an hourglass once it is sent.
- **At least one backup depends on nobody else saying yes,** wherever one exists, and when there are two it is Plan C.
- **Backups respect the rules on the school card,** so a plan that needs a pickup note after the school's deadline is never offered.
- **When there is no second honest backup, the sheet says so** in the coach's words, such as "I don't see another way that keeps both on Friday."
- **When nobody in her plan can help,** the sheet offers Ask my people, because the coach does not find or recommend providers.
- **Choosing a backup that changes only her own plan works like accepting from the card:** no Updated mark, and Undo on the card until she leaves Today. A backup that sends a request has no Undo, because the request has gone.

In the prototype, backups are written only for the runs the demo shows (fixtures Appendix B item 56). Every other Leave sheet shows no backups.

### **Sheets**

A sheet holds a short decision about something already on screen and returns her to the same place. Anything she reads or works in is a page with Back. After she acts, the sheet closes and the screen shows the result. A sheet never opens another sheet, and anything a sheet leads to, such as a draft, opens after the sheet has closed (§2, "Sheets never nest").

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

* **A reminder never sets itself.** Tapping Remind me opens a sheet headed "Remind me to leave", with the leaving time and the next stop beneath it and three choices: 15 minutes before, which is preselected, 30 minutes before, and when it's time to leave. The sheet offers only the choices still ahead, with the first preselected, and when fewer than two are left, five minutes before joins them. For a child leaving with someone else, the sheet is headed "Remind me", its last choice names the family, such as "when the Parks come", and there is no traffic check. Once she sets it, the button reads "Reminder at" and the time in its active state until it goes off, and tapping it reopens the sheet in its set state, with "Update reminder" and "Remove reminder". A timed thing at home offers 15 and 30 minutes before, and a task offers times of day, because it has no time of its own.
* **Directions opens her phone's maps app** with every stop in order. MVP draws no map of its own.
* **The reminder arrives as a notification,** only if she allowed notifications on 0j, naming the first stop and the last stop before home, such as "Leave in 15 min for Westview Kindergarten, then Brightwater Family Therapy", with Directions and a five-minute snooze. In the prototype the notification is drawn rather than fired (F5).
* **Reminders need notifications on.** When notifications are off, the reminder sheet says so above the choices. If she has never been asked, Set reminder brings up the phone's own request. If she has said no before, the line carries an "Open settings" link, because the phone will not ask again. The reminder is kept either way and goes off once notifications are on. In the prototype both cases are staged, and Charlotte's path has notifications on.
* **Driving times come from her zip code** with five minutes added, and in the prototype from the fixed travel times in the seed. "When it's time to leave" keeps the product's wording and sets its time from the same table, because the prototype cannot check traffic.

## **The coach card**

* **It appears only when the coach needs an answer from her,** with one exception: after she answers, the card keeps the thread until she leaves Today.
* **Its label names the day it concerns,** such as "MVP Coach · for tomorrow" on a Wednesday or "MVP Coach · for this Friday", beside the coach's dot, in the Label style. A card that concerns no particular day is labeled "MVP Coach", and tapping it opens the full message on the Coach tab. A card about today reads "MVP Coach · for today".
* **It makes one recommendation with one button.** The button is named for what it does, such as "Move yoga to 12:15", and the line under it says what it changes, such as "Updates your game plan" or "Opens a text for you to send to Ms. Reyes". A button that only opens something she reads, or a sheet for her answer, has no line under it.
* **Pressing the button is her decision.** There is no second confirmation, and because the change is hers it carries no Updated mark. Undo puts every item back as it was, including any status the move resolved, and returns the card to its question.

* **The card keeps the thread after she answers.** It keeps its label and the coach's recommendation, now in muted ink (`ink/muted`), and the result follows beneath it in one of two forms. When she agrees, a cerulean check sits beside "Agreed", and the coach's follow-up says only what comes next, without restating the plan. When she chooses another option, such as Plan B from the Leave sheet, the plan she chose appears in full ink beside the check, in the coach's own words from the sheet, and the follow-up comes after it. The buttons are whatever comes next, such as "Open the game plan" or "Book at Willow Yoga", with Undo, and a card that has one keeps the Meta line "Game plan updated". A backup that sends a request has no Undo, because the request has gone. CoachCard gains AfterAgree and AfterChoice states in the library; until then the post-review frames use detached copies (fixtures C-00 and C-06).
* **"Other options" opens the Leave sheet on Today,** scrolled to the coach's Plan B and Plan C, so she can choose another way without leaving Today. A card with only one way forward names the alternative instead, such as "Say you can't this week" or "Remind me next Monday, Oct. 19".
* **When the coach asks for a fact,** the button says what she adds, such as "Add the end time", and opens a sheet with a time picker and Save. Her answer changes the board at once, and the card keeps the thread in the same way as after a move. Charlotte's demo no longer asks for a start time on her first board, because setup collects both schools' start times on 0f.
* **A move from the card never writes to her calendar and never books anything.** When a move needs a booking, the card hands her a link to the place, with an external-link icon.
* **A capture from Today lands on the coach card.** When she types, talks or adds an image through the capture bar on Today, the card shows "Reading your photo…" or the line that fits while the coach reads it, then the read-back, labeled with the day it concerns. What she said about her own day joins the plan as hers at once. What the coach took from a document someone else wrote is offered with one button, such as "Add the cans to Mallory's list", and "No thanks". After she adds it, the card says how the plan stands, with Undo and "Game plan updated". C-03a shows it.
* **A new calendar event that runs into the plan becomes the coach card** with the way through. The coach has already added the event (§4), so the card names the event, the calendar and what it runs into, and makes its recommendation, as in C-06b. A conflict today or tomorrow comes to the card, and one further away waits for the Sunday look-ahead unless nothing more pressing is waiting.
* **Today announces nothing the coach added unless it needs an answer from her.** A plan that quietly stays current is the point of F35.
* **On Sunday evening the card looks ahead.** In a household with children in school, the Sunday evening card is labeled "MVP Coach · for next week" and holds the one decision next week most needs, such as adding Westview Kindergarten's harvest fair in C-09 and then the way through its overlap with tutoring. Other households get no Sunday card.
* **The card carries no game plan link.** The day it concerns is in its label, and the full message on the Coach tab is the way to that day.

## **Later today**

* **Each row has its time in Meta, its chips, the calendar mark when the item came from her calendar, and the item,** such as "2:30pm · [Mallory] Pick up at Westview Kindergarten", and the times line up in a column. The time is when the thing starts, so a school run reads 8:30am, and the leaving time belongs to Now. An anytime task reads "Anytime" in the time column.
* **What is done drops off the list,** and a line in Meta at the foot of the list says how much, "2 done this morning" before noon and "3 done today" from noon, so the heading stands alone. SectionHeading has no count. When nothing is left, the heading stays with the count line beneath it and no rows. When nothing was planned, Later today is hidden (issue T47).
* **The calendar mark sits before the item's text,** `calendar-mark`, small, in `ink/muted` and never cerulean, because cerulean means something she can tap and the mark is not a control. It has no tap target and the accessible label "From your calendar". The same order holds on PlanRow, ReviewItem and RouteStation (issue T48).
* **Anything that has changed today carries the Updated mark** on its row.
* **A letter day follows the school's name,** such as "To Westview Kindergarten · B day".

## **Scrolling**

Today is the Today type in §2, "Layout and scrolling", and this is its rule in full.

| Layer | How it moves |
| ----- | ----- |
| Header and Now, which in the evening holds tomorrow's pass and its reminders | Stay in place as one block. When the block is taller than the space above the capture bar, it scrolls up until its foot sits just above the capture bar, and then stays. |
| The canvas sheet | Scrolls up over the header and Now, as far as the top of the screen. |
| Capture bar and tab bar | Stay at the bottom of the screen. |
| Sheets | Rise over everything, with the scrim behind them, as before. |

* **Nothing on Now changes when the sheet covers it.** Her ticks, the countdown and a set reminder are exactly as she left them when she scrolls back.
* **The monogram is covered while the sheet is up.** Settings and the household switcher come back when she scrolls to the top. A covered monogram is expected, not a bug, and the presenter scrolls to the top before opening the switcher.
* **Now keeps its place in the reading order.** A screen reader reads the header, Now, then the sheet, whatever is covered. When a control in a covered header or Now receives keyboard focus, the page scrolls back to the top so the control can be seen.
* **The build uses sticky positioning, not a scroll container inside the page.** The header and Now form one sticky block, stacked below the sheet, with its top set to the smaller of zero and the space above the capture bar minus the block's own height. The sheet stays in normal flow. The offset is worked out from the rendered height, so the rule holds on every phone and when Now's height changes between moments.
* **The page itself scrolls,** so the browser's own scrolling, the address bar's behavior on a phone and the scroll position on returning from a sheet all work as they do on any web page.

## **The evening**

In the evening Today turns to the morning ahead, and the pass shows tomorrow's first departure. The evening is not a separate layout. It is the time of day when her next departure falls tomorrow, so the pass leads the board as it does all day.

* **The reminders are the pass's checklist.** "Reminders for" and the phase of tomorrow's first departure, such as "Reminders for tomorrow morning", heads the checklist on tomorrow's pass in Subtitle and holds only what goes with that departure. Its rows follow the Checklist row in the Now table. Tapping the remove button on an item that repeats asks in place on the row "Just tonight" or "Every night", which Heather chose on Oct. 28, 2026; during the day the same choice reads "Just today" or "Every day", and an item that happens once goes straight away. The first brings the item back the next time it is due, and the second keeps it off until she adds it again. Removing raises a Notice above the capture bar for about four seconds, such as "Lunchbox is off Mallory's list for tonight.", with Undo, and the notice stays until dismissed when VoiceOver is on (0i-i). "Add something else for" and the child's name opens a new row at the foot of that child's list, ReminderItem in its New state, with the caret, the placeholder "What else does Mallory need?" and the keyboard up; the link hides while she types, the board scrolls so the row sits above the keyboard, Return adds the row, and tapping elsewhere with the field empty drops it (0i-j). What she adds is hers for that departure, with no source link and no mark. When every reminder is ticked, the list folds to "Everything is ready for tomorrow morning.", naming the same phase as the heading.
* **For tomorrow lists the later departures.** It shows her later departures tomorrow that take a child, each with its own items grouped by child, so nothing she packs tonight appears twice. The leg on the pass never appears in it, and it is hidden when there is nothing to list. Tomorrow's full day stays in the game plan.
* **The pill reads "Tomorrow".** The action is "Remind me to leave home", or Remind me when a child leaves with someone else, and there is no Directions.
* **A departure nobody owns still gets the pass.** Its pill reads "Needs an owner" and it has no action. When the coach recommends a trip, the pass shows that trip, so the pass and the coach card describe the same morning, and when she agrees, the pill turns to "Tomorrow" and Remind me to leave home appears.
* **The pass and each For tomorrow row open the Leave sheet** for their leg, so she can change tomorrow's leaving times the night before.

This replaces version 0.25's rule that tomorrow's pass appeared only after the reminders folded and only for a leg she owned. Greg set the new rule on Oct. 27, 2026, after C-07 showed the morning's first departure buried in a list and the violin case, the orchestra folder and the lunches listed in two places.

## **Her first board**

Her first board after onboarding is Monday evening, Oct. 5. Setup has already given the coach both schools' start times on 0f, so the board opens with the coach's first recommendation rather than a question. The frames are on the post-review Figma page, and fixtures C-00 holds their words.

1. **On arrival (0i-a).** The pass shows the trip the coach recommends, "Take Alexis and Mallory to school" at 7:40am, with its timetable, the pill "Needs an owner" and no action, and "Reminders for tomorrow morning" holds Mallory's four items as its checklist, each with its remove button, then "Add something else for Mallory". The coach card, labeled "MVP Coach · for tomorrow", recommends taking both girls at 7:40am, with "Take both girls at 7:40am", the line "Updates your game plan" and Other options. For tomorrow is hidden, because both drop-offs are on the pass.
2. **The other options (0i-b).** The Leave sheet, headed "Leave home for Cedar Grove Elementary tomorrow", draws the run from home to both schools and back, with Plan B, "Make two trips", at its foot and no Plan C.
3. **After she agrees (0i-c).** The card keeps the recommendation in muted ink, shows "Agreed" and then only what comes next, with "Open the game plan" and Undo. On the pass the pill turns to "Tomorrow" and Remind me to leave home appears, and nothing else moves.
4. **Ready for the morning (0i-f).** With every reminder ticked, the list folds inside the pass to "Everything is ready for tomorrow morning.", and the pass stays as it was.
5. **After she picks Plan B (0i-g).** The card shows the plan she chose beside the check under the muted recommendation. The pass changes to the single-leg pass for the 7:40am trip with Alexis, with no checklist, and For tomorrow shows the 8:15am departure with Mallory's four reminders.
6. **Nothing captured (0i-d)** shows tomorrow's first school start on the pass, "Take Alexis to Cedar Grove Elementary" at 7:40am with "Needs an owner", and Mallory's start under For tomorrow.
7. **The next morning (0i-h).** Tuesday, Oct. 6 at 8:05am, between drop-offs: the trip pass's top shows the leg to Westview Kindergarten at 8:10am with "in 5 min", the timetable marks the stops behind her, and Directions is the action. Its moment ID is open.

**After she removes a reminder (0i-i)** the row is gone and the notice offers Undo, and **adding a reminder (0i-j)** shows the new row with the keyboard up. 0i-e, the board for editing the reminders, was retired on Oct. 28, 2026, because each reminder carries its own remove button.

The first board has no MVP Editorial card, because on Oct. 5 MVP has seen nothing that would give an article a reason. A parent who skipped the capture sees tomorrow's first school start on the pass and the coach card asking for one thing to start with, holding Take a photo, Attach a file and Talk or type, and no capture bar.

## **MVP Editorial on Today**

At most one article appears, below Later today, with the label line "MVP Editorial · 3 min read" in Meta, the title in Voice at semibold, and a single reason line beginning "Because", such as "Because Cedar Grove Elementary conferences are this week." It never carries the coach's dot or tint, and it has no "See all".

## **At wider screens**

Today keeps the phone layout in a centered column beside the sidebar at tablet and desktop widths. A wide Today is parked as F20, because the quiet layout is designed for a phone, and the full-day grid of earlier versions is retired.

### **Standing decisions**

1. **Today shows today.** Anything later in the week lives in the game plan. The only exception is the coach card.
2. **There is one coach card at a time,** and it holds the single decision the coach most needs from her. It sits directly under Now, so the decision fits on the first screen.
3. **The evening turns to the morning ahead.** Most of the work of getting children out the door happens the night before, so the evening leads with tomorrow's pass, whose checklist is the evening reminders.
4. **The dateline shows the phase icon, the day, the phase and the date,** such as "Monday morning, Oct. 12", on one line in Title. The date comes from the demo calendar, never the device clock.
5. **The coach card is marked by the coach's dot and tint.** It carries no other signal, and saffron has no reserved role.
6. **A reminder is always her choice.** The coach can suggest one, but nothing sets a reminder for her.
7. **Today changes one kind of thing: when she leaves.** The Leave sheet is the only edit on Today, and it changes start times only on her own items. Notes, owners and moving an item to another day stay in the game plan, so Today stays quiet and never turns into busy work. Tapping a time never switches tabs.
8. **A run is a line, and home is just a station.** Now shows one leg at a time and steps down the line as each stop comes due, except on a trip pass, whose timetable shows the whole trip while its top shows the next leg.
9. **The coach keeps backups ready.** Plan B and Plan C are worked out before anything goes wrong and wait one tap away, and at least one depends on nobody else, wherever one exists.
10. **Leave and Remind me are separate sheets.** Leave changes the plan and can raise a conflict, and Remind me changes nothing anyone else sees, so neither hides behind the other's label.
11. **Lines on Today are few and each has a job.** The rail inside the Leave sheet, the rule under the time on the pass, and the two dashed lines inside Now are the only lines. Today's surfaces keep no other rail, borders or divider lines. The pass is tinted rather than outlined, and it is a surface for the trip, not a card, so the coach card is still the only card the coach speaks in (issue T51).
12. **Now reads like a boarding pass when it holds a leg.** What, when and where sit together on the tinted pass, so there is one place to look first, and the facts and the list sit under it in a fixed order with small labels. A timed thing at home gets a pass with "At home" in place of the route (issue T51, standing decision 24).
13. **Each child is named once on Now.** Checklists are grouped under each child's name, without chips, and the pass carries no chip. The title always names the child in words. Chips stay on rows in lists of items, including a trip pass's timetable (issue T51).
14. **Now stays in place, and the day rises over it.** The rounded top of the canvas sheet says it is a layer, so it moves like one. Now keeps its place because it is the next thing she acts on, the sheet may cover the header because the day she is reading matters more than the dateline, and a tall Now pins its foot rather than its head so nothing in it is ever out of reach.
15. **A finished checklist folds away without a word from the coach.** The fold tells her the list is done, the count keeps it honest, and a tap brings every item back, so she never loses sight of what was packed (issue T38).
16. **The pass says what the trip is for.** The title repeats the item from Later today, so a parent glancing at Now never has to work out from a place name whether this is the carpool, ballet or a checkup, and no new copy is written for it (issue T43).
17. **The status pill shows urgency in its words as well as its color.** Plain, then the countdown in the warning ink from 15 minutes before, then "Time to leave", then "Running late", so the pill is useful before it is too late and never relies on color alone (issue T45).
18. **A change the coach makes from what she captured on Today is hers.** Today still changes only one kind of thing by direct edit, when she leaves. When she tells the coach something through the capture bar, the change comes from her words, so it joins the plan as hers with no Updated mark, the same as anything she says on the game plan, and anything taken from someone else's document waits for her to add it. The rule that Today never turns into busy work holds, because she edits nothing by hand (issue A12).
19. **The calendar mark is not a control.** It sits before the item's text in a muted ink, so it reads as where the item came from and never as something to tap (issue T48).
20. **A task carries what she needs to do it.** Its words say what and why, a Meta line says who, and one button does it, so a task is never a note she has to work out (issue T49).

21. **A trip with more than one child and more than one stop gets a trip pass.** The coach card that sets such a trip up is about the whole trip, and the tightest moment is often the second departure, so the pass shows every stop as a timetable and stays for the whole trip, while its top moves to the next leg. A trip with one stop keeps the single-leg pass.
22. **The coach card keeps the thread after she answers.** The recommendation stays in muted ink, and the card shows either "Agreed" or the plan she chose beside a check, then only what comes next. Muted text is always what the coach suggested, and full ink with a check is always what she chose. Greg dropped a draft that echoed her button as "You ✓ Take both girls at 7:40am", because "You" beside the check read wrongly and the echo repeated the plan.
23. **Retired in version 0.26.** Tomorrow's pass no longer waits for the reminders to fold or for the leg to be hers. Standing decision 24 replaces it.
24. **Today always has a pass at the top.** The pass shows her next departure, today or on a later day, so Today always answers when she next has to leave. In the evening it is tomorrow's first departure, with the reminders as its checklist, and a departure nobody owns yet still shows, marked "Needs an owner". A task never leads Now, and the line "Nothing else today." sits above a pass rather than replacing it. Greg set this on Oct. 27, 2026 (issue T60).

25. **Each checklist row carries its own remove button, and there is no edit mode.** "Edit this list" put a mode between her and a one-tap change, and a mode is busy work on a screen meant to be quiet. Each row sits in its own container so its button belongs plainly to it, the same rows serve Now, the evening reminders and For tomorrow so she learns them once, and the Undo notice makes a slip the night before school cost nothing. A task keeps its own button, such as Call, in place of the remove button, because a task is taken out from its page in the game plan. Greg set this on Oct. 28, 2026, and Heather's choice between tonight and every night rides on the same button.
26. **The timetable marks each row by its place.** Dots of two sizes asked her to learn what the sizes meant. An icon for home or school says where each row happens, the cerulean circle says where she is next, and the rail stops at each icon so the line never runs through a symbol. Greg set this on Oct. 28, 2026.
27. **The phase icon sits beside the dateline.** Heather's wording review asked for the separate phase title to go, and the icon was removed with it by mistake. It came back on Oct. 28, 2026 on the dateline's own line, so the header stays one line and the phase reads at a glance.

### **Open conditions**

1. **Following the family rather than the clock,** such as ending the morning when the last child is dropped off, is parked as F15.
2. **The places need addresses for Directions** in the real product. The prototype stages the maps app.
3. **A two-home household gives one zip code** on the welcome screen. Whether it needs one for each home is open (issue O15).
4. **Whether parents find the Leave sheet without a separate Change link** goes to user testing (fixtures Appendix B item 53).
5. **The notification title names two stops** for a run with more, which needs checking on a lock screen (fixtures Appendix B item 54).
6. **The real product works out backups,** and the prototype carries only the ones the fixtures write (fixtures Appendix B item 56).
7. **Legs between places need the places' addresses** in the real product, because the zip code covers only legs from home (issue D2).
8. **Whether the sheet's edge reads clearly over Now** needs checking on a phone, because canvas and paper are close in tone and Today allows no new line (fixtures Appendix B item 58).
9. **Where an anytime task's reminder and Ask for help live** now that a task never leads Now. The recommendation is the task's item page, which has no frame yet (issue T61, fixtures Appendix B item 95).
10. **Three new lines need Heather's wording review:** "Needs an owner" as a pill, "At home" in place of the route, and "Everything is packed for 6:55am" as the evening fold line while later departures are still open (issue T62).
9. **Whether parents lose track of the leaving time** once the sheet covers Now goes to user testing. A compact strip with the route and time is parked as F29.
10. **None.** Greg accepted the folded lines on October 17, 2026 (issue T41).
11. **None.** Greg accepted the reminder sheet's rule for choices that have passed on October 17, 2026 (issue T42, fixtures Appendix B item 72).

12. **None.** Removing a repeating reminder asks "Just tonight" or "Every night", and she adds her own item from "Add something else for" the child, decided on Oct. 28, 2026 (fixtures Appendix B item 85, issue T59).
13. **Live arrival times are a product feature (F36).** The prototype keeps the fixed travel times, and the pill counts down against the demo clock.
14. **The first board's Tuesday morning ignores orchestra** (fixtures Appendix B item 87). Greg to decide whether orchestra starts on Tuesday, Oct. 13.
15. **0i-h needs a moment ID,** because Oct. 6 falls between C-00 and the demo week (fixtures Appendix B item 88).
16. **The library still needs CoachCard's two after-answer states and NowBlock's trip variant,** and the post-review frames use detached copies until then (fixtures Appendix B item 89).
17. **Lines from Oct. 28, 2026 need Heather's review:** "Reminders for tomorrow morning", "Everything is ready for tomorrow morning.", "Add something else for" and the child's name, the placeholder "What else does Mallory need?", the two notices, and "Just today" and "Every day" for removals during the day (fixtures Appendix B item 109, issue T69).
18. **StopMarker and ReminderItem are built in the library** and wait for its publish, after which the frames swap to them. The school icon's Material Symbols or Lucide name is not confirmed (issue C55).

# 6. Coach

The Coach tab is where the parent talks to the coach. Captures land here with the coach's read-back, decisions come back as options, and her parenting questions get answers that fit her family. What makes the coach useful is that it already knows the family. When Charlotte asks about picture day morning, the answer is about Mallory, who is six, at Westview Kindergarten, with a green dress already chosen, leaving at 7:40.

The wireframes are 01a (the newsletter read-back in C-01), 04 (the voice note and the three options in C-01), 04b (the capture bar) and 08 (the question in C-08). The C-08b answer has no wireframe yet (issue W5). The full messages behind "Other options" in C-06 and C-06b have no wireframe yet (issue W4).

## **Layout**

The conversation runs newest at the bottom, with the capture bar below it: the placeholder "Type, talk or add an image", then attach, camera and microphone. While the field holds typed text, an arrow labeled "Give this to the coach" joins them, and the multi-line behavior in §2 applies. There is no Send on the bar, because Send means sending something to another person. The parent's messages and everything the coach says in the conversation are set in Inter, as Body. Each day of the conversation has a heading, "Today" for the current day and the day of the week, such as "Monday", for earlier days.

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
| Recommended | boolean | True on exactly one option, shown with the tag "MVP Coach recommends". |
| Result | reference | The plan state and the coach's follow-up when she chooses it. |

## **Actions**

| Action | Example | What it does |
| ----- | ----- | ----- |
| Add to the game plan | Newsletter read-back | Moves the suggested items into the plan. |
| Show the original | "Show the newsletter", "Show the email" | Opens the captured document. |
| Open a card | "Open the Westview Kindergarten card" | Opens the school card the read-back changed. |
| Ask a person | "Ask Edward", "Ask Min-jung" | Opens a request drafted in her voice (§9). |
| Note to an organization | "Note to Westview Kindergarten" | Opens a drafted message handed to another app (§9). |
| Ask my people | C-05 coach card | Opens a new group post drafted in her voice (§10). |
| Remind me | "Remind me Monday" | Adds a reminder to the plan for that day. |
| Read | Attached article | Opens the MVP Editorial article (§12). |
| Call a practice | "Call Northside Pediatrics" in C-08b | Opens her phone app with the practice's number. Staged in the prototype, and it leaves no task. |
| Add to an appointment | "Add the cough to Friday's checkup" in C-08b | Adds her question as a note on the plan item, with no Updated mark because the note is hers. |
| Add to a day | "Add to Thursday" | Ends any answer that produces something for the plan, and adds it to that day as Suggested on the review card, or as hers when she said it. |

## **Behavior notes**

* **Read-backs say what the coach took and what it left out.** The newsletter read-back keeps the two things that apply to Alexis and says the fifth-grade trip and the rest of the newsletter are not for her. The source link and the buttons sit beneath it.
* **The coach handles the rest of the week without comment and names the one day that needs her.** After Charlotte's voice note it matches what she said to the messages it already has and spends its words on Thursday.
* **The full message behind a coach card** quotes what changed, such as Edward's answer in C-06, and sets out every option the coach considered, with the recommended one first. She finds it in the conversation on the Coach tab. The link "See the coach's reasons", which used to open it from the Leave sheet and the item page, came off in the wording review of Oct. 27, 2026. On Today, the same options appear as the recommendation on the card and Plan B and Plan C in the sheet.
* **She may choose against the recommendation.** Choosing another option is normal and leads to a plan as complete as the recommended one. In C-06 Charlotte chooses Min-jung over the 12:15 class because she knows something the coach does not.
* **The coach is plain about what is not yet true.** After she chooses, it lays out the day and says that none of it holds until the person asked has answered.
* **Every answer shows what it was based on,** under the heading "Based on", listing the family details used, such as "Mallory, 6, kindergarten at Westview Kindergarten · Picture day on Friday".
* **Support questions get support.** When a question is about how she is holding up, the first sentence acknowledges it plainly, without sympathy phrases, before the answer gets practical.
* **The coach knows its limits.** It does not plan money, find or recommend service providers or sitters, buy anything, or advise on custody, legal or medical questions. When a question needs a doctor, a therapist or a teacher, it says so and names the person from her circle where she has one. In C-08b it names Dr. Ortiz for Mallory's cough, gives Northside Pediatrics's number, offers to add the question to Friday's checkup, and attaches no article, because a medical question gets a person rather than reading. When names or local knowledge are needed, it points her to her people, as in C-05.
* **The coach never reads groups or chats.** It knows what she has entered about each person, such as which class their children are in.

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

Inside the app, she reaches the camera, a file or her voice from the capture bar on Today, the game plan or the Coach tab, or from "Add to this card" on a school card.

## **What the coach does with a capture**

| Kind | Example | What the coach does |
| ----- | ----- | ----- |
| A one-off event | The Cedar Grove Elementary newsletter | Keeps only what applies to her children, using the grades it knows, and leaves out the rest. |
| A recurring rule | Westview Kindergarten's rotation calendar | Turns the rule into standing items on the children's checklists, such as "Library book" on library days and "Sneakers" on motor skills days. |
| Reference | Westview Kindergarten's family contact list, or the pickup change email | Files it on the school card and uses it later, such as addressing a note to the right office (§11). |

## **Capture record**

| Field | Type | Description |
| ----- | ----- | ----- |
| Entry point | enum | Share menu, Forwarding, Camera, Voice, Typed, Card add, or Calendar for an event read from her calendar. |
| From | string | The sender or document as named in the source link, such as "the Cedar Grove Elementary newsletter". |
| Received | demo time | When it reached MVP. |
| Original | reference | The prepared document, image or transcript shown by "Show the newsletter". |
| Kinds | set | One-off event, Recurring rule, Reference. A capture can hold more than one. |
| Read-back | message reference | The coach's read-back (§6). |
| Produces | references | The plan items, rules and card facts it created or changed. |

## **Behavior notes**

* **Every capture gets a short read-back** that says what the coach took, and the coach asks at most one question when something is unclear.
* **Nothing enters the plan unseen.** New items the coach pulls from a capture wait as Suggested on the game plan's review card, and a change to an item already in the plan shows the Updated mark. What she says about her own week joins as hers (§4).
* **Every captured item keeps a source link,** such as "From the Cedar Grove Elementary newsletter · Sunday", so she can check the original. A fact she told the coach herself shows "From you". The one thing a parent cannot forgive is a date the coach made up.
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
| Sorting | The coach reads each event and works out whom it concerns. The children's activities and appointments join the plan under the child's name chip. Her own appointments join it as hers, because they decide when she can drive. A school event she would choose to attend waits on the review card. Events with no time, such as birthdays and holidays, stay on the calendar. When the coach cannot tell whom an event concerns, it asks, still one question at a time. |
| Adding | The coach adds what she has already committed to, under F35 (§4): her own events that take a child somewhere or decide when she can drive. Invitations she hasn't accepted, events with no time and events for other people stay out. The read-back says what is now in the plan wherever she is, such as "Mallory's checkup on Friday at 3:30 is in your plan, from your Google Calendar.", and several at once read "Three things from your Google Calendar are in your plan this week." with "Show what's new", a sheet listing them, each with "Take this out". At setup the coach's introduction on 0j names the events it added. |
| Consent | She agrees once, with the ticked line "Add events from my Google Calendar to my plan" on 0j. If she unticks it, or turns the switch off in Settings (§13), calendar events wait on the review card as suggestions instead. |
| Taking out | Each added item's page offers "Take this out of the plan". An event she takes out is not added again unless it changes on her calendar. |
| Owner and status | An event the coach adds has "You" as owner and no status, because she put it on her calendar herself. |
| Trips | The coach adds the trips around an event that takes a child somewhere, with her as owner when she is free (§4). |
| Marking | Each calendar item carries the calendar mark on Today, in the game plan and on child pages, and the source link "From your Google Calendar", or the calendar she connected. |
| Keeping in step | When she moves or deletes an event on her calendar, the plan follows. A change she makes herself is not marked Updated. A new event that runs into the plan is added with the Conflict mark on both items, and the coach card offers a way through. |
| Editing | A calendar item is moved or deleted in her calendar. In MVP she can add a note or ask someone to take it. Its page shows "Change this in Google Calendar." in place of "Move to another date or time", and so does dragging it. |
| Moves from the coach card | A move she accepts from the coach card changes the plan and nothing on her calendar. |
| Duplicates | When a capture and a calendar event describe the same thing, the coach keeps one item with both source links. |
| Privacy | Nobody else sees her calendar. People see only what she sends them. |

In the prototype, the connect screen and the permission screen are staged, Charlotte's calendar events are written into the seed, and the checkup in C-06b arrives as a scripted step that adds it to Friday. The real product reads Google Calendar and Outlook through their own accounts, and reads Apple Calendar through the native app on an iPhone.

### **Standing decisions**

1. **There are four entry points and one connection.** Each entry point meets the parent where a kind of message already is, and her calendar is connected once rather than used each time. Connecting her email account directly is a later feature (F4), because reading a whole inbox asks for much more trust than sharing one email at a time.
2. **Nothing reaches the coach unless she sends it or connects it.** MVP never reads her messaging apps or her inbox. Her calendar is the one source she connects, and she can disconnect it in Settings.
3. **MVP reads her calendar and never writes to it.** Her calendar stays hers. Writing MVP's own plan items back to it is parked as F18.
4. **Source links are required** on every captured item, every calendar item and every school card fact.
5. **One capture is enough for onboarding.** Everything else is taught when it becomes useful.
6. **The coach adds what she has already committed to, and nothing else from her calendar.** v0.17 kept every calendar event on the review card until she added it, which answered clutter from invitations, birthdays and other people's events (issue G30). Approving events she had already put on her own calendar turned a busy week into a queue, so v0.20 adds those and keeps the clutter out, which partly reverses G30. She agrees on 0j and can turn it off (issue G42, F35).
7. **Changes to her children's school day are added, and school events she would choose are offered.** An early dismissal happens whether she plans for it or not, and a fair is a choice, so the line between adding and asking is whether the thing happens either way.

### **Open conditions**

1. **The share menu needs a platform decision for the real product.** A web app cannot register as a share target on iOS. The real product needs a native share extension or an installed web app on platforms that allow it (issue A1).
2. **How the coach decides that a captured fact is reference for a card rather than an event for the game plan** needs a rule before launch (§11, issue L2).
3. **Apple Calendar needs the native app.** A web app cannot read an iPhone's calendar, so Apple Calendar is staged in the prototype, as the share menu is (issue A7).
4. **How quickly the plan follows her calendar** needs a number before launch, along with what happens when she deletes an event that someone has already been asked about (issue A8).
5. **Edward's own calendar is out of scope.** Edward has MVP and could connect his own calendar. The prototype does not show it (F19).

# 8. Game plan

The game plan is where the parent works out her week, and it is hers. The coach suggests, and she decides here. It shows this week and next, with every item in them, including routine ones such as the daily school runs, and it is the only place she moves an item to another day, adds a note or asks someone to take it.

The boards are on Design - lombardi, named by moment, screen and state: "C-04 · Game plan · When she opens it" and "C-04 · Game plan · When she closes it", "C-06b · Game plan · Friday, with the checkup in the plan", which replaces "C-06b · Game plan · The checkup waits for review" and "C-06b · Game plan · After she adds the checkup", "C-06b · Item page · Friday checkup", and five wireframe-only boards for typing on the game plan, the read-back strip, a calendar event waiting for review, the trips the coach suggests and a suggested trip's page. `docs/screen-map.md` gives each one's frame ID. Wireframes 06 and 06b are superseded.

## **Layout**

The game plan is a tab list (§2). From the top:

| Block | Shows |
| ----- | ----- |
| Title bar and large title | "Game plan", with the monogram. |
| Week strip | The first letter of each day, the day she is reading marked, and a dot under any day holding a decision: an item that needs an owner, a "can't" or a conflict. An unopened Updated mark is information and puts no dot there. It sticks under the title bar, and reads "Next week" once she scrolls into next week. Tapping a day opens it and scrolls to it. |
| Review card | Only when something is hers to choose (below). |
| Past days | Days already past this week, folded into one line, such as "Monday and Tuesday · 11 done", which opens them. Once everything today is done, today folds the same way, such as "Today · 6 done". |
| The days | Each remaining day of this week under its heading. Today and tomorrow open expanded and the other days collapsed. |
| Next week | One collapsed heading after Sunday, with its own sentence when anything there is waiting, and next week's days inside it. |
| Capture bar | Docked above the tab bar, as on Today, with the read-back strip rising above it after she gives the coach something. |

## **Day**

| State | Shows |
| ----- | ----- |
| Collapsed | The day's name, the number of items, such as "6 items" or "1 item", and the dot when something on it needs her. No fill, with the same side margins as an open day so every heading lines up. |
| Open | The heading and every item in time order, inside a container filled with `bg/subtle`, at `radius/md`, with 12 px inside margins at the sides and 8 px at the foot. The container is not a card. |
| Empty | "Nothing is planned." In a thin week, as after onboarding, an empty day carries the quiet line from fixtures section 4 instead, inviting her to tell the coach about it. |

Days sit 8 px apart. Tapping a day's heading opens a collapsed day or closes an open one, and tapping the folded line of past days opens them. The heading's accessible label names the day, its count and its state, such as "Friday, 8 items, collapsed". What she opens or closes stays as she left it until she leaves the game plan, and the game plan always opens the same way. Day headings name the day only, with no "this", "next" or date: "Today", "Tomorrow", then "Wednesday" and so on to "Sunday", and "Monday" to "Sunday" under the Next week heading. The list's order and that heading already say which week each day is in, so this is the one list exempt from the rule that a day names its week. Everything that names a day outside a heading, such as the review card's "For this Friday", the read-back strip and the item page, keeps "this" or "next".

The library builds the day as DayGroup, with Collapsed and Open variants and a tap that switches them. The Open variant wraps the day's rows in the container described above, and the Collapsed variant shows the heading alone. Because the tap lives in the component, every day on every board opens and closes once it is placed (issue G39).

## **Row**

Each row reads like a row in Later today on Today (§5): the time the thing starts in a column in Meta, the chips, the item, and at the right the owner or the person's answer, with the marks and her note beneath. An anytime task reads "Anytime" in the time column.

| Field | From | Rule |
| ----- | ----- | ----- |
| Weight | Kind | Quiet for a routine item, full for an item that happens this week only. A routine item with a status, a mark or a note is drawn full until it clears. |
| Owner or answer | Owner, Status | "You", "Needs an owner" with its mark, or the person's initial and the icon for their answer (§4). |
| Marks | Marks | Updated, and "Conflict:" with the other item, and its day when it is on another day. Up to two. |
| Note | Note | Under the item, at full weight. |
| Calendar mark | From her calendar | Before the item's text, in `ink/muted`, with no tap target (§5, issue T48). |

Runs and leaving times stay on Today, because drawing them on every day would turn the game plan into seven Todays.

## **Review card**

The review card holds what is hers to choose: proposals from other people, such as the second tutoring session Ms. Reyes asked for, and school events a parent chooses to attend, such as Westview Kindergarten's harvest fair in C-09. What she has already committed to elsewhere is added by the coach and never waits here (§4, F35), so in most weeks the card holds one thing or nothing. When she has turned off a kind in Settings (§13), that kind waits here as before.

| Part | Rule |
| ----- | ----- |
| Card | Filled with `semantic/coach-bg` at `radius/lg`. Not shown when nothing is waiting. |
| Heading | A full sentence with the count written as a word from one to nine, such as "One update is waiting for your review." Nothing sits beneath it, because the line that used to sit there read as a disclaimer (issue G41). |
| Day | Each day with something waiting, on `bg/card` with an outline in the coach's amber, labeled in the Label style with "For" and the day, such as "For tomorrow" or "For this Friday". |
| Item | The chips, the calendar mark when it came from her calendar, the item and its start time, any mark such as "Conflict: tutoring", and two choices: "No thanks" and "Add to the game plan". Tapping the item opens its page. |

* **Add to the game plan** moves the item into its day as hers, and the item leaves the card.
* **Add them all** sits at the foot of the card when it holds two or more items, and adds each as Add to the game plan would.
* **No thanks** removes it. A calendar event she turns down is not offered again unless it changes on her calendar.
* **The card counts this week.** Next week's heading carries its own sentence in the same form when anything there is waiting. On Sunday, once this week is over, the card counts next week.
* **Items already in the plan stay on their rows** and never gather on the review card, so the card keeps one meaning. A "can't" and a conflict that needs a choice come to the coach card on Today one at a time, an unopened Updated mark stays on its row with no dot, and a day holding a decision opens expanded with the week strip's dot (issues G34 and G42).

The library builds the card as ReviewCard, ReviewDay and ReviewItem in `mvp-design-library`. ReviewCard has no Line property and gains an Add them all footer.

## **Item page**

Tapping an item opens its page, which is a page with Back (§2), not a sheet, because asking someone, a draft and the backups all lead to another screen, and a sheet never opens one.

| Part | Shows |
| ----- | ----- |
| Header | The chips and the item, then the day, start time and place, such as "Friday · 3:30pm · Northside Pediatrics", then the marks. |
| Suggested | For a suggested item: "Suggested", then "Add to the game plan" and "No thanks". |
| Owner | The owner, with the link "Ask for help", which opens a page of her people who can receive a request, circle first, with Next, and then a request drafted in her voice (§9). Dr. Ortiz and Karen Moss are not listed, because MVP holds only their practices' numbers. |
| Answer | The person's answer and any note, when there is one. |
| Note | Her note, or the placeholder "Add a note", editable in place. |
| Source | The source link. For a suggested trip: "Suggested for" and its event. For a trip the coach added: "Added for" and its event, such as "Added for Ada's birthday party, from your Google Calendar". |
| Run | When the item belongs to a run on Today, one line naming the run. |
| Backup plans | When the coach has backups for the item: the coach's dot and tint, the recommendation with its button, and "Plan B ·" and "Plan C ·" with theirs. The same seed data as the Leave sheet (§5). |
| Move | "Move to another date or time", which opens a day and time picker in place, with Save. A calendar item shows "Change this in Google Calendar." instead. |
| Take out | For an item the coach added: "Take this out of the plan" at the foot, which removes it without a mark. Its source names where it came from, such as "From your Google Calendar" or "Added for Ada's birthday party, from your Google Calendar". |

## **Read-back strip**

When she gives the coach something through the capture bar on the game plan, the read-back rises above the bar as a strip, with the coach's dot and tint and a label in the Label style naming the day it concerns, such as "MVP Coach · for Saturday".

* **It says in a line what the coach took and where it put it,** with the coach's suggestion when something is unresolved, one button to accept it, with its line beneath, and "Other options", which opens the item's page at "Backup plans".
* **It goes when she scrolls or taps elsewhere.** The item stays where the coach put it.
* **Where things land.** Something she says about her own week joins the plan as hers, and the coach adds the trips around it, with her as owner when she is free. Something with no day becomes an Anytime task. A proposal from someone else goes to the review card. When nothing is unresolved, the strip says what is in the plan and has no button, as with the pumpkin in C-09.
* **The game plan never shows the coach card.** The strip is the one place the coach speaks here, because it answers something she has just given it.

## **Working the plan directly**

| Action | How | What happens |
| ----- | ----- | ----- |
| Add something new | The capture bar | The read-back strip, as above. |
| Add a suggestion | "Add to the game plan" on the review card or the item page | The item joins its day, and she sees where it landed (below). |
| Move an item | "Move to another date or time" on its page, or a drag at wider sizes and with a long press on a phone | The item moves, including into next week. A calendar item does not move, and the page or the drag shows "Change this in Google Calendar." |
| Add a note | "Add a note" on its page | The note shows under the item. |
| Ask someone to take it | "Ask for help" on its page | Opens a request drafted in her voice (§9). Once sent, the item shows the person's initial and an hourglass. |
| Choose a backup | A button under "Backup plans" | The same as choosing it on the Leave sheet (§5). |
| Tick off a task | Its checkbox | The task shows as done. |
| Change the time of an item someone has answered | "Move to another date or time" on its page | The answer stays until she sends the change. Sending it returns the item to Asked, and until she sends it the coach card on Today says the person has not seen the new time. |

At wider sizes the week shows seven columns under the strip, with next week beneath it, so moving the second tutoring session to the following Tuesday is a straight drag down its own column.

## **Behavior notes**

* **She sees where an item lands.** After "Add to the game plan", the item leaves the review card, its day opens if it was collapsed, the agenda scrolls to it, and the row takes the coach's tint for about two seconds before fading back. After she moves an item and returns to the agenda, the same happens on its new day, opening the Next week heading when the day is there. The highlight carries no Updated mark and leaves nothing behind, because a change she makes herself is never flagged back to her. With reduced motion the tint appears without fading and clears when she scrolls or taps, and a screen reader hears where the item went, such as "Added to Tuesday." (issue G40).
* **Opening an item clears its Updated mark.**
* **Every item shows the time it starts,** such as ballet at 4:15pm and Mallory's school run at 8:30am, never the leaving time.
* **Children appear as name chips,** following §4, at every size.
* **A gap shows as an item.** When the coach finds a gap, such as nobody taking Alexis on Tuesday mornings, it shows as an item that needs an owner rather than another question.
* **The coach helps build the week.** There is no separate setup mode. Building the week is many captures, each coming back as a suggestion with alternatives.
* **A new conflict reaches her as a notice.** The mark appears on both items as soon as the coach finds the conflict. When she is in the app, a notice rises above the tab bar for about four seconds, with one line and a link that names where it goes, such as "Violin and therapy overlap every Monday from next week." and "Show me next Monday, Oct. 12", once per conflict, and it stays until she dismisses it when VoiceOver is on. A notice asks for no decision, so it is not a sheet. A conflict today or tomorrow goes to the coach card instead, and a conflict more than a day away sends no phone notification (issue G43). The library builds it as Notice.
* **In the prototype,** every board is drawn from the fixtures' week table as it stands at each moment (§15), and the review card's contents at each moment come from the seed.

### **Standing decisions**

1. **The game plan holds every item, this week and next,** including routine ones, because the parent needs to see the shape of the week to change it. The game plan reaches two weeks, and the month view stays F1.
2. **An agenda under a sticking week strip, not a grid.** A seven-column grid is too dense at 440 px, and paging one day at a time hides the shape of the week, which is what she opens the game plan to see (issue G11).
3. **The review card is where her choices wait.** Only proposals from other people and events she would choose to attend wait there, so it is small and rare, and she never has to scroll to find what is hers to decide (issues G33 and G42). It replaces "This week's changes", the filter line and the Needs you card.
4. **Days open and close.** Today and tomorrow open, so the game plan never runs to several screens of routine items, and the dot keeps a closed day from hiding anything (issue G31).
5. **Moving is a choice on the item's page,** because a drag across a week of scrolling is hard on a phone and impossible with a screen reader. Dragging stays as a shortcut (issue G16).
6. **No coach card on the game plan.** The read-back strip is the one exception (issue G17).
7. **Direct edits are hers.** A change she makes herself is never flagged back to her.
8. **Headings that tell her something are full sentences,** with numbers from one to nine written as words, and links say what they do, such as "Move to another date or time" and "Ask for help". Back, Close, Send, Save and Undo stay, because they are the platform's own words (issues G35, G37).
9. **Dinner appears only when the schedule forces it to move, or as an event in the week,** such as Wednesday's dinner with Claire. There is no dinner row and no shopping list in the prototype (F16).

### **Open conditions**

1. **None.** C-09 shows her planning next week and capture on the game plan (issue G21).
2. **None.** Items already in the plan stay on their rows (issues G34 and G42).
3. **None.** A recurring conflict is marked as soon as the coach finds it (issue G26, §4).
4. **None.** DayGroup, with the open-day container, is built in `mvp-design-library` in this version (issues G32, G36 and G39), and the boards use it once Greg publishes the library.
5. **Whether a parent notices a four-second notice** goes to user testing (fixtures Appendix B item 80).
6. **Heather should see the rule for what the coach adds** before the investor demo, because it changes a promise on screen (fixtures Appendix B item 78).

# 9. Requests

Part of the plan often belongs to someone else. A request is that part, sent to a person and asking them to take it on. The coach drafts it, the parent changes whatever she wants, and she sends it herself.

The wireframes are 05 (C-02 and C-06), 05b (the handoff to Edward), 05c (answering), 1e (the reply handed to WhatsApp) and 02b (the text to Ms. Reyes and her web page). Edward's library run card with a note (C-04b), Edward changing his answer and Min-jung's card (C-06), and Ms. Reyes's text message have no wireframes yet (issue W5).

## **How a request reaches someone**

| Recipient | How it arrives | How the answer comes back |
| ----- | ----- | ----- |
| Someone who has MVP, such as Edward or Min-jung | As a request card in their own MVP, with a notification on their phone. They see only the requests she sends them and nothing else of her plan. | They answer each item with "Yes, I can" or "No, I can't", and each answer appears as a status on her plan. |
| Someone without MVP, such as Ms. Reyes | As a text message to the mobile number she entered, reading "Charlotte sent you a request through MVP. You can answer here:" and a link to a single web page with the request and the same buttons on each item. No account is needed. | The same two buttons update her plan in the same way. |
| A group or organization outside MVP, such as a parents' WhatsApp group or a school office | MVP hands the drafted text to the app she chooses, and she sends it from there. | Nothing comes back. Sending it becomes a task on her own list, which she ticks off herself. |

Charlotte's week uses all three: Edward and Min-jung through their own MVP, Ms. Reyes through the web page in C-06b, and the parents' WhatsApp group and the Westview Kindergarten office through another app.

## **Request**

| Field | Type | Description |
| ----- | ----- | ----- |
| To | person or organization | Shown as "To Edward", or for an organization its name and the contact used, such as "To Westview Kindergarten, pickup changes · pickups@westviewk.org". |
| Items | references | The plan items it covers. Each item is answered on its own. |
| Answers | array | One per item: the answer, an optional note, and when it was given. An answer can be changed. |
| Text | string | Written as the parent, in the first person and her own plain voice. Editable before sending. |
| Channel | enum | In MVP, Text with link, or Handoff. Set by the recipient, not chosen by the parent. |
| App | string | Handoff only. The app it goes to, such as WhatsApp or Mail. |
| Sent | demo time | When she sent it. Shown to the recipient in Meta under the heading, as "Sent 6:40am". |
| Heading | string | A sentence saying what she is asking, in the words a parent would use, such as "Charlotte is asking you to pick Alexis and Mallory up this Thursday." Written in the fixtures for each request. |
| State | enum | Draft, Sent, Accepted, Declined. Drives the item statuses in §4. |

## **The draft screen**

The draft shows the address line, the text in an editable field, a preview of each item with the recipient's two buttons under "Edward answers each item with" (in-MVP and text-link requests only), and the button: Send, or "Send from WhatsApp", "Send from Mail" or the app that applies.

## **The recipient's view**

Edward's own MVP shows his monogram, the dateline, such as "Monday morning, Oct. 12". His Today holds only the items he owns and the requests Charlotte sends him, with the request card at the top. The web page for someone without MVP shows the same heading, text and buttons, with "You don't need MVP to answer." under the buttons, and no tabs.

The fixtures write every recipient screen in Charlotte's week, and View as (§15) shows each of them.

| Moment | Recipient | Screens |
| ----- | ----- | ----- |
| C-02 | Edward | The request card, and the card after he answers both items |
| C-04b | Edward | The library run card, his "Yes, I can" with the note "We'll get lunch after and be home by 1:00pm.", and the item in her game plan with the note and the Updated mark |
| C-06 | Edward | Changing his answer on Mallory's pickup, with his note and the button "Send answer" |
| C-06 | Min-jung | The request card, and the card after she answers |
| C-06b | Ms. Reyes | The text message with its link, the web page, and the page after she answers |

The recipient's other tabs are not part of the demo.

## **Behavior notes**

* **Each item is answered on its own.** Edward can take one pickup and decline the other. The card lists each item with its own "Yes, I can" and "No, I can't", and a note field reading "Add a note for Charlotte".
* **A note never edits her plan.** A note with "No, I can't" reopens the item, and the coach card turns it into a recommendation, as in C-06. A note with "Yes, I can" shows under the item with the Updated mark until she opens it.
* **Answers can be changed.** After answering, each item shows the answer and a Change link, under the line "Charlotte can see your answers. If anything changes, change your answer here." A note the recipient added shows on their own card as "Your note:" and the note, which Greg confirmed on October 17, 2026 (issue S6). Change opens the item's buttons again with the note field and Send answer, on a card in MVP and on the web page alike.
* **She hears about every answer.** Each answer and each changed answer arrives as a notification, such as "Edward: yes to both pickups on Thursday." or "Edward changed his answer for Thursday.", and as a status on the item.
* **No read receipts.** Nobody can see whether the other person has opened a request.
* **Sending marks the items.** Once sent, the items show the person's initial and an hourglass. The answer changes the icon to a thumbs up or a thumbs down, and the accessible label reads "Asked Edward", "Edward: yes" or "Edward can't".
* **An accepted request can reopen.** In C-06 Edward answers again that he can't collect Mallory, which reopens her pickup and brings back the coach card while Alexis's keeps Edward's thumbs up.
* **A decline always leads somewhere.** The coach card returns with a recommendation, and "Other options" opens the Leave sheet with Plan B and Plan C. When Edward can't, it recommends the 12:15 yoga class. When Min-jung can't, it recommends the same move, and Other options holds the one Charlotte has not tried.
* **Every handoff leaves a task.** MVP cannot see whether a message handed to another app was sent, so each handoff leaves a task on her list until she ticks it off, such as "Send Westview Kindergarten the pickup note" in C-06 and "Reply to the parents' group" in C-03. The plan itself follows her choice in MVP, not the sending. Two handoffs leave no task, because neither is a message about the plan: an invitation to MVP (§10) and a call (§6, §10).
* **The address for an organization comes from its card.** The Westview Kindergarten note goes to the pickup changes contact on the Westview Kindergarten card, which the Westview Kindergarten email updated in C-05b.
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

Parents take their questions and their logistics to two different groups of people, and MVP keeps them apart because they do different jobs. Her circle is who she hands parts of the plan to and who she talks with about private things, such as how to tell Alexis that her therapist is leaving. Her people know the local answers, such as which therapist has openings. Both live on the Team tab, together with the conversations she has with each: chats with her circle and posts in her groups.

The wireframes are 10 (the lists) and 07 (C-05, asking her people). The chats, the person pages, the group page, both composers, adding someone and creating a group have no wireframes yet (issue W5). Until they do, they are built from fixtures section 3, "The Team tab", with the components already built.

## **Sections**

"New message" sits at the top of the tab, and the sections follow in this order.

| Section | Holds | Each row shows |
| ----- | ----- | ----- |
| Chats | Her chats with people in her circle, ordered by the latest message, newest first | The other people's names, such as "Edward and Claire", the latest message cut to one line with its author's name unless it is hers, its time today or its day, and "1 new" when unread. Before her first chat the section shows the line from fixtures section 4. |
| Groups | Groups she creates inside MVP, ordered by the latest post or reply | The group's name, the number of members, the latest post or reply with its author, and "1 new" when unread. |
| Team | Everyone she has added, in one list: first the people in her circle, each carrying a Circle tag, then her people, untagged | Outlined initial, name, a line written to her, such as "Your husband" or "Sophie and Hana's mom · Monday carpool", "On MVP" when they have it, and the Circle tag, a small outlined label in Meta with the accessible label "In your circle". |

"Add someone" and "New group" sit below the lists. When anything is unread, the Team tab carries a dot, with the accessible label "Team, 1 new" or the number that applies.

## **Person**

| Field | Type | Description |
| ----- | ----- | ----- |
| Name | string | As she entered it. |
| Group | enum | Circle or People. |
| Line | string | The line shown under the name, written to her. |
| Has MVP | boolean | Decides whether they can be in a chat or a group, and how a request reaches them (§9). |
| Contact | object | A mobile number, or for a professional the practice's name and number, such as "Northside Pediatrics · 555-0160". |
| What she has told the coach | strings | Such as which class their children are in. The coach uses this, and only this. |

## **Person page**

Tapping a person opens their page, which shows Back at the top left.

| Part | What it shows |
| ----- | ----- |
| Header | Their name. |
| Line | Their line, then "On MVP" or "Not on MVP". |
| Actions | Message, for circle members on MVP. Call, for anyone with a number. Text, for anyone not on MVP who has a mobile number. |
| Contact | "Mobile" and the number, or the practice's name and number. |
| This week | Each item this week that they own or have been asked about, laid out as lanes like Later today: the day abbreviated to three letters, such as "Thu", in the time column, then the chip, the item and the answer icon without the initial, and every request sent to them this week, even after its item has left the plan. When there is none, "Nothing in this week's plan with Claire." with their name. |
| Chats or Groups | The chats she shares with an circle member, or the groups a person among her people belongs to. |

## **Chat**

| Field | Type | Description |
| ----- | ----- | ----- |
| Members | references | One or more people from her circle, each of whom has MVP. The parent is always a member. |
| Name | derived | The other members' names, such as "Claire" or "Edward and Claire". It cannot be edited. |
| Messages | array | Each with an author, text and a fixed demo time, listed oldest first. Her own are labeled "You". |
| Unread | integer | Messages that arrived since she last opened it. Shown as "1 new". |

A chat opens with Back and its name, the line "Only you, Edward and Claire see this chat. The coach doesn't read it." with the members named, the messages, and a Message field with a Send button.

## **Group and post**

| Field | Type | Description |
| ----- | ----- | ----- |
| Group name | string | Such as "Cedar Grove parents". |
| Members | references | Members chosen from her people, each of whom has MVP, and the parent. Shown on the group page as "8 members · See members". |
| Created | demo time | Shown as "You created this group last week." until the group has posts, and at the end of the list after that. |
| Post author | reference | Shown as "You" on her own posts. |
| Post text | string | Text only. |
| Posted | demo time | Shown as a fixed time, such as "12:20pm", never as relative time. |
| Replies | array | Each with an author, text and fixed time, listed newest first. |
| Unread | integer | Posts and replies since she last opened the group. |

The group page shows Back, the group's name, "8 members · See members", a New post button and the posts, newest first.

## **The composer**

"New message" opens one composer for both audiences, headed "New message", with the choice "Circle | People" at the top.

| Audience | Who she chooses | Button |
| ----- | ----- | ----- | ----- |
| Circle | One or more members who have MVP, or "Everyone on MVP", which chooses all of them. Members without MVP are listed beneath, marked "Not on MVP", and cannot be chosen, with the line "People who aren't on MVP can't be in a chat. Call or text them from their page." | Send |
| People | One group | Post |

Sending to the circle starts a chat, or adds to the chat she already has with exactly those people. Posting to her people adds a post to the group.

## **Adding people and groups**

"Add someone" asks for a name, a mobile number, who they are to her, with the helper "Shown under their name on your Team.", and Circle or People. MVP checks the number. If the person has MVP, the screen says "Min-jung Park is on MVP." with Done. If not, it says that requests reach them by text message and offers "Invite by text" and "Not now". "Invite by text" hands a short text to her messages app, addressed to the number she entered, for her to send herself.

"New group" asks for a group name and the members, chosen from the people in her people who have MVP, with the line "Everyone in a group needs MVP to see its posts."

## **Behavior notes**

* **Message on a person page** opens her chat with that person alone, or the composer with only that person chosen when there is none, as in C-06c.
* **"Everyone on MVP" is how she asks her whole circle.** It shows as chosen whenever every member on MVP is chosen, so choosing Edward and Claire by hand in C-05c ticks it too.
* **Asking her people can start from the coach.** "Ask my people" on a coach card opens the composer with People chosen, the group it goes to and a draft in her own words, as in C-05. She can change any of it before it goes.
* **Chats are written by the parent alone.** The coach drafts requests, group posts and handoffs, but it never drafts, starts or joins a chat (F23).
* **Messages and replies arrive on a script** at the times in the fixtures, and each screen is shown as she sees it at a fixed time, such as 5:00pm on Tuesday in C-05. Each arrival is drawn as a notification, such as "Claire: Yes, see you at 6:30. I'll bring dessert." or "Jenna Okafor replied to your post in Cedar Grove parents.", and "1 new" and the tab's dot clear when she opens the chat or group.
* **Nothing said on Team changes the plan.** In C-05 she reads the replies and adds "Call Brightwater Family Therapy and ask for Dana Whitfield" to Wednesday herself. In C-05c Edward suggests Sunday night, and she does not add it.
* **Requests stay separate from chats.** A request carries plan items and answer buttons, and a chat does not, so part of the plan always goes to someone as a request (§9), even to someone she also chats with.
* **Groups outside MVP stay where they are.** A parents' WhatsApp group stays in WhatsApp. She shares messages from it into MVP when she wants the coach to see them, and she replies to it from WhatsApp (§9).
* **The prototype stages adding, checking, inviting and calling.** The result of checking a number comes from the seed, and Call, Text and Invite by text show the handoff without leaving the app. Nothing is sent and no call is made.

### **Standing decisions**

1. **Circle and people share one list on the tab, and the Circle tag tells them apart.** Heather chose one list on Oct. 28, 2026, because one fewer section is easier to learn. The groups still do different jobs, because a parent hands parts of the plan and private questions to her circle and takes local questions to her people.
2. **Her circle is reached in chats and her people in groups.** A chat with one person is a direct message, a chat with several is a group chat, and "Everyone on MVP" reaches all of them. Her people are not messaged one to one in this version (F22).
3. **Conversations live inside MVP, and everyone in one needs MVP.** Only the members of a chat or a group see it.
4. **The coach never reads chats or groups.** It does not read, summarize or reply to anything in them. The people in them expect to be talking to her, and that is why they are worth having.
5. **Her people is where requests the product declines can land.** The coach does not find or recommend providers, so when a question needs names, such as a new therapist, it sends her to her people.
6. **Chats and groups are invite only.** There are no public groups, no search for other parents and no suggested members.
7. **Posts and messages are text only,** which also keeps photographs of children out of the product.
8. **Invitations and calls leave no task,** because neither is a message about the plan that she might forget to send (§9).

### **Open conditions**

1. **Children's names in posts and chats.** Parents will name their children in private conversations. Whether the product should do anything about that is a question for Heather before launch, not for the prototype (issue M2).
2. **Sharing a chat message with the coach is not decided.** A chat might hold something the plan needs, such as Edward offering to drive, and nothing in this version sends it to the coach (F25).

# 11. Kids and school cards

The Kids tab holds a page for each child and a card for each school. A school card holds what a parent otherwise keeps in a drawer of handouts and a folder of emails, and the coach uses it when a message needs to go to the school.

The wireframes are 12a (the Kids tab), 12b (Mallory's page), 12c and 12d (the Westview Kindergarten card, before and after C-05b) and 12e (the Cedar Grove Elementary card). Alexis's page follows 12b and has no wireframe of its own yet.

## **The tab**

| Section | Each row shows |
| ----- | ----- |
| Kids | The child's name, with the grade and school beneath it, such as "Alexis" over "Fourth grade · Cedar Grove Elementary". No initial or chip, because the row is the child. |
| Schools | The school's full name, with the children who attend it beneath it, and the Updated mark when anything on its card has changed. |

An "Add a school" button sits at the foot of the tab for parents who would rather type a school in. It opens a page with the school's name and the children who go there, and the coach fills in the rest from what she captures later. "Add to this card" on a school card opens a sheet of three actions, Take a photo, Attach a file and Talk or type, addressed to that school. The words are in fixtures section 3, "The Kids tab". In the prototype both are staged and add nothing.

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

The card is headed with the school's name and carries an "Add to this card" button, which opens capture already addressed to that school. Events further away than this week may be written with their date, such as "Harvest fair, Friday, Oct. 23, 3:00pm".

## **Card fact**

| Field | Type | Description |
| ----- | ----- | ----- |
| Section | enum | One of the sections above. |
| Text | string | As shown on the card. |
| Source | source reference | Shown when she opens the fact, such as "From the family contact list · photo", or "From you". |
| Changed | boolean | True until she opens it. |
| History | array | Earlier versions, each with its text and when it stopped applying. |

## **Behavior notes**

* **The card opens from the Kids tab and from the school's name anywhere it appears,** such as "Westview Kindergarten" in "[Mallory] Pick up at Westview Kindergarten" on Today.
* **Siblings at the same school share one card,** so an update reaches both.
* **Source links appear when she opens a fact,** not under every line.
* **Sections with nothing in them are hidden.**
* **Cards are kept current through capture.** When a capture contains reference, the coach files it on the right card and says so in its read-back, while events go to the game plan and rules become standing items. In C-05b the Westview Kindergarten email changes the pickup contact and rule, both carry the Updated mark until she has seen them, and the earlier version stays in the card's history.
* **Cards start from the first capture.** The first card is created from whatever she captures first. When the coach does not know a child's school, or a fact such as a start time, it asks on Today. Start times are the exception, because setup asks for them on 0f.
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

# 12. MVP Editorial

MVP Editorial is MVP's own editorial content: short, practical articles written by MVP staff for parents. There is no tab. An article reaches the parent in one of two ways: as a card on Today, chosen because of something in her week, or attached to a coach answer when she asks for ideas.

The wireframes are 09 (the article view from C-08), with the Today card on 01 and 02 and the attached card on 08.

## **Card**

| Field | Type | Description |
| ----- | ----- | ----- |
| Label line | derived | "MVP Editorial ·" and the reading time, such as "MVP Editorial · 3 min read", in sentence case, in Meta. |
| Title | string | In the Voice style at semibold. |
| Reason | string | Today only. A single sentence beginning "Because", such as "Because Cedar Grove Elementary conferences are this week." |

## **Article**

| Field | Type | Description |
| ----- | ----- | ----- |
| Label line and title | as above | Shown at the top. |
| Byline | string | "By" followed by the writer's name and "MVP staff". The names come with the approved articles, and no invented name is shown (issue R15). |
| Illustration | image | Optional spot illustration, drawn by a person. |
| Body | sections | The article text from the fixtures, set in Body, because it is written by a person, not the coach. |
| Links | array | Optional links to where a recommended product is sold. Never sponsored and never affiliate. |

The article view has a Back link. Topics in use are School and Mornings, and earlier topics such as We tried it, Care, Food, Gear, Weekends and Camps remain available to the other households. The topic is kept in the seed for the library and is not shown on the card.

## **Behavior notes**

* **Every card on Today has a reason,** and the card appears only while the reason holds. The conference article appears on Today from Monday to Thursday, because Cedar Grove Elementary conferences fall on Thursday and Friday.
* **Today shows at most one article,** below Later today. There is no "See all", because there is no library to open.
* **An answer carries at most one article.**
* **Articles never carry the coach's dot or tint.**

### **Standing decisions**

1. **MVP staff write every article, and none is generated.** Each carries its writer's name. Claude writes no article copy, not even as a placeholder, because a draft that reads as generated breaks the trust the product depends on. Heather withdrew Charlotte's two drafted articles on Oct. 28, 2026 for that reason (issue R15).
2. **Articles follow the coach's rules only where they overlap:** no em-dashes and no filler. They are otherwise written in the writer's own voice.
3. **Links are editorial, never paid,** in the manner of Wirecutter.
4. **Camps are covered as advice, not listings.**
5. **Some articles carry spot illustrations** drawn by people, and an article without one is complete.

### **Open conditions**

1. **Eight articles still need writing,** two for each household, and who writes them is not decided (issue R10). Charlotte's two slots are defined in the fixtures, and their drafted text is withdrawn until approved articles arrive. Until then the article card and view are not shown in a presented demo (issue R15).
2. **The library and sharing an article** to her people or another adult have no wireframe or copy in the fixtures. They are not built for Charlotte's household (issue R11).

# 13. Settings

Settings opens from the parent's monogram at the top right of every tab on a phone, and from the bottom of the sidebar at wider sizes. It is a page (§2), so it shows Back at the top left and the large title "Settings" beneath the title bar. The layout follows Greg's Settings design from the earlier build: a card for each thing she might come to change, each with a heading, a line saying what the card holds, and label-and-value rows. The words and Charlotte's values are in fixtures section 3, "Settings", and section 4, "Settings".

| Card | Holds |
| ----- | ----- |
| Your account | Her name, the email she signed up with, her age range if she gives one, her plan and Manage billing. The age range is optional, asked nowhere else, and offers Under 25, 25 to 34, 35 to 44, 45 to 54, and 55 and over. |
| Your calendar and forwarding address | The connected calendar with a link to disconnect it, or "Not connected" with Connect your calendar. Her forwarding address with Copy the address, and each sender she forwards automatically. |
| What the coach adds for you | The line "The coach adds these to your plan, and you can take anything out." and three switches: events from her calendar, school-day changes for her children, and trips she can take herself. Turning one off sends that kind to the review card instead (§4, §8, F35). |
| Notifications | A switch for notifications, and a switch for each reminder she chose, such as the reminder the night before a library day from 0j. |
| Language at home | The language from 0g, such as English. |
| Privacy | Two statements of who sees what: nobody sees her plan, her calendar or her coach conversations, and the coach doesn't read her chats or groups. |

Each card sits on `bg/card` at `radius/lg`, the heading is set in Subtitle, the line in Meta and the rows in Body, with values right-aligned in muted ink. Links in the rows are Body strong in cerulean.

The child profile that v0.6 kept in Settings is now the child page on the Kids tab (§11), and the people who help are on Team (§10).

## **Prototype**

The page is drawn and reached from the monogram on every board. Manage billing, Disconnect Google Calendar, Copy the address and the switches are staged and change nothing, because no moment needs them. The long press on the monogram stays the household switcher in the build (§15), and the Figma prototype shows only the tap.

### **Standing decisions**

1. **Settings sits behind the monogram,** because parents visit it rarely.
2. **No photographs of children anywhere.** Children appear as name chips (§4), and a child page is headed with the child's name. Optional child photos are not adopted (fixtures Appendix B item 35).
3. **Settings holds only what she rarely changes.** Children live on Kids and people on Team, so Settings never grows into a second place to manage the family.
4. **Your calendar and Your forwarding address share one card,** because both are how things reach the coach without her opening the app.
5. **The coach's voice and personality are not a setting in this version.** Greg's earlier design had a Coach card for them. It is parked as F33, because the coach's voice is a product rule (§14), not a preference.

### **Open conditions**

1. **Plan and billing management** need real payments, which are out of scope, and the plan names stay proposed until issue O17 is settled.

# 14. Coach voice

Every line the coach writes follows the rules below. The build agent should treat any violation as a bug.

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

Requests, notes to organizations and group posts are written as the parent, in the first person, in plain everyday language. They should not sound like the coach, because the person reading them is hearing from her.

## **Articles and interface copy**

MVP Editorial articles are written by staff in their own voice and follow only the rules against em-dashes and filler. Labels, headings and buttons are interface text and follow plain language rather than the coach's rules.

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
| C-00 | Monday, Oct. 5, 8:30pm, the week before | Onboarding, from the splash to her first board and her agreement to the coach's first recommendation | Splash | Core |
| C-01 | Monday, Oct. 12, 6:15am | The newsletter read-back, sharing Jenna's message, the voice note and three ways Thursday could go | Coach | Core |
| C-02 | Monday, Oct. 12, 6:40am | Charlotte asks Edward, and Edward sees the request in his own MVP | Coach, the draft | Core |
| C-03 | Monday, Oct. 12, 7:25am | Getting both girls out of the house | Today | Core |
| C-03a | Monday, Oct. 12, 7:45am | Min-jung leaves Hana with Charlotte for the run to Westview Kindergarten and hands her a Westview Kindergarten flyer, and Charlotte tells the coach through the capture bar on Today | Today, the capture bar | Core |
| C-03b | Monday, Oct. 12, 2:00pm | The afternoon run as a line: the reminder, two pickups and therapy, and the Leave sheet | Lock screen, the reminder, then Today | Core |
| C-04 | Monday, Oct. 12, 8:50pm | Working the game plan without the coach: adding the second tutoring session from the review card, moving it to next Tuesday, two notes, and asking Edward to take the library run | Game plan | Optional |
| C-04b | Tuesday, Oct. 13, 7:05am | Edward says yes to the library run and adds a note | Edward's request card, through View as | Optional |
| C-05 | Tuesday, Oct. 13, 12:20pm | Asking her people about a new therapist | Today, the coach card | Core |
| C-05b | Tuesday, Oct. 13, 3:40pm | A Westview Kindergarten email updates the Westview Kindergarten card | Coach, the read-back | Optional |
| C-05c | Tuesday, Oct. 13, 8:15pm | Charlotte asks Edward and Claire together how to tell Alexis about her therapist | Team | Core |
| C-06 | Wednesday, Oct. 14, 11:45am | Edward can't collect Mallory, and Charlotte chooses against the recommendation | Today | Core |
| C-06b | Wednesday, Oct. 14, 1:15pm | A checkup she booked outside MVP joins her plan through her Google Calendar, it runs into Friday's tutoring, and she asks Ms. Reyes by text message | Today, the coach card | Core |
| C-06c | Wednesday, Oct. 14, 4:50pm | A direct message to Claire about dinner, and Claire's reply as a notification | Team, Claire's page | Optional |
| C-07 | Wednesday, Oct. 14, 9:10pm | The evening, getting ready for Thursday | Today | Optional |
| C-08 | Thursday, Oct. 15, 8:40pm | A question about picture day morning, with an article | Coach | Core |
| C-08b | Thursday, Oct. 15, 9:05pm | A question about Mallory's cough, where the coach names Dr. Ortiz | Coach | Core |
| C-09 | Sunday, Oct. 18, 7:30pm | The Sunday look-ahead: she adds the harvest fair, the coach recommends skipping Friday's tutoring, and she tells the coach about a pumpkin from the game plan | Today, the coach card | Optional |
| C-10 | Monday, Oct. 19, 8:20pm, the week after | The coach sees the weekend away and recommends a playbook for Edward | Today, the coach card | Core |
| C-11 | Monday, Oct. 19, 8:22pm | Charlotte builds Edward's playbook in the game plan, adds Ruth to her circle, and sends it | Game plan, the Playbook view | Core |
| C-12 | Tuesday, Oct. 20, 6:20am | Edward taps Got it and opens Your playbook | Edward's handover card, through View as | Core |
| C-13 | Friday, Oct. 23, 2:05pm | Edward's Today runs two pickups and the harvest fair | Edward's Today, through View as | Core |
| C-14 | Sunday, Oct. 25, 4:20pm | The flight is late, MVP alerts Edward and shows the delay on his Today, and Edward calls Ruth, who can stay with the girls | Edward's Today, the coach card | Core |
| C-15 | Monday, Oct. 26, 6:30am | Charlotte's first morning back opens with the weekend summary | Today, the coach card | Core |

Each moment holds the full state of the household at that point, so jumping to any moment shows exactly what the fixtures describe, whatever was tapped before. Within a moment, the scripted steps play in order as the presenter taps, such as Charlotte's answer at 8:41pm in C-00, Edward's answer at 7:52am in C-02, Min-jung's answer at 12:30pm in C-06 or Claire's reply at 4:58pm in C-06c. The boards for running late, Wednesday at 5:10pm, Sunday, a conflict on the pass and the notice are not moments and are not built in review build 1. C-09 leans on the Sunday 10:30am board, because Lakeside Strings Music School's answer clears the Monday clash first, so the presenter shows that board or says in a line that Lakeside Strings Music School answered (fixtures Appendix B item 81).

C-10 to C-15 are a route of their own, opened from the switcher and from the Figma prototype's starting point C, "The weekend Charlotte is away". Each holds the household as it stands that week, the week after the demo week.

The other three households get moments when their fixtures are rewritten.

## **Behavior notes**

* **The demo calendar drives everything time-based,** including the dateline, the phase of the day, countdowns and what has passed. The device clock is never read.
* **Every tab shows its state at the moment.** After a jump, the tester can open any tab. The Coach tab shows the conversation up to the moment, the game plan shows the week as the fixtures' table stands at that moment, Team shows the chats, posts and replies that exist by then, and Kids shows each card as it stands then. Nothing is blank, and nothing from later in the week shows early.
* **Switching households or moments leaves nothing behind.** No data, open panel, conversation or scroll position survives the switch.
* **The debug menu is never used during a presented demo.** The live model needs a network connection and adds wait time, which are the two things the scripted design exists to avoid.
* **The live model covers the coach only.** Group replies and other people's answers are always scripted, because a model writing as a real person would break her people's promise even in a demo.

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
| demoWeekStart | ISO date | The demo week's Monday, `2026-10-12`. The only calendar date in the seed. Changing it moves the whole demo to another week. There is no set presentation date, so it is not moved before each presentation, and the demo stays in its October week. It moves only to take the demo to a new season, such as a school break or the spring (issue C26). |
| coachAdds | object | Her choices for what the coach adds: `calendar`, `schoolDay` and `trips`, each `true` or `false`. Charlotte's are all `true`, from the ticked line on 0j (F35). |
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
| Place | id, name | string | Such as "Studio Ten Dance". |
| Travel | from, to, minutes | | Fixed in the seed, never calculated, for legs from home and between places. |

## **Schools and rules**

| Object | Field | Type | Description |
| ----- | ----- | ----- | ----- |
| School | id, name, shortName | string | "Westview Kindergarten" and "Westview Kindergarten". |
| | facts | array | Card facts (§11), each with section, text, source, changed and history. |
| | rotation | object | Letter per day for the demo week and the week before. |
| | documents | references | Captures the card was built from. |
| Rule | id, school, kind | | A recurring rule, such as a letter day meaning, and the checklist item it creates. |

## **Plan items, captures and requests**

Plan items follow §4, including the children each concerns, which the screen draws as chips, the type, event or trip, with a trip's event, and for tasks the task kind and any steps. A suggested item that waits on the review card has the status `proposed`, and each moment's state says which items are on the card. Captures follow §7. Requests follow §9. Each references people, places and sources by id.

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
| | set | boolean | Whether she has set it. Charlotte sets one in C-03b, for 2:00pm. |

## **Groups, chats and articles**

Groups and chats follow §10, including each one's members, messages, posts and replies with their demo times. A message, post or reply that arrives during a moment, such as Claire's reply in C-06c, is a scripted step in that moment. Articles follow §12, with `recommended[]` pairing an article with its reason line for a household.

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
| Build tool | Not decided. Whoever writes the code is called the build agent, and it reads `AGENTS.md` first. |

## **Design source**

Figma is the design source. The frames marked Ready for dev decide how each screen looks, and `docs/screen-map.md` ties each screen to one frame by ID, because the file holds older frames with the same names on several pages. The build agent reads those frames through the Figma MCP server where its tool allows, or from frames the engineer exports into the repository. The master library's variables and text styles are exported into `src/tokens.css`, and the build agent never invents a value that is not in it. Screens with no Ready for dev frame are built from the grayscale wireframes in `docs/wireframes/`, drawn with the components already built, as the screen map says. The fixtures still decide every word, and this spec still decides behavior (AGENTS.md, "Who decides what").

## **Component inventory**

* `App.jsx`: root, tab routing, household session
* `components/Layout/`: one shell per layout type in §2, TodayShell, TabListShell, PageShell, ConversationShell, ComposerShell, OnboardingShell and StillShell, with TitleBar and LargeTitle shared by the tab list and page shells. Sheets use the shared Sheet.
* `components/Onboarding/`: one component per screen, 0s to 0j, the three 0i states, and the failure states
* `components/Today/`: TodayTab, PhaseHeader, Now, NowPass, PassTitle, StatusPill, PassFields, NowLine (the Meta line above a pass for a later day, which replaces NowTask and NowQuiet), NextStation, ChecklistGroup, ReminderItem with its Item and Task kinds and its New state, replacing ChecklistRow, StopMarker, ChecklistDone, LaterToday with its count line, ReadyTonight (drawn as the evening reminders), TomorrowStarts (drawn as For tomorrow), CoachCard with its after-answer states, CaptureBar (shared with Coach), and the sheets ReminderSheet, AnswerSheet, LeaveSheet, RouteLine, BackupList and AskSomeoneSheet
* `components/Coach/`: CoachTab, Conversation, ReadBack, SourceLink, VoiceNote, Options, CoachAnswer, BasedOn, CaptureBar
* `components/Capture/`: ShareSequence, ThinkingScreen, CaptureFailed
* `components/Calendar/`: ConnectCalendar, CalendarPermission, CalendarMark
* `components/GamePlan/`: GamePlanTab, WeekStrip, ReviewCard, ReviewDay, ReviewItem, PastDays, DayGroup, DayHeading, PlanRow with its landing highlight, ItemPage, MovePicker, ReadBackStrip, WeekColumns for wider sizes, and DragLayer. ChangesList, PlanItem and ItemSheet are retired.
* `components/Requests/`: RequestDraft, RequestCard, RecipientToday, RequestWebPage, HandoffSheet
* `components/Team/`: TeamTab, ChatRow, GroupRow, PersonRow, PersonPage, GroupPage, MembersList, Composer, AudiencePicker, ChatView, ChatMessage, Post, AddSomeone, NewGroup, InviteHandoff
* `components/shared/` also holds UnreadMark and CallHandoff
* `components/Kids/`: KidsTab, ChildPage, SchoolCard, CardFact, CardHistory
* `components/Recommends/`: RecommendsCard, ArticleView
* `components/Settings/`: SettingsPage, SettingsCard and SettingsRow
* `components/Demo/`: HouseholdSwitcher, MomentList, ViewAs, PhoneFrame, DebugMenu
* `components/shared/`: Notice, Monogram (the parent only), ChildChip, AdultAvatar, CoachDot, StatusMark, ChangedMark, ConflictMark, OwnerLabel, CoachLine, BackLink, TabBar, Sidebar, Sheet, with its parts SheetHeader, SheetOption, ActionRow and SheetFooter, and Icon
* `hooks/`: `useHousehold`, `useDemoTime`, `useMomentSteps`
* `data/households/`, `data/articles/`, `copy/`
* `scripts/voicecheck.mjs`: the voice and date check (§14)
* `netlify/functions/coach.js`: the live-model proxy, debug only

## **Repository**

The repository holds a `README.md` explaining how to run and present the prototype, and an `AGENTS.md` explaining how the build agent should work in it, whichever tool that turns out to be. `CLAUDE.md` imports it for Claude. Project documents live in `docs/`: `spec.md` (this document), `brief.md`, `story-fixtures.md`, `screen-map.md`, `issues.csv` for observed problems and open decisions, and `backlog.md` for build order. Decisions are recorded where they apply, as standing decisions in each section and as rows in Appendix A, so there is no separate decision log.

# 18. Out of scope for the prototype

The following are not built in this phase:

* Reading the device clock
* Calendar dates anywhere except Today's dateline, the 0c draft, the prepared documents and events on a school card beyond this week
* A month view (F1)
* Live voice transcription (F3)
* Connecting her email account directly (F4)
* A real connection to Google Calendar, Apple Calendar or Outlook, which the prototype stages
* Writing anything to her calendar (F18)
* A playbook for anyone but Edward, more than one recipient, his coach outside the playbook days, and changing a playbook after it is sent (§20)
* Edward or anyone else connecting their own calendar (F19)
* Real notifications (F5), including the reminder notification, which is drawn rather than fired
* A real maps app or traffic check, which the prototype stages
* Grocery ordering, meal planning and the shopping list (F6, F16)
* Any language other than English (F7)
* A shared household account (F8)
* Moderation and reporting for groups (F9)
* Photos in posts (F10)
* Saving articles (F12) and searching the library (F13)
* School cards for studios, teams and clinics (F14)
* A wide Today layout at tablet and desktop widths (F20)
* The capture bar on Team and Kids
* Filtering the game plan by child (F31)
* Choosing a range for the game plan beyond two weeks
* A tab for articles, a browsable article feed, the article library, "See all" and sharing an article (§12)
* A searchable directory of camps, activities, providers or products
* The coach finding or recommending providers or sitters, buying anything, planning money, or giving custody, legal or medical advice
* Sponsored links, affiliate links and product links inside coach answers
* The coach reading or summarizing group posts or chats, and the coach drafting or starting a chat (F23)
* Messaging one person among her people directly (F22)
* Renaming, leaving, muting or adding people to a chat (F24)
* Sending a chat message to the coach (F25)
* Real phone calls, which the prototype stages
* Real sharing from another app, real forwarding, and reading real photos or email
* Real invitations, real text messages and real accounts, sign-in or payments
* Real payments, Stripe or any billing. The plan screen (0e-p) is staged.
* Editing notes, owners or days from Today, and changing the time of an item someone else owns or has answered from Today
* Changing anything from Settings, which the prototype stages
* The coach's voice and personality as a setting (F33)
* Working out backups at run time, which the prototype takes from the seed
* A note to whoever is waiting when she runs late (F27)
* A compact route-and-time strip above the sheet once it covers Now (F29)
* Real notification permission, which the prototype stages
* Photographs of children, including optional child photos
* Kid-facing features of any kind
* Dark mode and native apps
* Real phone notifications for a new conflict, which the prototype never sends

# 19. Design tokens and platform constraints

Every design value in the app, including color, spacing, radius and type, is a CSS custom property in `src/tokens.css`, exported from the Figma library. **That file is the source of truth.** This document names only the values Greg set on October 17 and 18, 2026 with the new surface ramp, so the engineer can check the export against them: canvas #F0ECE5, card #F9F7F3, `bg/control` #FFFEFC, cerulean #007198, pressed #004F6B, the cerulean tint (`interactive/tint`, `cerulean/100`) #E1EEFC, and the children's indigo #22549A on #DDE5ED (issues C42, C44 and C46). Fixtures section 2, "Color", says what each is for.

**Which surface a screen sits on.** Today is the only screen with canvas, for the sheet that carries the coach card, Later today and MVP Editorial, and its header and Now sit on `bg/card` as §5 sets out. Every other screen sits on `bg/card`: the Coach tab, the game plan, Team, Kids, every page opened inside a tab, every sheet and composer, Settings and onboarding. On those screens, a part that has no fill of its own, such as a field, a row of choices or a list group, takes `bg/control` so it stands clear of the card behind it. Canvas was too dark as the background for a whole screen, and Greg moved the boards to card on October 18, 2026 (issue C48). The capture bar and the tab bar take the surface of the screen they sit on.

The design system is called Hearth: warm, editorial and quiet, with a cream canvas, ink rather than black, and cerulean as the anchor color and for anything the parent can tap. Children share one indigo, `kid` #22549A on `kid-bg` #DDE5ED, and the coach has one amber, each with its own tokens (`kid` and `kid-bg`, and `coach`, `coach-ink` and `coach-bg`). Lateness uses `status/warning` and `status/warning-tint`, always with words or an icon beside the color.

## **Type**

The type scale is the one in fixtures section 2, "Type", and the library's text styles carry the same names.

| Style | Library name | Use |
| ----- | ----- | ----- |
| Display | display | The one number that matters now, such as the leaving time on Now. Fraunces. |
| Title | title | The dateline, and section names on Today. Inter. |
| Subtitle | subtitle | Headings inside a page or a card, such as the sections of a school card and Team's section names, the title on the pass, and the evening reminders heading. Inter. |
| Voice | voice, voice-strong | The coach's lines in onboarding, and article titles. Fraunces. |
| Body large | body-large | The coach's lines on the Today coach card, checklist items and the rows in Later today and For tomorrow. Inter 17. |
| Body | body | Everything else, including the coach's messages in the Coach tab. Inter. |
| Body strong | body-strong | Buttons, links, names in rows, field labels, the route and field values on Now, and checklist group headings. Inter 15, bold (issue C47). |
| Meta | meta | Times, sources, counts and small labels. Inter. |
| Label | meta-strong | Labels the coach owns: the coach card's label, the read-back strip's label, and the day labels on the review card. JetBrains Mono. |

Screen headers, onboarding and setup headlines, article page headlines and the wordmark use the library's `header`, `headline` and `wordmark` styles, outside the scale. Chips use the Meta size in a heavier Inter weight.

## **Rules that apply across screens**

These live here rather than in Figma because a single frame cannot show them.

* **Three typefaces only.** Fraunces, Inter and JetBrains Mono, and JetBrains Mono only in the Label style. No fourth font is added for any reason.
* **No uppercase labels, no letter-spaced eyebrows and no bold words inside paragraphs.**
* **No photographs of people, no stock images and no generated images.**
* **Illustration appears only inside MVP Editorial articles,** as spot illustrations drawn by people. The MVP mark is not an illustration.
* **No pure white and no pure black.**
* **The wordmark always reads "Most Valuable Parent."** "MVP" never appears alone in the wordmark, including at the top of the sidebar.
* **The coach is marked three ways and no others:** its dot, its tint, and on the review card an amber outline around each day.
* **Status marks never rely on color alone.** Each has its own shape and label, so the plan reads in grayscale. The same holds for chips, avatars and the coach's dot.

## **Platform constraints**

| Size | Width | Checked at | Layout |
| ----- | ----- | ----- | ----- |
| Phone | Up to 767 | 440 × 956 and 390 × 844 | The base design, built at 440, the width of the Figma frames. Single column, tabs at the bottom. |
| Tablet | 768 to 1279 | 768 × 1024 | Tabs become a left sidebar. Today, Coach, Team and Kids keep the phone layout in a centered column. The game plan shows seven columns. |
| Desktop | 1280 and up | 1440 × 900 and 1920 × 1080 | Sidebar, with the same layouts as tablet. Content width stops growing at 1200. |

* **The phone design comes first.** Every screen is designed at 440 × 956 before any other size, and checked at 390 × 844, and nothing exists only on desktop.
* **Tap targets are at least 44 pt** at every size.

# 20. The playbook

Some days a parent is not there at all, such as a weekend away, and handing the plan over one request at a time leaves the other adult with a pile of cards and no picture of the days. A playbook is the part of her plan for the days she is away, handed to one person in her circle with everything he needs to run it. She builds it with the coach in the game plan and hands it to him once, and he acknowledges it with Got it. He gets a shorter view, Your playbook, built to answer a question fast, and the coach helps him on those days. MVP stays quiet for her until she is back, and her first morning back opens with one look-back at the days she missed. In the team this journey is called auto pilot, a name that never appears on screen (F37, fixtures "The weekend Charlotte is away", moments C-10 to C-15).

There are no wireframes for this section. Its screens are drafted in Figma on the page "Drafts - playbook" and listed in `docs/screen-map.md` once Greg approves them.

## **When the coach offers one**

The coach offers a playbook when something in her plan, usually an event from her calendar or a capture such as a flight itinerary, shows that she can drive nobody for a stretch that holds more than one of her items. The coach card names when she is away and how many items are hers, and recommends a playbook for one person. Its button reads "Build" and the person's playbook, such as "Build Edward's playbook", and opens the game plan in the Playbook view. Because there is no backup for a playbook, the card names the alternative instead of "Other options": "Hand things over one at a time", which opens the game plan at the first day she is away, where she can ask for help on each item as in §8.

## **Playbook**

| Field | Type | Notes |
| ----- | ----- | ----- |
| Days | date range | The days she is away, from when she leaves to when she is back, such as 10:00am on Friday to 6:40pm on Sunday. |
| Recipient | person | One person in her circle who has MVP, such as Edward. |
| Items | plan items | Every item she owns on those days, each with the recipient as its new owner, which she can change to anyone else in her circle. |
| Rides for her | plan items | The legs that take her away and bring her back, owned by the recipient, such as the drives to and from the airport. A child goes along only when the item's chip says so. |
| Notes | strings | What the recipient should know, which the coach drafts from her evening reminders, the Kids cards and her items' notes, and she edits, such as bedtimes. Nothing medical. |
| Contacts | people and organizations | Who the recipient can call, which she chooses on the sheet "Who can Edward call?" from her circle and the schools' front offices on the Kids cards, with the coach's suggestions ticked. One contact can be marked as the backup for the evenings. |
| Backups | Plan B and Plan C | The backups the coach keeps for the playbook's items, on each item's page, which can name a person in her circle. |
| New things go to the recipient | boolean | One ticked line, "Send Edward anything new for these days". While it is on, anything new that concerns those days goes to the recipient's MVP instead of waiting for her. On by default. |
| Status | Draft, Sent, Got it, Running, Over | Got it is the recipient's acknowledgement. A playbook is Running from when she leaves until she is back, and Over once she has opened the weekend summary. |

## **Her view**

The Playbook view sits at the top of the game plan for the days it covers, from when she starts it until the weekend is over. Its title names the recipient, such as "Edward's playbook", above the days it covers and a line saying when she leaves and when she is back. Each part says where it came from in a Meta line, so she can see what the coach took and what is hers to decide. Edward's weekend reads "From your game plan" and holds the rides for her and each day's items. What Edward should know reads "Drafted from your evening reminders and the girls' pages" and ends with "Add something Edward should know". Where you're staying reads "From your itinerary" and holds the place, its front desk number, and its time zone with how far it is from home, such as "Eastern time, three hours ahead of home". Who Edward can call reads "You choose who's on this list." until she has chosen, and "You chose these from your circle and the Kids cards." after. Below come the ticked line and its Meta line "You won't hear from MVP until you're home.", and the button "Send to Edward". Each item keeps its page (§8), so she can still change it.

"Choose who Edward can call" opens a sheet, "Who can Edward call?", listing her circle and the schools' front offices, with the coach's suggestions ticked: the people the playbook's items involve, the children's pediatrician and the schools. She ticks the rest herself and can add someone. The coach asks at most one question while she builds it, through the read-back strip, when the playbook is missing something the backups need, such as someone who can stay with the children if the recipient has to go out. Its button says what she adds, such as "Add someone".

The message she sends is drafted in her voice and ends with the backup and the backup's number, such as "If you need help, Ruth Delgado next door can stay with the girls, 555-0111.", so the recipient has it from the first screen.

## **His view**

On the recipient's screen the playbook is his, so it is titled "Your playbook", with "From Charlotte ·" and the days beneath, then when she is away. It is shorter than her view, because he will open it in a hurry, and its sections come in the order of what he will need: Your weekend, day by day with leaving times; If plans change, which names the backup, with Call and Text buttons for that person and the line that anything new comes to him and the coach helps; Where Charlotte is, with the place, "Front desk", its number and a Call button, and, when her time zone differs from home, a line giving the difference in his own hours, such as "Charlotte is on Eastern time, three hours ahead of you, so 8:00pm here is 11:00pm there."; Who to call, with a Call button on each row; and How the girls' days go. It opens from the handover card and from a line above Now on his Today while the playbook runs, such as "Your playbook · until 6:40pm this Sunday".

## **The handover**

A playbook is sent to him once, as a handover rather than a request (§9), because he cannot decline it. Its heading reads "Charlotte handed you this weekend.", with "Sent" and the time beneath it, then her message, then one summary row naming the days and how many items it holds, such as "This Friday to this Sunday · Seven things, from the airport run this Friday to the airport pickup this Sunday". It has one button, "Got it", and the link "Open your playbook". Got it tells her he has seen it, in one notification such as "Edward has the weekend.", and the card then reads "You have this weekend, from" and when it starts. The items join his own plan as his.

## **On the playbook days**

The recipient's Today is the same Today she has (§5), holding the items he owns, so on the playbook days it holds a full day: passes, checklists, Later today and the coach card. The coach speaks to him on those days only, and its cards follow §5 and §14, written to him.

Anything new that concerns the playbook days goes to his MVP when the line is ticked, such as a delay to her flight home. Anything that concerns other days waits for her. Nothing reaches her while the playbook is running: no notification, no coach card and no answer.

## **Her flight on his Today**

MVP follows each flight in the playbook from her itinerary, by airline, flight number and date. On the day she flies home, a line under "Your playbook" on his Today reads "Charlotte's flight ·" the airline and number "·" its status, such as "Lands 6:40pm, on time", and opens the pickup's page. The pickup's pass shows the landing time in its fields. When the landing time changes, the line shows the new time with how late or early it is and carries the Updated mark until he opens it, and the pickup's leaving time follows the five-minute rule (§5). When a change moves his leaving time, his phone shows one alert, titled "Charlotte's flight is late" or "Charlotte's flight is early", whose body gives the new landing time and what to do. A change that does not move his leaving time sends no alert. When the new time runs into the children's evening, the coach card follows (Urgent help on the playbook days). Nothing about the flight reaches her.

In the prototype, the flight's status and the 4:15pm change are scripted in the seed file, and no flight data is fetched.

## **Urgent help on the playbook days**

When something on a playbook day needs another person within hours, the coach card leads with a call, because a message can sit unread while the time runs out. Its button calls the backup, such as "Call Ruth", which opens his phone with the number, and the Meta line beneath shows the person and number. Its link, such as "Text Ruth instead", opens his own messages app with a text drafted in his voice. MVP sends nothing to the person and cannot hear the call, so when he comes back the card asks what they said, such as "Can Ruth stay with Alexis and Mallory tonight?", with "Ruth can stay" and "Ruth can't come". His answer goes on the item as the person's status, such as "Ruth: yes". The first card names a deadline, such as "If you haven't reached Ruth by 7:30pm, take both girls with you.", and if he taps the second answer or the deadline passes, the card turns to the backup that depends on nobody, so he is never left waiting. The Leave sheet still holds that backup, one tap away from the pass.

## **The weekend summary**

On her first morning back, Today opens with one coach card labeled "MVP Coach · while you were away". It says in a line or two how the days went and whether anything is waiting for her, and its button "See your weekend" opens the summary in the Playbook view. The summary is titled "Your weekend" and holds What came in, What Edward did, Notes from Edward and Worth a look, where the coach puts anything that matters today, with one button that adds it to her plan, such as a task. The card appears once, and the Playbook view leaves the game plan once she has opened the summary.

### **Standing decisions**

1. **A playbook is one handover, not many requests.** He sees the days as a whole and acknowledges them once with Got it, because he cannot decline them, so he never has to piece the weekend together from cards.
2. **She agrees once to let new things through.** The ticked line is the only way anything reaches him without her sending it, and it covers only the playbook days. This is an exception to "Nothing goes to another person unless the parent sends it herself", approved by Greg on Nov. 19, 2026 for this journey.
3. **He sees only the playbook.** The rest of her plan, her calendar and her coach conversations stay hers. This is an exception to "Nobody sees her plan" for the days she chooses to hand over (F8 stays parked).
4. **He has the coach on those days.** The Family plan includes the coach for him. In the prototype it speaks only on the playbook days.
5. **She hears nothing while she is away,** because not being bothered is why she built the playbook.
6. **The summary is a look-back,** the first coach card about days that have passed, which brings part of F34 into the prototype.
7. **On the playbook days, help needed the same day leads with a call,** with a deadline and a backup that depends on nobody. Elsewhere, requests are unchanged (issue Y8).
8. **She decides who he can call.** The coach suggests and she ticks, and every part of her view says where it came from.
9. **MVP follows her flight, and alerts him only when it changes what he does.** Following the flight itself means a delay never depends on her inbox, and alerting only when his leaving time moves keeps the alert worth reading (F38).
10. **He can reach where she is staying, not her.** The front desk's number lets him reach her for something serious, while MVP itself still contacts her about nothing. Whether she is also listed by name stays open (open condition 1).

### **Open conditions**

1. **Whether his view lists her for an emergency** (fixtures Appendix B item 122).
2. **Heather's wording review** of every line in C-10 to C-15, after the frames are drafted (fixtures Appendix B item 124).
3. **The board offsite** stands in for the company offsite Greg described, because Charlotte is home full time (fixtures Appendix B item 121).

### **Out of scope**

A playbook for anyone but Edward, more than one recipient, a playbook for days she is home, his coach outside the playbook days, his other tabs beyond what the moments show, and changing a playbook after it is sent are not built. Call first outside the playbook days is parked (issue Y8). Live flight data in the prototype, the outbound flight on his Today, and flight status anywhere outside the playbook are not built, and the last is parked with F38.

# **Appendix A: Change log**

This appendix tracks changes to the specification. The body above always reflects the latest version.

## **v0.35, November 19, 2026**

Follows story fixtures 3.36. Greg asked that Edward's playbook say where Charlotte is staying.

| # | Section | Change |
| ----- | ----- | ----- |
| 1 | §20 | Her view gains Where you're staying, and his view gains Where Charlotte is between If plans change and Who to call, with the time zone line. Standing decision 10 is added. Opens issue Y10. |

## **v0.34, November 19, 2026**

Follows story fixtures 3.35. Greg asked that Edward see Charlotte's flight and be alerted when it is delayed.

| # | Section | Change |
| ----- | ----- | ----- |
| 1 | §20 | A new subsection, Her flight on his Today: the flight's line, the landing time on the pickup's pass, and one alert when a change moves his leaving time. Standing decision 9 is added, and Out of scope fences live flight data and flight status outside the playbook. |
| 2 | §20 | On the playbook days no longer says the delay reaches her forwarding address. |
| 3 | §15 | C-14 follows. |
| 4 | Appendix B | F38 is added as moved into the prototype for the playbook only, and F39 is next free. Opens issue Y9. |

## **v0.33, November 19, 2026**

Follows story fixtures 3.34 and Greg's review of the playbook drafts.

| # | Section | Change |
| ----- | ----- | ----- |
| 1 | §20 | A playbook is a handover acknowledged with Got it, with no Yes or No. "The request" becomes "The handover", and Status reads Draft, Sent, Got it, Running, Over. |
| 2 | §20 | Her view says where each part came from, and the sheet "Who can Edward call?" lets her choose the list. The message ends with the backup's number. |
| 3 | §20 | His view is titled Your playbook, with Your weekend first and Who to call after If plans change. |
| 4 | §20 | A new subsection, Urgent help on the playbook days: the card leads with a call, a text goes from his own messages app, he tells the coach what was said, and a deadline turns to the backup that depends on nobody. Standing decisions 7 and 8 are added. |
| 5 | §15 | C-12 and C-14 follow. |

## **v0.32, November 19, 2026**

Follows story fixtures 3.32 and 3.33, and Greg's decisions of Nov. 19, 2026 on the weekend Charlotte is away.

| # | Section | Change |
| ----- | ----- | ----- |
| 1 | §20 | New section, The playbook: when the coach offers one, its fields, her view, his view, the request, the playbook days and the weekend summary, with six standing decisions, three open conditions and what is out of scope. F37 moves into the prototype. |
| 2 | §15 | Charlotte's moments gain C-10 to C-15, a route of their own the week after the demo week. |
| 3 | §18 | Out of scope gains what the playbook does not build. |
| 4 | Appendix B | F37 is added as moved into the prototype, and F38 is next free. |
| 5 | §9 | Fixtures 3.32 records the decline draft in C-03 (issue S7) and the style of a request's heading, a sentence in Body strong with "Sent" and the time in Meta beneath it (issue S8). The spec's field table already names both parts, so its words are unchanged. |

## **v0.31, October 29, 2026**

Follows Greg's finding of Oct. 29, 2026 that the checklist roll-up no longer worked in the Figma prototype.

| # | Section | Change |
| ----- | ----- | ----- |
| 1 | §5 | "When a checklist is finished" names ReminderGroup, built on ReminderItem rows, as the library component that draws the roll-up, in place of ChecklistGroup and ChecklistDone, and says what the Figma prototype can and cannot show (issue T71). |

## **v0.30, October 28, 2026**

Follows story fixtures 3.31, Greg's update to Now of Oct. 28, 2026.

| # | Section | Change |
| ----- | ----- | ----- |
| 1 | §5 | The phase icon is back beside the dateline, and the dateline is set in Title. Standing decisions 4 and 27. The icons stay in the library. |
| 2 | §5, §17 | The trip timetable marks each row with a StopMarker for its kind of place, with Current, Ahead and Behind states. Standing decision 26. |
| 3 | §5, §19 | The evening reminders heading names the phase of tomorrow's first departure and is set in Subtitle, and the folded line names the same phase. |
| 4 | §3, §5, §17 | Every checklist row on Today is a ReminderItem with its own remove button, "Edit this list" and 0i-e are retired, removing a repeating item asks "Just tonight" or "Every night" and raises a Notice with Undo, and each child's group ends with "Add something else for" and the child's name. Tasks use ReminderItem's Task kind. Standing decision 25. 0i-i and 0i-j join her first board. |
| 5 | §2, §5, §6 | The coach's dot comes off the capture bar. |
| 6 | §5 | Open conditions 17 and 18 (issues T69 and C55). |

## **v0.29, October 28, 2026**

Follows story fixtures 3.30, Heather's second wording review and Greg's agreement with it.

| # | Section | Change |
| ----- | ----- | ----- |
| 1 | §5, §8 | The backups' heading reads "Backup plans". |
| 2 | §5 | Removing an evening reminder asks "Just tonight" or "Every night", and she can add her own item. Open condition 12 closes. |
| 3 | §9 | A request's heading is a sentence saying what is asked, with "Sent" and the time beneath it. The C-04b note changes with the request's new wording. |
| 4 | §10 | Team's sections are Chats, Groups and Team, with one list and a Circle tag. Standing decision 1 is rewritten. |
| 5 | §12 | The drafted articles and invented bylines are withdrawn, and Claude writes no article copy (issue R15). |
| 6 | §13 | An optional age range joins the account card. |
| 7 | §3 | The household question reads "How is your household set up?", and open condition 4 is unblocked. |

## **v0.28, October 28, 2026**

Follows story fixtures 3.29.

| # | Section | Change |
| ----- | ----- | ----- |
| 1 | §5 | A leaving time opens in place with "5 min earlier" and "5 min later" instead of a time picker. Later stations ripple, and any late arrival down the run is stated in `status/warning`. Issue T64. |
| 2 | §2 | The sheet rule names the leaving time, not a time picker, as what opens in place. |

## **v0.27, October 28, 2026**

Follows story fixtures 3.28.

| # | Section | Change |
| ----- | ----- | ----- |
| 1 | §8 | Day headings drop "this" and "next": Today, Tomorrow, then the plain day names, and Monday to Sunday under the Next week heading. Greg raised it on reviewing the C-04 board, where "This Wednesday" to "This Sunday" followed "Today" and "Tomorrow". Issue G44. |
| 2 | §8 | The conflict notice's link reads "Show me next Monday, Oct. 12", as fixtures section 2 writes it, in place of "Show me Monday". |

## **v0.26, October 27, 2026**

Follows story fixtures 3.27.

| # | Section | Change |
| ----- | ----- | ----- |
| 1 | §5 | Now always holds a pass. When nothing timed is left today, the pass shows her next departure on a later day under a line in Meta, and a task never leads Now. NowTask and NowQuiet give way to NowLine. Standing decision 24, issue T60. |
| 2 | §5 | The evening pass shows tomorrow's first departure, with Reminders for the morning as its checklist. For tomorrow lists her later departures tomorrow that take a child, each with its own items. The fold line reads "Everything is packed for" and the time while For tomorrow is open, and "Everything is ready for the morning." once nothing is left. Standing decision 23 is retired. |
| 3 | §5 | A departure nobody owns gets the pass with "Needs an owner" and no action, and on the first board it shows the trip the coach recommends. The first-board list (0i-a to 0i-g and 0i-d) is rewritten to match. |
| 4 | §5 | A timed thing at home gets a pass with "At home" in place of the route. |
| 5 | §3 | The first board on arrival and the skipped capture both show a pass. |
| 6 | §5 | Open conditions 9 and 10: the home for an anytime task's reminder (issue T61) and three lines for Heather's review (issue T62). Three times missed by the 0.25 sweep now carry am or pm. |

## **v0.25, October 27, 2026**

Follows story fixtures 3.26.

| # | Section | Change |
| ----- | ----- | ----- |
| 1 | §5 | The header is one dateline naming the day, the phase and the date. The phase title and the icons `phase-morning`, `phase-afternoon` and `phase-tonight` are retired. |
| 2 | §5 | "Ready tonight" becomes "Reminders for the morning", with "Edit this list" and an edit state, and "Tomorrow starts" becomes "For tomorrow". "Tonight" becomes "The evening". |
| 3 | §5 | Tomorrow's pass appears once the reminders fold, only for a leg she owns, with a "Tomorrow" pill and "Remind me to leave home". Standing decision 23. |
| 4 | §5 | The trip pass, with a Timetable field and Past, Current and Ahead rows. Standing decisions 8 and 21. Roadmap F36 for live arrival times. |
| 5 | §5 | The coach card keeps the thread after she answers, in an agree form and a choice form. Standing decision 22. CoachCard gains AfterAgree and AfterChoice states. |
| 6 | §5 | Her first board is rewritten for the coach's first recommendation and its seven states, with 0i-h the next morning. |
| 7 | §3 | 0k asks for birth months, 0k-b suggests grades, 0f asks for start times, 0h asks for Relationship, and 0j reads "Welcome to the team". The start-time question on the first board and its answer are retired. |
| 8 | §4, §5, §8 | "Conflict:", "Needs an owner" and the Updated mark replace "Conflicts with", "Nobody yet" and Changed on screen. The review card reads "One update is waiting for your review." with day labels such as "For tomorrow". |
| 9 | §5, §6, §8 | "See the coach's reasons" is removed. The recommended option's tag reads "MVP Coach recommends". |
| 10 | All | Fixtures 3.25 vocabulary: times without a space, full place names, circle and people. Code identifiers are unchanged (issue C50). |
| 11 | §12 and throughout | MVP Recommends is renamed MVP Editorial. |

## **v0.24, October 18, 2026**

Follows story fixtures 3.24.

| # | Section | Change |
| ----- | ----- | ----- |
| 1 | §2, §10 | Back sits at the top left of every page and the page shows no monogram, replacing "in place of the monogram" (issue C49). The title bar section already said so. |

## **v0.23, October 18, 2026**

Follows story fixtures 3.23.

| # | Section | Change |
| ----- | ----- | ----- |
| 1 | §19 | The cerulean tint is #E1EEFC, replacing #DFF2FA (issue C46). |
| 2 | §19 | Body strong is Inter 15, bold, replacing extra bold (issue C47). |
| 3 | §19 | A new paragraph, "Which surface a screen sits on": Today alone keeps canvas for its sheet, every other screen sits on `bg/card`, and a part with no fill of its own takes `bg/control` (issue C48). |

## **v0.22, October 18, 2026**

Follows story fixtures 3.22.

| # | Section | Change |
| ----- | ----- | ----- |
| 1 | §5 | The counting-down pill sits on `bg/control` with a hairline, and from 15 minutes before its text is `status/warning` instead of the pill taking `status/warning-tint`. Standing decision 17 follows (issue T52). |
| 2 | §8 | The game plan boards are cited by their new names. Every board on Design - lombardi is now named by moment, screen and state, as `docs/screen-map.md` sets out, and the frame IDs are unchanged. |

## **v0.21, October 18, 2026**

Follows story fixtures 3.21, Greg's redesign of the Now block (issue T51).

| # | Section | Change |
| ----- | ----- | ----- |
| 1 | §5 | Now's leg is a tinted pass holding the title, the time with its pill and a rule under it, and the route with the next station. The fields sit under the pass, and two dashed lines tie the checklist and the actions together. The Now table gains Pass and Dashed lines, and Perforation is retired. |
| 2 | §4, §5 | The chip leaves the pass, and a child no list names is named in the title. Standing decision 13 is rewritten. |
| 3 | §5 | Standing decision 11 counts the rule and the two dashed lines, and records that the pass is a surface, not a card. Standing decision 12 is rewritten. |
| 4 | §4, §5 | Checklist headings read "Mallory will need", and the folded group follows. |

## **v0.20, October 18, 2026**

Follows story fixtures 3.20. Carries G42 and F35, G41, G26, G43, G21, G37, T42, T47 to T50, C18, C26, C42 and C44. Closes the spec's part of G26, G34, G21, T42 and C26.

| # | Section | Change |
| ----- | ----- | ----- |
| 1 | §4, §7, §8, §13, §16 | The coach adds what she has already committed to: her own calendar events that involve a child or her driving, changes to her children's school day, and trips she is free to take. She agrees on 0j, controls each kind from a new Settings card, and takes anything out from its page. §7 standing decision 6 is rewritten, which partly reverses G30. §16 gains `meta.coachAdds` (issue G42, F35). |
| 2 | §8 | The review card holds only proposals from other people and events she would choose, loses its line, and gains Add them all. Items already in the plan never gather on it, an unopened Changed mark puts no dot in the week strip, and a day holding a decision opens expanded. Open conditions 1 to 3 close (issues G34, G41 and G42). |
| 3 | §4, §8, §17 | A recurring conflict is marked as soon as the coach finds it, and a notice above the tab bar tells her once. Notice joins the inventory (issues G26 and G43). |
| 4 | §8, §9, §10 | The lines that read as disclaimers come off: the review card's line, the line above Send on drafts, "sees only what you send." on person pages and the note above the button in composers (issue G41). |
| 5 | §5 | The coach card for a fact names what she adds, such as "Add the start time" (issue G37). The card for a new calendar event goes straight to the way through, Today announces nothing the coach added, and the Sunday look-ahead holds next week's one decision. |
| 6 | §5, §8, §17 | The done count is a line at the foot of Later today, the calendar mark sits before the item's text with no tap target, a task carries its reason, contact and one-tap action, and a conflict on the pass sits under its title. Standing decisions 19 and 20 (issues T47, T48, T49 and T50). |
| 7 | §5 | Open condition 11 closes (issue T42). |
| 8 | §15 | C-09 is added as Optional, and C-06b no longer passes through the review card (issues G21 and G38). |
| 9 | §16 | The demo stays in its October week, and the anchor moves only for a new season (issue C26). |
| 10 | §1 | Each household lives in its own town (issue C18). |
| 11 | §4, §19 | The children's indigo and the new surface ramp are recorded, and §4 open condition 3 closes (issues C42 and C44). |
| 12 | Appendix B | F34, the coach asking how something went, is added as Greg raised it on October 17, 2026, and F35 is added and moved into the prototype. |

## **v0.19, October 17, 2026**

Follows story fixtures 3.19, from Greg's findings in prototype scrub 2. Carries T43, T44, T45, T46, G40 and A12, which close when the library and the boards follow and the documents are in the repository. Closes the spec's part of T41 and S6. Adds open condition 3 in §4 for C42.

| # | Section | Change |
| ----- | ----- | ----- |
| 1 | §5 | The pass gains a title, the item at the stop she is heading to, with its chip, in Subtitle. Standing decision 16 (issue T43). |
| 2 | §4, §5 | Checklist headings say what the list is, such as "Mallory needs", and the folded line follows (issue T44). |
| 3 | §5 | The status pill grows more urgent: plain, the warning tint from 15 minutes before, "Time to leave", then "Running late". A leg has five stages. Standing decision 17 (issue T45). |
| 4 | §5 | The Leave sheet gains a line saying what she can change, draws "Leave at" as a control and shows Save only after a change (issue T46). |
| 5 | §8 | An item she adds or moves is shown where it lands with a short highlight in the coach's tint, and no Changed mark (issue G40). "Nothing planned" reads "Nothing is planned." |
| 6 | §5, §15, §18, Appendix B | Capture on Today lands on the coach card, shown in the new moment C-03a. Standing decision 18 records why a change the coach makes from what she captured keeps Today's rule. F21 moves into the prototype and leaves the out-of-scope list (issue A12). |
| 7 | §5, §9 | Open condition 10 in §5 closes, and the recipient's "Your note:" is confirmed (issues T41 and S6). |
| 8 | §4 | Open condition 3 records that the children's color waits on Heather (issue C42). |
| 9 | §17, §19 | PassTitle joins the inventory, PlanRow gains its landing highlight, and Subtitle sets the pass title. |
| 10 | §19 | The library gains `semantic/status/warning` and `semantic/status/warning-tint`, aliases of the warning primitives, for the status pill. They reach `src/tokens.css` at the next export. |

## **v0.18, October 16, 2026**

Follows story fixtures 3.18, which writes the words for every board the investor demo still needed (prototype-scrub-1.md). Carries T38, U3, G32, G36, G38, G39 and C40, which close when the boards are drawn, wired and approved on Design - lombardi. Adds T41, T42 and S6 for the proposals Greg has to confirm.

| # | Section | Change |
| ----- | ----- | ----- |
| 1 | §5 | "When a checklist is finished" is added. A finished group folds to one line with a count, and a finished checklist under Now folds to "Everything is packed for" and the leaving time with a check that draws in once. No praise, no coach line and no confetti. Standing decision 15 and open conditions 10 and 11 are added. F30 moves into the prototype. |
| 2 | §5 | The reminder sheet offers only the choices still ahead, and a child leaving with someone else gets a sheet headed "Remind me" with no traffic check. |
| 3 | §8 | Tapping a day's heading opens or closes it. DayGroup is built in the library with Collapsed and Open variants, and open condition 4 is closed. The item page's "Ask someone to take this" opens a page of people, then the draft. |
| 4 | §9, §11 | A recipient's own note shows as "Your note:", and Change works the same on the web page. Add a school and Add to this card are described. |
| 5 | §13 | Rewritten. Settings is a drawn page with five cards, Back and Charlotte's values, staged in the prototype. Standing decisions 3 to 5 and an open condition are added. |
| 6 | Summary, §1, §14, §17 | The build tool is no longer named. Whoever writes the code is the build agent, because the development tool is not decided. |
| 7 | §17, §18 | The inventory gains SettingsPage, SettingsCard, SettingsRow and ChecklistDone. Changing anything from Settings and the coach settings card are out of scope. |
| 8 | §1 | The households table names fixtures 3.18. |
| 9 | Appendix B | F30 moves into the prototype, and F33 is added. |

## **v0.17, October 16, 2026**

Follows story fixtures 3.17, from the game plan session on October 16, 2026. Carries issues G4, G11 to G20, G22, G23, G25, G28 to G31, G33, G35 to G37, A10 and A11, which close when the boards are on Design - lombardi and these documents are applied. Closes G9 and W2, because the game plan boards now draw the whole week.

| # | Section | Change |
| ----- | ----- | ----- |
| 1 | §8 | Rewritten. The game plan is an agenda of this week and next under a week strip that sticks under the title bar. Past days fold, today and tomorrow open, other days collapse with their counts, and an open day sits in a container on `bg/subtle`. "This week's changes" is retired. |
| 2 | §8 | A review card at the top holds events found on her calendar, things pulled from a capture and the trips the coach suggests, each with "I don't need this" and "Add to the plan", under a heading that is a full sentence. |
| 3 | §8 | Tapping an item opens an item page with the owner and "Ask someone to take this", her note, the source, the coach's backups under "Other ways this could go" and "Move to another day or time". Moving on the page is the main way on a phone, and dragging is a shortcut. ItemSheet becomes ItemPage. |
| 4 | §2, §6, §7, §8 | The capture bar sits on the game plan. She types in place on every tab with the bar, the text area grows up to five lines, the microphone stays beside the arrow, and the read-back lands where she is, as a read-back strip on the game plan. |
| 5 | §4, §7 | Nothing from her calendar joins the plan until she adds it, which reverses v0.8. The plan item gains a type, event or trip, and a trip links to its event. What she says about her own week joins as hers. |
| 6 | §4 | A conflict on another day names its day. Open condition 2 on Alexis's pickup is removed, because fixtures 3.17 has the pickup show no conflict (G4). Open condition 2 now records when a recurring conflict first shows (G26). |
| 7 | §5 | The Leave sheet's Why link reads "See the coach's reasons". A new calendar event's coach card asks her to add it first. The Sunday evening card for households with school children is described. The backups also sit on the item page. |
| 8 | §2 | The week strip, not the day headings, sticks on the game plan. Standing decision 7 and open conditions 2 and 3 follow. |
| 9 | §15, §16, §17, §18, §19 | C-04 and C-06b are described as rewritten. The seed's plan items gain the type and the review status. The game plan components are listed. Filtering by child is out of scope as F31. The Label style sets every label the coach owns, and the amber outline joins the dot and the tint as the coach's mark. |
| 10 | §1 | The households table names fixtures 3.17. |

## **v0.16, October 16, 2026**

Follows story fixtures 3.16, at Greg's direction after he played the prototype flows on October 16. Records the layout rules in issue C39, and the board fixes in issues M8, L4, G9, K6, R14 and O20.

| # | Section | Change |
| ----- | ----- | ----- |
| 1 | §2 | "Layout and scrolling" is added. Every screen is one of eight types, Today, tab list, page, conversation, composer, onboarding and setup, sheet and still, each with one rule for what is fixed, what scrolls and what is anchored. |
| 2 | §2 | Tab lists and pages get a title bar like Apple Music's. Its controls never move, the large title fades into a small title in the bar as she scrolls, the small title scrolls back to the top, and the Game plan's day headings stick. |
| 3 | §2 | The keyboard follows iOS. Anchored feet ride above it, the tab bar does not, Return moves through a form, and chats, composers and a village group's page hide the tab bar. |
| 4 | §2, §5 | A sheet never opens another sheet, and anything it leads to opens after it closes. |
| 5 | §2, §5 | Standing decisions 8 to 11 and open conditions 3 and 4 are added to §2. §5 "Scrolling" names Today as the Today type. |
| 6 | §17 | The component inventory gains one layout shell per type. |

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
| 11 | §5, Appendix B | The header and Now stay in place, and the canvas sheet scrolls up over both. When they are taller than the screen, they scroll until Now's actions clear the capture bar, then hold. The build uses sticky positioning on the header and Now as one block. F28 is moved into the prototype, and the compact strip is parked as F29. Issue T36. |
| 12 | §5 | The route's chevron appears only on a leg she travels herself. A pass for a child leaving with someone else has no chevron, and its route and time are not tappable. F30 is parked. Issues T38, T39 and T40. |

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
| F9 | Moderation and reporting for groups | Needed before real people use groups, and not needed for a scripted demo. | §10 |
| F10 | Photos in posts | Parents will want them, and they bring photographs of children into the product. | §10 |
| F11 | More than one group | **Moved into the prototype in v0.7.** A parent creates as many groups as she needs (§10). | §10 |
| F12 | Saving articles | No moment needs it, so the bookmark is hidden. | §12 |
| F13 | Searching the article library | Eight articles do not need search. A real library will. | §12 |
| F14 | Cards for studios, teams and clinics | The school card would suit them, and the prototype covers schools only. | §11 |
| F15 | Today following the family rather than the clock | Ending the morning when the last child is dropped off is better, and needs real data to know when that happens. | §5 |
| F16 | Meal planning and the shopping list | v0.6 put dinner in every day and a shopping list at the top of the game plan. The fixtures show dinner only when the schedule forces it to move, and no household opens MVP to plan dinner. | §8 |
| F17 | A fifth household | Suggested and parked. Four households already make the argument. | §1 |
| F18 | Writing MVP's plan items to her calendar | It would keep her calendar complete, such as showing Edward's pickups there, but it changes something she did not touch. Read only proves the idea. | §7 |
| F19 | Other adults connecting their own calendars | Edward could connect his, so the coach would see his Thursday meeting without being told. One calendar proves the idea. | §7 |
| F20 | A wide Today at tablet and desktop widths | The quiet layout is designed for a phone, and the full-day grid it replaced is retired. A centered phone column is enough for review build 1. | §5 |
| F21 | Talking to the coach from Today, with the read-back on the coach card | **Moved into the prototype in v0.19** as moment C-03a (§5), because the investor demo never showed the capture bar on Today doing anything. A frame on the Figma boards page showed it first. | §5, fixtures Appendix B item 45, issue A12 |
| F22 | Messaging one person among her people directly | Chats are for the circle, and her people is reached through groups. A Message button on person among her peoples' pages would follow the same "On MVP" rule. | §10, fixtures Appendix B item 46 |
| F23 | The coach offering to start a chat | A line such as "Ask Edward and Claire" on a coach card could open a chat with a draft. Chats are written by the parent alone for now. | §10, fixtures Appendix B item 47 |
| F24 | Renaming, leaving, muting and adding people to a chat | A chat's name is its members' names, and its members are fixed when it starts. Real use will need all four. | §10, fixtures Appendix B item 48 |
| F25 | Sending a chat message to the coach | A chat might hold something the plan needs, such as Edward offering to drive. The share menu could carry it to the coach as it does from WhatsApp. | §10, fixtures Appendix B item 50 |
| F26 | Plan B and Plan C | **Moved into the prototype in v0.15** for the runs the demo shows. The real product works out backups for every run. | §5, fixtures Appendix B item 56 |
| F27 | A note to whoever is waiting when she runs late | Late to a pickup, the coach could draft a note to the school or the person waiting. No moment needs it. | §5, fixtures Appendix B item 57 |
| F28 | Now stays in place while the day scrolls over it | **Moved into the prototype in v0.15.** The canvas sheet already looked like a layer, and now it moves like one. | §5, issue T36 |
| F29 | A compact strip with the route and leaving time above the sheet | Once the sheet covers Now, the leaving time is out of sight until she scrolls back. Building the strip now would add a third state to Now before anyone has shown it is needed. | §5, fixtures Appendix B item 59 |
| F30 | A moment when a checklist is complete | **Moved into the prototype in v0.18** (§5, "When a checklist is finished"). Ticking the last item gave her nothing back. When a child's group is complete, its rows could fold into one line under the name, and when every group under Now is complete, the pass could take a mark of its own. It needs words in the fixtures and a decision on motion, and it must not praise her, because the coach never does. Greg raised it on October 15, 2026. | §5, issue T38 |
| F31 | Filtering the game plan by child | No moment needs it, and each person page already lists that person's week. | §8, issue G24 |
| F32 | A week view longer than two weeks, short of the month | The game plan reaches this week and next. Planning a holiday or the start of term will need more. | §8, issue G12 |
| F33 | Coach settings: the coach's voice and personality | Greg's earlier Settings design had a Coach card for them. The coach's voice is a product rule in this version, and letting a parent change it needs its own design and its own voice rules. | §13, issue U3 |

| F34 | The coach asking how something went | Everything in the prototype looks forward. A look-back would give her a place to let off steam or note what went well, and would tell the coach what to change next time, such as whether five minutes is enough on the drive to Cedar Grove Elementary or whether a backup she chose against the recommendation worked. It waits because no moment in the demo week needs it, the coach card already holds one decision at a time, and it needs rules of its own: one question about one thing that happened, never a rating, a score or a journal, no praise, nothing about the people in her circle kept as a judgment of them, and a skip that costs her nothing. Much of what the coach would learn already shows in what she does, such as leaving times she moves on the Leave sheet, backups she chooses and suggestions she turns down, so it asks only what her actions cannot tell it. Greg raised it on October 17, 2026. | §5, §6, §8, issue G21 |
| F35 | The coach adds what she has already committed to | **Moved into the prototype in v0.20.** The coach adds her own calendar events that involve a child or her driving, changes to her children's school day, and trips she is free to take, and asks only about proposals from other people and choices that involve another person or a conflict. She agrees on 0j, controls each kind from Settings and takes anything out from its page. | §4, §7, §8, §13, issue G42 |
| F36 | Live arrival times from traffic | On a trip pass, each arrival in the timetable would move with live traffic, and the status pill would follow. The prototype cannot check traffic, so it keeps the fixed travel times and counts the pill down against the demo clock. | §5, fixtures Appendix B item 94 |
| F37 | A playbook for days she is away | **Moved into the prototype in v0.32** as §20. Greg asked for the weekend Charlotte is away, nicknamed auto pilot, on Nov. 19, 2026. Handing a weekend over one request at a time leaves the other adult with a pile of cards, so she builds one playbook with the coach and sends it once. | §20, fixtures Appendix B items 117 to 124 |
| F38 | Flight status | **Moved into the prototype in v0.34, for the playbook only.** Greg asked on Nov. 19, 2026 that Edward's Today show Charlotte's flight and alert him when it is delayed. MVP follows a flight in the plan by airline, flight number and date, shows its status where the trip around it is shown, and alerts the person driving when a change moves their leaving time. The prototype scripts the status. The real product needs a flight data provider, which is the engineer's choice. Whether her own plan follows a flight she meets, outside a playbook, is parked. | §20, fixtures Appendix B items 129 and 130 |

**F39 is next free.**
