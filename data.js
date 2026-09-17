
const SEED = {
  users: [
    {
      id:"0912345678", name:"陳美妍", password:"123456", role:"member", rank:"鑽石會員", level:3,
      sponsor:"0923456789", sponsorName:"Champion", placement:"0923456789", placementName:"Champion", side:"右區",joinDate:"2026-09-01",
      pv:27160, wallet:68320, shopping:6200,
      nationalId:"A123456789", mobile:"0912345678",
      householdAddress:"桃園市八德區範例路100號",
      mailingAddress:"桃園市八德區範例路100號",
      usdtAddress:"TQ7xDemoTRC20Address001"
    },
    {
      id:"0911000002", name:"林俊宏", password:"123456", role:"member", rank:"黃金會員", level:2,
      sponsor:"0912345678", sponsorName:"陳美妍", placement:"0912345678", placementName:"陳美妍", side:"L",
      pv:54320, wallet:42800, shopping:2200, nationalId:"B123456780", mobile:"0911000002",
      householdAddress:"台北市信義區示範路2號", mailingAddress:"台北市信義區示範路2號", usdtAddress:"TDEMO0002"
    },
    {
      id:"0911000003", name:"王怡安", password:"123456", role:"member", rank:"黃金會員", level:2,
      sponsor:"0912345678", sponsorName:"陳美妍", placement:"0912345678", placementName:"陳美妍", side:"R",
      pv:27160, wallet:39120, shopping:1800, nationalId:"C123456781", mobile:"0911000003",
      householdAddress:"新北市板橋區示範路3號", mailingAddress:"新北市板橋區示範路3號", usdtAddress:"TDEMO0003"
    },

    {id:"0911000004",name:"張雅婷",password:"123456",role:"member",rank:"白銀會員",level:1,sponsor:"0911000002",sponsorName:"林俊宏",placement:"0911000002",placementName:"林俊宏",side:"L",pv:27160,wallet:21800,shopping:1200,nationalId:"D123456782",mobile:"0911000004",householdAddress:"桃園市中壢區示範路4號",mailingAddress:"桃園市中壢區示範路4號",usdtAddress:"TDEMO0004"},
    {id:"0911000005",name:"李家豪",password:"123456",role:"member",rank:"白銀會員",level:1,sponsor:"0911000002",sponsorName:"林俊宏",placement:"0911000002",placementName:"林俊宏",side:"R",pv:54320,wallet:25600,shopping:800,nationalId:"E123456783",mobile:"0911000005",householdAddress:"桃園市桃園區示範路5號",mailingAddress:"桃園市桃園區示範路5號",usdtAddress:"TDEMO0005"},
    {id:"0911000006",name:"周佩珊",password:"123456",role:"member",rank:"白銀會員",level:1,sponsor:"0911000003",sponsorName:"王怡安",placement:"0911000003",placementName:"王怡安",side:"L",pv:27160,wallet:18300,shopping:600,nationalId:"F123456784",mobile:"0911000006",householdAddress:"新竹市東區示範路6號",mailingAddress:"新竹市東區示範路6號",usdtAddress:"TDEMO0006"},
    {id:"0911000007",name:"黃志豪",password:"123456",role:"member",rank:"白銀會員",level:1,sponsor:"0911000003",sponsorName:"王怡安",placement:"0911000003",placementName:"王怡安",side:"R",pv:27160,wallet:17200,shopping:500,nationalId:"G123456785",mobile:"0911000007",householdAddress:"台中市西屯區示範路7號",mailingAddress:"台中市西屯區示範路7號",usdtAddress:"TDEMO0007"},

    {id:"0911000008",name:"蔡佳穎",password:"123456",role:"member",rank:"一般會員",level:0,sponsor:"0911000004",sponsorName:"張雅婷",placement:"0911000004",placementName:"張雅婷",side:"L",pv:27160,wallet:6800,shopping:300,nationalId:"H123456786",mobile:"0911000008",householdAddress:"台中市北區示範路8號",mailingAddress:"台中市北區示範路8號",usdtAddress:"TDEMO0008"},
    {id:"0911000009",name:"劉心如",password:"123456",role:"member",rank:"一般會員",level:0,sponsor:"0911000004",sponsorName:"張雅婷",placement:"0911000004",placementName:"張雅婷",side:"R",pv:27160,wallet:7200,shopping:450,nationalId:"I123456787",mobile:"0911000009",householdAddress:"彰化縣彰化市示範路9號",mailingAddress:"彰化縣彰化市示範路9號",usdtAddress:"TDEMO0009"},
    {id:"0911000010",name:"吳柏霖",password:"123456",role:"member",rank:"一般會員",level:0,sponsor:"0911000005",sponsorName:"李家豪",placement:"0911000005",placementName:"李家豪",side:"L",pv:27160,wallet:6200,shopping:300,nationalId:"J123456788",mobile:"0911000010",householdAddress:"台南市東區示範路10號",mailingAddress:"台南市東區示範路10號",usdtAddress:"TDEMO0010"},
    {id:"0911000011",name:"徐子晴",password:"123456",role:"member",rank:"一般會員",level:0,sponsor:"0911000005",sponsorName:"李家豪",placement:"0911000005",placementName:"李家豪",side:"R",pv:27160,wallet:5900,shopping:250,nationalId:"K123456789",mobile:"0911000011",householdAddress:"高雄市左營區示範路11號",mailingAddress:"高雄市左營區示範路11號",usdtAddress:"TDEMO0011"},
    {id:"0911000012",name:"陳大華",password:"123456",role:"member",rank:"一般會員",level:0,sponsor:"0911000006",sponsorName:"周佩珊",placement:"0911000006",placementName:"周佩珊",side:"L",pv:27160,wallet:5100,shopping:200,nationalId:"L123456780",mobile:"0911000012",householdAddress:"屏東縣屏東市示範路12號",mailingAddress:"屏東縣屏東市示範路12號",usdtAddress:"TDEMO0012"},
    {id:"0911000013",name:"林雅婷",password:"123456",role:"member",rank:"一般會員",level:0,sponsor:"0911000006",sponsorName:"周佩珊",placement:"0911000006",placementName:"周佩珊",side:"R",pv:27160,wallet:4800,shopping:180,nationalId:"M123456781",mobile:"0911000013",householdAddress:"宜蘭縣宜蘭市示範路13號",mailingAddress:"宜蘭縣宜蘭市示範路13號",usdtAddress:"TDEMO0013"},
    {id:"0911000014",name:"張家銘",password:"123456",role:"member",rank:"一般會員",level:0,sponsor:"0911000007",sponsorName:"黃志豪",placement:"0911000007",placementName:"黃志豪",side:"L",pv:27160,wallet:4600,shopping:160,nationalId:"N123456782",mobile:"0911000014",householdAddress:"花蓮縣花蓮市示範路14號",mailingAddress:"花蓮縣花蓮市示範路14號",usdtAddress:"TDEMO0014"},
    {id:"0911000015",name:"王怡雯",password:"123456",role:"member",rank:"一般會員",level:0,sponsor:"0911000007",sponsorName:"黃志豪",placement:"0911000007",placementName:"黃志豪",side:"R",pv:27160,wallet:4400,shopping:150,nationalId:"O123456783",mobile:"0911000015",householdAddress:"台東縣台東市示範路15號",mailingAddress:"台東縣台東市示範路15號",usdtAddress:"TDEMO0015"},

    {id:"0911000016",name:"劉宇軒",password:"123456",role:"member",rank:"一般會員",level:0,sponsor:"0911000008",sponsorName:"蔡佳穎",placement:"0911000008",placementName:"蔡佳穎",side:"L",pv:27160,wallet:3900,shopping:100,nationalId:"P123456784",mobile:"0911000016",householdAddress:"基隆市仁愛區示範路16號",mailingAddress:"基隆市仁愛區示範路16號",usdtAddress:"TDEMO0016"},
    {id:"0911000017",name:"黃思妤",password:"123456",role:"member",rank:"一般會員",level:0,sponsor:"0911000008",sponsorName:"蔡佳穎",placement:"0911000008",placementName:"蔡佳穎",side:"R",pv:27160,wallet:3600,shopping:100,nationalId:"Q123456785",mobile:"0911000017",householdAddress:"新北市新莊區示範路17號",mailingAddress:"新北市新莊區示範路17號",usdtAddress:"TDEMO0017"},
    {id:"0911000018",name:"許書豪",password:"123456",role:"member",rank:"一般會員",level:0,sponsor:"0911000009",sponsorName:"劉心如",placement:"0911000009",placementName:"劉心如",side:"L",pv:27160,wallet:3400,shopping:80,nationalId:"R123456786",mobile:"0911000018",householdAddress:"新北市三重區示範路18號",mailingAddress:"新北市三重區示範路18號",usdtAddress:"TDEMO0018"},
    {id:"0911000019",name:"鄭雅筑",password:"123456",role:"member",rank:"一般會員",level:0,sponsor:"0911000009",sponsorName:"劉心如",placement:"0911000009",placementName:"劉心如",side:"R",pv:27160,wallet:3200,shopping:80,nationalId:"S123456787",mobile:"0911000019",householdAddress:"苗栗縣苗栗市示範路19號",mailingAddress:"苗栗縣苗栗市示範路19號",usdtAddress:"TDEMO0019"},
    {id:"0911000020",name:"郭彥廷",password:"123456",role:"member",rank:"一般會員",level:0,sponsor:"0911000010",sponsorName:"吳柏霖",placement:"0911000010",placementName:"吳柏霖",side:"L",pv:27160,wallet:3000,shopping:60,nationalId:"T123456788",mobile:"0911000020",householdAddress:"嘉義市東區示範路20號",mailingAddress:"嘉義市東區示範路20號",usdtAddress:"TDEMO0020"},
    {id:"0911000021",name:"簡嘉慧",password:"123456",role:"member",rank:"一般會員",level:0,sponsor:"0911000010",sponsorName:"吳柏霖",placement:"0911000010",placementName:"吳柏霖",side:"R",pv:27160,wallet:2800,shopping:50,nationalId:"U123456789",mobile:"0911000021",householdAddress:"雲林縣斗六市示範路21號",mailingAddress:"雲林縣斗六市示範路21號",usdtAddress:"TDEMO0021"},
    {id:"0911000022",name:"潘家豪",password:"123456",role:"member",rank:"一般會員",level:0,sponsor:"0911000011",sponsorName:"徐子晴",placement:"0911000011",placementName:"徐子晴",side:"L",pv:27160,wallet:2600,shopping:50,nationalId:"V123456780",mobile:"0911000022",householdAddress:"南投縣南投市示範路22號",mailingAddress:"南投縣南投市示範路22號",usdtAddress:"TDEMO0022"},
    {id:"0911000023",name:"何欣怡",password:"123456",role:"member",rank:"一般會員",level:0,sponsor:"0911000011",sponsorName:"徐子晴",placement:"0911000011",placementName:"徐子晴",side:"R",pv:27160,wallet:2400,shopping:40,nationalId:"W123456781",mobile:"0911000023",householdAddress:"澎湖縣馬公市示範路23號",mailingAddress:"澎湖縣馬公市示範路23號",usdtAddress:"TDEMO0023"},
    {id:"0911000024",name:"謝宗翰",password:"123456",role:"member",rank:"一般會員",level:0,sponsor:"0911000012",sponsorName:"陳大華",placement:"0911000012",placementName:"陳大華",side:"L",pv:27160,wallet:2200,shopping:40,nationalId:"X123456782",mobile:"0911000024",householdAddress:"金門縣金城鎮示範路24號",mailingAddress:"金門縣金城鎮示範路24號",usdtAddress:"TDEMO0024"},

    {id:"ADMIN",name:"系統管理員",password:"admin123",role:"admin",rank:"Admin",level:9,sponsor:null,sponsorName:null,placement:null,placementName:null,side:null,pv:0,wallet:0,shopping:0,nationalId:"",mobile:"ADMIN",householdAddress:"",mailingAddress:"",usdtAddress:""}
  ],

  products:[
    {id:"P01",name:"橡膠樹種子油",description:"橡膠樹種子油專案商品",price:38800,pv:27160,image:"product-rubber-seed-oil.png",status:"上架"}
  ],

  orders:[
    {id:"O260901",user:"0912345678",product:"P01",qty:1,total:38800,pv:27160,status:"已完成",date:"2026-09-01"}
  ],

  bonuses:[
    {id:"B001",user:"0912345678",month:"2026-09",type:"推薦獎",amount:8800,date:"2026-09-15"},
    {id:"B002",user:"0912345678",month:"2026-09",type:"層碰獎",amount:12600,date:"2026-09-15"},
    {id:"B003",user:"0912345678",month:"2026-09",type:"區域獎",amount:9600,date:"2026-09-14"},
    {id:"B004",user:"0912345678",month:"2026-09",type:"互助獎",amount:3200,date:"2026-09-14"},
    {id:"B005",user:"0912345678",month:"2026-09",type:"分享獎",amount:6800,date:"2026-09-13"},
    {id:"B006",user:"0912345678",month:"2026-09",type:"輔導獎",amount:5600,date:"2026-09-13"},
    {id:"B007",user:"0912345678",month:"2026-09",type:"領導獎",amount:4200,date:"2026-09-12"},
    {id:"B008",user:"0912345678",month:"2026-09",type:"購物獎",amount:2800,date:"2026-09-12"},
    {id:"B009",user:"0912345678",month:"2026-09",type:"全球分紅獎",amount:16800,date:"2026-09-01"},

    {id:"B101",user:"0912345678",month:"2026-08",type:"推薦獎",amount:7200,date:"2026-08-15"},
    {id:"B102",user:"0912345678",month:"2026-08",type:"層碰獎",amount:10800,date:"2026-08-15"},
    {id:"B103",user:"0912345678",month:"2026-08",type:"區域獎",amount:7600,date:"2026-08-14"},
    {id:"B104",user:"0912345678",month:"2026-08",type:"互助獎",amount:2800,date:"2026-08-14"},
    {id:"B105",user:"0912345678",month:"2026-08",type:"分享獎",amount:5200,date:"2026-08-13"},
    {id:"B106",user:"0912345678",month:"2026-08",type:"輔導獎",amount:4500,date:"2026-08-13"},
    {id:"B107",user:"0912345678",month:"2026-08",type:"領導獎",amount:3500,date:"2026-08-12"},
    {id:"B108",user:"0912345678",month:"2026-08",type:"購物獎",amount:2400,date:"2026-08-12"},
    {id:"B109",user:"0912345678",month:"2026-08",type:"全球分紅獎",amount:13800,date:"2026-08-01"},

    {id:"B201",user:"0912345678",month:"2026-07",type:"推薦獎",amount:6000,date:"2026-07-15"},
    {id:"B202",user:"0912345678",month:"2026-07",type:"層碰獎",amount:8900,date:"2026-07-15"},
    {id:"B203",user:"0912345678",month:"2026-07",type:"區域獎",amount:6500,date:"2026-07-14"},
    {id:"B204",user:"0912345678",month:"2026-07",type:"互助獎",amount:2300,date:"2026-07-14"},
    {id:"B205",user:"0912345678",month:"2026-07",type:"分享獎",amount:4400,date:"2026-07-13"},
    {id:"B206",user:"0912345678",month:"2026-07",type:"輔導獎",amount:3900,date:"2026-07-13"},
    {id:"B207",user:"0912345678",month:"2026-07",type:"領導獎",amount:3100,date:"2026-07-12"},
    {id:"B208",user:"0912345678",month:"2026-07",type:"購物獎",amount:1900,date:"2026-07-12"},
    {id:"B209",user:"0912345678",month:"2026-07",type:"全球分紅獎",amount:11000,date:"2026-07-01"}
  ],

  withdrawals:[
    {id:"W001",user:"0912345678",amount:100,fee:1,network:"TRC20",address:"TQ7xDemoTRC20Address001",status:"已完成",txid:"demo_tx_001",date:"2026-09-08"},
    {id:"W002",user:"0912345678",amount:250,fee:1,network:"TRC20",address:"TQ7xDemoTRC20Address001",status:"審核中",txid:"",date:"2026-09-16"}
  ],

  announcements:[
    {id:"N01",title:"雙軌獎金方案展示",type:"系統公告",date:"2026-09-17",important:true},
    {id:"N02",title:"橡膠樹種子油專案商品上架",type:"商品通知",date:"2026-09-16",important:false},
    {id:"N03",title:"9月份會員資料確認通知",type:"會員通知",date:"2026-09-15",important:false}
  ],

  settings:{usdtRate:31.8,withdrawFee:1}
};
