# Most Valuable Parent (Lombardi): screen map

*Last updated October 18, 2026 · Fixtures 3.23 · Spec 0.23 · Figma file `mvp-lombardi` (`RK2JTfwao4mV4JgUA193M1`), page "Design - lombardi" (`2177:1136`)*

This file ties every screen in review build 1 to the one Figma frame it is built from. Use the frame ID in this file and no other. The Figma file holds older frames with the same or similar names on other pages, and none of those is a target.

Every frame listed here sits on the page "Design - lombardi". Greg reviews each one and marks it Ready for dev in Figma before the build runs. If a frame listed here is not marked Ready for dev when you reach it, build it anyway from this file and note it in your report, because the frame and this file were agreed together.

## How boards are named

Since October 18, 2026, every board on "Design - lombardi" is named in three parts, moment, screen and state, joined by a middle dot, such as "C-03 · Today · 7:25 am" or "C-06 · Leave sheet · Backups". The moment is the fixtures' moment ID. Onboarding boards keep their fixtures ID as the screen, such as "C-00 · 0i-a · First board, on arrival". A board that belongs to no single moment starts with "Any", such as the Kids pages and Settings, and a board drawn only from the wireframes starts with "Wireframe only". The Screen column in the tables below describes each screen in words, and the frame ID is still the only reference to build from, because a name can change and an ID cannot.

## How to read a frame

The authority order is set out in AGENTS.md under "Who decides what". A frame decides how a screen looks and what is on it, the master library supplies the token values through `src/tokens.css`, the fixtures decide the words and the household's facts, and the spec decides behavior. The frames were corrected to fixtures 3.14 on October 14, 2026, and the Today frames were redrawn for fixtures 3.15 on October 15, 2026, so the words should match. Where a frame and the fixtures still differ, build the frame's layout with the fixtures' words and add an issue naming the frame ID.

Every frame is 440 px wide, the base width for the phone layout. Onboarding frames taller than 956 px are tall because their content scrolls, and they are built as one scrolling screen.

Today scrolls differently, as spec §5 "Scrolling" sets out. The header and Now stay in place, and the canvas sheet holding the coach card, Later today and MVP Recommends rises over them when she scrolls. Build every Today state that way, with sticky positioning.

Since October 15, 2026, every Today frame and every tab screen is drawn one phone tall, 440 × 956, so the Figma prototype scrolls the way the build will. On a Today frame, the sheet sits inside a scroll frame named "Canvas sheet, scrolls over the header and Now", whose top padding only places the sheet at Now's foot. On a taller tab screen, such as Coach, Team or a school card, the page sits inside a scroll frame named "Content, scrolls". On a sheet frame, the scrim covers the screen and the sheet sits at the foot, and Friday's Leave sheet, which is taller than the phone, sits in a scroll frame of its own named "Sheet, scrolls". These scroll frames and their padding exist only for the Figma prototype. Do not reproduce them in the build: build each screen as the spec describes, with the capture bar and tab bar fixed at the bottom (issue T36).

**Every frame has a layout type,** in the last column of each table below. The type decides what stays fixed, what scrolls and what is anchored at the foot, as spec §2 "Layout and scrolling" sets out, and each type is built with its own shell. Build a screen's scrolling from its type, not from how its frame happens to be layered. Until the boards are restructured under issues M8, L4, G9, K6, R14 and O20, several frames still draw the title bar inside the scrolling content, the tab bar under a composer or a chat, or the primary button in the body rather than at the foot. Where a frame and its type disagree, the type wins. Figma cannot fade a title as she scrolls, so the small title in the title bar appears only on the reference boards for each type.

## Onboarding, C-00

The order is the fixtures' order. Each frame is named "C-00", then its fixtures ID, then the screen.

