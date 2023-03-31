"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[301],{4678:function(e,r,t){t.d(r,{Z:function(){return w}});var o=t(2784),n=t(5149),l=t(1319),a=t(3071),i=t(3712);let c={left:"flex-start",center:"center",right:"flex-end",apart:"space-between"};var s=(0,l.k)((e,{spacing:r,position:t,noWrap:o,grow:n,align:l,count:s})=>({root:{boxSizing:"border-box",display:"flex",flexDirection:"row",alignItems:l||"center",flexWrap:o?"nowrap":"wrap",justifyContent:c[t],gap:(0,a.a)({size:r,sizes:e.spacing}),"& > *":{boxSizing:"border-box",maxWidth:n?`calc(${100/s}% - (${(0,i.h)((0,a.a)({size:r,sizes:e.spacing}))} - ${(0,a.a)({size:r,sizes:e.spacing})} / ${s}))`:void 0,flexGrow:n?1:0}}})),d=t(278),u=Object.defineProperty,f=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable,m=(e,r,t)=>r in e?u(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,b=(e,r)=>{for(var t in r||(r={}))p.call(r,t)&&m(e,t,r[t]);if(f)for(var t of f(r))h.call(r,t)&&m(e,t,r[t]);return e},v=(e,r)=>{var t={};for(var o in e)p.call(e,o)&&0>r.indexOf(o)&&(t[o]=e[o]);if(null!=e&&f)for(var o of f(e))0>r.indexOf(o)&&h.call(e,o)&&(t[o]=e[o]);return t};let g={position:"left",spacing:"md"},w=(0,o.forwardRef)((e,r)=>{let t=(0,n.N4)("Group",g,e),{className:l,position:a,align:i,children:c,noWrap:u,grow:f,spacing:p,unstyled:h,variant:m}=t,w=v(t,["className","position","align","children","noWrap","grow","spacing","unstyled","variant"]),y=o.Children.toArray(c).filter(Boolean),{classes:S,cx:E}=s({align:i,grow:f,noWrap:u,spacing:p,position:a,count:y.length},{unstyled:h,name:"Group",variant:m});return o.createElement(d.x,b({className:E(S.root,l),ref:r},w),y)});w.displayName="@mantine/core/Group"},9674:function(e,r,t){t.d(r,{x:function(){return eb}});var o=t(2784),n=t(7896),l=t(8316);function a(...e){return r=>e.forEach(e=>{var t;"function"==typeof(t=e)?t(r):null!=t&&(t.current=r)})}function i(...e){return(0,o.useCallback)(a(...e),e)}let c=(0,o.forwardRef)((e,r)=>{let{children:t,...l}=e,a=o.Children.toArray(t),i=a.find(u);if(i){let e=i.props.children,t=a.map(r=>r!==i?r:o.Children.count(e)>1?o.Children.only(null):(0,o.isValidElement)(e)?e.props.children:null);return(0,o.createElement)(s,(0,n.Z)({},l,{ref:r}),(0,o.isValidElement)(e)?(0,o.cloneElement)(e,void 0,t):null)}return(0,o.createElement)(s,(0,n.Z)({},l,{ref:r}),t)});c.displayName="Slot";let s=(0,o.forwardRef)((e,r)=>{let{children:t,...n}=e;return(0,o.isValidElement)(t)?(0,o.cloneElement)(t,{...function(e,r){let t={...r};for(let o in r){let n=e[o],l=r[o],a=/^on[A-Z]/.test(o);a?n&&l?t[o]=(...e)=>{l(...e),n(...e)}:n&&(t[o]=n):"style"===o?t[o]={...n,...l}:"className"===o&&(t[o]=[n,l].filter(Boolean).join(" "))}return{...e,...t}}(n,t.props),ref:a(r,t.ref)}):o.Children.count(t)>1?o.Children.only(null):null});s.displayName="SlotClone";let d=({children:e})=>(0,o.createElement)(o.Fragment,null,e);function u(e){return(0,o.isValidElement)(e)&&e.type===d}let f=["a","button","div","h2","h3","img","label","li","nav","ol","p","span","svg","ul"].reduce((e,r)=>{let t=(0,o.forwardRef)((e,t)=>{let{asChild:l,...a}=e,i=l?c:r;return(0,o.useEffect)(()=>{window[Symbol.for("radix-ui")]=!0},[]),(0,o.createElement)(i,(0,n.Z)({},a,{ref:t}))});return t.displayName=`Primitive.${r}`,{...e,[r]:t}},{}),p=Boolean(null==globalThis?void 0:globalThis.document)?o.useLayoutEffect:()=>{},h=e=>{let{present:r,children:t}=e,n=function(e){var r;let[t,n]=(0,o.useState)(),a=(0,o.useRef)({}),i=(0,o.useRef)(e),c=(0,o.useRef)("none"),[s,d]=(r={mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}},(0,o.useReducer)((e,t)=>{let o=r[e][t];return null!=o?o:e},e?"mounted":"unmounted"));return(0,o.useEffect)(()=>{let e=m(a.current);c.current="mounted"===s?e:"none"},[s]),p(()=>{let r=a.current,t=i.current;if(t!==e){let o=c.current,n=m(r);e?d("MOUNT"):"none"===n||(null==r?void 0:r.display)==="none"?d("UNMOUNT"):t&&o!==n?d("ANIMATION_OUT"):d("UNMOUNT"),i.current=e}},[e,d]),p(()=>{if(t){let e=e=>{let r=m(a.current),o=r.includes(e.animationName);e.target===t&&o&&(0,l.flushSync)(()=>d("ANIMATION_END"))},r=e=>{e.target===t&&(c.current=m(a.current))};return t.addEventListener("animationstart",r),t.addEventListener("animationcancel",e),t.addEventListener("animationend",e),()=>{t.removeEventListener("animationstart",r),t.removeEventListener("animationcancel",e),t.removeEventListener("animationend",e)}}d("ANIMATION_END")},[t,d]),{isPresent:["mounted","unmountSuspended"].includes(s),ref:(0,o.useCallback)(e=>{e&&(a.current=getComputedStyle(e)),n(e)},[])}}(r),a="function"==typeof t?t({present:n.isPresent}):o.Children.only(t),c=i(n.ref,a.ref);return"function"==typeof t||n.isPresent?(0,o.cloneElement)(a,{ref:c}):null};function m(e){return(null==e?void 0:e.animationName)||"none"}function b(e){let r=(0,o.useRef)(e);return(0,o.useEffect)(()=>{r.current=e}),(0,o.useMemo)(()=>(...e)=>{var t;return null===(t=r.current)||void 0===t?void 0:t.call(r,...e)},[])}h.displayName="Presence";let v=(0,o.createContext)(void 0);function g(e,r,{checkForDefaultPrevented:t=!0}={}){return function(o){if(null==e||e(o),!1===t||!o.defaultPrevented)return null==r?void 0:r(o)}}let w="ScrollArea",[y,S]=function(e,r=[]){let t=[],n=()=>{let r=t.map(e=>(0,o.createContext)(e));return function(t){let n=(null==t?void 0:t[e])||r;return(0,o.useMemo)(()=>({[`__scope${e}`]:{...t,[e]:n}}),[t,n])}};return n.scopeName=e,[function(r,n){let l=(0,o.createContext)(n),a=t.length;function i(r){let{scope:t,children:n,...i}=r,c=(null==t?void 0:t[e][a])||l,s=(0,o.useMemo)(()=>i,Object.values(i));return(0,o.createElement)(c.Provider,{value:s},n)}return t=[...t,n],i.displayName=r+"Provider",[i,function(t,i){let c=(null==i?void 0:i[e][a])||l,s=(0,o.useContext)(c);if(s)return s;if(void 0!==n)return n;throw Error(`\`${t}\` must be used within \`${r}\``)}]},function(...e){let r=e[0];if(1===e.length)return r;let t=()=>{let t=e.map(e=>({useScope:e(),scopeName:e.scopeName}));return function(e){let n=t.reduce((r,{useScope:t,scopeName:o})=>{let n=t(e),l=n[`__scope${o}`];return{...r,...l}},{});return(0,o.useMemo)(()=>({[`__scope${r.scopeName}`]:n}),[n])}};return t.scopeName=r.scopeName,t}(n,...r)]}(w),[E,C]=y(w),T=(0,o.forwardRef)((e,r)=>{let{__scopeScrollArea:t,type:l="hover",dir:a,scrollHideDelay:c=600,...s}=e,[d,u]=(0,o.useState)(null),[p,h]=(0,o.useState)(null),[m,b]=(0,o.useState)(null),[g,w]=(0,o.useState)(null),[y,S]=(0,o.useState)(null),[C,T]=(0,o.useState)(0),[N,x]=(0,o.useState)(0),[P,O]=(0,o.useState)(!1),[R,z]=(0,o.useState)(!1),_=i(r,e=>u(e)),A=function(e){let r=(0,o.useContext)(v);return e||r||"ltr"}(a);return(0,o.createElement)(E,{scope:t,type:l,dir:A,scrollHideDelay:c,scrollArea:d,viewport:p,onViewportChange:h,content:m,onContentChange:b,scrollbarX:g,onScrollbarXChange:w,scrollbarXEnabled:P,onScrollbarXEnabledChange:O,scrollbarY:y,onScrollbarYChange:S,scrollbarYEnabled:R,onScrollbarYEnabledChange:z,onCornerWidthChange:T,onCornerHeightChange:x},(0,o.createElement)(f.div,(0,n.Z)({dir:A},s,{ref:_,style:{position:"relative","--radix-scroll-area-corner-width":C+"px","--radix-scroll-area-corner-height":N+"px",...e.style}})))}),N=(0,o.forwardRef)((e,r)=>{let{__scopeScrollArea:t,children:l,...a}=e,c=C("ScrollAreaViewport",t),s=(0,o.useRef)(null),d=i(r,s,c.onViewportChange);return(0,o.createElement)(o.Fragment,null,(0,o.createElement)("style",{dangerouslySetInnerHTML:{__html:"[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}"}}),(0,o.createElement)(f.div,(0,n.Z)({"data-radix-scroll-area-viewport":""},a,{ref:d,style:{overflowX:c.scrollbarXEnabled?"scroll":"hidden",overflowY:c.scrollbarYEnabled?"scroll":"hidden",...e.style}}),(0,o.createElement)("div",{ref:c.onContentChange,style:{minWidth:"100%",display:"table"}},l)))}),x="ScrollAreaScrollbar",P=(0,o.forwardRef)((e,r)=>{let{forceMount:t,...l}=e,a=C(x,e.__scopeScrollArea),{onScrollbarXEnabledChange:i,onScrollbarYEnabledChange:c}=a,s="horizontal"===e.orientation;return(0,o.useEffect)(()=>(s?i(!0):c(!0),()=>{s?i(!1):c(!1)}),[s,i,c]),"hover"===a.type?(0,o.createElement)(O,(0,n.Z)({},l,{ref:r,forceMount:t})):"scroll"===a.type?(0,o.createElement)(R,(0,n.Z)({},l,{ref:r,forceMount:t})):"auto"===a.type?(0,o.createElement)(z,(0,n.Z)({},l,{ref:r,forceMount:t})):"always"===a.type?(0,o.createElement)(_,(0,n.Z)({},l,{ref:r})):null}),O=(0,o.forwardRef)((e,r)=>{let{forceMount:t,...l}=e,a=C(x,e.__scopeScrollArea),[i,c]=(0,o.useState)(!1);return(0,o.useEffect)(()=>{let e=a.scrollArea,r=0;if(e){let t=()=>{window.clearTimeout(r),c(!0)},o=()=>{r=window.setTimeout(()=>c(!1),a.scrollHideDelay)};return e.addEventListener("pointerenter",t),e.addEventListener("pointerleave",o),()=>{window.clearTimeout(r),e.removeEventListener("pointerenter",t),e.removeEventListener("pointerleave",o)}}},[a.scrollArea,a.scrollHideDelay]),(0,o.createElement)(h,{present:t||i},(0,o.createElement)(z,(0,n.Z)({"data-state":i?"visible":"hidden"},l,{ref:r})))}),R=(0,o.forwardRef)((e,r)=>{var t;let{forceMount:l,...a}=e,i=C(x,e.__scopeScrollArea),c="horizontal"===e.orientation,s=G(()=>u("SCROLL_END"),100),[d,u]=(t={hidden:{SCROLL:"scrolling"},scrolling:{SCROLL_END:"idle",POINTER_ENTER:"interacting"},interacting:{SCROLL:"interacting",POINTER_LEAVE:"idle"},idle:{HIDE:"hidden",SCROLL:"scrolling",POINTER_ENTER:"interacting"}},(0,o.useReducer)((e,r)=>{let o=t[e][r];return null!=o?o:e},"hidden"));return(0,o.useEffect)(()=>{if("idle"===d){let e=window.setTimeout(()=>u("HIDE"),i.scrollHideDelay);return()=>window.clearTimeout(e)}},[d,i.scrollHideDelay,u]),(0,o.useEffect)(()=>{let e=i.viewport,r=c?"scrollLeft":"scrollTop";if(e){let t=e[r],o=()=>{let o=e[r],n=t!==o;n&&(u("SCROLL"),s()),t=o};return e.addEventListener("scroll",o),()=>e.removeEventListener("scroll",o)}},[i.viewport,c,u,s]),(0,o.createElement)(h,{present:l||"hidden"!==d},(0,o.createElement)(_,(0,n.Z)({"data-state":"hidden"===d?"hidden":"visible"},a,{ref:r,onPointerEnter:g(e.onPointerEnter,()=>u("POINTER_ENTER")),onPointerLeave:g(e.onPointerLeave,()=>u("POINTER_LEAVE"))})))}),z=(0,o.forwardRef)((e,r)=>{let t=C(x,e.__scopeScrollArea),{forceMount:l,...a}=e,[i,c]=(0,o.useState)(!1),s="horizontal"===e.orientation,d=G(()=>{if(t.viewport){let e=t.viewport.offsetWidth<t.viewport.scrollWidth,r=t.viewport.offsetHeight<t.viewport.scrollHeight;c(s?e:r)}},10);return q(t.viewport,d),q(t.content,d),(0,o.createElement)(h,{present:l||i},(0,o.createElement)(_,(0,n.Z)({"data-state":i?"visible":"hidden"},a,{ref:r})))}),_=(0,o.forwardRef)((e,r)=>{let{orientation:t="vertical",...l}=e,a=C(x,e.__scopeScrollArea),i=(0,o.useRef)(null),c=(0,o.useRef)(0),[s,d]=(0,o.useState)({content:0,viewport:0,scrollbar:{size:0,paddingStart:0,paddingEnd:0}}),u=B(s.viewport,s.content),f={...l,sizes:s,onSizesChange:d,hasThumb:Boolean(u>0&&u<1),onThumbChange:e=>i.current=e,onThumbPointerUp:()=>c.current=0,onThumbPointerDown:e=>c.current=e};function p(e,r){return function(e,r,t,o="ltr"){let n=X(t),l=r||n/2,a=t.scrollbar.paddingStart+l,i=t.scrollbar.size-t.scrollbar.paddingEnd-(n-l),c=t.content-t.viewport,s=V([a,i],"ltr"===o?[0,c]:[-1*c,0]);return s(e)}(e,c.current,s,r)}return"horizontal"===t?(0,o.createElement)(A,(0,n.Z)({},f,{ref:r,onThumbPositionChange:()=>{if(a.viewport&&i.current){let e=a.viewport.scrollLeft,r=Y(e,s,a.dir);i.current.style.transform=`translate3d(${r}px, 0, 0)`}},onWheelScroll:e=>{a.viewport&&(a.viewport.scrollLeft=e)},onDragScroll:e=>{a.viewport&&(a.viewport.scrollLeft=p(e,a.dir))}})):"vertical"===t?(0,o.createElement)(L,(0,n.Z)({},f,{ref:r,onThumbPositionChange:()=>{if(a.viewport&&i.current){let e=a.viewport.scrollTop,r=Y(e,s);i.current.style.transform=`translate3d(0, ${r}px, 0)`}},onWheelScroll:e=>{a.viewport&&(a.viewport.scrollTop=e)},onDragScroll:e=>{a.viewport&&(a.viewport.scrollTop=p(e))}})):null}),A=(0,o.forwardRef)((e,r)=>{let{sizes:t,onSizesChange:l,...a}=e,c=C(x,e.__scopeScrollArea),[s,d]=(0,o.useState)(),u=(0,o.useRef)(null),f=i(r,u,c.onScrollbarXChange);return(0,o.useEffect)(()=>{u.current&&d(getComputedStyle(u.current))},[u]),(0,o.createElement)(M,(0,n.Z)({"data-orientation":"horizontal"},a,{ref:f,sizes:t,style:{bottom:0,left:"rtl"===c.dir?"var(--radix-scroll-area-corner-width)":0,right:"ltr"===c.dir?"var(--radix-scroll-area-corner-width)":0,"--radix-scroll-area-thumb-width":X(t)+"px",...e.style},onThumbPointerDown:r=>e.onThumbPointerDown(r.x),onDragScroll:r=>e.onDragScroll(r.x),onWheelScroll:(r,t)=>{if(c.viewport){let o=c.viewport.scrollLeft+r.deltaX;e.onWheelScroll(o),o>0&&o<t&&r.preventDefault()}},onResize:()=>{u.current&&c.viewport&&s&&l({content:c.viewport.scrollWidth,viewport:c.viewport.offsetWidth,scrollbar:{size:u.current.clientWidth,paddingStart:$(s.paddingLeft),paddingEnd:$(s.paddingRight)}})}}))}),L=(0,o.forwardRef)((e,r)=>{let{sizes:t,onSizesChange:l,...a}=e,c=C(x,e.__scopeScrollArea),[s,d]=(0,o.useState)(),u=(0,o.useRef)(null),f=i(r,u,c.onScrollbarYChange);return(0,o.useEffect)(()=>{u.current&&d(getComputedStyle(u.current))},[u]),(0,o.createElement)(M,(0,n.Z)({"data-orientation":"vertical"},a,{ref:f,sizes:t,style:{top:0,right:"ltr"===c.dir?0:void 0,left:"rtl"===c.dir?0:void 0,bottom:"var(--radix-scroll-area-corner-height)","--radix-scroll-area-thumb-height":X(t)+"px",...e.style},onThumbPointerDown:r=>e.onThumbPointerDown(r.y),onDragScroll:r=>e.onDragScroll(r.y),onWheelScroll:(r,t)=>{if(c.viewport){let o=c.viewport.scrollTop+r.deltaY;e.onWheelScroll(o),o>0&&o<t&&r.preventDefault()}},onResize:()=>{u.current&&c.viewport&&s&&l({content:c.viewport.scrollHeight,viewport:c.viewport.offsetHeight,scrollbar:{size:u.current.clientHeight,paddingStart:$(s.paddingTop),paddingEnd:$(s.paddingBottom)}})}}))}),[k,D]=y(x),M=(0,o.forwardRef)((e,r)=>{let{__scopeScrollArea:t,sizes:l,hasThumb:a,onThumbChange:c,onThumbPointerUp:s,onThumbPointerDown:d,onThumbPositionChange:u,onDragScroll:p,onWheelScroll:h,onResize:m,...v}=e,w=C(x,t),[y,S]=(0,o.useState)(null),E=i(r,e=>S(e)),T=(0,o.useRef)(null),N=(0,o.useRef)(""),P=w.viewport,O=l.content-l.viewport,R=b(h),z=b(u),_=G(m,10);function A(e){if(T.current){let r=e.clientX-T.current.left,t=e.clientY-T.current.top;p({x:r,y:t})}}return(0,o.useEffect)(()=>{let e=e=>{let r=e.target,t=null==y?void 0:y.contains(r);t&&R(e,O)};return document.addEventListener("wheel",e,{passive:!1}),()=>document.removeEventListener("wheel",e,{passive:!1})},[P,y,O,R]),(0,o.useEffect)(z,[l,z]),q(y,_),q(w.content,_),(0,o.createElement)(k,{scope:t,scrollbar:y,hasThumb:a,onThumbChange:b(c),onThumbPointerUp:b(s),onThumbPositionChange:z,onThumbPointerDown:b(d)},(0,o.createElement)(f.div,(0,n.Z)({},v,{ref:E,style:{position:"absolute",...v.style},onPointerDown:g(e.onPointerDown,e=>{if(0===e.button){let r=e.target;r.setPointerCapture(e.pointerId),T.current=y.getBoundingClientRect(),N.current=document.body.style.webkitUserSelect,document.body.style.webkitUserSelect="none",A(e)}}),onPointerMove:g(e.onPointerMove,A),onPointerUp:g(e.onPointerUp,e=>{let r=e.target;r.hasPointerCapture(e.pointerId)&&r.releasePointerCapture(e.pointerId),document.body.style.webkitUserSelect=N.current,T.current=null})})))}),I="ScrollAreaThumb",j=(0,o.forwardRef)((e,r)=>{let{forceMount:t,...l}=e,a=D(I,e.__scopeScrollArea);return(0,o.createElement)(h,{present:t||a.hasThumb},(0,o.createElement)(H,(0,n.Z)({ref:r},l)))}),H=(0,o.forwardRef)((e,r)=>{let{__scopeScrollArea:t,style:l,...a}=e,c=C(I,t),s=D(I,t),{onThumbPositionChange:d}=s,u=i(r,e=>s.onThumbChange(e)),p=(0,o.useRef)(),h=G(()=>{p.current&&(p.current(),p.current=void 0)},100);return(0,o.useEffect)(()=>{let e=c.viewport;if(e){let r=()=>{if(h(),!p.current){let r=F(e,d);p.current=r,d()}};return d(),e.addEventListener("scroll",r),()=>e.removeEventListener("scroll",r)}},[c.viewport,h,d]),(0,o.createElement)(f.div,(0,n.Z)({"data-state":s.hasThumb?"visible":"hidden"},a,{ref:u,style:{width:"var(--radix-scroll-area-thumb-width)",height:"var(--radix-scroll-area-thumb-height)",...l},onPointerDownCapture:g(e.onPointerDownCapture,e=>{let r=e.target,t=r.getBoundingClientRect(),o=e.clientX-t.left,n=e.clientY-t.top;s.onThumbPointerDown({x:o,y:n})}),onPointerUp:g(e.onPointerUp,s.onThumbPointerUp)}))}),Z="ScrollAreaCorner",U=(0,o.forwardRef)((e,r)=>{let t=C(Z,e.__scopeScrollArea),l=Boolean(t.scrollbarX&&t.scrollbarY),a="scroll"!==t.type&&l;return a?(0,o.createElement)(W,(0,n.Z)({},e,{ref:r})):null}),W=(0,o.forwardRef)((e,r)=>{let{__scopeScrollArea:t,...l}=e,a=C(Z,t),[i,c]=(0,o.useState)(0),[s,d]=(0,o.useState)(0),u=Boolean(i&&s);return q(a.scrollbarX,()=>{var e;let r=(null===(e=a.scrollbarX)||void 0===e?void 0:e.offsetHeight)||0;a.onCornerHeightChange(r),d(r)}),q(a.scrollbarY,()=>{var e;let r=(null===(e=a.scrollbarY)||void 0===e?void 0:e.offsetWidth)||0;a.onCornerWidthChange(r),c(r)}),u?(0,o.createElement)(f.div,(0,n.Z)({},l,{ref:r,style:{width:i,height:s,position:"absolute",right:"ltr"===a.dir?0:void 0,left:"rtl"===a.dir?0:void 0,bottom:0,...e.style}})):null});function $(e){return e?parseInt(e,10):0}function B(e,r){let t=e/r;return isNaN(t)?0:t}function X(e){let r=B(e.viewport,e.content),t=e.scrollbar.paddingStart+e.scrollbar.paddingEnd,o=(e.scrollbar.size-t)*r;return Math.max(o,18)}function Y(e,r,t="ltr"){let o=X(r),n=r.scrollbar.paddingStart+r.scrollbar.paddingEnd,l=r.scrollbar.size-n,a=r.content-r.viewport,i=function(e,[r,t]){return Math.min(t,Math.max(r,e))}(e,"ltr"===t?[0,a]:[-1*a,0]),c=V([0,a],[0,l-o]);return c(i)}function V(e,r){return t=>{if(e[0]===e[1]||r[0]===r[1])return r[0];let o=(r[1]-r[0])/(e[1]-e[0]);return r[0]+o*(t-e[0])}}let F=(e,r=()=>{})=>{let t={left:e.scrollLeft,top:e.scrollTop},o=0;return!function n(){let l={left:e.scrollLeft,top:e.scrollTop},a=t.left!==l.left,i=t.top!==l.top;(a||i)&&r(),t=l,o=window.requestAnimationFrame(n)}(),()=>window.cancelAnimationFrame(o)};function G(e,r){let t=b(e),n=(0,o.useRef)(0);return(0,o.useEffect)(()=>()=>window.clearTimeout(n.current),[]),(0,o.useCallback)(()=>{window.clearTimeout(n.current),n.current=window.setTimeout(t,r)},[t,r])}function q(e,r){let t=b(r);p(()=>{let r=0;if(e){let o=new ResizeObserver(()=>{cancelAnimationFrame(r),r=window.requestAnimationFrame(t)});return o.observe(e),()=>{window.cancelAnimationFrame(r),o.unobserve(e)}}},[e,t])}var J=t(5149),K=t(1319),Q=t(3712);function ee(e){return`___ref-${e||""}`}var er=(0,K.k)((e,{scrollbarSize:r,offsetScrollbars:t,scrollbarHovered:o,hidden:n})=>({root:{overflow:"hidden"},viewport:{width:"100%",height:"100%",paddingRight:t?(0,Q.h)(r):void 0,paddingBottom:t?(0,Q.h)(r):void 0},scrollbar:{display:n?"none":"flex",userSelect:"none",touchAction:"none",boxSizing:"border-box",padding:`calc(${(0,Q.h)(r)}  / 5)`,transition:"background-color 150ms ease, opacity 150ms ease","&:hover":{backgroundColor:"dark"===e.colorScheme?e.colors.dark[8]:e.colors.gray[0],[`& .${ee("thumb")}`]:{backgroundColor:"dark"===e.colorScheme?e.fn.rgba(e.white,.5):e.fn.rgba(e.black,.5)}},'&[data-orientation="vertical"]':{width:(0,Q.h)(r)},'&[data-orientation="horizontal"]':{flexDirection:"column",height:(0,Q.h)(r)},'&[data-state="hidden"]':{display:"none",opacity:0}},thumb:{ref:ee("thumb"),flex:1,backgroundColor:"dark"===e.colorScheme?e.fn.rgba(e.white,.4):e.fn.rgba(e.black,.4),borderRadius:(0,Q.h)(r),position:"relative",transition:"background-color 150ms ease",display:n?"none":void 0,overflow:"hidden","&::before":{content:'""',position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:"100%",height:"100%",minWidth:(0,Q.h)(44),minHeight:(0,Q.h)(44)}},corner:{backgroundColor:"dark"===e.colorScheme?e.colors.dark[6]:e.colors.gray[0],transition:"opacity 150ms ease",opacity:o?1:0,display:n?"none":void 0}})),et=t(278),eo=Object.defineProperty,en=Object.defineProperties,el=Object.getOwnPropertyDescriptors,ea=Object.getOwnPropertySymbols,ei=Object.prototype.hasOwnProperty,ec=Object.prototype.propertyIsEnumerable,es=(e,r,t)=>r in e?eo(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,ed=(e,r)=>{for(var t in r||(r={}))ei.call(r,t)&&es(e,t,r[t]);if(ea)for(var t of ea(r))ec.call(r,t)&&es(e,t,r[t]);return e},eu=(e,r)=>en(e,el(r)),ef=(e,r)=>{var t={};for(var o in e)ei.call(e,o)&&0>r.indexOf(o)&&(t[o]=e[o]);if(null!=e&&ea)for(var o of ea(e))0>r.indexOf(o)&&ec.call(e,o)&&(t[o]=e[o]);return t};let ep={scrollbarSize:12,scrollHideDelay:1e3,type:"hover",offsetScrollbars:!1},eh=(0,o.forwardRef)((e,r)=>{let t=(0,J.N4)("ScrollArea",ep,e),{children:n,className:l,classNames:a,styles:i,scrollbarSize:c,scrollHideDelay:s,type:d,dir:u,offsetScrollbars:f,viewportRef:p,onScrollPositionChange:h,unstyled:m,variant:b,viewportProps:v}=t,g=ef(t,["children","className","classNames","styles","scrollbarSize","scrollHideDelay","type","dir","offsetScrollbars","viewportRef","onScrollPositionChange","unstyled","variant","viewportProps"]),[w,y]=(0,o.useState)(!1),S=(0,J.rZ)(),{classes:E,cx:C}=er({scrollbarSize:c,offsetScrollbars:f,scrollbarHovered:w,hidden:"never"===d},{name:"ScrollArea",classNames:a,styles:i,unstyled:m,variant:b});return o.createElement(T,{type:"never"===d?"always":d,scrollHideDelay:s,dir:u||S.dir,ref:r,asChild:!0},o.createElement(et.x,ed({className:C(E.root,l)},g),o.createElement(N,eu(ed({},v),{className:E.viewport,ref:p,onScroll:"function"==typeof h?({currentTarget:e})=>h({x:e.scrollLeft,y:e.scrollTop}):void 0}),n),o.createElement(P,{orientation:"horizontal",className:E.scrollbar,forceMount:!0,onMouseEnter:()=>y(!0),onMouseLeave:()=>y(!1)},o.createElement(j,{className:E.thumb})),o.createElement(P,{orientation:"vertical",className:E.scrollbar,forceMount:!0,onMouseEnter:()=>y(!0),onMouseLeave:()=>y(!1)},o.createElement(j,{className:E.thumb})),o.createElement(U,{className:E.corner})))}),em=(0,o.forwardRef)((e,r)=>{let t=(0,J.N4)("ScrollAreaAutosize",ep,e),{children:n,classNames:l,styles:a,scrollbarSize:i,scrollHideDelay:c,type:s,dir:d,offsetScrollbars:u,viewportRef:f,onScrollPositionChange:p,unstyled:h,sx:m,variant:b,viewportProps:v}=t,g=ef(t,["children","classNames","styles","scrollbarSize","scrollHideDelay","type","dir","offsetScrollbars","viewportRef","onScrollPositionChange","unstyled","sx","variant","viewportProps"]);return o.createElement(et.x,eu(ed({},g),{ref:r,sx:[{display:"flex"},...Array.isArray(m)?m:[m]]}),o.createElement(et.x,{sx:{display:"flex",flexDirection:"column",flex:1}},o.createElement(eh,{classNames:l,styles:a,scrollHideDelay:c,scrollbarSize:i,type:s,dir:d,offsetScrollbars:u,viewportRef:f,onScrollPositionChange:p,unstyled:h,variant:b,viewportProps:v},n)))});em.displayName="@mantine/core/ScrollAreaAutosize",eh.displayName="@mantine/core/ScrollArea",eh.Autosize=em;let eb=eh},6466:function(e,r,t){t.d(r,{i:function(){return z}});var o=t(2784),n=t(5149),l=t(1319),a=t(3712),i=t(3071),c=Object.defineProperty,s=Object.defineProperties,d=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,f=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,h=(e,r,t)=>r in e?c(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,m=(e,r)=>{for(var t in r||(r={}))f.call(r,t)&&h(e,t,r[t]);if(u)for(var t of u(r))p.call(r,t)&&h(e,t,r[t]);return e},b=(e,r)=>s(e,d(r)),v=(0,l.k)((e,{captionSide:r,horizontalSpacing:t,verticalSpacing:o,fontSize:n,withBorder:l,withColumnBorders:c})=>{let s=`${(0,a.h)(1)} solid ${"dark"===e.colorScheme?e.colors.dark[4]:e.colors.gray[3]}`;return{root:b(m({},e.fn.fontStyles()),{width:"100%",borderCollapse:"collapse",captionSide:r,color:"dark"===e.colorScheme?e.colors.dark[0]:e.black,lineHeight:e.lineHeight,border:l?s:void 0,"& caption":{marginTop:"top"===r?0:e.spacing.xs,marginBottom:"bottom"===r?0:e.spacing.xs,fontSize:e.fontSizes.sm,color:"dark"===e.colorScheme?e.colors.dark[2]:e.colors.gray[6]},"& thead tr th, & tfoot tr th, & tbody tr th":{textAlign:"left",fontWeight:"bold",color:"dark"===e.colorScheme?e.colors.dark[0]:e.colors.gray[7],fontSize:(0,i.a)({size:n,sizes:e.fontSizes}),padding:`${(0,i.a)({size:o,sizes:e.spacing})} ${(0,i.a)({size:t,sizes:e.spacing})}`},"& thead tr th":{borderBottom:s},"& tfoot tr th, & tbody tr th":{borderTop:s},"& tbody tr td":{padding:`${(0,i.a)({size:o,sizes:e.spacing})} ${(0,i.a)({size:t,sizes:e.spacing})}`,borderTop:s,fontSize:(0,i.a)({size:n,sizes:e.fontSizes})},"& tbody tr:first-of-type td, & tbody tr:first-of-type th":{borderTop:"none"},"& thead th, & tbody td":{borderRight:c?s:"none","&:last-of-type":{borderRight:"none",borderLeft:c?s:"none"}},"& tbody tr th":{borderRight:c?s:"none"},"&[data-striped] tbody tr:nth-of-type(odd)":{backgroundColor:"dark"===e.colorScheme?e.colors.dark[6]:e.colors.gray[0]},"&[data-hover] tbody tr":e.fn.hover({backgroundColor:"dark"===e.colorScheme?e.colors.dark[5]:e.colors.gray[1]})})}}),g=t(278),w=Object.defineProperty,y=Object.defineProperties,S=Object.getOwnPropertyDescriptors,E=Object.getOwnPropertySymbols,C=Object.prototype.hasOwnProperty,T=Object.prototype.propertyIsEnumerable,N=(e,r,t)=>r in e?w(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,x=(e,r)=>{for(var t in r||(r={}))C.call(r,t)&&N(e,t,r[t]);if(E)for(var t of E(r))T.call(r,t)&&N(e,t,r[t]);return e},P=(e,r)=>y(e,S(r)),O=(e,r)=>{var t={};for(var o in e)C.call(e,o)&&0>r.indexOf(o)&&(t[o]=e[o]);if(null!=e&&E)for(var o of E(e))0>r.indexOf(o)&&T.call(e,o)&&(t[o]=e[o]);return t};let R={striped:!1,highlightOnHover:!1,captionSide:"top",horizontalSpacing:"xs",fontSize:"sm",verticalSpacing:7,withBorder:!1,withColumnBorders:!1},z=(0,o.forwardRef)((e,r)=>{let t=(0,n.N4)("Table",R,e),{className:l,children:a,striped:i,highlightOnHover:c,captionSide:s,horizontalSpacing:d,verticalSpacing:u,fontSize:f,unstyled:p,withBorder:h,withColumnBorders:m,variant:b}=t,w=O(t,["className","children","striped","highlightOnHover","captionSide","horizontalSpacing","verticalSpacing","fontSize","unstyled","withBorder","withColumnBorders","variant"]),{classes:y,cx:S}=v({captionSide:s,verticalSpacing:u,horizontalSpacing:d,fontSize:f,withBorder:h,withColumnBorders:m},{unstyled:p,name:"Table",variant:b});return o.createElement(g.x,P(x({},w),{component:"table",ref:r,className:S(y.root,l),"data-striped":i||void 0,"data-hover":c||void 0}),a)});z.displayName="@mantine/core/Table"}}]);