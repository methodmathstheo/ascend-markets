# Publishing an Ascend Markets note

The site is a static site with no build step. Everything you touch weekly is in `posts.js`.
`index.html` holds the layout, styles and site logic, and does not need editing to publish.

## The weekly note, in four steps

1. Open `posts.js`.
2. Copy the template from the comment at the top of the file.
3. Paste it at the **top** of the `POSTS` array (newest first) and fill it in.
4. Commit and push. The site updates as soon as the host picks up the change.

```bash
git add posts.js
git commit -m "Note: <short title>"
git push
```

## The template

```js
{
  slug: "short-url-name",                 // lowercase, hyphens, never change it after publishing
  title: "The headline of the note",
  date: "2026-10-19",                     // YYYY-MM-DD, the Monday of the week you publish
  section: "equities",                    // see the list below
  author: "theo",                         // theo | christian | both
  tags: ["Earnings", "US"],               // one to three short labels
  summary: "One or two sentences that tell the reader what the note covers.",
  body: `
The opening paragraph sets up the story in plain terms.

## The story

What happened, with the detail that matters.

## The numbers

| Measure | Latest | Prior |
| --- | ---: | ---: |
| Example | 4.25% | 4.00% |

## Why it matters

Who is affected, and what the move says about the wider market.

## What we're watching

- The first signal that would confirm the view.
- The data point that would challenge it.

> A pull quote for the single idea the note turns on.
`
},
```

### Fields

| Field | Notes |
| --- | --- |
| `slug` | The URL is `#/post/<slug>`. Changing it breaks existing links, so set it once. |
| `date` | Use the Monday of the publishing week. The issue number ("No. 07") and the cadence strip are both worked out from it. |
| `section` | One of `equities`, `fx`, `fixedincome`, `derivatives`, `commodities`, `realestate`, `macro`, or `editorial` for housekeeping posts. |
| `author` | `theo`, `christian` or `both`. Controls the byline, the avatars and the author filter. |
| `tags` | Free text labels shown on the card and the article. |
| `summary` | Shown on cards and as the standfirst on the article. |
| `contributors` | Optional. Author keys for a desk comment, e.g. `["theo"]`. |
| `ogImage` | Optional. Path to a 1200 x 630 share image. |
| `body` | Markdown. `##` headings, `-` bullets, `>` pull quotes, `|` tables, `` `code` ``. |

### Charts

Charts live in `charts.js` and are placed in a note with a single line:

```html
<figure class="chart" data-chart="brent-price-2025-2026"></figure>
```

Each chart is drawn as inline SVG at the width of the column, redrawn on resize, and takes its
colour from the note's section. The caption, figure number and source line all come from the chart's
entry in `charts.js`, so a note never repeats them.

**Never type data into a chart by hand.** Series that come from a public source are saved as CSV
under `assets/data/` and that file is the record. The Brent series in `charts.js` is generated from
`assets/data/brent-2025-2026.csv` (US EIA via FRED, series `DCOILBRENTEU`). To refresh it, download
the CSV again, filter to the dates you want, drop the rows marked `.`, and regenerate the constant.

### A desk comment from a second voice

Wrap a second contributor's section in a `:::desk` fence and it renders as a callout:

```markdown
:::desk
## Desk comment: Options & Futures

*Theo Elwell, Options & Futures desk*

The argument goes here.
:::
```

Add their key to `contributors` in the note (`contributors: ["theo"]`) and a line reading
"Desk comment from Theo Elwell, Options & Futures" appears under the byline.

### Share image

A note may set `ogImage: "assets/og/<slug>.png"`, used as the Open Graph and Twitter card image.
`tools/og-card.html` builds one at 1200 x 630: edit the headline and chart id in that file, open it
locally and screenshot it. This is optional; without it the note falls back to the site image.

### Drafts and scheduling

A note can be staged without going live:

```js
draft: true,                 // never appears on the live site
publishAt: "2026-10-26",     // or: appears by itself on this date
```

A note with either field is left out of the home page, the archive, the section pages, the cadence
strip and the search of slugs, and its address returns "Article not found". To read it before it
goes live, add `?preview=1` before the hash:

```
https://ascendmarkets.co.uk/?preview=1#/post/<slug>
```

Preview mode shows every staged note with a "Draft, not published" label. Remove `draft: true`, or
let the `publishAt` date arrive, and the note appears on its own. Issue numbers are worked out from
live notes, so a draft never takes a number from a published one.

