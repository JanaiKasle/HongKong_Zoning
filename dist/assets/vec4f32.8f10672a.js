function o(){return new Float32Array(4)}function y(t){const n=new Float32Array(4);return n[0]=t[0],n[1]=t[1],n[2]=t[2],n[3]=t[3],n}function r(t,n,_,s){const e=new Float32Array(4);return e[0]=t,e[1]=n,e[2]=_,e[3]=s,e}function w(t,n){return new Float32Array(t,n,4)}function u(){return o()}function c(){return r(1,1,1,1)}function i(){return r(1,0,0,0)}function a(){return r(0,1,0,0)}function f(){return r(0,0,1,0)}function l(){return r(0,0,0,1)}const N=u(),T=c(),A=i(),F=a(),I=f(),O=l();Object.freeze(Object.defineProperty({__proto__:null,create:o,clone:y,fromValues:r,createView:w,zeros:u,ones:c,unitX:i,unitY:a,unitZ:f,unitW:l,ZEROS:N,ONES:T,UNIT_X:A,UNIT_Y:F,UNIT_Z:I,UNIT_W:O},Symbol.toStringTag,{value:"Module"}));export{r,y as t};
