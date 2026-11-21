# Prototype pass 2: report

*MVP (Lombardi) · October 15, 2026 · File `mvp-lombardi` (`RK2JTfwao4mV4JgUA193M1`), page "Design - lombardi" (`2177:1136`)*

## Summary

The rest of the prototype is wired. Onboarding plays from the splash to her first board, the tab bar works on every Today board and every tab screen, the pages inside Team and Kids open and close with Back, and the recipient screens play as their own flows. The page now has twenty named flows. Every connection points to a frame in the screen map, and no frame moved, changed size or changed name in this pass.

The pass added 32 connections in onboarding, 136 tab connections, 57 page and row connections, and 6 recipient connections. It found three problems, now filed as O19, T37 and R13, and it replaced the old "heisman 1" flow on the splash with "C-00 · Onboarding, from the splash".

## How the connections behave

Moves between screens with different layouts, such as onboarding steps and tab changes, use Dissolve at 300 ms with ease out, because Smart Animate jumps when layers don't match. Moves within a moment, such as opening a sheet or answering a request, use Smart Animate at 300 ms with ease out. Every Back link uses Figma's Back action, so a page returns to wherever it was opened from rather than to a fixed board.

The tab bar uses each tab's name, so it works the same way on every board. The active tab is left unwired. From the tab screens, Today opens C-03 at 7:25 am, Monday's first Today board. From the Today boards, Coach opens C-01, Game plan opens C-04 as she opens it, Team opens the Monday Team tab, and Kids opens the Kids tab. Sheet boards are left alone, because their scrim covers the tab bar.

## Flows

| Flow | Starting frame |
| ----- | ----- |
| C-00 · Onboarding, from the splash | 0s Splash (`2179:3692`) |
| C-00 · Her first board, skipped capture | 0i-d (`2520:2102`) |
| C-01 · Coach, the conversation | C-01 Coach (`2530:3553`) |
| C-02 · Edward's request (View as) | 05c Edward's phone (`2523:3136`) |
| C-03 · Getting the girls out the door | C-03 · Today 7:25 am (`2556:4129`) |
| C-03b · The afternoon run | C-03b · Notification 2:00 pm (`2556:4160`) |
| C-04 · Game plan | C-04 as she opens it (`2533:4257`) |
| C-04b · Edward's library run (View as) | 05d (`2523:3349`) |
| C-06 · Edward can't collect Mallory | C-06 · Today 11:45 am (`2556:4267`) |
| C-06 · Edward changes his answer (View as) | 05e (`2523:3434`) |
| C-06 · Min-jung's request (View as) | 05f (`2523:3534`) |
| C-06 · If Min-jung says no | `2560:7024` |
| C-06 · Notifications off | `2556:4471` |
| C-06 · Notifications off, declined before | `2556:4525` |
| C-06b · The checkup runs into tutoring | C-06b · Today 1:15 pm (`2556:4579`) |
| C-06b · Ms. Reyes's text and web page | 02b the text (`2523:3619`) |
| C-07 · Tonight | `2556:4612` |
| Team, Monday | 10a (`2521:1779`) |
| Team, Wednesday at 5:00 pm | 10b (`2521:2055`) |
| Kids | 12a (`2531:3758`) |

## Connections

### C-00 onboarding

| From | Trigger | To | Transition |
| ----- | ----- | ----- | ----- |
| 0s Splash | After 2 seconds | 0w | Dissolve |
| 0w Continue (`2195:6136`) | Tap | 0k | Dissolve |
| 0k Continue (`2195:6190`) | Tap | 0a | Dissolve |
| 0a Take a photo (`2193:5135`) | Tap | 0v | Dissolve |
| 0v Use this photo (`2211:702`) | Tap | 0r | Dissolve |
| 0v Retake (`2211:703`) | Tap | 0a | Dissolve |
| 0r Reading | After 2 seconds | 0b | Dissolve |
| 0b Make Mallory's plan (`2212:828`) | Tap | 0t | Dissolve |
| 0t Making the draft | After 2 seconds | 0c | Dissolve |
| 0c Create account (`2197:6399`) | Tap | 0e | Dissolve |
| 0c Not now (`2197:6403`) | Tap | 0s, because leaving before the account starts over | Dissolve |
| 0e Continue, Sign up with Google and Continue with Apple (`2198:6548`, `2198:6590`, `2198:6597`) | Tap | 0e-p, staged | Dissolve |
| 0e-p both Buy buttons (`2179:4142`, `2179:4165`) | Tap | 0q, staged | Dissolve |
| 0q Google Calendar, Apple Calendar and Outlook (`2505:1071`, `2505:1100`, `2505:1103`) | Tap | 0q-b, which is drawn generic | Smart Animate |
| 0q Not now (`2505:1106`) | Tap | 0f | Dissolve |
| 0q-b Allow (`2505:1158`) | Tap | 0q-c | Smart Animate |
| 0q-b Cancel (`2505:1159`) | Tap | 0q | Smart Animate |
| 0q-c Continue (`2520:2242`) | Tap | 0f | Dissolve |
| 0f Continue (`2198:6654`) | Tap | 0g | Dissolve |
| 0g Continue (`2199:6760`) | Tap | 0h | Dissolve |
| 0h Done (`2199:6829`) | Tap | 0p | Dissolve |
| 0p Getting everything ready | After 4 seconds | 0j | Dissolve |
| 0j Next (`2179:3644`) | Tap | 0i-a | Dissolve |
| 0i-a Answer (`I2538:4591;218:279`) | Tap | 0i-b | Smart Animate, keeps scroll |
| 0i-b Save (`2538:4709`) | Tap | 0i-c | Smart Animate, keeps scroll |
| 0i-b scrim (`2538:4688`) | Tap | 0i-a | Smart Animate, keeps scroll |
| 0i-c Change the start time (`I2538:4741;218:311`) | Tap | 0i-b | Smart Animate, keeps scroll |

