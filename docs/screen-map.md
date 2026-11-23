# Most Valuable Parent (Lombardi): screen map

*Last updated November 23, 2026 · Fixtures 3.53 · Spec 0.54 · Figma file `mvp-lombardi` (`RK2JTfwao4mV4JgUA193M1`), page "Design - lombardi · post-review" (`2853:11893`)*

This file ties every screen in the alpha to the one Figma frame it is built from. Use the frame ID in this file and no other. The Figma file holds older frames with the same or similar names on other pages, and none of those is a target.

Every frame listed here sits on the page "Design - lombardi · post-review", which holds every change made after Heather's first wording pass on October 27, 2026. Its frames are clones of the frames on "Design - lombardi" (`2177:1136`), with the same names and new IDs, and that page is now the untouched baseline from before the review, so nothing on it is a build target. Greg reviews each one and marks it Ready for dev in Figma before the build runs. If a frame listed here is not marked Ready for dev when you reach it, build it anyway from this file and note it in your report, because the frame and this file were agreed together.

## How boards are named

Since October 18, 2026, every board is named in three parts, moment, screen and state, joined by a middle dot, such as "C-03 · Today · 7:25 am" or "C-06 · Leave sheet · Backups". The moment is the fixtures' moment ID. Onboarding boards keep their fixtures ID as the screen, such as "C-00 · 0i-a · First board, on arrival". A board that belongs to no single moment starts with "Any", such as the Kids pages and Settings, and a board drawn only from the wireframes starts with "Wireframe only". The Screen column in the tables below describes each screen in words, and the frame ID is still the only reference to build from, because a name can change and an ID cannot.

## How to read a frame

The authority order is set out in AGENTS.md under "Who decides what". A frame decides how a screen looks and what is on it, the master library supplies the token values through `src/tokens.css`, the fixtures decide the words and the household's facts, and the spec decides behavior. The frames were corrected to fixtures 3.14 on October 14, 2026, and the Today frames were redrawn for fixtures 3.15 on October 15, 2026, so the words should match. Where a frame and the fixtures still differ, build the frame's layout with the fixtures' words and add an issue naming the frame ID.

Every frame is 440 px wide, the base width for the phone layout. Onboarding frames taller than 956 px are tall because their content scrolls, and they are built as one scrolling screen.

Today scrolls differently, as spec §5 "Scrolling" sets out. The header and Now stay in place, and the canvas sheet holding the coach card, Later today and MVP Editorial rises over them when she scrolls. In the evening, tomorrow's pass and its reminders stay in place the same way. Build every Today state that way, with sticky positioning.

Since October 15, 2026, every Today frame and every tab screen is drawn one phone tall, 440 × 956, so the Figma prototype scrolls the way the build will. On a Today frame, the sheet sits inside a scroll frame named "Canvas sheet, scrolls over the header and Now", whose top padding only places the sheet at Now's foot. On a taller tab screen, such as Coach, Team or a school card, the page sits inside a scroll frame named "Content, scrolls". On a sheet frame, the scrim covers the screen and the sheet sits at the foot, and Friday's Leave sheet, which is taller than the phone, sits in a scroll frame of its own named "Sheet, scrolls". These scroll frames and their padding exist only for the Figma prototype. Do not reproduce them in the build: build each screen as the spec describes, with the capture bar and tab bar fixed at the bottom (issue T36).

**Every frame has a layout type,** in the last column of each table below. The type decides what stays fixed, what scrolls and what is anchored at the foot, as spec §2 "Layout and scrolling" sets out, and each type is built with its own shell. Build a screen's scrolling from its type, not from how its frame happens to be layered. Until the boards are restructured under issues M8, L4, G9, K6, R14 and O20, several frames still draw the title bar inside the scrolling content, the tab bar under a composer or a chat, or the primary button in the body rather than at the foot. Where a frame and its type disagree, the type wins. Figma cannot fade a title as she scrolls, so the small title in the title bar appears only on the reference boards for each type.

## Onboarding, C-00

The order is the fixtures' order. Each frame is named "C-00", then its fixtures ID, then the screen.

