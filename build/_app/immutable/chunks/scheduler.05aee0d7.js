function k(){}function w(t,n){for(const e in n)t[e]=n[e];return t}function j(t){return t()}function D(){return Object.create(null)}function E(t){t.forEach(j)}function q(t){return typeof t=="function"}function F(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}let f;function P(t,n){return t===n?!0:(f||(f=document.createElement("a")),f.href=n,t===f.href)}function S(t){return Object.keys(t).length===0}function U(t,n,e,r){if(t){const o=b(t,n,e,r);return t[0](o)}}function b(t,n,e,r){return t[1]&&r?w(e.ctx.slice(),t[1](r(n))):e.ctx}function A(t,n,e,r){if(t[2]&&r){const o=t[2](r(e));if(n.dirty===void 0)return o;if(typeof o=="object"){const l=[],_=Math.max(n.dirty.length,o.length);for(let s=0;s<_;s+=1)l[s]=n.dirty[s]|o[s];return l}return n.dirty|o}return n.dirty}function B(t,n,e,r,o,l){if(o){const _=b(n,e,r,l);t.p(_,o)}}function C(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let r=0;r<e;r++)n[r]=-1;return n}return-1}function G(t){return t??""}function H(t){return t&&q(t.destroy)?t.destroy:k}let i;function d(t){i=t}function g(){if(!i)throw new Error("Function called outside component initialization");return i}function I(t){g().$$.on_mount.push(t)}function J(t){g().$$.after_update.push(t)}function K(t){g().$$.on_destroy.push(t)}const a=[],y=[];let u=[];const m=[],x=Promise.resolve();let p=!1;function v(){p||(p=!0,x.then(z))}function L(){return v(),x}function O(t){u.push(t)}const h=new Set;let c=0;function z(){if(c!==0)return;const t=i;do{try{for(;c<a.length;){const n=a[c];c++,d(n),M(n.$$)}}catch(n){throw a.length=0,c=0,n}for(d(null),a.length=0,c=0;y.length;)y.pop()();for(let n=0;n<u.length;n+=1){const e=u[n];h.has(e)||(h.add(e),e())}u.length=0}while(a.length);for(;m.length;)m.pop()();p=!1,h.clear(),d(t)}function M(t){if(t.fragment!==null){t.update(),E(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(O)}}function N(t){const n=[],e=[];u.forEach(r=>t.indexOf(r)===-1?n.push(r):e.push(r)),e.forEach(r=>r()),u=n}export{J as a,y as b,U as c,A as d,G as e,P as f,C as g,K as h,O as i,H as j,q as k,D as l,z as m,k as n,I as o,S as p,N as q,E as r,F as s,L as t,B as u,i as v,d as w,j as x,a as y,v as z};
