# Fixtures pass 3.35: Charlotte's flight on Edward's Today

Greg asked on Nov. 19, 2026 that Edward's Today show Charlotte's flight status and alert him when it is delayed, because Edward has her flight in MVP through the playbook. MVP now follows the flight itself, so the delay no longer depends on Charlotte's email forwarding the airline's messages. Each change below quotes the text of version 3.34 and gives its replacement. The spec moves to 0.34 in the same session, with F38.

## Version line

Current text:

```
*MVP (Lombardi) · Version 3.34 · November 19, 2026 · Charlotte and Edward only*
```

Replacement:

```
*MVP (Lombardi) · Version 3.35 · November 19, 2026 · Charlotte and Edward only*
```

## Moments table, C-14

Current text:

```
| C-14 | Sunday, Oct. 25, 4:20pm | Charlotte's flight is two hours late, the change reaches Edward, Edward's coach tells him to call Ruth, and Ruth says yes on the phone. |
```

Replacement:

```
| C-14 | Sunday, Oct. 25, 4:20pm | Charlotte's flight is two hours late, MVP alerts Edward and shows the delay on his Today, Edward's coach tells him to call Ruth, and Ruth says yes on the phone. |
```

## C-11, how a delay reaches MVP

Current text:

```
*The coach also offers to watch for changes from Larkspur Air, and she sets her email to forward Larkspur Air's messages to MVP automatically, as she did for the Cedar Grove Elementary newsletter. She taps
```

Replacement:

```
*MVP follows the status of both Larkspur Air flights from the itinerary she forwarded in C-10, so a change to either flight reaches the playbook without anything more from her. She taps
```

## C-14, opening

Current text:

```
*At 4:15pm Larkspur Air emails Charlotte that her flight now lands at 8:40pm. Her email forwards it to MVP, and because she ticked "Send Edward anything new for these days", it goes to Edward's MVP rather than waiting for her. The pickup moves
```

Replacement:

```
*At 4:15pm Larkspur Air moves Charlotte's flight to land at 8:40pm. MVP follows the flight's status itself, so the change reaches the playbook within minutes rather than waiting on an email, and because she ticked "Send Edward anything new for these days", it goes to Edward rather than to her. The change moves Edward's leaving time, so his phone shows an alert at 4:15pm, and on his Today the flight's line turns to the delay. A change that does not move his leaving time only updates the line, with no alert. The pickup moves
```

## C-14, alert and header

Current text:

```
Charlotte hears nothing.*

**Edward's Today, as shown: the coach card**
```

Replacement:

```
Charlotte hears nothing.*

*Earlier on Sunday, the line under "Your playbook" reads "Charlotte's flight · Larkspur Air 482 · Lands 6:40pm, on time". It appears only on the day she flies home.*

**Edward's phone, as shown: the alert at 4:15pm**

> MVP · now
> Charlotte's flight is late
> It now lands at 8:40pm, so leave home at 8:00pm, after Mallory's bedtime.

**Edward's Today, as shown: the header and Now**

> Sunday afternoon, Oct. 25
>
> Your playbook · until 8:40pm tonight
> Charlotte's flight · Larkspur Air 482 · Lands 8:40pm, two hours late · [Updated]
>
> Pick Charlotte up at Bayview Regional Airport
> Leaves Alexis and Mallory with nobody at home
>
> 8:00pm · [in 3 hr 40 min]
>
> Home → Bayview Regional Airport
> Back home about 9:20pm
>
> Drive 35 min · Arrive 8:35pm · Lands 8:40pm

*The Updated mark stays until Edward opens the flight's line, which opens the pickup's page with the flight's details.*

**Edward's Today, as shown: the coach card**
```

## Section 4, Playbook table

Current text:

```
| The line on his Today | Your playbook · until the time she is back, such as "until 6:40pm this Sunday" |
```

Replacement:

```
| The line on his Today | Your playbook · until the time she is back, such as "until 6:40pm this Sunday" |
| The flight's line on his Today | On the day she flies home only: "Charlotte's flight ·" the airline and flight number "·" its status, such as "Lands 6:40pm, on time" or "Lands 8:40pm, two hours late", with the Updated mark after a change. It opens the pickup's page. |
| The flight alert | Only when a change moves his leaving time · Title: Charlotte's flight is late, or Charlotte's flight is early · Body: "It now lands at" the new time, then what to do, such as "so leave home at 8:00pm, after Mallory's bedtime." |
```

## Appendix A, her flights

Current text:

```
| Her flights | Larkspur Air from Bayview Regional Airport, leaving at 12:10pm on Friday and landing at 6:40pm on Sunday.
```

Replacement:

```
| Her flights | Larkspur Air 317 from Bayview Regional Airport, leaving at 12:10pm on Friday, and Larkspur Air 482 landing at 6:40pm on Sunday.
```

## Appendix A, flight status

Current text:

```
| Larkspur Air's messages | When she builds the playbook, the coach offers to watch for changes from Larkspur Air, and she sets her email to forward Larkspur Air's messages automatically, as she does the Cedar Grove Elementary newsletter. | Explains how a delay reaches MVP while she is not using it. |
```

Replacement:

```
| Flight status | MVP follows each flight's status from the itinerary she forwarded, by airline, flight number and date. In the prototype the 4:15pm change is staged and no flight data is fetched. | Explains how a delay reaches Edward within minutes while she is not using MVP, without depending on her email (F38). |
```

## Appendix B, items 129 and 130

Current text:

```
128. **On Edward's screen the playbook is Your playbook.** Charlotte's side keeps Edward's playbook. Greg chose the name on Nov. 19, 2026.
```

Replacement:

```
128. **On Edward's screen the playbook is Your playbook.** Charlotte's side keeps Edward's playbook. Greg chose the name on Nov. 19, 2026.
129. **Decided November 19, 2026: Edward's Today shows Charlotte's flight.** Greg asked for it because Edward has her flight in MVP through the playbook. On the day she flies home, a line under "Your playbook" gives the flight's status, the pickup's pass shows the landing time, and his phone alerts him when a change moves his leaving time. MVP follows the flight itself, so the delay no longer depends on Charlotte setting her email to forward the airline's messages, which C-11 asked of her until version 3.35. A change that does not move his leaving time updates the line quietly, because an alert he cannot act on is noise (F38, issue Y9).
130. **Flight status is for the playbook only, for now.** Whether Charlotte's own Today follows a flight when she picks someone up, such as Claire visiting, is parked with F38.
```

## Appendix C

Current text:

```
# Appendix C: change log

## Version 3.34, November 19, 2026
```

Replacement:

```
# Appendix C: change log

## Version 3.35, November 19, 2026

Greg asked that Edward's Today show Charlotte's flight and alert him when it is delayed. Version 3.34 is kept in the archive.

| # | Change |
| ----- | ----- |
| 1 | C-14 gains the alert on Edward's phone at 4:15pm and his Today's header and Now, with the flight's line under "Your playbook", and its opening says MVP follows the flight itself. |
| 2 | C-11 drops the email forwarding rule for Larkspur Air, because MVP follows both flights from the itinerary. |
| 3 | The Playbook copy table gains the flight's line and the flight alert, Appendix A names the flights and replaces the forwarding row with flight status, the moments table's C-14 row follows, and Appendix B gains items 129 and 130. |

## Version 3.34, November 19, 2026
```
