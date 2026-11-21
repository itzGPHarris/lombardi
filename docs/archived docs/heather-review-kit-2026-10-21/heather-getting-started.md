# Reviewing MVP's wording: your guide

Thank you for taking this on. You'll look at the app's screens in Figma, say what you'd like worded differently, and your own Claude will turn each change into a row in a shared sheet. Greg then applies the changes to the documents and the designs. You never edit the documents yourself, and nothing you do can break anything.

Setting up takes about fifteen minutes, once. After that, each review session is as long as you want it to be.

If you get stuck at any point, type **help** in your Claude project. It knows this guide and will walk you through whatever step you're on.

## Why getting it right now matters

The fixtures document is where the prototype gets its words. When Greg starts building, every word on every screen is copied straight from the fixtures, so the wording we settle now goes into the prototype as it is. A change made after the build starts means rework in the code as well as in the documents and Figma, which makes this review the cheapest point to get the words right. If something bothers you even a little, note it now rather than later.

## What you need

- Your Claude account.
- The Figma link Greg sent you. You can view and comment, which is all this needs.
- The shared Google Drive folder "MVP vocabulary review". It holds the change sheet and five files for your Claude project.

## Part 1: Set up your Claude project (once)

1. **Download the files.** Open the shared folder and download these five files to your computer: `project-instructions-for-heather.md`, `story-fixtures.md`, `screen-map.md`, `vocabulary-guide.md` and `heather-getting-started.md` (this guide).
2. **Create a project.** Go to claude.ai/projects and click **+ New Project**. Name it "MVP vocabulary review". The name and description are only for you, so anything works.
3. **Add the instructions.** In the project, click **Set project instructions**. Open `project-instructions-for-heather.md` on your computer in any text app, select everything, copy it, paste it into the box, and click **Save instructions**.
4. **Add the reference files.** In the project's knowledge area on the right, click **+** and upload the other four files: `story-fixtures.md`, `screen-map.md`, `vocabulary-guide.md` and `heather-getting-started.md`.
5. **Check it works.** Start a chat in the project and type "hi". Claude should say it's ready, that you can describe wording changes in your own words, and that you can type "help" at any time. If it answers like an ordinary chat instead, the instructions didn't save, so go back to step 3.

## Part 2: Start with the words used everywhere

Open `vocabulary-guide.md` and skim it. It lists the words MVP repeats across the app, such as the tab names, the labels on a plan item and how the coach introduces itself, along with six wording rules Greg set on October 20 and the few things that are fixed.

Changing a repeated word once is easier than catching it on every screen, so this is the best place to begin. When something doesn't sound right, tell your Claude in plain words, for example "I'd rather the Game plan tab was called something warmer" or "Suggested sounds too much like a system message". Claude will show you everywhere the word appears, offer options if you'd like them, and write the change as a row.

## Part 3: Go through the screens

1. **Open a frame in Figma.** Each screen's name starts with a moment ID, such as "C-06 · Today · 11:45 am". C-06 is Charlotte's sixth moment in the week.
2. **Tell Claude what you'd change.** Mention the frame name and describe it however comes naturally, for example "On C-06 Today, the coach card feels too long" or "On the Leave sheet, 'Back about' sounds odd".
3. **Pick the wording.** Claude finds the exact words on that screen, suggests replacements if you want them, and checks them against the app's rules. If something you want breaks a rule, Claude will say so and record it as a decision for you and Greg rather than dropping it.
4. **Keep going.** Do as many screens as you like before moving rows into the sheet. Claude keeps track.

## Part 4: Put your rows in the sheet

1. When you've finished a few changes, type **give me the rows**.
2. Claude shows a grey box of text with a copy button. Click the copy button.
3. Open the sheet "MVP vocabulary review: changes" and go to the **Changes** tab.
4. Click the first empty cell in **column B**. Column A fills in an ID by itself.
5. Paste. Each part should land in its own column, from B to G.
6. Tell Claude "pasted" so it starts a fresh batch.

If everything lands in one column, press Undo straight away (Cmd+Z on a Mac, Ctrl+Z on Windows) and tell Claude. It has two other ways to give you the rows, and emailing them to Greg always works as a last resort.

## Part 5: Questions and Greg's questions

**If you have a question for Greg,** such as why a screen works the way it does, leave a comment on that frame in Figma rather than writing a row. The sheet is only for changes you want made. Claude can help you word the question.

**Greg has questions for you too.** Rows with an orange Status that says "Needs Heather" are things only you can decide, such as signing off a changed decision. Paste the row into your Claude chat if you'd like help thinking it through, or type your answer straight into that row's **Proposed** cell.

## Part 6: After a batch

When you've finished a session, let Greg know. He reads each row and marks it Accepted, Changed or Parked, with a note when he changes or parks something. Then he applies the accepted rows to the documents and the Figma frames.

Once the frames are updated, look at them and set each of your rows to **Closed**, or to **Reopened** with a few words in Why if it still isn't right.

Greg will then send you a new `story-fixtures.md`. In your project's knowledge area, remove the old one and upload the new one, so your Claude always works from the latest words.

## A few ground rules

- Please don't delete or move rows in the sheet, because the IDs would shift. If you change your mind, set the row's Status to **Parked** and add a few words in Why.
- One change per row. Claude takes care of this for you.
- Your Claude never rewrites the documents. If it ever offers to, say no and ask for rows instead.

## If you get stuck

Type **help** in your project at any time. These are the most common snags.

| What happened | What to do |
| ----- | ----- |
| I can't find the sheet | It's in the shared "MVP vocabulary review" folder in Google Drive, named "MVP vocabulary review: changes". |
| Claude can't find the screen I mean | Give it the frame name from Figma, which starts with a moment ID such as "C-06", or paste the exact words you see. |
| I pasted in the wrong place | Press Undo straight away. If it's too late, select the wrong cells and press Delete to clear them, but don't delete the row. |
| I changed my mind about a row | Set its Status to Parked and add a few words in Why. |
| Is this a change or a question? | If you know what you want instead, it's a row. If you don't know why it's there, it's a Figma comment. |
| Claude's answers seem off or generic | Check you're chatting inside the "MVP vocabulary review" project, not in a regular chat. |
| Anything else | Ask Greg. Nothing you do here can break the app or the documents. |