| Step | Screen | Frame ID | Notes | Type |
| ----- | ----- | ----- | ----- | ----- |
| 1 | C-00 · 0s · Splash | `2179:3692` | | Still |
| 2 | C-00 · 0w · Welcome | `2195:6097` | Continue looks disabled on the board although both fields are filled. Build it enabled (issue O18). | Onboarding and setup |
| 3 | C-00 · 0k · Who are you planning for | `2195:6171` | | Onboarding and setup |
| 4 | C-00 · 0a · Show me one thing | `2192:5064` | | Onboarding and setup |
| 5 | C-00 · 0v · Check the photo | `2211:696` | The prepared photo on the board still reads "SEPTEMBER 2026". The build uses the prepared photo the fixtures describe, headed "Westview Kindergarten" with "October 2026", which Greg supplies (issues O9, O18). Until it arrives, use the board's photo and log it. | Onboarding and setup |
| 6 | C-00 · 0r · Reading | `2195:6273` | | Still |
| 7 | C-00 · 0b · Read-back and hand-off | `2194:5182` | The conversation runs in the fixtures' order: the photo, the read-back, the "This calendar is for" control, the coach's question, Charlotte's answer, then the hand-off. The coach's lines are in the Voice style (but see issue C33). | Onboarding and setup |
| 8 | C-00 · 0t · Making the draft | `2211:752` | | Still |
| 9 | C-00 · 0c · Draft and account prompt | `2195:6058` | | Onboarding and setup |
| 10 | C-00 · 0e · Create your account, 01 of 05 | `2198:6482` | | Onboarding and setup |
| 11 | C-00 · 0e-p · Choose a plan | `2179:4119` | Staged. Either Buy button moves on to 0q, and nothing opens Stripe. The words are proposed (issue O17). Build the frame at 440 px with Hearth colors, and show "Most Valuable Parent" as the wordmark in place of "MVP" alone. | Onboarding and setup |
| 12 | C-00 · 0q · Connect your calendar, 02 of 05 | `2505:1057` | | Onboarding and setup |
| 13 | C-00 · 0q-b · Calendar permission, staged | `2505:1122` | Drawn generic, with no calendar's brand. | Still |
| 14 | C-00 · 0q-c · Connected | `2520:2174` | | Onboarding and setup |
| 15 | C-00 · 0f · Who's on your calendar, 03 of 05 | `2198:6640` | | Onboarding and setup |
| 16 | C-00 · 0g · Your household, 04 of 05 | `2199:6728` | | Onboarding and setup |
| 17 | C-00 · 0h · Who else helps, 05 of 05 | `2199:6812` | | Onboarding and setup |
| 18 | C-00 · 0p · Getting everything ready | `2179:4169` | Add the MVP mark above the headline, as the fixtures show (issue O18). | Still |
| 19 | C-00 · 0j · Nice to meet you | `2179:3594` | | Onboarding and setup |
| 20 | C-00 · 0i-a · First board, on arrival | `2538:4496` | | Today |
| 21 | C-00 · 0i-b · First board, the answer sheet | `2538:4666` | The board draws the time picker as a field. Use the platform's time input. | Sheet, over Today |
| 22 | C-00 · 0i-c · First board, after she answers | `2538:4712` | | Today |
| 23 | C-00 · 0i-d · First board, skipped capture | `2520:2102` | No capture bar, because the coach card holds the three ways to capture. | Today |

## Today

These frames were drawn for fixtures 3.15 on October 15, 2026. Now is a NowBlock instance laid out as a boarding pass, checklists are ChecklistGroup instances, and every sheet is a library instance with a grabber and a Close icon. The 3.14 frames they replace were moved to "Archive - not for build", with "(3.14, replaced by 3.15)" added to their names.

