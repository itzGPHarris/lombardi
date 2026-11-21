# Correction pass: story fixtures 3.11 to 3.12

*MVP (Lombardi) · October 14, 2026 · Follows the readiness scrub and Greg's decisions of the same day*

## Summary

This pass records seven decisions and fixes three small faults in fixtures 3.11. It changes no moment, no coach line and no on-screen text a parent would read. Its main effect is on the type scale, which grows from five styles to seven, and on Appendix B, where eight items are now decided.

The decisions are listed below.

- **Item 32 is confirmed.** Greg confirmed the three assumptions from the design rounds: the coach card sits directly under Now, children are filled gray chips with Family and adults outlined, and chips lead each row.
- **Both title styles stay.** Title (Inter 20, extra bold) takes the section names on Today and the line naming the next departure, which is how the boards use it. Subtitle (Inter 17, semibold) takes headings inside a page or a card. Subtitle's role is a proposal, because no board uses it yet, so it stays open as item 44.
- **JetBrains Mono stays, with one use.** It sets the coach card's label, in a Label style, which is what the design library and the boards already do.
- **Today is phone-width only in review build 1.** The wide Today is parked as F20.
- **"Send to coach" stays on Today only in review build 1.** Whether it appears on other tabs remains open.
- **Four defaults from the readiness plan stand, because Greg did not change them.**
  - The coach card is marked by the amber dot and the coach's tint.
  - "Move yoga to 12:15" carries no icon.
  - The getting ready screen keeps section 4's wording, with no percentage.
  - The talk-to-the-coach flow on the Figma boards page is parked as F21.

The three fixes are the free dress day's owner (issue G6), the terms table's count of statuses, and Appendix B item 40, which is now done.

Every replacement below is written to paste into `docs/story-fixtures.md`. The quoted "current text" is copied from version 3.11 so each passage can be found exactly.

## 1. Version line

Replace the version line at the top with:

> *MVP (Lombardi) · Version 3.12 · October 14, 2026 · Charlotte and Edward only*

## 2. Section 1, "Terms used in this document", the Status row

Current text:

> | Status | The mark on a plan item that says where it stands, such as "Asked Edward" or "Edward: yes". Section 2 lists all six. |

Replace with:

> | Status | The mark on a plan item that says where it stands, such as "Asked Edward" or "Edward: yes". Section 2 lists the four statuses and the two marks that can sit beside them. |

## 3. Section 2, "Today shows today"

### The paragraph headed "The capture button reads 'Send to coach'"

Current last sentence:

> Only Today is drawn with it, and whether it appears on the other tabs is open (Appendix B).

Replace with:

> Only Today is drawn with it. In review build 1 it appears on Today only, the Coach tab keeps its capture bar, and the other tabs have no capture button. Whether it appears on the other tabs later is open (Appendix B).

### The last paragraph of the section

Current text:

> The quiet layout is designed for a phone. How Today opens out at tablet and desktop widths is not decided yet (Appendix B).

Replace with:

> The quiet layout is designed for a phone. At tablet and desktop widths, Today keeps the phone layout in a centered column beside the sidebar, and a wide Today is parked on the roadmap (Appendix B).

## 4. Section 2, "Type"

Replace the whole section, from the heading to the paragraph ending "which leaves it unused (Appendix B).", with:

> ## Type
>
> Seven type styles cover everything on the demo screens except the screen headers. Fewer styles keep each screen quiet and make it obvious which line matters most. The engineer takes the values from the design library, and the table records what each style is for and its name in the library.
>
> | Style | Library name | Use | Set in |
> | ----- | ----- | ----- | ----- |
> | Display | display | The one number that matters now, such as the time of the next departure | Fraunces 44, semibold |
> | Title | title | Section names on Today, such as "Later today", "Ready tonight" and "Tomorrow starts", and the line naming the next departure, such as "You leave for Westview and Cedar Grove" | Inter 20, extra bold |
> | Subtitle | subtitle | Headings inside a page or a card, such as "Hours" on a school card and "Every week" on a child page | Inter 17, semibold |
> | Voice | voice, voice-strong | The coach on the Today coach card and in onboarding, and article titles at semibold | Fraunces 17, regular, and semibold for article titles |
> | Body | body | Everything else, including the coach's messages in the Coach tab conversation | Inter 15, regular |
> | Meta | meta | Times, sources, counts and small labels | Inter 13, medium, in a muted ink |
> | Label | meta-strong | The coach card's label, such as "Your coach · for Thursday", and nothing else | JetBrains Mono 13, extra bold |
>
> There are no uppercase labels, no letter-spaced eyebrows and no bold words inside paragraphs. Times in a list line up in a column and are set in Meta. Screen headers, such as "This morning", and the onboarding and setup headlines stay in the display serif, outside the seven styles, as do the wordmark and the headlines on article pages. Chips use the Meta size in a heavier Inter weight, so they do not count as an eighth style.
>
> The coach is set in Fraunces, as the Voice style, on the Today coach card and in onboarding, where it speaks in a line or two. In the Coach tab conversation its messages are set in Inter, as Body. JetBrains Mono appears only in the Label style, on the coach card, which is the use the design library already gives it. The Subtitle role is proposed and needs confirming (Appendix B item 44).

