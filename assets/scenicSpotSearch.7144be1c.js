import{_ as Q,a as X,b as Y}from"./NewTitle.2d7f1091.js";import{a as Z,b as $}from"./search.251c600d.js";import{c as ee,_ as te,a as se,b as ae}from"./chunk.823ce6b3.js";import{c as oe,_ as ne}from"./cityData.45ddedf0.js";import{u as le,i as ie,M as ce,p as r,E as re,o as ue,b as l,e as u,j as h,w as de,F as b,f as a,d as k,g as pe,s as F,P as I,y as C,t as W,z as me,A as _e,v as j}from"./vendor.8a845149.js";import{_ as ge}from"./index.036f93db.js";var A="/vue3-TaiWalk/assets/spot_01.087256fe.png",L="/vue3-TaiWalk/assets/spot_02.934ae284.png",U="/vue3-TaiWalk/assets/spot_03.22a5967d.png",B="/vue3-TaiWalk/assets/spot_04.68ae99d6.png",E="/vue3-TaiWalk/assets/spot_05.c92a0a48.png",K="/vue3-TaiWalk/assets/spot_06.645f253b.png",O="/vue3-TaiWalk/assets/spot_07.84abda0f.png";const fe={emits:{emitClassData:String},setup(z,{emit:i}){const _=le(),t=()=>_.dispatch("scenicSpotModules/getScenicSpot"),g=ie(()=>_.getters["scenicSpotModules/scenicSpot"]),P=ce(),T=oe,x=r("\u5168\u90E8\u7E23\u5E02"),y=r("\u8ACB\u9078\u64C7\u4E3B\u984C"),d=r(""),S=r(0),o=r([]);let M=1;const p=r(1),w=r(0),m=r([]),e=r([{path:"/",text:"\u9996\u9801"},{path:"/scenicSpotSearch",text:"\u63A2\u7D22\u666F\u9EDE"}]),R=r([{title:"\u81EA\u7136\u98A8\u666F\u985E",img:A},{title:"\u89C0\u5149\u5DE5\u5EE0\u985E",img:L},{title:"\u904A\u61A9\u985E",img:U},{title:"\u4F11\u9592\u8FB2\u696D\u985E",img:B},{title:"\u751F\u614B\u985E",img:E},{title:"\u6EAB\u6CC9\u985E",img:K},{title:"\u53E4\u8E5F\u985E",img:O}]),q=()=>{o.value=[];let s=x.value,c=y.value;s==="\u5168\u90E8\u7E23\u5E02"&&(s=""),c==="\u8ACB\u9078\u64C7\u4E3B\u984C"&&(c=""),o.value=g.value,s!==""&&(o.value=H(s,o.value)),c!==""&&(o.value=V(c,o.value)),d.value!==""&&(o.value=G(d.value,o.value)),N(o.value),d.value=""},N=s=>{s.length!==0&&(m.value=ee(s,20),S.value=s.length,w.value=m.value.length,o.value=m.value[p.value-1])},G=(s,c=g.value)=>c.filter(n=>{var f,v;return((f=n.ScenicSpotName)==null?void 0:f.includes(s))||((v=n.Description)==null?void 0:v.includes(s))}),V=(s,c=g.value)=>{const D=c.filter(n=>{if(n.hasOwnProperty("Class1")&&n.Class1===s)return n;if(n.hasOwnProperty("Class2")&&n.Class2===s)return n;if(n.hasOwnProperty("Class3")&&n.Class3===s)return n});return o.value=D,N(o.value),D},H=(s,c=g.value)=>c.filter(n=>{var f,v;return((f=n.Address)==null?void 0:f.includes(s))||((v=n.City)==null?void 0:v.includes(s))}),J=s=>{p.value=s};return re(p,(s,c)=>{p.value=s,o.value=m.value[s-1]}),ue(async()=>{try{_.dispatch("loadingModules/updatePageLoading",!0),await t(),_.dispatch("loadingModules/updatePageLoading",!1),P.params.str!==void 0&&(d.value=P.params.str)}catch(s){_.dispatch("dialogModules/updateDialog",!0),console.error(s)}}),{citySelectModel:x,classSelectModel:y,dataLen:S,countyArr:T,inputStr:d,breadcrumbItem:e,listItem:R,showPopCardData:o,totalPage:w,pageNow:p,paginationKey:M,classDataFilter:V,submitDataFilter:q,changePage:J,img01:A,img02:L,img03:U,img04:B,img05:E,img06:K,img07:O}}},ve={class:"mx-auto mt-[60px] mb-[120px] min-h-[80vh] max-w-[1110px] px-[15px]"},he={class:"mb-[60px] flex flex-col md:flex-row"},be=["value","selected"],xe=a("option",{value:"\u8ACB\u9078\u64C7\u4E3B\u984C",selected:""},"\u8ACB\u9078\u64C7\u4E3B\u984C",-1),ye=["value"],Se=a("span",{class:""},"\u641C\u2003\u2003\u5C0B",-1),we={key:0},De={class:"mb-5 flex items-center justify-center text-lg text-[#61795d]"},ke=a("p",null,"\u76EE\u524D\u6C92\u6709\u8CC7\u6599",-1),Ce=a("h2",{class:"mb-3 text-4xl font-thin"},"\u71B1\u9580\u4E3B\u984C",-1),Pe={class:"mb-3 grid grid-cols-2 gap-x-[15px] md:grid-cols-4"},Te={key:1},Me={class:"mb-3 flex items-center text-4xl font-thin"},Fe=j(" \u641C\u5C0B\u7D50\u679C "),We={class:"ml-4 text-lg"},je=j(" \u5171 "),Ne={class:"text-orange-500"},Ve=j(" \u7B46 "),Ie={class:"grid grid-cols-1 gap-x-[30px] md:grid-cols-4"},Ae={class:"mt-10 flex justify-center"};function Le(z,i,_,t,g,P){const T=Q,x=ne,y=Z,d=te,S=se,o=Y,M=ae,p=$,w=X;return l(),u(b,null,[h(T,{titleContent:"\u63A2\u7D22\u666F\u9EDE"}),h(w,null,{default:de(()=>{var m;return[a("main",ve,[t.breadcrumbItem.length>0?(l(),k(x,{key:0,class:"mb-8","breadcrumb-li":t.breadcrumbItem},null,8,["breadcrumb-li"])):pe("",!0),a("section",he,[F(a("select",{class:"mb-2 cursor-pointer rounded-md border-[#e5e5e5] pl-[30px] text-[#6e7d60] focus:border-[#7f977b] focus:ring-[#7f977b] md:mr-[15px] md:mb-0 md:w-60","onUpdate:modelValue":i[0]||(i[0]=e=>t.citySelectModel=e)},[(l(!0),u(b,null,C(t.countyArr,e=>(l(),u("option",{key:e.cityTW,value:e.cityTW,selected:e.cityTW==="\u5168\u90E8\u7E23\u5E02"},W(e.cityTW),9,be))),128))],512),[[I,t.citySelectModel]]),F(a("select",{class:"mb-2 rounded-md border-[#e5e5e5] pl-[30px] text-[#6e7d60] focus:border-[#7f977b] focus:ring-[#7f977b] md:mr-[15px] md:mb-0 md:w-60","onUpdate:modelValue":i[1]||(i[1]=e=>t.classSelectModel=e)},[xe,(l(!0),u(b,null,C(t.listItem,e=>(l(),u("option",{key:e.title,value:e.title},W(e.title),9,ye))),128))],512),[[I,t.classSelectModel]]),F(a("input",{type:"text",class:"mb-2 flex-1 rounded-md border-[#e5e5e5] bg-[#f9f9f9] pl-[30px] focus:border-[#7f977b] focus:bg-white focus:ring-[#7f977b] md:mr-[15px] md:mb-0",placeholder:"\u4F60\u60F3\u53BB\u54EA\u88E1\uFF1F\u8ACB\u8F38\u5165\u95DC\u9375\u5B57","onUpdate:modelValue":i[2]||(i[2]=e=>t.inputStr=e),onKeyup:i[3]||(i[3]=_e((...e)=>t.submitDataFilter&&t.submitDataFilter(...e),["enter"]))},null,544),[[me,t.inputStr]]),a("button",{type:"button",class:"flex h-[50px] items-center justify-center rounded-md bg-[#7f977b] text-white hover:bg-[#647a60] active:ring-4 active:ring-[#647a6060] md:w-[210px]",onClick:i[4]||(i[4]=(...e)=>t.submitDataFilter&&t.submitDataFilter(...e))},[h(y,{class:"mr-5 mt-[3px]"}),Se])]),a("section",null,[((m=t.showPopCardData)==null?void 0:m.length)===0?(l(),u("div",we,[a("div",De,[h(d,{class:"mt-[2px] mr-2"}),ke]),Ce,a("ul",Pe,[(l(!0),u(b,null,C(t.listItem,e=>(l(),k(S,{onEmitClassData:t.classDataFilter,title:e.title,img:e.img,key:e},null,8,["onEmitClassData","title","img"]))),128))])])):(l(),u("div",Te,[a("h2",Me,[Fe,a("p",We,[je,a("span",Ne,W(t.dataLen),1),Ve])]),a("ul",Ie,[(l(!0),u(b,null,C(t.showPopCardData,e=>(l(),k(o,{key:e.ScenicSpotID,id:e.ScenicSpotID,title:e.ScenicSpotName,imageUrl:e.Picture.PictureUrl1,address:e.Address},null,8,["id","title","imageUrl","address"]))),128))]),a("div",Ae,[(l(),k(M,{"page-now":t.pageNow,"total-page":t.totalPage,onChangePage:t.changePage,class:"mx-auto mt-20",key:t.paginationKey},null,8,["page-now","total-page","onChangePage"]))])]))])]),h(p)]}),_:1})],64)}var Re=ge(fe,[["render",Le]]);export{Re as default};