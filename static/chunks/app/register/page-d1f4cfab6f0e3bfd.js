(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[11],{7164:function(e,t,a){Promise.resolve().then(a.bind(a,13598))},13598:function(e,t,a){"use strict";a.r(t);var n=a(3827),s=a(20703),l=a(64090);a(95577);var r=a(985),o=a(47907);t.default=()=>{let[e,t]=(0,l.useState)(""),[a,i]=(0,l.useState)(""),[c,u]=(0,l.useState)(""),[d,h]=(0,l.useState)(""),[p,g]=(0,l.useState)(!1),[v,x]=(0,l.useState)(null),f=(0,o.useRouter)(),j={fullName:e,username:a,email:c,password:d,isCreator:p},m=async()=>{try{let e=await r.g8.post("auth/register",j);201===e.status&&f.push("/login")}catch(e){console.log(e)}};return console.log(j),(0,n.jsxs)("div",{className:"login",children:[(0,n.jsx)("div",{className:"top",children:(0,n.jsx)("div",{className:"wrapper",children:(0,n.jsx)(s.default,{className:"logo",width:100,height:100,src:"/assets/logo/logo.png",alt:""})})}),(0,n.jsx)("div",{className:"container",children:(0,n.jsxs)("form",{children:[(0,n.jsx)("h1",{children:"Sign Up"}),(0,n.jsx)("input",{type:"text",placeholder:"Fullname",onChange:e=>t(e.target.value)}),(0,n.jsx)("input",{type:"text",placeholder:"Username",onChange:e=>i(e.target.value)}),(0,n.jsx)("input",{type:"email",placeholder:"Email",onChange:e=>u(e.target.value)}),(0,n.jsxs)("select",{className:"",onChange:e=>g(e.target.value),children:[(0,n.jsx)("option",{defaultValue:"yes",value:"",children:"Content Creator?"}),(0,n.jsx)("option",{value:!0,children:"Yes"}),(0,n.jsx)("option",{value:!1,children:"No"})]}),(0,n.jsx)("input",{type:"password",placeholder:"Password",onChange:e=>h(e.target.value)}),(0,n.jsx)("p",{className:"loginButton text-center flex items-center justify-center",onClick:t=>{t.preventDefault,a&&c&&e&&d?m():x("All fields are required")},children:"Sign Up"}),(0,n.jsxs)("span",{children:["Already have an account? ",(0,n.jsx)("b",{children:"Login"})]})]})})]})}},985:function(e,t,a){"use strict";a.d(t,{JW:function(){return o},WG:function(){return u},g8:function(){return c}});var n,s,l,r=a(7908);let o="http://localhost:5000/api/",i=JSON.parse(null===(s=window)||void 0===s?void 0:null===(n=s.localStorage)||void 0===n?void 0:n.getItem("persist:root"))?null===(l=JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).info)||void 0===l?void 0:l.accessToken:"",c=r.Z.create({baseURL:o}),u=r.Z.create({baseURL:o,headers:{token:"Bearer ".concat(i)}})},95577:function(){}},function(e){e.O(0,[18,703,971,69,744],function(){return e(e.s=7164)}),_N_E=e.O()}]);