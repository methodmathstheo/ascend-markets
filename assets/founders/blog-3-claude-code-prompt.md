# Prompt for Claude Code: stage Ascend Markets Blog #3 with charts

Paste everything below this line into Claude Code, opened in the Ascend Markets website repo.

---

You are preparing a new post for the Ascend Markets blog (www.ascendmarkets.co.uk). Build it as a draft or scheduled post. **Do not publish it live.** Theo will confirm the publish date next week.

## Post details

- **Title:** Blog #3: Insure your stocks with options. Hedge your bonds with futures.
- **Author:** Theo Elwell (sole author; Options & Futures desk). No co-authors or other bylines.
- **Series number:** 3
- **Data as of:** 15 October 2026 (state this under the byline)
- **Tags:** options, futures, volatility, equities, bonds, FX, UK rates, property
- **Status:** draft or scheduled, not live

## Step 1: learn the site first

Before writing anything, inspect the repo and match what is already there:

- Find where existing posts live and copy their file format, front matter and slug pattern.
- Find any existing chart component, library or image pipeline and use it. If there is none, choose one lightweight option (for example Chart.js, or SVGs generated at build time), use it for every chart, and tell me what you picked.
- Match the site's existing fonts, colours, spacing and dark-mode handling.

## Step 2: data rules (non-negotiable)

1. Every number in a chart comes from this prompt or from the public source named for that chart. Never invent, estimate or interpolate a value.
2. Store each chart's data in its own data file (for example `data/blog-3/c04-vix-curve.json`), with fields for `source`, `source_url` and `as_of`.
3. For time-series charts, fetch the named public series. If the fetch fails, fall back to the dated anchor points given and plot them as labelled points, not a line. Tell me which charts fell back.
4. After fetching, check the series against the anchor points given. If they differ by more than a rounding error, keep the anchor value in the annotation and flag the mismatch to me.
5. Charts marked **Illustrative** must say "Illustrative" in the subtitle.

## Step 3: chart style rules

- Every chart gets: a title that states the point (not just the subject), a subtitle with units, a source line with as-of date underneath, and alt text that states the takeaway.
- Fixed colour per asset class across all charts: Equities, Bonds, Sterling, UK rates. Use one accent colour only for annotations and highlights.
- Annotate the key number directly on the chart rather than relying on the reader to find it.
- Charts must work at phone width (about 375px) with no horizontal scrolling.
- British spelling. **No em dashes anywhere**, in text, titles, captions or alt text.

## Step 4: the article

Insert the text below exactly as written, replacing each `{{Cn}}` marker with the chart of that ID from Step 5. Keep every source link.