| Step | Screen | Frame ID | Notes | Type |
| ----- | ----- | ----- | ----- | ----- |
| 1 | C-00 · 0s · Splash | `2853:12205` | | Still |
| 2 | C-00 · 0w · Welcome | `2853:12929` | Continue looks disabled on the board although both fields are filled. Build it enabled (issue O18). | Onboarding and setup |
| 3 | C-00 · 0k · Who are you planning for | `2853:12050` | Asks for each child's first name and birth month and year. | Onboarding and setup |
| 3b | C-00 · 0k-b · The coach suggests grades | `2858:11639` | Each grade is a list box with a chevron. | Onboarding and setup |
| 3c | C-00 · 0k-c · Grade list open | `2863:11708` | Alexis's list open over Mallory's field, with Fourth grade selected. | Onboarding and setup |
| 4 | C-00 · 0a · Show me one thing | `2853:11894` | | Onboarding and setup |
| 5 | C-00 · 0v · Check the photo | `2853:11916` | The prepared photo on the board still reads "SEPTEMBER 2026". The build uses the prepared photo the fixtures describe, headed "Westview Kindergarten" with "October 2026", which Greg supplies (issues O9, O18). Until it arrives, use the board's photo and log it. | Onboarding and setup |
| 6 | C-00 · 0r · Reading | `2853:11922` | One set of dots under the headline, drawn with the library's ThinkingDots, whose three steps show the pulse (O27). | Still |
| 7 | C-00 · 0b · Read-back and hand-off | `2853:11972` | The conversation runs in the fixtures' order: the photo, the read-back, the "Whose calendar is this?" control, the coach's question, Charlotte's answer, then the hand-off. The coach's lines are in the Voice style (but see issue C33). | Onboarding and setup |
| 8 | C-00 · 0t · Making the draft | `2853:11947` | The same dots as 0r (O27). | Still |
| 9 | C-00 · 0c · Draft and account prompt | `2853:12011` | | Onboarding and setup |
| 10 | C-00 · 0e · Create your account, 01 of 05 | `2853:12979` | The counter reads 01 of 04 since fixtures 3.46 (issue G46). | Onboarding and setup |
| 11 | C-00 · 0e-p · Choose a plan | `2853:12857` | Staged. Either Buy button moves on to 0q, and nothing opens Stripe. The words are proposed (issue O17). Build the frame at 440 px with Hearth colors, and show "Most Valuable Parent" as the wordmark in place of "MVP" alone. | Onboarding and setup |
| 12 | C-00 · 0q · Connect your calendar, 02 of 05 | `2853:13014` | The counter reads 02 of 04 since fixtures 3.46 (issue G46). | Onboarding and setup |
| 13 | C-00 · 0q-b · Calendar permission, staged | `2853:13034` | Drawn generic, with no calendar's brand. | Still |
| 14 | C-00 · 0q-c · Connected | `2853:13176` | | Onboarding and setup |
| 15 | C-00 · 0f · Who's on your calendar, 03 of 05 | `2853:13052` | Since fixtures 3.46 the heading reads "Where do they go to school?" and the counter 03 of 04 (issues O11 and G46). | Onboarding and setup |
| 16 | Draft · C-00 · 0g · Your household and who helps | `3088:12922` | Greg approved the combined screen on November 20, 2026 (issue O22). Build 0g from this frame, with the counter 04 of 04, and build no 0h. `2853:13080` and `2853:13105` are superseded and move to the archive in step 5. | Onboarding and setup |
| 18 | C-00 · 0p · Getting everything ready | `2853:12907` | Add the MVP mark above the headline, as the fixtures show (issue O18). | Still |
| 19 | C-00 · 0j · Welcome to the team | `2853:12168` | | Onboarding and setup |
| 20 | C-00 · 0i-a · First board, on arrival | `2853:13795` | The coach card recommends "Take both girls at 7:40am". Out of date since fixtures 3.27: the board needs the trip pass marked "Needs an owner", with the reminders as its checklist (issue T63). Mallory's reminders are ReminderItem instances from the library (issue C55). | Today |
| 21 | C-00 · 0i-b · First board, other options | `2853:13818` | The Leave sheet scrolled to Plan B, "Make two trips". There is no Plan C. | Sheet, over Today |
| 22 | C-00 · 0i-c · First board, after she accepts | `2853:13853` | The card after she agrees, a detached copy of CoachCard (issue C51). Out of date since fixtures 3.27: the pass above the card with "Tomorrow" and Remind me to leave home is missing (issue T63). | Today |
| 23 | C-00 · 0i-d · First board, skipped capture | `2853:13158` | The card's first line reads "Your week is empty so far." since fixtures 3.46 (issues O23 and G46). No capture bar, because the coach card holds the three ways to capture. Out of date since fixtures 3.27: the pass for Alexis's 8:00am start, marked "Needs an owner", and Mallory's row under For tomorrow are missing (issue T63). | Today |
| 24 | C-00 · 0i-e · First board, editing the reminders | Retired | Retired on October 28, 2026, because each reminder carries its own remove button. The frame (`2863:11768`) is on "Archive - not for build". Do not build it. | |
| 25 | C-00 · 0i-f · First board, ready for the morning | `2875:11838` | The trip pass with its timetable, a detached copy of NowBlock (issue C51). For tomorrow is hidden. The coach card sits below the fold. Out of date since fixtures 3.27: the folded reminders move from above the pass to inside it, under the timetable (issue T63). | Today |
| 26 | C-00 · 0i-g · First board, after she picks Plan B | `2879:11944` | The card after she chooses another option, a detached copy of CoachCard (issue C51). Out of date since fixtures 3.27: the board needs the single-leg pass for 7:40am, with Mallory's reminders moved to the 8:15am row (issue T63). | Today |
| 27 | C-00 · 0i-h · Next morning, between drop-offs | `2885:12004` | Tuesday, Oct. 6 at 8:05am. The trip pass during the trip, with the stops behind her muted. The board stays inside C-00 with no moment ID, and since fixtures 3.46 its sheet holds Later today with Tuesday's afternoon routine, which the frame does not show yet (issues T53 and G46). | Today |
| 27a | C-00 · 0i-i · First board, after removing a reminder | `2936:11688` | A copy of 0i-a with Lunchbox removed, scrolled to the reminders, and the Notice with Undo above the capture bar. The notice reads "Lunchbox is off Mallory's list for tonight." The choice that comes before it is 0i-k. | Today |
| 27c | C-00 · 0i-k · First board, choosing how long to remove a reminder | `2982:12542` | A copy of 0i-i, scrolled to the reminders, with Lunchbox back in the list in ReminderItem's Choosing state, asking Just tonight or Every night, and no notice. Comes between 0i-a and 0i-i. | Today |
| 27b | C-00 · 0i-j · First board, adding a reminder | `2936:11828` | A copy of 0i-a with a new row in ReminderItem's New state, the placeholder "What else does Mallory need?", the keyboard up, and the page scrolled so the row sits above the keyboard. | Today |

