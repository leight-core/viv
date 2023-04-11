"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1765],{5650:function(e,r,t){t.d(r,{w:function(){return o}});var n=t(2322),s=t(4411);let o=e=>{let{example:r,children:t}=e;return(0,n.jsxs)(s.mQ,{items:["Example","Code"],children:[(0,n.jsx)(s.OK,{children:r}),(0,n.jsx)(s.OK,{children:t})]})}},9841:function(e,r,t){t.d(r,{rd:function(){return et},gK:function(){return en},k:function(){return eo},Pm:function(){return ei},Rz:function(){return ec}});var n=t(2322),s=t(195),o=s.z.object({id:s.z.string().optional(),fulltext:s.z.string().optional()}),a=t(6234),i=s.z.object({id:s.z.string()}),l=s.z.object({}).merge(i);s.z.object({}),s.z.object({id:s.z.string()}),l.merge(s.z.object({date:s.z.string().transform(e=>a.ou.fromISO(e)),prev:s.z.string().optional().transform(e=>e?a.ou.fromISO(e):void 0),next:s.z.string().optional().transform(e=>e?a.ou.fromISO(e):void 0)})),o.merge(s.z.object({from:s.z.string().transform(e=>a.ou.fromISO(e)),to:s.z.string().transform(e=>a.ou.fromISO(e))}));var c=({date:e=a.ou.now(),margin:r=0,marginPlus:t,marginMinus:n,dayFormat:s="short"}={date:a.ou.now(),margin:1,dayFormat:"short"})=>{let o=e.startOf("month").minus({week:n||r}),i=e.endOf("month").plus({week:t||r}),l=a.Xp.fromDateTimes(o,i),c=Math.max(l.count("weeks"),6),d=o.startOf("week"),u=d.plus({week:c}),m=a.Xp.fromDateTimes(d,u).count("days"),h=a.ou.now();return{date:e,now:h,start:o,calendarStart:d,end:i,calendarEnd:u,interval:l,get isCurrent(){return l.contains(h)},get list(){return a.kI.weekdays(s)},get weeks(){return Array.from({length:c},(r,t)=>{let n=d.plus({week:t}),s=`${n.year}-${n.weekNumber}`;return{id:s,week:n,number:n.weekNumber,isCurrent:n.weekNumber===h.weekNumber&&n.year===h.year,get days(){return Array.from({length:7},(r,t)=>{let s=n.plus({day:t});return{id:s.toLocaleString({day:"numeric",month:"numeric",year:"numeric"}),day:s,isCurrent:!Math.floor(h.diff(s,"day").days),isOutOfRange:s.month!==e.month||s.year!==e.year}})}}})},get days(){return Array.from({length:m},(r,t)=>{let n=d.plus({day:t});return{id:n.toLocaleString({day:"numeric",month:"numeric",year:"numeric"}),day:n,isCurrent:!Math.floor(h.diff(n,"day").days),isOutOfRange:n.month!==e.month||n.year!==e.year}})}}},d=({date:e=a.ou.now(),monthFormat:r="long"})=>{let t=e.startOf("year"),n=e.endOf("year"),s=a.Xp.fromDateTimes(t,n),o=s.count("months"),i=a.ou.now();return{date:e,start:t,end:n,interval:s,now:i,get isCurrent(){return s.contains(i)},get list(){return a.kI.months(r)},get months(){return Array.from({length:o},(e,r)=>{let n=t.plus({month:r}),s=`${n.year}-${n.month}`;return{id:s,name:n.toLocaleString({month:"long"}),month:n,number:n.month,isCurrent:i.year===n.year&&i.month===n.month}})}}},u=({date:e=a.ou.now(),columns:r=5,rows:t=3})=>{let n=(r-1)/2+(t-1)/2*r,s=e.minus({year:n}),o=e.plus({year:n}),i=a.Xp.fromDateTimes(s,o),l=i.count("years"),c=a.ou.now();return{date:e,start:s,end:o,interval:i,columns:r,rows:t,count:r*t,now:c,get isCurrent(){return c.year>=s.year&&c.year<=o.year},get list(){return Array.from({length:l},(e,r)=>s.year+r)},get years(){return Array.from({length:l},(e,r)=>{let t=s.plus({year:r}),n=`${t.year}`;return{id:n,name:t.year,year:t,isCurrent:c.year===t.year}})}}},m=t(7817),h=t(3540),x=t(7839),j=t(278),y=t(8263),p=t(9081),f=t(1848),g=t(638),k=t(5858),v=t(2784),C=t(2779),w=(0,m.re)({state:()=>e=>({isBlock:!1,block:(r=!0)=>{e({isBlock:r})},unblock:()=>{e({isBlock:!1})}}),name:"BlockStore",hint:"Add BlockProvider."}),b=({isBlock:e=!1,...r})=>(0,n.jsx)(w.Provider,{defaults:{isBlock:e},...r});(0,m.re)({state:()=>(e,r)=>({total:0,isRunning:!1,isDone:!1,isError:!1,isSuccess:!1,current:0,progress:()=>e(({current:e})=>({current:e+1})),start:r=>e({isRunning:!0,total:r}),finish:(r=!1)=>e({isDone:!0,isRunning:!1,isError:r,isSuccess:!r}),error:(r=!0)=>e({isError:r,isSuccess:!r}),percent:()=>{let{current:e,total:t}=r();return 100*e/t}}),name:"LoopStore",hint:"Add LoopProvider."}),(0,m.re)({state:()=>(e,r)=>({current:0,isRunning:()=>r().current>0,inc:()=>e(({current:e})=>({current:e+1})),dec:()=>e(({current:e})=>({current:e-1}))}),name:"LoopsStore",hint:"Add LoopsProvider."});var S=t(4678),z=t(7327),O=t(6569),N=t(7912),Y=t(2769),Z=t(9335),R=t(5666),I=t(1319),M=t(4147),A=t(9697),D=t(8784),L=t(551),T=t(4805),P=t(6082),G=(0,m.re)({state:({state:e})=>(r,t)=>({monthsOf:e=>(r({months:d({date:e})}),t().months),today:()=>(r({months:d({date:a.ou.now()})}),t().months),prevYear:()=>(r(({months:{date:e}})=>({months:d({date:e.minus({year:1})})})),t().months),nextYear:()=>(r(({months:{date:e}})=>({months:d({date:e.plus({year:1})})})),t().months),...e}),name:"MonthsOfStore",hint:"Add MonthsOfProvider or CalendarProvider."}),F=({date:e,...r})=>(0,n.jsx)(G.Provider,{state:{months:d({date:e})},...r}),B=(0,m.re)({state:({state:e})=>(r,t)=>({weeksOf:e=>(r({weeks:c({date:e})}),t().weeks),today:()=>(r({weeks:c({date:a.ou.now()})}),t().weeks),prevMonth:()=>(r(({weeks:{date:e}})=>({weeks:c({date:e.minus({month:1})})})),t().weeks),nextMonth:()=>(r(({weeks:{date:e}})=>({weeks:c({date:e.plus({month:1})})})),t().weeks),prevYear:()=>(r(({weeks:{date:e}})=>({weeks:c({date:e.minus({year:1})})})),t().weeks),nextYear:()=>(r(({weeks:{date:e}})=>({weeks:c({date:e.plus({year:1})})})),t().weeks),...e}),name:"WeeksOfStore",hint:"Add WeeksOfProvider or CalendarProvider."}),E=({date:e,...r})=>(0,n.jsx)(B.Provider,{state:{weeks:c({date:e})},...r}),$=(0,m.re)({state:({state:e})=>(r,t)=>({yearsOf:e=>(r({years:u({date:e})}),t().years),today:()=>(r({years:u({date:a.ou.now()})}),t().years),prevYear:()=>(r(({years:{date:e}})=>({years:u({date:e.minus({year:1})})})),t().years),nextYear:()=>(r(({years:{date:e}})=>({years:u({date:e.plus({year:1})})})),t().years),prevYears:()=>(r(({years:{count:e,date:r}})=>({years:u({date:r.minus({year:e})})})),t().years),nextYears:()=>(r(({years:{count:e,date:r}})=>({years:u({date:r.plus({year:e})})})),t().years),...e}),name:"YearsOfStore",hint:"Add YearsOfProvider or CalendarProvider."}),W=({date:e,...r})=>(0,n.jsx)($.Provider,{state:{years:u({date:e})},...r}),K=({children:e,date:r})=>(0,n.jsx)(W,{date:r,children:(0,n.jsx)(F,{date:r,children:(0,n.jsx)(E,{date:r,children:e})})}),_=({start:e,end:r,startOptions:t={day:"numeric",month:"numeric"},endOptions:s,...o})=>(0,n.jsxs)(x.O,{separator:"→",className:"secondary",...o,children:[(0,n.jsx)(h.Yo,{date:e,options:t}),(0,n.jsx)(h.Yo,{date:r,options:s})]}),V=(0,I.k)(e=>({calendar:{userSelect:"none"},calendarGrid:{border:"1px solid",borderColor:(0,Z.rm)(e,e.colors.gray[6],e.colors.gray[4]),borderBottom:"none",borderRight:"none","&:last-child":{border:"1px solid",borderColor:(0,Z.rm)(e,e.colors.gray[6],e.colors.gray[4]),borderRight:"none"}},controlsGrid:{"& > div:last-child":{borderRight:"1px solid",borderRightColor:(0,Z.rm)(e,e.colors.gray[6],e.colors.gray[4])}},controls:{display:"flex",flex:"1 1 auto",alignItems:"center"},controlsLeft:{},controlsMiddle:{justifyContent:"center"},controlsRight:{justifyContent:"end"},controlsPrefix:{},controlsSuffix:{},header:{backgroundColor:(0,Z.rm)(e,e.colors.gray[6],e.colors.gray[0]),fontWeight:"bold",height:"3em",display:"flex",flex:"1 1 auto",justifyContent:"center",alignItems:"center"},cell:{height:"6em",padding:"0","&:hover":{backgroundColor:(0,Z.rm)(e,e.colors.gray[6],e.colors.gray[0])}},monthCell:{display:"flex",flex:"1 1 auto",justifyContent:"center",alignItems:"center"},yearCell:{display:"flex",flex:"1 1 auto",justifyContent:"center",alignItems:"center"},row:{"& > div":{borderRight:"1px solid",borderColor:(0,Z.rm)(e,e.colors.gray[6],e.colors.gray[4])}},currentMonth:{fontWeight:"bold",backgroundColor:(0,Z.rm)(e,e.colors.gray[6],e.colors.gray[1])},currentYear:{fontWeight:"bold",backgroundColor:(0,Z.rm)(e,e.colors.gray[6],e.colors.gray[1])},currentWeek:{},currentDay:{backgroundColor:(0,Z.rm)(e,e.colors.gray[6],e.colors.gray[2])},inRange:{fontWeight:"bold"},outOfRange:{backgroundColor:(0,Z.rm)(e,e.colors.gray[6],e.colors.gray[0])}})),X=(e,r)=>(0,R.GV)(e)?e(r):e,H=({events:e,withControls:r=!0,controlsTopLeft:t,controlsTopMiddle:s,controlsTopRight:o,controlsBottomLeft:a,controlsBottomMiddle:i,controlsBottomRight:l,children:c,...d})=>{let u=w.useOptionalState(),m=e?.useSource(),h=e?.useFilter(),{classes:x}=V(),y={classes:x,source:m,filter:h};return(0,n.jsxs)(j.x,{className:x.calendar,...d,children:[(0,n.jsx)(M.f,{visible:(0,R.ls)(u?.isBlock,e?.useSource().isFetching||!1)}),r&&(0,n.jsxs)(O.r,{columns:18,className:C(x.calendarGrid,x.controlsGrid,x.controlsPrefix),m:0,children:[(0,n.jsx)(O.r.Col,{span:7,className:C(x.controls,x.controlsLeft),children:X(t,y)}),(0,n.jsx)(O.r.Col,{span:4,className:C(x.controls,x.controlsMiddle),children:X(s,y)}),(0,n.jsx)(O.r.Col,{span:7,className:C(x.controls,x.controlsRight),children:X(o,y)})]}),X(c,y),r&&(a||i||l)&&(0,n.jsxs)(O.r,{columns:18,className:C(x.calendarGrid,x.controlsGrid,x.controlsSuffix),m:0,children:[(0,n.jsx)(O.r.Col,{span:7,className:C(x.controls,x.controlsLeft),children:X(a,y)}),(0,n.jsx)(O.r.Col,{span:4,className:C(x.controls,x.controlsMiddle),children:X(i,y)}),(0,n.jsx)(O.r.Col,{span:7,className:C(x.controls,x.controlsRight),children:X(l,y)})]})]})},J=({children:e,onClick:r,...t})=>{let{months:{months:s,isCurrent:o,date:i},today:l,prevYear:c,nextYear:d}=G.useState(),u=s.length/4;return(0,n.jsx)(H,{controlsTopLeft:(0,n.jsx)(S.Z,{spacing:"sm",children:(0,n.jsx)(y.z.Group,{children:(0,n.jsx)(y.z,{size:"sm",variant:"subtle",onClick:()=>c(),leftIcon:(0,n.jsx)(N.Z,{}),children:(0,n.jsx)(h.Yo,{date:i.minus({year:1}),options:{year:"numeric"}})})})}),controlsTopMiddle:(0,n.jsx)(S.Z,{spacing:"sm",children:(0,n.jsx)(y.z,{variant:"subtle",onClick:()=>l(),disabled:o,children:(0,n.jsx)(z.x,{c:"dimmed",children:o?(0,n.jsx)(h.Yo,{date:a.ou.now(),options:{day:"numeric",month:"long",year:"numeric"}}):(0,n.jsx)(h.Yo,{date:i,options:{year:"numeric"}})})})}),controlsTopRight:(0,n.jsx)(S.Z,{spacing:"sm",children:(0,n.jsx)(y.z.Group,{children:(0,n.jsx)(y.z,{size:"sm",variant:"subtle",onClick:()=>d(),rightIcon:(0,n.jsx)(Y.Z,{}),children:(0,n.jsx)(h.Yo,{date:i.plus({year:1}),options:{year:"numeric"}})})})}),...t,children:({classes:t})=>(0,n.jsxs)(n.Fragment,{children:[Array.from({length:u},(e,o)=>(0,n.jsx)(O.r,{columns:4,className:C(t.calendarGrid,t.row),m:0,children:Array.from({length:4},(e,a)=>{let i=s[4*o+a];return i?(0,n.jsx)(O.r.Col,{span:1,className:C(t.cell,t.monthCell,i.isCurrent?t.currentMonth:void 0),style:r?{cursor:"pointer"}:void 0,onClick:()=>r?.({month:i}),children:i.name},i.id):null})},`month${o}`)),e]})})},q=({onClick:e,onChange:r=()=>null,events:t,renderDayInline:s,highlightToday:o=!0,defaultWithWeekNo:i=!1,weekCountSize:l=2,columnSize:c=3,children:d,...u})=>{let{nextMonth:m,prevMonth:x,prevYear:j,nextYear:g,today:w,weeks:{weeks:b,list:Z,start:R,end:I,isCurrent:M}}=B.useState(),G=t?.useSource(),F=t?.useFilter(),E=t&&G?.entities.filter(e=>t.schema.safeParse(e)).map(e=>t.schema.parse(e)).reduce((e,r)=>{let t=r.date.toLocaleString({day:"numeric",month:"numeric",year:"numeric"});return{...e,[t]:(e[t]||[]).concat(r)}},{}),[$,{open:W,close:K}]=(0,D.q)(!1),_=(0,v.useRef)(),[V,X]=(0,v.useState)(i);(0,v.useEffect)(()=>{F?.setFilter({from:R,to:I})},[R.toISO(),I.toISO()]);let J=e=>{F?.setFilter({from:e.weeks.start,to:e.weeks.end}),r?.(e)},q=Z.length*c+(V?l:0);return(0,n.jsx)(H,{events:t,controlsTopLeft:(0,n.jsx)(S.Z,{spacing:"sm",children:(0,n.jsxs)(y.z.Group,{children:[(0,n.jsx)(y.z,{size:"sm",variant:"subtle",onClick:()=>J({weeks:x()}),leftIcon:(0,n.jsx)(N.Z,{}),children:(0,n.jsx)(h.Yo,{date:R.minus({month:1}),options:{month:"long"}})}),(0,n.jsx)(y.z,{size:"sm",variant:"subtle",onClick:()=>J({weeks:j()}),leftIcon:(0,n.jsx)(L.Z,{}),children:(0,n.jsx)(h.Yo,{date:R.minus({year:1}),options:{year:"numeric"}})})]})}),controlsTopMiddle:(0,n.jsx)(S.Z,{spacing:"sm",children:(0,n.jsx)(y.z,{variant:"subtle",onClick:()=>J({weeks:w()}),disabled:M,children:(0,n.jsx)(z.x,{c:"dimmed",children:M?(0,n.jsx)(h.Yo,{date:a.ou.now(),options:{day:"numeric",month:"long",year:"numeric"}}):(0,n.jsx)(h.Yo,{date:R,options:{month:"long",year:"numeric"}})})})}),controlsTopRight:(0,n.jsx)(S.Z,{spacing:"sm",children:(0,n.jsxs)(y.z.Group,{children:[(0,n.jsx)(y.z,{size:"sm",variant:"subtle",onClick:()=>J({weeks:g()}),rightIcon:(0,n.jsx)(T.Z,{}),children:(0,n.jsx)(h.Yo,{date:R.plus({year:1}),options:{year:"numeric"}})}),(0,n.jsx)(y.z,{size:"sm",variant:"subtle",onClick:()=>J({weeks:m()}),rightIcon:(0,n.jsx)(Y.Z,{}),children:(0,n.jsx)(h.Yo,{date:R.plus({month:1}),options:{month:"long"}})})]})}),controlsBottomLeft:(0,n.jsx)(f.A,{variant:"subtle",onClick:()=>X(e=>!e),children:(0,n.jsx)(P.Z,{})}),...u,children:({classes:r})=>(0,n.jsxs)(n.Fragment,{children:[$&&(0,n.jsxs)(p.a,{color:"#FFF",opacity:1,children:[(0,n.jsxs)(S.Z,{position:"apart",children:[(0,n.jsx)("div",{}),(0,n.jsx)(f.A,{variant:"subtle",onClick:()=>K(),children:(0,n.jsx)(k.Z,{})})]}),_.current]}),(0,n.jsxs)(O.r,{columns:q,className:C(r.calendarGrid,r.row),m:0,children:[V&&(0,n.jsx)(O.r.Col,{span:l,className:r.header,children:(0,n.jsx)(f.A,{variant:"light",children:(0,n.jsx)(P.Z,{})})}),Z.map(e=>(0,n.jsx)(O.r.Col,{span:c,className:r.header,children:e},`day-${e}`))]}),b.map(({days:a,number:i,isCurrent:d,id:u})=>(0,n.jsxs)(O.r,{columns:q,className:C(r.calendarGrid,r.row,d?r.currentWeek:void 0),m:0,children:[V&&(0,n.jsxs)(O.r.Col,{span:l,children:[i,"."]}),a.map(a=>(0,n.jsx)(O.r.Col,{span:c,className:C(r.cell,a.isCurrent&&o?r.currentDay:void 0,a.isOutOfRange?r.outOfRange:r.inRange),style:e?{cursor:"pointer"}:void 0,onClick:()=>e?.({day:a}),children:(0,n.jsxs)(A.K,{justify:"space-between",style:{height:"100%",padding:"0 0.3em"},children:[(0,n.jsxs)(S.Z,{position:"apart",children:[(0,n.jsx)(S.Z,{spacing:0,children:(0,n.jsx)(f.A,{size:"sm",children:(0,n.jsx)(P.Z,{})})}),a.day.day]}),s&&t?(0,n.jsx)("div",{children:s({schema:t.schema,day:a,events:E?.[a.id]||[]})}):null]})},a.id))]},u)),d]})})},Q=({children:e,onClick:r,...t})=>{let{years:{years:s,isCurrent:o,start:a,end:i,columns:l,rows:c,count:d},today:u,prevYear:m,nextYear:x,prevYears:j,nextYears:p}=$.useState();return(0,n.jsx)(H,{controlsTopLeft:(0,n.jsx)(S.Z,{spacing:"sm",children:(0,n.jsxs)(y.z.Group,{children:[(0,n.jsx)(y.z,{size:"sm",variant:"subtle",onClick:()=>j(),leftIcon:(0,n.jsx)(L.Z,{}),children:(0,n.jsx)(h.Yo,{date:a.minus({year:d}),options:{year:"numeric"}})}),(0,n.jsx)(y.z,{size:"sm",variant:"subtle",onClick:()=>m(),leftIcon:(0,n.jsx)(N.Z,{}),children:(0,n.jsx)(h.Yo,{date:a.minus({year:1}),options:{year:"numeric"}})})]})}),controlsTopMiddle:(0,n.jsx)(S.Z,{spacing:"sm",children:(0,n.jsx)(y.z,{variant:"subtle",onClick:()=>u(),disabled:o,children:(0,n.jsx)(z.x,{c:"dimmed",children:(0,n.jsx)(_,{start:a,end:i,startOptions:{year:"numeric"},endOptions:{year:"numeric"}})})})}),controlsTopRight:(0,n.jsx)(S.Z,{spacing:"sm",children:(0,n.jsxs)(y.z.Group,{children:[(0,n.jsx)(y.z,{size:"sm",variant:"subtle",onClick:()=>x(),rightIcon:(0,n.jsx)(Y.Z,{}),children:(0,n.jsx)(h.Yo,{date:i.plus({year:1}),options:{year:"numeric"}})}),(0,n.jsx)(y.z,{size:"sm",variant:"subtle",onClick:()=>p(),leftIcon:(0,n.jsx)(T.Z,{}),children:(0,n.jsx)(h.Yo,{date:i.plus({year:d}),options:{year:"numeric"}})})]})}),...t,children:({classes:t})=>(0,n.jsxs)(n.Fragment,{children:[Array.from({length:c},(e,o)=>(0,n.jsx)(O.r,{columns:l,className:C(t.calendarGrid,t.row),m:0,children:Array.from({length:l},(e,a)=>{let i=s[o*l+a];return i?(0,n.jsx)(O.r.Col,{span:1,className:C(t.cell,t.yearCell,i.isCurrent?t.currentYear:void 0),style:r?{cursor:"pointer"}:void 0,onClick:()=>r?.({year:i}),children:i.name},i.id):null})},`year${o}`)),e]})})},U=({onClick:e,withControls:r=!0,...t})=>{let{weeksOf:s,weeks:o}=B.useState(({weeksOf:e,weeks:r})=>({weeksOf:e,weeks:r})),{monthsOf:a}=G.useState(({monthsOf:e})=>({monthsOf:e})),{yearsOf:i}=$.useState(({yearsOf:e})=>({yearsOf:e})),[l,c]=(0,v.useState)(!1),[d,u]=(0,v.useState)(!1);return(0,n.jsx)(j.x,{pos:"relative",children:(0,n.jsxs)(q,{onClick:e,withControls:r,controlsBottomMiddle:(0,n.jsxs)(y.z.Group,{children:[(0,n.jsx)(y.z,{variant:"subtle",onClick:()=>{c(!0),a(o.date)},leftIcon:(0,n.jsx)(g.Z,{}),children:(0,n.jsx)(h.Yo,{date:o.date,options:{month:"long"}})}),(0,n.jsx)(y.z,{variant:"subtle",onClick:()=>{u(!0),i(o.date)},leftIcon:(0,n.jsx)(g.Z,{}),children:(0,n.jsx)(h.Yo,{date:o.date,options:{year:"numeric"}})})]}),...t,children:[l&&(0,n.jsx)(p.a,{color:"#FFF",opacity:1,children:(0,n.jsx)(J,{onClick:({month:{month:e}})=>{s(e),c(!1)},controlsBottomMiddle:(0,n.jsx)(f.A,{variant:"subtle",onClick:()=>c(!1),children:(0,n.jsx)(k.Z,{})})})}),d&&(0,n.jsx)(p.a,{color:"#FFF",opacity:1,children:(0,n.jsx)(Q,{onClick:({year:{year:e}})=>{s(e),u(!1)},controlsBottomMiddle:(0,n.jsx)(f.A,{variant:"subtle",onClick:()=>u(!1),children:(0,n.jsx)(k.Z,{})})})})]})})};let ee=e=>(0,n.jsx)(b,{isBlock:!0,children:(0,n.jsx)(K,{date:a.ou.fromObject({month:2,day:12}),children:(0,n.jsx)(er,{...e})})}),er=e=>{let{unblock:r}=w.useState(e=>{let{unblock:r}=e;return{unblock:r}}),[t,s]=(0,v.useState)();return(0,v.useEffect)(()=>{setTimeout(()=>{r()},750)},[]),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(U,{onClick:e=>{let{day:r}=e;return s(r)},...e}),(0,n.jsxs)("div",{children:["selected date: ",t?(0,n.jsx)(h.Yo,{date:t.day}):"- click the calendar -"]})]})},et=()=>(0,n.jsx)(Z.N2,{children:(0,n.jsx)(ee,{})}),en=e=>(0,n.jsx)(K,{children:(0,n.jsx)(U,{withControls:!1,...e})}),es=()=>(0,n.jsx)(F,{children:(0,n.jsx)(J,{})}),eo=()=>(0,n.jsx)(Z.N2,{children:(0,n.jsx)(es,{})}),ea=()=>(0,n.jsx)(E,{children:(0,n.jsx)(q,{withControls:!1})}),ei=()=>(0,n.jsx)(Z.N2,{children:(0,n.jsx)(ea,{})}),el=()=>(0,n.jsx)(W,{children:(0,n.jsx)(Q,{})}),ec=()=>(0,n.jsx)(Z.N2,{children:(0,n.jsx)(el,{})})},8273:function(e,r,t){var n=t(2322),s=t(6577),o=t.n(s);let a={logo:(0,n.jsxs)("div",{style:{width:"10em",display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center"},children:[(0,n.jsx)(o(),{alt:"logo",src:"https://avatars.githubusercontent.com/u/74918176?s=96&v=4",width:24,height:24}),(0,n.jsx)("span",{children:"Project: Leight Viv"})]}),project:{link:"https://github.com/leight-core/viv"},docsRepositoryBase:"https://github.com/leight-core/viv/tree/main/nextra",footer:{text:"Project Leight Viv Documentation"},sidebar:{defaultMenuCollapseLevel:1,toggleButton:!0},banner:{key:"wip",text:"This documentation is still work in progress, so be please patient."},toc:{float:!0}};r.Z=a},7817:function(e,r,t){t.d(r,{re:function(){return j}});var n=t(2784),s=t(5666),o=t(2322),a=t(2893),i=t(2294),l=()=>(0,n.createContext)(null),c=(e,r)=>(0,s.GV)(e)?(0,o.jsx)(r.Consumer,{children:t=>{if(!t)throw Error(`There is no [${r.displayName}] context provider.`);return e(t)}}):e,d=({createStore:e,Context:r})=>function({children:t,defaults:s,state:a}){let i=(0,n.useMemo)(()=>{let r=e({defaults:s,state:a});return{state:r.getState(),store:r}},[]);return(0,o.jsx)(r.Provider,{value:i,children:c(t,r)})};function u(e,r,t){let s=(0,n.useContext)(e);if(!s)throw Error(`There is no [${r}] context available.${t?` ${t}`:""} `);return s}function m(e){return(0,n.useContext)(e)}var h=(e,r,t)=>n=>{let{store:s}=u(e,r,t);return n?(0,i.oR)(s,n):(0,i.oR)(s)},x=e=>r=>{let{store:t}=m(e)||{};return t?r?(0,i.oR)(t,r):(0,i.oR)(t):null},j=({state:e,name:r,hint:t})=>{let n=l();return{Provider:d({Context:n,createStore:({defaults:r,state:t})=>(0,a.M)((n,s,o)=>({...e({defaults:r,state:t})(n,s,o),...r}))}),useState:h(n,r,t),useOptionalState:x(n),useStore:()=>u(n,r,t).store,useOptionalStore:()=>m(n)?.store||null}}},3540:function(e,r,t){t.d(r,{Yo:function(){return h},pk:function(){return u},Wb:function(){return x}});var n=t(7817),s=t(6234),o=t(5666),a=e=>(0,o.Kn)(e)&&"toJSDate"in e,i=t(2322),l=t(4076),c=(e,r,t)=>(e||(e=r),e)?(0,o.HD)(e)?s.ou.fromISO(e).toLocaleString(t):a(e)?e.toLocaleString(t):s.ou.fromJSDate(e).toLocaleString(t):void 0,d=(0,n.re)({state:()=>()=>({toLocalDate:(e,r,t=s.ou.DATE_MED)=>c(e,r,t),toLocalDateTime:(e,r,t=s.ou.DATETIME_MED)=>c(e,r,t)}),name:"DateTimeStore",hint:"Add DateTimeStore.Provider."}),u=({...e})=>(0,i.jsx)(d.Provider,{...e}),m=e=>(0,l.$G)(e),h=({date:e,fallback:r,options:t,...n})=>{let{toLocalDate:s}=d.useState(({toLocalDate:e})=>({toLocalDate:e}));return(0,i.jsx)("span",{...n,children:s(e,r,t)})},x=({label:e,namespace:r,withLabelFallback:t,values:n})=>{let{t:s}=m(r);return e?(0,i.jsx)(i.Fragment,{children:(0,o.HD)(e)?t?s(e,t,n):s(e,n):e}):null}},9335:function(e,r,t){t.d(r,{N2:function(){return c},rm:function(){return l}}),t(2784);var n=t(1319),s=t(2322);t(3848),t(7729),t(5632);var o=t(3540),a=t(5149),i=t(2871),l=(e,r,t)=>"dark"===e.colorScheme?r:t;(0,n.k)(e=>({paper:{"&:hover":{boxShadow:e.shadows.lg}}}));var c=({colorScheme:e="light",emotionCache:r,children:t})=>(0,s.jsx)(a.Me,{theme:{colorScheme:e},withGlobalStyles:!0,withNormalizeCSS:!0,emotionCache:r,children:(0,s.jsxs)(o.pk,{children:[(0,s.jsx)(i.T,{position:"top-right"}),t]})})},5666:function(e,r,t){t.d(r,{GV:function(){return i},HD:function(){return c},Kn:function(){return l},ls:function(){return d}}),t(3453);var n=t(4897),s=t(9680),o=t(6985),a=t(6302);t(6867),n.Mc;var i=e=>s(e),l=o,c=e=>a(e),d=(e,r)=>void 0===e?r:e}}]);