```markdown
# Blog #3: Insure your stocks with options. Hedge your bonds with futures.

**In one sentence:** with five market-moving events in 16 days, insurance on stocks is cheaper than usual while insurance on bonds and sterling carries a premium, so I would buy options on equities and use futures and forwards everywhere else.

## The basics

Futures, forwards and options all do one job: they fix a price today for something that happens later.

- A **future** is an exchange-traded agreement to buy or sell at a set price on a set date. You post margin, a fraction of the contract's value, instead of paying in full.
- A **forward** is the same agreement struck privately, usually with a bank. It is the standard tool for hedging currency.
- An **option** is the right, but not the obligation, to buy (a call) or sell (a put) at a set price. The buyer pays a premium up front, and that premium is the most they can lose.

| | Shares | Futures | Options (bought) |
| --- | --- | --- | --- |
| Cash up front | The full price | Margin only | The premium |
| Profit from a fall | Only by shorting | Yes, sell the future | Yes, buy a put |
| Worst case | Lose what you paid | Losses can exceed margin | Lose the premium |
| Hedge without selling | No | Yes | Yes |
| Direct exposure to rates, FX or volatility | No | Yes | Yes |

The real edge over shares is that derivatives separate risk from ownership. You can keep a portfolio you believe in, switch off the risk you do not want for the next three weeks, then switch it back on.

{{C1}}

## 1. The story

Inflation ran hot this week. US consumer prices beat forecasts on 14 October, and a day later September producer prices rose 1.3% in a single month against a 0.5% consensus. Futures now price a December Fed hike at 92%, on top of September's rise to 3.75% to 4.00%.

Bonds have done the adjusting. The US 10-year yield touched 5.34% on 1 October, the highest since 2002. The UK 10-year has reached 5.44%, the highest since 2007, and the 30-year gilt is above 6%. Average five-year mortgage fixes are near 6% while Bank Rate sits at 3.75%. Sterling fell to 1.3137 on 14 October, an 11-month low.

{{C7}}

Stocks have barely noticed: the S&P 500 closed at 7,744 on Thursday and the VIX at 16.45. Investors are still reaching for derivatives, with US options volume running 21% ahead of last year's record pace. Five scheduled events now land in 16 days: UK CPI (21 Oct), the Budget and the Fed (28 Oct), the midterms (3 Nov), the Bank of England (5 Nov) and US payrolls (6 Nov).

{{C12}}

{{C13}}

## 2. The numbers

Implied volatility is the price of insurance in the options market, and right now it is out of line across asset classes.

| Asset class | Gauge | Latest | Versus normal |
| --- | --- | --- | --- |
| Equities | VIX, S&P 500 implied vol | 16.45 (15 Oct) | 15% below its long-run average of 19.4 |
| Bonds | MOVE, US Treasury implied vol | 99 (14 Oct) | 78% above its January low of 55.8 |
| Sterling | GBP/USD one-month implied vol | 5.96% (28 Sep) | 0.77 points above realised, with expiry over the Budget |
| UK rates | Bank Rate implied by SONIA | About 4.5% by April 2027 (12 Oct) | Three hikes priced; economists expect two |

{{C2}}

Three details sharpen the picture.

- **The election is priced as a one-day event.** SPX options price a 1.00% move for the session after the vote, against 0.68% for an ordinary day. Yet the October VIX future, whose window spans 3 November, settled 0.50 points below November on 15 October. In late August the same two contracts traded at 19 and 19.7.
- **Sterling bears are crowded.** Of GBP/USD options expiring around Budget week, 67% bet on a weaker pound, against 55% across all trades (late September data).
- **The rates market is ahead of the Bank.** BoE chief economist Huw Pill said this week he is sceptical of the four hikes in a year that markets imply.

{{C6}}

{{C4}}

{{C5}}

{{C3}}

{{C11}}

{{C8}}

## 3. Why it matters

My rule for this autumn: buy options where insurance is cheap, and use futures and forwards where it is dear. Futures and forwards carry no premium, so their cost does not rise when fear does.

{{C14}}

- **Equities: buy the put spread.** Buy an S&P 500 or FTSE 100 put about 5% below the market, sell one about 10% below, and choose an expiry after 6 November. One trade covers all five events while US equity vol sits 15% below average. For a single concentrated holding, a collar (selling an upside call to fund a put) builds the same floor at close to zero cost. To cut market exposure without selling a share, sell index futures against part of the book.
- **Bonds: sell futures, not options.** At a MOVE of 99, gilt and Treasury options are expensive. Selling Long Gilt futures into the Budget cuts duration at no premium, and the position closes in one trade the day after.
- **Sterling: use a forward and lean against the crowd.** If the Budget is credible, a crowded short in sterling unwinds fast, and a rebounding pound is exactly what hurts a UK investor in US stocks. A forward locks today's rate without paying the Budget premium built into options.
- **Property: the hedge is already in the price.** Fixed mortgages price off swaps, and the swap curve assumes three hikes by April against economists' two. Fixing now locks those hikes in, and a rate cap, an option on rates, costs more while rate volatility is high. My view is the opposite trade: buying SONIA futures pays if the Bank delivers fewer hikes than priced, the move that would pull mortgage rates back down.

{{C9}}

{{C10}}

The bond and sterling hedges cover opposite Budget outcomes, and that is the point. I do not need to call the Budget, only to survive it. Spread across all four asset classes, these positions switch off this month's risks without selling a single holding.

## 4. The other side

The best case against me is that known events rarely deliver. Volatility tends to be bought before scheduled events and sold the morning after, so a put spread can lose value through a quiet election night. The VIX curve has sat in contango for more than 120 sessions, a regime that pays volatility sellers, not buyers.

Futures hedges have their own cost: they give up upside, and margin is called daily. And if the Bank really does hike four times, buying SONIA futures is simply the wrong side.

## 5. What I'm watching

- **21 October, UK CPI.** A hot print makes three hikes look cheap and weakens my SONIA view; a soft one strengthens it.
- **28 October, the Budget and the Fed.** Chancellor John Healey's first Budget lands hours before the Fed decision. This is the day the bond and sterling hedges are built for.
- **3 to 6 November, midterms, Bank of England, payrolls.** If the VIX is still below 18 going into election day, the put spread stays on through payrolls. If it spikes above 25 first, I take profit rather than wait for expiry.

## Sources

- [FXStreet: US PPI and Fed hike odds, 15 Oct](https://www.fxstreet.com/news/british-pound-surges-as-hot-us-ppi-fails-to-revive-fed-hike-bets-202610151546)
- [FXStreet: BoE poll and UK CPI date, 15 Oct](https://www.fxstreet.com/news/pound-climbs-on-a-weaker-dollar-and-a-uk-growth-surprise-202610152225)
- [Vantage Markets: US CPI and sterling's 11-month low, 15 Oct](https://www.vantagemarkets.com/market-analysis/why-pound-recovered-dollar-cpi-spike-faded-gbpusd-october-15-2026/)
- [Trading Economics: Fed September hike](https://tradingeconomics.com/united-states/interest-rate)
- [Amundi: US 10-year at 5.34%](https://research-center.amundi.com/article/markets-weigh-rising-yields-and-ai-exuberance)
- [TradingNews: gilt yields at 5.44%, 30-year above 6%](https://www.tradingnews.com/news/sterling-holds-132229-as-boe-rate-supprt-offsets-19-year-high-gilt-yields)
- [HomeOwners Alliance: UK mortgage rates, Oct 2026](https://hoa.org.uk/advice/guides-for-homeowners/for-owners/mortgage-rate-forecast/)
- [Investrade: market review, 15 Oct](https://investrade.com/market-review-october-15-2026/)
- [OCC: September 2026 volume report](https://www.theocc.com/newsroom/views/2026/10-02-september-2026-monthly-volume-report)
- [AD HOC NEWS: VIX close, 15 Oct](https://www.ad-hoc-news.de/boerse/news/marktberichte/vix-closes-2-5-percent-lower-after-hot-ppi-data/70333685)
- [BigGo Finance: VIX long-run average](https://finance.biggo.com/news/d9ce71ef-c8d5-4b39-bc42-57017bc17ab4)
- [CNBC: MOVE index](https://www.cnbc.com/quotes/.MOVE)
- [GuruFocus: GBP/USD options ahead of the Budget, 28 Sep](https://www.gurufocus.com/news/9099356/gbpusd-options-pricing-reflects-risk-ahead-of-uk-budget-announcement)
- [Mortgage One: SONIA-implied Bank Rate path](https://www.mortgageonefinance.co.uk/interest-rate-projection)
- [Success Knocks: economists' Bank Rate forecasts](https://successknocks.com/uk-mortgage-rate-forecasts-2026-2027/)
- [Tradingpedia: Huw Pill on four hikes, 15 Oct](https://www.tradingpedia.com/2026/10/15/sterling-holds-firm-as-markets-weigh-uk-data-fed-path/)
- [SquawkFlow: election pricing and VIX futures gap](https://squawkflow.com/elections/2026)
- [Bloomberg: VIX curve in late August](https://www.bloomberg.com/news/articles/2026-08-25/vix-curve-bump-shows-stock-market-anxiety-growing-by-midterms)
- [thetrading.tools: VIX term structure](https://www.thetrading.tools/manuals/vix-term-structure)
- [Cambridge Network: Budget date](https://www.cambridgenetwork.co.uk/news/healey-sets-pre-halloween-autumn-budget)

*For education only, not investment advice.*
```

