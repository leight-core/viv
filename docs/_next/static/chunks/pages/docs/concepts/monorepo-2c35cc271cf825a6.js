(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4215],{2167:function(e,n,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/concepts/monorepo",function(){return a(1694)}])},8273:function(e,n,a){"use strict";var t=a(2322),o=a(6577),i=a.n(o);let s={logo:(0,t.jsxs)("div",{style:{width:"10em",display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center"},children:[(0,t.jsx)(i(),{alt:"logo",src:"https://avatars.githubusercontent.com/u/74918176?s=96&v=4",width:24,height:24}),(0,t.jsx)("span",{children:"Project: Leight Viv"})]}),project:{link:"https://github.com/leight-core/viv"},docsRepositoryBase:"https://github.com/leight-core/viv/tree/main/nextra",footer:{text:"Project Leight Viv Documentation"},sidebar:{defaultMenuCollapseLevel:1,toggleButton:!0},banner:{key:"wip",text:"This documentation is still work in progress, so be please patient."},toc:{float:!0}};n.Z=s},1694:function(e,n,a){"use strict";a.r(n);var t=a(2322),o=a(7846),i=a(1119),s=a(8273);a(6908);var d=a(5392);function c(e){let n=Object.assign({h1:"h1",p:"p",a:"a",em:"em",strong:"strong",h2:"h2",code:"code"},(0,d.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{children:"Monorepo"}),"\n",(0,t.jsx)(i.UW,{type:"info",emoji:"ℹ️",children:(0,t.jsxs)(n.p,{children:["This page is just about concept and reasons, if you want full guide, see ",(0,t.jsx)(n.a,{href:"../workbench/monorepo",children:"this workbench page"}),"."]})}),"\n",(0,t.jsxs)(n.p,{children:["Because a lot of concepts here are based on splitting code into smaller packages, I should say ",(0,t.jsx)(n.em,{children:(0,t.jsx)(n.strong,{children:"packages with single responsibility"})}),",\nmonorepo is needed."]}),"\n",(0,t.jsxs)(n.p,{children:["This is just a concept, why it's required, for tutorial, see ",(0,t.jsx)(n.a,{href:"../workbench/monorepo",children:"Workbench"}),". Because this project uses ",(0,t.jsx)(n.a,{href:"https://turbo.build/repo",children:"Turborepo"}),", it\nalso provides setup using this tool."]}),"\n",(0,t.jsx)(n.h2,{id:"whats-good",children:"What's good"}),"\n",(0,t.jsxs)(n.p,{children:["You can create bilions of small libraries (those things with ",(0,t.jsx)(n.code,{children:"package.json"}),") and split the logic/code across them. This library also generates a lof of stuff and it really\nlikes things clean and shiny, so you ",(0,t.jsx)(n.strong,{children:"will"})," have hard time if you do things in a different way. It may work, but be careful."]}),"\n",(0,t.jsx)(n.p,{children:"So yes, obvious bonus is separated code and clean dependencies. You can also reuse pieces of your own app if you wish to publish your packages into the registry."}),"\n",(0,t.jsx)(n.h2,{id:"whats-not-so-good",children:"What's not so good"}),"\n",(0,t.jsx)(n.p,{children:"IDE support. Because of TypeScript and dynamics of development of small libraries, IDE support may suck a lot of time, you loose finding references, refactoring is quite\nhard and overall experience is a bit worse. That's a tradeoff of separated packages. You should accept it."}),"\n",(0,t.jsx)(n.h2,{id:"whats-pita",children:"What's PITA"}),"\n",(0,t.jsxs)(i.UW,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"PNPM"}),". NEVER EVER use pnpm with ",(0,t.jsx)(n.code,{children:"@leight"})," and monorepo. Why? Because it's in PITA section which means you will never sit again."]}),(0,t.jsxs)(n.p,{children:["Main problem is the way PNPM manages ",(0,t.jsx)(n.code,{children:"node_modules"})," where it tries isolate everything, so TypeScript cries a lot, because ",(0,t.jsx)(n.code,{children:"it cannot name types without blablabla (you probably     know that error)"}),", but ",(0,t.jsx)(n.code,{children:"npm"})," is cool with it and when you want generate Prisma schema, that's real hell. It's generated into one part of packages, but the others do not see it."]}),(0,t.jsxs)(n.p,{children:["So, if you ",(0,t.jsx)(n.strong,{children:"really"})," want to use PNPM, ",(0,t.jsx)(n.strong,{children:"do not ask"})," any questions."]})]}),"\n",(0,t.jsx)(n.p,{children:"Building. Application or library with time of a few seconds can go up to a few minutes. Rebuilding, total mess. And last - and not least - live coding (watch). This was\nquite hard to get done in the right way and it's not optimal, but somehow works. You have to find way (here it's documented) how to execute, for example, 30 libraries in watch\nmode without you Mac being a small bomb."}),"\n",(0,t.jsx)(n.p,{children:"So be prepared having things in monorepo makes a bit heavier demands on your computer and overall setup of the project."}),"\n",(0,t.jsxs)(n.p,{children:["Also startup time of the app could be quite painful. It depends on the tool you use, but there is cool ",(0,t.jsx)(n.a,{href:"https://github.com/gajus/turbowatch",children:"Turbowatch"}),", which helps a lot."]}),"\n",(0,t.jsx)(i.UW,{type:"info",emoji:"ℹ️",children:(0,t.jsx)(n.p,{children:"So be brave and continue, there is still a lot of interesting stuff going on, we've got you covered."})})]})}a(6577);let r={MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,d.ah)(),e.components);return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)},pageOpts:{filePath:"pages/docs/concepts/monorepo.mdx",route:"/docs/concepts/monorepo",headings:[{depth:1,value:"Monorepo",id:"monorepo"},{depth:2,value:"What's good",id:"whats-good"},{depth:2,value:"What's not so good",id:"whats-not-so-good"},{depth:2,value:"What's PITA",id:"whats-pita"}],timestamp:1680026356e3,pageMap:[{kind:"MdxPage",name:"about",route:"/about"},{kind:"Folder",name:"docs",route:"/docs",children:[{kind:"Folder",name:"concepts",route:"/docs/concepts",children:[{kind:"MdxPage",name:"code-splitting",route:"/docs/concepts/code-splitting"},{kind:"MdxPage",name:"index",route:"/docs/concepts"},{kind:"MdxPage",name:"mcp",route:"/docs/concepts/mcp"},{kind:"MdxPage",name:"monorepo",route:"/docs/concepts/monorepo"},{kind:"MdxPage",name:"package.json",route:"/docs/concepts/package.json"},{kind:"Folder",name:"source",route:"/docs/concepts/source",children:[{kind:"MdxPage",name:"client",route:"/docs/concepts/source/client"},{kind:"MdxPage",name:"index",route:"/docs/concepts/source"},{kind:"MdxPage",name:"server",route:"/docs/concepts/source/server"},{kind:"Meta",data:{index:"Introduction",client:"Client",server:"Server"}}]},{kind:"Meta",data:{index:"Introduction",monorepo:"Monorepo","package.json":"package.json",mcp:"Managed Code Pattern","code-splitting":"Code splitting",source:"Source"}}]},{kind:"Folder",name:"getting-started",route:"/docs/getting-started",children:[{kind:"MdxPage",name:"installation",route:"/docs/getting-started/installation"},{kind:"MdxPage",name:"packages",route:"/docs/getting-started/packages"},{kind:"Meta",data:{packages:"Packages",installation:"Installation"}}]},{kind:"MdxPage",name:"index",route:"/docs"},{kind:"Folder",name:"packages",route:"/docs/packages",children:[{kind:"Folder",name:"calendar-client",route:"/docs/packages/calendar-client",children:[{kind:"MdxPage",name:"calendar-provider",route:"/docs/packages/calendar-client/calendar-provider"},{kind:"MdxPage",name:"calendar",route:"/docs/packages/calendar-client/calendar"},{kind:"MdxPage",name:"index",route:"/docs/packages/calendar-client"},{kind:"MdxPage",name:"months",route:"/docs/packages/calendar-client/months"},{kind:"MdxPage",name:"weeks",route:"/docs/packages/calendar-client/weeks"},{kind:"MdxPage",name:"years",route:"/docs/packages/calendar-client/years"},{kind:"Meta",data:{index:"Overview",calendar:"Calendar","calendar-provider":"CalendarProvider",weeks:"Weeks",months:"Months",years:"Years"}}]},{kind:"MdxPage",name:"container",route:"/docs/packages/container"},{kind:"MdxPage",name:"context-client",route:"/docs/packages/context-client"},{kind:"MdxPage",name:"esbuild",route:"/docs/packages/esbuild"},{kind:"Folder",name:"i18n",route:"/docs/packages/i18n",children:[{kind:"MdxPage",name:"index",route:"/docs/packages/i18n"},{kind:"MdxPage",name:"weeks-of",route:"/docs/packages/i18n/weeks-of"},{kind:"Meta",data:{index:"Overview","weeks-of":"weeksOf"}}]},{kind:"Folder",name:"i18n-client",route:"/docs/packages/i18n-client",children:[{kind:"MdxPage",name:"date-time-provider",route:"/docs/packages/i18n-client/date-time-provider"},{kind:"MdxPage",name:"index",route:"/docs/packages/i18n-client"},{kind:"Meta",data:{index:"Overview","date-time-provider":"DateTimeProvider"}}]},{kind:"MdxPage",name:"index",route:"/docs/packages"},{kind:"Folder",name:"mantine",route:"/docs/packages/mantine",children:[{kind:"MdxPage",name:"index",route:"/docs/packages/mantine"},{kind:"MdxPage",name:"page-shell",route:"/docs/packages/mantine/page-shell"},{kind:"MdxPage",name:"shell",route:"/docs/packages/mantine/shell"},{kind:"Meta",data:{index:"Overview","page-shell":"PageShell",shell:"Shell"}}]},{kind:"MdxPage",name:"sdk",route:"/docs/packages/sdk"},{kind:"MdxPage",name:"source",route:"/docs/packages/source"},{kind:"Folder",name:"table-client",route:"/docs/packages/table-client",children:[{kind:"MdxPage",name:"index",route:"/docs/packages/table-client"},{kind:"MdxPage",name:"source-table",route:"/docs/packages/table-client/source-table"},{kind:"MdxPage",name:"table",route:"/docs/packages/table-client/table"},{kind:"Meta",data:{index:"Overview",table:"Table","source-table":"SourceTable"}}]},{kind:"MdxPage",name:"utils-client",route:"/docs/packages/utils-client"},{kind:"MdxPage",name:"utils",route:"/docs/packages/utils"},{kind:"MdxPage",name:"zustand",route:"/docs/packages/zustand"},{kind:"Meta",data:{index:"Overview","calendar-client":"calendar-client",container:"container","context-client":"context-client",esbuild:"esbuild",i18n:"i18n","i18n-client":"i18n-client",mantine:"mantine",sdk:"sdk",source:"source","table-client":"table-client",utils:"utils","utils-client":"utils-client",zustand:"zustand"}}]},{kind:"Folder",name:"workbench",route:"/docs/workbench",children:[{kind:"MdxPage",name:"i18n",route:"/docs/workbench/i18n"},{kind:"MdxPage",name:"index",route:"/docs/workbench"},{kind:"MdxPage",name:"monorepo",route:"/docs/workbench/monorepo"},{kind:"MdxPage",name:"prisma",route:"/docs/workbench/prisma"},{kind:"MdxPage",name:"sdk",route:"/docs/workbench/sdk"},{kind:"MdxPage",name:"zustand",route:"/docs/workbench/zustand"},{kind:"Meta",data:{index:"Overview",monorepo:"Monorepo",prisma:"Prisma",i18n:"i18n",zustand:"Zustand",sdk:"SDK"}}]},{kind:"Meta",data:{index:{title:"Welcome"},concepts:"Concepts","getting-started":"Getting started",workbench:"Workbench",packages:"Packages"}}]},{kind:"MdxPage",name:"index",route:"/"},{kind:"Meta",data:{"*":{type:"page"},index:{title:"Home",theme:{toc:!0}},docs:"Docs",about:{title:"About",theme:{typesetting:"article"}}}}],flexsearch:{codeblocks:!0},title:"Monorepo"},pageNextRoute:"/docs/concepts/monorepo",nextraLayout:i.ZP,themeConfig:s.Z};n.default=(0,o.j)(r)}},function(e){e.O(0,[9774,3580,2888,179],function(){return e(e.s=2167)}),_N_E=e.O()}]);