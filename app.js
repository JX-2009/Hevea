
const $=s=>document.querySelector(s);
let db=JSON.parse(localStorage.getItem("finalV5DB")||"null")||structuredClone(SEED);
let session=JSON.parse(localStorage.getItem("finalV5Session")||"null");
let current="home", orgTab="list", listFilter="ALL", bonusMonth="2026-09";

function save(){localStorage.setItem("finalV5DB",JSON.stringify(db))}
function fmt(n){return Number(n||0).toLocaleString("zh-TW")}
function me(){return db.users.find(x=>x.id===session?.id)}
function setSession(u){session={id:u.id,role:u.role};localStorage.setItem("finalV5Session",JSON.stringify(session));current="home";render()}
function logout(){localStorage.removeItem("finalV5Session");session=null;render()}
function doLogin(){let u=db.users.find(x=>x.id===$("#uid").value.trim()&&x.password===$("#pwd").value);if(!u)return alert("帳號或密碼錯誤");setSession(u)}
function loginView(){return `<div class="login-wrap"><div class="login"><div class="login-logo">✦</div><h1 style="text-align:center;margin:14px 0 4px">雙軌會員系統</h1><p class="muted" style="text-align:center">功能展示版</p><div class="field"><label>手機號碼</label><input id="uid" value="0912345678"></div><div class="field"><label>密碼</label><input id="pwd" type="password" value="123456"></div><button class="btn primary" style="width:100%" onclick="doLogin()">登入</button><hr><div class="small muted">會員：0912345678 / 123456<br>管理員：ADMIN / admin123</div></div></div>`}
function nav(){return `<nav class="nav"><button class="${current==="home"?"active":""}" onclick="go('home')"><span>⌂</span>首頁</button><button class="${current==="org"?"active":""}" onclick="go('org')"><span>♧</span>組織</button><button class="${current==="shop"?"active":""}" onclick="go('shop')"><span>🛒</span>商城</button><button class="${current==="bonus"?"active":""}" onclick="go('bonus')"><span>▣</span>獎金</button><button class="${current==="account"?"active":""}" onclick="go('account')"><span>◎</span>我的</button></nav>`}
function go(p){current=p;render();window.scrollTo({top:0,behavior:"smooth"})}

function children(id){return db.users.filter(x=>x.placement===id)}
function childSide(id,side){return children(id).find(x=>x.side===side)}
function subtreeMembers(id){let out=[];function walk(pid){children(pid).forEach(c=>{out.push(c);walk(c.id)})}walk(id);return out}
function subtreePV(id){let u=db.users.find(x=>x.id===id);return (u?.pv||0)+children(id).reduce((a,c)=>a+subtreePV(c.id),0)}
function sideRoot(id,side){return childSide(id,side)}
function sideMembers(id,side){let r=sideRoot(id,side);return r?[r,...subtreeMembers(r.id)]:[]}
function sidePV(id,side){let r=sideRoot(id,side);return r?subtreePV(r.id):0}
function bonusItems(uid,month){return db.bonuses.filter(x=>x.user===uid&&x.month===month)}
function bonusTotal(uid,month){return bonusItems(uid,month).reduce((a,b)=>a+b.amount,0)}

