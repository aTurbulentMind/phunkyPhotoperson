import{s as W,n as G,r as X}from"../chunks/scheduler.4ce4920c.js";import{S as Y,i as Z,g as d,s as h,h as c,A as R,c as k,j as Q,f as w,k as l,a as T,z as a,E as B,C as I,m as $,n as ee,o as te}from"../chunks/index.39bfe945.js";import"../chunks/paths.2e9cfc8b.js";import{s as J}from"../chunks/supabaseClient.1a6c237a.js";function K(i){let r,p;return{c(){r=d("div"),p=$(i[0]),this.h()},l(n){r=c(n,"DIV",{class:!0});var o=Q(r);p=ee(o,i[0]),o.forEach(w),this.h()},h(){l(r,"class","svelte-kodlbo")},m(n,o){T(n,r,o),a(r,p)},p(n,o){o&1&&te(p,n[0])},d(n){n&&w(r)}}}function se(i){let r,p="Register as a new user",n,o,e,f,U="Name:",E,m,L,N,q,_,x="Email:",g,v,M,P,O,C,F="Password:",S,b,j,A,z,y,H="Register",D,V,u=i[0]&&K(i);return{c(){r=d("h1"),r.textContent=p,n=h(),u&&u.c(),o=h(),e=d("form"),f=d("label"),f.textContent=U,E=h(),m=d("input"),L=h(),N=d("br"),q=h(),_=d("label"),_.textContent=x,g=h(),v=d("input"),M=h(),P=d("br"),O=h(),C=d("label"),C.textContent=F,S=h(),b=d("input"),j=h(),A=d("br"),z=h(),y=d("button"),y.textContent=H,this.h()},l(s){r=c(s,"H1",{class:!0,"data-svelte-h":!0}),R(r)!=="svelte-19er3rl"&&(r.textContent=p),n=k(s),u&&u.l(s),o=k(s),e=c(s,"FORM",{class:!0});var t=Q(e);f=c(t,"LABEL",{for:!0,class:!0,"data-svelte-h":!0}),R(f)!=="svelte-ir8c70"&&(f.textContent=U),E=k(t),m=c(t,"INPUT",{id:!0,type:!0,class:!0}),L=k(t),N=c(t,"BR",{class:!0}),q=k(t),_=c(t,"LABEL",{for:!0,class:!0,"data-svelte-h":!0}),R(_)!=="svelte-1flf0h4"&&(_.textContent=x),g=k(t),v=c(t,"INPUT",{id:!0,type:!0,class:!0}),M=k(t),P=c(t,"BR",{class:!0}),O=k(t),C=c(t,"LABEL",{for:!0,class:!0,"data-svelte-h":!0}),R(C)!=="svelte-bhu94"&&(C.textContent=F),S=k(t),b=c(t,"INPUT",{id:!0,type:!0,class:!0}),j=k(t),A=c(t,"BR",{class:!0}),z=k(t),y=c(t,"BUTTON",{type:!0,class:!0,"data-svelte-h":!0}),R(y)!=="svelte-1s7k2qu"&&(y.textContent=H),t.forEach(w),this.h()},h(){l(r,"class","svelte-kodlbo"),l(f,"for","name"),l(f,"class","svelte-kodlbo"),l(m,"id","name"),l(m,"type","name"),m.required=!0,l(m,"class","svelte-kodlbo"),l(N,"class","svelte-kodlbo"),l(_,"for","email"),l(_,"class","svelte-kodlbo"),l(v,"id","email"),l(v,"type","email"),v.required=!0,l(v,"class","svelte-kodlbo"),l(P,"class","svelte-kodlbo"),l(C,"for","password"),l(C,"class","svelte-kodlbo"),l(b,"id","password"),l(b,"type","password"),b.required=!0,l(b,"class","svelte-kodlbo"),l(A,"class","svelte-kodlbo"),l(y,"type","submit"),l(y,"class","svelte-kodlbo"),l(e,"class","svelte-kodlbo")},m(s,t){T(s,r,t),T(s,n,t),u&&u.m(s,t),T(s,o,t),T(s,e,t),a(e,f),a(e,E),a(e,m),B(m,i[1]),a(e,L),a(e,N),a(e,q),a(e,_),a(e,g),a(e,v),B(v,i[2]),a(e,M),a(e,P),a(e,O),a(e,C),a(e,S),a(e,b),B(b,i[3]),a(e,j),a(e,A),a(e,z),a(e,y),D||(V=[I(m,"input",i[5]),I(v,"input",i[6]),I(b,"input",i[7]),I(e,"submit",i[4])],D=!0)},p(s,[t]){s[0]?u?u.p(s,t):(u=K(s),u.c(),u.m(o.parentNode,o)):u&&(u.d(1),u=null),t&2&&B(m,s[1]),t&4&&v.value!==s[2]&&B(v,s[2]),t&8&&b.value!==s[3]&&B(b,s[3])},i:G,o:G,d(s){s&&(w(r),w(n),w(o),w(e)),u&&u.d(s),D=!1,X(V)}}}function le(i,r,p){let n="",o="",e="",f="";async function U(){const{user:N,session:q,error:_}=await J.auth.signUp({email:o,password:e,options:{data:{display_name:n}}});if(_)console.error(_);else{const{data:x,error:g}=await J.from("main").insert([{name:n,email:o}]);g?console.error(g):(p(0,f="User registered successfully!"),window.location.href="/")}}function E(){n=this.value,p(1,n)}function m(){o=this.value,p(2,o)}function L(){e=this.value,p(3,e)}return i.$$.update=()=>{i.$$.dirty&1&&f&&setTimeout(()=>{p(0,f="")},3e3)},[f,n,o,e,U,E,m,L]}class ie extends Y{constructor(r){super(),Z(this,r,le,se,W,{})}}export{ie as component};