The timings follow spec §3: two seconds on each thinking screen and four on the getting ready screen. The splash moves on after two seconds because it has nothing to tap.

### Pages, rows and cards

| From | To |
| ----- | ----- |
| The Recommends card on C-03, C-03b at 2:05, 2:31 and 2:46, C-06 and C-06b | The article (`2530:3798`), which is the wrong article (issue R13) |
| Team, Monday: New message | Composer to Edward and Claire (`2522:2636`) |
| Team, Monday and Wednesday: Cedar Grove parents | The group (`2522:2400`) |
| Team, Monday and Wednesday: Edward, Dr. Lena Ortiz and Min-jung Park, and Claire on Monday | Their person pages |
| Team, Monday: Add someone, and New village group | Add someone (`2522:3029`), and New village group (`2522:3251`) |
| Team, Wednesday: the chat with Edward and Claire, and the chat with Claire | `2522:2868` and `2522:2956` |
| Claire's page: Message | The chat with Claire (`2522:2956`) |
| The group: See members, and New post | Members (`2522:2506`), and the village composer (`2522:2789`) |
| Members: Min-jung Park | Her page (`2521:2551`) |
| Village composer: Post | The group |
| Composer to Edward and Claire: Send | Their chat (`2522:2868`) |
| Add someone: Add | Added, on MVP (`2522:3125`) |
| Added on MVP: Done. Added not on MVP: Invite by text and Not now. New village group: Create group | The Monday Team tab |
| Kids: Alexis, Mallory, Westview and Cedar Grove | Alexis's page, Mallory's page, the Westview card and the Cedar Grove card |
| Mallory's school fact, and Alexis's school fact | The Westview card, and the Cedar Grove card |
| Back on every person page, the group, members, both composers, both chats, the four Add screens, both child pages, both school cards and the article | Back to wherever it was opened from |

### Recipient screens

| From | To | Transition |
| ----- | ----- | ----- |
| C-02 Edward's "I've got it" on either pickup | 05c after he answers (`2523:3256`) | Smart Animate |
| 05c after he answers: Change on Mallory's pickup | 05e, changing his answer (`2523:3434`) | Smart Animate |
| 05e Send answer (`2523:3529`) | Charlotte's C-06 Today at 11:45 (`2556:4267`) | Dissolve |
| Ms. Reyes's text message (`2523:3621`) | Her web page (`2523:3624`) | Dissolve |
| Ms. Reyes's "I've got it" | Her web page after she answers (`2523:3647`) | Smart Animate |

Answering either pickup on Edward's C-02 card jumps straight to the board where both are answered, because no frame shows one answer given. The jump from Edward's change of answer to Charlotte's C-06 Today is deliberate: it lets the presenter show his answer reaching her as the next step of the demo.

## Taps left unwired

| Board | Tap | What it would need |
| ----- | ----- | ----- |
| 0a | Attach a file, and Talk or type | Staged results for a file and a voice note, which no moment uses |
| 0b | The child chips | Nothing, because the confirmation is already made on the board |
| 0i-b | Close | The sheet has no Close icon (issue T37) |
| 0i-c | Open the game plan | A game plan board for Oct. 5, which doesn't exist. C-04 is Monday, Oct. 12. |
| 0i-d | Take a photo, Attach a file, and Talk or type | Capture frames for the skipped path |
| Every board | The monogram | A Settings placeholder frame (review build 2) |
| C-01 Coach | The option cards and the capture bar | The coach's follow-up after a choice, which has no frame |
| C-04 Game plan | Each changes row, and the move from "when she opens it" to "when she closes it" | Day views, which have no frames. The closed state is reached only from the canvas. |
| Edward's, Dr. Ortiz's and Min-jung's pages | Message and Call | A chat with Edward alone, which has no frame, and the staged phone app |
| The group and both chats | The reply and message fields | Nothing, because typing isn't staged |
| C-04b Edward, and C-06 Min-jung | "I've got it" and "I can't do this" | The cards after they answer, which have no frames |
| C-02 Edward | "I can't do this" | A declined state, which no moment uses |
| Today boards in the C-06 and C-06b flows | The Team tab | It opens the Monday Team tab. A Wednesday Today board could open the Wednesday Team tab instead, if Greg wants the tabs to follow the day. |

## Issues found

- **O19.** 0p still shows "79 %" beside its steps, although O6 was marked fixed.
- **T37.** The answer sheet on 0i-b predates the 3.15 sheet pattern and has no Close icon.
- **R13.** The only article frame is "Two outfits, not twenty", so the conference article on Today opens the wrong article in the prototype.

## Still to come

The other Today boards are restructured for the pinned Now under T36. Restructuring moves layers rather than redrawing them, so the connections from pass 1 and this pass carry over, and only the transitions between restructured and unrestructured boards need checking.
