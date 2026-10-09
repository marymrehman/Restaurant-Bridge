
/* ================= Icons ================= */
const I={
  dash:'<path d="M4 13h6V4H4zM14 20h6v-9h-6zM4 20h6v-4H4zM14 4v4h6V4z"/>',
  req:'<path d="M9 5h10M9 12h10M9 19h10"/><path d="M4 5h.01M4 12h.01M4 19h.01"/>',
  count:'<path d="M5 20V10M12 20V4M19 20v-7"/>',
  recv:'<path d="M4 7l8 6 8-6"/><rect x="3" y="5" width="18" height="14" rx="2"/>',
  ship:'<path d="M3 7h11v9H3zM14 10h4l3 3v3h-7"/><circle cx="7" cy="18" r="1.8"/><circle cx="17" cy="18" r="1.8"/>',
  waste:'<path d="M4 7h16M9 7V4h6v3M6 7l1 13h10l1-13"/><path d="M10 11v6M14 11v6"/>',
  plus:'<path d="M12 5v14M5 12h14"/>',
  search:'<circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/>',
  x:'<path d="M6 6l12 12M18 6 6 18"/>',
  check:'<path d="m5 12 5 5L20 7"/>',
  trash:'<path d="M4 7h16M9 7V4h6v3M6 7l1 13h10l1-13"/>',
  eye:'<path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>',
  box:'<path d="M3 7l9-4 9 4-9 4-9-4zM3 7v10l9 4 9-4V7M12 11v10"/>',
  clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  alert:'<path d="M12 3 2 20h20L12 3z"/><path d="M12 10v4M12 17h.01"/>',
  save:'<path d="M5 3h11l3 3v15H5z"/><path d="M8 3v6h8V3M8 21v-7h8v7"/>',
  tpl:'<rect x="4" y="3" width="16" height="18" rx="2"/><path d="M8 8h8M8 12h8M8 16h5"/>',
  send:'<path d="M22 2 11 13M22 2l-7 20-4-9-9-4z"/>'
};
const ico=(n,cls='')=>`<svg class="${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${I[n]}</svg>`;

/* ================= Dummy data (examples) ================= */
const CATS={Produce:['#e7f4ec','#2f855a'],Meat:['#fdecec','#c53030'],Seafood:['#e8f0fb','#2b6cb0'],Dairy:['#fdf6e3','#a77b12'],"Dry Goods":['#f3ede4','#8a5a2b'],Beverage:['#efe9fb','#6b46c1'],Packaging:['#eef0f3','#4a5568']};
const ITEMS=[
 ['ITM-10021','Tomatoes, Roma','Produce','KG',42,60,'B-2610-04','Cold Room A'],
 ['ITM-10022','Onions, Red','Produce','KG',85,80,'B-2609-18','Dry Store 1'],
 ['ITM-10023','Romaine Lettuce','Produce','PCS',18,50,'B-2610-06','Cold Room A'],
 ['ITM-10031','Lemons','Produce','KG',12,25,'B-2610-02','Cold Room A'],
 ['ITM-10044','Fresh Mint','Produce','BNCH',9,30,'B-2610-07','Cold Room A'],
 ['ITM-20011','Chicken Breast, Boneless','Meat','KG',64,70,'B-2610-01','Freezer 2'],
 ['ITM-20013','Beef Tenderloin','Meat','KG',22,30,'B-2609-29','Freezer 1'],
 ['ITM-20017','Lamb Shoulder','Meat','KG',31,40,'B-2609-27','Freezer 1'],
 ['ITM-20020','Ground Beef 80/20','Meat','KG',6,35,'B-2610-03','Freezer 2'],
 ['ITM-30004','Salmon Fillet','Seafood','KG',14,20,'B-2610-05','Freezer 3'],
 ['ITM-30009','Tiger Prawns 16/20','Seafood','KG',11,15,'B-2609-30','Freezer 3'],
 ['ITM-40002','Mozzarella, Shredded','Dairy','KG',28,30,'B-2610-02','Cold Room B'],
 ['ITM-40005','Heavy Cream 35%','Dairy','LTR',20,24,'B-2610-04','Cold Room B'],
 ['ITM-40008','Unsalted Butter','Dairy','KG',4,15,'B-2609-21','Cold Room B'],
 ['ITM-40011','Greek Yogurt','Dairy','KG',16,18,'B-2610-06','Cold Room B'],
 ['ITM-50001','Basmati Rice','Dry Goods','KG',180,200,'B-2608-14','Dry Store 1'],
 ['ITM-50003','Olive Oil, Extra Virgin','Dry Goods','LTR',36,40,'B-2607-30','Dry Store 2'],
 ['ITM-50007','All-Purpose Flour','Dry Goods','KG',95,100,'B-2609-02','Dry Store 1'],
 ['ITM-50012','Saffron Threads','Dry Goods','GM',40,100,'B-2606-11','Spice Cage'],
 ['ITM-50015','Sea Salt, Fine','Dry Goods','KG',22,20,'B-2605-20','Dry Store 2'],
 ['ITM-60002','Sparkling Water 330ml','Beverage','CTN',48,40,'B-2609-15','Bev Store'],
 ['ITM-60006','Fresh Orange Juice','Beverage','LTR',7,24,'B-2610-07','Cold Room B'],
 ['ITM-70001','Takeaway Box, Kraft L','Packaging','PCS',1200,1500,'B-2608-01','Pack Store'],
 ['ITM-70004','Paper Cups 12oz','Packaging','PCS',340,1000,'B-2609-09','Pack Store'],
].map(([no,name,cat,unit,stock,par,batch,loc])=>({no,name,cat,unit,stock,par,batch,loc}));
const byNo=Object.fromEntries(ITEMS.map(i=>[i.no,i]));
const WAREHOUSES=['JED-WH','JED-CK01 Central Kitchen','JED-BR02 Tahlia Branch','JED-BR03 Corniche Branch','JED-BR05 Red Sea Mall','RUH-WH Riyadh'];
/* ================= Helpers ================= */
const $=s=>document.querySelector(s);
const esc=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const fmtD=d=>new Date(d+'T00:00').toLocaleDateString('en-US',{month:'short',day:'2-digit',year:'numeric'}).replace(',','');
const SAR=n=>(n<0?'−':'')+'SAR '+Math.abs(n).toLocaleString('en-US',{minimumFractionDigits:2,maximumFractionDigits:2});
function thumb(i){const [b,f]=CATS[i.cat];return `<span class="thumb" style="background:${b};color:${f}">${esc(i.name.split(/[ ,]/).filter(Boolean).slice(0,2).map(w=>w[0]).join(''))}</span>`}
const itemCell=i=>`<div class="item-cell">${thumb(i)}<div class="meta"><span>${esc(i.name)}</span><small class="mono">${i.no}</small></div></div>`;
function stockState(i){const r=i.stock/i.par;return r<.35?['bad','Low']:r<.75?['warn','Reorder']:['ok','In stock']}
function stockCell(i){const [k]=stockState(i);const pct=Math.min(100,Math.round(i.stock/i.par*100));return `<span class="num">${i.stock.toLocaleString()}</span><span class="stock-bar"><i style="width:${pct}%;background:var(--${k})"></i></span>`}
const STATUS={Requested:'warn',Shipped:'info',Received:'ok'};
const pill=s=>`<span class="pill ${STATUS[s]||'neutral'}">${esc(s)}</span>`;
function toast(msg){try{sessionStorage.setItem('rb-toast',msg)}catch(e){}showToast(msg)}
function showToast(msg){try{sessionStorage.removeItem('rb-toast')}catch(e){}document.querySelectorAll('.toast').forEach(x=>x.remove());const t=document.createElement('div');t.className='toast';t.innerHTML=ico('check')+esc(msg);document.body.appendChild(t);setTimeout(()=>t.remove(),2600)}
function store(k,v){try{v===undefined?localStorage.removeItem(k):localStorage.setItem(k,v)}catch(e){}}
function load(k){try{return localStorage.getItem(k)}catch(e){return null}}