## Today

These frames were drawn for fixtures 3.15 on October 15, 2026. Now is a NowBlock instance laid out as a boarding pass, checklists are ReminderGroup instances since October 29, 2026 (see below), and every sheet is a library instance with a grabber and a Close icon. The 3.14 frames they replace were moved to "Archive - not for build", with "(3.14, replaced by 3.15)" added to their names.

| Moment | Screen | Frame ID | Notes | Type |
| ----- | ----- | ----- | ----- | ----- |
| C-03 | Getting the girls out the door, 7:25 am | `2853:13876` | The pass shows With and Starts for Alexis leaving with the Parks, and Remind me only. | Today |
| C-03b | The reminder notification, 2:00 pm | `2853:13901` | Staged on an iPhone device mockup. The mockup's large clock is a vector that still reads 9:41. The status bar reads 2:00 and the date reads Monday, October 12. | Still |
| C-03b | Today at 2:05 pm | `2853:13912` | No coach card. "2 done this morning" follows the moment's text, which disagrees with the rule that the count reads "today" from noon. | Today |
| C-03b | The Leave sheet | `2853:13934` | Save is hidden until she changes a time. Home's leaving time opens `2955:12152`. | Sheet, over Today |
| Wireframe only | The Leave sheet with Home's leaving time open at 2:15pm | `2955:12152` | The time tinted, "5 min earlier" and "5 min later", and the "You reach" line. Save hidden. "5 min later" opens `2853:13958`, skipping 2:20pm. The sheet shell stays detached for its instruction line and Save, and since November 19, 2026 its stations are RouteStation instances from the library, Home in Editing=true (issue T64). | Sheet, over Today |
| Wireframe only | The Leave sheet after she moves Home to 2:25pm | `2853:13958` | Westview Kindergarten's leaving time ripples to 2:35pm, and Home and Cedar Grove Elementary carry the "You reach" line in `status/warning`. Save shows and opens `2955:12440`. "5 min earlier" goes back to `2955:12152`. Redrawn on October 28, 2026. The sheet shell stays detached for its instruction line and Save, and since November 19, 2026 its stations are RouteStation instances: Home in Editing=true, Late=true and Cedar Grove Elementary in Late=true (issue T64). | Sheet, over Today |
| Wireframe only | Today after she saves 2:25pm | `2955:12440` | The pass reads 2:25pm, "in 19 min" and Arrive 2:35pm with the PassFields Late variant. The pass's taps are unwired, because the reopened sheet has no board. | Today |
| C-03b | Today at 2:31 pm | `2853:13982` | TimeToLeave stage, no checklist, Directions only. | Today |
| C-03b | Today at 2:46 pm | `2853:14003` | | Today |
| C-05 | The coach card for the therapist question | `2853:13145` | Only the card is drawn. The rest of Tuesday's Today follows the C-03 frame with Tuesday's items. | Today |
| C-06 | Edward can't collect Mallory, 11:45 am | `2853:14023` | Every Today frame follows its two surfaces: Now on paper, and the coach card, Later today and MVP Editorial on a canvas sheet with xl top corners. | Today |
| C-06 | Thursday's Leave sheet, at the backups | `2853:14046` | The stop is named "Willow Yoga" with the item "Yoga". Leaving Willow at 3:15 pm is worked out from "Back around 3:25pm" and the 10-minute drive. | Sheet, over Today |
| C-06 | The coach card after Plan B | `2853:14071` | The card after she chooses another option: the yoga recommendation in muted ink and the Plan B line she chose beside the check. A detached copy of CoachCard (issue C51), with no Undo, because the request to Min-jung has gone. | Today |
| C-06 | Thursday's Leave sheet after Min-jung says no | `2853:14094` | | Sheet, over Today |
| C-06 | The reminder sheet | `2853:14119` | | Sheet, over Today |
| C-06 | The reminder once set | `2853:14144` | The active button is the Secondary kind, because Button has no active state. | Today |
| C-06 | The reminder sheet reopened, set | `2853:14167` | | Sheet, over Today |
| C-06 | The reminder notification | `2853:13147` | Still the 3.14 frame. Its title should read "Leave in 15 min for Westview, then Cedar Grove", at 2:00. | Still |
| C-06 | Notifications off | `2853:14192` | | Sheet, over Today |
| C-06 | Notifications off, declined before | `2853:14217` | | Sheet, over Today |
| C-06b | The checkup runs into tutoring, 1:15 pm | `2853:14242` | | Today |
| C-06b | Friday's Leave sheet, at its backup | `2853:14265` | Draws one run, the checkup's: home at 3:10pm, Northside Pediatrics at 3:30pm with "Conflict: tutoring", leaving at 4:15pm, and home around 4:30pm (T87). | Sheet, over Today |
| C-07 | The evening, getting ready for Thursday | `2853:14291` | Redrawn for fixtures 3.27 with the 6:55am pass for Alexis. Since November 19, 2026 the frame scrolls as one page, in "Page, scrolls as one", with For tomorrow directly under Now, so the 8:15am and 3:55pm rows can be reached (fixtures item 114, issue P2). Its reminders read as fixtures 3.30 writes them. |

