import{jA as i,jB as l,iS as y,I as o,J as t,K as p,iQ as u,s as d}from"./index.8c0c1e38.js";let e=class extends i(l(u)){constructor(r){super(r),this.resourceInfo=null,this.type="unknown"}initialize(){this.addResolvingPromise(new Promise((r,s)=>{y(()=>{const n=this.resourceInfo&&(this.resourceInfo.layerType||this.resourceInfo.type);let a="Unknown layer type";n&&(a+=" "+n),s(new d("layer:unknown-layer-type",a,{layerType:n}))})}))}read(r,s){super.read({resourceInfo:r},s)}write(){return null}};o([t({readOnly:!0})],e.prototype,"resourceInfo",void 0),o([t({type:["show","hide"]})],e.prototype,"listMode",void 0),o([t({json:{read:!1},readOnly:!0,value:"unknown"})],e.prototype,"type",void 0),e=o([p("esri.layers.UnknownLayer")],e);const w=e;export{w as default};