/* generic paginated, searchable, sortable table */
function dataTable({rows,cols,searchKeys,pageSize=8,onRow,emptyTitle='Nothing here yet',emptyText='',toolbarExtra='',id}){
  const st={q:'',page:0,sort:null,dir:1,extra:null};
  const wrap=document.createElement('div');
  wrap.innerHTML=`<div class="toolbar"><div class="search">${ico('search')}<input class="input" id="${id}-q" placeholder="Search items, IDs…" aria-label="Search"></div>${toolbarExtra}</div>
   <div class="table-wrap"><table><thead><tr>${cols.map((c,i)=>`<th class="${c.r?'r ':''}${c.sort?'sortable':''}" data-i="${i}">${c.h}${c.sort?' <span aria-hidden="true">↕</span>':''}</th>`).join('')}</tr></thead><tbody></tbody></table></div>
   <div class="table-foot"><span class="tinfo"></span><div class="pager"><button class="btn sm prev">Previous</button><button class="btn sm next">Next</button></div></div>`;
  const tb=wrap.querySelector('tbody');
  function filtered(){let r=rows();const q=st.q.toLowerCase();if(q)r=r.filter(x=>searchKeys(x).toLowerCase().includes(q));if(st.extra)r=r.filter(st.extra);if(st.sort!=null){const c=cols[st.sort];r=[...r].sort((a,b)=>{const A=c.sort(a),B=c.sort(b);return (A>B?1:A<B?-1:0)*st.dir})}return r}
  function draw(){const r=filtered();const pages=Math.max(1,Math.ceil(r.length/pageSize));st.page=Math.min(st.page,pages-1);const slice=r.slice(st.page*pageSize,(st.page+1)*pageSize);
    tb.innerHTML=slice.length?slice.map((x,idx)=>`<tr class="${onRow?'clickable':''}" data-k="${st.page*pageSize+idx}">${cols.map(c=>`<td class="${c.r?'r':''}">${c.v(x)}</td>`).join('')}</tr>`).join(''):`<tr><td colspan="${cols.length}"><div class="empty"><b>${emptyTitle}</b>${emptyText}</div></td></tr>`;
    wrap.querySelector('.tinfo').textContent=r.length?`Showing ${st.page*pageSize+1}–${st.page*pageSize+slice.length} of ${r.length} entries`:'No entries to show';
    wrap.querySelector('.prev').disabled=st.page===0;wrap.querySelector('.next').disabled=st.page>=pages-1;
    if(onRow)tb.querySelectorAll('tr.clickable').forEach(tr=>tr.addEventListener('click',e=>{if(e.target.closest('button:not([data-view]),input,select'))return;onRow(r[+tr.dataset.k])}));
    wrap.dispatchEvent(new CustomEvent('drawn',{detail:{rows:slice,all:r}}));
  }
  wrap.querySelector('input').addEventListener('input',e=>{st.q=e.target.value;st.page=0;draw()});
  wrap.querySelector('.prev').onclick=()=>{st.page--;draw()};wrap.querySelector('.next').onclick=()=>{st.page++;draw()};
  wrap.querySelectorAll('th.sortable').forEach(th=>th.onclick=()=>{const i=+th.dataset.i;st.dir=st.sort===i?-st.dir:1;st.sort=i;draw()});
  wrap.redraw=draw;wrap.setFilter=f=>{st.extra=f;st.page=0;draw()};
  draw();return wrap;
}
function chipsFilter(table,options,fn){const box=document.createElement('div');box.className='chips';box.innerHTML=options.map((o,i)=>`<button class="chip ${i?'':'on'}" data-v="${esc(o)}">${esc(o)}</button>`).join('');
  box.onclick=e=>{const b=e.target.closest('.chip');if(!b)return;box.querySelectorAll('.chip').forEach(c=>c.classList.toggle('on',c===b));table.setFilter(b.dataset.v===options[0]?null:x=>fn(x,b.dataset.v))};return box}

/* ================= Modals ================= */
function openModal(html,{narrow=false,drawer=false}={}){
  const s=document.createElement('div');s.className='scrim'+(drawer?' drawer-scrim':'');
  s.innerHTML=`<div class="${drawer?'drawer':'modal'+(narrow?' narrow':'')}" role="dialog" aria-modal="true">${html}</div>`;
  $('#layer').appendChild(s);
  const close=()=>{s.remove();document.removeEventListener('keydown',k)};
  const k=e=>{if(e.key==='Escape'&&$('#layer').lastElementChild===s)close()};document.addEventListener('keydown',k);
  s.addEventListener('click',e=>{if(e.target===s||e.target.closest('[data-close]'))close()});
  const f=s.querySelector('input,select');if(f)setTimeout(()=>f.focus(),50);
  return {el:s,close};
}
const modalHead=(t,sub='')=>`<div class="modal-head"><div><h3>${t}</h3>${sub?`<div class="hint" style="color:var(--muted);font-size:13px">${sub}</div>`:''}</div><button class="icon-btn" data-close aria-label="Close">${ico('x')}</button></div>`;

/* Item picker — shared by Item Request, Transfer Shipment and Wastage */
function itemPicker({title,cta,onDone,withQty=true}){
  const sel={};
  const m=openModal(`${modalHead(title,'Pick items from the item list and set quantities')}<div class="modal-body" id="pk"></div><div class="modal-foot"><span class="sel" id="pkSel">No items selected</span><button class="btn" data-close>Cancel</button><button class="btn solid" id="pkGo" disabled>${ico('plus')}${cta}</button></div>`);
  const t=dataTable({id:'pick',pageSize:7,rows:()=>ITEMS,searchKeys:i=>i.no+i.name+i.cat,
    toolbarExtra:'',cols:[
      {h:'',v:i=>`<input type="checkbox" aria-label="Select ${esc(i.name)}" data-no="${i.no}" ${sel[i.no]?'checked':''}>`},
      {h:'Item',v:itemCell,sort:i=>i.name},{h:'Product group',v:i=>i.cat,sort:i=>i.cat},{h:'UoM',v:i=>i.unit},
      {h:'On hand',r:1,v:i=>`<span class="num">${i.stock.toLocaleString()}</span> <small style="color:var(--muted)">${i.unit}</small>`,sort:i=>i.stock},
      ...(withQty?[{h:'Quantity',r:1,v:i=>`<input class="qty" type="number" min="0" step="any" data-q="${i.no}" value="${sel[i.no]??''}" placeholder="0" aria-label="Quantity for ${esc(i.name)}">`}]:[])
    ]});
  const chips=chipsFilter(t,['All',...Object.keys(CATS)],(i,v)=>i.cat===v);t.querySelector('.toolbar').appendChild(chips);
  m.el.querySelector('#pk').appendChild(t);
  const upd=()=>{const n=Object.keys(sel).length;m.el.querySelector('#pkSel').textContent=n?`${n} item${n>1?'s':''} selected`:'No items selected';m.el.querySelector('#pkGo').disabled=!n};
  t.addEventListener('change',e=>{const no=e.target.dataset.no||e.target.dataset.q;if(!no)return;
    if(e.target.type==='checkbox'){if(e.target.checked)sel[no]=sel[no]||1;else delete sel[no];const q=t.querySelector(`[data-q="${no}"]`);if(q)q.value=sel[no]??''}
    else{const v=parseFloat(e.target.value);if(v>0)sel[no]=v;else delete sel[no];const c=t.querySelector(`[data-no="${no}"]`);if(c)c.checked=!!sel[no]}upd()});
  t.addEventListener('input',e=>{if(e.target.dataset.q)e.target.dispatchEvent(new Event('change',{bubbles:true}))});
  m.el.querySelector('#pkGo').onclick=()=>{onDone(Object.entries(sel).map(([no,qty])=>({no,qty})));m.close()};
}
function itemsTableHTML(items,{showCost=false}={}){
  return `<div class="table-wrap"><table style="min-width:440px"><thead><tr><th>Item</th><th>Batch</th><th class="r">Qty</th>${showCost?'<th class="r">Value</th>':''}</tr></thead><tbody>${items.map(x=>{const i=byNo[x.no];return `<tr><td>${itemCell(i)}</td><td class="mono">${i.batch}</td><td class="r num">${x.qty.toLocaleString()} <small style="color:var(--muted)">${i.unit}</small></td>${showCost?`<td class="r num">${SAR(costOf(x.no)*x.qty)}</td>`:''}</tr>`}).join('')}</tbody></table></div>`;
}


/* ================= Data (examples) ================= */
const ME='JED-WH';
const USER='Maryam Rehman';
const TODAY='2026-10-08';
const pick=(...nos)=>nos.map(([n,q])=>({no:n,qty:q}));
const COST={'ITM-10023':4.5,'ITM-40005':18,'ITM-30004':92,'ITM-60006':11,'ITM-70004':0.35,'ITM-10044':3,'ITM-20020':38};
const costOf=no=>COST[no]??Math.round((no.charCodeAt(5)*1.7)%60+5);