The in-app notification that shows when someone answers or replies has two frames, both drawn on the C-03 Today frame with the library's Notice at the top and its link turned off (A14). Each frame carries a note asking whether the notice slides or fades in, which decides whether it gets a Motion row.

| Moment | Screen | Frame ID | Notes | Type |
| ----- | ----- | ----- | ----- | ----- |
| Any | Notification · Answer | `3232:15681` | "Edward: yes to both pickups this Thursday." | Today |
| Any | Notification · Message | `3232:15888` | "Claire: Yes, see you at 6:30. I'll bring dessert." | Today |

The coach card after a move with Undo, and the card when Min-jung says no, have no frames. Build them from the CoachCard component's AfterMove and Recommendation states with the fixtures' words. The running-late board, Wednesday at 5:10 pm and the Sunday boards are wireframes only. Since fixtures 3.27 each of them leads with a pass, so the NowBlock variants Task and Quiet are retired, AtHome gains the pass with "At home" in place of the route, and the Sunday boards show Monday's 7:40am pass (issue T63).

## Coach

| Moment | Screen | Frame ID | Notes | Type |
| ----- | ----- | ----- | ----- | ----- |
| C-01 | Share · The message | `3232:15558` | Jenna Okafor's message in the parents' group chat at 5:50am, drawn as a neutral messaging app with no real app's branding (A13). | Still |
| C-01 | Share · Forward | `3232:15582` | The message pressed and held, with its menu open on Forward. | Still |
| C-01 | Share · Selected | `3232:15610` | The message selected, with the share button. | Still |
| C-01 | Share · Share sheet | `3232:15640` | The phone's share sheet, with Most Valuable Parent among the apps. "Sent to the coach" and the conversation follow. | Still |
| C-01 | The conversation | `2853:13617` | | Conversation |

## Game plan

These frames were drawn for fixtures 3.17 on October 16, 2026, in the game plan session, and moved to Design - lombardi the same day. The 3.16 C-04 frames (`2533:4257` and `2533:4468`), which drew only "This week's changes", are on "Archive - not for build" with "Superseded 3.17" in their names.

On October 28, 2026, the day headings on these frames dropped "This", so they read "Wednesday" to "Sunday" after "Today" and "Tomorrow", and the review card's day labels on `2853:14381`, `2853:14559` and the party-review board gained "For", as in "For this Friday" (issue G44).

Each game plan frame draws the week strip, the review card when anything is waiting, the days with today and tomorrow open, and the capture bar. The review card on these frames is a frame built from the published ReviewDay, because the published ReviewCard does not yet have the Line property; build it as one ReviewCard with its heading and line (issue G35). The open-day container is drawn on each board and is not yet a library component (issue G36), so build it as `DayGroup` from spec §8 "Day". Wireframes 06 and 06b are superseded.

