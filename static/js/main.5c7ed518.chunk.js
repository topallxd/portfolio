(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,t,a){e.exports=a.p+"static/media/icon.ca6696e0.png"},17:function(e,t,a){e.exports=a.p+"static/media/spring-boot-logo.ef53e5e8.svg"},18:function(e,t,a){e.exports=a.p+"static/media/adobe-xd-logo.3a3f271a.png"},19:function(e,t,a){e.exports=a.p+"static/media/compiler-logo.7e3444c7.png"},20:function(e,t,a){e.exports=a(37)},34:function(e,t,a){},37:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(8),o=a.n(r),l=a(39),i=a(1),s=a(2),m=a(5),d=a(3),h=a(4),u=a(16),v=a.n(u),g=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e)))._changeActive=function(e){return a.setState({active:e})},a.state={active:null},a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"componentWillMount",value:function(){this.props.setChangeActive(this._changeActive)}},{key:"render",value:function(){return c.a.createElement("header",null,c.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light fixed-top"},c.a.createElement("div",{className:"container"},c.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbar"},c.a.createElement("span",{className:"navbar-toggler-icon"})),c.a.createElement("div",{className:"collapse navbar-collapse justify-content-md-center",id:"navbar"},c.a.createElement("ul",{className:"navbar-nav"},c.a.createElement("li",{className:"nav-item ".concat("About"===this.state.active?"active":"")},c.a.createElement("a",{className:"nav-link",href:"!#"},c.a.createElement("span",null,"About me"))),c.a.createElement("li",{className:"nav-item ".concat("Thoughts"===this.state.active?"active":"")},c.a.createElement("a",{className:"nav-link",href:"!#"},c.a.createElement("span",null,"Thoughts"))),c.a.createElement("li",{className:"nav-item"},c.a.createElement("a",{className:"nav-link",href:"!#"},c.a.createElement("img",{alt:"El Mehdi ASSALI Bitmoji",src:v.a,height:"48"}))),c.a.createElement("li",{className:"nav-item ".concat("Projects"===this.state.active?"active":"")},c.a.createElement("a",{className:"nav-link",href:"!#"},c.a.createElement("span",null,"Projects"))),c.a.createElement("li",{className:"nav-item ".concat("Skills"===this.state.active?"active":"")},c.a.createElement("a",{className:"nav-link",href:"1#"},c.a.createElement("span",null,"Skills"))))))))}}]),t}(n.Component),p=function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return c.a.createElement("footer",null,c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col text-left text-muted d-none d-md-block"},c.a.createElement("span",{className:"footer-left"},"2019 \xa9 El Mehdi ASSALI")),c.a.createElement("div",{className:"col text-center footer-center text-muted"},c.a.createElement("div",{className:"d-none d-md-block"},"Get in touch by"," ",c.a.createElement("a",{href:"mailto:assalielmehdi@gmail.com",className:"mail-link"},"mail")),c.a.createElement("div",{className:"d-block d-md-none"},c.a.createElement("a",{className:"footer-right linkedin",href:"https://www.linkedin.com/in/assalielmehdi/",target:"_blank",rel:"noopener noreferrer"},c.a.createElement("i",{className:"fab fa-linkedin-in"})),c.a.createElement("a",{className:"footer-right github",href:"https://github.com/assalielmehdi",target:"_blank",rel:"noopener noreferrer"},c.a.createElement("i",{className:"fab fa-github"})),c.a.createElement("a",{className:"footer-right twitter",href:"https://twitter.com/assalielmehdi",target:"_blank",rel:"noopener noreferrer"},c.a.createElement("i",{className:"fab fa-twitter"})))),c.a.createElement("div",{className:"col text-right d-none d-md-block"},c.a.createElement("a",{className:"footer-right linkedin",href:"https://www.linkedin.com/in/assalielmehdi/",target:"_blank",rel:"noopener noreferrer"},c.a.createElement("i",{className:"fab fa-linkedin-in"})),c.a.createElement("a",{className:"footer-right github",href:"https://github.com/assalielmehdi",target:"_blank",rel:"noopener noreferrer"},c.a.createElement("i",{className:"fab fa-github"})),c.a.createElement("a",{className:"footer-right twitter",href:"https://twitter.com/assalielmehdi",target:"_blank",rel:"noopener noreferrer"},c.a.createElement("i",{className:"fab fa-twitter"})))))}}]),t}(n.Component),b=a(7),f=a(10),E=a.n(f),y=a(12),N=[{name:"Portfolio",technologies:["Bootstrap 4","React"],description:"A website containing my personal and professional information. I constantly publish my thoughts about computer science and new technologies. The website contains also a description of all the projects I made.",category:"React",repository:"www.google.com"},{name:"Ada compiler",technologies:["C","Bash","Flex"],description:"Complete compiler/interpreter for a set of the Ada programming language made for pedagogical purposes.",category:"Others",repository:"https://github.com/assalielmehdi/sample-spark-ada-compiler"}],j=Object(y.a)(new Set(N.map(function(e){return e.category}))),k=[{category:"All",projects:N}].concat(Object(y.a)(j.map(function(e){return{category:e,projects:N.filter(function(t){return t.category===e})}}))),w=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(m.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).handleScroll=function(e){var t=o.a.findDOMNode(Object(b.a)(Object(b.a)(a))).getBoundingClientRect(),n=t.height,c=t.top,r=t.bottom,l=window.innerHeight;Math.max(0,c>0?Math.min(n,l-c):Math.min(r,l))/l>=.5&&a.props.changeActive("Projects")},a._renderProject=function(e){var t=e.name,a=e.technologies,n=e.description,r=e.repository;return c.a.createElement("div",{className:"card sharp-corner",key:E.a.generate()},c.a.createElement("div",{className:"card-body"},c.a.createElement("h3",{className:"card-title mb-3"},t),c.a.createElement("div",{className:"card-subtitle text-muted"},a.join(" | ")),c.a.createElement("hr",null),c.a.createElement("div",{className:"card-text"},n),c.a.createElement("hr",null),r&&c.a.createElement("div",{className:"card-text text-muted"},"You can see"," ",c.a.createElement("a",{className:"card-link",href:r,target:"_blank",rel:"noopener noreferrer"},"source code."))))},a._renderCategoryProjects=function(e,t){var n=e.category,r=e.projects;return c.a.createElement("div",{className:"tab-pane fade ".concat(0===t?"show active":""),id:"".concat(n.toLowerCase(),"-projects"),role:"tabpanel",key:E.a.generate()},c.a.createElement("div",{className:"card-columns"},r.map(a._renderProject)))},a._renderCategoryTab=function(e,t){var a=e.category;return c.a.createElement("a",{className:"nav-item nav-link ".concat(0===t?"active":""),"data-toggle":"tab",href:"#".concat(a.toLowerCase(),"-projects"),role:"tab",key:E.a.generate()},c.a.createElement("span",null,a))},a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.handleScroll)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.handleScroll)}},{key:"render",value:function(){var e=this.props,t=e.gray,a=e.after,n=e.before;return c.a.createElement("div",{className:"section ".concat(t?"section-gray":""," ").concat(n?"section-separator-before":""," ").concat(a?"section-separator-after":"")},c.a.createElement("h1",{className:"section-title"},"Projects"),c.a.createElement("hr",{className:"section-title-underline"}),c.a.createElement("div",{className:"section-body container"},c.a.createElement("nav",{className:"d-none d-md-block"},c.a.createElement("div",{className:"nav nav-tabs",id:"projects-nav",role:"tablist"},k.map(this._renderCategoryTab))),c.a.createElement("div",{className:"tab-content",id:"projects-body"},k.map(this._renderCategoryProjects))))}}]),t}(n.Component),O=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(m.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(c)))).handleScroll=function(e){var t=o.a.findDOMNode(Object(b.a)(Object(b.a)(a))).getBoundingClientRect(),n=t.height,c=t.top,r=t.bottom,l=window.innerHeight;Math.max(0,c>0?Math.min(n,l-c):Math.min(r,l))/l>=.5&&a.props.changeActive("About")},a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.handleScroll)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.handleScroll)}},{key:"render",value:function(){var e=this.props,t=e.gray,a=e.after,n=e.before;return c.a.createElement("div",{className:"section ".concat(t?"section-gray":""," ").concat(n?"section-separator-before":""," ").concat(a?"section-separator-after":"")},c.a.createElement("h1",{className:"section-title"},"About me"),c.a.createElement("hr",{className:"section-title-underline"}))}}]),t}(n.Component),A=a(17),S=a.n(A),C=a(18),M=a.n(C),x=a(19),_=a.n(x),L=[{name:"C",category:"Languages",icon:"devicon-c-plain"},{name:"Java",category:"Languages",icon:"devicon-java-plain"},{name:"Javascript",category:"Languages",icon:"devicon-javascript-plain"},{name:"HTML5",category:"Web Dev",icon:"devicon-html5-plain"},{name:"CSS3",category:"Web Dev",icon:"devicon-css3-plain"},{name:"React.js",category:"Web Dev",icon:"devicon-react-plain"},{name:"Bootstrap 4",category:"Web Dev",icon:"devicon-bootstrap-plain"},{name:"Adobe XD",category:"UI Design",iconImg:M.a},{name:"Compiler design",category:"Others",iconImg:_.a},{name:"Spring Boot",category:"Web Dev",iconImg:S.a}],D=Object(y.a)(new Set(L.map(function(e){return e.category}))),B=[{category:"All",skills:L}].concat(Object(y.a)(D.map(function(e){return{category:e,skills:L.filter(function(t){return t.category===e})}}))),I=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(m.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r))))._handleScroll=function(e){var t=o.a.findDOMNode(Object(b.a)(Object(b.a)(a))).getBoundingClientRect(),n=t.height,c=t.top,r=t.bottom,l=window.innerHeight;Math.max(0,c>0?Math.min(n,l-c):Math.min(r,l))/l>=.5&&a.props.changeActive("Skills")},a._renderSkill=function(e){var t=e.name,a=e.icon,n=e.iconImg;return c.a.createElement("div",{className:"card sharp-corner",key:E.a.generate()},c.a.createElement("div",{className:"card-body"},c.a.createElement("h3",{className:"card-title m-0"},a&&c.a.createElement("i",{className:"skill-logo ".concat(a)}),n&&c.a.createElement("img",{src:n,alt:"Skill logo",className:"skill-img"}),t)))},a._renderCategorySkills=function(e,t){var n=e.category,r=e.skills;return c.a.createElement("div",{className:"tab-pane fade ".concat(0===t?"show active":""),id:"".concat(n.replace(/[ ]/g,"-").toLowerCase(),"-skills"),role:"tabpanel",key:E.a.generate()},c.a.createElement("div",{className:"card-columns"},r.map(a._renderSkill)))},a._renderCategoryTab=function(e,t){var a=e.category;return c.a.createElement("a",{className:"nav-item nav-link ".concat(0===t?"active":""),"data-toggle":"tab",href:"#".concat(a.replace(/[ ]/g,"-").toLowerCase(),"-skills"),role:"tab",key:E.a.generate()},c.a.createElement("span",null,a))},a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this._handleScroll)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this._handleScroll)}},{key:"render",value:function(){var e=this.props,t=e.gray,a=e.after,n=e.before;return c.a.createElement("div",{className:"section ".concat(t?"section-gray":""," ").concat(n?"section-separator-before":""," ").concat(a?"section-separator-after":"")},c.a.createElement("h1",{className:"section-title"},"Skills"),c.a.createElement("hr",{className:"section-title-underline"}),c.a.createElement("div",{className:"section-body container"},c.a.createElement("nav",{className:"d-none d-md-block"},c.a.createElement("div",{className:"nav nav-tabs",id:"skills-nav",role:"tablist"},B.map(this._renderCategoryTab))),c.a.createElement("div",{className:"tab-content",id:"skills-body"},B.map(this._renderCategorySkills)),c.a.createElement("div",{className:"text-center arrow-section"},c.a.createElement("div",{className:"mb-1 arrow-text"},"Take a look at some",c.a.createElement("br",null)," of my projects"),c.a.createElement("div",{className:"arrow bounce"}))))}}]),t}(n.Component),T=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(m.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(c)))).handleScroll=function(e){var t=o.a.findDOMNode(Object(b.a)(Object(b.a)(a))).getBoundingClientRect(),n=t.height,c=t.top,r=t.bottom,l=window.innerHeight;Math.max(0,c>0?Math.min(n,l-c):Math.min(r,l))/l>=.5&&a.props.changeActive("Thoughts")},a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.handleScroll)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.handleScroll)}},{key:"render",value:function(){var e=this.props,t=e.gray,a=e.after,n=e.before;return c.a.createElement("div",{className:"section ".concat(t?"section-gray":""," ").concat(n?"section-separator-before":""," ").concat(a?"section-separator-after":"")},c.a.createElement("h1",{className:"section-title"},"Thoughts"),c.a.createElement("hr",{className:"section-title-underline"}),c.a.createElement("div",{className:"text-muted text-center"}))}}]),t}(n.Component),W=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(m.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(c)))).handleScroll=function(e){var t=o.a.findDOMNode(Object(b.a)(Object(b.a)(a))).getBoundingClientRect(),n=t.height,c=t.top,r=t.bottom,l=window.innerHeight;Math.max(0,c>0?Math.min(n,l-c):Math.min(r,l))/l>=.5&&a.props.changeActive(null)},a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.handleScroll)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.handleScroll)}},{key:"render",value:function(){return c.a.createElement("div",{className:"section section-separator-after p-0"})}}]),t}(n.Component),P=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e)))._setChangeActive=function(e){return a.setState({changeActive:e})},a.state={changeActive:null},a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){document.title="El Mehdi ASSALI - Portfolio"}},{key:"render",value:function(){return c.a.createElement(n.Fragment,null,c.a.createElement(g,{setChangeActive:this._setChangeActive}),c.a.createElement("main",{id:"main"},c.a.createElement("div",{className:"container-fluid"},c.a.createElement(W,{after:!0,changeActive:this.state.changeActive}),c.a.createElement(O,{gray:!0,after:!0,before:!0,changeActive:this.state.changeActive}),c.a.createElement(I,{after:!0,before:!0,changeActive:this.state.changeActive}),c.a.createElement(w,{gray:!0,after:!0,before:!0,changeActive:this.state.changeActive}),c.a.createElement(T,{before:!0,changeActive:this.state.changeActive}))),c.a.createElement(p,null))}}]),t}(n.Component),R=function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return c.a.createElement(P,null)}}]),t}(n.Component);a(34);o.a.render(c.a.createElement(l.a,null,c.a.createElement(R,null)),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.5c7ed518.chunk.js.map