/* One record per transfer request. Status: Requested → Shipped → Received */
let TRANSFERS=[
 {tr:'TR-000814',name:'Weekend prep — Corniche',from:ME,to:'JED-BR03 Corniche Branch',date:'2026-10-07',status:'Requested',ship:null,items:pick(['ITM-10021',15],['ITM-20011',20],['ITM-40002',8],['ITM-50003',6])},
 {tr:'TR-000812',name:'Breakfast restock',from:ME,to:'JED-BR02 Tahlia Branch',date:'2026-10-06',status:'Requested',ship:null,items:pick(['ITM-40011',6],['ITM-60006',12],['ITM-10044',10])},
 {tr:'TR-000810',name:'Spice & oil top-up',from:'RUH-WH Riyadh',to:ME,date:'2026-10-06',status:'Shipped',ship:{no:'TSH-002417',date:'2026-10-07'},items:pick(['ITM-50012',60],['ITM-50003',24],['ITM-50015',10])},
 {tr:'TR-000809',name:'Seafood night special',from:ME,to:'JED-BR05 Red Sea Mall',date:'2026-10-05',status:'Shipped',ship:{no:'TSH-002412',date:'2026-10-06'},items:pick(['ITM-30004',8],['ITM-30009',6],['ITM-10031',5])},
 {tr:'TR-000806',name:'Butchery delivery',from:'JED-CK01 Central Kitchen',to:ME,date:'2026-10-05',status:'Shipped',ship:{no:'TSH-002409',date:'2026-10-06'},items:pick(['ITM-20011',30],['ITM-20020',25],['ITM-40008',12])},
 {tr:'TR-000801',name:'Grill line top-up',from:'JED-CK01 Central Kitchen',to:ME,date:'2026-09-30',status:'Requested',ship:null,items:pick(['ITM-20013',10],['ITM-20017',12])},
 {tr:'TR-000798',name:'Salad bar',from:'JED-CK01 Central Kitchen',to:ME,date:'2026-10-02',status:'Received',ship:{no:'TSH-002398',date:'2026-10-03'},items:pick(['ITM-10023',40],['ITM-10021',25])},
 {tr:'TR-000792',name:'Packaging monthly',from:ME,to:'JED-BR02 Tahlia Branch',date:'2026-09-24',status:'Received',ship:{no:'TSH-002380',date:'2026-09-25'},items:pick(['ITM-70001',500],['ITM-70004',600])},
 {tr:'TR-000781',name:'Dessert station',from:ME,to:'JED-BR05 Red Sea Mall',date:'2026-09-23',status:'Received',ship:{no:'TSH-002371',date:'2026-09-24'},items:pick(['ITM-40005',10],['ITM-40008',6])},
];
let TEMPLATES=[
 {id:'TPL-001',name:'Daily produce order',type:'Transfer Request',date:'2026-09-01',lines:pick(['ITM-10021',15],['ITM-10022',10],['ITM-10023',20],['ITM-10031',5],['ITM-10044',8])},
 {id:'TPL-002',name:'Grill & butchery',type:'Transfer Request',date:'2026-09-03',lines:pick(['ITM-20011',20],['ITM-20013',10],['ITM-20017',12],['ITM-20020',15])},
 {id:'TPL-003',name:'Weekly dry store',type:'Transfer Request',date:'2026-09-10',lines:pick(['ITM-50001',50],['ITM-50003',12],['ITM-50007',40],['ITM-50015',5])},
 {id:'TPL-004',name:'Cold room spoilage',type:'Wastage',date:'2026-09-05',lines:pick(['ITM-10023',2],['ITM-10044',2],['ITM-40005',1],['ITM-40011',1])},
 {id:'TPL-005',name:'Beverage expiry',type:'Wastage',date:'2026-09-12',lines:pick(['ITM-60006',2],['ITM-60002',1])},
 {id:'TPL-008',name:'Kitchen prep loss — daily',type:'Wastage',date:'2026-10-01',lines:pick(['ITM-10021',1],['ITM-10022',1],['ITM-10023',2],['ITM-20011',0.5],['ITM-20013',0.5],['ITM-20017',1],['ITM-30004',0.3])},
 {id:'TPL-006',name:'Freezer full count',type:'Counting',date:'2026-09-02',lines:pick(['ITM-20011',0],['ITM-20013',0],['ITM-20017',0],['ITM-20020',0],['ITM-30004',0],['ITM-30009',0])},
 {id:'TPL-007',name:'Cold room count',type:'Counting',date:'2026-09-02',lines:pick(['ITM-10021',0],['ITM-10023',0],['ITM-10031',0],['ITM-40002',0],['ITM-40005',0],['ITM-40008',0])},
];
let WASTAGE=[
 {jn:'WJ-000342',date:'2026-10-07',reason:'Spoiled',by:USER,lines:pick(['ITM-10023',6],['ITM-10044',3])},
 {jn:'WJ-000341',date:'2026-10-07',reason:'Expired',by:'Sara Al-Harbi',lines:pick(['ITM-40005',2])},
 {jn:'WJ-000340',date:'2026-10-06',reason:'Temperature breach',by:USER,lines:pick(['ITM-30004',1.5],['ITM-30009',1])},
 {jn:'WJ-000338',date:'2026-10-05',reason:'Expired',by:'Omar Khalid',lines:pick(['ITM-60006',4])},
 {jn:'WJ-000335',date:'2026-10-04',reason:'Damaged',by:'Sara Al-Harbi',lines:pick(['ITM-70004',40],['ITM-70001',12])},
 {jn:'WJ-000343',date:'2026-10-08',reason:'Kitchen prep loss',by:USER,lines:pick(['ITM-10022',1.2],['ITM-10021',0.8],['ITM-20013',0.6])},
 {jn:'WJ-000339',date:'2026-10-06',reason:'Kitchen prep loss',by:'Omar Khalid',lines:pick(['ITM-20017',1.4],['ITM-30009',0.5])},
 {jn:'WJ-000331',date:'2026-10-02',reason:'Kitchen prep loss',by:USER,lines:pick(['ITM-20020',2])},
];
let COUNTING=[
 {jn:'CJ-000118',date:'2026-10-02',by:USER,lines:[{no:'ITM-10021',sys:44,qty:42},{no:'ITM-10023',sys:20,qty:18},{no:'ITM-40002',sys:28,qty:28},{no:'ITM-40008',sys:5,qty:4}]},
 {jn:'CJ-000117',date:'2026-09-25',by:'Omar Khalid',lines:[{no:'ITM-20011',sys:60,qty:60},{no:'ITM-20013',sys:22,qty:22},{no:'ITM-30004',sys:15,qty:14}]},
 {jn:'CJ-000116',date:'2026-09-18',by:'Sara Al-Harbi',lines:[{no:'ITM-50001',sys:180,qty:182},{no:'ITM-50003',sys:36,qty:36},{no:'ITM-50007',sys:95,qty:95}]},
];

const DEMO_TEMPLATES=JSON.parse(JSON.stringify(TEMPLATES));
/* ---- persisted demo state (per browser) ---- */
const SKEY='rb-state-v2';
function saveState(){try{localStorage.setItem(SKEY,JSON.stringify({TRANSFERS,TEMPLATES,WASTAGE,COUNTING,stock:ITEMS.map(i=>i.stock)}))}catch(e){}}
(function(){try{const s=JSON.parse(localStorage.getItem(SKEY)||'null');if(!s)return;({TRANSFERS,TEMPLATES,WASTAGE,COUNTING}=s);(s.stock||[]).forEach((v,i)=>{if(ITEMS[i])ITEMS[i].stock=v});
  WASTAGE.forEach(w=>{if(w.reason==='Prep error')w.reason='Kitchen prep loss'});
  if(!TEMPLATES.some(t=>t.id==='TPL-008'))TEMPLATES.splice(5,0,{id:'TPL-008',name:'Kitchen prep loss — daily',type:'Wastage',date:'2026-10-01',lines:pick(['ITM-10021',1],['ITM-10022',1],['ITM-10023',2],['ITM-20011',0.5],['ITM-20013',0.5],['ITM-20017',1],['ITM-30004',0.3])})}catch(e){}})();

