import{a$ as u,N as y,mR as m,e as o,nh as f,h,bk as g,jw as _,bo as S,e2 as w,dB as v,i5 as k,cl as O,n5 as A,I as d,J as p,K as R,ni as b}from"./index.8c0c1e38.js";import{f as $}from"./normalizeUtilsSync.d28d1d52.js";import{u as C}from"./FeatureStore.2ad15df0.js";import{Y as I}from"./QueryEngine.4128ad76.js";import{o as F}from"./queryEngineUtils.d7b0053d.js";import"./PooledRBush.408dfda0.js";import"./optimizedFeatureQueryEngineAdapter.9240cfbe.js";import"./centroid.4a179647.js";import"./QueryEngineCapabilities.c2e9875c.js";import"./timeSupport.8b69fbb9.js";import"./PointSnappingHint.b9c1919f.js";let n=class extends u(y){constructor(e){super(e),this.availability=1,this.sources={multipoint:null,point:null,polygon:null,polyline:null},this.loadedWkids=new Set,this.loadedWkts=new Set,this.pendingAdds=[]}get updating(){return this.updatingHandles.updating}get layer(){return this.layerSource.layer}destroy(){const e=this.pendingAdds;this.pendingAdds.length=0;for(const t of e)t.task.abort();this._mapSources(t=>this._destroySource(t))}initialize(){this.handles.add([this.layer.on("graphic-update",e=>this._onGraphicUpdate(e)),this.updatingHandles.addOnCollectionChange(()=>this.layer.graphics,e=>this._onGraphicsChanged(e))]),this._addMany(this.layer.graphics.toArray())}async fetchCandidates(e,t){const s=await m(this._mapSources(i=>i.queryEngine.executeQueryForSnapping({point:e.coordinateHelper.vectorToPoint(e.point).toJSON(),distance:e.distance,types:e.types,query:o(e.filter)?e.filter.createQuery().toJSON():{where:"1=1"}},t).then(({candidates:a})=>a))),r=s.flat().map(i=>F(i,e.coordinateHelper,e.elevationInfo));return f(e.point,r),r}refresh(){}_onGraphicUpdate(e){switch(e.property){case"geometry":case"visible":this._remove(e.graphic),this._addMany([e.graphic])}}_onGraphicsChanged(e){for(const t of e.removed)this._remove(t);this._addMany(e.added)}_addMany(e){const t=[],s=new Map;for(const r of e)h(r.geometry)||(this._needsInitializeProjection(r.geometry.spatialReference)?(t.push(r.geometry.spatialReference),s.set(r.uid,r)):this._add(r));this._createPendingAdd(t,s)}_createPendingAdd(e,t){if(!e.length)return;const s=g(async a=>{await _(e.map(l=>({source:l,dest:this.spatialReference})),{signal:a}),this._markLoadedSpatialReferences(e);for(const[,l]of t)this._add(l)});this.updatingHandles.addPromise(s.promise);const r={task:s,graphics:t},i=()=>b(this.pendingAdds,r);s.promise.then(i,i),this.pendingAdds.push(r)}_markLoadedSpatialReferences(e){for(const t of e)t.wkid!=null&&this.loadedWkids.add(t.wkid),t.wkt!=null&&this.loadedWkts.add(t.wkt)}_add(e){if(h(e.geometry)||!e.visible)return;let t=e.geometry;if(t.type==="mesh")return;t.type==="extent"&&(t=S.fromExtent(t));const s=this._ensureSource(t.type);if(h(s))return;const r=this._createOptimizedFeature(e.uid,t);o(r)&&s.featureStore.add(r)}_needsInitializeProjection(e){return(e.wkid==null||!this.loadedWkids.has(e.wkid))&&(e.wkt==null||!this.loadedWkts.has(e.wkt))&&!w(e,this.spatialReference)}_createOptimizedFeature(e,t){const s=v($(t),this.spatialReference);return s?new k(O(s,!1,!1),{[c]:e},null,e):null}_ensureSource(e){const t=this.sources[e];if(o(t))return t;const s=this._createSource(e);return this.sources[e]=s,s}_createSource(e){const t=A.toJSON(e),s=new C({geometryType:t,hasZ:!1,hasM:!1});return{featureStore:s,queryEngine:new I({featureStore:s,fields:[{name:c,type:"esriFieldTypeOID",alias:c}],geometryType:t,hasM:!1,hasZ:!1,objectIdField:c,spatialReference:this.spatialReference,scheduler:o(this.view)&&this.view.type==="3d"?this.view.resourceController.scheduler:null}),type:e}}_remove(e){this._mapSources(t=>this._removeFromSource(t,e));for(const t of this.pendingAdds)t.graphics.delete(e.uid),t.graphics.size===0&&t.task.abort()}_removeFromSource(e,t){const s=t.uid;e.featureStore.has(s)&&e.featureStore.removeById(t.uid)}_destroySource(e){e.queryEngine.destroy(),this.sources[e.type]=null}_mapSources(e){const{point:t,polygon:s,polyline:r,multipoint:i}=this.sources,a=[];return o(t)&&a.push(e(t)),o(s)&&a.push(e(s)),o(r)&&a.push(e(r)),o(i)&&a.push(e(i)),a}};d([p({constructOnly:!0})],n.prototype,"spatialReference",void 0),d([p({constructOnly:!0})],n.prototype,"layerSource",void 0),d([p({constructOnly:!0})],n.prototype,"view",void 0),d([p({readOnly:!0})],n.prototype,"updating",null),d([p({readOnly:!0})],n.prototype,"availability",void 0),n=d([R("esri.views.interactive.snapping.featureSources.GraphicsSnappingSource")],n);const c="OBJECTID";export{n as GraphicsSnappingSource};