## Step 5: the charts

Fourteen charts, `C1` to `C14`. Each one supports a specific claim in the text.

### C1. Three ways to hold the same shares through a risky month (Illustrative)

- **Type:** line chart, profit and loss at expiry.
- **X axis:** share price at expiry, 80 to 120 in steps of 1 (start price 100).
- **Lines:**
  - Shares only: `P&L = S - 100`
  - Shares plus a short future: `P&L = 0` (flat; all downside and upside removed)
  - Shares plus a 95/90 put spread costing 1.20: `P&L = (S - 100) + max(95 - S, 0) - max(90 - S, 0) - 1.20`
- **Annotations:** the put spread's floor between 90 and 95, and the point where its protection runs out below 90.
- **Subtitle:** "Illustrative. Premium of 1.20 is an example, not a market price."

### C2. Bond insurance has become far more expensive than stock insurance

- **Type:** two lines, VIX and MOVE, 2 January to 15 October 2026, each indexed to 100 on the first trading day of 2026. Show actual levels in the tooltip or in end labels.
- **Sources:** VIX from FRED series VIXCLS (https://fred.stlouisfed.org/series/VIXCLS). MOVE from a public daily series (for example Yahoo Finance ticker ^MOVE). Record which MOVE source you used.
- **Anchor points to check and annotate:**
  - MOVE 55.77 on 27 Jan 2026 (52-week low)
  - MOVE 115.02 on 27 Mar 2026 (52-week high)
  - MOVE 108.13 on 1 Oct 2026
  - MOVE 99.06 on 14 Oct 2026
  - VIX 16.45 on 15 Oct 2026; long-run average 19.4 as a dashed reference line on a level version if you show levels
- **Fallback:** if either series fails, show a grouped bar of the anchor points instead.

### C3. Sterling options carry a Budget premium

- **Type:** two bars.
- **Data (28 Sep 2026, GBP/USD one-month):** implied volatility 5.96%; realised volatility 5.19% (derived as 5.96 minus the reported 0.77-point gap).
- **Annotation:** "Monthly options expire over the 28 Oct Budget."
- **Source:** GuruFocus, 28 Sep 2026.

### C4. The election hump in the VIX curve has gone

- **Type:** line chart of VIX futures settlements by expiry.
- **Series 1, Cboe settlement 14 Oct 2026:** 21 Oct 2026: 17.65; 18 Nov 2026: 18.08; 16 Dec 2026: 18.40; 20 Jan 2027: 19.23; 17 Feb 2027: 19.68; 17 Mar 2027: 19.84; 21 Apr 2027: 20.23; 18 May 2027: 20.38; 16 Jun 2027: 20.70.
- **Series 2, late August snapshot (25 Aug 2026):** September contract 17.4; October contract 19.0; November contract 19.7.
- **Reference:** spot VIX 16.45 (15 Oct) as a dotted horizontal line.
- **Annotation:** "October contract covers 3 Nov election day" on the 21 Oct point.
- **Sources:** SquawkFlow (Cboe settlements); Bloomberg, 25 Aug 2026.

### C5. The October VIX future never priced above November

- **Type:** bar chart, October VX minus November VX, by settlement date. Zero line clearly marked; label it "Above zero = election premium".
- **Data:** 28 Sep: -0.77; 29 Sep: -0.70; 30 Sep: -0.59; 1 Oct: -0.52; 2 Oct: -0.70; 5 Oct: -0.68; 6 Oct: -0.56; 7 Oct: -0.31; 8 Oct: -0.38; 9 Oct: -0.73; 12 Oct: -0.83; 13 Oct: -0.75; 14 Oct: -0.42; 15 Oct: -0.50.
- **Source:** SquawkFlow, Cboe daily settlements.

### C6. Options price election day like one extra trading session

- **Type:** two lines over the reading date.
- **Data (one-standard-deviation SPX move, %):**

| Date | Session after the vote (4 Nov) | Ordinary session |
| --- | --- | --- |
| 28 Sep | 0.71 | 0.77 |
| 29 Sep | 1.06 | 0.77 |
| 30 Sep | 1.13 | 0.80 |
| 1 Oct | 1.08 | 0.79 |
| 2 Oct | 1.07 | 0.75 |
| 5 Oct | 1.08 | 0.73 |
| 6 Oct | 1.06 | 0.73 |
| 7 Oct | 1.06 | 0.69 |
| 8 Oct | 1.07 | 0.69 |
| 9 Oct | 1.04 | 0.62 |
| 12 Oct | 1.01 | 0.63 |
| 13 Oct | 0.99 | 0.63 |
| 14 Oct | 1.08 | 0.72 |
| 15 Oct | 1.00 | 0.68 |

- **Annotation:** latest values, 1.00% against 0.68%.
- **Subtitle:** "Risk-neutral price of movement, not a forecast."
- **Source:** SquawkFlow, delayed Cboe SPX chain.

### C7. Bonds have done the adjusting

- **Type:** two lines, US 10-year Treasury yield and UK 10-year gilt yield, 2 January to 15 October 2026.
- **Sources:** US from FRED series DGS10. UK from the Bank of England statistical database or another reputable public daily series; record which one you used.
- **Anchor points to check and annotate:** US 10-year about 4.7% in late August; first close above 5% since 2023 on 15 Sep; touched 5.34% on 1 Oct (highest since 2002). UK 10-year 5.44% (highest since July 2007).
- **Fallback:** annotated points only.

### C8. Markets price more Bank of England hikes than economists do

- **Type:** step chart of Bank Rate, October 2026 to early 2028.
- **Market path (SONIA pricing read 12 Oct 2026):** Oct 2026: 3.75; Nov 2026: 4.00; Apr 2027: about 4.50; Oct 2027: about 4.90; early 2028: about 5.00.
- **Economists' path (Capital Economics, Oxford Economics, Bank of America, Fidelity International, early Oct 2026):** Oct 2026: 3.75; Nov 2026: 4.00; Feb 2027: 4.25; then a dashed flat line labelled "pause expected".
- **Annotation:** the gap at April 2027 (about 4.50 against 4.25).
- **Sources:** Mortgage One; Success Knocks.

### C9. Mortgage rates have run well ahead of Bank Rate

- **Type:** horizontal bars, %.
- **Data (October 2026):** Bank Rate 3.75; one of the lowest five-year fixes 4.93; average two-year fix 5.97; average five-year fix 5.99.
- **Annotation:** "Fixes price off swaps, not Bank Rate."
- **Source:** HomeOwners Alliance, 15 Oct 2026.

### C10. Sterling sits near an 11-month low into the Budget

- **Type:** line, GBP/USD daily, 2 January to 15 October 2026.
- **Source:** FRED series DEXUSUK, or the Bank of England daily spot rate. Record which one you used.
- **Anchor points to check and annotate:** 1.3137 on 14 Oct (11-month low); about 1.3267 on 15 Oct.
- **Also mark:** a vertical line at 28 Oct labelled "Budget", extending the x axis to 6 Nov so the date is visible.

### C11. Traders are already positioned for a weaker pound

- **Type:** horizontal bars, share of options bearish on sterling (%).
- **Data (late September 2026):** GBP/USD options expiring around Budget week: 67; all GBP/USD options: 55; EUR/GBP options expiring around Budget week: about 75 (reported as roughly three-quarters).
- **Source:** GuruFocus, citing DTCC data, 28 Sep 2026.

### C12. Investors are using options more than ever

- **Type:** two panels.
- **Panel A, annual US listed options volume (billions of contracts):** 2019: about 4.9; 2024: 12.22; 2025: 15.21 (record). If OCC's historical statistics page gives 2020 to 2023, add them and cite it.
- **Panel B, year-to-date growth to September 2026 vs same period of 2025:** total options +20.6%; index options +29.3%; ETF options +35.4%; equity options +9.3%.
- **Sources:** OCC September 2026 volume report; OCC annual figures.

### C13. Five events in 16 days, and the hedge that covers each

- **Type:** horizontal timeline, 19 October to 9 November 2026.
- **Events:** 21 Oct UK CPI; 28 Oct UK Budget and Fed decision; 3 Nov US midterms; 5 Nov Bank of England; 6 Nov US payrolls.
- **Hedge bars underneath:** equity put spread from now to beyond 6 Nov; short Long Gilt futures across 28 Oct; GBP/USD forward across 28 Oct; long SONIA futures across 21 Oct to 5 Nov.

### C14. Where insurance is cheap, buy options. Where it is dear, use futures.

- **Type:** styled four-row graphic or table, not a plot.
- **Rows:**

| Asset class | Price of options | Tool | Why |
| --- | --- | --- | --- |
| Equities | Cheap (VIX 16.45) | Put spread, collar, index futures | Protection costs less than usual |
| Bonds | Expensive (MOVE 99) | Sell Long Gilt futures | No premium to pay |
| Sterling | Budget premium (5.96%) | Forward | Locks the rate without the premium |
| UK rates and property | Hikes already priced | Buy SONIA futures | Pays if the Bank does less than priced |

## Step 6: before you finish

1. Build the site and preview the post locally. Check every chart renders on desktop and at phone width, in light and dark mode.
2. Check every number in a chart matches this prompt or its named source.
3. Search the post and chart files for the em dash character and remove any you find.
4. Confirm the post is draft or scheduled, not live.
5. Report back with: the preview link or path, which charting approach you used, which charts used fetched data versus fallback points, any mismatches against anchor values, and anything you could not build.
