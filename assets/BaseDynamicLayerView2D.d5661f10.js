import{a6 as s,ax as p,I as r,J as a,K as m}from"./index.8c0c1e38.js";import{t as n}from"./BitmapContainer.80186de9.js";import{f as h}from"./LayerView2D.804a8022.js";import{S as d}from"./ExportStrategy.4520a6f4.js";import{u as c}from"./LayerView.5d2fee31.js";import{i as y}from"./RefreshableLayerView.81195d18.js";import"./WGLContainer.616c24e0.js";import"./enums.de935fa5.js";import"./pixelUtils.661bd93a.js";import"./utils.5a1da9e7.js";import"./Utils.1a306783.js";import"./number.08b65821.js";import"./enums.05a6ea95.js";import"./Texture.76478d45.js";import"./VertexElementDescriptor.d386088d.js";import"./MaterialKey.97b01fd3.js";import"./alignmentUtils.63b4d661.js";import"./definitions.6dca4f7b.js";import"./VertexArrayObject.658d6977.js";import"./vec4f32.8f10672a.js";import"./ProgramTemplate.2b92d3f9.js";import"./StyleDefinition.5774ff26.js";import"./config.40d47db8.js";import"./GeometryUtils.8166011b.js";import"./earcut.d30cbec0.js";import"./Bitmap.aaac9321.js";const g=s.getLogger("esri.views.2d.layers.BaseDynamicLayerView2D");let t=class extends y(h(c)){update(e){this.strategy.update(e).catch(i=>{p(i)||g.error(i)}),this.notifyChange("updating")}attach(){this._bitmapContainer=new n,this.container.addChild(this._bitmapContainer),this.strategy=new d({container:this._bitmapContainer,fetchSource:this.fetchBitmapData.bind(this),requestUpdate:this.requestUpdate.bind(this)})}detach(){this.strategy.destroy(),this.strategy=null,this.container.removeChild(this._bitmapContainer),this._bitmapContainer.removeAllChildren()}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate()}fetchBitmapData(e,i,o){return this.layer.fetchImage(e,i,o)}async doRefresh(){this.requestUpdate()}isUpdating(){return this.strategy.updating||this.updateRequested}};r([a()],t.prototype,"strategy",void 0),r([a()],t.prototype,"updating",void 0),t=r([m("esri.views.2d.layers.BaseDynamicLayerView2D")],t);const F=t;export{F as default};