Staged notes still sit in a public repository, so treat them as visible to anyone who looks for them.

### Data-driven charts

Beyond the hand-built charts in `charts.js`, a note can use the engine in `chart-engine.js`:

```html
<figure class="chart" data-chart-json="assets/data/blog-3/c04-vix-curve.json"></figure>
```

Each JSON file carries its own data plus `source`, `source_url` and `as_of`, and the engine draws it
as inline SVG at the column width. Supported `type` values are `line`, `step`, `bars` (vertical,
horizontal or diverging), `panels`, `timeline`, `table` and `pl` (an option payoff). Asset classes
keep one colour throughout: equities, bonds, sterling and UK rates map to the matching section
colours.

### Writing the body

- Markdown only. Tables are made scrollable automatically and use tabular figures.
- Keep to the four part shape: the story, the numbers, why it matters, what we're watching.
- British English, plain and confident, no hype.

## Adding or renaming a section

Sections are defined once, in the `SECTIONS` array near the top of the script in `index.html`:

```js
{key:'equities', name:'Equities', desc:'Single names, indices and the earnings that move them.',
 light:'#1C6B58', dark:'#4FC0A3'},
```

`key` is what you put in a post's `section` field, `light` and `dark` are the muted accent colours
used for the tag label, the cadence cell and the thin rule on cards. Add `listed:false` to keep a
section out of the sections grid (that is how `editorial` is handled). Changing a `key` means
updating every post that uses it.

## Founder photos

Drop the files in `assets/founders/` with these exact names:

- `assets/founders/theo.jpg`
- `assets/founders/christian.jpg`

Recommended: **800 x 1000px** (4:5 portrait), JPG or WebP, **under 300KB**. Crop so the face is
centred horizontally and sits about **40% down** the frame: the small round avatars are cut from
the top of the portrait and that is what lines the face up in them. If you use WebP, change
the `photo` path in the `AUTHORS` config in `index.html` to match the new extension.

The photos are used in three places: the profile cards on the About page, the small circular avatars
in bylines, and the "Founded by" row on the home page. Until a file exists, the site shows a monogram
placeholder in the same frame, and it falls back to that automatically if an image fails to load, so
nothing breaks if a photo is missing.

To replace a photo, overwrite the file with the same name and push.

## Publishing on GitHub Pages

1. Push to the repository's default branch.
2. In the repository, go to **Settings > Pages**.
3. Under **Build and deployment**, set **Source** to *Deploy from a branch*, choose the branch and
   the `/ (root)` folder, then save.
4. The site goes live at `https://<user>.github.io/<repo>/` within a minute or two.

`.nojekyll` is already in the repository, so GitHub Pages serves the files as they are.

## Publishing on Railway

The repository includes a `Dockerfile` that serves the folder with Caddy on Railway's `$PORT`.

1. In Railway, create a project from the GitHub repository.
2. Railway detects the `Dockerfile` and builds it. No environment variables are needed.
3. Under **Settings > Networking**, generate a domain to make it public.

Every push to the connected branch redeploys the site.

### Security headers

`Caddyfile` sets the response headers for the deployed site: a content security policy that
allows only the Google Fonts stylesheet and the pinned `marked` build from outside, plus
`nosniff`, `X-Frame-Options: DENY`, a strict referrer policy and a locked down permissions
policy. If you ever add a new external script, stylesheet or image host, add it to the matching
`Content-Security-Policy` directive or the browser will block it.

### The custom domain

The site runs on `ascendmarkets.co.uk`. Railway serves it from the generated
`*.up.railway.app` host, and two DNS records at the registrar point the domain at it:

| Type | Name | Value |
| --- | --- | --- |
| CNAME (or ALIAS / ANAME) | `@` | the `*.up.railway.app` host Railway shows |
| TXT | `_railway-verify` | `railway-verify=<token Railway shows>` |

Both records are required: without the TXT record Railway will not verify ownership and the
domain returns a 404. A root domain needs a registrar that supports CNAME flattening or ALIAS
records, such as Cloudflare, Namecheap or DNSimple. If the domain changes, update the
`canonical`, `og:url` and `og:image` tags in the head of `index.html` to match.

## Checking it locally

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000` and check the home page, a note, a section page and About.