## 5. Section 3, "The week in the game plan", the free dress day row

Current row:

> | Friday | All day | Alexis · Free dress day, Cedar Grove | You | This week | Suggested | Pulled from the Cedar Grove newsletter. Charlotte adds it in C-01, and it shows no status. |

Replace with:

> | Friday | All day | Alexis · Free dress day, Cedar Grove | Nobody yet | This week | Suggested | Pulled from the Cedar Grove newsletter. Charlotte adds it in C-01, and it then shows You as owner and no status. |

This follows the rule in section 2 that a suggested item has no owner until she chooses it (issue G6).

## 6. Appendix B

Replace these items. Their numbers stay the same, because issues and other documents refer to them by number.

> 6. **How the coach card is visually marked is decided.** The coach appears as a solid dot in coach amber beside "Your coach", the coach card is the only card on Today, and its fill is the coach's tint, which is `semantic/coach-bg` in the design library. The card carries no other signal, and saffron has no reserved role (issue T3).

> 22. **The getting ready screen uses the wording in section 4.** Greg's Figma screen takes the section 4 headline and steps, and it loses its percentage, because a number that stalls or jumps looks broken (issue O6).

> 32. **Decided October 14, 2026.** Greg confirmed the three assumptions from the design rounds. The coach card sits directly under Now, so the decision fits on the first screen. The wireframes show children as filled gray chips, and Family and adults as outlined. Chips lead each row, before the item.

> 33. **Today is phone-width only in review build 1.** At tablet and desktop widths, Today keeps the phone layout in a centered column beside the sidebar. A wide Today is parked as F20 on the spec's roadmap, and the wide Today screens from before the redesign are not used.

> 34. **Whether "Send to coach" appears beyond Today is not decided.** In review build 1 it appears on Today only, the Coach tab keeps its capture bar, and the other tabs have no capture button.

> 39. **JetBrains Mono stays, for the Label style only.** It sets the coach card's label and nothing else (see "Type").

> 40. **Decided.** The children's green and the coach amber are tokens in the design library, as `kid`, `kid-bg`, `coach`, `coach-ink` and `coach-bg`.

Add this sentence to the end of item 41:

> The "Move yoga to 12:15" button carries no icon, because a calendar icon would suggest that the move changes her calendar (issue T11).

Add these items at the end:

> 44. **Three styles in the design library are not in "Type", and Subtitle's role needs confirming.** The library also holds body-large (Inter 17), body-strong (Inter 15, extra bold) and body-small (Inter 11). The boards use body-large for checklist items, rows and the Remind me and Directions buttons, and body-strong for buttons, links and field labels. Either each joins the scale with a named use, or the boards move to Body and Meta. The Subtitle role in "Type" is proposed, because no board uses it yet (issue C28).
>
> 45. **A talk-to-the-coach flow on the Figma boards page is parked.** The frame named "wireframes" on the "Design - lombardi" page (`2506:1261`) shows Charlotte talking to the coach from Today on a Thursday night, with the read-back landing on the coach card and on tonight's list. No moment in this document describes it, so it is parked as F21 on the spec's roadmap and is not built (issue K5).

## 7. Appendix C, a new entry at the top

> ## Version 3.12, October 14, 2026
>
> Records Greg's decisions after the readiness scrub and fixes three small faults. No moment or on-screen line changes.
>
> | # | Change |
> | ----- | ----- |
> | 1 | "Type" grows to seven styles. Title is Inter 20, extra bold, for section names on Today and the line naming the next departure. Subtitle is Inter 17, semibold, for headings inside a page or card, and its role is proposed (Appendix B item 44). Label is JetBrains Mono 13, extra bold, for the coach card's label only. The table gives each style's name in the design library. |
> | 2 | Appendix B item 32 is decided, because Greg confirmed the three assumptions from the design rounds. |
> | 3 | Today is phone-width only in review build 1, and a wide Today is parked as F20. "Send to coach" appears on Today only in review build 1, and item 34 stays open for later. |
> | 4 | Appendix B items 6, 22, 39, 40 and 41 are decided: the coach card is marked by the dot and the coach's tint, the getting ready screen keeps section 4's wording, JetBrains Mono stays for the Label style, the two colors are tokens, and the yoga button carries no icon. |
> | 5 | The free dress day starts with Nobody yet as owner, following the rule that a suggested item has no owner until she chooses it. |
> | 6 | The terms table now says section 2 lists four statuses and two marks. Appendix B gains items 44 and 45. |