| Moment | Screen | Frame ID | Notes | Type |
| ----- | ----- | ----- | ----- | ----- |
| C-04 | When she opens it | `2853:14327` | The review card holds the second tutoring session. Monday is folded to "Today · 6 done", and Tuesday is open. | Tab list |
| C-04 | When she closes it | `2853:14356` | No review card. Friday is open with both notes, Saturday shows Edward's initial and an hourglass. | Tab list |
| C-06b | The checkup waits for review | `2853:14381` | Monday and Tuesday folded, today and Thursday open. | Tab list |
| C-06b | After she adds the checkup | `2853:14409` | Friday open, with the checkup and tutoring in conflict. | Tab list |
| C-06b | The checkup's item page | `2853:14433` | Built from spec §8 "Item page". | Page |
| Wireframe only | She types on the game plan, keyboard up | `2853:14467` | The multi-lined capture bar above the keyboard. | Tab list |
| Wireframe only | The read-back strip where she is | `2853:14504` | Ada's birthday party, typed. | Tab list |
| Wireframe only | The party waits for review | `2853:14535` | The same party, found on her calendar. | Tab list |
| Wireframe only | Trips suggested around the party | `2853:14559` | The review card holds the drop-off and the pickup with "time needed". | Tab list |
| Wireframe only | A suggested trip's page, from Other options | `2853:14585` | | Page |

The wireframe-only frames are not moments. Build them only if the backlog asks for them.

## Team

| Moment | Screen | Frame ID | Type |
| ----- | ----- | ----- | ----- |
| Monday | The Team tab before any chat | `2853:13188` | Tab list |
| Wednesday, 5:00 pm | The Team tab with Claire's unread chat | `2853:13221` | Tab list |
| | Edward's page | `2853:13256` | Page |
| | Claire's page | `2853:13286` | Page |
| | Dr. Lena Ortiz's page | `2853:13311` | Page |
| | Min-jung Park's page | `2853:13327` | Page |
| C-05 | Cedar Grove parents, Tuesday 5:00 pm | `2853:13352` | Conversation |
| | Cedar Grove parents, members | `2853:13371` | Page |
| C-05 | The composer, posting to her parent group | `2853:13410` | Composer |
| C-05c | The composer, to Edward and Claire | `2853:13388` | Composer |
| C-05c | The chat with Edward and Claire | `2853:13424` | Conversation |
| C-06c | The chat with Claire | `2853:13442` | Conversation |
| | Add someone, Min-jung | `2853:13456` | Composer |
| | Added, on MVP | `2853:13470` | Composer |
| | Added, not on MVP | `2853:13479` | Composer |
| | New group | `2853:13489` | Composer |

## The recipient's side, through View as

| Moment | Screen | Frame ID | Type |
| ----- | ----- | ----- | ----- |
| C-02 | Edward's request | `2853:13508` | Today |
| C-02 | Edward after he answers | `2853:13527` | Today |
| C-04b | Edward's library run request | `2853:13541` | Today |
| C-06 | Edward changing his answer | `2853:13559` | Today |
| C-06 | Min-jung's request | `2853:13578` | Today |
| C-06b | Ms. Reyes's text message | `2853:13596` | Still |
| C-06b | Ms. Reyes's web page | `2853:13601` | Still |
| C-06b | Ms. Reyes's web page after she answers | `2853:13611` | Still |

## Kids and MVP Editorial

| Screen | Frame ID | Type |
| ----- | ----- | ----- |
| The Kids tab | `2853:13654` | Tab list |
| Mallory's page | `2853:13673` | Page |
| Alexis's page | `2853:13691` | Page |
| The Westview card | `2853:13711` | Page |
| The Cedar Grove card | `2853:13761` | Page |
| The article, withdrawn until an approved article arrives (issue R15) | `2853:13636` | Page |

The article frame shows placeholder lines in place of the withdrawn byline and body, and no MVP Editorial card links to it. Build the article view's layout from it, and show no article in a presented demo until the approved articles arrive (fixtures section "MVP Editorial for Charlotte", issue R15).

## Added October 18, 2026

These 35 frames were drafted in the prototype completion session, approved by Greg as a set on October 18, 2026, and moved from "Drafts - completion" to "Design - lombardi". The game plan frames listed above now draw each day with the library's DayGroup instead of the draft DayHeading.

