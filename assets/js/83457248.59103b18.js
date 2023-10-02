"use strict";(self.webpackChunkscaffold=self.webpackChunkscaffold||[]).push([[126],{3757:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>a,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>c,toc:()=>l});var r=o(4848),t=o(8453);const s={},i="Doctor",c={id:"tools/doctor",title:"Doctor",description:"Doctor is a standalone, self-contained script designed to",source:"@site/content/tools/doctor.mdx",sourceDirName:"tools",slug:"/tools/doctor",permalink:"/tools/doctor",draft:!1,unlisted:!1,editUrl:"https://github.com/drevops/scaffold/tree/develop/.scaffold/docs/content/tools/doctor.mdx",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Docker",permalink:"/tools/docker"},next:{title:"Drush",permalink:"/tools/drush"}},a={},l=[{value:"Features",id:"features",level:2},{value:"Checking project status",id:"checking-project-status",level:2},{value:"Getting system information",id:"getting-system-information",level:2}];function d(e){const n={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"doctor",children:"Doctor"}),"\n",(0,r.jsx)(n.p,{children:"Doctor is a standalone, self-contained script designed to\ninspect the current state of your project. Its primary functions include\nchecking project requirements and displaying system information."}),"\n",(0,r.jsxs)(n.p,{children:["Also, it runs before and after you build the project with ",(0,r.jsx)(n.code,{children:"ahoy build"})," to make\nsure that all the requirements are met."]}),"\n",(0,r.jsx)(n.h2,{id:"features",children:"Features"}),"\n",(0,r.jsx)(n.p,{children:"Doctor script performs a series of checks to ensure the project\nenvironment is correctly set up:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Availability of the necessary tools (Docker, Docker Compose, Pygmy, Ahoy etc.)"}),"\n",(0,r.jsx)(n.li,{children:"Port availability on the host machine"}),"\n",(0,r.jsx)(n.li,{children:"Pygmy availability"}),"\n",(0,r.jsx)(n.li,{children:"Container status"}),"\n",(0,r.jsx)(n.li,{children:"Presence of SSH key within a container"}),"\n",(0,r.jsx)(n.li,{children:"Webserver status"}),"\n",(0,r.jsx)(n.li,{children:"Application bootstrap status"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"checking-project-status",children:"Checking project status"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"$ ahoy doctor\n\n[INFO] Checking project requirements\n[ OK ] All required tools are present.\n[ OK ] Port 80 is available.\n[ OK ] Pygmy is running.\n[ OK ] All containers are running\n[ OK ] SSH key is available within CLI container.\n[ OK ] Web server is running and accessible at http://drevops.docker.amazee.io.\n[ OK ] Bootstrapped website at http://drevops.docker.amazee.io.\n[ OK ] All required checks have passed.\n"})}),"\n",(0,r.jsx)(n.h2,{id:"getting-system-information",children:"Getting system information"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"$ ahoy doctor info\n\nSystem information report\n\nOPERATING SYSTEM\nProductName:            macOS\nProductVersion:         13.1\nBuildVersion:           22C65\n\nDOCKER\nPath to binary: /usr/local/bin/docker\nDocker version 23.0.5, build bc4487a\nClient:\n Context:    default\n Debug Mode: false\n Plugins:\n  buildx: Docker Buildx (Docker Inc.)\n    Version:  v0.10.4\n    Path:     /Users/johndoe/.docker/cli-plugins/docker-buildx\n  compose: Docker Compose (Docker Inc.)\n    Version:  v2.17.3\n    Path:     /Users/johndoe/.docker/cli-plugins/docker-compose\n  dev: Docker Dev Environments (Docker Inc.)\n    Version:  v0.1.0\n    Path:     /Users/johndoe/.docker/cli-plugins/docker-dev\n  extension: Manages Docker extensions (Docker Inc.)\n    Version:  v0.2.19\n    Path:     /Users/johndoe/.docker/cli-plugins/docker-extension\n  init: Creates Docker-related starter files for your project (Docker Inc.)\n    Version:  v0.1.0-beta.4\n    Path:     /Users/johndoe/.docker/cli-plugins/docker-init\n  sbom: View the packaged-based Software Bill Of Materials (SBOM) for an image (Anchore Inc.)\n    Version:  0.6.0\n    Path:     /Users/johndoe/.docker/cli-plugins/docker-sbom\n  scan: Docker Scan (Docker Inc.)\n    Version:  v0.26.0\n    Path:     /Users/johndoe/.docker/cli-plugins/docker-scan\n  scout: Command line tool for Docker Scout (Docker Inc.)\n    Version:  v0.10.0\n    Path:     /Users/johndoe/.docker/cli-plugins/docker-scout\n\nServer:\n Containers: 69\n  Running: 51\n  Paused: 0\n  Stopped: 18\n Images: 460\n Server Version: 23.0.5\n Storage Driver: overlay2\n  Backing Filesystem: extfs\n  Supports d_type: true\n  Using metacopy: false\n  Native Overlay Diff: true\n  userxattr: false\n Logging Driver: json-file\n Cgroup Driver: cgroupfs\n Cgroup Version: 2\n Plugins:\n  Volume: local\n  Network: bridge host ipvlan macvlan null overlay\n  Log: awslogs fluentd gcplogs gelf journald json-file local logentries splunk syslog\n Swarm: inactive\n Runtimes: io.containerd.runc.v2 runc\n Default Runtime: runc\n Init Binary: docker-init\n containerd version: 2806fc1057397dbaeefbea0e4e17bddfbd388f38\n runc version: v1.1.5-0-gf19387a\n init version: de40ad0\n Security Options:\n  seccomp\n   Profile: builtin\n  cgroupns\n Kernel Version: 5.15.49-linuxkit\n Operating System: Docker Desktop\n OSType: linux\n Architecture: aarch64\n CPUs: 5\n Total Memory: 31.31GiB\n Name: docker-desktop\n ID: 05da5eb2-2904-49ae-965d-bb10b896e7ac\n Docker Root Dir: /var/lib/docker\n Debug Mode: false\n HTTP Proxy: http.docker.internal:3128\n HTTPS Proxy: http.docker.internal:3128\n No Proxy: hubproxy.docker.internal\n Registry: https://index.docker.io/v1/\n Experimental: false\n Insecure Registries:\n  hubproxy.docker.internal:5555\n  127.0.0.0/8\n Live Restore Enabled: false\n\n\nDOCKER COMPOSE V2\nDocker Compose version v2.17.3\n\nDOCKER-COMPOSE V1\nPath to binary: /usr/local/bin/docker-compose\nWARNING: Compose V1 is no longer supported and will be removed from Docker Desktop in an upcoming release. See https://docs.docker.com/go/compose-v1-eol/\ndocker-compose version 1.29.2, build 5becea4c\ndocker-py version: 5.0.0\nCPython version: 3.9.0\nOpenSSL version: OpenSSL 1.1.1h  22 Sep 2020\n\nPYGMY\nPath to binary: /Users/johndoe/gems/bin/pygmy\nPygmy version unidentifiable.\n\nAHOY\nPath to binary: /usr/local/bin/ahoy\n2.0.2\n"})})]})}function u(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},8453:(e,n,o)=>{o.d(n,{R:()=>i,x:()=>c});var r=o(6540);const t={},s=r.createContext(t);function i(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);