const nextNo=(arr,key,prefix,pad=6)=>prefix+String(Math.max(0,...arr.map(x=>+String(x[key]||'').replace(/\D/g,'')))+1).padStart(pad,'0');
const nextShip=()=>'TSH-'+String(Math.max(2400,...TRANSFERS.filter(t=>t.ship).map(t=>+t.ship.no.slice(4)))+1).padStart(6,'0');
const short=w=>w===ME?'JED-WH (this warehouse)':w;
const whCell=w=>w===ME?`<strong style="color:var(--accent)">${ME}</strong>`:esc(w);

/* ---- transfer actions ---- */
function shipTransfer(t){
  t.status='Shipped';t.ship={no:nextShip(),date:TODAY};
  if(t.from===ME)t.items.forEach(x=>byNo[x.no].stock=Math.max(0,+(byNo[x.no].stock-x.qty).toFixed(2)));
  toast(`${t.tr} shipped as ${t.ship.no}`);
}
function receiveTransfer(t){
  t.status='Received';t.recv=TODAY;
  if(t.to===ME)t.items.forEach(x=>byNo[x.no].stock=+(byNo[x.no].stock+x.qty).toFixed(2));
  toast(`${t.tr} received`);
}
function actionBtn(t){
  if(t.status==='Requested'&&t.from===ME)return `<button class="btn sm solid" data-ship="${t.tr}">${ico('ship')}Ship</button>`;
  if(t.status==='Shipped')return `<button class="btn sm solid" data-recv="${t.tr}">${ico('check')}Receive</button>`;
  return '';
}
/* one click handler for Ship / Receive buttons anywhere on the page */
document.addEventListener('click',e=>{
  const s=e.target.closest('[data-ship]'),r=e.target.closest('[data-recv]');if(!s&&!r)return;
  e.stopPropagation();const t=TRANSFERS.find(x=>x.tr===(s||r).dataset[s?'ship':'recv']);if(!t)return;
  document.querySelectorAll('#layer .scrim').forEach(x=>x.remove());
  s?shipTransfer(t):receiveTransfer(t);go(cur);
},true);

function showTransfer(t){
  const act=actionBtn(t);
  openModal(`${modalHead(t.tr,esc(t.name))}<dl class="dl">
    <dt>From warehouse/branch</dt><dd>${esc(short(t.from))}</dd><dt>To warehouse/branch</dt><dd>${esc(short(t.to))}</dd>
    <dt>Requested</dt><dd>${fmtD(t.date)}</dd><dt>Shipment no.</dt><dd class="mono">${t.ship?t.ship.no+' · '+fmtD(t.ship.date):'—'}</dd>
    <dt>Status</dt><dd>${pill(t.status)}</dd></dl>
    <div class="modal-body" style="flex:1">${linesView(t.items)}</div>
    <div class="modal-foot">${act||'<button class="btn" data-close>Close</button>'}</div>`,{drawer:true});
}
function linesView(lines,{qtyLabel='Quantity',sys=false}={}){
  return `<div class="table-wrap"><table style="min-width:460px"><thead><tr><th>Item no.</th><th>Item name</th><th>UoM</th>${sys?'<th class="r">System</th>':''}<th class="r">${qtyLabel}</th></tr></thead><tbody>${lines.map(x=>{const i=byNo[x.no];return `<tr><td class="mono">${i.no}</td><td>${esc(i.name)}</td><td>${i.unit}</td>${sys?`<td class="r num">${x.sys}</td>`:''}<td class="r num">${x.qty}</td></tr>`}).join('')}</tbody></table></div>`;
}

/* ---- line editor: template select + add item + editable quantity ---- */
function lineEditor(host,{type,qtyLabel='Default quantity',sys=false,group=false}){
  let lines=[];
  const tpls=TEMPLATES.filter(t=>t.type===type);
  host.innerHTML=`<div class="toolbar" style="padding:14px 22px">
     ${type?`<div class="field" style="flex:1 1 240px;max-width:340px"><label for="le-tpl" style="font-size:13px;color:var(--muted)">Select template</label><select class="input" id="le-tpl" style="padding:10px 12px"><option value="">No template</option>${tpls.map(t=>`<option value="${t.id}">${esc(t.name)} (${t.lines.length} items)</option>`).join('')}</select></div>`:'<span></span>'}
     <button class="btn" type="button" id="le-add" style="align-self:flex-end">${ico('plus')}Add item</button></div>
   <div class="table-wrap"><table style="min-width:560px"><thead><tr><th>Item no.</th><th>Item name</th>${group?'<th>Product group</th>':''}<th>Unit of measurement</th>${sys?'<th class="r">System qty</th>':''}<th class="r">${qtyLabel}</th><th></th></tr></thead><tbody id="le-body"></tbody></table></div>`;
  const body=host.querySelector('#le-body');
  const draw=()=>{body.innerHTML=lines.length?lines.map((x,k)=>{const i=byNo[x.no];return `<tr><td class="mono">${i.no}</td><td>${esc(i.name)}</td>${group?`<td>${i.cat}</td>`:''}<td>${i.unit}</td>${sys?`<td class="r num">${i.stock}</td>`:''}<td class="r"><input class="qty" type="number" min="0" step="any" value="${x.qty}" data-li="${k}" aria-label="${qtyLabel} for ${esc(i.name)}"></td><td class="r"><button class="icon-btn" type="button" data-rm="${k}" aria-label="Remove ${esc(i.name)}" style="width:32px;height:32px">${ico('x')}</button></td></tr>`}).join(''):`<tr><td colspan="7"><div class="empty" style="padding:28px"><b>No items yet</b>${type?'Pick a template or use “Add item”.':'Use “Add item” to build the list.'}</div></td></tr>`};
  const add=items=>{items.forEach(it=>{const ex=lines.find(x=>x.no===it.no);ex?ex.qty=it.qty:lines.push({...it})});draw()};
  host.querySelector('#le-tpl')?.addEventListener('change',e=>{const t=TEMPLATES.find(x=>x.id===e.target.value);lines=t?t.lines.map(x=>({no:x.no,qty:sys?byNo[x.no].stock:x.qty})):[];draw()});
  host.querySelector('#le-add').onclick=()=>itemPicker({title:'Add items',cta:'Add to list',onDone:items=>add(sys?items.map(x=>({no:x.no,qty:byNo[x.no].stock})):items)});
  body.addEventListener('input',e=>{const k=e.target.dataset.li;if(k!=null)lines[k].qty=parseFloat(e.target.value)||0});
  body.addEventListener('click',e=>{const b=e.target.closest('[data-rm]');if(b){lines.splice(+b.dataset.rm,1);draw()}});
  draw();
  return {get:()=>lines.filter(x=>sys||x.qty>0),set:l=>{lines=l.map(x=>({...x}));draw()}};
}
const pageEl=()=>{const el=document.createElement('div');el.style.cssText='display:grid;gap:22px';return el};

/* ================= Navigation ================= */
const PAGES={dashboard:'dashboard.html',request:'item-request.html',shipment:'transfer-shipment.html',receiving:'transfer-receiving.html',wastage:'wastage.html',counting:'item-counting.html',templates:'templates.html'};
const NAV=[['dashboard','Dashboard','dash'],['request','Item Request','req'],['shipment','Transfer Shipment','ship'],['receiving','Transfer Receiving','recv'],['wastage','Wastage','waste'],['counting','Counting','count'],['templates','Templates','tpl']];
function renderNav(cur){
  const badges={request:TRANSFERS.filter(t=>t.status==='Requested'&&t.from===ME).length,receiving:TRANSFERS.filter(t=>t.status==='Shipped'&&t.to===ME).length};
  $('#nav').innerHTML=NAV.map(([k,l,i])=>`<a href="${PAGES[k]}" class="${k===cur?'active':''}" ${k===cur?'aria-current="page"':''}>${ico(i)}<span>${l}</span>${badges[k]?`<span class="badge">${badges[k]}</span>`:''}</a>`).join('');
}
const V={};

