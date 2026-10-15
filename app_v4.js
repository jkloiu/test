/*================ 基础设施 ================*/
const ICON={
  flame:'<svg class="svgic" viewBox="0 0 24 24"><path d="M12 2c1 3-2 4.5-2 7.5C10 12 12 13 12 13s3.5-1.8 3.5-5c2 1.8 3.2 4 3.2 6.5A6.7 6.7 0 0 1 12 21a6.7 6.7 0 0 1-6.7-6.5C5.3 9.5 8.5 6 12 2z"/></svg>',
  users:'<svg class="svgic" viewBox="0 0 24 24"><circle cx="9" cy="8" r="3.2"/><path d="M3 20c0-3.3 2.7-5 6-5s6 1.7 6 5"/><path d="M16 5.2a3 3 0 0 1 0 5.6M18 20c0-2.4-1-4-2.8-4.8"/></svg>',
  clock:'<svg class="svgic" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>',
  check:'<svg class="svgic" viewBox="0 0 24 24"><path d="M20 6L9 17l-5-5"/></svg>',
  disk:'<svg class="svgic" viewBox="0 0 24 24"><ellipse cx="12" cy="6" rx="8" ry="3"/><path d="M4 6v12c0 1.7 3.6 3 8 3s8-1.3 8-3V6"/><path d="M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3"/></svg>',
  list:'<svg class="svgic" viewBox="0 0 24 24"><path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01"/></svg>',
  play:'<svg class="svgic" viewBox="0 0 24 24"><path d="M6 4l14 8-14 8z"/></svg>',
  stop:'<svg class="svgic" viewBox="0 0 24 24"><rect x="6" y="6" width="12" height="12" rx="2"/></svg>',
  warn:'<svg class="svgic" viewBox="0 0 24 24"><path d="M12 3l9 16H3z"/><path d="M12 10v4M12 17h.01"/></svg>',
  send:'<svg class="svgic" viewBox="0 0 24 24"><path d="M22 2L11 13M22 2l-7 20-4-9-9-4z"/></svg>',
  refresh:'<svg class="svgic" viewBox="0 0 24 24"><path d="M21 12a9 9 0 1 1-2.6-6.4M21 4v5h-5"/></svg>',
  trash:'<svg class="svgic" viewBox="0 0 24 24"><path d="M4 7h16M9 7V4h6v3M6 7l1 13h10l1-13"/></svg>',
  edit:'<svg class="svgic" viewBox="0 0 24 24"><path d="M17 3a2.83 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5z"/></svg>'
};
/* Material Symbols 码点表（字体已按此子集化；用码点渲染，不依赖连字） */
const MS_ICON={
  "account_circle":59475,
  "account_tree":59770,
  "add":57669,
  "add_circle":57671,
  "admin_panel_settings":61245,
  "alarm":57744,
  "alt_route":61828,
  "api":61879,
  "archive":57673,
  "arrow_downward":58843,
  "arrow_forward":58824,
  "arrow_upward":58840,
  "article":61250,
  "assignment":59485,
  "autorenew":57384,
  "badge":60007,
  "bar_chart":57963,
  "block":57395,
  "bolt":59915,
  "cached":59498,
  "calendar_month":60364,
  "calendar_today":59701,
  "category":58740,
  "cell_tower":60346,
  "chat":57527,
  "check":58826,
  "check_box":59444,
  "check_box_outline_blank":59445,
  "check_circle":59500,
  "checklist":59057,
  "chevron_left":58376,
  "chevron_right":58377,
  "circle":61258,
  "close":57676,
  "cloud_done":58047,
  "cloud_off":58049,
  "code":59503,
  "contacts":57530,
  "content_copy":57677,
  "cycle":63572,
  "dashboard":59505,
  "data_object":60115,
  "delete":59506,
  "description":59507,
  "devices":57777,
  "dns":59509,
  "do_not_disturb_on":57692,
  "done_all":59511,
  "donut_large":59671,
  "donut_small":59672,
  "download":57713,
  "download_done":59818,
  "edit":57680,
  "edit_note":59205,
  "electric_bolt":60444,
  "error":57344,
  "expand_less":58830,
  "expand_more":58831,
  "fact_check":61637,
  "filter_list":57682,
  "folder_open":58056,
  "format_align_left":57910,
  "format_list_bulleted":57921,
  "group":59375,
  "group_add":59376,
  "heat":62775,
  "history":57998,
  "hourglass_bottom":59996,
  "hourglass_top":59995,
  "how_to_reg":57716,
  "hub":59892,
  "info":59534,
  "input":59536,
  "insights":61586,
  "integration_instructions":61268,
  "key":59196,
  "label":59538,
  "lan":60207,
  "list_alt":57582,
  "local_fire_department":59909,
  "lock":59533,
  "lock_reset":60126,
  "login":60023,
  "logout":59834,
  "manage_accounts":61486,
  "manage_history":60391,
  "mark_email_read":59901,
  "menu":58834,
  "monitor_heart":60066,
  "monitoring":61840,
  "more_vert":58836,
  "nightlight":61278,
  "notes":57964,
  "notification_important":57348,
  "notifications":59380,
  "notifications_active":59383,
  "open_in_new":59541,
  "output":60350,
  "pause_circle":57397,
  "pending_actions":61883,
  "person":59389,
  "person_add":59390,
  "person_off":58640,
  "person_remove":61286,
  "person_search":61702,
  "pie_chart":59076,
  "play_arrow":57399,
  "play_circle":57400,
  "priority":57759,
  "priority_high":58949,
  "progress_activity":59856,
  "public":59403,
  "publish":57941,
  "qr_code_2":57354,
  "receipt_long":61294,
  "refresh":58837,
  "replay":57410,
  "route":60109,
  "rule":61890,
  "save":57697,
  "schedule":57746,
  "schedule_send":59914,
  "search":59574,
  "security":58154,
  "send":57699,
  "settings":59576,
  "shield":59227,
  "shield_with_heart":59279,
  "skip_next":57412,
  "skip_previous":57413,
  "smart_toy":61548,
  "sms":57560,
  "sort":57700,
  "speed":59876,
  "square":60214,
  "stacks":62720,
  "stop_circle":61297,
  "subject":59602,
  "summarize":61553,
  "supervisor_account":57823,
  "swap_vert":57539,
  "switch_account":59885,
  "sync":58919,
  "sync_problem":58921,
  "table_chart":57957,
  "task_alt":58086,
  "terminal":60302,
  "timelapse":58402,
  "timeline":59682,
  "timer":58405,
  "tips_and_updates":59290,
  "toggle_off":59893,
  "toggle_on":59894,
  "topic":61892,
  "trending_up":59621,
  "tune":58409,
  "update":59683,
  "upload_file":59900,
  "verified_user":59624,
  "view_list":59631,
  "view_module":59632,
  "visibility":58391,
  "visibility_off":59637,
  "vpn_key":57562,
  "warning":57346,
  "wb_sunny":58416,
  "webhook":60306,
  "workspace_premium":59311,
  "wrap_text":57947
};
function msGlyph(n){const c=MS_ICON[n];return c?String.fromCodePoint(c):n;}
/* 把静态 HTML 里的图标名换成码点字符（动态渲染由 MI() 直接输出码点） */
function fixStaticIcons(root){
  (root||document).querySelectorAll('.material-symbols-outlined').forEach(el=>{
    var t=(el.textContent||'').trim();
    if(MS_ICON[t]){el.textContent=msGlyph(t);}
  });
}
/* Material Symbols 图标 */
function MI(name,cls,fill){
  var st=fill?"font-variation-settings:'FILL' 1,'wght' 400,'GRAD' 0,'opsz' 20;":"";
  return '<span class="material-symbols-outlined'+(cls?' '+cls:'')+'"'+(st?' style="'+st+'"':'')+'>'+msGlyph(name)+'</span>';
}
function esc(s){return String(s==null?'':s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));}
function toast(title,msg,type){
  const box=document.getElementById('toast');const el=document.createElement('div');
  el.className='toast'+(type==='ok'?' ok':type==='err'?' err':'');
  el.innerHTML=(type==='ok'?ICON.check:type==='err'?ICON.warn:ICON.flame)+'<div><b>'+esc(title)+'</b>'+(msg?'<span>'+esc(msg)+'</span>':'')+'</div>';
  box.appendChild(el);setTimeout(()=>{el.classList.add('out');setTimeout(()=>el.remove(),260);},(type==='err'?5000:3600));
  // BUG-10: toast持久化
  ToastHistory.add(title,msg,type);
}
/* ================= 消息中心 =================
   [20261008 改造] 用户反馈「通知中心的信息无法具体查看」：
     ① 老 add() 写死了「只有 err 类型才保留正文」，于是服务端那些日报/告警通知
        在列表里**全都没了内容**；
     ② show() 一打开就先 POST /api/notifications/clear —— 用户还没看清就被清空；
     ③ 条目不可点，没有详情。
   现在：正文全保留；打开只推进本地已读水位线、**不删服务端记录**；每条可点开详情（含复制）。 */
const ToastHistory={
  MAX:50,
  notifs:[],              // 服务端消息中心（权威列表）
  _list:[],
  get(){try{return JSON.parse(localStorage.getItem('toast_history')||'[]')}catch(e){return[]}},
  seen(){return Number(localStorage.getItem('toast_seen')||0)||0},
  /* src='srv' 的条目只是服务端通知的本地副本（只为红点/离线展示），
     show() 里会被服务端实时列表取代，避免同一条重复出现两遍 */
  add(title,msg,type,src){const h=this.get();h.unshift({title,msg:msg||'',type,src:src||'local',t:Date.now()});if(h.length>this.MAX)h.length=this.MAX;localStorage.setItem('toast_history',JSON.stringify(h));this.updateBadge()},
  clear(){localStorage.removeItem('toast_history');this.notifs=[];localStorage.setItem('toast_seen',String(Date.now()));this.updateBadge()},
  _ms(t){const n=Number(t);if(!n||isNaN(n))return 0;return n<1e11?Math.round(n*1000):Math.round(n)},
  async poll(){
    try{
      const r=await api('/api/notifications');
      const ns=r.notifications||[];
      if(ns.length>this.notifs.length){
        const newOnes=ns.slice(0,ns.length-this.notifs.length);
        for(const n of newOnes){this.add(n.title,n.msg||'',n.type||'info','srv');}
      }
      this.notifs=ns;
      this.updateBadge();
    }catch(e){}
  },
  unread(){
    const s=this.seen();
    const srv=this.notifs.filter(x=>this._ms(x.t)>s).length;
    const loc=this.get().filter(x=>x.src!=='srv'&&x.type==='err').length;
    return srv+loc;
  },
  updateBadge(){
    const n=this.unread();
    document.querySelectorAll('.msgBadgeTop,#msgBadge').forEach(b=>{b.textContent=n>0?(n>99?'99+':n):'';b.style.display=n>0?'flex':'none';});
  },
  _when(ms,withSec){
    const d=new Date(ms||0);if(!d.getTime())return '';
    const p2=n=>String(n).padStart(2,'0');
    return d.getFullYear()+'-'+p2(d.getMonth()+1)+'-'+p2(d.getDate())+' '+p2(d.getHours())+':'+p2(d.getMinutes())+(withSec?(':'+p2(d.getSeconds())):'');
  },
  async show(){
    let srv=[];
    try{const r=await api('/api/notifications');srv=(r.notifications||[]).slice().reverse();}catch(e){}
    this.notifs=srv.slice().reverse();
    const local=this.get().filter(x=>x.src!=='srv');      // 本地错误提示（服务端没有的）
    const items=srv.map(n=>({title:n.title||'通知',msg:n.msg||'',type:n.type||'info',t:this._ms(n.t),account:n.account_uid||''}))
      .concat(local.map(x=>({title:x.title||'通知',msg:x.msg||'',type:x.type||'info',t:x.t||0,account:''})))
      .sort((a,b)=>(b.t||0)-(a.t||0));
    /* 打开即已读：水位线取「列表里最大的 t」与本机时间的较大者 ——
       取本机时间可清掉历史红点，取列表最大值可防服务端时钟略快导致刚读过的又变未读 */
    localStorage.setItem('toast_seen',String(items.reduce((a,x)=>Math.max(a,x.t||0),Date.now())));
    this.updateBadge();
    this._list=items;
    const win=document.createElement('div');win.style.cssText='position:fixed;inset:0;background:rgba(0,0,0,.6);z-index:9999;display:flex;align-items:center;justify-content:center';
    const panel=document.createElement('div');panel.className='card';panel.style.cssText='width:540px;max-width:calc(92vw / var(--ui-scale));max-height:calc(78vh / var(--ui-scale));padding:20px;background:var(--panel);border:1px solid var(--line);border-radius:var(--r);box-shadow:var(--shadow);overflow-y:auto';
    const mk=(x,i)=>{
      const bad=(x.type==='err'||x.type==='error'||x.type==='fail');
      const one=(x.msg||'').replace(/\s+/g,' ');
      return '<div class="th-item" data-i="'+i+'" style="padding:9px 8px;border-bottom:1px solid var(--line);border-radius:8px;cursor:pointer">'+
        '<div class="tiny '+(bad?'down':x.type==='ok'?'up':'muted')+'">'+esc(this._when(x.t))+' · '+esc(x.title)+(x.account?' · '+esc(x.account):'')+'</div>'+
        (one?'<div class="tiny muted" style="margin-top:3px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">'+esc(one.slice(0,46))+'</div>':'')+
        '</div>';
    };
    panel.innerHTML='<div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:12px"><b>消息中心</b><div><button class="btn btn-ghost btn-sm" id="toastClear">清空</button> <button class="btn btn-ghost btn-sm" id="toastClose">关闭</button></div></div>'+
      (items.length?items.map(mk).join(''):'<div class="empty">暂无消息记录</div>')+
      (items.length?'<div class="tiny muted" style="margin-top:10px">点任意一条可查看完整内容</div>':'');
    win.appendChild(panel);document.body.appendChild(win);
    win.onclick=e=>{if(e.target===win)win.remove()};
    document.getElementById('toastClose').onclick=()=>win.remove();
    document.getElementById('toastClear').onclick=()=>{this.clear();win.remove();toast('已清空','消息记录已清除','ok')};
    panel.querySelectorAll('.th-item').forEach(el=>{
      el.onclick=()=>{const x=this._list[Number(el.getAttribute('data-i'))];if(x)this.detail(x);};
      el.onmouseenter=()=>{el.style.background='var(--bg2)'};
      el.onmouseleave=()=>{el.style.background=''};
    });
  },
  /* 单条通知详情：完整正文（长内容可滚）+ 复制 */
  detail(x){
    if(!x)return;
    const bad=(x.type==='err'||x.type==='error'||x.type==='fail');
    const win=document.createElement('div');win.style.cssText='position:fixed;inset:0;background:rgba(0,0,0,.55);z-index:10000;display:flex;align-items:center;justify-content:center';
    const panel=document.createElement('div');panel.className='card';panel.style.cssText='width:580px;max-width:calc(92vw / var(--ui-scale));max-height:calc(82vh / var(--ui-scale));display:flex;flex-direction:column;padding:20px;background:var(--panel);border:1px solid var(--line);border-radius:var(--r);box-shadow:var(--shadow)';
    panel.innerHTML='<div style="display:flex;align-items:flex-start;gap:8px;margin-bottom:10px">'+
        '<div style="flex:1;min-width:0"><div style="font-weight:600;font-size:15px;word-break:break-word">'+esc(x.title||'通知')+'</div>'+
        '<div class="tiny muted" style="margin-top:3px">'+esc(this._when(x.t,true))+(x.account?' · 账号 '+esc(x.account):'')+
        ' <span class="badge '+(bad?'b-no':'b-ok')+'">'+(bad?'需关注':'正常')+'</span></div></div>'+
        '<button class="btn btn-ghost btn-sm" id="thCopy">复制</button> <button class="btn btn-ghost btn-sm" id="thClose">关闭</button></div>'+
      '<div class="mono" style="flex:1;overflow-y:auto;white-space:pre-wrap;word-break:break-word;font-size:12.5px;line-height:1.75;background:var(--bg);border:1px solid var(--line);border-radius:8px;padding:12px">'+esc(x.msg||'（无内容）')+'</div>';
    win.appendChild(panel);document.body.appendChild(win);
    win.onclick=e=>{if(e.target===win)win.remove()};
    document.getElementById('thClose').onclick=()=>win.remove();
    document.getElementById('thCopy').onclick=()=>Actions.copyText((x.title||'')+'\n'+(x.msg||''));
  }
};
async function api(path,opts){
  opts=opts||{};
  const headers=Object.assign({'X-Panel-Token':localStorage.getItem('panel_token')||''},opts.headers||{});
  if(opts.body&&typeof opts.body!=='string'){headers['Content-Type']='application/json';opts.body=JSON.stringify(opts.body);}
  const r=await fetch(path,Object.assign({},opts,{headers}));
  if(r.status===401){App.showLogin('登录已失效，请重新登录');throw new Error('unauthorized');}
  const ct=r.headers.get('content-type')||'';
  const data=ct.includes('application/json')?await r.json():null;
  if(!r.ok){const e=new Error((data&&data.error)||('HTTP '+r.status));e.data=data;throw e;}
  return data;
}
function avatarHtml(a,name){
  const ch=esc((name||'?').trim().charAt(0)||'?');
  if(a){
    let src;
    if(a.startsWith('data/')){src='/'+a;}
    else if(a.startsWith('http')){src='/api/avatar?url='+encodeURIComponent(a);}
    else{src=a;}
    return '<div class="favatar"><span>'+ch+'</span><img src="'+esc(src)+'" alt="" data-error="this.remove"></div>';
  }
  return '<div class="favatar"><span>'+ch+'</span></div>';
}
/* [v6.12] 头像库 = 动漫（a* 16）+ 动物（c* 16），文件在 /static/avatars/*.webp。
   这批是 20261012 下午整库重传的高清无码版（a* 16:35 / c* 16:59 上传），对应用户「要动漫头像」的要求；
   真实风景 r* 16 款已归档在服务器 avatars/_old_r16_20261012/（本地 tmp/avatars_real/ 留有副本），
   早期 AI 动物（b 系与 l 系）在 avatars/_ai_old/。本库只服务**面板用户**（avatar.pu.<username>，
   [20261014] 起除 localStorage 外还会 POST /api/panel-users/<用户名>/avatar 落库，换设备不丢）；
   抖音账号一律用真实抖音头像（accAvImg），自定义头像库不再用于账号（avatar.acc.* 旧键已在 boot 清理）。 */
const AVATARS=[
  {cat:'动漫',items:[['a01_fence_boy','围栏少年'],['a02_sunset_shore','夕阳奔跑'],['a03_white_hair_boy','白发少年'],['a04_pink_twintails','粉翅女孩'],
    ['a05_red_hair_girl','红发女孩'],['a06_golden_violin','金色小提琴'],['a07_rain_boy','雨夜少年'],['a08_starry_back','星空神兽'],
    ['a09_straw_hat','草帽少年'],['a10_polar_bear','北极熊'],['a11_sunflower_boy','向日葵少年'],['a12_panda','熊猫'],
    ['a13_cartoon_boy','卡通男孩'],['a14_bunny_pilot','兔子飞行员'],['a15_white_cat','白猫'],['a16_flower_field','花田少年']]},
  {cat:'动物',items:[['c01_sea_shiba','海边柴犬'],['c02_music_shiba','音乐柴犬'],['c03_border_collie','边牧'],['c04_corgi_grass','草地柯基'],
    ['c05_corgi_closeup','柯基特写'],['c06_samoyed_garden','花园萨摩'],['c07_samoyed_cap','帽子萨摩'],['c08_husky_puppy','哈士奇'],
    ['c09_window_cat','窗台猫'],['c10_bread_cat','面包猫'],['c11_glasses_cat','眼镜猫'],['c12_reading_cat','读书猫'],
    ['c13_cat_fish','吃鱼猫'],['c14_chef_cat','厨师猫'],['c15_strawhat_cat','草帽猫'],['c16_cool_cat','墨镜猫']]}];
/* [v6.1] 默认头像：未自定义时按 key 哈希从库里**确定性**挑一张（同一账号/用户永远同一张，
   多账号天然有区别；用户手动选过就用手动值，删掉自定义又回到这张）。 */
function avAllIds(){
  const out=[];
  AVATARS.forEach(function(g){g.items.forEach(function(it){out.push(it[0]);});});
  return out;
}
function avHash(s){
  s=String(s==null?'':s);let h=5381;
  for(let i=0;i<s.length;i++)h=((h<<5)+h+s.charCodeAt(i))>>>0;
  return h;
}
function avDefault(kind,key){
  const ids=avAllIds();
  if(!ids.length)return '';
  return ids[avHash(kind+'|'+key)%ids.length];
}
function avGet(kind,key){
  /* [v6.9] 旧库（b* 与 l* 的 AI 素材）已下线：存档 id 不在库里时直接回落默认分配，避免 404 破图 */
  const ids=avAllIds();
  let v='';
  try{v=localStorage.getItem('avatar.'+kind+'.'+key)||'';}catch(e){}
  return (v&&ids.indexOf(v)>=0)?v:avDefault(kind,key);
}
function avSet(kind,key,id){try{if(id)localStorage.setItem('avatar.'+kind+'.'+key,id);else localStorage.removeItem('avatar.'+kind+'.'+key);}catch(e){}}
function avImgEl(id){return '<img src="/static/avatars/'+id+'.webp?v=7" alt="" style="width:100%;height:100%;object-fit:cover;display:block;border-radius:inherit">';}
/* [20261014b] 面板用户头像「读取同步」：面板落库的那份（data/avatars/panel/...）
   优先于本浏览器 localStorage 里的头像库选择。映射由 /api/panel-users 填充
   （普通用户也能拉到自己的那条，见后端 panel_users_list 的 _self 分支）。
   这样小程序里授权的微信头像，浏览器这边也看得到 —— 之前只做了写入同步，
   读取仍走 localStorage，表现为「两边设的头像互不可见」。 */
function avPanelUrl(key){
  if(!key)return '';
  const m=App.state.puAvatar||{};
  return m[key]||'';
}
/* 统一渲染：有 src 出图，没有就回落 fallbackHtml（字母垫底） */
function avFill(el,src,fallbackHtml){
  if(!el)return;
  if(src){
    el.innerHTML='<img src="'+esc(src)+'" alt="" style="width:100%;height:100%;object-fit:cover;display:block;border-radius:inherit">';
    el.style.overflow='hidden';
  }else{
    el.innerHTML=fallbackHtml;
    el.style.overflow='';
  }
}
/* 有头像渲染 img，无头像回退到 fallback 内容；同时给侧栏/切换器等小头像用。
   优先级：面板落库 > 本浏览器头像库 > fallback 字母 */
function avApply(el,kind,key,fallbackHtml){
  if(!el)return;
  if(kind==='pu'){
    const _pu=avPanelUrl(key);
    if(_pu){avFill(el,_pu,fallbackHtml);return;}
  }
  const aid=avGet(kind,key);
  if(aid)avFill(el,'/static/avatars/'+aid+'.webp?v=7',fallbackHtml);
  else avFill(el,'',fallbackHtml);
}
/* [v6.11] 抖音账号**真实头像**：/api/accounts 现返回 a.avatar（本地化路径 data/avatars/<sid>.<ext>，
   抓好友时按账号 sid 落盘）。账号头像一律用真实抖音头像，不再走本地自定义头像库（acc 命名空间已废）。
   渲染规则与 .favatar 同款：字母垫底（z1），img 绝对定位覆盖（z2），加载失败自删回到字母。
   调用方需保证容器 position:relative + overflow:hidden。 */
function accAvImg(a){
  const av=(a&&a.avatar)||'';
  if(!av)return '';
  const src=(av.indexOf('data/')===0)?('/'+av):(av.indexOf('http')===0?('/api/avatar?url='+encodeURIComponent(av)):av);
  return '<img src="'+esc(src)+'" alt="" data-error="this.remove" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;display:block;z-index:2;border-radius:inherit">';
}
/* 账号头像垫底字母（无真实头像或图裂时显示） */
function accAvLetter(a){
  return esc(((a&&(a.username||a.unique_id))||'?').charAt(0));
}
/* [v6.11] 清理已废弃的账号自定义头像键：acc 命名空间废用后不再读取，旧键留着只会占地方 */
(function(){try{
  const _rm=[];
  for(let i=0;i<localStorage.length;i++){const k=localStorage.key(i);if(k&&k.indexOf('avatar.acc.')===0)_rm.push(k);}
  _rm.forEach(function(k){localStorage.removeItem(k);});
}catch(e){}})();
function sparkBadge(days,fontSize,fresh){
  if(days==null) return '<span class="badge b-gray">未抓到</span>';
  const fs=fontSize||16;
  if(fresh===false){
    return '<svg width="'+fs+'" height="'+fs+'" viewBox="0 0 24 24" style="vertical-align:middle;opacity:0.35"><path fill="#666" d="M12 2c1 3-2 4.5-2 7.5C10 12 12 13 12 13s3.5-1.8 3.5-5c2 1.8 3.2 4 3.2 6.5A6.7 6.7 0 0 1 12 21a6.7 6.7 0 0 1-6.7-6.5C5.3 9.5 8.5 6 12 2z"/></svg> <b style="font-size:'+fs+'px;color:var(--txt)">'+days+'</b> <span class="tiny muted">天</span>';
  }
  const tier=Math.min(Math.floor(days/100),12);
  const P1='M12 2c1 3-2 4.5-2 7.5C10 12 12 13 12 13s3.5-1.8 3.5-5c2 1.8 3.2 4 3.2 6.5A6.7 6.7 0 0 1 12 21a6.7 6.7 0 0 1-6.7-6.5C5.3 9.5 8.5 6 12 2z';
  const P2='M12 1c1 2.5-2 4-2 7C10 11.5 12 12.5 12 12.5s3.5-2 3.5-5c2 1.5 3 3.5 3 6A6.5 6.5 0 0 1 12 21a6.5 6.5 0 0 1-6.5-6C5.5 9 8.5 5.5 12 1z';
  const I1='M12 7c0.5 1.8-0.8 2.8-0.8 4.5C11.2 12.5 12 13 12 13s1.8-0.9 1.8-2.5c0.8 0.9 1.2 2 1.2 3.2A3.2 3.2 0 0 1 12 17a3.2 3.2 0 0 1-3.2-2.8C8.8 11 10.2 8.5 12 7z';
  const I2='M12 6c0.5 1.5-1 2.5-1 4C11 11.5 12 12 12 12s1.5-0.7 1.5-2c0.7 0.7 1 1.5 1 2.5A2.8 2.8 0 0 1 12 16a2.8 2.8 0 0 1-2.8-2.2C9.2 10.5 10.5 8 12 6z';
  const T=[
    {c:['#ff7a45','#ffb088'],g:0,p:1,i:0,o:'',n:'',f:'',s:'',d:0,m:0},
    {c:['#ff5500','#ff8844'],g:3,p:1,i:0,o:'sfFlicker',n:'',f:'',s:'',d:0,m:0},
    {c:['#ff2200','#ff6600','#ffcc00'],g:5,p:1,i:1,o:'sfFlicker',n:'',f:'',s:'sfPulse',d:0,m:0},
    {c:['#ff8800','#ffcc00','#ffee66'],g:6,p:2,i:1,o:'sfBreathe',n:'',f:'',s:'sfPulse',d:1,m:0},
    {c:['#ffdd44','#ffee88','#ffffaa'],g:8,p:2,i:2,o:'sfFlicker',n:'sfFloat',f:'',s:'sfPulse',d:2,m:0},
    {c:['#ff44ff','#ff88ff','#ddaaff'],g:8,p:1,i:2,o:'sfWobble',n:'',f:'sfRainbow',s:'sfPulse',d:2,m:1},
    {c:['#aa44ff','#8866ff','#66aaff'],g:10,p:2,i:2,o:'sfBreathe',n:'sfFloat',f:'sfRainbow',s:'',d:3,m:1},
    {c:['#4488ff','#44ccff','#88eeff'],g:10,p:1,i:1,o:'sfFlicker',n:'sfWobble',f:'sfRainbow',s:'sfPulse',d:3,m:1},
    {c:['#44ffdd','#88ffcc','#ccffee'],g:12,p:2,i:2,o:'sfBreathe',n:'sfWobble',f:'sfShimmer',s:'sfPulse',d:4,m:1},
    {c:['#44ff44','#88ff88','#ccffaa'],g:12,p:1,i:1,o:'sfFlicker',n:'sfFloat',f:'sfRainbow',s:'sfPulse',d:4,m:1},
    {c:['#00ffaa','#44ffdd','#88ffee'],g:14,p:2,i:2,o:'sfBreathe',n:'sfFloat',f:'sfShimmer',s:'sfPulse',d:5,m:1},
    {c:['#ff4444','#ffaa44','#ffff44','#44ff44','#44ffff','#ff44ff'],g:14,p:1,i:2,o:'sfWobble',n:'sfFloat',f:'sfRainbow',s:'sfPulse',d:5,m:1},
    {c:['#ff0099','#ff00ff','#9900ff','#0099ff','#00ff99','#ffff00'],g:18,p:2,i:2,o:'sfBreathe',n:'sfWobble',f:'sfRainbow',s:'sfPulse',d:6,m:1}
  ][tier];
  const gid='sf-g'+tier,sz=fs+4+Math.min(tier,6)*2;
  const stops=T.c.map((c,i)=>'<stop offset="'+(i/(T.c.length-1)*100).toFixed(0)+'%" stop-color="'+c+'"/>').join('');
  const baseP=T.p===1?P1:P2;
  const morphVals=T.p===1?P1+';'+P2+';'+P1:P2+';'+P1+';'+P2;
  const flamePath=T.m?'<path fill="url(#'+gid+')"><animate attributeName="d" dur="3s" repeatCount="indefinite" values="'+morphVals+'"/></path>':'<path fill="url(#'+gid+')" d="'+baseP+'"/>';
  const inner=T.i===1?'<path fill="rgba(255,255,255,0.3)" d="'+I1+'"/>':T.i===2?'<path fill="rgba(255,255,255,0.35)" d="'+I2+'"/>':'';
  function spk(x,y,r,col,cls){return '<path d="M'+x+' '+(y-r)+'L'+(x+r*0.25)+' '+(y-r*0.25)+'L'+(x+r)+' '+y+'L'+(x+r*0.25)+' '+(y+r*0.25)+'L'+x+' '+(y+r)+'L'+(x-r*0.25)+' '+(y+r*0.25)+'L'+(x-r)+' '+y+'L'+(x-r*0.25)+' '+(y-r*0.25)+'Z" fill="'+col+'" opacity="0.6" class="sf-flame '+cls+'"/>';}
  function star5(x,y,r,col,cls){let p=[];for(let i=0;i<5;i++){const a=-Math.PI/2+i*2*Math.PI/5;p.push((x+r*Math.cos(a)).toFixed(1)+','+(y+r*Math.sin(a)).toFixed(1));const a2=a+Math.PI/5;p.push((x+r*0.4*Math.cos(a2)).toFixed(1)+','+(y+r*0.4*Math.sin(a2)).toFixed(1));}return '<path d="M'+p.join('L')+'Z" fill="'+col+'" opacity="0.5" class="sf-flame '+cls+'"/>';}
  function star6(x,y,r,col,cls){let u=[],d2=[];for(let i=0;i<3;i++){const a1=-Math.PI/2+i*2*Math.PI/3;u.push((x+r*Math.cos(a1)).toFixed(1)+','+(y+r*Math.sin(a1)).toFixed(1));const a2=Math.PI/2+i*2*Math.PI/3;d2.push((x+r*Math.cos(a2)).toFixed(1)+','+(y+r*Math.sin(a2)).toFixed(1));}return '<path d="M'+u.join('L')+'Z M'+d2.join('L')+'Z" fill="'+col+'" opacity="0.4" class="sf-flame '+cls+'"/>';}
  function flower(cx,cy,r,col,cls){let s='';for(let i=0;i<5;i++){const a=-Math.PI/2+i*2*Math.PI/5;const px=cx+r*0.6*Math.cos(a),py=cy+r*0.6*Math.sin(a);s+='<ellipse cx="'+px.toFixed(1)+'" cy="'+py.toFixed(1)+'" rx="'+(r*0.3).toFixed(1)+'" ry="'+(r*0.5).toFixed(1)+'" fill="'+col+'" opacity="0.2" transform="rotate('+(a*180/Math.PI+90).toFixed(0)+' '+px.toFixed(1)+' '+py.toFixed(1)+')"/>';}return '<g class="sf-flame '+cls+'">'+s+'</g>';}
  function ring(cx,cy,r,col,cls){return '<circle cx="'+cx+'" cy="'+cy+'" r="'+r+'" fill="none" stroke="'+col+'" stroke-width="0.4" opacity="0.3" class="sf-flame '+cls+'"/>';}
  let decor='';
  if(T.d>=1)decor+=spk(5,4,1.2,T.c[0],'sfShimmer');
  if(T.d>=2){decor+=spk(19,5,1,T.c[1]||T.c[0],'sfPulse');decor+=ring(12,12,10,T.c[0],'sfBreathe');}
  if(T.d>=3){decor+=star5(12,12,8,T.c[1]||T.c[0],'sfSpin');decor+=spk(6,18,1,T.c[0],'sfShimmer');}
  if(T.d>=4){decor+=ring(12,12,12,T.c[1]||T.c[0],'sfBreathe');decor+=spk(18,16,1.2,T.c[1]||T.c[0],'sfPulse');}
  if(T.d>=5){decor+=star6(12,12,9,T.c[0],'sfSpin');decor+=flower(12,12,10,T.c[1]||T.c[0],'sfBreathe');}
  if(T.d>=6){decor+=ring(12,12,13,T.c[T.c.length-1],'sfSpin');decor+=spk(3,12,0.8,T.c[0],'sfShimmer');decor+=spk(21,12,0.8,T.c[1]||T.c[0],'sfPulse');}
  let openG='',closeG='';
  if(T.o){openG+='<g class="sf-flame '+T.o+'">';closeG='</g>'+closeG;}
  if(T.n){openG+='<g class="sf-flame '+T.n+'">';closeG='</g>'+closeG;}
  if(T.s){openG+='<g class="sf-flame '+T.s+'">';closeG='</g>'+closeG;}
  const svgFilter=T.f?'':(T.g>0?'filter:drop-shadow(0 0 '+T.g+'px '+T.c[0]+')':'');
  const svg='<svg class="sf-flame'+(T.f?' '+T.f:'')+'" width="'+sz+'" height="'+sz+'" viewBox="0 0 24 24" style="'+svgFilter+'"><defs><linearGradient id="'+gid+'" x1="0" y1="1" x2="0" y2="0">'+stops+'</linearGradient></defs>'+decor+openG+flamePath+inner+closeG+'</svg>';
  const grad='linear-gradient(90deg,'+T.c.join(',')+')';
  const dayStyle=tier===0?'color:'+T.c[0]:'background:'+grad+';-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent';
  const dayGlow=T.g>0?'filter:drop-shadow(0 0 '+T.g+'px '+T.c[0]+')':'';
  return svg+' <b style="font-size:'+fs+'px;'+dayStyle+';'+dayGlow+'">'+days+'</b> <span class="tiny muted">天</span>';
}
function friendName(f){return f.douyin_remark||f.remark||f.nickname||f.douyin_nickname||f.douyin_id||f.unique_id||'未知';}
/* [20261001] 把内部标识（short_id 等）尽量翻译成人看得懂的名字，绝不把内部短 ID 当身份展示。 */
function dispTarget(v){
  v=(v===null||v===undefined)?'':String(v);
  if(!v)return '';
  const all=[].concat(App.state.friends||[],App.state.scrapedContacts||[]);
  const hit=all.find(x=>String(x.short_id)===v||String(x.unique_id)===v||String(x.douyin_id)===v);
  if(hit)return friendName(hit);
  return v;
}
/* [新增20261002] 纯展示用：把内部 ID 翻成人名，翻不出来返回空串。
   与 dispTarget 的区别：dispTarget 翻不出会回落原值（可能把 short_id 露出来），
   展示层一律用 dispName + 占位符，绝不把内部短 ID 当身份显示。 */
function dispName(v){
  v=(v===null||v===undefined)?'':String(v);
  if(!v)return '';
  const all=[].concat(App.state.friends||[],App.state.scrapedContacts||[]);
  const hit=all.find(x=>String(x.short_id)===v||String(x.unique_id)===v||String(x.douyin_id)===v);
  return hit?friendName(hit):'';
}
function fmtHM(ts){return ts?ts.slice(5,16).replace('-','/'):'—';}
function parseDisk(line){const m=(line||'').match(/(\d+)%\s+\S+\s*$/);return m?parseInt(m[1]):null;}
function cronTimes(cron){
  const out={main:null,custom:null};
  (cron||'').split('\n').forEach(l=>{
    if(l.includes('run_main.sh')||(l.includes('schedule_runner.py')&&l.includes(' main '))){const m=l.match(/^(\d+)\s+(\d+)\s/);if(m)out.main=m[2].padStart(2,'0')+':'+m[1].padStart(2,'0');}
    if(l.includes('run_custom.sh')||(l.includes('schedule_runner.py')&&l.includes(' custom '))){const m=l.match(/^(\d+)\s+(\d+)\s/);if(m)out.custom=m[2].padStart(2,'0')+':'+m[1].padStart(2,'0');}
  });return out;
}

/* =========================================================================
   [v8] 手机端「小程序同款」外壳 —— 底部 tabBar（只有 ≤767px 显示）
   -------------------------------------------------------------------------
   小程序的信息架构是「底部 5 个 tab + 二级页」：概览 / 火花 / 记录 / 任务 / 我的。
   网页端 v4 原本窄屏只有「侧栏抽屉（汉堡按钮）」，手机上切页要两步。
   这里给窄屏补一条与小程序一致的底部导航；桌面上整块 display:none，零影响。

   视图映射（网页面板 → 小程序）：
     overview → pages/overview   friends → pages/spark
     logs     → pages/records    tasks   → pages/tasks
     me       → pages/me（本版新增）
   其余视图（抖音账号 / 日报 / 面板用户）是二级页，从「我的」进入，
   顶栏左侧会出现返回键（#hdrBack）回到 #me。

   图标直接用小程序工程 images/tab/*.png（同一套图，已放到 /static/tab/），
   保证「同款」是同一张图，而不是拿近似图标凑。
   ========================================================================= */
const MTABS=[
  {v:'overview',t:'概览'},
  {v:'friends', t:'火花'},
  {v:'logs',    t:'记录'},
  {v:'tasks',   t:'任务'},
  {v:'me',      t:'我的'}
];
function _isTabView(v){return MTABS.some(function(x){return x.v===v;});}
/* 与 route() 里那套「hash 无效就回落 overview」保持同口径，tabBar 的高亮才跟得上 */
function _curView(){
  /* [v9] hash 支持 "视图:参数"（如 #frienddetail:12345）→ 取冒号前那段才是视图名 */
  let v=(location.hash||'#overview').slice(1).split(':')[0];
  if(!Loaders[v])v='overview';
  return v;
}
const MTAB={
  sync(){
    const bar=document.getElementById('mtabbar');
    if(!bar)return;
    if(!bar.getAttribute('data-built')){
      bar.innerHTML=MTABS.map(function(x){
        return '<a class="mtab__i" href="#'+x.v+'" data-view="'+x.v+'">'+
          '<span class="mtab__ico mtab__ico--'+x.v+'"></span>'+
          '<span class="mtab__t">'+x.t+'</span></a>';
      }).join('');
      bar.setAttribute('data-built','1');
    }
    const cur=_curView();
    bar.querySelectorAll('.mtab__i').forEach(function(a){
      a.classList.toggle('on',a.dataset.view===cur);
    });
    /* 顶栏返回键只在二级页亮（CSS：#hdrBack 默认 none，窄屏 + body.m-sub 才显示） */
    document.body.classList.toggle('m-sub',!_isTabView(cur));
  }
};
const App={
  state:{overview:null,friends:null,status:null,records:null,poll:null,accounts:[],currentAccount:null,accountsReady:false,isAdmin:false,loginUser:'',scrapedContacts:null,scrapedHidden:false,showNonMutual:false,puAvatar:{}},
  /* [修复20260924跨用户残留] 登出/登录切换用户时必须清空上一账号态的账号与业务数据。
     原先登出只删 localStorage，App.state.accounts 与 #accMenu / #accSwitch 全部残留，
     同一标签页再登录另一个用户（尤其无绑定账号的普通用户）时，右上角会继续显示
     上一个用户的抖音号与目标列表。 */
  resetAccountUI(){
    this.state.accounts=[];this.state.currentAccount=null;this.state.accountsReady=false;
    this.state.overview=null;this.state.friends=null;this.state.records=null;
    this.state.validTargets=null;this.state.scrapedContacts=null;
    this.state.scrapedHidden=false;this.state.showNonMutual=false;this.state._schedTasks=null;this.state.status=null;
    const sw=document.getElementById('accSwitch');if(sw)sw.style.display='none';
    const mn=document.getElementById('accMenu');if(mn){mn.innerHTML='';mn.classList.remove('open');}
    const nm=document.getElementById('accNm');if(nm)nm.textContent='';
    const av=document.getElementById('accAv');if(av)av.textContent='';
    const np=document.getElementById('navPanelUsers');if(np)np.style.display='none';
    try{localStorage.removeItem('current_account');}catch(e){}
  },
  showLogin(msg){
    this.resetAccountUI();
    document.getElementById('app').classList.remove('on');
    document.getElementById('login').style.display='flex';
    document.getElementById('loginErr').textContent=msg||'';
    if(this.state.poll){clearInterval(this.state.poll);this.state.poll=null;}
  },
  logout(){if(!confirm('确认退出登录？'))return;const tok=localStorage.getItem('panel_token');const doClear=()=>{this.resetAccountUI();localStorage.removeItem('panel_token');localStorage.removeItem('panel_user');try{localStorage.removeItem('panel_imp_root');}catch(e){}this.showLogin('已退出，请重新登录');};if(tok){fetch('/api/logout',{method:'POST',headers:{'X-Panel-Token':tok}}).then(r=>{doClear();}).catch(e=>{doClear();});}else{doClear();}},
  /* [v6.13] 「进入工作台」统一入口：密码登录、管理员免密切换面板用户都走这里
     （原来这段只长在 login() 里，切身份要复用必须先抽出来）。 */
  async _afterAuth(ld){
    localStorage.setItem('panel_token',ld.token);
    localStorage.setItem('panel_user',JSON.stringify({username:ld.username,is_admin:ld.is_admin}));
    this.state.isAdmin=!!ld.is_admin;this.state.loginUser=ld.username;
    this.state._puAll=null;        // 面板用户列表按身份重拉（普通用户只拿得到自己）
    this.state.accountsReady=false;
    /* 设置菜单里的「更换我的头像 / 退出登录」是按身份拼的，缓存标记要清掉重建 */
    const _sm=document.getElementById('setMenu');if(_sm){_sm.removeAttribute('data-built');_sm.innerHTML='';_sm.classList.remove('open');}
    if(!window._notifPoll)window._notifPoll=setInterval(()=>{if(!document.hidden)ToastHistory.poll();},30000);
    avApply(document.getElementById('sbAvatar'),'pu',ld.username,(ld.username||'?').charAt(0));
    const _sn=document.getElementById('sbName');if(_sn)_sn.textContent=ld.username;
    const st=await api('/api/status');
    document.getElementById('login').style.display='none';
    document.getElementById('app').classList.add('on');
    App.resetAccountUI();          // 换身份：先清上一身份的账号态/菜单，避免右上角残留别人的抖音号
    /* 注意顺序：resetAccountUI() 里会把 #navPanelUsers 一起置 none，所以「面板用户」入口
       必须在它**之后**重新点亮，否则管理员登录后左侧会少一项（v6.13 首版踩到过）。 */
    const _np=document.getElementById('navPanelUsers');if(_np)_np.style.display=ld.is_admin?'':'none';
    try{
      const ar=await api('/api/accounts?live=0');App.state.accounts=ar.accounts||[];App.state.accountsReady=true;
      if(App.state.accounts.length){
        const saved=localStorage.getItem('current_account');
        App.state.currentAccount=(saved&&App.state.accounts.find(a=>a.unique_id===saved))?.unique_id||App.state.accounts[0]?.unique_id||null;
      }
      /* [v6.15 回退] 右上角入口的显隐由 updateAccSwitcher() 统一同步（切换抖音号 → 无账号时不显示） */
      App.updateAccSwitcher();App.updateSidebar();
      App.refreshAccountStatus();  // [新增20261002] 登录状态后台补（不阻塞首屏）
    }catch(e){App.state.accountsReady=true;}
    try{ToastHistory.poll();}catch(e){}
    if(!location.hash||location.hash==='#')location.hash='#overview';
    this.route(true);
    return st;
  },
  async login(){
    const user=document.getElementById('loginUser').value.trim();
    const pass=document.getElementById('loginPass').value;
    const btn=document.getElementById('loginBtn');const err=document.getElementById('loginErr');
    if(!user||!pass){err.textContent='请输入用户名和密码';return;}
    btn.disabled=true;btn.textContent='登录中…';err.textContent='';
    try{
      const lr=await fetch('/api/login',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({username:user,password:pass})});
      const ld=await lr.json();
      if(!lr.ok){err.textContent=ld.error||'登录失败';btn.disabled=false;btn.textContent='登录';return;}
      try{localStorage.removeItem('panel_imp_root');}catch(e){}   // [v6.13] 正常登录 = 结束任何「模拟身份」
      const st=await App._afterAuth(ld);
      toast('连接成功','服务器时间 '+((st&&st.now)||''),'ok');
    }catch(e){if(e.message!=='unauthorized')err.textContent='验证失败：'+e.message;}
    btn.disabled=false;btn.innerHTML='<svg class="svgic" viewBox="0 0 24 24" style="stroke:#fff"><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4M10 17l5-5-5-5M15 12H3"/></svg> 登录';
  },
  route(){
    /* [v9] 与 _curView() 同口径：hash 里 "视图:参数" 只取冒号前那段做视图名 */
    let v=(location.hash||'#overview').slice(1).split(':')[0];if(!Loaders[v])v='overview';
    document.querySelectorAll('#nav a').forEach(a=>a.classList.toggle('active',a.dataset.view===v));
    document.querySelectorAll('.view').forEach(x=>x.classList.remove('on'));
    /* 首次进入某页时视图容器还不存在：先创建再点亮。
       否则 loader 内部 await 请求（如 /api/accounts、/api/logs）返回之前，
       整片内容区是空白的，用户会以为页面坏了 */
    const el=ensureView(v);el.classList.add('on');
    /* [v4.9] 顶栏逐页移植 Stitch 各稿 <header>（标题/副题/动作簇都在模板里） */
    const _tb=document.getElementById('topbar');if(_tb){_tb.innerHTML=HDR(v);fixStaticIcons(_tb);}
    /* [v6.4] 顶栏是 HDR() 重建的，内联头像已随之刷新；账号下拉菜单内容在这里补一次，
       否则切到非 accounts 页后点开账号切换是空的
       [v6.13] 不再以「有没有抖音账号」为条件：无账号的用户也要能点开面板用户菜单 */
    this.updateAccSwitcher();
    /* [v9] 记住最近待过的 tab，供二级页返回键使用（见 App.back） */
    if(_isTabView(v))window.__prevTab=v;
    /* [v8] 窄屏底部 tabBar 的高亮 + 二级页返回键，跟着当前视图一起刷。
       放在 closeSidebar 之前：抽屉关掉的同时导航态就对齐了，不会闪一下旧高亮。 */
    try{MTAB.sync();}catch(e){}
    if(this.closeSidebar)this.closeSidebar();
    /* [修复20261001] 账号列表尚未返回时不要执行数据 Loader：
       首屏 route() 跑在 /api/accounts 之前，那时发出去的请求带不上账号限定，
       管理员会拿回全部账号的数据 → 界面上偶发出现"别人的面板"。
       这里先显示占位，等 /api/accounts 回来后那次 route() 再渲染真实数据。 */
    if(!this.state.accountsReady){
      ensureView(v).innerHTML='<div class="card"><div class="empty">正在加载账号…</div></div>';
      return;
    }
    Loaders[v]();
  },
  /* [v9] 只读 hash 的 getter（不重渲染）→ 同样要剥掉 "视图:参数" 的参数段 */
  current(){return (location.hash||'#overview').slice(1).split(':')[0];},
  /* [新增20261002] 后台补齐账号登录状态。
     /api/accounts 默认 live=0（只读文件、毫秒返回）→ 首屏不再等 20 秒校验；
     真值由这里带 live=1 拉回（服务端有 90s 缓存，重复调用很快），只刷新徽章，
     不重新路由、不打断用户正在看的内容。 */
  refreshAccountStatus(){
    return api('/api/accounts?live=1').then(ar=>{
      const live=ar.accounts||[];
      if(!live.length)return;
      App.state.accounts=live;
      App.updateAccSwitcher();App.updateSidebar();
      if(App.current()==='accounts'&&Loaders.accounts)Loaders.accounts(true);
    }).catch(()=>{});
  },
  refresh(){const b=document.querySelector('.hdrRefresh');if(b){b.classList.add('spinning');setTimeout(()=>b.classList.remove('spinning'),800);}Loaders[this.current()]();},
  toggleAccMenu(e){
    if(e)e.stopPropagation();
    const m=document.getElementById('accMenu');
    if(!m)return;
    m.classList.toggle('open');
    if(m.classList.contains('open')){
      document.addEventListener('click',()=>m.classList.remove('open'),{once:true});
    }
  },
  /* [v6.2] 右上角「设置」菜单：固定入口（刷新 / 更换我的头像 / 退出登录） */
  toggleSetMenu(e){
    if(e)e.stopPropagation();
    const m=document.getElementById('setMenu');if(!m)return;
    if(!m.getAttribute('data-built')){
      const ic=n=>'<span class="am-av" style="font-family:\'Material Symbols Outlined\';font-size:15px">'+msGlyph(n)+'</span>';
      m.innerHTML=
        '<div class="am-item" data-click="App.refresh">'+ic('refresh')+'<div class="am-info"><b>刷新数据</b><span>重新拉取当前页面</span></div></div>'+
        /* [v6.7] 「面板用户」项移除：左侧菜单已有该入口（用户要求"设置里取消"） */
        /* [v6.15] 「界面缩放」切换项 + 「返回我的账号」一并移除：
           缩放固定 125%（CSS 默认值），面板用户免密切换整体下线 */
        '<div class="am-item" data-click="Actions.avatarSelf">'+ic('account_circle')+'<div class="am-info"><b>更换我的头像</b><span>'+esc(this.state.loginUser||'')+'</span></div></div>'+
        '<div class="am-item" data-click="App.logout">'+ic('logout')+'<div class="am-info"><b>退出登录</b><span>'+esc(this.state.loginUser||'')+'</span></div></div>';
      m.setAttribute('data-built','1');
    }
    const open=m.classList.toggle('open');
    if(open)document.addEventListener('click',()=>m.classList.remove('open'),{once:true});
  },
  goto(v){if(v)location.hash='#'+v;},
  /* [v8] 窄屏二级页（抖音账号 / 日报 / 面板用户）顶栏的返回键。
     刻意不用 history.back()：用户可能是从书签/通知直接落到二级页的，
     回退会退出面板；统一回「我的」这一层，行为可预期。 */
  /* [v9] 二级页返回：回到「最近待过的那个 tab」而不是写死 #me。
     从概览点铃铛进通知中心 → 返回回概览；从「我的」进 → 返回回「我的」。
     无记录时兜底回 me。刻意不用 history.back()：直接落在二级页时回退会退出面板。 */
  back(){location.hash='#'+(window.__prevTab||'me');},
  /* [修复20260923移动端] 汉堡按钮原先误绑 App.toggleAccMenu（账号菜单），
     侧边栏虽有 .open 滑出样式但没有任何入口能触发，手机上无法切换页面导航 */
  toggleSidebar(e){
    if(e)e.stopPropagation();
    const sb=document.getElementById('sidebar');
    const open=sb.classList.toggle('open');
    let m=document.getElementById('sbMask');
    if(!m){m=document.createElement('div');m.id='sbMask';m.setAttribute('data-click','App.toggleSidebar');document.body.appendChild(m);}
    m.classList.toggle('on',open);
  },
  closeSidebar(){
    document.getElementById('sidebar').classList.remove('open');
    const m=document.getElementById('sbMask');
    if(m)m.classList.remove('on');
  },
  selectAccount(uid){
    const acc=this.state.accounts.find(a=>a.unique_id===uid);
    if(!acc)return;
    this.state.currentAccount=uid;
    this.state.scrapedContacts=null;
    localStorage.setItem('current_account',uid);
    document.getElementById('accMenu').classList.remove('open');
    this.updateAccSwitcher();
    this.updateSidebar();
    /* [v6.6 修复] 日报的「范围」默认是「全部账号」，切账号后内容当然不变（管理员反馈"切换用户时日报不变"）。
       在日报页切账号时自动把范围收敛到「当前账号」，保证日报跟随当前抖音号；用户之后仍可手动切回全部账号。 */
    if(this.current()==='daily'){
      const ds=document.getElementById('drScope');
      if(ds)ds.value='cur';
    }
    Loaders[this.current()]();
    toast('已切换账号',acc.username+' ('+uid+')','ok');
  },
  updateAccSwitcher(){
    /* [v6.15 回退] 菜单回到单一「抖音账号 · 数据范围」段（真实抖音头像 + 火花关注目标数）。
       [v6.4] 不再因「找不到当前账号」就早退：否则 route() 重建顶栏后菜单会是空的。 */
    const menu=document.getElementById('accMenu');
    if(!menu)return;
    let h='';
    if(!(this.state.accounts||[]).length)h+='<div class="am-note">当前用户未关联抖音账号</div>';
    h+=(this.state.accounts||[]).map(function(a){
      const ck=a.cookie||{};
      const on=ck.has&&ck.session&&!ck.expired;
      const cur=a.unique_id===App.state.currentAccount;
      return '<div class="am-item'+(cur?' active':'')+'" data-click="App.selectAccount" data-arg="'+esc(a.unique_id)+'">'+
        '<div class="am-av" style="position:relative">'+accAvLetter(a)+accAvImg(a)+'</div>'+
        '<div class="am-info"><b>'+esc(a.username)+'</b><span>'+esc(a.unique_id)+' · '+(a.targets||[]).length+' 目标</span></div>'+
        '<div class="am-dot '+(on?'on':'off')+'"></div></div>';
    }).join('');
    menu.innerHTML=h;
    /* [v6.15 回退] 又是「切换抖音账号」了：没有绑定账号就整个入口收起来（菜单里没有可切的东西） */
    const _w=document.getElementById('accSwitch');
    if(_w)_w.style.display=(this.state.accounts||[]).length?'flex':'none';
    /* 顶栏芯片随之刷新（切账号后要立刻反映当前抖音号） */
    const _av=document.getElementById('accAv');
    if(_av){
      const _a=(this.state.accounts||[]).find(x=>x.unique_id===this.state.currentAccount);
      _av.innerHTML=_a?(accAvLetter(_a)+accAvImg(_a)):esc('?');
      if(_av.parentNode&&_av.parentNode.setAttribute)
        _av.parentNode.setAttribute('title',_a?('当前账号 '+_a.username+' · '+_a.unique_id+' · 点击切换抖音账号'):'尚未绑定抖音账号');
    }
  },
  /* [v6.15 回退] v6.13 的「管理员免密切换面板用户」（impRoot/_loadPuForMenu/switchUser/returnToMe
     + 后端 POST /api/switch-user）按用户要求整体下线：右上角回到切换抖音号。
     后端接口仍在线上但前端不再调用，需要时可原样复活。 */
  /* ---- [v6.15] 界面缩放（整体放大）：固定 125%，设置菜单里的切换按钮已按用户要求移除 ----
     只保留「应用」这一步：默认走 CSS 里 @media(min-width:1440px) 的 --ui-pref 默认值 1.25。
     localStorage['ui.scale'] 是老版本留下的偏好键，这里不再读取也不会写入（值恒为 125%）。 */
  applyUiScale(){
    try{document.documentElement.style.removeProperty('--ui-pref');}catch(e){}
  },
  updateSidebar(){
    const _rb=document.getElementById('sbRoleBadge');if(_rb)_rb.textContent=this.state.isAdmin?'管理员':'用户';
    const acc=this.state.accounts.find(a=>a.unique_id===this.state.currentAccount);
    /* [v6.4] 侧栏用户名/头像取**登录用户**（面板账号），不再依赖是否绑定了抖音账号——
       此前无账号时这里直接 return，侧栏头像与名字会整块留白 */
    const nm=(acc&&(acc.username||acc.unique_id))||'';
    const lu=this.state.loginUser||nm||'?';
    const _sn=document.getElementById('sbName');if(_sn)_sn.textContent=lu;
    avApply(document.getElementById('sbAvatar'),'pu',lu,lu.charAt(0));
    this.updateSideStats();
  },
  /* [v3 新增] 侧栏底部两块系统指标 + 顶部「立即续火花」的账号守卫。
     数据来源都取自已有接口（App.state._schedTasks 来自 /api/schedule，App.state.status.disk 来自 /api/status），
     没有新接口、没有额外请求。 */
  updateSideStats(){
    try{
      const nd=document.getElementById('sbStatNext');
      if(nd){
        const l=(this.state._schedTasks||[])
          .filter(t=>(t.type||'custom')==='main'&&t.enabled!==false&&t.next_run)
          .map(t=>String(t.next_run)).sort();
        const s=l[0];
        if(!s){nd.textContent='未配置';}
        else{
          const p=x=>String(x).padStart(2,'0');
          const ds=s.slice(0,10),tm=s.slice(11,16),now=new Date();
          const d0=now.getFullYear()+'-'+p(now.getMonth()+1)+'-'+p(now.getDate());
          const t1=new Date(now.getTime()+86400000);
          const d1=t1.getFullYear()+'-'+p(t1.getMonth()+1)+'-'+p(t1.getDate());
          nd.textContent=(ds===d0?'今天 ':ds===d1?'明天 ':ds.slice(5)+' ')+tm;
        }
      }
      const dk=document.getElementById('sbStatDisk');
      if(dk){
        const st=this.state.status||{};
        const pct=typeof parseDisk==='function'?parseDisk(st.disk):null;
        dk.textContent=(pct!=null?pct+'%':'—');
      }
      const q=document.getElementById('quickSparkBtn');
      if(q){const noAcc=!this.state.isAdmin&&!(this.state.accounts||[]).length;
        q.disabled=!!noAcc;q.title=noAcc?'尚未分配抖音账号':'';}
    }catch(e){}
  },
  currentTargets(){
    const acc=this.state.accounts.find(a=>a.unique_id===this.state.currentAccount);
    if(!acc||!acc.targets||!acc.targets.length)return null;
    return new Set(acc.targets);
  },
  /* [修复20261001] 账号尚未就绪时必须 fail-closed：
     旧实现直接返回「不带 account」的 URL，而管理员在后端不受账号限制 → 会拿回
     全部账号的好友/火花/台账，首屏偶发渲染成"别人的面板"。
     现在退化成 account=__none__（一个不存在的账号），后端按它过滤 → 一律空集，
     宁可为空也不串号；等 /api/accounts 回来后那次 route() 再填真实数据。 */
  withAcc(url){
    const uid=this.state.currentAccount;
    const sep=url.includes('?')?'&':'?';
    if(!uid)return url+sep+'account=__none__';
    return url+sep+'account='+encodeURIComponent(uid);
  },
  setRunPill(){const o=this.state.overview;const run=!!(o&&(o.run.main.running||o.run.custom.running));
    /* [v4.9] 胶囊只在「任务与日志」顶栏（#hdrRunPill）渲染；轮询不再依赖胶囊存在 */
    const pill=document.getElementById('hdrRunPill');
    if(pill){pill.style.display=run?'flex':'none';
      if(run){const _pt=document.getElementById('hdrRunPillTxt');
        if(_pt)_pt.textContent=o.run.main.running&&o.run.custom.running?'批量续与单独续运行中':o.run.main.running?'批量续任务运行中':'单独续任务运行中';}}
    if(run){
      /* [v3 性能修复 20261011] 轮询只在「有任务运行中」时启动（setRunPill）。
         三处收窄：① 标签页不可见时不刷；② tasks 用轮询态（跳过 24KB 日志重拉）；
         ③ 其余两页照旧。配合 loading() 的静默刷新，避免整页周期性闪白。 */
      if(!this.state.poll)this.state.poll=setInterval(()=>{
        if(document.hidden)return;
        const _v=this.current();
        if(_v==='tasks')Loaders.tasks(true);
        else if(_v==='overview'||_v==='friends')Loaders[_v]();
      },5000);
    }else if(this.state.poll){clearInterval(this.state.poll);this.state.poll=null;}
  }
};
function META(v){const M={daily:['日报','DouYinSparkFlow / 每日日报（按抖音号）'],schedule:['定时任务','DouYinSparkFlow / 定时任务设置'],panelusers:[App.state.isAdmin?'面板用户':'用户管理','DouYinSparkFlow / '+(App.state.isAdmin?'面板用户管理':'用户管理')],overview:['总览','DouYinSparkFlow / 守护总览'],friends:['好友与火花','DouYinSparkFlow / 好友管理'],tasks:['任务与日志','DouYinSparkFlow / 任务调度'],accounts:['抖音账号','DouYinSparkFlow / 账号管理'],logs:['执行台账','DouYinSparkFlow / 历史记录']};return M[v]||['未知',''];}
/*================ 顶栏（逐页 1:1 移植 Stitch 各稿 <header>） ================*/
/* 每个视图的顶栏都按对应 Stitch 稿原文转写：左侧标题+副题，右侧该页专属动作簇。
   老面板的顶栏（账号切换/时钟/运行胶囊全局常驻）不再使用：
   · 账号切换 → 收进右侧一个 switch_account 图标芯片（accMenu 下拉不变）
   · 运行胶囊 → 只在 03 稿画了它的「任务与日志」顶栏出现（#hdrRunPill）
   · 时钟 → 设计稿没有，删除 */
/* [v8] 顶栏左侧导航位：窄屏是「返回上一级」（二级页才亮），桌面/平板是汉堡按钮。
   两个按钮都常驻 DOM、用 CSS 控制显隐，避免各处 HDR 分支再判断一次宽度。
   窄屏（≤767px）的 tabBar 取代了侧栏抽屉，汉堡按钮在该断点被隐藏（见 style4.css v8 层）。 */
function _hdrBackBtn(){return '<button id="hdrBack" class="hidden w-8 h-8 rounded-lg items-center justify-center text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-colors shrink-0" data-click="App.back" aria-label="返回上一级">'+MI('chevron_left','text-[22px]')+'</button>';}
function _hdrMenuBtn(){return _hdrBackBtn()+'<button id="menuBtn" class="hidden w-8 h-8 rounded-lg items-center justify-center text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-colors shrink-0" data-click="App.toggleSidebar" aria-label="打开导航">'+MI('menu','text-[20px]')+'</button>';}
function _hdrAcc(){
  /* [v6.15 回退] 右上角这个切换器 = **切换抖音账号**（数据范围）。
     芯片显示当前抖音账号的真实头像 + 垫底首字母；点开菜单是账号列表。
     [沿革] v6.4 修过「头像写死 P、route() 重建顶栏后不刷新」；v6.11 起显示抖音账号真实头像；
     v6.13 一度改成「面板用户」免密切换（用户要求回退 → 本版回退，后端 /api/switch-user 保留但前端不再调用）。 */
  const a=(App.state.accounts||[]).find(x=>x.unique_id===App.state.currentAccount);
  const _hasAcc=!!(App.state.accounts||[]).length;
  const _t=a?('当前账号 '+a.username+' · '+a.unique_id+' · 点击切换抖音账号'):'尚未绑定抖音账号';
  return '<div class="relative shrink-0" id="accSwitch" style="display:'+(_hasAcc?'flex':'none')+'">'+
  '<button class="w-8 h-8 rounded-lg flex items-center justify-center text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-colors" title="'+esc(_t)+'" data-click="App.toggleAccMenu">'+
  '<span id="accAv" class="relative w-6 h-6 rounded-md overflow-hidden bg-primary-container/15 border border-primary-container/30 flex items-center justify-center text-primary-container text-[11px] font-mono font-bold">'+(a?(accAvLetter(a)+accAvImg(a)):esc('?'))+'</span></button>'+
  '<div class="acc-menu" id="accMenu"></div></div>';}
function _hdrBell(){return '<button class="w-8 h-8 rounded-lg flex items-center justify-center text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-colors relative shrink-0" title="消息中心" data-click="Actions.bellClick">'+MI('notifications','text-[19px]')+
  '<span class="msgBadgeTop" style="position:absolute;top:-3px;right:-3px;background:#ef4444;color:#fff;font-size:10px;min-width:16px;height:16px;border-radius:8px;display:none;align-items:center;justify-content:center;padding:0 4px;font-family:\'JetBrains Mono\',monospace"></span></button>';}
function _hdrRefresh(){return '<button class="hdrRefresh w-8 h-8 rounded-lg flex items-center justify-center text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-colors shrink-0" title="刷新" data-click="App.refresh">'+MI('refresh','text-[19px]')+'</button>';}
function _hdrFetchChip(){return '<div class="hidden xl:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-surface-container-low border border-outline-variant/20 font-mono-code-sm text-mono-code-sm text-on-surface-variant shrink-0"><span class="w-2 h-2 rounded-full bg-tertiary"></span><span>数据每 6 小时自动抓取 · 最近抓取 06:00</span></div>';}
/* [v6.2] 右上角固定三件套：头像（抖音账号切换）· 设置 · 提醒 */
function _hdrGear(){return '<div class="relative shrink-0" id="setSwitch">'+
  '<button class="w-8 h-8 rounded-lg flex items-center justify-center text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-colors" title="设置" data-click="App.toggleSetMenu">'+MI('settings','text-[19px]')+'</button>'+
  '<div class="acc-menu" id="setMenu"></div></div>';}
/* [v6.5] 右上角**统一工具簇**：所有页面最右侧都是「刷新 · 头像 · 设置 · 提醒」这四个图标，
   同一个 gap-1 容器 + 左侧统一竖线分隔 → 各页的间距、顺序、位置完全一致。
   页专属内容（抓取芯片 / 主按钮 / 日期步进器等）放在它左边，由外层 gap-3 排版。 */
function _hdrTools(){return '<div class="hdrTools flex items-center gap-1 border-l border-outline-variant/30 pl-2 shrink-0">'+
  _hdrRefresh()+_hdrAcc()+_hdrGear()+_hdrBell()+'</div>';}
function HDR(v){
  if(v==='overview'){
    /* 01 稿（PNG 基准）：标题 + 绿点副题 + 最近抓取芯片 + 立即续火花 + 铃铛 */
    return '<div class="flex items-center gap-3 min-w-0">'+_hdrMenuBtn()+
      '<div class="min-w-0"><div class="flex items-baseline gap-3 min-w-0">'+
      '<h1 class="text-headline-md font-headline-md font-bold text-on-surface tracking-tight shrink-0">总览</h1>'+
      '<span class="hidden sm:flex items-center gap-1.5 text-body-sm font-body-sm text-outline min-w-0"><span class="w-1.5 h-1.5 rounded-full bg-tertiary shrink-0"></span><span class="truncate">数据每 6 小时自动抓取</span></span>'+
      '</div></div></div>'+
      '<div class="flex items-center gap-3 shrink-0">'+_hdrFetchChip()+
      '<button id="quickSparkBtn" class="h-8.5 px-3.5 bg-primary-container hover:bg-[#ff925c] text-white text-body-sm font-body-sm font-semibold rounded-lg flex items-center gap-1.5 shadow-sm active:scale-95 transition-all" data-click="Actions.run" data-args="main|null|false" data-pass-this="1">'+MI('bolt','text-[17px]',1)+'<span>立即续火花</span></button>'+
      _hdrTools()+'</div>';
  }
  if(v==='friends'){
    /* 02 稿：分段状态筛选 + 工具图标（[v6.4] 按用户要求移除右上角「添加好友」按钮） */
    return '<div class="flex items-center gap-4 min-w-0">'+_hdrMenuBtn()+
      '<div class="min-w-0"><h1 class="text-headline-md font-headline-md font-bold text-on-surface tracking-tight">好友与火花</h1>'+
      '<p id="hdrFrSub" class="text-body-sm font-body-sm text-outline mt-0.5 truncate">共 … 位守护好友 · 数据每 6 小时自动抓取 · 最近抓取 06:00</p></div></div>'+
      '<div class="flex items-center gap-3 shrink-0">'+
      '<div id="hdrFriendChips" class="hdrHideMd bg-surface-container-lowest p-1 rounded-lg border border-surface-container-high flex items-center text-body-sm font-body-sm"></div>'+
      _hdrTools()+'</div>';
  }
  if(v==='tasks'){
    /* 03 稿：Live 状态胶囊 + 遥测图标 + 立即执行 */
    return '<div class="flex items-center gap-3 min-w-0">'+_hdrMenuBtn()+
      '<div class="min-w-0"><h1 class="text-headline-lg font-headline-lg font-bold text-on-surface tracking-tight leading-none truncate">任务与日志</h1>'+
      '<p class="text-body-sm font-body-sm text-on-surface-variant mt-1 truncate">定时任务 · 运行日志 · 执行留痕</p></div></div>'+
      '<div class="flex items-center gap-3 shrink-0">'+
      '<div id="hdrRunPill" style="display:none" class="flex items-center gap-2 bg-tertiary-container/10 border border-tertiary/30 px-3 py-1.5 rounded-full shrink-0">'+
      '<span class="relative flex h-2 w-2"><span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-tertiary opacity-75"></span><span class="relative inline-flex rounded-full h-2 w-2 bg-tertiary"></span></span>'+
      '<span id="hdrRunPillTxt" class="text-mono-code-sm font-mono-code-sm text-tertiary font-semibold">任务运行中</span></div>'+
      _hdrTools()+'</div>';
  }
  if(v==='accounts'){
    /* 04 稿：同步芯片 + 工具图标（[v6.4] 补回刷新按钮：此前漏了 _hdrRefresh） */
    return '<div class="flex items-center gap-3 min-w-0">'+_hdrMenuBtn()+
      '<div class="flex items-baseline gap-2.5 min-w-0"><h1 class="font-headline-lg text-headline-lg font-bold text-on-surface tracking-tight shrink-0">抖音账号</h1>'+
      '<span id="hdrAcSub" class="font-body-sm text-body-sm text-on-surface-variant truncate">共 … 个账号 · 登录态每轮任务前校验</span></div></div>'+
      '<div class="flex items-center gap-3 shrink-0">'+_hdrFetchChip()+
      _hdrTools()+'</div>';
  }
  if(v==='logs'){
    /* 05 稿：LEDGER LOGS 徽章 + 日期芯片 + 导出 CSV + 立即续火花 + 刷新 */
    return '<div class="flex flex-col justify-center min-w-0">'+_hdrMenuBtn()+
      '<div class="flex items-center gap-2 min-w-0"><h1 class="font-headline-md text-headline-md font-bold text-on-surface tracking-tight shrink-0">执行台账</h1>'+
      '<span class="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-mono-code-sm bg-primary-container/10 text-primary-container border border-primary-container/20 shrink-0">LEDGER LOGS</span></div>'+
      '<p class="font-body-sm text-body-sm text-outline mt-0.5 truncate hidden sm:block">执行台账留痕 · 可追溯每一次发送</p></div>'+
      '<div class="flex items-center gap-3 shrink-0">'+
      '<div class="hdrHideSm hidden xl:flex items-center gap-2 mr-2 text-[11px] font-mono-code-sm text-outline shrink-0">'+
      '<span class="flex items-center gap-1 bg-surface-container-low px-2.5 py-1 rounded-md border border-outline-variant/20"><span class="w-1.5 h-1.5 rounded-full bg-primary-container"></span>数据每 6 小时自动抓取</span>'+
      '<span class="bg-surface-container-low px-2.5 py-1 rounded-md border border-outline-variant/20 text-on-surface-variant">最近抓取 06:00</span></div>'+
      _hdrTools()+'</div>';
  }
  if(v==='daily'){
    /* 06 稿：[v6.15] 顶栏的「‹ 今天 ›」日期步进器按用户要求删除 ——
       日期改由正文里的「日期」输入框控制（留空 = 今天实时生成）。 */
    return '<div class="flex items-baseline gap-3 min-w-0">'+_hdrMenuBtn()+
      '<h1 class="text-headline-md font-headline-md font-bold text-on-surface shrink-0">日报</h1>'+
      '<span class="text-body-sm font-body-sm text-on-surface-variant truncate hidden sm:inline">按抖音号汇总 · 每日 09:00 / 18:00 推送</span></div>'+
      '<div class="flex items-center gap-3 shrink-0">'+
      '<button class="hdrPrimary inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-primary-container hover:bg-[#ff925c] text-white font-headline-md text-body-md shadow-[0_0_12px_-2px_rgba(255,122,69,0.35)] transition-all active:scale-95 duration-150" data-click="Actions.pushDailyReport" data-pass-this="1">'+MI('send','text-[16px]')+'<span>立即推送</span></button>'+
      _hdrTools()+'</div>';
  }
  if(v==='panelusers'){
    /* 08 稿：面包屑胶囊 + 批量导出 + 添加用户 + 快捷图标 */
    return '<div class="flex items-center gap-3 min-w-0">'+_hdrMenuBtn()+
      '<h1 class="text-headline-lg font-headline-lg text-white tracking-tight shrink-0">面板用户</h1>'+
      '<span class="text-[#2f3a4c] shrink-0">/</span>'+
      '<span id="hdrPuSub" class="text-body-sm font-body-sm text-on-surface-variant bg-[#151b26] border border-[#232b38] px-2 py-0.5 rounded-full truncate">权限与推送通道配置</span></div>'+
      '<div class="flex items-center gap-3 shrink-0">'+
      '<div class="hidden xl:flex items-center gap-2 px-2.5 py-1 rounded bg-[#151b26] border border-[#232b38] text-on-surface-variant font-mono-code-sm text-[11px] shrink-0"><span class="w-1.5 h-1.5 rounded-full bg-tertiary"></span><span>最近抓取 06:00 · 自动轮询中</span></div>'+
      _hdrTools()+'</div>';
  }
  if(v==='me'){
    /* [v8] 「我的」：对齐小程序 pages/me —— 窄屏 tabBar 的第 5 个 tab */
    return '<div class="flex items-center gap-3 min-w-0">'+_hdrMenuBtn()+
      '<div class="min-w-0"><h1 class="text-headline-md font-headline-md font-bold text-on-surface tracking-tight">我的</h1>'+
      '<p class="text-body-sm font-body-sm text-outline mt-0.5 truncate">'+esc(App.state.loginUser||'未登录')+(App.state.isAdmin?' · 管理员':' · 普通用户')+'</p></div></div>'+
      '<div class="flex items-center gap-3 shrink-0">'+_hdrTools()+'</div>';
  }
  /* =====================================================================
     [v9] 小程序页面 1:1 对齐 —— 以下 5 个视图对应微信小程序的二级页，
     入口统一在「我的」页（#me），返回键由 _hdrMenuBtn() 里的 #hdrBack 提供。
     取值口径：v 一律取自 location.hash 冒号前那段（见 route() / _curView）。
     ===================================================================== */
  if(v==='contacts'){
    /* 对应小程序 pages/contacts —— 抓取抖音会话列表 */
    return '<div class="flex items-center gap-3 min-w-0">'+_hdrMenuBtn()+
      '<div class="min-w-0"><h1 class="text-headline-md font-headline-md font-bold text-on-surface tracking-tight">抓取联系人</h1>'+
      '<p class="text-body-sm font-body-sm text-outline mt-0.5 truncate">读取抖音会话列表 · 点行加入名单</p></div></div>'+
      '<div class="flex items-center gap-3 shrink-0">'+_hdrTools()+'</div>';
  }
  if(v==='push'){
    /* 对应小程序 pages/push —— 推送设置 */
    return '<div class="flex items-center gap-3 min-w-0">'+_hdrMenuBtn()+
      '<div class="min-w-0"><h1 class="text-headline-md font-headline-md font-bold text-on-surface tracking-tight">推送设置</h1>'+
      '<p class="text-body-sm font-body-sm text-outline mt-0.5 truncate">微信服务通知 / 第三方通道</p></div></div>'+
      '<div class="flex items-center gap-3 shrink-0">'+_hdrTools()+'</div>';
  }
  if(v==='notifications'){
    /* 对应小程序 pages/notifications —— 通知中心 */
    return '<div class="flex items-center gap-3 min-w-0">'+_hdrMenuBtn()+
      '<div class="min-w-0"><h1 class="text-headline-md font-headline-md font-bold text-on-surface tracking-tight">通知中心</h1>'+
      '<p class="text-body-sm font-body-sm text-outline mt-0.5 truncate">历史推送与异常告警</p></div></div>'+
      '<div class="flex items-center gap-3 shrink-0">'+_hdrTools()+'</div>';
  }
  if(v==='sysstatus'){
    /* 对应小程序 pages/sys-status —— 系统状态 */
    return '<div class="flex items-center gap-3 min-w-0">'+_hdrMenuBtn()+
      '<div class="min-w-0"><h1 class="text-headline-md font-headline-md font-bold text-on-surface tracking-tight">系统状态</h1>'+
      '<p class="text-body-sm font-body-sm text-outline mt-0.5 truncate">浏览器锁 · 运行中的任务 · 下次执行</p></div></div>'+
      '<div class="flex items-center gap-3 shrink-0">'+_hdrTools()+'</div>';
  }
  if(v==='frienddetail'){
    /* 对应小程序 pages/friend-detail —— 好友详情（名字由 state 带过来） */
    return '<div class="flex items-center gap-3 min-w-0">'+_hdrMenuBtn()+
      '<div class="min-w-0"><h1 class="text-headline-md font-headline-md font-bold text-on-surface tracking-tight">好友详情</h1>'+
      '<p class="text-body-sm font-body-sm text-outline mt-0.5 truncate">'+esc(App.state.fdName||'火花明细 · 单独操作')+'</p></div></div>'+
      '<div class="flex items-center gap-3 shrink-0">'+_hdrTools()+'</div>';
  }
  /* 兜底（不应到达）：通用顶栏 */
  return '<div class="flex items-center gap-3 min-w-0">'+_hdrMenuBtn()+
    '<h1 class="text-headline-md font-headline-md font-bold text-on-surface tracking-tight truncate">控制台</h1></div>'+
    '<div class="flex items-center gap-3 shrink-0">'+_hdrTools()+'</div>';
}
/* ---------- 顶栏动态补丁（由各 loader 在数据到位后调用） ---------- */
function _hdrFriends(cnt){
  const ff=App.state.friendFilter||'all';
  const A='px-2.5 py-1 rounded bg-surface-container-high text-on-surface font-medium transition-colors';
  const I2='px-2.5 py-1 rounded text-outline hover:text-on-surface transition-colors';
  const chip=(k,t,extra)=>'<button type="button" class="'+(ff===k?A:I2)+(k==='risk'?' flex items-center gap-1':'')+'" data-click="Actions.friendFilter" data-args="'+k+'">'+t+' ('+(cnt[k]||0)+')'+(extra?'<span class="w-1.5 h-1.5 rounded-full bg-error"></span>':'')+'</button>';
  /* [v11] 4 档口径对齐小程序 spark 页：全部 / 需关注 / 注意 / 正常（旧的 已续/待续 被取代） */
  const _chips=chip('all','全部')+chip('risk','需关注')+chip('warn','注意')+chip('ok','正常');
  const box=document.getElementById('hdrFriendChips');
  if(box)box.innerHTML=_chips;
  const mob=document.getElementById('friendChipsM');
  if(mob)mob.innerHTML='<div class="bg-surface-container-lowest p-1 rounded-lg border border-surface-container-high flex items-center text-body-sm font-body-sm">'+_chips+'</div>';
  const sub=document.getElementById('hdrFrSub');
  if(sub)sub.textContent='共 '+cnt.all+' 位守护好友 · 数据每 6 小时自动抓取 · 最近抓取 06:00';
  const fs=document.getElementById('fvSearch');
  if(fs&&document.activeElement!==fs)fs.value=App.state._fsQ||'';
  const fm=document.getElementById('fvSearchM');
  if(fm&&document.activeElement!==fm)fm.value=App.state._fsQ||'';
}
function _hdrAccounts(){
  const n=(App.state.accounts||[]).length;
  const sub=document.getElementById('hdrAcSub');
  if(sub)sub.textContent='共 '+n+' 个账号 · 登录态每轮任务前校验';
  const b=document.getElementById('hdrImpBtn');
  if(b&&App.state.currentAccount)b.setAttribute('data-arg',App.state.currentAccount);
}
function _hdrPanelUsers(n){
  const el=document.getElementById('hdrPuSub');
  if(el)el.textContent='权限与推送通道配置 · 共 '+n+' 个用户';
}
function _hdrLogs(){
  /* [v11] 记录页改成「发送记录 / 运行日志」两 tab，日期筛选已下线（小程序 records 页没有日期筛选） */
  const n=(App.state._recRecs||[]).length;
  const h=document.getElementById('hdrDateTxt');
  if(h)h.textContent='已载入 '+n+' 条记录';
}
const Loaders={};
/* =========================================================================
   [v8] 「我的」—— 对齐小程序 pages/me
   窄屏 tabBar 的第 5 个 tab：用户卡（可点改头像）+ 抖音账号切换 +
   功能入口（日报 / 执行台账 / 账号管理 / 面板用户）+ 系统入口 + 退出登录。
   数据全部取自已有状态与接口，不新增任何后端请求。
   ========================================================================= */
Loaders.me=function(){
  const el=ensureView('me');
  const u=App.state.loginUser||'';
  const admin=!!App.state.isAdmin;
  const accs=App.state.accounts||[];
  const cur=App.state.currentAccount;
  const ic=function(n,c){return '<span class="material-symbols-outlined '+(c||'text-[19px]')+'">'+msGlyph(n)+'</span>';};

  /* 用户卡：头像走 avApply（面板落库 > localStorage > 字母垫底），点它会弹头像选择器 */
  const ucard='<div class="card me-card">'+
      '<div class="me-user">'+
        '<div class="me-av" id="meAvatar" data-click="Actions.avatarSelf" title="点击更换我的头像">'+esc((u||'?').charAt(0))+'</div>'+
        '<div class="me-userinfo">'+
          '<div class="me-name">'+esc(u||'未登录')+(admin?'<span class="me-role">管理员</span>':'')+'</div>'+
          '<div class="me-sub">绑定 '+accs.length+' 个抖音账号</div>'+
          '<div class="me-hint">点头像可更换</div>'+
        '</div>'+
      '</div></div>';

  /* 抖音账号：一屏一个，点了即切（等价于右上角切换器） */
  const accList=accs.length?accs.map(function(a){
    const ck=a.cookie||{};
    const on=!!(ck.has&&ck.session&&!ck.expired);
    const act=a.unique_id===cur;
    return '<div class="me-acc'+(act?' on':'')+'" data-click="App.selectAccount" data-arg="'+esc(a.unique_id)+'">'+
      '<div class="me-accav">'+accAvLetter(a)+accAvImg(a)+'</div>'+
      '<div class="me-accinfo"><b>'+esc(a.username||a.unique_id)+'</b>'+
      '<span>'+esc(a.unique_id)+' · '+(a.targets||[]).length+' 个目标</span></div>'+
      '<span class="me-dot '+(on?'on':'off')+'"></span>'+
      (act?'<span class="me-cur">当前</span>':'')+
    '</div>';
  }).join(''):'<div class="empty" style="padding:20px">尚未绑定抖音账号</div>';

  const item=function(icon,title,sub,click,arg){
    return '<div class="me-item" data-click="'+click+'"'+(arg!=null?' data-arg="'+esc(arg)+'"':'')+'>'+
      '<span class="me-ico">'+ic(icon)+'</span>'+
      '<span class="me-mid"><b>'+title+'</b>'+(sub?'<span>'+sub+'</span>':'')+'</span>'+
      '<span class="me-arrow material-symbols-outlined">'+msGlyph('chevron_right')+'</span></div>';
  };

  /* [v12] 安卓客户端专属入口：只有跑在「火花守护」App 里才渲染
     （window.AndroidApp 是 App 注入的 JS 桥）→ 浏览器里零影响。 */
  let _appCard='';
  const _app=(typeof window!=='undefined')?window.AndroidApp:null;
  if(_app){
    let _av='',_ac={};
    try{_av=String(_app.getVersion()||'');}catch(e){}
    try{_ac=JSON.parse(String(_app.getConfig()||'{}'))||{};}catch(e){}
    const _aon=_ac.notifyOn!==false;
    const _hb=function(h){h=Number(h)||0;return (h<10?'0':'')+h+':00';};
    const _asub=_aon?('通知已开启 · 任务提醒 '+_hb(_ac.quietStart)+'~'+_hb(_ac.quietEnd)+' 免打扰'):'通知已关闭';
    _appCard='<div class="card me-card"><h4>'+ic('shield')+'客户端'+
      (_av?'<span class="tag">v'+esc(_av)+'</span>':'')+'</h4>'+
      '<div class="note" style="margin:0 0 8px">'+esc(_asub)+'</div>'+
      item('update','检查更新','发现新版本会下载并提示安装','Actions.appUpdate')+
    '</div>';
  }

  /* [v9] 入口清单对齐小程序 pages/me：功能 / 通知与推送 / 系统 三组 */
  const _nu=ToastHistory.unread();
  const _notifSub=_nu?(_nu+' 条未读 · 点开查看'):'暂无未读';

  el.innerHTML=
    ucard+
    '<div class="card me-card"><h4>'+ic('switch_account')+'抖音账号'+
      '<span class="tag">'+(accs.length?('共 '+accs.length+' 个'):'')+'</span></h4>'+accList+'</div>'+
    '<div class="card me-card"><h4>'+ic('hub')+'功能</h4>'+
      item('summarize','日报','按抖音号汇总 · 每日 09:00 / 18:00 推送','App.goto','daily')+
      item('group','抓取联系人','读取抖音会话列表 · 加入续火花名单','App.goto','contacts')+
      item('switch_account','账号管理','登录态 · cookie · 扫码 / 短信登录','App.goto','accounts')+
      item('schedule','定时任务','批量续 / 单独续 · 启用停用','App.goto','tasks')+
    '</div>'+
    '<div class="card me-card"><h4>'+ic('notifications')+'通知与推送</h4>'+
      item('notifications','通知中心',_notifSub,'App.goto','notifications')+
      item('send','推送设置','第三方通道 · 微信服务通知','App.goto','push')+
      (admin?item('manage_accounts','面板用户管理','权限与推送通道配置','App.goto','panelusers'):'')+
      item('rule','好友 / 名单一致性检查','对比好友名单与任务目标','Actions.consistencyCheck')+
    '</div>'+
    _appCard+
    '<div class="card me-card"><h4>'+ic('settings')+'系统</h4>'+
      item('monitor_heart','系统状态','浏览器锁 · 运行中的任务 · 下次执行','App.goto','sysstatus')+
      item('lock','修改密码','修改本面板账号的登录密码','Actions.changeMyPwd')+
      item('info','版本','网页端 v9 · 已对齐微信小程序 1.9.3','Actions.copyVersion')+
    '</div>'+
    '<button class="btn btn-danger me-logout" data-click="App.logout">退出登录</button>'+
    '<div class="note" style="text-align:center;margin-top:0">抖音自动化在服务器上运行，手机端只做查看与轻量操作。</div>';

  try{avApply(document.getElementById('meAvatar'),'pu',u,(u||'?').charAt(0));}catch(e){}
};

/* =========================================================================
   [v9] 小程序二级页 1:1 对齐（用户要求：信息架构与小程序一致，UI 保留网页端）
   对应 pages/contacts · pages/push · pages/notifications
        pages/sys-status · pages/friend-detail
   入口统一在「我的」页（#me）；返回键由 _hdrMenuBtn() 里的 #hdrBack 提供。
   ========================================================================= */

/* [v9] 二级页 Action 的暂存容器。
   这里必须用 var（不是 const）—— 它在 const Actions 之前就赋值，
   用 const/let 会撞 TDZ 把整个 IIFE 打断；var 只在 IIFE 内可见，
   最后统一 Object.assign 到 Actions 上（见文件末尾 window.App=App 之后）。 */
var _V9A={};
/* [v12] 安卓客户端专属 Action 的暂存容器（同样必须是 var，原因同上）。 */
var _V12A={};
/* 各渠道「接收地址」字段的口径（与小程序 push.js 的 ADDR_NAME 一致） */
var ADDR_NAME={wxpusher:'UID',wecom:'Webhook',bark:'地址',generic:'地址',clawbot:'（不用填）',serverchan:'（不用填）'};
/* hash 里 "视图:参数" 的参数段（#frienddetail:12345 → '12345'） */
function _hashArg(){var h=(location.hash||'').slice(1);var i=h.indexOf(':');return i>=0?h.slice(i+1):'';}
/* 火花天数 → 徽章（口径对齐网页端好友列表的分级色） */
/* ══════════════════════════════════════════════════════════════════════
   [v13.1] 火花等级**唯一口径**，逐字照抄小程序 utils/format.js 的 sparkLevel()：
       空 / ≤0 天  → 无火花(none)   ≤1 天 → 已断(broken)
       <7 天       → 注意(warn)     ≥7 天 → 正常(ok)
   以前这里有三套实现：概览页 _lvlKey、火花页 _spLevel、好友详情 _fdLevel
   （后者是一套 6 档「待抓取/已断火/危险/注意/正常/稳固/里程碑」，阈值 1/31/101/301/1001，
   和另外两套完全不同）→ 会出现「概览说危险 3 人、火花页说需关注 3 人、详情说危险 2 人」。
   现在三处统一调用下面这两个函数，改口径只需要改这一处。
   ══════════════════════════════════════════════════════════════════════ */
function sparkLevel(days){
  if(days==null||days===''||isNaN(Number(days)))return{k:'none',t:'无火花',c:'b-no'};
  const d=Number(days);
  if(d<=0)return{k:'none',t:'无火花',c:'b-no'};
  if(d<=1)return{k:'broken',t:d+' 天 · 已断',c:'b-no'};
  if(d<7)return{k:'warn',t:d+' 天',c:'b-wait'};
  return{k:'ok',t:d+' 天',c:'b-ok'};
}
/* 「需关注」档 = 无火花 + 已断（概览的「危险」与火花页的「需关注」是同一个集合） */
function sparkRiskKey(days){
  const k=sparkLevel(days).k;
  return (k==='none'||k==='broken')?'risk':k;
}
function _ctSid(c){return String((c&&(c.short_id||c.unique_id||c.douyin_id))||'');}
function _ctName(c){return (c&&(c.title||c.nickname||c.douyin_nickname))||'未知';}
function _ctIsNm(c){return String((c&&c.chat_state)||'')==='non_mutual';}
/* 键值行（系统状态 / 好友详情共用） */
function _kv(k,v,bad){
  return '<div class="row"><span style="flex:none;color:var(--txt3);font-size:12px;min-width:88px">'+esc(k)+'</span>'+
    '<span class="grow" style="font-size:12.5px;word-break:break-all'+(bad?';color:var(--red)':'')+'">'+esc(v)+'</span></div>';
}
/* 小圆标（推送通道行首） */
function _iniDot(txt){
  return '<div style="flex:none;width:34px;height:34px;border-radius:11px;display:grid;place-items:center;font-weight:700;font-size:13px;'+
    'background:rgba(255,122,69,.12);color:#ffb59a;border:1px solid rgba(255,122,69,.3)">'+esc(txt)+'</div>';
}
/* 好友被增删改 / 抓取完成后：按当前所在视图回流（好友详情 → 退回列表），
   不然在新页面里操作完会把结果画到 friends 视图上，当前页看起来「没反应」 */
function _afterFriendMutate(){
  var v=App.current();
  if(v==='frienddetail'){location.hash='#friends';}
  else if(v==='contacts'&&Loaders.contacts){Loaders.contacts();}
  else Loaders.friends();
}
/* [v11] 火花页卡片 → 好友详情页（hash 带参数，见 _hashArg / Loaders.frienddetail） */
_V9A.fdOpen=function(sid){
  sid=String(sid||'');
  if(!sid){toast('这条记录缺少好友标识','','err');return;}
  location.hash='#frienddetail:'+sid;
};
/* [v11] 抓火花进度：只更新抓取卡上的按钮与副标题，不重绘整页 */
function _sparkUi(){
  var busy=!!App.state._sparkBusy;
  var tip=document.getElementById('sparkTip');
  if(tip)tip.textContent=(App.state._sparkMsg||'每天 06:00 自动抓取')+(busy&&App.state._sparkSec?(' · 已用 '+App.state._sparkSec+'s'):'');
  var b=document.getElementById('sparkGrabBtn');
  if(b){
    if(busy){b.disabled=true;b.textContent='抓取中 '+(App.state._sparkSec||0)+'s';}
    else{b.disabled=false;b.textContent='立即抓取';}
  }
  var d=document.querySelector('.grabDot');
  if(d)d.className='grabDot'+(busy?' on':'');
}

/* ============ ① 抓取联系人（pages/contacts） ============ */
Loaders.contacts=async function(){
  loading('contacts','g3');
  try{
    var r=await Promise.all([
      api(App.withAcc('/api/scraped-contacts')).catch(function(){return{contacts:[]};}),
      api(App.withAcc('/api/friends')).catch(function(){return{friends:[]};})
    ]);
    App.state.scrapedContacts=r[0].contacts||[];
    App.state.friends=r[1].friends||[];
  }catch(e){viewError('contacts',e);return;}
  _ctRender();
};
function _ctRender(){
  var el=ensureView('contacts');
  var all=App.state.scrapedContacts||[];
  var nmN=all.filter(_ctIsNm).length;
  var shown=App.state.showNonMutual?all:all.filter(function(c){return !_ctIsNm(c);});
  var ex={};(App.state.friends||[]).forEach(function(f){ex[String(f.short_id||'')]=1;});
  var acc=(App.state.accounts||[]).filter(function(a){return a.unique_id===App.state.currentAccount;})[0];
  var h='';
  /* 抓取入口 */
  h+='<div class="card"><h4>'+MI('group','text-[17px]')+'抓取联系人<span class="tag">读取抖音会话列表</span></h4>'+
     '<div class="note">抓的是账号的<b>抖音聊天列表</b>，不等于好友。里面有互关聊过的人，也可能有从没聊过的空会话。</div>'+
     '<div class="toolbar" style="margin-top:12px">'+
       '<button class="btn btn-primary" data-click="Actions.scrapeContacts" data-pass-this="1">开始抓取'+(acc?(' · '+esc(acc.username||acc.unique_id)):'')+'</button>'+
       (all.length?('<span class="tiny muted">已抓到 '+all.length+' 个会话</span>'):'')+
     '</div></div>';
  /* 非互关开关 */
  if(nmN){
    h+='<div class="card"><div class="row" style="border-bottom:none;padding:2px 0">'+
       '<div class="grow"><div class="t">显示非互关空会话</div>'+
       '<div class="s">有 '+nmN+' 个会话只有系统提示，续不了火花</div></div>'+
       '<button class="btn btn-sm '+(App.state.showNonMutual?'btn-primary':'btn-ghost')+'" data-click="_ct_nm">'+(App.state.showNonMutual?'已显示':'已隐藏')+'</button>'+
       '</div></div>';
  }
  /* 列表 */
  if(!all.length){
    h+='<div class="card"><div class="empty">这里是空的，先点上面的「开始抓取」</div></div>';
  }else if(!shown.length){
    h+='<div class="card"><div class="empty">抓到的会话全是「非互关·从未聊过」的空会话，没有可添加的人</div></div>';
  }else{
    shown.forEach(function(c){
      var sid=_ctSid(c),cname=_ctName(c);
      var did=c.douyin_id||c.unique_id||'';
      var already=!!(sid&&ex[sid]);
      var nonM=_ctIsNm(c);
      var pv=String(c.preview||'').trim();
      h+='<div class="card" style="cursor:pointer'+(nonM?';opacity:.62':'')+'" data-click="Actions.openContact" data-arg="'+esc(sid)+'">'+
        '<div style="display:flex;align-items:center;gap:12px">'+avatarHtml(c.avatar,cname)+
          '<div class="grow" style="min-width:0">'+
            '<div class="t" style="display:flex;align-items:center;gap:6px;flex-wrap:wrap">'+esc(cname)+
            (nonM?'<span class="badge b-gray">非互关·从未聊过</span>':'')+'</div>'+
            '<div class="s mono">'+esc(did||'（无抖音号）')+'</div></div>'+
          '<span class="badge '+(already?'b-ok':'b-info')+'">'+(already?'已添加':'可添加')+'</span>'+
        '</div>'+
        '<div class="tiny muted" style="margin-top:10px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">'+
          '最后一条：'+esc(pv||'（无内容）')+(c.last_time?(' · '+esc(c.last_time)):'')+'</div>'+
      '</div>';
    });
  }
  el.innerHTML=h;
}
function _ct_nm(){App.state.showNonMutual=!App.state.showNonMutual;_ctRender();}

/* ============ ② 推送设置（pages/push） ============ */
Loaders.push=async function(){
  loading('push','g3');
  try{App.state._pushCfg=await api('/api/push-config');}
  catch(e){viewError('push',e);return;}
  _pushRender();
};
function _pushRender(){
  var el=ensureView('push');
  var cfg=App.state._pushCfg||{};
  var list=cfg.channel_list||[];
  var on=list.filter(function(c){return c.enabled!==false;});
  var nowTxt=on.length?on.map(function(c){return c.channel_label||c.channel;}).join(' / '):'未配置 · 当前不会收到任何推送';
  var h='';
  /* 当前到底在用哪条通道 */
  h+='<div class="card"><h4>'+MI('notifications_active','text-[17px]')+'当前推送方式<span class="tag">'+(on.length?(on.length+' 条已启用'):'未配置')+'</span></h4>'+
     '<div class="row" style="border-bottom:none;padding:4px 0"><span class="grow t">'+esc(nowTxt)+'</span></div></div>';
  /* 通道一：微信服务通知（小程序独占） */
  h+='<div class="card"><h4>'+MI('chat','text-[17px]')+'① 微信服务通知<span class="tag">小程序独占</span></h4>'+
     '<div class="note">微信服务通知（订阅消息）只能在微信小程序里授权 —— 需要小程序端调用 <b>requestSubscribeMessage</b>，网页端拿不到授权票据。</div>'+
     '<div class="tiny muted" style="margin-top:8px">要走微信推送：在小程序「我的 → 推送设置」里开启；或改用下面的第三方通道。</div></div>';
  /* 通道二：第三方通道 */
  h+='<div class="card"><h4>'+MI('send','text-[17px]')+'② 第三方通道<span class="tag">'+list.length+' 条</span>'+
     '<button class="btn btn-sm btn-ghost" style="margin-left:auto" data-click="Actions.pushRowAdd">＋ 增加</button></h4>';
  if(!list.length){
    h+='<div class="empty">还没添加通道。不需要可以不加，微信服务通知单独就能用。</div>';
  }else{
    list.forEach(function(c,i){
      var bits=[];
      if(c.has_token)bits.push('密钥 '+c.token_hint);
      if(c.has_webhook)bits.push((ADDR_NAME[c.channel]||'接收地址')+' '+c.webhook_hint);
      if(!bits.length)bits.push('还没填密钥 · 点这行填');
      h+='<div class="row" style="cursor:pointer" data-click="Actions.pushRowEdit" data-arg="'+i+'">'+
        _iniDot(String(c.channel_label||c.channel||'?').trim().charAt(0).toUpperCase())+
        '<div class="grow"><div class="t" style="display:flex;align-items:center;gap:6px;flex-wrap:wrap">'+esc(c.channel_label||c.channel)+
          '<span class="badge '+(c.enabled!==false?'b-ok':'b-gray')+'">'+(c.enabled!==false?'已启用':'已停用')+'</span>'+
          (c.daily?'<span class="badge b-info">日报</span>':'')+'</div>'+
        '<div class="s">'+esc(bits.join(' · '))+'</div></div>'+
        '<span class="material-symbols-outlined" style="color:var(--txt3);font-size:20px">'+msGlyph('chevron_right')+'</span></div>';
    });
  }
  h+='</div>';
  el.innerHTML=h;
}
_V9A.pushSheet=function(){
  var m=document.getElementById('pushEditModal');
  if(m)return m;
  m=document.createElement('div');
  m.id='pushEditModal';
  m.setAttribute('style','display:none;position:fixed;inset:0;background:rgba(0,0,0,.6);z-index:98;align-items:center;justify-content:center;padding:14px');
  m.innerHTML='<div class="card" id="pushEditCard" style="width:min(460px,calc(94vw / var(--ui-scale)));max-height:calc(88vh / var(--ui-scale));overflow:auto;margin:0"></div>';
  m.addEventListener('click',function(e){if(e.target===m)Actions.pushSheetClose();});
  document.body.appendChild(m);
  return m;
};
_V9A.pushSheetClose=function(){var m=document.getElementById('pushEditModal');if(m)m.style.display='none';};
function _pushFormHtml(idx){
  var cfg=App.state._pushCfg||{};
  var list=cfg.channel_list||[];
  var cur=(idx>=0&&idx<list.length)?list[idx]:null;
  var chans=(cfg.channels||[]).filter(function(o){return o.value;});
  var fld='style="flex:1;min-width:0;background:var(--panel2);border:1px solid var(--line);border-radius:8px;padding:8px 10px;color:var(--txt);font-size:13px"';
  var h='<h4>'+MI('send','text-[17px]')+(cur?'编辑通道':'增加第三方通道')+
    '<span class="tag">'+esc(cur?(cur.channel_label||cur.channel):'新建')+'</span></h4>';
  h+='<div class="row" style="border-bottom:none"><span style="flex:none;color:var(--txt3);font-size:12px;width:80px">推送渠道</span>'+
     '<select id="pfChannel" '+fld+' data-change="Actions.pushFormChannel">'+
     chans.map(function(o){return '<option value="'+esc(o.value)+'"'+(cur&&cur.channel===o.value?' selected':'')+'>'+esc(o.label)+'</option>';}).join('')+
     '</select></div>';
  h+='<div class="row" style="border-bottom:none"><span style="flex:none;color:var(--txt3);font-size:12px;width:80px">Token / 密钥</span>'+
     '<input id="pfToken" '+fld+' placeholder="'+esc(cur&&cur.has_token?('已配置：'+(cur.token_hint||'')+'（留空不改）'):'还没配置')+'"></div>';
  h+='<div class="row" style="border-bottom:none"><span id="pfAddrLabel" style="flex:none;color:var(--txt3);font-size:12px;width:80px">'+
     esc(ADDR_NAME[cur?cur.channel:(chans[0]&&chans[0].value)]||'接收地址')+'</span>'+
     '<input id="pfWebhook" '+fld+' placeholder="'+esc(cur&&cur.has_webhook?('已配置：'+(cur.webhook_hint||'')+'（留空不改）'):'还没配置')+'"></div>';
  h+='<div class="row" style="border-bottom:none"><div class="grow"><div class="t">启用这条通道</div></div>'+
     '<input type="checkbox" id="pfEnabled" '+((cur?cur.enabled!==false:true)?'checked':'')+' style="width:18px;height:18px;accent-color:#ff7a45"></div>';
  h+='<div class="row" style="border-bottom:none"><div class="grow"><div class="t">接收每日日报</div></div>'+
     '<input type="checkbox" id="pfDaily" '+((cur?cur.daily!==false:true)?'checked':'')+' style="width:18px;height:18px;accent-color:#ff7a45"></div>';
  h+='<div class="toolbar" style="justify-content:flex-end;margin-top:14px;gap:8px">'+
     '<button class="btn btn-ghost btn-sm" data-click="Actions.pushSheetClose">取消</button>'+
     '<button class="btn btn-primary btn-sm" data-click="Actions.pushRowSave">'+(cur?'保存':'增加')+'</button></div>';
  if(cur){
    h+='<div class="toolbar" style="justify-content:flex-end;margin-top:8px;gap:8px">'+
       '<button class="btn btn-ghost btn-sm" data-click="Actions.pushRowTest">发送测试</button>'+
       '<button class="btn btn-danger btn-sm" data-click="Actions.pushRowDel">删除</button></div>';
  }
  h+='<div class="tiny muted" style="margin-top:12px">密钥只显示前后几位；输入框留空表示不修改已保存的值。</div>';
  return h;
}
_V9A.pushRowAdd=function(){App.state._pushEditIdx=-1;var m=Actions.pushSheet();document.getElementById('pushEditCard').innerHTML=_pushFormHtml(-1);m.style.display='flex';};
_V9A.pushRowEdit=function(i){
  App.state._pushEditIdx=Number(i)||0;
  var m=Actions.pushSheet();document.getElementById('pushEditCard').innerHTML=_pushFormHtml(App.state._pushEditIdx);m.style.display='flex';
};
_V9A.pushFormChannel=function(sel){
  var el=document.getElementById('pfAddrLabel');
  if(el)el.textContent=ADDR_NAME[(sel&&sel.value)||'']||'接收地址';
};
_V9A.pushRowSave=async function(){
  var cfg=App.state._pushCfg||{},list=(cfg.channel_list||[]).slice();
  var idx=(App.state._pushEditIdx==null?-1:App.state._pushEditIdx);
  var editing=idx>=0;
  var sel=document.getElementById('pfChannel');
  var ch=sel?sel.value:'';
  if(!ch){toast('先选一个推送渠道','','err');return;}
  /* 提交口径与小程序 packList 一致：其它通道只回传 id/channel/enabled/daily，
     token/webhook 不回传 → 后端 merge_channel_list 沿用已存的，不会把密钥洗掉 */
  var pack=list.filter(function(_,i){return i!==idx;}).map(function(c){return{id:c.id,channel:c.channel,enabled:!!c.enabled,daily:!!c.daily};});
  var ent={channel:ch,enabled:!!(document.getElementById('pfEnabled')||{}).checked,daily:!!(document.getElementById('pfDaily')||{}).checked};
  if(editing)ent.id=list[idx].id;
  var tk=((document.getElementById('pfToken')||{}).value||'').trim();
  var wh=((document.getElementById('pfWebhook')||{}).value||'').trim();
  if(tk)ent.token=tk;
  if(wh)ent.webhook=wh;
  pack.push(ent);
  try{
    await api('/api/push-config',{method:'PUT',body:{channel_list:pack}});
    toast(editing?'已保存':'已增加','','ok');
    Actions.pushSheetClose();
    Loaders.push();
  }catch(e){toast('保存失败',e.message,'err');}
};
_V9A.pushRowDel=async function(){
  var cfg=App.state._pushCfg||{},list=(cfg.channel_list||[]).slice();
  var idx=(App.state._pushEditIdx==null?-1:App.state._pushEditIdx);
  if(idx<0||!list[idx])return;
  var c=list[idx];
  if(!confirm('删除「'+(c.channel_label||c.channel)+'」？\n\n· 服务器上这条通道存的密钥一并清空\n· 其它通道、微信服务通知都不受影响'))return;
  var pack=list.filter(function(_,i){return i!==idx;}).map(function(x){return{id:x.id,channel:x.channel,enabled:!!x.enabled,daily:!!x.daily};});
  try{
    await api('/api/push-config',{method:'PUT',body:{channel_list:pack}});
    toast('已删除','','ok');
    Actions.pushSheetClose();
    Loaders.push();
  }catch(e){toast('删除失败',e.message,'err');}
};
_V9A.pushRowTest=async function(){
  var cfg=App.state._pushCfg||{},list=cfg.channel_list||[];
  var idx=(App.state._pushEditIdx==null?-1:App.state._pushEditIdx);
  if(idx<0||!list[idx]){toast('先保存这条通道，再发送测试','','err');return;}
  try{
    var r=await api('/api/push-config/test',{method:'POST',body:{id:list[idx].id}});
    if(r&&r.ok===false)throw new Error(r.error||'发送失败');
    toast('测试消息已发送','收到即通道正常','ok');
  }catch(e){toast('发送失败',e.message,'err');}
};

/* ============ ③ 通知中心（pages/notifications） ============ */
Loaders.notifications=async function(){
  loading('notifications','g3');
  try{var r=await api('/api/notifications');App.state._notifList=r.notifications||[];}
  catch(e){viewError('notifications',e);return;}
  _ntRender();
};
function _ntMs(t){return ToastHistory._ms(t);}
function _ntIsNew(n){return _ntMs(n.t)>ToastHistory.seen();}
function _ntBad(n){var y=String(n.type||'');return y==='err'||y==='error'||y==='fail';}
function _ntRender(){
  var el=ensureView('notifications');
  var all=(App.state._notifList||[]).slice().sort(function(a,b){return (_ntMs(b.t)||0)-(_ntMs(a.t)||0);});
  var f=App.state._notifFilter||'all';
  var nNew=all.filter(_ntIsNew).length,nBad=all.filter(_ntBad).length;
  var shown=all.filter(function(n){
    if(f==='new')return _ntIsNew(n);
    if(f==='bad')return _ntBad(n);
    if(f==='ok')return !_ntBad(n);
    return true;
  });
  var h='<div class="card">';
  h+='<h4>'+MI('notifications','text-[17px]')+'通知中心<span class="tag">共 '+all.length+' 条</span></h4>';
  h+='<div class="toolbar" style="gap:14px">'+
     '<span class="tiny muted">共 '+all.length+' 条</span>'+
     '<span class="tiny" style="color:'+(nNew?'#ffb59a':'var(--txt3)')+'">未读 '+nNew+'</span>'+
     '<span class="tiny" style="color:'+(nBad?'var(--red)':'var(--txt3)')+'">异常 '+nBad+'</span>'+
     '<span class="toolbar" style="margin-left:auto;gap:8px">'+
       '<button class="btn btn-ghost btn-sm" data-click="Actions.notifReadAll">全部已读</button>'+
       '<button class="btn btn-danger btn-sm" data-click="Actions.notifClear">清空</button>'+
     '</span></div>';
  h+='<div class="toolbar" style="margin-top:12px">'+[['all','全部'],['new','仅未读'],['bad','仅异常'],['ok','仅成功']].map(function(c){
    return '<button class="btn btn-sm '+(f===c[0]?'btn-primary':'btn-ghost')+'" data-click="Actions.notifFilter" data-arg="'+c[0]+'">'+c[1]+'</button>';
  }).join('')+'</div>';
  h+='<div class="tiny muted" style="margin-top:10px">点任意一条可查看完整内容（长文不再被截断）。</div>';
  h+='</div>';
  if(!shown.length){
    h+='<div class="card"><div class="empty">'+(f==='new'?'没有未读通知':'没有通知')+'</div></div>';
  }else{
    shown.forEach(function(n,i){
      var bad=_ntBad(n);
      var one=String(n.msg||'').replace(/\s+/g,' ');
      h+='<div class="card" style="cursor:pointer;padding:14px 16px'+(_ntIsNew(n)?';border-color:rgba(255,122,69,.42)':'')+'" data-click="Actions.notifOpen" data-arg="'+i+'">'+
        '<div style="display:flex;align-items:flex-start;gap:8px">'+
          (_ntIsNew(n)?'<span style="flex:none;width:7px;height:7px;border-radius:50%;background:#ff7a45;margin-top:6px"></span>':'')+
          '<div class="grow" style="min-width:0">'+
            '<div class="t" style="display:flex;align-items:center;gap:6px;flex-wrap:wrap">'+esc(n.title||'通知')+
            '<span class="badge '+(bad?'b-no':(n.type==='ok'?'b-ok':'b-gray'))+'">'+(bad?'异常':(n.type==='ok'?'成功':'信息'))+'</span></div>'+
            '<div class="s" style="margin-top:5px;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden">'+esc(one.slice(0,90))+'</div>'+
            '<div class="tiny muted" style="margin-top:6px">'+esc(ToastHistory._when(_ntMs(n.t),true))+
              (n.account_uid?(' · 账号 '+esc(n.account_uid)):'')+'</div>'+
          '</div></div></div>';
    });
  }
  el.innerHTML=h;
  App.state._notifShown=shown;
}
_V9A.notifFilter=function(f){App.state._notifFilter=f||'all';_ntRender();};
_V9A.notifReadAll=function(){
  var all=App.state._notifList||[];
  var mx=all.reduce(function(a,n){return Math.max(a,_ntMs(n.t)||0);},Date.now());
  try{localStorage.setItem('toast_seen',String(mx));}catch(e){}
  ToastHistory.updateBadge();
  toast('已全部标记为已读','','ok');
  _ntRender();
};
_V9A.notifClear=async function(){
  var n=(App.state._notifList||[]).length;
  if(!confirm('清空通知中心？\n\n将删除服务器上全部 '+n+' 条通知记录，不可恢复。'))return;
  try{
    await api('/api/notifications/clear',{method:'POST',body:{}});
    try{localStorage.removeItem('toast_history');localStorage.setItem('toast_seen',String(Date.now()));}catch(e){}
    ToastHistory.notifs=[];ToastHistory.updateBadge();
    toast('已清空','通知记录已清除','ok');
    Loaders.notifications();
  }catch(e){toast('清空失败',e.message,'err');}
};
_V9A.notifOpen=function(i){
  var x=(App.state._notifShown||[])[Number(i)||0];
  if(!x)return;
  var m=document.getElementById('ntDetailModal');
  if(!m){
    m=document.createElement('div');
    m.id='ntDetailModal';
    m.setAttribute('style','display:none;position:fixed;inset:0;background:rgba(0,0,0,.66);z-index:98;align-items:center;justify-content:center;padding:14px');
    m.innerHTML='<div class="card" id="ntDetailCard" style="width:min(560px,calc(94vw / var(--ui-scale)));max-height:calc(86vh / var(--ui-scale));overflow:auto;margin:0"></div>';
    m.addEventListener('click',function(e){if(e.target===m){m.style.display='none';}});
    document.body.appendChild(m);
  }
  var bad=_ntBad(x);
  var h='<h4>'+MI('notifications','text-[17px]')+esc(x.title||'通知')+
    '<span class="tag">'+esc(bad?'异常':(x.type==='ok'?'成功':'信息'))+'</span></h4>';
  h+='<div class="tiny muted" style="margin:-6px 0 12px">'+esc(ToastHistory._when(_ntMs(x.t),true))+
     (x.account_uid?(' · 账号 '+esc(x.account_uid)):'')+'</div>';
  h+='<div class="mono" style="font-size:12.5px;line-height:1.7;white-space:pre-wrap;word-break:break-word;'+
     'background:var(--bg2);border:1px solid var(--line);border-radius:10px;padding:12px;max-height:52vh;overflow:auto">'+
     esc(x.msg||'（无内容）')+'</div>';
  h+='<div class="toolbar" style="justify-content:flex-end;margin-top:14px;gap:8px">'+
     '<button class="btn btn-ghost btn-sm" data-click="Actions.ntCopy" data-arg="'+esc(x.title||'')+'">复制全文</button>'+
     '<button class="btn btn-primary btn-sm" data-click="Actions.ntClose">关闭</button></div>';
  document.getElementById('ntDetailCard').innerHTML=h;
  m.style.display='flex';
  App.state._ntCur=x;
};
_V9A.ntClose=function(){var m=document.getElementById('ntDetailModal');if(m)m.style.display='none';};
_V9A.ntCopy=function(){
  var x=App.state._ntCur||{};
  var txt=(x.title||'')+'\n'+ToastHistory._when(_ntMs(x.t),true)+'\n\n'+(x.msg||'');
  try{
    navigator.clipboard.writeText(txt).then(function(){toast('已复制','','ok');},function(){toast('复制失败','请长按手动复制','err');});
  }catch(e){toast('复制失败','请长按手动复制','err');}
};

/* ============ ④ 系统状态（pages/sys-status） ============ */
Loaders.sysstatus=async function(){
  loading('sysstatus','g3');
  try{App.state.status=await api('/api/status');}
  catch(e){viewError('sysstatus',e);return;}
  _sysRender();
};
function _sysRender(){
  var el=ensureView('sysstatus');
  var st=App.state.status||{};
  var r=st.running||{};
  var lk=st.lock||{};
  var alive=!!st.now;
  var h='';
  /* 面板服务 */
  h+='<div class="card"><h4>'+MI('dns','text-[17px]')+'面板服务<span class="tag">'+(alive?'正常':'拿不到状态')+'</span></h4>'+
     _kv('服务器时间',st.now||'—')+
     _kv('磁盘',st.disk||'—')+
     _kv('访问令牌',st.token_set?'已设置':'未设置',!st.token_set)+'</div>';
  /* 浏览器锁 */
  var lockTag=lk.held?('占用 · '+String(lk.owner||'')):(lk.stale?'残留记录':'空闲');
  h+='<div class="card"><h4>'+MI('lock','text-[17px]')+'浏览器锁<span class="tag">'+esc(lockTag)+'</span></h4>';
  if(lk.held){
    h+=_kv('占用者',lk.owner||'—')+_kv('已占用',lk.age_str||'—')+
       _kv('自动保护剩余',lk.remain_str||'—',(lk.remain!=null&&Number(lk.remain)<=0));
    h+='<div class="note" style="margin-top:10px">占用期间其它自动化任务只能排队等待；超过保护时间未释放会自我保护退出。</div>';
  }else if(lk.stale){
    h+=_kv('残留记录',lk.owner||'—');
    h+='<div class="note" style="margin-top:10px">持有者进程已退出，锁实际已释放，只是锁文件里留了旧记录，不影响新任务启动。</div>';
  }else{
    h+='<div class="empty">当前没有任务占用浏览器，自动化可以随时启动。</div>';
  }
  h+='</div>';
  /* 正在运行 */
  var runRows=[['main','批量续火花'],['custom','定时任务（单独续）']];
  var anyRun=!!((r.main&&r.main.running)||(r.custom&&r.custom.running));
  h+='<div class="card"><h4>'+MI('play_circle','text-[17px]')+'正在运行<span class="tag">'+(anyRun?'有任务在跑':'全部空闲')+'</span></h4>';
  runRows.forEach(function(x){
    var o=r[x[0]]||{},s=o.state||{};
    var sub=s.target?('目标 '+s.target+(s.target_name?(' · '+s.target_name):'')):(s.started_at?('开始于 '+s.started_at):'—');
    h+='<div class="row"><div class="grow"><div class="t">'+x[1]+'</div><div class="s">'+esc(sub)+'</div></div>'+
      (o.running?'<button class="btn btn-danger btn-sm" data-click="Actions.sysStop" data-arg="'+x[0]+'">停止</button>'
                :'<span class="tiny muted">空闲</span>')+
      '</div>';
  });
  h+='</div>';
  /* 下次自动执行 */
  if(st.next){
    h+='<div class="card"><h4>'+MI('schedule','text-[17px]')+'下次自动执行<span class="tag">服务器时区</span></h4>'+
       _kv('批量续火花',st.next.main||'—')+_kv('定时任务',st.next.custom||'—')+
       (st.next.custom_window?_kv('执行时间窗',st.next.custom_window):'')+'</div>';
  }
  /* crontab（仅管理员） */
  if(App.state.isAdmin&&st.crontab){
    h+='<div class="card"><h4>'+MI('terminal','text-[17px]')+'系统 crontab<span class="tag">管理员可见</span></h4>'+
       '<div class="mono tiny" style="white-space:pre-wrap;background:var(--bg2);border:1px solid var(--line);border-radius:10px;padding:12px;max-height:300px;overflow:auto">'+esc(st.crontab)+'</div></div>';
  }
  h+='<div class="tiny muted" style="text-align:center;margin:4px 0 8px">点右上角刷新可重新拉取</div>';
  el.innerHTML=h;
}
_V9A.sysStop=async function(task){
  var label=task==='main'?'批量续火花':'定时任务';
  if(!confirm('将终止「'+label+'」的整个进程树，正在发送的那一位可能只发了一半。\n\n停止'+label+'？'))return;
  try{
    var r=await api('/api/run/stop?task='+encodeURIComponent(task)+'&account='+encodeURIComponent(App.state.currentAccount||''),{method:'POST'});
    if(r&&r.ok===false)throw new Error(r.error||'停止失败');
    toast('已停止',label,'ok');
    Loaders.sysstatus();
  }catch(e){toast('停止失败',e.message,'err');}
};

/* 「我的」页入口：好友 / 名单一致性检查（对应小程序 me 页的 checkConsistency） */
_V9A.consistencyCheck=async function(btn){
  var done=_busy(btn);
  toast('正在检查','对比好友名单与任务目标…');
  try{
    var r=await api('/api/consistency-check');
    var iss=r.issues||[];
    if(r.ok&&!iss.length){
      toast('一致性检查通过','好友 '+r.friend_count+' 位 · 目标 '+r.target_count+' 个，无异常','ok');
    }else{
      var lines=iss.slice(0,8).map(function(x){
        if(typeof x==='string')return x;
        return [x.type||x.kind||'',x.name||x.target||x.short_id||'',x.detail||x.msg||''].join(' ').trim();
      }).join('\n');
      alert('发现 '+iss.length+' 项不一致：\n\n'+lines+(iss.length>8?'\n…（还有 '+(iss.length-8)+' 项）':''));
      toast('发现 '+iss.length+' 项不一致','详见弹窗','err');
    }
  }catch(e){toast('检查失败',e.message,'err');}
  finally{done();}
};
/* 「我的」页入口：版本（点击复制，与小程序 me 页的 copyVersion 对齐） */
_V9A.copyVersion=function(){
  var v='网页端 v9 · 已对齐微信小程序 1.9.3';
  try{
    navigator.clipboard.writeText(v).then(
      function(){toast('已复制',v,'ok');},
      function(){toast('版本',v,'ok');});
  }catch(e){toast('版本',v,'ok');}
};
/* ============ [v12] 安卓客户端专属动作（只在 App 内可用） ============ */
function _appBridge(){
  try{return (typeof window!=='undefined'&&window.AndroidApp)?window.AndroidApp:null;}catch(e){return null;}
}
_V12A.appUpdate=function(){
  var a=_appBridge();
  if(!a){toast('仅客户端可用','请在「火花守护」App 里打开','err');return;}
  try{a.checkUpdate();}catch(e){toast('检查失败',String(e.message||e),'err');}
};

/* 顶栏铃铛：窄屏进「通知中心」页（与小程序一致），桌面端保留原有居中弹窗 */
_V9A.bellClick=function(){
  if(window.innerWidth<=767){location.hash='#notifications';return;}
  ToastHistory.show();
};

/* ============ ⑤ 好友详情（pages/friend-detail） ============ */
Loaders.frienddetail=async function(){
  var sid=_hashArg();
  if(!sid){location.hash='#friends';return;}
  loading('frienddetail','g3');
  var f=null;
  try{
    var d=await api(App.withAcc('/api/friends'));
    f=(d.friends||[]).filter(function(x){return String(x.short_id)===String(sid);})[0];
  }catch(e){viewError('frienddetail',e);return;}
  if(!f){
    ensureView('frienddetail').innerHTML='<div class="card"><div class="empty">没找到这位好友，可能已被移出名单<br><br>'+
      '<button class="btn btn-ghost btn-sm" data-click="App.goto" data-arg="friends">返回好友列表</button></div></div>';
    return;
  }
  App.state._fdFriend=f;
  App.state.fdName=friendName(f);
  try{var tb=document.getElementById('topbar');if(tb&&App.current()==='frienddetail'){tb.innerHTML=HDR('frienddetail');fixStaticIcons(tb);}}catch(e){}
  _fdRender();
};
function _fdRender(){
  var el=ensureView('frienddetail');
  var f=App.state._fdFriend||{};
  var has=f.spark_days!=null;
  var lv=sparkLevel(f.spark_days);   /* [v13.1] 与列表/概览同一套口径 */
  var did=f.douyin_id||f.unique_id||'';
  var accts=(f.account_uids||[]).join('、')||'—';
  var nm=friendName(f);
  var h='';
  /* 头部 */
  h+='<div class="card" style="text-align:center">'+
     '<div style="display:inline-block;margin-bottom:10px">'+avatarHtml(f.avatar,nm)+'</div>'+
     '<div class="t" style="font-size:16px">'+esc(nm)+'</div>'+
     '<div class="s mono" style="margin-top:2px">'+esc(did||'（无抖音号）')+'</div>'+
     '<div style="margin:12px 0 6px"><span style="font-size:30px;font-weight:800;color:#ff7a45">'+(has?Number(f.spark_days):'—')+'</span>'+
       '<span class="tiny muted" style="margin-left:4px">天火花</span></div>'+
     '<div class="toolbar" style="justify-content:center;gap:6px;flex-wrap:wrap">'+
       '<span class="badge '+lv.c+'">'+lv.t+'</span>'+
       '<span class="badge '+(f.today_sent?'b-ok':'b-gray')+'">'+(f.today_sent?'今日已发':'今日未发')+'</span>'+
       (f.fresh?'':'<span class="badge b-wait">数据不是今天的</span>')+
       (String(f.status||'')==='paused'?'<span class="badge b-gray">已停用守护</span>':'')+
     '</div></div>';
  /* 详细信息 */
  h+='<div class="card"><h4>'+MI('badge','text-[17px]')+'详细信息</h4>'+
     _kv('备注名',f.remark||'（空）')+
     _kv('所属账号',accts)+
     _kv('加入名单',f.added_at||'—')+
     _kv('火花数据',(f.fresh?'今日已同步':'数据陈旧')+(f.cache_ts?(' · '+ToastHistory._when(_ntMs(f.cache_ts))): ''))+
     _kv('最近消息',f.last_msg_time||'—')+
     (f.last_content?('<div class="row" style="align-items:flex-start"><span style="flex:none;color:var(--txt3);font-size:12px;min-width:88px">最后一条</span>'+
       '<span class="grow" style="font-size:12.5px;white-space:pre-wrap;word-break:break-word">'+esc(f.last_content)+'</span></div>'):'')+
     '</div>';
  /* 操作 */
  h+='<div class="card"><h4>'+MI('bolt','text-[17px]')+'操作</h4>'+
     '<button class="btn btn-primary" style="width:100%" data-click="Actions.run" data-args="custom|'+esc(f.short_id)+'|false" data-pass-this="1">立即单独续一次</button>'+
     '<div class="toolbar" style="margin-top:10px;gap:8px">'+
       '<button class="btn btn-ghost btn-sm" data-click="Actions.editRemark" data-args="'+esc(f.short_id)+'|'+esc(nm).replace(/"/g,'')+'|'+esc(f.remark||'')+'">改备注</button>'+
       (did?'<button class="btn btn-ghost btn-sm" data-click="Actions.copyText" data-args="'+esc(did)+'" data-pass-this="1">复制抖音号</button>':'')+
     '</div>'+
     '<button class="btn btn-danger" style="width:100%;margin-top:10px" data-click="Actions.removeFriend" data-args="'+esc(f.short_id)+'|'+esc(nm).replace(/"/g,'')+'">移出续火花名单</button>'+
     '</div>';
  el.innerHTML=h;
}

document.getElementById('loginForm').addEventListener('submit',e=>{e.preventDefault();App.login();});
document.getElementById('nav').addEventListener('click',e=>{const a=e.target.closest('a[data-view]');if(a)location.hash='#'+a.dataset.view;});
window.addEventListener('hashchange',()=>App.route());
document.addEventListener('keydown',e=>{if(e.key==='Escape'){const m=document.querySelector('[style*="z-index:9999"]');if(m)m.remove();}});
function tick(){const c=document.getElementById('clock');if(!c)return;const d=new Date(),p=x=>String(x).padStart(2,'0');c.textContent=`${p(d.getHours())}:${p(d.getMinutes())}:${p(d.getSeconds())}`;}
setInterval(tick,1000);tick();
if(localStorage.getItem('panel_token')||document.cookie.includes('panel_token=')){const _al=document.createElement('div');_al.style.cssText='position:fixed;inset:0;display:flex;align-items:center;justify-content:center;background:var(--bg);z-index:9999';_al.id='bootMask';_al.innerHTML='<div class="sp"></div><span style="margin-left:12px;color:var(--txt3);font-size:14px">正在验证登录…</span>';document.body.appendChild(_al);
  const pu=localStorage.getItem('panel_user');
  if(pu){try{const ud=JSON.parse(pu);App.state.isAdmin=ud.is_admin;App.state.loginUser=ud.username;document.getElementById('sbName').textContent=ud.username;avApply(document.getElementById('sbAvatar'),'pu',ud.username,(ud.username||'?').charAt(0));}catch(e){}}
  setTimeout(()=>{const _bm3=document.getElementById('bootMask');if(_bm3)_bm3.remove();},10000);fetch('/api/status',{headers:{'X-Panel-Token':localStorage.getItem('panel_token')}}).then(r=>{
    if(!r.ok){localStorage.removeItem('panel_token');localStorage.removeItem('panel_user');const _bm2=document.getElementById('bootMask');if(_bm2)_bm2.remove();App.showLogin('登录已失效，请重新登录');return;}
    const _bm=document.getElementById('bootMask');if(_bm)_bm.remove();document.getElementById('login').style.display='none';
    document.getElementById('app').classList.add('on');
    App.resetAccountUI();
    api('/api/accounts?live=0').then(ar=>{App.state.accounts=ar.accounts||[];App.state.accountsReady=true;
      if(App.state.accounts.length){
        const saved=localStorage.getItem('current_account');
        App.state.currentAccount=(saved&&App.state.accounts.find(a=>a.unique_id===saved))?.unique_id||App.state.accounts[0]?.unique_id||null;
        document.getElementById('accSwitch').style.display='flex';
        App.updateAccSwitcher();App.updateSidebar();
        if(App.state.isAdmin)document.getElementById('navPanelUsers').style.display='';
        // [修复20260924] 账号上下文就绪后补一次重渲染：首屏 route() 跑在
        // /api/accounts 返回之前，此时 currentAccount 还是 null，withAcc() 会退化成
        // 「不带 account 查询」——实测冷加载直接落在 #friends 时，「抓取到的联系人」
        // 卡片会偶发不出现、好友列表也不按账号过滤。清掉可能被污染的联系人缓存后重渲染。
        App.state.scrapedContacts=null;
        App.route();
        App.refreshAccountStatus();   // [新增20261002] 登录状态后台补
      }else{
        /* [v6.15 回退] 无绑定账号（或账号被收回）：右上角是「切换抖音账号」，没有可切的号 → 收起入口 */
        const _sw=document.getElementById('accSwitch');if(_sw)_sw.style.display='none';
        App.state.scrapedContacts=null;
        App.updateAccSwitcher();App.updateSidebar();
        if(App.state.isAdmin)document.getElementById('navPanelUsers').style.display='';
        // [修复20261002] 无账号也必须重渲染一次：否则这一页永远停在
        // route() 早退时写的「正在加载账号…」，用户以为卡死了。
        App.route();
      }
    }).catch(()=>{App.state.accountsReady=true;App.route();});
    /* [20261014b] 拉一次面板用户列表填充「落库头像」映射。必须在这里补：
       侧栏头像（avApply）不经过 #panelusers 视图，而小程序设的头像只存在于
       服务端，不预拉一次的话侧栏会显示浏览器本地的旧选择。 */
    api('/api/panel-users').then(function(pr){
      const _us=pr.users||[];
      App.state.puAvatar={};
      _us.forEach(function(u){if(u&&u.username&&u.avatar)App.state.puAvatar[u.username]='/'+u.avatar;});
      App.updateSidebar();
    }).catch(function(){});
    if(!location.hash||location.hash==='#')location.hash='#overview';
    App.route(true);
  }).catch(()=>{const _bm4=document.getElementById('bootMask');if(_bm4)_bm4.remove();App.showLogin('连接失败，请重试');});
}
/*================ 视图容器 ================*/
function ensureView(v){
  let el=document.getElementById('view-'+v);
  if(!el){el=document.createElement('div');el.id='view-'+v;el.className='view';document.getElementById('content').appendChild(el);}
  el.classList.toggle('on', App.current()===v);
  return el;
}
function loading(v,cols){
  const el=ensureView(v);
  /* [v3 性能修复 20261011] 轮询刷新时不要再把内容清空成骨架屏。
     起因：「任务与日志」页在有任务运行时每 5s 轮询一次（App.setRunPill 启动），
     原实现在每次轮询开头都 innerHTML=骨架屏 → 整页「白一下」再重绘。
     服务器本机只有 60~90ms，但公网（实测 ~3Mbps）下这个白屏窗口会拉长到 0.4~0.6s，
     观感就是「这页一直在加载、时间很长」；同时日志面板的滚动位置每次被重置到底部，
     表格与按钮被整体重建（正在点的按钮会消失）。
     现改为：视图里已经有真实内容时静默刷新 —— 保留旧内容直到新数据渲染完成，
     只有「首次进入该页」才显示骨架屏。 */
  if(el.innerHTML&&!el.querySelector('.skel'))return el;
  el.innerHTML='<div class="card"><div class="skel" style="width:40%;margin-bottom:16px"></div>'+
    '<div class="grid '+(cols||'g4')+'">'+Array.from({length:4},()=>'<div class="skel" style="height:88px"></div>').join('')+'</div></div>';
  return el;
}
function viewError(v,e){console.error('ViewError['+v+']:',e);ensureView(v).innerHTML='<div class="card"><div class="empty">加载失败：'+esc(e.message)+'<br><br><pre style="text-align:left;font-size:12px;color:#999;max-height:200px;overflow:auto">'+esc(e.stack||e.toString()||'')+'</pre><br><button class="btn btn-ghost btn-sm" data-click="App.refresh">重试</button></div></div>';}

/*================ 总览 ================*/
/*================ 总览（Stitch 01 稿 1:1 还原） ================*/
Loaders.overview=async function(){
  loading('overview','g4');
  try{
    const _t0=(window.performance&&performance.now)?performance.now():Date.now();
    /* [v10] 严格对齐小程序 pages/overview：概览只保留
       ① 今日发送 ② 火花总览 ③ 好友火花 ④ 快捷入口（账号条由顶栏芯片承担）。
       原来那 4 张 KPI 卡 / 一致性告警 / 任务状态 / 最近执行台账 全部移出概览
       —— 它们本来就是「任务」「记录」页的内容，小程序概览页没有。
       /api/status 与 /api/schedule 仍然要拉：侧栏「下次执行 / 磁盘」走 updateSideStats，
       v9 的「系统状态」页也读 App.state._schedTasks。 */
    const [o,st,sc]=await Promise.all([
      api(App.withAcc('/api/overview')),
      api('/api/status'),
      api(App.withAcc('/api/schedule')).catch(()=>({schedule:{tasks:[]}}))
    ]);
    const _apiMs=Math.max(1,Math.round(((window.performance&&performance.now)?performance.now():Date.now())-_t0));
    App.state.overview=o;App.state.status=st;
    App.state._schedTasks=(sc&&sc.schedule&&sc.schedule.tasks)||[];
    App.setRunPill();
    const _tg=App.currentTargets();
    if(_tg){o.friends=o.friends.filter(f=>_tg.has(f.short_id));o.friend_count=o.friends.length;}

    /* ---------- 统计（口径 = 小程序 pages/overview/overview.js） ---------- */
    const withDays=o.friends.filter(f=>f.spark_days!=null);
    const maxDays=withDays.length?Math.max.apply(null,withDays.map(f=>f.spark_days)):0;
    const minDays=withDays.length?Math.min.apply(null,withDays.map(f=>f.spark_days)):0;
    let _nOk=0,_nWarn=0,_nDanger=0,_nStale=0,_nSent=0,_nPend=0;
    o.friends.forEach(f=>{
      const k=sparkRiskKey(f.spark_days);   /* 与火花页/详情页同一套口径 */
      if(k==='ok')_nOk++;else if(k==='warn')_nWarn++;else _nDanger++;
      if(!f.fresh)_nStale++;
      if(f.today_sent)_nSent++;else _nPend++;
    });
    /* 今日发送 + 最近一次执行：单独续 / 批量续里取更新的那条 */
    const _c=o.custom||{},_m=o.main||{};
    const todaySent=!!_c.sent_today||!!_m.sent_today;
    const _cands=[];if(_c.recent)_cands.push(_c.recent);if(_m.recent)_cands.push(_m.recent);
    const _tsv=x=>{const d=new Date(String((x&&x.ts)||'').replace(/-/g,'/'));return isNaN(d.getTime())?0:d.getTime();};
    _cands.sort((a,b)=>_tsv(b)-_tsv(a));
    const recent=_cands[0]||null;
    const _recLine=recent
      ? ('最近：'+esc(recent.task==='custom'?'单独续':'批量续')+' · '+esc(String(recent.ts||'').slice(5,16))+
         (recent.success===false?' <span class="text-error">· 失败</span>':' <span class="text-tertiary">· 成功</span>'))
      : '暂无执行记录';

    /* ---------- 卡片骨架（复用网页端既有的 Stitch 卡样式） ---------- */
    const _CARD=inner=>'<div class="bg-surface-container-low border border-surface-container-high rounded-[14px] overflow-hidden">'+inner+'</div>';
    const _HEAD=(icon,title,right)=>'<div class="flex items-center justify-between gap-3 px-5 py-4 border-b border-surface-container-high">'+
      '<div class="flex items-center gap-3 min-w-0">'+MI(icon,'text-[19px] text-primary-container',1)+
      '<h3 class="text-headline-md font-headline-md font-semibold text-on-surface shrink-0">'+esc(title)+'</h3></div>'+
      '<div class="shrink-0">'+(right||'')+'</div></div>';
    const _kpi=(n,l,risk)=>'<div class="rounded-xl bg-surface-container border border-surface-container-high/60 px-3 py-2.5 text-center">'+
      '<div class="text-mono-metric-md font-mono-metric-md font-bold '+(risk?'text-error':'text-on-surface')+'">'+n+'</div>'+
      '<div class="text-body-sm font-body-sm text-outline mt-0.5">'+l+'</div></div>';

    let html='<section class="grid grid-cols-1 lg:grid-cols-2 gap-5">';

    /* ---------- 1) 今日发送 ----------
       [v12.6] App 内隐藏（手机屏幕太窄，这块会把下面的火花总览顶得很远）。
       网页端保留 —— 用 window.AndroidApp 桥判断，浏览器不受影响。 */
    const _isApp=(typeof window!=='undefined'&&window.AndroidApp)?true:false;
    if(!_isApp)html+=_CARD(_HEAD('send','今日发送','<span class="text-body-sm font-body-sm text-outline font-mono-code-sm">'+esc(o.date||'')+'</span>')+
      '<div class="px-5 py-4">'+
        '<div class="rounded-xl border px-4 py-3.5 flex items-center gap-3.5 '+
          (todaySent?'bg-[rgba(74,225,118,.10)] border-[rgba(74,225,118,.28)]':'bg-surface-container border-surface-container-high')+'">'+
          '<div class="text-[28px] leading-none shrink-0">'+(todaySent?'✅':'⏳')+'</div>'+
          '<div class="min-w-0">'+
            '<div class="text-body-md font-body-md font-semibold '+(todaySent?'text-tertiary':'text-on-surface')+'">'+(todaySent?'今日已完成发送':'今天还没有发送记录')+'</div>'+
            '<div class="text-body-sm font-body-sm text-outline mt-0.5 truncate">'+_recLine+'</div>'+
          '</div>'+
        '</div>'+
      '</div>');

    /* ---------- 2) 火花总览 ---------- */
    let _chips='';
    const _chip=(cls,txt)=>'<span class="badge '+cls+'">'+txt+'</span>';
    if(_nDanger)_chips+=_chip('b-no','危险 '+_nDanger);
    if(_nWarn)_chips+=_chip('b-wait','注意 '+_nWarn);
    if(_nOk)_chips+=_chip('b-gray','正常 '+_nOk);
    if(_nSent)_chips+=_chip('b-gray','今日已续 '+_nSent);
    if(_nPend)_chips+=_chip('b-wait','今日未续 '+_nPend);
    if(_nStale)_chips+=_chip('b-gray','数据陈旧 '+_nStale);
    html+=_CARD(_HEAD('local_fire_department','火花总览','<span class="text-body-sm font-body-sm text-outline">'+o.friends.length+' 位好友</span>')+
      '<div class="px-5 py-4 flex flex-col gap-3.5">'+
        '<div class="grid grid-cols-3 gap-3">'+
          _kpi(maxDays,'最高天数')+_kpi(minDays,'最低天数')+_kpi(_nDanger,'需关注',_nDanger>0)+
        '</div>'+
        (_chips?'<div class="flex flex-wrap gap-2">'+_chips+'</div>':'')+
      '</div>');
    html+='</section>';

    /* ---------- 3) 好友火花（表头对齐小程序；行样式保留网页端） ---------- */
    const _hot=withDays.slice().sort((a,b)=>b.spark_days-a.spark_days);
    /* 火花里程碑文案 */
    const MILE=[30,100,200,300,520,666,888,1000,1314,1666,2000,3000];
    const lvOf=d=>{const v=Number(d);
      if(d==null||isNaN(v))return{t:'待抓取',c:'text-outline'};
      if(v<1)return{t:'已断火',c:'text-error'};
      const nx=MILE.find(m=>m>v);
      const c=v>=300?'text-secondary':v>=101?'text-primary-container':v>=31?'text-[#f59e0b]':v>=1?'text-[#d97706]':'text-error';
      return{t:nx?('距 '+nx+' 天 · 剩 '+(nx-v)+' 天'):'已达 3000 天',c:c};};
    const _maxN=Math.max(1,maxDays);
    const _mileTicks=(function(){var o2='',last=-9;
      MILE.forEach(function(m){var p=m/_maxN*100;
        if(p>=100||p-last<2.5)return;last=p;
        o2+='<i class="mile-tick" style="left:'+p.toFixed(1)+'%"></i>';});
      return o2;})();
    const barCls=(n,risk)=>{n=Number(n)||0;
      if(risk)return 'bg-error';
      if(n>=300)return 'bg-[linear-gradient(90deg,#823301,#ff7a45)]';
      if(n>=101)return 'bg-[linear-gradient(90deg,#d97706,#ff9d47)]';
      if(n>=31)return 'bg-[#f59e0b]';
      if(n>=1)return 'bg-[#d97706]';
      return 'bg-surface-container-highest';};
    const statusCls=k=>k==='sent'?['text-tertiary bg-tertiary-container/15 border-tertiary-container/30','bg-tertiary']
      :k==='risk'?['text-error bg-error-container/30 border-error/40','bg-error pulse-danger']
      :k==='paused'?['text-outline bg-surface-container border-surface-container-highest','bg-[#3b475d]']
      :['text-[#f59e0b] bg-[rgba(245,158,11,.12)] border-[rgba(245,158,11,.35)]','bg-[#f59e0b]'];

    html+='<div class="bg-surface-container-low border border-surface-container-high rounded-[14px] flex flex-col min-w-0">';
    html+='<div class="flex items-center justify-between gap-3 px-5 py-4 border-b border-surface-container-high flex-wrap">'+
      '<div class="flex items-center gap-3 min-w-0">'+MI('local_fire_department','text-[19px] text-primary-container',1)+
        '<h3 class="text-headline-md font-headline-md font-semibold text-on-surface shrink-0">好友火花</h3></div>'+
      '<a href="#friends" class="shrink-0 inline-flex items-center gap-1 text-body-sm font-body-sm text-primary-container hover:underline">查看全部 '+MI('chevron_right','text-[16px]')+'</a></div>';
    html+='<div class="divide-y divide-surface-container-high/50 overflow-y-auto custom-scroll" style="max-height:430px">';
    if(!o.friends.length)html+='<div class="py-12 text-center text-body-sm font-body-sm text-outline">还没有好友数据</div>';
    _hot.concat(o.friends.filter(f=>f.spark_days==null)).forEach(f=>{
      const n=Number(f.spark_days)||0;
      const paused=f.status==='paused';
      const risk=!f.fresh||f.spark_days==null;
      const s=paused?{k:'paused',t:'已停用'}:f.today_sent?{k:'sent',t:'已续火'}:risk?{k:'risk',t:'有风险'}:{k:'pending',t:'待续'};
      const sc=statusCls(s.k);
      const pct=f.spark_days==null?0:Math.max(2,Math.round(n/_maxN*100));
      const lv=lvOf(f.spark_days);
      html+='<div class="ov-rk flex items-center gap-3 px-5 py-3.5 hover:bg-surface-container/50 transition-colors group">'+
        '<div class="shrink-0 rounded-full overflow-hidden '+(risk||paused?'ring-1 ring-primary-container/40':'')+'">'+avatarHtml(f.avatar,friendName(f))+'</div>'+
        /* 副行 = 抖音号：总览接口的 friend 只给 short_id（数字抖音号），三级兜底后再兜 short_id */
        '<div class="ov-rk-name flex flex-col min-w-0 w-[130px] shrink-0">'+
          '<span class="text-on-surface font-semibold truncate group-hover:text-primary transition-colors">'+esc(friendName(f))+'</span>'+
          '<span class="text-mono-code-sm font-mono text-outline tracking-tight truncate">'+esc(f.douyin_id||f.unique_id||f.short_id||'—')+'</span>'+
        '</div>'+
        '<div class="shrink-0 text-center">'+
          '<div class="inline-flex items-center gap-1">'+MI('local_fire_department','text-[18px] '+(risk?'text-error':'text-primary-container'),1)+
            '<span class="text-mono-metric-md font-mono-metric-md '+(risk?'text-error':'text-on-surface')+' font-bold">'+(f.spark_days==null?'—':n)+'</span>'+
            '<span class="text-body-sm font-body-sm text-outline">天</span></div>'+
          '<div class="text-[10px] font-mono-code-sm '+(f.fresh?'text-tertiary':'text-[#f59e0b]')+' mt-0.5">'+(f.fresh?'数据新鲜':'缓存过期')+'</div>'+
        '</div>'+
        '<div class="ov-rk-mile flex-1 min-w-0 flex flex-col gap-1.5 max-w-[240px]">'+
          '<div class="flex items-center justify-between text-body-sm gap-2">'+
            '<span class="ov-rk-mt '+lv.c+' font-medium text-[11px] truncate min-w-0" title="'+esc(lv.t)+'">'+esc(lv.t)+'</span>'+
            '<span class="text-mono-code-sm text-outline text-[11px] shrink-0">'+(f.spark_days==null?'—':n)+'/'+_maxN+'天</span></div>'+
          '<div class="milebar w-full h-1.5 bg-surface-container rounded-full overflow-hidden"><div class="h-full rounded-full '+barCls(n,risk)+'" style="width:'+pct+'%"></div>'+_mileTicks+'</div>'+
        '</div>'+
        '<span class="ov-rk-st shrink-0 inline-flex items-center justify-center gap-1.5 px-2.5 py-1 rounded-full border text-body-sm font-medium '+sc[0]+'">'+
          '<span class="w-1.5 h-1.5 rounded-full '+sc[1]+'"></span>'+s.t+'</span>'+
      '</div>';
    });
    html+='</div>';
    html+='</div>';

    /* ---------- 4) 快捷入口（小程序概览底部那一行；窄屏才显示，桌面由侧栏承担） ---------- */
    (function(){
      var _nu=ToastHistory.unread();
      var q=[['📊','日报','daily'],['👥','抓联系人','contacts'],['🔑','账号','accounts'],['🔔','通知','notifications']];
      html+='<div class="ovQuick">';
      q.forEach(function(x){
        html+='<a href="#'+x[2]+'"><span class="em">'+x[0]+
          (x[2]==='notifications'&&_nu?('<span class="dot">'+(_nu>99?'99+':_nu)+'</span>'):'')+
          '</span><span>'+x[1]+'</span></a>';
      });
      html+='</div>';
    })();

    void _apiMs;
    App.updateSideStats();
    ensureView('overview').innerHTML=html;
  }catch(e){if(e.message!=='unauthorized')viewError('overview',e);}
};


/* [v4] 总览台账行渲染（供首屏与 _ovRecKw 过滤复用） */
function _ovLedgerRows(){
  const q=(App.state._ovRecQ||'').toLowerCase();
  const list=(App.state._ovRecs||[]).filter(r=>{
    if(!q)return true;
    const hay=[r.target==='all'?'全部好友':(r.target_name||r.target||''),r.content||'',r.account||'',r.task==='main'?'批量续':'单独续']
      .join(' ').toLowerCase();
    return hay.indexOf(q)>-1;
  });
  if(!list.length)return '<tr><td colspan="5" class="py-10 text-center text-body-sm font-body-sm text-outline">'+(q?'没有匹配的记录':'暂无台账记录')+'</td></tr>';
  return list.map(r=>{
    const ok=r.success;
    return '<tr class="border-b border-[#1f2735] last:border-0 hover:bg-surface-container-high/40 transition-colors">'+
      '<td class="px-4 py-2.5 text-mono-code-sm font-mono-code-sm text-outline whitespace-nowrap">'+esc((r.ts||r.date||'').slice(5,16))+'</td>'+
      '<td class="px-4 py-2.5 whitespace-nowrap"><span class="inline-flex items-center gap-1 px-2 py-0.5 rounded-full border text-label-uppercase font-label-uppercase '+
        (r.task==='main'?'text-primary-container bg-[rgba(255,122,69,.10)] border-[rgba(255,122,69,.28)]':'text-outline bg-surface-container border-surface-container-high')+'">'+
        (r.task==='main'?'批量续':'单独续')+'</span></td>'+
      '<td class="px-4 py-2.5 text-body-md font-body-md text-on-surface whitespace-nowrap">'+esc(r.target==='all'?'全部好友':(r.target_name||dispName(r.target)||'—'))+
        (App.state.isAdmin?'<div class="text-mono-code-sm font-mono-code-sm text-outline">'+esc(r.account||'全部账号')+'</div>':'')+'</td>'+
      '<td class="px-4 py-2.5 text-body-md font-body-md text-on-surface-variant max-w-[420px]"><div class="truncate" title="'+esc(r.content||'')+'">'+esc(r.content||(r.sent!=null?('共发送 '+r.sent+' 条'):'无内容'))+'</div></td>'+
      '<td class="px-4 py-2.5 text-right whitespace-nowrap"><span class="inline-flex items-center gap-1 px-2 py-0.5 rounded-full border text-label-uppercase font-label-uppercase '+
        (ok?'text-tertiary bg-[rgba(74,225,118,.10)] border-[rgba(74,225,118,.28)]':'text-[#ef4444] bg-[rgba(239,68,68,.12)] border-[rgba(239,68,68,.3)]')+'">'+
        '<span class="w-1.5 h-1.5 rounded-full '+(ok?'bg-tertiary':'bg-[#ef4444]')+'"></span>'+(ok?'成功':'失败')+'</span></td></tr>';
  }).join('');
}
function _ovRecKw(v){App.state._ovRecQ=(v||'').trim();
  const tb=document.getElementById('ovLedgerBody');
  if(tb)tb.innerHTML=_ovLedgerRows();
}
/*================ 好友与火花 ================*/
/*================ 好友与火花（Stitch 02 稿 1:1 还原） ================*/
Loaders.friends=async function(){
  loading('friends','g3');
  try{
    const [d,fl]=await Promise.all([api(App.withAcc('/api/friends')),api(App.withAcc('/api/friend-log?lines=40'))]);
    App.state.friends=d.friends;App.state.friendLog=fl.logs;
    if(App.state.scrapedContacts===null&&!App.state.scrapedHidden){try{const sc=await api(App.withAcc('/api/scraped-contacts'));if(sc.contacts&&sc.contacts.length)App.state.scrapedContacts=sc.contacts;}catch(e){}}
    const _ft=App.currentTargets();if(_ft){d.friends=d.friends.filter(f=>_ft.has(f.short_id));}

    /* ---------- 共用派生 ---------- */
    const withDays=d.friends.filter(f=>f.spark_days!=null);
    const sumDays=withDays.reduce((a,f)=>a+(Number(f.spark_days)||0),0);
    const maxF=withDays.slice().sort((a,b)=>b.spark_days-a.spark_days)[0];
    const maxDays=maxF?Number(maxF.spark_days)||0:0;
    const avgPerDay=d.friends.length?Math.round(sumDays/Math.max(1,d.friends.length)/10*10)/10:0;
    const remain=Math.max(0,1000-maxDays);
    /* [v13.1] 火花分档与筛选档位统一走 sparkLevel()/sparkRiskKey()（见文件头唯一口径）。
       四个档：全部 / 需关注(none+broken) / 注意 / 正常。 */
    const _spLevel=sparkLevel;
    const _spKey=sparkRiskKey;
    const cnt={all:d.friends.length,risk:0,warn:0,ok:0,sent:0};
    let staleN=0;
    d.friends.forEach(f=>{cnt[_spKey(f.spark_days)]++;if(f.today_sent)cnt.sent++;if(!f.fresh)staleN++;});
    App.state._fvCnt=cnt;/* [v11] 切筛选时顶栏芯片要用同一份计数（不重新请求） */

    /* 36px 圆形头像（有图走图，无图首字母兜底） */
    const AV=(f,ring)=>'<div class="shrink-0 rounded-full overflow-hidden '+(ring?'ring-1 ring-primary-container/40':'')+'">'+avatarHtml(f.avatar,friendName(f))+'</div>';

    /* ---------- 1) 顶部总览卡 [v12] ----------
       原来是 3 张 KPI 卡 + 1 张「火花数据」抓取卡 = 4 个框（手机上占 4 段高度）。
       现合并成同一张卡：上排三格 KPI，下方一行「火花数据 · 立即抓取」。
       纯视觉合并 —— 三个指标的字段与口径完全没变。 */
    const _sBusy=!!App.state._sparkBusy;
    /* [v12.1] 三格 KPI 直接复用**概览「火花总览」卡的写法**：居中小卡、数值在上标签在下。
       原来每格底下的说明（运行正常 / 今日点火 / 名单最长 / 里程碑）统一挪到下方一排徽章，
       与概览卡「3 个 KPI + 一排状态徽章」的结构完全一致。 */
    const _cell=(val,unit,label)=>'<div class="statCell rounded-xl bg-surface-container border border-surface-container-high/60 px-3 py-2.5 text-center">'+
      '<div class="statNum text-mono-metric-md font-mono-metric-md font-bold text-on-surface">'+val+
      (unit?'<span class="statUnit">'+unit+'</span>':'')+'</div>'+
      '<div class="statLbl text-body-sm font-body-sm text-outline mt-0.5">'+label+'</div></div>';
    let html='<section class="statCard">';
    html+='<div class="statGrid">';
    html+=_cell(d.friends.length,'位','守护好友总数');
    html+=_cell(sumDays,'天','累计火花天数');
    html+=_cell(maxF?maxDays:0,'天','最长连续记录');
    html+='</div>';
    /* [v12.6] 徽章排（运行正常/今日点火/容量/名单最长/里程碑）按要求隐藏 */
    /* 抓取行（页面化小程序 spark 页顶部的 grab 卡）—— 保留 #sparkTip / #sparkGrabBtn 供 _sparkUi() 局部刷新 */
    html+='<div class="statGrab">'+
      '<div class="grabL">'+
        '<div class="grabT"><i class="grabDot'+(_sBusy?' on':(staleN?' warn':''))+'"></i>火花数据</div>'+
        '<div class="grabS" id="sparkTip">'+esc(App.state._sparkMsg||'每天 06:00 自动抓取')+'</div>'+
      '</div>'+
      '<button id="sparkGrabBtn" class="btn '+(_sBusy?'btn-ghost':'btn-primary')+' btn-sm"'+(App.state._sparkBusy?' disabled':'')+
        ' data-click="Actions.startSpark" data-args="false" data-pass-this="1">'+(_sBusy?('抓取中 '+(App.state._sparkSec||0)+'s'):'立即抓取')+'</button>'+
    '</div>';
    html+='</section>';

    /* ---------- 3) 好友火花（卡片形态，对齐小程序 spark 页；
       网页端的搜索 / 排序 / 分页 / 批量一键续火 / 各行操作 全部保留） ---------- */
    const _ff=(function(){let v=App.state.friendFilter||'all';
      if(['all','risk','warn','ok'].indexOf(v)<0)v='all';
      App.state.friendFilter=v;return v;})();
    const list=_ff==='all'?d.friends:d.friends.filter(f=>_spKey(f.spark_days)===_ff);
    /* [v15] 头部改成一行：左「好友火花 + 共 N 位」，右「排序 + 批量一键续火」。
       去掉了「收起列表」按钮（用户要求）——列表默认展开，不再提供收起。
       排序按钮在手机上是纯图标（.fvSortTxt 文案隐藏，title 里说明），
       桌面端保留文案，保证 390px 屏上也挤得下一行。 */
    html+='<section class="flistCard">';
    html+='<div class="flistHead">'+
      '<div class="flistHL"><h2>好友火花</h2><span class="tag">共 '+d.friends.length+' 位</span></div>'+
      '<div class="flistHR">'+
        '<button class="btn btn-ghost btn-sm" data-click="_fvSort" title="切换排序方向">'+MI('swap_vert','text-[15px]')+'<span id="fvSortTxt" class="fvSortTxt">'+(App.state._fsSort==='asc'?'火花天数升序':'火花天数倒序')+'</span></button>'+
        '<button class="btn btn-primary btn-sm" data-click="Actions.openMsgPicker" data-args="main|null">'+MI('bolt','text-[15px]',1)+'批量一键续火</button>'+
      '</div></div>';
    /* 4 档筛选：手机端放在页面内（= 小程序）；桌面端沿用顶栏芯片 */
    html+='<div id="friendChipsM" class="fvChips md:hidden"></div>';
    if(staleN)html+='<div class="stalebar">⏰ 有 '+staleN+' 位好友的火花数据不是今天的（抓取可能没覆盖到）</div>';
    html+='<div id="fvWrap">';
    html+='<div id="fvBody" class="fcardList">';
    if(!list.length){
      html+='<div class="empty">'+(d.friends.length?'这个筛选下没有好友':'暂无好友，请先添加')+'</div>';
    }else{
      list.forEach(f=>{
        const paused=f.status==='paused';
        const n=(f.spark_days==null)?-1:(Number(f.spark_days)||0);
        const lv=_spLevel(f.spark_days),k=lv.k;
        const msg=String(f.last_message||f.last_content||'').replace(/\\n/g,' ').replace(/\s+/g,' ').trim();
        const mt=String(f.last_msg_time||'').trim();
        const q=((friendName(f)||'')+' '+(f.douyin_id||f.unique_id||f.short_id||'')).toLowerCase();
        const ic=(icon,title,click,args,danger)=>'<button class="icb'+(danger?' icb-d':'')+'" title="'+title+'" data-click="'+click+'"'+(args!=null?' data-args="'+args+'"':'')+'>'+MI(icon,'text-[16px]')+'</button>';
        html+='<div class="fcar'+(k==='ok'?'':' fcar-'+k)+(paused?' fcar-off':'')+'"'+
          ' data-sid="'+esc(f.short_id||'')+'" data-lv="'+k+'" data-days="'+n+'" data-q="'+esc(q)+'"'+
          ' data-click="Actions.fdOpen" data-args="'+esc(f.short_id||'')+'">'+
          '<div class="fcarTop">'+AV(f,k==='risk'||paused)+
            '<div class="fcarMid"><div class="fcarName">'+esc(friendName(f))+(paused?'<span class="badge b-gray fcarTag">已停用</span>':'')+'</div>'+
            '<div class="fcarId mono">'+esc(f.douyin_id||f.unique_id||f.short_id||'—')+'</div></div>'+
            '<span class="badge '+lv.c+'">'+esc(lv.t)+'</span></div>'+
          '<div class="fcarMeta">'+
            (f.today_sent?'<span class="badge b-ok">今日已发</span>':'<span class="badge b-gray">今日未发</span>')+
            (mt?'<span class="small muted">最近 '+esc(mt.length>11?mt.slice(5,16):mt)+'</span>':'')+
            (!f.fresh?'<span class="badge b-wait">数据更新于更早</span>':'')+
          '</div>'+
          (msg?'<div class="fcarMsg">最后一条：'+esc(msg.slice(0,140))+'</div>':'')+
          '<div class="fcarOps">'+
            (k==='risk'
              ?'<button class="btn btn-sm btn-danger" data-click="Actions.openMsgPicker" data-args="custom|'+esc(f.short_id)+'">'+MI('priority_high','text-[15px]')+'紧急续火</button>'
              :'<button class="btn btn-sm btn-primary" data-click="Actions.openMsgPicker" data-args="custom|'+esc(f.short_id)+'">'+MI('bolt','text-[15px]')+'单独续火</button>')+
            ic('chat','发送测试话术','Actions.openMsgPicker','custom|'+esc(f.short_id))+
            ic('edit','修改备注','Actions.editRemark',esc(f.short_id)+'|'+esc(friendName(f)).replace(/"/g,'')+'|'+esc(f.remark||''))+
            ic(paused?'play_circle':'pause_circle',paused?'恢复守护':'停用守护','Actions.toggleFriend',esc(f.short_id)+'|'+(paused?'1':'0'))+
            ic('person_remove','移出名单','Actions.removeFriend',esc(f.short_id)+'|'+esc(friendName(f)).replace(/"/g,''),1)+
          '</div></div>';
      });
    }
    html+='</div>';
    html+='<div class="flistFoot"><span id="fvCount">—</span>'+
      '<div class="flistSize"><span>每页显示</span><select data-change="_fvSize">'+
      [20,50,100].map(v=>'<option value="'+v+'"'+(App.state._fsSize===v?' selected':'')+'>'+v+' 条</option>').join('')+'</select></div></div>';
    html+='<div id="fvPager" class="fvPager"></div>';
    html+='</div>';
    html+='</section>';

    /* ---------- 4) 添加/抓取好友（功能控制条） ---------- */
    html+='<div class="bg-surface-container-low border border-surface-container-high rounded-[14px] px-4 py-3 flex items-center gap-2 flex-wrap">'+
      '<span class="text-body-sm font-body-sm text-outline shrink-0">添加好友</span>'+
      '<input type="hidden" id="addMode" value="uid">'+
      '<input id="addUid" class="dark-input h-8" style="flex:1;min-width:200px" placeholder="输入抖音号 unique_id 添加">'+
      '<button class="h-8 px-3 rounded-lg bg-primary-container hover:bg-[#ff925c] text-white text-body-sm font-semibold flex items-center gap-1.5 active:scale-95 transition-all" data-click="Actions.addFriend" data-pass-this="1">'+MI('person_add','text-[17px]')+'添加</button>'+
      '<button class="h-8 px-3 rounded-lg bg-surface-container border border-surface-container-highest text-on-surface-variant hover:text-on-surface text-body-sm font-body-sm flex items-center gap-1.5 transition-colors" data-click="Actions.scrapeContacts" data-pass-this="1">'+MI('group','text-[17px]')+'抓取好友列表</button>'+
      (App.state.scrapedContacts&&App.state.scrapedContacts.length
        ?(App.state.scrapedHidden
          ?'<button class="h-8 px-3 rounded-lg bg-surface-container border border-surface-container-highest text-on-surface-variant hover:text-on-surface text-body-sm font-body-sm flex items-center gap-1.5 transition-colors" data-click="_sw_show">'+MI('visibility','text-[17px]')+'展开抓取列表 ('+App.state.scrapedContacts.length+')</button>'
          :'<button class="h-8 px-3 rounded-lg bg-surface-container border border-surface-container-highest text-on-surface-variant hover:text-on-surface text-body-sm font-body-sm flex items-center gap-1.5 transition-colors" data-click="_sw_hide">'+MI('expand_less','text-[17px]')+'收起抓取列表</button>')
        :'')+
    '</div>';

    /* ---------- 5) 抓取到的联系人 ---------- */
    if(App.state.scrapedContacts&&App.state.scrapedContacts.length&&!App.state.scrapedHidden){
      const exSids=new Set((d.friends||[]).map(f=>f.short_id));
      const _all=App.state.scrapedContacts;
      const _nm=_all.filter(c=>(c.chat_state||'')==='non_mutual');
      const _shown=App.state.showNonMutual?_all:_all.filter(c=>(c.chat_state||'')!=='non_mutual');
      html+='<section class="narrowSec bg-surface-container-low border border-surface-container-high rounded-[14px] overflow-hidden">';
      html+='<div class="px-5 py-4 border-b border-surface-container-high flex items-center justify-between gap-3 flex-wrap">'+
        '<div class="flex items-center gap-3 min-w-0"><h2 class="text-headline-md font-headline-md font-semibold text-on-surface shrink-0">抓取到的联系人</h2>'+
        '<span class="px-2 py-0.5 rounded-full bg-surface-container text-outline text-body-sm font-mono-code-sm border border-surface-container-highest shrink-0">'+_shown.length+' 个 · 点击行添加</span>'+
        (_nm.length?'<span class="text-body-sm font-body-sm text-outline truncate">'+(App.state.showNonMutual?('含 '+_nm.length+' 个非互关空会话'):('另 '+_nm.length+' 个非互关空会话已隐藏'))+'</span>':'')+'</div>'+
        '<div class="flex items-center gap-2">'+
        (_nm.length?'<button class="h-8 px-3 rounded bg-surface-container border border-surface-container-highest text-on-surface-variant hover:text-on-surface text-body-sm font-body-sm transition-colors" data-click="_sw_nm">'+MI('filter_list','text-[16px]')+'<span class="ml-1.5">'+(App.state.showNonMutual?'隐藏非互关空会话':'显示非互关空会话')+'</span></button>':'')+
        '<button class="h-8 px-3 rounded bg-surface-container border border-surface-container-highest text-on-surface-variant hover:text-on-surface text-body-sm font-body-sm transition-colors" data-click="_sw_hide">收起</button>'+
        '</div></div>';
      html+='<div class="overflow-x-auto custom-scroll" style="max-height:400px;overflow-y:auto"><table class="w-full border-collapse text-left contacts-wrap">'+
        '<thead><tr class="border-b border-surface-container-high/80 bg-surface-container-lowest/60 text-outline text-[11px]">'+
        '<th class="py-3 px-5 font-semibold">名称</th><th class="py-3 px-4 font-semibold">抖音号</th><th class="py-3 px-4 font-semibold text-center">头像</th>'+
        '<th class="py-3 px-4 font-semibold">最后一条</th><th class="py-3 px-5 font-semibold text-right">操作</th></tr></thead><tbody class="divide-y divide-surface-container-high/50">';
      _shown.forEach(c=>{
        const sid=c.short_id||'';
        const did=c.douyin_id||c.unique_id||'';
        const already=sid&&exSids.has(sid);
        const cname=c.title||c.nickname||'未知';
        const nonM=(c.chat_state||'')==='non_mutual';
        const pv=String(c.preview||'').trim();
        const tip=pv?('最后一条：'+pv+(c.last_time?('（'+c.last_time+'）'):'')):'（抖音会话列表里没有可读内容）';
        const av=avatarHtml(c.avatar,cname);
        const btn=already?'<span class="inline-flex items-center gap-1 px-2 py-0.5 rounded-full border text-label-uppercase font-label-uppercase text-tertiary bg-tertiary-container/15 border-tertiary-container/30">'+MI('check','text-[12px]')+'已添加</span>'
          :'<button class="h-7 px-3 rounded bg-primary-container hover:bg-[#ff925c] text-white text-body-sm font-semibold active:scale-95 transition-all" '+(sid?'':'disabled')+' data-click="Actions.addContact" data-args="'+esc(sid)+'|'+esc((c.title||c.nickname||'').replace(/'/g,''))+'" data-pass-this="1">添加</button>';
        html+='<tr class="crow hover:bg-surface-container/50 transition-colors"'+(sid?' data-click="Actions.openContact" data-args="'+esc(sid)+'"':'')+(nonM?' style="opacity:.62"':'')+'>'+
          '<td class="cname py-3 px-5"><b class="text-on-surface">'+esc(cname)+'</b>'+
          (nonM?' <span class="inline-flex items-center px-2 py-0.5 rounded-full border text-label-uppercase font-label-uppercase text-outline bg-surface-container border-surface-container-high" title="'+esc(tip)+'">非互关</span>':'')+'</td>'+
          '<td class="cid py-3 px-4 font-mono text-mono-code-sm text-outline">'+esc(did||'—')+'</td>'+
          '<td class="cav py-3 px-4 text-center">'+av+'</td>'+
          '<td class="cpv py-3 px-4" title="'+esc(tip)+'"><div class="cpv-t">'+esc(tip)+'</div></td>'+
          '<td class="cact py-3 px-5 text-right">'+btn+'</td></tr>';
      });
      if(!_shown.length)html+='<tr><td colspan="5" class="py-10 text-center text-body-sm text-outline">抓到的会话全是「非互关·从未聊过」的空会话，没有可添加的人</td></tr>';
      html+='</tbody></table></div>';
      html+='<div class="px-5 py-3 border-t border-surface-container-high text-body-sm font-body-sm text-outline leading-relaxed">'+MI('info','text-[14px] align-middle mr-1')+'「非互关·从未聊过」= 该会话在抖音聊天列表里没有任何消息，只有一条「对方回复或关注你之前，只能发送一条文字消息」的系统提示（双方未互关），续不了火花，所以默认不显示。</div>';
      html+='</section>';
    }

    /* ---------- 6) 好友操作日志 ---------- */
    html+='<section class="narrowSec bg-surface-container-low border border-surface-container-high rounded-[14px] overflow-hidden">';
    html+='<div class="px-5 py-4 border-b border-surface-container-high flex items-center justify-between gap-3">'+
      '<div class="flex items-center gap-3"><h2 class="text-headline-md font-headline-md font-semibold text-on-surface">好友操作日志</h2>'+
      '<span class="px-2 py-0.5 rounded-full bg-surface-container text-outline text-body-sm font-mono-code-sm border border-surface-container-highest">增删改台账</span></div>'+
      '<span class="text-body-sm font-body-sm text-outline hidden md:block">panel/data/friend_add.jsonl</span></div>';
    if(!fl.logs.length)html+='<div class="py-12 text-center text-body-sm text-outline">暂无操作记录，添加 / 删除 / 停用 / 改备注后此处会实时留痕</div>';
    else{
      html+='<div class="overflow-x-auto custom-scroll" style="max-height:320px;overflow-y:auto"><table class="w-full border-collapse text-left flog-wrap">'+
        '<thead><tr class="border-b border-surface-container-high/80 bg-surface-container-lowest/60 text-outline text-[11px]">'+
        '<th class="py-2.5 px-5 font-semibold">时间</th><th class="py-2.5 px-4 font-semibold">对象</th><th class="py-2.5 px-4 font-semibold">结果</th><th class="py-2.5 px-5 font-semibold">说明</th></tr></thead><tbody class="divide-y divide-surface-container-high/50">';
      fl.logs.forEach(g=>{
        const st=g.stage||'',act=g.action||'';
        let bCls,bTxt;
        if(st==='start'){bCls='text-primary-container bg-primary-container/10 border-primary-container/30';bTxt='开始';}
        else if(g.result==='ok'){bCls='text-tertiary bg-tertiary-container/15 border-tertiary-container/30';bTxt='成功';}
        else if(g.result==='rejected'){bCls='text-outline bg-surface-container border-surface-container-high';bTxt='拒绝';}
        else{bCls='text-error bg-error-container/25 border-error/30';bTxt='失败';}
        let desc='';
        if(st==='start')desc='开始解析（先查聊天列表，兜底走搜索）';
        else if(st==='chatlist_hit')desc='添加 · 聊天列表命中 · '+esc(g.nickname||'');
        else if(st==='search_hit')desc='添加 · 搜索页命中 · '+esc(g.nickname||'');
        else if(st==='saved')desc='添加成功 · 已保存并同步 .env'+(g.env_sync===false?' · <span class="text-error">.env 同步失败</span>':'');
        else if(st==='duplicate')desc='添加被拒 · '+esc(g.error||'已在名单中');
        else if(st==='rejected')desc='添加被拒 · '+esc(g.error||'被拒绝');
        else if(st==='deleted')desc='删除 · '+esc(g.nickname||g.input||'')+(g.env_sync===false?' · <span class="text-error">.env 同步失败</span>':'');
        else if(st==='updated'&&act==='update_friend')desc='修改 · '+esc(g.nickname||g.input||'')+' · '+esc(g.field==='status'?(g.new==='paused'?'停用':'恢复'):'备注')+(g.field==='remark'?' · 「'+esc(g.old||'')+'」→「'+esc(g.new||'')+'」':'');
        else if(st==='error')desc=esc(g.error||'操作失败');
        else desc=esc(g.error||st||'');
        html+='<tr class="hover:bg-surface-container/50 transition-colors">'+
          '<td class="lg-t py-2.5 px-5 font-mono text-mono-code-sm text-outline whitespace-nowrap">'+esc(g.ts)+'</td>'+
          '<td class="lg-o py-2.5 px-4 font-mono text-mono-code-sm text-on-surface">'+esc(g.nickname||g.remark||dispTarget(g.input))+'</td>'+
          '<td class="lg-r py-2.5 px-4"><span class="inline-flex items-center px-2 py-0.5 rounded-full border text-label-uppercase font-label-uppercase '+bCls+'">'+bTxt+'</span></td>'+
          '<td class="lg-d py-2.5 px-5 text-body-md font-body-md text-on-surface-variant">'+desc+'</td></tr>';
      });
      html+='</tbody></table></div>';
    }
    html+='</section>';

    ensureView('friends').innerHTML=html;
    _hdrFriends(cnt);
    _fvApply();
  }catch(e){if(e.message!=='unauthorized')viewError('friends',e);}
};
/* ---- v4 好友表：客户端搜索 / 排序 / 分页（纯 DOM，不重渲染、不丢焦点） ---- */
App.state._fsQ=App.state._fsQ||'';
/* [v15] 默认改成火花天数升序：天数最少的排最前（0 天/断火花的需要续火的优先看见）。
   原来默认 desc（天数多的在前），用户反馈要「倒序」。排序按钮仍可随时切回 desc。 */
App.state._fsSort=App.state._fsSort||'asc';
App.state._fsPage=App.state._fsPage||1;
App.state._fsSize=App.state._fsSize||20;
function _fvRows(){
  var b=document.getElementById('fvBody');if(!b)return [];
  var q=(App.state._fsQ||'').toLowerCase(),k=App.state.friendFilter||'all';
  return Array.prototype.filter.call(b.querySelectorAll('[data-sid]'),function(c){
    if(!c.dataset.sid)return true;
    /* [v11] 卡片按 4 档火花等级过滤（data-lv：risk 含 none/broken） */
    var lv=c.dataset.lv||'';
    if(k==='risk'&&(lv==='ok'||lv==='warn'))return false;
    if(k==='warn'&&lv!=='warn')return false;
    if(k==='ok'&&lv!=='ok')return false;
    if(q&&(c.dataset.q||'').indexOf(q)<0)return false;
    return true;
  });
}
function _fvApply(){
  var b=document.getElementById('fvBody');if(!b)return;
  var all=Array.prototype.slice.call(b.querySelectorAll('[data-sid]'));
  if(!all.length||!all[0].dataset.sid){
    var c=document.getElementById('fvCount');if(c)c.textContent='0 项';
    var p=document.getElementById('fvPager');if(p)p.innerHTML='';
    return;
  }
  var asc=App.state._fsSort==='asc';
  all.slice().sort(function(x,y){return asc?(+x.dataset.days)-(+y.dataset.days):(+y.dataset.days)-(+x.dataset.days);})
     .forEach(function(tr){b.appendChild(tr);});
  var rows=_fvRows();
  var size=App.state._fsSize||20;
  var pages=Math.max(1,Math.ceil(rows.length/size));
  if(App.state._fsPage>pages)App.state._fsPage=pages;
  var pg=App.state._fsPage||1;
  all.forEach(function(tr){tr.style.display='none';});
  var from=rows.length?((pg-1)*size+1):0,to=Math.min(pg*size,rows.length);
  rows.slice(from?from-1:0,to).forEach(function(tr){tr.style.display='';});
  var c=document.getElementById('fvCount');
  if(c)c.textContent='显示 '+from+' 至 '+to+' 项，共 '+rows.length+' 项';
  var p=document.getElementById('fvPager');
  if(p){
    var dis='w-7 h-7 rounded border border-surface-container-highest flex items-center justify-center text-outline/40 cursor-not-allowed';
    var en='w-7 h-7 rounded border border-surface-container-highest flex items-center justify-center text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-colors';
    var h='<button class="'+(pg>1?en:dis)+'"'+(pg>1?' data-click="_fvPage" data-args="'+(pg-1)+'"':' disabled')+'>'+MI('chevron_left','text-[16px]')+'</button>';
    for(var i=1;i<=pages;i++)h+='<button class="w-7 h-7 rounded font-mono-code-sm font-bold flex items-center justify-center '+(i===pg?'bg-primary-container text-white':'border border-surface-container-highest text-outline hover:text-on-surface')+'" data-click="_fvPage" data-args="'+i+'">'+i+'</button>';
    h+='<button class="'+(pg<pages?en:dis)+'"'+(pg<pages?' data-click="_fvPage" data-args="'+(pg+1)+'"':' disabled')+'>'+MI('chevron_right','text-[16px]')+'</button>';
    p.innerHTML=h;
  }
}
function _fvSearch(v){App.state._fsQ=(v||'').trim();App.state._fsPage=1;_fvApply();}
function _fvSort(){App.state._fsSort=(App.state._fsSort==='asc'?'desc':'asc');App.state._fsPage=1;
  var t=document.getElementById('fvSortTxt');if(t)t.textContent=(App.state._fsSort==='asc'?'按火花天数升序':'按火花天数倒序');_fvApply();}
function _fvSize(v){App.state._fsSize=Number(v||20)||20;App.state._fsPage=1;_fvApply();}
function _fvPage(p){App.state._fsPage=Number(p)||1;_fvApply();}
/* [v15] 「收起列表」按钮已去掉（列表默认常开），_fvSetCollapsed/_fvToggle 一并移除 */

/*================ 面板用户（Stitch 08 稿 1:1 还原） ================*/

/* [v4 新增] 用户列表前端过滤/分页（纯 DOM，不重新请求后端） */
App.state._puQ=App.state._puQ||'';
App.state._puRole=App.state._puRole||'all';
App.state._puPage=App.state._puPage||1;
function _puRows(){
  let list=(App.state._puAll||[]).slice();
  const q=App.state._puQ.trim().toLowerCase(),role=App.state._puRole;
  if(role==='admin')list=list.filter(u=>u.is_admin);
  else if(role==='user')list=list.filter(u=>!u.is_admin);
  if(q)list=list.filter(u=>
    String(u.username||'').toLowerCase().indexOf(q)>-1||
    (u.account_uids||[]).join(',').toLowerCase().indexOf(q)>-1);
  return list;
}
function _puApply(){
  const all=(App.state._puAll||[]),shown=_puRows(),size=10;
  const total=shown.length,pages=Math.max(1,Math.ceil(total/size));
  if(App.state._puPage>pages)App.state._puPage=pages;
  if(App.state._puPage<1)App.state._puPage=1;
  const page=App.state._puPage;
  const slice=shown.slice((page-1)*size,page*size);
  const tb=document.getElementById('puTbody');
  if(!tb)return;
  /* [v6.15] 手机卡片：与表格共用同一份 slice（搜索 / 角色筛选 / 翻页天然同步） */
  const _wrapEl=document.getElementById('puWrap');
  if(_wrapEl){_wrapEl.classList.toggle('msrc-hidden',total>0);_wrapEl.classList.toggle('msrc-empty',total===0);}
  const _cards=document.getElementById('puCards');
  if(_cards){
    Sheet._reset('pu');
    _cards.innerHTML=slice.map((u,i)=>{
      const nt=u.notify||{};
      const uids=(u.account_uids||[]);
      const mine=(u.username===App.state.loginUser);
      const on=!!(nt.configured&&nt.enabled!==false);
      const kindId=(u.is_admin?'sys_admin':'member')+((App.state.isAdmin&&uids.length)?(' · '+uids.length+' 个抖音号'):'');
      const uidTxt=App.state.isAdmin?(uids.length?uids.join(', '):'未关联抖音号'):'仅本人';
      const chTxt=nt.configured?(nt.channel_label||nt.channel||'已配置'):'未配置推送通道';
      const pushTxt=chTxt+(nt.configured?((nt.enabled!==false)?' · 已启用':' · 已停用')+(nt.daily!==false?' · 早报开':' · 早报关'):'');
      Sheet._reg('pu',String(i),{
        username:u.username,mine:mine,kindId:kindId,
        role:(u.is_admin?'管理员':'普通用户'),uids:uidTxt,channel:chTxt,on:on,
        daily:!!(nt.configured&&nt.daily!==false),
        canDel:!!(App.state.isAdmin&&!u.is_admin&&u.username!==App.state.loginUser)});
      const rolePill=u.is_admin
        ?'<span class="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-semibold bg-primary-container/15 text-primary-container border border-primary-container/30 whitespace-nowrap">管理员</span>'
        :'<span class="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-medium bg-surface-container-high text-on-surface-variant border border-outline-variant/40 whitespace-nowrap">普通用户</span>';
      return _mcardHtml('pu',String(i),
        _mcardTitle(esc(u.username)+(mine?'<span style="color:#ff7a45;font-weight:400">（我）</span>':''),esc(kindId)),
        rolePill,
        [['推送',esc(pushTxt)],['抖音号',esc(uidTxt)],
         ['状态',on?'推送已启用':(nt.configured?'推送已停用':'未启用推送')]]);
    }).join('');
  }
  if(!slice.length){
    tb.innerHTML='<tr><td colspan="6" class="py-8 text-center text-on-surface-variant text-body-md font-body-md">没有匹配的用户</td></tr>';
  }else{
    tb.innerHTML=slice.map(u=>_puRow(u,all.indexOf(u))).join('');
  }
  const info=document.getElementById('puCount');
  if(info)info.textContent='显示 '+total+' / '+all.length+' 记录';
  const pg=document.getElementById('puPageBox');
  if(pg){
    let h='<button class="px-2.5 py-1 rounded bg-surface-container border border-outline-variant/30 text-on-surface hover:border-outline-variant'+(page<=1?' opacity-40':'')+'" '+(page<=1?'disabled':'')+' data-click="_puPage" data-arg="'+(page-1)+'">上一页</button>';
    for(let i=1;i<=pages;i++){
      h+='<span class="px-3 py-1 rounded cursor-pointer '+(i===page?'bg-primary-container/15 border border-primary-container/30 text-primary-container font-bold':'bg-surface-container border border-outline-variant/30 text-on-surface')+'" data-click="_puPage" data-arg="'+i+'">'+i+'</span>';
    }
    h+='<button class="px-2.5 py-1 rounded bg-surface-container border border-outline-variant/30 text-on-surface hover:border-outline-variant'+(page>=pages?' opacity-40':'')+'" '+(page>=pages?'disabled':'')+' data-click="_puPage" data-arg="'+(page+1)+'">下一页</button>';
    pg.innerHTML=h;
  }
}
function _puSearch(v){App.state._puQ=(v||'');App.state._puPage=1;_puApply();}
function _puRole(v){App.state._puRole=(v||'all');App.state._puPage=1;_puApply();}
function _puPage(p){App.state._puPage=Number(p)||1;_puApply();}

/* [v4 新增] 单行渲染（供 _puApply 复用） */
function _puRow(u,idx){
  const amAdmin=App.state.isAdmin;
  const nt=u.notify||{};
  const uids=(u.account_uids||[]);
  const AV=['bg-primary-container/20 border-primary-container/40 text-primary-container',
            'bg-teal-500/15 border-teal-500/30 text-teal-300',
            'bg-amber-500/15 border-amber-500/30 text-amber-300',
            'bg-blue-500/15 border-blue-500/30 text-blue-300'][Math.max(0,idx)%4];
  const role=u.is_admin
    ? '<span class="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-body-sm font-semibold bg-primary-container/15 text-primary-container border border-primary-container/30 whitespace-nowrap">'+MI('security','text-[13px]')+'管理员</span>'
    : '<span class="inline-flex items-center px-2 py-0.5 rounded-full text-body-sm font-medium bg-surface-container-high text-on-surface-variant border border-outline-variant/40 whitespace-nowrap">普通用户</span>';
  let push;
  if(nt.configured){
    const on=nt.enabled!==false;
    push='<div class="flex flex-col gap-0.5">'+
      '<div class="inline-flex items-center gap-1 text-[11px] '+(on?'text-tertiary':'text-error')+' font-mono-code-sm">'+
        MI('check_circle','text-[13px]')+esc(nt.channel_label||nt.channel||'已配置')+'</div>'+
      '<span class="font-mono-code-sm text-[10px] text-on-surface-variant">'+(on?'推送已启用':'已停用')+(nt.daily!==false?' · 早报开':' · 早报关')+'</span></div>';
  }else{
    push='<span class="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-mono-code-sm text-on-surface-variant border border-outline-variant/30 bg-surface-container whitespace-nowrap">'+
      '<span class="w-1.5 h-1.5 rounded-full bg-outline"></span>未配置</span>';
  }
  let acts='<div class="inline-flex items-center gap-1 justify-end">'+
    '<button class="px-2 py-1 text-body-sm text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high rounded transition-colors" data-click="Actions.pushEditUser" data-arg="'+esc(u.username)+'">通知设置</button>'+
    '<button class="px-2 py-1 text-body-sm text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high rounded transition-colors" data-click="Actions.panelUserPwd" data-arg="'+esc(u.username)+'">重置密码</button>';
  if(amAdmin&&!u.is_admin&&u.username!==App.state.loginUser)
    acts+='<button class="px-2 py-1 text-body-sm text-error hover:bg-error/10 rounded transition-colors" data-click="Actions.panelUserDel" data-arg="'+esc(u.username)+'">删除</button>';
  acts+='</div>';
  /* [20261014b] 面板落库头像优先；回退到本浏览器头像库选择 */
  const _paid=avGet('pu',u.username||'');
  const _puUrl=avPanelUrl(u.username||'');
  const _avHtml=_puUrl
    ?('<img src="'+esc(_puUrl)+'" alt="" style="width:100%;height:100%;object-fit:cover;display:block;border-radius:inherit">')
    :(_paid?avImgEl(_paid)
           :'<span class="w-full h-full border flex items-center justify-center font-mono-code-sm font-bold text-sm '+AV+'">'+esc((u.username||'?').charAt(0).toUpperCase())+'</span>');
  return '<tr class="hover:bg-surface-container-high/40 transition-colors duration-150">'+
    '<td class="py-3.5 px-4"><div class="flex items-center gap-3">'+
      '<button title="点击更换头像" class="w-9 h-9 rounded-lg overflow-hidden relative block shrink-0 transition-transform active:scale-95" data-click="Actions.openAvatarPicker" data-args="pu|'+esc(u.username||'')+'">'+
      _avHtml+
      '</button>'+
      '<div class="flex flex-col min-w-0"><div class="flex items-center gap-1.5">'+
        '<span class="font-semibold text-on-surface">'+esc(u.username)+'</span>'+
        (u.username===App.state.loginUser?'<span class="w-1.5 h-1.5 rounded-full bg-primary-container" title="当前登录用户"></span>':'')+
      '</div>'+
      '<span class="font-mono-code-sm text-[11px] text-on-surface-variant">'+(u.is_admin?'sys_admin':'member')+' · '+(amAdmin&&uids.length?uids.length+' 个抖音号':'当前登录用户')+'</span>'+
      '</div></div></td>'+
    '<td class="py-3.5 px-3">'+role+'</td>'+
    '<td class="py-3.5 px-3">'+push+'</td>'+
    '<td class="py-3.5 px-3"><div class="flex flex-col font-mono-code-sm max-w-[190px]">'+
      (amAdmin
        ?(uids.length?('<span class="text-on-surface text-[11px] truncate" title="'+esc(uids.join(', '))+'">'+esc(uids.join(', '))+'</span><span class="text-[10px] text-on-surface-variant">'+uids.length+' 个关联账号</span>')
                    :'<span class="text-[11px] text-on-surface-variant">未关联抖音号</span>')
        :'<span class="text-[11px] text-on-surface-variant">仅本人</span>')+
      '</div></td>'+
    '<td class="py-3.5 px-3 text-center">'+((nt.configured&&nt.enabled!==false)
      ?'<span class="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-mono-code-sm bg-tertiary/10 text-tertiary border border-tertiary/25 whitespace-nowrap"><span class="w-1.5 h-1.5 rounded-full bg-tertiary"></span>启用</span>'
      :'<span class="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-mono-code-sm bg-surface-container text-on-surface-variant border border-outline-variant/30 whitespace-nowrap"><span class="w-1.5 h-1.5 rounded-full bg-outline"></span>未启用推送</span>')+
    '</td>'+
    '<td class="py-3.5 px-4 text-right">'+acts+'</td></tr>';
};

Loaders.panelusers=async()=>{
  try{
    const amAdmin=App.state.isAdmin;
    /* 通知设置当前针对哪个用户：管理员可切到任意用户，普通用户只能自己 */
    const r=await api('/api/panel-users');
    const users=r.users||[];
    /* [20261014b] 填充「面板落库头像」映射：后端返回的 avatar 是相对路径
       （data/avatars/panel/xxx.jpg），<img> 用要补 "/" 前缀。这个映射是
       avApply() 的第一优先级，也是浏览器能看到小程序头像的唯一通道。 */
    App.state.puAvatar={};
    users.forEach(function(u){
      if(u&&u.username&&u.avatar)App.state.puAvatar[u.username]='/'+u.avatar;
    });
    const _names=users.map(u=>u.username)||[];
    let _tu=App.state.pushUser||'';
    if(!_tu||(!amAdmin&&_tu!==App.state.loginUser)||(amAdmin&&_names.indexOf(_tu)<0))_tu=App.state.loginUser||_names[0]||'';
    App.state.pushUser=_tu;
    const pc=await api('/api/push-config'+(amAdmin&&_tu?('?username='+encodeURIComponent(_tu)):'')).catch(()=>null);
    App.state._puAll=users;

    /* ---------- 汇总 ---------- */
    const nAdmin=users.filter(u=>u.is_admin).length;
    const nPush=users.filter(u=>(u.notify||{}).configured).length;
    const nPushOn=users.filter(u=>{const n=u.notify||{};return n.configured&&n.enabled!==false;}).length;
    const acc=App.state.accounts||[];
    const accOk=acc.filter(a=>{const ck=a.cookie||{};return ck.has&&ck.session&&!ck.expired;}).length;
    const covRate=users.length?Math.round(nPush/users.length*100):0;
    const POD=(label,icon,val,unit,iconCls,foot)=>'<div class="bg-surface-container-low border border-surface-container-high rounded-xl p-4 flex flex-col justify-between hover:border-primary-container/40 transition-colors duration-150">'+
      '<div class="flex items-center justify-between text-on-surface-variant">'+
        '<span class="text-label-uppercase font-label-uppercase tracking-wider">'+label+'</span>'+
        MI(icon,'text-[18px] '+iconCls)+'</div>'+
      '<div class="my-2 flex items-baseline gap-2">'+
        '<span class="text-mono-metric-lg font-mono-metric-lg text-on-surface">'+val+'</span>'+
        '<span class="text-body-sm font-body-sm text-on-surface-variant">'+unit+'</span></div>'+
      '<div class="flex items-center justify-between text-body-sm font-body-sm pt-2 border-t border-surface-container-high/60 text-on-surface-variant gap-2">'+foot+'</div></div>';

    let html='';
    /* ---------- 页面工具条 ---------- */
    html+='<div class="flex items-center justify-between gap-3 flex-wrap">';
    html+='<div class="flex items-center gap-3 min-w-0">'+
      '<span class="text-body-sm font-body-sm text-on-surface-variant">权限与推送通道配置 · 共 <b class="text-on-surface">'+users.length+'</b> 个用户</span>'+
      '<span class="hidden xl:flex items-center gap-2 px-2.5 py-1 rounded bg-surface-container-low border border-outline-variant/20 text-on-surface-variant font-mono-code-sm text-[11px]">'+
        '<span class="w-1.5 h-1.5 rounded-full bg-tertiary"></span><span>最近抓取 06:00 · 自动轮询中</span></span>'+
      '</div>';
    html+='</div>';

    /* ---------- 4 Pods ---------- */
    html+='<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">';
    html+=POD('总用户数','group',users.length,'位登记账号','text-on-surface-variant',
      '<span class="text-tertiary flex items-center gap-1"><span class="w-1.5 h-1.5 rounded-full bg-tertiary"></span>已启用 '+users.length+'</span><span class="font-mono-code-sm text-[11px] text-on-surface-variant">停用 0</span>');
    html+=POD('管理员席位','admin_panel_settings',nAdmin,'/ '+users.length+' 已分配','text-primary-container',
      '<span>普通用户 '+(users.length-nAdmin)+' 位</span><span class="font-mono-code-sm text-[11px] text-on-surface-variant">ROOT_AUTH</span>');
    html+=POD('推送通道覆盖率','notifications_active',covRate+'%',(nPush<users.length?'需补充':'全覆盖'),(nPush<users.length?'text-amber-400':'text-tertiary'),
      '<span class="font-mono-code-sm text-[11px]">'+nPushOn+' 个已启用通道</span><span class="text-on-surface-variant font-mono-code-sm text-[11px]">'+(users.length-nPush)+' 待配置</span>');
    html+=POD('会话安全状态','security',(acc.length&&accOk<acc.length)?'注意':'安全',(accOk<acc.length?'':'0 异常'),(acc.length&&accOk<acc.length)?'text-amber-400':'text-tertiary',
      '<span class="text-[11px]">'+accOk+' / '+acc.length+' 个账号会话有效</span><span class="font-mono-code-sm text-[11px] text-on-surface-variant">24H 监控</span>');
    html+='</div>';

    /* ---------- 12 栏栅格 ---------- */
    html+='<div class="grid grid-cols-12 gap-5 items-start puGrid">';

    /* ===== 左 8 栏：用户列表卡 ===== */
    html+='<section id="puListCard" class="col-span-12 lg:col-span-8 bg-surface-container-low border border-surface-container-high rounded-xl flex flex-col overflow-hidden">';
    html+='<div class="p-4 border-b border-outline-variant/25 flex flex-wrap items-center justify-between gap-3">';
    html+='<div class="flex items-center gap-3 flex-1 min-w-[260px]">';
    html+='<div class="relative w-full max-w-sm">'+
      '<span class="absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant pointer-events-none">'+MI('search','text-[17px]')+'</span>'+
      '<input id="puSearch" class="w-full h-9 bg-background border border-outline-variant/30 focus:border-primary-container rounded-lg pl-9 pr-3 text-body-md font-body-md text-on-surface placeholder-outline outline-none transition-all" placeholder="搜索用户名、关联抖音号..." data-input="_puSearch" value="'+esc(App.state._puQ||'')+'"></div>';
    html+='<div class="relative">'+
      '<select class="h-9 bg-background border border-outline-variant/30 text-body-md font-body-md text-on-surface pl-3 pr-8 rounded-lg focus:border-primary-container outline-none cursor-pointer" data-change="_puRole">'+
        '<option value="all"'+(App.state._puRole==='all'?' selected':'')+'>所有角色: 全部</option>'+
        '<option value="admin"'+(App.state._puRole==='admin'?' selected':'')+'>管理员 ('+nAdmin+')</option>'+
        '<option value="user"'+(App.state._puRole==='user'?' selected':'')+'>普通用户 ('+(users.length-nAdmin)+')</option>'+
      '</select></div>';
    html+='</div>';
    html+='<div class="flex items-center gap-2">'+
      '<span class="text-body-sm font-mono-code-sm text-on-surface-variant" id="puCount">显示 '+users.length+' / '+users.length+' 记录</span>'+
      '<button class="w-8 h-8 border border-outline-variant/30 bg-background hover:bg-surface-container-high text-on-surface-variant rounded-lg transition-colors flex items-center justify-center" title="刷新" data-click="App.refresh">'+MI('refresh','text-[16px]')+'</button>'+
      '</div>';
    html+='</div>';

    /* [v6.15] 手机端：6 列表格换成卡片（#puCards），点卡片弹层看完整字段与操作 */
    html+='<div class="overflow-x-auto msrc-hidden" id="puWrap"><table class="w-full text-left border-collapse">'+
      '<thead><tr class="border-b border-outline-variant/20 bg-background/50 text-label-uppercase font-label-uppercase text-on-surface-variant">'+
      '<th class="py-3 px-4">用户名 &amp; 账号</th><th class="py-3 px-3">角色权限</th><th class="py-3 px-3">推送通道</th>'+
      '<th class="py-3 px-3">关联抖音号</th><th class="py-3 px-3 text-center">状态</th><th class="py-3 px-4 text-right">操作</th>'+
      '</tr></thead><tbody id="puTbody" class="divide-y divide-outline-variant/15 text-body-md font-body-md"></tbody></table></div>'+
      '<div class="mcards mcards-flush" id="puCards"></div>';

    html+='<div class="px-4 py-3 bg-background/40 border-t border-outline-variant/20 flex items-center justify-between text-body-sm text-on-surface-variant gap-3 flex-wrap">'+
      '<span class="font-mono-code-sm text-[11px]">共计 '+users.length+' 个账号，默认每页 10 条</span>'+
      '<div class="flex items-center gap-1 font-mono-code-sm" id="puPageBox"></div></div>';
    html+='</section>';

    /* ===== 右 4 栏 ===== */
    const _pc=pc||{};
    const _cfg=_pc.config||{};
    const _editing=(App.state.pushEdit===true)||!_cfg.channel;
    html+='<div id="puAside" class="col-span-12 lg:col-span-4 flex flex-col gap-5">';

    /* 卡 1：推送通道说明（WxPusher）+ 当前配置 */
    html+='<section class="bg-surface-container-low border border-surface-container-high rounded-xl p-5 flex flex-col gap-4" id="pushCard">';
    html+='<div class="flex items-center justify-between pb-3 border-b border-outline-variant/20 gap-2">'+
      '<div class="flex items-center gap-2">'+MI('send','text-[20px] text-primary-container')+
      '<h2 class="text-headline-md font-headline-md text-on-surface text-[15px]">推送通道说明</h2></div>'+
      '<span class="text-body-sm font-mono-code-sm text-tertiary bg-tertiary/10 px-2 py-0.5 rounded border border-tertiary/25 shrink-0">WxPusher 单用户绑定</span></div>';
    html+='<p class="text-body-md font-body-md text-on-surface-variant leading-relaxed">绑定用户的微信推送 UID 后，该用户负责的好友断火告警以及每日早报将自动精准投递，无需值守前端。</p>';
    html+='<div class="flex flex-col gap-1.5">'+
      '<div class="flex items-center justify-between text-body-sm font-mono-code-sm text-on-surface-variant">'+
        '<span>通道标识格式 (UID)</span>'+
        '<button class="text-[10px] text-primary-container hover:underline" data-click="Actions.copyText" data-arg="UID_xxxxxxxxxxxxxxxxxxxxxxxxxxxx">复制格式</button></div>'+
      '<div class="bg-background border border-outline-variant/30 p-2.5 rounded-lg flex items-center justify-between font-mono-code-sm text-[12px] text-tertiary">'+
        '<code>UID_xxxxxxxxxxxxxxxxxxxxxxxxxxxx</code>'+
        '<button class="text-on-surface-variant hover:text-on-surface" title="复制格式" data-click="Actions.copyText" data-arg="UID_xxxxxxxxxxxxxxxxxxxxxxxxxxxx">'+MI('content_copy','text-[15px]')+'</button></div></div>';

    if(amAdmin&&_names.length){
      html+='<div class="flex items-center gap-2 flex-wrap"><span class="text-body-sm font-body-sm text-on-surface-variant">配置给谁：</span>'+
        '<select id="pushTarget" class="h-9 bg-background border border-outline-variant/30 text-body-md font-body-md text-on-surface pl-3 pr-8 rounded-lg focus:border-primary-container outline-none cursor-pointer" data-change="Actions.pushTargetChange" data-pass-this="1">';
      _names.forEach(n=>{html+='<option value="'+esc(n)+'"'+(n===_tu?' selected':'')+'>'+esc(n)+(n===App.state.loginUser?'（我）':'')+'</option>';});
      html+='</select></div>';
    }
    if(_cfg.channel){
      html+='<div class="text-body-sm font-body-sm text-on-surface-variant leading-relaxed p-3 rounded-lg bg-background border border-outline-variant/25">当前已配置：<b class="text-on-surface">'+esc(_cfg.channel_label||_cfg.channel)+'</b>'+
        ' · '+((_cfg.enabled!==false)?'<span class="text-tertiary">已启用</span>':'<span class="text-error">已停用</span>')+
        (_cfg.has_token?(' · Token '+esc(_cfg.token_hint||'')):'')+
        (_cfg.has_webhook?(' · Webhook '+esc(_cfg.webhook_hint||'')):'')+
        ((_cfg.daily!==false)?' · 每天09:00早报开':' · 早报关')+'</div>';
      html+='<div class="flex items-center gap-1.5 flex-wrap">'+
        '<button class="h-9 px-3 rounded-lg bg-primary-container hover:bg-secondary text-white text-body-sm font-semibold transition-all active:scale-95" data-click="Actions.pushEditToggle" data-pass-this="1">'+(_editing?'收起表单':'编辑配置')+'</button>'+
        '<button class="h-9 px-3 rounded-lg border border-outline-variant/30 bg-background hover:bg-surface-container-high text-on-surface text-body-sm font-medium transition-all" data-click="Actions.pushToggle" data-pass-this="1">'+((_cfg.enabled!==false)?'停用推送':'启用推送')+'</button>'+
        '<button class="h-9 px-3 rounded-lg border border-outline-variant/30 bg-background hover:bg-surface-container-high text-on-surface text-body-sm font-medium transition-all" data-click="Actions.testPushConfig" data-pass-this="1">发送测试消息</button>'+
        '<button class="h-9 px-3 rounded-lg border border-error/30 bg-error/10 hover:bg-error/20 text-error text-body-sm font-medium transition-all" data-click="Actions.clearPushConfig" data-pass-this="1">删除配置</button>'+
        '<span class="text-body-sm font-body-sm text-on-surface-variant" id="pushTip"></span></div>';
    }else{
      html+='<div class="text-body-sm font-body-sm text-on-surface-variant leading-relaxed p-3 rounded-lg bg-background border border-outline-variant/25">尚未配置推送通道 —— 在下面选择通道、填好密钥并保存即可。'+((_pc.global_configured)?'（管理员已在全局 .env 配过备用通道，未配置时会用它兜底）':'')+'</div>';
    }

    if(_editing){
      html+='<div class="flex flex-col gap-2.5">';
      html+='<select id="pushChannel" class="h-9 bg-background border border-outline-variant/30 text-body-md font-body-md text-on-surface pl-3 pr-8 rounded-lg focus:border-primary-container outline-none cursor-pointer">';
      ((_pc.channels)||[{value:'',label:'关闭'}]).forEach(c=>{
        html+='<option value="'+esc(c.value)+'"'+((c.value||'')===(_cfg.channel||'')?' selected':'')+'>'+esc(c.label)+'</option>';
      });
      html+='</select>';
      html+='<input id="pushToken" class="h-9 px-3 rounded-lg bg-background border border-outline-variant/30 text-on-surface text-body-sm placeholder-outline outline-none focus:border-primary-container transition-colors" placeholder="Token：WxPusher appToken / pushplus token'+(_cfg.has_token?('（已存 '+esc(_cfg.token_hint)+'）'):'')+'">';
      html+='<input id="pushWebhook" class="h-9 px-3 rounded-lg bg-background border border-outline-variant/30 text-on-surface text-body-sm placeholder-outline outline-none focus:border-primary-container transition-colors" placeholder="Webhook：WxPusher UID / 企业微信 / Bark'+(_cfg.has_webhook?('（已存 '+esc(_cfg.webhook_hint)+'）'):'')+'">';
      html+='<label class="text-body-sm font-body-sm text-on-surface-variant flex items-center gap-2"><input type="checkbox" id="pushEnabled"'+(_cfg.enabled!==false?' checked':'')+'> 启用推送</label>';
      html+='<label class="text-body-sm font-body-sm text-on-surface-variant flex items-center gap-2"><input type="checkbox" id="pushDaily"'+(_cfg.daily!==false?' checked':'')+'> 每天 09:00 推早报</label>';
      html+='<div class="flex items-center gap-1.5 flex-wrap">'+
        '<button class="h-9 px-3.5 rounded-lg bg-primary-container hover:bg-secondary text-white text-body-sm font-semibold transition-all active:scale-95" data-click="Actions.savePushConfig" data-pass-this="1">保存</button>'+
        '<button class="h-9 px-3 rounded-lg border border-outline-variant/30 bg-background hover:bg-surface-container-high text-on-surface text-body-sm font-medium transition-all" data-click="Actions.testPushConfig" data-pass-this="1">发送测试消息</button>'+
        (_cfg.channel?'<button class="h-9 px-3 rounded-lg border border-error/30 bg-error/10 hover:bg-error/20 text-error text-body-sm font-medium transition-all" data-click="Actions.clearPushConfig" data-pass-this="1">删除配置</button>':'')+
        '<span class="text-body-sm font-body-sm text-on-surface-variant" id="pushTip"></span></div>';
      html+='<div class="text-[11px] text-on-surface-variant leading-relaxed p-2.5 rounded-lg bg-background border border-outline-variant/20">'+
        '通道怎么填：<b class="text-on-surface">WxPusher</b> = wxpusher.zjiecode.com 创建应用拿 appToken 填 Token、扫码关注后拿 UID 填 Webhook（推荐）；'+
        '<b class="text-on-surface">微信 ClawBot</b> = pushplus 绑定后拿到的 token；<b class="text-on-surface">企业微信机器人</b> = 群机器人 Webhook；'+
        '<b class="text-on-surface">Server酱</b> = SCT 开头的 token；<b class="text-on-surface">Bark</b> = https://api.day.app/你的key。'+
        '密钥只显示前后几位，输入框留空表示不修改已保存的值。</div>';
      html+='</div>';
    }
    html+='</section>';

    /* [v6.2] 「登录安全与账号会话」卡按用户要求移除 */

    html+='</div>'; /* /右栏 */

    /* [v6.8] 添加面板用户：放进栅格与左侧用户列表卡同宽对齐（col-span-8），不再居中窄条
       保留 v3 id 契约：puName / puPass / puAcc / puAdmin */
    if(amAdmin){
      html+='<section id="addUserBox" class="col-span-12 lg:col-span-8 p-5 rounded-xl bg-surface-container-low border border-outline-variant/25 flex flex-col gap-2.5">'+
        '<div class="flex items-center gap-2"><span class="text-headline-md font-headline-md text-[15px] font-semibold text-on-surface">添加面板用户</span>'+
        '<span class="font-mono-code-sm text-mono-code-sm px-2 py-0.5 rounded-full bg-surface-container-high text-on-surface-variant border border-outline-variant/40">admin only</span></div>'+
        '<input id="puName" class="h-9 px-3 rounded-lg bg-surface-container border border-outline-variant/30 text-on-surface text-body-sm placeholder-outline outline-none focus:border-primary-container transition-colors" placeholder="用户名">'+
        '<input id="puPass" class="h-9 px-3 rounded-lg bg-surface-container border border-outline-variant/30 text-on-surface text-body-sm placeholder-outline outline-none focus:border-primary-container transition-colors" type="password" placeholder="密码">'+
        '<input id="puAcc" class="h-9 px-3 rounded-lg bg-surface-container border border-outline-variant/30 text-on-surface text-body-sm placeholder-outline outline-none focus:border-primary-container transition-colors" placeholder="关联抖音号(逗号分隔多个)">'+
        '<label class="text-body-sm font-body-sm text-on-surface-variant flex items-center gap-2"><input type="checkbox" id="puAdmin"> 设为管理员</label>'+
        '<button class="h-9 px-3.5 rounded-lg bg-primary-container hover:bg-secondary text-white text-body-sm font-semibold transition-all active:scale-95" data-click="Actions.panelUserAdd">添加用户</button>'+
        '<div class="text-[11px] text-on-surface-variant leading-relaxed">管理员可添加/删除用户、修改密码，并代为配置推送；普通用户只能改自己的密码与通知。</div>'+
        '</section>';
    }
    html+='</div>'; /* /栅格 */


    ensureView('panelusers').innerHTML=html;
    _puApply();
    _hdrPanelUsers((App.state._puAll||[]).length);
  }catch(e){if(e.message!=='unauthorized')viewError('panelusers',e);}
};
/*================ 抖音账号（Stitch 04 稿 1:1 还原） ================*/
Loaders.accounts=async(live)=>{
  try{
    /* [修复20261002] 渲染拆两步：先 live=0 秒开（只读文件），账号行立刻出来；
       登录状态由 refreshAccountStatus() 在后台带 live=1 拉回来后再重渲染一次。 */
    if(!live)loading('accounts','g2');
    const r=await api('/api/accounts'+(live?'?live=1':'?live=0'));
    const acc=r.accounts||[];
    App.state.accounts=acc;
    if(!App.state.currentAccount){
      const saved=localStorage.getItem('current_account');
      App.state.currentAccount=(saved&&acc.find(a=>a.unique_id===saved))?.unique_id||acc[0]?.unique_id||null;
    }
    const sw=document.getElementById('accSwitch');
    if(acc.length>0){sw.style.display='flex';App.updateAccSwitcher();App.updateSidebar();}
    else{sw.style.display='none';}

    /* ---------- 会话状态判定（v3 语义 → Stitch 配色 tone） ---------- */
    const _stOf=a=>{
      const ck=a.cookie||{},tg=(a.targets||[]).length;
      if(!ck.has)return{k:'none',t:'无会话',tone:'warn',ico:'hourglass_top',
        walk:'尚未导入 cookie · 登录后可参与续火花调度',
        note:'等待一次扫码 / 短信登录或导入 cookie 以建立会话'};
      if(ck.parse_err)return{k:'bad',t:'格式异常',tone:'bad',ico:'error',
        walk:'cookie 解析异常 · 需重新导入',
        note:'会话失效，该账号的续火花任务已暂停'};
      if(ck.live===false)return{k:'chk',t:'校验中…',tone:'idle',ico:'sync',
        walk:'正在握手校验登录态',
        note:'等待一次安全 Ping 测试验证接口可用性'};
      if(ck.session&&!ck.expired)return{k:'ok',t:'在线',tone:'ok',ico:'check_circle',
        walk:'会话有效 · cookie '+(ck.count||0)+' 条 · 目标 '+tg+' 位',
        note:'目标 '+tg+' 位好友 · 该账号参与续火花调度'};
      if(ck.session&&ck.expired)return{k:'exp',t:'会话已过期',tone:'bad',ico:'error',
        walk:'会话已过期 · 需重新授权后参与今日任务',
        note:'会话失效，该账号的续火花任务已暂停'};
      return{k:'nos',t:'无登录会话',tone:'bad',ico:'error',
        walk:'已导入 cookie 但无有效登录会话',
        note:'需重新登录后方可参与今日任务'};
    };
    const _ac={all:acc.length,ok:0,bad:0,chk:0};
    acc.forEach(a=>{const s=_stOf(a).k;
      if(s==='ok')_ac.ok++;
      else if(s==='bad'||s==='exp'||s==='nos')_ac.bad++;
      else _ac.chk++;});
    const _af=App.state.accFilter||'all';
    const _alist=_af==='all'?acc:acc.filter(a=>{const s=_stOf(a).k;
      if(_af==='ok')return s==='ok';
      if(_af==='bad')return s==='bad'||s==='exp'||s==='nos';
      return s==='chk'||s==='none';});

    /* ---------- 汇总指标 ---------- */
    const _sumTgt=acc.reduce((s,a)=>s+((a.targets||[]).length),0);
    const _sumCk=acc.reduce((s,a)=>s+(((a.cookie||{}).count)||0),0);
    const _badCk=acc.filter(a=>((a.cookie||{}).parse_err)).length;
    const _okRate=acc.length?Math.round(_ac.ok/acc.length*100):0;
    const _maxTgt=Math.max(1,Math.max.apply(null,[1].concat(acc.map(a=>(a.targets||[]).length))));

    /* tone → 样式 */
    const TONE={
      /* [v5.5 收敛绿] 状态色只留在胶囊+圆点；头像框/说明文字回归中性（用户反馈全绿太难看） */
      ok:{pill:'bg-tertiary/10 border-tertiary/30 text-tertiary',dot:'bg-tertiary',
          av:'bg-surface-container-high border-outline-variant/40 text-outline',walk:'text-on-surface-variant'},
      bad:{pill:'bg-error/15 border-error/40 text-error',dot:'bg-error',
          av:'bg-error/10 border-error/30 text-error',walk:'text-error'},
      warn:{pill:'bg-amber-500/10 border-amber-500/30 text-amber-400',dot:'bg-amber-400',
          av:'bg-amber-500/10 border-amber-500/30 text-amber-400',walk:'text-amber-400'},
      idle:{pill:'bg-surface-container border-outline-variant/40 text-on-surface-variant',dot:'bg-outline',
          av:'bg-surface-container-high border-outline-variant/40 text-outline',walk:'text-on-surface-variant'}
    };
    const BTN='h-8 px-2.5 rounded-lg border border-outline-variant/30 bg-surface-container hover:bg-surface-container-high text-on-surface text-body-sm font-medium transition-all active:scale-95';

    /* ---------- 页面工具条（Stitch 04 稿 header 右侧 + 副标题） ---------- */
    let html='<div class="flex items-center justify-between gap-3 flex-wrap">';
    html+='<div class="flex items-center gap-3 min-w-0">'+
      '<span class="text-body-sm font-body-sm text-on-surface-variant">共 <b class="text-on-surface">'+acc.length+'</b> 个账号 · 登录态每轮任务前校验</span>'+
      '<span class="hidden xl:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-surface-container-low border border-outline-variant/20 font-mono-code-sm text-mono-code-sm text-on-surface-variant">'+
        '<span class="w-2 h-2 rounded-full bg-tertiary"></span><span>数据每 6 小时自动抓取 · 最近抓取 06:00</span></span>'+
      '</div>';
    html+='</div>';

    /* ---------- 12 栏栅格 ---------- */
    html+='<div class="grid grid-cols-12 gap-5 items-start">';

    /* ===== 左 8 栏 ===== */
    html+='<div class="col-span-12 flex flex-col gap-5">';

    /* 1) 筛选条 */
    html+='<div class="flex items-center justify-between gap-3 flex-wrap bg-surface-container-low p-3.5 rounded-2xl border border-outline-variant/25">';
    html+='<div class="flex items-center gap-2">'+
      '<span class="text-headline-md font-headline-md text-[15px] font-semibold text-on-surface">已绑定的抖音账号</span>'+
      '<span class="font-mono-code-sm text-mono-code-sm px-2 py-0.5 rounded-full bg-surface-container-high text-on-surface-variant border border-outline-variant/40">'+acc.length+'</span></div>';
    const _seg=(k,t,dotCls)=>'<button type="button" class="px-2.5 py-1 rounded-md text-body-sm font-medium transition-colors flex items-center gap-1 '+
      (_af===k?'bg-surface-container text-primary-container border border-primary-container/30':'text-on-surface-variant hover:text-on-surface hover:bg-surface-container')+
      '" data-click="Actions.accFilter" data-args="'+k+'">'+
      (dotCls?'<span class="w-1.5 h-1.5 rounded-full '+dotCls+'"></span>':'')+'<span>'+t+'</span></button>';
    html+='<div class="flex items-center gap-1.5">'+
      _seg('all','全部 '+_ac.all,'')+
      _seg('ok','在线 '+_ac.ok,'bg-tertiary')+
      _seg('bad','失效 '+_ac.bad,'bg-error')+
      _seg('chk','待验证 '+_ac.chk,'bg-amber-400')+
      '</div>';
    html+='</div>';

    /* 2) 账号行列表 */
    if(!acc.length){
      html+='<div class="p-8 text-center rounded-2xl bg-surface-container-low border border-outline-variant/25 text-on-surface-variant text-body-md font-body-md">暂无账号，请在下方添加（抖音号 unique_id）</div>';
    }else if(!_alist.length){
      html+='<div class="p-8 text-center rounded-2xl bg-surface-container-low border border-outline-variant/25 text-on-surface-variant text-body-md font-body-md">当前筛选条件下没有账号</div>';
    }else{
      html+='<div class="flex flex-col gap-3">';
      _alist.forEach(a=>{
        const ck=a.cookie||{},s=_stOf(a),tn=TONE[s.tone];
        const isCur=a.unique_id===App.state.currentAccount;
        const idx=acc.indexOf(a);
        const bad=s.tone==='bad';
        html+='<div class="p-4 rounded-2xl border transition-all duration-150 flex flex-col gap-3 relative overflow-hidden '+
          (bad?'bg-[#1d161a] border-error/40 hover:border-error/60':'bg-surface-container-low border-outline-variant/30 hover:border-outline-variant/60')+
          (isCur?' ring-1 ring-primary-container/25':'')+'">';
        if(bad)html+='<div class="absolute top-0 left-0 w-1 h-full bg-error"></div>';

        /* 行头：头像 + 详情 + 状态胶囊（[v6.11] 头像=该账号真实抖音头像，不再提供自定义更换） */
        html+='<div class="flex items-start justify-between gap-3 '+(bad?'pl-1':'')+'">';
        html+='<div class="flex items-center gap-3 min-w-0">';
        html+='<div class="relative shrink-0">'+
          '<div class="w-11 h-11 rounded-xl overflow-hidden relative block bg-surface-container border border-outline-variant/20 flex items-center justify-center text-on-surface-variant text-[15px] font-bold">'+accAvLetter(a)+accAvImg(a)+'</div>'+
          (isCur?'<span class="absolute -bottom-1 -right-1 text-[9px] font-bold px-1 rounded bg-primary-container text-white">当前</span>':'')+
          '</div>';
        html+='<div class="flex flex-col min-w-0">';
        html+='<div class="flex items-center gap-2 flex-wrap">'+
          '<span class="text-headline-md font-headline-md text-[15px] font-bold text-on-surface">'+esc(a.username||a.unique_id)+'</span>'+
          '<span class="font-mono-code-sm text-mono-code-sm text-on-surface-variant/90 bg-surface-container px-1.5 py-0.5 rounded border border-outline-variant/20 flex items-center gap-1">'+
            '<span>'+esc(a.unique_id)+'</span>'+
            '<button class="text-on-surface-variant hover:text-primary-container transition-colors" title="复制 ID" data-click="Actions.copyText" data-arg="'+esc(a.unique_id)+'">'+MI('content_copy','text-[13px]')+'</button>'+
          '</span>'+
          '<span class="text-[10px] px-2 py-0.5 rounded-full bg-surface-container text-on-surface-variant border border-outline-variant/30">'+(ck.has?('cookie '+(ck.count||0)+' 条'):'未导入 cookie')+'</span>'+
          /* [v6.20] 归属面板用户：管理员反馈「看不出哪个抖音号是谁的」。后端 /api/accounts 补了 owners 字段 */
          (function(){
            const ow=(a.owners||[]).filter(Boolean);
            if(!ow.length)return '<span class="text-[10px] px-2 py-0.5 rounded-full bg-surface-container text-on-surface-variant/70 border border-outline-variant/30" title="没有绑定到任何面板用户（只有管理员可见）">归属 未分配</span>';
            return '<span class="text-[10px] px-2 py-0.5 rounded-full bg-primary-container/10 text-primary-container border border-primary-container/25" title="该抖音号归属的面板用户">归属 '+ow.map(esc).join('、')+'</span>';
          })()+
          '</div>';
        html+='<div class="flex items-center gap-2 mt-1 text-body-sm font-body-sm '+tn.walk+'">'+
          MI(s.ico,'text-[14px]')+'<span>'+esc(s.walk)+'</span></div>';
        html+='</div></div>';
        html+='<div class="flex items-center gap-1.5 px-2.5 py-1 rounded-full border text-[11px] font-medium shrink-0 '+tn.pill+'">'+
          '<span class="w-2 h-2 rounded-full '+tn.dot+(s.tone==='ok'?' animate-pulse':'')+'"></span><span>'+s.t+'</span></div>';
        html+='</div>';

        /* 操作簇 */
        html+='<div class="pt-2 border-t flex items-center justify-between gap-3 flex-wrap '+(bad?'pl-1 border-error/20':'border-outline-variant/15')+'">';
        html+='<div class="flex items-center gap-1.5 text-body-sm font-body-sm '+(bad?'text-error/90':'text-on-surface-variant')+' min-w-0">'+
          MI(bad?'lock':'task_alt','text-[15px] '+(bad?'':'text-on-surface-variant'))+'<span class="truncate">'+esc(s.note)+'</span></div>';
        html+='<div class="flex items-center gap-1.5 shrink-0">';
        if(s.tone==='ok'){
          html+='<button class="'+BTN+'" data-click="Actions.startQr" data-arg="'+esc(a.unique_id)+'">网页登录抖音</button>';
          html+='<button class="'+BTN+'" data-click="Actions.startHeadLogin" data-arg="'+esc(a.unique_id)+'" data-pass-this="1">远程登录抖音</button>';
          html+='<button class="'+BTN+'" data-click="Actions.startSmsLogin" data-arg="'+esc(a.unique_id)+'">短信登录</button>';
        }else if(bad){
          html+='<button class="h-8 px-3 rounded-lg bg-primary-container hover:bg-secondary text-white text-body-sm font-semibold flex items-center gap-1 transition-all shadow-[0_0_12px_rgba(255,122,69,0.25)] active:scale-95" data-click="Actions.startQr" data-arg="'+esc(a.unique_id)+'">'+MI('refresh','text-[15px]')+'<span>重新登录</span></button>';
          html+='<button class="'+BTN+'" data-click="Actions.startHeadLogin" data-arg="'+esc(a.unique_id)+'" data-pass-this="1">远程登录抖音</button>';
          html+='<button class="'+BTN+'" data-click="Actions.startSmsLogin" data-arg="'+esc(a.unique_id)+'">短信验证</button>';
        }else{
          html+='<button class="h-8 px-3 rounded-lg border border-amber-500/40 bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 text-body-sm font-semibold transition-all active:scale-95" data-click="Actions.verifyAccount" data-arg="'+esc(a.unique_id)+'">立即验证</button>';
          html+='<button class="'+BTN+'" data-click="Actions.startQr" data-arg="'+esc(a.unique_id)+'">网页登录抖音</button>';
          html+='<button class="'+BTN+'" data-click="Actions.startHeadLogin" data-arg="'+esc(a.unique_id)+'" data-pass-this="1">远程登录抖音</button>';
        }
        html+='<button class="h-8 w-8 rounded-lg border border-outline-variant/30 bg-surface-container hover:bg-surface-container-high text-on-surface-variant hover:text-on-surface flex items-center justify-center transition-all" title="更多操作" data-click="Actions.accMore" data-arg="'+idx+'">'+MI('more_vert','text-[16px]')+'</button>';
        html+='</div></div>';

        /* 更多操作（默认隐藏，纯 DOM toggle） */
        html+='<div class="hidden flex-wrap items-center gap-1.5 '+(bad?'pl-1':'')+'" id="accMore'+idx+'">';
        if(!isCur)html+='<button class="'+BTN+'" data-click="App.selectAccount" data-arg="'+esc(a.unique_id)+'">切换为当前管理账号</button>';
        html+='<button class="'+BTN+'" data-click="Actions.openImport" data-arg="'+esc(a.unique_id)+'">导入 cookie</button>';
        html+='<button class="'+BTN+'" data-click="Actions.editAccount" data-args="'+esc(a.unique_id)+'|'+esc(a.username||'').replace(/'/g,'')+'">编辑账号</button>';
        html+='<button class="h-8 px-2.5 rounded-lg border border-error/30 bg-error/10 hover:bg-error/20 text-error text-body-sm font-medium transition-all" data-click="Actions.removeAccount" data-args="'+esc(a.unique_id)+'|'+esc(a.username||'').replace(/'/g,'')+'">删除账号</button>';
        html+='</div>';
        html+='</div>';
      });
      html+='</div>';
    }

    /* 3) 巡检横幅 + 3 指标 pod */
    html+='<div class="flex flex-col gap-3">';
    html+='<div class="p-3 px-4 rounded-xl bg-surface-container-high/60 border border-outline-variant/25 flex items-center justify-between text-body-sm font-body-sm gap-3 flex-wrap">'+
      '<div class="flex items-center gap-2 text-on-surface-variant">'+
        MI('verified_user','text-[18px] text-primary-container')+
        '<span>登录态巡检：<strong class="text-on-surface font-medium">每轮任务前校验会话存活状态</strong></span>'+
        '<span class="text-outline-variant/40">|</span>'+
        '<span>待登录账号：'+((_ac.bad+_ac.chk)?('<span class="'+(_ac.bad?'text-error':'text-amber-400')+' font-medium">'+(_ac.bad+_ac.chk)+' 个待重新登录</span>'):'<span class="text-on-surface font-medium">全部在线</span>')+'</span>'+
      '</div>'+
      '<button class="text-primary-container hover:text-secondary flex items-center gap-0.5 text-body-sm font-medium" data-click="Actions.verifyAccount" data-arg="'+esc(App.state.currentAccount||'')+'">'+
        '<span>立即全量校验</span>'+MI('arrow_forward','text-[14px]')+'</button>'+
      '</div>';

    html+='<div class="grid grid-cols-3 gap-3">';
    const POD=(label,icon,val,unit,foot)=>'<div class="p-3.5 rounded-2xl bg-surface-container-low border border-outline-variant/30 flex flex-col justify-between">'+
      '<div class="flex items-center justify-between text-on-surface-variant">'+
        '<span class="text-label-uppercase font-label-uppercase tracking-wider">'+label+'</span>'+
        MI(icon,'text-[16px] text-primary-container')+'</div>'+
      '<div class="my-2"><div class="text-mono-metric-lg font-mono-metric-lg font-bold text-on-surface">'+val+' <span class="text-body-md font-body-md font-normal text-on-surface-variant">'+unit+'</span></div></div>'+
      '<div class="flex items-center gap-1 text-[11px] text-on-surface-variant">'+foot+'</div></div>';
    html+=POD('账号在线率',_ac.bad?'warning':'insights',_okRate,'%',
      MI(_ac.ok?'trending_up':'warning','text-[13px] '+(_ac.ok?'text-on-surface-variant':'text-error'))+
      '<span>'+_ac.ok+' 个在线 · '+_ac.bad+' 个失效</span>');
    html+=POD('关联火花目标','local_fire_department',_sumTgt,'位',
      '<span class="font-mono-code-sm text-on-surface-variant">覆盖 '+acc.length+' 个账号</span><span>· 单账号最多 '+_maxTgt+' 位</span>');
    html+=POD('Cookie 健康度',_badCk?'error':'shield',_badCk?'异常':'正常','',
      MI(_badCk?'error':'verified_user','text-[13px] '+(_badCk?'text-error':'text-on-surface-variant'))+
      '<span>共 '+_sumCk+' 条 cookie'+(_badCk?(' · '+_badCk+' 个账号解析异常'):' · 全部解析正常')+'</span>');
    html+='</div></div>';

    /* 4) 新增账号录入条（保留 v3 的 id 契约：addAccUid / addAccName） */
    html+='<div id="addAccBox" class="p-4 rounded-2xl bg-surface-container-low border border-outline-variant/25 flex flex-col gap-3">'+
      '<div class="flex items-center gap-2"><span class="text-headline-md font-headline-md text-[15px] font-semibold text-on-surface">新增账号</span>'+
      '<span class="font-mono-code-sm text-mono-code-sm px-2 py-0.5 rounded-full bg-surface-container-high text-on-surface-variant border border-outline-variant/40">unique_id</span></div>'+
      '<div class="flex items-center gap-2 flex-wrap">'+
        '<input id="addAccUid" class="h-9 px-3 rounded-lg bg-surface-container border border-outline-variant/30 text-on-surface text-body-sm placeholder-outline-variant focus:border-primary-container outline-none transition-colors" placeholder="新账号抖音号 unique_id" style="width:210px">'+
        '<input id="addAccName" class="h-9 px-3 rounded-lg bg-surface-container border border-outline-variant/30 text-on-surface text-body-sm placeholder-outline-variant focus:border-primary-container outline-none transition-colors" placeholder="备注名（可选）" style="width:160px">'+
        '<button class="h-9 px-3.5 rounded-lg bg-primary-container hover:bg-secondary text-white text-body-sm font-semibold transition-all active:scale-95" data-click="Actions.addAccount">添加账号</button>'+
      '</div>'+
      '<div class="text-[11px] text-on-surface-variant leading-relaxed">多账号时按 TASKS 逐个执行；写操作前自动备份 .env。添加后需导入 cookie 或扫码登录才能参与续火花。</div>'+
      '</div>';
    html+='</div>'; /* /左 8 栏 */
    html+='</div>'; /* /栅格 */

    ensureView('accounts').innerHTML=html;
    _hdrAccounts();
    /* [新增20261002] 首屏用「未校验」的快速数据，这里后台把登录状态补成真值 */
    if(!live)App.refreshAccountStatus();
  }catch(e){if(e.message!=='unauthorized')viewError('accounts',e);}
};
/*================ 写操作：火花抓取 / 好友管理 ================*/
function _busy(btn){
  if(!btn||!(btn instanceof HTMLElement))return ()=>{};
  btn.classList.add('btn-busy');
  return ()=>{btn.classList.remove('btn-busy');};
}
const Actions={
  /* [v3 新增] 执行台账页类型芯片：写到隐藏的 #recTask 再触发查询 */
  recFilter(v,el){
    /* [v4] 类型芯片换成 Stitch 分段控件（不再有 .chip），激活态由 Loaders.logs 按 #recTask 计算 */
    const t=document.getElementById('recTask');
    if(t)t.value=v||'';
    App.state._recPage=1;
    Loaders.logs();
  },
  /* [v3 新增] 抖音账号页筛选芯片：纯前端过滤 */
  accFilter(v,el){
    /* [v4] 同上：账户页筛选芯片改为声明式（Loaders.accounts 按 state 计算激活态） */
    App.state.accFilter=v||'all';
    Loaders.accounts();
  },
  /* [v3 新增] 好友页筛选芯片：纯前端过滤，不额外请求后端 */
  friendFilter(v,el){
    /* [v4] 控件换成 Stitch 分段控件后不再有 .chip；直接改状态重渲染即可
       （激活态样式在 Loaders.friends 里按 state 计算）。
       [v11] 对齐小程序：切筛选是纯前端过滤（不重新请求后端）。 */
    App.state.friendFilter=v||'all';
    App.state._fsPage=1;
    if(document.getElementById('fvBody')){
      _fvApply();
      _hdrFriends(App.state._fvCnt||{all:0,risk:0,warn:0,ok:0});
    }else{Loaders.friends();}
  },
  async editAccount(uid,name){
    const newName=prompt('修改昵称：',name);
    if(newName===null)return;
    const newUid=prompt('修改抖音号（留空则不修改）：',uid);
    if(newUid===null)return;
    const body={username:newName};
    if(newUid.trim()&&newUid.trim()!==uid)body.unique_id=newUid.trim();
    try{
      const r=await api('/api/accounts/'+encodeURIComponent(uid),{method:'PUT',body});
      if(r.ok){toast('已修改','账号信息已更新','ok');Loaders.accounts();}
      else{toast('修改失败',r.error||'','err');}
    }catch(e){toast('修改失败',e.message,'err');}
  },
  async startSpark(force,btn){
    /* [v11] 火花页的「立即抓取」：对齐小程序 spark 页 —— 提交后轮询 job，
       期间按钮禁点并显示已用秒数，完成后自动刷新当前列表。 */
    if(App.state._sparkBusy){toast('抓取进行中','请等待当前任务结束','err');return;}
    if(typeof force!=='boolean')force=false;
    if(!force&&!confirm('立即抓取火花数据？\n\n会占用浏览器（其它自动化任务需要排队等待），大约 20~40 秒。'))return;
    const done=_busy(btn);
    App.state._sparkBusy=1;App.state._sparkSec=0;App.state._sparkMsg='正在提交抓取任务…';
    _sparkUi();
    try{
      const r=await api('/api/spark-check',{method:'POST',body:{force:!!force,account:App.state.currentAccount}});
      if(r.status==='cached'){
        App.state._sparkBusy=0;App.state._sparkMsg=r.message||'火花数据都是今天的（保鲜期内），无需重抓';
        _sparkUi();done();toast('无需重抓',r.message,'ok');
        if(App.current()==='friends')Loaders.friends();
        return;
      }
      if(r.ok===false||!r.job_id){
        App.state._sparkBusy=0;App.state._sparkMsg=r.message||r.error||'触发失败';
        _sparkUi();done();toast('触发失败',r.error||r.message,'err');
        return;
      }
      App.state._sparkMsg=r.message||'正在抓取真实火花数据…';
      _sparkUi();
      toast('抓取任务已启动',r.message);
      let tries=0;
      const iv=setInterval(async()=>{tries++;
        App.state._sparkSec=tries*3;_sparkUi();
        try{const j=await api('/api/spark-check/'+r.job_id);
          if(j.status==='done'){
            clearInterval(iv);
            const missed=(j.missed||[]).length;
            App.state._sparkBusy=0;
            App.state._sparkMsg=missed?('抓取完成，'+missed+' 位好友未更新'):'抓取完成，数据已刷新';
            _sparkUi();done();
            toast(missed?('完成，'+missed+' 位未更新'):'抓取完成','','ok');
            if(App.current()==='friends')Loaders.friends();
          }else if(j.status==='error'){
            clearInterval(iv);
            const m=j.need_login?'该账号登录态已失效，请先重新登录':('抓取出错：'+(j.error||''));
            App.state._sparkBusy=0;App.state._sparkMsg=m;_sparkUi();done();toast(m,'','err');
          }else if(j.status==='not_found'){
            clearInterval(iv);
            App.state._sparkBusy=0;App.state._sparkMsg='任务已丢失（面板重启过），请重新抓取';
            _sparkUi();done();toast(App.state._sparkMsg,'','err');
          }else if(tries>80){
            clearInterval(iv);
            App.state._sparkBusy=0;App.state._sparkMsg='抓取耗时过长，稍后刷新看看';_sparkUi();done();
          }
        }catch(e){
          clearInterval(iv);
          App.state._sparkBusy=0;App.state._sparkMsg='轮询中断，稍后刷新看看';_sparkUi();done();
        }
      },3000);
    }catch(e){
      App.state._sparkBusy=0;App.state._sparkMsg='触发失败：'+e.message;
      _sparkUi();done();toast('触发失败',e.message,'err');
    }
  },
  _pwdModal(title,hint){
    return new Promise(resolve=>{
      const win=document.createElement('div');
      win.style.cssText='position:fixed;inset:0;background:rgba(0,0,0,.55);z-index:99;display:flex;align-items:center;justify-content:center';
      const box=document.createElement('div');
      box.className='card';box.style.cssText='width:min(400px,calc(92vw / var(--ui-scale)))';
      box.innerHTML='<h4>'+esc(title||'请输入密码')+'</h4>'+
        '<div class="tiny muted" style="margin:6px 0 10px">'+esc(hint||'')+'</div>'+
        '<input id="_pwdInput" class="dark-input" type="password" style="width:100%" placeholder="新密码">'+
        '<div class="toolbar" style="justify-content:flex-end;margin-top:16px">'+
        '<button class="btn btn-ghost btn-sm" id="_pwdCancel">取消</button>'+
        '<button class="btn btn-primary btn-sm" id="_pwdOk">确定</button></div>';
      win.appendChild(box);document.body.appendChild(win);
      const inp=box.querySelector('#_pwdInput');
      const close=v=>{try{win.remove();}catch(e){}resolve(v);};
      box.querySelector('#_pwdCancel').onclick=()=>close(null);
      box.querySelector('#_pwdOk').onclick=()=>{const v=inp.value.trim();if(!v){toast('请输入新密码','','err');inp.focus();return;}close(v);};
      win.onclick=e=>{if(e.target===win)close(null);};
      inp.onkeydown=e=>{if(e.key==='Enter'){const v=inp.value.trim();if(v)close(v);}else if(e.key==='Escape')close(null);};
      setTimeout(()=>{try{inp.focus();}catch(e){}},50);
    });
  },
    changeMyPwd:async()=>{
      const np=await Actions._pwdModal('修改密码','请输入新密码');
      if(!np)return;
      try{const r=await api('/api/change-password',{method:'POST',body:{new_password:np}});
        if(r.ok)toast('密码已修改','请下次登录使用新密码','ok');
        else toast('修改失败',r.error||'','err');
      }catch(e){toast('修改失败',e.message,'err');}
  },
  /* 通知设置：保存推送通道（管理员可保存给别人；token/webhook 留空 = 不修改已存的） */
  savePushConfig:async(btn)=>{
    const tip=document.getElementById('pushTip');
    const body=_pushBody();
    body.channel=document.getElementById('pushChannel').value||'';
    const en=document.getElementById('pushEnabled'),dl=document.getElementById('pushDaily');
    body.enabled=en?en.checked:true;
    body.daily=dl?dl.checked:true;
    const tk=(document.getElementById('pushToken').value||'').trim();
    const wh=(document.getElementById('pushWebhook').value||'').trim();
    if(tk)body.token=tk;
    if(wh)body.webhook=wh;
    if(btn)btn.disabled=true;
    if(tip)tip.textContent='保存中…';
    try{
      const r=await api('/api/push-config',{method:'PUT',body});
      if(r.ok){
        const c=r.config||{};
        if(tip)tip.textContent='已保存 · '+(c.channel_label||'关闭')+(c.has_token?' · token '+c.token_hint:'')+(c.has_webhook?' · webhook '+c.webhook_hint:'');
        toast('通知设置已保存',(App.state.pushUser&&App.state.isAdmin?App.state.pushUser+' · ':'')+(c.channel_label||'已关闭推送'),'ok');
        App.state.pushEdit=false;
        Loaders.panelusers();
      }else if(tip)tip.textContent=r.error||'保存失败';
    }catch(e){if(tip)tip.textContent='保存失败：'+e.message;}
    finally{if(btn)btn.disabled=false;}
  },
  /* 通知设置：展开/收起编辑表单 */
  pushEditToggle:async(btn)=>{
    App.state.pushEdit=!(App.state.pushEdit===true);
    await Loaders.panelusers();
    const el=document.getElementById('pushCard');
    if(el&&el.scrollIntoView)el.scrollIntoView({behavior:'smooth',block:'start'});
  },
  /* 从用户列表点「通知设置」：切到该用户并展开表单 */
  pushEditUser:async(username)=>{
    if(!App.state.isAdmin&&username!==App.state.loginUser){toast('无权操作','只能配置自己的通知','err');return;}
    App.state.pushUser=username;App.state.pushEdit=true;
    await Loaders.panelusers();
    const el=document.getElementById('pushCard');
    if(el&&el.scrollIntoView)el.scrollIntoView({behavior:'smooth',block:'start'});
  },
  /* 通知设置卡片里的一键启用/停用 */
  pushToggle:async(btn)=>{
    const tip=document.getElementById('pushTip');
    if(btn)btn.disabled=true;
    try{
      const r=await api('/api/push-config/toggle',{method:'POST',body:_pushBody()});
      if(r.ok){toast(r.enabled?'已启用推送':'已停用推送',(App.state.pushUser||'')+' · '+(r.config&&r.config.channel_label||''),'ok');Loaders.panelusers();}
      else toast('操作失败',r.error||'','err');
    }catch(e){toast('操作失败',e.message,'err');}
    finally{if(btn)btn.disabled=false;}
  },
  /* 用户列表里的启用/停用（指定用户） */
  pushToggleUser:async(username)=>{
    if(!App.state.isAdmin&&username!==App.state.loginUser){toast('无权操作','只能配置自己的通知','err');return;}
    try{
      const r=await api('/api/push-config/toggle',{method:'POST',body:{username:username}});
      if(r.ok){toast(r.enabled?'已启用推送':'已停用推送',username,'ok');Loaders.panelusers();}
      else toast('操作失败',r.error||'','err');
    }catch(e){toast('操作失败',e.message,'err');}
  },
  /* 管理员切换「配置给谁」 */
  pushTargetChange:async(sel)=>{
    const v=(sel&&sel.value)||'';
    if(!v)return;
    App.state.pushUser=v;App.state.pushEdit=false;
    await Loaders.panelusers();
  },
  testPushConfig:async(btn)=>{
    const tip=document.getElementById('pushTip');
    if(btn)btn.disabled=true;
    if(tip)tip.textContent='发送中…';
    try{
      const r=await api('/api/push-config/test',{method:'POST',body:_pushBody()});
      const dt=r.delivery_text||'';
      if(tip)tip.textContent=r.ok?('已发送 · '+dt):('发送失败：'+(r.error||r.info||''));
      const good=r.ok&&r.delivery!=='pending'&&r.delivery!=='failed';
      toast(r.ok?(r.delivery==='pending'?'已发送，但可能收不到':'测试消息已发送'):'发送失败',
            r.ok?(dt||'收到即通道正常'):(r.error||r.info||''),good?'ok':(r.ok?'warn':'err'));
    }catch(e){
      if(tip)tip.textContent='发送失败：'+e.message;
      toast('发送失败',e.message,'err');
    }finally{if(btn)btn.disabled=false;}
  },
  /* 通知设置：删除推送配置（清空渠道 + 密钥，之后不再推送） */
  clearPushConfig:async(btn)=>{
    const who=(App.state.isAdmin&&App.state.pushUser)?App.state.pushUser:'我';
    if(!confirm('确认删除 '+who+' 的通知配置？\n将清空渠道、Token 和 Webhook，删除后不再推送（可随时重新配置）。'))return;
    const tip=document.getElementById('pushTip');
    const body=_pushBody();
    body.channel='';body.clear_token=true;body.clear_webhook=true;
    const en=document.getElementById('pushEnabled'),dl=document.getElementById('pushDaily');
    if(en)body.enabled=en.checked;
    if(dl)body.daily=dl.checked;
    if(btn)btn.disabled=true;
    if(tip)tip.textContent='删除中…';
    try{
      const r=await api('/api/push-config',{method:'PUT',body});
      if(r.ok){toast('通知配置已删除','将不再推送，可随时重新配置','ok');Loaders.panelusers();}
      else if(tip)tip.textContent=r.error||'删除失败';
    }catch(e){if(tip)tip.textContent='删除失败：'+e.message;}
    finally{if(btn)btn.disabled=false;}
  },
  panelUserAdd:async()=>{
    const name=document.getElementById('puName').value.trim();
    const pass=document.getElementById('puPass').value;
    const acc=document.getElementById('puAcc').value.trim();const accs=acc?acc.split(',').map(s=>s.trim()).filter(s=>s):[];
    const adm=document.getElementById('puAdmin').checked;
    if(!name||!pass){toast('请填写用户名和密码','','err');return;}
    try{const r=await api('/api/panel-users',{method:'POST',body:{username:name,password:pass,account_uids:accs,is_admin:adm}});
      if(r.ok){toast('已添加用户',name,'ok');Loaders.panelusers();}
      else toast('添加失败',r.error||'','err');
    }catch(e){toast('添加失败',e.message,'err');}
  },
  panelUserDel:async(name)=>{
    try{if(window.Sheet)Sheet.close();}catch(e){}
    if(!confirm('确认删除面板用户「'+name+'」？'))return;
    try{const r=await api('/api/panel-users/'+encodeURIComponent(name),{method:'DELETE'});
      if(r.ok){toast('已删除用户',name,'ok');Loaders.panelusers();}
      else toast('删除失败',r.error||'','err');
    }catch(e){toast('删除失败',e.message,'err');}
  },
  panelUserPwd:async(name)=>{
    try{if(window.Sheet)Sheet.close();}catch(e){}
    const np=await Actions._pwdModal('修改密码','为「'+name+'」设置新密码');
    if(!np)return;
    try{
      let r;
      if(App.state.isAdmin){
        r=await api('/api/panel-users/'+encodeURIComponent(name),{method:'PATCH',body:{password:np}});
      }else{
        r=await api('/api/change-password',{method:'POST',body:{new_password:np}});
      }
      if(r.ok){toast('密码已修改',name,'ok');Loaders.panelusers();}
      else toast('修改失败',r.error||'','err');
    }catch(e){toast('修改失败',e.message,'err');}
  },
  async scrapeContacts(btn){
    const done=_busy(btn);
    toast('正在抓取好友列表','约需 20~60 秒，请稍候');
    try{
      const r=await api('/api/scrape-contacts',{method:'POST',body:{account:App.state.currentAccount}});
      if(r.status==='running'&&r.job_id){
        let tries=0;
        const iv=setInterval(async()=>{
          tries++;
          try{const j=await api('/api/scrape-contacts/'+r.job_id);
            if(j.status==='done'){clearInterval(iv);done();App.state.scrapedContacts=j.result||[];App.state.scrapedHidden=false;App.state.showNonMutual=false;
              const _n=(j.result||[]).filter(c=>(c.chat_state||'')==='non_mutual').length;
              toast('抓取完成','共 '+App.state.scrapedContacts.length+' 个会话'+(_n?('，其中 '+_n+' 个「非互关·从未聊过」已隐藏'):''),'ok');_afterFriendMutate();}
            else if(j.status==='error'){clearInterval(iv);done();toast('抓取失败',j.error||'','err');}
            else if(tries>80){clearInterval(iv);done();toast('抓取超时','','err');}
          }catch(e){clearInterval(iv);done();}
        },3000);
      }else done();
    }catch(e){done();toast('抓取失败',e.message,'err');}
  },
  async addContact(sid,name,btn){
    if(!sid){toast('无抖音号','无法添加','','err');return;}
    const _sc0=App.state.scrapedContacts?.find(c=>(c.short_id||'')===sid);
    /* [新增20261001] 非互关空会话（聊天列表里只有系统限制提示）：抖音只允许发一条文字消息、
       续不了火花 → 加进名单前先明确确认一次，避免误加。 */
    if(_sc0&&(_sc0.chat_state||'')==='non_mutual'&&
       !confirm('「'+(name||sid)+'」在抖音里是「非互关·从未聊过」的空会话：\n'+
                '该会话没有聊天记录，只有一条「对方回复或关注你之前，只能发送一条文字消息」的系统提示，续不了火花。\n\n'+
                '仍然要加入续火花名单吗？'))return;
    const done=_busy(btn);
    toast('正在添加',name||sid);
    try{
      const sc=_sc0;
      const r=await api('/api/friends',{method:'POST',body:{unique_id:sid,mode:'uid',account:App.state.currentAccount,skip_resolve:true,name:name||'',avatar:(sc&&sc.avatar)||'',real_unique_id:(sc&&sc.unique_id)||''}});
      if(r.ok){toast('已添加',(name||sid)+' 已加入续火花名单','ok');}
      else toast('添加失败',r.error||'','err');
    }catch(e){toast('添加失败',e.message,'err');}
    finally{done();Actions.closeContact();_afterFriendMutate();}
  },
  /* [新增20261002] 抓取到的联系人卡片 → 点开看完整信息
     背景：手机端卡片放不下「最后一条」全文，名称/抖音号也被 ellipsis 截断。
     这里用动态弹窗（不改 console.html，避免静态文件缓存），整行可点。 */
  _contactSheet(){
    let m=document.getElementById('contactModal');
    if(m)return m;
    m=document.createElement('div');
    m.id='contactModal';
    m.setAttribute('style','display:none;position:fixed;inset:0;background:rgba(0,0,0,.6);z-index:98;align-items:center;justify-content:center;padding:14px');
    m.innerHTML='<div class="card" id="contactCard" style="width:min(440px,calc(94vw / var(--ui-scale)));max-height:calc(86vh / var(--ui-scale));overflow:auto;margin:0"></div>';
    m.addEventListener('click',function(e){if(e.target===m)Actions.closeContact();});
    document.body.appendChild(m);
    return m;
  },
  openContact(sid){
    const c=(App.state.scrapedContacts||[]).find(x=>String(x.short_id||'')===String(sid||''));
    if(!c){toast('联系人不在当前列表','列表可能已刷新，请重新抓取','err');return;}
    const sid2=c.short_id||'';
    const cname=c.title||c.nickname||'未知';
    const did=c.douyin_id||c.unique_id||'';
    const nonM=(c.chat_state||'')==='non_mutual';
    const pv=String(c.preview||'').trim();
    const already=(App.state.friends||[]).some(f=>String(f.short_id||'')===sid2);
    let h='<h4>'+ICON.users+'联系人详情<span class="tag">'+(already?'已在续火花名单':'未加入名单')+'</span></h4>';
    h+='<div class="row" style="align-items:flex-start">'+
       '<div style="flex:none">'+avatarHtml(c.avatar,cname)+'</div>'+
       '<div class="grow">'+
         '<div class="t" style="word-break:break-all">'+esc(cname)+'</div>'+
         '<div class="s mono" style="word-break:break-all">'+esc(did||'（无抖音号）')+'</div>'+
         (nonM?'<div style="margin-top:7px"><span class="badge b-gray">非互关·从未聊过</span></div>':'')+
       '</div></div>';
    h+='<div class="row" style="align-items:flex-start">'+
       '<span style="flex:none;color:var(--txt3);font-size:12px;width:64px">最后一条</span>'+
       '<span class="grow" style="font-size:12.5px;line-height:1.55;white-space:pre-wrap;word-break:break-word">'+
       esc(pv||'（抖音会话列表里没有可读内容）')+'</span></div>';
    if(c.last_time)h+='<div class="row"><span style="flex:none;color:var(--txt3);font-size:12px;width:64px">时间</span><span class="grow" style="font-size:12.5px">'+esc(c.last_time)+'</span></div>';
    if(nonM)h+='<div class="note tiny" style="margin-top:10px">该会话在抖音聊天列表里只有一条「对方回复或关注你之前，只能发送一条文字消息」的系统提示（双方未互关），续不了火花。</div>';
    h+='<div class="toolbar" style="justify-content:flex-end;margin-top:14px;flex-wrap:wrap;gap:8px">'+
       '<button class="btn btn-ghost btn-sm" data-click="Actions.closeContact">关闭</button>'+
       (did?'<button class="btn btn-ghost btn-sm" data-click="Actions.copyText" data-args="'+esc(did)+'" data-pass-this="1">复制抖音号</button>':'')+
       (already?'<span class="badge b-ok">已添加</span>'
              :'<button class="btn btn-primary btn-sm" '+(sid2?'':'disabled')+' data-click="Actions.addContact" data-args="'+esc(sid2)+'|'+esc(cname.replace(/'/g,''))+'" data-pass-this="1">加入续火花名单</button>')+
       '</div>';
    const m=Actions._contactSheet();
    document.getElementById('contactCard').innerHTML=h;
    m.style.display='flex';
  },
  closeContact(){const m=document.getElementById('contactModal');if(m)m.style.display='none';},
  /* [v5.6] 头像选择器：账号页 / 面板用户页点击头像打开 */
  _avatarSheet(){
    let m=document.getElementById('avatarPickerModal');
    if(m)return m;
    m=document.createElement('div');
    m.id='avatarPickerModal';
    m.setAttribute('style','display:none;position:fixed;inset:0;background:rgba(0,0,0,.6);z-index:98;align-items:center;justify-content:center;padding:14px');
    m.innerHTML='<div class="card" id="avatarPickerCard" style="width:min(400px,calc(94vw / var(--ui-scale)));max-height:calc(86vh / var(--ui-scale));overflow:auto;margin:0"></div>';
    m.addEventListener('click',function(e){if(e.target===m)Actions.closeAvatarPicker();});
    document.body.appendChild(m);
    return m;
  },
  openAvatarPicker(kind,key){
    try{if(window.Sheet)Sheet.close();}catch(e){}
    /* [v6.11] 抖音账号改用真实头像后，选择器只服务「面板用户」（pu） */
    /* [20261014b] 当前若用的是面板落库头像（例如小程序里授权的微信头像），
       头像库里没有对应项 → cur 置空，不高亮任何一张，别误导用户 */
    const _puCur=(kind==='pu')?avPanelUrl(key):'';
    const cur=_puCur?'':avGet(kind,key);
    let _custom='';try{_custom=localStorage.getItem('avatar.'+kind+'.'+key)||'';}catch(e){}
    let h='<h4>选择头像<span class="tag">面板用户</span></h4>';
    h+='<div style="font-size:12px;color:var(--txt3);margin-top:2px">点击头像即选用；会同步保存到面板，换设备/清缓存也不会丢。'+
      (_puCur?'当前头像来自其他设备（如小程序）的授权，选下面任意一张即可覆盖。'
             :(_custom?'当前为自定义头像，点「恢复默认」可回到系统自动分配。':'当前为系统自动分配的头像，可任意更换。'))+'</div>';
    AVATARS.forEach(function(g){
      h+='<div style="font-size:12px;font-weight:600;color:var(--txt);opacity:.75;margin:12px 0 8px">'+g.cat+'<span style="font-weight:400;color:var(--txt3);margin-left:6px">'+g.items.length+'</span></div>';
      h+='<div style="display:grid;grid-template-columns:repeat(4,1fr);gap:10px">';
      g.items.forEach(function(it){
        const sel=(it[0]===cur);
        h+='<button title="'+it[1]+'" class="transition-transform active:scale-95" style="position:relative;border-radius:12px;overflow:hidden;aspect-ratio:1/1;padding:0;border:2px solid '+(sel?'#ff7a45':'transparent')+'" data-click="Actions.pickAvatar" data-args="'+esc(kind)+'|'+esc(key)+'|'+it[0]+'">'+avImgEl(it[0])+'</button>';
      });
      h+='</div>';
    });
    h+='<div class="toolbar" style="justify-content:flex-end;margin-top:12px;flex-wrap:wrap;gap:8px">'+
      '<button class="btn btn-ghost btn-sm" data-click="Actions.pickAvatar" data-args="'+esc(kind)+'|'+esc(key)+'|">恢复默认</button>'+
      '<button class="btn btn-primary btn-sm" data-click="Actions.closeAvatarPicker">完成</button></div>';
    const m=Actions._avatarSheet();
    document.getElementById('avatarPickerCard').innerHTML=h;
    m.style.display='flex';
  },
  pickAvatar(kind,key,id){
    avSet(kind,key,id||'');
    /* [20261014b] 先把落库映射里这个 key 摘掉，让下面的 avApply 回退去读
       刚写进 localStorage 的新选择。否则 puAvatar 还是旧路径，avApply 的
       第一优先级会命中旧头像 —— 表现为「点了新头像但界面没变」。 */
    if(kind==='pu'&&App.state.puAvatar)delete App.state.puAvatar[key];
    Actions.closeAvatarPicker();
    const _sb=document.getElementById('sbAvatar');
    if(kind==='pu'&&key===(App.state.loginUser||'')&&_sb)avApply(_sb,'pu',key,(key||'?').charAt(0));
    /* [修正] App.current() 只是读 hash 的 getter，不重渲染 —— 直接调对应 Loader */
    const v=(location.hash||'#overview').slice(1).split('?')[0];
    if(kind==='pu'&&v==='panelusers')Loaders.panelusers();
    /* [20261014] 同步到面板落库。以前这里只写 localStorage（avSet），
       表现为「换电脑 / 清缓存 / 换浏览器头像就丢」，选择器文案还写着
       「选择保存在本浏览器」。后端 /api/panel-users/<用户名>/avatar 早就位，
       小程序也在用，这里补上网页面板这一环，两边口径就一致了。 */
    if(kind==='pu'&&key)Actions._syncPuAvatar(key,id||'',v);
    toast(id?'头像已更新':'已恢复默认头像','','ok');
  },
  /* 把面板用户头像同步到服务端：头像库是同源 /static/avatars/<id>.webp，
     fetch 成 base64 再 POST（后端按文件头判格式，webp 在支持列表里）。
     恢复默认（id 为空）= 清掉面板那份，否则那边还留着旧图。
     失败只提示：本地那份已经生效，不能让网络问题挡住用户换头像。 */
  async _syncPuAvatar(key,id,view){
    try{
      let data='';
      if(id){
        const r=await fetch('/static/avatars/'+encodeURIComponent(id)+'.webp?v=7');
        if(!r.ok)throw new Error('HTTP '+r.status);
        const blob=await r.blob();
        data=await new Promise(function(res,rej){
          const fr=new FileReader();
          fr.onload=function(){res(String(fr.result).split(',')[1]||'');};
          fr.onerror=function(){rej(new Error('read failed'));};
          fr.readAsDataURL(blob);
        });
        if(!data)throw new Error('empty');
      }
      /* 恢复默认 = {"clear":true}。注意不能图省事发 {"data":""} ——
         后端把「data 为空且没带 clear」当成缺参 400，静默清除不了。 */
      await api('/api/panel-users/'+encodeURIComponent(key)+'/avatar',
                {method:'POST',body:id?{data:data}:{clear:true}});
      /* [20261014b] 落库成功后立刻用接口返回的真实路径更新本地映射，
         别等下一次 Loaders。否则自己刚设的头像会被 avApply() 的第一优先级
         判成「没有」，又回退去显示 localStorage 里那份旧的 —— 用户看到的就是
         「头像没变化」（而其实服务端已经对了）。 */
      if(!App.state.puAvatar)App.state.puAvatar={};
      if(id){
        const _res=await api('/api/panel-users').catch(()=>null);
        const _me=(_res&&_res.users||[]).find(function(u){return u&&u.username===key;});
        if(_me&&_me.avatar)App.state.puAvatar[key]='/'+_me.avatar;
      }else{
        delete App.state.puAvatar[key];
      }
      if(key===(App.state.loginUser||'')){
        const _sb=document.getElementById('sbAvatar');
        if(_sb)avApply(_sb,'pu',key,(key||'?').charAt(0));
      }
      /* 落库成功后刷新列表，管理员立刻看得到每个用户的新头像 */
      if(view==='panelusers')Loaders.panelusers();
    }catch(e){
      const msg=(e&&e.message)||'未知错误';
      toast(id?('头像已存在本浏览器，同步面板失败：'+msg):('已恢复默认，但清除面板头像失败：'+msg),'','warn');
    }
  },
  closeAvatarPicker(){const m=document.getElementById('avatarPickerModal');if(m)m.style.display='none';},
  /* [v6.2] 设置菜单 → 更换当前登录用户头像 */
  avatarSelf(){Actions.openAvatarPicker('pu',App.state.loginUser||'');},
  copyText(t){
    const txt=String(t||'');
    if(!txt)return;
    if(navigator.clipboard&&navigator.clipboard.writeText){
      navigator.clipboard.writeText(txt).then(()=>toast('已复制',txt,'ok')).catch(()=>Actions._copyFallback(txt));
    }else Actions._copyFallback(txt);
  },
  _copyFallback(txt){
    try{
      const ta=document.createElement('textarea');
      ta.value=txt;ta.setAttribute('style','position:fixed;top:-1000px;opacity:0');
      document.body.appendChild(ta);ta.select();document.execCommand('copy');ta.remove();
      toast('已复制',txt,'ok');
    }catch(e){toast('复制失败','请长按手动复制','err');}
  },
  async addFriend(btn){
    const inp=document.getElementById('addUid');const v=(inp.value||'').trim();
    const md=(document.getElementById('addMode')||{}).value||'uid';
    if(!v){toast('请输入抖音号','','err');return;}
    const done=_busy(btn);
    toast('正在解析抖音号…',v);
    try{const r=await api('/api/friends',{method:'POST',body:{unique_id:v,mode:md,account:App.state.currentAccount}});
      if(r.ok){inp.value='';toast('已添加',(r.env_sync&&r.env_sync.ok?'已同步 .env':'')+' '+(r.note||''),'ok');}
      else toast('添加失败',r.error||'','err');
    }catch(e){toast('添加失败',e.message,'err');}
    finally{done();Loaders.friends();}
  },
  async removeFriend(sid,name,btn){
    if(!confirm('确认将「'+name+'」移出自动续火花名单？\n该操作会同步从 .env 的 TASKS 名单删除（写前自动备份）。'))return;
    const done=_busy(btn);
    try{const r=await api('/api/friends/'+encodeURIComponent(sid)+'?account='+(App.state.currentAccount||''),{method:'DELETE'});
      toast('已移除',(r.env_sync&&r.env_sync.ok)?'并已同步 .env':'.env 同步可能失败','ok');_afterFriendMutate();
    }catch(e){toast('移除失败',e.message,'err');}
    finally{done();}
  },
  async toggleFriend(sid,on,btn){
    const done=_busy(btn);
    try{await api('/api/friends/'+encodeURIComponent(sid),{method:'PATCH',body:{status:on?'active':'paused'}});
      toast(on?'已恢复':'已停用','状态已更新，台账已留痕','ok');Loaders.friends();
    }catch(e){toast('操作失败',e.message,'err');}
    finally{done();}
  },
  _rm:{sid:'',name:''},
  editRemark(sid,name,cur){
    this._rm.sid=sid;this._rm.name=name;
    document.getElementById('rmName').textContent=name;
    document.getElementById('rmMeta').textContent=sid+' · 当前备注：'+(cur||'（空）');
    document.getElementById('rmInput').value=cur;
    document.getElementById('remarkModal').style.display='flex';
    document.getElementById('rmInput').focus();
  },
  closeRemark(){document.getElementById('remarkModal').style.display='none';},
  async saveRemark(btn){
    const v=document.getElementById('rmInput').value.trim();
    const sid=this._rm.sid,name=this._rm.name;
    if(!sid)return;
    const done=_busy(btn);
    try{const r=await api('/api/friends/'+encodeURIComponent(sid),{method:'PATCH',body:{remark:v}});
      if(r.ok){this.closeRemark();toast('备注已更新',name+(v?' → '+v:'（已清除）'),'ok');_afterFriendMutate();}
      else toast('更新失败',r.error||'','err');
    }catch(e){toast('更新失败',e.message,'err');}
    finally{done();}
  }
};

// 定时任务保存操作（必须在 Actions 定义之后）
Actions.loadSchedFriends=async()=>{
  const sel=document.getElementById('newTaskTarget');
  if(!sel)return;
  const acc=document.getElementById('newTaskAcc')?.value||'';
  sel.innerHTML='<option value="">加载中...</option>';
  try{
    const r=await api(acc?('/api/friends?account='+acc):'/api/friends');
    const friends=r.friends||[];
    if(!friends.length){sel.innerHTML='<option value="">暂无好友</option>';return;}
    sel.innerHTML=friends.map(f=>{
      const sid=f.short_id||f.unique_id||'';
      const name=f.remark||f.nickname||f.douyin_remark||f.douyin_nickname||'';
      /* [修复20261002] 下拉标签显示「名字（抖音号）」，与好友列表/抖音 App 一致；
         绝不显示内部 short_id（value 仍用 short_id，功能键不变）。 */
      const did=f.douyin_id||f.unique_id||f.short_id||'';
      const label=(name||'')+(did?('（'+did+'）'):'');
      return '<option value="'+esc(sid)+'">'+esc(label)+'</option>';
    }).join('');
  }catch(e){sel.innerHTML='<option value="">加载失败</option>';}
};
Actions.onSchedAccChange=()=>{Actions.loadSchedFriends();};
Actions.onSchedTypeChange=()=>{
  const t=document.getElementById('newTaskType').value;
  Actions._toggleFormRow('targetRow',t==='custom');
  // 切到「单独续」时立即拉取目标好友，避免下拉一直显示「加载中…」
  if(t==='custom')Actions.loadSchedFriends();
  Actions.syncSchedMsgLabel();
};
Actions.syncSchedMsgLabel=()=>{
  /* 批量续/单独续统一两种话术：今日火花+每日一言 / 自定义，标签不再随任务类型变 */
  const opt=document.getElementById('newTaskMsgModeDefault');
  if(opt)opt.textContent='今日火花 + 每日一言';
  const hint=document.getElementById('newTaskMsgHint');
  if(hint){
    const tpl=(App.state.status&&App.state.status.msg_template)||'';
    hint.textContent='发送内容：'+(tpl?tpl.replace(/\n/g,' ⏎ '):'今日火花 + 每日一言')+'（想固定内容就选「自定义话术」）';
  }
};
Actions.addSchedTask=async()=>{
  const body={
    account_uid:document.getElementById('newTaskAcc').value,
    type:document.getElementById('newTaskType').value,
    target:document.getElementById('newTaskTarget')?.value||'',
    enabled:true,
    hour:parseInt(document.getElementById('newTaskHour').value)||0,
    minute:parseInt(document.getElementById('newTaskMinute').value)||0,
    random_delay_max:parseInt(document.getElementById('newTaskDelay').value)||0,
    description:'',
  };
  const mMode=document.getElementById('newTaskMsgMode')?.value||'template';
  const mVal=(document.getElementById('newTaskMsg')?.value||'').trim();
  /* 只要框里有内容就用它 —— 手机端旧样式曾让自定义框在「默认话术」下也显示，
     用户输入后被静默丢掉，等于「话术没改」。留空则走「今日火花 + 每日一言」。 */
  body.msg=mVal;
  body.msg_mode=(mMode==='custom'&&mVal)?'custom':'template';
  if(mMode==='custom'&&!mVal)toast('未填写自定义话术','将按「今日火花 + 每日一言」发送','err');
  body.description=(body.type==='main'?'批量续('+body.account_uid+')':'单独续('+body.target+')')+(body.msg?' · 话术:'+body.msg:'');
  try{
    const r=await api('/api/schedule/tasks',{method:'POST',body});
    if(r.ok){toast('已添加','定时任务已创建','ok');Loaders.tasks();}
    else{toast('添加失败',r.error||'','err');}
  }catch(e){toast('添加失败',e.message,'err');}
};
Actions.deleteSchedTask=async(id)=>{
  try{if(window.Sheet)Sheet.close();}catch(e){}
  if(!confirm('确定删除此定时任务？删除后不会再自动执行。'))return;
  try{
    const r=await api('/api/schedule/tasks/'+id,{method:'DELETE'});
    if(r.ok){toast('已删除','定时任务已移除','ok');Loaders.tasks();}
    else{toast('删除失败',r.error||'','err');}
  }catch(e){toast('删除失败',e.message,'err');}
};
Actions.toggleSchedTask=async(id,en)=>{
  try{
    const r=await api('/api/schedule/tasks/'+id,{method:'PUT',body:{enabled:en}});
    if(r.ok){toast(en?'已启用':'已停用','','ok');
      /* [v4 fix] 从总览开关调用时只刷新当前视图，避免跳页/不刷新 */
      const _v=(typeof App.current==='function')?App.current():'tasks';
      if(Loaders[_v])Loaders[_v]();else Loaders.tasks();}
    else{toast('操作失败',r.error||'','err');}
  }catch(e){toast('操作失败',e.message,'err');}
};
/* 立即执行一次定时任务：与 cron 走同一条链路 */
Actions.runSchedTask=async(id,btn)=>{
  const t=(App.state._schedTasks||[]).find(x=>x.id===id);
  const en=t?t.enabled!==false:true;
  if(!en){toast('已停用','请先启用该任务','err');return;}
  if(!confirm('立即执行一次该定时任务？会真的给好友发送消息。'))return;
  if(btn){btn.disabled=true;btn.textContent='启动中…';}
  try{
    const r=await api('/api/schedule/tasks/'+id+'/run',{method:'POST'});
    if(r.ok){toast('已触发','正在后台执行，可在【任务与日志】查看结果','ok');setTimeout(()=>Loaders.tasks(),1500);}
    else{toast('执行失败',r.error||'','err');}
  }catch(e){toast('执行失败',e.message,'err');}
  finally{if(btn){btn.disabled=false;btn.textContent='执行';}}
};
Actions.goSchedule=()=>{location.hash='#tasks';};
/* 编辑定时任务（弹窗，替代 prompt；普通用户也可编辑自己账号的任务） */
Actions.editSchedTask=async(id)=>{
  try{if(window.Sheet)Sheet.close();}catch(e){}
  const t=(App.state._schedTasks||[]).find(x=>x.id===id);
  if(!t)return;
  Actions._editTaskId=id;
  const accs=App.state.accounts||[];
  const a=accs.find(x=>x.unique_id===t.account_uid);
  document.getElementById('etType').textContent=t.type==='main'?'批量续':'单独续';
  const _etDef=document.getElementById('etMsgModeDefaultText');
  if(_etDef)_etDef.textContent='使用「今日火花 + 每日一言」话术';
  document.getElementById('etAcc').textContent='抖音号：'+(a?(a.username+' ('+t.account_uid+')'):(t.account_uid||'全部账号'));
  document.getElementById('etHour').value=t.hour||0;
  document.getElementById('etMinute').value=t.minute||0;
  document.getElementById('etDelay').value=t.random_delay_max||0;
  document.getElementById('etEnabled').checked=t.enabled!==false;
  document.getElementById('etMsg').textContent='';
  const _hasMsg=(t.msg||'').trim();
  /* 话术模式：template（今日火花+每日一言）/ custom（自定义内容） */
  const _mode=(t.msg_mode==='custom'||(!t.msg_mode&&_hasMsg))?'custom':'template';
  const _mt=document.querySelector('#editTaskModal input[name=etMsgMode][value='+_mode+']');
  const _mi=document.getElementById('etMsgInput');
  if(_mt)_mt.checked=true;
  if(_mode==='custom'){if(_mi){_mi.value=_hasMsg;_mi.style.display='';}}
  else if(_mi){_mi.value='';_mi.style.display='none';}
  const row=document.getElementById('etTargetRow'),sel=document.getElementById('etTarget');
  if(t.type==='custom'){
    row.style.display='';sel.innerHTML='<option value="">加载中...</option>';
    try{
      const r=await api(t.account_uid?('/api/friends?account='+t.account_uid):'/api/friends');
      const fs=r.friends||[];
      sel.innerHTML=fs.length?fs.map(f=>{
        const sid=f.short_id||f.unique_id||'';
        const name=f.remark||f.nickname||f.douyin_remark||f.douyin_nickname||'';
        /* [修复20261002] 同 loadSchedFriends：展示抖音号，不展示内部 short_id */
        const did=f.douyin_id||f.unique_id||f.short_id||'';
        const label=(name||'')+(did?('（'+did+'）'):'');
        return '<option value="'+esc(sid)+'"'+(sid===t.target?' selected':'')+'>'+esc(label)+'</option>';
      }).join(''):'<option value="">暂无好友</option>';
    }catch(e){sel.innerHTML='<option value="">加载失败</option>';}
  }else{row.style.display='none';}
  document.getElementById('editTaskModal').style.display='flex';
};
Actions.closeEditTask=()=>{document.getElementById('editTaskModal').style.display='none';};
Actions.submitEditTask=async(btn)=>{
  const id=Actions._editTaskId;if(!id)return;
  const t=(App.state._schedTasks||[]).find(x=>x.id===id)||{};
  const body={
    hour:Math.max(0,Math.min(23,parseInt(document.getElementById('etHour').value)||0)),
    minute:Math.max(0,Math.min(59,parseInt(document.getElementById('etMinute').value)||0)),
    random_delay_max:Math.max(0,Math.min(720,parseInt(document.getElementById('etDelay').value)||0)),
    enabled:document.getElementById('etEnabled').checked,
  };
  if(t.type==='custom')body.target=document.getElementById('etTarget').value||'';
  const _em=document.querySelector('#editTaskModal input[name=etMsgMode]:checked');
  const _emv=(document.getElementById('etMsgInput')?.value||'').trim();
  body.msg=_emv;   /* 框里有内容就用（切到「今日火花+每日一言」时框已被清空） */
  body.msg_mode=(_em&&_em.value==='custom'&&_emv)?'custom':'template';
  const msg=document.getElementById('etMsg');msg.textContent='保存中…';
  if(btn)btn.disabled=true;
  try{
    const r=await api('/api/schedule/tasks/'+id,{method:'PUT',body});
    if(r.ok){toast('已保存','定时任务已更新','ok');Actions.closeEditTask();Loaders.tasks();}
    else{msg.textContent=r.error||'保存失败';toast('保存失败',r.error||'','err');}
  }catch(e){msg.textContent=e.message;toast('保存失败',e.message,'err');}
  finally{if(btn)btn.disabled=false;}
};
/*================ 任务与日志（Stitch 03 稿 1:1 还原） ================*/
Loaders.tasks=async function(_poll){
  /* 编辑态守卫：正在填写新增表单或打开编辑弹窗时，5s 轮询不要重渲染清空输入 */
  const _editing=()=>{
    const ids=['newTaskAcc','newTaskType','newTaskTarget','newTaskHour','newTaskMinute','newTaskDelay','newTaskMsgMode','newTaskMsg','batchMsg','pulseMsg'];
    if(document.activeElement&&ids.includes(document.activeElement.id))return true;
    const m=document.getElementById('editTaskModal');
    return !!(m&&m.style.display==='flex');
  };
  if(_editing())return;
  loading('tasks','g2');
  try{
    /* [v3 性能修复 20261011] _poll=true 表示 5s 轮询触发的刷新：
       两个日志文件共 ~24KB，不必每 5 秒重拉，沿用上次内容即可。 */
    const [st,rm,rc,lm,lc,fd,vt,sc]=await Promise.all([
      api('/api/status'),api(App.withAcc('/api/run/status?task=main')),api(App.withAcc('/api/run/status?task=custom')),
      _poll?Promise.resolve(App.state._logMain||{log:'（轮询中，未重新加载日志）'}):api(App.withAcc('/api/logs?task=main&lines=120')),
      _poll?Promise.resolve(App.state._logCustom||{log:'（轮询中，未重新加载日志）'}):api(App.withAcc('/api/logs?task=custom&lines=120')),
      api(App.withAcc('/api/friends')),api(App.withAcc('/api/targets')),
      api(App.withAcc('/api/schedule')).catch(()=>({schedule:{tasks:[]}}))
    ]);
    if(!_poll){App.state._logMain=lm;App.state._logCustom=lc;}
    App.state.status=st;if(vt&&vt.targets)App.state.validTargets=vt.targets;
    const _tt=App.currentTargets();if(_tt){fd.friends=fd.friends.filter(f=>_tt.has(f.short_id));}
    const ct=cronTimes(st.crontab);
    const schedTasks=(sc&&sc.schedule&&sc.schedule.tasks)||[];
    App.state._schedTasks=schedTasks;

    const _p2=x=>String(x).padStart(2,'0');
    const accName=uid=>{const a=(App.state.accounts||[]).find(x=>x.unique_id===uid);return a?a.username:(uid||'全部账号')};
    const typeName=t=>t==='main'?'批量续':'单独续';
    const nextRun=(enabled,hour,minute,delayMax)=>{
      if(!enabled)return '<span class="text-outline">—</span>';
      const now=new Date();let next=new Date();next.setHours(hour||0,minute||0,0,0);
      if(next<=now)next.setDate(next.getDate()+1);
      const dl=(next.toDateString()===now.toDateString())?'今天':(new Date(now.getTime()+86400000).toDateString()===next.toDateString())?'明天':(_p2(next.getMonth()+1)+'-'+_p2(next.getDate()));
      return '<b class="text-primary-container">'+dl+' '+_p2(next.getHours())+':'+_p2(next.getMinutes())+'</b>'+(delayMax>0?'<span class="text-outline text-[10px]"> +≤'+delayMax+'min</span>':'');
    };
    const lastRunCell=lr=>{
      if(!lr)return '<span class="text-outline">暂无记录</span>';
      const t=lr.ts?String(lr.ts).slice(5,16):'';
      return (lr.success?'<span class="inline-flex items-center gap-1 px-2 py-0.5 rounded-full border text-label-uppercase font-label-uppercase text-tertiary bg-tertiary-container/15 border-tertiary-container/30">成功</span>':'<span class="inline-flex items-center gap-1 px-2 py-0.5 rounded-full border text-label-uppercase font-label-uppercase text-error bg-error-container/25 border-error/30">失败</span>')+
        ' <span class="text-outline font-mono-code-sm">'+esc(t)+(lr.approx?'*':'')+'</span>';
    };
    const nextOfType=type=>{
      const list=schedTasks.filter(t=>(t.type||'custom')===type&&t.enabled!==false&&t.next_run);
      if(!list.length)return null;
      list.sort((a,b)=>String(a.next_run).localeCompare(String(b.next_run)));
      return list[0].next_run;
    };
    const fmtNext=s=>{
      if(!s)return '未配置';
      const ds=String(s).slice(0,10),tm=String(s).slice(11,16);
      const now=new Date();
      const d0=now.getFullYear()+'-'+_p2(now.getMonth()+1)+'-'+_p2(now.getDate());
      const t1=new Date(now.getTime()+86400000);
      const d1=t1.getFullYear()+'-'+_p2(t1.getMonth()+1)+'-'+_p2(t1.getDate());
      if(ds===d0)return '今天 '+tm;
      if(ds===d1)return '明天 '+tm;
      return ds.slice(5)+' '+tm;
    };
    const _curAcc=(App.state.accounts||[]).find(a=>a.unique_id===App.state.currentAccount);


    /* [v6.11] 交互台（批量续/单独续两个框）按用户要求移除；
       批量续走总览「立即续火花」与好友页「批量一键续火」，单独续走好友页行内闪电按钮。 */
    let html='';

    /* ---------- 2) 定时任务 ---------- */
    const schedIsAdmin=App.state.isAdmin;
    html+='<section class="bg-surface-container-low border border-surface-container-high rounded-[14px] overflow-hidden shadow-sm">';
    html+='<div class="px-5 py-4 border-b border-surface-container-high flex items-center justify-between gap-3 flex-wrap">'+
      '<div class="flex items-center gap-3 min-w-0"><h2 class="text-headline-md font-headline-md font-semibold text-on-surface shrink-0">定时任务列表</h2>'+
      '<span class="px-2 py-0.5 rounded-full bg-surface-container text-outline text-body-sm font-mono-code-sm border border-surface-container-highest shrink-0">'+schedTasks.length+' 条 · '+(_curAcc?esc(_curAcc.username):'全部账号')+'</span></div>'+
      '<div class="flex items-center gap-2">'+
      '<span class="hidden md:flex items-center gap-1 text-body-sm font-body-sm text-outline">'+MI('info','text-[15px]')+'仅列出当前选中账号的任务</span>'+
      '<button class="h-8 px-3 rounded bg-surface-container border border-surface-container-highest text-on-surface-variant hover:text-on-surface text-body-sm font-body-sm flex items-center gap-1.5 transition-colors" data-click="App.refresh">'+MI('refresh','text-[16px]')+'刷新</button>'+
      '</div></div>';
    if(schedTasks.length){
      /* [v6.15] 手机上这张 10 列表格（min-width 860px）要左右滑才能看全 →
         表格整块让位给下面的 .mcards 卡片，点卡片弹层看完整字段与操作。 */
      html+='<div class="overflow-x-auto custom-scroll msrc-hidden"><table class="w-full border-collapse text-left" id="schedTable">'+
        '<thead><tr class="border-b border-surface-container-high/80 bg-surface-container-lowest/60 text-outline text-[11px]">'+
        ['抖音号','类型','目标','话术','时间','延迟','上次执行','状态','下次','操作'].map((h,i)=>'<th class="py-3 px-4 font-semibold'+(i===9?' text-right':'')+'">'+h+'</th>').join('')+
        '</tr></thead><tbody class="divide-y divide-surface-container-high/50 text-body-md font-body-md">';
      let _schedCards='';
      Sheet._reset('sched');
      for(const t of schedTasks){
        const en=t.enabled!==false;
        const tid=t.id||'';
        const canEdit=t.can_edit!==false;
        const runBtn=(t.running||!en)
          ?'<button class="h-7 px-2.5 rounded bg-surface-container border border-surface-container-high text-outline cursor-not-allowed text-body-sm" disabled title="'+(t.running?'执行中':'已停用')+'">'+(t.running?'执行中…':'执行')+'</button>'
          :'<button class="h-7 px-2.5 rounded bg-primary-container/15 hover:bg-primary-container/25 text-primary-container border border-primary-container/30 text-body-sm font-semibold transition-colors" data-click="Actions.runSchedTask" data-arg="'+tid+'" data-pass-this="1">执行</button>';
        const icBtn=(icon,title,click,args,danger)=>'<button class="p-1.5 rounded '+(danger?'text-outline hover:text-error':'text-outline hover:text-on-surface')+' hover:bg-surface-container-high transition-colors" title="'+title+'" data-click="'+click+'"'+(args!=null?' data-args="'+args+'"':'')+'>'+MI(icon,'text-[17px]')+'</button>';
        const _tmsg=(t.msg||'').trim();
        html+='<tr class="hover:bg-surface-container/50 transition-colors"'+(en?'':' style="opacity:.55"')+'>'+
          '<td class="py-3 px-4 text-on-surface">'+esc(accName(t.account_uid))+(t.is_global?' <span class="text-label-uppercase font-label-uppercase px-1.5 py-0.5 rounded bg-surface-container border border-surface-container-high text-outline">全局</span>':'')+'</td>'+
          '<td class="py-3 px-4"><span class="inline-flex items-center gap-1.5 '+(t.type==='main'?'text-primary-container':'text-[#f59e0b]')+'">'+MI(t.type==='main'?'stacks':'chat','text-[16px]')+'<span class="text-on-surface">'+typeName(t.type)+'</span></span></td>'+
          '<td class="py-3 px-4 text-on-surface-variant">'+esc(t.type==='custom'?(t.target_name||dispName(t.target)||'—'):'全部')+'</td>'+
          '<td class="py-3 px-4">'+(_tmsg?('<span class="font-mono text-mono-code-sm text-on-surface-variant inline-block max-w-[170px] overflow-hidden text-ellipsis whitespace-nowrap align-bottom" title="'+esc(_tmsg)+'">'+esc(_tmsg)+'</span>'):'<span class="text-outline">默认</span>')+'</td>'+
          '<td class="py-3 px-4 font-mono text-mono-code-sm text-on-surface whitespace-nowrap">'+_p2(t.hour||0)+':'+_p2(t.minute||0)+'</td>'+
          '<td class="py-3 px-4 font-mono text-mono-code-sm text-outline">'+(t.random_delay_max||0)+'min</td>'+
          '<td class="py-3 px-4 whitespace-nowrap">'+lastRunCell(t.last_run)+'</td>'+
          '<td class="py-3 px-4">'+(en?'<span class="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full border text-label-uppercase font-label-uppercase text-tertiary bg-tertiary-container/15 border-tertiary-container/30"><span class="w-1.5 h-1.5 rounded-full bg-tertiary"></span>启用</span>':'<span class="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full border text-label-uppercase font-label-uppercase text-outline bg-surface-container border-surface-container-high"><span class="w-1.5 h-1.5 rounded-full bg-[#3b475d]"></span>停用</span>')+'</td>'+
          '<td class="py-3 px-4 whitespace-nowrap">'+nextRun(en,t.hour||0,t.minute||0,t.random_delay_max||0)+'</td>'+
          '<td class="py-3 px-4 text-right"><div class="inline-flex items-center gap-1">'+
          (canEdit?runBtn:'')+
          (canEdit?icBtn('edit','编辑','Actions.editSchedTask',tid):'')+
          (canEdit?icBtn(en?'pause_circle':'play_circle',en?'停用':'启用','Actions.toggleSchedTask',tid+'|'+(!en)):'')+
          (canEdit?icBtn('delete','删除','Actions.deleteSchedTask',tid,1):'<span class="text-outline text-body-sm">只读</span>')+
          '</div></td></tr>';
        /* [v6.15] 手机卡片 + 弹层数据（纯字段副本，弹层不依赖本 Loader 的闭包） */
        const _enTxt=en?(t.running?'执行中':'启用'):'停用';
        Sheet._reg('sched',tid,{
          id:tid,acc:accName(t.account_uid),uid:t.account_uid||'',isGlobal:!!t.is_global,
          type:typeName(t.type),
          target:(t.type==='custom'?(t.target_name||dispName(t.target)||'—'):'全部好友'),
          msg:_tmsg,time:_p2(t.hour||0)+':'+_p2(t.minute||0),
          delay:(t.random_delay_max||0)+' 分钟',
          last:lastRunCell(t.last_run),
          next:nextRun(en,t.hour||0,t.minute||0,t.random_delay_max||0),
          enabled:en,running:!!t.running,canEdit:canEdit});
        _schedCards+=_mcardHtml('sched',tid,
          _mcardTitle(esc(accName(t.account_uid))+(t.is_global?' · 全局':''),esc(t.account_uid||'')),
          '<span class="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full border text-[11px] font-medium '+(en?'text-tertiary bg-tertiary-container/15 border-tertiary-container/30':'text-outline bg-surface-container border-surface-container-high')+'">'+
            '<span class="w-1.5 h-1.5 rounded-full '+(en?(t.running?'bg-[#f59e0b] pulse-danger':'bg-tertiary'):'bg-[#3b475d]')+'"></span>'+_enTxt+'</span>',
          [['类型',esc(typeName(t.type))+((t.type==='custom')?'（'+esc(t.target_name||dispName(t.target)||'—')+'）':'（全部目标）')],
           ['时间',_p2(t.hour||0)+':'+_p2(t.minute||0)+((t.random_delay_max||0)?(' · 延迟 ≤'+t.random_delay_max+'min'):'')],
           ['下次',(t.next_run?fmtNext(t.next_run):'未配置')],
           ['话术',esc(_tmsg||'默认（今日火花 + 每日一言）')]]);
      }
      html+='</tbody></table></div>';
      /* [v6.15] 手机卡片列表（>767px 由 CSS 整块隐藏） */
      html+='<div class="mcards">'+_schedCards+'</div>';
      html+='<div class="px-5 py-3 border-t border-surface-container-high text-body-sm font-body-sm text-outline leading-relaxed">'+MI('info','text-[14px] align-middle mr-1')+'「执行」= 立即跑一次（不加随机延迟），结果与定时触发完全一致，可在本页下方运行日志查看。带 * 的结果来自早期未记录账号的历史记录，匹配可能不精确。<span class="md:hidden">手机上点任意一条可看完整字段与操作。</span></div>';
    }else{
      html+='<div class="py-12 text-center text-body-sm text-outline">'+(_curAcc?('「'+esc(_curAcc.username)+'」暂无定时任务，可在下方添加'):'暂无定时任务，在下方添加')+'</div>';
    }
    html+='</section>';

    /* ---------- 3) 新增定时任务（默认收起，点标题栏展开） ---------- */
    const _accs=App.state.accounts||[];
    if(_accs.length){
      const _tfO=!!App.state._tfOpen;
      html+='<section class="bg-surface-container-low border border-surface-container-high rounded-[14px] shadow-sm overflow-hidden">';
      html+='<div class="flex items-center justify-between gap-3 px-4 py-3" style="cursor:pointer;user-select:none" data-click="_tfToggle">'+
        '<div class="flex items-center gap-2 min-w-0">'+MI('add_circle','text-[19px] text-primary-container')+
        '<h2 class="text-headline-md font-headline-md font-semibold text-on-surface tracking-tight shrink-0">新增定时任务</h2>'+
        '<span class="text-body-sm font-body-sm text-outline truncate">每个任务绑定一个抖音号</span></div>'+
        '<button id="tfHeadBtn" class="h-8 px-3 rounded bg-surface-container border border-surface-container-highest text-on-surface-variant hover:text-on-surface text-body-sm font-body-sm flex items-center gap-1.5 transition-colors shrink-0" data-click="_tfToggle">'+
        MI(_tfO?'expand_less':'expand_more','text-[16px]')+'<span id="tfToggleTxt">'+(_tfO?'收起':'展开表单')+'</span></button>'+
        '</div>';
      html+='<div id="tfBody" class="px-4 pb-4 border-t border-surface-container-high/60"'+(_tfO?'':' style="display:none"')+'>';
      html+='<div class="grid grid-cols-1 lg:grid-cols-2 gap-x-6 gap-y-3 pt-3">';
      html+='<div><label class="text-body-sm font-body-sm text-outline block mb-1">抖音号</label><select id="newTaskAcc" class="dark-input" style="width:100%" data-change="Actions.onSchedAccChange">';
      for(const a of _accs)html+='<option value="'+esc(a.unique_id)+'"'+(a.unique_id===App.state.currentAccount?' selected':'')+'>'+esc(a.username)+' ('+esc(a.unique_id)+')</option>';
      html+='</select></div>';
      html+='<div><label class="text-body-sm font-body-sm text-outline block mb-1">任务类型</label><select id="newTaskType" class="dark-input" style="width:100%" data-change="Actions.onSchedTypeChange"><option value="main">批量续（所有目标好友）</option><option value="custom">单独续（指定好友）</option></select></div>';
      html+='<div id="targetRow" class="off" style="display:none"><label class="text-body-sm font-body-sm text-outline block mb-1">目标好友</label><select id="newTaskTarget" class="dark-input" style="width:100%"><option value="">加载中...</option></select></div>';
      html+='<div><label class="text-body-sm font-body-sm text-outline block mb-1">执行时间</label><div class="flex items-center gap-2"><input type="number" id="newTaskHour" value="0" min="0" max="23" class="dark-input" style="width:72px"> 时 <input type="number" id="newTaskMinute" value="10" min="0" max="59" class="dark-input" style="width:72px"> 分</div></div>';
      html+='<div><label class="text-body-sm font-body-sm text-outline block mb-1">随机延迟（分钟）</label><input type="number" id="newTaskDelay" value="0" min="0" max="720" class="dark-input" style="width:110px"></div>';
      html+='<div><label class="text-body-sm font-body-sm text-outline block mb-1">发送话术</label><select id="newTaskMsgMode" class="dark-input" style="width:100%" data-change="Actions.onSchedMsgModeChange"><option id="newTaskMsgModeDefault" value="template">今日火花 + 每日一言</option><option value="custom">自定义话术</option></select>';
      html+='<div class="text-body-sm text-outline mt-1" id="newTaskMsgHint"></div></div>';
      html+='<div id="newTaskMsgRow" class="off lg:col-span-2" style="display:none"><label class="text-body-sm font-body-sm text-outline block mb-1">自定义话术</label><textarea id="newTaskMsg" class="dark-input" rows="2" style="width:100%;resize:vertical" placeholder="输入要发送的话，例如：睡了吗？[二哈]（留空则用「今日火花 + 每日一言」）"></textarea></div>';
      html+='</div>';
      html+='<div class="mt-3 pt-3 border-t border-surface-container-high/60"><button class="h-9 px-4 rounded-lg bg-primary-container hover:bg-[#ff925c] text-white text-body-sm font-semibold flex items-center gap-1.5 active:scale-95 transition-all" data-click="Actions.addSchedTask">'+MI('add','text-[17px]')+'添加任务</button></div>';
      html+='</div>';   /* /tfBody */
      html+='</section>';
    }

    /* ---------- 4) 运行日志（终端） ---------- */
    const _ltab=App.state._logTab||'main';
    const _auto=App.state._logAuto!==false;
    html+='<section class="bg-surface-container-low border border-surface-container-high rounded-[14px] p-4 shadow-sm">';
    html+='<div class="flex items-center justify-between gap-3 pb-3 border-b border-surface-container-high/60 flex-wrap">'+
      '<div class="flex items-center gap-2.5">'+
      '<span class="relative flex items-center justify-center"><span class="w-2.5 h-2.5 rounded-full bg-tertiary"></span>'+
      ((rm.running||rc.running)?'<span class="w-2.5 h-2.5 rounded-full bg-tertiary animate-ping absolute"></span>':'')+'</span>'+
      '<h2 class="text-headline-md font-headline-md font-bold text-on-surface tracking-tight">运行日志</h2>'+
      '<span class="text-body-sm font-body-sm text-outline hidden md:inline">实时守护引擎执行流</span></div>'+
      '<div class="flex items-center gap-3 flex-wrap">'+
      '<div class="flex bg-surface-container-lowest p-0.5 rounded-lg border border-surface-container-high text-body-sm font-body-sm" id="logTabs">'+
      '<button class="px-3 py-1 rounded transition-colors '+(_ltab==='main'?'bg-surface-container text-on-surface font-medium':'text-outline hover:text-on-surface')+'" data-click="_logTab" data-arg="main">批量续</button>'+
      '<button class="px-3 py-1 rounded transition-colors '+(_ltab==='custom'?'bg-surface-container text-on-surface font-medium':'text-outline hover:text-on-surface')+'" data-click="_logTab" data-arg="custom">单独续</button>'+
      '</div>'+
      '<div class="flex items-center gap-2"><span class="text-body-sm font-body-sm text-outline">自动滚动</span>'+
      '<label class="relative inline-flex items-center cursor-pointer"><input type="checkbox" id="logAuto" data-change="_logAuto" class="sr-only peer"'+( _auto?' checked':'')+'>'+
      '<span class="w-9 h-5 rounded-full bg-surface-container-high peer-checked:bg-primary-container relative transition-colors after:content-[\'\'] after:absolute after:top-[2px] after:left-[2px] after:w-4 after:h-4 after:rounded-full after:bg-white after:transition-all peer-checked:after:translate-x-4"></span></label></div>'+
      '<span class="w-px h-4 bg-outline-variant/30"></span>'+
      '<button class="flex items-center gap-1 px-2.5 py-1.5 bg-surface-container-lowest hover:bg-surface-container border border-surface-container-high rounded-lg text-body-sm font-body-sm text-on-surface transition-colors" data-click="Actions.refreshLog" data-pass-this="1">'+MI('refresh','text-[16px]')+'刷新</button>'+
      '<button class="flex items-center gap-1 px-2.5 py-1.5 bg-surface-container-lowest hover:bg-surface-container border border-surface-container-high rounded-lg text-body-sm font-body-sm text-on-surface transition-colors" data-click="_logExport">'+MI('download','text-[16px]')+'导出日志</button>'+
      '</div></div>';
    const _termCls='bg-surface-container-lowest border border-surface-container-high rounded-lg p-3 font-mono-code-sm text-mono-code-sm text-on-surface-variant overflow-auto whitespace-pre-wrap break-words leading-relaxed custom-scroll';
    html+='<div class="mt-3"><div id="logMain" class="'+_termCls+'" style="max-height:300px;'+( _ltab==='main'?'':'display:none')+'">'+esc(lm.log||'（无日志）')+'</div>'+
      '<div id="logCustom" class="'+_termCls+'" style="max-height:300px;'+( _ltab==='custom'?'':'display:none')+'">'+esc(lc.log||'（无日志）')+'</div></div>';
    html+='<div class="flex items-center justify-between mt-3 text-body-sm font-body-sm text-outline gap-3 flex-wrap">'+
      '<span class="font-mono">/var/log/douyin_'+(_ltab==='main'?'sparkflow':'custom_msg')+'.log</span>'+
      '<span class="flex items-center gap-3"><span>批量续 '+(rm.running?'<span class="text-[#f59e0b]">运行中</span>':'空闲')+'</span><span class="w-px h-3 bg-outline-variant/30"></span>'+
      '<span>单独续 '+(rc.running?'<span class="text-[#f59e0b]">运行中</span>':'空闲')+'</span></span></div>';
    html+='</section>';

    /* ---------- 5) crontab（仅管理员） ---------- */
    if(schedIsAdmin){
      html+='<section class="bg-surface-container-low border border-surface-container-high rounded-[14px] p-4 shadow-sm">'+
        '<div class="flex items-center gap-2 mb-3">'+MI('terminal','text-[19px] text-primary-container')+
        '<h2 class="text-headline-md font-headline-md font-semibold text-on-surface tracking-tight">当前 crontab</h2>'+
        '<span class="px-2 py-0.5 rounded-full bg-surface-container text-outline text-label-uppercase font-label-uppercase border border-surface-container-highest">仅管理员可见</span></div>'+
        '<pre class="bg-surface-container-lowest border border-surface-container-high rounded-lg p-3 overflow-x-auto font-mono-code-sm text-mono-code-sm text-on-surface-variant whitespace-pre-wrap">'+esc(st.crontab||'(空)')+'</pre></section>';
    }

    const _el=ensureView('tasks');
    if(_el.__lastHtml!==html){
      const _prevScroll={};
      ['logMain','logCustom'].forEach(id=>{const e=document.getElementById(id);
        if(e)_prevScroll[id]={top:e.scrollTop,atBottom:(e.scrollHeight-e.scrollTop-e.clientHeight)<8};});
      _el.__lastHtml=html;
      _el.innerHTML=html;
      if(typeof Actions.syncSchedMsgLabel==='function')Actions.syncSchedMsgLabel();
      ['logMain','logCustom'].forEach(id=>{const e=document.getElementById(id);if(!e)return;
        const k=_prevScroll[id];
        e.scrollTop=(App.state._logAuto===false)?((k&&k.top)||0):((!k||k.atBottom)?e.scrollHeight:k.top);});
      _taskPickTarget();
    }
    App.setRunPill();
  }catch(e){
    if(e.message!=='unauthorized'){
      if(_poll)console.warn('tasks 轮询刷新失败，保留当前内容：',e);
      else viewError('tasks',e);
    }
  }
};
/* ---- v4 任务页交互辅助 ---- */
function _taskChipFilter(v){App.state._taskChipFilter=v||'all';Loaders.tasks();}
function _taskMsgCount(x){var v=(typeof x==='string')?x:((x&&x.value)||'');var c=document.getElementById('batchMsgCount');if(c)c.textContent=v.length+'/100 字符';}
function _taskMsgCount2(){}
function _taskInsertEmoji(cd){var t=document.getElementById('batchMsg');if(!t)return;t.value=(t.value||'')+cd;t.focus();_taskMsgCount(t);}
function _taskMsgMode(v){App.state._pulseMode=v||'template';Loaders.tasks();}
function _taskPickTarget(){
  var sel=document.getElementById('customTarget'),h=document.getElementById('pulseHint');
  if(!sel||!h)return;
  var sid=sel.value;
  var fs=App.state.friends||[];
  var f=fs.find(function(x){return String(x.short_id)===String(sid);});
  if(!f){h.textContent='';return;}
  var d=(f.spark_days==null)?'无火花数据':(f.spark_days+' 天');
  var st=f.today_sent?'今日已续':(f.fresh?'待续':'缓存过期');
  h.innerHTML=MI('local_fire_department','text-[14px] text-primary-container align-middle')+' 当前 <b class="text-on-surface">'+esc(d)+'</b> · '+esc(st)+
    (f.last_msg_time?(' · 最近互动 '+esc(f.last_msg_time)):'');
}
function _taskRunBatch(btn){
  var t=document.getElementById('batchMsg');
  var v=((t&&t.value)||'').trim();
  Actions.run('main',null,false,btn,v,v?'custom':'template');
}
function _taskRunPulse(btn){
  var sel=document.getElementById('customTarget');
  var tgt=sel?sel.value:'';
  if(!tgt){toast('请先选择目标好友','','err');return;}
  var mode=App.state._pulseMode||'template';
  var v=mode==='custom'?(((document.getElementById('pulseMsg')||{}).value)||'').trim():'';
  if(mode==='custom'&&!v){toast('未填写文案','请填写即时互动文案，或切到「默认话术」','err');return;}
  var sync=document.getElementById('pulseSync');
  if(sync&&sync.checked)App.state._pulseAutoRefresh=true;
  Actions.run('custom',tgt,false,btn,v,mode);
}
/* [v11] 「新增定时任务」表单展开/收起（纯 DOM 切换，不重新请求） */
function _tfToggle(){
  var open=!App.state._tfOpen;
  App.state._tfOpen=open;
  var b=document.getElementById('tfBody');if(b)b.style.display=open?'':'none';
  var h=document.getElementById('tfHeadBtn');
  if(h)h.innerHTML=MI(open?'expand_less':'expand_more','text-[16px]')+'<span id="tfToggleTxt">'+(open?'收起':'展开表单')+'</span>';
}
function _logTab(v){
  App.state._logTab=(v==='custom')?'custom':'main';
  document.querySelectorAll('#logTabs button').forEach(function(b){
    var on=b.dataset.arg===App.state._logTab;
    b.className='px-3 py-1 rounded transition-colors '+(on?'bg-surface-container text-on-surface font-medium':'text-outline hover:text-on-surface');});
  ['logMain','logCustom'].forEach(function(id){var e=document.getElementById(id);
    if(e)e.style.display=((id==='logMain')===(App.state._logTab==='main'))?'':'none';});
}
function _logAuto(on){App.state._logAuto=!!on;}
function _logExport(){
  var id=(App.state._logTab==='custom')?'logCustom':'logMain';
  var e=document.getElementById(id);
  var txt=(e&&e.textContent)||'';
  var name='douyin_'+((App.state._logTab==='custom')?'custom_msg':'sparkflow')+'.log';
  try{
    var blob=new Blob([txt],{type:'text/plain;charset=utf-8'});
    var a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download=name;
    document.body.appendChild(a);a.click();setTimeout(function(){URL.revokeObjectURL(a.href);a.remove();},1500);
    toast('已导出',name,'ok');
  }catch(err){toast('导出失败',err.message,'err');}
}

/*================ 执行台账（Stitch 05 稿 1:1 还原） ================*/
Loaders.logs=async function(){
  loading('logs','g4');
  try{
    /* [v13] 记录页**全面对齐小程序 pages/records**：
       ① 顶部两个 tab（发送记录 / 运行日志）
       ② 范围切换：只看当前账号 / 全部账号（小程序 records.js 的 scope，>1 个号才显示）
       ③ 筛选 chips：全部 / 批量 / 单独 + 日期（日期也改成与小程序 fchip 同款的芯片排）
       ④ 按天分组卡 + 点一条看详情浮层 + 「加载更早的记录」
       已按小程序口径下线：关键字搜索框、CSV 导出、底部「显示 X/Y 条」、
       运行日志卡上的「刷新」按钮（小程序只有「复制」）。
       /api/records 不带 account 参数即返回全部账号合并（后端本来就支持）。 */
    if(App.state._logsTab==null)App.state._logsTab='records';
    if(App.state._recType==null)App.state._recType='';
    if(App.state._recDate==null)App.state._recDate='';
    /* [v14] 日期选择器（日历弹层）的开合与当前翻到的月份 */
    if(App.state._recCalOpen==null)App.state._recCalOpen=false;
    if(App.state._recCalMonth==null)App.state._recCalMonth='';
    if(App.state._recScope==null)App.state._recScope='cur';
    if(!App.state._recLimit)App.state._recLimit=200;
    const lim=App.state._recLimit;
    const _cur=App.state.currentAccount||'';
    /* scope=cur 才带 account；scope=all 不带 → 后端返回名下全部账号合并 */
    const _url='/api/records?limit='+lim+(App.state._recScope==='cur'&&_cur?('&account='+encodeURIComponent(_cur)):'');
    const d=await api(_url);
    let recs=(d.records||[]).slice().reverse();
    /* 当前账号被管理员切成「查看别人」时仍按目标好友收敛（网页端特有的归属隔离） */
    const _lt=App.currentTargets();if(_lt&&App.state._recScope==='cur'){recs=recs.filter(r=>r.target==='all'||_lt.has(r.target));}
    App.state._recRecs=recs.map(_recItem);
    App.state._recHasMore=((d.records||[]).length>=lim);
    _recRender();
    if(App.state._logsTab==='logs'&&!App.state._recLog)_recLoadLogs();
  }catch(e){
    if(e.message!=='unauthorized')viewError('logs',e);
  }
};
/* 一条台账记录 → 列表项。批量/单独的判定口径照抄小程序 pages/records/records.js：
   有没有一个具体的目标好友 —— 有 = 单独，target 是 all = 批量；
   只有 target 缺失时才回落到 task 字段（历史脏数据兜底）。
   以前直接用 task 猜，且把 'all' 当好友名渲染，才会出现「单独续 · all」这种鬼话。 */
function _recItem(r){
  const t=String(r.target||'');
  const i=t.indexOf(', 消息:');
  const tgt=(i>0?t.slice(0,i):t).trim();
  const hasTarget=!!tgt&&tgt!=='all';
  const isBatch=!hasTarget&&r.task!=='custom';
  const sent=(r.sent===null||r.sent===undefined)?null:Number(r.sent);
  const name=String(r.target_name||'').trim();
  let targetName;
  if(isBatch)targetName=sent?('全部好友 · 发出 '+sent+' 条'):'全部好友';
  else if(hasTarget)targetName=name||'未知好友';
  else targetName='未知好友';
  const ts=String(r.ts||'');
  const day=String(r.date||'').trim()||ts.slice(0,10);
  return{
    ts:ts,
    day:day,
    time:ts.slice(11,16),
    tsText:ts,
    isBatch:isBatch,
    kind:isBatch?'批量':'单独',
    account:String(r.account||'').trim()||'未知账号',
    targetName:targetName,
    sent:sent,
    ok:r.success!==false,
    retried:r.retried_ok?String(r.retried_ok).slice(11,16):'',
    content:String(r.content||'').replace(/\\n/g,' ').replace(/\s+/g,' ').trim()
  };
}
function _recRender(){
  const el=ensureView('logs');
  const recs=App.state._recRecs||[];
  const tab=App.state._logsTab||'records';
  const nBatch=recs.filter(r=>r.isBatch).length,nSingle=recs.length-nBatch;
  /* [v14] day → 条数：日历弹层用它给「有记录的日期」打橙点 */
  const _daySet={};
  recs.forEach(function(r){if(r.day)_daySet[r.day]=(_daySet[r.day]||0)+1;});
  App.state._recDaySet=_daySet;
  let h='';
  /* [v13.3] 段序与控件形态照抄小程序 pages/records/records.wxml：
       ① seg（只看当前账号 / 全部账号，>1 个号才显示）
       ② tabs（发送记录 / 运行日志，分段控件而非按钮）
       ③ fbar（全部 / 批量 / 单独，pill 芯片）
       ④ 日期条
     之前网页端是 tabs 在最上、而且用的是 .btn 按钮，和小程序完全不是一回事。 */
  const _sc=App.state._recScope||'cur';
  const _accs=App.state.accounts||[];
  if(_accs.length>1){
    h+='<div class="seg">'+
      [['cur','只看当前账号'],['all','全部账号']].map(function(x){
        return '<button class="seg__i'+(_sc===x[0]?' seg__i--on':'')+'" data-click="_recScope" data-arg="'+x[0]+'">'+x[1]+'</button>';
      }).join('')+
      '<span class="tiny muted seg__note">'+
        (_sc==='all'?('名下所有抖音号合并 · 共 '+recs.length+' 条'):('共 '+recs.length+' 条记录'))+'</span>'+
      '</div>';
  }

  /* ---------- tabs（小程序 .tabs：卡片底 + 描边，选中态 primary-soft 底 + primary 字） ---------- */
  h+='<div class="tabs">'+
    [['records','发送记录'],['logs','运行日志']].map(function(x){
      return '<button class="tabs__i'+(tab===x[0]?' tabs__i--on':'')+'" data-click="Actions.recTab" data-arg="'+x[0]+'">'+x[1]+
        (x[0]==='records'?'<span class="tabs__n">'+recs.length+'</span>':'')+'</button>';
    }).join('')+'</div>';

  if(tab==='records'){
    /* ---------- 筛选：全部/批量/单独 + 日期 ----------
       日期走「触发按钮 + 日历弹层」（见下面 [v14]），不走后端 date 参数。
       ⚠️ 以前这里有一句「选了已加载记录里不存在的 day 就自动重置为全部」，
       日期条时代看不出问题（芯片本来就只有有记录的日期），换成日历后就成了
       「选哪个日期都被弹回全部」——用户反馈「不能筛选日期」的根因。
       现在不重置：选到没记录的日期就明确显示「这一天没有记录」。 */
    const _tc=App.state._recType||'';
    const _td=App.state._recDate||'';
    const chip=(k,t,n)=>'<button class="fchip'+(_tc===k?' fchip--on':'')+'" data-click="_recType" data-arg="'+k+'">'+t+' '+n+'</button>';
    h+='<div class="fbar">'+chip('','全部',recs.length)+chip('batch','批量',nBatch)+chip('single','单独',nSingle)+'</div>';
    /* [v14] 日期选择器 = 「触发按钮 + 日历弹层」（.dsel / .cal）。
       原来是 21 个日期芯片挤在一条横向滚动条里：桌面端鼠标滚轮滚不动、手机上要滑很久，
       而且只能选「已加载记录里出现过的日期」——用户反馈「不能筛选日期」。
       现在点一下弹出整月日历：有记录的日期带橙点、今天描边、选中填橙，
       上下月翻页 + 「今天 / 全部日期」两个快捷动作，任意日期都能选（选了没记录会明确提示）。 */
    h+='<div class="dsel'+(_td?' dsel--on':'')+'" data-click="_recCalToggle" role="button" tabindex="0" '+
      'title="按日期筛选">'+MI('calendar_month','text-[17px]')+
      '<span class="dsel__t">'+(_td?esc(_recDayLabel(_td)):'全部日期')+'</span>'+
      '<span class="dsel__arrow">&#9662;</span></div>';
    if(App.state._recCalOpen){
      const _ym=App.state._recCalMonth||_recCalDefaultMonth();
      h+='<div class="calMask" data-click="_recCalToggle"></div>'+
        '<div class="cal" id="recCal" role="dialog" aria-modal="true">'+
          '<div class="cal__hd">'+
            '<button class="cal__nav" data-click="_recCalNav" data-arg="-1" aria-label="上个月">&#8249;</button>'+
            '<b class="cal__ym">'+esc(_recCalYmText(_ym))+'</b>'+
            '<button class="cal__nav" data-click="_recCalNav" data-arg="1" aria-label="下个月">&#8250;</button>'+
          '</div>'+
          '<div class="cal__wk">'+['日','一','二','三','四','五','六'].map(function(w){return '<span>'+w+'</span>';}).join('')+'</div>'+
          '<div class="cal__grid">'+
            _recCalGrid(_ym,App.state._recDaySet).map(function(c){
              if(c.empty)return '<span class="cal__d cal__d--empty"></span>';
              const _cls='cal__d'+(c.has?' has':'')+(c.today?' today':'')+(_td===c.d?' on':'');
              return '<button class="'+_cls+'" data-click="_recCalPick" data-arg="'+esc(c.d)+'" '+
                'title="'+esc(c.d+(c.has?' · 有记录':''))+'"><b>'+c.n+'</b>'+(c.has?'<i></i>':'')+'</button>';
            }).join('')+
          '</div>'+
          '<div class="cal__ft">'+
            '<button class="cal__btn" data-click="_recCalPick" data-arg="__today">今天</button>'+
            '<button class="cal__btn'+(_td?'':' cal__btn--on')+'" data-click="_recCalPick" data-arg="">全部日期</button>'+
          '</div>'+
        '</div>';
    }
    h+='<div id="recList" style="margin-top:10px"></div>';
  }else{
    /* ---------- 运行日志（一段可复制的文本，打开停在最新一行） ---------- */
    h+='<div class="card" style="margin-top:12px">';
    h+='<div class="toolbar" style="margin:0 0 10px">'+MI('terminal','text-[17px]')+
      '<b style="font-size:13.5px">运行日志</b>'+
      '<span class="grow"></span>'+
      '<button class="btn btn-ghost btn-sm" data-click="Actions.recCopyLog">'+MI('content_copy','text-[16px]')+'复制</button>'+
      '</div>';
    if(App.state._recLogLoading)h+='<div class="empty">正在读取日志…</div>';
    else if(App.state._recLog){
      const lines=String(App.state._recLog).split('\n').length;
      h+='<div class="logbox" id="recLogBox">'+esc(App.state._recLog)+'</div>'+
        '<div class="tiny muted" style="margin-top:8px">已停在最新一行 · 共 '+lines+' 行 · 上滑看历史</div>';
    }else h+='<div class="empty">暂无日志</div>';
    h+='</div>';
  }
  el.innerHTML=h;
  if(tab==='records')_recPaint();
  else{
    const b=document.getElementById('recLogBox');
    if(b)b.scrollTop=b.scrollHeight;   /* 打开就停在最新一行 */
  }
}
/* 过滤 + 按天分组 + 渲染（只重绘 #recList，搜索框因此不丢焦点） */
function _recPaint(){
  const box=document.getElementById('recList');if(!box)return;
  const all=App.state._recRecs||[];
  const list=_recFilteredList();   /* [v12] 筛选口径统一到 _recFilteredList（含日期） */
  const groups=[];let cur=null;
  list.forEach(function(r){
    if(!cur||cur.date!==r.day){cur={date:r.day,items:[],batch:0,single:0};groups.push(cur);}
    cur.items.push(r);
    if(r.isBatch)cur.batch++;else cur.single++;
  });
  App.state._recGroups=groups;
  let h='';
  if(!list.length){
    /* [v14] 选了具体日期却没记录时，说清是「这一天没有」而不是笼统一句 */
    const _dy=App.state._recDate||'';
    h='<div class="card"><div class="empty">'+
      (!all.length?'还没有发送记录':(_dy?('这一天（'+_dy+'）没有记录'):'这个筛选下没有记录'))+
      '</div></div>';
  }else{
    groups.forEach(function(g,gi){
      h+='<div class="card recGroup">';
      h+='<div class="recGroupHead"><span class="recGroupDate">'+esc(g.date)+'</span>'+
        '<span class="tiny muted">批量 '+g.batch+' · 单独 '+g.single+'</span></div>';
      g.items.forEach(function(r,ri){
        const st=r.ok?['成功','b-ok']:(r.retried?['♻️ '+r.retried+' 重试成功','b-wait']:['失败','b-no']);
        h+='<div class="recItem" data-click="Actions.recOpen" data-args="'+gi+'|'+ri+'">'+
          '<span class="recTime mono">'+esc(r.time)+'</span>'+
          '<div class="recMid">'+
            '<div class="recT"><span class="kindtag '+(r.isBatch?'kt-b':'kt-s')+'">'+r.kind+'</span>'+
            '<span class="acctag">'+esc(r.account)+'</span><span class="recName">'+esc(r.targetName)+'</span></div>'+
            (r.content?'<div class="recS">'+esc(r.content)+'</div>':'')+
          '</div>'+
          '<span class="badge '+st[1]+'">'+esc(st[0])+'</span></div>';
      });
      h+='</div>';
    });
    /* [v13] 小程序这里只有一个「加载更早的记录」fchip，没有「显示 X / Y 条」 */
    if(App.state._recHasMore)
      h+='<div class="fbar" style="margin-top:10px;justify-content:center">'+
        '<button class="fchip" data-click="Actions.recMore">加载更早的记录</button></div>';
  }
  box.innerHTML=h;
}
async function _recLoadLogs(){
  App.state._recLogLoading=true;App.state._recLog='';
  _recRender();
  try{
    const d=await api(App.withAcc('/api/logs?lines=400'));
    App.state._recLog=String(d.log||'');
  }catch(e){App.state._recLog='（读取失败：'+e.message+'）';}
  App.state._recLogLoading=false;
  _recRender();
}
function _recFilteredList(){
  const all=App.state._recRecs||[];
  const t=App.state._recType||'',dy=App.state._recDate||'';
  return all.filter(function(r){
    if(dy&&r.day!==dy)return false;
    if(t==='batch'&&!r.isBatch)return false;
    if(t==='single'&&r.isBatch)return false;
    return true;
  });
}
/* [v13.2] 必须 _recRender() 整块重渲：只 _recPaint() 的话筛选芯片的选中态不会跟着变 */
function _recType(v){App.state._recType=v||'';_recRender();}
/* [v13] 范围切换（对齐小程序 records.js 的 onScope）—— 要重新请求，不能只在前端过滤 */
function _recScope(v){App.state._recScope=(v==='all'?'all':'cur');Loaders.logs();}
/* [v12] 日期筛选：值 = 记录里的 day（YYYY-MM-DD），空串 = 全部 */
function _recDate(v){App.state._recDate=v||'';_recRender();}
/* [v14] 日期选择器（日历弹层）：开/合。打开时停在「已选日期所在月」或「最新记录所在月」 */
function _recCalToggle(){
  App.state._recCalOpen=!App.state._recCalOpen;
  if(App.state._recCalOpen){
    App.state._recCalMonth=App.state._recDate?App.state._recDate.slice(0,7):_recCalDefaultMonth();
  }
  _recRender();
}
/* 上/下月翻页（data-arg 传进来的是字符串，记得 Number） */
function _recCalNav(v){
  const d=Number(v)||0;if(!d)return;
  const ym=App.state._recCalMonth||_recCalDefaultMonth();
  const m=/^(\d{4})-(\d{2})$/.exec(ym);
  let y=m?Number(m[1]):new Date().getFullYear(),mo=m?Number(m[2])-1:new Date().getMonth();
  mo+=d;if(mo<0){mo=11;y--;}else if(mo>11){mo=0;y++;}
  App.state._recCalMonth=y+'-'+String(mo+1).padStart(2,'0');
  _recRender();
}
/* 选中某天（__today=今天，''=全部日期），选完即收起 */
function _recCalPick(v){
  if(v==='__today'){
    const n=new Date();
    v=n.getFullYear()+'-'+String(n.getMonth()+1).padStart(2,'0')+'-'+String(n.getDate()).padStart(2,'0');
  }
  App.state._recDate=v||'';
  App.state._recCalOpen=false;
  _recRender();
}
/* 日历默认月份：最新一条记录在哪个月就停哪个月，没有记录停本月 */
function _recCalDefaultMonth(){
  const recs=App.state._recRecs||[];
  if(recs.length&&recs[0].day)return recs[0].day.slice(0,7);
  const n=new Date();
  return n.getFullYear()+'-'+String(n.getMonth()+1).padStart(2,'0');
}
/* YYYY-MM → 「2026 年 10 月」 */
function _recCalYmText(ym){
  const m=/^(\d{4})-(\d{2})$/.exec(ym||'');
  return m?(m[1]+' 年 '+Number(m[2])+' 月'):'';
}
/* 生成一个月的光格：前置空格 + 当月天数；has=那天有记录，today=今天 */
function _recCalGrid(ym,daySet){
  const m=/^(\d{4})-(\d{2})$/.exec(ym||'');
  const n=new Date();
  const y=m?Number(m[1]):n.getFullYear(),mo=m?Number(m[2])-1:n.getMonth();
  const lead=new Date(y,mo,1).getDay();
  const days=new Date(y,mo+1,0).getDate();
  const tdy=n.getFullYear()+'-'+String(n.getMonth()+1).padStart(2,'0')+'-'+String(n.getDate()).padStart(2,'0');
  const cells=[];
  for(let i=0;i<lead;i++)cells.push({empty:true});
  for(let d=1;d<=days;d++){
    const ds=y+'-'+String(mo+1).padStart(2,'0')+'-'+String(d).padStart(2,'0');
    cells.push({d:ds,n:d,has:!!(daySet&&daySet[ds]),today:ds===tdy});
  }
  return cells;
}
/* YYYY-MM-DD → 「10-14 周三 · 今天」（今天/昨天额外标注，方便辨认） */
function _recDayParts(dy){
  const s=String(dy||'');
  const m=/^(\d{4})-(\d{2})-(\d{2})$/.exec(s);
  if(!m)return{md:s,wk:'',tag:''};
  const d=new Date(Number(m[1]),Number(m[2])-1,Number(m[3]));
  const wk=['周日','周一','周二','周三','周四','周五','周六'][d.getDay()]||'';
  const n=new Date();
  const t0=new Date(n.getFullYear(),n.getMonth(),n.getDate());
  const diff=Math.round((t0-d)/86400000);
  return{md:m[2]+'-'+m[3],wk:wk,tag:diff===0?'今天':(diff===1?'昨天':'')};
}
function _recDayLabel(dy){
  const p=_recDayParts(dy);
  return p.wk?(p.md+' '+p.wk+(p.tag?(' · '+p.tag):'')):p.md;
}
/* ================= [v11] 记录页：tab / 详情浮层 / 运行日志（二级 Action） ================= */
_V9A.recTab=function(t){
  t=(t==='logs')?'logs':'records';
  if(App.state._logsTab===t)return;
  App.state._logsTab=t;
  if(t==='logs'&&!App.state._recLog)_recLoadLogs();
  else _recRender();
};
_V9A.recMore=function(){
  App.state._recLimit=(App.state._recLimit||200)+200;
  Loaders.logs();
};
_V9A.recCopyLog=function(){
  const txt=App.state._recLog||'';
  if(!txt){toast('暂无日志','','err');return;}
  try{
    navigator.clipboard.writeText(txt).then(function(){toast('日志已复制','','ok');},function(){toast('复制失败','请长按手动复制','err');});
  }catch(e){toast('复制失败','请长按手动复制','err');}
};
_V9A.recOpen=function(gi,ri){
  const g=(App.state._recGroups||[])[Number(gi)||0];
  const r=g&&g.items[Number(ri)||0];
  if(!r)return;
  let m=document.getElementById('recDetailModal');
  if(!m){
    m=document.createElement('div');
    m.id='recDetailModal';
    m.setAttribute('style','display:none;position:fixed;inset:0;background:rgba(0,0,0,.66);z-index:98;align-items:center;justify-content:center;padding:14px');
    m.innerHTML='<div class="card" id="recDetailCard" style="width:min(560px,calc(94vw / var(--ui-scale)));max-height:calc(86vh / var(--ui-scale));overflow:auto;margin:0"></div>';
    m.addEventListener('click',function(e){if(e.target===m){m.style.display='none';}});
    document.body.appendChild(m);
  }
  const st=r.ok?['成功','b-ok']:(r.retried?['♻️ '+r.retried+' 重试成功','b-wait']:['失败','b-no']);
  let h='<h4>'+MI('receipt_long','text-[17px]')+'发送详情<span class="tag">'+r.kind+'</span></h4>';
  h+='<div class="toolbar" style="margin:0 0 10px;gap:0"><span class="tiny muted">'+esc(r.tsText||'—')+'</span></div>';
  h+='<div class="recDlg">'+
    _kv('时间',r.tsText||'—')+
    _kv('类型',r.kind)+
    _kv('账号',r.account)+
    _kv('对象',r.targetName)+
    '</div>';
  h+='<div class="toolbar" style="margin:0 0 10px"><span class="tiny muted" style="min-width:64px">结果</span><span class="badge '+st[1]+'">'+esc(st[0])+'</span></div>';
  if(r.content){
    h+='<div class="tiny muted" style="margin:4px 0 6px">消息全文</div>'+
      '<div class="mono" style="font-size:12.5px;line-height:1.7;white-space:pre-wrap;word-break:break-word;'+
      'background:var(--bg2);border:1px solid var(--line);border-radius:10px;padding:12px;max-height:42vh;overflow:auto">'+esc(r.content)+'</div>';
  }
  h+='<div class="toolbar" style="justify-content:flex-end;margin-top:14px;gap:8px">'+
    '<button class="btn btn-primary btn-sm" data-click="Actions.recClose">关闭</button></div>';
  document.getElementById('recDetailCard').innerHTML=h;
  m.style.display='flex';
};
_V9A.recClose=function(){const m=document.getElementById('recDetailModal');if(m)m.style.display='none';};
/*================ 日报（按抖音号拆分） ================*/
/* 与后端 daily_summary 同口径：BROKEN_DAYS=1（≤1 天算已断）、LOW_DAYS=7（<7 天算告急） */
const DR_BROKEN=1, DR_LOW=7;
/*================ [v6.20] 日报日期切换工具 ================
  背景：日报页原来只有一个裸的 <input type="date">。用户切到「没有存档的日期」时，
  后端会返回一张空报表，前端照样渲染成全 0 的 KPI + 「当前范围内没有可展示的抖音号」，
  看起来就是「日期没切换成功」。现在：
    ① ‹ › 按「有存档的日期」跳（数据来自 /api/daily-report/dates，含 tar.gz 归档日期）；
    ② 没有存档的日期渲染明确的空状态卡片 + 可点日期列表；
    ③ 输入框 max=今天，不能再选未来日期。
  注意：date 参数留空 = 今天（实时生成），这是原有约定，不要改。 */
function drFmtDate(t){const p=n=>String(n).padStart(2,'0');return t.getFullYear()+'-'+p(t.getMonth()+1)+'-'+p(t.getDate());}
function drDates(){return (App.state._drDates||[]).map(x=>x.date).filter(Boolean);}
function drEmptyCard(d){
  const day=(d&&d.date)||'';
  /* [v6.22] 标题已经写了「<日期> 没有日报存档」，正文就把后端 note 里的同一句去掉，
     否则会出现「…没有日报存档这一天没有日报存档（…）」这种叠字。 */
  let note=String((d&&d.note)||'').trim()
    .replace(/^这一天没有日报存档[（(]?/,'').replace(/[）)]+$/,'').trim();
  if(!note)note='面板只保留最近 7 天的日报，更早的已打包归档（归档保留 180 天）。';
  if(!/[。！？.!?]$/.test(note))note+='。';
  if(day)note+='可以从下面选一个有数据的日期，或回到今天看实时日报。';
  const dates=drDates().filter(x=>x!==day).sort().reverse().slice(0,14);   /* [v6.20] 不列当前这个没数据的日期 */
  const chip=x=>'<button class="h-8 px-2.5 rounded bg-surface-container border border-surface-container-highest text-on-surface-variant hover:text-on-surface text-body-sm font-body-sm font-mono-code-sm transition-colors" data-click="Actions.drPick" data-arg="'+esc(x)+'">'+esc(x)+'</button>';
  return '<div class="bg-surface-container-low border border-surface-container-high rounded-[14px] p-6 flex flex-col gap-4">'+
    '<div class="flex items-start gap-3">'+
      '<div class="w-10 h-10 rounded-lg bg-surface-container border border-surface-container-high flex items-center justify-center text-outline shrink-0">'+MI('archive','text-[20px]')+'</div>'+
      '<div class="min-w-0"><div class="text-body-md font-body-md font-semibold text-on-surface">'+
        (day?esc(day)+' 没有日报存档':'当前账号没有可展示的日报')+'</div>'+
      '<div class="text-body-sm font-body-sm text-outline mt-0.5 leading-relaxed">'+
        esc(note)+'</div></div>'+
    '</div>'+
    '<div class="pt-3 border-t border-surface-container-high/60 flex items-center gap-2 flex-wrap">'+
      '<span class="text-body-sm font-body-sm text-outline flex items-center gap-1">'+MI('info','text-[15px]')+'有数据的日期</span>'+
      '<button class="h-8 px-2.5 rounded bg-primary-container/15 hover:bg-primary-container/25 text-primary-container border border-primary-container/30 text-body-sm font-body-sm font-semibold transition-colors" data-click="Actions.drToday">今天（实时）</button>'+
      (dates.length?dates.map(chip).join(''):'<span class="text-body-sm font-body-sm text-outline">暂无历史存档</span>')+
    '</div>'+
  '</div>';
}
function drSparkText(s){
  if(s.no_target)return '<span class="badge b-gray">无目标好友</span>';
  const seg=[];
  if(s.broken)seg.push('<span style="color:var(--red)">已断火花 '+s.broken+' 个</span>');
  if(s.none)seg.push('<span style="color:var(--red)">无火花 '+s.none+' 个</span>');
  if(s.low)seg.push('<span style="color:var(--amber)">告急 '+s.low+' 个</span>');
  const tail=' <span class="tiny muted">共 '+s.total+' 人'+(s.when?' · 数据 '+esc(s.when):'')+'</span>';
  if(seg.length)return seg.join(' · ')+tail;
  if(s.min_days!=null)return '<span style="color:var(--green)">最少 '+s.min_days+' 天</span>'+tail;
  return tail;
}
function drFriendLine(f){
  const n=esc(f.name||'?');
  if(f.days==null)return '<div style="color:var(--red)">⛔ '+n+' · 无火花</div>';
  if(f.days<=DR_BROKEN)return '<div style="color:var(--red)">💔 '+n+' · '+f.days+' 天（已断）</div>';
  if(f.days<DR_LOW)return '<div style="color:var(--amber)">⚠️ '+n+' · '+f.days+' 天</div>';
  return '<div style="color:var(--green)">✅ '+n+' · '+f.days+' 天</div>';
}
function drFriends(list){
  if(!list||!list.length)return '';
  const bad=list.filter(f=>f.days==null||f.days<DR_LOW);
  const good=list.filter(f=>f.days!=null&&f.days>=DR_LOW);
  let h=bad.slice(0,12).map(drFriendLine).join('');
  if(bad.length>12)h+='<div class="tiny muted">…另有 '+(bad.length-12)+' 个需处理好友</div>';
  if(good.length)h+='<details style="margin-top:6px"><summary class="tiny muted" style="cursor:pointer">正常好友 '+good.length+' 个</summary>'+good.map(drFriendLine).join('')+'</details>';
  return h?'<div style="border-top:1px solid var(--line);margin-top:8px;padding-top:8px;font-size:12.5px;line-height:1.8">'+h+'</div>':'';
}
function drSendLine(rows){
  if(!rows||!rows.length)return '<span class="tiny muted">无记录</span>';
  return rows.map(r=>r.kind+' '+r.ok+'/'+r.total).join(' · ');
}
/*================ 日报（Stitch 06 稿 1:1 还原，按抖音号拆分） ================*/
Loaders.daily=async function(){
  const el=ensureView('daily');
  if(!el.dataset.built4){
    el.innerHTML=
    '<div class="bg-surface-container-low border border-surface-container-high rounded-[14px] p-4">'+
      '<div class="flex items-center justify-between gap-3 flex-wrap">'+
        '<div class="flex items-center gap-2.5 min-w-0">'+
          '<div class="w-8 h-8 rounded-lg bg-primary-container/15 border border-primary-container/30 text-primary-container flex items-center justify-center shrink-0">'+MI('summarize','text-[19px]')+'</div>'+
          '<div class="min-w-0"><h2 class="text-headline-md font-headline-md font-semibold text-on-surface tracking-tight">火花守护日报</h2>'+
          '<p class="text-body-sm font-body-sm text-outline truncate" id="drGen">按抖音号拆分</p></div>'+
        '</div>'+
        '<div class="flex items-center gap-2 flex-wrap">'+
          /* [v6.20] 日期切换：‹ › 按「有存档的日期」跳 + 「今天」回实时，见 drStep/drToday */
          '<div class="flex items-center gap-1.5">'+
            '<span class="text-body-sm font-body-sm text-outline">日期</span>'+
            '<button class="h-8 w-8 rounded-lg border border-outline-variant/30 bg-surface-container hover:bg-surface-container-high text-on-surface-variant hover:text-on-surface flex items-center justify-center transition-all" title="往前一天（优先跳到有数据的日期）" data-click="Actions.drStep" data-arg="-1">'+MI('chevron_left','text-[16px]')+'</button>'+
            '<input type="date" id="drDate" class="dark-input" style="height:32px" title="留空 = 今天（实时生成）；只能查今天及更早" max="'+drToday()+'">'+
            '<button class="h-8 w-8 rounded-lg border border-outline-variant/30 bg-surface-container hover:bg-surface-container-high text-on-surface-variant hover:text-on-surface flex items-center justify-center transition-all" title="往后一天（优先跳到有数据的日期）" data-click="Actions.drStep" data-arg="1">'+MI('chevron_right','text-[16px]')+'</button>'+
            '<button class="h-8 px-3 rounded bg-surface-container border border-surface-container-highest text-on-surface-variant hover:text-on-surface text-body-sm font-body-sm flex items-center gap-1.5 transition-colors" title="回到今天（实时生成）" data-click="Actions.drToday">'+MI('calendar_today','text-[15px]')+'今天</button>'+
          '</div>'+
          '<label class="text-body-sm font-body-sm text-outline" id="drScopeWrap">范围 <select id="drScope" class="dark-input" style="height:32px"><option value="all">全部账号</option><option value="cur">当前账号</option></select></label>'+
          '<span id="drSnapWrap"></span>'+
          '<label class="text-body-sm font-body-sm text-outline flex items-center gap-1.5 cursor-pointer"><input type="checkbox" id="drSess" checked class="accent-[#ff7a45]"> 校验登录态</label>'+
          '<button class="h-8 px-3 rounded bg-surface-container border border-surface-container-highest text-on-surface-variant hover:text-on-surface text-body-sm font-body-sm flex items-center gap-1.5 transition-colors" data-click="Loaders.daily" data-args="true">'+MI('search','text-[16px]')+'查询</button>'+
          '<button class="h-8 px-3.5 rounded bg-primary-container hover:bg-[#ff925c] text-white text-body-sm font-semibold flex items-center gap-1.5 active:scale-95 transition-all" data-click="Actions.pushDailyReport" data-pass-this="1">'+MI('send','text-[16px]')+'立即推送给我</button>'+
        '</div>'+
      '</div>'+
      /* [v6.11] 「存档日期」快捷入口行按用户要求移除（查历史日报仍可用上方日期输入框） */
      '<div class="text-body-sm font-body-sm text-outline mt-2" id="drStat"></div>'+
    '</div>'+
    '<div id="drBody" class="flex flex-col gap-6"><div class="py-12 text-center text-body-sm text-outline">加载中…</div></div>';
    el.dataset.built4='1';
    ['drScope','drSess','drDate'].forEach(id=>{const n=document.getElementById(id);if(n)n.addEventListener('change',()=>Loaders.daily(true));});
  }
  const wrap=document.getElementById('drScopeWrap');
  if(wrap)wrap.style.display=App.state.isAdmin?'':'none';   // 普通用户只有自己的号，无需选范围
  const body=document.getElementById('drBody');
  /* [v6.20] 拉一次「有存档的日期」，给 ‹ › 与空状态用。这里不 await（日期接口比首屏慢），
     但把 promise 存到 App.state._drDatesP：空状态分支渲染前会等它，
     否则 drEmptyCard 拿到的 _drDates 还是空的 → 显示成「暂无历史存档」。 */
  App.state._drDatesP=drLoadDates();
  body.innerHTML='<div class="py-12 text-center text-body-sm text-outline">加载中…</div>';
  try{
    const sess=(document.getElementById('drSess')||{}).checked?'1':'0';
    let url='/api/daily-report?sessions=0';
    const scope=App.state.isAdmin?((document.getElementById('drScope')||{}).value||'all'):'all';
    if(scope==='cur'&&App.state.currentAccount)url+='&account='+encodeURIComponent(App.state.currentAccount);
    const date=(document.getElementById('drDate')||{}).value||'';
    const snap=(document.getElementById('drSnap')||{}).value||'-1';
    if(date)url+='&date='+encodeURIComponent(date)+'&snap='+encodeURIComponent(snap);
    const [d,pc]=await Promise.all([api(url),api('/api/push-config').catch(()=>null)]);
    /* [v6.20] 这一天没有任何存档（最近 7 天的 JSON 没有、归档包里也没有），
       或该面板用户没有可见账号 → 明确的空状态卡片，不再渲染一张全 0 的「假报表」。 */
    if(d.empty){
      await (App.state._drDatesP||Promise.resolve());   /* [v6.20] 等日期清单到位，空状态才能列出可点日期 */
      body.innerHTML=drEmptyCard(d);
      /* [v6.23] 空状态也要改写表头/快照行，否则它们还挂着「上一天」的文字
         （比如刚看过 10-05 的归档包，再切到没存档的 09-01，表头会继续显示「归档包 2026-10-05…」）。 */
      const g0=document.getElementById('drGen');
      if(g0)g0.textContent=(d.date?d.date+' · ':'')+'没有日报存档';
      const sw0=document.getElementById('drSnapWrap');
      if(sw0)sw0.innerHTML='';
      const st0=document.getElementById('drStat');
      if(st0)st0.textContent=(d.date?d.date+' · ':'')+(d.note?'没有存档':'没有可展示的账号');
      return;
    }
    const g=document.getElementById('drGen');
    if(g)g.textContent=(d.archived?((d.from_archive?'归档包 ':'存档 ')+esc(d.snapshot_at||d.date||'')+' · '+esc(drTrig(d.snapshot_trigger)))
      :('生成 '+esc(d.generated||'')))+' · '+(d.is_all?'全部账号':esc(d.scope||''));
    const sw=document.getElementById('drSnapWrap');
    if(sw){
      const sn=d.snapshots||[];
      sw.innerHTML=sn.length>1?('<label class="text-body-sm font-body-sm text-outline">快照 <select id="drSnap" class="dark-input" style="height:32px">'+
        sn.map(s=>'<option value="'+s.i+'"'+(s.i===d.snapshot_index?' selected':'')+'>'+
          esc((s.at||'').slice(11,16)||s.at)+' '+esc(drTrig(s.trigger))+'</option>').join('')+'</select></label>'):'';
      const ns=document.getElementById('drSnap');if(ns)ns.addEventListener('change',()=>Loaders.daily(true));
    }
    /* [v6.11] drLoadDates()（存档日期快捷入口）已随 drArch 行一起下线 */
    const s=d.summary||{};App.state._drData=d;
    const rate=s.sent_total?Math.round(s.sent_ok/s.sent_total*100):100;

    /* ---------- KPI 四张 ---------- */
    const KPI=(label,icon,val,unit,sub,glow,color)=>{
      return '<div class="bg-surface-container-low border border-surface-container-high rounded-[14px] p-4 flex flex-col justify-between '+(glow?'hover:border-primary-container/40':'hover:border-outline-variant/60')+' transition-colors">'+
        '<div class="flex items-center justify-between"><span class="text-label-uppercase font-label-uppercase text-outline tracking-wider">'+label+'</span>'+
        '<div class="w-7 h-7 rounded-md flex items-center justify-center '+(glow?'bg-primary-container/15 text-primary-container':'bg-surface-container text-outline')+'">'+MI(icon,'text-[16px]')+'</div></div>'+
        '<div class="my-3 flex items-baseline gap-2"><span class="text-mono-metric-lg font-mono-metric-lg '+(color||(glow?'text-primary-container':'text-on-surface'))+' tracking-tight">'+val+'</span>'+
        '<span class="text-body-md font-body-md text-outline">'+unit+'</span></div>'+
        '<div class="pt-2 border-t border-surface-container-high/60">'+sub+'</div></div>';
    };
    let html='<section class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">';
    html+=KPI('今日发送',(s.sent_total&&s.sent_ok<s.sent_total)?'error':'check_circle',s.sent_ok,'条',
      '<span class="text-body-sm font-body-sm '+((s.sent_total&&s.sent_ok<s.sent_total)?'text-error':'text-tertiary')+' flex items-center gap-1">'+
      MI((s.sent_total&&s.sent_ok<s.sent_total)?'priority_high':'check_circle','text-[14px]')+'成功 / 共 '+s.sent_total+' 次'+(s.sent_total?('（'+rate+'%）'):'')+'</span>',
      false,(s.sent_total&&s.sent_ok<s.sent_total)?'text-error':null);
    html+=KPI('待处理','warning',s.issues,'项',
      (s.issues?'<span class="text-body-sm font-body-sm text-[#f59e0b] flex items-center gap-1">'+MI('priority_high','text-[14px]')+'发送失败 · 登录失效 · 火花异常</span>'
              :'<span class="text-body-sm font-body-sm text-tertiary flex items-center gap-1">'+MI('verified_user','text-[14px]')+'无异常，一切正常</span>'),
      false,s.issues?'text-[#f59e0b]':null);
    html+=KPI('账号状态','switch_account',(s.accounts||0),'个',
      '<span class="text-body-sm font-body-sm flex items-center gap-2 flex-wrap">'+
      '<span class="'+(s.bad?'text-error':'text-tertiary')+'">'+(s.bad||0)+' 异常</span><span class="text-outline">·</span>'+
      '<span class="'+(s.warn?'text-[#f59e0b]':'text-outline')+'">'+(s.warn||0)+' 需注意</span>'+
      (s.bad?'<span class="shrink-0 w-2 h-2 rounded-full bg-error pulse-danger"></span>':'')+'</span>');
    html+=KPI('火花风险','local_fire_department',((s.spark_broken||0)+(s.spark_none||0)),'人',
      '<span class="text-body-sm font-body-sm '+(s.spark_low?'text-[#f59e0b]':'text-outline')+' flex items-center gap-1">'+
      MI((s.spark_low||(s.spark_broken||0)+(s.spark_none||0))?'priority_high':'check_circle','text-[14px]')+'断/无火花 · 另有 '+(s.spark_low||0)+' 个告急</span>',
      (((s.spark_broken||0)+(s.spark_none||0))>0)?false:false,((s.spark_broken||0)+(s.spark_none||0))?'text-error':null);
    html+='</section>';

    /* ---------- 主区两列 ---------- */
    html+='<section class="grid grid-cols-1 xl:grid-cols-12 gap-5">';
    html+='<div class="xl:col-span-8 flex flex-col gap-5">';

    /* 账号概览 */
    const accBadge=b=>b==='bad'?'<span class="inline-flex items-center gap-1 px-2 py-0.5 rounded-full border text-label-uppercase font-label-uppercase text-error bg-error-container/25 border-error/40">异常</span>'
      :b==='warn'?'<span class="inline-flex items-center gap-1 px-2 py-0.5 rounded-full border text-label-uppercase font-label-uppercase text-[#f59e0b] bg-[rgba(245,158,11,.12)] border-[rgba(245,158,11,.35)]">火花注意</span>'
      :'<span class="inline-flex items-center gap-1 px-2 py-0.5 rounded-full border text-label-uppercase font-label-uppercase text-tertiary bg-tertiary-container/15 border-tertiary-container/30">正常</span>';
    const _accsAll=d.accounts||[];
    html+='<div class="bg-surface-container-low border border-surface-container-high rounded-[14px] overflow-hidden">'+
      '<div class="px-5 py-4 border-b border-surface-container-high flex items-center justify-between gap-3">'+
      '<div class="flex items-center gap-3"><h3 class="text-headline-md font-headline-md font-semibold text-on-surface">抖音账号概览</h3>'+
      '<span class="px-2 py-0.5 rounded-full bg-surface-container text-outline text-body-sm font-mono-code-sm border border-surface-container-highest">'+_accsAll.length+' 个号</span></div>'+
      '<span class="text-body-sm font-body-sm text-outline hidden md:block">今日 / 昨日发送 · 火花 · 登录态</span></div>';
    if(!_accsAll.length){html+='<div class="py-12 text-center text-body-sm text-outline">当前范围内没有可展示的抖音号</div>';}
    _accsAll.forEach(a=>{
      const sok=a.session||{};
      const sessHtml=(sok.ok===true?'<span class="text-tertiary">有效</span>':sok.ok===false?'<span class="text-error">'+esc(sok.desc||'需重新登录')+'</span>':(sess==='1'?'<span class="text-outline">校验中…</span>':'<span class="text-outline">未校验</span>'));
      const sp=a.spark||{};
      const spTxt=sp.no_target?'<span class="text-outline">无目标好友</span>'
        :[(sp.broken?('<span class="text-error">已断 '+sp.broken+'</span>'):''),(sp.none?('<span class="text-error">无火花 '+sp.none+'</span>'):''),(sp.low?('<span class="text-[#f59e0b]">告急 '+sp.low+'</span>'):'')].filter(Boolean).join(' · ')
          ||(sp.min_days!=null?('<span class="text-tertiary">最少 '+sp.min_days+' 天</span>'):'<span class="text-outline">—</span>');
      html+='<div class="px-5 py-3.5 border-b border-surface-container-high/60 last:border-0 hover:bg-surface-container/50 transition-colors" id="drCard_'+esc(a.uid)+'">'+
        '<div class="flex items-center justify-between gap-3 flex-wrap">'+
        '<div class="flex items-center gap-3 min-w-0">'+
          '<div class="w-9 h-9 rounded-lg bg-surface-container border border-surface-container-high flex items-center justify-center text-primary-container shrink-0">'+MI('person','text-[18px]')+'</div>'+
          '<div class="min-w-0"><div class="text-body-md font-body-md font-semibold text-on-surface truncate">'+esc(a.uname)+'</div>'+
          '<div class="text-mono-code-sm font-mono-code-sm text-outline truncate">'+esc(a.uid)+'</div></div></div>'+
        '<span id="drBadge_'+esc(a.uid)+'">'+accBadge(a.badge)+'</span></div>'+
        '<div class="grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-2 mt-2.5">'+
          '<div><div class="text-[10px] font-label-uppercase text-outline tracking-wider">今日发送</div><div class="text-body-sm font-body-sm text-on-surface">'+drSendLine(a.send)+'</div></div>'+
          '<div><div class="text-[10px] font-label-uppercase text-outline tracking-wider">昨日发送</div><div class="text-body-sm font-body-sm text-on-surface">'+drSendLine(a.send_yday)+'</div></div>'+
          '<div><div class="text-[10px] font-label-uppercase text-outline tracking-wider">火花</div><div class="text-body-sm font-body-sm">'+spTxt+((sp.stale)?' <span class="text-[#f59e0b]">'+sp.stale+' 个超26h</span>':'')+'</div></div>'+
          '<div><div class="text-[10px] font-label-uppercase text-outline tracking-wider">登录态</div><div class="text-body-sm font-body-sm cursor-pointer" id="drSess_'+esc(a.uid)+'" data-click="Actions.drForceSession" data-uid="'+esc(a.uid)+'" data-pass-this="1" title="点击强制重新校验">'+sessHtml+'</div></div>'+
        '</div>'+
        ((a.fails||[]).length?('<div class="mt-2 text-body-sm text-error leading-relaxed"><span class="text-outline">失败明细 </span>'+a.fails.slice(0,6).map(f=>esc(f.ts)+' '+esc(f.kind)+' → '+esc(f.target)).join(' · ')+((a.fails.length>6)?(' …另有 '+(a.fails.length-6)+' 条'):'')+'</div>'):'')+
      '</div>';
    });
    html+='</div>';

    /* 好友明细 */
    const allF=[];
    _accsAll.forEach(a=>(a.friends||[]).forEach(f=>allF.push(Object.assign({},f,{acc:a.uname,uid:a.uid}))));
    allF.sort((x,y)=>{const a=(x.days==null?-1:x.days),b=(y.days==null?-1:y.days);return a-b;});
    html+='<div class="bg-surface-container-low border border-surface-container-high rounded-[14px] overflow-hidden">'+
      '<div class="px-5 py-4 border-b border-surface-container-high flex items-center justify-between gap-3 flex-wrap">'+
      '<div class="flex items-center gap-3"><h3 class="text-headline-md font-headline-md font-semibold text-on-surface">好友明细</h3>'+
      '<span class="px-2 py-0.5 rounded-full bg-surface-container text-outline text-body-sm font-mono-code-sm border border-surface-container-highest">'+allF.length+' 位</span></div>'+
      '<span class="text-body-sm font-body-sm text-outline flex items-center gap-1">'+MI('sort','text-[15px]')+'按火花天数升序（风险优先）</span></div>';
    if(!allF.length){html+='<div class="py-12 text-center text-body-sm text-outline">当前范围内没有好友数据</div>';}
    else{
      html+='<div class="overflow-x-auto custom-scroll" style="max-height:460px;overflow-y:auto"><table class="w-full border-collapse text-left">'+
        '<thead><tr class="border-b border-surface-container-high/80 bg-surface-container-lowest/60 text-outline text-[11px]">'+
        '<th class="py-2.5 px-5 font-semibold">好友</th><th class="py-2.5 px-4 font-semibold text-center">火花天数</th>'+
        '<th class="py-2.5 px-4 font-semibold text-center">状态</th><th class="py-2.5 px-5 font-semibold text-right">所属账号</th></tr></thead>'+
        '<tbody class="divide-y divide-surface-container-high/50 text-body-md font-body-md">';
      allF.slice(0,60).forEach(f=>{
        const bad=f.days==null||f.days<DR_LOW;
        const broken=f.days!=null&&f.days<=DR_BROKEN;
        const st=broken?['已断','text-error bg-error-container/25 border-error/40','bg-error pulse-danger']
          :(f.days==null?['无火花','text-error bg-error-container/25 border-error/40','bg-error pulse-danger']
          :(f.days<DR_LOW?['告急','text-[#f59e0b] bg-[rgba(245,158,11,.12)] border-[rgba(245,158,11,.35)]','bg-[#f59e0b]']
          :['正常','text-tertiary bg-tertiary-container/15 border-tertiary-container/30','bg-tertiary']));
        html+='<tr class="hover:bg-surface-container/50 transition-colors">'+
          '<td class="py-2.5 px-5 text-on-surface">'+esc(f.name||'?')+'</td>'+
          '<td class="py-2.5 px-4 text-center"><div class="inline-flex items-center gap-1">'+
            MI('local_fire_department','text-[16px] '+(bad?'text-error':'text-primary-container'),1)+
            '<span class="text-mono-metric-md font-mono-metric-md '+(bad?'text-error':'text-on-surface')+' font-bold">'+(f.days==null?'—':f.days)+'</span>'+
            '<span class="text-body-sm font-body-sm text-outline">天</span></div></td>'+
          '<td class="py-2.5 px-4 text-center"><span class="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full border text-label-uppercase font-label-uppercase '+st[1]+'">'+
            '<span class="w-1.5 h-1.5 rounded-full '+st[2]+'"></span>'+st[0]+'</span></td>'+
          '<td class="py-2.5 px-5 text-right text-body-sm font-body-sm text-outline">'+esc(f.acc)+'</td></tr>';
      });
      html+='</tbody></table></div>';
      if(allF.length>60)html+='<div class="px-5 py-3 border-t border-surface-container-high text-body-sm text-outline">仅显示风险最高的 60 位，共 '+allF.length+' 位</div>';
    }
    html+='</div>';
    html+='</div>'; /* /左列 */

    /* 右列 */
    html+='<div class="xl:col-span-4 flex flex-col gap-5">';
    /* 火花等级分布 */
    const lv={p4:0,p3:0,p2:0,p1:0,p0:0};
    allF.forEach(f=>{const n=f.days;if(n==null||n<1)lv.p0++;else if(n>=300)lv.p4++;else if(n>=101)lv.p3++;else if(n>=31)lv.p2++;else lv.p1++;});
    const tot=allF.length||1;
    const seg=[[lv.p4,'#ff7a45','300+ 天'],[lv.p3,'#ff9d47','101-300 天'],[lv.p2,'#f59e0b','31-100 天'],[lv.p1,'#d97706','1-30 天'],[lv.p0,'#ef4444','无 / 已断']];
    html+='<div class="bg-surface-container-low border border-surface-container-high rounded-[14px] p-4">'+
      '<div class="flex items-center gap-2 mb-3">'+MI('insights','text-[19px] text-primary-container')+
      '<h3 class="text-headline-md font-headline-md font-semibold text-on-surface tracking-tight">火花里程分布</h3></div>'+
      '<div class="h-2.5 rounded-full bg-surface-container overflow-hidden flex mb-3">'+
      seg.map(x=>'<div style="width:'+(x[0]/tot*100)+'%;background:'+x[1]+'"></div>').join('')+'</div>'+
      '<div class="flex flex-col gap-1.5">'+
      seg.map(x=>'<div class="flex items-center justify-between text-body-sm font-body-sm">'+
        '<span class="flex items-center gap-2 text-on-surface-variant"><span class="w-2.5 h-2.5 rounded-full" style="background:'+x[1]+'"></span>'+x[2]+'</span>'+
        '<span class="font-mono-code-sm text-on-surface">'+x[0]+' <span class="text-outline">('+(Math.round(x[0]/tot*1000)/10)+'%)</span></span></div>').join('')+
      '</div></div>';
    /* 今日提醒 */
    const iss=d.issues||[];
    html+='<div class="bg-surface-container-low border rounded-[14px] p-4 '+(iss.length?'border-[rgba(245,158,11,.45)]':'border-surface-container-high')+'">'+
      '<div class="flex items-center gap-2 mb-3">'+MI(iss.length?'notification_important':'check_circle','text-[19px] '+(iss.length?'text-[#f59e0b]':'text-tertiary'))+
      '<h3 class="text-headline-md font-headline-md font-semibold text-on-surface tracking-tight">今日提醒</h3>'+
      (iss.length?'<span class="px-2 py-0.5 rounded-full bg-[rgba(245,158,11,.12)] border border-[rgba(245,158,11,.3)] text-[#f59e0b] text-label-uppercase font-label-uppercase ml-auto">'+iss.length+' 项</span>':'')+'</div>';
    if(!iss.length)html+='<div class="text-body-sm font-body-sm text-outline">今日无异常，守护一切正常。</div>';
    else html+='<div class="flex flex-col gap-2">'+iss.slice(0,8).map(i=>'<div class="flex items-start gap-2 text-body-sm font-body-sm leading-relaxed '+
      (i.level==='bad'?'text-error':'text-[#f59e0b]')+'">'+MI(i.level==='bad'?'error':'warning','text-[15px] shrink-0 mt-0.5')+'<span>'+esc(i.text)+'</span></div>').join('')+
      (iss.length>8?('<div class="text-body-sm text-outline">…另有 '+(iss.length-8)+' 项</div>'):'')+'</div>';
    html+='</div>';
    /* 重试成功 */
    if((d.retries||[]).length){
      html+='<div class="bg-surface-container-low border border-[rgba(74,225,118,.35)] rounded-[14px] p-4">'+
        '<div class="flex items-center gap-2 mb-3">'+MI('replay','text-[19px] text-tertiary')+
        '<h3 class="text-headline-md font-headline-md font-semibold text-on-surface tracking-tight">重试后已成功</h3>'+
        '<span class="px-2 py-0.5 rounded-full bg-tertiary-container/15 border border-tertiary-container/30 text-tertiary text-label-uppercase font-label-uppercase ml-auto">无需处理</span></div>'+
        '<div class="flex flex-col gap-1.5 text-body-sm font-body-sm text-tertiary">'+
        d.retries.slice(0,8).map(x=>'<div>'+esc(x.ts)+' '+esc(x.account)+' · '+esc(x.kind)+' → '+esc(x.target)+'</div>').join('')+
        ((d.retries.length>8)?('<div class="text-outline">…另有 '+(d.retries.length-8)+' 条</div>'):'')+'</div>'+
        '<div class="text-body-sm font-body-sm text-outline mt-2">这些当时发失败了，随后重试已经送达，不需要你处理。</div></div>';
    }
    /* 推送渠道 */
    const pcOn=!!(pc&&pc.configured&&pc.enabled!==false);
    html+='<div class="bg-surface-container-low border border-surface-container-high rounded-[14px] p-4">'+
      '<div class="flex items-center gap-2 mb-3">'+MI('notifications','text-[19px] text-primary-container')+
      '<h3 class="text-headline-md font-headline-md font-semibold text-on-surface tracking-tight">推送渠道</h3>'+
      '<span class="px-2 py-0.5 rounded-full border text-label-uppercase font-label-uppercase ml-auto '+(pcOn?'text-tertiary bg-tertiary-container/15 border-tertiary-container/30':'text-outline bg-surface-container border-surface-container-highest')+'">'+(pcOn?'已启用':'未配置')+'</span></div>'+
      '<div class="flex flex-col gap-1.5 text-body-sm font-body-sm">'+
      '<div class="flex items-center justify-between"><span class="text-outline">通道</span><span class="font-mono-code-sm text-on-surface">'+(pc&&pc.channel?esc(pc.channel):'WxPusher')+'</span></div>'+
      '<div class="flex items-center justify-between"><span class="text-outline">收件人</span><span class="font-mono-code-sm text-on-surface truncate max-w-[160px]">'+esc((pc&&(pc.uid||pc.topic||''))||'—')+'</span></div>'+
      '</div>'+
      '<button class="w-full mt-3 h-8 rounded-lg bg-surface-container border border-surface-container-highest text-on-surface-variant hover:text-on-surface text-body-sm font-body-sm flex items-center justify-center gap-1.5 transition-colors" data-click="Actions.pushDailyReport" data-pass-this="1">'+MI('send','text-[16px]')+'立即推送给我</button>'+
      '<div class="text-body-sm font-body-sm text-outline mt-2">推送配置在【面板用户 → 通知设置】里维护。</div></div>';
    /* 系统 */
    const sc=d.sched||{};
    html+='<div class="bg-surface-container-low border border-surface-container-high rounded-[14px] p-4">'+
      '<div class="flex items-center gap-2 mb-3">'+MI('dns','text-[19px] text-primary-container')+
      '<h3 class="text-headline-md font-headline-md font-semibold text-on-surface tracking-tight">系统</h3></div>'+
      '<div class="flex flex-col gap-1.5 text-body-sm font-body-sm">'+
      (d.disk?('<div class="flex items-center justify-between"><span class="text-outline">服务器磁盘</span><span class="font-mono-code-sm text-on-surface">'+d.disk.used+'G / '+d.disk.total+'G · '+d.disk.pct+'%'+(d.disk.pct>=90?' <span class="text-error">需清理</span>':'')+'</span></div>'):'')+
      '<div class="flex items-center justify-between"><span class="text-outline">启用定时任务</span><span class="font-mono-code-sm text-on-surface">'+(sc.count||0)+' 个</span></div>'+
      '<div class="flex items-start justify-between gap-3"><span class="text-outline shrink-0">告警 24h</span><span class="text-body-sm text-right '+((d.alerts&&d.alerts.length)?'text-error':'text-tertiary')+'">'+((d.alerts&&d.alerts.length)?esc(d.alerts.slice(0,3).join('；')):'无')+'</span></div>'+
      '</div>'+
      ((sc.lines&&sc.lines.length)?('<pre class="mt-3 pt-3 border-t border-surface-container-high/60 font-mono-code-sm text-mono-code-sm text-outline whitespace-pre-wrap leading-relaxed">'+sc.lines.map(esc).join('\n')+'</pre>'):'')+
      '</div>';
    html+='</div>'; /* /右列 */
    html+='</section>';

    body.innerHTML=html;
    const st=document.getElementById('drStat');
    if(st)st.textContent='共 '+_accsAll.length+' 个抖音号 · '+(d.date||'')+(d.from_archive?'（归档包）':(d.archived?'（存档）':'（含昨日）'));
    if(sess==='1'&&!d.archived)drFillSessions(false);   // 存档里已带登录态，不必再校验
  }catch(e){if(e.message!=='unauthorized')body.innerHTML='<div class="py-12 text-center text-body-sm text-outline">加载失败：'+esc(e.message)+'</div>';}
};

function drToday(){const d=new Date();return d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0');}
function drTrig(t){t=t||'';return t==='panel'?'手动查看':(t.indexOf('cron')===0?('定时 '+t.slice(5)):t);}
/* [v6.20] 存档日期清单（近 7 天留在 daily_reports/*.json，更早的已打包成 daily-<date>.tar.gz）
   —— 两个出口：
     ① App.state._drDates：给 ‹ › 步进（Actions.drStep）和空状态卡片（drEmptyCard）用，降序；
     ② #drArch 快选行：旧站（8123 版页面结构）才有这个容器，存在就照渲染，不存在不再早退。
   注意：这里必须「不论有没有 #drArch 都先把 _drDates 写好」，否则 v4 站会退化成「暂无历史存档」。 */
async function drLoadDates(){
  const norm=x=>(x&&typeof x==='object')?String(x.date||''):String(x||'');
  try{
    const r=await api('/api/daily-report/dates');
    const a=(r&&r.dates)||[], b=(r&&r.archived)||[];
    const list=a.map(x=>({date:norm(x),count:(x&&x.count)||0,arch:false}))
      .concat(b.map(x=>({date:norm(x),count:0,arch:true})))
      .filter(x=>x.date);
    list.sort((x,y)=>(x.date<y.date?1:-1));          // 降序：新的在前
    App.state._drDates=list;
    const box=document.getElementById('drArch');
    if(box){
      const ds=list.slice(0,10), cur=((document.getElementById('drDate')||{}).value||'');
      let h=ds.length?('<span class="muted" style="margin-right:6px">存档日期</span>'+
        ds.map(x=>'<button class="btn btn-ghost btn-sm" data-click="Actions.drPickDate" data-date="'+esc(x.date)+'" data-pass-this="1" style="padding:2px 8px;margin:2px'+
          (x.date===cur?';border-color:var(--acc)':'')+'">'+
          esc(x.date.slice(5))+(x.count>1?' ·'+x.count:(x.arch?' ·归档':''))+'</button>').join('')):'';
      if((r&&r.archived||[]).length)h+=' <span class="muted">已归档 '+(r.archived||[]).length+' 天（tar.gz）</span>';
      box.innerHTML=h;
    }
  }catch(e){App.state._drDates=[];}
}
/* 登录态单独异步校验：curl 抖音较慢，不能挡着日报首屏 */
async function drFillSessions(force){
  const t0=Date.now();
  const nodes=()=>document.querySelectorAll('[id^="drSess_"]');
  nodes().forEach(el=>{el.innerHTML='<span class="tiny muted">校验中…</span>';});
  try{
    const r=await api('/api/session-status'+(force?'?force=1':''));
    const m=(r&&r.sessions)||{};
    nodes().forEach(el=>{
      const uid=el.id.slice(7), v=m[uid];
      el.innerHTML=!v?'<span class="tiny muted">未校验</span>':
        v.ok?'<span style="color:var(--green)">有效'+(v.cached?'':' · 刚校验')+'</span>':
        '<span style="color:var(--red)">'+esc(v.desc||'需重新登录')+'</span>';
      if(v&&!v.ok){   // 登录失效：把卡片补成异常（首屏未校验时徽章还没算上它）
        const card=document.getElementById('drCard_'+uid), bg=document.getElementById('drBadge_'+uid);
        if(card)card.style.borderColor='var(--red)';
        if(bg)bg.innerHTML='<span class="badge b-no">❌ 登录失效</span>';
      }
    });
    const ms=Date.now()-t0, st=document.getElementById('drStat');
    if(st)st.textContent+=' · 登录态 '+(ms<1000?(ms+'ms'):(ms/1000).toFixed(1)+'s');
  }catch(e){
    nodes().forEach(el=>{el.innerHTML='<span class="tiny muted">校验失败</span>';});
  }
}

/*================ 写操作：触发 / 停止 ================*/
Object.assign(Actions,{
  async run(task,target,fromSelect,btn,msg,msgMode){
    if(fromSelect){const sel=document.getElementById('customTarget');if(sel)target=sel.value;}
    const who=target?target:(task==='main'?'名单内全部好友':'全部');
    const msgNote=msg?('，发送：'+msg):'（使用「今日火花 + 每日一言」话术）';
    if(!confirm('确认立即执行「'+(task==='main'?'批量续':'单独续')+'」'+msgNote+'？\n这会在后台真实运行脚本'+(task==='main'?'，向 '+who+' 逐个发送火花消息':'，向 '+who+' 发送一条火花消息')+'。'))return;
    const done=_busy(btn);
    try{
      let url='/api/run?task='+task;if(target)url+='&target='+encodeURIComponent(target);url+='&account='+(App.state.currentAccount||'');
      url+='&msg_mode='+encodeURIComponent(msg? 'custom' : (msgMode||'template'));
      if(msg)url+='&msg='+encodeURIComponent(msg);
      const r=await api(url,{method:'POST'});
      if(r.ok){toast('任务已后台启动','pid '+r.pid+'，日志追加到 /var/log','ok');
        setTimeout(()=>{Loaders.tasks();if(App.state.overview)Loaders.overview();},1500);
        if(App.current()==='tasks')Loaders.tasks();
      }else toast('启动失败',r.error||'','err');
    }catch(e){toast('启动失败',e.message,'err');}
    finally{done();}
  },
  /* 自定义话术选择器：批量续 / 单独续 共用 */
  openMsgPicker(task,target){
    if(target==='null'||target==='undefined'||target==='__select__'){
      if(target==='__select__'){const sel=document.getElementById('customTarget');target=sel?sel.value:null;}
      else target=null;
    }
    const m=document.getElementById('msgModal');
    if(!m)return;
    document.getElementById('msgModalTitle').textContent=(task==='main'?'批量续火花':'单独续火花')+' · 选择发送的话';
    document.getElementById('msgTip').textContent=(task==='main'?'将给当前账号名下全部目标好友发送':'将给该好友发送')+((target&&dispTarget(target))?('（'+dispTarget(target)+'）'):'');
    /* 批量续/单独续统一两种话术：今日火花+每日一言（模板） / 自定义 */
    const def=document.querySelector('#msgModal input[name=msgMode][value=template]');
    if(def)def.checked=true;
    const defText=document.getElementById('msgModeDefaultText');
    if(defText)defText.textContent='使用「今日火花 + 每日一言」话术';
    const inp=document.getElementById('msgInput');inp.value='';inp.style.display='none';
    const hint=document.getElementById('msgHint');
    if(hint)hint.textContent='将使用「今日火花 + 每日一言」话术（含随机每日一言），无需填写。也可写抖音表情代码，如 [二哈] [吐舌小狗] [摊手] [晕] [坏笑]。';
    m.dataset.task=task;m.dataset.target=target||'';
    m.style.display='flex';
  },
  closeMsgModal(){const m=document.getElementById('msgModal');if(m)m.style.display='none';},
  _toggleMsgTextarea(radioName,textareaId,hintId){
    const modeEl=document.querySelector('input[name="'+radioName+'"]:checked');
    const mode=modeEl?modeEl.value:'default';
    const ta=document.getElementById(textareaId);
    if(!ta)return;
    if(mode==='custom'){ta.style.display='';setTimeout(()=>ta.focus(),30);}
    else{ta.style.display='none';ta.value='';}
    const hint=document.getElementById(hintId);
    if(hint)hint.style.display=(mode==='custom')?'none':'';
  },
  onMsgModeChange(){this._toggleMsgTextarea('msgMode','msgInput','msgHint');},
  onEditMsgModeChange(){this._toggleMsgTextarea('etMsgMode','etMsgInput',null);},
  onSchedMsgModeChange(){
    const sel=document.getElementById('newTaskMsgMode');
    const mode=sel?sel.value:'default';
    const ta=document.getElementById('newTaskMsg');
    const row=document.getElementById('newTaskMsgRow');
    if(mode==='custom'){if(ta)ta.style.display='';}
    else if(ta){ta.style.display='none';ta.value='';}
    /* 行必须同时切 class（手机端 .formtbl tr{display:block!important} 会盖掉行内 display） */
    Actions._toggleFormRow('newTaskMsgRow',mode==='custom');
    if(mode==='custom'&&ta)setTimeout(()=>ta.focus(),30);
  },
  /* 表单行的显隐：class + 行内一起切，手机端才真的藏得住 */
  _toggleFormRow(id,show){
    const r=document.getElementById(id);
    if(!r)return;
    r.classList.toggle('off',!show);
    r.style.display=show?'':'none';
  },
  async confirmMsg(){
    const m=document.getElementById('msgModal');if(!m)return;
    const task=m.dataset.task;let target=m.dataset.target||'';if(!target)target=null;
    const modeEl=document.querySelector('#msgModal input[name=msgMode]:checked');
    const mode=modeEl?modeEl.value:'template';
    const msg=(mode==='custom')?document.getElementById('msgInput').value.trim():'';
    m.style.display='none';
    await Actions.run(task,target,false,null,msg,mode);
  },
  async stop(task,btn){
    if(!confirm('确认停止正在运行的「'+(task==='main'?'批量续':'单独续')+'」任务？将终止整个进程树。'))return;
    const done=_busy(btn);
    try{const r=await api('/api/run/stop?task='+task+'&account='+(App.state.currentAccount||''),{method:'POST'});
      toast(r.ok?'已停止':'停止失败',r.message||r.error||'',r.ok?'ok':'err');Loaders.tasks();
    }catch(e){toast('停止失败',e.message,'err');}
    finally{done();}
  },
  async refreshLog(btn){
    const done=_busy(btn);
    try{
      const [lm,lc]=await Promise.all([api(App.withAcc('/api/logs?task=main&lines=120')),api(App.withAcc('/api/logs?task=custom&lines=120'))]);
      /* [v3 性能] 同步刷新态缓存：否则下一次 5s 轮询会用旧日志把刚刷出来的内容覆盖回去 */
      App.state._logMain=lm;App.state._logCustom=lc;
      const em=document.getElementById('logMain');if(em){em.textContent=lm.log||'（无日志）';em.scrollTop=em.scrollHeight;}
      const ec=document.getElementById('logCustom');if(ec){ec.textContent=lc.log||'（无日志）';ec.scrollTop=ec.scrollHeight;}
    }catch(e){toast('刷新失败',e.message,'err');}
    finally{done();}
  },
  /* ---------- 抖音账号管理 ---------- */
  async addAccount(){
    const uid=(document.getElementById('addAccUid').value||'').trim();
    const name=(document.getElementById('addAccName').value||'').trim();
    if(!uid){toast('请输入抖音号 unique_id','','err');return;}
    try{const r=await api('/api/accounts',{method:'POST',body:{unique_id:uid,username:name}});
      if(r.ok){toast('已添加账号',r.unique_id+'（cookie 待导入/扫码）','ok');}
      else toast('添加失败',r.error||'','err');
    }catch(e){toast('添加失败',e.message,'err');}
    Loaders.accounts();
  },
  async removeAccount(uid,name){
    if(!confirm('确认删除账号「'+name+'」('+uid+')？\n将从 TASKS 移除并删除其 cookie（写前自动备份 .env）。'))return;
    try{const r=await api('/api/accounts/'+encodeURIComponent(uid),{method:'DELETE'});
      if(r.ok)toast('已删除',uid,'ok');else toast('删除失败',r.error||'','err');
    }catch(e){toast('删除失败',e.message,'err');}
    Loaders.accounts();
  },
  /* [20261007] 关弹窗要顺手取消服务端任务：QR 任务会一直占着浏览器锁（最长 3 分钟），
     只把弹窗 display:none 会让用户下次发起时被「有任务正在使用浏览器」挡住。 */
  closeQr(){
    if(Actions._qrPoll){clearInterval(Actions._qrPoll);Actions._qrPoll=null;}
    const jid=Actions._qrJobId;
    Actions._qrJobId=null;
    if(jid){api('/api/accounts/qr/'+jid+'/cancel',{method:'POST'}).catch(()=>{});}
    const gate=document.getElementById('qrVerify');
    if(gate)gate.style.display='none';
    document.getElementById('qrModal').style.display='none';
  },
  closeHead(){
    document.getElementById('headModal').style.display='none';
    document.getElementById('headMini').style.display='none';
    const c=document.getElementById('headCard');
    c.style.display='';c.classList.remove('head-max');c.classList.remove('head-mobile');
  },
  minHead(){
    /* 最小化：连遮罩一起收起，否则面板被 rgba 遮罩压住、点不动 */
    document.getElementById('headCard').style.display='none';
    document.getElementById('headModal').style.display='none';
    document.getElementById('headMini').style.display='flex';
  },
  restoreHead(){
    document.getElementById('headCard').style.display='flex';
    document.getElementById('headModal').style.display='flex';
    document.getElementById('headMini').style.display='none';
  },
  maxHead(){document.getElementById('headCard').classList.toggle('head-max');},
  _headFailBox(uid,msg){
    document.getElementById('hmTip').textContent='启动失败';
    document.getElementById('hmBox').innerHTML='<div style="position:absolute;inset:0;display:flex;flex-direction:column;gap:14px;align-items:center;justify-content:center;color:var(--txt2);padding:30px;text-align:center">'
      +'<div style="color:var(--red)">'+esc(msg)+'</div>'
      +'<button class="btn btn-primary btn-sm" data-click="Actions.startHeadLogin" data-arg="'+esc(uid)+'" data-pass-this="1">重新发起登录</button></div>';
  },
  async startHeadLogin(uid,btn){
    const done=_busy(btn);
    Actions._headUid=uid;
    const m=document.getElementById('headModal');m.style.display='flex';
    document.getElementById('headMini').style.display='none';
    const hc=document.getElementById('headCard');hc.style.display='flex';
    /* 触屏设备：铺满 + 用手机专用远程控制页（横屏 + 可拖动鼠标）；
       纯鼠标的桌面端（含窄窗口）仍走标准 vnc.html */
    const isTouch=!!(window.matchMedia&&(matchMedia('(pointer:coarse)').matches
      ||(matchMedia('(any-pointer:coarse)').matches&&window.innerWidth<1100)));
    hc.classList.toggle('head-max',isTouch);hc.classList.toggle('head-mobile',isTouch);
    document.getElementById('hmUid').textContent=uid;
    document.getElementById('hmTip').textContent='正在启动浏览器并打开扫码页面…';
    document.getElementById('hmBox').innerHTML='<div style="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;color:var(--txt3)">正在启动浏览器并打开抖音扫码页面，约需 30~130 秒…</div>';
    try{
      const r=await api('/api/accounts/'+encodeURIComponent(uid)+'/head-login',{method:'POST'});
      const job=r.job||{};
      const url=(isTouch&&job.vnc_mobile_url)?job.vnc_mobile_url:job.vnc_url;
      if(url){
        document.getElementById('hmBox').innerHTML='<iframe src="'+url+'" style="width:100%;height:100%;border:0;background:#000" allowfullscreen allow="fullscreen;clipboard-write"></iframe>';
        document.getElementById('hmTip').textContent=isTouch
          ? '已连接远程桌面：把手机横过来操作，画面里拖动=移动鼠标，轻点=左键单击（10 分钟内有效）'
          : '远程桌面已连接：浏览器已打开扫码页面，请在画面里扫码（10 分钟内有效）';
      }
      Actions._pollHead(job.id,job.ts);
    }catch(e){
      Actions._headFailBox(uid,e.message||('HTTP 错误'));
    }
    finally{done();}
  },
  _pollHead(jobId,ts){
    let tries=0;
    const iv=setInterval(async()=>{
      tries++;
      try{
        const j=await api('/api/accounts/head-login/'+jobId);
        const st=j.job||{};
        const tip=document.getElementById('hmTip');
        if(st.status==='success'){
          clearInterval(iv);
          tip.textContent='登录成功，已写入 '+(st.cookie_count||0)+' 条 cookie，浏览器已自动关闭';
          toast('登录成功','cookie 已入库','ok');
          Loaders.accounts();
          setTimeout(()=>Actions.closeHead(),2500);
        }else if(st.status==='cancelled'){
          clearInterval(iv); /* 被新会话顶掉，静默停止本弹窗轮询 */
        }else if(st.status==='error'||st.status==='timeout'){
          clearInterval(iv);
          Actions._headFailBox(Actions._headUid,st.error||'登录超时，请重新发起');
        }else if(st.status==='waiting'&&st.stage==='browser_launch'&&st.message){
          /* [20261007] 起浏览器 + 打开抖音要 30~130 秒，这期间下面那段倒计时虽然在看，
             但浏览器其实还没就绪，用户以为扫码页已经出来了。透传带「已等待 N 秒」的心跳。
             只在 browser_launch 阶段覆盖 —— 弹窗出来后倒计时更有用。 */
          tip.textContent=st.message;
        }else if(ts){
          const left=Math.max(0,600-Math.floor(Date.now()/1000-ts));
          const mm=String(Math.floor(left/60)).padStart(2,'0'),ss=String(left%60).padStart(2,'0');
          tip.textContent='远程桌面已连接：请在画面里扫码，剩余 '+mm+':'+ss;
          const mt=document.getElementById('hmMiniTip');if(mt)mt.textContent='剩余 '+mm+':'+ss+'，点击恢复';
          if(tries>220){clearInterval(iv);Actions._headFailBox(Actions._headUid,'会话超时，请重新发起');}
        }
      }catch(e){/* 单次轮询失败不中断 */}
    },3000);
  },
  /* ===== [20260923] 短信验证码登录（手机端友好）：输入手机号 → 服务器自动填号点获取
     验证码 → 用户在面板回填短信验证码 → 自动提交，全程无需操作远程桌面 ===== */
  startSmsLogin(uid){
    const m=document.getElementById('smsModal');m.style.display='flex';
    document.getElementById('smsUid').textContent=uid;
    document.getElementById('smsStepPhone').style.display='';
    document.getElementById('smsStepCode').style.display='none';
    document.getElementById('smsPhone').value='';
    document.getElementById('smsCode').value='';
    /* [20261007] 清掉上一轮的会话状态：_smsJobId 不清会让「取消登录」去取消一个已经
       结束的旧 job（服务器直接 400）；_smsReady 不清会让新一轮一开局就允许输验证码。 */
    Actions._smsJobId=null;
    Actions._smsReady=false;
    const gate=document.getElementById('smsGate');if(gate)gate.style.display='none';
    const msg=document.getElementById('smsMsg');msg.textContent='';msg.style.color='';
  },
  closeSms(){
    document.getElementById('smsModal').style.display='none';
    if(Actions._smsPoll){clearInterval(Actions._smsPoll);Actions._smsPoll=null;}
  },
  async submitSmsPhone(btn){
    const uid=(document.getElementById('smsUid').textContent||'').trim();
    const phone=(document.getElementById('smsPhone').value||'').trim();
    const msg=document.getElementById('smsMsg');
    if(!/^1\d{10}$/.test(phone)){msg.style.color='var(--red)';msg.textContent='请输入 11 位手机号';return;}
    const done=_busy(btn);
    msg.style.color='';msg.textContent='正在启动服务器浏览器并提交手机号（约 20~40 秒）…';
    try{
      const r=await api('/api/accounts/'+encodeURIComponent(uid)+'/head-login',{method:'POST',body:{phone:phone}});
      if(!r.ok){msg.style.color='var(--red)';msg.textContent=r.error||'启动失败';done();return;}
      const job=r.job||{};
      Actions._smsJobId=job.id;
      Actions._smsReady=false;
      document.getElementById('smsStepPhone').style.display='none';
      document.getElementById('smsStepCode').style.display='';
      const gate=document.getElementById('smsGate');if(gate)gate.style.display='';
      msg.style.color='';msg.textContent=job.message||'服务器正在启动浏览器并打开抖音登录页…';
      Actions._pollSms(job.id);
    }catch(e){msg.style.color='var(--red)';msg.textContent='启动失败：'+e.message;}
    finally{done();}
  },
  async submitSmsCode(btn){
    const code=(document.getElementById('smsCode').value||'').trim();
    const msg=document.getElementById('smsMsg');
    /* [20261007] 就绪前提交现在服务端会排队受理（不会再被拒），但用户此时根本还没收到短信，
       提交的一定是错码。与其让他白发一次，不如先拦住并说清现在在等什么。 */
    if(Actions._smsReady===false){
      msg.style.color='var(--txt2)';
      msg.textContent='服务器还没打开抖音登录页，请等上方进度走到「验证码已发送」再输入';
      return;
    }
    if(!/^\d{4,8}$/.test(code)){msg.style.color='var(--red)';msg.textContent='验证码为 4~8 位数字';return;}
    const done=_busy(btn);
    try{
      const r=await api('/api/accounts/head-login/'+Actions._smsJobId+'/sms-code',{method:'POST',body:{code:code}});
      if(!r.ok){msg.style.color='var(--red)';msg.textContent=r.error||'提交失败';}
      else{msg.style.color='';msg.textContent='验证码已提交，正在自动登录…';}
    }catch(e){msg.style.color='var(--red)';msg.textContent='提交失败：'+e.message;}
    finally{done();}
  },
  _pollSms(jobId){
    if(Actions._smsPoll)clearInterval(Actions._smsPoll);
    let tries=0;
    const msg=document.getElementById('smsMsg');
    const gate=document.getElementById('smsGate');
    /* [20261007] 改为**全阶段**透传子进程进度。
       旧逻辑只在 stage 以 sms_ 开头时才更新文案，而「启动浏览器 + 打开抖音登录页」
       这 30~130 秒的 stage 是 browser_launch / login_modal_open，于是界面一直停在
       「正在自动填写手机号…请留意手机短信」—— 用户以为短信发丢了，或者提前把验证码
       输进来（服务器这时还没点过「获取验证码」）。现在连心跳「已等待 N 秒」都能看到。 */
    Actions._smsPoll=setInterval(async()=>{
      tries++;
      try{
        const j=await api('/api/accounts/head-login/'+jobId);
        const st=j.job||{};
        const stage=String(st.stage||'');
        const ready=(stage==='sms_sent'||stage==='sms_captcha'||stage==='sms_submitting');
        Actions._smsReady=ready;
        if(st.status==='waiting'&&st.message)msg.textContent=st.message;
        if(gate)gate.style.display=(st.status==='waiting'&&!ready)?'':'none';
        if(st.status==='success'){
          clearInterval(Actions._smsPoll);Actions._smsPoll=null;
          if(gate)gate.style.display='none';
          msg.style.color='var(--green)';msg.textContent='登录成功！已写入 '+(st.cookie_count||0)+' 条 cookie';
          toast('短信登录成功','cookie 已入库','ok');
          Loaders.accounts();
          setTimeout(()=>Actions.closeSms(),2000);
        }else if(st.status==='error'||st.status==='timeout'){
          clearInterval(Actions._smsPoll);Actions._smsPoll=null;
          if(gate)gate.style.display='none';
          msg.style.color='var(--red)';msg.textContent=st.error||'登录超时，请重新发起';
        }else if(st.status==='cancelled'){
          clearInterval(Actions._smsPoll);Actions._smsPoll=null;
          if(gate)gate.style.display='none';
        }else if(tries>200){
          clearInterval(Actions._smsPoll);Actions._smsPoll=null;
          if(gate)gate.style.display='none';
          msg.style.color='var(--red)';msg.textContent='超时，请重新发起';
        }
      }catch(e){/* 单次轮询失败不中断 */}
    },3000);
  },
  /* [20261007] 取消登录。登录会话会独占服务器（浏览器 + 有头窗口）直到 600 秒超时，
     误触发后必须能立刻停下来。以前这里只有「关闭」按钮，而 closeSms 只是隐藏弹窗 +
     停掉本页轮询 —— 服务端 job 照跑、浏览器照占，用户以为已经关掉了。 */
  async cancelSmsLogin(btn){
    const id=Actions._smsJobId;
    if(Actions._smsPoll){clearInterval(Actions._smsPoll);Actions._smsPoll=null;}
    if(!id){Actions.closeSms();return;}
    if(!confirm('取消后需要重新发起登录，已收到的验证码也会作废。\n服务器上的浏览器会立即关闭。'))return;
    const done=_busy(btn);
    try{
      await api('/api/accounts/head-login/'+id+'/cancel',{method:'POST',body:{}});
      toast('已取消登录','服务器浏览器已释放','ok');
    }catch(e){toast('取消失败',e.message||'','err');}
    finally{done();Actions.closeSms();}
  },
  async startQr(uid){
    const m=document.getElementById('qrModal');m.style.display='flex';
    document.getElementById('qrMeta').textContent='账号 '+uid;
    Actions._qrUid=uid; Actions._qrUrl=''; Actions._qrJobId=null;
    const box=document.getElementById('qrBox');
    const gate=document.getElementById('qrVerify');
    if(gate)gate.style.display='none';
    const cin=document.getElementById('qrCode');
    if(cin)cin.value='';
    box.innerHTML='<div class="sp"></div>';
    document.getElementById('qrTip').textContent='正在启动浏览器生成二维码…';
    try{
      const r=await api('/api/accounts/'+encodeURIComponent(uid)+'/qr',{method:'POST'});
      const job=r.job||{};
      if(job.status==='error'){box.innerHTML='<div class="muted" style="padding:20px">'+esc(job.error||'生成失败')+'</div>';document.getElementById('qrTip').textContent='失败，可改用「短信登录」或导入 cookie';return;}
      Actions._pollQr(job.id,box);
    }catch(e){box.innerHTML='<div class="muted" style="padding:20px">'+esc(e.message)+'</div>';document.getElementById('qrTip').textContent='失败，可改用「短信登录」或导入 cookie';}
  },
  /* [20261007] 扫码成功后抖音可能要求短信二次验证 —— 这时二维码区会收起、
     该填手机收到的验证码。不把这个入口做出来，用户只会看到「二维码已过期」。 */
  async submitQrCode(btn){
    const tip=document.getElementById('qrTip');
    const code=(document.getElementById('qrCode').value||'').trim();
    if(!Actions._qrJobId){tip.textContent='任务已结束，请重新获取二维码';return;}
    if(!/^\d{4,8}$/.test(code)){tip.textContent='验证码为 4~8 位数字';return;}
    const done=_busy(btn);
    try{
      await api('/api/accounts/qr/'+Actions._qrJobId+'/verify-code',{method:'POST',body:{code:code}});
      tip.textContent='验证码已提交，正在登录…';
      const cin=document.getElementById('qrCode');
      if(cin)cin.value='';
    }catch(e){tip.textContent='提交失败：'+(e.message||'');}
    finally{done();}
  },
  _pollQr(jobId,box){
    if(Actions._qrPoll)clearInterval(Actions._qrPoll);
    Actions._qrJobId=jobId;
    let tries=0;
    const iv=setInterval(async()=>{
      tries++;
      try{
        const j=await api('/api/accounts/qr/'+jobId);
        const st=j.job||{};
        const tip=document.getElementById('qrTip');
        if(st.status==='need_verify'){
          const gate=document.getElementById('qrVerify');
          if(gate)gate.style.display='';
          tip.textContent=st.message||'扫码已受理，抖音要求短信二次验证，请填写手机收到的验证码';
        }else if(st.status==='success'){
          clearInterval(iv);Actions._qrPoll=null;
          const gate=document.getElementById('qrVerify');
          if(gate)gate.style.display='none';
          tip.textContent='登录成功，已写入 '+(st.cookie_count||0)+' 条 cookie';
          toast('网页登录成功','cookie 已入库','ok');
          Loaders.accounts();
          setTimeout(()=>Actions.closeQr(),1500);
        }else if(st.status==='error'||st.status==='expired'){
          clearInterval(iv);Actions._qrPoll=null;
          tip.textContent=st.error||'二维码已失效';
          box.innerHTML='<div class="muted" style="padding:20px">'+esc(st.error||'失败')+'</div>';
        }else{
          /* 其它阶段（启动 / 生成二维码中）用服务端 message 兜住，避免界面一直停在旧文案 */
          if(st.message)tip.textContent=st.message;
          if(st.status==='scanning'&&st.qrcode_url&&st.qrcode_url!==Actions._qrUrl){
            Actions._qrUrl=st.qrcode_url;
            box.innerHTML='<img src="'+st.qrcode_url+'" alt="二维码" style="width:220px;height:220px;border-radius:8px">';
            tip.textContent='请用抖音 App 扫一扫并确认登录。手机上打开本页时：长按二维码→保存图片→打开抖音「扫一扫」→相册选择该图；或改用「短信登录」';
          }
          if(tries>70){clearInterval(iv);Actions._qrPoll=null;tip.textContent='超时，请重新发起';}
        }
      }catch(e){clearInterval(iv);Actions._qrPoll=null;}
    },3000);
    Actions._qrPoll=iv;
  },
  openImport(uid){
    document.getElementById('importModal').style.display='flex';
    document.getElementById('impUid').textContent=uid;
    document.getElementById('impInput').value='';
  },
  closeImport(){document.getElementById('importModal').style.display='none';},
  async importCookies(){
    const uid=(document.getElementById('impUid').textContent||'').trim();
    const raw=(document.getElementById('impInput').value||'').trim();
    if(!raw){toast('请粘贴 cookie JSON','','err');return;}
    let arr;
    try{arr=JSON.parse(raw);}catch(e){toast('JSON 解析失败',e.message,'err');return;}
    if(!Array.isArray(arr)){toast('格式错误','应为 JSON 数组','err');return;}
    try{
      const r=await api('/api/accounts/'+encodeURIComponent(uid)+'/cookies',{method:'POST',body:{cookies:arr}});
      if(r.ok){toast('已导入',r.cookie_count+' 条 cookie','ok');Actions.closeImport();Loaders.accounts();}
      else toast('导入失败',r.error||'','err');
    }catch(e){toast('导入失败',e.message,'err');}
  }
});

// PWA Service Worker 注册
if('serviceWorker' in navigator){
  navigator.serviceWorker.register('/static/sw.js').catch(()=>{});
}
/* 手机版远程控制页（6080 的同源页面）在 iframe 里点「返回面板」时，
   通过 postMessage 让面板关闭「远程登录」弹窗。只接受来自该 iframe 的消息。 */
window.addEventListener('message',(ev)=>{
  try{
    const d=ev.data||{};
    if(!d||d.type!=='sparkflow:close-head')return;
    const fr=document.querySelector('#hmBox iframe');
    if(fr&&ev.source===fr.contentWindow){
      Actions.minHead();
      toast('已返回控制台','远程桌面缩到右下角，登录会话保留；点浮标可继续操作','ok');
    }
  }catch(e){}
});

/* 通知设置：管理员可代其他用户配置，请求体里带上目标用户名 */
function _pushBody(){
  const b={};
  const u=App.state.pushUser||'';
  if(App.state.isAdmin&&u)b.username=u;
  return b;
}
function _sw_show(){App.state.scrapedHidden=false;Loaders.friends();}
function _sw_hide(){App.state.scrapedHidden=true;Loaders.friends();}
// [新增20261001] 展开/收起「非互关·从未聊过」的空会话（默认隐藏）
function _sw_nm(){App.state.showNonMutual=!App.state.showNonMutual;Loaders.friends();}
/* [v4] 登录页密码可见性切换：CSP 是 script-src 'self'（无 unsafe-inline），
   原来写的 onclick= 内联处理器会被直接拦掉 → 改用 data-click 委托到全局函数。 */
function _togglePwd(){var e=document.getElementById('loginPass');if(!e)return;e.type=(e.type==='password'?'text':'password');}
/* 日报：立即把当前视角的日报推到自己配置的通道（微信/企业微信等） */
/* 点存档日期 = 跳到那天的日报 */
Actions.drPickDate=function(el){
  const d=el.getAttribute('data-date'), n=document.getElementById('drDate');
  if(n)n.value=(n.value===d)?'':d;    // 再点一次回到今天
  Loaders.daily(true);
};
/* [v6.20] 日报日期 ‹ › 步进：优先跳到「有存档的日期」，没有可跳的就按自然日加减。
   日期为空 = 今天（实时生成）—— 原有约定。 */
Actions.drStep=function(dir){
  dir=(String(dir)==='-1')?-1:1;
  const inp=document.getElementById('drDate');
  const today=drToday();
  const cur=(inp&&inp.value)||today;
  const all=drDates().filter(x=>x<=today).sort();          // 升序，且不含未来
  let target=null;
  if(dir<0){
    const older=all.filter(x=>x<cur);
    if(older.length)target=older[older.length-1];
    else{const t=new Date(cur+'T00:00:00');t.setDate(t.getDate()-1);target=drFmtDate(t);}
  }else{
    const newer=all.filter(x=>x>cur);
    target=newer.length?newer[0]:today;                    // 已是最新 → 回今天
  }
  if(target>today)target=today;
  if(inp)inp.value=(target===today?'':target);
  Loaders.daily(true);
};
/* [v6.20] 回到今天（清空输入框 = 实时生成） */
Actions.drToday=function(){
  const inp=document.getElementById('drDate');
  if(inp)inp.value='';
  Loaders.daily(true);
};
/* [v6.20] 空状态里点某个「有数据的日期」直接跳过去 */
Actions.drPick=function(day){
  const inp=document.getElementById('drDate');
  const v=String(day||'');
  if(inp)inp.value=(v===drToday()?'':v);
  Loaders.daily(true);
};
/* 点登录态那一行 = 忽略缓存强制重校验（刚重新登录抖音号时用） */
Actions.drForceSession=async function(el){
  if(!el)return;
  el.innerHTML='<span class="tiny muted">校验中…</span>';
  await drFillSessions(true);
};
Actions.pushDailyReport=async function(btn){
  if(!confirm('把当前范围的日报立即推送给你？\n走你在【面板用户 → 通知设置】里配置的通道。'))return;
  const done=btn?_busy(btn):(()=>{});
  try{
    const r=await api('/api/daily-report/push',{method:'POST'});
    if(r.ok)toast('日报已推送',r.info||'请到对应通道查看','ok');
    else toast('推送失败',r.error||r.info||'','err');
  }catch(e){toast('推送失败',e.message,'err');}
  finally{done();}
};
/* [v4 新增] 复制文本：Stitch 04/08 稿的 ID 芯片带复制按钮。
   navigator.clipboard 需要安全上下文（https / localhost），
   面板 8123 走的是 http → 降级用临时 textarea + execCommand。 */
Actions.copyText=function(text){
  const done=()=>toast('已复制',String(text),'ok');
  const legacy=()=>{
    const ta=document.createElement('textarea');
    ta.value=text;ta.style.cssText='position:fixed;top:-1000px;opacity:0';
    document.body.appendChild(ta);ta.select();
    try{document.execCommand('copy');done();}catch(e){toast('复制失败',String(text),'err');}
    ta.remove();
  };
  try{
    if(navigator.clipboard&&window.isSecureContext){
      navigator.clipboard.writeText(text).then(done).catch(legacy);
    }else legacy();
  }catch(e){toast('复制失败',String(text),'err');}
};

/* [v4 新增] 账号行「更多」展开（纯 DOM toggle，不重新请求） */
Actions.accMore=function(idx){
  const el=document.getElementById('accMore'+idx);
  if(el)el.classList.toggle('hidden');
};

/* [v4 新增] 「立即验证」：强制带 live=1 重校验登录态 */
Actions.verifyAccount=async function(uid){
  toast('正在校验','重新握手校验登录态，约 5~20 秒…');
  try{
    const r=await api('/api/accounts?live=1');
    const accs=r.accounts||[];
    App.state.accounts=accs;
    App.updateAccSwitcher();
    await Loaders.accounts(true);
    const live=accs.find(a=>a.unique_id===uid);
    if(live){
      const ck=live.cookie||{};
      const ok=!!(ck.has&&ck.session&&!ck.expired);
      toast(ok?'校验通过':'校验未通过',
        ok?'会话有效，已可参与续火花任务':(ck.parse_err?'cookie 解析异常':'无有效登录会话，请重新登录'),
        ok?'ok':'warn');
    }
  }catch(e){toast('校验失败',e.message,'err');}
};

/* [v4 新增] 跳到「新增账号」录入条 */
Actions.gotoAddAcc=function(){
  const el=document.getElementById('addAccBox');
  if(el&&el.scrollIntoView)el.scrollIntoView({behavior:'smooth',block:'center'});
  const inp=document.getElementById('addAccUid');
  if(inp)setTimeout(()=>{try{inp.focus();}catch(e){}},300);
};

/* [v4 新增] 打开 noVNC 远程桌面（6080） */
Actions.openNoVnc=function(){
  const url=location.protocol+'//'+location.hostname+':6080/vnc.html';
  const w=window.open(url,'_blank','noopener');
  if(!w)toast('无法打开新窗口','请手动访问 '+url,'warn');
};

/* [v4 新增] 跳到「添加用户」录入条 */
Actions.gotoAddUser=function(){
  const el=document.getElementById('addUserBox');
  if(el&&el.scrollIntoView)el.scrollIntoView({behavior:'smooth',block:'center'});
  const inp=document.getElementById('puName');
  if(inp)setTimeout(()=>{try{inp.focus();}catch(e){}},300);
};

/* [v4 新增] 批量导出面板用户列表（CSV，纯前端） */

/* [v4.9] 06 稿顶栏：日期前后步进（空=今天实时） */
/* [v6.15] Actions.drShift（顶栏日期前后步进）随顶栏日期步进器一起删除：
   那对 ‹ › 是顶栏唯一的调用方，删掉后函数留着只会是死代码。日期改走正文日期输入框。 */
/* [v4.9] 06 稿顶栏：复制推送内容（纯文本摘要） */
Actions.copyDailyReport=async function(){
  const d=App.state._drData;
  if(!d){toast('暂无内容','请等日报生成后再复制','warn');return;}
  const sm=d.summary||{};const L=[];
  L.push('火花守护日报 '+(d.date||''));
  L.push('发送：'+(sm.sent_ok||0)+'/'+(sm.sent_total||0)+' 成功');
  L.push('火花风险：断'+(sm.spark_broken||0)+' · 无'+(sm.spark_none||0)+' · 告急'+(sm.spark_low||0));
  (d.accounts||[]).forEach(a=>{
    L.push('- '+a.uname+' ('+a.uid+') 今日发送 '+(((a.send||[]).reduce((x,r)=>x+(r.ok||0),0))||0)+'/'+(((a.send||[]).reduce((x,r)=>x+(r.total||0),0))||0));
  });
  const txt=L.join('\n');
  try{await navigator.clipboard.writeText(txt);toast('已复制','日报文本已复制到剪贴板','ok');}
  catch(e){Actions._copyFallback(txt);}
};

Actions.exportUsers=function(){
  const all=App.state._puAll||[];
  if(!all.length){toast('无可导出数据','','warn');return;}
  const head=['用户名','角色','关联抖音号','推送通道','推送状态','早报'];
  const rows=all.map(u=>{
    const nt=u.notify||{};
    return [u.username,u.is_admin?'管理员':'普通用户',(u.account_uids||[]).join(' '),
      nt.configured?(nt.channel_label||'已配置'):'未配置',
      nt.configured?(nt.enabled!==false?'已启用':'已停用'):'—',
      nt.configured?(nt.daily!==false?'开':'关'):'—'];
  });
  const csv='\uFEFF'+[head].concat(rows).map(r=>r.map(x=>'"'+String(x==null?'':x).replace(/"/g,'""')+'"').join(',')).join('\r\n');
  const blob=new Blob([csv],{type:'text/csv;charset=utf-8'});
  const a=document.createElement('a');
  a.href=URL.createObjectURL(blob);
  a.download='panel_users_'+(typeof drToday==='function'?drToday():'')+'.csv';
  document.body.appendChild(a);a.click();a.remove();
  setTimeout(()=>URL.revokeObjectURL(a.href),3000);
  toast('已导出','共 '+all.length+' 个面板用户','ok');
};

/* [v4 新增] 作废所有账号的浏览器会话（DELETE /api/accounts/<uid>/session） */
Actions.revokeAllSessions=async function(){
  const acc=App.state.accounts||[];
  if(!acc.length){toast('没有账号','无需操作','warn');return;}
  if(!confirm('确认作废全部 '+acc.length+' 个账号的浏览器登录会话？\n\n作废后各账号需重新扫码 / 短信登录才能参与续火花任务。此操作不可撤销。'))return;
  let ok=0,fail=0;
  for(const a of acc){
    try{
      const r=await api('/api/accounts/'+encodeURIComponent(a.unique_id)+'/session',{method:'DELETE'});
      if(r.ok)ok++;else fail++;
    }catch(e){fail++;}
  }
  if(ok)toast('已作废 '+ok+' 个会话',fail?('其中 '+fail+' 个无会话文件或失败'):'各账号需重新登录',fail?'warn':'ok');
  else toast('作废失败','未找到可作废的会话文件','err');
  /* 本地同步把会话标记清掉，避免界面仍显示「在线」 */
  App.state.accounts=acc.map(a=>{const c=a.cookie||{};
    return Object.assign({},a,{cookie:Object.assign({},c,{has:false,count:0,session:false,expired:false})});});
  Loaders.panelusers();
  App.refreshAccountStatus();
};

// === [v6.15] 手机端「列表 → 详情弹层」====
/* =========================================================================
   手机上横向超宽的表格（定时任务列表 / 执行台账 / 面板用户）改成「一屏一卡」：
   卡片只放关键信息（.mcards/.mcard 那套样式在 style4.css 里，只在 ≤767px 显示），
   点一下从底部升起详情层，看这一条的完整字段与全部操作按钮。

   不新增任何 CSS：#msheet 那套（手机底部抽屉 / ≥768px 居中对话框 / html.msopen
   锁背景滚动 / ms-bd 里的 .kv 键值行）style4.css 里早就有了，这里只负责造 DOM + 填内容。

   卡片 → 弹层的数据通道：卡片只画摘要，完整字段在渲染卡片时用 Sheet._reg(kind,key,row)
   存一份纯字段副本（不依赖各 Loader 的闭包），弹层再按 (kind,key) 回查。
   ========================================================================= */
const Sheet={
  _rows:{},
  _reg(kind,key,row){if(!this._rows[kind])this._rows[kind]={};this._rows[kind][key]=row;},
  _reset(kind){this._rows[kind]={};},
  _node(){
    let e=document.getElementById('msheet');
    if(e)return e;
    e=document.createElement('div');e.id='msheet';
    e.innerHTML=
      '<div class="ms-mask" data-click="Sheet.close"></div>'+
      '<div class="ms-card" role="dialog" aria-modal="true" aria-labelledby="msTitle">'+
        '<div class="ms-hd"><h4 id="msTitle"></h4>'+
        '<button class="ms-x" type="button" data-click="Sheet.close" aria-label="关闭">'+MI('close','text-[19px]')+'</button></div>'+
        '<div class="ms-sub" id="msSub"></div>'+
        '<div class="ms-bd" id="msBody"></div>'+
        '<div class="ms-acts" id="msActs"></div>'+
      '</div>';
    document.body.appendChild(e);
    /* Esc 关闭：桌面宽度下弹层是居中对话框，键盘关闭更顺手（手机上主要点遮罩/右上角 ×） */
    document.addEventListener('keydown',function(ev){if(ev.key==='Escape')Sheet.close();});
    return e;
  },
  open(kind,key){
    const row=(this._rows[kind]||{})[String(key)];
    if(!row)return;
    const def=(this.builders[kind]||function(){return null;})(row);
    if(!def)return;
    const e=this._node();
    document.getElementById('msTitle').textContent=def.title||'';
    document.getElementById('msSub').innerHTML=def.sub||'';
    document.getElementById('msBody').innerHTML=(def.kvs||[]).map(function(p){
      return '<div class="kv"><i>'+esc(p[0])+'</i><span>'+((p[1]==null||p[1]==='')?'—':p[1])+'</span></div>';}).join('');
    document.getElementById('msActs').innerHTML=def.acts||'';
    e.classList.add('on');
    document.documentElement.classList.add('msopen');
  },
  close(){
    const e=document.getElementById('msheet');
    if(e)e.classList.remove('on');
    document.documentElement.classList.remove('msopen');
  },
  /* 各列表的「详情」内容生成器：只读 _reg 塞进来的纯字段 */
  builders:{
    sched(r){
      const en=r.enabled!==false;
      const acts=r.canEdit?(
        (r.running?'':'<button type="button" data-click="Actions.runSchedTask" data-arg="'+esc(r.id)+'" data-pass-this="1">立即执行</button>')+
        '<button type="button" data-click="Actions.editSchedTask" data-arg="'+esc(r.id)+'" data-pass-this="1">编辑</button>'+
        '<button type="button" data-click="Actions.toggleSchedTask" data-args="'+esc(r.id)+'|'+(!en)+'" data-pass-this="1">'+(en?'停用':'启用')+'</button>'+
        '<button type="button" data-click="Actions.deleteSchedTask" data-arg="'+esc(r.id)+'" data-pass-this="1">删除</button>'
      ):'<span>只读任务，当前身份无权修改</span>';
      return {
        title:r.type+' · '+r.acc,
        sub:r.isGlobal?'全局任务（所有抖音号生效）':'绑定抖音号 '+esc(r.uid||'—')+' · 任务 ID '+esc(r.id||'—'),
        kvs:[['抖音账号',esc(r.acc||'—')],['任务类型',esc(r.type||'—')],['目标好友',esc(r.target||'—')],
             ['发送话术',esc(r.msg||'默认（今日火花 + 每日一言）')],['执行时间',esc(r.time||'—')],
             ['随机延迟',esc(r.delay||'—')],['上次执行',r.last||'暂无记录'],['下次执行',r.next||'—'],
             ['当前状态',en?('启用'+(r.running?' · 正在执行':'')):'已停用']],
        acts:acts
      };
    },
    rec(r){
      return {
        title:r.who,
        sub:esc(r.ts||'')+' · '+esc(r.task||''),
        kvs:[['执行时间',esc(r.ts||'—')],['任务类型',esc(r.task||'—')],['抖音账号',esc(r.account||'—')],
             ['目标好友',esc(r.who||'—')],['发送结果',r.result||'—'],
             ['重试成功',esc(r.later||'—')],['发送条数',r.sent==null?'—':(esc(r.sent)+' 条')],
             ['执行内容',esc(r.content||'（无文本内容）')]],
        acts:''
      };
    },
    pu(r){
      let acts='<button type="button" data-click="Actions.openAvatarPicker" data-args="pu|'+esc(r.username)+'">更换头像</button>'+
        '<button type="button" data-click="Actions.pushEditUser" data-arg="'+esc(r.username)+'">通知设置</button>'+
        '<button type="button" data-click="Actions.panelUserPwd" data-arg="'+esc(r.username)+'">重置密码</button>';
      if(r.canDel)acts+='<button type="button" data-click="Actions.panelUserDel" data-arg="'+esc(r.username)+'">删除用户</button>';
      return {
        title:r.username+(r.mine?'（我）':''),
        sub:esc(r.kindId||'')+(r.mine?' · 当前登录身份':''),
        kvs:[['用户名',esc(r.username)],['角色权限',r.role||'—'],['关联抖音号',esc(r.uids||'—')],
             ['推送通道',esc(r.channel||'—')],['推送状态',r.on?'已启用':'未启用'],
             ['每日早报',r.daily?'每天 09:00 开启':'已关闭'],['账号标识',esc(r.kindId||'—')]],
        acts:acts
      };
    }
  }
};
/* 手机卡片外壳：摘要 + 右侧状态 + 两行关键字段 + 右侧箭头，整块可点 */
function _mcardHtml(kind,key,main,side,rows){
  return '<div class="mcard" data-click="Sheet.open" data-args="'+kind+'|'+esc(key)+'">'+
    '<div class="mcard-top"><div class="mcard-main">'+main+'</div>'+
    '<div class="mcard-side">'+(side||'')+
    '<span class="mcard-chev material-symbols-outlined">'+msGlyph('chevron_right')+'</span></div></div>'+
    ((rows&&rows.length)?('<div class="mcard-rows">'+rows.map(function(p){
      return '<div class="mcard-row"><b>'+p[0]+'</b><span>'+p[1]+'</span></div>';}).join('')+'</div>'):'')+
    '</div>';
}
/* 卡片里的「主标题 + 副标题」两块（沿用 Stitch 的字号/灰阶） */
function _mcardTitle(t,sub){
  return '<div style="font-size:13px;font-weight:600;color:#dee2f1;line-height:1.35;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">'+t+'</div>'+
    (sub?('<div style="font-size:11px;color:#8b95a7;font-family:JetBrains Mono,Menlo,monospace;margin-top:2px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">'+sub+'</div>'):'');
}

// === Event Delegation System ===

(function(){
  function resolveFn(path){
    var parts=path.split('.'),obj=window;
    for(var i=0;i<parts.length-1;i++){obj=obj[parts[i]];if(!obj)return null;}
    return obj?obj[parts[parts.length-1]]:null;
  }
  function handleEvent(e,type){
    var el=e.target.closest('[data-'+type+']');
    if(!el)return;
    var fnName=el.dataset[type];
    if(fnName==='this_remove'){e.target.remove();return;}
    var fn=resolveFn(fnName);
    var ctx=(fnName.indexOf('.')>-1)?window[fnName.split('.')[0]]:null;
    if(!fn){console.warn('Handler not found:',fnName);return;}
    var arg=el.dataset.arg;
    var argsStr=el.dataset.args;
    var passThis=el.dataset.passThis==='1';
    if(argsStr!==undefined){
      var parts=argsStr.split('|');
      var args=parts.map(function(p){
        if(p==='true')return true;
        if(p==='false')return false;
        if(p==='null')return null;
        if(p==='1')return 1;
        if(p==='0')return 0;
        return p;
      });
      if(passThis)args.push(el);
      fn.apply(ctx,args);
    }else if(arg!==undefined){
      if(passThis)fn.call(ctx,arg,el);else fn.call(ctx,arg);
    }else if(type==='input'||type==='change'){
      /* [v4 fix] 输入类事件必须把值带进来：checkbox 给 checked，其余给 value；
         处理函数统一签名 fn(val, el)。data-pass-this="1" 仍传元素本身。 */
      var val=(el.type==='checkbox')?el.checked:el.value;
      if(passThis)fn.call(ctx,el);else fn.call(ctx,val,el);
    }else{
      if(passThis)fn.call(ctx,el);else fn.call(ctx);
    }
  }
  document.addEventListener('click',function(e){handleEvent(e,'click');});
  document.addEventListener('change',function(e){handleEvent(e,'change');});
  /* [v4] CSP 为 script-src 'self'（无 unsafe-inline）→ 页面里不能用 oninput= 内联处理器，
     搜索框/滑块这类连续输入改用 data-input="Fn" 走这里委托。 */
  document.addEventListener('input',function(e){handleEvent(e,'input');});
  document.addEventListener('error',function(e){handleEvent(e,'error');},true);
window.App=App;window.Actions=Actions;window.ToastHistory=ToastHistory;window.Loaders=Loaders;window.Sheet=Sheet;window.MTAB=MTAB;/* FIX 2026-09-23 data-click 委托需全局可达 */
/* [v9] 把二级页 Action 挂到已初始化的 Actions 上（_V9A 见文件前半段的 banner 注释） */
Object.assign(Actions,_V9A);
Object.assign(Actions,_V12A);
/* [v4 fix 20261011] data-* 委托经 resolveFn 只从 window 解析 → IIFE 内的裸 _xxx
   处理器必须逐个导出，否则点击/输入全部落入 "Handler not found"。 */
(function(){
  var names=['_fvPage','_fvSearch','_fvSize','_fvSort','_tfToggle','_sparkUi','_logAuto','_logExport','_logTab',
    '_puPage','_puRole','_puSearch','_recType','_recDate','_recScope',
    '_recCalToggle','_recCalNav','_recCalPick',
    '_sw_hide','_sw_nm','_sw_show','_ct_nm','_taskChipFilter','_taskInsertEmoji','_taskMsgCount',
    '_taskMsgCount2','_taskMsgMode','_taskPickTarget','_taskRunBatch','_taskRunPulse','_togglePwd','_ovRecKw'];
  for(var i=0;i<names.length;i++){try{window[names[i]]=eval(names[i]);}catch(e){}}
})();
})();

/* ---- v4：界面缩放（默认 125% 整体放大）按本地偏好应用。放这里是为了连登录页也生效 ---- */
try{App.applyUiScale();}catch(e){}
/* [v6.15] 面板用户免密切换已下线：清掉 v6.13/v6.14 可能残留在浏览器里的「模拟身份栈」，
   否则上次切到别人身份的用户会既卡在别人身份、又找不到「返回我的账号」。
   （当前会话 token 仍是那个用户的，重新登录一次即可，属预期。） */
try{localStorage.removeItem('panel_imp_root');localStorage.removeItem('ui.scale');}catch(e){}

/* ---- v4：静态图标码点化（登录页/侧栏/顶栏里的图标名 → 字形） ---- */
try{fixStaticIcons(document);}catch(e){}
