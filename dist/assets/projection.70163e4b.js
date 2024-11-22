import{a6 as N,fJ as R,e1 as l,gR as _,fU as g,it as O,fV as M,ja as Y,dj as U,jb as b,jc as W,jd as x,aD as h,h as E,il as j,je as V}from"./index.8c0c1e38.js";import{a as z}from"./quatf64.ddec7ef6.js";import{e as k}from"./mat4f64.84d5c445.js";import{i as s,T as i}from"./BufferView.80988ec5.js";import{t as q,r as v,o as L}from"./vec33.70b96c55.js";const A=N.getLogger("esri.geometry.support.meshUtils.normalProjection");function K(r,e,o,a,t){return d(a)?(F(m.TO_PCPF,s.fromTypedArray(r),i.fromTypedArray(e),i.fromTypedArray(o),a,s.fromTypedArray(t)),t):(A.error("Cannot convert spatial reference to PCPF"),t)}function Q(r,e,o,a,t){return d(a)?(F(m.FROM_PCPF,s.fromTypedArray(r),i.fromTypedArray(e),i.fromTypedArray(o),a,s.fromTypedArray(t)),t):(A.error("Cannot convert to spatial reference from PCPF"),t)}function X(r,e,o){return R(r,e,0,o,l(e),0,r.length/3),o}function Z(r,e,o){return R(r,l(o),0,e,o,0,r.length/3),e}function $(r,e,o){if(E(r))return e;const a=i.fromTypedArray(r),t=i.fromTypedArray(e);return q(t,a,o),e}function rr(r,e,o){if(E(r))return e;j(f,o);const a=s.fromTypedArray(r),t=s.fromTypedArray(e);return v(t,a,f),V(f)||L(t,t),e}function er(r,e,o){if(E(r))return e;j(f,o);const a=s.fromTypedArray(r,4*Float32Array.BYTES_PER_ELEMENT),t=s.fromTypedArray(e,4*Float32Array.BYTES_PER_ELEMENT);if(v(t,a,f),V(f)||L(t,t),r!==e)for(let n=3;n<r.length;n+=4)e[n]=r[n];return e}function tr(r,e,o,a,t){if(!d(a))return A.error("Cannot convert spatial reference to PCPF"),t;F(m.TO_PCPF,s.fromTypedArray(r,4*Float32Array.BYTES_PER_ELEMENT),i.fromTypedArray(e),i.fromTypedArray(o),a,s.fromTypedArray(t,4*Float32Array.BYTES_PER_ELEMENT));for(let n=3;n<r.length;n+=4)t[n]=r[n];return t}function or(r,e,o,a,t){if(!d(a))return A.error("Cannot convert to spatial reference from PCPF"),t;F(m.FROM_PCPF,s.fromTypedArray(r,16),i.fromTypedArray(e),i.fromTypedArray(o),a,s.fromTypedArray(t,16));for(let n=3;n<r.length;n+=4)t[n]=r[n];return t}function F(r,e,o,a,t,n){if(!e)return;const C=o.count,P=l(t);if(S(t))for(let y=0;y<C;y++)a.getVec(y,T),e.getVec(y,c),_(P,T,p,P),g(f,p),r===m.FROM_PCPF&&O(f,f),M(c,c,f),n.setVec(y,c);else for(let y=0;y<C;y++){a.getVec(y,T),e.getVec(y,c),_(P,T,p,P),g(f,p);const B=Y(o.get(y,1));let u=Math.cos(B);r===m.TO_PCPF&&(u=1/u),f[0]*=u,f[1]*=u,f[2]*=u,f[3]*=u,f[4]*=u,f[5]*=u,r===m.FROM_PCPF&&O(f,f),M(c,c,f),U(c,c),n.setVec(y,c)}return n}function d(r){return S(r)||w(r)}function S(r){return r.isWGS84||b(r)||W(r)||x(r)}function w(r){return r.isWebMercator}var m;(function(r){r[r.TO_PCPF=0]="TO_PCPF",r[r.FROM_PCPF=1]="FROM_PCPF"})(m||(m={}));const T=h(),c=h(),p=k(),f=z();export{or as L,X as M,Z as O,$ as R,er as V,Q as h,K as j,tr as k,rr as v};
