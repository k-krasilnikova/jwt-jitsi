(this["webpackJsonpjwt-jitsi"]=this["webpackJsonpjwt-jitsi"]||[]).push([[0],{77:function(e,t,a){e.exports=a(89)},82:function(e,t,a){},88:function(e,t,a){},89:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(69),o=a.n(c),l=(a(82),a(20)),s=a(100),u=a(101),i="/login",m="/",p=function(e){var t=e.currentUser,a=e.component;return r.a.createElement("div",null,t?r.a.createElement(u.b,{component:function(){return r.a.createElement(a,{currentUser:t})}}):r.a.createElement(u.a,{to:{pathname:i}}))},d=a(71),E=function(){return{wrapper:{display:"flex",flexDirection:"column"}}},b=Object(s.a)(E)((function(e){var t=e.classes,a=e.call,n=e.room,c=e.name,o=e.password,l=e.handleClick,s=e.setRoom,u=e.setName,i=e.setPassword;return r.a.createElement("div",{className:t.wrapper},r.a.createElement("h2",null,"Jitsi Page"),a?r.a.createElement(d.a,{roomName:n,userName:c,password:o,loadingComponent:r.a.createElement("p",null,"loading ...")}):r.a.createElement("form",null,r.a.createElement("input",{id:"room",type:"text",placeholder:"Room",value:n,onChange:function(e){return s(e.target.value)}}),r.a.createElement("input",{id:"name",type:"text",placeholder:"Name",value:c,onChange:function(e){return u(e.target.value)}}),r.a.createElement("input",{id:"password",type:"text",placeholder:"Password (optional)",value:o,onChange:function(e){return i(e.target.value)}}),r.a.createElement("button",{onClick:l,type:"submit"},"Start / Join")))})),f=function(e){e.currentUser;var t=Object(n.useState)(""),a=Object(l.a)(t,2),c=a[0],o=a[1],s=Object(n.useState)(""),u=Object(l.a)(s,2),i=u[0],m=u[1],p=Object(n.useState)(!1),d=Object(l.a)(p,2),E=d[0],f=d[1],v=Object(n.useState)(""),h=Object(l.a)(v,2),w=h[0],g=h[1];return r.a.createElement(b,{call:E,room:c,name:i,password:w,handleClick:function(e){e.preventDefault(),c&&i&&f(!0)},setRoom:o,setName:m,setPassword:g})},v=a(58),h=a(62),w=a(33),g=a(64),j=a.n(g),O=function(){return{wrapper:{display:"flex",flexDirection:"column"}}},S=Object(s.a)(O)((function(e){var t=e.classes,a=e.initialValues,n=e.validationSchema,c=e.login,o=e.error;return r.a.createElement("div",{className:t.wrapper},r.a.createElement("h2",null,"Log In Page"),o&&r.a.createElement("div",{className:t.error},o),r.a.createElement(w.d,{initialValues:a,validationSchema:n,onSubmit:c},(function(e){var a=e.errors,n=e.status,c=e.isSubmitting;return r.a.createElement(w.c,null,r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"username"},"Username"),r.a.createElement(w.b,{name:"username",type:"text",className:j()(t.input,Object(h.a)({},t.error,a))}),r.a.createElement(w.a,{name:"username",component:"div"})),r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement(w.b,{name:"password",type:"password",className:j()(t.input,Object(h.a)({},t.error,a))}),r.a.createElement(w.a,{name:"password",component:"div"})),r.a.createElement("div",null,r.a.createElement("button",{type:"submit",disabled:c},"Get JWT")),n&&r.a.createElement("div",null,n))})))})),y=a(18),U=Object(y.a)(),x=function(e){var t=e.currentUser,a=e.setUser,c=Object(n.useState)(""),o=Object(l.a)(c,2),s=o[0],u=o[1];Object(n.useEffect)((function(){t&&U.push(m)}),[t]);var i=v.a().shape({username:v.b().required("Required"),password:v.b().required("Required")});return r.a.createElement(S,{initialValues:{username:"",password:""},validationSchema:i,login:function(e,t){e.username,e.password,t.setSubmitting;u(""),a("kakaka"),U.push(m)},error:s})},N=function(){return{wrapper:{display:"flex",flexDirection:"column"}}},k=Object(s.a)(N)((function(e){var t=e.classes,a=e.currentUser,n=e.setUser,c=e.logout;return r.a.createElement("div",{className:t.wrapper},r.a.createElement(u.c,{history:U},a&&r.a.createElement("a",{onClick:c},"Logout"),r.a.createElement(p,{exact:!0,path:m,component:f,currentUser:a}),r.a.createElement(u.b,{path:i,component:function(){return r.a.createElement(x,{currentUser:a,setUser:n})}})))})),C=function(){var e=Object(n.useState)(""),t=Object(l.a)(e,2),a=t[0],c=t[1];return r.a.createElement(k,{currentUser:a,setUser:c,logout:function(){c(""),U.push(i)}})};a(88);var P=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(C,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(P,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[77,1,2]]]);
//# sourceMappingURL=main.216c8adc.chunk.js.map