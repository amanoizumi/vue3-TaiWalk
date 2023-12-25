import{c as w,a as $,o as h,b as A,d as y,e as V,t as D,n as v,f as S,T as E,g as P,L as I,u as M,h as m,r as L,i as g,w as T,F as b,j as C,k as O,l as k,O as x}from"./vendor.63d2ad07.js";const Z=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))a(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function r(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerpolicy&&(s.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?s.credentials="include":n.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(n){if(n.ep)return;n.ep=!0;const s=r(n);fetch(n.href,s)}};Z();const B="modulepreload",_={},R="/vue3-TaiWalk/",d=function(e,r){return!r||r.length===0?e():Promise.all(r.map(a=>{if(a=`${R}${a}`,a in _)return;_[a]=!0;const n=a.endsWith(".css"),s=n?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${a}"]${s}`))return;const o=document.createElement("link");if(o.rel=n?"stylesheet":B,n||(o.as="script",o.crossOrigin=""),o.href=a,document.head.appendChild(o),n)return new Promise((u,i)=>{o.addEventListener("load",u),o.addEventListener("error",i)})})).then(()=>e())},N=[{path:"/",name:"",component:()=>d(()=>import("./index.d3663164.js"),["assets/index.d3663164.js","assets/index.6a31f7f7.css","assets/search.48e4a0cf.js","assets/search.bbbf0f6d.css","assets/vendor.63d2ad07.js","assets/NewTitle.576c26c5.js"])},{path:"/scenicSpotSearch",name:"scenicSpotSearch",component:()=>d(()=>import("./scenicSpotSearch.4db27b08.js"),["assets/scenicSpotSearch.4db27b08.js","assets/NewTitle.576c26c5.js","assets/vendor.63d2ad07.js","assets/search.48e4a0cf.js","assets/search.bbbf0f6d.css","assets/chunk.0574ee0f.js","assets/cityData.62873dd8.js"])},{path:"/activitySearch",name:"activitySearch",component:()=>d(()=>import("./activitySearch.2874d46e.js"),["assets/activitySearch.2874d46e.js","assets/activitySearch.430b72b4.css","assets/NewTitle.576c26c5.js","assets/vendor.63d2ad07.js","assets/search.48e4a0cf.js","assets/search.bbbf0f6d.css","assets/chunk.0574ee0f.js","assets/cityData.62873dd8.js"])},{path:"/restaurantSearch",name:"restaurantSearch",component:()=>d(()=>import("./restaurantSearch.5b48bddd.js"),["assets/restaurantSearch.5b48bddd.js","assets/NewTitle.576c26c5.js","assets/vendor.63d2ad07.js","assets/search.48e4a0cf.js","assets/search.bbbf0f6d.css","assets/chunk.0574ee0f.js","assets/cityData.62873dd8.js"])},{path:"/detailPage/:id",name:"detailPage/:id",component:()=>d(()=>import("./detailPage.59e0b22b.js"),["assets/detailPage.59e0b22b.js","assets/NewTitle.576c26c5.js","assets/vendor.63d2ad07.js","assets/cityData.62873dd8.js"])},{path:"/:pathMatch(.*)*",redirect:"/"}],U=w({history:$(),scrollBehavior(){return{top:0}},routes:N});var f=(t,e)=>{const r=t.__vccOpts||t;for(const[a,n]of e)r[a]=n;return r};const j={props:{showDialog:{type:Boolean,default:!1},titleContent:{type:String,default:"API \u670D\u52D9\u932F\u8AA4\uFF0C\u8ACB\u6D3D\u8A62\u8655\u7406\u6216\u660E\u5929\u518D\u5617\u8A66\u9023\u7DDA\uFF01"},dialogStyle:{type:String,default:"danger"},toEl:{type:String,default:"body"}},setup(t,{emit:e}){return{styleClassObj:{default:"bg-white",success:"",warning:"",danger:"bg-red-100 text-red-900 border-b-2 border-b-red-300"}}}},z={key:0,class:"fixed inset-0 z-90 flex items-start bg-gray-500/25"};function q(t,e,r,a,n,s){return h(),A(E,{to:r.toEl},[r.showDialog?(h(),y("div",z,[V("div",{class:v(["w-full p-4",a.styleClassObj[r.dialogStyle]])},[V("p",null,D(r.titleContent),1)],2)])):S("",!0)],8,["to"])}var G=f(j,[["render",q]]);const W={},F={class:"animate__animated animate__pulse animate__infinite",width:"300",height:"160",viewBox:"0 0 241 32",fill:"none",xmlns:"http://www.w3.org/2000/svg"},X=P('<path d="M0 0L7 0.5L4.5 6.5L0 0Z" fill="#6E7D60"></path><path d="M3.85077 12L8 1" stroke="#6E7D60" stroke-width="1.33" stroke-linecap="round"></path><circle r="2.26037" transform="matrix(-1 0 0 1 12.1269 6.42537)" stroke="#6E7D60" stroke-width="1.33"></circle><path d="M19.0746 11.9105C19.8369 12.4843 20.5289 13.165 21.0483 13.7254C21.6042 14.3251 21.5043 15.2489 20.8761 15.7724C20.27 16.2775 19.3788 16.237 18.8209 15.6792L18.0326 14.8908C17.7554 14.6136 17.422 14.3989 17.0549 14.2613L15.5943 13.7136C15.215 13.5713 14.8338 13.918 14.9395 14.3091L17.8572 25.1045C18.1278 26.1057 17.5522 27.1403 16.5588 27.4383C15.5311 27.7467 14.4506 27.1505 14.1634 26.1166L12.9443 21.7277C12.901 21.5719 12.7212 21.5001 12.5825 21.5833L12.1009 21.8723C11.4097 22.287 10.8898 22.9352 10.6349 23.6999L10.1208 25.242C9.81506 26.1593 8.82349 26.6551 7.90612 26.3493C7.00096 26.0476 6.50402 25.0767 6.78861 24.166L7.57091 21.6627C7.91316 20.5675 8.66757 19.6481 9.6749 19.0986L11.7688 17.9565C11.9787 17.842 12.0825 17.5984 12.0195 17.3677L11.1573 14.2061C11.0905 13.9611 10.8201 13.8342 10.5889 13.9393L8.366 14.9497C7.5067 15.3403 6.51697 15.3219 5.67271 14.8998L4.3833 14.2551C3.7846 13.9557 3.484 13.2724 3.66789 12.6288C3.89105 11.8477 4.7332 11.4233 5.49379 11.7085L6.21042 11.9772C6.72153 12.1689 7.28723 12.1537 7.78734 11.9349L10.415 10.7853C12.0107 10.0872 13.7831 9.82604 15.4573 10.3063C16.6967 10.6618 18.1147 11.1878 19.0746 11.9105Z" stroke="#6E7D60" stroke-width="1.33"></path><path d="M154.602 11.4141C155.154 11.4141 155.602 11.8618 155.602 12.4141V12.8555C155.602 13.4078 155.154 13.8555 154.602 13.8555H152.422C151.87 13.8555 151.422 14.3032 151.422 14.8555V23.4414C151.422 23.9937 150.974 24.4414 150.422 24.4414H149.727C149.174 24.4414 148.727 23.9937 148.727 23.4414V14.8555C148.727 14.3032 148.279 13.8555 147.727 13.8555H145.547C144.995 13.8555 144.547 13.4078 144.547 12.8555V12.4141C144.547 11.8618 144.995 11.4141 145.547 11.4141H154.602Z" fill="#6E7D60"></path><path d="M163.559 14.3828C164.092 14.3828 164.633 14.5065 165.18 14.7539C165.461 14.8813 165.719 15.0312 165.952 15.2035C166.178 15.3703 166.547 15.2215 166.547 14.9408C166.547 14.7728 166.683 14.6367 166.851 14.6367H168.027C168.58 14.6367 169.027 15.0844 169.027 15.6367V23.5C169.027 24.0523 168.58 24.5 168.027 24.5H166.88C166.696 24.5 166.547 24.3507 166.547 24.1665C166.547 23.8199 165.987 23.6438 165.73 23.8773C165.596 23.9995 165.452 24.1159 165.297 24.2266C164.75 24.6042 164.112 24.793 163.383 24.793C162.589 24.793 161.853 24.5911 161.176 24.1875C160.512 23.7839 159.978 23.1979 159.574 22.4297C159.171 21.6615 158.969 20.7305 158.969 19.6367C158.969 18.543 159.171 17.6055 159.574 16.8242C159.991 16.043 160.544 15.444 161.234 15.0273C161.938 14.5977 162.712 14.3828 163.559 14.3828ZM164.066 16.8047C163.546 16.8047 163.096 16.9414 162.719 17.2148C162.354 17.4753 162.068 17.8203 161.859 18.25C161.651 18.6797 161.547 19.1419 161.547 19.6367C161.547 20.3789 161.768 21.0104 162.211 21.5312C162.667 22.0521 163.266 22.3125 164.008 22.3125C164.451 22.3125 164.861 22.1953 165.238 21.9609C165.629 21.7266 165.941 21.401 166.176 20.9844C166.423 20.5547 166.547 20.0404 166.547 19.4414V18.4286C166.547 18.1757 166.454 17.9287 166.268 17.758C165.995 17.508 165.703 17.3009 165.395 17.1367C164.991 16.9154 164.548 16.8047 164.066 16.8047Z" fill="#6E7D60"></path><path d="M176.145 9.5C176.613 9.5 177.017 9.66927 177.355 10.0078C177.694 10.3333 177.863 10.724 177.863 11.1797C177.863 11.6224 177.694 12.013 177.355 12.3516C177.017 12.6901 176.613 12.8594 176.145 12.8594C175.676 12.8594 175.272 12.6901 174.934 12.3516C174.608 12.013 174.445 11.6224 174.445 11.1797C174.445 10.724 174.608 10.3333 174.934 10.0078C175.272 9.66927 175.676 9.5 176.145 9.5ZM176.59 14.6367C177.142 14.6367 177.59 15.0844 177.59 15.6367V23.5C177.59 24.0523 177.142 24.5 176.59 24.5H176.109C175.557 24.5 175.109 24.0523 175.109 23.5V17.5371C175.109 17.1002 174.755 16.7461 174.318 16.7461C173.881 16.7461 173.527 16.3919 173.527 15.9551V15.6367C173.527 15.0844 173.975 14.6367 174.527 14.6367H176.59Z" fill="#6E7D60"></path><path d="M204.193 11.4141C204.877 11.4141 205.359 12.0855 205.141 12.7337L201.401 23.8196C201.264 24.2262 200.883 24.5 200.454 24.5H200.009C199.583 24.5 199.203 24.2297 199.064 23.8267L197.332 18.8159C197.021 17.9182 195.752 17.9182 195.442 18.8159L193.709 23.8267C193.57 24.2297 193.191 24.5 192.764 24.5H192.323C191.892 24.5 191.51 24.2244 191.374 23.8158L187.684 12.7299C187.469 12.0824 187.95 11.4141 188.633 11.4141H189.583C190.027 11.4141 190.418 11.7067 190.543 12.1328L191.856 16.6111C192.131 17.5512 193.454 17.5754 193.764 16.646L195.28 12.0978C195.416 11.6895 195.798 11.4141 196.229 11.4141H196.6C197.032 11.4141 197.415 11.6915 197.55 12.1019L199.042 16.6422C199.348 17.5729 200.671 17.5544 200.951 16.6155L202.287 12.1286C202.413 11.7047 202.803 11.4141 203.246 11.4141H204.193Z" fill="#6E7D60"></path><path d="M212.211 14.3828C212.745 14.3828 213.285 14.5065 213.832 14.7539C214.114 14.8813 214.371 15.0312 214.605 15.2035C214.83 15.3703 215.199 15.2215 215.199 14.9408C215.199 14.7728 215.335 14.6367 215.503 14.6367H216.68C217.232 14.6367 217.68 15.0844 217.68 15.6367V23.5C217.68 24.0523 217.232 24.5 216.68 24.5H215.533C215.349 24.5 215.199 24.3507 215.199 24.1665C215.199 23.8199 214.639 23.6438 214.383 23.8773C214.249 23.9995 214.104 24.1159 213.949 24.2266C213.402 24.6042 212.764 24.793 212.035 24.793C211.241 24.793 210.505 24.5911 209.828 24.1875C209.164 23.7839 208.63 23.1979 208.227 22.4297C207.823 21.6615 207.621 20.7305 207.621 19.6367C207.621 18.543 207.823 17.6055 208.227 16.8242C208.643 16.043 209.197 15.444 209.887 15.0273C210.59 14.5977 211.365 14.3828 212.211 14.3828ZM212.719 16.8047C212.198 16.8047 211.749 16.9414 211.371 17.2148C211.007 17.4753 210.72 17.8203 210.512 18.25C210.303 18.6797 210.199 19.1419 210.199 19.6367C210.199 20.3789 210.421 21.0104 210.863 21.5312C211.319 22.0521 211.918 22.3125 212.66 22.3125C213.103 22.3125 213.513 22.1953 213.891 21.9609C214.281 21.7266 214.594 21.401 214.828 20.9844C215.076 20.5547 215.199 20.0404 215.199 19.4414V18.4286C215.199 18.1757 215.107 17.9287 214.92 17.758C214.647 17.508 214.356 17.3009 214.047 17.1367C213.643 16.9154 213.201 16.8047 212.719 16.8047Z" fill="#6E7D60"></path><path d="M224.207 10.4375C224.759 10.4375 225.207 10.8852 225.207 11.4375V23.5C225.207 24.0523 224.759 24.5 224.207 24.5H223.727C223.174 24.5 222.727 24.0523 222.727 23.5V11.4375C222.727 10.8852 223.174 10.4375 223.727 10.4375H224.207Z" fill="#6E7D60"></path><path d="M231.715 10.4375C232.267 10.4375 232.715 10.8852 232.715 11.4375V16.4581C232.715 17.3705 233.836 17.8063 234.452 17.1334L236.441 14.9614C236.63 14.7545 236.898 14.6367 237.179 14.6367H237.437C238.327 14.6367 238.774 15.7116 238.146 16.3422L236.216 18.2809C235.857 18.6415 235.826 19.2142 236.144 19.6114L238.757 22.875C239.282 23.5297 238.816 24.5 237.977 24.5H237.429C237.117 24.5 236.823 24.3541 236.633 24.1057L234.639 21.4851C234.272 21.0032 233.564 20.9554 233.136 21.3837L233.008 21.5118C232.82 21.6993 232.715 21.9537 232.715 22.2189V23.5C232.715 24.0523 232.267 24.5 231.715 24.5H231.234C230.682 24.5 230.234 24.0523 230.234 23.5V11.4375C230.234 10.8852 230.682 10.4375 231.234 10.4375H231.715Z" fill="#6E7D60"></path><path d="M41.51 20.198C42.0623 20.198 42.51 20.6458 42.51 21.198V23.004C42.51 23.5563 42.0623 24.004 41.51 24.004H34.358C33.8058 24.004 33.358 23.5563 33.358 23.004V21.198C33.358 20.6458 33.8058 20.198 34.358 20.198H41.51ZM30.674 26.392C30.674 26.9443 31.1218 27.392 31.674 27.392H32.918C33.161 27.392 33.358 27.195 33.358 26.952V26.952C33.358 26.709 33.555 26.512 33.798 26.512H42.081C42.318 26.512 42.51 26.7041 42.51 26.941V26.941C42.51 27.178 42.7021 27.37 42.939 27.37H44.326C44.8783 27.37 45.326 26.9223 45.326 26.37V18.712C45.326 18.1598 44.8783 17.712 44.326 17.712H31.674C31.1218 17.712 30.674 18.1598 30.674 18.712V26.392ZM41.054 9.99642C40.6368 10.3104 40.5904 10.9064 40.9775 11.2567V11.2567C41.5074 11.7361 41.2048 12.6141 40.4909 12.6448C39.2586 12.6977 38.0327 12.7494 36.8359 12.7972C36.0239 12.8297 35.5124 11.9275 35.938 11.2352C36.4414 10.4162 36.9386 9.56867 37.406 8.73007C37.7094 8.18581 37.4328 7.50491 36.8395 7.31438L35.8625 7.0006C35.3581 6.8386 34.8162 7.09842 34.6069 7.58512C33.9196 9.18329 32.973 10.9868 32.0151 12.5308C31.8392 12.8144 31.5297 12.9853 31.196 12.9929C30.562 13.0074 29.9542 13.0262 29.3788 13.0428C28.8124 13.0593 28.3694 13.5398 28.4024 14.1055L28.439 14.7321C28.4707 15.2755 28.9297 15.6937 29.4735 15.673C33.4012 15.5233 38.819 15.3046 44.0281 15.0327C44.3462 15.0161 44.6546 15.1507 44.8504 15.4019C45.0179 15.6169 45.1746 15.8271 45.3191 16.0312C45.6721 16.5296 46.3773 16.6742 46.8618 16.3026L47.5038 15.8102C47.9056 15.502 48.0151 14.9405 47.7186 14.5301C46.5688 12.9389 44.6496 11.0628 42.8926 9.56878C42.5416 9.27029 42.0311 9.26096 41.6629 9.53806L41.054 9.99642Z" fill="#6E7D60"></path><path d="M65.346 7.86704C65.346 7.52075 65.0653 7.24004 64.719 7.24004H62.145C61.7988 7.24004 61.518 7.52075 61.518 7.86704V7.86704C61.518 8.21332 61.7988 8.49404 62.145 8.49404H64.719C65.0653 8.49404 65.346 8.21332 65.346 7.86704V7.86704ZM55.4701 10.0294C55.7842 9.64114 55.7614 9.08136 55.3704 8.77081C54.847 8.35515 54.1878 7.91749 53.5619 7.54074C53.1526 7.2944 52.6286 7.39377 52.3215 7.75962L52.1075 8.0145C51.7121 8.48555 51.8319 9.19866 52.3376 9.54881C52.7662 9.84563 53.1914 10.1653 53.5633 10.4763C54.0442 10.8784 54.7989 10.859 55.1931 10.3717L55.4701 10.0294ZM55.0476 15.6802C55.3611 15.2726 55.3128 14.6941 54.8955 14.3937C54.348 13.9996 53.6766 13.5934 53.0344 13.2518C52.6225 13.0328 52.118 13.1545 51.8304 13.5218L51.6229 13.7868C51.2409 14.2746 51.3899 14.9897 51.9137 15.3206C52.3515 15.5972 52.7897 15.8981 53.1731 16.1909C53.6636 16.5653 54.402 16.5195 54.7782 16.0304L55.0476 15.6802ZM52.724 26.5971C53.2471 26.8911 53.9099 26.6615 54.1287 26.1027C54.7805 24.4378 55.4252 22.5979 55.9739 20.832C56.1064 20.4054 55.9343 19.9442 55.5577 19.7039L55.2246 19.4912C54.6703 19.1375 53.9309 19.4056 53.7171 20.0274C53.0985 21.8265 52.3814 23.625 51.7759 25.0098C51.5669 25.4876 51.7485 26.049 52.2031 26.3044L52.724 26.5971ZM63.96 16.106C63.96 16.3733 63.7433 16.59 63.476 16.59H63.344C63.0767 16.59 62.86 16.3733 62.86 16.106V16.106C62.86 15.8387 63.0767 15.622 63.344 15.622H63.476C63.7433 15.622 63.96 15.8387 63.96 16.106V16.106ZM57.712 17.603C57.712 17.7958 57.8684 17.954 58.0612 17.954H58.537C58.9927 17.954 59.362 17.5847 59.362 17.129V13.9194C59.362 13.7246 59.5099 13.5617 59.7038 13.543L59.7945 13.5342C59.9362 13.5205 60.0686 13.6331 60.0892 13.774V13.774C60.1151 13.9509 60.2926 14.0446 60.4602 13.9825L60.8605 13.8342C61.1295 13.7346 61.2953 13.4621 61.235 13.1817C61.1328 12.7071 60.9668 12.1515 60.7677 11.6419C60.6536 11.35 60.3249 11.2151 60.03 11.3213L59.6938 11.4423C59.5597 11.4906 59.4882 11.6317 59.5348 11.7664V11.7664C59.591 11.929 59.472 12.1061 59.3 12.1101V12.1101C59.0735 12.1154 58.9448 11.847 59.091 11.674C59.521 11.1654 59.9531 10.6197 60.3657 10.0856C60.4827 9.93413 60.726 10.0165 60.726 10.208V10.208C60.726 10.3185 60.8156 10.408 60.9261 10.408H65.9083C65.9501 10.408 65.984 10.3741 65.984 10.3323V10.3323C65.984 10.2673 66.0602 10.2328 66.1084 10.2763C66.42 10.5579 66.7188 10.8679 66.9734 11.1641C67.1729 11.3962 67.1576 11.7392 66.9588 11.972C66.9482 11.9844 66.9377 11.9968 66.9272 12.009C66.8038 12.1534 66.6241 12.2363 66.4342 12.2404V12.2404C66.037 12.2488 65.7308 12.5935 65.7693 12.9889L65.7794 13.0934C65.82 13.5103 66.1827 13.8208 66.601 13.7965L67.3723 13.7516C67.574 13.7399 67.744 13.9003 67.744 14.1024V14.1024C67.744 14.3283 67.5339 14.4955 67.3137 14.4447L66.7825 14.3221C66.5248 14.2627 66.2692 14.4257 66.2065 14.6826C66.1835 14.7771 66.1595 14.872 66.1344 14.9669C66.0242 15.3845 65.544 15.2947 65.544 14.8628V14.8628C65.544 14.6381 65.3619 14.456 65.1373 14.456H62.342C61.7898 14.456 61.342 14.9038 61.342 15.456V16.756C61.342 17.3083 61.7898 17.756 62.342 17.756H65.2581C65.416 17.756 65.544 17.628 65.544 17.4701V17.4701C65.544 17.2631 65.7564 17.1262 65.9406 17.2206C66.1099 17.3073 66.2804 17.4011 66.4296 17.4909C66.5927 17.589 66.7887 17.5858 66.8712 17.4141V17.4141C67.0299 17.0836 67.744 17.1479 67.744 17.5145V17.63C67.744 17.809 67.8891 17.954 68.068 17.954H68.58C69.0418 17.954 69.416 17.5797 69.416 17.118V14.0864C69.416 13.8357 69.6091 13.6272 69.8591 13.608L70.0598 13.5925C70.1827 13.5831 70.2982 13.6819 70.3252 13.8021V13.8021C70.361 13.9616 70.5319 14.04 70.6819 13.975L71.1968 13.7518C71.4919 13.624 71.6573 13.3053 71.5633 12.9977C71.4171 12.5189 71.2045 11.9741 70.9687 11.4766C70.8201 11.1631 70.4505 11.0335 70.1288 11.1633L69.7378 11.3211C69.5763 11.3862 69.5013 11.5686 69.5753 11.7263V11.7263C69.6664 11.9206 69.5285 12.1504 69.3139 12.1543L69.2913 12.1547C69.0156 12.1597 68.8666 11.8301 69.0491 11.6234C69.4848 11.13 69.9242 10.6073 70.3426 10.0972C70.6424 9.73186 70.5363 9.18541 70.1241 8.95431V8.95431C69.757 8.7485 69.2923 8.87861 69.0605 9.22988C68.9088 9.45968 68.7428 9.69781 68.5671 9.94108C68.4508 10.102 68.2238 10.1165 68.0866 9.97294V9.97294C67.9762 9.85748 67.9478 9.67123 68.0392 9.54025C68.3052 9.15927 68.5835 8.73129 68.8662 8.29971C69.1194 7.91333 68.978 7.38946 68.5624 7.18779V7.18779C68.1755 7.00005 67.7095 7.17088 67.5208 7.55726C67.3413 7.92471 67.1366 8.32344 66.9342 8.69868C66.886 8.78787 66.7695 8.81225 66.6892 8.75046V8.75046C66.616 8.69417 66.5109 8.70878 66.4559 8.78289L66.1516 9.19244C66.0982 9.26433 65.984 9.22655 65.984 9.137V9.137C65.984 9.08566 65.9424 9.04404 65.8911 9.04404H60.8637C60.7877 9.04404 60.726 9.10569 60.726 9.18174V9.18174C60.726 9.28724 60.6123 9.35355 60.5205 9.30154L59.8959 8.94765C59.6264 8.7949 59.2835 8.89182 59.1187 9.15415C58.99 9.35895 58.8491 9.57206 58.7014 9.79349C58.5914 9.95846 58.3501 9.98292 58.2021 9.85099V9.85099C58.0962 9.75669 58.0757 9.59717 58.1529 9.47826C58.4043 9.0909 58.675 8.66405 58.9476 8.22833C59.1836 7.85105 59.0435 7.35325 58.6467 7.15185V7.15185C58.2501 6.9506 57.7662 7.13129 57.5788 7.53461C57.4096 7.89876 57.2182 8.28218 57.0236 8.63795C56.9676 8.74038 56.8378 8.7737 56.7393 8.71102V8.71102C56.6444 8.65061 56.5198 8.67958 56.4593 8.77444L56.1524 9.25554C55.9281 9.60726 56.0153 10.0715 56.3341 10.3404C56.5788 10.5468 56.8216 10.7665 57.0471 10.9856C57.3123 11.2432 57.3262 11.6617 57.0924 11.9481V11.9481C56.9522 12.1197 56.749 12.2162 56.5275 12.2235L56.3772 12.2284C55.9225 12.2433 55.577 12.6423 55.6272 13.0944V13.0944C55.6735 13.5109 56.0404 13.8172 56.4583 13.7872C56.7356 13.7674 57.0216 13.746 57.3128 13.7215C57.5271 13.7034 57.712 13.8718 57.712 14.0868V14.0868C57.712 14.321 57.4946 14.4946 57.2662 14.4427L56.9139 14.3627C56.5556 14.2812 56.2027 14.5118 56.1137 14.8684C55.9905 15.3625 55.8359 15.8551 55.6394 16.3068C55.4656 16.7065 55.6249 17.2062 56.0149 17.4009C56.1228 17.4548 56.2283 17.5092 56.3259 17.5613C56.4972 17.6527 56.692 17.6365 56.7806 17.4637V17.4637C56.9657 17.1023 57.712 17.1968 57.712 17.603V17.603ZM70.2119 14.3911C69.8214 14.5082 69.6184 14.9371 69.7599 15.3195C69.924 15.7629 70.0784 16.2265 70.1975 16.6511C70.3138 17.0658 70.7524 17.3253 71.1609 17.1891V17.1891C71.5059 17.0741 71.7061 16.7149 71.5991 16.3674C71.4469 15.8732 71.2434 15.3094 71.0356 14.7841C70.9066 14.4579 70.5478 14.2903 70.2119 14.3911V14.3911ZM61.364 13.268C61.364 13.5961 61.63 13.862 61.958 13.862H64.95C65.2781 13.862 65.544 13.5961 65.544 13.268V13.268C65.544 12.94 65.2781 12.674 64.95 12.674H61.958C61.63 12.674 61.364 12.94 61.364 13.268V13.268ZM65.544 11.574C65.544 11.246 65.2781 10.98 64.95 10.98H61.958C61.63 10.98 61.364 11.246 61.364 11.574V11.574C61.364 11.9021 61.63 12.168 61.958 12.168H64.95C65.2781 12.168 65.544 11.9021 65.544 11.574V11.574ZM60.6945 16.7768C61.0246 16.6833 61.2303 16.3547 61.1544 16.0201C61.0721 15.657 60.9685 15.2526 60.8578 14.8698C60.764 14.5458 60.4313 14.3592 60.1025 14.4342V14.4342C59.7361 14.5178 59.5152 14.8918 59.6056 15.2566C59.6864 15.5825 59.7619 15.9177 59.8245 16.2299C59.9043 16.6275 60.3044 16.8873 60.6945 16.7768V16.7768ZM60.1762 22.662C59.9533 22.662 59.7903 22.4517 59.846 22.2358V22.2358C59.8849 22.0853 60.0207 21.98 60.1762 21.98H68.658C69.2103 21.98 69.658 21.5323 69.658 20.98V19.328C69.658 18.7758 69.2103 18.328 68.658 18.328H57.921C57.514 18.328 57.184 18.658 57.184 19.065V19.065C57.184 19.4721 57.514 19.802 57.921 19.802H66.897C67.0854 19.802 67.238 19.9547 67.238 20.143V20.143C67.238 20.3314 67.0854 20.484 66.897 20.484H58.669C58.19 20.484 57.7796 20.824 57.6766 21.2918C57.5196 22.0042 57.3331 22.7453 57.1384 23.4211C56.9625 24.0322 57.3597 24.6757 57.9902 24.7582L58.7718 24.8605C58.974 24.8869 59.1643 24.7737 59.2241 24.5787V24.5787C59.2793 24.3989 59.4468 24.268 59.6349 24.268H66.6566C67.3137 24.268 67.8795 25.0255 67.348 25.412V25.412C67.128 25.566 66.864 25.588 66.424 25.588C66.0747 25.588 65.3615 25.5792 64.5493 25.5389C63.9747 25.5103 63.5619 26.2394 63.7078 26.7959V26.7959C63.7955 27.1304 64.0678 27.3567 64.4135 27.3662C65.5565 27.3976 66.6172 27.4108 67.216 27.392C68.096 27.348 68.712 27.238 69.262 26.82C69.856 26.336 70.252 25.368 70.604 23.608V23.608C70.7461 23.1107 70.2969 22.662 69.7797 22.662H60.1762Z" fill="#6E7D60"></path><path d="M85.916 22.1C85.916 21.5478 86.3638 21.1 86.916 21.1H91.934C92.4863 21.1 92.934 20.6523 92.934 20.1V19.768C92.934 19.2158 92.4863 18.768 91.934 18.768H86.916C86.3638 18.768 85.916 18.3203 85.916 17.768V17.106C85.916 16.5538 86.3638 16.106 86.916 16.106H93.408C93.9603 16.106 94.408 15.6583 94.408 15.106V14.664C94.408 14.1118 93.9603 13.664 93.408 13.664H86.916C86.3638 13.664 85.916 13.2163 85.916 12.664V12.53C85.916 11.9778 86.3638 11.53 86.916 11.53H91.692C92.2443 11.53 92.692 11.0823 92.692 10.53V10.132C92.692 9.57975 92.2443 9.13204 91.692 9.13204H86.916C86.3638 9.13204 85.916 8.68432 85.916 8.13204V7.88804C85.916 7.33575 85.4683 6.88804 84.916 6.88804H84.232C83.6798 6.88804 83.232 7.33575 83.232 7.88804V8.13204C83.232 8.68432 82.7843 9.13204 82.232 9.13204H77.852C77.2998 9.13204 76.852 9.57975 76.852 10.132V10.53C76.852 11.0823 77.2998 11.53 77.852 11.53H82.232C82.7843 11.53 83.232 11.9778 83.232 12.53V12.664C83.232 13.2163 82.7843 13.664 82.232 13.664H75.916C75.3638 13.664 74.916 14.1118 74.916 14.664V15.106C74.916 15.6583 75.3638 16.106 75.916 16.106H82.232C82.7843 16.106 83.232 16.5538 83.232 17.106V21.8897C83.232 22.6361 82.4446 23.1051 81.8763 22.6213C81.2437 22.0827 80.6881 21.4046 80.2325 20.5526C80.1191 20.3406 80.0997 20.0926 80.1591 19.8598C80.2873 19.3568 80.3987 18.8502 80.4961 18.349C80.6051 17.7883 80.205 17.262 79.6375 17.1974L78.9813 17.1227C78.4272 17.0596 77.9312 17.4621 77.8496 18.0137C77.501 20.3699 76.7138 22.9256 75.203 24.7275C74.7528 25.2643 74.7958 26.1575 75.3207 26.6215C75.3631 26.659 75.4051 26.6967 75.4465 26.7343C75.8441 27.0954 76.462 27.1516 76.8355 26.7656C77.4194 26.1622 77.9174 25.4611 78.3497 24.6927C78.7362 24.0059 79.7478 23.8934 80.3176 24.4376C82.5626 26.5818 85.5946 27.128 89.282 27.128H93.2391C93.7243 27.128 94.1349 26.7949 94.2752 26.3304V26.3304C94.5049 25.5697 93.9481 24.6127 93.1534 24.6189C91.737 24.6299 90.0871 24.6345 89.436 24.62C88.507 24.62 87.603 24.5825 86.7429 24.4791C86.2624 24.4214 85.916 24.0039 85.916 23.52V22.1Z" fill="#6E7D60"></path><path d="M109.236 22.1C109.236 21.5478 109.684 21.1 110.236 21.1H115.254C115.806 21.1 116.254 20.6523 116.254 20.1V19.768C116.254 19.2158 115.806 18.768 115.254 18.768H110.236C109.684 18.768 109.236 18.3203 109.236 17.768V17.106C109.236 16.5538 109.684 16.106 110.236 16.106H116.728C117.28 16.106 117.728 15.6583 117.728 15.106V14.664C117.728 14.1118 117.28 13.664 116.728 13.664H110.236C109.684 13.664 109.236 13.2163 109.236 12.664V12.53C109.236 11.9778 109.684 11.53 110.236 11.53H115.012C115.564 11.53 116.012 11.0823 116.012 10.53V10.132C116.012 9.57975 115.564 9.13204 115.012 9.13204H110.236C109.684 9.13204 109.236 8.68432 109.236 8.13204V7.88804C109.236 7.33575 108.788 6.88804 108.236 6.88804H107.552C107 6.88804 106.552 7.33575 106.552 7.88804V8.13204C106.552 8.68432 106.104 9.13204 105.552 9.13204H101.172C100.62 9.13204 100.172 9.57975 100.172 10.132V10.53C100.172 11.0823 100.62 11.53 101.172 11.53H105.552C106.104 11.53 106.552 11.9778 106.552 12.53V12.664C106.552 13.2163 106.104 13.664 105.552 13.664H99.236C98.6838 13.664 98.236 14.1118 98.236 14.664V15.106C98.236 15.6583 98.6838 16.106 99.236 16.106H105.552C106.104 16.106 106.552 16.5538 106.552 17.106V21.8897C106.552 22.6361 105.765 23.1051 105.196 22.6213C104.564 22.0827 104.008 21.4046 103.552 20.5526C103.439 20.3406 103.42 20.0926 103.479 19.8598C103.607 19.3568 103.719 18.8502 103.816 18.349C103.925 17.7883 103.525 17.262 102.958 17.1974L102.301 17.1227C101.747 17.0596 101.251 17.4621 101.17 18.0137C100.821 20.3699 100.034 22.9256 98.523 24.7275C98.0728 25.2643 98.1158 26.1575 98.6407 26.6215C98.6831 26.659 98.7251 26.6967 98.7665 26.7343C99.1641 27.0954 99.782 27.1516 100.156 26.7656C100.739 26.1622 101.237 25.4611 101.67 24.6927C102.056 24.0059 103.068 23.8934 103.638 24.4377C105.883 26.5818 108.915 27.128 112.602 27.128H116.559C117.044 27.128 117.455 26.7949 117.595 26.3304V26.3304C117.825 25.5697 117.268 24.6127 116.473 24.6189C115.057 24.6299 113.407 24.6345 112.756 24.62C111.827 24.62 110.923 24.5825 110.063 24.4791C109.582 24.4214 109.236 24.0039 109.236 23.52V22.1Z" fill="#6E7D60"></path><path d="M131.28 14.324C129.74 14.324 128.464 15.6 128.464 17.14C128.464 18.68 129.74 19.956 131.28 19.956C132.82 19.956 134.096 18.68 134.096 17.14C134.096 15.6 132.82 14.324 131.28 14.324Z" fill="#6E7D60"></path>',16),Y=[X];function K(t,e){return h(),y("svg",F,Y)}var J=f(W,[["render",K]]);const Q={components:{Loading:I},setup(t){const e=M(),r=m(()=>e.getters["loadingModules/pageLoading"]),a=m(()=>e.getters["dialogModules/showDialog"]);return{pageLoading:r,showDialog:a}}};function t1(t,e,r,a,n,s){const o=J,u=L("Loading"),i=G,H=L("RouterView");return h(),y(b,null,[g(u,{class:"z-30 bg-[#ffffff] bg-opacity-90","lock-scroll":!0,active:a.pageLoading},{default:T(()=>[g(o)]),_:1},8,["active"]),g(i,{"show-dialog":a.showDialog},null,8,["show-dialog"]),g(H)],64)}var e1=f(Q,[["render",t1]]),r1="/vue3-TaiWalk/assets/no_image.b781cd0f.png";const a1="a0918233246-345e2b97-17b5-4f9a",n1="0943aa16-0aef-42e2-a478-f9eece72e471",c="https://tdx.transportdata.tw/api/basic/v2/Tourism",l=async()=>{const t="https://tdx.transportdata.tw/auth/realms/TDXConnect/protocol/openid-connect/token",e={grant_type:"client_credentials",client_id:a1,client_secret:n1};try{return(await C.post(t,e,{headers:{"content-type":"application/x-www-form-urlencoded"}})).data.access_token}catch(r){return console.dir("Error in getting authorization:",r),null}},o1=async()=>{try{const t=await l(),e=`${c}/ScenicSpot?$filter=Picture/PictureUrl1 ne null`;return await C.get(e,{headers:{Authorization:`Bearer ${t}`}})}catch(t){return console.error("Error in API getScenicSpotApi request:",t),null}},Z1=async(t,e)=>{try{const r=await l(),a=`${c}/ScenicSpot/${t}?$filter=Picture/PictureUrl1 ne null&$top=${e}`;return await C.get(a,{headers:{Authorization:`Bearer ${r}`}})}catch(r){return console.error("Error in API getScenicSpotByCountyApi request:",r),null}},B1=async(t,e)=>{try{const r=await l(),a=`${c}/Activity/${t}?$filter=Picture/PictureUrl1 ne null&$top=${e}`;return await C.get(a,{headers:{Authorization:`Bearer ${r}`}})}catch(r){return console.error("Error in API getActivityByCountyApi request:",r),null}},R1=async(t,e)=>{try{const r=await l(),a=`${c}/Restaurant/${t}?$filter=Picture/PictureUrl1 ne null&$top=${e}&$`;return await C.get(a,{headers:{Authorization:`Bearer ${r}`}})}catch(r){return console.error("Error in API getRestaurantByCountyApi request:",r),null}},s1=async(t=0,e=!0)=>{try{const r=await l();let a=`${c}/Activity?`;return e&&(a+="$filter=Picture/PictureUrl1 ne null"),t!==0&&(a+=`&$top=${t}`),await C.get(a,{headers:{Authorization:`Bearer ${r}`}})}catch(r){return console.error("Error in API getActivityApi request:",r),null}},i1=async(t=0,e=!0)=>{try{const r=await l();let a=`${c}/Restaurant?`;return e&&(a+="$filter=Picture/PictureUrl1 ne null"),t!==0&&(a+=`&$top=${t}`),await C.get(a,{headers:{Authorization:`Bearer ${r}`}})}catch(r){return console.error("Error in API getRestaurantApi request:",r),null}},N1=async(t,e)=>{try{const r=await l(),a=`${c}/${e}?$filter=${e}ID eq '${t}'`;return await C.get(a,{headers:{Authorization:`Bearer ${r}`}})}catch(r){return console.error("Error in API getDetailByIDApi request:",r),null}},C1={scenicSpot:[]},c1={scenicSpot:t=>t.scenicSpot,scenicForSwiper:t=>{const e=t.scenicSpot.filter(n=>n.hasOwnProperty("City")),r={\u65B0\u5317\u5E02:0,\u9AD8\u96C4\u5E02:0,\u82B1\u84EE\u7E23:0,\u6843\u5712\u5E02:0},a=[];return e.forEach(n=>{r.hasOwnProperty(n.City)&&r[n.City]<1&&(r[n.City]+=1,a.push(n))}),a}},l1={async getScenicSpot(t){try{const{data:e}=await o1(0,!1);t.commit("SCENIC_SPOT",e)}catch(e){console.dir(e)}}},u1={SCENIC_SPOT(t,e){t.scenicSpot=e}};var d1={strict:!0,namespaced:!0,state:C1,getters:c1,actions:l1,mutations:u1};const p1=()=>{const t=new Date;let e=t.getDate(),r=t.getMonth()+1,a=t.getFullYear();return r<10&&(r="0"+r),e<10&&(e="0"+e),`${a}-${r}-${e}`},U1=(t,e)=>{const r=new Date(t).getTime();return e.filter(n=>{const s=new Date(n.StartTime.slice(0,10)).getTime(),o=new Date(n.EndTime.slice(0,10)).getTime();return r>=s&&r<=o})},h1=(t,e)=>{const r=new Date(t).getTime();return e.filter(n=>new Date(n.EndTime.slice(0,10)).getTime()>=r)},g1={activity:[]},y1={activityIndexPageData:(t,e,r)=>{const a=t.activity.filter(i=>i.hasOwnProperty("City")),n=p1(),s=h1(n,a),o={\u65B0\u5317\u5E02:0,\u9AD8\u96C4\u5E02:0,\u82B1\u84EE\u7E23:0,\u6843\u5712\u5E02:0},u=[];return s.forEach(i=>{o.hasOwnProperty(i.City)&&o[i.City]<1&&(o[i.City]+=1,u.push(i))}),u},activityData:(t,e,r)=>t.activity},f1={async getActivity(t){try{const{data:e}=await s1(0,!1);t.commit("ACTIVITY",e)}catch(e){console.error(e)}}},V1={ACTIVITY(t,e){t.activity=e}};var m1={strict:!0,namespaced:!0,state:g1,getters:y1,actions:f1,mutations:V1};const L1={restaurants:[]},_1={restaurantsIndexPageData:(t,e,r)=>{const a=t.restaurants.filter(o=>o.hasOwnProperty("City")),n={\u65B0\u5317\u5E02:0,\u9AD8\u96C4\u5E02:0,\u82B1\u84EE\u7E23:0,\u6843\u5712\u5E02:0},s=[];return a.forEach(o=>{n.hasOwnProperty(o.City)&&n[o.City]<1&&(s.push(o),n[o.City]+=1)}),s},restaurantsData:t=>t.restaurants},H1={async getRestaurant(t){try{const{data:e}=await i1(0,!1);t.commit("RESTAURANT",e)}catch(e){console.dir(e)}}},w1={RESTAURANT(t,e){t.restaurants=e}};var $1={strict:!0,namespaced:!0,state:L1,getters:_1,actions:H1,mutations:w1};const A1={indexLoading:!1,pageLoading:!1},D1={indexLoading:t=>t.indexLoading,pageLoading:t=>t.pageLoading},v1={updateIndexLoading(t,e){t.commit("INDEX_LOADING",e)},updatePageLoading(t,e){t.commit("PAGE_LOADING",e)}},S1={INDEX_LOADING(t,e){t.indexLoading=e},PAGE_LOADING(t,e){t.pageLoading=e}};var E1={strict:!0,namespaced:!0,state:A1,getters:D1,actions:v1,mutations:S1};const P1={show:!1,styleObj:{}},I1={showDialog:t=>t.show},M1={updateDialog(t,e){t.commit("SHOW_DIALOG",e)}},T1={SHOW_DIALOG(t,e){t.show=e}};var b1={strict:!0,namespaced:!0,state:P1,getters:I1,actions:M1,mutations:T1},O1=O({strict:!0,modules:{scenicSpotModules:d1,activityModules:m1,restaurantModules:$1,loadingModules:E1,dialogModules:b1}});const p=k(e1);p.use(U);p.use(x);p.use(O1);p.directive("real-img",async(t,e)=>{const r=r1,a=e.value;a&&(await k1(a)?t.setAttribute("src",a):t.setAttribute("src",r))});const k1=t=>new Promise(e=>{let r=new Image;r.onload=function(){this.complete===!0&&(e(!0),r=null)},r.onerror=()=>{e(!1),r=null},r.src=t});p.mount("#app");export{f as _,Z1 as a,B1 as b,R1 as c,N1 as g,r1 as n,U1 as t};
