webpackJsonp([2],{"+Rk1":function(t,n){n.f=Object.getOwnPropertySymbols},"+rzM":function(t,n){var e=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=e)},"1Gnk":function(t,n){n.f={}.propertyIsEnumerable},"1Tda":function(t,n,e){"use strict";var i=e("dy8G"),o=e("+Rk1"),r=e("1Gnk"),s=e("FUac"),a=e("4JPz"),c=Object.assign;t.exports=!c||e("W3U9")(function(){var t={},n={},e=Symbol(),i="abcdefghijklmnopqrst";return t[e]=7,i.split("").forEach(function(t){n[t]=t}),7!=c({},t)[e]||Object.keys(c({},n)).join("")!=i})?function(t,n){for(var e=s(t),c=arguments.length,u=1,f=o.f,l=r.f;c>u;)for(var d,h=a(arguments[u++]),p=f?i(h).concat(f(h)):i(h),g=p.length,v=0;g>v;)l.call(h,d=p[v++])&&(e[d]=h[d]);return e}:c},"4JPz":function(t,n,e){var i=e("emx8");t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==i(t)?t.split(""):Object(t)}},"69rs":function(t,n){var e={}.hasOwnProperty;t.exports=function(t,n){return e.call(t,n)}},"6Qai":function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},"7Adc":function(t,n){var e=Math.ceil,i=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?i:e)(t)}},AEfT:function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},Bxrf:function(t,n,e){var i=e("AEfT");t.exports=function(t,n,e){if(i(t),void 0===n)return t;switch(e){case 1:return function(e){return t.call(n,e)};case 2:return function(e,i){return t.call(n,e,i)};case 3:return function(e,i,o){return t.call(n,e,i,o)}}return function(){return t.apply(n,arguments)}}},FUac:function(t,n,e){var i=e("Zlf3");t.exports=function(t){return Object(i(t))}},FZMV:function(t,n,e){var i=e("7Adc"),o=Math.min;t.exports=function(t){return t>0?o(i(t),9007199254740991):0}},"H+jW":function(t,n){},Jemx:function(t,n,e){var i=e("Xc+a"),o=e("aLLD"),r=e("db+C"),s=Object.defineProperty;n.f=e("iPQn")?Object.defineProperty:function(t,n,e){if(i(t),n=r(n,!0),i(e),o)try{return s(t,n,e)}catch(t){}if("get"in e||"set"in e)throw TypeError("Accessors not supported!");return"value"in e&&(t[n]=e.value),t}},JyHQ:function(t,n,e){e("onsV"),t.exports=e("hC6b").Object.assign},LV4Q:function(t,n){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},NHnr:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=e("7+uW"),o=e("oYSN"),r=e.n(o),s=e("NYxO"),a={name:"AudioPlay",computed:r()({},Object(s.c)(["isPlay","songMsg","songList","curSongIndex"])),mounted:function(){this.isPlay?this.$refs.audioContext.play():this.$refs.audioContext.pause()},methods:r()({},Object(s.b)(["changePlayeState","changeCurSongIndex","selectPlaySong"]),{playMusic:function(){this.changePlayeState(!this.isPlay)},changeCurSong:function(t){var n=this;this.changeCurSongIndex(this.curSongIndex+t);var e=this.songList[this.curSongIndex];this.selectPlaySong(e),this.timer=setTimeout(function(){n.$refs.audioplay.play()},500)},next:function(){this.curSongIndex<this.songList.length-1?this.changeCurSong(1):(this.changeCurSongIndex(0),this.selectPlaySong(this.songList[this.curSongIndex]))},prev:function(){this.curSongIndex>0?this.changeCurSong(-1):(this.changeCurSongIndex(this.songList.length-1),this.selectPlaySong(this.songList[this.curSongIndex]))},end:function(){this.next()},timeupdate:function(){var t=this.$refs.audioContext;this.drawCircle(t.currentTime/t.duration)},drawCircle:function(t){var n=this.$refs.circle.getContext("2d"),e=2*t;n.clearRect(0,0,120,120),n.lineWidth=10,n.strokeStyle="#d43c33",n.beginPath(),n.arc(60,60,45,0,e*Math.PI,!1),n.stroke()}}),watch:{isPlay:function(t){t?this.$refs.audioContext.play():this.$refs.audioContext.pause()},songMsg:function(t){var n=this;clearTimeout(this.timer),this.timer=setTimeout(function(){n.$refs.audioContext.play()},1e3)}}},c={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"play-content"},[e("div",{staticClass:"play-fixed flex-middle"},[e("div",{staticClass:"pic"},[e("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.songMsg.cover,expression:"songMsg.cover"}],attrs:{alt:""}})]),t._v(" "),e("div",{staticClass:"info flex1"},[e("div",{staticClass:"name line-clamp1"},[t._v(t._s(t.songMsg.name))]),t._v(" "),e("div",{staticClass:"auth line-clamp1"},[t._v(t._s(t.songMsg.auth))])]),t._v(" "),e("div",{staticClass:"ctrl flex-middle"},[e("div",{staticClass:"prev",on:{click:t.prev}},[e("i",{staticClass:"iconfont icon-prev-song"})]),t._v(" "),e("div",{staticClass:"center",on:{click:t.playMusic}},[e("i",{class:["iconfont",{"icon-bofang":!t.isPlay,"icon-pasue-play":t.isPlay}]}),t._v(" "),e("canvas",{ref:"circle",attrs:{width:"120",height:"120"}})]),t._v(" "),e("div",{staticClass:"next",on:{click:t.next}},[e("i",{staticClass:"iconfont icon-next-song"})]),t._v(" "),t._m(0)]),t._v(" "),e("audio",{ref:"audioContext",attrs:{src:"http://music.163.com/song/media/outer/url?id="+t.songMsg.id+".mp3"},on:{ended:t.end,timeupdate:t.timeupdate}})])])},staticRenderFns:[function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"menu"},[n("i",{staticClass:"iconfont icon-bflb"})])}]};e("VU/8")(a,c,!1,function(t){e("klN3")},"data-v-e0af16fc",null).exports;var u={name:"App",data:function(){return{isPlay:!1,songMsg:null,curSongIndex:-1,songList:[]}},methods:{playMusic:function(t,n,e){var i=this;o&&clearTimeout(o),this.songMsg=t,this.isPlay=!0,this.songList=n,this.changeCurSongIndex(e);var o=setTimeout(function(){i.$refs.audioContext.play()},1e3)},changeIsPlay:function(t){this.isPlay=t},changeCurSongIndex:function(t){this.curSongIndex=t},selectPlaySong:function(t){this.songMsg=t},changeCurSong:function(t){var n=this;this.changeCurSongIndex(this.curSongIndex+t);var e=this.songList[this.curSongIndex];this.selectPlaySong(e),this.timer=setTimeout(function(){n.$refs.audioplay.play()},500)},next:function(){this.curSongIndex<this.songList.length-1?this.changeCurSong(1):(this.changeCurSongIndex(0),this.selectPlaySong(this.songList[this.curSongIndex]))},prev:function(){this.curSongIndex>0?this.changeCurSong(-1):(this.changeCurSongIndex(this.songList.length-1),this.selectPlaySong(this.songList[this.curSongIndex]))},end:function(){this.next()},timeupdate:function(){var t=this,n=this.$refs.audioContext;n?this.drawCircle(n.currentTime/n.duration):setTimeout(function(){t.drawCircle(n.currentTime/n.duration)},300)},drawCircle:function(t){var n=this.$refs.circle.getContext("2d"),e=2*t;n.clearRect(0,0,120,120),n.lineWidth=10,n.strokeStyle="#d43c33",n.beginPath(),n.arc(60,60,45,0,e*Math.PI,!1),n.stroke()}},watch:{isPlay:function(t){var n=this,e=function(){t?n.$refs.audioContext.play():n.$refs.audioContext.pause()};this.$refs.audioContext?e():setTimeout(e,300)},songMsg:function(t){var n=this;clearTimeout(this.timer),this.timer=setTimeout(function(){n.$refs.audioContext.play()},1e3)}}},f={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"app"}},[e("router-view",{attrs:{audioPlay:t.playMusic,changeCurSongIndex:t.changeCurSongIndex,curSongIndex:t.curSongIndex,isPlay:t.isPlay}}),t._v(" "),t.songMsg?e("div",{staticClass:"play-content"},[e("div",{staticClass:"play-fixed flex-middle"},[e("div",{staticClass:"pic"},[e("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.songMsg.cover,expression:"songMsg.cover"}],attrs:{alt:""}})]),t._v(" "),e("div",{staticClass:"info flex1"},[e("div",{staticClass:"name line-clamp1"},[t._v(t._s(t.songMsg.name))]),t._v(" "),e("div",{staticClass:"auth line-clamp1"},[t._v(t._s(t.songMsg.auth))])]),t._v(" "),e("div",{staticClass:"ctrl flex-middle"},[e("div",{staticClass:"prev",on:{click:t.prev}},[e("i",{staticClass:"iconfont icon-prev-song"})]),t._v(" "),e("div",{staticClass:"center",on:{click:function(n){t.changeIsPlay(!t.isPlay)}}},[e("i",{class:["iconfont",{"icon-bofang":!t.isPlay,"icon-pasue-play":t.isPlay}]}),t._v(" "),e("canvas",{ref:"circle",attrs:{width:"120",height:"120"}})]),t._v(" "),e("div",{staticClass:"next",on:{click:t.next}},[e("i",{staticClass:"iconfont icon-next-song"})]),t._v(" "),t._m(0)]),t._v(" "),e("audio",{ref:"audioContext",attrs:{src:"http://music.163.com/song/media/outer/url?id="+t.songMsg.id+".mp3"},on:{ended:t.end,timeupdate:t.timeupdate}})])]):t._e()],1)},staticRenderFns:[function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"menu"},[n("i",{staticClass:"iconfont icon-bflb"})])}]};var l=e("VU/8")(u,f,!1,function(t){e("H+jW")},null,null).exports,d=e("/ocq");i.a.use(d.a);var h=new d.a({mode:"history",routes:[{path:"/",name:"Home",component:function(){return e.e(1).then(e.bind(null,"Irp/"))}},{path:"/search",name:"search",component:function(){return e.e(0).then(e.bind(null,"o7ta"))}},{path:"/GdList",name:"GdList",component:function(){return e.e(0).then(e.bind(null,"OgZT"))}},{path:"/GdDetail/:id",name:"GdDetail",component:function(){return e.e(0).then(e.bind(null,"GXPe"))}}]}),p=e("mtWM"),g=e.n(p),v="http://music.mendada.cn/api",x=r()({},g.a,{get:function(){var t=v+arguments[0];return g.a.get(t)},post:function(){var t=v+arguments[0],n=arguments[1];return g.a.post(t,n)}}),y=e("7QTg"),m=e.n(y),C=e("cTzj"),_=e.n(C);i.a.use(s.a);var S=new s.a.Store({state:{},mutations:{},actions:{}}),b=e("Lw6n"),P=e.n(b);i.a.filter("countFormat",function(t){var n=t;return t>1e8?n=(t/1e8).toFixed(1)+"亿":t>1e4&&(n=(t/1e4).toFixed(1)+"万"),n});e("sVYa"),e("v2ns"),e("NcP2"),e("UfKn");new P.a,i.a.config.productionTip=!1,i.a.use(m.a),i.a.prototype.$http=x,i.a.use(_.a,{preLoad:1.3,attempt:1}),new i.a({el:"#app",store:S,router:h,components:{App:l},template:"<App/>"})},NJe3:function(t,n,e){var i=e("7Adc"),o=Math.max,r=Math.min;t.exports=function(t,n){return(t=i(t))<0?o(t+n,0):r(t,n)}},NcP2:function(t,n){},QoAr:function(t,n,e){var i=e("Jemx"),o=e("6Qai");t.exports=e("iPQn")?function(t,n,e){return i.f(t,n,o(1,e))}:function(t,n,e){return t[n]=e,t}},"Tuy/":function(t,n,e){var i=e("hC6b"),o=e("+rzM"),r=o["__core-js_shared__"]||(o["__core-js_shared__"]={});(t.exports=function(t,n){return r[t]||(r[t]=void 0!==n?n:{})})("versions",[]).push({version:i.version,mode:e("fcIa")?"pure":"global",copyright:"© 2018 Denis Pushkarev (zloirock.ru)"})},UfKn:function(t,n){},W3U9:function(t,n){t.exports=function(t){try{return!!t()}catch(t){return!0}}},WXzC:function(t,n){var e=0,i=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++e+i).toString(36))}},WwqW:function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},"Xc+a":function(t,n,e){var i=e("WwqW");t.exports=function(t){if(!i(t))throw TypeError(t+" is not an object!");return t}},Zlf3:function(t,n){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},ZytV:function(t,n,e){var i=e("69rs"),o=e("gXjG"),r=e("kVtx")(!1),s=e("bDok")("IE_PROTO");t.exports=function(t,n){var e,a=o(t),c=0,u=[];for(e in a)e!=s&&i(a,e)&&u.push(e);for(;n.length>c;)i(a,e=n[c++])&&(~r(u,e)||u.push(e));return u}},aLLD:function(t,n,e){t.exports=!e("iPQn")&&!e("W3U9")(function(){return 7!=Object.defineProperty(e("vXbD")("div"),"a",{get:function(){return 7}}).a})},bDok:function(t,n,e){var i=e("Tuy/")("keys"),o=e("WXzC");t.exports=function(t){return i[t]||(i[t]=o(t))}},cGkp:function(t,n,e){var i=e("+rzM"),o=e("hC6b"),r=e("Bxrf"),s=e("QoAr"),a=e("69rs"),c=function(t,n,e){var u,f,l,d=t&c.F,h=t&c.G,p=t&c.S,g=t&c.P,v=t&c.B,x=t&c.W,y=h?o:o[n]||(o[n]={}),m=y.prototype,C=h?i:p?i[n]:(i[n]||{}).prototype;for(u in h&&(e=n),e)(f=!d&&C&&void 0!==C[u])&&a(y,u)||(l=f?C[u]:e[u],y[u]=h&&"function"!=typeof C[u]?e[u]:v&&f?r(l,i):x&&C[u]==l?function(t){var n=function(n,e,i){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(n);case 2:return new t(n,e)}return new t(n,e,i)}return t.apply(this,arguments)};return n.prototype=t.prototype,n}(l):g&&"function"==typeof l?r(Function.call,l):l,g&&((y.virtual||(y.virtual={}))[u]=l,t&c.R&&m&&!m[u]&&s(m,u,l)))};c.F=1,c.G=2,c.S=4,c.P=8,c.B=16,c.W=32,c.U=64,c.R=128,t.exports=c},"db+C":function(t,n,e){var i=e("WwqW");t.exports=function(t,n){if(!i(t))return t;var e,o;if(n&&"function"==typeof(e=t.toString)&&!i(o=e.call(t)))return o;if("function"==typeof(e=t.valueOf)&&!i(o=e.call(t)))return o;if(!n&&"function"==typeof(e=t.toString)&&!i(o=e.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},dy8G:function(t,n,e){var i=e("ZytV"),o=e("LV4Q");t.exports=Object.keys||function(t){return i(t,o)}},emx8:function(t,n){var e={}.toString;t.exports=function(t){return e.call(t).slice(8,-1)}},fcIa:function(t,n){t.exports=!0},gXjG:function(t,n,e){var i=e("4JPz"),o=e("Zlf3");t.exports=function(t){return i(o(t))}},hC6b:function(t,n){var e=t.exports={version:"2.5.6"};"number"==typeof __e&&(__e=e)},iPQn:function(t,n,e){t.exports=!e("W3U9")(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},kVtx:function(t,n,e){var i=e("gXjG"),o=e("FZMV"),r=e("NJe3");t.exports=function(t){return function(n,e,s){var a,c=i(n),u=o(c.length),f=r(s,u);if(t&&e!=e){for(;u>f;)if((a=c[f++])!=a)return!0}else for(;u>f;f++)if((t||f in c)&&c[f]===e)return t||f||0;return!t&&-1}}},klN3:function(t,n){},oYSN:function(t,n,e){"use strict";n.__esModule=!0;var i,o=e("p/Cb"),r=(i=o)&&i.__esModule?i:{default:i};n.default=r.default||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])}return t}},onsV:function(t,n,e){var i=e("cGkp");i(i.S+i.F,"Object",{assign:e("1Tda")})},"p/Cb":function(t,n,e){t.exports={default:e("JyHQ"),__esModule:!0}},v2ns:function(t,n){},vXbD:function(t,n,e){var i=e("WwqW"),o=e("+rzM").document,r=i(o)&&i(o.createElement);t.exports=function(t){return r?o.createElement(t):{}}}},["NHnr"]);
//# sourceMappingURL=app.e07ef4a5733f44827ab0.js.map