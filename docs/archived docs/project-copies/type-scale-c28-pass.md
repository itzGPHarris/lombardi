# Correction pass: the type scale (issue C28)

*MVP (Lombardi) · October 14, 2026 · Greg's decision of the same day*

## Summary

Greg decided to keep the two body styles his boards already use and to remove `body-small`. The scale grows from seven styles to nine. Body large sets checklist items and the rows in Later today and Tomorrow starts, and Body strong sets buttons, links, names in rows and field labels. Subtitle's role, which version 3.12 proposed, is confirmed. `body-small` is gone from the library, and the two board texts that used it now use Meta.

This pass changes the fixtures' "Type" section and Appendix B item 44 and adds a line to Appendix C. Spec 0.13 §19, AGENTS.md and the project instructions were updated directly.

## 1. Section 2, "Type"

Replace the first sentence of the section with:

> Nine type styles cover everything on the demo screens except the screen headers.

Replace the Body row of the table with these three rows:

> | Body large | body-large | Checklist items under Now and in Ready tonight, and the rows in Later today and Tomorrow starts | Inter 17, regular |
> | Body | body | Everything else, including the coach's messages in the Coach tab conversation | Inter 15, regular |
> | Body strong | body-strong | Buttons, links, names in rows, such as a person on Team, and field labels | Inter 15, extra bold |

In the paragraph after the table, change "so they do not count as an eighth style" to "so they do not count as a tenth style".

In the last paragraph, delete the sentence "The Subtitle role is proposed and needs confirming (Appendix B item 44)."

## 2. Appendix B, item 44

Replace item 44 with:

> 44. **Decided October 14, 2026.** Body large and Body strong join the scale with the uses in "Type", Subtitle's role is confirmed, and `body-small` is removed from the design library (issue C28).

## 3. Appendix C

Add this row to the version 3.13 table, or as a note under it:

> | 7 | "Type" grows to nine styles. Body large and Body strong join it, Subtitle's role is confirmed, and `body-small` leaves the library. Appendix B item 44 is decided. |
