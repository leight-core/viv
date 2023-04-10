(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8446],{5280:function(e,n,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/packages/calendar-client/months",function(){return s(3254)}])},5650:function(e,n,s){"use strict";s.d(n,{w:function(){return o}});var a=s(2322),t=s(4411);let o=e=>{let{example:n,children:s}=e;return(0,a.jsxs)(t.mQ,{items:["Example","Code"],children:[(0,a.jsx)(t.OK,{children:n}),(0,a.jsx)(t.OK,{children:s})]})}},9517:function(e,n,s){"use strict";s.d(n,{rd:function(){return h},gK:function(){return x},k:function(){return u},Pm:function(){return m},Rz:function(){return v}});var a=s(2322),t=s(9964),o=s(6234),i=s(6171),r=s(4436),c=s(2784);let l=e=>(0,a.jsx)(r.ZJ,{isBlock:!0,children:(0,a.jsx)(t.gi,{date:o.ou.fromObject({month:2,day:12}),children:(0,a.jsx)(d,{...e})})}),d=e=>{let{unblock:n}=r.G.useState(e=>{let{unblock:n}=e;return{unblock:n}}),[s,o]=(0,c.useState)();return(0,c.useEffect)(()=>{setTimeout(()=>{n()},750)},[]),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.f,{onClick:e=>{let{day:n}=e;return o(n)},...e}),(0,a.jsxs)("div",{children:["selected date: ",s?(0,a.jsx)(i.Yo,{date:s.day}):"- click the calendar -"]})]})};var k=s(4590);let h=()=>(0,a.jsx)(k.N2,{children:(0,a.jsx)(l,{})}),x=e=>(0,a.jsx)(t.gi,{children:(0,a.jsx)(t.f,{withControls:!1,...e})}),p=()=>(0,a.jsx)(t.MT,{children:(0,a.jsx)(t.zC,{})}),u=()=>(0,a.jsx)(k.N2,{children:(0,a.jsx)(p,{})}),g=()=>(0,a.jsx)(t.Fh,{children:(0,a.jsx)(t.B3,{withControls:!1})}),m=()=>(0,a.jsx)(k.N2,{children:(0,a.jsx)(g,{})}),j=()=>(0,a.jsx)(t.ui,{children:(0,a.jsx)(t.wE,{})}),v=()=>(0,a.jsx)(k.N2,{children:(0,a.jsx)(j,{})})},8273:function(e,n,s){"use strict";var a=s(2322),t=s(6577),o=s.n(t);let i={logo:(0,a.jsxs)("div",{style:{width:"10em",display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center"},children:[(0,a.jsx)(o(),{alt:"logo",src:"https://avatars.githubusercontent.com/u/74918176?s=96&v=4",width:24,height:24}),(0,a.jsx)("span",{children:"Project: Leight Viv"})]}),project:{link:"https://github.com/leight-core/viv"},docsRepositoryBase:"https://github.com/leight-core/viv/tree/main/nextra",footer:{text:"Project Leight Viv Documentation"},sidebar:{defaultMenuCollapseLevel:1,toggleButton:!0},banner:{key:"wip",text:"This documentation is still work in progress, so be please patient."},toc:{float:!0}};n.Z=i},3254:function(e,n,s){"use strict";s.r(n);var a=s(2322),t=s(7846),o=s(4411),i=s(8273);s(6908);var r=s(5392);s(6577);var c=s(5650),l=s(9517);function d(e){let n=Object.assign({h1:"h1",p:"p",h2:"h2",pre:"pre",code:"code",span:"span"},(0,r.ah)(),e.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{children:"Months"}),"\n",(0,a.jsx)(n.p,{children:"Months calendar based on an arbitrary input date (to get current year)."}),"\n",(0,a.jsx)(n.h2,{id:"minimal-example",children:"Minimal example"}),"\n",(0,a.jsx)(c.w,{example:(0,a.jsx)(l.k,{}),children:(0,a.jsx)(n.pre,{"data-language":"tsx","data-theme":"default",filename:"DefaultMonths.tsx",children:(0,a.jsxs)(n.code,{"data-language":"tsx","data-theme":"default",children:[(0,a.jsxs)(n.span,{className:"line",children:[(0,a.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,a.jsxs)(n.span,{className:"line",children:[(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"    Months"}),(0,a.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,a.jsx)(n.span,{className:"line",children:(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"    MonthsOfProvider"})}),"\n",(0,a.jsxs)(n.span,{className:"line",children:[(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"}                "}),(0,a.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"from"}),(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,a.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"@leight/calendar-client"'}),(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,a.jsxs)(n.span,{className:"line",children:[(0,a.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" {"}),(0,a.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"type"}),(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" FC} "}),(0,a.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"from"}),(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,a.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"react"'}),(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,a.jsx)(n.span,{className:"line",children:" "}),"\n",(0,a.jsxs)(n.span,{className:"line",children:[(0,a.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"export"}),(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,a.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"interface"}),(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,a.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"IDefaultMonthsProps"}),(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,a.jsx)(n.span,{className:"line",children:(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"}"})}),"\n",(0,a.jsx)(n.span,{className:"line",children:" "}),"\n",(0,a.jsxs)(n.span,{className:"line",children:[(0,a.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"export"}),(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,a.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"const"}),(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,a.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"DefaultMonths"}),(0,a.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,a.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"FC"}),(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"<"}),(0,a.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"IDefaultMonthsProps"}),(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"> "}),(0,a.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" () "}),(0,a.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"=>"}),(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,a.jsxs)(n.span,{className:"line",children:[(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,a.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"return"}),(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" <"}),(0,a.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"MonthsOfProvider"}),(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:">"})]}),"\n",(0,a.jsxs)(n.span,{className:"line",children:[(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"        <"}),(0,a.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"Months"}),(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"/>"})]}),"\n",(0,a.jsxs)(n.span,{className:"line",children:[(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"    </"}),(0,a.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"MonthsOfProvider"}),(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:">;"})]}),"\n",(0,a.jsx)(n.span,{className:"line",children:(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"};"})})]})})})]})}let k={MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,r.ah)(),e.components);return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)},pageOpts:{filePath:"pages/docs/packages/calendar-client/months.mdx",route:"/docs/packages/calendar-client/months",headings:[{depth:1,value:"Months",id:"months"},{depth:2,value:"Minimal example",id:"minimal-example"}],timestamp:1680716232e3,pageMap:[{kind:"MdxPage",name:"about",route:"/about"},{kind:"Folder",name:"docs",route:"/docs",children:[{kind:"Folder",name:"concepts",route:"/docs/concepts",children:[{kind:"MdxPage",name:"code-splitting",route:"/docs/concepts/code-splitting"},{kind:"MdxPage",name:"index",route:"/docs/concepts"},{kind:"MdxPage",name:"mcp",route:"/docs/concepts/mcp"},{kind:"MdxPage",name:"monorepo",route:"/docs/concepts/monorepo"},{kind:"MdxPage",name:"package.json",route:"/docs/concepts/package.json"},{kind:"Folder",name:"source",route:"/docs/concepts/source",children:[{kind:"MdxPage",name:"client",route:"/docs/concepts/source/client"},{kind:"MdxPage",name:"index",route:"/docs/concepts/source"},{kind:"MdxPage",name:"server",route:"/docs/concepts/source/server"},{kind:"Meta",data:{index:"Introduction",client:"Client",server:"Server"}}]},{kind:"Meta",data:{index:"Introduction",monorepo:"Monorepo","package.json":"package.json",mcp:"Managed Code Pattern","code-splitting":"Code splitting",source:"Source"}}]},{kind:"Folder",name:"getting-started",route:"/docs/getting-started",children:[{kind:"MdxPage",name:"installation",route:"/docs/getting-started/installation"},{kind:"MdxPage",name:"packages",route:"/docs/getting-started/packages"},{kind:"Meta",data:{packages:"Packages",installation:"Installation"}}]},{kind:"MdxPage",name:"index",route:"/docs"},{kind:"Folder",name:"packages",route:"/docs/packages",children:[{kind:"Folder",name:"calendar-client",route:"/docs/packages/calendar-client",children:[{kind:"MdxPage",name:"calendar-provider",route:"/docs/packages/calendar-client/calendar-provider"},{kind:"MdxPage",name:"calendar",route:"/docs/packages/calendar-client/calendar"},{kind:"MdxPage",name:"index",route:"/docs/packages/calendar-client"},{kind:"MdxPage",name:"months",route:"/docs/packages/calendar-client/months"},{kind:"MdxPage",name:"weeks",route:"/docs/packages/calendar-client/weeks"},{kind:"MdxPage",name:"years",route:"/docs/packages/calendar-client/years"},{kind:"Meta",data:{index:"Overview",calendar:"Calendar",weeks:"Weeks",months:"Months",years:"Years","calendar-provider":"CalendarProvider"}}]},{kind:"MdxPage",name:"container",route:"/docs/packages/container"},{kind:"MdxPage",name:"context-client",route:"/docs/packages/context-client"},{kind:"MdxPage",name:"esbuild",route:"/docs/packages/esbuild"},{kind:"Folder",name:"i18n",route:"/docs/packages/i18n",children:[{kind:"MdxPage",name:"index",route:"/docs/packages/i18n"},{kind:"MdxPage",name:"weeks-of",route:"/docs/packages/i18n/weeks-of"},{kind:"Meta",data:{index:"Overview","weeks-of":"weeksOf"}}]},{kind:"Folder",name:"i18n-client",route:"/docs/packages/i18n-client",children:[{kind:"MdxPage",name:"date-time-provider",route:"/docs/packages/i18n-client/date-time-provider"},{kind:"MdxPage",name:"index",route:"/docs/packages/i18n-client"},{kind:"Meta",data:{index:"Overview","date-time-provider":"DateTimeProvider"}}]},{kind:"MdxPage",name:"index",route:"/docs/packages"},{kind:"Folder",name:"mantine",route:"/docs/packages/mantine",children:[{kind:"MdxPage",name:"index",route:"/docs/packages/mantine"},{kind:"MdxPage",name:"page-shell",route:"/docs/packages/mantine/page-shell"},{kind:"MdxPage",name:"shell",route:"/docs/packages/mantine/shell"},{kind:"Meta",data:{index:"Overview","page-shell":"PageShell",shell:"Shell"}}]},{kind:"MdxPage",name:"sdk",route:"/docs/packages/sdk"},{kind:"MdxPage",name:"source",route:"/docs/packages/source"},{kind:"Folder",name:"table-client",route:"/docs/packages/table-client",children:[{kind:"MdxPage",name:"index",route:"/docs/packages/table-client"},{kind:"MdxPage",name:"source-table",route:"/docs/packages/table-client/source-table"},{kind:"MdxPage",name:"table",route:"/docs/packages/table-client/table"},{kind:"Meta",data:{index:"Overview",table:"Table","source-table":"SourceTable"}}]},{kind:"MdxPage",name:"utils-client",route:"/docs/packages/utils-client"},{kind:"MdxPage",name:"utils",route:"/docs/packages/utils"},{kind:"MdxPage",name:"zustand",route:"/docs/packages/zustand"},{kind:"Meta",data:{index:"Overview","calendar-client":"calendar-client",container:"container","context-client":"context-client",esbuild:"esbuild",i18n:"i18n","i18n-client":"i18n-client",mantine:"mantine",sdk:"sdk",source:"source","table-client":"table-client",utils:"utils","utils-client":"utils-client",zustand:"zustand"}}]},{kind:"Folder",name:"workbench",route:"/docs/workbench",children:[{kind:"MdxPage",name:"i18n",route:"/docs/workbench/i18n"},{kind:"MdxPage",name:"index",route:"/docs/workbench"},{kind:"MdxPage",name:"monorepo",route:"/docs/workbench/monorepo"},{kind:"MdxPage",name:"prisma",route:"/docs/workbench/prisma"},{kind:"MdxPage",name:"sdk",route:"/docs/workbench/sdk"},{kind:"MdxPage",name:"zustand",route:"/docs/workbench/zustand"},{kind:"Meta",data:{index:"Overview",monorepo:"Monorepo",prisma:"Prisma",i18n:"i18n",zustand:"Zustand",sdk:"SDK"}}]},{kind:"Meta",data:{index:{title:"Welcome"},concepts:"Concepts","getting-started":"Getting started",workbench:"Workbench",packages:"Packages"}}]},{kind:"MdxPage",name:"index",route:"/"},{kind:"Meta",data:{"*":{type:"page"},index:{title:"Home",theme:{toc:!0}},docs:"Docs",about:{title:"About",theme:{typesetting:"article"}}}}],flexsearch:{codeblocks:!0},title:"Months"},pageNextRoute:"/docs/packages/calendar-client/months",nextraLayout:o.ZP,themeConfig:i.Z};n.default=(0,t.j)(k)}},function(e){e.O(0,[9774,658,8584,9964,2888,179],function(){return e(e.s=5280)}),_N_E=e.O()}]);