(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[501],{9320:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/concepts/code-splitting",function(){return t(3586)}])},9369:function(e,n,t){"use strict";var i=t(5893),o=t(5675),s=t.n(o);let c={logo:(0,i.jsxs)("div",{style:{width:"10em",display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center"},children:[(0,i.jsx)(s(),{alt:"logo",src:"https://avatars.githubusercontent.com/u/74918176?s=96&v=4",width:24,height:24}),(0,i.jsx)("span",{children:"Project: Leight Viv"})]}),project:{link:"https://github.com/leight-core/viv"},docsRepositoryBase:"https://github.com/leight-core/viv/tree/main/nextra",footer:{text:"Project Leight Viv Documentation"},sidebar:{defaultMenuCollapseLevel:1,toggleButton:!0},banner:{key:"wip",text:"This documentation is still work in progress, so be please patient."},toc:{float:!0}};n.Z=c},3586:function(e,n,t){"use strict";t.r(n);var i=t(5893),o=t(4319),s=t(3762),c=t(9369);t(9966);var r=t(1151);function d(e){let n=Object.assign({h1:"h1",p:"p",em:"em",a:"a",strong:"strong",h2:"h2",code:"code",h3:"h3"},(0,r.ah)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{children:"Code splitting"}),"\n",(0,i.jsx)(s.UW,{children:(0,i.jsxs)(n.p,{children:["This chapter expects you ",(0,i.jsx)(n.em,{children:"follow concept"})," of ",(0,i.jsx)(n.a,{href:"/docs/concepts/monorepo",children:"monorepo"})," as it ",(0,i.jsx)(n.strong,{children:"requires"})," splitting your packages into several sub-packages."]})}),"\n",(0,i.jsx)(n.h2,{id:"prologue",children:"Prologue"}),"\n",(0,i.jsxs)(n.p,{children:["The structure of this library may look quite ",(0,i.jsx)(n.em,{children:"crazy"}),", but there is a reason, why it's done in a such way."]}),"\n",(0,i.jsxs)(n.p,{children:["The problem was that I've used ",(0,i.jsx)(n.em,{children:"a lot of"})," code which was ",(0,i.jsx)(n.em,{children:"client-only"})," or ",(0,i.jsx)(n.em,{children:"server-only"})," ",(0,i.jsx)(n.strong,{children:"mixed together"}),". Or just a little utility function, which takes some ",(0,i.jsx)(n.em,{children:"Node"})," specific\ncode to the client. It was pain."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.em,{children:"So here comes the solution."})}),"\n",(0,i.jsx)(n.h2,{id:"client",children:"Client"}),"\n",(0,i.jsx)(s.UW,{type:"info",emoji:"ℹ️",children:(0,i.jsxs)(n.p,{children:["Here you would have all the dependencies on React, UI libraries and other nice stuff which belongs to the client-only. This package can freely depend on other ",(0,i.jsx)(n.code,{children:"-client"})," or ",(0,i.jsx)(n.em,{children:"common name"})," packages, but\n",(0,i.jsx)(n.strong,{children:"never"})," on ",(0,i.jsx)(n.code,{children:"-server"})," packages."]})}),"\n",(0,i.jsxs)(n.p,{children:["Every package related only to ",(0,i.jsx)(n.strong,{children:"client side"})," ends with ",(0,i.jsx)(n.code,{children:"-client"})," suffix. Even there are some funny situations where I've got ",(0,i.jsx)(n.code,{children:"client-client"})," package for client aka ",(0,i.jsx)(n.em,{children:"customer"})," on client\nside aka ",(0,i.jsx)(n.em,{children:"browser"}),". But even with it, ",(0,i.jsx)(n.em,{children:"I've followed this concept"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"server",children:"Server"}),"\n",(0,i.jsx)(s.UW,{type:"info",emoji:"ℹ️",children:(0,i.jsxs)(n.p,{children:["This package is meant to be used only in ",(0,i.jsx)(n.code,{children:"Node"})," environment, so you can use whatever you want. Just not browser stuff; usually here you will ",(0,i.jsx)(n.strong,{children:"not"})," have any kind of client-side packages\nlike React and so on. Server-side can freely depend on other ",(0,i.jsx)(n.code,{children:"-server"})," packages but ",(0,i.jsx)(n.strong,{children:"never"})," depend on ",(0,i.jsx)(n.code,{children:"-client"})," packages; it could also include ",(0,i.jsx)(n.em,{children:"common name"})," package."]})}),"\n",(0,i.jsxs)(n.p,{children:["Same for ",(0,i.jsx)(n.strong,{children:"server-side"})," - everything related to the ",(0,i.jsx)(n.em,{children:"Node world"})," not usable in browser should go into ",(0,i.jsx)(n.code,{children:"-server"})," package. Sometimes package names could be crazy long, but keep the concept,\nyou won't regret it."]}),"\n",(0,i.jsx)(n.h2,{id:"the-others",children:"The others"}),"\n",(0,i.jsx)(s.UW,{type:"info",emoji:"ℹ️",children:(0,i.jsxs)(n.p,{children:["Just interfaces. You ",(0,i.jsx)(n.strong,{children:"should prevent"})," implementing any kind of logic in this package; by the usage, it should not have any dependencies on ",(0,i.jsx)(n.code,{children:"-client"})," or ",(0,i.jsx)(n.code,{children:"-server"})," packages. Just other commons."]})}),"\n",(0,i.jsxs)(n.p,{children:["When there are interfaces, usually ",(0,i.jsx)(n.strong,{children:"sharable between packages"})," or just between ",(0,i.jsx)(n.code,{children:"-client"})," and ",(0,i.jsx)(n.code,{children:"-server"}),". Tt should be in the package name ",(0,i.jsx)(n.em,{children:"without"})," any suffix.\nKeep in mind here should ",(0,i.jsx)(n.strong,{children:"not"})," be any code other than just interfaces or pure helpers, because you can end up with cyclic dependencies within ",(0,i.jsx)(n.code,{children:"-client"}),"/",(0,i.jsx)(n.code,{children:"-server"})," and ",(0,i.jsx)(n.code,{children:"package"})," packages."]}),"\n",(0,i.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsxs)(n.p,{children:["You can see ",(0,i.jsx)(n.a,{href:"https://github.com/leight-core/viv/tree/main/packages/%40leight",children:"@leight"})," packages, but for example:"]}),"\n",(0,i.jsx)(n.h3,{id:"leightfile",children:"@leight/file"}),"\n",(0,i.jsxs)(n.p,{children:["Interfaces, type definitions and overall shape of ",(0,i.jsx)(n.code,{children:"-client"})," and ",(0,i.jsx)(n.code,{children:"-server"})," packages; because we're talking about types, it doesn't matter there are mixed client and server stuff."]}),"\n",(0,i.jsx)(n.h3,{id:"leightfile-client",children:"@leight/file-client"}),"\n",(0,i.jsxs)(n.p,{children:["This package provides React stuff on a client, table for listing files, handles uploading and a lot of other - ",(0,i.jsx)(n.strong,{children:"client only"})," stuff. Backend calls are handled via ",(0,i.jsx)(n.em,{children:"trpc"})," which is ",(0,i.jsx)(n.strong,{children:"another"}),"\npackage using the same concept of split code."]}),"\n",(0,i.jsx)(n.h3,{id:"leightfile-server",children:"@leight/file-server"}),"\n",(0,i.jsxs)(n.p,{children:["Here is generated Source and overall server-only stuff: generated procedures and handling of FileSource (filtering, ordering, ...). Here you are in ",(0,i.jsx)(n.em,{children:"Node land"})," so you can do whatever you want. Except\nincluding this on client."]}),"\n",(0,i.jsx)(n.h2,{id:"trpc",children:"tRPC"}),"\n",(0,i.jsxs)(n.p,{children:["This is related, but worth mentioning: because ",(0,i.jsx)(n.em,{children:"@leight"})," expects you will use monorepo for managing all pieces of your app, this one is quite special."]}),"\n",(0,i.jsxs)(n.p,{children:["With you app - ",(0,i.jsx)(n.strong,{children:"in the monorepo"})," - you should have two packages for tRPC: one for a client, one for server, both serving as center point of component connection - all other packages can export procedures\nwhich should be connected in the server-side package; also this is the only exception where ",(0,i.jsx)(n.code,{children:"client"})," can include ",(0,i.jsx)(n.code,{children:"server"})," stuff, but this is due nature of tRPC."]})]})}t(5675);let a={MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,r.ah)(),e.components);return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)},pageOpts:{filePath:"pages/docs/concepts/code-splitting.mdx",route:"/docs/concepts/code-splitting",headings:[{depth:1,value:"Code splitting",id:"code-splitting"},{depth:2,value:"Prologue",id:"prologue"},{depth:2,value:"Client",id:"client"},{depth:2,value:"Server",id:"server"},{depth:2,value:"The others",id:"the-others"},{depth:2,value:"Examples",id:"examples"},{depth:3,value:"@leight/file",id:"leightfile"},{depth:3,value:"@leight/file-client",id:"leightfile-client"},{depth:3,value:"@leight/file-server",id:"leightfile-server"},{depth:2,value:"tRPC",id:"trpc"}],timestamp:1679711495e3,pageMap:[{kind:"MdxPage",name:"about",route:"/about"},{kind:"Folder",name:"docs",route:"/docs",children:[{kind:"Folder",name:"concepts",route:"/docs/concepts",children:[{kind:"MdxPage",name:"code-splitting",route:"/docs/concepts/code-splitting"},{kind:"MdxPage",name:"index",route:"/docs/concepts"},{kind:"MdxPage",name:"mcp",route:"/docs/concepts/mcp"},{kind:"MdxPage",name:"monorepo",route:"/docs/concepts/monorepo"},{kind:"MdxPage",name:"package.json",route:"/docs/concepts/package.json"},{kind:"MdxPage",name:"source",route:"/docs/concepts/source"},{kind:"Meta",data:{index:"Introduction",monorepo:"Monorepo","package.json":"package.json",mcp:"Managed Code Pattern","code-splitting":"Code splitting",source:"Source"}}]},{kind:"Folder",name:"getting-started",route:"/docs/getting-started",children:[{kind:"MdxPage",name:"installation",route:"/docs/getting-started/installation"},{kind:"MdxPage",name:"packages",route:"/docs/getting-started/packages"},{kind:"Meta",data:{packages:"Packages",installation:"Installation"}}]},{kind:"MdxPage",name:"index",route:"/docs"},{kind:"Folder",name:"packages",route:"/docs/packages",children:[{kind:"MdxPage",name:"container",route:"/docs/packages/container"},{kind:"MdxPage",name:"esbuild",route:"/docs/packages/esbuild"},{kind:"MdxPage",name:"index",route:"/docs/packages"},{kind:"MdxPage",name:"sdk",route:"/docs/packages/sdk"},{kind:"MdxPage",name:"source",route:"/docs/packages/source"},{kind:"MdxPage",name:"zustand",route:"/docs/packages/zustand"},{kind:"Meta",data:{index:"Overview",container:"@leight/container",source:"@leight/source",sdk:"@leight/sdk",zustand:"@leight/zustand",esbuild:"@leight/esbuild"}}]},{kind:"Folder",name:"workbench",route:"/docs/workbench",children:[{kind:"MdxPage",name:"index",route:"/docs/workbench"},{kind:"MdxPage",name:"monorepo",route:"/docs/workbench/monorepo"},{kind:"MdxPage",name:"prisma",route:"/docs/workbench/prisma"},{kind:"MdxPage",name:"sdk",route:"/docs/workbench/sdk"},{kind:"Meta",data:{index:"Overview",monorepo:"Monorepo",prisma:"Prisma",sdk:"SDK"}}]},{kind:"Meta",data:{index:{title:"Introduction"},"getting-started":"Getting started",concepts:"Concepts",workbench:"Workbench",packages:"Packages"}}]},{kind:"MdxPage",name:"index",route:"/"},{kind:"Meta",data:{"*":{type:"page"},index:{title:"Home",theme:{toc:!0}},docs:"Docs",about:{title:"About",theme:{typesetting:"article"}}}}],flexsearch:{codeblocks:!0},title:"Code splitting"},pageNextRoute:"/docs/concepts/code-splitting",nextraLayout:s.ZP,themeConfig:c.Z};n.default=(0,o.j)(a)}},function(e){e.O(0,[774,242,888,179],function(){return e(e.s=9320)}),_N_E=e.O()}]);