/* ================= Dashboard ================= */
V.dashboard=()=>{
  const el=pageEl();const low=ITEMS.filter(i=>stockState(i)[0]==='bad');
  const lastCount=COUNTING.map(c=>c.date).sort().pop();const days=Math.round((new Date(TODAY)-new Date(lastCount))/864e5);
  const k=(n,l,f,ic,c,go)=>`<button class="kpi" data-go="${go}"><span class="k-ico" style="background:var(--${c}-bg,var(--brass-2));color:var(--${c},var(--brass))">${ico(ic)}</span><span class="k-num" style="color:var(--${c},var(--brass))">${n}</span><span class="k-lbl">${l}</span><span class="k-foot">${f}</span></button>`;
  el.innerHTML=`<div class="page-head"><div><h1>Good morning, Maryam</h1><p>Here’s what needs attention at JED-WH today, Thursday 8 October.</p></div></div>
  <div class="kpis">
   ${k(TRANSFERS.filter(t=>t.status==='Requested'&&t.from===ME).length,'Requests to ship','Requested from JED-WH','req','warn','shipment')}
   ${k(TRANSFERS.filter(t=>t.status==='Shipped'&&t.to===ME).length,'Shipments to receive','Shipped to JED-WH','recv','info','receiving')}
   ${k(WASTAGE.filter(w=>w.date>='2026-10-01').length,'Wastage journals','This month','waste','bad','wastage')}
   ${k(days,'Days since last count','Last count: '+fmtD(lastCount),'count','brass','counting')}
  </div>
  <div class="panel" id="dReq"></div>`;
  el.querySelector('#dReq').innerHTML=`<div class="panel-head"><h3>Recent item requests</h3><button class="btn sm" data-go="request">View all</button></div><div class="table-wrap"><table style="min-width:560px"><thead><tr><th>Request</th><th>From warehouse/branch</th><th>To warehouse/branch</th><th>Status</th></tr></thead><tbody>${TRANSFERS.slice(0,5).map(t=>`<tr class="clickable" data-tr="${t.tr}"><td><div style="display:grid"><span class="mono">${t.tr}</span><small style="color:var(--muted)">${esc(t.name)}</small></div></td><td>${whCell(t.from)}</td><td>${whCell(t.to)}</td><td>${pill(t.status)}</td></tr>`).join('')}</tbody></table></div>`;
  el.querySelectorAll('[data-tr]').forEach(tr=>tr.onclick=()=>showTransfer(TRANSFERS.find(t=>t.tr===tr.dataset.tr)));
  return el;
};

/* ================= Item Request ================= */
function transferCols({showShip=false,hideFrom=false,hideTo=false}={}){return [
  {h:'Transfer request no.',v:t=>`<div style="display:grid;line-height:1.3"><span class="mono">${t.tr}</span><small style="color:var(--muted);white-space:nowrap">${esc(t.name)}</small></div>`,sort:t=>t.tr},
  ...(showShip?[{h:'Shipment no.',v:t=>t.ship?`<span class="mono">${t.ship.no}</span>`:'<span style="color:var(--muted)">—</span>',sort:t=>t.ship?.no||''}]:[]),
  ...(hideFrom?[]:[{h:'From warehouse/branch',v:t=>whCell(t.from),sort:t=>t.from}]),...(hideTo?[]:[{h:'To warehouse/branch',v:t=>whCell(t.to),sort:t=>t.to}]),
  {h:'Items',r:1,v:t=>`<span class="num">${t.items.length}</span>`,sort:t=>t.items.length},
  {h:showShip?'Shipped':'Requested',v:t=>`<span class="num">${fmtD(showShip&&t.ship?t.ship.date:t.date)}</span>`,sort:t=>showShip&&t.ship?t.ship.date:t.date},
  {h:'Status',v:t=>pill(t.status),sort:t=>t.status},
  {h:'Action',r:1,v:t=>actionBtn(t)||'<span style="color:var(--muted);font-size:13px">—</span>'}]}
const STATUS_CHIPS=['All','Requested','Shipped','Received'];
V.request=()=>{
  const el=pageEl();
  el.innerHTML=`<div class="page-head"><div><h1>Item Request</h1><p>Transfer requests between warehouses and branches. Ship requests made from JED-WH, and receive anything that has been shipped.</p></div></div>
   <div class="panel" id="reqT"><div class="panel-head"><h3>Transfer requests</h3><span class="hint">Click a row to see its item list</span></div></div>
   <div class="panel" id="catT"><div class="panel-head"><h3>Item list</h3><span class="hint">Stock on hand at JED-WH</span></div></div>`;
  const t=dataTable({id:'req',rows:()=>TRANSFERS,searchKeys:t=>t.tr+t.name+t.from+t.to+(t.ship?.no||'')+t.items.map(x=>byNo[x.no].name).join(' '),onRow:showTransfer,cols:transferCols()});
  t.querySelector('.toolbar').appendChild(chipsFilter(t,STATUS_CHIPS,(x,v)=>x.status===v));
  el.querySelector('#reqT').appendChild(t);
  const c=dataTable({id:'cat',rows:()=>ITEMS,searchKeys:i=>i.no+i.name+i.cat+i.loc,cols:[
    {h:'Item no.',v:i=>`<span class="mono">${i.no}</span>`,sort:i=>i.no},{h:'Item name',v:i=>esc(i.name),sort:i=>i.name},{h:'Product group',v:i=>i.cat,sort:i=>i.cat},
    {h:'Unit of measurement',v:i=>i.unit},{h:'On hand',r:1,v:stockCell,sort:i=>i.stock/i.par}]});
  c.querySelector('.toolbar').appendChild(chipsFilter(c,['All',...Object.keys(CATS)],(i,v)=>i.cat===v));
  el.querySelector('#catT').appendChild(c);
  return el;
};
function newRequest(){
  const others=WAREHOUSES.filter(w=>w!==ME);
  const m=openModal(`${modalHead('New item request','Choose who supplies and who receives, then pick a template or add items')}
   <div class="modal-body">
    <div class="form-grid">
     <div class="field"><label class="req" for="nrName">Request name</label><input class="input" id="nrName" placeholder="e.g. Friday dinner prep"></div>
     <div class="field"><label class="req" for="nrFrom">From warehouse/branch</label><select class="input" id="nrFrom">${others.map(w=>`<option>${w}</option>`).join('')}<option>${ME}</option></select></div>
     <div class="field"><label class="req" for="nrTo">To warehouse/branch</label><select class="input" id="nrTo"><option selected>${ME}</option>${others.map(w=>`<option>${w}</option>`).join('')}</select></div>
    </div><div id="nrLines"></div></div>
   <div class="modal-foot"><span class="sel" id="nrErr" style="color:var(--bad)"></span><button class="btn" data-close>Cancel</button><button class="btn solid" id="nrSave">${ico('send')}Submit request</button></div>`);
  const le=lineEditor(m.el.querySelector('#nrLines'),{type:'Transfer Request',group:true,qtyLabel:'Quantity'});
  m.el.querySelector('#nrSave').onclick=()=>{const name=m.el.querySelector('#nrName').value.trim(),from=m.el.querySelector('#nrFrom').value,to=m.el.querySelector('#nrTo').value,items=le.get(),err=m.el.querySelector('#nrErr');
    if(!name){err.textContent='Enter a request name.';m.el.querySelector('#nrName').focus();return}
    if(from===to){err.textContent='From and To must be different.';return}
    if(!items.length){err.textContent='Add at least one item with a quantity.';return}
    const tr=nextNo(TRANSFERS,'tr','TR-');TRANSFERS.unshift({tr,name,from,to,date:TODAY,status:'Requested',ship:null,items});m.close();toast(`${tr} requested`);go(cur)};
}

