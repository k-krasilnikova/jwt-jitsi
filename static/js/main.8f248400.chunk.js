(this["webpackJsonpjwt-jitsi"]=this["webpackJsonpjwt-jitsi"]||[]).push([[0],{77:function(e,t,a){e.exports=a(89)},82:function(e,t,a){},88:function(e,t,a){},89:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(69),c=a.n(o),l=(a(82),a(43)),i=a(100),s=a(101),u="/login",m="/",p="testt",d="trtrtr",f="pas",b=function(e){var t=e.currentUser,a=e.component;return r.a.createElement("div",null,t?r.a.createElement(s.b,{component:function(){return r.a.createElement(a,{currentUser:t})}}):r.a.createElement(s.a,{to:{pathname:u}}))},h=a(71),v=function(){return{wrapper:{display:"flex",flexDirection:"column"},button:{cursor:"pointer"}}},w=Object(i.a)(v)((function(e){var t=e.classes,a=e.call,n=e.room,o=e.name,c=e.password,l=e.handleClick;return r.a.createElement("div",{className:t.wrapper},r.a.createElement("h2",null,"Jitsi Page"),a?r.a.createElement(h.a,{roomName:n,userName:o,password:c,loadingComponent:r.a.createElement("p",null,"loading ...")}):r.a.createElement("button",{onClick:l,className:t.button},"Start / Join"))})),E=function(){var e=Object(n.useState)(!1),t=Object(l.a)(e,2),a=t[0],o=t[1];return r.a.createElement(w,{call:a,room:p,name:d,password:f,handleClick:function(e){e.preventDefault(),p&&d&&o(!0)}})},g=a(58),j=a(62),N=a(32),S=a(64),O=a.n(S),x=function(){return{wrapper:{display:"flex",flexDirection:"column"},button:{width:108,cursor:"pointer"},field:{margin:20,display:"flex",flexDirection:"column",alignItems:"baseline","&>div":{color:"red",fontSize:12}},label:{fontSize:14,color:"darkgray"},input:{width:200,height:20,borderRadius:10}}},y=Object(i.a)(x)((function(e){var t=e.classes,a=e.initialValues,n=e.validationSchema,o=e.login,c=e.error;return r.a.createElement("div",{className:t.wrapper},r.a.createElement("h2",null,"Log In Page"),c&&r.a.createElement("div",{className:t.error},c),r.a.createElement(N.d,{initialValues:a,validationSchema:n,onSubmit:o},(function(e){var a=e.errors,n=e.status,o=e.isSubmitting;return r.a.createElement(N.c,null,r.a.createElement("div",{className:t.field},r.a.createElement("label",{htmlFor:"username",className:t.label},"Username"),r.a.createElement(N.b,{name:"username",type:"text",className:O()(t.input,Object(j.a)({},t.error,a))}),r.a.createElement(N.a,{name:"username",component:"div"})),r.a.createElement("div",{className:t.field},r.a.createElement("label",{htmlFor:"password",className:t.label},"Password"),r.a.createElement(N.b,{name:"password",type:"password",className:O()(t.input,Object(j.a)({},t.error,a))}),r.a.createElement(N.a,{name:"password",component:"div"})),r.a.createElement("div",null,r.a.createElement("button",{type:"submit",disabled:o,className:t.button},"Get JWT")),n&&r.a.createElement("div",null,n))})))})),k=a(18),U=Object(k.a)({basename:"/jwt-jitsi"}),D=function(e){return e.text().then((function(t){var a=t&&JSON.parse(t);if(!e.ok){var n=a&&a.message||e.statusText;return Promise.reject(n)}return a}))},J=function(e){var t=e.currentUser,a=e.setUser,o=Object(n.useState)(""),c=Object(l.a)(o,2),i=c[0],s=c[1];Object(n.useEffect)((function(){var e=localStorage.getItem("jwt");e&&(a(e),U.push(m))}),[t]);var u=g.a().shape({username:g.b().required("Required"),password:g.b().required("Required")});return r.a.createElement(y,{initialValues:{username:"",password:""},validationSchema:u,login:function(e,t){var n=e.username,r=e.password,o=t.setSubmitting;s(""),function(e,t){var a=new FormData;return a.append("email",e),a.append("password",t),fetch("https://webapplicationjwt.azurewebsites.net/api/user",{method:"POST",body:a}).then(D).then((function(e){return e}))}(n,r).then((function(e){if(e){var t=e.jwt;a(t),localStorage.setItem("jwt",t),U.push(m)}}),(function(e){s(JSON.stringify(e)),o(!1)}))},error:i})},C=function(){return{wrapper:{padding:40,display:"flex",flexDirection:"column"},link:{cursor:"pointer","&:hover":{color:"#78D5D3"}}}};Object(i.a)(C)((function(e){var t=e.classes,a=e.currentUser,n=e.setUser,o=e.logout;return r.a.createElement("div",{className:t.wrapper},r.a.createElement(s.c,{history:U},a&&r.a.createElement("a",{onClick:o,className:t.link},"Logout"),r.a.createElement(b,{exact:!0,path:m,component:E,currentUser:a}),r.a.createElement(s.b,{path:u,component:function(){return r.a.createElement(J,{currentUser:a,setUser:n})}})))})),a(88);var I=function(){return r.a.createElement("div",{className:"App"})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(I,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[77,1,2]]]);
//# sourceMappingURL=main.8f248400.chunk.js.map