!function(){function e(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function t(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}function n(e,n){return function(e){if(Array.isArray(e))return e}(e)||t(e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function r(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||t(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var o={desktop:5e3,mobile:5e3},a=991,s=767;function i(e){var t,n,s,i=e.asscroll,c={cursor:document.querySelector(".cursor_dot"),cursorText:document.querySelector(".cursor-text"),images:document.querySelectorAll(".single-image-wrapper")},l=(t=function(e){var t=e.clientX,n=e.clientY;c.cursor.style.transform="translate3d(".concat(t-window.innerWidth/2,"px, ").concat(n-window.innerHeight/2,"px, 0)")},function(){for(var e=arguments.length,o=new Array(e),a=0;a<e;a++)o[a]=arguments[a];n||(n=!0,requestAnimationFrame((function(){n=!1,t.apply(void 0,r(o))})))});function p(e){c.cursorText.innerText=e}window.innerWidth>a&&(document.addEventListener("mousemove",l),s=function(){c.images.forEach((function(e){e.addEventListener("mouseenter",(function(){i.instance.currentPos>window.innerHeight||(p(e.querySelector(".image-id").innerText),c.cursor.style.background="currentColor")})),e.addEventListener("mouseleave",(function(){p(""),c.cursor.style.background=""}))}))},setTimeout((function(){s()}),o[window.innerWidth>a?"desktop":"mobile"]))}function c(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}Object.create;Object.create;const l=(e,t,n)=>Math.min(Math.max(n,e),t),p=.001;function u({duration:e=800,bounce:t=.25,velocity:n=0,mass:r=1}){let o,a,s=1-t;s=l(.05,1,s),e=l(.01,10,e/1e3),s<1?(o=t=>{const r=t*s,o=r*e,a=r-n,i=d(t,s),c=Math.exp(-o);return p-a/i*c},a=t=>{const r=t*s*e,a=r*n+n,i=Math.pow(s,2)*Math.pow(t,2)*e,c=Math.exp(-r),l=d(Math.pow(t,2),s);return(-o(t)+p>0?-1:1)*((a-i)*c)/l}):(o=t=>Math.exp(-t*e)*((t-n)*e+1)-.001,a=t=>Math.exp(-t*e)*(e*e*(n-t)));const i=function(e,t,n){let r=n;for(let n=1;n<12;n++)r-=e(r)/t(r);return r}(o,a,5/e);if(e*=1e3,isNaN(i))return{stiffness:100,damping:10,duration:e};{const t=Math.pow(i,2)*r;return{stiffness:t,damping:2*s*Math.sqrt(r*t),duration:e}}}function d(e,t){return e*Math.sqrt(1-t*t)}const m=["duration","bounce"],f=["stiffness","damping","mass"];function g(e,t){return t.some((t=>void 0!==e[t]))}function h(e){var{from:t=0,to:n=1,restSpeed:r=2,restDelta:o}=e,a=c(e,["from","to","restSpeed","restDelta"]);const s={done:!1,value:t};let{stiffness:i,damping:l,mass:p,velocity:h,duration:v,isResolvedFromDuration:w}=function(e){let t=Object.assign({velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1},e);if(!g(e,f)&&g(e,m)){const n=u(e);t=Object.assign(Object.assign(Object.assign({},t),n),{velocity:0,mass:1}),t.isResolvedFromDuration=!0}return t}(a),b=y,x=y;function S(){const e=h?-h/1e3:0,r=n-t,a=l/(2*Math.sqrt(i*p)),s=Math.sqrt(i/p)/1e3;if(void 0===o&&(o=Math.min(Math.abs(n-t)/100,.4)),a<1){const t=d(s,a);b=o=>{const i=Math.exp(-a*s*o);return n-i*((e+a*s*r)/t*Math.sin(t*o)+r*Math.cos(t*o))},x=n=>{const o=Math.exp(-a*s*n);return a*s*o*(Math.sin(t*n)*(e+a*s*r)/t+r*Math.cos(t*n))-o*(Math.cos(t*n)*(e+a*s*r)-t*r*Math.sin(t*n))}}else if(1===a)b=t=>n-Math.exp(-s*t)*(r+(e+s*r)*t);else{const t=s*Math.sqrt(a*a-1);b=o=>{const i=Math.exp(-a*s*o),c=Math.min(t*o,300);return n-i*((e+a*s*r)*Math.sinh(c)+t*r*Math.cosh(c))/t}}}return S(),{next:e=>{const t=b(e);if(w)s.done=e>=v;else{const a=1e3*x(e),i=Math.abs(a)<=r,c=Math.abs(n-t)<=o;s.done=i&&c}return s.value=s.done?n:t,s},flipTarget:()=>{h=-h,[t,n]=[n,t],S()}}}h.needsInterpolation=(e,t)=>"string"==typeof e||"string"==typeof t;const y=e=>0,v=(e,t,n)=>{const r=t-e;return 0===r?1:(n-e)/r},w=(e,t,n)=>-n*e+n*t+e,b=(e,t)=>n=>Math.max(Math.min(n,t),e),x=e=>e%1?Number(e.toFixed(5)):e,S=/(-)?([\d]*\.?[\d])+/g,W=/(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2,3}\s*\/*\s*[\d\.]+%?\))/gi,I=/^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2,3}\s*\/*\s*[\d\.]+%?\))$/i;function M(e){return"string"==typeof e}const T={test:e=>"number"==typeof e,parse:parseFloat,transform:e=>e},E=Object.assign(Object.assign({},T),{transform:b(0,1)}),O=(Object.assign(Object.assign({},T),{default:1}),e=>({test:t=>M(t)&&t.endsWith(e)&&1===t.split(" ").length,parse:parseFloat,transform:t=>`${t}${e}`})),P=(O("deg"),O("%")),q=(O("px"),O("vh"),O("vw"),Object.assign(Object.assign({},P),{parse:e=>P.parse(e)/100,transform:e=>P.transform(100*e)}),(e,t)=>n=>Boolean(M(n)&&I.test(n)&&n.startsWith(e)||t&&Object.prototype.hasOwnProperty.call(n,t))),C=(e,t,n)=>r=>{if(!M(r))return r;const[o,a,s,i]=r.match(S);return{[e]:parseFloat(o),[t]:parseFloat(a),[n]:parseFloat(s),alpha:void 0!==i?parseFloat(i):1}},A={test:q("hsl","hue"),parse:C("hue","saturation","lightness"),transform:({hue:e,saturation:t,lightness:n,alpha:r=1})=>"hsla("+Math.round(e)+", "+P.transform(x(t))+", "+P.transform(x(n))+", "+x(E.transform(r))+")"},j=b(0,255),L=Object.assign(Object.assign({},T),{transform:e=>Math.round(j(e))}),k={test:q("rgb","red"),parse:C("red","green","blue"),transform:({red:e,green:t,blue:n,alpha:r=1})=>"rgba("+L.transform(e)+", "+L.transform(t)+", "+L.transform(n)+", "+x(E.transform(r))+")"};const R={test:q("#"),parse:function(e){let t="",n="",r="",o="";return e.length>5?(t=e.substr(1,2),n=e.substr(3,2),r=e.substr(5,2),o=e.substr(7,2)):(t=e.substr(1,1),n=e.substr(2,1),r=e.substr(3,1),o=e.substr(4,1),t+=t,n+=n,r+=r,o+=o),{red:parseInt(t,16),green:parseInt(n,16),blue:parseInt(r,16),alpha:o?parseInt(o,16)/255:1}},transform:k.transform},H=e=>k.test(e)||R.test(e)||A.test(e),D=e=>k.test(e)?k.parse(e):A.test(e)?A.parse(e):R.parse(e),_=e=>M(e)?e:e.hasOwnProperty("red")?k.transform(e):A.transform(e),F="${c}",N="${n}";function B(e){"number"==typeof e&&(e=`${e}`);const t=[];let n=0;const r=e.match(W);r&&(n=r.length,e=e.replace(W,F),t.push(...r.map(D)));const o=e.match(S);return o&&(e=e.replace(S,N),t.push(...o.map(T.parse))),{values:t,numColors:n,tokenised:e}}function U(e){return B(e).values}function z(e){const{values:t,numColors:n,tokenised:r}=B(e),o=t.length;return e=>{let t=r;for(let r=0;r<o;r++)t=t.replace(r<n?F:N,r<n?_(e[r]):x(e[r]));return t}}const V=e=>"number"==typeof e?0:e;const G={test:function(e){var t,n,r,o;return isNaN(e)&&M(e)&&(null!==(n=null===(t=e.match(S))||void 0===t?void 0:t.length)&&void 0!==n?n:0)+(null!==(o=null===(r=e.match(W))||void 0===r?void 0:r.length)&&void 0!==o?o:0)>0},parse:U,createTransformer:z,getAnimatableNone:function(e){const t=U(e);return z(e)(t.map(V))}};function Z(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+6*(t-e)*n:n<.5?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function J({hue:e,saturation:t,lightness:n,alpha:r}){e/=360,n/=100;let o=0,a=0,s=0;if(t/=100){const r=n<.5?n*(1+t):n+t-n*t,i=2*n-r;o=Z(i,r,e+1/3),a=Z(i,r,e),s=Z(i,r,e-1/3)}else o=a=s=n;return{red:Math.round(255*o),green:Math.round(255*a),blue:Math.round(255*s),alpha:r}}const X=(e,t,n)=>{const r=e*e,o=t*t;return Math.sqrt(Math.max(0,n*(o-r)+r))},Y=[R,k,A],K=e=>Y.find((t=>t.test(e))),Q=e=>`'${e}' is not an animatable color. Use the equivalent color code instead.`,ee=(e,t)=>{let n=K(e),r=K(t);Q(e),Q(t);let o=n.parse(e),a=r.parse(t);n===A&&(o=J(o),n=k),r===A&&(a=J(a),r=k);const s=Object.assign({},o);return e=>{for(const t in s)"alpha"!==t&&(s[t]=X(o[t],a[t],e));return s.alpha=w(o.alpha,a.alpha,e),n.transform(s)}},te=(e,t)=>n=>t(e(n)),ne=(...e)=>e.reduce(te);function re(e,t){return"number"==typeof e?n=>w(e,t,n):H(e)?ee(e,t):ie(e,t)}const oe=(e,t)=>{const n=[...e],r=n.length,o=e.map(((e,n)=>re(e,t[n])));return e=>{for(let t=0;t<r;t++)n[t]=o[t](e);return n}},ae=(e,t)=>{const n=Object.assign(Object.assign({},e),t),r={};for(const o in n)void 0!==e[o]&&void 0!==t[o]&&(r[o]=re(e[o],t[o]));return e=>{for(const t in r)n[t]=r[t](e);return n}};function se(e){const t=G.parse(e),n=t.length;let r=0,o=0,a=0;for(let e=0;e<n;e++)r||"number"==typeof t[e]?r++:void 0!==t[e].hue?a++:o++;return{parsed:t,numNumbers:r,numRGB:o,numHSL:a}}const ie=(e,t)=>{const n=G.createTransformer(t),r=se(e),o=se(t);return r.numHSL===o.numHSL&&r.numRGB===o.numRGB&&r.numNumbers>=o.numNumbers?ne(oe(r.parsed,o.parsed),n):n=>`${n>0?t:e}`},ce=(e,t)=>n=>w(e,t,n);function le(e,t,n){const r=[],o=n||("number"==typeof(a=e[0])?ce:"string"==typeof a?H(a)?ee:ie:Array.isArray(a)?oe:"object"==typeof a?ae:void 0);var a;const s=e.length-1;for(let n=0;n<s;n++){let a=o(e[n],e[n+1]);if(t){const e=Array.isArray(t)?t[n]:t;a=ne(e,a)}r.push(a)}return r}function pe(e,t,{clamp:n=!0,ease:r,mixer:o}={}){const a=e.length;t.length,!r||!Array.isArray(r)||r.length,e[0]>e[a-1]&&(e=[].concat(e),t=[].concat(t),e.reverse(),t.reverse());const s=le(t,r,o),i=2===a?function([e,t],[n]){return r=>n(v(e,t,r))}(e,s):function(e,t){const n=e.length,r=n-1;return o=>{let a=0,s=!1;if(o<=e[0]?s=!0:o>=e[r]&&(a=r-1,s=!0),!s){let t=1;for(;t<n&&!(e[t]>o||t===r);t++);a=t-1}const i=v(e[a],e[a+1],o);return t[a](i)}}(e,s);return n?t=>i(l(e[0],e[a-1],t)):i}const ue=e=>t=>1-e(1-t),de=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,me=e=>t=>t*t*((e+1)*t-e),fe=(ge=2,e=>Math.pow(e,ge));var ge;const he=ue(fe),ye=de(fe),ve=(de(ue((e=>1-Math.sin(Math.acos(e))))),me(1.525)),we=(ue(ve),de(ve),(e=>{const t=me(e)})(1.525),e=>{if(1===e||0===e)return e;const t=e*e;return e<.36363636363636365?7.5625*t:e<.7272727272727273?9.075*t-9.9*e+3.4:e<.9?12.066481994459833*t-19.63545706371191*e+8.898060941828255:10.8*e*e-20.52*e+10.72});ue(we);function be(e,t){return e.map((()=>t||ye)).splice(0,e.length-1)}function xe({from:e=0,to:t=1,ease:n,offset:r,duration:o=300}){const a={done:!1,value:e},s=Array.isArray(t)?t:[e,t],i=function(e,t){return e.map((e=>e*t))}(r&&r.length===s.length?r:function(e){const t=e.length;return e.map(((e,n)=>0!==n?n/(t-1):0))}(s),o);function c(){return pe(i,s,{ease:Array.isArray(n)?n:be(s,n)})}let l=c();return{next:e=>(a.value=l(e),a.done=e>=o,a),flipTarget:()=>{s.reverse(),l=c()}}}const Se={keyframes:xe,spring:h,decay:function({velocity:e=0,from:t=0,power:n=.8,timeConstant:r=350,restDelta:o=.5,modifyTarget:a}){const s={done:!1,value:t};let i=n*e;const c=t+i,l=void 0===a?c:a(c);return l!==c&&(i=l-t),{next:e=>{const t=-i*Math.exp(-e/r);return s.done=!(t>o||t<-o),s.value=s.done?l:l+t,s},flipTarget:()=>{}}}};const We=1/60*1e3,Ie="undefined"!=typeof performance?()=>performance.now():()=>Date.now(),Me="undefined"!=typeof window?e=>window.requestAnimationFrame(e):e=>setTimeout((()=>e(Ie())),We);let Te=!0,Ee=!1,Oe=!1;const Pe={delta:0,timestamp:0},qe=["read","update","preRender","render","postRender"],Ce=qe.reduce(((e,t)=>(e[t]=function(e){let t=[],n=[],r=0,o=!1,a=!1;const s=new WeakSet,i={schedule:(e,a=!1,i=!1)=>{const c=i&&o,l=c?t:n;return a&&s.add(e),-1===l.indexOf(e)&&(l.push(e),c&&o&&(r=t.length)),e},cancel:e=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1),s.delete(e)},process:c=>{if(o)a=!0;else{if(o=!0,[t,n]=[n,t],n.length=0,r=t.length,r)for(let n=0;n<r;n++){const r=t[n];r(c),s.has(r)&&(i.schedule(r),e())}o=!1,a&&(a=!1,i.process(c))}}};return i}((()=>Ee=!0)),e)),{}),Ae=qe.reduce(((e,t)=>{const n=Ce[t];return e[t]=(e,t=!1,r=!1)=>(Ee||Re(),n.schedule(e,t,r)),e}),{}),je=qe.reduce(((e,t)=>(e[t]=Ce[t].cancel,e)),{}),Le=(qe.reduce(((e,t)=>(e[t]=()=>Ce[t].process(Pe),e)),{}),e=>Ce[e].process(Pe)),ke=e=>{Ee=!1,Pe.delta=Te?We:Math.max(Math.min(e-Pe.timestamp,40),1),Pe.timestamp=e,Oe=!0,qe.forEach(Le),Oe=!1,Ee&&(Te=!1,Me(ke))},Re=()=>{Ee=!0,Te=!0,Oe||Me(ke)};var He=Ae;function De(e,t,n=0){return e-t-n}const _e=e=>{const t=({delta:t})=>e(t);return{start:()=>He.update(t,!0),stop:()=>je.update(t)}};function Fe(e){var t,n,{from:r,autoplay:o=!0,driver:a=_e,elapsed:s=0,repeat:i=0,repeatType:l="loop",repeatDelay:p=0,onPlay:u,onStop:d,onComplete:m,onRepeat:f,onUpdate:g}=e,y=c(e,["from","autoplay","driver","elapsed","repeat","repeatType","repeatDelay","onPlay","onStop","onComplete","onRepeat","onUpdate"]);let v,w,b,{to:x}=y,S=0,W=y.duration,I=!1,M=!0;const T=function(e){if(Array.isArray(e.to))return xe;if(Se[e.type])return Se[e.type];const t=new Set(Object.keys(e));return t.has("ease")||t.has("duration")&&!t.has("dampingRatio")?xe:t.has("dampingRatio")||t.has("stiffness")||t.has("mass")||t.has("damping")||t.has("restSpeed")||t.has("restDelta")?h:xe}(y);(null===(n=(t=T).needsInterpolation)||void 0===n?void 0:n.call(t,r,x))&&(b=pe([0,100],[r,x],{clamp:!1}),r=0,x=100);const E=T(Object.assign(Object.assign({},y),{from:r,to:x}));function O(){S++,"reverse"===l?(M=S%2==0,s=function(e,t,n=0,r=!0){return r?De(t+-e,t,n):t-(e-t)+n}(s,W,p,M)):(s=De(s,W,p),"mirror"===l&&E.flipTarget()),I=!1,f&&f()}function P(e){if(M||(e=-e),s+=e,!I){const e=E.next(Math.max(0,s));w=e.value,b&&(w=b(w)),I=M?e.done:s<=0}null==g||g(w),I&&(0===S&&(null!=W||(W=s)),S<i?function(e,t,n,r){return r?e>=t+n:e<=-n}(s,W,p,M)&&O():(v.stop(),m&&m()))}return o&&(null==u||u(),v=a(P),v.start()),{stop:()=>{null==d||d(),v.stop()}}}function Ne(e,t){for(var n=0;n<e.length;n++)t(e[n],n)}function Be(e){var t=[];return e.forEach((function(e){for(var r=n(e),o=r[0],a=r[1],s=o;s<=a;s++)t.push(String.fromCharCode(s))})),t}var Ue=[[48,57]],ze=[[65,90]],$e=[[97,122]],Ve=Be([[33,47],[58,64],[91,96],[123,126],[8212,8212],[8217,8217]]),Ge=Be(Ue),Ze=Be(ze),Je=Be($e);function Xe(e,t){var n,r,o,a=function(e){var t=function(t){return e>=t[0]&&e<=t[1]};return t($e[0])?Je:t(ze[0])?Ze:t(Ue[0])?Ge:Ve}(e.charCodeAt(0)),s=a.length,i=a.indexOf(e);return-1===i?e:a[(r=0,(n=i+t)>(o=s-1)?r+n%o:n)]}function Ye(e,t){var n=e.textContent,r="";Ne(n,(function(e){r+=Xe(e,t)})),n.length!==r.length&&console.error("newText has different length!"),e.textContent=r}function Ke(e){var t=[];return Ne(e.childNodes,(function(e){var n;e.nodeType===Node.TEXT_NODE&&t.push(e),e.hasChildNodes()&&!e.hasAttribute("data-shuffle-exclude")&&(n=t).push.apply(n,r(Ke(e)))})),t}function Qe(){var e,t,n,o,a=document.querySelectorAll("[data-shuffle-in-view]"),s={shuffleSpeed:50,shuffleDuration:1400,charLeap:3,chunkLength:1},i={originalTextContent:[]};e=a,n=(t={chunkLength:s.chunkLength}).chunkLength,o=t.chunksCount,e.forEach((function(e){var t=Ke(e),a=e.textContent.length,s=void 0!==n?n:a/o;t.forEach((function(e){if(e.textContent.length>1.6*s){var t,n=[""],o=0;Ne(e.textContent,(function(e,t){n[o].length>=s&&o++,void 0===n[o]&&(n[o]=""),n[o]+=e})),(t=e).replaceWith.apply(t,r(n.map((function(e){return document.createTextNode(e)}))))}}))})),a.forEach((function(e,t){var n=Ke(e);Ne(n,(function(e,n){i.originalTextContent[t]||(i.originalTextContent[t]=[]),i.originalTextContent[t][n]=e.textContent,Ye(e,s.charLeap)}));var r=function(e,t){var n=new IntersectionObserver((function(e){e.forEach((function(e){t(e,n)}))}),{});return n.observe(e),function(){return n.unobserve(e)}}(e,(function(e){e.isIntersecting&&(r(),Ne(n,(function(e,r){var o=setInterval((function(){Ye(e,s.charLeap)}),s.shuffleSpeed);setTimeout((function(){clearInterval(o),e.textContent=i.originalTextContent[t][r]}),s.shuffleDuration/n.length*(r+1))})))}))}))}function et(){var e,t,n,o,s,i,c=[],l=[],p=0,u=[],d=(i={starsNum:18,maxDepth:-250,velocity:.9,xRange:300,yRange:200,minVisibleHeight:100},window.innerWidth<=a&&(i.xRange=80,i.yRange=160,i.starsNum=7,i.minVisibleHeight=50),i);function m(){var e=document.getElementById("stars"),r=e.offsetWidth,o=e.offsetHeight;t.aspect=r/o,t.updateProjectionMatrix(),n.setSize(r,o)}function f(e){return new THREE.Vector3(Math.random()*d.xRange-d.xRange/2,Math.random()*d.yRange-d.yRange/2,e)}function g(e,t,n){return Math.max(Math.min(e,n),t)}function h(e,t,n){return t[0]+(n-e[0])*(t[1]-t[0])/(e[1]-e[0])}function y(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var o,a,s=t[1];return g(h.apply(void 0,r(t)),(o=Math).min.apply(o,r(s)),(a=Math).max.apply(a,r(s)))}function v(){cancelAnimationFrame(o),l.forEach((function(e,n){var r=e.vertices[0],o=c[n],a=function(e,t){var n=t.position.z;e<n?e-=n:e+=n;var r=t.fov*Math.PI/180;return 2*Math.tan(r/2)*Math.abs(e)}(r.z,t);if(r.z+=d.velocity,a>p&&(p=a),a<=p&&a>=p-40){var s=y([p,p-40],[0,1],a);o.opacity=s}else if(a<=d.minVisibleHeight+40){var i=y([d.minVisibleHeight+40,d.minVisibleHeight],[1,0],a);o.opacity=i}else o.opacity=1;a<d.minVisibleHeight&&(Object.assign(r,f(d.maxDepth)),o.opacity=0),e.verticesNeedUpdate=!0})),n.render(e,t),o=requestAnimationFrame(v)}return function(){var r=document.getElementById("stars");(n=new THREE.WebGLRenderer).setClearColor(460551,1);var o=r.offsetWidth,a=r.offsetHeight;n.setSize(o,a),r.appendChild(n.domElement),e=new THREE.Scene,t=new THREE.PerspectiveCamera(60,o/a,1,1e3),n.render(e,t);for(var s=(new THREE.TextureLoader).load("https://airnauts-tmp.s3-eu-central-1.amazonaws.com/star.png"),i=0;i<d.starsNum;i++){var p=new THREE.Geometry,g=f(d.maxDepth/2*i/d.starsNum+d.maxDepth/2);u.push(g),p.vertices.push(g);var h=new THREE.PointsMaterial({color:11184810,size:1,map:s,transparent:!0});l.push(p),c.push(h);var y=new THREE.Points(p,h);e.add(y)}window.addEventListener("resize",m,!1)}(),{play:function(){s||(s=!0,v())},pause:function(){s&&(s=!1,cancelAnimationFrame(o))}}}function tt(e){var t=e.asscroll,r={subscribeForm:[document.querySelector(".form-block").firstChild,50],footerIcon:[document.querySelector(".footer-icon").firstChild,90]};t.onScroll((function(e){var t,o;t=[r.subscribeForm,r.footerIcon],o=window.innerHeight,t.forEach((function(e){var t=n(e),r=t[0],a=t[1],s=r.parentElement.getBoundingClientRect().top/o*100;if(s<a){var i=a-s;r.style.transform="translate3d(0, ".concat(i,"vh, 0)")}}))}))}function nt(t){var r=t.asscroll,o=t.stars,s={imagesWrapperSecond:document.querySelector(".images-wrapper.second"),stars:document.querySelector("#stars"),enterTheCosmos:document.querySelector(".enter-the-cosmos"),lineUnder:document.querySelector(".line-under"),linesWrapper:document.querySelector(".lines-wrapper"),cursorText:document.querySelector(".cursor-text"),asscrollContainer:document.querySelector(".asscroll-container"),singleImageWrapper1:document.querySelector(".single-image-wrapper._1 .image-hero"),singleImageWrapper2:document.querySelector(".single-image-wrapper._2 .image-hero"),singleImageWrapper3:document.querySelector(".single-image-wrapper._3 .image-hero"),singleImageWrapper4:document.querySelector(".single-image-wrapper._4 .image-hero"),singleImageWrapper5:document.querySelector(".single-image-wrapper._5 .image-hero"),singleImageWrapper6:document.querySelector(".single-image-wrapper._6 .image-hero"),singleImageWrapper7:document.querySelector(".single-image-wrapper._7 .image-hero"),singleImageWrapper8:document.querySelector(".single-image-wrapper._8 .image-hero"),singleImageWrapper9:document.querySelector(".single-image-wrapper._9 .image-hero"),singleImageWrapper10:document.querySelector(".single-image-wrapper._10 .image-hero"),singleImageWrapper11:document.querySelector(".single-image-wrapper._11 .image-hero"),singleImageWrapper12:document.querySelector(".single-image-wrapper._12 .image-hero"),singleImageWrapper13:document.querySelector(".single-image-wrapper._13 .image-hero"),singleImageWrapper14:document.querySelector(".single-image-wrapper._14 .image-hero"),popupTriggers:document.querySelectorAll(".popup-wrapper")},i={prevScrollPos:0,prevScrollPos_B:0,timeoutID:void 0,penFlag:!1,scrolledCorrection:0};var c=function(e){var t=e.split(";"),r={};return t.forEach((function(e){if(e){var t=n(e.split(":")),o=t[0],a=t[1];r[o.trim()]=a.trim()}})),r},l=function(e){var t="";return Object.entries(e).forEach((function(e){var r=n(e),o=r[0],a=r[1];t+="".concat(o,": ").concat(a,";")})),t};function p(t,n){var r=n.z,o=e(n,["z"]),a=t.style.cssText,s=c(a);Object.assign(s,o),r&&(s.transform=function(e,t){var n=e;return n.indexOf("translateZ(")>-1?n=n.replace(/translateZ\(([^,]+)[^)]*\)/g,"translateZ(".concat(t,")")):n+=" translateZ(".concat(t,")"),n}(s.transform,r)),t.style.cssText=l(s)}var u={desktop:function(e){var t=e.currentPos,n=t/r.instance.maxScroll*window.scrolledCorrection,a=pe([.15,.5],[0,-100])(n),i=pe([0,1],[1,0])(n),c=1-i;p(s.imagesWrapperSecond,{opacity:i,transform:"translate3d(0, ".concat(a,"vh, 0)"),display:t>2*window.innerHeight?"none":""}),p(s.stars,{opacity:c}),c<.2?o.pause():o.play(),p(s.enterTheCosmos,{opacity:pe([0,.03],[1,0])(n)}),p(s.lineUnder,{opacity:pe([0,.03],[0,1])(n)}),p(s.linesWrapper,{opacity:pe([0,.02],[1,0])(n)}),p(s.linesWrapper,{opacity:pe([0,.02],[1,0])(n)}),p(s.cursorText,{opacity:pe([.1,.2],[1,0])(n)}),p(s.singleImageWrapper8,{opacity:pe([.12,.32],[1,0])(n),transform:"translate3d(0, 0, ".concat(pe([.02,.24],[0,-45])(n),"vw)")}),p(s.singleImageWrapper2,{opacity:pe([.13,.33],[1,0])(n),transform:"translate3d(0, 0, ".concat(pe([.03,.25],[0,-80])(n),"vw)")}),p(s.singleImageWrapper4,{opacity:pe([.13,.26],[1,0])(n),transform:"translate3d(0, 0, ".concat(pe([.04,.26],[0,-50])(n),"vw)")}),p(s.singleImageWrapper6,{opacity:pe([.15,.35],[1,0])(n),transform:"translate3d(0, 0, ".concat(pe([.05,.27],[0,-80])(n),"vw)")}),p(s.singleImageWrapper11,{opacity:pe([.16,.36],[1,0])(n),transform:"translate3d(0, 0, ".concat(pe([.06,.28],[0,-45])(n),"vw)")}),p(s.singleImageWrapper13,{opacity:pe([.17,.37],[1,0])(n),transform:"translate3d(0, 0, ".concat(pe([.07,.29],[0,-80])(n),"vw)")}),p(s.singleImageWrapper10,{opacity:pe([.18,.38],[1,0])(n),transform:"translate3d(0, 0, ".concat(pe([.08,.3],[0,-45])(n),"vw)")}),p(s.singleImageWrapper12,{opacity:pe([.19,.39],[1,0])(n),transform:"translate3d(0, 0, ".concat(pe([.09,.31],[0,-45])(n),"vw)")}),p(s.singleImageWrapper5,{opacity:pe([.2,.32],[1,0])(n),transform:"translate3d(0, 0, ".concat(pe([.1,.32],[0,-80])(n),"vw)")}),p(s.singleImageWrapper1,{opacity:pe([.21,.41],[1,0])(n),transform:"translate3d(0, 0, ".concat(pe([.11,.33],[0,-45])(n),"vw)")}),p(s.singleImageWrapper9,{opacity:pe([.22,.42],[1,0])(n),transform:"translate3d(0, 0, ".concat(pe([.12,.34],[0,-45])(n),"vw)")}),p(s.singleImageWrapper3,{opacity:pe([.23,.43],[1,0])(n),transform:"translate3d(0, 0, ".concat(pe([.13,.35],[0,-45])(n),"vw)")}),p(s.singleImageWrapper7,{opacity:pe([.24,.36],[1,0])(n),transform:"translate3d(0, 0, ".concat(pe([.14,.36],[0,-80])(n),"vw)")}),p(s.singleImageWrapper14,{opacity:pe([.25,.35],[1,0])(n),transform:"translate3d(0, 0, ".concat(pe([.15,.37],[0,-100])(n),"vw)")})},mobile:function(e){var t=e.currentPos,n=e.staticStarsOpacity,a=t/r.instance.maxScroll*window.scrolledCorrection,i=pe([0,.8],[0,-80])(a),c=pe([0,.8],[1,0])(a),l=pe([1,.5],[0,1])(c);p(s.imagesWrapperSecond,{opacity:c,transform:"translate3d(0, ".concat(i,"vh, 0)"),display:t>2*window.innerHeight?"none":""}),p(s.stars,{opacity:void 0!==n?n:l}),l<.2?o.pause():o.play(),p(s.enterTheCosmos,{opacity:pe([0,.03],[1,0])(a)}),p(s.lineUnder,{opacity:pe([0,.03],[0,1])(a)}),p(s.linesWrapper,{opacity:pe([0,.02],[1,0])(a)}),p(s.linesWrapper,{opacity:pe([0,.02],[1,0])(a)}),p(s.cursorText,{opacity:pe([.1,.2],[1,0])(a)}),p(s.singleImageWrapper8,{opacity:pe([.018,.072],[1,0])(a),transform:"translate3d(0, 0, ".concat(pe([.013999999999999999,.16799999999999998],[0,-45])(a),"vw)")}),p(s.singleImageWrapper2,{opacity:pe([.03,.084],[1,0])(a),transform:"translate3d(0, 0, ".concat(pe([.020999999999999998,.175],[0,-80])(a),"vw)")}),p(s.singleImageWrapper12,{opacity:pe([.042,.096],[1,0])(a),transform:"translate3d(0, 0, ".concat(pe([.063,.217],[0,-45])(a),"vw)")}),p(s.singleImageWrapper6,{opacity:pe([.054,.108],[1,0])(a),transform:"translate3d(0, 0, ".concat(pe([.034999999999999996,.189],[0,-80])(a),"vw)")}),p(s.singleImageWrapper13,{opacity:pe([.096,.132],[1,0])(a),transform:"translate3d(0, 0, ".concat(pe([.049,.20299999999999999],[0,-80])(a),"vw)")}),p(s.singleImageWrapper10,{opacity:pe([.12,.174],[1,0])(a),transform:"translate3d(0, 0, ".concat(pe([.055999999999999994,.21],[0,-45])(a),"vw)")}),p(s.singleImageWrapper1,{opacity:pe([.132,.192],[1,0])(a),transform:"translate3d(0, 0, ".concat(pe([.077,.23099999999999998],[0,-45])(a),"vw)")}),p(s.singleImageWrapper9,{opacity:pe([.138,.20400000000000001],[1,0])(a),transform:"translate3d(0, 0, ".concat(pe([.08399999999999999,.238],[0,-45])(a),"vw)")}),p(s.singleImageWrapper7,{opacity:pe([.168,.22799999999999998],[1,0])(a),transform:"translate3d(0, 0, ".concat(pe([.098,.252],[0,-80])(a),"vw)")}),p(s.singleImageWrapper14,{opacity:pe([.21,.24],[1,0])(a),transform:"translate3d(0, 0, ".concat(pe([.105,.259],[0,-100])(a),"vw)")}),p(s.singleImageWrapper4,{opacity:pe([.23399999999999999,.252],[1,0])(a),transform:"translate3d(0, 0, ".concat(pe([.027999999999999997,.182],[0,-50])(a),"vw)")}),p(s.singleImageWrapper11,{opacity:pe([.23399999999999999,.252],[1,0])(a),transform:"translate3d(0, 0, ".concat(pe([.041999999999999996,.196],[0,-45])(a),"vw)")}),p(s.singleImageWrapper3,{opacity:pe([.23399999999999999,.252],[1,0])(a),transform:"translate3d(0, 0, ".concat(pe([.091,.24499999999999997],[0,-45])(a),"vw)")}),p(s.singleImageWrapper5,{opacity:pe([.23399999999999999,.252],[1,0])(a),transform:"translate3d(0, 0, ".concat(pe([.06999999999999999,.22399999999999998],[0,-80])(a),"vw)")})}};function d(e){s.popupTriggers.forEach((function(t){t.classList[e?"add":"remove"]("pointer-events-none-important")}))}function m(){window.scrolledCorrection=Math.max(pe([375,2500],[3.2,2],{clamp:!1})(window.innerWidth),0)}r.onScroll((function(e){Math.abs(i.prevScrollPos-e.currentPos)<1.5||(i.prevScrollPos=e.currentPos,Math.abs(i.prevScrollPos_B-e.currentPos)>3&&(i.penFlag||(i.penFlag=!0,d(!0)),clearTimeout(i.timeoutID),i.timeoutID=setTimeout((function(){d(!1),i.penFlag=!1}),200),i.prevScrollPos_B=e.currentPos),u[window.innerWidth<=a?"mobile":"desktop"](e))})),m(),window.addEventListener("resize",m),window.innerWidth<=a&&(u.mobile({currentPos:1e3,staticStarsOpacity:0}),setTimeout((function(){u.mobile({currentPos:0,staticStarsOpacity:0})}),1)),Object.values(s).some((function(e){return!e}))&&console.error("Some elements are no defined",{elements:s})}window.addEventListener("DOMContentLoaded",(function(){if(void 0===window.use_production_script){var e;(e=document.querySelector('meta[name="viewport"]'))&&e.setAttribute("content","width=device-width, initial-scale=1, shrink-to-fit=no, maximum-scale=1, viewport-fit=cover");var t,n,r,o,c,l,p,u=et(),d=function(){var e=new window.ASScroll({ease:.075});e.enable();var t=e.isScrollJacking;return{instance:e,setCurrentPosition:function(n){t?e.currentPos=n:window.scroll(0,n)},onScroll:function(n){t?e.on("update",n):window.addEventListener("scroll",(function(){var e=window.scrollY;n({currentPos:e,targetPos:e})}))}}}();i({asscroll:d}),nt({asscroll:d,stars:u}),Qe(),function(){var e={popupTriggers:document.querySelectorAll(".popup-wrapper"),popups:document.querySelectorAll(".text-absolute-wrapper"),popupBlur:document.querySelector(".popup-blur")},t="215px",n={openedPopup:null};function r(r,o){if(!n.openedPopup)if(n.openedPopup=r,window.innerWidth<=a&&(e.popupBlur.style.cssText="display: block; opacity: 0; pointer-events: auto;"),window.innerWidth<=s){var i=r.querySelectorAll("*");i.forEach((function(e){e.style.cssText="opacity: 0;"})),Fe({from:0,to:1,type:"spring",duration:300,bounce:0,ease:he,onUpdate:function(t){e.popupBlur.style.cssText="display: block; opacity: ".concat(t,"; pointer-events: auto;")}}),Fe({from:0,to:2,type:"spring",duration:500,elapsed:-200,bounce:0,ease:he,onUpdate:function(e){r.style.cssText="display: block; opacity: ".concat(e,"; transform: translate3d(0, ").concat(pe([.5,2],[20,0])(e),"px, 0); pointer-events: auto;")}}),Fe({from:0,to:1,type:"spring",duration:800,elapsed:-450,bounce:0,onUpdate:function(e){i.forEach((function(t){t.style.cssText="opacity: ".concat(e,";")}))}})}else{var c=o.offsetTop,l=o.offsetLeft,p=o.offsetWidth,u=o.getBoundingClientRect(),d=window.innerWidth-u.right-u.width/2,m=0;d<parseInt(t)+10&&(m=parseInt(t)-d-20),r.style.cssText="\n        top: ".concat(c,"px;\n        left: ").concat(l,"px;\n        transform: translate3d(").concat(p/2-m,"px, -100%, 0);\n      "),$(r).fadeIn({duration:200})}}function o(){if(n.openedPopup)if(window.innerWidth<=s){var t=n.openedPopup.querySelectorAll("*");Fe({from:1,to:0,type:"spring",duration:700,bounce:0,onUpdate:function(e){t.forEach((function(t){t.style.cssText="opacity: ".concat(e,";")}))}}),Fe({from:2,to:0,type:"spring",duration:500,elapsed:-300,bounce:0,ease:fe,onUpdate:function(e){n.openedPopup.style.cssText="display: block; opacity: ".concat(e,"; transform: translate3d(0, ").concat(pe([2,.5],[0,20])(e),"px, 0); pointer-events: none;")}}),Fe({from:1,to:0,type:"spring",duration:500,elapsed:-600,bounce:0,ease:fe,onUpdate:function(t){e.popupBlur.style.cssText="display: block; opacity: ".concat(t,"; pointer-events: none;")},onComplete:function(){n.openedPopup=null}})}else $(n.openedPopup).fadeOut({duration:250}),e.popupBlur.style.cssText="display: none;",n.openedPopup=null}e.popupTriggers.forEach((function(e){var t=e.querySelector(".text-absolute-wrapper");window.innerWidth<=a?e.addEventListener("click",(function(){return r(t,e)})):(e.addEventListener("mouseenter",(function(){return r(t,e)})),e.addEventListener("mouseleave",(function(){return o()})))})),e.popups.forEach((function(e){e.addEventListener("click",(function(e){e.stopPropagation(),o()}))})),e.popupBlur.addEventListener("click",(function(e){o()}))}(),t="https://ox44yaptp0m.typeform.com/to/hSdNC5Mj",n=navigator.userAgent||navigator.vendor||window.opera,r=n.indexOf("Instagram")>-1,o=!!n.match(/iPad/i)||!!n.match(/iPhone/i),c=!!n.match(/WebKit/i),l=o&&c&&!n.match(/CriOS/i),p=document.querySelector(".w-form-done"),new MutationObserver((function(e){e.forEach((function(e){"attributes"===e.type&&"block"===p.style.display&&(r||l?window.location.replace(t):window.open(t,"_blank"))}))})).observe(p,{attributes:!0}),window.innerWidth>a&&function(e){var t,n=e.asscroll,r={paragraphs:document.querySelectorAll("[data-shuffle-on-hover]")},o={prevScrollPos:0};(t=document.createElement("style")).innerHTML="\n      .-paragraph-move {\n        transition: transform 2.5s ease;\n      }\n\n      .-move-down {\n        transform: translate3d(0, 20px ,0);\n      }\n      \n      .-move-up {\n        transform: translate3d(0, -20px ,0);\n      }\n    ",document.head.appendChild(t),r.paragraphs.forEach((function(e){e.classList.add("-paragraph-move"),e.style.transitionDelay=300*Math.random()+"ms"})),n.onScroll((function(e){if(o.prevScrollPos!==e.currentPos){if(Math.abs(o.prevScrollPos-e.currentPos)<10)r.paragraphs.forEach((function(e){e.classList.remove("-move-down","-move-up")}));else{var t=e.currentPos>o.prevScrollPos;r.paragraphs.forEach((function(e){e.classList.add(t?"-move-down":"-move-up"),e.classList.add(t?"-move-down":"-move-up")}))}o.prevScrollPos=e.currentPos}}))}
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */({asscroll:d}),{asscroll:d}.asscroll,document.querySelector("#enter-the-comos"),document.querySelector("#enter-the-cosmos-target"),d.instance.isScrollJacking&&tt({asscroll:d})}}))}();
//# sourceMappingURL=index.js.map