function home(u){
 let l=sidePV(u.id,"L"),r=sidePV(u.id,"R"),heights=[30,44,39,55,49,67,75,62,83,74,96,88];
 return `<div class="hero"><div class="hero-top"><div class="brand"><div class="mark">✦</div>雙軌會員系統</div><span class="demo">DEMO</span></div><div class="profile"><div class="avatar">👤</div><div><h2>${u.name}</h2><small>${u.mobile}</small><div class="rank">◆ ${u.rank} Lv.${u.level}</div></div></div><div class="kpis"><div class="kpi">個人 PV<b>${fmt(u.pv)}</b></div><div class="kpi">左區 PV<b>${fmt(l)}</b></div><div class="kpi">右區 PV<b>${fmt(r)}</b></div></div></div>
 <div class="section">
  <div class="card summary"><div><small class="muted">本月累積獎金</small><div class="amount">NT$ ${fmt(bonusTotal(u.id,"2026-09"))}</div></div><button class="btn gold" onclick="go('bonus')">獎金明細</button></div>
  <div class="section-title"><h3>快速入口</h3><small class="muted">常用功能</small></div>
  <div class="grid2"><div class="card quick" onclick="alert('Demo：產生推薦連結 / QR Code')"><div class="qicon">👥</div><b>推薦會員</b><br><small>邀請夥伴・拓展組織</small></div><div class="card quick" onclick="go('org')"><div class="qicon">♧</div><b>我的組織</b><br><small>雙軌團隊・一手掌握</small></div><div class="card quick" onclick="go('bonus')"><div class="qicon">💰</div><b>獎金明細</b><br><small>透明紀錄・清楚安心</small></div><div class="card quick" onclick="go('shop')"><div class="qicon">🛒</div><b>商城購物</b><br><small>商品・PV 一次查看</small></div></div>
  <div class="section-title"><h3>業績總覽</h3><small class="muted">本月</small></div>
  <div class="performance"><div class="perf left">左區團隊<b>${fmt(l)} PV</b><small>${sideMembers(u.id,"L").length} 位會員</small></div><div class="perf right">右區團隊<b>${fmt(r)} PV</b><small>${sideMembers(u.id,"R").length} 位會員</small></div></div>
  <div class="card chart-card" style="margin-top:12px"><h3>業績成長趨勢</h3><div class="chart">${heights.map(h=>`<div class="bar" style="height:${h}%"></div>`).join("")}</div></div>
  <div class="section-title"><h3>最新公告</h3></div>
  ${db.announcements.map(n=>`<div class="row"><div><b>${n.title}</b><br><small>${n.type} ・ ${n.date}</small></div>${n.important?'<span class="badge warn">重要</span>':'<span class="badge">NEW</span>'}</div>`).join("")}
 </div>`;
}

function setOrgTab(t){orgTab=t;render()}
function showSide(side){listFilter=side;orgTab="list";render()}
function org(u){
 let l=sidePV(u.id,"L"),r=sidePV(u.id,"R");
 return `<div class="pagehead"><h2>雙軌組織</h2><span class="badge">${subtreeMembers(u.id).length} 位會員</span></div>
 <div class="tabs"><button class="${orgTab==="list"?"active":""}" onclick="setOrgTab('list')">安置列表</button><button class="${orgTab==="tree"?"active":""}" onclick="setOrgTab('tree')">安置組織樹</button><button class="${orgTab==="summary"?"active":""}" onclick="setOrgTab('summary')">總表</button></div>
 <div class="team-summary"><div class="team-box left" onclick="showSide('L')">左區團隊<b>${fmt(l)} PV</b><small>${sideMembers(u.id,"L").length} 人</small></div><div class="team-box right" onclick="showSide('R')">右區團隊<b>${fmt(r)} PV</b><small>${sideMembers(u.id,"R").length} 人</small></div></div>
 ${orgTab==="list"?orgList(u):orgTab==="tree"?placementTree(u):orgSummary(u)}`;
}
function orgList(u){
 let all=subtreeMembers(u.id);
 if(listFilter==="L") all=sideMembers(u.id,"L");
 if(listFilter==="R") all=sideMembers(u.id,"R");
 return `<div class="tabs" style="padding-top:12px"><button class="${listFilter==="ALL"?"active":""}" onclick="listFilter='ALL';render()">全部</button><button class="${listFilter==="L"?"active":""}" onclick="listFilter='L';render()">左區</button><button class="${listFilter==="R"?"active":""}" onclick="listFilter='R';render()">右區</button></div><div class="list">${all.map(m=>memberRow(m)).join("")}</div>`;
}
function memberRow(m){return `<div class="member-row" onclick="memberModal('${m.id}')"><div class="mleft"><div class="mini-avatar">👤</div><div><b>${m.name}</b><br><small>${m.mobile} ・ ${m.rank}</small></div></div><div style="text-align:right"><b>${fmt(m.pv)} PV</b><br><small>${m.side==="L"?"左區":"右區"} / 安置 ${m.placementName}</small></div></div>`}

function placementTree(u){
 return `<div class="tree-wrap"><div class="binary-tree">${renderTreeNode(u,true,0)}</div></div>`;
}
function renderTreeNode(u,isRoot=false,depth=0){
 if(!u || depth>3) return "";
 let l=childSide(u.id,"L"), r=childSide(u.id,"R"), kids=[l,r].filter(Boolean);
 let cls=kids.length===2?"two":kids.length===1?"one":"";
 return `<div class="tree-node-wrap"><div class="tree-node ${isRoot?"root":""}" onclick="memberModal('${u.id}')"><div class="mini-avatar">👤</div><b>${u.name}</b><br><small>${u.mobile}<br>推薦人：${u.sponsorName||"—"}<br>${fmt(u.pv)} PV</small></div>
 ${kids.length?`<div class="tree-children ${cls}">${l?`<div class="child-slot">${renderTreeNode(l,false,depth+1)}</div>`:""}${r?`<div class="child-slot">${renderTreeNode(r,false,depth+1)}</div>`:""}</div>`:""}</div>`;
}