| Screen | Frame ID | Type |
| ----- | ----- | ----- |
| C-03 · Reminder sheet | `2853:15259` | Sheet |
| C-03b · Reminder sheet · 2:05 pm | `2853:15285` | Sheet |
| C-03b · Reminder sheet · 2:46 pm | `2853:15309` | Sheet |
| C-06b · Reminder sheet | `2853:15331` | Sheet |
| C-06 · Today · Card after Move yoga to 12:15, the card after she agrees, a detached copy of CoachCard (issue C51) | `2853:15356` | Today |
| C-03 · Draft · Reply to the parents' group | `2853:15379` | Composer |
| C-06 · Draft · Request to Min-jung | `2853:15394` | Composer |
| C-06 · Draft · Note to Westview | `2853:15411` | Composer |
| C-06b · Draft · Text to Ms. Reyes | `2853:15426` | Composer |
| Any · Settings · Charlotte, demo week | `2853:15443` | Page |
| C-04 · Item page · Second tutoring session, suggested | `2853:15530` | Page |
| C-04 · Item page · Violin | `2853:15567` | Page |
| C-04 · Item page · Friday tutoring, after her note | `2853:15601` | Page |
| C-04 · Item page · Picture day, after her note | `2853:15635` | Page |
| C-04 · Item page · Library run | `2853:15669` | Page |
| C-04b · Item page · Library run, Edward: yes | `2853:15703` | Page |
| C-06b · Item page · Alexis pickup, Thursday | `2853:15739` | Page |
| C-06b · Item page · Mallory pickup, Thursday | `2853:15774` | Page |
| C-06b · Item page · Yoga, Thursday | `2853:15809` | Page |
| C-06b · Item page · Ballet, Thursday | `2853:15843` | Page |
| C-04 · Ask someone to take this · Library run | `2853:15877` | Page |
| C-04 · Draft · Library run to Edward | `2853:15905` | Composer |
| C-04b · Edward's phone · After he answers | `2853:15922` | Page |
| C-06 · Edward's phone · After he changes his answer | `2853:15938` | Page |
| C-06b · Ms. Reyes's web page · After she answers no | `2853:15954` | Page |
| C-06b · Ms. Reyes's web page · Changing her answer | `2853:15961` | Page |
| C-06c · Team · Karen Moss | `2853:15972` | Page |
| C-06b · Team · Ms. Reyes | `2853:15988` | Page |
| C-06c · Team · Jenna Okafor | `2853:16006` | Page |
| C-06c · Team · Tom Alvarez, which Grace, Dev, Nina and Rafael follow with their own names and numbers | `2853:16031` | Page |
| C-06 · Team · Message on Edward's page | `2853:16056` | Composer |
| C-06c · Team · Add someone, empty | `2853:16078` | Composer |
| C-06c · Team · New village group, empty | `2853:16092` | Composer |
| Any · Kids · Add a school | `2853:16112` | Composer |
| Any · Kids · Westview card, Add to this card sheet | `2853:16128` | Sheet |

On October 20, 2026, the words on every frame in this file were swept to fixtures 3.25: times carry am or pm with no space, days say which week they are in, places use their full names, text without a chip names the child as a parent would, departures name where she leaves from, and "inner circle" and "village" became "circle" and "people". The C-01 coach conversation, the C-06b coach card and the Ada boards, which still carried pre-3.20 wording, now carry the fixtures' words. Three things were left for the library or for Greg: the large departure time on the pass still sets am or pm at the same size as the number rather than smaller beside it, the request cards still lead their rows with the child's name as a label rather than the spoken form in the fixtures, and the C-06 reminder notification is still the 3.14 frame with Monday's date on the lock screen. Board names, which are for the team, still use the old time format. Where a frame and the fixtures still differ, build the layout from the frame and the words from the fixtures, as "How to read a frame" says.

On October 27, 2026, the file moved to the post-review page and every frame ID was repointed to its clone there. The words on those frames follow fixtures 3.26: the wording review's labels, the dateline with the phase of the day, Reminders for the morning and For tomorrow, the trip pass, and the coach card's two after-answer forms. Six frames on the post-review page use detached copies of CoachCard or NowBlock until the library has the states they need (issue C51): the cards on 0i-c, 0i-f, 0i-g and the two C-06 card frames, and the pass on 0i-f and 0i-h.

On October 27, 2026, later the same day, fixtures 3.27 set the rule that Today always has a pass at the top. Seven frames above and the boards for the wireframes only are marked out of date until they are redrawn (issue T63). Until then, build their layout from the frame and their words and pass from the fixtures.

On October 28, 2026, Greg made six changes to Now, which fixtures 3.31 and spec 0.30 describe. On every frame with a dateline, the phase icon sits before the dateline, which is set in Title. Every trip timetable marks its rows with StopMarker in place of dots. The evening reminders are headed "Reminders for tomorrow morning" in Subtitle, "Edit this list" is gone, and each reminder is a ReminderItem with its remove button, followed by "Add something else for" and the child's name. Later the same day every checklist on Today took the same rows, and her tasks use ReminderItem's Task kind. The Now pass on 22 frames is detached from NowBlock for it (issue C51), named "Now · pass (detached, issue C51)", and every Today frame's canvas sheet rests at Now's foot. The coach's dot is hidden on every capture bar on the page. 0i-e moved to the archive. StopMarker (`2926:12122`) and ReminderItem (`2926:12141`) are local components in the section "Local components · move to the library (issue C55)" (`2926:12097`) on this page, and each carries a description for the build. Later the same day both were built in `mvp-design-library` (StopMarker `355:1192`, ReminderItem `356:1228`, with a Choosing state), and the library's CaptureBar lost its dot. The frames swap to the library components once the library is published. The build takes its components from the library versions. On C-07, the 8:15am row under For tomorrow was hidden behind Now until November 19, 2026, when the frame began to scroll as one page. Since November 19, 2026 the frames use the library's StopMarker and ReminderItem, and the local section is gone.

