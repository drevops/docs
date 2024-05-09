"use strict";(self.webpackChunkscaffold=self.webpackChunkscaffold||[]).push([[3431],{1117:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>a,contentTitle:()=>t,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>d});var i=n(4848),o=n(8453);const r={sidebar_position:1},t="Composer",c={id:"drupal/composer",title:"Composer",description:"Composer is a dependency manager for PHP projects, including Drupal. It allows",source:"@site/content/drupal/composer.mdx",sourceDirName:"drupal",slug:"/drupal/composer",permalink:"/drupal/composer",draft:!1,unlisted:!1,editUrl:"https://github.com/drevops/scaffold/tree/develop/.scaffold/docs/content/drupal/composer.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docs",previous:{title:"Overview",permalink:"/drupal/"},next:{title:"Settings",permalink:"/drupal/settings"}},a={},d=[{value:"Drupal Composer project",id:"drupal-composer-project",level:2},{value:"<code>composer.json</code>",id:"composerjson",level:2},{value:"<code>name</code>",id:"name",level:3},{value:"<code>description</code>",id:"description",level:3},{value:"<code>type</code>",id:"type",level:3},{value:"<code>license</code>",id:"license",level:3},{value:"<code>repositories</code>",id:"repositories",level:3},{value:"<code>require</code>",id:"require",level:3},{value:"<code>require-dev</code>",id:"require-dev",level:3},{value:"<code>conflict</code>",id:"conflict",level:3},{value:"<code>minimum-stability</code>",id:"minimum-stability",level:3},{value:"<code>prefer-stable</code>",id:"prefer-stable",level:3},{value:"<code>config</code>",id:"config",level:3},{value:"<code>autoload</code>",id:"autoload",level:3},{value:"<code>autoload-dev</code>",id:"autoload-dev",level:3},{value:"<code>scripts</code>",id:"scripts",level:3},{value:"<code>extra</code>",id:"extra",level:3}];function l(e){const s={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.h1,{id:"composer",children:"Composer"}),"\n",(0,i.jsx)(s.p,{children:"Composer is a dependency manager for PHP projects, including Drupal. It allows\nyou to declare the libraries your project depends on and manages (\ninstall/update) them for you."}),"\n",(0,i.jsxs)(s.p,{children:["Scaffold comes with a pre-configured ",(0,i.jsx)(s.code,{children:"composer.json"})," file based on\nthe ",(0,i.jsx)(s.a,{href:"https://github.com/drupal-composer/drupal-project",children:"Drupal Composer project"}),",\nextended to support additional features and tools."]}),"\n",(0,i.jsx)(s.admonition,{type:"note",children:(0,i.jsxs)(s.p,{children:["See ",(0,i.jsx)(s.a,{href:"/workflows/packages",children:"Working with packages"})," for more information\non how to add and manage dependencies in your project."]})}),"\n",(0,i.jsx)(s.h2,{id:"drupal-composer-project",children:"Drupal Composer project"}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.a,{href:"https://github.com/drupal-composer/drupal-project",children:"Drupal Composer project"}),"\nprovides a starter kit for managing your site dependencies with Composer."]}),"\n",(0,i.jsxs)(s.p,{children:["Scaffold extends the Drupal Composer project's ",(0,i.jsx)(s.code,{children:"composer.json"})," to support\nadditional features and tools."]}),"\n",(0,i.jsxs)(s.p,{children:["DrevOps Scaffold team will keep the ",(0,i.jsx)(s.code,{children:"composer.json"})," file up-to-date with the\nlatest version of the ",(0,i.jsx)(s.code,{children:"composer.json"})," in the ",(0,i.jsx)(s.a,{href:"https://github.com/drupal-composer/drupal-project",children:"Drupal Composer project"}),",\nso you can always make sure you are using the best community practices."]}),"\n",(0,i.jsx)(s.h2,{id:"composerjson",children:(0,i.jsx)(s.code,{children:"composer.json"})}),"\n",(0,i.jsxs)(s.p,{children:["The ",(0,i.jsx)(s.code,{children:"composer.json"})," file is the core configuration file for Composer, detailing\nyour project's dependencies, scripts, and settings."]}),"\n",(0,i.jsxs)(s.p,{children:["This section provides an overview of each part of the ",(0,i.jsx)(s.code,{children:"composer.json"})," file,\nexplaining its role and how it contributes to your project's setup and\nmanagement."]}),"\n",(0,i.jsx)(s.h3,{id:"name",children:(0,i.jsx)(s.code,{children:"name"})}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.a,{href:"https://getcomposer.org/doc/01-basic-usage.md#package-names",children:(0,i.jsx)(s.code,{children:"name"})})," is a\nunique identifier for the project in Composer's ecosystem consisting of a vendor\nname and the project's name."]}),"\n",(0,i.jsx)(s.h3,{id:"description",children:(0,i.jsx)(s.code,{children:"description"})}),"\n",(0,i.jsx)(s.p,{children:"A brief summary of the project's purpose."}),"\n",(0,i.jsx)(s.h3,{id:"type",children:(0,i.jsx)(s.code,{children:"type"})}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"type"})," is used to specify the type of the package. This is important because it\ntells Composer and any systems integrating with Composer how to treat the\npackage. The type key can influence how the package is installed and used."]}),"\n",(0,i.jsx)(s.h3,{id:"license",children:(0,i.jsx)(s.code,{children:"license"})}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.a,{href:"https://getcomposer.org/doc/04-schema.md#license",children:"license"})," indicates the\nlicence of the project. Since Scaffold is a template for your consumer sites that\nare usually proprietary, we use ",(0,i.jsx)(s.code,{children:"proprietary"})," as the default value. More license\nidentifiers are listed at\nthe ",(0,i.jsx)(s.a,{href:"https://spdx.org/licenses/",children:"SPDX Open Source License Registry"}),"."]}),"\n",(0,i.jsx)(s.h3,{id:"repositories",children:(0,i.jsx)(s.code,{children:"repositories"})}),"\n",(0,i.jsxs)(s.p,{children:["The ",(0,i.jsx)(s.a,{href:"https://getcomposer.org/doc/04-schema.md#repositories",children:(0,i.jsx)(s.code,{children:"repositories"})}),"\nsection defines custom package repositories, essential for accessing packages\noutside the default Packagist repository."]}),"\n",(0,i.jsxs)(s.p,{children:["See ",(0,i.jsx)(s.a,{href:"/workflows/packages",children:"Working with packages"})," for more information on\nhow to provide custom and override existing packages in your project."]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.a,{href:"https://www.drupal.org/docs/develop/using-composer/using-packagesdrupalorg",children:(0,i.jsx)(s.code,{children:"drupal"})}),":\nServes as the official source for Drupal modules, themes, and distributions.\nIt's crucial for a Drupal project using Composer, as it allows access to\nDrupal-specific packages not available on Packagist."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.a,{href:"https://asset-packagist.org/",children:(0,i.jsx)(s.code,{children:"asset-packagist"})}),": Enables the installation of\nBower and NPM packages via Composer. This is especially important for Drupal\nprojects needing front-end libraries and tools, bridging the gap between\nComposer's PHP-centric ecosystem and the broader world of front-end package\nmanagement."]}),"\n"]}),"\n",(0,i.jsx)(s.h3,{id:"require",children:(0,i.jsx)(s.code,{children:"require"})}),"\n",(0,i.jsxs)(s.p,{children:["The ",(0,i.jsx)(s.a,{href:"https://getcomposer.org/doc/04-schema.md#require",children:(0,i.jsx)(s.code,{children:"require"})})," section\nspecifies the essential packages and libraries your project needs."]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"php"}),": Specifies the minimum PHP version required to run this project. This\nshould be specified as a range rather than an exact version number.\nE.g. ",(0,i.jsx)(s.code,{children:">=8.2"})," and not ",(0,i.jsx)(s.code,{children:"8.2.0"}),"."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.a,{href:"https://github.com/composer/installers",children:(0,i.jsx)(s.code,{children:"composer/installers"})}),": Allows to\ninstall packages to the correct location based on the specified package type\nsuch as ",(0,i.jsx)(s.code,{children:"drupal-module"}),", ",(0,i.jsx)(s.code,{children:"drupal-theme"}),", ",(0,i.jsx)(s.code,{children:"drupal-profile"}),", etc."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.a,{href:"https://github.com/cweagans/composer-patches",children:(0,i.jsx)(s.code,{children:"cweagans/composer-patches"})}),":\nAllows applying patches to Composer packages, useful for incorporating fixes\nnot yet in official releases.\nSee ",(0,i.jsx)(s.a,{href:"/workflows/packages#patching",children:"Working with packages"})," for more\ninformation on how to work with patches."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"drupal/admin_toolbar"}),", ",(0,i.jsx)(s.code,{children:"drupal/clamav"}),", ",(0,i.jsx)(s.code,{children:"drupal/coffee"}),", etc. - Drupal\nmodules that provide various site administration and development helping\nfunctionalities that is usually installed across all of your Drupal sites.\nScaffold comes with ",(0,i.jsx)(s.a,{href:"/drupal/settings",children:"pre-configured settings"})," for some of the\nmodules to make them work out of the box."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.a,{href:"https://github.com/drupal/core-recommended",children:(0,i.jsx)(s.code,{children:"drupal/core-recommended"})}),": A\npackage that provides a carefully selected set of dependencies, including\nspecific versions, which are tested and recommended for a particular Drupal\ncore version. It simplifies dependency management by ensuring compatibility\nand stability, as these dependencies are maintained and curated by the Drupal\ncommunity."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.a,{href:"https://www.drupal.org/docs/develop/using-composer/using-drupals-composer-scaffold",children:(0,i.jsx)(s.code,{children:"drupal/core-composer-scaffold"})}),":\nAllows downloading and placing scaffold files (like ",(0,i.jsx)(s.code,{children:"index.php"}),", ",(0,i.jsx)(s.code,{children:"update.php"}),",\netc.) from the ",(0,i.jsx)(s.code,{children:"drupal/core"})," project into their desired location inside the\nweb root."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.a,{href:"https://github.com/drush-ops/drush",children:(0,i.jsx)(s.code,{children:"drush/drush"})}),": A command-line shell and\nscripting interface for Drupal, providing a wide range of utilities to manage\nand interact with your Drupal sites."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.a,{href:"https://github.com/oomphinc/composer-installers-extender",children:(0,i.jsx)(s.code,{children:"oomphinc/composer-installers-extender"})}),":\nAllows any package to be installed to a directory other than the\ndefault ",(0,i.jsx)(s.code,{children:"vendor"})," directory within a project on a package-by-package basis.\nThis plugin extends the ",(0,i.jsx)(s.code,{children:"composer/installers"})," plugin to allow any arbitrary\npackage type to be handled by their custom installer."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.a,{href:"https://github.com/vlucas/phpdotenv",children:(0,i.jsx)(s.code,{children:"vlucas/phpdotenv"})}),": Allows to load\nenvironment variables from ",(0,i.jsx)(s.code,{children:".env"})," files into PHP so that they become available\nto the application and can be accessed via ",(0,i.jsx)(s.code,{children:"getenv()"}),", ",(0,i.jsx)(s.code,{children:"$_ENV"}),",\nand ",(0,i.jsx)(s.code,{children:"$_SERVER"}),"."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.a,{href:"https://github.com/webflo/drupal-finder",children:(0,i.jsx)(s.code,{children:"webflo/drupal-finder"})}),": Locates\nDrupal installations in a directory structure."]}),"\n"]}),"\n",(0,i.jsx)(s.h3,{id:"require-dev",children:(0,i.jsx)(s.code,{children:"require-dev"})}),"\n",(0,i.jsxs)(s.p,{children:["The ",(0,i.jsx)(s.a,{href:"https://getcomposer.org/doc/04-schema.md#require-dev",children:(0,i.jsx)(s.code,{children:"require-dev"})}),"\nsection lists packages used for development purposes, like code quality checks\nand testing. These tools are essential for development but not required in\nproduction environments. This distinction helps to keep the production\ndeployment streamlined and efficient, while still supporting a comprehensive and\neffective development environment."]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.a,{href:"https://github.com/Behat/Behat",children:(0,i.jsx)(s.code,{children:"behat/behat"})}),": A PHP framework for\nBehavior-Driven Development (BDD), allowing you to write human-readable\nstories that describe the behavior of your application. It facilitates\ncommunication between developers, stakeholders, and clients."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.a,{href:"https://github.com/Dealerdirect/phpcodesniffer-composer-installer",children:(0,i.jsx)(s.code,{children:"dealerdirect/phpcodesniffer-composer-installer"})}),":\nThis tool automatically configures PHP_CodeSniffer to use the coding\nstandards (like PSR-2 or Drupal coding standards) installed in a project."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.a,{href:"https://github.com/drevops/behat-format-progress-fail",children:(0,i.jsx)(s.code,{children:"drevops/behat-format-progress-fail"})}),":\nEnhances the output format of Behat tests, focusing specifically on progress\nand failure scenarios. This makes it easier to spot and address test failures."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.a,{href:"https://github.com/drevops/behat-screenshot",children:(0,i.jsx)(s.code,{children:"drevops/behat-screenshot"})}),": An\nextension for Behat that automatically captures screenshots when tests fail.\nThis is helpful for debugging and understanding why a test failed."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.a,{href:"https://github.com/drevops/behat-steps",children:(0,i.jsx)(s.code,{children:"drevops/behat-steps"})}),": Provides a\ncollection of pre-defined step definitions for Behat. This package speeds up\nthe process of writing new Behat tests by providing common step\nimplementations."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.a,{href:"https://www.drupal.org/project/drupal",children:(0,i.jsx)(s.code,{children:"drupal/core-dev"})}),": Includes\ndevelopment-specific dependencies and tools primarily for testing and code\nanalysis, including PHPUnit, PHP_CodeSniffer with rules (\nvia ",(0,i.jsx)(s.a,{href:"https://www.drupal.org/project/coder",children:"Coder"})," module)."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.a,{href:"https://github.com/jhedstrom/drupalextension",children:(0,i.jsx)(s.code,{children:"drupal/drupal-extension"})}),": A\nBehat extension that provides integration with Drupal, offering step\ndefinitions specific to Drupal functionality. It facilitates the creation and\nmanagement of Drupal sites for testing purposes."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.a,{href:"https://github.com/VincentLanglet/Twig-CS-Fixer",children:(0,i.jsx)(s.code,{children:"VincentLanglet/Twig-CS-Fixer"})}),": This tool\nensures that Twig templates adhere to a set coding standard, helping maintain\nconsistency and readability in template files."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.a,{href:"https://github.com/mglaman/phpstan-drupal",children:(0,i.jsx)(s.code,{children:"mglaman/phpstan-drupal"})}),":\nIntegrates PHPStan static analysis with Drupal-specific code, helping identify\npotential issues and bugs in Drupal modules and themes."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.a,{href:"https://github.com/palantirnet/drupal-rector",children:(0,i.jsx)(s.code,{children:"palantirnet/drupal-rector"})}),":\nAutomates the process of updating deprecated code, making Drupal upgrade\nprocesses more efficient."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.a,{href:"https://github.com/PHPCompatibility/PHPCompatibility",children:(0,i.jsx)(s.code,{children:"phpcompatibility/php-compatibility"})}),":\nProvides a collection of sniffs for PHP_CodeSniffer to check PHP code for\ncompatibility with different PHP versions, crucial for ensuring long-term\nmaintainability."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.a,{href:"https://github.com/phpmd/phpmd",children:(0,i.jsx)(s.code,{children:"phpmd/phpmd"})}),": PHP Mess Detector is a\nuser-friendly tool that helps you detect several potential problems in your\nPHP code, including possible bugs, suboptimal code, and overcomplicated\nexpressions."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.a,{href:"https://github.com/phpspec/prophecy-phpunit",children:(0,i.jsx)(s.code,{children:"phpspec/prophecy-phpunit"})}),":\nIntegrates the Prophecy mocking library with PHPUnit to provide advanced\nmocking capabilities in tests."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.a,{href:"https://github.com/phpstan/extension-installer",children:(0,i.jsx)(s.code,{children:"phpstan/extension-installer"})}),":\nThis package automatically installs and enables PHPStan extensions,\nstreamlining the setup process for PHPStan in your project."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.a,{href:"https://github.com/pyrech/composer-changelogs",children:(0,i.jsx)(s.code,{children:"pyrech/composer-changelogs"})}),":\nProvides a summary of package changes (like updates, removals, and additions)\nafter running ",(0,i.jsx)(s.code,{children:"composer update"}),", improving the visibility of package changes\nand updates in your project."]}),"\n"]}),"\n",(0,i.jsx)(s.h3,{id:"conflict",children:(0,i.jsx)(s.code,{children:"conflict"})}),"\n",(0,i.jsxs)(s.p,{children:["The ",(0,i.jsx)(s.a,{href:"https://getcomposer.org/doc/04-schema.md#conflict",children:(0,i.jsx)(s.code,{children:"conflict"})})," section\nprevents installation conflicts with standalone Drupal core, crucial for\navoiding version clashes and ensuring consistency in core files."]}),"\n",(0,i.jsx)(s.h3,{id:"minimum-stability",children:(0,i.jsx)(s.code,{children:"minimum-stability"})}),"\n",(0,i.jsxs)(s.p,{children:["The ",(0,i.jsx)(s.a,{href:"https://getcomposer.org/doc/04-schema.md#minimum-stability",children:(0,i.jsx)(s.code,{children:"minimum-stability"})}),"\nsetting controls the minimum stability level of the packages that Composer is\nallowed to install. By setting it to ",(0,i.jsx)(s.code,{children:'"stable"'}),", you are instructing Composer to\nprefer stable versions of packages over their unstable (like ",(0,i.jsx)(s.code,{children:"beta"})," or ",(0,i.jsx)(s.code,{children:"alpha"}),")\nversions.\\"]}),"\n",(0,i.jsx)(s.h3,{id:"prefer-stable",children:(0,i.jsx)(s.code,{children:"prefer-stable"})}),"\n",(0,i.jsxs)(s.p,{children:["The ",(0,i.jsx)(s.a,{href:"https://getcomposer.org/doc/04-schema.md#prefer-stable",children:(0,i.jsx)(s.code,{children:"prefer-stable"})}),"\nsettings, when set to ",(0,i.jsx)(s.code,{children:"true"}),", instructs Composer to prefer stable versions of\npackages even when the ",(0,i.jsx)(s.code,{children:"minimum-stability"})," setting allows less stable versions.\nThis is especially useful in a mixed stability scenario where some dependencies\nmight not have a stable release yet. It ensures that Composer will use stable\nversions wherever possible, thus providing a balance between stability and the\nneed for newer features or fixes that might only be available in a less stable\npackage version."]}),"\n",(0,i.jsx)(s.h3,{id:"config",children:(0,i.jsx)(s.code,{children:"config"})}),"\n",(0,i.jsxs)(s.p,{children:["The ",(0,i.jsx)(s.a,{href:"https://getcomposer.org/doc/04-schema.md#config",children:(0,i.jsx)(s.code,{children:"config"})})," section\nspecifies key configurations for Composer's behavior in the project."]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.a,{href:"https://getcomposer.org/doc/06-config.md#discard-changes",children:(0,i.jsx)(s.code,{children:"discard-changes"})}),":\nWhen set to ",(0,i.jsx)(s.code,{children:"true"}),", any local changes made to the dependencies (packages under\nversion control like Git) are discarded without prompting when you run\ncomposer install or composer update. Composer will overwrite the local changes\nwith the data from the source repository."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.a,{href:"https://getcomposer.org/doc/06-config.md#sort-packages",children:(0,i.jsx)(s.code,{children:"sort-packages"})}),":\nWhen set to ",(0,i.jsx)(s.code,{children:"true"}),", this configuration ensures that packages are sorted\nin ",(0,i.jsx)(s.code,{children:"composer.json"})," and ",(0,i.jsx)(s.code,{children:"composer.lock"}),". It makes these files more readable and\nhelps reduce merge conflicts in version control."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.a,{href:"https://getcomposer.org/doc/06-config.md#allow-plugins",children:(0,i.jsx)(s.code,{children:"allow-plugins"})}),":\nThis setting specifies which Composer plugins are allowed to run. It's a\nsecurity measure to prevent the execution of untrusted code from third-party\nplugins. Each plugin needs to be explicitly allowed to ensure it can execute."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.a,{href:"https://getcomposer.org/doc/06-config.md#platform",children:(0,i.jsx)(s.code,{children:"platform"})}),": Specifies the\nPHP version of the platform environment where the current project runs. This\nshould be specified as an exact version number (e.g. ",(0,i.jsx)(s.code,{children:"8.2.0"}),"). Should be kept\nin sync with the ",(0,i.jsx)(s.code,{children:"php"})," version in the ",(0,i.jsx)(s.a,{href:"/tools/docker",children:"Docker containers"}),"."]}),"\n"]}),"\n",(0,i.jsx)(s.h3,{id:"autoload",children:(0,i.jsx)(s.code,{children:"autoload"})}),"\n",(0,i.jsxs)(s.p,{children:["The ",(0,i.jsx)(s.a,{href:"https://getcomposer.org/doc/04-schema.md#autoload",children:(0,i.jsx)(s.code,{children:"autoload"})})," section is\nessential for defining how Composer automatically loads PHP classes within the\nproject, without needing to manually include or require each class file."]}),"\n",(0,i.jsx)(s.h3,{id:"autoload-dev",children:(0,i.jsx)(s.code,{children:"autoload-dev"})}),"\n",(0,i.jsxs)(s.p,{children:["The ",(0,i.jsx)(s.a,{href:"https://getcomposer.org/doc/04-schema.md#autoload-dev",children:(0,i.jsx)(s.code,{children:"autoload-dev"})}),"\nsection is essential for defining how Composer automatically loads PHP\ndevelopment-specific classes within the project, without needing to manually\ninclude or require each class file."]}),"\n",(0,i.jsx)(s.h3,{id:"scripts",children:(0,i.jsx)(s.code,{children:"scripts"})}),"\n",(0,i.jsxs)(s.p,{children:["The ",(0,i.jsx)(s.a,{href:"https://getcomposer.org/doc/04-schema.md#scripts",children:(0,i.jsx)(s.code,{children:"scripts"})})," section\ndefines custom scripts to be executed at specific points in Composer's workflow,\nenhancing the automation and maintenance of your Drupal project."]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.a,{href:"https://getcomposer.org/doc/articles/scripts.md#pre-install-cmd",children:(0,i.jsx)(s.code,{children:"pre-install-cmd"})}),":\nExecutes scripts before the ",(0,i.jsx)(s.code,{children:"composer install"})," command is run. In your\nconfiguration, ",(0,i.jsx)(s.code,{children:"DrupalProject\\composer\\ScriptHandler::checkComposerVersion"})," is\nspecified, which ensures that the Composer version being used is compatible\nwith your project setup. This is vital for maintaining consistency and\navoiding issues due to version mismatches."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.a,{href:"https://getcomposer.org/doc/articles/scripts.md#pre-update-cmd",children:(0,i.jsx)(s.code,{children:"pre-update-cmd"})}),":\nRuns scripts before the ",(0,i.jsx)(s.code,{children:"composer update"})," command is executed. It uses the\nsame script as ",(0,i.jsx)(s.code,{children:"pre-install-cmd"})," to check the Composer version, ensuring that\nupdates to your project\u2019s dependencies are compatible with your current\nComposer setup."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.a,{href:"https://getcomposer.org/doc/articles/scripts.md#post-install-cmd",children:(0,i.jsx)(s.code,{children:"post-install-cmd"})}),":\nInvoked after the ",(0,i.jsx)(s.code,{children:"composer install"})," command completes. The\nscript ",(0,i.jsx)(s.code,{children:"DrupalProject\\composer\\ScriptHandler::createRequiredFiles"})," is\nexecuted, which typically handles tasks like setting up default files and\nconfigurations necessary for the Drupal installation."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.a,{href:"https://getcomposer.org/doc/articles/scripts.md#post-update-cmd",children:(0,i.jsx)(s.code,{children:"post-update-cmd"})}),":\nExecutes scripts after the ",(0,i.jsx)(s.code,{children:"composer update"})," command. It calls the\nsame ",(0,i.jsx)(s.code,{children:"createRequiredFiles"})," method as in ",(0,i.jsx)(s.code,{children:"post-install-cmd"}),", ensuring that\nnecessary files and configurations are updated or re-established following an\nupdate of dependencies."]}),"\n"]}),"\n",(0,i.jsx)(s.h3,{id:"extra",children:(0,i.jsx)(s.code,{children:"extra"})}),"\n",(0,i.jsxs)(s.p,{children:["The ",(0,i.jsx)(s.a,{href:"https://getcomposer.org/doc/04-schema.md#extra",children:(0,i.jsx)(s.code,{children:"extra"})})," section serves as\na source of custom configuration for various packages. These packages read\nsettings from this section to tailor their behavior according to the specific\nneeds and structure of your Drupal project."]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.a,{href:"https://www.drupal.org/docs/develop/using-composer/using-drupals-composer-scaffold",children:(0,i.jsx)(s.code,{children:"drupal-scaffold"})}),":\nThis setting controls which files should be scaffolded:","\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"locations"}),": Specifies the location of the web root (the directory\ncontaining the ",(0,i.jsx)(s.code,{children:"index.php"})," file)."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"file-mapping"}),": Determines which files are managed by the scaffold process.\nScaffold comes with sensible defaults, but you can customize this section to\nsuit your needs."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.a,{href:"https://getcomposer.org/doc/faqs/how-do-i-install-a-package-to-a-custom-path-for-my-framework.md",children:(0,i.jsx)(s.code,{children:"installer-paths"})}),":\nDefines custom installation paths for various types of packages like Drupal\nmodules, themes, and libraries."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"installer-types"}),": Specifies additional installer types, such as ",(0,i.jsx)(s.code,{children:"bower-asset"}),"\nand ",(0,i.jsx)(s.code,{children:"npm-asset"}),", that are handled by\nthe ",(0,i.jsx)(s.code,{children:"oomphinc/composer-installers-extender"})," plugin."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.a,{href:"https://github.com/cweagans/composer-patches",children:(0,i.jsx)(s.code,{children:"composer-exit-on-patch-failure"})}),":\nThis setting, when enabled, causes Composer to exit if a patch from\nthe ",(0,i.jsx)(s.code,{children:"cweagans/composer-patches"})," plugin fails to apply."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"patchLevel"}),": Defines the patch level for specific packages, in this\ncase, ",(0,i.jsx)(s.code,{children:"drupal/core"}),". The ",(0,i.jsx)(s.code,{children:"-p"})," option followed by a number (e.g., ",(0,i.jsx)(s.code,{children:"-p1"}),", ",(0,i.jsx)(s.code,{children:"-p2"}),")\nin patch commands specifies the number of leading directories to strip from\nthe file paths found in the patch file. This determines how the paths in the\npatch file are interpreted relative to the current directory where the patch\nis being applied."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"patches"}),": Specifies the patches to be applied to specific packages.\nSee ",(0,i.jsx)(s.a,{href:"/workflows/packages#patching",children:"Working with packages"})," for more\ninformation on how to work with patches."]}),"\n"]})]})}function h(e={}){const{wrapper:s}={...(0,o.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},8453:(e,s,n)=>{n.d(s,{R:()=>t,x:()=>c});var i=n(6540);const o={},r=i.createContext(o);function t(e){const s=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:t(e.components),i.createElement(r.Provider,{value:s},e.children)}}}]);