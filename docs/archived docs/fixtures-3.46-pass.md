# Fixtures pass 3.46: Greg's decisions before the alpha

Greg agreed every recommendation on the decision sheet of November 20, 2026 (`decisions-2026-11-20.md`). This pass writes the ones that change the fixtures. Each change quotes the current text and gives the replacement. Version 3.45 is archived as story-fixtures-v3.45.md.

## Version line

Current:

```
*MVP (Lombardi) · Version 3.45 · November 19, 2026 · Charlotte and Edward only*
```

Replacement:

```
*MVP (Lombardi) · Version 3.46 · November 20, 2026 · Charlotte and Edward only*
```

Why: The version moves up one step for this pass.

## Section 2, Onboarding

Current:

```
In the second part she creates the account, connects her calendar and answers three short setup screens.
```

Replacement:

```
In the second part she creates the account, connects her calendar and answers two short setup screens.
```

Why: 0g and 0h become one screen (issue O22), so the setup screens after the calendar are the schools and the household.

## Section 2, the onboarding table

Current:

```
| 0e | Create your account: an email address or sign-in with Apple | Setup | 01 of 05 | No |
```

Replacement:

```
| 0e | Create your account: an email address or sign-in with Apple | Setup | 01 of 04 | No |
```

Why: Setup has four counted steps once 0g and 0h are one screen.

## Section 2, the onboarding table

Current:

```
| 0q | Connect your calendar: Google Calendar, Apple Calendar or Outlook | Setup | 02 of 05 | Not now, to 0f |
```

Replacement:

```
| 0q | Connect your calendar: Google Calendar, Apple Calendar or Outlook | Setup | 02 of 04 | Not now, to 0f |
```

Why: As above.

## Section 2, the onboarding table

Current:

```
| 0f | Who's on your calendar: each child's school and start time | Setup | 03 of 05 | No |
| 0g | Your household: household type and home language | Setup | 04 of 05 | No |
| 0h | Who else helps: the adults she counts on | Setup | 05 of 05 | No |
```

Replacement:

```
| 0f | Where do they go to school: each child's school and start time | Setup | 03 of 04 | No |
| 0g | Your household: household type, home language and the adults she counts on | Setup | 04 of 04 | No |
```

Why: The school screen's heading asks about schools, because it follows the calendar screen and the old heading read as the same question (issue O11). 0h folds into 0g (issue O22).

## Section 2, A child who comes along

Current:

```
**A child who comes along gets the group chip.** When Mallory rides along to Alexis's therapy or dance, the row carries "Both" and names the place rather than the activity, such as "[Both] Studio Ten Dance".
```

Replacement:

```
**A child who comes along carries no chip.** A chip says whose item it is, so when Mallory rides along to Alexis's therapy or dance, the row carries only Alexis's chip and its words say who comes along, such as "[Alexis] Studio Ten Dance, with Mallory". The group chip is kept for items that are for every child, such as a shared appointment, and the same reasoning keeps the chip off the airport pickup (Appendix B items 139 and 142).
```

Why: Greg decided on Nov. 20, 2026 that the airport pickup's reasoning applies here too, so one rule covers both (issue G45).

## Section 2, Now stays in place

Current:

```
**A tall Now scrolls before it stops.** When the header and Now together are taller than the space above the capture bar, they first scroll up until Remind me and Directions sit just above the capture bar, and then they hold still while the sheet rises over them. Every part of Now can always be reached.
```

Replacement:

```
**A tall Now makes the page scroll as one.** When the header and Now together are taller than the space above the capture bar, as on the first board with its reminders inside the trip pass and on C-07 in the evening, the whole page scrolls as one, with the sheet directly under Now, so every part of Now can be reached. A Now that fits keeps its place while the sheet rises over it, which is every daytime board in the demo week (Appendix B item 114).
```

Why: Greg decided on Nov. 20, 2026 to keep the rising sheet and write the frames' behavior into the rule as its one exception (issue P2).

## C-00, the account prompt's note

Current:

```
Charlotte taps Create account, and the five setup screens follow.
```

Replacement:

```
Charlotte taps Create account, and the four setup screens follow.
```

Why: 0h folds into 0g.

## C-00, create your account

Current:

```
**Onboarding, as shown: create your account · 01 of 05 · 8:34pm**
```

Replacement:

```
**Onboarding, as shown: create your account · 01 of 04 · 8:34pm**
```

Why: The counter runs to four.

## C-00, connect your calendar

Current:

```
**Onboarding, as shown: connect your calendar · 02 of 05 · 8:35pm**
```

Replacement:

```
**Onboarding, as shown: connect your calendar · 02 of 04 · 8:35pm**
```

Why: The counter runs to four.

## C-00, the school screen

Current:

