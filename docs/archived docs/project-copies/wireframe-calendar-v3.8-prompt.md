# Prompt: add her calendar to the wireframes (fixtures v3.8)

*Paste everything below the line into the design tool, with story fixtures v3.8 and the current wireframe set attached. This pass adds the parent's own calendar. It can run after the onboarding v3.7 prompt and the earlier revision prompt, and it changes different parts of the screens they touch, except for the onboarding counter noted below.*

---

## What this pass is

This pass adds one new capability to the grayscale wireframes for Most Valuable Parent (MVP): the parent connects the calendar she already keeps, such as Google Calendar, Apple Calendar or Outlook, and MVP keeps the plan in step with it. Story fixtures version 3.8 describes it in section 2, "Her calendar", in onboarding moment C-00, and in the new moment C-06b. Keep everything not listed below exactly as it is, including the page format, the callouts, the grayscale treatment, the phone frame at 390 × 844 and the wide frame at 1440 × 900.

Three rules shape every screen in this pass. MVP reads her calendar and never changes it, so nothing on screen may suggest that MVP adds to or edits her calendar. Items that come from her calendar belong to her, so they show "You" as owner with no status, never Suggested. And every item from her calendar carries the calendar mark, the lucide `calendar` icon, so she can tell what MVP read from her calendar from what MVP made.

Every word on screen comes from fixtures v3.8, from the moments or from section 4. Copy it exactly. If a screen needs words the fixtures do not have, use a short bracketed placeholder that says what the words are for, and list it in NOTES.md under "Copy needed".

## New onboarding screens

**0q · Connect your calendar (02 of 05, 8:35 pm).** This goes between the account screen (0e) and the school screen (0f). Draw it in two states side by side.

- **Before connecting.** The headline is "Connect your calendar" in display type. Below it is the line from section 4: "Connect the calendar you already use, and the coach brings in what's on it and tells you when something new runs into the plan. MVP reads your calendar and never changes it." Below that are three equal buttons, "Google Calendar", "Apple Calendar" and "Outlook", drawn as plain labeled buttons in grayscale, with no product logos. A "Not now" link sits at the bottom.
- **After connecting.** The same headline, with the line replaced by "Connected · Google Calendar" and a "Continue" button.

Add a callout saying that the calendar comes right after the account because she has already seen her first plan, and before the school screen so the coach can fill in what the calendar already shows. Add a second callout saying that "Not now" leaves connecting in Settings, and that the coach offers it once, the first time she gives it an appointment.

**The staged permission screen.** Draw it between the two states of 0q as a generic sheet, in grayscale and not drawn to Google's brand or any other. It reads "Most Valuable Parent wants to see your calendar", with "Allow" as the primary button and "Cancel" as the secondary. Add a callout saying that in the prototype this screen is staged and connects nothing, and that in the real product each calendar shows its own permission screen.

## Changes to existing onboarding screens

- **Step counter.** The setup screens now run from "01 of 05" to "05 of 05": 0e is 01, 0q is 02, 0f is 03, 0g is 04 and 0h is 05. If the onboarding v3.7 pass has already run, change only the counters.
- **Times.** Change the screen times to match C-00: the calendar at 8:35 pm, school and household at 8:36 pm, helpers at 8:37 pm, getting ready at 8:38 pm, the introduction at 8:39 pm and her first board at 8:40 pm.
- **0p, getting everything ready.** There are now five steps: "Saving your account · done", "Adding Alexis and Mallory · done", "Reading your Google Calendar · done", "Setting up Mallory's plan · working" and "Getting Today ready · waiting". Add a callout saying that the calendar step appears only when she has connected a calendar.
- **0j, nice to meet you.** Replace the recap with the version in C-00, which reports what came in from her Google Calendar: Alexis's therapy at Brightwater on Mondays and dance at Studio Ten on Wednesdays, and Mallory's ballet at Studio Ten on Thursdays.
- **The flow map.** Add 0q between 0e and 0f on the main row, labeled "Connect your calendar", with the permission screen drawn as a small step under it. Add a branch where "Not now" skips straight to 0f. Change every step counter on the map to the new numbers.

## New moment screen

