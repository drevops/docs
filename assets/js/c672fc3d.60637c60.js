"use strict";(self.webpackChunkscaffold=self.webpackChunkscaffold||[]).push([[9047],{5089:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>d,toc:()=>c});var i=o(4848),t=o(8453);const s={sidebar_label:"Xdebug"},r="Xdebug - Debugger Tool for PHP",d={id:"tools/xdebug",title:"Xdebug - Debugger Tool for PHP",description:"https://xdebug.org/",source:"@site/content/tools/xdebug.mdx",sourceDirName:"tools",slug:"/tools/xdebug",permalink:"/tools/xdebug",draft:!1,unlisted:!1,editUrl:"https://github.com/drevops/scaffold/tree/develop/.scaffold/docs/content/tools/xdebug.mdx",tags:[],version:"current",frontMatter:{sidebar_label:"Xdebug"},sidebar:"docs",previous:{title:"Twig CS Fixer",permalink:"/tools/twig-cs-fixer"},next:{title:"Overview",permalink:"/integrations/"}},l={},c=[{value:"Usage",id:"usage",level:2},{value:"IDE configuration",id:"ide-configuration",level:2},{value:"PhpStorm",id:"phpstorm",level:3},{value:"Tips and tricks",id:"tips-and-tricks",level:3}];function a(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"xdebug---debugger-tool-for-php",children:"Xdebug - Debugger Tool for PHP"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://xdebug.org/",children:"https://xdebug.org/"})}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"Xdebug is an extension for PHP, and provides a range of features to improve\nthe PHP development experience."}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Scaffold comes with Xdebug pre-installed and configured for local development\nthanks to ",(0,i.jsx)(n.a,{href:"https://github.com/uselagoon/lagoon-images",children:"Lagoon images"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Xdebug is also configured to work in coverage mode, allowing to run tests with\ncode coverage enabled. See ",(0,i.jsx)(n.a,{href:"/tools/phpunit#coverage",children:"PHPUnit"})," for more details."]}),"\n",(0,i.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,i.jsx)(n.p,{children:"Xdebug is disabled by default."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"XDEBUG_ENABLE=true docker compose up -d cli php nginx   # Restart containers with Xdebug enabled.\ndocker compose up -d cli php nginx                      # Restart containers with Xdebug disabled.\n"})}),"\n",(0,i.jsx)(n.p,{children:"or"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"ahoy debug-on  # Restart containers with Xdebug enabled.\nahoy up        # Restart containers with Xdebug disabled.\n"})}),"\n",(0,i.jsx)(n.h2,{id:"ide-configuration",children:"IDE configuration"}),"\n",(0,i.jsx)(n.h3,{id:"phpstorm",children:"PhpStorm"}),"\n",(0,i.jsxs)(n.p,{children:["By default, PhpStorm is configured to automatically interrupt on incoming\nunmapped debug connections when ",(0,i.jsx)(n.code,{children:"Start listening for PHP Debug Connections"}),"\nbutton (the one with a little bug) is activated. When interrupted, PhpStorm\nwill ask you to map the incoming connection to a project."]}),"\n",(0,i.jsx)(n.p,{children:"In order to use Xdebug on the project for the first time, you need to follow\nthese steps (assuming you already have a fully working site):"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Install Xdebug helper extension for your browser:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://chrome.google.com/webstore/detail/xdebug-helper/eadndfjplgieldjbigjakmdgkmoaaaoc",children:"Chrome Xdebug Helper"}),"\nextension."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://addons.mozilla.org/en-US/firefox/addon/xdebug-helper-for-firefox/",children:"Firefox Xdebug Helper"}),"\nextension."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://microsoftedge.microsoft.com/addons/detail/xdebug-helper/ggnngifabofaddiejjeagbaebkejomen",children:"Edge Xdebug Helper"}),"\nadd-on."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Enable Xdebug in your browser (see instructions for your extension/add-on)."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Set a breakpoint in your IDE. ",(0,i.jsx)(n.code,{children:"index.php"})," in your web root is a good place to\nstart."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Run ",(0,i.jsx)(n.code,{children:"ahoy debug"})," or ",(0,i.jsx)(n.code,{children:"XDEBUG_ENABLE=true docker compose up -d cli php nginx"}),"\nto enable Xdebug."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Refresh the page in your browser."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:'PhpStorm will stop on your breakpoint and will ask you to map the incoming\nconnection to directory in your project. This is because the code runs in the\ncontainer, which qualifies as a remote server. You need to "tell"\nXdebug where to find the code on your local machine that corresponds to the\ncode running in the container. You would need to do it once and PhpStorm will\nremember the mapping.'}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"xdebug-phpstorm.png",src:o(7451).A+"",width:"975",height:"713"})}),"\n",(0,i.jsx)(n.p,{children:"For more information see the following resources:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://www.jetbrains.com/help/phpstorm/configuring-xdebug.html#debugging-with-phpstorm",children:"https://www.jetbrains.com/help/phpstorm/configuring-xdebug.html#debugging-with-phpstorm"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://docs.lagoon.sh/using-lagoon-advanced/setting-up-xdebug-with-lagoon/",children:"https://docs.lagoon.sh/using-lagoon-advanced/setting-up-xdebug-with-lagoon/"})}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"tips-and-tricks",children:"Tips and tricks"}),"\n",(0,i.jsx)(n.p,{children:"Once your first Xdebug session is set up, you can adjust some of the Debug\nconfigurations in the PhpStorm IDE to make your life easier:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Disable the following options:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"Break at first line in PHP scripts"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"Force break at first line when no path mapping specified"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"Force break at first line when a script is outside the project"})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Increase the number in ",(0,i.jsx)(n.code,{children:"Max. simultaneous connections"})," to ",(0,i.jsx)(n.code,{children:"5"}),' or more. This\nwill prevent hidden debug session being "stuck" without being visible in\nthe IDE.']}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Running PHP from the command line with Xdebug works the same way as\ndebugging a web page, except that you need to run it from within the\ncontainer."})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},7451:(e,n,o)=>{o.d(n,{A:()=>i});const i=o.p+"assets/images/xdebug-phpstorm-67814760003a903b34055004b199fb8f.png"},8453:(e,n,o)=>{o.d(n,{R:()=>r,x:()=>d});var i=o(6540);const t={},s=i.createContext(t);function r(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);