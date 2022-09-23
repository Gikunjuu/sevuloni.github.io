(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[418],{3418:function(t,e,i){"use strict";i.r(e),i.d(e,{default:function(){return S}});var s=i(5893),n=i(6265),r=i(7294),a=i(8117),o=i(4121),c=i(3975),h=i(2212),u=i(4047),p=i(2700),l=function(){function t(e){(0,u.Z)(this,t),this.position=e.clone(),this.previous=e.clone(),this.original=e.clone(),this.pinned=!1,this.setupPhysics()}return(0,p.Z)(t,[{key:"setMass",value:function(t){this.mass=t,this.invMass=1/this.mass}},{key:"setPinned",value:function(t){this.pinned=t}},{key:"setupPhysics",value:function(){this.drag=.97,this.acceleration=new h.Vector3(0,0,0),this.tmp=new h.Vector3,this.tmp2=new h.Vector3}},{key:"addForce",value:function(t){this.tmp2.copy(t),this.acceleration.add(this.tmp2)}},{key:"integrate",value:function(t){var e=this.tmp.subVectors(this.position,this.previous);e.multiplyScalar(this.drag).add(this.position),e.add(this.acceleration.multiplyScalar(t*t)),this.tmp=this.previous,this.previous=this.position,this.position=e,this.acceleration.set(0,0,0)}}]),t}(),f=function(){function t(e,i,s){(0,u.Z)(this,t),this.xSegments=e||10,this.ySegments=i||10,this.distance=s||25,this.windEnabled=!0,this.setupPhysics(),this.createGeometryFunction(),this.createParticles(),this.createConstraints()}return(0,p.Z)(t,[{key:"setupPhysics",value:function(){this.mass=1,this.gravityForce=new h.Vector3(0,-981*1.4,0).multiplyScalar(this.mass),this.windStrength=5,this.windForce=new h.Vector3,this.tmpForce=new h.Vector3,this.diff=new h.Vector3}},{key:"createGeometryFunction",value:function(){var t=this.xSegments,e=this.ySegments,i=this.distance,s=t*i,n=e*i;this.parametricGeometryFunc=function(t,e,i){i.x=(t-.5)*s,i.y=(e+.5)*n,i.z=0}}},{key:"createParticles",value:function(){this.particles=[];for(var t=0;t<=this.ySegments;t++)for(var e=0;e<=this.xSegments;e++){var i=new h.Vector3(0,0,0);this.parametricGeometryFunc(e/this.xSegments,t/this.ySegments,i);var s=new l(i);s.setMass(this.mass),s.setPinned(e===this.xSegments),this.particles.push(s)}}},{key:"createConstraints",value:function(){var t=this;this.constraints=[];var e,i,s=function(e,i){return t.particles[e+i*(t.xSegments+1)]};for(i=0;i<this.ySegments;i++)for(e=0;e<this.xSegments;e++)this.constraints.push([s(e,i),s(e,i+1),this.distance]),this.constraints.push([s(e,i),s(e+1,i),this.distance]);for(e=this.xSegments,i=0;i<this.ySegments;i++)this.constraints.push([s(e,i),s(e,i+1),this.distance]);for(i=this.ySegments,e=0;e<this.xSegments;e++)this.constraints.push([s(e,i),s(e+1,i),this.distance])}},{key:"toGeometryArgs",value:function(){return[this.parametricGeometryFunc,this.xSegments,this.ySegments]}},{key:"getWidth",value:function(){return this.xSegments*this.distance}},{key:"getHeight",value:function(){return this.ySegments*this.distance}},{key:"updateWindForce",value:function(t){var e=Date.now();this.windStrength=20*Math.cos(e/7e3)+40,this.windForce.set(Math.sin(e/2e3),Math.cos(e/3e3),Math.sin(e/1e3)),this.windForce.normalize().multiplyScalar(this.windStrength)}},{key:"applyAerodynamics",value:function(t,e){var i=this;this.particles.forEach((function(e){e.addForce(i.gravityForce),e.integrate(t)}))}},{key:"fixPinned",value:function(){for(var t=[0,1,2,3,4,5,6,7,8,9,10],e=0;e<t.length;e++){var i=t[e],s=this.particles[i];s.position.copy(s.original),s.previous.copy(s.original)}}},{key:"satisfyConstraints",value:function(){var t=this;this.constraints.forEach((function(e){var i=(0,o.Z)(e,3),s=i[0],n=i[1],r=i[2];t.diff.subVectors(n.position,s.position);var a=t.diff.length();if(0!==a){var c=t.diff.multiplyScalar(1-r/a).multiplyScalar(.5);s.position.add(c),n.position.sub(c)}}))}},{key:"applyMouseEffect",value:function(t,e){for(var i=0,s=this.particles.length;i<s;i++){var n=this.particles[i].position;this.diff.subVectors(n,t),this.diff.length()<e&&(this.diff.normalize().multiplyScalar(e),n.copy(t).add(this.diff))}}},{key:"update",value:function(t,e,i,s){this.updateWindForce(t),this.applyAerodynamics(t,e),this.satisfyConstraints(),this.fixPinned(),this.applyMouseEffect(i,s)}}]),t}(),d=function(t){var e=t.position,i=(t.clothSrc,(0,r.useState)(null)),n=i[0],a=i[1],u=(0,c.Ky)(),p=u.mouse,l=u.viewport,d=(0,c.U2)(h.TextureLoader,["/images/facades.jpg"]),y=(0,o.Z)(d,1)[0],m=(0,r.useRef)(),g=(0,r.useRef)();return(0,r.useEffect)((function(){a(new f(10,10))}),[]),(0,c.xQ)((function(){if(n&&g.current){var t=p.x*l.width/2,e=p.y*l.height/2,i=new h.Vector3(t,e,-25);n.update(.018,g.current,i,30);for(var s=n.particles,r=0,a=s.length;r<a;r++){var o=s[r].position;g.current.attributes.position.setXYZ(r,o.x,o.y,o.z)}g.current.attributes.position.needsUpdate=!0,g.current.computeFaceNormals(),g.current.computeVertexNormals(),g.current.computeBoundingSphere(),g.current.normalsNeedUpdate=!0,g.current.verticesNeedUpdate=!0}})),n?(y&&(y.anisotropy=16),(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)("group",{position:e,children:[(0,s.jsxs)("mesh",{ref:m,castShadow:!0,children:[(0,s.jsx)("parametricGeometry",{attach:"geometry",args:n.toGeometryArgs(),ref:g,dynamic:!0}),(0,s.jsx)("meshLambertMaterial",{attach:"material",side:h.DoubleSide,map:y})]}),false]})})):null},y=i(1009);function m(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,s)}return i}function g(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?m(Object(i),!0).forEach((function(e){(0,n.Z)(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):m(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}var v=a.ZP.div.withConfig({displayName:"Cloth__Rect",componentId:"sc-1gdvhwz-0"})(["position:absolute;",""],(function(t){return(0,y.C9)(t.rectangle)})),S=function(t){var e=t.rectangle,i=t.image;return(0,s.jsx)(v,{rectangle:g({},e[0]),children:i&&(0,s.jsxs)(c.Xz,{camera:{position:[0,0,175]},children:[(0,s.jsx)("pointLight",{position:[0,0,100],color:16777215,intensity:.8}),(0,s.jsx)(r.Suspense,{fallback:null,children:(0,s.jsx)(d,{position:[0,10,0]})})]})})}}}]);