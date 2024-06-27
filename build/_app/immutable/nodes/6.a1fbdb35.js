import{s as J,n as N,o as K}from"../chunks/scheduler.05aee0d7.js";import{S as Q,i as W,g as b,s as x,h as k,A as q,c as j,j as w,f as p,k as E,a as y,z as v,C as z,m as T,n as I,o as V,D as X}from"../chunks/index.c058c29e.js";import{e as U}from"../chunks/each.652bd72e.js";import{s as Y}from"../chunks/supabaseClient.762653f6.js";function B(i,e,s){const l=i.slice();return l[7]=e[s],l}function Z(i){let e,s="Loading past articles...";return{c(){e=b("p"),e.textContent=s},l(l){e=k(l,"P",{"data-svelte-h":!0}),q(e)!=="svelte-10mmlkd"&&(e.textContent=s)},m(l,t){y(l,e,t)},p:N,d(l){l&&p(e)}}}function $(i){let e,s=U(i[0]),l=[];for(let t=0;t<s.length;t+=1)l[t]=G(B(i,s,t));return{c(){e=b("ul");for(let t=0;t<l.length;t+=1)l[t].c();this.h()},l(t){e=k(t,"UL",{class:!0});var n=w(e);for(let a=0;a<l.length;a+=1)l[a].l(n);n.forEach(p),this.h()},h(){E(e,"class","svelte-o7ejcs")},m(t,n){y(t,e,n);for(let a=0;a<l.length;a+=1)l[a]&&l[a].m(e,null)},p(t,n){if(n&9){s=U(t[0]);let a;for(a=0;a<s.length;a+=1){const h=B(t,s,a);l[a]?l[a].p(h,n):(l[a]=G(h),l[a].c(),l[a].m(e,null))}for(;a<l.length;a+=1)l[a].d(1);l.length=s.length}},d(t){t&&p(e),X(l,t)}}}function G(i){let e,s,l=i[7].text_name+"",t,n,a,h,o,m="Date:",f,c=i[7].date_made+"",r,u,_,d=i[7].short_guts+"",g,D,A,O;function F(){return i[4](i[7])}return{c(){e=b("li"),s=b("button"),t=T(l),a=x(),h=b("p"),o=b("strong"),o.textContent=m,f=x(),r=T(c),u=x(),_=b("p"),g=T(d),D=x(),this.h()},l(P){e=k(P,"LI",{class:!0});var C=w(e);s=k(C,"BUTTON",{class:!0,type:!0,"aria-label":!0});var S=w(s);t=I(S,l),S.forEach(p),a=j(C),h=k(C,"P",{class:!0});var L=w(h);o=k(L,"STRONG",{"data-svelte-h":!0}),q(o)!=="svelte-cxiy68"&&(o.textContent=m),f=j(L),r=I(L,c),L.forEach(p),u=j(C),_=k(C,"P",{});var H=w(_);g=I(H,d),H.forEach(p),D=j(C),C.forEach(p),this.h()},h(){E(s,"class","bordt"),E(s,"type","button"),E(s,"aria-label",n="View details for "+i[7].text_name),E(h,"class","highlight svelte-o7ejcs"),E(e,"class","svelte-o7ejcs")},m(P,C){y(P,e,C),v(e,s),v(s,t),v(e,a),v(e,h),v(h,o),v(h,f),v(h,r),v(e,u),v(e,_),v(_,g),v(e,D),A||(O=z(s,"click",F),A=!0)},p(P,C){i=P,C&1&&l!==(l=i[7].text_name+"")&&V(t,l),C&1&&n!==(n="View details for "+i[7].text_name)&&E(s,"aria-label",n),C&1&&c!==(c=i[7].date_made+"")&&V(r,c),C&1&&d!==(d=i[7].short_guts+"")&&V(g,d)},d(P){P&&p(e),A=!1,O()}}}function M(i){let e,s,l,t,n="Close",a,h,o=i[2]&&R(i);return{c(){e=b("div"),s=b("div"),o&&o.c(),l=x(),t=b("button"),t.textContent=n,this.h()},l(m){e=k(m,"DIV",{class:!0,role:!0});var f=w(e);s=k(f,"DIV",{class:!0});var c=w(s);o&&o.l(c),l=j(c),t=k(c,"BUTTON",{type:!0,"data-svelte-h":!0}),q(t)!=="svelte-x9we5i"&&(t.textContent=n),c.forEach(p),f.forEach(p),this.h()},h(){E(t,"type","button"),E(s,"class","modal-content svelte-o7ejcs"),E(e,"class","modal full-window svelte-o7ejcs"),E(e,"role","presentation")},m(m,f){y(m,e,f),v(e,s),o&&o.m(s,null),v(s,l),v(s,t),a||(h=z(t,"click",i[5]),a=!0)},p(m,f){m[2]?o?o.p(m,f):(o=R(m),o.c(),o.m(s,l)):o&&(o.d(1),o=null)},d(m){m&&p(e),o&&o.d(),a=!1,h()}}}function R(i){let e,s=i[2].text_name+"",l,t,n,a,h="Date:",o,m=i[2].date_made+"",f,c,r,u=i[2].text_guts+"",_;return{c(){e=b("h2"),l=T(s),t=x(),n=b("p"),a=b("strong"),a.textContent=h,o=x(),f=T(m),c=x(),r=b("p"),_=T(u)},l(d){e=k(d,"H2",{});var g=w(e);l=I(g,s),g.forEach(p),t=j(d),n=k(d,"P",{});var D=w(n);a=k(D,"STRONG",{"data-svelte-h":!0}),q(a)!=="svelte-cxiy68"&&(a.textContent=h),o=j(D),f=I(D,m),D.forEach(p),c=j(d),r=k(d,"P",{});var A=w(r);_=I(A,u),A.forEach(p)},m(d,g){y(d,e,g),v(e,l),y(d,t,g),y(d,n,g),v(n,a),v(n,o),v(n,f),y(d,c,g),y(d,r,g),v(r,_)},p(d,g){g&4&&s!==(s=d[2].text_name+"")&&V(l,s),g&4&&m!==(m=d[2].date_made+"")&&V(f,m),g&4&&u!==(u=d[2].text_guts+"")&&V(_,u)},d(d){d&&(p(e),p(t),p(n),p(c),p(r))}}}function ee(i){let e,s="Library of past ideas",l,t,n,a="Check out what I said the other day",h,o;function m(u,_){return u[0].length>0?$:Z}let f=m(i),c=f(i),r=i[1]&&M(i);return{c(){e=b("h1"),e.textContent=s,l=x(),t=b("div"),n=b("h1"),n.textContent=a,h=x(),c.c(),o=x(),r&&r.c(),this.h()},l(u){e=k(u,"H1",{"data-svelte-h":!0}),q(e)!=="svelte-qs4daq"&&(e.textContent=s),l=j(u),t=k(u,"DIV",{class:!0});var _=w(t);n=k(_,"H1",{class:!0,"data-svelte-h":!0}),q(n)!=="svelte-17aoxif"&&(n.textContent=a),h=j(_),c.l(_),o=j(_),r&&r.l(_),_.forEach(p),this.h()},h(){E(n,"class","blog-title svelte-o7ejcs"),E(t,"class","blog-container svelte-o7ejcs")},m(u,_){y(u,e,_),y(u,l,_),y(u,t,_),v(t,n),v(t,h),c.m(t,null),v(t,o),r&&r.m(t,null)},p(u,[_]){f===(f=m(u))&&c?c.p(u,_):(c.d(1),c=f(u),c&&(c.c(),c.m(t,o))),u[1]?r?r.p(u,_):(r=M(u),r.c(),r.m(t,null)):r&&(r.d(1),r=null)},i:N,o:N,d(u){u&&(p(e),p(l),p(t)),c.d(),r&&r.d()}}}function te(i,e,s){let l=[],t=!1,n=null;async function a(){try{const{data:f,error:c}=await Y.from("Allthestuff").select("*").order("id",{ascending:!1}).eq("status","done");if(c){console.error("Error fetching past articles:",c.message);return}s(0,l=f.map(r=>({...r,short_guts:r.text_guts.split(" ").slice(0,50).join(" ")+"..."}))),console.log("Fetched past articles:",l)}catch(f){console.error("Error:",f.message)}}function h(f){s(2,n=f),s(1,t=!0)}return K(a),[l,t,n,h,f=>h(f),()=>s(1,t=!1)]}class oe extends Q{constructor(e){super(),W(this,e,te,ee,J,{})}}export{oe as component};
