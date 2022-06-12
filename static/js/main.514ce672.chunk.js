(this.webpackJsonpcv=this.webpackJsonpcv||[]).push([[0],{12:function(e,t,r){},13:function(e,t,r){"use strict";r.r(t);var i=r(1),a=r.n(i),n=r(6),s=r.n(n),c=r(4),o=r.p+"static/media/penrose.2ff23e32.svg",l=r.p+"static/media/itamar122.73bb3735.webp",d=r.p+"static/media/itamar376.a52eed20.webp",b=r(5),m=r(0);function h(e){var t=e.from,r=e.to;return Object(m.jsxs)("div",{className:"when",children:[t.year," - ",r?r.year:"Present"]})}function p(e){var t=e.place,r=e.where,i=e.subtitle,a=e.when,n=e.role,s=e.description;return Object(m.jsxs)("div",{className:"cv-item",children:[Object(m.jsx)("span",{className:"place",children:t}),r&&Object(m.jsx)("span",{className:"where",children:r}),Object(m.jsx)(h,Object(b.a)({},a)),i&&Object(m.jsx)("p",{className:"subtitle",children:i}),n&&Object(m.jsx)("div",{className:"role",children:n}),Object(m.jsx)("div",{className:"description",children:s.map((function(e,t){return Object(m.jsx)("p",{dangerouslySetInnerHTML:{__html:e}},t)}))})]})}var j=function(e){var t=e.cvItems;return Object(m.jsx)("div",{className:"list separate-items",children:t.filter((function(e){return!e.hidden})).map((function(e,t){return Object(m.jsx)(p,Object(b.a)({},e),t)}))})},u=r(2);r(12);var v=function(e){var t=e.title,r=e.description;return Object(m.jsxs)("div",{className:"item",children:[Object(m.jsx)("div",{className:"title",children:t}),Object(m.jsx)("p",{className:"description",children:r})]})};var f=function(e){var t=e.summary;return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("h1",{children:"Itamar Bar-Lev"}),Object(m.jsx)("p",{className:"box summary ",children:t})]})};var w=function(){var e=function(){return window.innerWidth<1024},t=a.a.useState(!0),r=Object(c.a)(t,2),i=r[0],n=r[1],s=a.a.useState(e()),b=Object(c.a)(s,2),h=b[0],p=b[1];return a.a.useEffect((function(){var t=function(e){var t=null;return{go:function(){this.cancel(),t=window.setTimeout(e,500)},cancel:function(){t&&clearTimeout(t)}}}((function(){n(!0)})),r=function(){n(!1),t.go(),e()!==h&&p(e())};return window.addEventListener("resize",r),function(){window.removeEventListener("resize",r),t.cancel()}}),[h]),Object(m.jsxs)("div",{className:h?"narrow":"",children:[Object(m.jsx)("div",{id:"background",style:{backgroundImage:"url(".concat(o,")")},className:"dont-print "+(i?"fade-in":"hidden")}),Object(m.jsxs)("div",{className:"column contact",children:[h?Object(m.jsxs)("div",{children:[Object(m.jsx)("img",{width:"61",height:"61",src:l,alt:""}),Object(m.jsx)(f,{summary:u.summary})]}):Object(m.jsx)("img",{width:"188",height:"188",src:d,alt:""}),Object(m.jsxs)("div",{className:"box list",children:[Object(m.jsx)("div",{className:"item",children:Object(m.jsx)("a",{href:"mailto:bitamar@gmail.com",children:"bitamar@gmail.com"})}),Object(m.jsx)("div",{className:"item",children:Object(m.jsx)("a",{href:"tel:+972-54-9400041",children:"+972-54-9400041"})}),Object(m.jsx)("div",{className:"item",children:Object(m.jsx)("a",{href:"https://www.linkedin.com/in/itamar-shapira-bar-lev-6a735720",children:"LinkedIn"})}),Object(m.jsx)("div",{className:"item",children:Object(m.jsx)("a",{href:"https://github.com/bitamar",children:"GitHub"})}),Object(m.jsx)("div",{className:"item",children:Object(m.jsx)("a",{href:"https://www.drupal.org/u/itamar",children:"drupal.org"})})]})]}),Object(m.jsxs)("div",{className:"column details",children:[!h&&Object(m.jsx)(f,{summary:u.summary}),Object(m.jsxs)("div",{className:"box",children:[Object(m.jsx)("h2",{children:"Work experience"}),Object(m.jsx)(j,{cvItems:u.jobs})]}),Object(m.jsxs)("div",{className:"box",children:[Object(m.jsx)("h2",{children:"Education"}),Object(m.jsx)(j,{cvItems:u.education})]}),Object(m.jsxs)("div",{className:"box",children:[Object(m.jsx)("h2",{children:"Technologies"}),Object(m.jsxs)("div",{className:"tech",children:[Object(m.jsx)(v,{title:"Advanced",description:u.technologies.advanced.join(", ")}),Object(m.jsx)(v,{title:"Intermediate",description:u.technologies.intermediate.join(", ")})]})]}),Object(m.jsxs)("div",{className:"box",children:[Object(m.jsx)("h2",{children:"Languages"}),Object(m.jsx)("p",{dangerouslySetInnerHTML:{__html:u.languages}})]})]})]})};s.a.render(Object(m.jsx)(a.a.StrictMode,{children:Object(m.jsx)(w,{})}),document.getElementById("root"))},2:function(e){e.exports=JSON.parse('{"summary":"10+ years of experience in both frontend and backend development of web apps","jobs":[{"place":"aporia","subtitle":"ML monitoring","when":{"from":{"month":2,"year":2022}},"where":"Tel Aviv","role":"Full stack developer","description":["Improving ux and stability of the company\'s dashboard.","<b>Typescript</b>, <b>Vue</b>, <b>python</b>, <b>FastAPI</b>"]},{"place":"Wix","when":{"from":{"month":5,"year":2020},"to":{"month":1,"year":2022}},"where":"Tel Aviv","role":"Frontend developer","description":["Working in the team responsible for rendering apps within Wix websites.","Responsible for extending the APIs for apps, and improving loading performance.","Took part in a rewrite of the wix viewer, for improving customer websites lighthouse scores.","<b>Typescript</b>, <b>react</b>, <b>node.js</b>, <b>webpack</b>, <b>chrome\'s debugger</b> :)"]},{"place":"Circuit Auction","subtitle":"SaaS for running auction houses, allowing remote participation in live auctions","when":{"from":{"month":3,"year":2018},"to":{"month":4,"year":2020}},"where":"Tel Aviv","role":"Full stack developer","description":["Was responsible for rebuilding the live bidding system (Back & front), from mockups to production level. Also participated in architecture and product decisions.","<b>PHP</b>, <b>MySql</b>, <b>Elm</b>, <b>Bootstrap</b>, <b>Jenkins</b>"]},{"place":"OSK Berlin","hidden":true,"when":{"from":{"month":10,"year":2017},"to":{"month":3,"year":2018}},"where":"Germany","role":"Backend developer","description":["Worked on a drupal based dashboard comparing social media influencers for the Mercedes division in Daimler.","Was responsible for refactoring the system, and for introducing CI, tests and code reviews."]},{"place":"Gizra","when":{"from":{"month":1,"year":2012},"to":{"month":10,"year":2017}},"where":"Tel Aviv","role":"Team lead, Elm & PHP developer","description":["After 2 years got promoted to Team Lead role, while maintaining ~50% hands on.","Created an early mockup of <b>Circuit Auction</b>, on which I later worked full time.","Participated in building many Drupal based projects, for example: <a href=\\"https://www.gizra.com/portfolio/#danel-jobs\\">Danel Jobs</a>, <a href=\\"https://www.gizra.com/portfolio/#opsys\\">OpSys</a> & <a href=\\"https://www.gizra.com/portfolio/#united-nations-country-team-sites\\">United Nations Country Sites</a>","<b>PHP</b>, <b>drupal</b>, <b>MySql</b>, <b>Elm</b>, <b>jQuery</b>, <b>AngularJS</b>, <b>Bootstrap</b>"]},{"place":"Innstant","hidden":true,"when":{"from":{"month":5,"year":2011},"to":{"month":1,"year":2012}},"where":"Tel Aviv","role":"PHP programmer","description":["Worked on an hotel search website, built with Zend framework."]},{"place":"Fairmas","when":{"from":{"month":6,"year":2008},"to":{"month":5,"year":2011}},"where":"Berlin","role":"PHP programmer","description":["Worked on an hotels financial performance comparison system, built with a proprietary MVC framework.","Built a configuration system that allowed to program new reports easily. Also created the UI and backend for scheduling reports to be emailed automatically.","<b>PHP</b>, <b>MySql</b>, <b>Javascript</b>"]}],"education":[{"place":"The Open University","when":{"from":{"year":2012},"to":{"year":2016}},"description":["Studies towards B.A. in Cognitive and Computer Sciences"]}],"technologies":{"advanced":["JavaScript","Typescript","React","Elm","Webpack","Sass","Bootstrap","Git","Linux","PHP","C","MySQL"],"intermediate":["Node.js","express","Apache","Jenkins"]},"languages":"Native <b>Hebrew</b>, fluent <b>English</b> & intermediate <b>German</b>."}')}},[[13,1,2]]]);
//# sourceMappingURL=main.514ce672.chunk.js.map