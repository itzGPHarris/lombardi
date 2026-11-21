# Fixtures 3.23 pass

*MVP (Lombardi) · October 18, 2026 · Applies to story fixtures 3.22 and produces 3.23*

This pass records three changes Greg made in the design library and on the boards on the evening of October 18, 2026. The cerulean tint is now #E1EEFC, because #DFF2FA did not hold up against canvas and card. Body strong is set in Inter bold rather than extra bold. Every screen except Today now sits on card rather than canvas, because canvas was too dark as a background for a whole screen, and a component on one of those screens that has no fill of its own takes control.

Each change below quotes the text in 3.22 and gives its replacement, with the reason. The pass was applied to the full document by script, in this order, and every quoted passage was found exactly once, except changes marked "every occurrence", whose count is given. There are 8 changes.

## 1. Header

**Why.** The version moves to 3.23.

**Current:**

````
*MVP (Lombardi) · Version 3.22 · October 18, 2026 · Charlotte and Edward only*
````

**Replace with:**

````
*MVP (Lombardi) · Version 3.23 · October 18, 2026 · Charlotte and Edward only*
````

## 2. Section 2, "Type": Body strong

**Why.** Greg set Body strong in Inter bold on October 18, 2026, because extra bold was too heavy at 15 px beside Body (issue C47).

**Current:**

````
checklist headings, such as "Mallory will need" | Inter 15, extra bold |
````

**Replace with:**

````
checklist headings, such as "Mallory will need" | Inter 15, bold |
````

## 3. Section 2, "Color": the opening

**Why.** Greg moved every screen except Today onto card on October 18, 2026, because canvas was too dark as a background for a whole screen. Today keeps its two surfaces, paper above and the canvas sheet below (issue C48).

**Current:**

````
These are the ones the demo screens lean on most, as Greg set them on October 17, 2026, and no color in the product is pure white or pure black.
````

**Replace with:**

````
These are the ones the demo screens lean on most, as Greg set them on October 17 and 18, 2026, and no color in the product is pure white or pure black. Today is the one screen drawn on canvas, for its sheet. Every other screen, including the Coach tab, the game plan, Team, Kids, the pages opened inside them, sheets and onboarding, sits on card, and a part of one of those screens that has no fill of its own, such as a field or a row of choices, takes control so it stands clear of the card behind it.
````

## 4. Section 2, "Color": Canvas

**Why.** Greg moved every screen except Today onto card on October 18, 2026, because canvas was too dark as a background for a whole screen. Today keeps its two surfaces, paper above and the canvas sheet below (issue C48).

**Current:**

````
| Canvas | #F0ECE5 | The canvas sheet on Today and the page behind the tabs |
````

**Replace with:**

````
| Canvas | #F0ECE5 | The canvas sheet on Today, which carries the coach card, Later today and MVP Recommends |
````

## 5. Section 2, "Color": Card

**Why.** Greg moved every screen except Today onto card on October 18, 2026, because canvas was too dark as a background for a whole screen. Today keeps its two surfaces, paper above and the canvas sheet below (issue C48).

**Current:**

````
| Card | #F9F7F3 | Paper: the header and Now on Today, every card, and each day inside the review card |
````

**Replace with:**

````
| Card | #F9F7F3 | Paper: the header and Now on Today, the background of every other screen, every card, and each day inside the review card |
````

## 6. Section 2, "Color": Control

**Why.** Greg moved every screen except Today onto card on October 18, 2026, because canvas was too dark as a background for a whole screen. Today keeps its two surfaces, paper above and the canvas sheet below (issue C48).

**Current:**

````
| Control | #FFFEFC | The lightest surface, behind a control drawn on paper, such as a "Leave at" time |
````

**Replace with:**

````
| Control | #FFFEFC | The lightest surface, behind a control drawn on paper, such as a "Leave at" time, and the fill of any part of a card screen that has no fill of its own |
````

## 7. Section 2, "Color": Cerulean tint

**Why.** Greg changed the tint on October 18, 2026, because #DFF2FA did not hold up against canvas and card (issue C46).

**Current:**

````
| Cerulean tint | #DFF2FA | The light fill that goes with cerulean |
````

**Replace with:**

````
| Cerulean tint | #E1EEFC | The light fill that goes with cerulean |
````

## 8. Appendix C, version 3.23

**Why.** The change log entry for this pass.

**Current:**

````
# Appendix C: change log
````

**Replace with:**

````
# Appendix C: change log

## Version 3.23, October 18, 2026

Records Greg's changes to the design library and the boards on the evening of October 18, 2026.

| # | Change |
| ----- | ----- |
| 1 | The cerulean tint is #E1EEFC, replacing #DFF2FA, which did not hold up against canvas and card (issue C46). |
| 2 | Body strong is Inter 15, bold, replacing extra bold (issue C47). |
| 3 | Every screen except Today sits on card, and a part of one of those screens with no fill of its own takes control. Canvas is kept for the sheet on Today (issue C48). |
````
