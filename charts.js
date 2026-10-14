const BRENT_RAW =
  '2025-01-02:76.14 2025-01-03:76.72 2025-01-06:77.27 2025-01-07:77.84 2025-01-08:77.37 2025-01-09:78.44 2025-0'
  + '1-10:79.76 2025-01-13:82.69 2025-01-14:82.39 2025-01-15:83.48 2025-01-16:82.39 2025-01-17:83.02 2025-01-20:8'
  + '1.68 2025-01-21:80.57 2025-01-22:80.00 2025-01-23:78.62 2025-01-24:78.71 2025-01-27:77.30 2025-01-28:78.01 2'
  + '025-01-29:77.02 2025-01-30:77.42 2025-01-31:77.11 2025-02-03:76.49 2025-02-04:76.58 2025-02-05:74.71 2025-02'
  + '-06:74.54 2025-02-07:74.68 2025-02-10:76.23 2025-02-11:77.65 2025-02-12:75.38 2025-02-13:75.61 2025-02-14:75'
  + '.19 2025-02-17:75.81 2025-02-18:76.46 2025-02-19:76.34 2025-02-20:76.95 2025-02-21:74.88 2025-02-24:74.89 20'
  + '25-02-25:73.11 2025-02-26:73.49 2025-02-27:75.01 2025-02-28:74.76 2025-03-03:72.85 2025-03-04:72.31 2025-03-'
  + '05:70.92 2025-03-06:71.08 2025-03-07:72.49 2025-03-10:71.08 2025-03-11:71.51 2025-03-12:72.36 2025-03-13:70.'
  + '82 2025-03-14:71.94 2025-03-17:71.93 2025-03-18:71.93 2025-03-19:71.94 2025-03-20:72.61 2025-03-21:72.64 202'
  + '5-03-24:73.96 2025-03-25:73.78 2025-03-26:74.60 2025-03-27:74.72 2025-03-28:74.69 2025-03-31:77.23 2025-04-0'
  + '1:77.78 2025-04-02:77.27 2025-04-03:72.54 2025-04-04:68.36 2025-04-07:66.13 2025-04-08:64.86 2025-04-09:67.3'
  + '0 2025-04-10:65.37 2025-04-11:66.83 2025-04-14:67.18 2025-04-15:66.58 2025-04-16:67.94 2025-04-17:69.33 2025'
  + '-04-22:68.93 2025-04-23:68.26 2025-04-24:67.50 2025-04-25:66.99 2025-04-28:66.13 2025-04-29:64.04 2025-04-30'
  + ':63.37 2025-05-01:62.37 2025-05-02:61.57 2025-05-06:62.37 2025-05-07:60.31 2025-05-08:62.22 2025-05-09:64.26'
  + ' 2025-05-12:65.28 2025-05-13:66.93 2025-05-14:65.91 2025-05-15:64.36 2025-05-16:65.20 2025-05-19:66.25 2025-'
  + '05-20:66.93 2025-05-21:65.86 2025-05-22:64.87 2025-05-23:65.41 2025-05-27:64.32 2025-05-28:65.72 2025-05-29:'
  + '64.60 2025-05-30:64.32 2025-06-02:66.55 2025-06-03:67.48 2025-06-04:66.69 2025-06-05:67.14 2025-06-06:68.02 '
  + '2025-06-09:68.73 2025-06-10:68.41 2025-06-11:71.29 2025-06-12:70.84 2025-06-13:76.00 2025-06-16:75.05 2025-0'
  + '6-17:78.70 2025-06-18:78.38 2025-06-19:80.37 2025-06-20:78.73 2025-06-23:74.34 2025-06-24:69.13 2025-06-25:6'
  + '8.40 2025-06-26:68.57 2025-06-27:69.37 2025-06-30:68.15 2025-07-01:67.63 2025-07-02:70.80 2025-07-03:70.42 2'
  + '025-07-04:71.03 2025-07-07:71.95 2025-07-08:72.50 2025-07-09:71.98 2025-07-10:70.38 2025-07-11:72.06 2025-07'
  + '-14:70.96 2025-07-15:70.27 2025-07-16:69.67 2025-07-17:71.32 2025-07-18:71.06 2025-07-21:71.92 2025-07-22:69'
  + '.69 2025-07-23:69.17 2025-07-24:70.42 2025-07-25:69.23 2025-07-28:70.87 2025-07-29:73.21 2025-07-30:73.98 20'
  + '25-07-31:73.43 2025-08-01:70.55 2025-08-04:69.56 2025-08-05:69.14 2025-08-06:67.97 2025-08-07:66.99 2025-08-'
  + '08:67.17 2025-08-11:67.36 2025-08-12:66.80 2025-08-13:66.25 2025-08-14:68.12 2025-08-15:67.30 2025-08-18:68.'
  + '18 2025-08-19:66.62 2025-08-20:67.61 2025-08-21:68.41 2025-08-22:68.29 2025-08-26:66.89 2025-08-27:67.75 202'
  + '5-08-28:68.61 2025-08-29:67.83 2025-09-01:67.09 2025-09-02:68.09 2025-09-03:67.76 2025-09-04:66.41 2025-09-0'
  + '5:64.92 2025-09-08:65.44 2025-09-09:67.97 2025-09-10:67.62 2025-09-11:67.25 2025-09-12:67.87 2025-09-15:67.8'
  + '8 2025-09-16:69.69 2025-09-17:69.19 2025-09-18:67.83 2025-09-19:67.05 2025-09-22:66.87 2025-09-23:67.96 2025'
  + '-09-24:69.64 2025-09-25:70.48 2025-09-26:71.15 2025-09-29:69.00 2025-09-30:68.52 2025-10-01:66.67 2025-10-02'
  + ':65.44 2025-10-03:66.13 2025-10-06:67.09 2025-10-07:67.10 2025-10-08:67.42 2025-10-09:67.23 2025-10-10:64.41'
  + ' 2025-10-13:64.15 2025-10-14:63.00 2025-10-15:62.33 2025-10-16:61.08 2025-10-17:61.23 2025-10-20:60.71 2025-'
  + '10-21:61.00 2025-10-22:62.28 2025-10-23:66.32 2025-10-24:65.80 2025-10-27:65.52 2025-10-28:64.03 2025-10-29:'
  + '65.01 2025-10-30:65.11 2025-10-31:65.44 2025-11-03:65.79 2025-11-04:65.04 2025-11-05:63.54 2025-11-06:63.41 '
  + '2025-11-07:63.72 2025-11-10:63.01 2025-11-11:63.86 2025-11-12:61.88 2025-11-13:62.14 2025-11-14:63.45 2025-1'
  + '1-17:63.16 2025-11-18:64.86 2025-11-19:63.78 2025-11-20:63.64 2025-11-21:62.78 2025-11-24:64.83 2025-11-25:6'
  + '3.99 2025-11-26:64.81 2025-11-27:64.18 2025-11-28:64.07 2025-12-01:64.22 2025-12-02:63.37 2025-12-03:63.75 2'
  + '025-12-04:64.15 2025-12-05:64.42 2025-12-08:63.30 2025-12-09:62.62 2025-12-10:63.12 2025-12-11:61.87 2025-12'
  + '-12:62.11 2025-12-15:61.55 2025-12-16:59.93 2025-12-17:60.61 2025-12-18:60.69 2025-12-19:61.35 2025-12-22:62'
  + '.22 2025-12-23:63.70 2025-12-24:63.70 2025-12-29:63.10 2025-12-30:62.30 2025-12-31:61.35 2026-01-02:61.98 20'
  + '26-01-05:63.00 2026-01-06:62.10 2026-01-07:61.08 2026-01-08:63.34 2026-01-09:65.11 2026-01-12:65.40 2026-01-'
  + '13:67.58 2026-01-14:68.87 2026-01-15:66.16 2026-01-16:66.97 2026-01-19:66.91 2026-01-20:67.68 2026-01-21:66.'
  + '72 2026-01-22:65.46 2026-01-23:68.16 2026-01-26:67.70 2026-01-27:70.28 2026-01-28:70.90 2026-01-29:71.00 202'
  + '6-01-30:72.25 2026-02-02:67.72 2026-02-03:70.01 2026-02-04:71.15 2026-02-05:69.87 2026-02-06:70.45 2026-02-0'
  + '9:71.19 2026-02-10:71.01 2026-02-11:71.52 2026-02-12:69.80 2026-02-13:69.96 2026-02-16:70.81 2026-02-17:69.7'
  + '7 2026-02-18:71.78 2026-02-19:73.17 2026-02-20:72.75 2026-02-23:71.90 2026-02-24:71.21 2026-02-25:70.69 2026'
  + '-02-26:71.66 2026-02-27:71.32 2026-03-02:77.24 2026-03-03:83.28 2026-03-04:81.56 2026-03-05:88.59 2026-03-06'
  + ':95.74 2026-03-09:94.35 2026-03-10:89.84 2026-03-11:90.98 2026-03-12:102.38 2026-03-13:103.23 2026-03-16:101'
  + '.04 2026-03-17:108.39 2026-03-18:118.09 2026-03-19:111.05 2026-03-20:118.42 2026-03-23:103.79 2026-03-24:108'
  + '.42 2026-03-25:109.14 2026-03-26:113.39 2026-03-27:121.47 2026-03-30:121.88 2026-03-31:126.69 2026-04-01:119'
  + '.56 2026-04-02:127.61 2026-04-07:138.21 2026-04-08:122.11 2026-04-09:119.03 2026-04-10:119.07 2026-04-13:123'
  + '.28 2026-04-14:118.69 2026-04-15:114.93 2026-04-16:116.63 2026-04-17:98.63 2026-04-20:103.40 2026-04-21:106.'
  + '14 2026-04-22:113.44 2026-04-23:113.25 2026-04-24:111.86 2026-04-27:113.89 2026-04-28:117.62 2026-04-29:124.'
  + '16 2026-04-30:124.24 2026-05-01:118.26 2026-05-05:114.51 2026-05-06:103.70 2026-05-07:101.82 2026-05-08:103.'
  + '48 2026-05-11:106.11 2026-05-12:111.37 2026-05-13:110.28 2026-05-14:110.91 2026-05-15:113.96 2026-05-18:116.'
  + '73 2026-05-19:114.64 2026-05-20:108.93 2026-05-21:105.84 2026-05-22:106.90 2026-05-26:102.75 2026-05-27:97.1'
  + '1 2026-05-28:95.47 2026-05-29:92.88 2026-06-01:98.29 2026-06-02:98.49 2026-06-03:101.69 2026-06-04:98.98 202'
  + '6-06-05:97.29 2026-06-08:97.46 2026-06-09:94.15 2026-06-10:95.73 2026-06-11:92.84 2026-06-12:88.64 2026-06-1'
  + '5:84.36 2026-06-16:80.50 2026-06-17:80.33 2026-06-18:79.35 2026-06-19:80.46 2026-06-22:76.49 2026-06-23:75.6'
  + '9 2026-06-24:72.09 2026-06-25:73.74 2026-06-26:70.16 2026-06-29:71.59 2026-06-30:70.46 2026-07-01:69.24 2026'
  + '-07-02:68.53 2026-07-03:68.68 2026-07-06:69.56 2026-07-07:71.78 2026-07-08:76.50 2026-07-09:74.46 2026-07-10'
  + ':74.34 2026-07-13:81.62 2026-07-14:83.69 2026-07-15:83.08 2026-07-16:81.23 2026-07-17:85.01 2026-07-20:86.99'
  + ' 2026-07-21:93.85 2026-07-22:94.12 2026-07-23:105.32 2026-07-24:100.31 2026-07-27:91.82 2026-07-28:85.51 202'
  + '6-07-29:91.95 2026-07-30:91.91 2026-07-31:96.95 2026-08-03:88.90 2026-08-04:86.47 2026-08-05:86.65 2026-08-0'
  + '6:89.65 2026-08-07:87.62 2026-08-10:92.74 2026-08-11:93.26 2026-08-12:92.52 2026-08-13:92.03 2026-08-14:92.0'
  + '2 2026-08-17:92.43 2026-08-18:95.29 2026-08-19:92.37 2026-08-20:94.00 2026-08-21:96.92 2026-08-24:92.71 2026'
  + '-08-25:88.24 2026-08-26:87.77 2026-08-27:90.18 2026-08-28:89.75 2026-09-01:96.02 2026-09-02:97.59 2026-09-03'
  + ':100.52 2026-09-04:102.24 2026-09-07:104.47 2026-09-08:106.12 2026-09-09:109.51 2026-09-10:120.98 2026-09-11'
  + ':118.06 2026-09-14:121.25 2026-09-15:130.80 2026-09-16:127.84 2026-09-17:121.18 2026-09-18:119.66 2026-09-21'
  + ':116.15 2026-09-22:114.89 2026-09-23:117.45 2026-09-24:120.92 2026-09-25:116.01 2026-09-28:119.97 2026-09-29'
  + ':113.96 2026-09-30:115.91 2026-10-01:114.82 2026-10-02:135.51 2026-10-05:125.51 2026-10-06:125.44';

