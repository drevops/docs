"use strict";(self.webpackChunkscaffold=self.webpackChunkscaffold||[]).push([[5516],{7265:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>r,metadata:()=>t,toc:()=>d});var i=s(4848),o=s(8453);const r={sidebar_label:"PHPMD"},l="PHPMD - PHP Mess Detector",t={id:"tools/phpmd",title:"PHPMD - PHP Mess Detector",description:"https://github.com/phpmd/phpmd",source:"@site/content/tools/phpmd.mdx",sourceDirName:"tools",slug:"/tools/phpmd",permalink:"/tools/phpmd",draft:!1,unlisted:!1,editUrl:"https://github.com/drevops/scaffold/tree/develop/.scaffold/docs/content/tools/phpmd.mdx",tags:[],version:"current",frontMatter:{sidebar_label:"PHPMD"},sidebar:"docs",previous:{title:"PHPCS",permalink:"/tools/phpcs"},next:{title:"PHPStan",permalink:"/tools/phpstan"}},c={},d=[{value:"Usage",id:"usage",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Ignoring",id:"ignoring",level:2},{value:"Ignoring fail in CI",id:"ignoring-fail-in-ci",level:2}];function a(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"phpmd---php-mess-detector",children:"PHPMD - PHP Mess Detector"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://github.com/phpmd/phpmd",children:"https://github.com/phpmd/phpmd"})}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"What PHPMD does is: It takes a given PHP source code base and look for several\npotential problems within that source. These problems can be things like:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Possible bugs"}),"\n",(0,i.jsx)(n.li,{children:"Suboptimal code"}),"\n",(0,i.jsx)(n.li,{children:"Overcomplicated expressions"}),"\n",(0,i.jsx)(n.li,{children:"Unused parameters, methods, properties"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Scaffold comes with ",(0,i.jsx)(n.a,{href:"https://github.com/drevops/scaffold/blob/develop/phpmd.xml",children:"pre-configured PHPMD ruleset"}),"\nfor Drupal projects."]}),"\n",(0,i.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"vendor/bin/phpmd . text phpmd.xml\n"})}),"\n",(0,i.jsx)(n.p,{children:"or"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"ahoy lint-be\n"})}),"\n",(0,i.jsx)(n.h2,{id:"configuration",children:"Configuration"}),"\n",(0,i.jsxs)(n.p,{children:["See ",(0,i.jsx)(n.a,{href:"https://phpmd.org/documentation/index.html",children:"configuration reference"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["All global configuration takes place in the ",(0,i.jsx)(n.a,{href:"https://github.com/drevops/scaffold/blob/develop/phpmd.xml",children:(0,i.jsx)(n.code,{children:"phpmd.xml"})}),"\nfile."]}),"\n",(0,i.jsx)(n.p,{children:"Targets include custom modules and themes, settings and tests."}),"\n",(0,i.jsx)(n.p,{children:"Adding targets is not supported via configuration file. Instead, use the\nexclusion patterns to exclude files and directories."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-xml",children:"<exclude-pattern>*\\/dir\\/another\\/*\\.php</exclude-pattern>\n"})}),"\n",(0,i.jsx)(n.h2,{id:"ignoring",children:"Ignoring"}),"\n",(0,i.jsxs)(n.p,{children:["Ignoring rules ",(0,i.jsx)(n.strong,{children:"globally"})," takes place in\nthe ",(0,i.jsx)(n.a,{href:"https://github.com/drevops/scaffold/blob/develop/phpmd.xml",children:(0,i.jsx)(n.code,{children:"phpmd.xml"})})," file:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-xml",children:'<rule ref="rulesets/cleancode.xml/MissingImport">\n    <properties>\n        <property name="ignore-global" value="true"/>\n    </properties>\n</rule>\n'})}),"\n",(0,i.jsxs)(n.p,{children:["PHPMD does not support ignoring of ",(0,i.jsx)(n.strong,{children:"all PHPMD rules"})," within a file."]}),"\n",(0,i.jsxs)(n.p,{children:["PHPMD does not support ignoring of ",(0,i.jsx)(n.strong,{children:"a specific rule"})," within a file."]}),"\n",(0,i.jsxs)(n.p,{children:["PHPMD does not support ignoring of the ",(0,i.jsx)(n.strong,{children:"code blocks"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["PHPMD does not support ignoring the current and the ",(0,i.jsx)(n.strong,{children:"next line"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["PHPMD supports ignoring rules for ",(0,i.jsx)(n.strong,{children:"methods or classes"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-php",children:"/**\n * This will suppress all the PMD warnings in\n * this class.\n *\n * @SuppressWarnings(PHPMD)\n */\nclass Bar {\n    function  foo() {\n        $baz = 23;\n    }\n}\n\nclass Bar {\n  /**\n   * This will suppress UnusedLocalVariable\n   * warnings in this method\n   *\n   * @SuppressWarnings(PHPMD.UnusedLocalVariable)\n   */\n  public function foo() {\n      $baz = 42;\n  }\n}\n"})}),"\n",(0,i.jsx)(n.h2,{id:"ignoring-fail-in-ci",children:"Ignoring fail in CI"}),"\n",(0,i.jsx)(n.p,{children:"This tool runs in CI by default and fails the build if there are any violations."}),"\n",(0,i.jsxs)(n.p,{children:["Set ",(0,i.jsx)(n.code,{children:"DREVOPS_CI_PHPMD_IGNORE_FAILURE"})," environment variable to ",(0,i.jsx)(n.code,{children:"1"})," to ignore\nfailures. The tool will still run and report violations, if any."]})]})}function p(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>l,x:()=>t});var i=s(6540);const o={},r=i.createContext(o);function l(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:l(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);