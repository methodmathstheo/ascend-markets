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
    slug: "midterms-oil-brent-100",
    title: "The midterms, not the oil market, will end Brent's run above $100",
    date: "2026-10-14",
    section: "commodities",
    author: "christian",
    contributors: ["theo"],
    tags: ["Oil", "Brent", "Iran", "Futures", "Options"],
    ogImage: "assets/og/midterms-oil-brent-100.png",
    summary: "With Gulf exports at half their pre-war level and global stocks draining, supply alone won't pull Brent back below $100, but pressure on Washington before the 3 November midterms makes a deal, and a sharp fall in oil, increasingly likely.",
    body: `
## 1. The story

Since the US and Israel struck Iran at the end of February, shipping through the Strait of Hormuz, which carried around a fifth of the world's oil before the war, has been heavily disrupted. Brent crude rose more than 60% in March alone, its biggest monthly gain on record, and closed the month at $118.35, almost double its December 2025 low of $58.92.

A two-week ceasefire announced on 7 April briefly knocked Brent below $95, but talks stalled and a US naval blockade of Iranian ports resumed on 14 July. On 10 October, US forces disabled the Panama-flagged cargo ship *Ocean Molica* in the Gulf of Oman as it tried to run that blockade. That came two days after President Trump pledged not to attack Iran before the 3 November midterms. Brent now trades just above $100.

<figure class="chart" data-chart="brent-price-2025-2026"></figure>

## 2. The numbers

Four figures explain why prices have stuck above $100.

| Measure | Latest | Context |
|---|---|---|
| Gulf oil exports | ~13 mb/d (Aug) | Nearly half the pre-war level |
| Oil flows through Hormuz | 7.6 mb/d (Aug) | Around 20 mb/d before the war |
| Change in global oil stocks | −3.1 mb/d (Aug) | Stocks at their lowest since 2023 |
| Brent: front month vs 2030 | ~$100 vs ~$70 | Steep backwardation |

**Gulf exports.** In past conflicts, such as the start of the Iran-Iraq War in 1980, other producers filled the gap and prices barely moved. This time the missing barrels are too large to replace: Hormuz flows are barely a third of their pre-war level, and bypass pipelines carried only a further 5.5 mb/d in August. The IEA expects world supply to fall 5.7 mb/d this year, about 6%, and no longer expects Gulf output to fully recover until 2027.

**Stocks.** Inventories have been the market's shock absorber. A draw of 3.1 mb/d cannot run for long, and every month it continues leaves less cushion for the next disruption.

**The curve.** Futures traders think the shock is temporary. On the day after the April ceasefire, front-month Brent fell 13.3%, its biggest one-day percentage fall in six years, while the six-month contract fell only 2.3%. The back of the curve had already priced in a return to normal.

<figure class="chart" data-chart="hormuz-flows"></figure>

<figure class="chart" data-chart="ceasefire-day-moves"></figure>

## 3. Why it matters

The mechanism is simple: the oil exists, but it can't reach the market. When supply is physically missing, inventories drain first, then price has to rise until enough demand disappears. That is already happening. The IEA expects global oil demand to fall by 2.5 mb/d this year, the kind of drop normally seen only in recessions.

The winners are producers outside the Gulf. The US, Canada, Brazil, Argentina and Guyana are expected to add 1.4 mb/d of supply this year, all of it sold at wartime prices. The losers are fuel-intensive businesses and importers. Refined product exports from the Gulf are down almost 60%, so diesel and jet fuel have risen faster than crude, hitting airlines, hauliers and energy-importing economies in Europe and Asia.

The second-order effect is inflation. Higher energy costs lift headline inflation, which erodes the real value of the fixed coupons bonds pay, so investors demand higher yields. That is how a blockade in the Gulf of Oman ends up in UK mortgage rates.

Because the barrier is political, only a political deal removes it. Around 60% of Americans disapprove of Trump's handling of Iran, and fuel prices are a big part of that. I would look to short oil shortly before the midterms, positioning for that pressure to turn into a deal.

## 4. The other side

The strongest counter-argument is that a deal won't fix supply quickly. Saudi facilities have been damaged, shipping insurers will stay cautious, and depleted inventories will need restocking, which adds demand just as barrels return. The IEA already assumes Gulf output only fully recovers in 2027, so the front of the curve could stay elevated even after a ceasefire.

A deal may also not come. Iran's President Pezeshkian called talks with the US "meaningless" on 5 October, and Axios has reported that full-scale strikes could resume after the vote. My answer: in April, Brent fell 13% on the announcement alone, before a single extra barrel moved.

## 5. What I'm watching

- **3 November: US midterms.** Trump's no-strike pledge runs until polling day. A deal announced either side of the vote is the catalyst for this view; resumed strikes would break it.
- **$94.75 on Brent.** That is where the front month settled after the April ceasefire. A close below it would show the market pricing a durable deal. A move back above $110, the pre-ceasefire level, would signal escalation.
- **The IEA's November Oil Market Report (mid-November).** Hormuz flows were 7.6 mb/d in August. A clear rise would confirm supply is returning; another large stock draw would weaken the case for lower prices.

:::desk
## Desk comment: Options & Futures

*Theo Elwell, Options & Futures desk*

I share Christian's read on the politics. Where I'd push back is the instrument: on a curve this steep, a straight short in futures is the wrong way to own the view.

First, the roll works against you. In backwardation, each contract tends to drift up towards spot as it nears expiry; in August, each front month was priced around $1.50 to $2 below the one before it. If nothing happens, a short gives up roughly that much a month simply by waiting. Second, gap risk: April showed oil can move 13% overnight, straight through any stop-loss.

As a team, our core position would be a Brent put spread: buy a put near the current price and sell a lower strike, say around $85, to cheapen it while implied volatility is elevated. The premium is the most we can lose. Options on the January Brent contract expire in late November, giving a deal a few weeks after the vote to land.

Alongside that, a smaller calendar spread, short a near-dated contract and long a later one, which pays if a deal flattens the curve as it did in April. We'd avoid naked short futures into the vote, and size everything so the worst case is a loss we planned for.
:::

---

*Prices as at 14 October 2026. Sources: IEA Oil Market Report (September 2026); US Energy Information Administration; ICE Futures Europe; US Central Command; Reuters/Ipsos; AP; Axios. Views are the authors' own and do not constitute investment advice.*
`
  },
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
