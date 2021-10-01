(()=>{"use strict";var e={341:(e,t,r)=>{r.d(t,{Z:()=>c});var a=r(81),n=r.n(a),i=r(645),s=r.n(i)()(n());s.push([e.id,"body {\r\n    margin:0;\r\n    padding:0;\r\n    background: #edebd5;\r\n    font-family: Verdana, Geneva, Arial, Helvetica, sans-serif;\r\n    font-size: 11px;\r\n    color: #000;\r\n}\r\n#container {\r\n    width: 100%;\r\n    height: 100%;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    overflow: auto;\r\n    white-space: nowrap;\r\n    text-align: center;\r\n    font-size: 0;\r\n}\r\n.content {   \r\n    display: inline-block;\r\n    white-space: normal;\r\n    vertical-align: middle;\r\n    text-align: left;\r\n}\r\n\r\n.light {\r\n    background-color: white;  \r\n    /*padding: 3px; */\r\n    border: 1px solid black;  \r\n}\r\n\r\n.dark {\r\n    background-color: grey; \r\n    /*padding: 3px;*/\r\n    border: 1px solid black;\r\n}\r\n\r\ntable {  \r\n    border-collapse: separate;\r\n    border: 1px solid black;\r\n}\r\n\r\ntd, th {\r\n    width: 80px;\r\n    height: 80px;\r\n    text-align: center;\r\n}",""]);const c=s},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var r="",a=void 0!==t[5];return t[4]&&(r+="@supports (".concat(t[4],") {")),t[2]&&(r+="@media ".concat(t[2]," {")),a&&(r+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),r+=e(t),a&&(r+="}"),t[2]&&(r+="}"),t[4]&&(r+="}"),r})).join("")},t.i=function(e,r,a,n,i){"string"==typeof e&&(e=[[null,e,void 0]]);var s={};if(a)for(var c=0;c<this.length;c++){var o=this[c][0];null!=o&&(s[o]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);a&&s[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),r&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=r):l[2]=r),n&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=n):l[4]="".concat(n)),t.push(l))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function r(e){for(var r=-1,a=0;a<t.length;a++)if(t[a].identifier===e){r=a;break}return r}function a(e,a){for(var i={},s=[],c=0;c<e.length;c++){var o=e[c],d=a.base?o[0]+a.base:o[0],l=i[d]||0,u="".concat(d," ").concat(l);i[d]=l+1;var m=r(u),g={css:o[1],media:o[2],sourceMap:o[3],supports:o[4],layer:o[5]};if(-1!==m)t[m].references++,t[m].updater(g);else{var p=n(g,a);a.byIndex=c,t.splice(c,0,{identifier:u,updater:p,references:1})}s.push(u)}return s}function n(e,t){var r=t.domAPI(t);return r.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;r.update(e=t)}else r.remove()}}e.exports=function(e,n){var i=a(e=e||[],n=n||{});return function(e){e=e||[];for(var s=0;s<i.length;s++){var c=r(i[s]);t[c].references--}for(var o=a(e,n),d=0;d<i.length;d++){var l=r(i[d]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}i=o}}},569:e=>{var t={};e.exports=function(e,r){var a=function(e){if(void 0===t[e]){var r=document.querySelector(e);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}t[e]=r}return t[e]}(e);if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(r)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,r)=>{e.exports=function(e){var t=r.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(r){!function(e,t,r){var a="";r.supports&&(a+="@supports (".concat(r.supports,") {")),r.media&&(a+="@media ".concat(r.media," {"));var n=void 0!==r.layer;n&&(a+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),a+=r.css,n&&(a+="}"),r.media&&(a+="}"),r.supports&&(a+="}");var i=r.sourceMap;i&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(a,e,t.options)}(t,e,r)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function r(a){var n=t[a];if(void 0!==n)return n.exports;var i=t[a]={id:a,exports:{}};return e[a](i,i.exports,r),i.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var a in t)r.o(t,a)&&!r.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;r.g.importScripts&&(e=r.g.location+"");var t=r.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var a=t.getElementsByTagName("script");a.length&&(e=a[a.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),r.p=e})(),(()=>{class e{constructor(e,t,r){this.name=e,this.x=t,this.y=r}checkMove(){}}const t=r.p+"img/bB.png",a=r.p+"img/bW.png";class n extends e{constructor(e,t,r){super(e,t,r)}srcB=t;srcW=a;getName(){return this.name}}const i=r.p+"img/kingB.png",s=r.p+"img/kingW.png";class c extends e{constructor(e,t,r){super(e,t,r)}srcB=i;srcW=s;getName(){return this.name}}const o=r.p+"img/kB.png",d=r.p+"img/kW.png";class l extends e{constructor(e,t,r){super(e,t,r)}srcB=o;srcW=d;getName(){return this.name}}const u=r.p+"img/pB.png",m=r.p+"img/pW.png";class g extends e{constructor(e,t,r){super(e,t,r)}srcB=u;srcW=m;getName(){return this.name}checkMove(e,t){}}const p=r.p+"img/qB.png",f=r.p+"img/qW.png";class k extends e{constructor(e,t,r){super(e,t,r)}srcB=p;srcW=f;getName(){return this.name}}const h=r.p+"img/rB.png",b=r.p+"img/rW.png";class B extends e{constructor(e,t,r){super(e,t,r)}srcB=h;srcW=b;getName(){return this.name}}class y{createElement(e,t){let r=document.createElement(e),a=document.getElementById(t);try{a.appendChild(r),console.log("Element add")}catch{console.log("Element not added")}}createTableFromArray(e){let t=0,r=document.getElementsByTagName("table")[0];for(let a=0;a<e.length;a++){let i=document.createElement("tr");for(let r=0;r<e.length;r++){let s=document.createElement("td"),o=document.createElement("img");switch(s.className=t%2==0?"light":"dark",e[a][r].figure){case"pB":s.appendChild(o);let t=new g("Pawn");o.src=t.srcB,o.id=t.getName()+a+r,s.setAttribute("data-x",a),s.setAttribute("data-y",r),o.className="Black",s.id=e[a][r].mark;break;case"rB":s.appendChild(o);let i=new B("Rook");o.src=i.srcB,o.id=i.getName()+a+r,s.setAttribute("data-x",a),s.setAttribute("data-y",r),o.className="Black",s.id=e[a][r].mark;break;case"kB":s.appendChild(o);let d=new l("Knight");o.src=d.srcB,o.id=d.getName()+a+r,s.setAttribute("data-x",a),s.setAttribute("data-y",r),o.className="Black",s.id=e[a][r].mark;break;case"bB":s.appendChild(o);let u=new n("Bishop");o.src=u.srcB,o.id=u.getName()+a+r,s.setAttribute("data-x",a),s.setAttribute("data-y",r),o.className="Black",s.id=e[a][r].mark;break;case"qB":s.appendChild(o);let m=new k("Queen");o.src=m.srcB,o.id=m.getName()+a+r,s.setAttribute("data-x",a),s.setAttribute("data-y",r),o.className="Black",s.id=e[a][r].mark;break;case"kingB":s.appendChild(o);let p=new c("King");o.src=p.srcB,o.id=p.getName()+a+r,s.setAttribute("data-x",a),s.setAttribute("data-y",r),o.className="Black",s.id=e[a][r].mark;break;case"pW":s.appendChild(o);let f=new g("Pawn");o.src=f.srcW,o.id=f.getName()+a+r,s.setAttribute("data-x",a),s.setAttribute("data-y",r),o.className="White",s.id=e[a][r].mark;break;case"rW":s.appendChild(o);let h=new B("Rook");o.src=h.srcW,o.id=h.getName()+a+r,s.setAttribute("data-x",a),s.setAttribute("data-y",r),o.className="White",s.id=e[a][r].mark;break;case"kW":s.appendChild(o);let b=new l("Knight");o.src=b.srcW,o.id=b.getName()+a+r,s.setAttribute("data-x",a),s.setAttribute("data-y",r),o.className="White",s.id=e[a][r].mark;break;case"bW":s.appendChild(o);let y=new n("Bishop");o.src=y.srcW,o.id=y.getName()+a+r,s.setAttribute("data-x",a),s.setAttribute("data-y",r),o.className="White",s.id=e[a][r].mark;break;case"qW":s.appendChild(o);let v=new k("Queen");o.src=v.srcW,o.id=v.getName()+a+r,s.setAttribute("data-x",a),s.setAttribute("data-y",r),o.className="White",s.id=e[a][r].mark;break;case"kingW":s.appendChild(o);let x=new c("King");o.src=x.srcW,o.id=x.getName()+a+r,s.setAttribute("data-x",a),s.setAttribute("data-y",r),o.className="White",s.id=e[a][r].mark;break;case 0:s.id=e[a][r].mark,s.setAttribute("data-x",a),s.setAttribute("data-y",r)}t++,i.appendChild(s)}t++,r.appendChild(i)}}addDragAndDropOnTable(){const e=document.getElementsByTagName("table")[0].getElementsByTagName("td");for(let t of e)t.draggable=!0,t.ondragover=function(e){e.preventDefault()},t.ondrop=function(e){let r=e.target.id,a=document.getElementById(r),n=e.dataTransfer.getData("id"),i=document.getElementById(n),s=e.dataTransfer.getData("className");"Black"==s&&("Black"==e.target.className||e.target.append(document.getElementById(n)),"White"==e.target.className&&(alert("Съел"),e.target.append(document.getElementById(n)),t.removeChild(a),t.appendChild(i))),"White"==s&&("White"==e.target.className||e.target.append(document.getElementById(n)),"Black"==e.target.className&&(alert("Съел"),e.target.append(document.getElementById(n)),t.removeChild(a),t.appendChild(i)))},t.ondragstart=function(e){e.dataTransfer.setData("id",e.target.id),e.dataTransfer.setData("className",e.target.className)}}insideChessBoard(e,t,r){for(let a=0;a<e.length;a++)for(let a=0;a<e.length;a++)return!(t||t||r||r)}showMoves(){const e=document.getElementsByTagName("table")[0].getElementsByTagName("td");for(let t of e){const e=t.getElementsByTagName("img");for(let r of e)"Pawn10"===r.id&&(t.onmouseover=()=>{t.dataset.x,t.dataset.y;const e=document.querySelectorAll('td[data-x={x}], td[data-y="y"]');for(let t of e)t.style.backgroundColor="yellow"})}}deleteElement(e,t){let r=document.createElement(e),a=document.getElementById(t);try{a.removeChild(r),console.log("Element delete")}catch{console.log("Element not found or not deleted")}}}var v=[[{figure:"rB",mark:"A8"},{figure:"kB",mark:"B8"},{figure:"bB",mark:"C8"},{figure:"qB",mark:"D8"},{figure:"kingB",mark:"E8"},{figure:"bB",mark:"F8"},{figure:"kB",mark:"G8"},{figure:"rB",mark:"H8"}],[{figure:"pB",mark:"A7"},{figure:"pB",mark:"B7"},{figure:"pB",mark:"C7"},{figure:"pB",mark:"D7"},{figure:"pB",mark:"E7"},{figure:"pB",mark:"F7"},{figure:"pB",mark:"G7"},{figure:"pB",mark:"H7"}],[{figure:0,mark:"A6"},{figure:0,mark:"B6"},{figure:0,mark:"C6"},{figure:0,mark:"D6"},{figure:0,mark:"E6"},{figure:0,mark:"F6"},{figure:0,mark:"G6"},{figure:0,mark:"H6"}],[{figure:0,mark:"A5"},{figure:0,mark:"B5"},{figure:0,mark:"C5"},{figure:0,mark:"D5"},{figure:0,mark:"E5"},{figure:0,mark:"F5"},{figure:0,mark:"G5"},{figure:0,mark:"H5"}],[{figure:0,mark:"A4"},{figure:0,mark:"B4"},{figure:0,mark:"C4"},{figure:0,mark:"D4"},{figure:0,mark:"E4"},{figure:0,mark:"F4"},{figure:0,mark:"G4"},{figure:0,mark:"H4"}],[{figure:0,mark:"A3"},{figure:0,mark:"B3"},{figure:0,mark:"C3"},{figure:0,mark:"D3"},{figure:0,mark:"E3"},{figure:0,mark:"F3"},{figure:0,mark:"G3"},{figure:0,mark:"H3"}],[{figure:"pW",mark:"A2"},{figure:"pW",mark:"B2"},{figure:"pW",mark:"C2"},{figure:"pW",mark:"D2"},{figure:"pW",mark:"E2"},{figure:"pW",mark:"F2"},{figure:"pW",mark:"G2"},{figure:"pW",mark:"H2"}],[{figure:"rW",mark:"A1"},{figure:"kW",mark:"B1"},{figure:"bW",mark:"C1"},{figure:"qW",mark:"D1"},{figure:"kingW",mark:"E1"},{figure:"bW",mark:"F1"},{figure:"kW",mark:"G1"},{figure:"rW",mark:"H1"}]],x=r(379),N=r.n(x),W=r(795),w=r.n(W),A=r(569),E=r.n(A),C=r(565),T=r.n(C),D=r(216),I=r.n(D),F=r(589),M=r.n(F),H=r(341),S={};S.styleTagTransform=M(),S.setAttributes=T(),S.insert=E().bind(null,"head"),S.domAPI=w(),S.insertStyleElement=I(),N()(H.Z,S),H.Z&&H.Z.locals&&H.Z.locals,new class{constructor(e){this.name=e}draw(){var e=new y;e.createElement("table","content"),e.createTableFromArray(v),e.addDragAndDropOnTable(),e.showMoves()}reDraw(){}}("Chess").draw()})()})();