import{s as z,n as b}from"../chunks/scheduler.05aee0d7.js";import{S as G,i as H,g as p,s as y,m as E,h as v,j as q,A as k,c as S,n as A,f as O,k as i,a as I,z as s,o as w}from"../chunks/index.c058c29e.js";function N(u){let t,a,h="Oops!",c,l,_=u[0].status+"",m,C,f=u[0].message+"",d,g,o,P="The page you're looking for doesn't exist.",j,r,T="Go back home";return{c(){t=p("section"),a=p("h2"),a.textContent=h,c=y(),l=p("p"),m=E(_),C=E(" - "),d=E(f),g=y(),o=p("p"),o.textContent=P,j=y(),r=p("a"),r.textContent=T,this.h()},l(n){t=v(n,"SECTION",{id:!0,class:!0});var e=q(t);a=v(e,"H2",{class:!0,"data-svelte-h":!0}),k(a)!=="svelte-1aewxhg"&&(a.textContent=h),c=S(e),l=v(e,"P",{class:!0});var x=q(l);m=A(x,_),C=A(x," - "),d=A(x,f),x.forEach(O),g=S(e),o=v(e,"P",{class:!0,"data-svelte-h":!0}),k(o)!=="svelte-29llpm"&&(o.textContent=P),j=S(e),r=v(e,"A",{href:!0,class:!0,"data-svelte-h":!0}),k(r)!=="svelte-11tu1n7"&&(r.textContent=T),e.forEach(O),this.h()},h(){i(a,"class","svelte-18ujlr3"),i(l,"class","svelte-18ujlr3"),i(o,"class","svelte-18ujlr3"),i(r,"href","/"),i(r,"class","svelte-18ujlr3"),i(t,"id","error"),i(t,"class","svelte-18ujlr3")},m(n,e){I(n,t,e),s(t,a),s(t,c),s(t,l),s(l,m),s(l,C),s(l,d),s(t,g),s(t,o),s(t,j),s(t,r)},p(n,[e]){e&1&&_!==(_=n[0].status+"")&&w(m,_),e&1&&f!==(f=n[0].message+"")&&w(d,f)},i:b,o:b,d(n){n&&O(t)}}}function B(u,t,a){let{error:h}=t;return u.$$set=c=>{"error"in c&&a(0,h=c.error)},[h]}class J extends G{constructor(t){super(),H(this,t,B,N,z,{error:0})}}export{J as component};