(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"1zJ4":function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),r=n.n(a),o=n("tioU"),i=n("Ac7g"),l=n("XnAh"),c=n("fxt3");t.default=function(){return r.a.createElement(o.a,{title:"Contacto",path:"/contacto",description:"Contacta a Natalia Andrea Pérez Mancera para tus dudas legales."},r.a.createElement(i.a,null),r.a.createElement("div",{style:{marginTop:48}}),r.a.createElement(c.a,{main:!0}),r.a.createElement(l.a,null))}},Ac7g:function(e,t,n){"use strict";n.d(t,"a",(function(){return E}));var a,r=n("dI71"),o=n("q1tI"),i=n.n(o),l=n("Wbzz"),c=n("DDoQ"),s=n("vOnD"),u=s.c.nav.withConfig({displayName:"style__Nav",componentId:"sc-1d7bfl4-0"})(["padding:16px 0;background-color:",";position:fixed;width:100%;top:0;z-index:1000;box-shadow:0 3px 28px 0 rgb(0 0 0 / 20%)"],(function(e){return e.theme.color.primary})),m=Object(s.c)(c.a).withConfig({displayName:"style__StyledContainer",componentId:"sc-1d7bfl4-1"})(["display:flex;justify-content:space-between;align-items:center;"]),d=s.c.div.withConfig({displayName:"style__NavListWrapper",componentId:"sc-1d7bfl4-2"})(["ul{list-style:none;margin:0;padding:0;display:flex;flex-direction:row;",";}"],(function(e){return e.mobile&&"\n        flex-direction: column;\n        margin-top: 1em;\n\n        > "+p+" {\n          margin: 0;\n          margin-top: 0.75em;\n        }\n      "})),p=s.c.li.withConfig({displayName:"style__NavItem",componentId:"sc-1d7bfl4-3"})(["margin:0 0.75em;font-family:",";",";a{text-decoration:none;opacity:0.7;color:",";}&.active{a{opacity:1;}}"],(function(e){return e.theme.font.secondary}),(function(e){return e.theme.font_size.small}),(function(e){return e.theme.color.black.regular})),f=Object(s.c)(p).withConfig({displayName:"style__NavItemThird",componentId:"sc-1d7bfl4-4"})(["padding-left:12px;"]),h=s.c.div.withConfig({displayName:"style__MobileMenu",componentId:"sc-1d7bfl4-5"})(["width:100%;background:",";"],(function(e){return e.theme.color.primary})),g=s.c.div.withConfig({displayName:"style__Brand",componentId:"sc-1d7bfl4-6"})(["font-family:",";",";"],(function(e){return e.theme.font.primary}),(function(e){return e.theme.font_size.large}));s.c.div.withConfig({displayName:"style__Mobile",componentId:"sc-1d7bfl4-7"})(["display:none;@media (max-width:","){display:block;}",""],(function(e){return e.theme.screen.md}),(function(e){return e.hide&&"\n    display: block;\n\n    @media (max-width: "+e.theme.screen.md+") {\n      display: none;\n    }\n  "}));function v(){return(v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var b=function(e){return i.a.createElement("svg",v({width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",className:"menu_svg__feather menu_svg__feather-menu"},e),a||(a=i.a.createElement("path",{d:"M3 12h18M3 6h18M3 18h18"})))},y=[{label:"Inicio",url:"/"},{label:"Servicios",url:"/#servicios",children:[{label:"Gestión asuntos corporativos",url:"/servicios/gestion-asuntos-corporativos"},{label:"Derecho contractual",url:"/servicios/derecho-contractual"},{label:"Derecho laboral",url:"/servicios/derecho-laboral"},{label:"Derecho inmobiliario",url:"/servicios/derecho-inmobiliario"},{label:"Derecho de familia",url:"/servicios/derecho-de-familia"}]},{label:"Contacto",url:"/contacto"}],E=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))||this).state={mobileMenuOpen:!1},t.toggleMobileMenu=function(){t.setState((function(e){return{mobileMenuOpen:!e.mobileMenuOpen}}))},t.closeMobileMenu=function(){t.state.mobileMenuOpen&&t.setState({mobileMenuOpen:!1})},t.getNavAnchorLink=function(e,n){return i.a.createElement(l.Link,{to:n,onClick:t.closeMobileMenu,activeStyle:{borderBottom:"1px solid black"}},e)},t.getNavList=function(e){var n=e.mobile,a=void 0!==n&&n;return i.a.createElement(d,{mobile:a},i.a.createElement("ul",null,y.map((function(e){var n=e.label,a=e.url,r=e.children;return r?i.a.createElement(i.a.Fragment,{key:n},i.a.createElement(p,null,t.getNavAnchorLink(n,a)),r.map((function(e){var n=e.label,a=e.url;return i.a.createElement(f,{key:n},t.getNavAnchorLink(n,a))}))):i.a.createElement(p,{key:n},t.getNavAnchorLink(n,a))}))))},t}return Object(r.a)(t,e),t.prototype.render=function(){var e=this.state.mobileMenuOpen;return i.a.createElement(u,this.props,i.a.createElement(m,null,i.a.createElement(l.Link,{to:"/",style:{textDecoration:"none",color:"black"}},i.a.createElement(g,null,"Pérez Mancera Abogados")),i.a.createElement("button",{onClick:this.toggleMobileMenu,style:{color:"black"}},i.a.createElement(b,null))),e&&i.a.createElement(h,null,i.a.createElement(c.a,null,this.getNavList({mobile:!0}))))},t}(o.Component)},D5Hz:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.EmailJSResponseStatus=t.sendForm=t.send=t.init=void 0;var a=n("MkV5");Object.defineProperty(t,"EmailJSResponseStatus",{enumerable:!0,get:function(){return a.EmailJSResponseStatus}});var r=n("USkh"),o=null,i="https://api.emailjs.com";function l(e,t,n){return void 0===n&&(n={}),new Promise((function(r,o){var i=new XMLHttpRequest;for(var l in i.addEventListener("load",(function(e){var t=new a.EmailJSResponseStatus(e.target);200===t.status||"OK"===t.text?r(t):o(t)})),i.addEventListener("error",(function(e){o(new a.EmailJSResponseStatus(e.target))})),i.open("POST",e,!0),n)i.setRequestHeader(l,n[l]);i.send(t)}))}function c(e){var t=document&&document.getElementById("g-recaptcha-response");return t&&t.value&&(e["g-recaptcha-response"]=t.value),t=null,e}function s(e,t){o=e,i=t||"https://api.emailjs.com"}function u(e,t,n,a){var r={lib_version:"2.6.4",user_id:a||o,service_id:e,template_id:t,template_params:c(n)};return l(i+"/api/v1.0/email/send",JSON.stringify(r),{"Content-type":"application/json"})}function m(e,t,n,a){var c;if("string"==typeof n&&(n=document.querySelector("#"!==(c=n)[0]&&"."!==c[0]?"#"+c:c)),!n||"FORM"!==n.nodeName)throw"Expected the HTML form element or the style selector of form";r.UI.progressState(n);var s=new FormData(n);return s.append("lib_version","2.6.4"),s.append("service_id",e),s.append("template_id",t),s.append("user_id",a||o),l(i+"/api/v1.0/email/send-form",s).then((function(e){return r.UI.successState(n),e}),(function(e){return r.UI.errorState(n),Promise.reject(e)}))}t.init=s,t.send=u,t.sendForm=m,t.default={init:s,send:u,sendForm:m}},MkV5:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.EmailJSResponseStatus=void 0;var a=function(e){this.status=e.status,this.text=e.responseText};t.EmailJSResponseStatus=a},USkh:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.UI=void 0;var a=function(){function e(){}return e.clearAll=function(e){e.classList.remove(this.PROGRESS),e.classList.remove(this.DONE),e.classList.remove(this.ERROR)},e.progressState=function(e){this.clearAll(e),e.classList.add(this.PROGRESS)},e.successState=function(e){e.classList.remove(this.PROGRESS),e.classList.add(this.DONE)},e.errorState=function(e){e.classList.remove(this.PROGRESS),e.classList.add(this.ERROR)},e.PROGRESS="emailjs-sending",e.DONE="emailjs-success",e.ERROR="emailjs-error",e}();t.UI=a},XnAh:function(e,t,n){"use strict";var a=n("q1tI"),r=n.n(a),o=n("vOnD"),i=n("Wbzz"),l=n("DDoQ");var c=function(e){var t=e.href,n=e.children,a=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,["href","children"]);return r.a.createElement("a",Object.assign({href:t},a,{rel:"noreferrer noopener",target:"_blank"}),n)};var s=[{icon:"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI2IiBoZWlnaHQ9IjEyNiIgdmlld0JveD0iMCAwIDEyNiAxMjYiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik00MiA0OEgzNFY4OEg0MlY0OFoiIGZpbGw9ImJsYWNrIi8+CjxwYXRoIGQ9Ik00MiAzMEgzNFYzOEg0MlYzMFoiIGZpbGw9ImJsYWNrIi8+CjxwYXRoIGQ9Ik02MiA3M1Y2OEM2MiA2MS45IDY2LjkgNTcgNzMgNTdDNzkuMSA1NyA4NCA2MS45IDg0IDY4Vjg4SDkyVjY4QzkyIDU3LjUgODMuNSA0OSA3MyA0OUM2OC45IDQ5IDY1LjEgNTAuMyA2MiA1Mi41VjQ4SDU0VjY4VjczVjg4SDYyVjczWiIgZmlsbD0iYmxhY2siLz4KPHBhdGggZD0iTTEyNiAwSDBWMTI2SDEyNlYwWk0xMTggMTE4SDhWOEgxMThWMTE4WiIgZmlsbD0iYmxhY2siLz4KPC9zdmc+Cg==",link:"https://linkedin.com/in/natalia-perez-mancera"}],u=o.c.div.withConfig({displayName:"Footer__SocialIcons",componentId:"sc-1i8xap3-0"})(["display:flex;img{margin:0 8px;width:24px;height:24px;}@media (max-width:","){margin-top:40px;}"],(function(e){return e.theme.screen.sm})),m=o.c.footer.withConfig({displayName:"Footer__FooterWrapper",componentId:"sc-1i8xap3-1"})(["background-color:",";padding:32px 0;"],(function(e){return e.theme.color.primary})),d=o.c.div.withConfig({displayName:"Footer__Copyright",componentId:"sc-1i8xap3-2"})(["font-family:",";",";color:",";a{text-decoration:none;color:inherit;}"],(function(e){return e.theme.font.secondary}),(function(e){return e.theme.font_size.small}),(function(e){return e.theme.color.black.regular})),p=Object(o.c)(l.a).withConfig({displayName:"Footer__StyledContainer",componentId:"sc-1i8xap3-3"})(["display:flex;justify-content:space-between;align-items:center;@media (max-width:","){flex-direction:column;text-align:center;}"],(function(e){return e.theme.screen.sm}));t.a=function(){return r.a.createElement(i.StaticQuery,{query:"2299330873",render:function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(m,null,r.a.createElement(p,null,r.a.createElement(d,null,r.a.createElement("h2",null,"Pérez Mancera Abogados")),r.a.createElement(u,null,s.map((function(e){var t=e.icon,n=e.link;return r.a.createElement(c,{key:n,href:n},r.a.createElement("img",{src:t,alt:"link"}))}))))))}})}},fxt3:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var a=n("q1tI"),r=n.n(a),o=n("DDoQ"),i=n("D5Hz"),l=n.n(i),c=n("vOnD").c.p.withConfig({displayName:"Contact__ErrorMessage",componentId:"sc-1njrlo2-0"})(["margin-top:12px;font-size:14px;"]),s=function(e){var t=e.main,n=Object(a.useState)(!1),i=n[0],s=n[1],u=Object(a.useState)(""),m=u[0],d=u[1],p=Object(a.useState)(""),f=p[0],h=p[1],g=Object(a.useState)(""),v=g[0],b=g[1],y=Object(a.useState)(""),E=y[0],S=y[1],M=Object(a.useState)(),I=M[0],_=M[1];return r.a.createElement(o.b,null,r.a.createElement(o.a,null,t?r.a.createElement("h1",null,"Contacto"):r.a.createElement("h2",null,"Contacto"),r.a.createElement("form",{onSubmit:function(e){return function(e){d(""),e.preventDefault(),l.a.sendForm("service_r0k1qry","template_jlsc5bs",e.target,"user_V0OlSoRrl1zQsDyIoIFbb").then((function(e){d("Mensaje enviado exitosamente."),s(!0)}),(function(e){d("Hubo un error enviando el mensaje. Inténtalo de nuevo por favor.")}))}(e)}},r.a.createElement("label",{htmlFor:"fname"},"Nombres"),r.a.createElement("input",{type:"text",id:"fname",name:"from_name",placeholder:"Coco Pérez",value:f,onChange:function(e){return h(e.target.value)},required:!0}),r.a.createElement("label",{htmlFor:"from_mail"},"Correo electrónico"),r.a.createElement("input",{type:"email",id:"from_mail",name:"from_mail",placeholder:"coco.perez@gmail.com",value:v,onChange:function(e){return b(e.target.value)},required:!0}),r.a.createElement("label",{htmlFor:"from_phone"},"Número de teléfono"),r.a.createElement("input",{type:"number",id:"from_phone",min:3e9,max:3999999999,name:"from_phone",placeholder:"3046993910",value:I,onChange:function(e){return _(e.target.value)},required:!0}),r.a.createElement("label",{htmlFor:"message"},"Asunto"),r.a.createElement("textarea",{id:"message",name:"message",placeholder:"Necesito asesoría en...",style:{height:200},value:E,onChange:function(e){return S(e.target.value)},required:!0}),r.a.createElement("input",{type:"submit",value:"Contactar",disabled:i}),m&&r.a.createElement(c,null,m))))}}}]);
//# sourceMappingURL=component---src-pages-contacto-js-b2bde5a9d984da48e0d2.js.map