On October 29, 2026, the checklist roll-up came back to the boards (issue T71). It had stopped working on October 28, when every checklist became a plain frame of ReminderItem rows. Each of those frames is now a ReminderGroup instance from mvp-design-library, on 29 frames: C-03 at 7:25am and its reminder sheet, every C-03b frame with a checklist and the three wireframe-only Leave sheet and Today frames, every C-06 and C-06b frame, C-07's pass and both For tomorrow departures, and 0i-a, 0i-b, 0i-c, 0i-g and 0i-i. On C-06 and C-06b, Alexis's group and her tasks are one instance, so the whole checklist can fold. Tapping any row in presentation mode ticks the next row from the top, a finished group folds to its line, and a finished checklist folds to its line, with the words from the fixtures: "Everything is packed for 7:40am" on C-03, "Everything is packed for 2:15pm" on C-03b and C-06b, "Everything is packed for 6:55am" on C-07's pass, and "Everything is ready for tomorrow morning." on the first board. 0i-j and 0i-k keep their plain frames, because they show the New and Choosing rows. Build the behavior from spec §5 "When a checklist is finished", not from the component, because the prototype cannot fold across two passes or change a group's count when a row is removed.

## Added November 19, 2026

Heather's second wording review (fixtures 3.30) was applied to the frames on November 19, 2026. The backups' heading reads "Backup plans" on 18 frames, every request received in MVP or on the web page opens with the sentence saying what Charlotte is asking and "Sent" and the time beneath it, the first board's coach card, Edward's Thursday request, the library request, Edward's note, the text to Ms. Reyes, the note to Westview Kindergarten, 0g's question and C-07's reminders carry Heather's words, the two Team tab frames hold one Team list with the circle first and a Circle tag on each circle member, and Settings has the age range row and reads "Billing · Manage billing". Settings is now one phone tall with its content in "Content, scrolls" (issue P11). Every StopMarker and ReminderItem on the page is the library's, and the local components section is gone (issue C55).

| Screen | Frame ID | Type |
| ----- | ----- | ----- |
| C-03 · Draft · Say you can't this week | `3088:12855` | Composer |
| Draft · C-00 · 0g · Your household and who helps. Approved by Greg on November 20, 2026 and the build target for 0g (issue O22, fixtures item 113) | `3088:12922` | Onboarding and setup |

## Starting point C: the weekend Charlotte is away

Redrawn to fixtures 3.48 and spec 0.47 on November 20, 2026 and approved by Greg the same day (issues Y19 and Y17). The frames were drafted on "Drafts - playbook 3.48" and moved to the post-review page, where they sit in one row below the demo-week boards under the label "Starting point C". They are build targets for spec §20 and fixtures C-10 to C-13 and C-15. The frames they replaced, drawn for fixtures 3.45, are on "Archive - not for build" under the label "Starting point C as drawn for fixtures 3.45", together with the retired C-14 frames, the flight alert and the Sunday airport pickup's page.

The journey is wired as the flow "C · The weekend Charlotte is away", which opens on C-10. The left and right arrow keys step through the main path, C-10 to the weekend summary, as on the demo-week boards, and each side board's arrows lead back to the board it came from. Each button that leads somewhere is linked. Four more flows open the side paths: "C · Edward looks over the weekend" (the notification), "C · If Charlotte hasn't talked to Ruth", "C · If Edward doesn't answer" and "C · Charlotte's first morning back". The jump screen lists C-10 to C-13 and C-15. Frames taller than 956 px are drawn full length for review, and in the build they scroll like any page.

Each playbook row with a Change link is still a detached copy of LaterTodayRow, now with its text filling the column beside the link (issue Y14). Each child's rows sit under the child's name, set as a checklist heading in Body strong in the children's indigo, and "Both" sits the same way. The contact row, the sheet's choice rows, the radio row and the state pill are local draft components on this page, `Draft · ContactRow` (`3098:13892`), `Draft · ChooseRow` (`3100:14552`), `Draft · RadioRow` (`3126:15741`) and `Draft · PlanStatus` (`3134:15701`), which move to the library under issue Y5. Single-choice sheets use RadioRow and the call list uses ChooseRow. The brand header and footer on Ruth's web page are cloned from the 0s splash art until the library has an MVP mark (issues Y5 and O18). Two coach-card side boards, "If Edward suggests a change" and "If Edward doesn't answer", are drawn on a copy of C-10, so their pass and For tomorrow are context and not part of the board. The C-10 coach card lacks its Meta line "Opens your game plan" until the CoachCard update is accepted in mvp-lombardi.

