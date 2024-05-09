"use strict";(self.webpackChunkscaffold=self.webpackChunkscaffold||[]).push([[1729],{4458:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var t=o(4848),i=o(8453);const r={hide:["toc"]},s="Architecture",a={id:"getting-started/architecture",title:"Architecture",description:"Scaffold offers a pre-configured project template that is reliable, tested and",source:"@site/content/getting-started/architecture.mdx",sourceDirName:"getting-started",slug:"/getting-started/architecture",permalink:"/getting-started/architecture",draft:!1,unlisted:!1,editUrl:"https://github.com/drevops/scaffold/tree/develop/.scaffold/docs/content/getting-started/architecture.mdx",tags:[],version:"current",frontMatter:{hide:["toc"]},sidebar:"docs",previous:{title:"Overview",permalink:"/getting-started/"},next:{title:"FAQs",permalink:"/getting-started/faqs"}},c={},l=[{value:"Zen of DrevOps Scaffold",id:"zen-of-drevops-scaffold",level:2},{value:"Repository structure",id:"repository-structure",level:2},{value:"Scripts",id:"scripts",level:2},{value:"Centralised workflows",id:"centralised-workflows",level:3},{value:"Router scripts",id:"router-scripts",level:3},{value:"Environment variables",id:"environment-variables",level:3}];function d(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",mermaid:"mermaid",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"architecture",children:"Architecture"}),"\n",(0,t.jsx)(n.p,{children:"Scaffold offers a pre-configured project template that is reliable, tested and\nready-to-use. Its main goal is to streamline onboarding, making it as quick and\nefficient as possible."}),"\n",(0,t.jsx)(n.h2,{id:"zen-of-drevops-scaffold",children:"Zen of DrevOps Scaffold"}),"\n",(0,t.jsxs)(n.p,{children:["Similar to ",(0,t.jsx)(n.a,{href:"https://www.python.org/dev/peps/pep-0020/",children:"Zen of Python"}),", DrevOps Scaffold\nhas its own set of principles."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Simple is better than complex."}),"\n",(0,t.jsx)(n.li,{children:"Rely as much on upstream as possible."}),"\n",(0,t.jsx)(n.li,{children:"Favor standard practices over custom implementations."}),"\n",(0,t.jsx)(n.li,{children:"Errors should never pass silently."}),"\n",(0,t.jsx)(n.li,{children:"Explicit logging helps."}),"\n",(0,t.jsx)(n.li,{children:"Readability counts."}),"\n",(0,t.jsx)(n.li,{children:"If the implementation is hard to explain, it's a bad idea."}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"repository-structure",children:"Repository structure"}),"\n",(0,t.jsxs)(n.p,{children:["The repository file structure follows the structure defined in\n",(0,t.jsx)(n.a,{href:"https://github.com/drupal-composer/drupal-project",children:"drupal-composer/drupal-project"}),"\nwith addition of several configuration files and directories."]}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["The directory structure is ",(0,t.jsx)(n.strong,{children:"exactly what you are going to get"})," after\ninstallation - there are no files being copied or moved from ",(0,t.jsx)(n.em,{children:"magic"})," places."]})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"\u251c\u2500\u2500 .circleci                # CircleCI configuration files.\n\u251c\u2500\u2500 .data                    # Database dump files directory. Excluded.\n\u251c\u2500\u2500 .docker                  # Docker configuration files.\n\u2502   \u251c\u2500\u2500 config               #   Additional configuration for every Docker service.\n\u2502   \u2514\u2500\u2500 scripts              #   Scripts to run in the Docker services during image build\n\u251c\u2500\u2500 .github                  # GitHub configuration files.\n\u251c\u2500\u2500 .logs                    # Test logs and screenshots. Excluded.\n\u251c\u2500\u2500 config                   # Drupal configuration.\n\u2502   \u251c\u2500\u2500 ci                   #   Config split configuration for CI environment.\n\u2502   \u251c\u2500\u2500 default              #   Default configuration.\n\u2502   \u251c\u2500\u2500 dev                  #   Config split configuration for DEV environment.\n\u2502   \u251c\u2500\u2500 local                #   Config split configuration for local environment.\n\u2502   \u2514\u2500\u2500 test                 #   Config split configuration for test environment.\n\u251c\u2500\u2500 docs                     # Your project documentation.\n\u251c\u2500\u2500 drush                    # Drush configuration files.\n\u251c\u2500\u2500 hooks                    # Acquia hooks. Removed if not using Acquia hosting.\n\u2502   \u251c\u2500\u2500 common               #   Hook implementations that run on all environments.\n\u2502   \u251c\u2500\u2500 library              #   Library of hook implementations.\n\u2502   \u2514\u2500\u2500 prod                 #   Hook implementations that run in prod environment.\n\u251c\u2500\u2500 patches                  # Patches for packages.\n\u251c\u2500\u2500 scripts                  # Composer, DrevOps Scaffold and custom project scripts.\n\u2502   \u251c\u2500\u2500 composer             #   Composer scripts.\n\u2502   \u251c\u2500\u2500 custom               #   Custom project scripts.\n\u2502   \u2514\u2500\u2500 drevops              #   DrevOps Scaffold workflow scripts.\n\u251c\u2500\u2500 tests                    # Integration and configuration tests.\n\u2502   \u251c\u2500\u2500 behat                #   Behat BDD tests.\n\u2502   \u2514\u2500\u2500 phpunit              #   Configuration unit tests\n\u251c\u2500\u2500 web                      # Drupal web root directory.\n\u2502   \u251c\u2500\u2500 modules/custom/ys_core    #  Custom module scaffold.\n\u2502   \u2502   \u251c\u2500\u2500 tests/src        #         Tests scaffold.\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 Functional   #           Functional test scaffold and example.\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 Kernel       #           Kernel test scaffold and example.\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 Traits       #           Helper traits to use in tests.\n\u2502   \u2502   \u2502   \u2514\u2500\u2500 Unit         #           Unit test scaffold and example.\n\u2502   \u2502   \u2514\u2500\u2500 ys_core.deploy   #         Drush deploy example.\n\u2502   \u2514\u2500\u2500 modules/custom/ys_search  #  Custom search module scaffold.\n\u251c\u2500\u2500 .ahoy.yml                # Ahoy configuration file.\n\u251c\u2500\u2500 .ahoy.local.example.yml  # Ahoy local configuration file.\n\u251c\u2500\u2500 .dockerignore            # Docker ignore configuration file.\n\u251c\u2500\u2500 .editorconfig            # Helps maintain consistent coding styles.\n\u251c\u2500\u2500 .env                     # Environment variables to control project workflow using variables.\n\u251c\u2500\u2500 .env.local.default       # Environment variables local overrides.\n\u251c\u2500\u2500 .gitignore               # Intentionally untracked files to ignore in Git.\n\u251c\u2500\u2500 .gitignore.artifact    # Intentionally untracked files to ignore in artifact deployment.\n\u251c\u2500\u2500 .lagoon.yml              # Lagoon configuration file. Removed if not using Lagoon hosting.\n\u251c\u2500\u2500 .twig-cs-fixer.php       # Twig CS Fixer configuration file.\n\u251c\u2500\u2500 behat.yml                # Behat configuration file.\n\u251c\u2500\u2500 composer.json            # Composer configuration file.\n\u251c\u2500\u2500 docker-compose.yml       # Docker Compose configuration file.\n\u251c\u2500\u2500 docker-compose.override.default.yml # Docker Compose local configuration file.\n\u251c\u2500\u2500 phpcs.xml                # PHP CodeSniffer configuration file.\n\u251c\u2500\u2500 phpmd.xml                # PHP Mess Detector configuration file.\n\u251c\u2500\u2500 phpstan.neon             # PHPStan configuration file.\n\u251c\u2500\u2500 phpunit.xml              # PHPUnit configuration file.\n\u251c\u2500\u2500 README.md                # Project main readme file.\n\u2514\u2500\u2500 renovate.json            # Renovate configuration file.\n"})}),"\n",(0,t.jsx)(n.h2,{id:"scripts",children:"Scripts"}),"\n",(0,t.jsxs)(n.p,{children:["Scaffold provides a set of ",(0,t.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/POSIX",children:"POSIX"}),"-compliant\nscripts designed to orchestrate workflows."]}),"\n",(0,t.jsxs)(n.p,{children:["During installation, the scripts are added to your project repository into\n",(0,t.jsx)(n.code,{children:"scripts/drevops"})," directory."]}),"\n",(0,t.jsxs)(n.admonition,{type:"note",children:[(0,t.jsxs)(n.p,{children:["Using scripts instead of compiled binaries allows for ",(0,t.jsx)(n.strong,{children:"in-place per-project\noverrides"})," without needing to learn an additional programming language, compile\nsources, or rely on upstream dependencies."]}),(0,t.jsxs)(n.p,{children:["We are looking into providing ",(0,t.jsx)(n.code,{children:"pre-"})," and ",(0,t.jsx)(n.code,{children:"post-"})," hooks for scripts so\nthat you can extend the functionality without modifying the original source\ncode."]}),(0,t.jsx)(n.p,{children:"We are also looking into a more streamlined way of updating scripts."})]}),"\n",(0,t.jsx)(n.h3,{id:"centralised-workflows",children:"Centralised workflows"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"A workflow is a sequence of steps or tasks to accomplish a specific goal."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Scaffold comes with as set of pre-defined workflows to standardise the development\nprocess."}),"\n",(0,t.jsxs)(n.p,{children:["For example, the ",(0,t.jsx)(n.code,{children:"scripts/drevops/download-db.sh"})," script is used to download a\ndatabase from any supported hosting provider or a custom location."]}),"\n",(0,t.jsxs)(n.p,{children:["Another example is a ",(0,t.jsx)(n.code,{children:"scripts/drevops/provision.sh"})," script that is used to\nprovision a website in a consistent way, allowing to alter the flow using\n",(0,t.jsx)(n.a,{href:"/workflows/variables",children:"environment variables"})," and enhance it via custom\nscripts."]}),"\n",(0,t.jsx)(n.p,{children:"The scripts aim to centralize workflows instead of adjusting them for every\nenvironment (local, CI, dev, prod, etc.), reducing multiple points of failure.\nThis means that a developer updating a workflow for local environment, for\nexample, will not accidentally forget to update it for the CI environment, and\nso on."}),"\n",(0,t.jsxs)(n.p,{children:["In the diagram below, the ",(0,t.jsx)(n.code,{children:"download-db.sh"})," and ",(0,t.jsx)(n.code,{children:"provision.sh"})," scripts are\n",(0,t.jsx)(n.strong,{children:"consistently"})," called from the configuration files within an environment."]}),"\n",(0,t.jsx)(n.mermaid,{value:'    flowchart LR\n    subgraph Environment\n        A[Local<br/><small><code>.ahoy.yml</code></small>]\n        B[CI<br/><small><code>config.yml</code></small>]\n        C[Hosting<br/><small><code>.lagoon.yml</code></small>]\n    end\n\n    subgraph Scripts\n        direction TB\n        D["download-db.sh"] -.-> E["provision.sh"]\n    end\n\n    A --\x3e Scripts\n    A --\x3e Scripts\n    B --\x3e Scripts\n    B --\x3e Scripts\n    C --\x3e Scripts\n    C --\x3e Scripts'}),"\n",(0,t.jsxs)(n.p,{children:["See ",(0,t.jsx)(n.a,{href:"../../workflows",children:"Workflows"})," section for more details."]}),"\n",(0,t.jsx)(n.h3,{id:"router-scripts",children:"Router scripts"}),"\n",(0,t.jsxs)(n.p,{children:["The script from the example above is a ",(0,t.jsx)(n.em,{children:"router"})," script that invokes other,\nmore specific scripts (by sourcing them) based on the project configuration.\nThis design ",(0,t.jsx)(n.strong,{children:"keeps the entry point consistent"})," while allowing implementation\nupdates as needed without modifying the entry point in multiple places."]}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsx)(n.p,{children:"The router script always starts with a verb to indicate the action it performs.\nSpecific scripts always start with a name of the router script."})}),"\n",(0,t.jsxs)(n.p,{children:["In the diagram below, for example, the ",(0,t.jsx)(n.code,{children:"download-db.sh"})," script, being a router\nscript, invokes another script specific to the database download source\n(controlled with an environment variable)."]}),"\n",(0,t.jsxs)(n.p,{children:["Changing the database download source from ",(0,t.jsx)(n.code,{children:"lagoon"})," to ",(0,t.jsx)(n.code,{children:"s3"})," would\nnot require changes to any local, CI, or hosting scripts."]}),"\n",(0,t.jsxs)(n.p,{children:["In addition, a developer would not need to learn how to use ",(0,t.jsx)(n.code,{children:"s3"})," to\ndownload a database or even know how that download process is setup."]}),"\n",(0,t.jsxs)(n.p,{children:["If a new database download method is introduced, the router\nscript ",(0,t.jsx)(n.code,{children:"download-db.sh"})," can be easily extended to accommodate it,\nwithout altering configuration files for services."]}),"\n",(0,t.jsx)(n.mermaid,{value:"---\ntitle: Example of a router script\n---\nflowchart LR\n    subgraph download-db.sh\n        F{DB source type}\n    end\n    F -- FTP --\x3e G[download-db-ftp.sh]\n    F -- CURL --\x3e H[download-db-curl.sh]\n    F -- Acquia --\x3e I[download-db-acquia.sh]\n    F -- Lagoon --\x3e J[download-db-lagoon.sh]\n    F -- Docker registry --\x3e K[download-db-container-registry.sh]\n    F -- Your custom source --\x3e L[download-db-your-source.sh]"}),"\n",(0,t.jsx)(n.h3,{id:"environment-variables",children:"Environment variables"}),"\n",(0,t.jsx)(n.p,{children:"The workflow within scripts is controlled via environment variables."}),"\n",(0,t.jsxs)(n.p,{children:["To alter the workflow for a specific environment, the variables would need to be\nset within that environment via the ",(0,t.jsx)(n.code,{children:".env"})," configuration file or other means\nsupported by the environment (e.g. CircleCI and Acquia support injecting\nvariables via UI)."]}),"\n",(0,t.jsxs)(n.p,{children:["See ",(0,t.jsx)(n.a,{href:"/workflows/variables",children:"Variables"})," section for more details."]})]})}function p(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},8453:(e,n,o)=>{o.d(n,{R:()=>s,x:()=>a});var t=o(6540);const i={},r=t.createContext(i);function s(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);