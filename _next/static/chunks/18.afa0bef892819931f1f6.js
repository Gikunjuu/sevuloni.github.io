(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[18],{18:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return D}});var n=r(6265),i=r(5893),o=r(8347),c=r(809),u=r.n(c),a=r(2447),s=r(7294),f=r(5675),l=r(8117),d=r(1009);function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function h(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var v=l.ZP.div.attrs((function(e){return{style:{transition:"opacity ".concat(e.transition,"ms ease")}}})).withConfig({displayName:"ViewerItem__Item",componentId:"sc-1f9y6tu-0"})(["opacity:0;z-index:1;"]),y=l.ZP.div.withConfig({displayName:"ViewerItem__Rect",componentId:"sc-1f9y6tu-1"})(["position:absolute;",""],(function(e){return(0,d.Tj)(e.rectangle)})),b=(0,s.forwardRef)((function(e,t){var r=e.elements,n=e.onLoad,c=(0,s.useRef)();return(0,s.useEffect)((function(){var e,t,r;null!==(e=c.current)&&void 0!==e&&null!==(t=e.firstChild)&&void 0!==t&&null!==(r=t.firstChild)&&void 0!==r&&r.complete&&n()}),[c]),r.map((function(e,r){e._uid;var u=e.rectangle,a=e.image;(0,o.Z)(e,["_uid","rectangle","image"]);return(0,i.jsx)(v,{ref:t,transition:300*Math.random(),children:(0,i.jsx)(y,{ref:c,rectangle:h({},u[0]),children:(0,i.jsx)(f.default,{src:a.filename,alt:a.alt,layout:"fill",loading:"eager",sizes:"".concat(u[0].width/d.lh*100,"vw"),quality:90,onLoad:function(e){var t;0!==((null===(t=e.target)||void 0===t?void 0:t.src)||"").indexOf("data:image/gif;base64")&&(null===n||void 0===n||n(e))}})})},"$viewer-item-".concat(r))}))})),w=r(9963),m=r(8162),g=r(9107),O=r(2075),j=r(1110),P=r(4719);function k(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function x(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?k(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):k(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var _,E=16,M=4095,Z=function(e){return.5*(1-Math.cos(e*Math.PI))},C=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;if(null==_){_=new Array(4096);for(var n=0;n<4096;n++)_[n]=Math.random()}e<0&&(e=-e),t<0&&(t=-t),r<0&&(r=-r);for(var i,o,c,u,a,s=Math.floor(e),f=Math.floor(t),l=Math.floor(r),d=e-s,p=t-f,h=r-l,v=0,y=.5,b=0;b<4;b++){var w=s+(f<<4)+(l<<8);i=Z(d),o=Z(p),c=_[w&M],c+=i*(_[w+1&M]-c),u=_[w+E&M],c+=o*((u+=i*(_[w+E+1&M]-u))-c),u=_[(w+=256)&M],u+=i*(_[w+1&M]-u),a=_[w+E&M],u+=o*((a+=i*(_[w+E+1&M]-a))-u),v+=(c+=Z(h)*(u-c))*y,y*=.5,s<<=1,f<<=1,l<<=1,(d*=2)>=1&&(s++,d--),(p*=2)>=1&&(f++,p--),(h*=2)>=1&&(l++,h--)}return v},I=l.ZP.div.withConfig({displayName:"Viewer__Container",componentId:"sc-1n11kmc-0"})(["position:absolute;inset:0;width:100%;height:100%;"]),R=l.ZP.div.withConfig({displayName:"Viewer__Item",componentId:"sc-1n11kmc-1"})(["position:absolute;inset:0;width:100vw;height:100%;transform:rotate(-90deg) scale(",");","{transform:none;}"],(function(e){return e.scaleFactor}),w.Z.s),D=function(e){var t=e.slides,r=e.hideInterface,n=e.setLoaded,c=(0,s.useState)(!1),f=c[0],l=c[1],d=(0,s.useRef)([]),p=d.current.length-1,h=(0,m.Z)(),v=(0,s.useRef)(!0),y=(0,s.useRef)([]),w=(0,s.useRef)(!1),k=(0,s.useState)(),_=k[0],E=k[1];(0,s.useEffect)((function(){return d.current[0].style.opacity="1",d.current[1].style.opacity="1",d.current[2].style.opacity="1",function(){return v.current=!1}}),[]);var M=(0,O.Z)("(pointer: fine) and (hover: hover)"),Z=(0,s.useRef)(null),D=(0,s.useRef)(null),L=(0,s.useCallback)(function(){var e=(0,a.Z)(u().mark((function e(t){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.progress,!1===M){e.next=3;break}return e.abrupt("return");case 3:if(!D.current){e.next=5;break}return e.abrupt("return");case 5:if(!(n>.9)){e.next=7;break}return e.abrupt("return");case 7:return D.current=!0,e.next=10,(0,j._)(3e3);case 10:if(D.current=!1,v.current){e.next=13;break}return e.abrupt("return");case 13:r();case 14:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[r,M]);(0,g.Z)({element:Z,callback:L});var S=(0,s.useRef)(!1),N=(0,s.useCallback)((function(){l((function(e){return e||!0})),!1===M&&r()}),[r,M]);(0,s.useEffect)((function(){!1===M&&function(){var e=(0,a.Z)(u().mark((function e(){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!S.current){e.next=2;break}return e.abrupt("return");case 2:return S.current=!0,e.next=5,(0,j._)(4e3);case 5:if(S.current=!1,v.current){e.next=8;break}return e.abrupt("return");case 8:N();case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[M,N]);var z=(0,s.useCallback)((function(e){if(!_){var t=Math.floor(e.clientX/window.innerWidth*100/100*(p-1));d.current.forEach((function(e){e.style.opacity="0"})),d.current[t].style.opacity="1",N(),E(!0),setTimeout((function(){E(!1)}),500)}}),[N,p,_]);(0,s.useLayoutEffect)((function(){if(f){var e=setInterval((function(){var e=Math.floor(C(Math.random())*p),t=Math.floor(C(Math.random())*p),r=Math.floor(C(Math.random())*p);d.current.forEach((function(e){e.style.opacity="0"})),d.current[e].style.opacity="1",d.current[t].style.opacity="1",d.current[r].style.opacity="1"}),2500);return function(){clearInterval(e)}}}),[f,p,t]);var V=(0,s.useCallback)((function(){w.current||(y.current.push(1),y.current.length>=d.current.length&&(n(!0),w.current=!0))}),[n]);return(0,i.jsx)(I,{ref:Z,onMouseMove:M?z:void 0,children:t.map((function(e,t){e._uid;var r=e.color,n=e.elements,c=(0,o.Z)(e,["_uid","color","elements"]);return(0,i.jsx)(R,{scaleFactor:h.height/h.width,children:(0,i.jsx)(b,x({color:r,elements:n,items:d,counter:y,onLoad:function(){return V()},ref:function(e){(0,P.U)(e,d.current)}},c),"$viewer-slide-".concat(t))},"$viewer-item-".concat(t))}))})}},8162:function(e,t,r){"use strict";var n=r(7294);t.Z=function(){var e=(0,n.useState)({width:void 0,height:void 0}),t=e[0],r=e[1];return(0,n.useEffect)((function(){var e=function(){var e=.01*window.innerHeight;document.documentElement.style.setProperty("--vh","".concat(e,"px")),r({width:window.innerWidth,height:window.innerHeight})};return window.addEventListener("resize",e),e(),function(){return window.removeEventListener("resize",e)}}),[]),t}},4719:function(e,t,r){"use strict";function n(e,t){if(e&&Array.isArray(t)&&!t.includes(e))return t.push(e)}r.d(t,{U:function(){return n}})}}]);