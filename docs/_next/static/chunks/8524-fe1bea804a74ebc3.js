"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8524],{1375:function(e,t,r){r.d(t,{f:function(){return eg}});var o=r(2784),n=r(1464),l=r(5149),a=r(1319),i=Object.defineProperty,c=Object.defineProperties,s=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable,p=(e,t,r)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,m=(e,t)=>{for(var r in t||(t={}))d.call(t,r)&&p(e,r,t[r]);if(u)for(var r of u(t))f.call(t,r)&&p(e,r,t[r]);return e},y=(e,t)=>c(e,s(t)),b=(0,a.k)(e=>({root:y(m({},e.fn.cover()),{display:"flex",alignItems:"center",justifyContent:"center",overflow:"hidden"})})),h=r(3712),v=Object.defineProperty,g=Object.defineProperties,w=Object.getOwnPropertyDescriptors,S=Object.getOwnPropertySymbols,E=Object.prototype.hasOwnProperty,O=Object.prototype.propertyIsEnumerable,P=(e,t,r)=>t in e?v(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,C=(e,t)=>{for(var r in t||(t={}))E.call(t,r)&&P(e,r,t[r]);if(S)for(var r of S(t))O.call(t,r)&&P(e,r,t[r]);return e},T=(e,t)=>g(e,w(t));let x={in:{opacity:1,transform:"scale(1)"},out:{opacity:0,transform:`scale(.9) translateY(${(0,h.h)(10)})`},transitionProperty:"transform, opacity"},N={fade:{in:{opacity:1},out:{opacity:0},transitionProperty:"opacity"},scale:{in:{opacity:1,transform:"scale(1)"},out:{opacity:0,transform:"scale(0)"},common:{transformOrigin:"top"},transitionProperty:"transform, opacity"},"scale-y":{in:{opacity:1,transform:"scaleY(1)"},out:{opacity:0,transform:"scaleY(0)"},common:{transformOrigin:"top"},transitionProperty:"transform, opacity"},"scale-x":{in:{opacity:1,transform:"scaleX(1)"},out:{opacity:0,transform:"scaleX(0)"},common:{transformOrigin:"left"},transitionProperty:"transform, opacity"},"skew-up":{in:{opacity:1,transform:"translateY(0) skew(0deg, 0deg)"},out:{opacity:0,transform:`translateY(-${(0,h.h)(20)}) skew(-10deg, -5deg)`},common:{transformOrigin:"top"},transitionProperty:"transform, opacity"},"skew-down":{in:{opacity:1,transform:"translateY(0) skew(0deg, 0deg)"},out:{opacity:0,transform:`translateY(${(0,h.h)(20)}) skew(-10deg, -5deg)`},common:{transformOrigin:"bottom"},transitionProperty:"transform, opacity"},"rotate-left":{in:{opacity:1,transform:"translateY(0) rotate(0deg)"},out:{opacity:0,transform:`translateY(${(0,h.h)(20)}) rotate(-5deg)`},common:{transformOrigin:"bottom"},transitionProperty:"transform, opacity"},"rotate-right":{in:{opacity:1,transform:"translateY(0) rotate(0deg)"},out:{opacity:0,transform:`translateY(${(0,h.h)(20)}) rotate(5deg)`},common:{transformOrigin:"top"},transitionProperty:"transform, opacity"},"slide-down":{in:{opacity:1,transform:"translateY(0)"},out:{opacity:0,transform:"translateY(-100%)"},common:{transformOrigin:"top"},transitionProperty:"transform, opacity"},"slide-up":{in:{opacity:1,transform:"translateY(0)"},out:{opacity:0,transform:"translateY(100%)"},common:{transformOrigin:"bottom"},transitionProperty:"transform, opacity"},"slide-left":{in:{opacity:1,transform:"translateX(0)"},out:{opacity:0,transform:"translateX(100%)"},common:{transformOrigin:"left"},transitionProperty:"transform, opacity"},"slide-right":{in:{opacity:1,transform:"translateX(0)"},out:{opacity:0,transform:"translateX(-100%)"},common:{transformOrigin:"right"},transitionProperty:"transform, opacity"},pop:T(C({},x),{common:{transformOrigin:"center center"}}),"pop-bottom-left":T(C({},x),{common:{transformOrigin:"bottom left"}}),"pop-bottom-right":T(C({},x),{common:{transformOrigin:"bottom right"}}),"pop-top-left":T(C({},x),{common:{transformOrigin:"top left"}}),"pop-top-right":T(C({},x),{common:{transformOrigin:"top right"}})};var R=Object.defineProperty,z=Object.getOwnPropertySymbols,k=Object.prototype.hasOwnProperty,_=Object.prototype.propertyIsEnumerable,j=(e,t,r)=>t in e?R(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,A=(e,t)=>{for(var r in t||(t={}))k.call(t,r)&&j(e,r,t[r]);if(z)for(var r of z(t))_.call(t,r)&&j(e,r,t[r]);return e};let D={entering:"in",entered:"in",exiting:"out",exited:"out","pre-exiting":"out","pre-entering":"out"};var L=r(8837),I=r(5913);function M({keepMounted:e,transition:t,duration:r=250,exitDuration:n=r,mounted:a,children:i,timingFunction:c,onExit:s,onEntered:u,onEnter:d,onExited:f}){let{transitionDuration:p,transitionStatus:m,transitionTimingFunction:y}=function({duration:e,exitDuration:t,timingFunction:r,mounted:n,onEnter:a,onExit:i,onEntered:c,onExited:s}){let u=(0,l.rZ)(),d=(0,L.J)(),f=!!u.respectReducedMotion&&d,[p,m]=(0,o.useState)(f?0:e),[y,b]=(0,o.useState)(n?"entered":"exited"),h=(0,o.useRef)(-1),v=r=>{let o=r?a:i,n=r?c:s;b(r?"pre-entering":"pre-exiting"),window.clearTimeout(h.current);let l=f?0:r?e:t;if(m(l),0===l)"function"==typeof o&&o(),"function"==typeof n&&n(),b(r?"entered":"exited");else{let e=window.setTimeout(()=>{"function"==typeof o&&o(),b(r?"entering":"exiting")},10);h.current=window.setTimeout(()=>{window.clearTimeout(e),"function"==typeof n&&n(),b(r?"entered":"exited")},l)}};return(0,I.l)(()=>{v(n)},[n]),(0,o.useEffect)(()=>()=>window.clearTimeout(h.current),[]),{transitionDuration:p,transitionStatus:y,transitionTimingFunction:r||u.transitionTimingFunction}}({mounted:a,exitDuration:n,duration:r,timingFunction:c,onExit:s,onEntered:u,onEnter:d,onExited:f});return 0===p?a?o.createElement(o.Fragment,null,i({})):e?i({display:"none"}):null:"exited"===m?e?i({display:"none"}):null:o.createElement(o.Fragment,null,i(function({transition:e,state:t,duration:r,timingFunction:o}){let n={transitionDuration:`${r}ms`,transitionTimingFunction:o};return"string"==typeof e?e in N?A(A(A({transitionProperty:N[e].transitionProperty},n),N[e].common),N[e][D[t]]):null:A(A(A({transitionProperty:e.transitionProperty},n),e.common),e[D[t]])}({transition:t,duration:p,state:m,timingFunction:y})))}M.displayName="@mantine/core/Transition";var Y=r(278),H=r(3607),$=r(5673),Z=Object.defineProperty,U=Object.defineProperties,X=Object.getOwnPropertyDescriptors,W=Object.getOwnPropertySymbols,B=Object.prototype.hasOwnProperty,F=Object.prototype.propertyIsEnumerable,V=(e,t,r)=>t in e?Z(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,q=(e,t)=>{for(var r in t||(t={}))B.call(t,r)&&V(e,r,t[r]);if(W)for(var r of W(t))F.call(t,r)&&V(e,r,t[r]);return e},J=(e,t)=>U(e,X(t)),G=(0,a.k)((e,{color:t,opacity:r,blur:o,radius:n,gradient:l,fixed:a,zIndex:i})=>({root:J(q({},e.fn.cover(0)),{position:a?"fixed":"absolute",backgroundColor:l?void 0:e.fn.rgba(t,r),backgroundImage:l,backdropFilter:o?`blur(${(0,h.h)(o)})`:void 0,borderRadius:e.fn.radius(n),zIndex:i,"&[data-center]":{display:"flex",alignItems:"center",justifyContent:"center"}})})),K=Object.defineProperty,Q=Object.getOwnPropertySymbols,ee=Object.prototype.hasOwnProperty,et=Object.prototype.propertyIsEnumerable,er=(e,t,r)=>t in e?K(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,eo=(e,t)=>{for(var r in t||(t={}))ee.call(t,r)&&er(e,r,t[r]);if(Q)for(var r of Q(t))et.call(t,r)&&er(e,r,t[r]);return e},en=(e,t)=>{var r={};for(var o in e)ee.call(e,o)&&0>t.indexOf(o)&&(r[o]=e[o]);if(null!=e&&Q)for(var o of Q(e))0>t.indexOf(o)&&et.call(e,o)&&(r[o]=e[o]);return r};let el={opacity:.6,color:"#000",zIndex:(0,n.w)("modal"),radius:0},ea=(0,o.forwardRef)((e,t)=>{let r=(0,l.N4)("Overlay",el,e),{variant:n,opacity:a,color:i,blur:c,gradient:s,zIndex:u,radius:d,children:f,className:p,classNames:m,styles:y,unstyled:b,center:h,fixed:v}=r,g=en(r,["variant","opacity","color","blur","gradient","zIndex","radius","children","className","classNames","styles","unstyled","center","fixed"]),{classes:w,cx:S}=G({color:i,opacity:a,blur:c,radius:d,gradient:s,fixed:v,zIndex:u},{name:"Overlay",classNames:m,styles:y,unstyled:b,variant:n});return o.createElement(Y.x,eo({ref:t,className:S(w.root,p),"data-center":h||void 0},g),f)});ea.displayName="@mantine/core/Overlay";let ei=(0,$.F)(ea);var ec=Object.defineProperty,es=Object.defineProperties,eu=Object.getOwnPropertyDescriptors,ed=Object.getOwnPropertySymbols,ef=Object.prototype.hasOwnProperty,ep=Object.prototype.propertyIsEnumerable,em=(e,t,r)=>t in e?ec(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,ey=(e,t)=>{for(var r in t||(t={}))ef.call(t,r)&&em(e,r,t[r]);if(ed)for(var r of ed(t))ep.call(t,r)&&em(e,r,t[r]);return e},eb=(e,t)=>es(e,eu(t)),eh=(e,t)=>{var r={};for(var o in e)ef.call(e,o)&&0>t.indexOf(o)&&(r[o]=e[o]);if(null!=e&&ed)for(var o of ed(e))0>t.indexOf(o)&&ep.call(e,o)&&(r[o]=e[o]);return r};let ev={overlayOpacity:.75,transitionDuration:0,radius:0,zIndex:(0,n.w)("overlay")},eg=(0,o.forwardRef)((e,t)=>{let r=(0,l.N4)("LoadingOverlay",ev,e),{className:n,visible:a,loaderProps:i,overlayOpacity:c,overlayColor:s,transitionDuration:u,exitTransitionDuration:d,zIndex:f,style:p,loader:m,radius:y,overlayBlur:h,unstyled:v,variant:g,keepMounted:w}=r,S=eh(r,["className","visible","loaderProps","overlayOpacity","overlayColor","transitionDuration","exitTransitionDuration","zIndex","style","loader","radius","overlayBlur","unstyled","variant","keepMounted"]),{classes:E,cx:O,theme:P}=b(null,{name:"LoadingOverlay",unstyled:v,variant:g}),C=`calc(${f} + 1)`;return o.createElement(M,{keepMounted:w,duration:u,exitDuration:d,mounted:a,transition:"fade"},e=>o.createElement(Y.x,ey({className:O(E.root,n),style:eb(ey(ey({},e),p),{zIndex:f}),ref:t},S),m?o.createElement("div",{style:{zIndex:C}},m):o.createElement(H.a,ey({style:{zIndex:C}},i)),o.createElement(ei,{opacity:c,zIndex:f,radius:y,blur:h,unstyled:v,color:s||("dark"===P.colorScheme?P.colors.dark[5]:P.white)})))});eg.displayName="@mantine/core/LoadingOverlay"},9674:function(e,t,r){r.d(t,{x:function(){return eb}});var o=r(2784),n=r(7896),l=r(8316);function a(...e){return t=>e.forEach(e=>{var r;"function"==typeof(r=e)?r(t):null!=r&&(r.current=t)})}function i(...e){return(0,o.useCallback)(a(...e),e)}let c=(0,o.forwardRef)((e,t)=>{let{children:r,...l}=e,a=o.Children.toArray(r),i=a.find(d);if(i){let e=i.props.children,r=a.map(t=>t!==i?t:o.Children.count(e)>1?o.Children.only(null):(0,o.isValidElement)(e)?e.props.children:null);return(0,o.createElement)(s,(0,n.Z)({},l,{ref:t}),(0,o.isValidElement)(e)?(0,o.cloneElement)(e,void 0,r):null)}return(0,o.createElement)(s,(0,n.Z)({},l,{ref:t}),r)});c.displayName="Slot";let s=(0,o.forwardRef)((e,t)=>{let{children:r,...n}=e;return(0,o.isValidElement)(r)?(0,o.cloneElement)(r,{...function(e,t){let r={...t};for(let o in t){let n=e[o],l=t[o],a=/^on[A-Z]/.test(o);a?n&&l?r[o]=(...e)=>{l(...e),n(...e)}:n&&(r[o]=n):"style"===o?r[o]={...n,...l}:"className"===o&&(r[o]=[n,l].filter(Boolean).join(" "))}return{...e,...r}}(n,r.props),ref:a(t,r.ref)}):o.Children.count(r)>1?o.Children.only(null):null});s.displayName="SlotClone";let u=({children:e})=>(0,o.createElement)(o.Fragment,null,e);function d(e){return(0,o.isValidElement)(e)&&e.type===u}let f=["a","button","div","h2","h3","img","label","li","nav","ol","p","span","svg","ul"].reduce((e,t)=>{let r=(0,o.forwardRef)((e,r)=>{let{asChild:l,...a}=e,i=l?c:t;return(0,o.useEffect)(()=>{window[Symbol.for("radix-ui")]=!0},[]),(0,o.createElement)(i,(0,n.Z)({},a,{ref:r}))});return r.displayName=`Primitive.${t}`,{...e,[t]:r}},{}),p=Boolean(null==globalThis?void 0:globalThis.document)?o.useLayoutEffect:()=>{},m=e=>{let{present:t,children:r}=e,n=function(e){var t;let[r,n]=(0,o.useState)(),a=(0,o.useRef)({}),i=(0,o.useRef)(e),c=(0,o.useRef)("none"),[s,u]=(t={mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}},(0,o.useReducer)((e,r)=>{let o=t[e][r];return null!=o?o:e},e?"mounted":"unmounted"));return(0,o.useEffect)(()=>{let e=y(a.current);c.current="mounted"===s?e:"none"},[s]),p(()=>{let t=a.current,r=i.current;if(r!==e){let o=c.current,n=y(t);e?u("MOUNT"):"none"===n||(null==t?void 0:t.display)==="none"?u("UNMOUNT"):r&&o!==n?u("ANIMATION_OUT"):u("UNMOUNT"),i.current=e}},[e,u]),p(()=>{if(r){let e=e=>{let t=y(a.current),o=t.includes(e.animationName);e.target===r&&o&&(0,l.flushSync)(()=>u("ANIMATION_END"))},t=e=>{e.target===r&&(c.current=y(a.current))};return r.addEventListener("animationstart",t),r.addEventListener("animationcancel",e),r.addEventListener("animationend",e),()=>{r.removeEventListener("animationstart",t),r.removeEventListener("animationcancel",e),r.removeEventListener("animationend",e)}}u("ANIMATION_END")},[r,u]),{isPresent:["mounted","unmountSuspended"].includes(s),ref:(0,o.useCallback)(e=>{e&&(a.current=getComputedStyle(e)),n(e)},[])}}(t),a="function"==typeof r?r({present:n.isPresent}):o.Children.only(r),c=i(n.ref,a.ref);return"function"==typeof r||n.isPresent?(0,o.cloneElement)(a,{ref:c}):null};function y(e){return(null==e?void 0:e.animationName)||"none"}function b(e){let t=(0,o.useRef)(e);return(0,o.useEffect)(()=>{t.current=e}),(0,o.useMemo)(()=>(...e)=>{var r;return null===(r=t.current)||void 0===r?void 0:r.call(t,...e)},[])}m.displayName="Presence";let h=(0,o.createContext)(void 0);function v(e,t,{checkForDefaultPrevented:r=!0}={}){return function(o){if(null==e||e(o),!1===r||!o.defaultPrevented)return null==t?void 0:t(o)}}let g="ScrollArea",[w,S]=function(e,t=[]){let r=[],n=()=>{let t=r.map(e=>(0,o.createContext)(e));return function(r){let n=(null==r?void 0:r[e])||t;return(0,o.useMemo)(()=>({[`__scope${e}`]:{...r,[e]:n}}),[r,n])}};return n.scopeName=e,[function(t,n){let l=(0,o.createContext)(n),a=r.length;function i(t){let{scope:r,children:n,...i}=t,c=(null==r?void 0:r[e][a])||l,s=(0,o.useMemo)(()=>i,Object.values(i));return(0,o.createElement)(c.Provider,{value:s},n)}return r=[...r,n],i.displayName=t+"Provider",[i,function(r,i){let c=(null==i?void 0:i[e][a])||l,s=(0,o.useContext)(c);if(s)return s;if(void 0!==n)return n;throw Error(`\`${r}\` must be used within \`${t}\``)}]},function(...e){let t=e[0];if(1===e.length)return t;let r=()=>{let r=e.map(e=>({useScope:e(),scopeName:e.scopeName}));return function(e){let n=r.reduce((t,{useScope:r,scopeName:o})=>{let n=r(e),l=n[`__scope${o}`];return{...t,...l}},{});return(0,o.useMemo)(()=>({[`__scope${t.scopeName}`]:n}),[n])}};return r.scopeName=t.scopeName,r}(n,...t)]}(g),[E,O]=w(g),P=(0,o.forwardRef)((e,t)=>{let{__scopeScrollArea:r,type:l="hover",dir:a,scrollHideDelay:c=600,...s}=e,[u,d]=(0,o.useState)(null),[p,m]=(0,o.useState)(null),[y,b]=(0,o.useState)(null),[v,g]=(0,o.useState)(null),[w,S]=(0,o.useState)(null),[O,P]=(0,o.useState)(0),[C,T]=(0,o.useState)(0),[x,N]=(0,o.useState)(!1),[R,z]=(0,o.useState)(!1),k=i(t,e=>d(e)),_=function(e){let t=(0,o.useContext)(h);return e||t||"ltr"}(a);return(0,o.createElement)(E,{scope:r,type:l,dir:_,scrollHideDelay:c,scrollArea:u,viewport:p,onViewportChange:m,content:y,onContentChange:b,scrollbarX:v,onScrollbarXChange:g,scrollbarXEnabled:x,onScrollbarXEnabledChange:N,scrollbarY:w,onScrollbarYChange:S,scrollbarYEnabled:R,onScrollbarYEnabledChange:z,onCornerWidthChange:P,onCornerHeightChange:T},(0,o.createElement)(f.div,(0,n.Z)({dir:_},s,{ref:k,style:{position:"relative","--radix-scroll-area-corner-width":O+"px","--radix-scroll-area-corner-height":C+"px",...e.style}})))}),C=(0,o.forwardRef)((e,t)=>{let{__scopeScrollArea:r,children:l,...a}=e,c=O("ScrollAreaViewport",r),s=(0,o.useRef)(null),u=i(t,s,c.onViewportChange);return(0,o.createElement)(o.Fragment,null,(0,o.createElement)("style",{dangerouslySetInnerHTML:{__html:"[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}"}}),(0,o.createElement)(f.div,(0,n.Z)({"data-radix-scroll-area-viewport":""},a,{ref:u,style:{overflowX:c.scrollbarXEnabled?"scroll":"hidden",overflowY:c.scrollbarYEnabled?"scroll":"hidden",...e.style}}),(0,o.createElement)("div",{ref:c.onContentChange,style:{minWidth:"100%",display:"table"}},l)))}),T="ScrollAreaScrollbar",x=(0,o.forwardRef)((e,t)=>{let{forceMount:r,...l}=e,a=O(T,e.__scopeScrollArea),{onScrollbarXEnabledChange:i,onScrollbarYEnabledChange:c}=a,s="horizontal"===e.orientation;return(0,o.useEffect)(()=>(s?i(!0):c(!0),()=>{s?i(!1):c(!1)}),[s,i,c]),"hover"===a.type?(0,o.createElement)(N,(0,n.Z)({},l,{ref:t,forceMount:r})):"scroll"===a.type?(0,o.createElement)(R,(0,n.Z)({},l,{ref:t,forceMount:r})):"auto"===a.type?(0,o.createElement)(z,(0,n.Z)({},l,{ref:t,forceMount:r})):"always"===a.type?(0,o.createElement)(k,(0,n.Z)({},l,{ref:t})):null}),N=(0,o.forwardRef)((e,t)=>{let{forceMount:r,...l}=e,a=O(T,e.__scopeScrollArea),[i,c]=(0,o.useState)(!1);return(0,o.useEffect)(()=>{let e=a.scrollArea,t=0;if(e){let r=()=>{window.clearTimeout(t),c(!0)},o=()=>{t=window.setTimeout(()=>c(!1),a.scrollHideDelay)};return e.addEventListener("pointerenter",r),e.addEventListener("pointerleave",o),()=>{window.clearTimeout(t),e.removeEventListener("pointerenter",r),e.removeEventListener("pointerleave",o)}}},[a.scrollArea,a.scrollHideDelay]),(0,o.createElement)(m,{present:r||i},(0,o.createElement)(z,(0,n.Z)({"data-state":i?"visible":"hidden"},l,{ref:t})))}),R=(0,o.forwardRef)((e,t)=>{var r;let{forceMount:l,...a}=e,i=O(T,e.__scopeScrollArea),c="horizontal"===e.orientation,s=q(()=>d("SCROLL_END"),100),[u,d]=(r={hidden:{SCROLL:"scrolling"},scrolling:{SCROLL_END:"idle",POINTER_ENTER:"interacting"},interacting:{SCROLL:"interacting",POINTER_LEAVE:"idle"},idle:{HIDE:"hidden",SCROLL:"scrolling",POINTER_ENTER:"interacting"}},(0,o.useReducer)((e,t)=>{let o=r[e][t];return null!=o?o:e},"hidden"));return(0,o.useEffect)(()=>{if("idle"===u){let e=window.setTimeout(()=>d("HIDE"),i.scrollHideDelay);return()=>window.clearTimeout(e)}},[u,i.scrollHideDelay,d]),(0,o.useEffect)(()=>{let e=i.viewport,t=c?"scrollLeft":"scrollTop";if(e){let r=e[t],o=()=>{let o=e[t],n=r!==o;n&&(d("SCROLL"),s()),r=o};return e.addEventListener("scroll",o),()=>e.removeEventListener("scroll",o)}},[i.viewport,c,d,s]),(0,o.createElement)(m,{present:l||"hidden"!==u},(0,o.createElement)(k,(0,n.Z)({"data-state":"hidden"===u?"hidden":"visible"},a,{ref:t,onPointerEnter:v(e.onPointerEnter,()=>d("POINTER_ENTER")),onPointerLeave:v(e.onPointerLeave,()=>d("POINTER_LEAVE"))})))}),z=(0,o.forwardRef)((e,t)=>{let r=O(T,e.__scopeScrollArea),{forceMount:l,...a}=e,[i,c]=(0,o.useState)(!1),s="horizontal"===e.orientation,u=q(()=>{if(r.viewport){let e=r.viewport.offsetWidth<r.viewport.scrollWidth,t=r.viewport.offsetHeight<r.viewport.scrollHeight;c(s?e:t)}},10);return J(r.viewport,u),J(r.content,u),(0,o.createElement)(m,{present:l||i},(0,o.createElement)(k,(0,n.Z)({"data-state":i?"visible":"hidden"},a,{ref:t})))}),k=(0,o.forwardRef)((e,t)=>{let{orientation:r="vertical",...l}=e,a=O(T,e.__scopeScrollArea),i=(0,o.useRef)(null),c=(0,o.useRef)(0),[s,u]=(0,o.useState)({content:0,viewport:0,scrollbar:{size:0,paddingStart:0,paddingEnd:0}}),d=X(s.viewport,s.content),f={...l,sizes:s,onSizesChange:u,hasThumb:Boolean(d>0&&d<1),onThumbChange:e=>i.current=e,onThumbPointerUp:()=>c.current=0,onThumbPointerDown:e=>c.current=e};function p(e,t){return function(e,t,r,o="ltr"){let n=W(r),l=t||n/2,a=r.scrollbar.paddingStart+l,i=r.scrollbar.size-r.scrollbar.paddingEnd-(n-l),c=r.content-r.viewport,s=F([a,i],"ltr"===o?[0,c]:[-1*c,0]);return s(e)}(e,c.current,s,t)}return"horizontal"===r?(0,o.createElement)(_,(0,n.Z)({},f,{ref:t,onThumbPositionChange:()=>{if(a.viewport&&i.current){let e=a.viewport.scrollLeft,t=B(e,s,a.dir);i.current.style.transform=`translate3d(${t}px, 0, 0)`}},onWheelScroll:e=>{a.viewport&&(a.viewport.scrollLeft=e)},onDragScroll:e=>{a.viewport&&(a.viewport.scrollLeft=p(e,a.dir))}})):"vertical"===r?(0,o.createElement)(j,(0,n.Z)({},f,{ref:t,onThumbPositionChange:()=>{if(a.viewport&&i.current){let e=a.viewport.scrollTop,t=B(e,s);i.current.style.transform=`translate3d(0, ${t}px, 0)`}},onWheelScroll:e=>{a.viewport&&(a.viewport.scrollTop=e)},onDragScroll:e=>{a.viewport&&(a.viewport.scrollTop=p(e))}})):null}),_=(0,o.forwardRef)((e,t)=>{let{sizes:r,onSizesChange:l,...a}=e,c=O(T,e.__scopeScrollArea),[s,u]=(0,o.useState)(),d=(0,o.useRef)(null),f=i(t,d,c.onScrollbarXChange);return(0,o.useEffect)(()=>{d.current&&u(getComputedStyle(d.current))},[d]),(0,o.createElement)(L,(0,n.Z)({"data-orientation":"horizontal"},a,{ref:f,sizes:r,style:{bottom:0,left:"rtl"===c.dir?"var(--radix-scroll-area-corner-width)":0,right:"ltr"===c.dir?"var(--radix-scroll-area-corner-width)":0,"--radix-scroll-area-thumb-width":W(r)+"px",...e.style},onThumbPointerDown:t=>e.onThumbPointerDown(t.x),onDragScroll:t=>e.onDragScroll(t.x),onWheelScroll:(t,r)=>{if(c.viewport){let o=c.viewport.scrollLeft+t.deltaX;e.onWheelScroll(o),o>0&&o<r&&t.preventDefault()}},onResize:()=>{d.current&&c.viewport&&s&&l({content:c.viewport.scrollWidth,viewport:c.viewport.offsetWidth,scrollbar:{size:d.current.clientWidth,paddingStart:U(s.paddingLeft),paddingEnd:U(s.paddingRight)}})}}))}),j=(0,o.forwardRef)((e,t)=>{let{sizes:r,onSizesChange:l,...a}=e,c=O(T,e.__scopeScrollArea),[s,u]=(0,o.useState)(),d=(0,o.useRef)(null),f=i(t,d,c.onScrollbarYChange);return(0,o.useEffect)(()=>{d.current&&u(getComputedStyle(d.current))},[d]),(0,o.createElement)(L,(0,n.Z)({"data-orientation":"vertical"},a,{ref:f,sizes:r,style:{top:0,right:"ltr"===c.dir?0:void 0,left:"rtl"===c.dir?0:void 0,bottom:"var(--radix-scroll-area-corner-height)","--radix-scroll-area-thumb-height":W(r)+"px",...e.style},onThumbPointerDown:t=>e.onThumbPointerDown(t.y),onDragScroll:t=>e.onDragScroll(t.y),onWheelScroll:(t,r)=>{if(c.viewport){let o=c.viewport.scrollTop+t.deltaY;e.onWheelScroll(o),o>0&&o<r&&t.preventDefault()}},onResize:()=>{d.current&&c.viewport&&s&&l({content:c.viewport.scrollHeight,viewport:c.viewport.offsetHeight,scrollbar:{size:d.current.clientHeight,paddingStart:U(s.paddingTop),paddingEnd:U(s.paddingBottom)}})}}))}),[A,D]=w(T),L=(0,o.forwardRef)((e,t)=>{let{__scopeScrollArea:r,sizes:l,hasThumb:a,onThumbChange:c,onThumbPointerUp:s,onThumbPointerDown:u,onThumbPositionChange:d,onDragScroll:p,onWheelScroll:m,onResize:y,...h}=e,g=O(T,r),[w,S]=(0,o.useState)(null),E=i(t,e=>S(e)),P=(0,o.useRef)(null),C=(0,o.useRef)(""),x=g.viewport,N=l.content-l.viewport,R=b(m),z=b(d),k=q(y,10);function _(e){if(P.current){let t=e.clientX-P.current.left,r=e.clientY-P.current.top;p({x:t,y:r})}}return(0,o.useEffect)(()=>{let e=e=>{let t=e.target,r=null==w?void 0:w.contains(t);r&&R(e,N)};return document.addEventListener("wheel",e,{passive:!1}),()=>document.removeEventListener("wheel",e,{passive:!1})},[x,w,N,R]),(0,o.useEffect)(z,[l,z]),J(w,k),J(g.content,k),(0,o.createElement)(A,{scope:r,scrollbar:w,hasThumb:a,onThumbChange:b(c),onThumbPointerUp:b(s),onThumbPositionChange:z,onThumbPointerDown:b(u)},(0,o.createElement)(f.div,(0,n.Z)({},h,{ref:E,style:{position:"absolute",...h.style},onPointerDown:v(e.onPointerDown,e=>{if(0===e.button){let t=e.target;t.setPointerCapture(e.pointerId),P.current=w.getBoundingClientRect(),C.current=document.body.style.webkitUserSelect,document.body.style.webkitUserSelect="none",_(e)}}),onPointerMove:v(e.onPointerMove,_),onPointerUp:v(e.onPointerUp,e=>{let t=e.target;t.hasPointerCapture(e.pointerId)&&t.releasePointerCapture(e.pointerId),document.body.style.webkitUserSelect=C.current,P.current=null})})))}),I="ScrollAreaThumb",M=(0,o.forwardRef)((e,t)=>{let{forceMount:r,...l}=e,a=D(I,e.__scopeScrollArea);return(0,o.createElement)(m,{present:r||a.hasThumb},(0,o.createElement)(Y,(0,n.Z)({ref:t},l)))}),Y=(0,o.forwardRef)((e,t)=>{let{__scopeScrollArea:r,style:l,...a}=e,c=O(I,r),s=D(I,r),{onThumbPositionChange:u}=s,d=i(t,e=>s.onThumbChange(e)),p=(0,o.useRef)(),m=q(()=>{p.current&&(p.current(),p.current=void 0)},100);return(0,o.useEffect)(()=>{let e=c.viewport;if(e){let t=()=>{if(m(),!p.current){let t=V(e,u);p.current=t,u()}};return u(),e.addEventListener("scroll",t),()=>e.removeEventListener("scroll",t)}},[c.viewport,m,u]),(0,o.createElement)(f.div,(0,n.Z)({"data-state":s.hasThumb?"visible":"hidden"},a,{ref:d,style:{width:"var(--radix-scroll-area-thumb-width)",height:"var(--radix-scroll-area-thumb-height)",...l},onPointerDownCapture:v(e.onPointerDownCapture,e=>{let t=e.target,r=t.getBoundingClientRect(),o=e.clientX-r.left,n=e.clientY-r.top;s.onThumbPointerDown({x:o,y:n})}),onPointerUp:v(e.onPointerUp,s.onThumbPointerUp)}))}),H="ScrollAreaCorner",$=(0,o.forwardRef)((e,t)=>{let r=O(H,e.__scopeScrollArea),l=Boolean(r.scrollbarX&&r.scrollbarY),a="scroll"!==r.type&&l;return a?(0,o.createElement)(Z,(0,n.Z)({},e,{ref:t})):null}),Z=(0,o.forwardRef)((e,t)=>{let{__scopeScrollArea:r,...l}=e,a=O(H,r),[i,c]=(0,o.useState)(0),[s,u]=(0,o.useState)(0),d=Boolean(i&&s);return J(a.scrollbarX,()=>{var e;let t=(null===(e=a.scrollbarX)||void 0===e?void 0:e.offsetHeight)||0;a.onCornerHeightChange(t),u(t)}),J(a.scrollbarY,()=>{var e;let t=(null===(e=a.scrollbarY)||void 0===e?void 0:e.offsetWidth)||0;a.onCornerWidthChange(t),c(t)}),d?(0,o.createElement)(f.div,(0,n.Z)({},l,{ref:t,style:{width:i,height:s,position:"absolute",right:"ltr"===a.dir?0:void 0,left:"rtl"===a.dir?0:void 0,bottom:0,...e.style}})):null});function U(e){return e?parseInt(e,10):0}function X(e,t){let r=e/t;return isNaN(r)?0:r}function W(e){let t=X(e.viewport,e.content),r=e.scrollbar.paddingStart+e.scrollbar.paddingEnd,o=(e.scrollbar.size-r)*t;return Math.max(o,18)}function B(e,t,r="ltr"){let o=W(t),n=t.scrollbar.paddingStart+t.scrollbar.paddingEnd,l=t.scrollbar.size-n,a=t.content-t.viewport,i=function(e,[t,r]){return Math.min(r,Math.max(t,e))}(e,"ltr"===r?[0,a]:[-1*a,0]),c=F([0,a],[0,l-o]);return c(i)}function F(e,t){return r=>{if(e[0]===e[1]||t[0]===t[1])return t[0];let o=(t[1]-t[0])/(e[1]-e[0]);return t[0]+o*(r-e[0])}}let V=(e,t=()=>{})=>{let r={left:e.scrollLeft,top:e.scrollTop},o=0;return!function n(){let l={left:e.scrollLeft,top:e.scrollTop},a=r.left!==l.left,i=r.top!==l.top;(a||i)&&t(),r=l,o=window.requestAnimationFrame(n)}(),()=>window.cancelAnimationFrame(o)};function q(e,t){let r=b(e),n=(0,o.useRef)(0);return(0,o.useEffect)(()=>()=>window.clearTimeout(n.current),[]),(0,o.useCallback)(()=>{window.clearTimeout(n.current),n.current=window.setTimeout(r,t)},[r,t])}function J(e,t){let r=b(t);p(()=>{let t=0;if(e){let o=new ResizeObserver(()=>{cancelAnimationFrame(t),t=window.requestAnimationFrame(r)});return o.observe(e),()=>{window.cancelAnimationFrame(t),o.unobserve(e)}}},[e,r])}var G=r(5149),K=r(1319),Q=r(3712);function ee(e){return`___ref-${e||""}`}var et=(0,K.k)((e,{scrollbarSize:t,offsetScrollbars:r,scrollbarHovered:o,hidden:n})=>({root:{overflow:"hidden"},viewport:{width:"100%",height:"100%",paddingRight:r?(0,Q.h)(t):void 0,paddingBottom:r?(0,Q.h)(t):void 0},scrollbar:{display:n?"none":"flex",userSelect:"none",touchAction:"none",boxSizing:"border-box",padding:`calc(${(0,Q.h)(t)}  / 5)`,transition:"background-color 150ms ease, opacity 150ms ease","&:hover":{backgroundColor:"dark"===e.colorScheme?e.colors.dark[8]:e.colors.gray[0],[`& .${ee("thumb")}`]:{backgroundColor:"dark"===e.colorScheme?e.fn.rgba(e.white,.5):e.fn.rgba(e.black,.5)}},'&[data-orientation="vertical"]':{width:(0,Q.h)(t)},'&[data-orientation="horizontal"]':{flexDirection:"column",height:(0,Q.h)(t)},'&[data-state="hidden"]':{display:"none",opacity:0}},thumb:{ref:ee("thumb"),flex:1,backgroundColor:"dark"===e.colorScheme?e.fn.rgba(e.white,.4):e.fn.rgba(e.black,.4),borderRadius:(0,Q.h)(t),position:"relative",transition:"background-color 150ms ease",display:n?"none":void 0,overflow:"hidden","&::before":{content:'""',position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:"100%",height:"100%",minWidth:(0,Q.h)(44),minHeight:(0,Q.h)(44)}},corner:{backgroundColor:"dark"===e.colorScheme?e.colors.dark[6]:e.colors.gray[0],transition:"opacity 150ms ease",opacity:o?1:0,display:n?"none":void 0}})),er=r(278),eo=Object.defineProperty,en=Object.defineProperties,el=Object.getOwnPropertyDescriptors,ea=Object.getOwnPropertySymbols,ei=Object.prototype.hasOwnProperty,ec=Object.prototype.propertyIsEnumerable,es=(e,t,r)=>t in e?eo(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,eu=(e,t)=>{for(var r in t||(t={}))ei.call(t,r)&&es(e,r,t[r]);if(ea)for(var r of ea(t))ec.call(t,r)&&es(e,r,t[r]);return e},ed=(e,t)=>en(e,el(t)),ef=(e,t)=>{var r={};for(var o in e)ei.call(e,o)&&0>t.indexOf(o)&&(r[o]=e[o]);if(null!=e&&ea)for(var o of ea(e))0>t.indexOf(o)&&ec.call(e,o)&&(r[o]=e[o]);return r};let ep={scrollbarSize:12,scrollHideDelay:1e3,type:"hover",offsetScrollbars:!1},em=(0,o.forwardRef)((e,t)=>{let r=(0,G.N4)("ScrollArea",ep,e),{children:n,className:l,classNames:a,styles:i,scrollbarSize:c,scrollHideDelay:s,type:u,dir:d,offsetScrollbars:f,viewportRef:p,onScrollPositionChange:m,unstyled:y,variant:b,viewportProps:h}=r,v=ef(r,["children","className","classNames","styles","scrollbarSize","scrollHideDelay","type","dir","offsetScrollbars","viewportRef","onScrollPositionChange","unstyled","variant","viewportProps"]),[g,w]=(0,o.useState)(!1),S=(0,G.rZ)(),{classes:E,cx:O}=et({scrollbarSize:c,offsetScrollbars:f,scrollbarHovered:g,hidden:"never"===u},{name:"ScrollArea",classNames:a,styles:i,unstyled:y,variant:b});return o.createElement(P,{type:"never"===u?"always":u,scrollHideDelay:s,dir:d||S.dir,ref:t,asChild:!0},o.createElement(er.x,eu({className:O(E.root,l)},v),o.createElement(C,ed(eu({},h),{className:E.viewport,ref:p,onScroll:"function"==typeof m?({currentTarget:e})=>m({x:e.scrollLeft,y:e.scrollTop}):void 0}),n),o.createElement(x,{orientation:"horizontal",className:E.scrollbar,forceMount:!0,onMouseEnter:()=>w(!0),onMouseLeave:()=>w(!1)},o.createElement(M,{className:E.thumb})),o.createElement(x,{orientation:"vertical",className:E.scrollbar,forceMount:!0,onMouseEnter:()=>w(!0),onMouseLeave:()=>w(!1)},o.createElement(M,{className:E.thumb})),o.createElement($,{className:E.corner})))}),ey=(0,o.forwardRef)((e,t)=>{let r=(0,G.N4)("ScrollAreaAutosize",ep,e),{children:n,classNames:l,styles:a,scrollbarSize:i,scrollHideDelay:c,type:s,dir:u,offsetScrollbars:d,viewportRef:f,onScrollPositionChange:p,unstyled:m,sx:y,variant:b,viewportProps:h}=r,v=ef(r,["children","classNames","styles","scrollbarSize","scrollHideDelay","type","dir","offsetScrollbars","viewportRef","onScrollPositionChange","unstyled","sx","variant","viewportProps"]);return o.createElement(er.x,ed(eu({},v),{ref:t,sx:[{display:"flex"},...Array.isArray(y)?y:[y]]}),o.createElement(er.x,{sx:{display:"flex",flexDirection:"column",flex:1}},o.createElement(em,{classNames:l,styles:a,scrollHideDelay:c,scrollbarSize:i,type:s,dir:u,offsetScrollbars:d,viewportRef:f,onScrollPositionChange:p,unstyled:m,variant:b,viewportProps:h},n)))});ey.displayName="@mantine/core/ScrollAreaAutosize",em.displayName="@mantine/core/ScrollArea",em.Autosize=ey;let eb=em},6466:function(e,t,r){r.d(t,{i:function(){return z}});var o=r(2784),n=r(5149),l=r(1319),a=r(3712),i=r(3071),c=Object.defineProperty,s=Object.defineProperties,u=Object.getOwnPropertyDescriptors,d=Object.getOwnPropertySymbols,f=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,m=(e,t,r)=>t in e?c(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,y=(e,t)=>{for(var r in t||(t={}))f.call(t,r)&&m(e,r,t[r]);if(d)for(var r of d(t))p.call(t,r)&&m(e,r,t[r]);return e},b=(e,t)=>s(e,u(t)),h=(0,l.k)((e,{captionSide:t,horizontalSpacing:r,verticalSpacing:o,fontSize:n,withBorder:l,withColumnBorders:c})=>{let s=`${(0,a.h)(1)} solid ${"dark"===e.colorScheme?e.colors.dark[4]:e.colors.gray[3]}`;return{root:b(y({},e.fn.fontStyles()),{width:"100%",borderCollapse:"collapse",captionSide:t,color:"dark"===e.colorScheme?e.colors.dark[0]:e.black,lineHeight:e.lineHeight,border:l?s:void 0,"& caption":{marginTop:"top"===t?0:e.spacing.xs,marginBottom:"bottom"===t?0:e.spacing.xs,fontSize:e.fontSizes.sm,color:"dark"===e.colorScheme?e.colors.dark[2]:e.colors.gray[6]},"& thead tr th, & tfoot tr th, & tbody tr th":{textAlign:"left",fontWeight:"bold",color:"dark"===e.colorScheme?e.colors.dark[0]:e.colors.gray[7],fontSize:(0,i.a)({size:n,sizes:e.fontSizes}),padding:`${(0,i.a)({size:o,sizes:e.spacing})} ${(0,i.a)({size:r,sizes:e.spacing})}`},"& thead tr th":{borderBottom:s},"& tfoot tr th, & tbody tr th":{borderTop:s},"& tbody tr td":{padding:`${(0,i.a)({size:o,sizes:e.spacing})} ${(0,i.a)({size:r,sizes:e.spacing})}`,borderTop:s,fontSize:(0,i.a)({size:n,sizes:e.fontSizes})},"& tbody tr:first-of-type td, & tbody tr:first-of-type th":{borderTop:"none"},"& thead th, & tbody td":{borderRight:c?s:"none","&:last-of-type":{borderRight:"none",borderLeft:c?s:"none"}},"& tbody tr th":{borderRight:c?s:"none"},"&[data-striped] tbody tr:nth-of-type(odd)":{backgroundColor:"dark"===e.colorScheme?e.colors.dark[6]:e.colors.gray[0]},"&[data-hover] tbody tr":e.fn.hover({backgroundColor:"dark"===e.colorScheme?e.colors.dark[5]:e.colors.gray[1]})})}}),v=r(278),g=Object.defineProperty,w=Object.defineProperties,S=Object.getOwnPropertyDescriptors,E=Object.getOwnPropertySymbols,O=Object.prototype.hasOwnProperty,P=Object.prototype.propertyIsEnumerable,C=(e,t,r)=>t in e?g(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,T=(e,t)=>{for(var r in t||(t={}))O.call(t,r)&&C(e,r,t[r]);if(E)for(var r of E(t))P.call(t,r)&&C(e,r,t[r]);return e},x=(e,t)=>w(e,S(t)),N=(e,t)=>{var r={};for(var o in e)O.call(e,o)&&0>t.indexOf(o)&&(r[o]=e[o]);if(null!=e&&E)for(var o of E(e))0>t.indexOf(o)&&P.call(e,o)&&(r[o]=e[o]);return r};let R={striped:!1,highlightOnHover:!1,captionSide:"top",horizontalSpacing:"xs",fontSize:"sm",verticalSpacing:7,withBorder:!1,withColumnBorders:!1},z=(0,o.forwardRef)((e,t)=>{let r=(0,n.N4)("Table",R,e),{className:l,children:a,striped:i,highlightOnHover:c,captionSide:s,horizontalSpacing:u,verticalSpacing:d,fontSize:f,unstyled:p,withBorder:m,withColumnBorders:y,variant:b}=r,g=N(r,["className","children","striped","highlightOnHover","captionSide","horizontalSpacing","verticalSpacing","fontSize","unstyled","withBorder","withColumnBorders","variant"]),{classes:w,cx:S}=h({captionSide:s,verticalSpacing:d,horizontalSpacing:u,fontSize:f,withBorder:m,withColumnBorders:y},{unstyled:p,name:"Table",variant:b});return o.createElement(v.x,x(T({},g),{component:"table",ref:t,className:S(w.root,l),"data-striped":i||void 0,"data-hover":c||void 0}),a)});z.displayName="@mantine/core/Table"}}]);