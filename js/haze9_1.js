(()=>{"use strict";var e,o={265:(e,o,t)=>{t.d(o,{Z:()=>s});var i=t(81),r=t.n(i),n=t(645),a=t.n(n)()(r());a.push([e.id,"body{background-color:#ccc;position:relative;overflow:hidden;color:#000;width:100vw;height:100vh}*{user-select:none;-webkit-user-select:none}.sp-caution,.sp-caution1000{display:none}@media screen and (max-width: 700px){.sp-caution{display:block;position:fixed;top:0;left:0;width:100%;height:100%;background-color:#fff;background-size:cover;background-attachment:fixed;z-index:20;font-size:22px;color:#000}.sp-caution p{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);display:block;width:70%}body{overflow:hidden;width:100%;height:100%}}@media screen and (max-width: 1050px){.sp-caution1000{display:block;position:fixed;top:0;left:0;width:100%;height:100%;background-color:#fff;background-size:cover;background-attachment:fixed;z-index:10;font-size:22px;color:#000}.sp-caution1000 p{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);display:block;width:70%}body{overflow:hidden;width:100%;height:100%}}#ue-img,#ue-img2,#ue-img3,#ue-img4,#ue-img5,#ue-img6{position:absolute;top:calc((100vh - 90vh)/2);height:90vh;pointer-events:none;user-select:none;transform-origin:center}.img-arrow{pointer-events:none}.box{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);border:1px solid #000;width:40vh;height:40vh;font-size:calc(40vh * 0.7);line-height:40vh;text-align:center;box-sizing:border-box;user-select:none}.box::selection{background:none}.buttonWB{position:absolute;left:calc((50vw - 50vh)/2);top:50%;transform:translateY(-50%);display:block;width:20vh;height:20vh;text-align:center;line-height:10vh;font-size:5vh;border-radius:50%;cursor:pointer}.changeW{background-color:#fff}.changeWB{background:linear-gradient(90deg, white 0%, white 50%, black 50%, black 100%)}.displayClear{position:absolute;width:100%;height:100%;background-color:rgba(102,102,102,.5333333333);user-select:none;display:none}.displayClear img{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);height:30vh;max-width:70vw;-webkit-user-drag:none}#allclear{height:70vh}.wrap{font-size:10vh;position:absolute;bottom:82vh;left:50%;transform:translateX(-50%)}#span-1{color:#000;opacity:0}#span-2{color:#333;opacity:0}#span-3{color:#666;opacity:0}#span-4{color:#999;opacity:0}#span-5{color:#ccc;opacity:0}#span-6{color:#fff;opacity:0}.menu-img{position:absolute;bottom:5vh;right:5vh;width:15vh;-webkit-user-drag:none;z-index:10}.menu-img:hover{opacity:.6}.box2{position:absolute;top:50%;transform:translateY(-50%);border:1px solid #000;width:40vh;height:40vh;font-size:calc(40vh * 0.7);padding:auto;line-height:40vh;text-align:center;box-sizing:border-box;cursor:default;user-select:none}.box2::selection{background:none}#box-1{right:62vw}#box-2{left:62vw}.reset{position:absolute;height:30vh;right:calc(25vw - 15vh);top:50%;transform:translate(50%, -50%);transition:opacity .5s;opacity:1;cursor:pointer;-webkit-user-drag:none}.reset:hover{opacity:.5}.share-btn{position:absolute;top:-50%}",""]);const s=a},797:(e,o,t)=>{t(88);var i=t(379),r=t.n(i),n=t(795),a=t.n(n),s=t(569),l=t.n(s),c=t(565),d=t.n(c),h=t(216),b=t.n(h),p=t(589),f=t.n(p),u=t(265),g={};g.styleTagTransform=f(),g.setAttributes=d(),g.insert=l().bind(null,"head"),g.domAPI=a(),g.insertStyleElement=b(),r()(u.Z,g),u.Z&&u.Z.locals&&u.Z.locals,window.jQuery=window.$=t(755);let v=()=>{switch($(".box").css("border","1px solid black"),0==P[W]?$(".box").css("background-color","white"):$(".box").css("background-color","black"),x()?1==P[W+1]&&$(".box").css("border-right","6px solid black"):$(".box").css("border-right","3px solid black"),w()?1==P[W-1]&&$(".box").css("border-left","6px solid black"):$(".box").css("border-left","3px solid black"),k()?1==P[W-Z]&&$(".box").css("border-top","6px solid black"):$(".box").css("border-top","3px solid black"),m()?1==P[W+Z]&&$(".box").css("border-bottom","6px solid black"):$(".box").css("border-bottom","3px solid black"),W){case 9:$(".box").text("S");break;case 23:$(".box").text("G");break;default:$(".box").text("")}y()},x=()=>W%Z!=Z-1,w=()=>W%Z!=0,k=()=>W>Z-1,m=()=>W<Z*(M-1),y=()=>{B[0]==A[0]&&B[1]==A[1]?($("#ue-img").css("display","none"),$(".displayClear").css("display","block"),T(),setTimeout("alert('Number: 2')",500)):$("#ue-img").css("display","block");let e,o=Math.atan((B[1]-A[1])/(B[0]-A[0]))*(180/Math.PI);e=B[0]-A[0]>=0?90+o:o-90,$("#ue-img").css("transform","rotate("+e+"deg)")},z=()=>{let e=0;if(k())if(0==P[W-Z])e=1;else if(1==P[W-Z])for(let o=2;o<A[1]+1;o++)if(0==P[W-Z*o]){e=o;break}return e},O=()=>{let e=0;if(m())if(0==P[W+Z])e=1;else if(1==P[W+Z])for(let o=2;o<M-A[1];o++)if(0==P[W+Z*o]){e=o;break}return e},j=()=>{let e=0;if(w())if(0==P[W-1])e=1;else if(1==P[W-1])for(let o=2;o<A[0]+1;o++)if(0==P[W-o]){e=o;break}return e},C=()=>{let e=0;if(x())if(0==P[W+1])e=1;else if(1==P[W+1])for(let o=2;o<Z-A[0];o++)if(0==P[W+o]){e=o;break}return e},T=()=>{let e=window.innerWidth,o=window.innerHeight,t=$(".displayClear img").width(),i=$(".displayClear img").height();$(".share-btn").css({top:o/2+i/2+"px",right:e/2-t/2+"px"})},Z=5,M=5,P=[0,0,0,1,0,0,1,0,1,0,0,0,1,1,1,0,1,0,1,0,1,0,1,0,1],W=9,A=[W%Z,Math.floor(W/Z)],B=[3,4],E=window.innerHeight;v(),$("#ue-img").css("left","calc(50% - "+.98*E*155*.5/909+"px)"),$("html").keyup((e=>{switch(e.which){case 39:0!=C()&&(C()>=2&&(e=>{P[W+1]=0;for(let o=2;o<e+1;o++)P[W+o]=1})(C()),W++,A[0]++,v());break;case 37:0!=j()&&(j()>=2&&(e=>{P[W-1]=0;for(let o=2;o<e+1;o++)P[W-o]=1})(j()),W--,A[0]--,v());break;case 38:0!=z()&&(z()>=2&&(e=>{P[W-Z]=0;for(let o=2;o<e+1;o++)P[W-Z*o]=1})(z()),W-=Z,A[1]--,v());break;case 40:0!=O()&&(O()>=2&&(e=>{P[W+Z]=0;for(let o=2;o<e+1;o++)P[W+Z*o]=1})(O()),W+=Z,A[1]++,v())}}))}},t={};function i(e){var r=t[e];if(void 0!==r)return r.exports;var n=t[e]={id:e,exports:{}};return o[e].call(n.exports,n,n.exports,i),n.exports}i.m=o,e=[],i.O=(o,t,r,n)=>{if(!t){var a=1/0;for(d=0;d<e.length;d++){for(var[t,r,n]=e[d],s=!0,l=0;l<t.length;l++)(!1&n||a>=n)&&Object.keys(i.O).every((e=>i.O[e](t[l])))?t.splice(l--,1):(s=!1,n<a&&(a=n));if(s){e.splice(d--,1);var c=r();void 0!==c&&(o=c)}}return o}n=n||0;for(var d=e.length;d>0&&e[d-1][2]>n;d--)e[d]=e[d-1];e[d]=[t,r,n]},i.n=e=>{var o=e&&e.__esModule?()=>e.default:()=>e;return i.d(o,{a:o}),o},i.d=(e,o)=>{for(var t in o)i.o(o,t)&&!i.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:o[t]})},i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),i.o=(e,o)=>Object.prototype.hasOwnProperty.call(e,o),i.j=90,(()=>{var e={90:0};i.O.j=o=>0===e[o];var o=(o,t)=>{var r,n,[a,s,l]=t,c=0;if(a.some((o=>0!==e[o]))){for(r in s)i.o(s,r)&&(i.m[r]=s[r]);if(l)var d=l(i)}for(o&&o(t);c<a.length;c++)n=a[c],i.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return i.O(d)},t=self.webpackChunkhaze=self.webpackChunkhaze||[];t.forEach(o.bind(null,0)),t.push=o.bind(null,t.push.bind(t))})(),i.nc=void 0;var r=i.O(void 0,[736],(()=>i(797)));r=i.O(r)})();