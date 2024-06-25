import{s as B,n as P,i as z,r as D}from"../chunks/scheduler.c352f365.js";import{S as F,i as H,g as b,s as y,h as g,A as E,c as C,j as S,f as v,k as i,a as w,z as p,F as x,C as A,G as O,m as I,n as N,o as j}from"../chunks/index.e8215bcd.js";import{s as T}from"../chunks/supabaseClient.e1a320bf.js";import{g as W}from"../chunks/navigation.0d9ecc61.js";function q(h){let e,a,n="Email:",l,t,r,s,o="Password:",u,d,_,f,k="Login",L,U;return{c(){e=b("form"),a=b("label"),a.textContent=n,l=y(),t=b("input"),r=y(),s=b("label"),s.textContent=o,u=y(),d=b("input"),_=y(),f=b("button"),f.textContent=k,this.h()},l(m){e=g(m,"FORM",{class:!0});var c=S(e);a=g(c,"LABEL",{for:!0,class:!0,"data-svelte-h":!0}),E(a)!=="svelte-1flf0h4"&&(a.textContent=n),l=C(c),t=g(c,"INPUT",{type:!0,id:!0,class:!0}),r=C(c),s=g(c,"LABEL",{for:!0,class:!0,"data-svelte-h":!0}),E(s)!=="svelte-bhu94"&&(s.textContent=o),u=C(c),d=g(c,"INPUT",{type:!0,id:!0,class:!0}),_=C(c),f=g(c,"BUTTON",{type:!0,class:!0,"data-svelte-h":!0}),E(f)!=="svelte-1yamoz0"&&(f.textContent=k),c.forEach(v),this.h()},h(){i(a,"for","email"),i(a,"class","svelte-kodlbo"),i(t,"type","text"),i(t,"id","email"),i(t,"class","svelte-kodlbo"),i(s,"for","password"),i(s,"class","svelte-kodlbo"),i(d,"type","password"),i(d,"id","password"),i(d,"class","svelte-kodlbo"),i(f,"type","submit"),i(f,"class","svelte-kodlbo"),i(e,"class","svelte-kodlbo")},m(m,c){w(m,e,c),p(e,a),p(e,l),p(e,t),x(t,h[1]),p(e,r),p(e,s),p(e,u),p(e,d),x(d,h[2]),p(e,_),p(e,f),L||(U=[A(t,"input",h[4]),A(d,"input",h[5]),A(e,"submit",O(h[3]))],L=!0)},p(m,c){c&2&&t.value!==m[1]&&x(t,m[1]),c&4&&d.value!==m[2]&&x(d,m[2])},d(m){m&&v(e),L=!1,D(U)}}}function G(h){let e,a,n=h[0].email+"",l;return{c(){e=b("h1"),a=I("Welcome back, "),l=I(n),this.h()},l(t){e=g(t,"H1",{class:!0});var r=S(e);a=N(r,"Welcome back, "),l=N(r,n),r.forEach(v),this.h()},h(){i(e,"class","svelte-kodlbo")},m(t,r){w(t,e,r),p(e,a),p(e,l)},p(t,r){r&1&&n!==(n=t[0].email+"")&&j(l,n)},d(t){t&&v(e)}}}function M(h){let e,a="Welcome back,",n,l;function t(o,u){return o[0]?G:q}let r=t(h),s=r(h);return{c(){e=b("h1"),e.textContent=a,n=y(),l=b("div"),s.c(),this.h()},l(o){e=g(o,"H1",{class:!0,"data-svelte-h":!0}),E(e)!=="svelte-i6nxgd"&&(e.textContent=a),n=C(o),l=g(o,"DIV",{class:!0});var u=S(l);s.l(u),u.forEach(v),this.h()},h(){i(e,"class","svelte-kodlbo"),i(l,"class","svelte-kodlbo")},m(o,u){w(o,e,u),w(o,n,u),w(o,l,u),s.m(l,null)},p(o,[u]){r===(r=t(o))&&s?s.p(o,u):(s.d(1),s=r(o),s&&(s.c(),s.m(l,null)))},i:P,o:P,d(o){o&&(v(e),v(n),v(l)),s.d()}}}function R(h,e,a){let n={},l="",t="";const r=(_,f)=>{console.log("Auth state changed:",_,f),a(0,n=f==null?void 0:f.user),n?(console.log("User found:",n),W("/usr_profile")):console.log("No user found")};console.log("Subscribing to auth state changes");const{data:s}=T.auth.onAuthStateChange(r);console.log("Subscribed to auth state changes"),z(()=>{console.log("Unsubscribing from auth state changes"),s!=null&&s.unsubscribe&&(s.unsubscribe(),console.log("Unsubscribed from auth state changes"))});const o=async()=>{console.log("Attempting to log in");try{const{user:_,session:f,error:k}=await T.auth.signInWithPassword({email:l,password:t});if(k)throw console.log("Error during sign in:",k.message),k;_&&(console.log("Login successful, redirecting to user profile"),W("/services"))}catch(_){console.error("Login failed:",_.message)}};function u(){l=this.value,a(1,l)}function d(){t=this.value,a(2,t)}return[n,l,t,o,u,d]}class X extends F{constructor(e){super(),H(this,e,R,M,B,{})}}export{X as component};
