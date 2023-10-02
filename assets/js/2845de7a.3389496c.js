"use strict";(self.webpackChunkscaffold=self.webpackChunkscaffold||[]).push([[3841],{5024:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var s=t(4848),r=t(8453);const i={sidebar_label:"PHPUnit"},o="PHPUnit \u2013 The PHP Testing Framework",l={id:"tools/phpunit",title:"PHPUnit \u2013 The PHP Testing Framework",description:"https://github.com/sebastianbergmann/phpunit/",source:"@site/content/tools/phpunit.mdx",sourceDirName:"tools",slug:"/tools/phpunit",permalink:"/tools/phpunit",draft:!1,unlisted:!1,editUrl:"https://github.com/drevops/scaffold/tree/develop/.scaffold/docs/content/tools/phpunit.mdx",tags:[],version:"current",frontMatter:{sidebar_label:"PHPUnit"},sidebar:"docs",previous:{title:"PHPStan",permalink:"/tools/phpstan"},next:{title:"Pygmy",permalink:"/tools/pygmy"}},a={},c=[{value:"Usage",id:"usage",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Coverage",id:"coverage",level:2},{value:"Ignoring lines from coverage",id:"ignoring-lines-from-coverage",level:3},{value:"Ignoring fail in CI",id:"ignoring-fail-in-ci",level:2}];function d(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"phpunit--the-php-testing-framework",children:"PHPUnit \u2013 The PHP Testing Framework"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/sebastianbergmann/phpunit/",children:"https://github.com/sebastianbergmann/phpunit/"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"PHPUnit is a programmer-oriented testing framework for PHP."}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Scaffold comes with ",(0,s.jsx)(n.a,{href:"https://github.com/drevops/scaffold/blob/develop/phpunit.xml",children:"pre-configured PHPCS ruleset"})," for Drupal projects."]}),"\n",(0,s.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"vendor/bin/phpunit                          # Run all tests.\nvendor/bin/phpunit --testsuite=unit         # Run Unit tests.\nvendor/bin/phpunit --testsuite=kernel       # Run Kernel tests.\nvendor/bin/phpunit --testsuite=functional   # Run Functional tests.\n"})}),"\n",(0,s.jsx)(n.p,{children:"or"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"ahoy test-unit                              # Run Unit tests.\nahoy test-kernel                            # Run Kernel tests.\nahoy test-functional                        # Run Functional tests.\n\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Running all tests in the file"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"vendor/bin/phpunit path/to/MyTest.php\n"})}),"\n",(0,s.jsx)(n.p,{children:"or"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"ahoy test-unit path/to/MyTest.php\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Running selected tests by name"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"vendor/bin/phpunit --filter=MyTest\n"})}),"\n",(0,s.jsx)(n.p,{children:"or"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"ahoy test-unit --filter=MyTest\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsxs)(n.strong,{children:["Running tagged tests with ",(0,s.jsx)(n.code,{children:"@group group_name"})," annotation"]})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"vendor/bin/phpunit --group=group_name\n"})}),"\n",(0,s.jsx)(n.p,{children:"or"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"ahoy test-unit --group=group_name\n"})}),"\n",(0,s.jsx)(n.h2,{id:"configuration",children:"Configuration"}),"\n",(0,s.jsxs)(n.p,{children:["See ",(0,s.jsx)(n.a,{href:"https://docs.phpunit.de/en/10.4/configuration.html",children:"configuration reference"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["All global configuration takes place in the ",(0,s.jsx)(n.a,{href:"https://github.com/drevops/scaffold/blob/develop/phpunit.xml",children:(0,s.jsx)(n.code,{children:"phpunit.xml"})})," file."]}),"\n",(0,s.jsx)(n.p,{children:"By default, PHPUnit will run tests for custom modules and themes, Drupal\nsettings and CI configuration."}),"\n",(0,s.jsx)(n.p,{children:"The recommended way to adding test targets is via using test suites:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-xml",children:'<testsuite name="unit">\n  <directory>my/custom/dir/*/tests</directory>\n</testsuite>\n\n'})}),"\n",(0,s.jsxs)(n.p,{children:["Run checks against platform version specified in ",(0,s.jsx)(n.code,{children:"composer.json"})," key ",(0,s.jsx)(n.code,{children:"config.platform.php"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-xml",children:'<config name="testVersion" value="8.1"/>\n'})}),"\n",(0,s.jsx)(n.h2,{id:"coverage",children:"Coverage"}),"\n",(0,s.jsxs)(n.p,{children:["PHPUnit is configured to generate code coverage reports. The reports are stored\nin ",(0,s.jsx)(n.code,{children:".logs/test_results/phpunit/phpunit.xml"}),"\nas ",(0,s.jsx)(n.a,{href:"https://cobertura.github.io/cobertura/",children:"Cobertura XML"}),", suitable for\nautomated coverage assessment, and in ",(0,s.jsx)(n.code,{children:".logs/coverage/phpunit/.coverage-html"})," as\nHTML coverage report, useful for visual report assessment during test\ndevelopment."]}),"\n",(0,s.jsxs)(n.p,{children:["The tests need to run with ",(0,s.jsx)(n.code,{children:"XDEBUG_MODE=coverage"})," environment variable set."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"XDEBUG_MODE=coverage cli vendor/bin/phpunit\n"})}),"\n",(0,s.jsx)(n.p,{children:"CI runs tests with coverage by default and stores the reports as artifacts."}),"\n",(0,s.jsx)(n.h3,{id:"ignoring-lines-from-coverage",children:"Ignoring lines from coverage"}),"\n",(0,s.jsx)(n.p,{children:"Sometimes it is necessary to ignore lines from coverage. For example, when\ntesting a module that uses a third-party library, it is not necessary to test\nthe library itself."}),"\n",(0,s.jsxs)(n.p,{children:["To ignore a method from coverage, add ",(0,s.jsx)(n.code,{children:"@codeCoverageIgnore"})," annotation to the\nmethod docblock."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-php",children:"/**\n * @codeCoverageIgnore\n */\npublic function myMethod() {\n  // ...\n}\n"})}),"\n",(0,s.jsxs)(n.p,{children:["To ignore a line from coverage, add ",(0,s.jsx)(n.code,{children:"@codeCoverageIgnoreStart"})," and\n",(0,s.jsx)(n.code,{children:"@codeCoverageIgnoreEnd"})," annotations before the first and after the last line."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-php",children:"// @codeCoverageIgnoreStart\n$a = 1;\n$b = 2;\n// @codeCoverageIgnoreEnd\n"})}),"\n",(0,s.jsx)(n.h2,{id:"ignoring-fail-in-ci",children:"Ignoring fail in CI"}),"\n",(0,s.jsx)(n.p,{children:"This tool runs in CI by default and fails the build if there are any violations."}),"\n",(0,s.jsxs)(n.p,{children:["Set ",(0,s.jsx)(n.code,{children:"DREVOPS_CI_PHPUNIT_IGNORE_FAILURE"})," environment variable to ",(0,s.jsx)(n.code,{children:"1"})," to ignore\nfailures. The tool will still run and report violations, if any."]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>l});var s=t(6540);const r={},i=s.createContext(r);function o(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);