function orgSummary(u){
 let l=sidePV(u.id,"L"),r=sidePV(u.id,"R"),total=l+r,lp=total?Math.round(l/total*100):0,rp=100-lp;
 return `<div class="summary-grid" style="margin-top:12px"><div class="summary-card">左區總<br><b>${fmt(l)}</b><div class="progress"><span style="width:${lp}%"></span></div><small>${lp}%</small></div><div class="summary-card">右區總<br><b>${fmt(r)}</b><div class="progress"><span style="width:${rp}%"></span></div><small>${rp}%</small></div><div class="summary-card">左區人數<br><b>${sideMembers(u.id,"L").length}</b></div><div class="summary-card">右區人數<br><b>${sideMembers(u.id,"R").length}</b></div><div class="summary-card">團隊總 PV<br><b>${fmt(total)}</b></div><div class="summary-card">團隊總人數<br><b>${subtreeMembers(u.id).length}</b></div></div>
 <div class="distribution"><div class="section-title"><h3>推薦組織分布</h3></div>${distributionRows(u,"sponsor")}
 <div class="section-title"><h3>安置組織分布</h3></div>${distributionRows(u,"placement")}</div>`;
}
function distributionRows(u,type){
 let layers=getLayers(u.id,type);
 return layers.map((arr,i)=>`<div class="layer-row" id="${type}-${i}"><div class="layer-head" onclick="toggleLayer('${type}-${i}')"><span>第 ${i+1} 層</span><b>${arr.length} 人 ＋</b></div><div class="layer-body">${arr.map(m=>memberRow(m)).join("")}</div></div>`).join("");
}
function getLayers(rootId,type){
 let layers=[],current=[rootId],visited=new Set([rootId]);
 for(let depth=0;depth<8;depth++){
   let next=[];
   current.forEach(pid=>{
     db.users.filter(x=>x.role==="member" && (type==="placement"?x.placement:x.sponsor)===pid).forEach(x=>{
       if(!visited.has(x.id)){visited.add(x.id);next.push(x)}
     })
   });
   if(!next.length)break;
   layers.push(next);current=next.map(x=>x.id);
 }
 return layers;
}
function toggleLayer(id){document.getElementById(id)?.classList.toggle("open")}
function memberModal(id){
 let m=db.users.find(x=>x.id===id);
 modal(`<h2>${m.name}</h2><p class="muted">${m.mobile} ・ ${m.rank}</p>
 <div class="account-item"><span>推薦人</span><b>${m.sponsorName||"—"}<br><small>${m.sponsor||""}</small></b></div>
 <div class="account-item"><span>安置人</span><b>${m.placementName||"—"}<br><small>${m.placement||""}</small></b></div>
 <div class="account-item"><span>安置位置</span><b>${m.side==="L"?"左區":m.side==="R"?"右區":m.side}</b></div>
 <div class="account-item"><span>個人 PV</span><b>${fmt(m.pv)}</b></div>`);
}

function shop(u){
 let p=db.products[0],orders=db.orders.filter(x=>x.user===u.id);
 return `<div class="pagehead"><h2>商城</h2><span class="badge">1 項商品</span></div><div class="section"><div class="card product-card"><img src="${p.image}"><div class="product-body"><h2>${p.name}</h2><p class="muted">${p.description}</p><div class="price">NT$ ${fmt(p.price)}</div><span class="pvchip">PV ${fmt(p.pv)}</span><button class="btn primary" style="width:100%;margin-top:14px" onclick="newOrder()">立即訂購</button></div></div><div class="section-title"><h3>我的訂單</h3></div>${orders.map(o=>`<div class="row"><div><b>${o.id}</b><br><small>${o.date} ・ ${fmt(o.pv)} PV</small></div><div style="text-align:right"><b>NT$ ${fmt(o.total)}</b><br><span class="badge done">${o.status}</span></div></div>`).join("")}</div>`;
}
function newOrder(){modal(`<h2>建立訂單</h2><div class="field"><label>數量</label><input id="qty" type="number" min="1" value="1"></div><button class="btn primary" onclick="createOrder()">確認下單</button>`)}
function createOrder(){let u=me(),p=db.products[0],q=+$("#qty").value;if(!q||q<1)return alert("數量錯誤");db.orders.unshift({id:"O"+Date.now().toString().slice(-6),user:u.id,product:p.id,qty:q,total:p.price*q,pv:p.pv*q,status:"已完成",date:new Date().toISOString().slice(0,10)});u.pv+=p.pv*q;save();closeModal();render();alert("訂單已建立，PV 已寫入")}

