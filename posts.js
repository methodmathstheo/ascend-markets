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
    slug: "ai-borrowing-boom-bond-yields",
    title: "AI's borrowing boom: is it pushing up bond yields?",
    date: "2026-10-26",
    publishAt: "2026-10-26T08:00",
    section: "fixedincome",
    author: "jimmy",
    tags: ["Bonds", "AI", "US"],
    dataAsOf: "23 October 2026",
    summary: "Big Tech has switched from funding AI out of cash to borrowing in the bond market. This note looks at whether that extra supply is pushing up yields, and what would prove it.",
    body: `
## 1. The story

The pace of investment in AI is unprecedented. AI-related companies' use of credit markets has accelerated and is set to increase further as financing needs increase [[1]](https://nai500.com/blog/2026/09/ai-hyperscalers-turn-to-debt-as-bond-spreads-widen/), while governments may also need to borrow to support the infrastructure behind it, such as electricity networks. At the same time, Global Sovereign Bond Market issuance is at a historically high level in dollar terms [2]. Together, rising corporate financing needs and elevated government borrowing raise an important question for financial markets: as the supply of bonds increases, will investor demand keep pace, or will borrowers be forced to offer higher yields to attract capital?

<figure class="chart"><img src="assets/data/blog-4/c01-global-bond-issuance.svg" alt="Stacked bars of global OECD sovereign, EMDE sovereign and corporate bond issuance from 2007 to 2026, reaching about 29 trillion dollars in 2026, with issuance as a share of GDP at 23.3 per cent, below the 2020 peak of 27.5 per cent." width="760" height="510" loading="lazy" style="width:100%;height:auto"></figure>

## 2. The numbers

Four figures show the scale of AI investment and the borrowing needed for it:

| Measure | Latest | Context | Source |
| --- | --- | --- | --- |
| AI hyperscaler bond issuance | $420bn (2027 forecast) | Gross issuance projected to rise 60% from 2026 estimates | Goldman Sachs via Reuters [[1]](https://nai500.com/blog/2026/09/ai-hyperscalers-turn-to-debt-as-bond-spreads-widen/) |
| Hyperscaler bond issuance, 2026 to date | ~$220bn (to 10 Aug 2026) | Already roughly double the 2025 total | BNP Paribas via Reuters [[4]](https://mlq.ai/news/hyperscaler-bond-issuance-reaches-about-220-billion-as-ai-financing-costs-rise/) |
| US corporate bond issuance | $2.46tn (2026 forecast) | Net issuance forecast to rise 30% year on year, led by AI | Barclays via Reuters [[3]](https://www.itiger.com/hant/news/2603931398) |
| AI-related bond spreads | 115bps vs 78bps (Sep 2026) | AI issuers compared with the wider investment-grade market | Reuters, Goldman Sachs, ICE BofA [[1]](https://nai500.com/blog/2026/09/ai-hyperscalers-turn-to-debt-as-bond-spreads-widen/) |

- Major technology companies have massively increased the scale of their AI capital expenditure. The five largest hyperscalers are expected to spend about $750bn in 2026 [[4]](https://mlq.ai/news/hyperscaler-bond-issuance-reaches-about-220-billion-as-ai-financing-costs-rise/), and Goldman Sachs expects spending to potentially top $1tn in 2027 [[5]](https://cryptobriefing.com/hyperscalers-borrow-billions-ai-debt-concerns/).
- Capital expenditure has needed financing, and these companies have increased their bond issuance to all-time highs, from an average of $28bn a year in 2020–24 to $121bn in 2025 [[3]](https://www.itiger.com/hant/news/2603931398).
- Investors demand more compensation to hold AI-related corporate debt than the broader investment-grade market (115bps to 78bps), partly to compensate for the growing supply of debt, as well as for longer maturities and a wider range of credit ratings, from Microsoft (AAA) to Oracle (BBB) [[4]](https://mlq.ai/news/hyperscaler-bond-issuance-reaches-about-220-billion-as-ai-financing-costs-rise/).
- Demand for this debt is thinning: order books on hyperscaler bond deals fell from about 5x the amount offered in February to about 2x in July 2026 [[1]](https://nai500.com/blog/2026/09/ai-hyperscalers-turn-to-debt-as-bond-spreads-widen/).

<figure class="chart"><img src="assets/data/blog-4/c02-bigtech-ai-debt.svg" alt="Horizontal bars of 2026 bond issuance to 7 July: Amazon 92 billion dollars, Alphabet 77 billion including up to 25 billion pending, Meta 25 billion and Oracle 25 billion." width="760" height="410" loading="lazy" style="width:100%;height:auto"></figure>

- Demand for US government debt has held up so far: the 10-year Treasury auction on 7 October 2026 had a bid-to-cover ratio of 2.77x [[6]](https://yourbestsavings.com/treasury-yields/), above the 2.4–2.5x range it averaged from 2017 to 2024 [7].
- Yields have still risen. The 10-year yield closed at 5.31% on 5 October, the highest close since the FRED series began in 2003 [[8]](https://www.leadlagreport.com/the-10-year-hit-5-31-the-bond-market-says-it-is-not-inflation/), which suggests investors are demanding higher returns to absorb the extra supply.
- Factors influencing yields also include government borrowing, inflation expectations, and central bank policy.

## 3. Why it matters

The AI boom requires substantial capital expenditure, and companies will issue corporate bonds, whilst governments may issue debt to finance the supporting infrastructure needed, such as electricity networks. The increased supply of bonds, through bond issuance, would put downward pressure on prices and upward pressure on yields, as borrowers, including governments, will be forced to pay higher premiums for investors to purchase their bonds if supply increases at a faster rate than demand.

A BIS study finds that the adoption of AI leads to a permanent increase in productivity that differs across sectors, and that AI will significantly raise output, consumption and investment in the short and long run [[9]](https://www.bis.org/publ/work1179.htm). The effect on inflation depends crucially on whether households and firms correctly anticipate the impact of AI. If they underestimate the higher future productivity, there will be initial disinflation, although over time general equilibrium forces lead to moderate inflation. In contrast, if households and firms correctly anticipate the higher future productivity, inflation rises immediately [[9]](https://www.bis.org/publ/work1179.htm).

Higher long-term yields could increase mortgage rates, corporate borrowing costs and government debt-servicing expenses. This may make future investment more expensive, including investment in AI itself.

## 4. The other side

Higher AI investment does not necessarily mean weaker demand for government bonds. In 2025, debt financed only around a third of the five largest hyperscalers' capital expenditure, so most AI spending has been funded internally [[10]](https://www.advisorperspectives.com/commentaries/2026/08/13/ai-infrastructure-spending-free-cash-flow-levels), although capex is now on track to overtake their operating cash flow around Q3 2026 [[11]](https://epoch.ai/data-insights/hyperscaler-capex-vs-cash-flow). Meanwhile, safe-asset demand remains strong: foreign investors made net purchases of $300.7bn of long-term US securities in August 2026 [[12]](https://home.treasury.gov/news/press-releases/sb0662). AI-driven productivity could also boost output and tax revenues; Goldman Sachs estimates generative AI could lift US labour productivity growth by around 1.5 percentage points a year over a decade of widespread adoption [[13]](https://www.goldmansachs.com/insights/articles/ai-may-start-to-boost-us-gdp-in-2027). Bond yields also respond to monetary policy, inflation, deficits and global capital flows, not AI alone. The key question is whether AI financing pressures are large enough to move yields once these forces are accounted for.

## 5. What I'm watching

Three indicators could confirm or weaken the thesis. First, AI capital expenditure and debt issuance: quarterly earnings from major technology firms will show whether new infrastructure is increasingly debt-financed. Second, US Treasury yields and inflation expectations: movements in the 10-year nominal yield (5.00% on 23 October [[14]](https://www.forbes.com/advisor/investing/treasury-rates/)), real yields (2.84%) and market-based inflation compensation (2.35%) [[15]](https://spotthemoney.com/rates/tips/) reveal whether investors are demanding higher returns. Third, productivity and CPI data will show whether efficiency gains are starting to offset investment-driven cost pressures. I would be persuaded that AI is materially affecting bond markets if rising AI-related bond issuance coincided with higher real yields, while inflation expectations and monetary policy stayed broadly stable. That combination would point to AI financing demand, rather than wider economic changes, as the driver.

## References

1. NAI500 (Sep 2026), citing Reuters, Goldman Sachs, ICE BofA and Apollo. *AI hyperscalers turn to debt as bond spreads widen*. [nai500.com](https://nai500.com/blog/2026/09/ai-hyperscalers-turn-to-debt-as-bond-spreads-widen/)
2. OECD (2026). *Global Debt Report 2026*.
3. Reuters (15 Jan 2026), via Tiger Brokers. *AI hyperscalers will drive higher US corporate bond supply in 2026, analysts say*. [itiger.com](https://www.itiger.com/hant/news/2603931398)
4. MLQ.ai (Aug 2026), citing Reuters, BNP Paribas and S&P Global Ratings. *Hyperscaler bond issuance reaches about $220 billion as AI financing costs rise*. [mlq.ai](https://mlq.ai/news/hyperscaler-bond-issuance-reaches-about-220-billion-as-ai-financing-costs-rise/)
5. Crypto Briefing (Oct 2026), citing Goldman Sachs. *Big Tech is borrowing hundreds of billions for AI*. [cryptobriefing.com](https://cryptobriefing.com/hyperscalers-borrow-billions-ai-debt-concerns/)
6. YourBestSavings (Oct 2026). *Treasury yields today*, including auction results. [yourbestsavings.com](https://yourbestsavings.com/treasury-yields/)
7. Hutchins Center on Fiscal & Monetary Policy at Brookings, using Bureau of the Public Debt data. *Bid-to-cover for 10-year Treasury*.
8. Lead-Lag Report (21 Oct 2026). *The 10-year hit 5.31%. The bond market says it is not inflation*. [leadlagreport.com](https://www.leadlagreport.com/the-10-year-hit-5-31-the-bond-market-says-it-is-not-inflation/)
9. Aldasoro, I., Doerr, S., Gambacorta, L. and Rees, D. (2024). *The impact of artificial intelligence on output and inflation*. BIS Working Paper No. 1179. [bis.org](https://www.bis.org/publ/work1179.htm)
10. Advisor Perspectives (Aug 2026). *AI infrastructure spending and free cash flow levels*. [advisorperspectives.com](https://www.advisorperspectives.com/commentaries/2026/08/13/ai-infrastructure-spending-free-cash-flow-levels)
11. Epoch AI (16 Jun 2026). *Hyperscaler capex is on trend to outpace their cash inflows by the end of 2026*. [epoch.ai](https://epoch.ai/data-insights/hyperscaler-capex-vs-cash-flow)
12. US Treasury (16 Oct 2026). *Treasury International Capital data for August*. [home.treasury.gov](https://home.treasury.gov/news/press-releases/sb0662)
13. Goldman Sachs Research. *AI may start to boost US GDP in 2027*. [goldmansachs.com](https://www.goldmansachs.com/insights/articles/ai-may-start-to-boost-us-gdp-in-2027)
14. Forbes Advisor (23 Oct 2026). *Treasury rates today*. [forbes.com](https://www.forbes.com/advisor/investing/treasury-rates/)
15. Spot the Money (14 Oct 2026), using the US Treasury daily real yield curve. *TIPS real yields today*. [spotthemoney.com](https://spotthemoney.com/rates/tips/)
`
  },
  {
    slug: "insure-stocks-hedge-bonds",
    title: "Blog #3: Insure your stocks with options. Hedge your bonds with futures.",
    date: "2026-10-19",
    publishAt: "2026-10-19T08:00",
    section: "derivatives",
    author: "theo",
    tags: ["Options", "Futures", "Volatility", "Equities", "Bonds", "FX", "UK rates", "Property"],
    dataAsOf: "15 October 2026",
    summary: "With five market-moving events in 16 days, insurance on stocks is cheaper than usual while insurance on bonds and sterling carries a premium, so I would buy options on equities and use futures and forwards everywhere else.",
    body: `
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

<figure class="chart" data-chart-json="assets/data/blog-3/c01-three-ways.json"></figure>

## 1. The story

Inflation ran hot this week. US consumer prices beat forecasts on 14 October, and a day later September producer prices rose 1.3% in a single month against a 0.5% consensus. Futures now price a December Fed hike at 92%, on top of September's rise to 3.75% to 4.00%.

Bonds have done the adjusting. The US 10-year yield touched 5.34% on 1 October, the highest since 2002. The UK 10-year has reached 5.44%, the highest since 2007, and the 30-year gilt is above 6%. Average five-year mortgage fixes are near 6% while Bank Rate sits at 3.75%. Sterling fell to 1.3137 on 14 October, an 11-month low.

<figure class="chart" data-chart-json="assets/data/blog-3/c07-yields.json"></figure>

Stocks have barely noticed: the S&P 500 closed at 7,744 on Thursday and the VIX at 16.45. Investors are still reaching for derivatives, with US options volume running 21% ahead of last year's record pace. Five scheduled events now land in 16 days: UK CPI (21 Oct), the Budget and the Fed (28 Oct), the midterms (3 Nov), the Bank of England (5 Nov) and US payrolls (6 Nov).

<figure class="chart" data-chart-json="assets/data/blog-3/c12-options-volume.json"></figure>

<figure class="chart" data-chart-json="assets/data/blog-3/c13-timeline.json"></figure>

## 2. The numbers

Implied volatility is the price of insurance in the options market, and right now it is out of line across asset classes.

| Asset class | Gauge | Latest | Versus normal |
| --- | --- | --- | --- |
| Equities | VIX, S&P 500 implied vol | 16.45 (15 Oct) | 15% below its long-run average of 19.4 |
| Bonds | MOVE, US Treasury implied vol | 99 (14 Oct) | 78% above its January low of 55.8 |
| Sterling | GBP/USD one-month implied vol | 5.96% (28 Sep) | 0.77 points above realised, with expiry over the Budget |
| UK rates | Bank Rate implied by SONIA | About 4.5% by April 2027 (12 Oct) | Three hikes priced; economists expect two |

<figure class="chart" data-chart-json="assets/data/blog-3/c02-vix-move.json"></figure>

Three details sharpen the picture.

- **The election is priced as a one-day event.** SPX options price a 1.00% move for the session after the vote, against 0.68% for an ordinary day. Yet the October VIX future, whose window spans 3 November, settled 0.50 points below November on 15 October. In late August the same two contracts traded at 19 and 19.7.
- **Sterling bears are crowded.** Of GBP/USD options expiring around Budget week, 67% bet on a weaker pound, against 55% across all trades (late September data).
- **The rates market is ahead of the Bank.** BoE chief economist Huw Pill said this week he is sceptical of the four hikes in a year that markets imply.

<figure class="chart" data-chart-json="assets/data/blog-3/c06-election-day.json"></figure>

<figure class="chart" data-chart-json="assets/data/blog-3/c04-vix-curve.json"></figure>

<figure class="chart" data-chart-json="assets/data/blog-3/c05-oct-minus-nov.json"></figure>

<figure class="chart" data-chart-json="assets/data/blog-3/c03-sterling-premium.json"></figure>

<figure class="chart" data-chart-json="assets/data/blog-3/c11-positioning.json"></figure>

<figure class="chart" data-chart-json="assets/data/blog-3/c08-bank-rate.json"></figure>

## 3. Why it matters

My rule for this autumn: buy options where insurance is cheap, and use futures and forwards where it is dear. Futures and forwards carry no premium, so their cost does not rise when fear does.

<figure class="chart" data-chart-json="assets/data/blog-3/c14-cheap-dear.json"></figure>

- **Equities: buy the put spread.** Buy an S&P 500 or FTSE 100 put about 5% below the market, sell one about 10% below, and choose an expiry after 6 November. One trade covers all five events while US equity vol sits 15% below average. For a single concentrated holding, a collar (selling an upside call to fund a put) builds the same floor at close to zero cost. To cut market exposure without selling a share, sell index futures against part of the book.
- **Bonds: sell futures, not options.** At a MOVE of 99, gilt and Treasury options are expensive. Selling Long Gilt futures into the Budget cuts duration at no premium, and the position closes in one trade the day after.
- **Sterling: use a forward and lean against the crowd.** If the Budget is credible, a crowded short in sterling unwinds fast, and a rebounding pound is exactly what hurts a UK investor in US stocks. A forward locks today's rate without paying the Budget premium built into options.
- **Property: the hedge is already in the price.** Fixed mortgages price off swaps, and the swap curve assumes three hikes by April against economists' two. Fixing now locks those hikes in, and a rate cap, an option on rates, costs more while rate volatility is high. My view is the opposite trade: buying SONIA futures pays if the Bank delivers fewer hikes than priced, the move that would pull mortgage rates back down.

<figure class="chart" data-chart-json="assets/data/blog-3/c09-mortgages.json"></figure>

<figure class="chart" data-chart-json="assets/data/blog-3/c10-sterling.json"></figure>

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
`
  },
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
