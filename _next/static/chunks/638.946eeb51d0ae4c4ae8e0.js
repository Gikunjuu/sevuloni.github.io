(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[638],{6638:function(e,t,n){"use strict";n.r(t);var r=n(5893),i=n(6265),o=n(7294),c=n(8117),a=n(9107),l=n(1009);function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){(0,i.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var f=c.ZP.div.withConfig({displayName:"InlineVideo__Rect",componentId:"sc-aji3n1-0"})([""," overflow:hidden;",";"],(function(e){return e.disableInteraction&&"pointer-events: none;"}),(function(e){return e.fixed?"position: fixed; width:100vw; height: 100vh; height: calc(var(--vh, 1vh) * 100); left: 0; top: 0;":"position: absolute; ".concat((0,l.C9)(e.rectangle))})),d=c.ZP.video.withConfig({displayName:"InlineVideo__VideoWrap",componentId:"sc-aji3n1-1"})(["width:100%;height:100%;object-fit:cover;"]),u=c.ZP.div.withConfig({displayName:"InlineVideo__Overlay",componentId:"sc-aji3n1-2"})(["position:absolute;background-color:rgba(0,0,0,0.5);top:0;left:0;width:100%;height:100%;"]);t.default=function(e){var t=e.rectangle,n=e.video_mp4,i=e.video_webm,c=e.fixed,l=e.overlay,s=(0,o.useRef)(),b=(0,o.useRef)(),h=(0,o.useCallback)((function(e){var t=e.progress;t>.3&&t<.8?b.current.play():b.current.pause()}),[]);return(0,a.Z)({element:s,callback:h}),(0,r.jsxs)(f,{ref:s,rectangle:p({},t[0]),fixed:c,disableInteraction:c&&l,children:[(0,r.jsxs)(d,{ref:b,loop:!0,muted:!0,playsInline:!0,children:[(null===i||void 0===i?void 0:i.filename)&&(0,r.jsx)("source",{src:i.filename,type:"video/webm"}),(0,r.jsx)("source",{src:n.filename,type:"video/mp4"})]}),l&&(0,r.jsx)(u,{rectangle:p({},t[0])})]})}}}]);