# Writing a note

For Christian, Jimmy, Zac and Billy. You do not need to install anything. Everything happens in the
browser on github.com, and the site updates itself a minute or two after you save.

You only ever touch one file: **`posts.js`**. Nothing else on the site can break from editing it.

## First time only

1. Accept the repository invitation that arrives by email, or open
   <https://github.com/methodmathstheo/ascend-markets> while signed in to GitHub.

## Adding this week's note

1. Open **[posts.js](https://github.com/methodmathstheo/ascend-markets/blob/main/posts.js)**.
2. Click the **pencil icon** at the top right to edit.
3. At the very top of the file there is a commented-out template between the `TEMPLATE` lines.
   Copy it.
4. Paste it immediately after the line that reads `const POSTS = [`, so your note sits at the top of
   the list. Newest note first, always.
5. Fill in the fields. Keep every quote mark and comma exactly where the template has them.
6. Scroll to the bottom, write a short description of the change (for example "Note: gilt yields and
   the Budget"), and click **Commit changes**.

The site rebuilds on its own. Give it two minutes, then hard refresh the page (Cmd+Shift+R).

## The fields

| Field | What to put |
| --- | --- |
| `slug` | The web address, lowercase with hyphens, for example `gilt-yields-budget`. Never change it once published. |
| `title` | The headline. |
| `date` | `YYYY-MM-DD`. Use the Monday of the week you are publishing. |
| `section` | One of `equities`, `fx`, `fixedincome`, `derivatives`, `commodities`, `realestate`, `macro`, `editorial`. |
| `author` | `christian`, `theo`, `jimmy`, `zac`, `billy`, or `both` for the two founders. |
| `tags` | One to three short labels in square brackets, for example `["Gilts", "Budget"]`. |
| `summary` | One or two sentences. This is what appears on the home page under the headline. |
| `body` | The note itself, in Markdown. See below. |

## Writing the body

The body sits between two backticks. Markdown is plain text with a few marks:

```markdown
## A heading

A normal paragraph.

- A bullet point
- **Bold text** for the lead-in of a bullet

> A pull quote for the single idea the note turns on.

| Measure | Latest | Prior |
| --- | ---: | ---: |
| Bank Rate | 3.75% | 3.50% |
```

Tables become scrollable on phones automatically, and figures use tabular numerals.

## Rules of the house

- British spelling.
- Plain and confident, no hype.
- **No em dashes.** Use a comma, a colon or a full stop.
- Every number needs a source you could point to.

## If something looks wrong

Nothing you do in `posts.js` is permanent. Open the file's **History** tab on GitHub, find the
version before your change and restore it, or just message Theo. The site always matches whatever
the file says.