/* ================= Transfer Shipment ================= */
V.shipment=()=>{
  const el=pageEl();
  el.innerHTML=`<div class="page-head"><div><h1>Transfer Shipment</h1><p>Ship requested items out of JED-WH and track what has been shipped.</p></div></div>
  <div class="panel" id="shR"><div class="panel-head"><h3>Requests ready to ship</h3><span class="hint">Requested from JED-WH</span></div></div>
  <div class="panel" id="shL"><div class="panel-head"><h3>Shipments</h3><span class="hint">Everything shipped from JED-WH</span></div></div>`;
  const r=dataTable({id:'shr',pageSize:6,rows:()=>TRANSFERS.filter(t=>t.status==='Requested'&&t.from===ME),searchKeys:t=>t.tr+t.name+t.to,onRow:showTransfer,emptyTitle:'Nothing waiting to ship',emptyText:'New requests from JED-WH will show here.',cols:transferCols({hideFrom:true})});
  el.querySelector('#shR').appendChild(r);
  const s=dataTable({id:'shl',rows:()=>TRANSFERS.filter(t=>t.ship&&t.from===ME),searchKeys:t=>t.tr+t.ship.no+t.name+t.to,onRow:showTransfer,cols:transferCols({showShip:true,hideFrom:true})});
  s.querySelector('.toolbar').appendChild(chipsFilter(s,['All','Shipped','Received'],(x,v)=>x.status===v));
  el.querySelector('#shL').appendChild(s);
  return el;
};
function newShipment(){
  const m=openModal(`${modalHead('Create shipment','A transfer request number is created automatically')}
   <div class="modal-body"><div class="form-grid">
     <div class="field"><label class="req" for="sFrom">From warehouse</label><input class="input" id="sFrom" value="${ME}" readonly></div>
     <div class="field"><label class="req" for="sTo">To warehouse/branch</label><select class="input" id="sTo"><option value="">Select warehouse/branch</option>${WAREHOUSES.filter(w=>w!==ME).map(w=>`<option>${w}</option>`).join('')}</select></div>
     <div class="field"><label class="req" for="sDate">Document date</label><input class="input" id="sDate" type="date" value="${TODAY}"></div>
   </div><div id="sLines"></div></div>
   <div class="modal-foot"><span class="sel" id="sErr" style="color:var(--bad)"></span><button class="btn" data-close>Cancel</button><button class="btn solid" id="sGo">${ico('ship')}Ship now</button></div>`);
  const le=lineEditor(m.el.querySelector('#sLines'),{type:'Transfer Request',group:true,qtyLabel:'Quantity'});
  m.el.querySelector('#sGo').onclick=()=>{const to=m.el.querySelector('#sTo').value,date=m.el.querySelector('#sDate').value||TODAY,items=le.get(),err=m.el.querySelector('#sErr');
    if(!to){err.textContent='Choose a destination.';return}if(!items.length){err.textContent='Add at least one item.';return}
    const t={tr:nextNo(TRANSFERS,'tr','TR-'),name:'Direct shipment',from:ME,to,date,status:'Requested',ship:null,items};TRANSFERS.unshift(t);m.close();shipTransfer(t);go(cur)};
}

/* ================= Transfer Receiving ================= */
V.receiving=()=>{
  const el=pageEl();
  el.innerHTML=`<div class="page-head"><div><h1>Transfer Receiving</h1><p>Shipments sent to JED-WH. Receive them to add the items to stock.</p></div></div>
  <div class="panel" id="rT"><div class="panel-head"><h3>Incoming shipments</h3><span class="hint">Click a row to see its item list</span></div></div>`;
  const t=dataTable({id:'rcv',rows:()=>TRANSFERS.filter(t=>t.ship&&t.to===ME),searchKeys:t=>t.tr+t.ship.no+t.from+t.items.map(x=>byNo[x.no].name).join(' '),onRow:showTransfer,emptyTitle:'No shipments yet',cols:transferCols({showShip:true,hideTo:true})});
  t.querySelector('.toolbar').appendChild(chipsFilter(t,['All','Shipped','Received'],(x,v)=>x.status===v));
  el.querySelector('#rT').appendChild(t);
  return el;
};

/* ================= Wastage ================= */
const REASONS=['Kitchen prep loss','Spoiled','Expired','Damaged','Temperature breach'];
const jValue=lines=>lines.reduce((s,x)=>s+x.qty*costOf(x.no),0);
V.wastage=()=>{
  const el=pageEl();
  el.innerHTML=`<div class="page-head"><div><h1>Wastage</h1><p>Record spoiled, expired or damaged stock. Journals post straight away and reduce stock.</p></div><div class="actions"><button class="btn solid" id="wNew">${ico('plus')}Create new wastage</button></div></div>
  <div class="panel" id="wT"><div class="panel-head"><h3>Wastage journals</h3><span class="hint">Click a row to see its items</span></div></div>`;
  const t=dataTable({id:'wst',rows:()=>[...WASTAGE].sort((a,b)=>b.jn.localeCompare(a.jn)),searchKeys:w=>w.jn+w.reason+w.by+w.lines.map(x=>byNo[x.no].name+x.no).join(' '),onRow:showWastage,cols:[
    {h:'Journal no.',v:w=>`<span class="mono">${w.jn}</span>`,sort:w=>w.jn},{h:'Date',v:w=>`<span class="num">${fmtD(w.date)}</span>`,sort:w=>w.date},
    {h:'Reason',v:w=>esc(w.reason),sort:w=>w.reason},
    {h:'Recorded by',v:w=>esc(w.by),sort:w=>w.by},
    {h:'',r:1,v:()=>`<button class="btn sm" data-view>${ico('eye')}View</button>`}]});
  t.querySelector('.toolbar').appendChild(chipsFilter(t,['All',...REASONS],(w,v)=>w.reason===v));
  el.querySelector('#wT').appendChild(t);
  el.querySelector('#wNew').onclick=newWastage;
  return el;
};
function showWastage(w){openModal(`${modalHead(w.jn,'Wastage journal')}<dl class="dl"><dt>Date</dt><dd>${fmtD(w.date)}</dd><dt>Reason</dt><dd>${esc(w.reason)}</dd><dt>Recorded by</dt><dd>${esc(w.by)}</dd><dt>Lines</dt><dd>${w.lines.length}</dd><dt>Total value</dt><dd>${SAR(jValue(w.lines))}</dd></dl>
  <div class="modal-body" style="flex:1"><div class="table-wrap"><table style="min-width:460px"><thead><tr><th>#</th><th>Item no.</th><th>Item name</th><th>UoM</th><th class="r">Qty</th><th class="r">Value</th></tr></thead><tbody>${w.lines.map((x,k)=>{const i=byNo[x.no];return `<tr><td class="num">${k+1}</td><td class="mono">${i.no}</td><td>${esc(i.name)}</td><td>${i.unit}</td><td class="r num">${x.qty}</td><td class="r num">${SAR(x.qty*costOf(x.no))}</td></tr>`}).join('')}<tr><td colspan="5" class="r"><strong>Total</strong></td><td class="r num"><strong>${SAR(jValue(w.lines))}</strong></td></tr></tbody></table></div></div>
  <div class="modal-foot"><button class="btn" data-close>Close</button></div>`,{drawer:true})}
function newWastage(){
  const m=openModal(`${modalHead('Create new wastage','Saved journals post immediately — no approval needed')}
   <div class="modal-body"><div class="form-grid">
    <div class="field"><label for="wJn">Journal no.</label><input class="input mono" id="wJn" value="${nextNo(WASTAGE,'jn','WJ-')}" readonly></div>
    <div class="field"><label class="req" for="wDate">Date</label><input class="input" id="wDate" type="date" value="${TODAY}"></div>
    <div class="field"><label class="req" for="wReason">Reason</label><select class="input" id="wReason">${REASONS.map(r=>`<option>${r}</option>`).join('')}</select></div>
   </div><div id="wLines"></div></div>
   <div class="modal-foot"><span class="sel" id="wErr" style="color:var(--bad)"></span><button class="btn" data-close>Cancel</button><button class="btn solid" id="wSave">${ico('save')}Save wastage</button></div>`);
  const le=lineEditor(m.el.querySelector('#wLines'),{type:'Wastage',qtyLabel:'Quantity'});
  m.el.querySelector('#wSave').onclick=()=>{const lines=le.get();if(!lines.length){m.el.querySelector('#wErr').textContent='Add at least one item with a quantity.';return}
    const jn=m.el.querySelector('#wJn').value;WASTAGE.unshift({jn,date:m.el.querySelector('#wDate').value||TODAY,reason:m.el.querySelector('#wReason').value,by:USER,lines});
    lines.forEach(x=>byNo[x.no].stock=Math.max(0,+(byNo[x.no].stock-x.qty).toFixed(2)));m.close();toast(`${jn} saved`);go(cur)};
}

