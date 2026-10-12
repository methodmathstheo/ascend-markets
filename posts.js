/* =============================================================
   ASCEND MARKETS - POSTS
   This file holds the notes and nothing else. To publish the
   weekly note, copy the template below, paste it at the TOP of
   the POSTS array and fill it in. See PUBLISHING.md for detail.

   TEMPLATE
   ---------------------------------------------------------------
  {
    slug: "short-url-name",                 // lowercase, hyphens, never change it after publishing
    title: "The headline of the note",
    date: "2026-10-19",                     // YYYY-MM-DD, the Monday of the week you publish
    section: "equities",                    // equities | fx | fixedincome | derivatives | commodities | realestate | macro | editorial
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
   --------------------------------------------------------------- */

const POSTS = [
  {
    slug: "why-a-weekly-markets-note",
    title: "Why we're writing a weekly markets note",
    date: "2026-10-12",
    section: "editorial",
    author: "both",
    tags: ["About this blog"],
    summary: "What this blog is for, how each note is structured, and what to expect each week.",
    body: `
Markets generate more commentary than anyone can read. Most of it is either too fast to be useful or too long to finish. This blog is our attempt at something in between: one story a week, explained properly, in a few minutes of reading.

Writing regularly also forces discipline. It is easy to hold a vague opinion about a market move. It is much harder to write it down, back it with numbers, and come back a week later to see whether it held up.

## How each note is structured

Every note follows the same shape, so it is quick to read and easy to compare week to week:

- **The story.** What happened, in plain terms.
- **The numbers.** The data that matters, and the context that makes it meaningful.
- **Why it matters.** Who is affected, and what the move tells us about the wider market.
- **What we're watching.** The signals that would confirm or challenge the view.

## What we'll cover

Each note sits in one of seven sections:

- **Equities.** Single names, indices and the earnings that move them.
- **FX.** Currency pairs, policy divergence and cross-border flows.
- **Fixed Income.** Government and corporate debt, yields and the shape of the curve.
- **Options & Futures.** Volatility, positioning and the contracts behind the price.
- **Commodities.** Energy, metals and agriculture, from production to price.
- **Real Estate.** Property markets, listed landlords and the cost of financing them.
- **Macro.** Cross-asset and economics: growth, inflation, labour and policy.

Where it helps, we lean on Christian's mathematics and data science background and Theo's economics to look at the numbers behind a story rather than just the headline.

> The aim is simple: one clear, well-supported idea every week.

## A note on views

Everything here is our own analysis, written for learning and discussion. None of it is investment advice.
`
  }
];
