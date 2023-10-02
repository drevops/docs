"use strict";(self.webpackChunkscaffold=self.webpackChunkscaffold||[]).push([[2267],{1408:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>t,metadata:()=>a,toc:()=>d});var i=o(4848),s=o(8453);const t={},r="Docker",a={id:"tools/docker",title:"Docker",description:"https://github.com/docker/cli",source:"@site/content/tools/docker.mdx",sourceDirName:"tools",slug:"/tools/docker",permalink:"/tools/docker",draft:!1,unlisted:!1,editUrl:"https://github.com/drevops/scaffold/tree/develop/.scaffold/docs/content/tools/docker.mdx",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Behat",permalink:"/tools/behat"},next:{title:"Doctor",permalink:"/tools/doctor"}},c={},d=[{value:"About Docker and Docker Compose",id:"about-docker-and-docker-compose",level:2},{value:"Using Docker",id:"using-docker",level:2},{value:"Understanding <code>docker-compose.yml</code>",id:"understanding-docker-composeyml",level:2},{value:"Volumes definitions",id:"volumes-definitions",level:3},{value:"Default user",id:"default-user",level:3},{value:"Environment variables",id:"environment-variables",level:3},{value:"Services",id:"services",level:3},{value:"Networks",id:"networks",level:3},{value:"Validate <code>docker-compose.yml</code>",id:"validate-docker-composeyml",level:2}];function l(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"docker",children:"Docker"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"https://github.com/docker/cli",children:"https://github.com/docker/cli"}),"\n",(0,i.jsx)(n.a,{href:"https://github.com/docker/compose",children:"https://github.com/docker/compose"})]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"Docker is a platform for developing, shipping, and running applications in\ncontainers."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Scaffold provides a configuration for Docker and Docker Compose to run the\nproject in all environments using containers."}),"\n",(0,i.jsxs)(n.p,{children:["Special thanks to Lagoon for providing\nthe ",(0,i.jsx)(n.a,{href:"https://github.com/uselagoon/lagoon-images",children:"container images"}),"\nthat make this possible."]}),"\n",(0,i.jsxs)(n.admonition,{type:"info",children:[(0,i.jsxs)(n.p,{children:["Lagoon images are ",(0,i.jsx)(n.strong,{children:"production-grade"})," and are used in production environments.\nThey receive regular updates and are maintained by the Lagoon team."]}),(0,i.jsx)(n.p,{children:"If you are using Lagoon as your hosting provider, then all of your\nenvironments are using identical images to run the project."})]}),"\n",(0,i.jsx)(n.h2,{id:"about-docker-and-docker-compose",children:"About Docker and Docker Compose"}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsx)(n.p,{children:"Below is a brief overview of Docker and Docker Compose. For more information,\nsee the official documentation."})}),"\n",(0,i.jsxs)(n.p,{children:["Docker is a technology that allows to define services such as a web server or\na database server as standalone ",(0,i.jsx)(n.em,{children:"containers"}),", which are then run in an isolated\nenvironment and can talk to each other."]}),"\n",(0,i.jsxs)(n.p,{children:["The containers are started from ",(0,i.jsx)(n.em,{children:"images"})," - templates that define what is\ninstalled\nin the container and how it is configured. ",(0,i.jsx)(n.em,{children:"Images"})," allow to run ",(0,i.jsx)(n.em,{children:"containers"}),"\nwith consistent content and configuration."]}),"\n",(0,i.jsxs)(n.p,{children:["Docker is an engine that runs containers, built from images, allowing them to\nshare host system resources and communicate to each other. When run locally,\nDocker can be controlled with Docker CLI command, called ",(0,i.jsx)(n.code,{children:"docker"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Docker Compose is a tool that allows to define and run multi-container Docker\napplications in a single ",(0,i.jsx)(n.code,{children:"docker-compose.yml"})," file: multiple containers that\nwork together can be described in a single file, which makes it easier to\nmanage them."]}),"\n",(0,i.jsxs)(n.p,{children:["When working with Drupal, which requires multiple service containers to run, a\ndeveloper would normally use Docker Compose CLI commands (rather than Docker CLI\ncommands) called ",(0,i.jsx)(n.code,{children:"docker compose"}),". Note that this\ncommands runs in the context of the current directory, so it is important to\nrun them from the project root directory. This means that the issued commands\nwill only affect the containers defined in the ",(0,i.jsx)(n.code,{children:"docker-compose.yml"})," file in the\ncurrent directory and will not affect any other containers running on the host."]}),"\n",(0,i.jsx)(n.p,{children:"When a project is fully configured, the usage of Docker-based application comes\ndown to a handful of commands to manage the state of the containers (per\nproject):"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"docker compose up -d"})," - start the containers in the background."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"docker compose down"})," - stop and remove the containers."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"docker compose exec <service>"})," - run a command in a running ",(0,i.jsx)(n.code,{children:"<service>"}),"\ncontainer."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"docker compose logs -f"})," - follow the logs of all the containers."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"docker compose ps"})," - list all running containers."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"More advanced commands are normally used when adjusting the project Docker\nconfiguration and services."}),"\n",(0,i.jsx)(n.h2,{id:"using-docker",children:"Using Docker"}),"\n",(0,i.jsx)(n.p,{children:"Scaffold uses Docker to run the project in a containerized environment locally\nand in CI."}),"\n",(0,i.jsxs)(n.p,{children:["Some of the commands are wrapped in the Ahoy script as a shorthand. But all\nthe commands can be run directly using ",(0,i.jsx)(n.code,{children:"docker compose"})," command."]}),"\n",(0,i.jsxs)(n.p,{children:["Specific commands are described in the relevant ",(0,i.jsx)(n.a,{href:"../../workflows",children:"workflows"}),"\nsections."]}),"\n",(0,i.jsxs)(n.h2,{id:"understanding-docker-composeyml",children:["Understanding ",(0,i.jsx)(n.code,{children:"docker-compose.yml"})]}),"\n",(0,i.jsxs)(n.p,{children:["Docker Compose reads the configuration from the ",(0,i.jsx)(n.code,{children:"docker-compose.yml"})," and\n",(0,i.jsx)(n.code,{children:"docker-compose.override.yml"})," files. The configuration files are written in\nYAML,\nwhich ",(0,i.jsx)(n.a,{href:"http://blog.daemonl.com/2016/02/yaml.html",children:"support anchors and references"}),"\nthat help to reduce duplication."]}),"\n",(0,i.jsx)(n.p,{children:"The file provided by Scaffold contains the following sections:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#volumes-definitions",children:"Volumes definitions"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#default-user",children:"Default user"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#environment-variables",children:"Environment variables"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#services",children:"Services"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#networks",children:"Networks"})}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"volumes-definitions",children:"Volumes definitions"}),"\n",(0,i.jsx)(n.p,{children:"Volumes are used to share data between containers. If the host supports volume\nmounting, then the data can be shared between containers through the host,\nmaking it possible to access and modify the data from the host."}),"\n",(0,i.jsx)(n.p,{children:"This is used during development to share the application code between the\ncontainer and the host, so that the changes made on the host are immediately\nreflected in the running application."}),"\n",(0,i.jsx)(n.p,{children:"There are 2 volumes defined:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Project root directory ",(0,i.jsx)(n.code,{children:"."})," maps to ",(0,i.jsx)(n.code,{children:"/app"})," directory within a container. This\nis where a PHP engine accesses the application code."]}),"\n",(0,i.jsxs)(n.li,{children:["Files directory ",(0,i.jsx)(n.code,{children:"./web/sites/default/files"})," maps\nto ",(0,i.jsx)(n.code,{children:"/app/web/sites/default/files"})," directory within a container as an override\nto the default volume definition. This allows to use different type of syncing\nto optimise performance, because files are not changed as often as the code."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"There are 2 more volumes defined and commented out - these are used in\nenvironments without volume mounting support, such as CircleCI. These volumes\ndefinitions are automatically uncommented in CI environment, and they replace\nthe host volume mounting, which is removed."}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"VOLUME_FLAGS"})," environment variable allows to define the consistency of the data\nwithin mounted volumes. The values are:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"default"}),": Equivalent to ",(0,i.jsx)(n.code,{children:"consistent"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"consistent"}),": Full consistency. The container runtime and the host maintain an\nidentical view of the mount at all times."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"cached"}),": The host's view of the mount is authoritative. There may be delays\nbefore updates made on the host are visible within a container."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"delegated"}),": The container runtime's view of the mount is authoritative. There\nmay be delays before updates made in a container are visible on the host."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["The default value is ",(0,i.jsx)(n.code,{children:"delegated"}),", so that any changes done in the container are\nimmediately visible on the host."]}),"\n",(0,i.jsx)(n.h3,{id:"default-user",children:"Default user"}),"\n",(0,i.jsxs)(n.p,{children:["The default user is defined as ",(0,i.jsx)(n.code,{children:"1000"})," - this is the user ID that is used in the\ncontainer to run the application. This is the same user ID as the host user, so\nthat the files created in the container are owned by the host user."]}),"\n",(0,i.jsx)(n.p,{children:"Changes this value if your user ID is different."}),"\n",(0,i.jsx)(n.h3,{id:"environment-variables",children:"Environment variables"}),"\n",(0,i.jsxs)(n.p,{children:["By default, the Docker Composer reads environment variables from the ",(0,i.jsx)(n.code,{children:".env"}),"\nfile. Scaffold provides an additional capability to read files from ",(0,i.jsx)(n.code,{children:".env.local"}),"\nfile as well. This allows to override the environment variables locally without\nmodifying the ",(0,i.jsx)(n.code,{children:".env"})," file."]}),"\n",(0,i.jsxs)(n.p,{children:["The variables read from ",(0,i.jsx)(n.code,{children:".env"})," and ",(0,i.jsx)(n.code,{children:".env.local"})," files then passed into the\ncontainers."]}),"\n",(0,i.jsx)(n.p,{children:"This section only defines 2 types of variables:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Variables that are specific to the stack and require a default value (\nlike ",(0,i.jsx)(n.code,{children:"LAGOON_ROUTE"}),")."]}),"\n",(0,i.jsxs)(n.li,{children:["Variables that cannot be stored in ",(0,i.jsx)(n.code,{children:".env"})," file and are injected from the\nactual environment (like secrets)."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Any other variables should be defined in the ",(0,i.jsx)(n.code,{children:".env"})," file."]}),"\n",(0,i.jsx)(n.p,{children:"Consider the example:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"  TZ: ${DREVOPS_TZ:-Australia/Melbourne}\n  # Local development URL.\n  DREVOPS_LOCALDEV_URL: &default-url ${COMPOSE_PROJECT_NAME:-example-site}.docker.amazee.io\n  # Local development route used in Lagoon images and Pygmy to route requests.\n  LAGOON_ROUTE: *default-url\n"})}),"\n",(0,i.jsx)(n.p,{children:"where"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"TZ: ${DREVOPS_TZ:-Australia/Melbourne}"})," - defines a variable ",(0,i.jsx)(n.code,{children:"TZ"})," with a\ndefault value of ",(0,i.jsx)(n.code,{children:"Australia/Melbourne"}),", but only if ",(0,i.jsx)(n.code,{children:"DREVOPS_TZ"})," variable is\nnot defined."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"DREVOPS_LOCALDEV_URL: &default-url ${COMPOSE_PROJECT_NAME:-example-site}.docker.amazee.io"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["defines a variable ",(0,i.jsx)(n.code,{children:"DREVOPS_LOCALDEV_URL"})," with a default value of\n",(0,i.jsx)(n.code,{children:"${COMPOSE_PROJECT_NAME:-example-site}.docker.amazee.io"}),", but only if\n",(0,i.jsx)(n.code,{children:"DREVOPS_LOCALDEV_URL"})," variable is not defined. The value of the variable\nis also stored in a YAML anchor ",(0,i.jsx)(n.code,{children:"default-url"})," for later use."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"LAGOON_ROUTE: *default-url"})," - defines a variable ",(0,i.jsx)(n.code,{children:"LAGOON_ROUTE"})," with a value\nof ",(0,i.jsx)(n.code,{children:"*default-url"}),", which is a reference to the ",(0,i.jsx)(n.code,{children:"default-url"})," YAML anchor\ndefined above."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["See more information about environment variables in\nthe ",(0,i.jsx)(n.a,{href:"https://docs.docker.com/compose/environment-variables/set-environment-variables/",children:"official documentation"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"services",children:"Services"}),"\n",(0,i.jsx)(n.p,{children:"Services section describes the configuration for each container."}),"\n",(0,i.jsxs)(n.p,{children:["The following services are defined in the ",(0,i.jsx)(n.code,{children:"docker-compose.yml"})," file provided by\nScaffold:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"cli"})," - a container that runs a shell. This container is used to run commands\nin the context of the project, such as ",(0,i.jsx)(n.code,{children:"composer"})," or ",(0,i.jsx)(n.code,{children:"drush"}),". This is also a\ncontainer where cron jobs are run within a hosting environment (if that\nenvironment supports containerisation)."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"nginx"})," - a container that runs a web server. This container is used to serve\nthe application and pass requests to the PHP container."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"php"})," - a container that runs a PHP engine. This container is used to run the\napplication code and execute commands in the context of the application. It is\ndifferent from the ",(0,i.jsx)(n.code,{children:"cli"})," container in that it does not have certain\ndevelopment dependencies installed, has a smaller size and is optimised for\nscalability."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"mariadb"})," - a container that runs a database server. This container is used to\nstore the application data. It can be accessed from the host via a randomly\nassigned port - run ",(0,i.jsx)(n.code,{children:"docker compose port mariadb 3306"})," to get the port number."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"redis"})," - an optional container that runs a Redis server. This container is\nused to store the application cache."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"solr"})," - an optional container that runs a Solr server. This container is used\nto store the application search index. It can be accessed from the host via a\nrandomly assigned port - run ",(0,i.jsx)(n.code,{children:"docker compose port solr 8983"})," to get the port\nnumber."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"clamav"})," - an optional container that runs a ClamAV antivirus server. This\ncontainer is used to scan uploaded files for viruses.","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"chrome"})," - container that runs a Chrome browser. This container is\nused to run Behat tests. It is based on the official Selenium image which has\nadditional required tools, like virtual desktop, installed."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"wait_dependencies"})," - a container that runs a script to wait for applications\nwithin other containers to become available. Docker itself can coordinate\nstartup of containers, but it does not know when the application within the\ncontainer is ready to accept connections. This container is used to wait for\nspecified application ports to become available. The whole stack is considered\nready to be worked with only when this container exits with a zero exit code."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"networks",children:"Networks"}),"\n",(0,i.jsxs)(n.p,{children:["Networks section defines the networks that are used to connect containers to\neach other. ",(0,i.jsx)(n.a,{href:"/tools/pygmy",children:"Pygmy"})," provides the default ",(0,i.jsx)(n.code,{children:"amazeeio-network"})," network\nthat\nis used to connect all containers together."]}),"\n",(0,i.jsxs)(n.h2,{id:"validate-docker-composeyml",children:["Validate ",(0,i.jsx)(n.code,{children:"docker-compose.yml"})]}),"\n",(0,i.jsxs)(n.p,{children:["After updating the ",(0,i.jsx)(n.code,{children:"docker-compose.yml"})," file, it is useful sometimes to validate\nit before running the build. This can be done with the following command:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"\ndocker compose -f docker-compose.yml config\n\n"})})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},8453:(e,n,o)=>{o.d(n,{R:()=>r,x:()=>a});var i=o(6540);const s={},t=i.createContext(s);function r(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);