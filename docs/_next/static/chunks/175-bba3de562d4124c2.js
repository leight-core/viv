"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[175],{5650:function(e,r,t){t.d(r,{w:function(){return o}});var n=t(2322),s=t(4411);let o=e=>{let{example:r,children:t}=e;return(0,n.jsxs)(s.mQ,{items:["Example","Code"],children:[(0,n.jsx)(s.OK,{children:r}),(0,n.jsx)(s.OK,{children:t})]})}},4759:function(e,r,t){t.d(r,{rd:function(){return et},gK:function(){return en},k:function(){return eo},Pm:function(){return ei},Rz:function(){return ec}});var n=t(2322),s=t(6234),o=t(195),a=o.z.object({date:o.z.string().transform(e=>s.ou.fromISO(e)),data:o.z.record(o.z.any()).optional()});o.z.object({events:a.array()});var i=({date:e=s.ou.now(),margin:r=0,marginPlus:t,marginMinus:n,dayFormat:o="short"}={date:s.ou.now(),margin:1,dayFormat:"short"})=>{let a=e.startOf("month").minus({week:n||r}),i=e.endOf("month").plus({week:t||r}),l=s.Xp.fromDateTimes(a,i),c=Math.max(l.count("weeks"),6),d=a.startOf("week"),u=s.Xp.fromDateTimes(d,d.plus({week:c})).count("days"),h=s.ou.now();return{date:e,now:h,start:a,end:i,interval:l,get isCurrent(){return l.contains(h)},get list(){return s.kI.weekdays(o)},get weeks(){return Array.from({length:c},(r,t)=>{let n=d.plus({week:t}),s=`${n.year}-${n.weekNumber}`;return{id:s,week:n,number:n.weekNumber,isCurrent:n.weekNumber===h.weekNumber&&n.year===h.year,get days(){return Array.from({length:7},(r,t)=>{let o=n.plus({day:t});return{id:`${s}-${t}`,day:o,isCurrent:!Math.floor(h.diff(o,"day").days),isOutOfRange:o.month!==e.month||o.year!==e.year}})}}})},get days(){return Array.from({length:u},(r,t)=>{let n=d.plus({day:t});return{id:`${a.year}-${n.weekNumber}-${n.day}`,day:n,isCurrent:!Math.floor(h.diff(n,"day").days),isOutOfRange:n.month!==e.month||n.year!==e.year}})}}},l=({date:e=s.ou.now(),monthFormat:r="long"})=>{let t=e.startOf("year"),n=e.endOf("year"),o=s.Xp.fromDateTimes(t,n),a=o.count("months"),i=s.ou.now();return{date:e,start:t,end:n,interval:o,now:i,get isCurrent(){return o.contains(i)},get list(){return s.kI.months(r)},get months(){return Array.from({length:a},(e,r)=>{let n=t.plus({month:r}),s=`${n.year}-${n.month}`;return{id:s,name:n.toLocaleString({month:"long"}),month:n,number:n.month,isCurrent:i.year===n.year&&i.month===n.month}})}}},c=({date:e=s.ou.now(),columns:r=5,rows:t=3})=>{let n=(r-1)/2+(t-1)/2*r,o=e.minus({year:n}),a=e.plus({year:n}),i=s.Xp.fromDateTimes(o,a),l=i.count("years"),c=s.ou.now();return{date:e,start:o,end:a,interval:i,columns:r,rows:t,count:r*t,now:c,get isCurrent(){return c.year>=o.year&&c.year<=a.year},get list(){return Array.from({length:l},(e,r)=>o.year+r)},get years(){return Array.from({length:l},(e,r)=>{let t=o.plus({year:r}),n=`${t.year}`;return{id:n,name:t.year,year:t,isCurrent:c.year===t.year}})}}},d=t(7817),u=t(3540),h=t(7839),m=t(278),x=t(8263),j=t(9081),y=t(1848),p=t(638),f=t(5858),g=t(2784),k=t(2779),v=(0,d.re)({state:()=>e=>({isBlock:!1,block:(r=!0)=>{e({isBlock:r})},unblock:()=>{e({isBlock:!1})}}),name:"BlockStore",hint:"Add BlockProvider."}),C=({isBlock:e=!1,...r})=>(0,n.jsx)(v.Provider,{defaults:{isBlock:e},...r});(0,d.re)({state:()=>(e,r)=>({total:0,isRunning:!1,isDone:!1,isError:!1,isSuccess:!1,current:0,progress:()=>e(({current:e})=>({current:e+1})),start:r=>e({isRunning:!0,total:r}),finish:(r=!1)=>e({isDone:!0,isRunning:!1,isError:r,isSuccess:!r}),error:(r=!0)=>e({isError:r,isSuccess:!r}),percent:()=>{let{current:e,total:t}=r();return 100*e/t}}),name:"LoopStore",hint:"Add LoopProvider."}),(0,d.re)({state:()=>(e,r)=>({get isRunning(){return r().current>0},current:0,inc:()=>e(({current:e})=>({current:e+1})),dec:()=>e(({current:e})=>({current:e-1}))}),name:"LoopsStore",hint:"Add LoopsProvider."});var b=t(4678),w=t(7327),S=t(189),O=t(7912),z=t(2769),N=t(9335),Y=t(5666),Z=t(1319),R=t(4147),A=t(9697),D=t(8784),I=t(551),M=t(4805),P=t(6082),T=(0,d.re)({state:({state:e})=>r=>({monthsOf(e){r({months:l({date:e})})},today(){r({months:l({date:s.ou.now()})})},prevYear(){r(({months:{date:e}})=>({months:l({date:e.minus({year:1})})}))},nextYear(){r(({months:{date:e}})=>({months:l({date:e.plus({year:1})})}))},...e}),name:"MonthsOfStore",hint:"Add MonthsOfProvider or CalendarProvider."}),G=({date:e,...r})=>(0,n.jsx)(T.Provider,{state:{months:l({date:e})},...r}),L=(0,d.re)({state:({state:e})=>r=>({weeksOf(e){r({weeks:i({date:e})})},today(){r({weeks:i({date:s.ou.now()})})},prevMonth(){r(({weeks:{date:e}})=>({weeks:i({date:e.minus({month:1})})}))},nextMonth(){r(({weeks:{date:e}})=>({weeks:i({date:e.plus({month:1})})}))},prevYear(){r(({weeks:{date:e}})=>({weeks:i({date:e.minus({year:1})})}))},nextYear(){r(({weeks:{date:e}})=>({weeks:i({date:e.plus({year:1})})}))},...e}),name:"WeeksOfStore",hint:"Add WeeksOfProvider or CalendarProvider."}),$=({date:e,...r})=>(0,n.jsx)(L.Provider,{state:{weeks:i({date:e})},...r}),F=(0,d.re)({state:({state:e})=>r=>({yearsOf(e){r({years:c({date:e})})},today(){r({years:c({date:s.ou.now()})})},prevYear(){r(({years:{date:e}})=>({years:c({date:e.minus({year:1})})}))},nextYear(){r(({years:{date:e}})=>({years:c({date:e.plus({year:1})})}))},prevYears(){r(({years:{count:e,date:r}})=>({years:c({date:r.minus({year:e})})}))},nextYears(){r(({years:{count:e,date:r}})=>({years:c({date:r.plus({year:e})})}))},...e}),name:"YearsOfStore",hint:"Add YearsOfProvider or CalendarProvider."}),B=({date:e,...r})=>(0,n.jsx)(F.Provider,{state:{years:c({date:e})},...r}),E=(0,d.re)({state:()=>e=>({items:{events:[]},withItems:r=>{e({items:r})}}),name:"CalendarItemsStore",hint:"Add CalendarItemsProvider"}),W=({items:e,...r})=>(0,n.jsx)(E.Provider,{defaults:{items:e},...r}),K=({children:e,date:r})=>(0,n.jsx)(B,{date:r,children:(0,n.jsx)(G,{date:r,children:(0,n.jsx)($,{date:r,children:e})})}),_=({start:e,end:r,startOptions:t={day:"numeric",month:"numeric"},endOptions:s,...o})=>(0,n.jsxs)(h.O,{separator:"→",className:"secondary",...o,children:[(0,n.jsx)(u.Yo,{date:e,options:t}),(0,n.jsx)(u.Yo,{date:r,options:s})]}),V=(0,Z.k)(e=>({calendar:{userSelect:"none"},calendarGrid:{border:"1px solid",borderColor:(0,N.rm)(e,e.colors.gray[6],e.colors.gray[4]),borderBottom:"none",borderRight:"none","&:last-child":{border:"1px solid",borderColor:(0,N.rm)(e,e.colors.gray[6],e.colors.gray[4]),borderRight:"none"}},controlsGrid:{"& > div:last-child":{borderRight:"1px solid",borderRightColor:(0,N.rm)(e,e.colors.gray[6],e.colors.gray[4])}},controls:{display:"flex",flex:"1 1 auto",alignItems:"center"},controlsLeft:{},controlsMiddle:{justifyContent:"center"},controlsRight:{justifyContent:"end"},controlsPrefix:{},controlsSuffix:{},header:{backgroundColor:(0,N.rm)(e,e.colors.gray[6],e.colors.gray[0]),fontWeight:"bold",height:"3em",display:"flex",flex:"1 1 auto",justifyContent:"center",alignItems:"center"},cell:{height:"6em",padding:"0","&:hover":{backgroundColor:(0,N.rm)(e,e.colors.gray[6],e.colors.gray[0])}},monthCell:{display:"flex",flex:"1 1 auto",justifyContent:"center",alignItems:"center"},yearCell:{display:"flex",flex:"1 1 auto",justifyContent:"center",alignItems:"center"},row:{"& > div":{borderRight:"1px solid",borderColor:(0,N.rm)(e,e.colors.gray[6],e.colors.gray[4])}},currentMonth:{fontWeight:"bold",backgroundColor:(0,N.rm)(e,e.colors.gray[6],e.colors.gray[1])},currentYear:{fontWeight:"bold",backgroundColor:(0,N.rm)(e,e.colors.gray[6],e.colors.gray[1])},currentWeek:{},currentDay:{backgroundColor:(0,N.rm)(e,e.colors.gray[6],e.colors.gray[2])},inRange:{fontWeight:"bold"},outOfRange:{backgroundColor:(0,N.rm)(e,e.colors.gray[6],e.colors.gray[0])}})),X=(e,r)=>(0,Y.GV)(e)?e(r):e,H=({withControls:e=!0,controlsTopLeft:r,controlsTopMiddle:t,controlsTopRight:s,controlsBottomLeft:o,controlsBottomMiddle:a,controlsBottomRight:i,children:l,...c})=>{let d=v.useOptionalState(),{classes:u}=V(),h={classes:u};return(0,n.jsxs)(m.x,{className:u.calendar,...c,children:[(0,n.jsx)(R.f,{visible:(0,Y.ls)(d?.isBlock,!1)}),e&&(0,n.jsxs)(S.r,{columns:18,className:k(u.calendarGrid,u.controlsGrid,u.controlsPrefix),m:0,children:[(0,n.jsx)(S.r.Col,{span:7,className:k(u.controls,u.controlsLeft),children:X(r,h)}),(0,n.jsx)(S.r.Col,{span:4,className:k(u.controls,u.controlsMiddle),children:X(t,h)}),(0,n.jsx)(S.r.Col,{span:7,className:k(u.controls,u.controlsRight),children:X(s,h)})]}),X(l,h),e&&(o||a||i)&&(0,n.jsxs)(S.r,{columns:18,className:k(u.calendarGrid,u.controlsGrid,u.controlsSuffix),m:0,children:[(0,n.jsx)(S.r.Col,{span:7,className:k(u.controls,u.controlsLeft),children:X(o,h)}),(0,n.jsx)(S.r.Col,{span:4,className:k(u.controls,u.controlsMiddle),children:X(a,h)}),(0,n.jsx)(S.r.Col,{span:7,className:k(u.controls,u.controlsRight),children:X(i,h)})]})]})},J=({children:e,onClick:r,...t})=>{let{months:{months:o,isCurrent:a,date:i},today:l,prevYear:c,nextYear:d}=T.useState(),h=o.length/4;return(0,n.jsx)(H,{controlsTopLeft:(0,n.jsx)(b.Z,{spacing:"sm",children:(0,n.jsx)(x.z.Group,{children:(0,n.jsx)(x.z,{size:"sm",variant:"subtle",onClick:()=>c(),leftIcon:(0,n.jsx)(O.Z,{}),children:(0,n.jsx)(u.Yo,{date:i.minus({year:1}),options:{year:"numeric"}})})})}),controlsTopMiddle:(0,n.jsx)(b.Z,{spacing:"sm",children:(0,n.jsx)(x.z,{variant:"subtle",onClick:()=>l(),disabled:a,children:(0,n.jsx)(w.x,{c:"dimmed",children:a?(0,n.jsx)(u.Yo,{date:s.ou.now(),options:{day:"numeric",month:"long",year:"numeric"}}):(0,n.jsx)(u.Yo,{date:i,options:{year:"numeric"}})})})}),controlsTopRight:(0,n.jsx)(b.Z,{spacing:"sm",children:(0,n.jsx)(x.z.Group,{children:(0,n.jsx)(x.z,{size:"sm",variant:"subtle",onClick:()=>d(),rightIcon:(0,n.jsx)(z.Z,{}),children:(0,n.jsx)(u.Yo,{date:i.plus({year:1}),options:{year:"numeric"}})})})}),...t,children:({classes:t})=>(0,n.jsxs)(n.Fragment,{children:[Array.from({length:h},(e,s)=>(0,n.jsx)(S.r,{columns:4,className:k(t.calendarGrid,t.row),m:0,children:Array.from({length:4},(e,a)=>{let i=o[4*s+a];return i?(0,n.jsx)(S.r.Col,{span:1,className:k(t.cell,t.monthCell,i.isCurrent?t.currentMonth:void 0),style:r?{cursor:"pointer"}:void 0,onClick:()=>r?.({month:i}),children:i.name},i.id):null})},`month${s}`)),e]})})},q=({onClick:e,highlightToday:r=!0,defaultWithWeekNo:t=!1,weekCountSize:o=2,columnSize:a=3,children:i,...l})=>{let{nextMonth:c,prevMonth:d,prevYear:h,nextYear:m,today:p,weeks:{weeks:v,list:C,start:N,isCurrent:Y}}=L.useState();E.useOptionalState();let[Z,{open:R,close:T}]=(0,D.q)(!1),G=(0,g.useRef)(),[$,F]=(0,g.useState)(t),B=e=>{G.current=e,R()},W=C.length*a+($?o:0);return(0,n.jsx)(H,{controlsTopLeft:(0,n.jsx)(b.Z,{spacing:"sm",children:(0,n.jsxs)(x.z.Group,{children:[(0,n.jsx)(x.z,{size:"sm",variant:"subtle",onClick:()=>d(),leftIcon:(0,n.jsx)(O.Z,{}),children:(0,n.jsx)(u.Yo,{date:N.minus({month:1}),options:{month:"long"}})}),(0,n.jsx)(x.z,{size:"sm",variant:"subtle",onClick:()=>h(),leftIcon:(0,n.jsx)(I.Z,{}),children:(0,n.jsx)(u.Yo,{date:N.minus({year:1}),options:{year:"numeric"}})})]})}),controlsTopMiddle:(0,n.jsx)(b.Z,{spacing:"sm",children:(0,n.jsx)(x.z,{variant:"subtle",onClick:()=>p(),disabled:Y,children:(0,n.jsx)(w.x,{c:"dimmed",children:Y?(0,n.jsx)(u.Yo,{date:s.ou.now(),options:{day:"numeric",month:"long",year:"numeric"}}):(0,n.jsx)(u.Yo,{date:N,options:{month:"long",year:"numeric"}})})})}),controlsTopRight:(0,n.jsx)(b.Z,{spacing:"sm",children:(0,n.jsxs)(x.z.Group,{children:[(0,n.jsx)(x.z,{size:"sm",variant:"subtle",onClick:()=>m(),rightIcon:(0,n.jsx)(M.Z,{}),children:(0,n.jsx)(u.Yo,{date:N.plus({year:1}),options:{year:"numeric"}})}),(0,n.jsx)(x.z,{size:"sm",variant:"subtle",onClick:()=>c(),rightIcon:(0,n.jsx)(z.Z,{}),children:(0,n.jsx)(u.Yo,{date:N.plus({month:1}),options:{month:"long"}})})]})}),controlsBottomLeft:(0,n.jsx)(y.A,{variant:"subtle",onClick:()=>F(e=>!e),children:(0,n.jsx)(P.Z,{})}),...l,children:({classes:t})=>(0,n.jsxs)(n.Fragment,{children:[Z&&(0,n.jsxs)(j.a,{color:"#FFF",opacity:1,children:[(0,n.jsxs)(b.Z,{position:"apart",children:[(0,n.jsx)("div",{}),(0,n.jsx)(y.A,{variant:"subtle",onClick:()=>T(),children:(0,n.jsx)(f.Z,{})})]}),G.current]}),(0,n.jsxs)(S.r,{columns:W,className:k(t.calendarGrid,t.row),m:0,children:[$&&(0,n.jsx)(S.r.Col,{span:o,className:t.header,children:(0,n.jsx)(y.A,{variant:"light",children:(0,n.jsx)(P.Z,{})})}),C.map(e=>(0,n.jsx)(S.r.Col,{span:a,className:t.header,children:e},`day-${e}`))]}),v.map(({days:s,number:i,isCurrent:l,id:c})=>(0,n.jsxs)(S.r,{columns:W,className:k(t.calendarGrid,t.row,l?t.currentWeek:void 0),m:0,children:[$&&(0,n.jsxs)(S.r.Col,{span:o,children:[i,"."]}),s.map(s=>(0,n.jsx)(S.r.Col,{span:a,className:k(t.cell,s.isCurrent&&r?t.currentDay:void 0,s.isOutOfRange?t.outOfRange:t.inRange),style:e?{cursor:"pointer"}:void 0,onClick:()=>{B((0,n.jsx)("h1",{children:s.id})),e?.({day:s})},children:(0,n.jsx)(A.K,{justify:"space-between",style:{height:"100%",padding:"0 0.3em"},children:(0,n.jsxs)(b.Z,{position:"apart",children:[(0,n.jsx)(b.Z,{spacing:0,children:(0,n.jsx)(y.A,{size:"sm",children:(0,n.jsx)(P.Z,{})})}),s.day.day]})})},s.id))]},c)),i]})})},Q=({children:e,onClick:r,...t})=>{let{years:{years:s,isCurrent:o,start:a,end:i,columns:l,rows:c,count:d},today:h,prevYear:m,nextYear:j,prevYears:y,nextYears:p}=F.useState();return(0,n.jsx)(H,{controlsTopLeft:(0,n.jsx)(b.Z,{spacing:"sm",children:(0,n.jsxs)(x.z.Group,{children:[(0,n.jsx)(x.z,{size:"sm",variant:"subtle",onClick:()=>y(),leftIcon:(0,n.jsx)(I.Z,{}),children:(0,n.jsx)(u.Yo,{date:a.minus({year:d}),options:{year:"numeric"}})}),(0,n.jsx)(x.z,{size:"sm",variant:"subtle",onClick:()=>m(),leftIcon:(0,n.jsx)(O.Z,{}),children:(0,n.jsx)(u.Yo,{date:a.minus({year:1}),options:{year:"numeric"}})})]})}),controlsTopMiddle:(0,n.jsx)(b.Z,{spacing:"sm",children:(0,n.jsx)(x.z,{variant:"subtle",onClick:()=>h(),disabled:o,children:(0,n.jsx)(w.x,{c:"dimmed",children:(0,n.jsx)(_,{start:a,end:i,startOptions:{year:"numeric"},endOptions:{year:"numeric"}})})})}),controlsTopRight:(0,n.jsx)(b.Z,{spacing:"sm",children:(0,n.jsxs)(x.z.Group,{children:[(0,n.jsx)(x.z,{size:"sm",variant:"subtle",onClick:()=>j(),rightIcon:(0,n.jsx)(z.Z,{}),children:(0,n.jsx)(u.Yo,{date:i.plus({year:1}),options:{year:"numeric"}})}),(0,n.jsx)(x.z,{size:"sm",variant:"subtle",onClick:()=>p(),leftIcon:(0,n.jsx)(M.Z,{}),children:(0,n.jsx)(u.Yo,{date:i.plus({year:d}),options:{year:"numeric"}})})]})}),...t,children:({classes:t})=>(0,n.jsxs)(n.Fragment,{children:[Array.from({length:c},(e,o)=>(0,n.jsx)(S.r,{columns:l,className:k(t.calendarGrid,t.row),m:0,children:Array.from({length:l},(e,a)=>{let i=s[o*l+a];return i?(0,n.jsx)(S.r.Col,{span:1,className:k(t.cell,t.yearCell,i.isCurrent?t.currentYear:void 0),style:r?{cursor:"pointer"}:void 0,onClick:()=>r?.({year:i}),children:i.name},i.id):null})},`year${o}`)),e]})})},U=({onClick:e,withControls:r=!0,...t})=>{let{weeksOf:s,weeks:o}=L.useState(({weeksOf:e,weeks:r})=>({weeksOf:e,weeks:r})),{monthsOf:a}=T.useState(({monthsOf:e})=>({monthsOf:e})),{yearsOf:i}=F.useState(({yearsOf:e})=>({yearsOf:e})),[l,c]=(0,g.useState)(!1),[d,h]=(0,g.useState)(!1);return(0,n.jsx)(m.x,{pos:"relative",children:(0,n.jsxs)(q,{onClick:e,withControls:r,controlsBottomMiddle:(0,n.jsxs)(x.z.Group,{children:[(0,n.jsx)(x.z,{variant:"subtle",onClick:()=>{c(!0),a(o.date)},leftIcon:(0,n.jsx)(p.Z,{}),children:(0,n.jsx)(u.Yo,{date:o.date,options:{month:"long"}})}),(0,n.jsx)(x.z,{variant:"subtle",onClick:()=>{h(!0),i(o.date)},leftIcon:(0,n.jsx)(p.Z,{}),children:(0,n.jsx)(u.Yo,{date:o.date,options:{year:"numeric"}})})]}),...t,children:[l&&(0,n.jsx)(j.a,{color:"#FFF",opacity:1,children:(0,n.jsx)(J,{onClick:({month:{month:e}})=>{s(e),c(!1)},controlsBottomMiddle:(0,n.jsx)(y.A,{variant:"subtle",onClick:()=>c(!1),children:(0,n.jsx)(f.Z,{})})})}),d&&(0,n.jsx)(j.a,{color:"#FFF",opacity:1,children:(0,n.jsx)(Q,{onClick:({year:{year:e}})=>{s(e),h(!1)},controlsBottomMiddle:(0,n.jsx)(y.A,{variant:"subtle",onClick:()=>h(!1),children:(0,n.jsx)(f.Z,{})})})})]})})};let ee=e=>(0,n.jsx)(C,{isBlock:!0,children:(0,n.jsx)(W,{items:{events:[{date:s.ou.now().minus({day:5}),data:{foo:"1234"}},{date:s.ou.now().plus({day:4}),data:{bar:"12344"}},{date:s.ou.now().plus({day:4}),data:{bar:"another bar"}}]},children:(0,n.jsx)(K,{date:s.ou.fromObject({month:2,day:12}),children:(0,n.jsx)(er,{...e})})})}),er=e=>{let{unblock:r}=v.useState(e=>{let{unblock:r}=e;return{unblock:r}}),[t,s]=(0,g.useState)();return(0,g.useEffect)(()=>{setTimeout(()=>{r()},750)},[]),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(U,{onClick:e=>{let{day:r}=e;return s(r)},...e}),(0,n.jsxs)("div",{children:["selected date: ",t?(0,n.jsx)(u.Yo,{date:t.day}):"- click the calendar -"]})]})},et=()=>(0,n.jsx)(N.N2,{children:(0,n.jsx)(ee,{})}),en=e=>(0,n.jsx)(K,{children:(0,n.jsx)(U,{withControls:!1,...e})}),es=()=>(0,n.jsx)(G,{children:(0,n.jsx)(J,{})}),eo=()=>(0,n.jsx)(N.N2,{children:(0,n.jsx)(es,{})}),ea=()=>(0,n.jsx)($,{children:(0,n.jsx)(q,{withControls:!1})}),ei=()=>(0,n.jsx)(N.N2,{children:(0,n.jsx)(ea,{})}),el=()=>(0,n.jsx)(B,{children:(0,n.jsx)(Q,{})}),ec=()=>(0,n.jsx)(N.N2,{children:(0,n.jsx)(el,{})})},8273:function(e,r,t){var n=t(2322),s=t(6577),o=t.n(s);let a={logo:(0,n.jsxs)("div",{style:{width:"10em",display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center"},children:[(0,n.jsx)(o(),{alt:"logo",src:"https://avatars.githubusercontent.com/u/74918176?s=96&v=4",width:24,height:24}),(0,n.jsx)("span",{children:"Project: Leight Viv"})]}),project:{link:"https://github.com/leight-core/viv"},docsRepositoryBase:"https://github.com/leight-core/viv/tree/main/nextra",footer:{text:"Project Leight Viv Documentation"},sidebar:{defaultMenuCollapseLevel:1,toggleButton:!0},banner:{key:"wip",text:"This documentation is still work in progress, so be please patient."},toc:{float:!0}};r.Z=a},7817:function(e,r,t){t.d(r,{re:function(){return j}});var n=t(2784),s=t(5666),o=t(2322),a=t(2893),i=t(2294),l=()=>(0,n.createContext)(null),c=(e,r)=>(0,s.GV)(e)?(0,o.jsx)(r.Consumer,{children:t=>{if(!t)throw Error(`There is no [${r.displayName}] context provider.`);return e(t)}}):e,d=({createStore:e,Context:r})=>function({children:t,defaults:s,state:a}){let i=e({defaults:s,state:a}),l=(0,n.useMemo)(()=>({state:i.getState(),store:i}),[]);return(0,o.jsx)(r.Provider,{value:l,children:c(t,r)})};function u(e,r,t){let s=(0,n.useContext)(e);if(!s)throw Error(`There is no [${r}] context available.${t?`" ${t}`:""} `);return s}function h(e){return(0,n.useContext)(e)}var m=(e,r,t)=>n=>{let{store:s}=u(e,r,t);return n?(0,i.oR)(s,n):(0,i.oR)(s)},x=e=>r=>{let{store:t}=h(e)||{};return t?r?(0,i.oR)(t,r):(0,i.oR)(t):null},j=({state:e,name:r,hint:t})=>{let n=l();return{Provider:d({Context:n,createStore:({defaults:r,state:t})=>(0,a.M)((n,s,o)=>({...e({defaults:r,state:t})(n,s,o),...r}))}),useState:m(n,r,t),useOptionalState:x(n),useStore:()=>u(n,r,t).store,useOptionalStore:()=>h(n)?.store||null}}},3540:function(e,r,t){t.d(r,{Yo:function(){return m},pk:function(){return u},Wb:function(){return x}});var n=t(7817),s=t(6234),o=t(5666),a=e=>(0,o.Kn)(e)&&"toJSDate"in e,i=t(2322),l=t(4076),c=(e,r,t)=>(e||(e=r),e)?(0,o.HD)(e)?s.ou.fromISO(e).toLocaleString(t):a(e)?e.toLocaleString(t):s.ou.fromJSDate(e).toLocaleString(t):void 0,d=(0,n.re)({state:()=>()=>({toLocalDate:(e,r,t=s.ou.DATE_MED)=>c(e,r,t),toLocalDateTime:(e,r,t=s.ou.DATETIME_MED)=>c(e,r,t)}),name:"DateTimeStore",hint:"Add DateTimeStore.Provider."}),u=({...e})=>(0,i.jsx)(d.Provider,{...e}),h=e=>(0,l.$G)(e),m=({date:e,fallback:r,options:t,...n})=>{let{toLocalDate:s}=d.useState(({toLocalDate:e})=>({toLocalDate:e}));return(0,i.jsx)("span",{...n,children:s(e,r,t)})},x=({label:e,namespace:r,withLabelFallback:t,values:n})=>{let{t:s}=h(r);return e?(0,i.jsx)(i.Fragment,{children:(0,o.HD)(e)?t?s(e,t,n):s(e,n):e}):null}},9335:function(e,r,t){t.d(r,{N2:function(){return c},rm:function(){return l}}),t(2784);var n=t(1319),s=t(2322);t(3848),t(7729),t(5632);var o=t(3540),a=t(5149),i=t(2871),l=(e,r,t)=>"dark"===e.colorScheme?r:t;(0,n.k)(e=>({paper:{"&:hover":{boxShadow:e.shadows.lg}}}));var c=({colorScheme:e="light",emotionCache:r,children:t})=>(0,s.jsx)(a.Me,{theme:{colorScheme:e},withGlobalStyles:!0,withNormalizeCSS:!0,emotionCache:r,children:(0,s.jsxs)(o.pk,{children:[(0,s.jsx)(i.T,{position:"top-right"}),t]})})},5666:function(e,r,t){t.d(r,{GV:function(){return a},HD:function(){return l},Kn:function(){return i},ls:function(){return c}}),t(3453);var n=t(9680),s=t(6985),o=t(6302);t(6867);var a=e=>n(e),i=s,l=e=>o(e),c=(e,r)=>void 0===e?r:e}}]);