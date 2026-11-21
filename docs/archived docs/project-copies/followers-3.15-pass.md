# Followers pass for fixtures 3.15 and spec 0.15

*MVP (Lombardi) · October 15, 2026*

These are the places outside the fixtures and the spec that describe Now or Today as read-only, or carry the old version numbers. Each change quotes the current text and gives the replacement. The screen map changes in Step 5, once the new boards have frame IDs.

## AGENTS.md

**Version line.** Replace "*Current versions: story fixtures 3.14, spec 0.14. Last updated October 14, 2026.*" with:

> *Current versions: story fixtures 3.15, spec 0.15. Last updated October 15, 2026.*

**"Today (spec §5)".** Current sentence:

> Then come four parts in order. Now holds the next departure, its checklist, Remind me, Directions and the drive line.

Replace with:

> Then come four parts in order. Now holds the next thing today that needs her at a set time, usually the current leg of her run, with its checklist, Remind me, Directions, the drive line and the next station, and it steps down the run as each stop comes due. When nothing timed is left it holds her leading task, and then a quiet line. Today changes one thing, when she leaves, through the Leave sheet, which draws her run as a line of stops and holds the coach's Plan B and Plan C. "Other options" on the coach card opens that sheet on Today. Every other edit belongs to the game plan.

**"The plan (spec §4)".** Current sentence:

> An item shows the time the thing itself starts, such as ballet at 4:15 pm, and departures on Today show when to leave, such as 3:55 pm.

Replace with:

> An item shows the time the thing itself starts, such as ballet at 4:15 pm or Westview at 8:30 am, and the run on Today shows when to leave, such as 3:55 pm. Every leaving time is the next stop's due time, minus the drive, minus five minutes, rounded down to five minutes, and never before the stop it leaves is due. The seed holds the computed values in its runs.

**"Rules that must never be broken".** Add this rule after rule 5:

> 5a. **Today edits only leaving times and her own start times.** Nothing on Today changes a note, an owner, a day, or an item someone else owns or has answered. Tapping a time never switches tabs.

**"Demo controls (spec §15)".** In the last sentence, replace "including C-04b, C-05b, C-05c, C-06b, C-06c and C-08b" with "including C-03b, C-04b, C-05b, C-05c, C-06b, C-06c and C-08b".

## CLAUDE.md

**Version line.** Replace "*Current versions: story fixtures 3.14, spec 0.14. Last updated October 14, 2026.*" with:

> *Current versions: story fixtures 3.15, spec 0.15. Last updated October 15, 2026.*

CLAUDE.md imports AGENTS.md, so the Today wording follows from the change above. Nothing else in it describes Now.

## Project instructions

Save the result as project-instructions-v3.15.md and paste it into the project settings.

**"Navigation", the Today paragraph.** Current text:

> Then come four parts in order. Now shows the next departure with its time in large type, a checklist that merges what goes with each child and her own tasks, Remind me, Directions when she is driving, and a line giving the drive.

Replace with:

> Then come four parts in order. Now shows the next thing today that needs her at a set time, usually the current leg of her run, with its leaving time in large type, a checklist that merges what goes with each child and her tasks for that trip, Remind me, Directions when she is driving, a line giving the drive and a line naming the next station. A run is drawn as a subway line of stops, and home is just one station on it. When nothing timed is left, Now shows her leading task, and then a quiet line. Today changes one thing, when she leaves, through the Leave sheet, and everything else is edited in the game plan, so Today never turns into busy work.

**"How the plan works".** Current sentence:

> When something changes, the coach recommends a way forward and keeps the other options a tap away, and she may choose another.

Replace with:

> When something changes, the coach recommends a way forward on the coach card and keeps a Plan B and a Plan C ready at the foot of the Leave sheet, one tap away on Today, and she may choose another. At least one backup depends on nobody else saying yes, wherever one exists.

**"How the plan works", travel times.** Current text:

> Travel times are worked out from the zip code she gives on the welcome screen, with five minutes added so an estimate errs early.

Replace with:

> Travel times are worked out from the zip code she gives on the welcome screen for legs from home, and between places for the rest. Every leaving time is the next stop's due time, minus the drive, minus five minutes, rounded down to five minutes, so an estimate errs early.

**"The documents".** Replace "currently version 3.14" with "currently version 3.15", "Version 3.14 covers Charlotte and Edward only" with "Version 3.15 covers Charlotte and Edward only", and "currently version 0.14" with "currently version 0.15".

## README.md

Replace the version numbers in its version line with fixtures 3.15 and spec 0.15. Nothing in it describes Now.