/* ================= Counting ================= */
const cVar=c=>c.lines.filter(x=>x.qty!==x.sys);
const cValue=c=>c.lines.reduce((s,x)=>s+(x.qty-x.sys)*costOf(x.no),0);
V.counting=()=>{
  const el=pageEl();
  el.innerHTML=`<div class="page-head"><div><h1>Counting</h1><p>Counting journals for JED-WH. Each journal records who counted, when, and any difference from system stock.</p></div><div class="actions"><button class="btn solid" id="cNew">${ico('plus')}New counting journal</button></div></div>
  <div class="panel" id="cT"><div class="panel-head"><h3>Counting journals</h3><span class="hint">Click a row to see counted items</span></div></div>`;
  const t=dataTable({id:'cnt',rows:()=>COUNTING,searchKeys:c=>c.jn+c.by+c.lines.map(x=>byNo[x.no].name+x.no).join(' '),onRow:showCount,cols:[
    {h:'Journal no.',v:c=>`<span class="mono">${c.jn}</span>`,sort:c=>c.jn},{h:'Date',v:c=>`<span class="num">${fmtD(c.date)}</span>`,sort:c=>c.date},
    {h:'Counted by',v:c=>esc(c.by),sort:c=>c.by},
    {h:'',r:1,v:()=>`<button class="btn sm" data-view>${ico('eye')}View</button>`}]});
  el.querySelector('#cT').appendChild(t);
  el.querySelector('#cNew').onclick=newCount;
  return el;
};
function showCount(c){openModal(`${modalHead(c.jn,'Counting journal')}<dl class="dl"><dt>Date</dt><dd>${fmtD(c.date)}</dd><dt>Counted by</dt><dd>${esc(c.by)}</dd><dt>Variance value</dt><dd>${SAR(cValue(c))}</dd></dl><div class="modal-body" style="flex:1">${linesView(c.lines,{qtyLabel:'Counted',sys:true})}</div><div class="modal-foot"><button class="btn" data-close>Close</button></div>`,{drawer:true})}
function newCount(){
  const m=openModal(`${modalHead('New counting journal','Enter the counted quantity for each item')}
   <div class="modal-body"><div class="form-grid">
    <div class="field"><label for="cJn">Journal no.</label><input class="input mono" id="cJn" value="${nextNo(COUNTING,'jn','CJ-')}" readonly></div>
    <div class="field"><label class="req" for="cDate">Date</label><input class="input" id="cDate" type="date" value="${TODAY}"></div>
    <div class="field"><label class="req" for="cBy">Counted by</label><input class="input" id="cBy" value="${USER}"></div>
   </div><div id="cLines"></div></div>
   <div class="modal-foot"><span class="sel" id="cErr" style="color:var(--bad)"></span><button class="btn" data-close>Cancel</button><button class="btn solid" id="cSave">${ico('save')}Post count</button></div>`);
  const le=lineEditor(m.el.querySelector('#cLines'),{type:'Counting',qtyLabel:'Counted qty',sys:true});
  m.el.querySelector('#cSave').onclick=()=>{const lines=le.get(),by=m.el.querySelector('#cBy').value.trim(),err=m.el.querySelector('#cErr');
    if(!by){err.textContent='Enter who counted.';return}if(!lines.length){err.textContent='Add at least one item.';return}
    const jn=m.el.querySelector('#cJn').value;COUNTING.unshift({jn,date:m.el.querySelector('#cDate').value||TODAY,by,lines:lines.map(x=>({no:x.no,sys:byNo[x.no].stock,qty:x.qty}))});
    lines.forEach(x=>byNo[x.no].stock=x.qty);m.close();toast(`${jn} posted`);go(cur)};
}


