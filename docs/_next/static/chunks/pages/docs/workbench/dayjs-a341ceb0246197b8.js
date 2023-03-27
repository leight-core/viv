(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[138],{3514:function(e,s,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/workbench/dayjs",function(){return n(9161)}])},9369:function(e,s,n){"use strict";var o=n(5893),i=n(5675),l=n.n(i);let r={logo:(0,o.jsxs)("div",{style:{width:"10em",display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center"},children:[(0,o.jsx)(l(),{alt:"logo",src:"https://avatars.githubusercontent.com/u/74918176?s=96&v=4",width:24,height:24}),(0,o.jsx)("span",{children:"Project: Leight Viv"})]}),project:{link:"https://github.com/leight-core/viv"},docsRepositoryBase:"https://github.com/leight-core/viv/tree/main/nextra",footer:{text:"Project Leight Viv Documentation"},sidebar:{defaultMenuCollapseLevel:1,toggleButton:!0},banner:{key:"wip",text:"This documentation is still work in progress, so be please patient."},toc:{float:!0}};s.Z=r},9161:function(e,s,n){"use strict";n.r(s);var o=n(5893),i=n(4319),l=n(3762),r=n(9369);n(9966);var a=n(1151);function t(e){let s=Object.assign({h1:"h1",p:"p",a:"a",code:"code",h2:"h2",strong:"strong",pre:"pre",span:"span",h3:"h3"},(0,a.ah)(),e.components);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(s.h1,{children:"Day.js"}),"\n",(0,o.jsx)(l.UW,{type:"info",emoji:"ℹ️",children:(0,o.jsxs)(s.p,{children:["Information about this package can be found ",(0,o.jsx)(s.a,{href:"../packages/i18n-client",children:"here"}),"."]})}),"\n",(0,o.jsxs)(s.p,{children:[(0,o.jsx)(s.code,{children:"@leight"})," supports ",(0,o.jsx)(s.a,{href:"https://day.js.org/en/",children:"Day.js"})," library out-of-box with some simple stuff around\npackaged into ",(0,o.jsx)(s.a,{href:"../packages/i18n-client",children:(0,o.jsx)(s.code,{children:"@leight/i18n-client"})}),"."]}),"\n",(0,o.jsxs)(s.p,{children:["Reason is simple: provide single instance of ",(0,o.jsx)(s.code,{children:"dayjs"})," into the app (ensures your app and library internals are using the same instance) with all\nthe required plugins set up."]}),"\n",(0,o.jsx)(s.h2,{id:"installation",children:"Installation"}),"\n",(0,o.jsxs)(s.p,{children:["This library takes with it quite a ",(0,o.jsx)(s.strong,{children:"punch"})," of dependencies."]}),"\n",(0,o.jsxs)(l.mQ,{items:["npm","pnpm","yarn"],children:[(0,o.jsx)(l.OK,{children:(0,o.jsx)(s.pre,{"data-language":"bash","data-theme":"default",filename:"npm",hasCopyCode:!0,children:(0,o.jsx)(s.code,{"data-language":"bash","data-theme":"default",children:(0,o.jsxs)(s.span,{className:"line",children:[(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"npm "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"i"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"@leight/i18n-client"})]})})})}),(0,o.jsx)(l.OK,{children:(0,o.jsx)(s.pre,{"data-language":"bash","data-theme":"default",filename:"pnpm",hasCopyCode:!0,children:(0,o.jsx)(s.code,{"data-language":"bash","data-theme":"default",children:(0,o.jsxs)(s.span,{className:"line",children:[(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"pnpm "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"i"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"@leight/i18n-client"})]})})})}),(0,o.jsx)(l.OK,{children:(0,o.jsx)(s.pre,{"data-language":"bash","data-theme":"default",filename:"yarn",hasCopyCode:!0,children:(0,o.jsx)(s.code,{"data-language":"bash","data-theme":"default",children:(0,o.jsxs)(s.span,{className:"line",children:[(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"yarn "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"add"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"@leight/i18n-client"})]})})})})]}),"\n",(0,o.jsx)(s.h2,{id:"usage",children:"Usage"}),"\n",(0,o.jsxs)(s.p,{children:["Backend is powered by ",(0,o.jsx)(s.a,{href:"../packages/zustand",children:(0,o.jsx)(s.code,{children:"@leight/zustand"})})," and ",(0,o.jsx)(s.a,{href:"../packages/context-client",children:(0,o.jsx)(s.code,{children:"@leight/context-client"})}),"; it comes with some pieces: (store) provider and consumer (hooks)."]}),"\n",(0,o.jsx)(s.h3,{id:"provider",children:"Provider"}),"\n",(0,o.jsx)(l.UW,{type:"info",emoji:"ℹ️",children:(0,o.jsxs)(s.p,{children:[(0,o.jsx)(s.a,{href:"../packages/zustand",children:(0,o.jsx)(s.code,{children:"@leight/zustand"})})," is built on top of ",(0,o.jsx)(s.a,{href:"../packages/context-client",children:(0,o.jsx)(s.code,{children:"@leight/context-client"})})," with some little magic pieces, so go and check it out if you\nwant to understand this example."]})}),"\n",(0,o.jsx)(s.pre,{"data-language":"tsx","data-theme":"default",filename:"PageShell.tsx",children:(0,o.jsxs)(s.code,{"data-language":"tsx","data-theme":"default",children:[(0,o.jsxs)(s.span,{className:"line",children:[(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {DayjsProvider} "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"from"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"@leight/i18n-client"'}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,o.jsxs)(s.span,{className:"line",children:[(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {LoadingOverlay} "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"from"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"@mantine/core"'}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,o.jsxs)(s.span,{className:"line",children:[(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {DatesProvider} "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"from"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"@mantine/dates"'}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,o.jsxs)(s.span,{className:"line",children:[(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {useRouter} "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"from"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"next/router"'}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,o.jsxs)(s.span,{className:"line",children:[(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"type"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" FC} "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"from"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"react"'}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,o.jsx)(s.span,{className:"line",children:" "}),"\n",(0,o.jsxs)(s.span,{className:"line",children:[(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"export"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"interface"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"IPageShellProps"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,o.jsx)(s.span,{className:"line",children:(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"}"})}),"\n",(0,o.jsx)(s.span,{className:"line",children:" "}),"\n",(0,o.jsx)(s.span,{className:"line",children:(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"/**"})}),"\n",(0,o.jsx)(s.span,{className:"line",children:(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:" * This is stripped version of PageShell used in @leight/mantine; it shows an example, how you can integrate"})}),"\n",(0,o.jsx)(s.span,{className:"line",children:(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:" * this component into you app and how to use it."})}),"\n",(0,o.jsx)(s.span,{className:"line",children:(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:" */"})}),"\n",(0,o.jsxs)(s.span,{className:"line",children:[(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"export"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"const"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"PageShell"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"FC"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"<"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"IPageShellProps"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"> "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" () "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"=>"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,o.jsxs)(s.span,{className:"line",children:[(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"	"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"/**"})]}),"\n",(0,o.jsx)(s.span,{className:"line",children:(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"     * Take locale info from whatever place you want, `leight` by default uses Next.js router"})}),"\n",(0,o.jsx)(s.span,{className:"line",children:(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"     */"})}),"\n",(0,o.jsxs)(s.span,{className:"line",children:[(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"const"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"router"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"useRouter"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"();"})]}),"\n",(0,o.jsxs)(s.span,{className:"line",children:[(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"return"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" <>"})]}),"\n",(0,o.jsxs)(s.span,{className:"line",children:[(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"        {"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"/**"})]}),"\n",(0,o.jsx)(s.span,{className:"line",children:(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"         * Make sure this component **is not** under component which re-renders as it's intented to be on a"})}),"\n",(0,o.jsx)(s.span,{className:"line",children:(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"         * layout level of your app"})}),"\n",(0,o.jsxs)(s.span,{className:"line",children:[(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"         */"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"}"})]}),"\n",(0,o.jsxs)(s.span,{className:"line",children:[(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"        <"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"DayjsProvider"})]}),"\n",(0,o.jsxs)(s.span,{className:"line",children:[(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"            "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"/**"})]}),"\n",(0,o.jsx)(s.span,{className:"line",children:(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"             * This is simple stuff: provide locale (so provider could be much lighter on dependencies,"})}),"\n",(0,o.jsx)(s.span,{className:"line",children:(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"             * because it's not resolving locale by it's own)."})}),"\n",(0,o.jsx)(s.span,{className:"line",children:(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"             */"})}),"\n",(0,o.jsxs)(s.span,{className:"line",children:[(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"            "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"locale"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"{"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"router"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:".locale "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"||"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"router"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:".defaultLocale "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"||"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"en"'}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"as"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"any"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"}"})]}),"\n",(0,o.jsxs)(s.span,{className:"line",children:[(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"            "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"/**"})]}),"\n",(0,o.jsx)(s.span,{className:"line",children:(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"             * Naive approach is used: show loading until day.js is prepared for use; generally it does"})}),"\n",(0,o.jsx)(s.span,{className:"line",children:(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"             * not accept an error state."})}),"\n",(0,o.jsx)(s.span,{className:"line",children:(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"             */"})}),"\n",(0,o.jsxs)(s.span,{className:"line",children:[(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"            "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"loading"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"{<"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"LoadingOverlay"})]}),"\n",(0,o.jsxs)(s.span,{className:"line",children:[(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"                "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"visible"})]}),"\n",(0,o.jsxs)(s.span,{className:"line",children:[(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"                "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"transitionDuration"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"{"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"500"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"}"})]}),"\n",(0,o.jsxs)(s.span,{className:"line",children:[(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"                "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"loaderProps"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"{{variant"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"bars"'}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"}}"})]}),"\n",(0,o.jsx)(s.span,{className:"line",children:(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"            />}"})}),"\n",(0,o.jsx)(s.span,{className:"line",children:(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"        >"})}),"\n",(0,o.jsxs)(s.span,{className:"line",children:[(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"            {"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"/**"})]}),"\n",(0,o.jsx)(s.span,{className:"line",children:(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"              * If you need consume Dayjs context immediately, you can provide callback which will get"})}),"\n",(0,o.jsx)(s.span,{className:"line",children:(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"              * everything set up; or you can pass children directly as you're used to."})}),"\n",(0,o.jsx)(s.span,{className:"line",children:(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"              *"})}),"\n",(0,o.jsx)(s.span,{className:"line",children:(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"              * `DatesProvider` is here just as an example, because it's dependant on Dayjs context,"})}),"\n",(0,o.jsx)(s.span,{className:"line",children:(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"              * so it needs to be consumed immediately; without it whole callback could be ommited."})}),"\n",(0,o.jsxs)(s.span,{className:"line",children:[(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"              */"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"}"})]}),"\n",(0,o.jsxs)(s.span,{className:"line",children:[(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"            {({state: {locale}}) "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"=>"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" <"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"DatesProvider"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"settings"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"{{locale}}>"})]}),"\n",(0,o.jsxs)(s.span,{className:"line",children:[(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"            </"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"DatesProvider"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:">}"})]}),"\n",(0,o.jsxs)(s.span,{className:"line",children:[(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"        </"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"DayjsProvider"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:">"})]}),"\n",(0,o.jsx)(s.span,{className:"line",children:(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    </>;"})}),"\n",(0,o.jsx)(s.span,{className:"line",children:(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"};"})})]})}),"\n",(0,o.jsx)(s.h3,{id:"consumer",children:"Consumer"}),"\n",(0,o.jsx)(l.UW,{type:"info",emoji:"ℹ️",children:(0,o.jsxs)(s.p,{children:["You can see what's available in your IDE, or you can check source code of ",(0,o.jsx)(s.a,{href:"https://github.com/leight-core/viv/blob/main/packages/%40leight/i18n-client/src/context/DayjsContext.tsx#L36",children:"Dayjs Store"}),"."]})}),"\n",(0,o.jsx)(s.pre,{"data-language":"tsx","data-theme":"default",children:(0,o.jsxs)(s.code,{"data-language":"tsx","data-theme":"default",children:[(0,o.jsxs)(s.span,{className:"line",children:[(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {useDayjsState} "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"from"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'@leight/i18n-client'"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,o.jsx)(s.span,{className:"line",children:" "}),"\n",(0,o.jsxs)(s.span,{className:"line",children:[(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"const"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"MyComponent"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" () "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"=>"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,o.jsxs)(s.span,{className:"line",children:[(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"	"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"/**"})]}),"\n",(0,o.jsx)(s.span,{className:"line",children:(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"     * Nothing interesting; just access a store (you can also listen for some parts of the store), where"})}),"\n",(0,o.jsx)(s.span,{className:"line",children:(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"     * instance of dayjs and other stuff is hidden, see the source code if you want more."})}),"\n",(0,o.jsx)(s.span,{className:"line",children:(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"     */"})}),"\n",(0,o.jsxs)(s.span,{className:"line",children:[(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"	"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"const"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"dayjs"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"} "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"useDayjsState"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"();"})]}),"\n",(0,o.jsx)(s.span,{className:"line",children:" "}),"\n",(0,o.jsxs)(s.span,{className:"line",children:[(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"	"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"return"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" <></>"})]}),"\n",(0,o.jsx)(s.span,{className:"line",children:(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"}"})})]})})]})}n(5675);let c={MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:s}=Object.assign({},(0,a.ah)(),e.components);return s?(0,o.jsx)(s,{...e,children:(0,o.jsx)(t,{...e})}):t(e)},pageOpts:{filePath:"pages/docs/workbench/dayjs.mdx",route:"/docs/workbench/dayjs",headings:[{depth:1,value:"Day.js",id:"dayjs"},{depth:2,value:"Installation",id:"installation"},{depth:2,value:"Usage",id:"usage"},{depth:3,value:"Provider",id:"provider"},{depth:3,value:"Consumer",id:"consumer"}],pageMap:[{kind:"MdxPage",name:"about",route:"/about"},{kind:"Folder",name:"docs",route:"/docs",children:[{kind:"Folder",name:"concepts",route:"/docs/concepts",children:[{kind:"MdxPage",name:"code-splitting",route:"/docs/concepts/code-splitting"},{kind:"MdxPage",name:"index",route:"/docs/concepts"},{kind:"MdxPage",name:"mcp",route:"/docs/concepts/mcp"},{kind:"MdxPage",name:"monorepo",route:"/docs/concepts/monorepo"},{kind:"MdxPage",name:"package.json",route:"/docs/concepts/package.json"},{kind:"Folder",name:"source",route:"/docs/concepts/source",children:[{kind:"MdxPage",name:"client",route:"/docs/concepts/source/client"},{kind:"MdxPage",name:"index",route:"/docs/concepts/source"},{kind:"MdxPage",name:"server",route:"/docs/concepts/source/server"},{kind:"Meta",data:{index:"Introduction",client:"Client",server:"Server"}}]},{kind:"Meta",data:{index:"Introduction",monorepo:"Monorepo","package.json":"package.json",mcp:"Managed Code Pattern","code-splitting":"Code splitting",source:"Source"}}]},{kind:"Folder",name:"getting-started",route:"/docs/getting-started",children:[{kind:"MdxPage",name:"installation",route:"/docs/getting-started/installation"},{kind:"MdxPage",name:"packages",route:"/docs/getting-started/packages"},{kind:"Meta",data:{packages:"Packages",installation:"Installation"}}]},{kind:"MdxPage",name:"index",route:"/docs"},{kind:"Folder",name:"packages",route:"/docs/packages",children:[{kind:"MdxPage",name:"calendar-client",route:"/docs/packages/calendar-client"},{kind:"MdxPage",name:"container",route:"/docs/packages/container"},{kind:"MdxPage",name:"context-client",route:"/docs/packages/context-client"},{kind:"MdxPage",name:"esbuild",route:"/docs/packages/esbuild"},{kind:"MdxPage",name:"i18n-client",route:"/docs/packages/i18n-client"},{kind:"MdxPage",name:"index",route:"/docs/packages"},{kind:"MdxPage",name:"sdk",route:"/docs/packages/sdk"},{kind:"MdxPage",name:"source",route:"/docs/packages/source"},{kind:"MdxPage",name:"utils-client",route:"/docs/packages/utils-client"},{kind:"MdxPage",name:"zustand",route:"/docs/packages/zustand"},{kind:"Meta",data:{index:"Overview","calendar-client":"@leight/calendar-client",container:"@leight/container","context-client":"@leight/context-client",esbuild:"@leight/esbuild","i18n-client":"@leight/i18n-client",sdk:"@leight/sdk",source:"@leight/source","utils-client":"@leight/utils-client",zustand:"@leight/zustand"}}]},{kind:"Folder",name:"workbench",route:"/docs/workbench",children:[{kind:"MdxPage",name:"dayjs",route:"/docs/workbench/dayjs"},{kind:"MdxPage",name:"index",route:"/docs/workbench"},{kind:"MdxPage",name:"monorepo",route:"/docs/workbench/monorepo"},{kind:"MdxPage",name:"prisma",route:"/docs/workbench/prisma"},{kind:"MdxPage",name:"sdk",route:"/docs/workbench/sdk"},{kind:"MdxPage",name:"zustand",route:"/docs/workbench/zustand"},{kind:"Meta",data:{index:"Overview",monorepo:"Monorepo",prisma:"Prisma",dayjs:"Day.js",zustand:"Zustand",sdk:"SDK"}}]},{kind:"Meta",data:{index:{title:"Welcome"},concepts:"Concepts","getting-started":"Getting started",workbench:"Workbench",packages:"Packages"}}]},{kind:"MdxPage",name:"index",route:"/"},{kind:"Meta",data:{"*":{type:"page"},index:{title:"Home",theme:{toc:!0}},docs:"Docs",about:{title:"About",theme:{typesetting:"article"}}}}],flexsearch:{codeblocks:!0},title:"Day.js"},pageNextRoute:"/docs/workbench/dayjs",nextraLayout:l.ZP,themeConfig:r.Z};s.default=(0,i.j)(c)}},function(e){e.O(0,[774,242,888,179],function(){return e(e.s=3514)}),_N_E=e.O()}]);