| Moment | Screen | Frame ID | Type |
| ----- | ----- | ----- | ----- |
| C-10 | Today, Monday evening, with the coach card that recommends a playbook | `3157:16234` | Today |
| C-11 | Sheet · Who should help while you are away?, with Edward chosen, and Make the playbook for Edward. Drawn over a copy of her playbook. | `3157:16276` | Sheet, over the page |
| C-11 | The weekend playbook as the coach drafts it, day by day and child by child, with the coach's box of suggestions and a Change link on each part suggested for Edward | `3157:16333` | Page |
| C-11 | Sheet · Who can Edward call for help?, with the coach's suggestions ticked, Ruth first | `3157:16436` | Sheet, over the page |
| C-11 | The weekend playbook after she chooses who Edward can call, with every number and its area code | `3157:16493` | Page |
| C-11 | Sheet · Sophie's birthday party at the Parks', with Give it to someone else, Move it to another time and Take it out of the playbook | `3157:16611` | Sheet, over the page |
| C-11 | Sheet · Who will take Alexis and Mallory to the party?, with Ruth chosen, Ruth already said yes and Send Ruth a text | `3157:16671` | Sheet, over the page |
| C-11 | The weekend playbook ready to send, with Ruth taking both girls to the party and the violin note taken out | `3157:16729` | Page |
| C-11 | Draft · the message asking Edward to look over the weekend | `3157:16838` | Composer |
| C-12 | Edward's phone · the notification "Charlotte asked you to look over this weekend." The lock screen's large clock still reads 9:41. | `3157:16855` | Still |
| C-12 | Edward's phone · Weekend playbook before he answers, with the banner, Charlotte's message, a card for each day, I'll take this, Suggest a change and Ask someone else on each part suggested for him, and I'll take all of it | `3157:16866` | Page |
| C-12 | Edward's phone · Weekend playbook after he answers, with "You have this weekend, from 10:00am this Friday.", Accepted, and If plans change as a plain section with its line and a Text Charlotte link, with no buttons, because Who to call holds the calls | `3160:16646` | Page |
| If Edward suggests a change | Edward's note to Charlotte, with the harvest fair quoted and the placeholder "What would work better?" | `3157:17043` | Composer |
| If Edward suggests a change | Charlotte's coach card quoting Edward, with Open the weekend playbook | `3157:17001` | Today |
| If Edward asks someone else | Sheet · Ask for backup, naming the harvest fair, with Ruth and Claire and Ask Claire, over Edward's view | `3157:17060` | Sheet, over the page |
| If Charlotte hasn't talked to Ruth | Draft · Request to Ruth Delgado, with the line saying Ruth gets a text from MVP with a link | `3157:17117` | Composer |
| If Charlotte hasn't talked to Ruth | The weekend playbook while Ruth is asked, with the party marked Asked Ruth | `3163:18091` | Page |
| If Charlotte hasn't talked to Ruth | Ruth's phone · the text with the link | `3106:15312` | Still |
| If Charlotte hasn't talked to Ruth | Ruth's web page · Ruth's list, with the brand header, Charlotte's message, and a card with the party, Yes, I can and No, I can't as radio rows, the note and Send | `3167:18251` | Still |
| If Charlotte hasn't talked to Ruth | Ruth's web page · Ruth chooses Yes, I can | `3167:19655` | Still |
| If Charlotte hasn't talked to Ruth | Ruth's web page · After she sends her answer, with If Edward calls, her answer with Change, and the question about adding the party to her calendar | `3167:18937` | Still |
| If Edward doesn't answer | Charlotte's coach card on Thursday evening, with Open the weekend playbook | `3157:17150` | Today |
| C-13 | Edward's Today, this Friday at 2:05pm, with the trip pass to the harvest fair | `3157:17192` | Today |
| C-15 | Today, Monday morning, with the weekend summary card | `3157:17319` | Today |
| C-15 | Your weekend, the summary in the Playbook view | `3157:17360` | Page |

## Screens with no frame

Build these from their wireframe in `docs/wireframes/` for layout and from the library components for everything you draw.

| Screen | Wireframe |
| ----- | ----- |
| Failure and waiting states in onboarding | onboarding-19 |
| The Coach tab's full messages for C-06 and C-06b, with their options | 02, 02b and the C-01 frame's option cards |
| C-08 and C-08b answers | 08 |
| C-09 and the 3.20 wireframe-only boards (a conflict on the pass, the notice) | None yet. They are drafted once the library publish lands, and C-09 leads with the 7:40am pass for Alexis with the Parks (fixtures 3.27). |

## Frames not to use

| Page | Why |
| ----- | ----- |
| Archive - not for build | Superseded boards, such as the old 0i and C-06 boards, the 3.14 Today frames replaced on October 15, and frames that are not built, such as settings, home and the old iOS Today. |
| Ready for dev (`2355:2296`) | The October 8 handoff frames, which predate fixtures 3.10. Every screen on it has a newer frame on Design - lombardi. |
| Design - heisman (`21:804`) | The iOS build. |
| Ready for dev (old) (`21:805`) | The iOS build's handoff. |
| Prototype (`0:1`) | Prototype wiring, not handoff frames. |
| 👀 wireframes - look here Heather (`2192:5041`) | Review copies of the wireframes. Use `docs/wireframes/` instead. |
