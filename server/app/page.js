(()=>{var e={};e.id=931,e.ids=[931],e.modules={47849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},39491:e=>{"use strict";e.exports=require("assert")},82361:e=>{"use strict";e.exports=require("events")},57147:e=>{"use strict";e.exports=require("fs")},13685:e=>{"use strict";e.exports=require("http")},95687:e=>{"use strict";e.exports=require("https")},22037:e=>{"use strict";e.exports=require("os")},71017:e=>{"use strict";e.exports=require("path")},12781:e=>{"use strict";e.exports=require("stream")},76224:e=>{"use strict";e.exports=require("tty")},57310:e=>{"use strict";e.exports=require("url")},73837:e=>{"use strict";e.exports=require("util")},59796:e=>{"use strict";e.exports=require("zlib")},20025:(e,s,t)=>{"use strict";t.r(s),t.d(s,{GlobalError:()=>n.a,__next_app__:()=>m,originalPathname:()=>u,pages:()=>d,routeModule:()=>p,tree:()=>c});var r=t(50482),a=t(69108),i=t(62563),n=t.n(i),o=t(68300),l={};for(let e in o)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>o[e]);t.d(s,l);let c=["",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(t.bind(t,37465)),"C:\\Users\\DELL\\Downloads\\NaijaPrime-main (1)\\NaijaPrime-main\\naijaprime-master\\src\\app\\page.js"],metadata:{icon:[async e=>(await Promise.resolve().then(t.bind(t,73881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(t.bind(t,51965)),"C:\\Users\\DELL\\Downloads\\NaijaPrime-main (1)\\NaijaPrime-main\\naijaprime-master\\src\\app\\layout.js"],"not-found":[()=>Promise.resolve().then(t.t.bind(t,69361,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(t.bind(t,73881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],d=["C:\\Users\\DELL\\Downloads\\NaijaPrime-main (1)\\NaijaPrime-main\\naijaprime-master\\src\\app\\page.js"],u="/page",m={require:t,loadChunk:()=>Promise.resolve()},p=new r.AppPageRouteModule({definition:{kind:a.x.APP_PAGE,page:"/page",pathname:"/",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},24730:(e,s,t)=>{Promise.resolve().then(t.t.bind(t,2583,23)),Promise.resolve().then(t.t.bind(t,26840,23)),Promise.resolve().then(t.t.bind(t,38771,23)),Promise.resolve().then(t.t.bind(t,13225,23)),Promise.resolve().then(t.t.bind(t,9295,23)),Promise.resolve().then(t.t.bind(t,43982,23))},15945:(e,s,t)=>{Promise.resolve().then(t.bind(t,5035))},97873:(e,s,t)=>{Promise.resolve().then(t.bind(t,372))},5035:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>j});var r=t(95344);t(23824);var a=t(36013),i=t(9180),n=t(97836),o=t(28034),l=t(99119),c=t(40692);t(27201);let d=(0,n.UY)({user:l.ZP}),u=(0,c.OJ)({key:"root",version:1,storage:{getItem:e=>Promise.resolve(null),setItem:(e,s)=>Promise.resolve(s),removeItem:e=>Promise.resolve()}},d),m=(0,o.xC)({reducer:u,middleware:e=>e({serializableCheck:{ignoreActions:[c._P,c.I2,c.E7,c.ex,c.e,c.Nz]}})}),p=(0,c.p5)(m);var h=t(90978),x=t.n(h);function j({children:e}){return(0,r.jsxs)("html",{lang:"en",children:[r.jsx(x(),{children:r.jsx("title",{children:"Naija Prime"})}),r.jsx("body",{className:"",children:r.jsx(a.zt,{store:m,children:r.jsx(i.r,{loading:null,persistor:p,children:e})})})]})}},372:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>D});var r=t(95344),a=t(59063),i=t(89410),n=t(3729),o=t(49921),l=t(29984);t(49383);var c=t(53608);let d=({type:e,setGenre:s})=>{let[t,d]=(0,n.useState)({}),[u,m]=(0,n.useState)(!0),p=(0,n.useRef)(null);return(0,n.useEffect)(()=>{(async()=>{try{let s=await c.Z.get(`${a.JW}movies/random?type=${e}`,{headers:{token:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZGYwODA0ZjZkNDFjMWQ1MGY2ODAwMiIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE3MDkyNDg4NzEsImV4cCI6MTcxNzg4ODg3MX0.cvaDPR7zRmchPOneaPEn_mcIDcOnvOwuxjptBw1DGPg"}});d(s.data[0])}catch(e){console.log(e)}})()},[e]),t&&(0,r.jsxs)("div",{className:"featured",children:[e&&(0,r.jsxs)("div",{className:"category",children:[r.jsx("span",{children:"movies"===e?"Movies":"Series"}),(0,r.jsxs)("select",{name:"genre",id:"genre",onChange:e=>s(""),children:[r.jsx("option",{children:"Genre"}),r.jsx("option",{value:"adventure",children:"Adventure"}),r.jsx("option",{value:"comedy",children:"Comedy"}),r.jsx("option",{value:"crime",children:"Crime"}),r.jsx("option",{value:"fantasy",children:"Fantasy"}),r.jsx("option",{value:"historical",children:"Historical"}),r.jsx("option",{value:"horror",children:"Horror"}),r.jsx("option",{value:"romance",children:"Romance"}),r.jsx("option",{value:"sci-fi",children:"Sci-fi"}),r.jsx("option",{value:"thriller",children:"Thriller"}),r.jsx("option",{value:"western",children:"Western"}),r.jsx("option",{value:"animation",children:"Animation"}),r.jsx("option",{value:"drama",children:"Drama"}),r.jsx("option",{value:"documentary",children:"Documentary"})]})]}),r.jsx("video",{src:"http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",ref:p,onTimeUpdate:()=>{p.current.currentTime>=15&&p.current.pause()},autoPlay:!0}),(0,r.jsxs)("div",{className:"info",children:[r.jsx(i.default,{src:t.imgTitle,alt:"",width:500,height:500}),r.jsx("span",{className:"desc",children:t.desc}),(0,r.jsxs)("div",{className:"buttons",children:[(0,r.jsxs)("button",{className:"play",children:[r.jsx(o.gmG,{}),r.jsx("span",{children:"Play"})]}),(0,r.jsxs)("button",{className:"more",children:[r.jsx(l.Qf3,{}),r.jsx("span",{children:"Info"})]})]})]})]})};var u=t(56506);t(32099);let m=()=>{let[e,s]=(0,n.useState)(!1);return r.jsx("div",{className:e?"navbar scrolled":"navbar",children:(0,r.jsxs)("div",{className:"container",children:[(0,r.jsxs)("div",{className:"left",children:[r.jsx(i.default,{src:"/assets/logo/logo.png",alt:"",width:100,height:100,className:" object-contain"}),r.jsx(u.default,{href:"/",className:"link",children:r.jsx("span",{children:"Homepage"})}),r.jsx(u.default,{href:"/series",className:"link",children:r.jsx("span",{className:"navbarmainLinks",children:"Series"})}),r.jsx(u.default,{href:"/movies",className:"link",children:r.jsx("span",{className:"navbarmainLinks",children:"Movies"})}),r.jsx("span",{children:"New and Popular"}),r.jsx("span",{children:"My List"})]}),(0,r.jsxs)("div",{className:"right",children:[r.jsx(l.y5k,{className:"icon"}),r.jsx("span",{children:"KID"}),r.jsx(l.VGs,{className:"icon"}),r.jsx(i.default,{src:"/assets/logo/logo.png",alt:"",width:100,height:100}),(0,r.jsxs)("div",{className:"profile",children:[r.jsx(l.yQg,{className:"icon"}),(0,r.jsxs)("div",{className:"options",children:[r.jsx("span",{children:"Settings"}),r.jsx("span",{children:"Logout"})]})]})]})]})})};t(38005),t(31700),t(52257);var p={cm:!0,mm:!0,in:!0,px:!0,pt:!0,pc:!0,em:!0,ex:!0,ch:!0,rem:!0,vw:!0,vh:!0,vmin:!0,vmax:!0,"%":!0};function h(e){if("number"==typeof e)return{value:e,unit:"px"};var s,t=(e.match(/^[0-9.]*/)||"").toString();s=t.includes(".")?parseFloat(t):parseInt(t,10);var r=(e.match(/[^0-9]*$/)||"").toString();return p[r]?{value:s,unit:r}:(console.warn("React Spinners: ".concat(e," is not a valid css value. Defaulting to ").concat(s,"px.")),{value:s,unit:"px"})}function x(e){var s=h(e);return"".concat(s.value).concat(s.unit)}var j=function(e,s,t){return"react-spinners-".concat(e,"-").concat(t)},v=function(){return(v=Object.assign||function(e){for(var s,t=1,r=arguments.length;t<r;t++)for(var a in s=arguments[t])Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a]);return e}).apply(this,arguments)},g=function(e,s){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>s.indexOf(r)&&(t[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)0>s.indexOf(r[a])&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(t[r[a]]=e[r[a]]);return t},f=j("DotLoader","100% {transform: rotate(360deg)}","rotate"),y=j("DotLoader","0%, 100% {transform: scale(0)} 50% {transform: scale(1.0)}","bounce");let N=function(e){var s=e.loading,t=e.color,r=void 0===t?"#000000":t,a=e.speedMultiplier,i=void 0===a?1:a,o=e.cssOverride,l=e.size,c=void 0===l?60:l,d=g(e,["loading","color","speedMultiplier","cssOverride","size"]),u=v({display:"inherit",position:"relative",width:x(c),height:x(c),animationFillMode:"forwards",animation:"".concat(f," ").concat(2/i,"s 0s infinite linear")},void 0===o?{}:o),m=function(e){var s=h(c),t=s.value,a=s.unit;return{position:"absolute",top:e%2?"0":"auto",bottom:e%2?"auto":"0",height:"".concat(t/2).concat(a),width:"".concat(t/2).concat(a),backgroundColor:r,borderRadius:"100%",animationFillMode:"forwards",animation:"".concat(y," ").concat(2/i,"s ").concat(2===e?"1s":"0s"," infinite linear")}};return void 0===s||s?n.createElement("span",v({style:u},d),n.createElement("span",{style:m(1)}),n.createElement("span",{style:m(2)})):null},P=({index:e,item:s})=>{let[t,d]=(0,n.useState)(!1),[m,p]=(0,n.useState)({});return(0,n.useEffect)(()=>{(async()=>{try{let e=await c.Z.get(`${a.JW}movies/find/${s}`,{headers:{token:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZGYwODA0ZjZkNDFjMWQ1MGY2ODAwMiIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE3MDkyNDg4NzEsImV4cCI6MTcxNzg4ODg3MX0.cvaDPR7zRmchPOneaPEn_mcIDcOnvOwuxjptBw1DGPg"}});p(e.data)}catch(e){console.log(e)}})()},[s]),m&&r.jsx(u.default,{href:{pathname:"/watch",query:m},children:(0,r.jsxs)("div",{className:"listItem",style:{left:t&&225*e-50+2.5*e},onMouseEnter:()=>d(!0),onMouseLeave:()=>d(!1),children:[r.jsx(i.default,{src:m?.img,alt:"",width:100,height:100}),t&&(0,r.jsxs)(r.Fragment,{children:[r.jsx("video",{src:m.trailer,autoPlay:!0,loop:!0}),(0,r.jsxs)("div",{className:"itemInfo",children:[(0,r.jsxs)("div",{className:"icons",children:[r.jsx(o.gmG,{className:"icon"}),r.jsx(l.D0w,{className:"icon"}),r.jsx(l.ZZh,{className:"icon"}),r.jsx(l.Wj$,{className:"icon"})]}),(0,r.jsxs)("div",{className:"itemInfoTop",children:[r.jsx("span",{children:m.duration}),(0,r.jsxs)("span",{className:"limit",children:["+",m.limit]}),r.jsx("span",{children:m.year})]}),r.jsx("div",{className:"desc",children:m.desc}),r.jsx("div",{className:"genre",children:m.genre})]})]})]})})||r.jsx(N,{color:"#36d7b7"})},w=({list:e})=>{let[s,t]=(0,n.useState)(!1),[a,i]=(0,n.useState)(0),[o,c]=(0,n.useState)(window.innerWidth/230),d=(0,n.useRef)(),u=e=>{t(!0);let s=d.current.getBoundingClientRect().x-50;"left"===e&&a>0&&(i(a-1),d.current.style.transform=`translateX(${230+s}px)`),"right"===e&&a<10-o&&(i(a+1),d.current.style.transform=`translateX(${-230+s}px)`)};return(0,r.jsxs)("div",{className:"list",children:[r.jsx("span",{className:"listTitle",children:e.title}),(0,r.jsxs)("div",{className:"wrapper",children:[r.jsx(l.u1R,{className:"sliderArrow left",onClick:()=>u("left"),style:{display:!s&&"none"}}),r.jsx("div",{className:"container",ref:d,children:e.content.map((e,s)=>r.jsx(P,{index:s,item:e},s))}),r.jsx(l.hjJ,{className:"sliderArrow right",onClick:()=>u("right")})]})]})};var b=t(8428),I=t(36013);function D({type:e}){let[s,t]=(0,n.useState)([]),[i,o]=(0,n.useState)([]),[l,u]=(0,n.useState)(null),p=(0,b.useRouter)(),h=(0,I.v9)(e=>e.user.info);return console.log(h),(0,n.useEffect)(()=>{(async()=>{try{let s=await c.Z.get(`${a.JW}lists${e?"?type="+e:""}${l?"&genre="+l:""}`,{headers:{token:" Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZGYwODA0ZjZkNDFjMWQ1MGY2ODAwMiIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE3MDkyNDg4NzEsImV4cCI6MTcxNzg4ODg3MX0.cvaDPR7zRmchPOneaPEn_mcIDcOnvOwuxjptBw1DGPg"}}),r=await a.WG.get("movies");o(r.data),t(s.data)}catch(e){console.log(e)}})()},[e,l,p,h]),console.log(i),(0,r.jsxs)("div",{className:"home",children:[r.jsx(m,{}),r.jsx(d,{type:e,setGenre:u}),s.map((e,s)=>r.jsx(w,{list:e},s))]})}t(39902)},99119:(e,s,t)=>{"use strict";t.d(s,{Uw:()=>n,ZP:()=>l,j3:()=>a,qN:()=>i});let r=(0,t(28034).oM)({name:"user",initialState:{info:null,pending:!1,error:!1},reducers:{updateStart:e=>{e.pending=!0},updateSuccess:(e,s)=>{e.info=s.payload,e.pending=!1},updateError:e=>{e.error=!0,e.pending=!1},logoutUser:e=>{e.info=null}}}),{updateStart:a,updateSuccess:i,updateError:n,logoutUser:o}=r.actions,l=r.reducer},59063:(e,s,t)=>{"use strict";t.d(s,{JW:()=>a,WG:()=>n,g8:()=>i});var r=t(53608);let a="http://localhost:5000/api/",i=r.Z.create({baseURL:a}),n=r.Z.create({baseURL:a,headers:{token:"Bearer "}})},51965:(e,s,t)=>{"use strict";t.r(s),t.d(s,{$$typeof:()=>i,__esModule:()=>a,default:()=>n});let r=(0,t(86843).createProxy)(String.raw`C:\Users\DELL\Downloads\NaijaPrime-main (1)\NaijaPrime-main\naijaprime-master\src\app\layout.js`),{__esModule:a,$$typeof:i}=r,n=r.default},37465:(e,s,t)=>{"use strict";t.r(s),t.d(s,{$$typeof:()=>i,__esModule:()=>a,default:()=>n});let r=(0,t(86843).createProxy)(String.raw`C:\Users\DELL\Downloads\NaijaPrime-main (1)\NaijaPrime-main\naijaprime-master\src\app\page.js`),{__esModule:a,$$typeof:i}=r,n=r.default},73881:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>a});var r=t(70337);let a=e=>[{type:"image/x-icon",sizes:"16x16",url:(0,r.fillMetadataSegment)(".",e.params,"favicon.ico")+""}]},23824:()=>{},38005:()=>{},49383:()=>{},39902:()=>{},52257:()=>{},31700:()=>{},32099:()=>{}};var s=require("../webpack-runtime.js");s.C(e);var t=e=>s(s.s=e),r=s.X(0,[638,961,404,608,410,921,984,506],()=>t(20025));module.exports=r})();