```
**Onboarding, as shown: who's on your calendar · 03 of 05 · 8:36pm**
```

Replacement:

```
**Onboarding, as shown: where do they go to school · 03 of 04 · 8:36pm**
```

Why: Issue O11.

## C-00, the school screen

Current:

```
> Who's on your calendar?
>
> Add each child's school and start time,
```

Replacement:

```
> Where do they go to school?
>
> Add each child's school and start time,
```

Why: Issue O11.

## C-00, your household and who else helps

Current:

```
**Onboarding, as shown: your household · 04 of 05 · 8:36pm**

> Your household
>
> How is your household set up?
> [Two parents] [One parent] [Two homes] [Something else]
>
> Language at home
> [English]
>
> [Continue]

*Charlotte chooses Two parents and leaves English.*

**Onboarding, as shown: who else helps · 05 of 05 · 8:37pm**

> Who else helps?
>
> Add the adults you count on, such as a partner, grandparents or a nanny. You control what everyone sees in MVP.
>
> Name: Edward · Relationship: Husband
> Name: Claire · Relationship: Sister
>
> + Add someone
>
> [Done]

*Edward and Claire become
```

Replacement:

```
**Onboarding, as shown: your household · 04 of 04 · 8:36pm**

> Your household
>
> How is your household set up?
> [Two parents] [One parent] [Two homes] [Something else]
>
> Language at home
> [English]
>
> Who else helps?
>
> Add the adults you count on, such as a partner, grandparents or a nanny. You control what everyone sees in MVP.
>
> Name: Edward · Relationship: Husband
> Name: Claire · Relationship: Sister
>
> + Add someone
>
> [Done]

*Charlotte chooses Two parents, leaves English and adds Edward and Claire. "Who else helps?" is a subheading on this screen rather than a screen of its own. The screen is taller than a phone, so it scrolls while Done stays pinned at the foot. Edward and Claire become
```

Why: Greg approved the combined draft on Nov. 20, 2026, with the three wording decisions in Appendix B item 113 (issues O22 and O24).

## C-00, 0i-d's coach card

Current:

```
> Today is empty so far. Send me a school email, a handout or a few words about your week, and I'll start the plan.
```

Replacement:

```
> Your week is empty so far. Send me a school email, a handout or a few words about your week, and I'll start the plan.
```

Why: The pass above the card shows tomorrow's departure, so "today" contradicted it (issue O23).

## C-00, 0i-h

Current:

```
Both halves of the pass have moved on with the clock. The moment ID for this board is open (Appendix B), because Oct. 6 falls between C-00 and the demo week.*
```

Replacement:

```
Both halves of the pass have moved on with the clock. The board stays inside C-00 as "the next morning", with no moment ID of its own. Its sheet holds Later today, listing Tuesday's routine items from the afternoon on, as "The week in the game plan" gives them for Tuesday, with no coach card and no MVP Editorial (Appendix B item 88).*
```

Why: Greg decided on Nov. 20, 2026 that 0i-h stays a single board and its sheet is not left blank (issue T53).

## C-11, the sheet for who has the weekend

Current:

```
**Game plan, as shown: the sheet "Who should help while you are away"**
```

Replacement:

```
**Game plan, as shown: the sheet "Who should help while you are away?"**
```

Why: A title that asks a question ends with a question mark (issue Y16).

## C-11, the sheet for who has the weekend

Current:

```
> Who should help while you are away

```

Replacement:

```
> Who should help while you are away?

```

Why: Issue Y16.

## C-11, the call list sheet

Current:

```
**Game plan, as shown: the sheet "Who can Edward call for help"**
```

Replacement:

```
**Game plan, as shown: the sheet "Who can Edward call for help?"**
```

Why: Issue Y16.

## C-11, the call list sheet

Current:

```
> Who can Edward call for help

```

Replacement:

```
> Who can Edward call for help?

```

Why: Issue Y16.

## C-14, if Ruth doesn't answer

Current:

```
*Take both girls puts the Both chip on the pickup and drops Ruth's row.
```

Replacement:

```
*Take both girls changes the pickup's words to "Leave home with Alexis and Mallory to pick Charlotte up at Bayview Regional Airport", with no chip, and drops Ruth's row.
```

Why: This note still gave the airport pickup the Both chip, which item 139 took off on Nov. 19, 2026.

## Section 4, Onboarding

Current:

```
| Step counter | "01 of 05" to "05 of 05", on the five setup screens only |
```

Replacement:

```
| Step counter | "01 of 04" to "04 of 04", on the four setup screens only |
```

Why: Issues O22 and O24.

## Section 4, Onboarding

Current:

```
| School screen | Heading: Who's on your calendar? ·
```

Replacement:

```
| School screen | Heading: Where do they go to school? ·
```

Why: Issue O11.

## Section 4, Onboarding

