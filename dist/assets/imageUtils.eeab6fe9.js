import{I,K as L}from"./index.8c0c1e38.js";import{n as M}from"./BitmapTileContainer.261f16d0.js";const b=t=>{let e=class extends t{attach(){this.view.timeline.record(`${this.layer.title} (BitmapTileLayer) Attach`),this._bitmapView=new M(this._tileInfoView),this.container.addChild(this._bitmapView)}detach(){var i;this.container.removeChild(this._bitmapView),(i=this._bitmapView)==null||i.removeAllChildren()}};return e=I([L("esri.views.2d.layers.BitmapTileLayerView2D")],e),e};function C(t){return t instanceof HTMLImageElement?t.naturalWidth:t.width}function T(t){return t instanceof HTMLImageElement?t.naturalHeight:t.height}function y(t,e,i,o){if(i.level===o.level)return e;const n=t.tileInfo.size,a=t.getTileResolution(i.level),l=t.getTileResolution(o.level);let r=t.getLODInfoAt(o.level);const m=r.getXForColumn(o.col),d=r.getYForRow(o.row);r=t.getLODInfoAt(i.level);const u=r.getXForColumn(i.col),w=r.getYForRow(i.row),s=C(e)/n[0],h=T(e)/n[1],g=Math.round(s*((m-u)/a)),f=Math.round(h*(-(d-w)/a)),v=Math.round(s*n[0]*(l/a)),p=Math.round(h*n[1]*(l/a)),c=V(n);return c.getContext("2d").drawImage(e,g,f,v,p,0,0,n[0],n[1]),c}function V(t){const e=document.createElement("canvas");return[e.width,e.height]=t,e}export{y as n,V as o,b as r};
