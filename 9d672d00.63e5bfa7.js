(window.webpackJsonp=window.webpackJsonp||[]).push([[127],{256:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"rightToc",(function(){return r})),n.d(t,"default",(function(){return s}));var i=n(1),a=n(9),o=(n(0),n(360)),l={id:"configuration",title:"Using single-spa-config",sidebar_label:"single-spa config"},r=[{value:"Index.html file",id:"indexhtml-file",children:[]},{value:"Registering applications",id:"registering-applications",children:[{value:"Application name",id:"application-name",children:[]},{value:"Loading Function or Application",id:"loading-function-or-application",children:[]},{value:"Activity function",id:"activity-function",children:[]}]},{value:"Calling singleSpa.start()",id:"calling-singlespastart",children:[]},{value:"Two registered applications simultaneously??",id:"two-registered-applications-simultaneously",children:[]}],p={rightToc:r},c="wrapper";function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)(c,Object(i.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The single spa root config consists of the following:\n1. The root HTML file that is shared by all single-spa applications.\n2. the javascript that calls ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"/docs/api.html#registerapplication"}),Object(o.b)("inlineCode",{parentName:"a"},"singleSpa.registerApplication()")),"."),Object(o.b)("p",null,"Your root config exists only to start up the single-spa applications."),Object(o.b)("h2",{id:"indexhtml-file"},"Index.html file"),Object(o.b)("p",null,"See ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"http://single-spa-playground.org/playground/html-file"}),"this example root config")," for what a root HTML file looks like.\nNotice how it does not have any divs or buttons, but just calls ",Object(o.b)("inlineCode",{parentName:"p"},"registerApplication()"),"."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"You do not have to use SystemJS when using single-spa"),", but many examples and tutorials will encourage you to do so because\nit allows you to ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"/docs/separating-applications.html"}),"independently deploy")," your applications."),Object(o.b)("h2",{id:"registering-applications"},"Registering applications"),Object(o.b)("p",null,"You must register ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"/docs/4.x/building-applications"}),"applications")," with single-spa so it knows how and when to\ninitiate, load, mount, and unmount. Registration most commonly occurs inside of the single spa config, but\ndoes not have to. Note that if an application is registered from within another application, that no hierarchy\nwill be maintained between the applications. Instead, the applications will be siblings and will be mounted\nand unmounted according to their own activity functions."),Object(o.b)("p",null,"In order to register an application, call the ",Object(o.b)("inlineCode",{parentName:"p"},"registerApplication(name, howToLoad, activityFunction)")," api. Example:"),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{className:"language-js"}),'// single-spa-config.js\nimport { registerApplication, start } from \'single-spa\';\n\nregisterApplication("applicationName", loadingFunction, activityFunction);\nstart();\n\nfunction loadingFunction() {\n  return import("src/app1/main.js");\n}\n\nfunction activityFunction(location) {\n  return location.pathname.indexOf("/app1/") === 0;\n}\n')),Object(o.b)("h3",{id:"application-name"},"Application name"),Object(o.b)("p",null,"The first argument to ",Object(o.b)("inlineCode",{parentName:"p"},"registerApplication")," must be a string name."),Object(o.b)("h3",{id:"loading-function-or-application"},"Loading Function or Application"),Object(o.b)("p",null,"The second argument to ",Object(o.b)("inlineCode",{parentName:"p"},"registerApplication")," must be either a function that returns a promise ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"configuration#loading-function"}),"loading function")," or the resolved Application."),Object(o.b)("h4",{id:"application-as-second-argument"},"Application as second argument"),Object(o.b)("p",null,"Optionally for the second argument you can use the resolved Application, consisting of an object with the lifecycle methods.\nThis allows you import the Application from another file or define applications inline in your single-spa-config"),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{className:"language-js"}),"const application = {\n  bootstrap: () => Promise.resolve(), //bootstrap function\n  mount: () => Promise.resolve(), //mount function\n  unmount: () => Promise.resolve(), //unmount function\n}\nregisterApplication('applicatonName', application, activityFunction)\n\n")),Object(o.b)("h4",{id:"loading-function"},"Loading function"),Object(o.b)("p",null,"The second argument to ",Object(o.b)("inlineCode",{parentName:"p"},"registerApplication")," must be a function that returns a promise (or an ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"https://ponyfoo.com/articles/understanding-javascript-async-await"}),'"async function"'),").\nThe function will be called with no arguments when it's time to load the application for the first time. The returned\npromise must be resolved with the application. The most common implementation of a loading function is an import call:\n",Object(o.b)("inlineCode",{parentName:"p"},"() => import('/path/to/application.js')")),Object(o.b)("h3",{id:"activity-function"},"Activity function"),Object(o.b)("p",null,"The third argument to ",Object(o.b)("inlineCode",{parentName:"p"},"registerApplication")," must be a pure function, the function is provided ",Object(o.b)("inlineCode",{parentName:"p"},"window.location")," as the first argument, and returns a truthy\nvalue whenever the application should be active. Most commonly, the activity function determines if an application\nis active by looking at ",Object(o.b)("inlineCode",{parentName:"p"},"window.location"),"/the first param."),Object(o.b)("p",null,"Another way of looking at this is that single-spa is a top-level router that has a lot of applications that have their own sub-router."),Object(o.b)("p",null,"single-spa will call each application's activity function under the following scenarios:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"hashchange")," or ",Object(o.b)("inlineCode",{parentName:"li"},"popstate")," event"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"pushState")," or ",Object(o.b)("inlineCode",{parentName:"li"},"replaceState")," is called"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(i.a)({parentName:"li"},{href:"/docs/4.x/api#triggerappchange"}),Object(o.b)("inlineCode",{parentName:"a"},"triggerAppChange"))," api is called on single-spa"),Object(o.b)("li",{parentName:"ul"},"Whenever the ",Object(o.b)("inlineCode",{parentName:"li"},"checkActivityFunctions")," method is called")),Object(o.b)("h2",{id:"calling-singlespastart"},"Calling singleSpa.start()"),Object(o.b)("p",null,"The ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"/docs/4.x/api#start"}),Object(o.b)("inlineCode",{parentName:"a"},"start()")," api")," ",Object(o.b)("strong",{parentName:"p"},"must")," be called by your single spa config in order for\napplications to actually be mounted. Before ",Object(o.b)("inlineCode",{parentName:"p"},"start")," is called, applications will be loaded, but not bootstrapped/mounted/unmounted.\nThe reason for ",Object(o.b)("inlineCode",{parentName:"p"},"start")," is to give you control over performance. For example, you may want to register applications\nimmediately (to start downloading the code for the active ones), but not actually mount the applications\nuntil an initial AJAX request (maybe to get information about the logged in user) has been completed. In that case,\nthe best performance is achieved by calling ",Object(o.b)("inlineCode",{parentName:"p"},"registerApplication")," immediately, but calling ",Object(o.b)("inlineCode",{parentName:"p"},"start")," after\nthe AJAX request is completed."),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{className:"language-js"}),"//single-spa-config.js\nimport { start } from 'single-spa';\n\n/* Calling start before registering apps means that single-spa can immediately mount apps, without\n * waiting for any initial setup of the single page app.\n */\nstart();\n\n// Register applications....\n")),Object(o.b)("h2",{id:"two-registered-applications-simultaneously"},"Two registered applications simultaneously??"),Object(o.b)("p",null,"Yep, it's possible. And it's actually not that scary if you do it right. And once you do,\nit's really really powerful. One approach to do this is to create a ",Object(o.b)("inlineCode",{parentName:"p"},'<div id="app-name"></div>')," for each app,\nso that they never try to modify the same DOM at the same time."))}s.isMDXComponent=!0},360:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return u}));var i=n(0),a=n.n(i),o=a.a.createContext({}),l=function(e){var t=a.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):Object.assign({},t,e)),n},r=function(e){var t=l(e.components);return a.a.createElement(o.Provider,{value:t},e.children)};var p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},s=Object(i.forwardRef)((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,r=e.parentName,p=function(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&-1===t.indexOf(i)&&(n[i]=e[i]);return n}(e,["components","mdxType","originalType","parentName"]),s=l(n),u=i,b=s[r+"."+u]||s[u]||c[u]||o;return n?a.a.createElement(b,Object.assign({},{ref:t},p,{components:n})):a.a.createElement(b,Object.assign({},{ref:t},p))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,l=new Array(o);l[0]=s;var r={};for(var c in t)hasOwnProperty.call(t,c)&&(r[c]=t[c]);r.originalType=e,r[p]="string"==typeof e?e:i,l[1]=r;for(var u=2;u<o;u++)l[u]=n[u];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"}}]);