Current:

```
| Household screen | Heading: Your household · Question: How is your household set up? · Choices: Two parents, One parent, Two homes, Something else · Field: Language at home · Button: Continue |
| Helpers screen | Heading: Who else helps? · Line: Add the adults you count on, such as a partner, grandparents or a nanny. You control what everyone sees in MVP. · Fields: Name, Relationship · Link: + Add someone · Button: Done |
```

Replacement:

```
| Household screen | Heading: Your household · Question: How is your household set up? · Choices: Two parents, One parent, Two homes, Something else · Field: Language at home · Subheading: Who else helps? · Line: Add the adults you count on, such as a partner, grandparents or a nanny. You control what everyone sees in MVP. · Fields: Name, Relationship · Link: + Add someone · Button: Done |
```

Why: Issue O22.

## Section 4, Today

Current:

```
| Coach card with nothing captured yet | MVP Coach · Today is empty so far.
```

Replacement:

```
| Coach card with nothing captured yet | MVP Coach · Your week is empty so far.
```

Why: Issue O23.

## Section 4, Playbook

Current:

```
| Choosing who has the weekend | Sheet title: Who should help while you are away ·
```

Replacement:

```
| Choosing who has the weekend | Sheet title: Who should help while you are away? ·
```

Why: Issue Y16.

## Section 4, Playbook

Current:

```
| The sheet for who he can call | Title: Who can Edward call for help ·
```

Replacement:

```
| The sheet for who he can call | Title: Who can Edward call for help? ·
```

Why: Issue Y16.

## Appendix A, Hard mornings

Current:

```
| Hard mornings | Orchestra at 7:15am on Tuesday and Thursday means two trips, at 6:55am and 8:15am. On Tuesday Mallory rides along on both because Edward has left for the office. |
```

Replacement:

```
| Hard mornings | Orchestra at 7:15am on Tuesday and Thursday means two trips, at 6:55am and 8:15am. On Tuesday Mallory rides along on both because Edward has left for the office. Orchestra starts on Tuesday, Oct. 13, the first week of the term's schedule, so Tuesday, Oct. 6 is still a single trip at 7:40am. |
```

Why: One invented fact keeps the first board's Tuesday and every approved first-board frame as they are (issue T58).

## Appendix B item 30

Current:

```
30. **The school screen is headed "Who's on your calendar?"**
```

Replacement:

```
30. **Decided November 20, 2026: the school screen is headed "Where do they go to school?"** It was headed "Who's on your calendar?".
```

Why: Issue O11.

## Appendix B item 87

Current:

```
87. **The first board's Tuesday morning ignores orchestra.**
```

Replacement:

```
87. **Decided November 20, 2026: orchestra starts on Tuesday, Oct. 13 (issue T58).** The text that follows is kept for its history. The first board's Tuesday morning ignored orchestra.
```

Why: Issue T58.

## Appendix B item 88

Current:

```
88. **0i-h needs a moment ID and a sheet.**
```

Replacement:

```
88. **Decided November 20, 2026: 0i-h stays a single board inside C-00, and its sheet holds Tuesday's afternoon routine in Later today (issue T53).** The text that follows is kept for its history. 0i-h needed a moment ID and a sheet.
```

Why: Issue T53.

## Appendix B item 95

Current:

```
95. **An anytime task needs a home for its reminder and Ask for help.**
```

Replacement:

```
95. **Decided November 20, 2026: an anytime task's reminder and Ask for help live on its item page (issue T61).** The item page still needs a frame. The text that follows is kept for its history.
```

Why: Issue T61.

## Appendix B item 97

Current:

```
97. **0i-d now shows a pass above a card that says "Today is empty so far."**
```

Replacement:

```
97. **Decided November 20, 2026: 0i-d's card reads "Your week is empty so far." (issue O23).** It used to say "Today is empty so far."
```

Why: Issue O23.

## Appendix B item 113

Current:

```
113. **0g and 0h are drafted as one screen and wait for Greg (issue O22).**
```

Replacement:

```
113. **Decided November 20, 2026: 0g and 0h are one screen (issues O22 and O24).** Greg approved the draft, and the onboarding sections and section 4 now follow it. The text that follows is kept for its history.
```

Why: Issues O22 and O24.

## Appendix B item 114

Current:

```
114. **C-07 scrolls as one page.**
```

Replacement:

```
114. **Decided November 20, 2026: a Now taller than the space above the capture bar makes the page scroll as one (issue P2).** "Now stays in place" in section 2 now carries the rule, and the boards that already scroll as one page follow it. The text that follows is kept for its history. C-07 scrolled as one page.
```

Why: Issue P2.

## Appendix B item 121

Current:

```
121. **Charlotte's offsite is a nonprofit board's, not a company's.**
```

