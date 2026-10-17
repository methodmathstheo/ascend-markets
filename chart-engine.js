/* =============================================================
   ASCEND MARKETS - CHART ENGINE
   Data-driven inline SVG. No dependencies.

   A note places a figure with:
     <figure class="chart" data-chart-json="assets/data/blog-3/c01.json"></figure>

   Every chart reads one JSON file holding its own data plus
   source, source_url and as_of. Numbers are never typed into
   this file: it only draws what the data file says.

   Fixed colour per asset class, reusing the site's section
   palette so charts match the rest of the publication.
   ============================================================= */

const CE_COLOUR = {
  equities: 'var(--sec-equities)',
  bonds:    'var(--sec-fixedincome)',
  sterling: 'var(--sec-fx)',
  rates:    'var(--sec-macro)'
};
const CE_ACCENT = 'var(--accent)';
const ceCol = k => CE_COLOUR[k] || CE_ACCENT;
const ceEsc = s => String(s == null ? '' : s).replace(/[&<>"']/g, c =>
  ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const ceDate = s => Date.parse(s + 'T12:00:00Z');
const ceNum = (v, dp) => Number(v).toFixed(dp == null ? 2 : dp);
const ceDay = t => new Date(t).toLocaleDateString('en-GB',
  {day:'numeric', month:'short', timeZone:'UTC'});

/* ---------- shared frame ---------- */
function ceFrame(w, h, fs, inner, alt){
  return '<svg class="chart-svg" viewBox="0 0 '+w+' '+h+'" width="'+w+'" height="'+h+'" '
    + 'role="img" aria-label="'+ceEsc(alt)+'" style="--fs:'+fs+'px">'
    + '<desc>'+ceEsc(alt)+'</desc>'+inner+'</svg>';
}
function ceTicks(lo, hi, n){
  const span = hi - lo, raw = span / n;
  const mag = Math.pow(10, Math.floor(Math.log10(raw)));
  const step = [1,2,2.5,5,10].map(m=>m*mag).find(s=>s>=raw) || mag*10;
  const out = [];
  for(let v = Math.ceil(lo/step)*step; v <= hi + 1e-9; v += step) out.push(+v.toFixed(10));
  return out;
}
function ceLegend(series){
  if(series.length < 2) return '';
  return '<ul class="chart-legend">' + series.map(s =>
    '<li><i class="sw" style="background:'+ceCol(s.key)+(s.dashed?';opacity:.75':'')+'"></i>'
    + ceEsc(s.name)+'</li>').join('') + '</ul>';
}

/* ---------- line and step ---------- */
function ceLine(d, w, step){
  const narrow = w < 520;
  const h = narrow ? Math.round(w * 0.86) : Math.round(w * 0.56);
  const fs = narrow ? 9.5 : 11;
  const byDate = d.x === 'date';
  const m = {t: 16, r: narrow ? 12 : 54, b: narrow ? 40 : 34, l: narrow ? 36 : 44};
  const iw = w - m.l - m.r, ih = h - m.t - m.b;

  /* values, with optional rebasing to 100 */
  const prep = s => {
    if(byDate){
      const base = d.index_to_100 ? s.data[0][1] : 1;
      return s.data.map(p => ({t: ceDate(p[0]), v: d.index_to_100 ? p[1]/base*100 : p[1], raw: p[1]}));
    }
    return s.data.map((v, i) => ({i: i, v: v, raw: v}));
  };
  const sets = d.series.map(s => ({s: s, pts: prep(s)}));

  let vals = [];
  sets.forEach(x => x.pts.forEach(p => { if(p.v != null) vals.push(p.v); }));
  (d.anchors||[]).forEach(a => { if(a.point && !d.index_to_100) vals.push(a.value); });
  if(d.hline) vals.push(d.hline.value);
  let lo = Math.min.apply(null, vals), hi = Math.max.apply(null, vals);
  const pad = (hi - lo) * 0.12 || 1; lo -= pad; hi += pad;
  if(step) lo = Math.min(lo, 3.5);

  let t0, t1;
  if(byDate){
    t0 = Math.min.apply(null, sets.map(x => x.pts[0].t));
    t1 = d.x_max ? ceDate(d.x_max) : Math.max.apply(null, sets.map(x => x.pts[x.pts.length-1].t));
  }
  const X = p => byDate ? m.l + (p.t - t0)/(t1 - t0)*iw
                        : m.l + (d.categories.length === 1 ? iw/2 : p.i/(d.categories.length-1)*iw);
  const Y = v => m.t + (hi - v)/(hi - lo)*ih;

  let g = '';
  ceTicks(lo, hi, narrow ? 4 : 5).forEach(v => {
    g += '<line class="cg" x1="'+m.l+'" y1="'+Y(v).toFixed(1)+'" x2="'+(m.l+iw)+'" y2="'+Y(v).toFixed(1)+'"/>'
       + '<text class="cl" x="'+(m.l-6)+'" y="'+(Y(v)+3.5).toFixed(1)+'" text-anchor="end">'
       + ceNum(v, d.unit_dp != null ? d.unit_dp : (hi-lo > 20 ? 0 : (hi-lo>3?1:2))) + '</text>';
  });

  /* x axis */
  if(byDate){
    const months = [];
    let c = new Date(t0); c = new Date(Date.UTC(c.getUTCFullYear(), c.getUTCMonth(), 1, 12));
    while(c.getTime() <= t1){
      if(c.getTime() >= t0) months.push(c.getTime());
      c = new Date(Date.UTC(c.getUTCFullYear(), c.getUTCMonth()+1, 1, 12));
    }
    const everyN = narrow ? Math.ceil(months.length/4) : Math.ceil(months.length/7);
    months.forEach((t, i) => {
      if(i % everyN) return;
      g += '<text class="cl" x="'+((m.l + (t-t0)/(t1-t0)*iw)).toFixed(1)+'" y="'+(m.t+ih+15)+'" '
         + 'text-anchor="middle">'+new Date(t).toLocaleDateString('en-GB',{month:'short',timeZone:'UTC'})+'</text>';
    });
  } else {
    const everyN = narrow ? Math.ceil(d.categories.length/5) : 1;
    d.categories.forEach((c, i) => {
      if(i % everyN) return;
      g += '<text class="cl" x="'+X({i:i}).toFixed(1)+'" y="'+(m.t+ih+15)+'" text-anchor="middle">'
         + ceEsc(c)+'</text>';
    });
  }

  if(d.hline){
    g += '<line class="cref" x1="'+m.l+'" y1="'+Y(d.hline.value).toFixed(1)+'" x2="'+(m.l+iw)+'" y2="'+Y(d.hline.value).toFixed(1)+'"/>'
       + '<text class="cl cdim" x="'+(m.l+4)+'" y="'+(Y(d.hline.value)-5).toFixed(1)+'">'+ceEsc(d.hline.label)+'</text>';
  }
  (d.vlines||[]).forEach(v => {
    const x = m.l + (ceDate(v.date)-t0)/(t1-t0)*iw;
    g += '<line class="cev" x1="'+x.toFixed(1)+'" y1="'+m.t+'" x2="'+x.toFixed(1)+'" y2="'+(m.t+ih)+'"/>'
       + '<text class="cl cdim" x="'+(x-4).toFixed(1)+'" y="'+(m.t+11)+'" text-anchor="end">'+ceEsc(v.label)+'</text>';
  });

  /* series */
  sets.forEach(x => {
    let dstr = '', open = false, last = null;
    x.pts.forEach(p => {
      if(p.v == null){ if(step && last != null){} return; }
      const px = X(p), py = Y(p.v);
      if(!open){ dstr += 'M'+px.toFixed(1)+','+py.toFixed(1); open = true; }
      else if(step){ dstr += 'H'+px.toFixed(1)+'V'+py.toFixed(1); }
      else { dstr += 'L'+px.toFixed(1)+','+py.toFixed(1); }
      last = p;
    });
    if(step && x.s.tail_label && last) dstr += 'H'+X({i:d.categories.length-1}).toFixed(1);
    g += '<path class="cline'+(x.s.dashed?' cdash':'')+'" style="stroke:'+ceCol(x.s.key)+'" d="'+dstr+'"/>';
    if(!byDate){
      x.pts.forEach(p => { if(p.v != null)
        g += '<circle class="cdot" style="fill:'+ceCol(x.s.key)+'" cx="'+X(p).toFixed(1)+'" cy="'+Y(p.v).toFixed(1)+'" r="2.6"/>'; });
    }
    /* end label with the real level */
    if(!narrow && byDate){
      const e = x.pts.filter(p=>p.v!=null).pop();
      g += '<text class="cend" style="fill:'+ceCol(x.s.key)+'" x="'+(m.l+iw+6)+'" y="'+(Y(e.v)+3.5).toFixed(1)+'">'
         + ceNum(e.raw, e.raw > 50 ? 0 : 2)+'</text>';
    }
  });

  /* anchors: the agreed reference numbers, drawn where they belong */
  (d.anchors||[]).forEach((a, i) => {
    const set = sets.find(x => x.s.key === a.series); if(!set) return;
    let px, py;
    if(byDate){
      px = m.l + (ceDate(a.date)-t0)/(t1-t0)*iw;
      const near = set.pts.reduce((b,p)=> Math.abs(p.t-ceDate(a.date)) < Math.abs(b.t-ceDate(a.date)) ? p : b, set.pts[0]);
      py = Y(a.point ? a.value : near.v);
    } else return;
    const up = i % 2 === 0;
    g += '<circle class="canch" style="stroke:'+ceCol(a.series)+'" cx="'+px.toFixed(1)+'" cy="'+py.toFixed(1)+'" r="3.4"/>';
    if(!narrow){
      g += '<text class="cnote" x="'+Math.min(px+6, m.l+iw-4).toFixed(1)+'" y="'+(py + (up?-9:15)).toFixed(1)+'" '
         + 'text-anchor="'+(px > m.l+iw*0.62 ? 'end' : 'start')+'">'+ceEsc(a.label)+'</text>';
    }
  });

  if(d.note_at){
    const i = d.categories.indexOf(d.note_at.category);
    if(i >= 0) g += '<text class="cnote" x="'+(X({i:i})+6).toFixed(1)+'" y="'+(m.t+12)+'">'+ceEsc(d.note_at.text)+'</text>';
  }
  if(step) d.series.forEach(s => {
    if(!s.tail_label) return;
    const i = d.categories.length-1;
    g += '<text class="cnote" x="'+(X({i:i})-4).toFixed(1)+'" y="'+(Y(s.data[i])-7).toFixed(1)+'" text-anchor="end">'
       + ceEsc(s.tail_label)+'</text>';
  });

  const narrowAnchors = narrow && (d.anchors||[]).length
    ? '<ul class="chart-key2">' + d.anchors.map(a =>
        '<li><i class="sw" style="background:'+ceCol(a.series)+'"></i>'+ceEsc(a.label)+'</li>').join('') + '</ul>'
    : '';
  return ceFrame(w, h, fs, g, d.alt) + ceLegend(d.series) + narrowAnchors;
}

/* ---------- bars ---------- */
function ceBars(d, w){
  const narrow = w < 520;
  const fs = narrow ? 9.5 : 11;
  const rows = (d.rows||[]).map(r => Array.isArray(r) ? {label:r[0], value:r[1]} : r);
  const vals = rows.map(r => r.value);
  const horiz = !!d.horizontal;
  const diverging = !!d.diverging;
  const col = ceCol(d.colour);

  if(horiz){
    const rowH = narrow ? 42 : 38, m = {t: 6, r: narrow ? 46 : 58, b: 6, l: 6};
    const h = m.t + rows.length*rowH + m.b;
    const iw = w - m.l - m.r;
    const hi = Math.max.apply(null, vals) * 1.04;
    let g = '';
    rows.forEach((r, i) => {
      const y = m.t + i*rowH, len = r.value/hi*iw, bh = narrow ? 14 : 15;
      g += '<text class="cl clab" x="'+m.l+'" y="'+(y+12)+'">'+ceEsc(r.label)+'</text>'
         + '<rect class="cbar" style="fill:'+col+(r.highlight?'':';opacity:.55')+'" x="'+m.l+'" y="'+(y+18)+'" '
         + 'width="'+Math.max(0,len).toFixed(1)+'" height="'+bh+'"/>'
         + '<text class="cval" x="'+(m.l+len+6).toFixed(1)+'" y="'+(y+18+bh*0.78).toFixed(1)+'">'
         + ceNum(r.value, r.value % 1 ? (d.unit==='%'?2:2) : 0)+(d.unit||'')+'</text>';
    });
    return ceFrame(w, h, fs, g, d.alt);
  }

  const h = narrow ? Math.round(w*0.78) : Math.round(w*0.5);
  const m = {t: 22, r: 10, b: narrow ? 46 : 34, l: narrow ? 34 : 40};
  const iw = w - m.l - m.r, ih = h - m.t - m.b;
  let lo = diverging ? Math.min(0, Math.min.apply(null, vals)*1.15) : 0;
  let hi = Math.max(0.0001, Math.max.apply(null, vals)*1.12);
  if(diverging) hi = Math.max(hi, Math.abs(lo)*0.25);
  const Y = v => m.t + (hi - v)/(hi - lo)*ih;
  const bw = Math.min(narrow ? 26 : 48, iw/rows.length*0.62);
  let g = '';
  ceTicks(lo, hi, 4).forEach(v => {
    g += '<line class="cg" x1="'+m.l+'" y1="'+Y(v).toFixed(1)+'" x2="'+(m.l+iw)+'" y2="'+Y(v).toFixed(1)+'"/>'
       + '<text class="cl" x="'+(m.l-6)+'" y="'+(Y(v)+3.5).toFixed(1)+'" text-anchor="end">'+ceNum(v, Math.abs(v)<10?2:0)+'</text>';
  });
  rows.forEach((r, i) => {
    const cx = m.l + (i+0.5)/rows.length*iw;
    const y0 = Y(0), y1 = Y(r.value);
    g += '<rect class="cbar" style="fill:'+col+(r.highlight===false?';opacity:.55':(r.highlight?'':';opacity:.78'))+'" '
       + 'x="'+(cx-bw/2).toFixed(1)+'" y="'+Math.min(y0,y1).toFixed(1)+'" width="'+bw.toFixed(1)+'" '
       + 'height="'+Math.abs(y1-y0).toFixed(1)+'"/>'
       + '<text class="cval" x="'+cx.toFixed(1)+'" y="'+(r.value < 0 ? y0+Math.abs(y1-y0)+12 : y1-6).toFixed(1)+'" text-anchor="middle">'
       + ceNum(r.value, 2)+(d.unit||'')+'</text>'
       + '<text class="cl" x="'+cx.toFixed(1)+'" y="'+(m.t+ih+(narrow?14:15))+'" text-anchor="middle" '
       + (narrow ? 'transform="rotate(-40 '+cx.toFixed(1)+','+(m.t+ih+14)+')" text-anchor="end"' : '')
       + '>'+ceEsc(r.label)+'</text>';
  });
  g += '<line class="caxis" x1="'+m.l+'" y1="'+Y(0).toFixed(1)+'" x2="'+(m.l+iw)+'" y2="'+Y(0).toFixed(1)+'"/>';
  if(d.zero_label) g += '<text class="cnote" x="'+(m.l+4)+'" y="'+(Y(0)-6).toFixed(1)+'">'+ceEsc(d.zero_label)+'</text>';
  return ceFrame(w, h, fs, g, d.alt);
}

/* ---------- two bar panels ---------- */
function cePanels(d, w){
  const narrow = w < 560;
  const pw = narrow ? w : Math.floor((w - 18)/2);
  return '<div class="chart-panels">' + d.panels.map(p =>
    '<div class="cpanel"><p class="cpname">'+ceEsc(p.name)+'</p>'
    + ceBars({rows:p.rows, horizontal:true, unit:p.unit==='%'?'%':'', colour:d.colour, alt:d.alt}, pw)
    + '</div>').join('') + '</div>';
}

/* ---------- payoff lines ---------- */
function cePL(d, w){
  const narrow = w < 520;
  const h = narrow ? Math.round(w*0.82) : Math.round(w*0.54);
  const fs = narrow ? 9.5 : 11;
  const m = {t: 14, r: narrow ? 12 : 16, b: narrow ? 38 : 32, l: narrow ? 36 : 44};
  const iw = w - m.l - m.r, ih = h - m.t - m.b;
  const [x0, x1] = d.x, S = d.start, L = d.legs;
  const xs = []; for(let s = x0; s <= x1; s++) xs.push(s);
  const defs = [
    {key:'equities', name:'Shares only', f: s => s - S},
    {key:'rates', name:'Shares plus short future', f: () => 0},
    {key:'bonds', name:'Shares plus 95/90 put spread', f: s =>
      (s - S) + Math.max(L.put_long - s, 0) - Math.max(L.put_short - s, 0) - L.premium}
  ];
  let lo = 0, hi = 0;
  defs.forEach(d2 => xs.forEach(s => { const v = d2.f(s); lo = Math.min(lo, v); hi = Math.max(hi, v); }));
  const pad = (hi-lo)*0.1; lo -= pad; hi += pad;
  const X = s => m.l + (s - x0)/(x1 - x0)*iw, Y = v => m.t + (hi - v)/(hi - lo)*ih;
  let g = '';
  ceTicks(lo, hi, 4).forEach(v => {
    g += '<line class="cg" x1="'+m.l+'" y1="'+Y(v).toFixed(1)+'" x2="'+(m.l+iw)+'" y2="'+Y(v).toFixed(1)+'"/>'
       + '<text class="cl" x="'+(m.l-6)+'" y="'+(Y(v)+3.5).toFixed(1)+'" text-anchor="end">'+ceNum(v,0)+'</text>';
  });
  [80,90,95,100,110,120].forEach(s => { if(s<x0||s>x1) return;
    g += '<text class="cl" x="'+X(s).toFixed(1)+'" y="'+(m.t+ih+15)+'" text-anchor="middle">'+s+'</text>'; });
  g += '<line class="caxis" x1="'+m.l+'" y1="'+Y(0).toFixed(1)+'" x2="'+(m.l+iw)+'" y2="'+Y(0).toFixed(1)+'"/>';
  [L.put_short, L.put_long].forEach(k => {
    g += '<line class="cev" x1="'+X(k).toFixed(1)+'" y1="'+m.t+'" x2="'+X(k).toFixed(1)+'" y2="'+(m.t+ih)+'"/>';
  });
  defs.forEach(d2 => {
    g += '<path class="cline" style="stroke:'+ceCol(d2.key)+'" d="'
       + xs.map((s,i)=>(i?'L':'M')+X(s).toFixed(1)+','+Y(d2.f(s)).toFixed(1)).join('')+'"/>';
  });
  const floor = defs[2].f(L.put_short);
  g += '<text class="cnote" x="'+X(92.5).toFixed(1)+'" y="'+(Y(floor)-8).toFixed(1)+'" text-anchor="middle">'
     + 'Floor of '+ceNum(floor,2)+' between 90 and 95</text>'
     + '<text class="cnote" x="'+X(L.put_short).toFixed(1)+'" y="'+(m.t+ih-6).toFixed(1)+'" text-anchor="middle">'
     + 'Protection stops below 90</text>';
  return ceFrame(w, h, fs, g, d.alt) + ceLegend(defs.map(x=>({key:x.key,name:x.name})));
}

/* ---------- timeline ---------- */
function ceTimeline(d, w){
  const narrow = w < 560;
  const fs = narrow ? 9 : 10.5;
  const t0 = ceDate(d.start), t1 = ceDate(d.end);
  const m = {t: narrow ? 72 : 64, r: 10, b: 8, l: 10};
  const barH = narrow ? 26 : 24;
  const h = m.t + d.bars.length*barH + 22 + m.b;
  const iw = w - m.l - m.r;
  const X = t => m.l + (t - t0)/(t1 - t0)*iw;
  let g = '<line class="caxis" x1="'+m.l+'" y1="'+(m.t-14)+'" x2="'+(m.l+iw)+'" y2="'+(m.t-14)+'"/>';
  const rowLastX = [-999, -999];
  d.events.forEach((e) => {
    const x = X(ceDate(e.date));
    const gap = narrow ? 70 : 92;
    const row = (x - rowLastX[0] >= gap) ? 0 : ((x - rowLastX[1] >= gap) ? 1 : 0);
    rowLastX[row] = x;
    const up = row ? 46 : 22;
    g += '<line class="cev" x1="'+x.toFixed(1)+'" y1="'+(m.t-14)+'" x2="'+x.toFixed(1)+'" y2="'+(m.t+d.bars.length*barH)+'"/>'
       + '<circle class="cevc" style="fill:'+CE_ACCENT+'" cx="'+x.toFixed(1)+'" cy="'+(m.t-14)+'" r="3.4"/>'
       + '<text class="cnote" x="'+x.toFixed(1)+'" y="'+(m.t-14-up+10)+'" text-anchor="middle">'+ceEsc(e.label)+'</text>'
       + '<text class="cl cdim" x="'+x.toFixed(1)+'" y="'+(m.t-14-up)+'" text-anchor="middle">'+ceDay(ceDate(e.date))+'</text>';
  });
  d.bars.forEach((b, i) => {
    const y = m.t + i*barH, x = X(ceDate(b.from)), x2 = X(ceDate(b.to));
    g += '<rect class="cbar" style="fill:'+ceCol(b.key)+';opacity:.75" x="'+x.toFixed(1)+'" y="'+y+'" '
       + 'width="'+Math.max(4,(x2-x)).toFixed(1)+'" height="'+(barH-9)+'" rx="3"/>'
       + '<text class="cl clab" x="'+(x+6).toFixed(1)+'" y="'+(y+(barH-9)*0.74).toFixed(1)+'" '
       + 'style="fill:var(--paper)">'+ceEsc(b.label)+'</text>';
  });
  return ceFrame(w, h, fs, g, d.alt);
}

/* ---------- table graphic ---------- */
function ceTable(d){
  return '<div class="chart-table-wrap"><table class="chart-table"><thead><tr>'
    + '<th>Asset class</th><th>Price of options</th><th>Tool</th><th>Why</th></tr></thead><tbody>'
    + d.rows.map(r => '<tr><th scope="row"><i class="sw" style="background:'+ceCol(r.key)+'"></i>'
        + ceEsc(r.asset)+'</th><td>'+ceEsc(r.price)+'</td><td>'+ceEsc(r.tool)+'</td><td>'
        + ceEsc(r.why)+'</td></tr>').join('')
    + '</tbody></table></div>';
}

/* ---------- dispatch ---------- */
function ceBuild(d, w){
  switch(d.type){
    case 'line':  return ceLine(d, w, false);
    case 'step':  return ceLine(d, w, true);
    case 'bars':  return ceBars(d, w);
    case 'panels':return cePanels(d, w);
    case 'pl':    return cePL(d, w);
    case 'timeline': return ceTimeline(d, w);
    case 'table': return ceTable(d);
    default: return '<p class="chart-err">Unknown chart type.</p>';
  }
}

const CE_CACHE = {};
function renderJsonCharts(root){
  if(!root) return;
  root.querySelectorAll('figure.chart[data-chart-json]').forEach(fig => {
    const src = fig.dataset.chartJson;
    const w = Math.max(280, Math.round(fig.clientWidth || 640));
    if(fig.dataset.w === String(w)) return;
    const draw = d => {
      fig.dataset.w = String(w);
      const asOf = d.as_of ? new Date(d.as_of+'T12:00:00Z')
        .toLocaleDateString('en-GB',{day:'numeric',month:'long',year:'numeric',timeZone:'UTC'}) : '';
      fig.innerHTML =
        '<p class="ct">'+ceEsc(d.title)+'</p>'
        + (d.subtitle ? '<p class="cst">'+ceEsc(d.subtitle)+'</p>' : '')
        + ceBuild(d, w)
        + (d.note ? '<p class="cnote-out">'+ceEsc(d.note)+'</p>' : '')
        + '<figcaption>Source: '
        + (d.source_url ? '<a href="'+ceEsc(d.source_url)+'" rel="nofollow noopener">'+ceEsc(d.source)+'</a>' : ceEsc(d.source))
        + (asOf ? '. As of '+asOf+'.' : '.') + '</figcaption>';
    };
    if(CE_CACHE[src]) return draw(CE_CACHE[src]);
    fig.innerHTML = '<p class="chart-err">Loading chart...</p>';
    fetch(src).then(r => { if(!r.ok) throw new Error(r.status); return r.json(); })
      .then(d => { CE_CACHE[src] = d; draw(d); })
      .catch(() => { fig.innerHTML = '<p class="chart-err">This chart could not be loaded.</p>'; });
  });
}
let ceTimer = null;
window.addEventListener('resize', () => {
  clearTimeout(ceTimer);
  ceTimer = setTimeout(() => renderJsonCharts(document.getElementById('app')), 180);
});
