"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3777],{8273:function(e,t,r){var o=r(2322),n=r(6577),i=r.n(n);let s={logo:(0,o.jsxs)("div",{style:{width:"10em",display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center"},children:[(0,o.jsx)(i(),{alt:"logo",src:"https://avatars.githubusercontent.com/u/74918176?s=96&v=4",width:24,height:24}),(0,o.jsx)("span",{children:"Project: Leight Viv"})]}),project:{link:"https://github.com/leight-core/viv"},docsRepositoryBase:"https://github.com/leight-core/viv/tree/main/nextra",footer:{text:"Project Leight Viv Documentation"},sidebar:{defaultMenuCollapseLevel:1,toggleButton:!0},banner:{key:"wip",text:"This documentation is still work in progress, so be please patient."},toc:{float:!0}};t.Z=s},7817:function(e,t,r){r.d(t,{re:function(){return f}});var o=r(2784),n=r(5666),i=r(2322),s=r(2893),a=r(2294),l=()=>(0,o.createContext)(null),c=({name:e,createStore:t,Context:r})=>function({children:s,defaults:a,state:l}){let c=(0,o.useMemo)(()=>{let r=t({defaults:a,state:l});return{name:e,state:r.getState(),store:r}},[]);return(0,i.jsx)(r.Provider,{value:c,children:(0,n.GV)(s)?(0,i.jsx)(s,{...c}):s})};function u(e,t,r){let n=(0,o.useContext)(e);if(!n)throw Error(`There is no [${t}] context available.${r?` ${r}`:""} `);return n}function d(e){return(0,o.useContext)(e)}var p=(e,t,r)=>o=>{let{store:n}=u(e,t,r);return o?(0,a.oR)(n,o):(0,a.oR)(n)},h=e=>t=>{let{store:r}=d(e)||{};return r?t?(0,a.oR)(r,t):(0,a.oR)(r):null},f=({state:e,name:t,hint:r})=>{let o=l();return{Provider:c({name:t,Context:o,createStore:({defaults:t,state:r})=>(0,s.M)((o,n,i)=>({...e({defaults:t,state:r})(o,n,i),...t}))}),useState:p(o,t,r),useOptionalState:h(o),useStore:()=>u(o,t,r).store,useOptionalStore:()=>d(o)?.store||null}}},3540:function(e,t,r){r.d(t,{Yo:function(){return h},pk:function(){return d},Wb:function(){return f}});var o=r(7817),n=r(6234),i=r(5666),s=e=>(0,i.Kn)(e)&&"toJSDate"in e,a=r(2322),l=r(4076),c=(e,t,r)=>(e||(e=t),e)?(0,i.HD)(e)?n.ou.fromISO(e).toLocaleString(r):s(e)?e.toLocaleString(r):n.ou.fromJSDate(e).toLocaleString(r):void 0,u=(0,o.re)({state:()=>()=>({toLocalDate:(e,t,r=n.ou.DATE_MED)=>c(e,t,r),toLocalDateTime:(e,t,r=n.ou.DATETIME_MED)=>c(e,t,r)}),name:"DateTimeStore",hint:"Add DateTimeStore.Provider."}),d=({...e})=>(0,a.jsx)(u.Provider,{...e}),p=e=>(0,l.$G)(Array.isArray(e)?e.filter(Boolean):e),h=({date:e,fallback:t,options:r,...o})=>{let{toLocalDate:n}=u.useState(({toLocalDate:e})=>({toLocalDate:e}));return(0,a.jsx)("span",{...o,children:n(e,t,r)})},f=({label:e,withLabel:t,namespace:r,withLabelFallback:o,values:n})=>{let{t:s}=p(r);return(0,a.jsx)(a.Fragment,{children:e?(0,i.HD)(e)?o?(0,i.HD)(t)?s(t?`${e}.${t}`:e,o,n):t:s(t?`${e}.${t}`:e,n):e:(0,i.HD)(t)?s(t):t})}},9335:function(e,t,r){r.d(t,{$$:function(){return p},N2:function(){return f},QJ:function(){return h},rm:function(){return d}});var o=r(7817),n=r(2322);r(2784);var i=r(5666);r(3848),r(7729),r(5632);var s=r(3540),a=r(5149),l=r(697),c=r(7352),u=r(1319);r(9097),(0,o.re)({state:()=>e=>({isOpened:{},open:t=>e(e=>({isOpened:{...e.isOpened,[t]:!0}})),close:t=>e(e=>({isOpened:{...e.isOpened,[t]:!1}})),setOpen:(t,r)=>e(e=>({isOpened:{...e.isOpened,[t]:r}}))}),name:"DrawerStore",hint:"Add DrawerStoreProvider"}),(0,o.re)({state:()=>e=>({isOpened:{},open:t=>e(e=>({isOpened:{...e.isOpened,[t]:!0}})),close:t=>e(e=>({isOpened:{...e.isOpened,[t]:!1}})),setOpen:(t,r)=>e(e=>({isOpened:{...e.isOpened,[t]:r}}))}),name:"ModalStore",hint:"Add ModalStoreProvider"});var d=(e,t,r)=>"dark"===e.colorScheme?t:r,p=(e,t=0)=>e.colors[e.primaryColor]?.[i.Fl({value:e.primaryShade+t,max:9})],h=(e,t=0)=>e.colors[e.primaryColor]?.[i.Fl({value:e.primaryShade+t,max:9})>=5?0:9],f=({theme:e,emotionCache:t,children:r})=>(0,n.jsx)(a.Me,{theme:{colorScheme:"light",primaryColor:"green",primaryShade:8,...e},withGlobalStyles:!0,withNormalizeCSS:!0,emotionCache:t,children:(0,n.jsx)(l.$,{children:(0,n.jsxs)(s.pk,{children:[(0,n.jsx)(c.T,{position:"top-right"}),r]})})});(0,u.k)(e=>({paper:{"&:hover":{boxShadow:e.shadows.lg}}})),(0,u.k)(e=>({link:{display:"flex",alignItems:"center",height:"50%",margin:e.spacing.xs,paddingLeft:e.spacing.md,paddingRight:e.spacing.md,textDecoration:"none",fontWeight:500,fontSize:e.fontSizes.md,color:d(e,e.white,e.black),"&:hover":{borderBottom:"1px solid",borderBottomColor:d(e,e.colors.dark[4],p(e))}},linkActive:{"&, &:hover":{fontWeight:"bold",borderBottom:"2px solid",borderBottomColor:d(e,e.colors.dark[4],p(e))}}}))},8972:function(e,t,r){r.d(t,{AK:function(){return l},G:function(){return s},ZJ:function(){return a}});var o=r(2779),n=r(7817),i=r(2322);r(2784);var s=(0,n.re)({state:()=>e=>({isBlock:!1,block:(t=!0)=>{e({isBlock:t})},unblock:()=>{e({isBlock:!1})}}),name:"BlockStore",hint:"Add BlockProvider."}),a=({isBlock:e=!1,...t})=>(0,i.jsx)(s.Provider,{defaults:{isBlock:e},...t});(0,n.re)({state:()=>(e,t)=>({total:0,isRunning:!1,isDone:!1,isError:!1,isSuccess:!1,current:0,progress:()=>e(({current:e})=>({current:e+1})),start:t=>e({isRunning:!0,total:t}),finish:(t=!1)=>e({isDone:!0,isRunning:!1,isError:t,isSuccess:!t}),error:(t=!0)=>e({isError:t,isSuccess:!t}),percent:()=>{let{current:e,total:r}=t();return 100*e/r}}),name:"LoopStore",hint:"Add LoopProvider."}),(0,n.re)({state:()=>(e,t)=>({current:0,isRunning:()=>t().current>0,inc:()=>e(({current:e})=>({current:e+1})),dec:()=>e(({current:e})=>({current:e-1}))}),name:"LoopsStore",hint:"Add LoopsProvider."});var l=o},5666:function(e,t,r){r.d(t,{Fl:function(){return d},GV:function(){return l},HD:function(){return u},Kn:function(){return c},Ox:function(){return a},ls:function(){return p}}),r(3453);var o=r(4897),n=r(9680),i=r(6985),s=r(6302);r(6867);var a=o.Mc,l=e=>n(e),c=i,u=e=>s(e),d=({min:e=0,max:t,value:r})=>Math.min(Math.max(r,e),t),p=(e,t)=>void 0===e?t:e}}]);