/* =============================================================
   ASCEND MARKETS - CHARTS
   Lightweight inline SVG. No dependencies.

   Figures are placed in a note with:
     <figure class="chart" data-chart="<id>"></figure>

   The Brent series above is generated from
   assets/data/brent-2025-2026.csv, which is the file of record
   (US EIA via FRED, series DCOILBRENTEU). Never edit the numbers
   by hand: refresh the CSV and regenerate.
   ============================================================= */

const BRENT = BRENT_RAW.split(' ').map(s => {
  const [d, v] = s.split(':');
  return {d: d, t: Date.parse(d + 'T12:00:00Z'), v: parseFloat(v)};
});

const esc2 = s => String(s).replace(/[&<>"']/g, c =>
  ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const money = n => '$' + n.toFixed(0);

/* Events to mark on figure 1. Dates only, never prices. */
const BRENT_EVENTS = [
  {d:'2026-02-28', label:'US and Israel strike Iran'},
  {d:'2026-03-31', label:'End of record March rally'},
  {d:'2026-04-08', label:'Two-week ceasefire'},
  {d:'2026-07-14', label:'US blockade of Iranian ports resumes'},
  {d:'2026-10-08', label:'Trump pledges no strikes before the midterms'}
];

function brentChart(w, hOverride){
  const narrow = w < 520;
  const h = hOverride || (narrow ? Math.round(w * 0.78) : Math.round(w * 0.52));
  const m = {t: 44, r: narrow ? 10 : 14, b: narrow ? 46 : 40, l: narrow ? 34 : 42};
  const iw = w - m.l - m.r, ih = h - m.t - m.b;
  const fs = narrow ? 9.5 : 11;

  const t0 = Date.parse('2025-01-01T12:00:00Z');
  const t1 = Date.parse('2026-10-14T12:00:00Z');
  const lo = 55, hi = 145;
  const X = t => m.l + (t - t0) / (t1 - t0) * iw;
  const Y = v => m.t + (hi - v) / (hi - lo) * ih;

  let g = '';
  for (let v = 60; v <= 140; v += 20){
    g += '<line class="cg" x1="'+m.l+'" y1="'+Y(v).toFixed(1)+'" x2="'+(m.l+iw)+'" y2="'+Y(v).toFixed(1)+'"/>'
       + '<text class="cl" x="'+(m.l-6)+'" y="'+(Y(v)+3.5).toFixed(1)+'" text-anchor="end">'+money(v)+'</text>';
  }
  /* $100 reference */
  g += '<line class="cref" x1="'+m.l+'" y1="'+Y(100).toFixed(1)+'" x2="'+(m.l+iw)+'" y2="'+Y(100).toFixed(1)+'"/>';

  /* x ticks: quarters, thinned when narrow */
  const ticks = [];
  for (let y = 2025; y <= 2026; y++) for (let mo = 0; mo < 12; mo += 3){
    const t = Date.UTC(y, mo, 1, 12);
    if (t >= t0 && t <= t1) ticks.push(t);
  }
  ticks.forEach((t, i) => {
    if (narrow && i % 2 !== 0) return;
    const dt = new Date(t);
    const lab = dt.toLocaleDateString('en-GB', {month:'short', timeZone:'UTC'})
      + ' ' + String(dt.getUTCFullYear()).slice(2);
    g += '<text class="cl" x="'+X(t).toFixed(1)+'" y="'+(m.t+ih+15)+'" text-anchor="middle">'+lab+'</text>';
  });

  /* price line */
  const pts = BRENT.map(p => X(p.t).toFixed(1) + ',' + Y(p.v).toFixed(1)).join(' ');
  g += '<polyline class="cline" points="'+pts+'"/>';

  /* event markers: hairline plus a numbered pin, staggered when dates crowd together */
  let lastX = -99, row = 0;
  BRENT_EVENTS.forEach((e, i) => {
    const x = X(Date.parse(e.d + 'T12:00:00Z'));
    row = (x - lastX < 19) ? row + 1 : 0;
    lastX = x;
    const cy = m.t - 12 - row * 17;
    g += '<line class="cev" x1="'+x.toFixed(1)+'" y1="'+(cy + 7).toFixed(1)+'" x2="'+x.toFixed(1)+'" y2="'+(m.t+ih)+'"/>'
       + '<circle class="cevc" cx="'+x.toFixed(1)+'" cy="'+cy.toFixed(1)+'" r="7.5"/>'
       + '<text class="cevn" x="'+x.toFixed(1)+'" y="'+(cy + 3.2).toFixed(1)+'" text-anchor="middle">'+(i+1)+'</text>';
  });

  const last = BRENT[BRENT.length-1];
  const desc = 'Line chart of daily Brent crude spot prices from January 2025 to October 2026. '
    + 'Prices fall from about $76 in January 2025 to a low near $60 in December 2025, then rise sharply '
    + 'through March 2026 to a peak of $138.21 on 7 April 2026, fall back below $70 by June, and recover '
    + 'to $' + last.v.toFixed(2) + ' on ' + last.d + '. Five events are marked.';

  const key = '<ol class="chart-key">' + BRENT_EVENTS.map((e, i) =>
    '<li><span class="n">'+(i+1)+'</span><span>'
    + new Date(e.d+'T12:00:00Z').toLocaleDateString('en-GB',{day:'numeric',month:'short',year:'numeric',timeZone:'UTC'})
    + ': ' + esc2(e.label) + '</span></li>').join('') + '</ol>';

  return {svg: svgWrap(w, h, g, desc, fs), extra: key};
}

function hormuzChart(w){
  const narrow = w < 520;
  const h = narrow ? Math.round(w * 0.72) : Math.round(w * 0.5);
  const m = {t: 18, r: 12, b: narrow ? 52 : 46, l: narrow ? 32 : 40};
  const iw = w - m.l - m.r, ih = h - m.t - m.b;
  const fs = narrow ? 9.5 : 11;
  const hi = 22;
  const Y = v => m.t + (hi - v) / hi * ih;
  const bw = Math.min(narrow ? 66 : 96, iw / 3.2);
  const cx = [m.l + iw * 0.30, m.l + iw * 0.70];

  let g = '';
  for (let v = 0; v <= 20; v += 5){
    g += '<line class="cg" x1="'+m.l+'" y1="'+Y(v).toFixed(1)+'" x2="'+(m.l+iw)+'" y2="'+Y(v).toFixed(1)+'"/>'
       + '<text class="cl" x="'+(m.l-6)+'" y="'+(Y(v)+3.5).toFixed(1)+'" text-anchor="end">'+v+'</text>';
  }
  /* pre-war: a single approximate bar */
  g += '<rect class="cbar cbar-1" x="'+(cx[0]-bw/2).toFixed(1)+'" y="'+Y(20).toFixed(1)
     + '" width="'+bw.toFixed(1)+'" height="'+(Y(0)-Y(20)).toFixed(1)+'"/>'
     + '<text class="cval" x="'+cx[0].toFixed(1)+'" y="'+(Y(20)-7).toFixed(1)+'" text-anchor="middle">~20</text>'
     + '<text class="cl" x="'+cx[0].toFixed(1)+'" y="'+(m.t+ih+16)+'" text-anchor="middle">Before the war</text>'
     + '<text class="cl cdim" x="'+cx[0].toFixed(1)+'" y="'+(m.t+ih+28)+'" text-anchor="middle">Through Hormuz</text>';

  /* August 2026: Hormuz plus bypass routes, stacked */
  const hor = 7.6, byp = 5.5;
  g += '<rect class="cbar cbar-1" x="'+(cx[1]-bw/2).toFixed(1)+'" y="'+Y(hor).toFixed(1)
     + '" width="'+bw.toFixed(1)+'" height="'+(Y(0)-Y(hor)).toFixed(1)+'"/>'
     + '<text class="cvalin" x="'+cx[1].toFixed(1)+'" y="'+(Y(hor/2)+4).toFixed(1)+'" text-anchor="middle">7.6</text>'
     + '<rect class="cbar cbar-2" x="'+(cx[1]-bw/2).toFixed(1)+'" y="'+Y(hor+byp).toFixed(1)
     + '" width="'+bw.toFixed(1)+'" height="'+(Y(hor)-Y(hor+byp)).toFixed(1)+'"/>'
     + '<text class="cvalin2" x="'+cx[1].toFixed(1)+'" y="'+(Y(hor+byp/2)+4).toFixed(1)+'" text-anchor="middle">5.5</text>'
     + '<text class="cval" x="'+cx[1].toFixed(1)+'" y="'+(Y(hor+byp)-7).toFixed(1)+'" text-anchor="middle">13.1</text>'
     + '<text class="cl" x="'+cx[1].toFixed(1)+'" y="'+(m.t+ih+16)+'" text-anchor="middle">August 2026</text>'
     + '<text class="cl cdim" x="'+cx[1].toFixed(1)+'" y="'+(m.t+ih+28)+'" text-anchor="middle">Hormuz plus bypass</text>';

  g += '<line class="caxis" x1="'+m.l+'" y1="'+Y(0).toFixed(1)+'" x2="'+(m.l+iw)+'" y2="'+Y(0).toFixed(1)+'"/>';

  const desc = 'Bar chart comparing Gulf oil flows in million barrels per day. Before the war about 20 '
    + 'million barrels a day moved through the Strait of Hormuz. In August 2026 the total was 13.1 million, '
    + 'made up of 7.6 million through Hormuz and 5.5 million through routes that bypass the Strait.';
  const key = '<ul class="chart-legend">'
    + '<li><i class="sw sw-1"></i>Through the Strait of Hormuz</li>'
    + '<li><i class="sw sw-2"></i>Bypassing the Strait</li></ul>';
  return {svg: svgWrap(w, h, g, desc, fs), extra: key};
}

function ceasefireChart(w){
  const narrow = w < 520;
  const bars = [
    {k:'Front-month WTI', v:-16.41},
    {k:'Front-month Brent (June)', v:-13.29},
    {k:'Six-month Brent', v:-2.33}
  ];
  const rowH = narrow ? 52 : 46;
  const m = {t: narrow ? 40 : 38, r: 14, b: 16, l: 10};
  const h = m.t + bars.length * rowH + m.b;
  const fs = narrow ? 9.5 : 11;
  const iw = w - m.l - m.r;
  const maxv = 18;
  const bh = narrow ? 15 : 17;

  let g = '<text class="csub" x="'+m.l+'" y="'+(narrow ? 14 : 13)+'">'
        + 'The front of the curve collapsed; the back barely moved.</text>';
  bars.forEach((b, i) => {
    const y = m.t + i * rowH;
    const len = Math.abs(b.v) / maxv * iw;
    g += '<text class="cl clab" x="'+m.l+'" y="'+(y+2)+'">'+esc2(b.k)+'</text>'
       + '<rect class="cbar cbar-1" x="'+m.l+'" y="'+(y+8)+'" width="'+len.toFixed(1)+'" height="'+bh+'"/>'
       + '<text class="cval" x="'+(m.l+len+7).toFixed(1)+'" y="'+(y+8+bh*0.72).toFixed(1)+'">'
       + b.v.toFixed(2)+'%</text>';
  });
  const desc = 'Horizontal bar chart of one-day price changes after the 7 April 2026 ceasefire announcement. '
    + 'Front-month WTI fell 16.41 per cent, front-month Brent for June fell 13.29 per cent, and six-month '
    + 'Brent fell 2.33 per cent.';
  return {svg: svgWrap(w, h, g, desc, fs), extra: ''};
}

function svgWrap(w, h, inner, desc, fs){
  return '<svg class="chart-svg" viewBox="0 0 '+w+' '+h+'" width="'+w+'" height="'+h+'" '
    + 'role="img" aria-label="'+esc2(desc)+'" style="--fs:'+fs+'px">'
    + '<desc>'+esc2(desc)+'</desc>' + inner + '</svg>';
}

const ASCEND_CHARTS = {
  'brent-price-2025-2026': {
    n: 1,
    title: 'Brent crude oil spot price, US$ per barrel',
    source: 'US EIA via FRED (DCOILBRENTEU). Last observation '
      + new Date(BRENT[BRENT.length-1].d + 'T12:00:00Z')
          .toLocaleDateString('en-GB',{day:'numeric',month:'long',year:'numeric',timeZone:'UTC'}) + '.',
    build: brentChart
  },
  'hormuz-flows': {
    n: 2,
    title: 'Oil flows from the Gulf, million barrels per day',
    source: 'IEA Oil Market Report, September 2026; pre-war Hormuz flow per IEA/EIA estimates.',
    build: hormuzChart
  },
  'ceasefire-day-moves': {
    n: 3,
    title: 'One-day price change after the 7 April 2026 ceasefire announcement',
    source: 'Deutsche Bank research, via FXStreet; ICE and NYMEX settlement data.',
    build: ceasefireChart
  }
};

function renderCharts(root){
  if(!root) return;
  root.querySelectorAll('figure.chart[data-chart]').forEach(fig => {
    const cfg = ASCEND_CHARTS[fig.dataset.chart];
    if(!cfg) return;
    const w = Math.max(280, Math.round(fig.clientWidth || 640));
    if(fig.dataset.w === String(w)) return;        /* already drawn at this width */
    fig.dataset.w = String(w);
    const out = cfg.build(w);
    fig.innerHTML = out.svg + (out.extra || '')
      + '<figcaption><b>Figure '+cfg.n+':</b> '+esc2(cfg.title)+'. '
      + '<span class="src">Source: '+esc2(cfg.source)+'</span></figcaption>';
  });
}

let chartResizeTimer = null;
window.addEventListener('resize', () => {
  clearTimeout(chartResizeTimer);
  chartResizeTimer = setTimeout(() => renderCharts(document.getElementById('app')), 180);
});
