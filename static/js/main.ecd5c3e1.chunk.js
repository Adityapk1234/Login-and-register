(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{34:function(e,t,n){},35:function(e,t,n){},60:function(e,t,n){"use strict";n.r(t);var s=n(0),a=n(28),r=n.n(a),c=(n(34),n(10)),i=(n(35),n(1)),o=function(e){var t=e.setLoginUser;return Object(i.jsxs)("div",{className:"homepage",children:[Object(i.jsx)("h1",{children:"Hello Homepage"}),Object(i.jsx)("div",{children:Object(i.jsx)("input",{type:"button",value:"Show products",className:"btn btn-block"})}),Object(i.jsx)("div",{className:"button",onClick:function(){return t({})},children:"Logout"})]})},l=n(9),j=n(11),u=n(14),d=n.n(u),p=n(2),b=function(e){var t=e.setLoginUser,n=Object(p.f)(),a=Object(s.useState)({email:"",password:""}),r=Object(c.a)(a,2),o=r[0],u=r[1],b=function(e){var t=e.target,n=t.name,s=t.value;u(Object(j.a)(Object(j.a)({},o),{},Object(l.a)({},n,s)))};return Object(i.jsxs)("div",{className:"login",children:[Object(i.jsx)("h1",{children:"Login"}),Object(i.jsx)("input",{type:"text",name:"email",value:o.email,onChange:b,placeholder:"Enter your Email"}),Object(i.jsx)("input",{type:"password",name:"password",value:o.password,onChange:b,placeholder:"Enter your Password"}),Object(i.jsx)("div",{className:"button",onClick:function(){d.a.post("https://login-register-appp.herokuapp.com/login",o).then((function(e){alert(e.data.message),t(e.data.user),n.push("/")}))},children:"Login"}),Object(i.jsx)("div",{children:"or"}),Object(i.jsx)("div",{className:"button",onClick:function(){return n.push("/register")},children:"Register"})]})},h=function(){var e=Object(p.f)(),t=Object(s.useState)({name:"",email:"",password:"",reEnterPassword:""}),n=Object(c.a)(t,2),a=n[0],r=n[1],o=function(e){var t=e.target,n=t.name,s=t.value;r(Object(j.a)(Object(j.a)({},a),{},Object(l.a)({},n,s)))};return Object(i.jsxs)("div",{className:"register",children:[console.log("User",a),Object(i.jsx)("h1",{children:"Register"}),Object(i.jsx)("input",{type:"text",name:"name",value:a.name,placeholder:"Your Name",onChange:o}),Object(i.jsx)("input",{type:"text",name:"email",value:a.email,placeholder:"Your Email",onChange:o}),Object(i.jsx)("input",{type:"password",name:"password",value:a.password,placeholder:"Your Password",onChange:o}),Object(i.jsx)("input",{type:"password",name:"reEnterPassword",value:a.reEnterPassword,placeholder:"Re-enter Password",onChange:o}),Object(i.jsx)("div",{className:"button",onClick:function(){var t=a.name,n=a.email,s=a.password,r=a.reEnterPassword;t&&n&&s&&s===r?d.a.post("https://login-register-appp.herokuapp.com/register",a).then((function(t){alert(t.data.message),e.push("/login")})):alert("invlid input")},children:"Register"}),Object(i.jsx)("div",{children:"or"}),Object(i.jsx)("div",{className:"button",onClick:function(){return e.push("/login")},children:"Login"})]})},O=n(13);var m=function(){var e=Object(s.useState)({}),t=Object(c.a)(e,2),n=t[0],a=t[1];return Object(i.jsx)("div",{className:"App",children:Object(i.jsx)(O.a,{children:Object(i.jsxs)(p.c,{children:[Object(i.jsx)(p.a,{exact:!0,path:"/",children:n&&n._id?Object(i.jsx)(o,{setLoginUser:a}):Object(i.jsx)(b,{setLoginUser:a})}),Object(i.jsx)(p.a,{path:"/login",children:Object(i.jsx)(b,{setLoginUser:a})}),Object(i.jsx)(p.a,{path:"/register",children:Object(i.jsx)(h,{})})]})})})};r.a.render(Object(i.jsx)(m,{}),document.getElementById("root"))}},[[60,1,2]]]);
//# sourceMappingURL=main.ecd5c3e1.chunk.js.map