function changeMonth(delta){
 let [y,m]=bonusMonth.split("-").map(Number);m+=delta;if(m<1){m=12;y--}if(m>12){m=1;y++}bonusMonth=`${y}-${String(m).padStart(2,"0")}`;render()
}
function bonus(u){
 let bs=bonusItems(u.id,bonusMonth),types=["推薦獎","層碰獎","區域獎","互助獎","分享獎","輔導獎","領導獎","購物獎","全球分紅獎"],icons=["👥","🔗","📊","🤝","🎁","📘","👑","🛒","🌐"];
 return `<div class="pagehead"><h2>獎金</h2><span class="badge">九大獎金</span></div><div class="monthbar"><button onclick="changeMonth(-1)">‹ 上月</button><div class="current">${bonusMonth}</div><button onclick="changeMonth(1)">下月 ›</button></div><div class="wallet"><small>本月獎金合計</small><div class="amount">NT$ ${fmt(bonusTotal(u.id,bonusMonth))}</div><button class="btn gold" style="width:100%;margin-top:12px" onclick="withdraw()">USDT 提領申請</button></div><div class="section"><div class="bonus-grid">${types.map((t,i)=>{let sum=bs.filter(b=>b.type===t).reduce((a,b)=>a+b.amount,0);return `<div class="bonus-card" onclick="bonusModal('${t}')"><div class="bicon">${icons[i]}</div><span>${t}</span><b>NT$ ${fmt(sum)}</b></div>`}).join("")}</div><div class="section-title"><h3>獎金流水</h3></div>${bs.length?bs.map(b=>`<div class="row"><div><b>${b.type}</b><br><small>${b.date}</small></div><b>+ ${fmt(b.amount)}</b></div>`).join(""):'<div class="card">本月尚無獎金資料</div>'}<div class="section-title"><h3>提領紀錄</h3></div>${db.withdrawals.filter(x=>x.user===u.id).map(w=>`<div class="row"><div><b>${w.amount} USDT</b><br><small>${w.network} ・ ${w.date}</small></div><span class="badge ${w.status==="已完成"?"done":"warn"}">${w.status}</span></div>`).join("")}</div>`;
}
function bonusModal(type){let items=bonusItems(me().id,bonusMonth).filter(x=>x.type===type);modal(`<h2>${type}</h2><p class="muted">${bonusMonth}</p>${items.length?items.map(x=>`<div class="row"><span>${x.date}</span><b>NT$ ${fmt(x.amount)}</b></div>`).join(""):'<p>本月無資料</p>'}`)}
function withdraw(){modal(`<h2>USDT 提領</h2><div class="field"><label>提領金額（USDT）</label><input id="wa" type="number" value="100"></div><div class="field"><label>USDT-TRC20 地址</label><input id="addr" value="${me().usdtAddress||""}"></div><p class="small">參考匯率：1 USDT = NT$ ${db.settings.usdtRate}<br>手續費：${db.settings.withdrawFee} USDT</p><button class="btn primary" onclick="submitWithdraw()">送出申請</button>`)}
function submitWithdraw(){let u=me(),a=+$("#wa").value,addr=$("#addr").value.trim(),twd=a*db.settings.usdtRate;if(!a||a<=0)return alert("請輸入金額");if(twd>u.wallet)return alert("可提領餘額不足");u.wallet-=twd;db.withdrawals.unshift({id:"W"+Date.now().toString().slice(-6),user:u.id,amount:a,fee:db.settings.withdrawFee,network:"TRC20",address:addr,status:"審核中",txid:"",date:new Date().toISOString().slice(0,10)});save();closeModal();render();alert("提領申請已送出")}

