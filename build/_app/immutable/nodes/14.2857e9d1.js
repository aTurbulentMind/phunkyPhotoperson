import{s as je,i as De,n as Pe,r as Be,o as ze,f as Ae}from"../chunks/scheduler.4ce4920c.js";import{S as Re,i as Fe,g as r,s as B,h as u,A as pe,c as A,j as x,f as c,E as g,a as re,z as a,G as be,C as U,H as Ue,I as Ge,m as w,n as D,k as v,F as Me,D as He,o as Ve}from"../chunks/index.39bfe945.js";import{e as ve,u as Je,d as Ke}from"../chunks/each.381c87d0.js";import{s as de}from"../chunks/supabaseClient.5a6c42a8.js";function Se(o,t,e){const s=o.slice();return s[29]=t[e],s[31]=e,s}function Oe(o,t,e){const s=o.slice();return s[32]=t[e],s}function Qe(o){let t,e,s,l="-- select a post --",i,n,d,y,f,Q,G,m,N,z,R,I,$,O,C,h,T,F,ee,te,H,V,le,ae,J,K,oe,E,L,k,j,X,M,Y,ie,ue,Z,ce,se,ge="Submit",S,b,fe,_e=ve(o[3]),q=[];for(let p=0;p<_e.length;p+=1)q[p]=qe(Oe(o,_e,p));function me(p,_){return p[0].length>0?Ye:Xe}let he=me(o),W=he(o);return S=Ge(o[10][0]),{c(){t=r("form"),e=r("select"),s=r("option"),s.textContent=l;for(let p=0;p<q.length;p+=1)q[p].c();i=B(),n=r("br"),d=B(),W.c(),y=B(),f=r("label"),Q=w(`Type of text:\r
			`),G=r("label"),m=r("input"),N=w(" Blog"),z=B(),R=r("label"),I=r("input"),$=w(" Gallery"),O=B(),C=r("label"),h=w(`Date Made:\r
			`),T=r("input"),F=B(),ee=r("label"),te=w(`Text Name:\r
			`),H=r("input"),V=B(),le=r("label"),ae=w(`Author:\r
			`),J=r("input"),K=B(),oe=r("label"),E=w(`Categories:\r
			`),L=r("input"),k=B(),j=r("label"),X=w(`Status:\r
			`),M=r("input"),Y=B(),ie=r("label"),ue=w(`Text:\r
			`),Z=r("input"),ce=B(),se=r("button"),se.textContent=ge,this.h()},l(p){t=u(p,"FORM",{});var _=x(t);e=u(_,"SELECT",{});var P=x(e);s=u(P,"OPTION",{"data-svelte-h":!0}),pe(s)!=="svelte-1vp8geh"&&(s.textContent=l);for(let Ie=0;Ie<q.length;Ie+=1)q[Ie].l(P);P.forEach(c),i=A(_),n=u(_,"BR",{}),d=A(_),W.l(_),y=A(_),f=u(_,"LABEL",{});var ne=x(f);Q=D(ne,`Type of text:\r
			`),G=u(ne,"LABEL",{});var ye=x(G);m=u(ye,"INPUT",{type:!0}),N=D(ye," Blog"),ye.forEach(c),z=A(ne),R=u(ne,"LABEL",{});var Ee=x(R);I=u(Ee,"INPUT",{type:!0}),$=D(Ee," Gallery"),Ee.forEach(c),ne.forEach(c),O=A(_),C=u(_,"LABEL",{});var Te=x(C);h=D(Te,`Date Made:\r
			`),T=u(Te,"INPUT",{type:!0}),Te.forEach(c),F=A(_),ee=u(_,"LABEL",{});var Le=x(ee);te=D(Le,`Text Name:\r
			`),H=u(Le,"INPUT",{type:!0,placeholder:!0}),Le.forEach(c),V=A(_),le=u(_,"LABEL",{});var Ce=x(le);ae=D(Ce,`Author:\r
			`),J=u(Ce,"INPUT",{type:!0,placeholder:!0}),Ce.forEach(c),K=A(_),oe=u(_,"LABEL",{});var Ne=x(oe);E=D(Ne,`Categories:\r
			`),L=u(Ne,"INPUT",{type:!0,placeholder:!0}),Ne.forEach(c),k=A(_),j=u(_,"LABEL",{});var ke=x(j);X=D(ke,`Status:\r
			`),M=u(ke,"INPUT",{type:!0,placeholder:!0}),ke.forEach(c),Y=A(_),ie=u(_,"LABEL",{});var xe=x(ie);ue=D(xe,`Text:\r
			`),Z=u(xe,"INPUT",{type:!0,placeholder:!0}),xe.forEach(c),ce=A(_),se=u(_,"BUTTON",{type:!0,"data-svelte-h":!0}),pe(se)!=="svelte-1ou7dtz"&&(se.textContent=ge),_.forEach(c),this.h()},h(){s.__value="",g(s,s.__value),o[1].id===void 0&&De(()=>o[19].call(e)),v(m,"type","radio"),m.__value="1",g(m,m.__value),v(I,"type","radio"),I.__value="2",g(I,I.__value),v(T,"type","date"),T.required=!0,v(H,"type","text"),v(H,"placeholder","Name of text"),H.required=!0,v(J,"type","text"),v(J,"placeholder","Name of author"),J.required=!0,v(L,"type","text"),v(L,"placeholder","Categories"),L.required=!0,v(M,"type","text"),v(M,"placeholder","Status"),M.required=!0,v(Z,"type","text"),v(Z,"placeholder","Text guts"),Z.required=!0,v(se,"type","submit"),S.p(m,I)},m(p,_){re(p,t,_),a(t,e),a(e,s);for(let P=0;P<q.length;P+=1)q[P]&&q[P].m(e,null);be(e,o[1].id,!0),a(t,i),a(t,n),a(t,d),W.m(t,null),a(t,y),a(t,f),a(f,Q),a(f,G),a(G,m),m.checked=m.__value===o[1].type_of_text,a(G,N),a(f,z),a(f,R),a(R,I),I.checked=I.__value===o[1].type_of_text,a(R,$),a(t,O),a(t,C),a(C,h),a(C,T),g(T,o[1].date_made),a(t,F),a(t,ee),a(ee,te),a(ee,H),g(H,o[1].text_name),a(t,V),a(t,le),a(le,ae),a(le,J),g(J,o[1].author),a(t,K),a(t,oe),a(oe,E),a(oe,L),g(L,o[1].categories),a(t,k),a(t,j),a(j,X),a(j,M),g(M,o[1].status),a(t,Y),a(t,ie),a(ie,ue),a(ie,Z),g(Z,o[1].text_guts),a(t,ce),a(t,se),b||(fe=[U(e,"change",o[19]),U(e,"change",o[5]),U(m,"change",o[21]),U(I,"change",o[22]),U(T,"input",o[23]),U(H,"input",o[24]),U(J,"input",o[25]),U(L,"input",o[26]),U(M,"input",o[27]),U(Z,"input",o[28]),U(t,"submit",Me(o[4]))],b=!0)},p(p,_){if(_[0]&8){_e=ve(p[3]);let P;for(P=0;P<_e.length;P+=1){const ne=Oe(p,_e,P);q[P]?q[P].p(ne,_):(q[P]=qe(ne),q[P].c(),q[P].m(e,null))}for(;P<q.length;P+=1)q[P].d(1);q.length=_e.length}_[0]&10&&be(e,p[1].id),he===(he=me(p))&&W?W.p(p,_):(W.d(1),W=he(p),W&&(W.c(),W.m(t,y))),_[0]&10&&(m.checked=m.__value===p[1].type_of_text),_[0]&10&&(I.checked=I.__value===p[1].type_of_text),_[0]&10&&g(T,p[1].date_made),_[0]&10&&H.value!==p[1].text_name&&g(H,p[1].text_name),_[0]&10&&J.value!==p[1].author&&g(J,p[1].author),_[0]&10&&L.value!==p[1].categories&&g(L,p[1].categories),_[0]&10&&M.value!==p[1].status&&g(M,p[1].status),_[0]&10&&Z.value!==p[1].text_guts&&g(Z,p[1].text_guts)},d(p){p&&c(t),He(q,p),W.d(),S.r(),b=!1,Be(fe)}}}function We(o){let t,e,s,l,i,n,d,y,f,Q,G,m,N,z,R,I,$,O,C,h,T,F,ee,te,H,V,le,ae,J,K,oe,E,L,k,j,X,M,Y,ie,ue,Z="Submit",ce,se,ge;return ce=Ge(o[10][0]),{c(){t=r("form"),e=r("label"),s=w(`Type of text:\r
			`),l=r("label"),i=r("input"),n=w(" Blog"),d=B(),y=r("label"),f=r("input"),Q=w(" Gallery"),G=B(),m=r("label"),N=w(`Images:\r
			`),z=r("input"),R=B(),I=r("label"),$=w(`Date Made:\r
			`),O=r("input"),C=B(),h=r("label"),T=w(`Text Name:\r
			`),F=r("input"),ee=B(),te=r("label"),H=w(`Author:\r
			`),V=r("input"),le=B(),ae=r("label"),J=w(`Categories:\r
			`),K=r("input"),oe=B(),E=r("label"),L=w(`Status:\r
			`),k=r("input"),j=B(),X=r("label"),M=w(`Text:\r
			`),Y=r("input"),ie=B(),ue=r("button"),ue.textContent=Z,this.h()},l(S){t=u(S,"FORM",{});var b=x(t);e=u(b,"LABEL",{});var fe=x(e);s=D(fe,`Type of text:\r
			`),l=u(fe,"LABEL",{});var _e=x(l);i=u(_e,"INPUT",{type:!0}),n=D(_e," Blog"),_e.forEach(c),d=A(fe),y=u(fe,"LABEL",{});var q=x(y);f=u(q,"INPUT",{type:!0}),Q=D(q," Gallery"),q.forEach(c),fe.forEach(c),G=A(b),m=u(b,"LABEL",{});var me=x(m);N=D(me,`Images:\r
			`),z=u(me,"INPUT",{type:!0,id:!0}),me.forEach(c),R=A(b),I=u(b,"LABEL",{});var he=x(I);$=D(he,`Date Made:\r
			`),O=u(he,"INPUT",{type:!0}),he.forEach(c),C=A(b),h=u(b,"LABEL",{});var W=x(h);T=D(W,`Text Name:\r
			`),F=u(W,"INPUT",{type:!0,placeholder:!0}),W.forEach(c),ee=A(b),te=u(b,"LABEL",{});var p=x(te);H=D(p,`Author:\r
			`),V=u(p,"INPUT",{type:!0,placeholder:!0}),p.forEach(c),le=A(b),ae=u(b,"LABEL",{});var _=x(ae);J=D(_,`Categories:\r
			`),K=u(_,"INPUT",{type:!0,placeholder:!0}),_.forEach(c),oe=A(b),E=u(b,"LABEL",{});var P=x(E);L=D(P,`Status:\r
			`),k=u(P,"INPUT",{type:!0,placeholder:!0}),P.forEach(c),j=A(b),X=u(b,"LABEL",{});var ne=x(X);M=D(ne,`Text:\r
			`),Y=u(ne,"INPUT",{type:!0,placeholder:!0}),ne.forEach(c),ie=A(b),ue=u(b,"BUTTON",{type:!0,"data-svelte-h":!0}),pe(ue)!=="svelte-1ou7dtz"&&(ue.textContent=Z),b.forEach(c),this.h()},h(){v(i,"type","radio"),i.__value="1",g(i,i.__value),v(f,"type","radio"),f.__value="2",g(f,f.__value),v(z,"type","file"),v(z,"id","image-upload"),z.multiple=!0,v(O,"type","date"),O.required=!0,v(F,"type","text"),v(F,"placeholder","Name of text"),F.required=!0,v(V,"type","text"),v(V,"placeholder","Name of author"),V.required=!0,v(K,"type","text"),v(K,"placeholder","Categories"),K.required=!0,v(k,"type","text"),v(k,"placeholder","Status"),k.required=!0,v(Y,"type","text"),v(Y,"placeholder","Text guts"),Y.required=!0,v(ue,"type","submit"),ce.p(i,f)},m(S,b){re(S,t,b),a(t,e),a(e,s),a(e,l),a(l,i),i.checked=i.__value===o[1].type_of_text,a(l,n),a(e,d),a(e,y),a(y,f),f.checked=f.__value===o[1].type_of_text,a(y,Q),a(t,G),a(t,m),a(m,N),a(m,z),a(t,R),a(t,I),a(I,$),a(I,O),g(O,o[1].date_made),a(t,C),a(t,h),a(h,T),a(h,F),g(F,o[1].text_name),a(t,ee),a(t,te),a(te,H),a(te,V),g(V,o[1].author),a(t,le),a(t,ae),a(ae,J),a(ae,K),g(K,o[1].categories),a(t,oe),a(t,E),a(E,L),a(E,k),g(k,o[1].status),a(t,j),a(t,X),a(X,M),a(X,Y),g(Y,o[1].text_guts),a(t,ie),a(t,ue),se||(ge=[U(i,"change",o[9]),U(f,"change",o[11]),U(z,"change",o[12]),U(O,"input",o[13]),U(F,"input",o[14]),U(V,"input",o[15]),U(K,"input",o[16]),U(k,"input",o[17]),U(Y,"input",o[18]),U(t,"submit",Me(o[4]))],se=!0)},p(S,b){b[0]&10&&(i.checked=i.__value===S[1].type_of_text),b[0]&10&&(f.checked=f.__value===S[1].type_of_text),b[0]&10&&g(O,S[1].date_made),b[0]&10&&F.value!==S[1].text_name&&g(F,S[1].text_name),b[0]&10&&V.value!==S[1].author&&g(V,S[1].author),b[0]&10&&K.value!==S[1].categories&&g(K,S[1].categories),b[0]&10&&k.value!==S[1].status&&g(k,S[1].status),b[0]&10&&Y.value!==S[1].text_guts&&g(Y,S[1].text_guts)},d(S){S&&c(t),ce.r(),se=!1,Be(ge)}}}function qe(o){let t,e=o[32].text_name+"",s,l;return{c(){t=r("option"),s=w(e),this.h()},l(i){t=u(i,"OPTION",{});var n=x(t);s=D(n,e),n.forEach(c),this.h()},h(){t.__value=l=o[32].id,g(t,t.__value)},m(i,n){re(i,t,n),a(t,s)},p(i,n){n[0]&8&&e!==(e=i[32].text_name+"")&&Ve(s,e),n[0]&8&&l!==(l=i[32].id)&&(t.__value=l,g(t,t.__value))},d(i){i&&c(t)}}}function Xe(o){let t,e="No images found for this post.";return{c(){t=r("p"),t.textContent=e},l(s){t=u(s,"P",{"data-svelte-h":!0}),pe(t)!=="svelte-my6qa8"&&(t.textContent=e)},m(s,l){re(s,t,l)},p:Pe,d(s){s&&c(t)}}}function Ye(o){let t,e=[],s=new Map,l=ve(o[0]);const i=n=>n[29].id;for(let n=0;n<l.length;n+=1){let d=Se(o,l,n),y=i(d);s.set(y,e[n]=we(y,d))}return{c(){t=r("div");for(let n=0;n<e.length;n+=1)e[n].c()},l(n){t=u(n,"DIV",{});var d=x(t);for(let y=0;y<e.length;y+=1)e[y].l(d);d.forEach(c)},m(n,d){re(n,t,d);for(let y=0;y<e.length;y+=1)e[y]&&e[y].m(t,null)},p(n,d){d[0]&65&&(l=ve(n[0]),e=Je(e,d,i,1,n,l,s,t,Ke,we,null,Se))},d(n){n&&c(t);for(let d=0;d<e.length;d+=1)e[d].d()}}}function we(o,t){let e,s,l,i,n,d="Delete",y,f,Q;function G(){return t[20](t[29])}return{key:o,first:null,c(){e=r("div"),s=r("img"),i=B(),n=r("button"),n.textContent=d,y=B(),this.h()},l(m){e=u(m,"DIV",{});var N=x(e);s=u(N,"IMG",{src:!0,alt:!0}),i=A(N),n=u(N,"BUTTON",{"data-svelte-h":!0}),pe(n)!=="svelte-108z1f4"&&(n.textContent=d),y=A(N),N.forEach(c),this.h()},h(){Ae(s.src,l=t[29].url)||v(s,"src",l),v(s,"alt","Vaporwave"),this.first=e},m(m,N){re(m,e,N),a(e,s),a(e,i),a(e,n),a(e,y),f||(Q=U(n,"click",G),f=!0)},p(m,N){t=m,N[0]&1&&!Ae(s.src,l=t[29].url)&&v(s,"src",l)},d(m){m&&c(e),f=!1,Q()}}}function Ze(o){let t,e="Hello friend.",s,l,i,n="-- select an operation --",d,y="New Post",f,Q="Modify Existing",G,m,N,z="Logout",R,I;function $(h,T){if(h[2]==="new")return We;if(h[2]==="modify")return Qe}let O=$(o),C=O&&O(o);return{c(){t=r("h1"),t.textContent=e,s=B(),l=r("select"),i=r("option"),i.textContent=n,d=r("option"),d.textContent=y,f=r("option"),f.textContent=Q,G=B(),C&&C.c(),m=B(),N=r("button"),N.textContent=z,this.h()},l(h){t=u(h,"H1",{"data-svelte-h":!0}),pe(t)!=="svelte-113tlj4"&&(t.textContent=e),s=A(h),l=u(h,"SELECT",{});var T=x(l);i=u(T,"OPTION",{"data-svelte-h":!0}),pe(i)!=="svelte-1xpsd2e"&&(i.textContent=n),d=u(T,"OPTION",{"data-svelte-h":!0}),pe(d)!=="svelte-1oaja4q"&&(d.textContent=y),f=u(T,"OPTION",{"data-svelte-h":!0}),pe(f)!=="svelte-wyksxl"&&(f.textContent=Q),T.forEach(c),G=A(h),C&&C.l(h),m=A(h),N=u(h,"BUTTON",{"data-svelte-h":!0}),pe(N)!=="svelte-18t49m"&&(N.textContent=z),this.h()},h(){i.__value="",g(i,i.__value),d.__value="new",g(d,d.__value),f.__value="modify",g(f,f.__value),o[2]===void 0&&De(()=>o[8].call(l))},m(h,T){re(h,t,T),re(h,s,T),re(h,l,T),a(l,i),a(l,d),a(l,f),be(l,o[2],!0),re(h,G,T),C&&C.m(h,T),re(h,m,T),re(h,N,T),R||(I=[U(l,"change",o[8]),U(N,"click",o[7])],R=!0)},p(h,T){T[0]&4&&be(l,h[2]),O===(O=$(h))&&C?C.p(h,T):(C&&C.d(1),C=O&&O(h),C&&(C.c(),C.m(m.parentNode,m)))},i:Pe,o:Pe,d(h){h&&(c(t),c(s),c(l),c(G),c(m),c(N)),C&&C.d(h),R=!1,Be(I)}}}function $e(o,t,e){let s=[],l={id:"",date_made:"",text_name:"",author:"",categories:"",status:"",text_guts:"",type_of_text:"",images:[]},i="",n=[];ze(async()=>{const{data:E,error:L}=await de.from("Allthestuff").select("*");L?console.error("Error:",L.message):e(3,n=E)});async function d(){const E={date_made:l.date_made,text_name:l.text_name,author:l.author,categories:l.categories,status:l.status,text_guts:l.text_guts,type_of_text:l.type_of_text};if(i==="new"){const{data:L,error:k}=await de.from("Allthestuff").insert([E]);if(k?console.error("Error:",k.message):console.log("Data:",L),l.images&&l.images.length>0)for(const j of l.images){const X=`${l.text_name}/${j.name}`,{error:M}=await de.storage.from("Gallery").upload(X,j);M?console.error("Error uploading image:",M.message):console.log(`Successfully uploaded ${j.name}`)}}else if(i==="modify"){const{data:L,error:k}=await de.from("Allthestuff").update(E).match({id:l.id});k?console.error("Error:",k.message):console.log("Data:",L),location.reload()}}async function y(){const E=n.find(L=>L.id===l.id);if(E){e(1,l={...l,date_made:E.date_made,text_name:E.text_name,author:E.author,categories:E.categories,status:E.status,text_guts:E.text_guts,type_of_text:E.type_of_text.toString()});const{data:L,error:k}=await de.storage.from("Gallery").list(`${l.text_name}/`,{limit:100});if(k){console.error("Error fetching images:",k.message);return}L&&L.length>0?e(0,s=L.map((j,X)=>{const M=`https://adgdwehuxdddcwmfhudx.supabase.co/storage/v1/object/public/Gallery/${l.text_name}/${j.name}`;return{id:X,url:M}})):e(0,s=[])}}async function f(E){const L=E.split("/").pop(),{error:k}=await de.storage.from("Gallery").remove([`${l.text_name}/${L}`]);k?console.error("Error deleting image:",k.message):(e(0,s=s.filter(j=>j.url!==E)),console.log(`Successfully deleted ${L}`))}async function Q(){const{error:E}=await de.auth.signOut();E?console.error("Error logging out:",E.message):console.log("Successfully logged out")}const G=[[]];function m(){i=Ue(this),e(2,i)}function N(){l.type_of_text=this.__value,e(1,l),e(3,n)}function z(){l.type_of_text=this.__value,e(1,l),e(3,n)}function R(){l.images=this.files,e(1,l),e(3,n)}function I(){l.date_made=this.value,e(1,l),e(3,n)}function $(){l.text_name=this.value,e(1,l),e(3,n)}function O(){l.author=this.value,e(1,l),e(3,n)}function C(){l.categories=this.value,e(1,l),e(3,n)}function h(){l.status=this.value,e(1,l),e(3,n)}function T(){l.text_guts=this.value,e(1,l),e(3,n)}function F(){l.id=Ue(this),e(1,l),e(3,n)}const ee=E=>f(E.url);function te(){l.type_of_text=this.__value,e(1,l),e(3,n)}function H(){l.type_of_text=this.__value,e(1,l),e(3,n)}function V(){l.date_made=this.value,e(1,l),e(3,n)}function le(){l.text_name=this.value,e(1,l),e(3,n)}function ae(){l.author=this.value,e(1,l),e(3,n)}function J(){l.categories=this.value,e(1,l),e(3,n)}function K(){l.status=this.value,e(1,l),e(3,n)}function oe(){l.text_guts=this.value,e(1,l),e(3,n)}return[s,l,i,n,d,y,f,Q,m,N,G,z,R,I,$,O,C,h,T,F,ee,te,H,V,le,ae,J,K,oe]}class ot extends Re{constructor(t){super(),Fe(this,t,$e,Ze,je,{},null,[-1,-1])}}export{ot as component};
