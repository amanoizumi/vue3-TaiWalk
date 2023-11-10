import{g as H,_ as Q,c as X}from"./axios.bf84c2f5.js";import{c as Y,_ as Z,a as $,b as ee,d as te}from"./chunk.1fe5e10c.js";import{a as se}from"./search.0e023b74.js";import{c as ae,_ as oe}from"./cityData.0468c0d6.js";import{u as ne,e as r,z as le,A as ce,o as l,b as f,w as ie,g as a,J as re,h as T,K as A,l as u,m as S,t as F,F as w,v as ue,n as de,i as W,j}from"./vendor.50d0806d.js";import{_ as me}from"./index.e40232ca.js";var I="/vue3-TaiWalk/assets/spot_01.087256fe.png",N="/vue3-TaiWalk/assets/spot_02.934ae284.png",U="/vue3-TaiWalk/assets/spot_03.22a5967d.png",B="/vue3-TaiWalk/assets/spot_04.68ae99d6.png",K="/vue3-TaiWalk/assets/spot_05.c92a0a48.png",L="/vue3-TaiWalk/assets/spot_06.645f253b.png",O="/vue3-TaiWalk/assets/spot_07.84abda0f.png";const pe={emits:{emitClassData:String},setup(E,{emit:c}){const D=ne(),s=ae,k=r("\u5168\u90E8\u7E23\u5E02"),C=r("\u8ACB\u9078\u64C7\u4E3B\u984C"),d=r(""),m=r([]),b=r(0),o=r([]);let P=1;const p=r(1),h=r(0),_=r([]),x=r([{path:"/",text:"\u9996\u9801"},{path:"/scenicSpotSearch",text:"\u63A2\u7D22\u666F\u9EDE"}]),e=r([{title:"\u81EA\u7136\u98A8\u666F\u985E",img:I},{title:"\u89C0\u5149\u5DE5\u5EE0\u985E",img:N},{title:"\u904A\u61A9\u985E",img:U},{title:"\u4F11\u9592\u8FB2\u696D\u985E",img:B},{title:"\u751F\u614B\u985E",img:K},{title:"\u6EAB\u6CC9\u985E",img:L},{title:"\u53E4\u8E5F\u985E",img:O}]),z=async()=>{try{const t=await H();m.value=t.data}catch(t){console.dir(t)}},J=()=>{o.value=[];let t=k.value,i=C.value;t==="\u5168\u90E8\u7E23\u5E02"&&(t=""),i==="\u8ACB\u9078\u64C7\u4E3B\u984C"&&(i=""),o.value=m.value,t!==""&&(o.value=q(t,o.value)),i!==""&&(o.value=V(i,o.value)),d.value!==""&&(o.value=R(d.value,o.value)),M(o.value),d.value=""},M=t=>{t.length!==0&&(_.value=Y(t,20),b.value=t.length,h.value=_.value.length,o.value=_.value[p.value-1])},R=(t,i=m.value)=>i.filter(n=>{var g,v;return((g=n.ScenicSpotName)==null?void 0:g.includes(t))||((v=n.Description)==null?void 0:v.includes(t))}),V=(t,i=m.value)=>{const y=i.filter(n=>{if(n.hasOwnProperty("Class1")&&n.Class1===t)return n;if(n.hasOwnProperty("Class2")&&n.Class2===t)return n;if(n.hasOwnProperty("Class3")&&n.Class3===t)return n});return o.value=y,M(o.value),y},q=(t,i=m.value)=>i.filter(n=>{var g,v;return((g=n.Address)==null?void 0:g.includes(t))||((v=n.City)==null?void 0:v.includes(t))}),G=t=>{p.value=t};return le(p,(t,i)=>{p.value=t,o.value=_.value[t-1]}),ce(()=>{z(),D.params.str!==void 0&&(d.value=D.params.str)}),{citySelectModel:k,classSelectModel:C,dataLen:b,countyArr:s,inputStr:d,breadcrumbItem:x,listItem:e,showPopCardData:o,totalPage:h,pageNow:p,paginationKey:P,classDataFilter:V,submitDataFilter:J,changePage:G,img01:I,img02:N,img03:U,img04:B,img05:K,img06:L,img07:O}}},_e={class:"mx-auto mt-[60px] mb-[120px] min-h-[80vh] max-w-[1110px] px-[15px]"},ge={class:"mb-[60px] flex flex-col md:flex-row"},ve=["value","selected"],fe=a("option",{value:"\u8ACB\u9078\u64C7\u4E3B\u984C",selected:""},"\u8ACB\u9078\u64C7\u4E3B\u984C",-1),be=["value"],he=a("span",{class:""},"\u641C\u2003\u2003\u5C0B",-1),xe={key:0},ye={class:"mb-5 flex items-center justify-center text-lg text-[#61795d]"},Se=a("p",null,"\u76EE\u524D\u6C92\u6709\u8CC7\u6599",-1),we=a("h2",{class:"mb-3 text-4xl font-thin"},"\u71B1\u9580\u4E3B\u984C",-1),De={class:"mb-3 grid md:grid-cols-4 grid-cols-2 gap-x-[15px]"},ke={key:1},Ce={class:"mb-3 flex items-center text-4xl font-thin"},Pe=j(" \u641C\u5C0B\u7D50\u679C "),Te={class:"ml-4 text-lg"},Fe=j(" \u5171 "),We={class:"text-orange-500"},je=j(" \u7B46 "),Me={class:"grid md:grid-cols-4 grid-cols-1 gap-x-[30px]"},Ve={class:"flex"};function Ae(E,c,D,s,k,C){const d=oe,m=se,b=Z,o=$,P=X,p=ee,h=te,_=Q;return l(),f(_,null,{default:ie(()=>{var x;return[a("main",_e,[s.breadcrumbItem.length>0?(l(),f(d,{key:0,class:"mb-8","breadcrumb-li":s.breadcrumbItem},null,8,["breadcrumb-li"])):re("",!0),a("section",ge,[T(a("select",{class:"md:mr-[15px] md:w-60 cursor-pointer md:mb-0 mb-2 rounded-md border-[#e5e5e5] pl-[30px] text-[#6e7d60] focus:border-[#7f977b] focus:ring-[#7f977b]","onUpdate:modelValue":c[0]||(c[0]=e=>s.citySelectModel=e)},[(l(!0),u(w,null,S(s.countyArr,e=>(l(),u("option",{key:e.cityTW,value:e.cityTW,selected:e.cityTW==="\u5168\u90E8\u7E23\u5E02"},F(e.cityTW),9,ve))),128))],512),[[A,s.citySelectModel]]),T(a("select",{class:"md:mr-[15px] md:w-60 rounded-md md:mb-0 mb-2 border-[#e5e5e5] pl-[30px] text-[#6e7d60] focus:border-[#7f977b] focus:ring-[#7f977b]","onUpdate:modelValue":c[1]||(c[1]=e=>s.classSelectModel=e)},[fe,(l(!0),u(w,null,S(s.listItem,e=>(l(),u("option",{key:e.title,value:e.title},F(e.title),9,be))),128))],512),[[A,s.classSelectModel]]),T(a("input",{type:"text",class:"md:mr-[15px] flex-1 md:mb-0 mb-2 rounded-md border-[#e5e5e5] bg-[#f9f9f9] pl-[30px] focus:border-[#7f977b] focus:bg-white focus:ring-[#7f977b]",placeholder:"\u4F60\u60F3\u53BB\u54EA\u88E1\uFF1F\u8ACB\u8F38\u5165\u95DC\u9375\u5B57","onUpdate:modelValue":c[2]||(c[2]=e=>s.inputStr=e),onKeyup:c[3]||(c[3]=de((...e)=>s.submitDataFilter&&s.submitDataFilter(...e),["enter"]))},null,544),[[ue,s.inputStr]]),a("button",{type:"button",class:"flex h-[50px] md:w-[210px] items-center justify-center rounded-md bg-[#7f977b] text-white hover:bg-[#647a60]",onClick:c[4]||(c[4]=(...e)=>s.submitDataFilter&&s.submitDataFilter(...e))},[W(m,{class:"mr-5 mt-[3px]"}),he])]),a("section",null,[((x=s.showPopCardData)==null?void 0:x.length)===0?(l(),u("div",xe,[a("div",ye,[W(b,{class:"mt-[2px] mr-2"}),Se]),we,a("ul",De,[(l(!0),u(w,null,S(s.listItem,e=>(l(),f(o,{onEmitClassData:s.classDataFilter,title:e.title,img:e.img,key:e},null,8,["onEmitClassData","title","img"]))),128))])])):(l(),u("div",ke,[a("h2",Ce,[Pe,a("p",Te,[Fe,a("span",We,F(s.dataLen),1),je])]),a("ul",Me,[(l(!0),u(w,null,S(s.showPopCardData,e=>(l(),f(P,{key:e.ScenicSpotID,id:e.ScenicSpotID,title:e.ScenicSpotName,imageUrl:e.Picture.PictureUrl1,address:e.Address},null,8,["id","title","imageUrl","address"]))),128))]),a("div",Ve,[(l(),f(p,{"page-now":s.pageNow,"total-page":s.totalPage,onChangePage:s.changePage,class:"mx-auto mt-20",key:s.paginationKey},null,8,["page-now","total-page","onChangePage"]))])]))])]),W(h)]}),_:1})}var Oe=me(pe,[["render",Ae]]);export{Oe as default};