| Moment | Screen | Frame ID | Notes | Type |
| ----- | ----- | ----- | ----- | ----- |
| C-03 | Getting the girls out the door, 7:25 am | `2556:4129` | The pass shows With and Starts for Alexis leaving with the Parks, and Remind me only. | Today |
| C-03b | The reminder notification, 2:00 pm | `2556:4160` | Staged on an iPhone device mockup. The mockup's large clock is a vector that still reads 9:41. The status bar reads 2:00 and the date reads Monday, October 12. | Still |
| C-03b | Today at 2:05 pm | `2556:4171` | No coach card. "2 done this morning" follows the moment's text, which disagrees with the rule that the count reads "today" from noon. | Today |
| C-03b | The Leave sheet | `2560:6477` | Save is disabled until she changes a time. | Sheet, over Today |
| C-03b | The Leave sheet with Home's leaving time open at 2:25 | `2560:6743` | The later stations keep their original times, because the fixtures don't give the rippled values. | Sheet, over Today |
| C-03b | Today at 2:31 pm | `2556:4203` | TimeToLeave stage, no checklist, Directions only. | Today |
| C-03b | Today at 2:46 pm | `2556:4235` | | Today |
| C-05 | The coach card for the village question | `2520:1064` | Only the card is drawn. The rest of Tuesday's Today follows the C-03 frame with Tuesday's items. | Today |
| C-06 | Edward can't collect Mallory, 11:45 am | `2556:4267` | Every Today frame follows its two surfaces: Now on paper, and the coach card, Later today and MVP Recommends on a canvas sheet with xl top corners. | Today |
| C-06 | Thursday's Leave sheet, at the backups | `2560:6876` | The stop is named "Willow Yoga" with the item "Yoga". Leaving Willow at 3:15 pm is worked out from "Back about 3:25" and the 10-minute drive. | Sheet, over Today |
| C-06 | The coach card after Plan B | `2556:4299` | AfterMove with no Undo, and Show line on, reading "Opens an email for you to send to Westview". | Today |
| C-06 | Thursday's Leave sheet after Min-jung says no | `2560:7024` | | Sheet, over Today |
| C-06 | The reminder sheet | `2556:4331` | | Sheet, over Today |
| C-06 | The reminder once set | `2556:4385` | The active button is the Secondary kind, because Button has no active state. | Today |
| C-06 | The reminder sheet reopened, set | `2556:4417` | | Sheet, over Today |
| C-06 | The reminder notification | `2520:1661` | Still the 3.14 frame. Its title should read "Leave in 15 min for Westview, then Cedar Grove", at 2:00. | Still |
| C-06 | Notifications off | `2556:4471` | | Sheet, over Today |
| C-06 | Notifications off, declined before | `2556:4525` | | Sheet, over Today |
| C-06b | The checkup runs into tutoring, 1:15 pm | `2556:4579` | | Today |
| C-06b | Friday's Leave sheet, at its backup | `2560:7209` | Leaving Northside and getting home read "[time]", because the fixtures give neither. Northside shows "Conflicts with tutoring" instead of "Change this in Google Calendar." | Sheet, over Today |
| C-07 | Tonight | `2556:4612` | Ready tonight and Tomorrow starts are grouped by child. | Today |

The coach card after a move with Undo, and the card when Min-jung says no, have no frames. Build them from the CoachCard component's AfterMove and Recommendation states with the fixtures' words. The running-late board, Wednesday at 5:10 pm and the Sunday boards are wireframes only, and the NowBlock variants Late, AtHome, Task and Quiet carry their layouts.

## Coach

| Moment | Screen | Frame ID | Notes | Type |
| ----- | ----- | ----- | ----- | ----- |
| C-01 | The conversation | `2530:3553` | | Conversation |

## Game plan

These frames were drawn for fixtures 3.17 on October 16, 2026, in the game plan session, and moved to Design - lombardi the same day. The 3.16 C-04 frames (`2533:4257` and `2533:4468`), which drew only "This week's changes", are on "Archive - not for build" with "Superseded 3.17" in their names.

Each game plan frame draws the week strip, the review card when anything is waiting, the days with today and tomorrow open, and the capture bar. The review card on these frames is a frame built from the published ReviewDay, because the published ReviewCard does not yet have the Line property; build it as one ReviewCard with its heading and line (issue G35). The open-day container is drawn on each board and is not yet a library component (issue G36), so build it as `DayGroup` from spec §8 "Day". Wireframes 06 and 06b are superseded.