Replacement:

```
121. **Decided November 20, 2026: the offsite stays the Brightpath Reading Foundation's board weekend (issue Y3).** Charlotte's offsite is a nonprofit board's, not a company's.
```

Why: Issue Y3.

## Appendix B item 122

Current:

```
122. **Whether Edward's view should list Charlotte for emergencies.**
```

Replacement:

```
122. **Decided November 20, 2026: Charlotte is not listed on Who to call (issue Y2).** Where Charlotte is gives the lodge's front desk with a Call button, which reaches her for something serious. The text that follows is kept for its history. The question was whether Edward's view should list Charlotte for emergencies.
```

Why: Issue Y2.

## Appendix B item 140

Current:

```
The first two titles ask a question without a question mark, which issue Y16 puts to Greg.
```

Replacement:

```
The first two titles asked a question without a question mark. Greg decided on November 20, 2026 that every title that asks a question ends with one (issue Y16).
```

Why: Issue Y16.

## Appendix B, new item 142

Current:

```
Greg also gave the line saying why Edward is being asked a banner of its own above the title, and it is set in ink because amber belongs to the coach.
```

Replacement:

```
Greg also gave the line saying why Edward is being asked a banner of its own above the title, and it is set in ink because amber belongs to the coach.
142. **Decided November 20, 2026: a child who comes along carries no chip (issue G45).** The reasoning that took the chip off the airport pickup in item 139 now covers a sibling's activity too, so the Brightwater Family Therapy and Studio Ten Dance rows carry only Alexis's chip and say "with Mallory". Section 2 carries the rule, and the C-03, C-03b and C-06 rows and the C-03b Leave sheet follow it.
```

Why: Issue G45.

## Appendix C, new entry

Current:

```
## Version 3.45, November 19, 2026

```

Replacement:

```
## Version 3.46, November 20, 2026

Greg's decisions before the alpha. Version 3.45 is kept in the archive.

| # | Change |
| ----- | ----- |
| 1 | 0g and 0h are one setup screen, "Your household", with "Who else helps?" as a subheading and Done as its button, and the counter runs from 01 of 04 to 04 of 04 (issues O22 and O24, Appendix B item 113). |
| 2 | The school screen is headed "Where do they go to school?" (issue O11, item 30). |
| 3 | 0i-d's coach card reads "Your week is empty so far." (issue O23, item 97). |
| 4 | Orchestra starts on Tuesday, Oct. 13, in Appendix A (issue T58, item 87). |
| 5 | 0i-h stays a single board in C-00, and its sheet holds Tuesday's afternoon routine (issue T53, item 88). |
| 6 | A Now taller than the space above the capture bar makes Today's page scroll as one, and every other Now keeps its place while the sheet rises (issue P2, item 114). |
| 7 | A child who comes along carries no chip, and the therapy and dance rows read "[Alexis] ..., with Mallory" (issue G45, new item 142). The C-14 note that still put a chip on the airport pickup is corrected. |
| 8 | The two playbook sheet titles that ask a question end with a question mark (issue Y16, item 140). |
| 9 | Charlotte stays off Who to call (issue Y2, item 122), and the offsite stays the board weekend (issue Y3, item 121). An anytime task's reminder lives on its item page (issue T61, item 95). |

## Version 3.45, November 19, 2026

```

Why: Every pass adds an Appendix C entry.

## C-03 and C-03b, Later today

Current, in 2 places:

```
| 3:30pm | Both | Brightwater Family Therapy, with the calendar mark |
```

Replacement:

```
| 3:30pm | Alexis | Brightwater Family Therapy, with Mallory, with the calendar mark |
```

Why: Issue G45: a child who comes along carries no chip.

## C-03b, the Leave sheet

Current, in 2 places:

```
3:30pm · [Both] Therapy, with the calendar mark
```

Replacement:

```
3:30pm · [Alexis] Therapy, with Mallory, with the calendar mark
```

Why: Issue G45.

## C-06, Later today

Current, in 1 place:

```
| 3:45pm | Both | Studio Ten Dance, with the calendar mark |
```

Replacement:

```
| 3:45pm | Alexis | Studio Ten Dance, with Mallory, with the calendar mark |
```

Why: Issue G45.

## Section 4, Today

Current, in 1 place:

```
"3:30pm · [Both] [calendar mark] Brightwater Family Therapy"
```

Replacement:

```
"3:30pm · [Alexis] [calendar mark] Brightwater Family Therapy, with Mallory"
```

Why: Issue G45.

## Appendix B item 93

Current:

```
93. **0g and 0h may become one screen.**
```

Replacement:

```
93. **Decided November 20, 2026: 0g and 0h are one screen (item 113).** The text that follows is kept for its history. 0g and 0h might become one screen.
```

Why: Issue O22.
