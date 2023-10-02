"use strict";(self.webpackChunkscaffold=self.webpackChunkscaffold||[]).push([[8762],{5220:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>a});var s=t(4848),o=t(8453);const r={},l="Drush",i={id:"tools/drush",title:"Drush",description:"https://www.drush.org/",source:"@site/content/tools/drush.mdx",sourceDirName:"tools",slug:"/tools/drush",permalink:"/tools/drush",draft:!1,unlisted:!1,editUrl:"https://github.com/drevops/scaffold/tree/develop/.scaffold/docs/content/tools/drush.mdx",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Doctor",permalink:"/tools/doctor"},next:{title:"Git artifact",permalink:"/tools/git-artifact"}},c={},a=[{value:"Usage",id:"usage",level:2}];function d(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"drush",children:"Drush"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://www.drush.org/",children:"https://www.drush.org/"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"Drush is a command line shell and Unix scripting interface for Drupal. Drush\ncore ships with lots of useful commands and generators. Similarly, it runs\nupdate.php, executes SQL queries, runs content migrations, and misc utilities\nlike cron or cache rebuild. Drush can be extended by 3rd party commandfiles."}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Drush is used throughout Scaffold to interact with Drupal from the workflow\nscripts and Behat tests."}),"\n",(0,s.jsx)(n.p,{children:"It also allows a developer to interact with the site via CLI during development."}),"\n",(0,s.jsx)(n.p,{children:"While all the standard Drush commands supported, Scaffold also provides some\nshorthand commands to abstract some of the common tasks:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"downloading the database dump from the remote environment"}),"\n",(0,s.jsx)(n.li,{children:"importing the database dump into the local environment"}),"\n",(0,s.jsx)(n.li,{children:"running database updates and clearing caches"}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["See ",(0,s.jsx)(n.a,{href:"../../workflows",children:"workflows"})," for more details."]}),"\n",(0,s.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,s.jsx)(n.p,{children:"Drush should be used from the inside of the container."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"docker compose exec cli drush <command>\n"})}),"\n",(0,s.jsx)(n.p,{children:"or"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"ahoy drush <command>\n"})})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>i});var s=t(6540);const o={},r=s.createContext(o);function l(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:l(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);