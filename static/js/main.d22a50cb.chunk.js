(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{19:function(e,t,a){e.exports=a.p+"static/media/icon.ca6696e0.png"},20:function(e,t,a){e.exports=a.p+"static/media/resume.e69a448a.pdf"},21:function(e,t,a){e.exports=a.p+"static/media/spring-boot-logo.ef53e5e8.svg"},22:function(e,t,a){e.exports=a.p+"static/media/compiler-logo.7e3444c7.png"},23:function(e,t,a){e.exports=a.p+"static/media/spinner.3de2f9b6.svg"},25:function(e,t,a){e.exports=a(43)},42:function(e,t,a){},43:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(11),o=a.n(r),l=a(2),i=a(3),s=a(5),m=a(4),d=a(6),u=a(45),h=a(46),p=a(47),g=a(19),v=a.n(g),b=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e)))._changeActive=function(e){return a.setState({active:e})},a.state={active:null},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentWillMount",value:function(){this.props.setChangeActive(this._changeActive)}},{key:"render",value:function(){return c.a.createElement("header",null,c.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light fixed-top"},c.a.createElement("div",{className:"container"},c.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbar"},c.a.createElement("span",{className:"navbar-toggler-icon"})),c.a.createElement("div",{className:"collapse navbar-collapse justify-content-md-center",id:"navbar"},c.a.createElement("ul",{className:"navbar-nav"},c.a.createElement("li",{className:"nav-item ".concat("About"===this.state.active?"active":"")},c.a.createElement("a",{className:"nav-link",href:"#about"},c.a.createElement("span",null,"About me"))),c.a.createElement("li",{className:"nav-item ".concat("Thoughts"===this.state.active?"active":"")},c.a.createElement("a",{className:"nav-link",href:"#thoughts"},c.a.createElement("span",null,"Thoughts"))),c.a.createElement("li",{className:"nav-item"},c.a.createElement("a",{className:"nav-link",href:"#quote"},c.a.createElement("img",{alt:"El Mehdi ASSALI Bitmoji",src:v.a,height:"48"}))),c.a.createElement("li",{className:"nav-item ".concat("Projects"===this.state.active?"active":"")},c.a.createElement("a",{className:"nav-link",href:"#projects"},c.a.createElement("span",null,"Projects"))),c.a.createElement("li",{className:"nav-item ".concat("Skills"===this.state.active?"active":"")},c.a.createElement("a",{className:"nav-link",href:"#skills"},c.a.createElement("span",null,"Skills"))))))))}}]),t}(n.Component),f=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement("footer",null,c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col text-left text-muted d-none d-md-block"},c.a.createElement("span",{className:"footer-left"},"2019 \xa9 El Mehdi ASSALI")),c.a.createElement("div",{className:"col text-center footer-center text-muted"},c.a.createElement("div",{className:"d-none d-md-block"},"Get in touch by"," ",c.a.createElement("a",{href:"mailto:assalielmehdi@gmail.com",className:"mail-link"},"mail")),c.a.createElement("div",{className:"d-block d-md-none"},c.a.createElement("a",{className:"footer-right linkedin",href:"https://www.linkedin.com/in/assalielmehdi/",target:"_blank",rel:"noopener noreferrer"},c.a.createElement("i",{className:"fab fa-linkedin-in"})),c.a.createElement("a",{className:"footer-right github",href:"https://github.com/assalielmehdi",target:"_blank",rel:"noopener noreferrer"},c.a.createElement("i",{className:"fab fa-github"})),c.a.createElement("a",{className:"footer-right twitter",href:"https://twitter.com/assalielmehdi",target:"_blank",rel:"noopener noreferrer"},c.a.createElement("i",{className:"fab fa-twitter"})))),c.a.createElement("div",{className:"col text-right d-none d-md-block"},c.a.createElement("a",{className:"footer-right linkedin",href:"https://www.linkedin.com/in/assalielmehdi/",target:"_blank",rel:"noopener noreferrer"},c.a.createElement("i",{className:"fab fa-linkedin-in"})),c.a.createElement("a",{className:"footer-right github",href:"https://github.com/assalielmehdi",target:"_blank",rel:"noopener noreferrer"},c.a.createElement("i",{className:"fab fa-github"})),c.a.createElement("a",{className:"footer-right twitter",href:"https://twitter.com/assalielmehdi",target:"_blank",rel:"noopener noreferrer"},c.a.createElement("i",{className:"fab fa-twitter"})))))}}]),t}(n.Component),E=a(8),N=a(13),j=a.n(N),y=a(12),k=[{name:"Portfolio",technologies:["React","Bootstrap 4"],description:"A website containing my personal and professional information. I constantly publish my thoughts about computer science and new technologies.",categories:["React"]},{name:"md2html",technologies:["Spring Boot","Javascript"],description:"A compiler for the Markdown language. The output of the compiler is HTML styled with CSS and Bootstrap.",categories:["Spring Boot","Compiler design"],repository:"https://github.com/assalielmehdi/md2html"},{name:"Strategic Planning Platform",technologies:["Spring Boot","React"],categories:["React","Spring Boot"],description:"As a year-end project, I had to make a digital platform for strategic planning. The application is made using Spring Boot (API) and React.js (front-end).",repository:"https://github.com/assalielmehdi/pfa-front"},{name:"Ada compiler",technologies:["C","Flex"],description:"Complete compiler/interpreter for a subset of the Ada programming language, made for pedagogical purposes.",categories:["Compiler design"],repository:"https://github.com/assalielmehdi/sample-spark-ada-compiler"}],O=Object(y.a)(new Set(k.map(function(e){return Object(y.a)(e.categories)}).reduce(function(e,t){return[].concat(Object(y.a)(e),Object(y.a)(t))},[]))),w=[{category:"All",projects:k}].concat(Object(y.a)(O.map(function(e){return{category:e,projects:k.filter(function(t){return t.categories.includes(e)})}}))),S=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).handleScroll=function(e){var t=o.a.findDOMNode(Object(E.a)(Object(E.a)(a))).getBoundingClientRect(),n=t.height,c=t.top,r=t.bottom,l=window.innerHeight;Math.max(0,c>0?Math.min(n,l-c):Math.min(r,l))/l>=.5&&a.props.changeActive("Projects")},a._renderProject=function(e){var t=e.name,a=e.technologies,n=e.description,r=e.repository;return c.a.createElement("div",{className:"card sharp-corner",key:j.a.generate()},c.a.createElement("div",{className:"card-body"},c.a.createElement("h3",{className:"card-title mb-3"},t),c.a.createElement("div",{className:"card-subtitle text-muted"},a.join(" | ")),c.a.createElement("hr",null),c.a.createElement("div",{className:"card-text"},n),c.a.createElement("hr",null),r&&c.a.createElement("div",{className:"card-text text-muted"},"You can see"," ",c.a.createElement("a",{className:"card-link",href:r,target:"_blank",rel:"noopener noreferrer"},"source code."))))},a._renderCategoryProjects=function(e,t){var n=e.category,r=e.projects;return c.a.createElement("div",{className:"tab-pane fade ".concat(0===t?"show active":""),id:"".concat(n.toLowerCase().replace(/( )*/g,""),"-projects"),role:"tabpanel",key:j.a.generate()},c.a.createElement("div",{className:"card-columns"},r.map(a._renderProject)))},a._renderCategoryTab=function(e,t){var a=e.category;return c.a.createElement("a",{className:"nav-item nav-link ".concat(0===t?"active":""),"data-toggle":"tab",href:"#".concat(a.toLowerCase().replace(/( )*/g,""),"-projects"),role:"tab",key:j.a.generate()},c.a.createElement("span",null,a))},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.handleScroll)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.handleScroll)}},{key:"render",value:function(){var e=this.props,t=e.gray,a=e.after,n=e.before;return c.a.createElement("div",{id:"projects",className:"section ".concat(t?"section-gray":""," ").concat(n?"section-separator-before":""," ").concat(a?"section-separator-after":"")},c.a.createElement("h1",{className:"section-title"},"Projects"),c.a.createElement("hr",{className:"section-title-underline"}),c.a.createElement("div",{className:"section-body container"},c.a.createElement("nav",{className:"d-none d-md-block"},c.a.createElement("div",{className:"nav nav-tabs",id:"projects-nav",role:"tablist"},w.map(this._renderCategoryTab))),c.a.createElement("div",{className:"tab-content",id:"projects-body"},w.map(this._renderCategoryProjects))))}}]),t}(n.Component),A=a(20),C=a.n(A),M=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(c)))).handleScroll=function(e){var t=o.a.findDOMNode(Object(E.a)(Object(E.a)(a))).getBoundingClientRect(),n=t.height,c=t.top,r=t.bottom,l=window.innerHeight;Math.max(0,c>0?Math.min(n,l-c):Math.min(r,l))/l>=.5&&a.props.changeActive("About")},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.handleScroll)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.handleScroll)}},{key:"render",value:function(){var e=this.props,t=e.gray,a=e.after,n=e.before;return c.a.createElement("div",{id:"about",className:"section ".concat(t?"section-gray":""," ").concat(n?"section-separator-before":""," ").concat(a?"section-separator-after":"")},c.a.createElement("h1",{className:"section-title"},"About me"),c.a.createElement("hr",{className:"section-title-underline"}),c.a.createElement("div",{className:"section-body container"},c.a.createElement("div",{className:"text-center"},c.a.createElement("a",{href:C.a,className:"link",target:"_blank"},"Download my resume"))))}}]),t}(n.Component),x=a(21),_=a.n(x),L=a(22),B=[{name:"C",category:"Languages",icon:"devicon-c-plain"},{name:"Java",category:"Languages",icon:"devicon-java-plain"},{name:"Javascript",category:"Languages",icon:"devicon-javascript-plain"},{name:"Docker",category:"DevOps",icon:"devicon-docker-plain-wordmark"},{name:"React.js",category:"Frameworks",icon:"devicon-react-plain"},{name:"Compiler design",category:"Others",iconImg:a.n(L).a},{name:"Spring Boot",category:"Frameworks",iconImg:_.a}],D=Object(y.a)(new Set(B.map(function(e){return e.category}))),T=[{category:"All",skills:B}].concat(Object(y.a)(D.map(function(e){return{category:e,skills:B.filter(function(t){return t.category===e})}}))),P=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r))))._handleScroll=function(){var e=o.a.findDOMNode(Object(E.a)(Object(E.a)(a))).getBoundingClientRect(),t=e.height,n=e.top,c=e.bottom,r=window.innerHeight;Math.max(0,n>0?Math.min(t,r-n):Math.min(c,r))/r>=.5&&a.props.changeActive("Skills")},a._renderSkill=function(e){var t=e.name,a=e.icon,n=e.iconImg;return c.a.createElement("div",{className:"card sharp-corner",key:j.a.generate()},c.a.createElement("div",{className:"card-body"},c.a.createElement("h3",{className:"card-title m-0"},a&&c.a.createElement("i",{className:"skill-logo ".concat(a)}),n&&c.a.createElement("img",{src:n,alt:"Skill logo",className:"skill-img"}),t)))},a._renderCategorySkills=function(e,t){var n=e.category,r=e.skills;return c.a.createElement("div",{className:"tab-pane fade ".concat(0===t?"show active":""),id:"".concat(n.replace(/[ ]/g,"-").toLowerCase(),"-skills"),role:"tabpanel",key:j.a.generate()},c.a.createElement("div",{className:"card-columns"},r.map(a._renderSkill)))},a._renderCategoryTab=function(e,t){var a=e.category;return c.a.createElement("a",{className:"nav-item nav-link ".concat(0===t?"active":""),"data-toggle":"tab",href:"#".concat(a.replace(/[ ]/g,"-").toLowerCase(),"-skills"),role:"tab",key:j.a.generate()},c.a.createElement("span",null,a))},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this._handleScroll)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this._handleScroll)}},{key:"render",value:function(){var e=this.props,t=e.gray,a=e.after,n=e.before;return c.a.createElement("div",{id:"skills",className:"section ".concat(t?"section-gray":""," ").concat(n?"section-separator-before":""," ").concat(a?"section-separator-after":"")},c.a.createElement("h1",{className:"section-title"},"Skills"),c.a.createElement("hr",{className:"section-title-underline"}),c.a.createElement("div",{className:"section-body container"},c.a.createElement("nav",{className:"d-none d-md-block"},c.a.createElement("div",{className:"nav nav-tabs",id:"skills-nav",role:"tablist"},T.map(this._renderCategoryTab))),c.a.createElement("div",{className:"tab-content",id:"skills-body"},T.map(this._renderCategorySkills))))}}]),t}(n.Component),I=a(44),R=[{name:"Guide mobilit\xe9 (ENSIAS)",date:"Jun 8, 2019",duration:12,link:"guide-mobilite-ensias",lang:"fr"}],W=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).handleScroll=function(e){var t=o.a.findDOMNode(Object(E.a)(Object(E.a)(a))).getBoundingClientRect(),n=t.height,c=t.top,r=t.bottom,l=window.innerHeight;Math.max(0,c>0?Math.min(n,l-c):Math.min(r,l))/l>=.5&&a.props.changeActive("Thoughts")},a._renderThought=function(e,t){var a=e.name,n=e.duration,r=e.date,o=e.link,l=e.lang;return c.a.createElement(I.a,{className:"card sharp-corner post mt-3 mb-3",to:"/thoughts/".concat(o),key:"thought#".concat(t)},c.a.createElement("div",{className:"card-body"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-7 post-name"},c.a.createElement("span",{className:"flag-icon flag-icon-".concat(l," mr-3")}),a,c.a.createElement("span",{className:"post-duration"},n," min read")),c.a.createElement("div",{className:"col-5 post-date text-right"},r))))},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.handleScroll)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.handleScroll)}},{key:"render",value:function(){var e=this.props,t=e.gray,a=e.after,n=e.before;return c.a.createElement("div",{id:"thoughts",className:"section ".concat(t?"section-gray":""," ").concat(n?"section-separator-before":""," ").concat(a?"section-separator-after":"")},c.a.createElement("h1",{className:"section-title"},"Thoughts"),c.a.createElement("hr",{className:"section-title-underline"}),c.a.createElement("div",{className:"section-body container"},R.map(this._renderThought)))}}]),t}(n.Component),H=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(c)))).handleScroll=function(e){var t=o.a.findDOMNode(Object(E.a)(Object(E.a)(a))).getBoundingClientRect(),n=t.height,c=t.top,r=t.bottom,l=window.innerHeight;Math.max(0,c>0?Math.min(n,l-c):Math.min(r,l))/l>=.5&&a.props.changeActive(null)},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.handleScroll)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.handleScroll)}},{key:"render",value:function(){return c.a.createElement("div",{id:"quote",className:"section section-separator-after p-0"})}}]),t}(n.Component),J=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e)))._setChangeActive=function(e){return a.setState({changeActive:e})},a.state={changeActive:null},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){document.title="El Mehdi ASSALI - Portfolio"}},{key:"render",value:function(){return c.a.createElement(n.Fragment,null,c.a.createElement(b,{setChangeActive:this._setChangeActive}),c.a.createElement("main",{id:"main"},c.a.createElement("div",{className:"container-fluid"},c.a.createElement(H,{after:!0,changeActive:this.state.changeActive}),c.a.createElement(M,{gray:!0,after:!0,before:!0,changeActive:this.state.changeActive}),c.a.createElement(P,{after:!0,before:!0,changeActive:this.state.changeActive}),c.a.createElement(S,{gray:!0,after:!0,before:!0,changeActive:this.state.changeActive}),c.a.createElement(W,{before:!0,changeActive:this.state.changeActive}))),c.a.createElement(f,null))}}]),t}(n.Component),F=a(23),U=a.n(F),q=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"text-center spinner-wrapper"},c.a.createElement("h4",{className:"mb-3"},"El Mehdi ASSALI"),c.a.createElement("img",{alt:"Spinner",src:U.a,className:"spinner"}),c.a.createElement("h6",{className:"mt-3"},"Loading ..."))}}]),t}(n.Component),G=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={loaded:!1},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return this.state.loaded||setTimeout(function(){return e.setState({loaded:!0})},1500),this.state.loaded?c.a.createElement(J,null):c.a.createElement(q,null)}}]),t}(n.Component),Y=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement("span",null,"Not found")}}]),t}(n.Component),z=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={thought:null},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentWillMount",value:function(){var e=this,t=R.find(function(t){return t.link===e.props.match.params.thoughtLink});this.setState({thought:t})}},{key:"render",value:function(){return this.state.thought&&c.a.createElement(n.Fragment,null,c.a.createElement("header",{id:"article-read-header"},c.a.createElement("nav",{className:"navbar navbar-expand navbar-light bg-light"},c.a.createElement("div",{className:"container"},c.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbar"},c.a.createElement("span",{className:"navbar-toggler-icon"})),c.a.createElement("div",{className:"collapse navbar-collapse justify-content-md-center",id:"navbar"},c.a.createElement("ul",{className:"navbar-nav"},c.a.createElement("li",{className:"nav-item nav-item-left"},c.a.createElement(I.a,{className:"nav-link",to:"/"},c.a.createElement("span",null,c.a.createElement("i",{className:"fas fa-arrow-left"})))),c.a.createElement("li",{className:"nav-item nav-item-right d-none d-sm-block"},c.a.createElement("a",{className:"nav-link"},this.state.thought.name))))))),c.a.createElement("main",{id:"main"}),c.a.createElement(f,null))||c.a.createElement(q,null)}}]),t}(n.Component),K=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement(u.a,null,c.a.createElement(h.a,null,c.a.createElement(p.a,{path:"/",component:G,exact:!0}),c.a.createElement(p.a,{path:"/thoughts/:thoughtLink",component:z,exact:!0}),c.a.createElement(p.a,{component:Y})))}}]),t}(n.Component);a(42);o.a.render(c.a.createElement(K,null),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.d22a50cb.chunk.js.map