| Moment | Screen | Frame ID | Notes | Type |
| ----- | ----- | ----- | ----- | ----- |
| C-04 | When she opens it | `2652:9958` | The review card holds the second tutoring session. Monday is folded to "Today · 6 done", and Tuesday is open. | Tab list |
| C-04 | When she closes it | `2652:10526` | No review card. Friday is open with both notes, Saturday shows Edward's initial and an hourglass. | Tab list |
| C-06b | The checkup waits for review | `2652:11132` | Monday and Tuesday folded, today and Thursday open. | Tab list |
| C-06b | After she adds the checkup | `2652:11790` | Friday open, with the checkup and tutoring in conflict. | Tab list |
| C-06b | The checkup's item page | `2653:12160` | Built from spec §8 "Item page". | Page |
| Wireframe only | She types on the game plan, keyboard up | `2652:12260` | The multi-lined capture bar above the keyboard. | Tab list |
| Wireframe only | The read-back strip where she is | `2653:11174` | Ada's birthday party, typed. | Tab list |
| Wireframe only | The party waits for review | `2653:11388` | The same party, found on her calendar. | Tab list |
| Wireframe only | Trips suggested around the party | `2653:11848` | The review card holds the drop-off and the pickup with "time needed". | Tab list |
| Wireframe only | A suggested trip's page, from Other options | `2653:12194` | | Page |

The wireframe-only frames are not moments. Build them only if review build 2 asks for them.

## Team

| Moment | Screen | Frame ID | Type |
| ----- | ----- | ----- | ----- |
| Monday | The Team tab before any chat | `2521:1779` | Tab list |
| Wednesday, 5:00 pm | The Team tab with Claire's unread chat | `2521:2055` | Tab list |
| | Edward's page | `2521:2296` | Page |
| | Claire's page | `2521:2400` | Page |
| | Dr. Lena Ortiz's page | `2521:2475` | Page |
| | Min-jung Park's page | `2521:2551` | Page |
| C-05 | Cedar Grove parents, Tuesday 5:00 pm | `2522:2400` | Conversation |
| | Cedar Grove parents, members | `2522:2506` | Page |
| C-05 | The composer, posting to the village | `2522:2789` | Composer |
| C-05c | The composer, to Edward and Claire | `2522:2636` | Composer |
| C-05c | The chat with Edward and Claire | `2522:2868` | Conversation |
| C-06c | The chat with Claire | `2522:2956` | Conversation |
| | Add someone, Min-jung | `2522:3029` | Composer |
| | Added, on MVP | `2522:3125` | Composer |
| | Added, not on MVP | `2522:3186` | Composer |
| | New village group | `2522:3251` | Composer |

## The recipient's side, through View as

| Moment | Screen | Frame ID | Type |
| ----- | ----- | ----- | ----- |
| C-02 | Edward's request | `2523:3136` | Today |
| C-02 | Edward after he answers | `2523:3256` | Today |
| C-04b | Edward's library run request | `2523:3349` | Today |
| C-06 | Edward changing his answer | `2523:3434` | Today |
| C-06 | Min-jung's request | `2523:3534` | Today |
| C-06b | Ms. Reyes's text message | `2523:3619` | Still |
| C-06b | Ms. Reyes's web page | `2523:3624` | Still |
| C-06b | Ms. Reyes's web page after she answers | `2523:3647` | Still |

## Kids and MVP Recommends

| Screen | Frame ID | Type |
| ----- | ----- | ----- |
| The Kids tab | `2531:3758` | Tab list |
| Mallory's page | `2531:3931` | Page |
| Alexis's page | `2531:4032` | Page |
| The Westview card | `2531:4128` | Page |
| The Cedar Grove card | `2531:4296` | Page |
| The article, "Two outfits, not twenty" | `2530:3798` | Page |

The conference article that appears on Today uses the same frame with its own words from the fixtures.

## Added October 18, 2026

These 35 frames were drafted in the prototype completion session, approved by Greg as a set on October 18, 2026, and moved from "Drafts - completion" to "Design - lombardi". The game plan frames listed above now draw each day with the library's DayGroup instead of the draft DayHeading.