function account(u){
 return `<div class="pagehead"><h2>會員中心</h2><button class="btn ghost" onclick="logout()">登出</button></div><div class="account-card"><div class="account-header"><div class="avatar">👤</div><div><h2>${u.name}</h2><small>${u.mobile} ・ ${u.rank}</small></div></div>
<div class="account-item"><span>加入日期</span><b>${u.joinDate||"—"}</b></div>

<div class="account-item"><span>推薦人</span><b>${u.sponsorName||"—"}<br><small>${u.sponsor||""}</small></b></div>
 <div class="account-item"><span>安置人</span><b>${u.placementName||"—"}<br><small>${u.placement||""}</small></b></div>
 <div class="account-item"><span>安置位置</span><b>${u.side==="L"?"左區":u.side==="R"?"右區":u.side}</b></div></div>
 <div class="settings-list"><div class="setting-row" onclick="editProfile()"><span>個人身份資料</span><b>修改 ›</b></div><div class="setting-row" onclick="editAddresses()"><span>戶籍／通訊地址</span><b>修改 ›</b></div><div class="setting-row" onclick="editUSDT()"><span>USDT-TRC20 地址</span><b>修改 ›</b></div><div class="setting-row" onclick="changePassword()"><span>修改登入密碼</span><b>修改 ›</b></div></div>`;
}
function editProfile(){let u=me();modal(`<h2>個人身份資料</h2><div class="field"><label>姓名</label><input id="pname" value="${u.name}"></div><div class="field"><label>身份證字號</label><input id="pid" value="${u.nationalId||""}"></div><div class="field"><label>行動電話／會員編號</label><input id="pmobile" value="${u.mobile}"></div><button class="btn primary" onclick="saveProfile()">儲存</button>`)}
function saveProfile(){let u=me(),old=u.id,newMobile=$("#pmobile").value.trim();u.name=$("#pname").value.trim();u.nationalId=$("#pid").value.trim();u.mobile=newMobile;u.id=newMobile;db.users.forEach(x=>{if(x.sponsor===old){x.sponsor=newMobile;x.sponsorName=u.name}if(x.placement===old){x.placement=newMobile;x.placementName=u.name}});db.orders.forEach(x=>{if(x.user===old)x.user=newMobile});db.bonuses.forEach(x=>{if(x.user===old)x.user=newMobile});db.withdrawals.forEach(x=>{if(x.user===old)x.user=newMobile});session.id=newMobile;localStorage.setItem("finalV5Session",JSON.stringify(session));save();closeModal();render();alert("資料已更新")}
function editAddresses(){let u=me();modal(`<h2>地址資料</h2><div class="field"><label>戶籍地址</label><textarea id="haddr">${u.householdAddress||""}</textarea></div><div class="field"><label>通訊地址</label><textarea id="maddr">${u.mailingAddress||""}</textarea></div><button class="btn primary" onclick="saveAddresses()">儲存</button>`)}
function saveAddresses(){let u=me();u.householdAddress=$("#haddr").value.trim();u.mailingAddress=$("#maddr").value.trim();save();closeModal();alert("地址已更新")}
function editUSDT(){let u=me();modal(`<h2>USDT-TRC20 地址</h2><div class="field"><label>收款地址</label><input id="uaddr" value="${u.usdtAddress||""}"></div><button class="btn primary" onclick="saveUSDT()">儲存</button>`)}
function saveUSDT(){me().usdtAddress=$("#uaddr").value.trim();save();closeModal();alert("USDT 地址已更新")}
function changePassword(){modal(`<h2>修改登入密碼</h2><div class="field"><label>目前密碼</label><input id="oldpw" type="password"></div><div class="field"><label>新密碼</label><input id="newpw" type="password"></div><div class="field"><label>確認新密碼</label><input id="newpw2" type="password"></div><button class="btn primary" onclick="savePassword()">修改密碼</button>`)}
function savePassword(){let u=me();if($("#oldpw").value!==u.password)return alert("目前密碼不正確");if($("#newpw").value.length<6)return alert("新密碼至少 6 碼");if($("#newpw").value!==$("#newpw2").value)return alert("兩次新密碼不一致");u.password=$("#newpw").value;save();closeModal();alert("密碼已修改")}

function memberApp(u){let body=current==="home"?home(u):current==="org"?org(u):current==="shop"?shop(u):current==="bonus"?bonus(u):account(u);return `<div class="app">${body}${nav()}</div>`}
function modal(html){document.body.insertAdjacentHTML("beforeend",`<div class="modal" id="modal"><div class="modalbox">${html}<hr><button class="btn ghost" onclick="closeModal()">關閉</button></div></div>`)}
function closeModal(){document.getElementById("modal")?.remove()}
function render(){let app=$("#app");if(!session){app.innerHTML=loginView();return}app.innerHTML=memberApp(me())}
render();
