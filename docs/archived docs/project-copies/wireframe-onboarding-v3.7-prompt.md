# Prompt: update the onboarding wireframes for fixtures v3.7

*Paste everything below the line into the design tool, with story fixtures v3.7 and the current onboarding wireframes (the flow map and onboarding-01 to onboarding-17) attached. This pass touches onboarding only. It can run before or after the earlier wireframe revision prompt, because the two change different screens, except for the capture bar noted below.*

---

## What this pass is

This is a correction pass on the onboarding wireframes for Most Valuable Parent (MVP), to match story fixtures version 3.7. Keep everything not listed below exactly as it is: the page format, the callouts, the grayscale treatment, the phone frame at 390 × 844, and the screen IDs. These are wireframes for discussion, not visual design, so stay in grayscale.

Fixtures v3.7 makes two changes. The first adds two steps that were missing: a screen where Charlotte checks her photo before the coach reads it, and a hand-off at the end of the read-back where she starts the draft herself. Until now the read-back ran straight into the draft, so the plan appeared as something the coach decided to do on its own. The second change makes the first draft cover the rest of this week instead of the rest of the month, because a month is too much to get right and too much can change in it.

Every word on screen comes from fixtures v3.7, moment C-00 and section 4. Copy it exactly. If a screen needs words the fixtures do not have, use a short bracketed placeholder that says what the words are for, and list it in NOTES.md under "Copy needed".

## New screens

**0v · Check the photo (8:31 pm).** This comes after 0a, when she has taken a photo, and before 0r. Show the photo of the Westview rotation calendar full width, with two buttons below it, "Use this photo" as the primary button and "Retake" as the secondary. Add a callout saying that Retake reopens the camera, and that a file or a voice note skips this screen because there is nothing to frame. The photo is a gray placeholder labeled "Westview rotation calendar, headed Westview Kindergarten". It must not show a month name or a year, because the demo shows no calendar dates.

**0b, the hand-off (8:33 pm).** This extends the read-back screen rather than adding a new screen ID. The read-back conversation now ends with the coach's line from C-00:

> Then the letters are all the rotation needs. I can make a plan for Mallory's week from here, with library and sneaker days on her going with lists and back-to-school night on Thursday. The field trip and the harvest fair are in later weeks, so they stay on the Westview card until then.

Below the line, show the primary button "Make Mallory's plan" and a text link, "Something's not right". Add two callouts. The first says that the coach waits for her here, because the hand-off is the moment she decides to give the coach the job. The second says that "Something's not right" returns her to the input with the read-back still in view, so she can say what to fix and the coach reads it back again.

## Changes to existing screens

- **0b, the read-back.** Keep the order from the fixtures. The read-back paragraph comes first, then the control labeled "This calendar is for" with "Mallory · K" preselected and "Alexis · 4" beside it, then the coach's one question about the highlights, then Charlotte's reply, "No, that's just Mallory with a highlighter.", and then the hand-off. The child confirmation is a control, not a coach question, so the coach still asks only one question.
- **0t, making the draft.** Change the line to "Making Mallory's plan…".
- **0c, the draft and account prompt.** The heading becomes "Mallory's plan for this week", and the line becomes: "Here is the rest of this week for Mallory. Library is on Thursday and sneakers go with Mallory on Wednesday and Friday. Back-to-school night is on Thursday evening as a suggestion. None of it is saved yet." The draft shows four days, as in the C-00 table. Tuesday is E, art and music. Wednesday is F, science and motor skills, with Sneakers. Thursday is A, library, with Library book, and back-to-school night marked Suggested. Friday is B, motor skills, with Sneakers. The account prompt heading becomes "Keep Mallory's plan".
- **0p, getting everything ready.** The third step becomes "Setting up Mallory's plan · working".
- **0j, nice to meet you.** Replace the recap with the version in C-00, which covers the week and the standing rules and says the field trip and the harvest fair are on the Westview card for later.
- **0a, show me one thing.** The buttons read "Take a photo", "Add a file" and "Talk or type". Do not use "Share a file", because "Share" means the phone's share menu everywhere else in the product.
- **Capture bar on 0b.** If the read-back screen shows a capture bar, use the placeholder "Talk, type or add a photo". If the earlier revision prompt has already run, use its capture bar with camera, attach and microphone and no standing Send icon.
- **The flow map (onboarding-00).** Add 0v between 0a and 0r on the main row, with the label "Check the photo". Rename 0c's label to "Draft plan and account prompt". Show the hand-off as a labeled step at the end of 0b, and add "Something's not right" as a branch that loops from the end of 0b back to the read-back. Add a branch from 0v, where "Retake" loops back to the camera. Update every "Mallory's month" on the map to "Mallory's plan".

## Index and notes

Add 0v to the onboarding index in its place after 0a. Update NOTES.md with what changed in this pass and the reason for each change, and list any "Copy needed" placeholders. Do not change the fixtures.

## Why each change

- **0v** gives her a moment to check that the photo is readable before the coach spends time on it, and it matches the screen Greg has already designed.
- **The hand-off** makes Charlotte the one who starts the plan. Without it, the draft appears on its own, which works against the rule that she makes every decision (issue O8).
- **The weekly draft** follows Greg's decision that a month is too much to get right and too much can change. It also lets the hand-off show the coach keeping later events on the school card until their weeks arrive.
- **The order on 0b and the button wording** keep the coach to one question and keep "Share" for the share menu alone (issue O10).
- **The placeholder photo without a month or year** keeps the demo free of dates (issue O9).