/* ================= F&O connection (templates) ================= */
/* Fill in clientId and tenantId from the Entra ID app registration to switch the Templates page to live F&O data. */
const FNO={
  url:'https://train-fosub2213d0d25b107d779devaos.axcloud.dynamics.com',
  company:'usmf',
  clientId:'7cca2278-8039-4a6a-8e85-4eaa5deba75e',
  tenantId:'4661aaa7-3476-4224-9d3d-ca650e868c0a'
};
const fnoConfigured=()=>!!(FNO.clientId&&FNO.tenantId);
let msalApp=null,msalReady=null,fnoState=fnoConfigured()?'signedout':'off',fnoError='';
function fnoMsal(){
  if(!fnoConfigured()||!window.msal)return null;
  if(!msalApp){
    msalApp=new msal.PublicClientApplication({auth:{clientId:FNO.clientId,authority:'https://login.microsoftonline.com/'+FNO.tenantId,redirectUri:new URL('auth.html',location.href).href},cache:{cacheLocation:'localStorage'}});
    /* finishes or clears any half-done redirect sign-in, so a new attempt isn't blocked */
    msalReady=msalApp.handleRedirectPromise().then(r=>{
      if(r&&r.account&&cur==='templates'&&fnoState!=='live'){fnoState='loading';render();fnoLoad(false).then(render,render)}
      return r;
    }).catch(()=>null);
  }
  return msalApp;
}
const fnoScopes=()=>[FNO.url+'/.default'];
const fnoAccount=()=>{const a=fnoMsal();return a&&a.getAllAccounts()[0]||null};
async function fnoToken(interactive){
  const app=fnoMsal();if(!app)throw new Error('F&O connection is not configured');
  await msalReady;
  const account=fnoAccount();
  if(account){try{return (await app.acquireTokenSilent({scopes:fnoScopes(),account})).accessToken}catch(e){if(!interactive)throw e}}
  if(!interactive)throw new Error('Sign in to F&O first');
  try{const r=await app.acquireTokenPopup({scopes:fnoScopes(),prompt:'select_account'});return r.accessToken}
  catch(e){
    /* popup blocked: sign in with a full-page redirect instead (auth.html finishes it and returns to Templates) */
    if(/popup_window_error|empty_window_error|popup/i.test((e.errorCode||'')+' '+e.message)){
      await app.acquireTokenRedirect({scopes:fnoScopes(),prompt:'select_account'});
      return new Promise(()=>{});
    }
    throw e;
  }
}
async function fnoFetch(path,opt={},interactive=false){
  const tok=await fnoToken(interactive);
  const r=await fetch(FNO.url+'/data/'+path,{...opt,headers:{Authorization:'Bearer '+tok,Accept:'application/json','Content-Type':'application/json','OData-Version':'4.0','OData-MaxVersion':'4.0',...(opt.headers||{})}});
  if(!r.ok){let msg='';try{const j=await r.json();msg=(j.error&&(j.error.innererror&&j.error.innererror.message||j.error.message))||''}catch(e){}throw new Error('F&O returned '+r.status+(msg?': '+msg:''))}
  if(r.status===204)return null;
  const t=await r.text();return t?JSON.parse(t):null;
}
const TYPE_TO_FNO={'Transfer Request':'TransferRequest',Wastage:'Wastage',Counting:'Counting'};
const TYPE_FROM_FNO={TransferRequest:'Transfer Request',Wastage:'Wastage',Counting:'Counting'};
const q=v=>"'"+String(v).replace(/'/g,"''")+"'";
/* the entities work in the signed-in user's default company (USMF) */
const hdrKey=id=>`RBTemplates(TemplateId=${q(id)})`;
async function fnoLoad(interactive){
  fnoState='loading';
  try{
    const h=await fnoFetch('RBTemplates',{},interactive);
    const l=await fnoFetch('RBTemplateLines',{},interactive);
    TEMPLATES=h.value.map(t=>({id:t.TemplateId,name:t.TemplateName,type:TYPE_FROM_FNO[t.TemplateType]||t.TemplateType,date:String(t.CreatedDate||'').slice(0,10),
      lines:l.value.filter(x=>x.TemplateId===t.TemplateId).sort((a,b)=>a.LineNum-b.LineNum).map(x=>({no:x.ItemNo,qty:+x.DefaultQty,name:x.ItemName,unit:x.UnitOfMeasure}))}))
      .sort((a,b)=>a.id.localeCompare(b.id));
    fnoState='live';fnoError='';saveState();
  }catch(e){fnoState=fnoAccount()?'error':'signedout';fnoError=e.message;throw e}
}
async function fnoSaveTemplate(tp,isNew){
  const body={TemplateName:tp.name,TemplateType:TYPE_TO_FNO[tp.type],CreatedDate:(tp.date||TODAY)+'T12:00:00Z'};
  if(isNew)await fnoFetch('RBTemplates',{method:'POST',body:JSON.stringify({TemplateId:tp.id,...body})});
  else await fnoFetch(hdrKey(tp.id),{method:'PATCH',body:JSON.stringify(body)});
  await fnoDeleteLines(tp.id);
  let n=1;
  for(const x of tp.lines){const i=byNo[x.no]||{};
    await fnoFetch('RBTemplateLines',{method:'POST',body:JSON.stringify({TemplateId:tp.id,LineNum:n++,ItemNo:x.no,ItemName:i.name||x.name||'',UnitOfMeasure:i.unit||x.unit||'',DefaultQty:+x.qty||0})});}
}
async function fnoDeleteLines(id){
  const old=await fnoFetch('RBTemplateLines?$filter=TemplateId eq '+q(id));
  for(const x of old.value)await fnoFetch(`RBTemplateLines(TemplateId=${q(id)},LineNum=${x.LineNum})`,{method:'DELETE'});
}
async function fnoDeleteTemplate(id){await fnoDeleteLines(id);await fnoFetch(hdrKey(id),{method:'DELETE'})}
function fnoBar(){
  const st={off:['neutral','Demo data','F&O connection not set up yet'],signedout:['warn','Not signed in','Sign in with your F&O account to load templates from F&O'],
    loading:['info','Loading…','Reading templates from F&O'],live:['ok','Live from F&O',`Company ${FNO.company.toUpperCase()} · ${esc((fnoAccount()||{}).username||'')}`],
    error:['bad','Could not reach F&O',esc(fnoError)]}[fnoState];
  const btn=fnoState==='off'?'':fnoState==='live'?`<button class="btn sm" id="fnoRefresh">Refresh</button>`:`<button class="btn sm solid" id="fnoSignIn">Sign in with Microsoft</button>`;
  return `<div class="panel" style="display:flex;flex-wrap:wrap;align-items:center;gap:12px;padding:14px 20px"><span class="pill ${st[0]}">${st[1]}</span><span style="color:var(--muted);font-size:13px;flex:1;min-width:200px">${st[2]}</span>${btn}</div>`;
}

/* ================= Templates ================= */
const TYPES=['Transfer Request','Wastage','Counting'];
V.templates=()=>{
  const el=pageEl();
  el.innerHTML=`<div class="page-head"><div><h1>Templates</h1><p>Reusable item lists for transfer requests, wastage and counting. Pick one when creating a new entry.</p></div><div class="actions"><button class="btn solid" id="tNew">${ico('plus')}New template</button></div></div>
  ${fnoBar()}
  ${fnoState==='live'&&!TEMPLATES.length?`<div class="panel" style="padding:18px 20px;display:flex;flex-wrap:wrap;gap:12px;align-items:center"><span style="flex:1;min-width:220px">F&amp;O has no templates yet. Copy the ${DEMO_TEMPLATES.length} demo templates into F&amp;O to get started.</span><button class="btn solid" id="fnoSeed">${ico('save')}Copy demo templates to F&amp;O</button></div>`:''}
  <div class="panel" id="tT"><div class="panel-head"><h3>All templates</h3><span class="hint">Click a row to edit its items</span></div></div>`;
  const t=dataTable({id:'tpl',rows:()=>TEMPLATES,searchKeys:t=>t.name+t.type+t.lines.map(x=>(byNo[x.no]||x).name||'').join(' '),onRow:editTemplate,cols:[
    {h:'Template name',v:t=>`<strong>${esc(t.name)}</strong>`,sort:t=>t.name},
    {h:'Template type',v:t=>`<span class="pill ${t.type==='Wastage'?'bad':t.type==='Counting'?'info':'ok'}">${t.type}</span>`,sort:t=>t.type},
    {h:'Items',r:1,v:t=>t.lines.length,sort:t=>t.lines.length},{h:'Created',v:t=>`<span class="num">${fmtD(t.date)}</span>`,sort:t=>t.date},
    {h:'',r:1,v:()=>`<button class="btn sm" data-view>${ico('eye')}Open</button>`}]});
  t.querySelector('.toolbar').appendChild(chipsFilter(t,['All',...TYPES],(x,v)=>x.type===v));
  el.querySelector('#tT').appendChild(t);
  el.querySelector('#tNew').onclick=()=>editTemplate(null);
  const reload=interactive=>{fnoState='loading';render();fnoLoad(interactive).then(()=>render(),e=>{render();toast(e.message)})};
  el.querySelector('#fnoSignIn')?.addEventListener('click',()=>reload(true));
  el.querySelector('#fnoRefresh')?.addEventListener('click',()=>reload(false));
  el.querySelector('#fnoSeed')?.addEventListener('click',async e=>{e.target.disabled=true;e.target.textContent='Copying…';
    try{for(const tp of DEMO_TEMPLATES)await fnoSaveTemplate(tp,true);await fnoLoad(false);toast(DEMO_TEMPLATES.length+' templates copied to F&O');render()}catch(err){toast(err.message);render()}});
  if(fnoState==='signedout'&&fnoAccount()&&!el.dataset.tried){el.dataset.tried=1;setTimeout(()=>reload(false),0)}
  return el;
};
function editTemplate(tp){
  const isNew=!tp;
  const m=openModal(`${modalHead(isNew?'New template':esc(tp.name),isNew?'Name it, choose a type, then add items':'Edit the template’s items')}
   <div class="modal-body"><div class="form-grid">
    <div class="field"><label class="req" for="tName">Template name</label><input class="input" id="tName" value="${tp?esc(tp.name):''}" placeholder="e.g. Morning produce"></div>
    <div class="field"><label class="req" for="tType">Template type</label><select class="input" id="tType">${TYPES.map(x=>`<option ${tp&&tp.type===x?'selected':''}>${x}</option>`).join('')}</select></div>
   </div><div id="tLines"></div></div>
   <div class="modal-foot"><span class="sel" id="tErr" style="color:var(--bad)"></span>${isNew?'':'<button class="btn danger" id="tDel">'+ico('trash')+'Delete</button>'}<button class="btn" data-close>Cancel</button><button class="btn solid" id="tSave">${ico('save')}Save template</button></div>`);
  const le=lineEditor(m.el.querySelector('#tLines'),{type:null,qtyLabel:'Default quantity'});
  if(tp)le.set(tp.lines);
  const delBtn=m.el.querySelector('#tDel');
  if(delBtn)delBtn.onclick=async()=>{if(!delBtn.dataset.sure){delBtn.dataset.sure=1;delBtn.innerHTML=ico('trash')+'Click again to delete';return}
    if(fnoState==='live'){delBtn.disabled=true;try{await fnoDeleteTemplate(tp.id);await fnoLoad(false)}catch(e){m.el.querySelector('#tErr').textContent=e.message;delBtn.disabled=false;return}}
    else TEMPLATES=TEMPLATES.filter(x=>x!==tp);
    m.close();toast('Template deleted');go(cur)};
  m.el.querySelector('#tSave').onclick=async()=>{const name=m.el.querySelector('#tName').value.trim(),type=m.el.querySelector('#tType').value,lines=le.get(),err=m.el.querySelector('#tErr');
    if(!name){err.textContent='Enter a template name.';return}if(!lines.length){err.textContent='Add at least one item.';return}
    const rec=tp?{...tp,name,type,lines}:{id:nextNo(TEMPLATES,'id','TPL-',3),name,type,date:TODAY,lines};
    if(fnoState==='live'){const b=m.el.querySelector('#tSave');b.disabled=true;b.textContent='Saving to F&O…';
      try{await fnoSaveTemplate(rec,!tp);await fnoLoad(false)}catch(e){err.textContent=e.message;b.disabled=false;b.innerHTML=ico('save')+'Save template';return}}
    else if(tp)Object.assign(tp,rec);else TEMPLATES.unshift(rec);
    m.close();toast(`Template “${name}” saved${fnoState==='live'?' to F&O':''}`);go(cur)};
}

/* ================= Page shell ================= */
let cur=document.body.dataset.page;
function render(){saveState();renderNav(cur);const view=$('#view');view.innerHTML='';view.appendChild(V[cur]());$('#side').classList.remove('open')}
function go(v){saveState();if(v===cur)render();else location.href=PAGES[v]}
document.addEventListener('click',e=>{const g=e.target.closest('[data-go]');if(g){e.preventDefault();go(g.dataset.go)}});
$('#menuBtn').onclick=()=>$('#side').classList.toggle('open');
$('#userBtn').onclick=e=>{e.stopPropagation();$('#userMenu').hidden=!$('#userMenu').hidden};
document.addEventListener('click',()=>$('#userMenu').hidden=true);
$('#logoutBtn').onclick=()=>{store('rb-auth');location.href='index.html'};
(function(){let ok=true;try{localStorage.setItem('rb-t','1');localStorage.removeItem('rb-t')}catch(e){ok=false}if(ok&&load('rb-auth')!=='1'){location.replace('index.html');return}
  render();try{const t=sessionStorage.getItem('rb-toast');if(t)showToast(t)}catch(e){}})();