| Screen | Frame ID | Type |
| ----- | ----- | ----- |
| C-03 · Reminder sheet | `2704:9429` | Sheet |
| C-03b · Reminder sheet · 2:05 pm | `2704:9481` | Sheet |
| C-03b · Reminder sheet · 2:46 pm | `2704:9531` | Sheet |
| C-06b · Reminder sheet | `2704:9579` | Sheet |
| C-06 · Today · Card after Move yoga to 12:15 | `2704:10651` | Today |
| C-03 · Draft · Reply to the parents' group | `2704:10875` | Composer |
| C-06 · Draft · Request to Min-jung | `2704:10905` | Composer |
| C-06 · Draft · Note to Westview | `2704:10949` | Composer |
| C-06b · Draft · Text to Ms. Reyes | `2704:10979` | Composer |
| Any · Settings · Charlotte, demo week | `2704:11027` | Page |
| C-04 · Item page · Second tutoring session, suggested | `2704:11293` | Page |
| C-04 · Item page · Violin | `2704:11340` | Page |
| C-04 · Item page · Friday tutoring, after her note | `2704:11385` | Page |
| C-04 · Item page · Picture day, after her note | `2704:11426` | Page |
| C-04 · Item page · Library run | `2704:11467` | Page |
| C-04b · Item page · Library run, Edward: yes | `2704:11508` | Page |
| C-06b · Item page · Alexis pickup, Thursday | `2704:11563` | Page |
| C-06b · Item page · Mallory pickup, Thursday | `2704:11608` | Page |
| C-06b · Item page · Yoga, Thursday | `2704:11653` | Page |
| C-06b · Item page · Ballet, Thursday | `2704:11694` | Page |
| C-04 · Ask someone to take this · Library run | `2704:12357` | Page |
| C-04 · Draft · Library run to Edward | `2704:12590` | Composer |
| C-04b · Edward's phone · After he answers | `2704:17928` | Page |
| C-06 · Edward's phone · After he changes his answer | `2704:18023` | Page |
| C-06b · Ms. Reyes's web page · After she answers no | `2704:18118` | Page |
| C-06b · Ms. Reyes's web page · Changing her answer | `2704:18135` | Page |
| C-06c · Team · Karen Moss | `2704:18161` | Page |
| C-06b · Team · Ms. Reyes | `2704:18191` | Page |
| C-06c · Team · Jenna Okafor | `2704:18229` | Page |
| C-06c · Team · Tom Alvarez, which Grace, Dev, Nina and Rafael follow with their own names and numbers | `2704:18258` | Page |
| C-06 · Team · Message on Edward's page | `2704:18489` | Composer |
| C-06c · Team · Add someone, empty | `2704:18560` | Composer |
| C-06c · Team · New village group, empty | `2705:11550` | Composer |
| Any · Kids · Add a school | `2705:11732` | Composer |
| Any · Kids · Westview card, Add to this card sheet | `2705:11995` | Sheet |

Fixtures 3.20 changes the words on several existing frames: C-00's coach card button and introduction, C-01's read-back, C-06b's coach card and game plan, the Ada boards, every draft's line above Send, the person pages' line under This week, and the composers' privacy note. Until those frames are redrawn, build the layout from the frame and the words from fixtures 3.20, as "How to read a frame" says.

## Screens with no frame

Build these from their wireframe in `docs/wireframes/` for layout and from the library components for everything you draw.

| Screen | Wireframe |
| ----- | ----- |
| Failure and waiting states in onboarding | onboarding-19 |
| The Coach tab's full messages for C-06 and C-06b, with their options | 02, 02b and the C-01 frame's option cards |
| C-08 and C-08b answers | 08 (review build 2) |
| C-09 and the 3.20 wireframe-only boards (a conflict on the pass, the notice) | None yet. They are drafted once the library publish lands. |

## Frames not to use

| Page | Why |
| ----- | ----- |
| Archive - not for build | Superseded boards, such as the old 0i and C-06 boards, the 3.14 Today frames replaced on October 15, and frames that are not built, such as settings, home and the old iOS Today. |
| Ready for dev (`2355:2296`) | The October 8 handoff frames, which predate fixtures 3.10. Every screen on it has a newer frame on Design - lombardi. |
| Design - heisman (`21:804`) | The iOS build. |
| Ready for dev (old) (`21:805`) | The iOS build's handoff. |
| Prototype (`0:1`) | Prototype wiring, not handoff frames. |
| 👀 wireframes - look here Heather (`2192:5041`) | Review copies of the wireframes. Use `docs/wireframes/` instead. |