**02b · Today, a checkup lands on Friday (C-06b, Wednesday, 1:15 pm).** This is a phone frame at full scroll length, built from the C-06 board on screen 02.

- **Header.** "This afternoon" with the sun icon, and "Wednesday" on the same row.
- **Next departure.** "2:20 pm · You leave for Westview and Cedar Grove" with "in 1 hr 5 min", and "Going with Alexis: Dance bag, for Studio Ten at 3:45 pm".
- **The day.** The same four rows as on screen 02, with the morning shown as done. Alexis's "Studio Ten, 3:45 pm" carries the calendar mark. Charlotte's row adds "Send Westview the pickup note".
- **The coach card.** Use the full text from C-06b: the line naming Friday and the checkup "new on your Google Calendar", then two options, "Skip tutoring this Friday." with the Recommended tag and "Move the checkup.", then the link "Open Friday in the game plan". Draw the coach card with the same placeholder treatment as the other coach cards, because its signal is not decided.

Add callouts for three things. First, Charlotte booked the checkup in her pediatrician's own portal and sent MVP nothing, and MVP read it from her Google Calendar. Second, the calendar mark on Alexis's dance shows a routine item that came from her calendar. Third, the options never offer to move the checkup on her calendar, because MVP never changes her calendar. Moving it means calling Northside.

Beside the phone, draw two smaller panels in the style of screen 05.

- **The request to Ms. Reyes.** The draft is addressed "To Ms. Reyes" and uses the text from C-06b, with "Ms. Reyes answers with" over the two answer buttons, the line "You send this. MVP never sends anything for you." and "Send". Add a callout saying that Ms. Reyes doesn't have MVP, so this is the text message with a link, the route no other moment in Charlotte's week uses.
- **Friday in the game plan afterward.** Show Friday after Ms. Reyes answers: "2:30 pm · Mallory · Pick up at Westview · You" and "3:30 pm · Mallory · Checkup, Northside Pediatrics · You", with the calendar mark and its source link "From your Google Calendar". Tutoring and the 3:45 pm pickup are gone.

## Calendar marks on existing screens

Add the calendar mark, the lucide `calendar` icon drawn small after the item's text, to every item that comes from her Google Calendar. Use the same mark at every size.

- **01, Today on Monday morning.** Alexis's "Brightwater, 3:30 pm" in the After school column, and the matching bar on the wide grid.
- **01b, Monday afternoon.** The same item, if it appears.
- **02, Today on Wednesday.** Alexis's "Studio Ten, 3:45 pm", and Charlotte's own "Studio Ten 3:45 pm".
- **03, Tonight on Wednesday.** No calendar items are on the board, so there is no change.
- **06, the game plan.** Monday "3:30 pm · Alexis · Therapy, Brightwater", Wednesday "3:45 pm · Alexis · Dance, Studio Ten" and Thursday "3:55 pm · Mallory · Ballet, Studio Ten", at both sizes. Add a callout saying that calendar items don't drag, and that trying to drag one shows "Change this in Google Calendar."

## Index and notes

Add 0q and the permission screen to the onboarding index, and add 02b to the main index after 02. Add 02b to the "Capture and handoffs" group if it exists, because it is the calendar's way in. Update NOTES.md with what changed in this pass, the three rules from the top of this prompt, and any "Copy needed" placeholders. Do not change the fixtures.

## Why each change

- **0q and the permission screen** let her connect the calendar she already keeps, so what is already there reaches the plan without her sending it. The screen comes after her first plan, because asking for her calendar is the biggest trust request in setup, and it is easier to grant once she has seen what MVP does.
- **The line "MVP reads your calendar and never changes it"** states the promise where she makes the decision (issue A6).
- **The new step on 0p and the recap on 0j** show the coach learning from her calendar before she reaches Today.
- **02b** shows the calendar keeping the plan current, which is the reason to connect it. Something she booked outside MVP runs into the plan, and MVP tells her and offers ways to fix it.
- **The request to Ms. Reyes** uses the text-message route for someone without MVP, which no other moment shows.
- **The calendar mark** lets her tell what MVP read from her calendar from what MVP made, and it explains why those items move in her calendar rather than in the game plan.
