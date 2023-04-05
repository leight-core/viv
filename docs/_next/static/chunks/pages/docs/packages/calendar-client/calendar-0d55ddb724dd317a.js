(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5432],{4379:function(e,s,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/packages/calendar-client/calendar",function(){return n(3788)}])},3788:function(e,s,n){"use strict";n.r(s);var r=n(2322),o=n(7846),l=n(4411),a=n(8273);n(6908);var i=n(5392);n(6577);var t=n(9335),c=n(5650),d=n(4759);function h(e){let s=Object.assign({h1:"h1",p:"p",code:"code",a:"a",h2:"h2",strong:"strong",pre:"pre",span:"span"},(0,i.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.h1,{children:"Calendar"}),"\n",(0,r.jsxs)(l.UW,{type:"info",emoji:"ℹ️",children:[(0,r.jsxs)(s.p,{children:["If you want to use ",(0,r.jsx)(s.code,{children:"Calendar"}),", you must have ",(0,r.jsx)(s.a,{href:"../i18n-client/date-time-provider",children:(0,r.jsx)(s.code,{children:"DateTimeProvider"})})," from ",(0,r.jsx)(s.a,{href:"../i18n-client",children:(0,r.jsx)(s.code,{children:"@leight/i18n-client"})})," somewhere in the component tree."]}),(0,r.jsxs)(s.p,{children:["Or you can use ",(0,r.jsx)(s.a,{href:"../mantine/page-shell",children:"PageShell"})," or ",(0,r.jsx)(s.a,{href:"../mantine/shell",children:"Shell"})," from ",(0,r.jsx)(s.a,{href:"../mantine",children:"@leight/mantine"}),"."]})]}),"\n",(0,r.jsx)(l.UW,{children:(0,r.jsxs)(s.p,{children:["This package requires ",(0,r.jsx)(s.a,{href:"https://mantine.dev/",children:"Mantine UI"})," provided by ",(0,r.jsx)(s.a,{href:"../mantine",children:"@leight/mantine"}),"."]})}),"\n",(0,r.jsxs)(s.p,{children:["This package provides UI for rendering localized calendar. It's based on a great library ",(0,r.jsx)(s.a,{href:"https://moment.github.io/luxon/#/",children:"Luxon"})," providing\nbackend for date/time operations."]}),"\n",(0,r.jsx)(s.h2,{id:"minimal-example",children:"Minimal example"}),"\n",(0,r.jsx)(l.UW,{children:(0,r.jsxs)(s.p,{children:["All Calendar instances needs (separate) ",(0,r.jsx)(s.a,{href:"./calendar-provider",children:"CalendarProvider"})," to work; the reason you must provide you own store is to give you\na ",(0,r.jsx)(s.strong,{children:"control"})," over the calendar outside of the component itself."]})}),"\n",(0,r.jsx)(l.UW,{type:"info",emoji:"ℹ️",children:(0,r.jsxs)(s.p,{children:["Calendar defaults to ",(0,r.jsx)(s.strong,{children:"6 weeks"})," to prevent jumping on months with lesser week count."]})}),"\n",(0,r.jsx)(c.w,{example:(0,r.jsx)(t.N2,{children:(0,r.jsx)(d.gK,{})}),children:(0,r.jsx)(s.pre,{"data-language":"tsx","data-theme":"default",filename:"DefaultCalendar.tsx",children:(0,r.jsxs)(s.code,{"data-language":"tsx","data-theme":"default",children:[(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    Calendar"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    CalendarProvider"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"type"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" ICalendarProps"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"}                "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"from"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"@leight/calendar-client"'}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"type"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" FC} "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"from"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"react"'}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,r.jsx)(s.span,{className:"line",children:" "}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"export"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"interface"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"IDefaultCalendarProps"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"extends"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"ICalendarProps"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,r.jsx)(s.span,{className:"line",children:(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"}"})}),"\n",(0,r.jsx)(s.span,{className:"line",children:" "}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"export"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"const"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"DefaultCalendar"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"FC"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"<"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"IDefaultCalendarProps"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"> "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" (props) "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"=>"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"return"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" <"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"CalendarProvider"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:">"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"        <"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"Calendar"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"            "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"withControls"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"{"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"false"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"}"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"            {"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"..."}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"props}"})]}),"\n",(0,r.jsx)(s.span,{className:"line",children:(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"        />"})}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    </"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"CalendarProvider"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:">"})]}),"\n",(0,r.jsx)(s.span,{className:"line",children:(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"};"})})]})})}),"\n",(0,r.jsx)(s.h2,{id:"advanced-usage",children:"Advanced usage"}),"\n",(0,r.jsx)(s.p,{children:"This is full example how calendar works with all it's features; you can list through months/years or pick one or another by standalone date picker."}),"\n",(0,r.jsx)(s.p,{children:"You can customize basically everything on a calendar, all positions are exposed, just pick the component and see what props are available for you."}),"\n",(0,r.jsx)(c.w,{example:(0,r.jsx)(d.rd,{}),children:(0,r.jsx)(s.pre,{"data-language":"tsx","data-theme":"default",filename:"AdvancedCalendar.tsx",children:(0,r.jsxs)(s.code,{"data-language":"tsx","data-theme":"default",children:[(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"type"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" IDay}  "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"from"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"@leight/calendar"'}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    Calendar"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    CalendarProvider"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"type"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" ICalendarProps"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"}                   "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"from"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"@leight/calendar-client"'}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {DateTime}   "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"from"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"@leight/i18n"'}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {DateInline} "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"from"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"@leight/i18n-client"'}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"type"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" FC"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsx)(s.span,{className:"line",children:(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    useState"})}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"}                   "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"from"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"react"'}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,r.jsx)(s.span,{className:"line",children:" "}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"export"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"interface"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"IAdvancedCalendarProps"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"extends"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"ICalendarProps"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,r.jsx)(s.span,{className:"line",children:(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"}"})}),"\n",(0,r.jsx)(s.span,{className:"line",children:" "}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"export"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"const"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"AdvancedCalendar"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"FC"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"<"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"IAdvancedCalendarProps"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"> "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" (props) "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"=>"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"return"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" <"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"CalendarProvider"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"        "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"/**"})]}),"\n",(0,r.jsx)(s.span,{className:"line",children:(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"         * You can pass input here or through the props; input is DateTime from Luxon"})}),"\n",(0,r.jsx)(s.span,{className:"line",children:(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"         */"})}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"        "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"date"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"{"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"DateTime"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:".fromObject"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"({month"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"2"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" day"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"12"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"})}"})]}),"\n",(0,r.jsx)(s.span,{className:"line",children:(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    >"})}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"        <"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"CalendarInternal"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"..."}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"props}/>"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    </"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"CalendarProvider"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:">;"})]}),"\n",(0,r.jsx)(s.span,{className:"line",children:(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"};"})}),"\n",(0,r.jsx)(s.span,{className:"line",children:" "}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"interface"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"ICalendarInternalProps"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"extends"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"IAdvancedCalendarProps"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,r.jsx)(s.span,{className:"line",children:(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"}"})}),"\n",(0,r.jsx)(s.span,{className:"line",children:" "}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"const"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"CalendarInternal"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"FC"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"<"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"ICalendarInternalProps"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"> "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" (props) "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"=>"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"const"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" ["}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"day"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"setDay"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"] "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"useState"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"<"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"IDay"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:">();"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"return"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" <>"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"        <"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"Calendar"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"            "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"onClick"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"{({day}) "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"=>"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"setDay"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"(day)}"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"            {"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"..."}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"props}"})]}),"\n",(0,r.jsx)(s.span,{className:"line",children:(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"        />"})}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"        <"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"div"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:">selected date: {day "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"?"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" <"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"DateInline"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"date"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"{"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"day"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:".day}/> "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"- click the calendar -"'}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"}</"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"div"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:">"})]}),"\n",(0,r.jsx)(s.span,{className:"line",children:(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    </>;"})}),"\n",(0,r.jsx)(s.span,{className:"line",children:(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"};"})})]})})})]})}let x={MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:s}=Object.assign({},(0,i.ah)(),e.components);return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(h,{...e})}):h(e)},pageOpts:{filePath:"pages/docs/packages/calendar-client/calendar.mdx",route:"/docs/packages/calendar-client/calendar",headings:[{depth:1,value:"Calendar",id:"calendar"},{depth:2,value:"Minimal example",id:"minimal-example"},{depth:2,value:"Advanced usage",id:"advanced-usage"}],timestamp:1680716232e3,pageMap:[{kind:"MdxPage",name:"about",route:"/about"},{kind:"Folder",name:"docs",route:"/docs",children:[{kind:"Folder",name:"concepts",route:"/docs/concepts",children:[{kind:"MdxPage",name:"code-splitting",route:"/docs/concepts/code-splitting"},{kind:"MdxPage",name:"index",route:"/docs/concepts"},{kind:"MdxPage",name:"mcp",route:"/docs/concepts/mcp"},{kind:"MdxPage",name:"monorepo",route:"/docs/concepts/monorepo"},{kind:"MdxPage",name:"package.json",route:"/docs/concepts/package.json"},{kind:"Folder",name:"source",route:"/docs/concepts/source",children:[{kind:"MdxPage",name:"client",route:"/docs/concepts/source/client"},{kind:"MdxPage",name:"index",route:"/docs/concepts/source"},{kind:"MdxPage",name:"server",route:"/docs/concepts/source/server"},{kind:"Meta",data:{index:"Introduction",client:"Client",server:"Server"}}]},{kind:"Meta",data:{index:"Introduction",monorepo:"Monorepo","package.json":"package.json",mcp:"Managed Code Pattern","code-splitting":"Code splitting",source:"Source"}}]},{kind:"Folder",name:"getting-started",route:"/docs/getting-started",children:[{kind:"MdxPage",name:"installation",route:"/docs/getting-started/installation"},{kind:"MdxPage",name:"packages",route:"/docs/getting-started/packages"},{kind:"Meta",data:{packages:"Packages",installation:"Installation"}}]},{kind:"MdxPage",name:"index",route:"/docs"},{kind:"Folder",name:"packages",route:"/docs/packages",children:[{kind:"Folder",name:"calendar-client",route:"/docs/packages/calendar-client",children:[{kind:"MdxPage",name:"calendar-provider",route:"/docs/packages/calendar-client/calendar-provider"},{kind:"MdxPage",name:"calendar",route:"/docs/packages/calendar-client/calendar"},{kind:"MdxPage",name:"index",route:"/docs/packages/calendar-client"},{kind:"MdxPage",name:"months",route:"/docs/packages/calendar-client/months"},{kind:"MdxPage",name:"weeks",route:"/docs/packages/calendar-client/weeks"},{kind:"MdxPage",name:"years",route:"/docs/packages/calendar-client/years"},{kind:"Meta",data:{index:"Overview",calendar:"Calendar",weeks:"Weeks",months:"Months",years:"Years","calendar-provider":"CalendarProvider"}}]},{kind:"MdxPage",name:"container",route:"/docs/packages/container"},{kind:"MdxPage",name:"context-client",route:"/docs/packages/context-client"},{kind:"MdxPage",name:"esbuild",route:"/docs/packages/esbuild"},{kind:"Folder",name:"i18n",route:"/docs/packages/i18n",children:[{kind:"MdxPage",name:"index",route:"/docs/packages/i18n"},{kind:"MdxPage",name:"weeks-of",route:"/docs/packages/i18n/weeks-of"},{kind:"Meta",data:{index:"Overview","weeks-of":"weeksOf"}}]},{kind:"Folder",name:"i18n-client",route:"/docs/packages/i18n-client",children:[{kind:"MdxPage",name:"date-time-provider",route:"/docs/packages/i18n-client/date-time-provider"},{kind:"MdxPage",name:"index",route:"/docs/packages/i18n-client"},{kind:"Meta",data:{index:"Overview","date-time-provider":"DateTimeProvider"}}]},{kind:"MdxPage",name:"index",route:"/docs/packages"},{kind:"Folder",name:"mantine",route:"/docs/packages/mantine",children:[{kind:"MdxPage",name:"index",route:"/docs/packages/mantine"},{kind:"MdxPage",name:"page-shell",route:"/docs/packages/mantine/page-shell"},{kind:"MdxPage",name:"shell",route:"/docs/packages/mantine/shell"},{kind:"Meta",data:{index:"Overview","page-shell":"PageShell",shell:"Shell"}}]},{kind:"MdxPage",name:"sdk",route:"/docs/packages/sdk"},{kind:"MdxPage",name:"source",route:"/docs/packages/source"},{kind:"Folder",name:"table-client",route:"/docs/packages/table-client",children:[{kind:"MdxPage",name:"index",route:"/docs/packages/table-client"},{kind:"MdxPage",name:"source-table",route:"/docs/packages/table-client/source-table"},{kind:"MdxPage",name:"table",route:"/docs/packages/table-client/table"},{kind:"Meta",data:{index:"Overview",table:"Table","source-table":"SourceTable"}}]},{kind:"MdxPage",name:"utils-client",route:"/docs/packages/utils-client"},{kind:"MdxPage",name:"utils",route:"/docs/packages/utils"},{kind:"MdxPage",name:"zustand",route:"/docs/packages/zustand"},{kind:"Meta",data:{index:"Overview","calendar-client":"calendar-client",container:"container","context-client":"context-client",esbuild:"esbuild",i18n:"i18n","i18n-client":"i18n-client",mantine:"mantine",sdk:"sdk",source:"source","table-client":"table-client",utils:"utils","utils-client":"utils-client",zustand:"zustand"}}]},{kind:"Folder",name:"workbench",route:"/docs/workbench",children:[{kind:"MdxPage",name:"i18n",route:"/docs/workbench/i18n"},{kind:"MdxPage",name:"index",route:"/docs/workbench"},{kind:"MdxPage",name:"monorepo",route:"/docs/workbench/monorepo"},{kind:"MdxPage",name:"prisma",route:"/docs/workbench/prisma"},{kind:"MdxPage",name:"sdk",route:"/docs/workbench/sdk"},{kind:"MdxPage",name:"zustand",route:"/docs/workbench/zustand"},{kind:"Meta",data:{index:"Overview",monorepo:"Monorepo",prisma:"Prisma",i18n:"i18n",zustand:"Zustand",sdk:"SDK"}}]},{kind:"Meta",data:{index:{title:"Welcome"},concepts:"Concepts","getting-started":"Getting started",workbench:"Workbench",packages:"Packages"}}]},{kind:"MdxPage",name:"index",route:"/"},{kind:"Meta",data:{"*":{type:"page"},index:{title:"Home",theme:{toc:!0}},docs:"Docs",about:{title:"About",theme:{typesetting:"article"}}}}],flexsearch:{codeblocks:!0},title:"Calendar"},pageNextRoute:"/docs/packages/calendar-client/calendar",nextraLayout:l.ZP,themeConfig:a.Z};s.default=(0,o.j)(x)}},function(e){e.O(0,[9774,658,6778,9993,175,2888,179],function(){return e(e.s=4379)}),_N_E=e.O()}]);