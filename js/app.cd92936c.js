(function(e){function t(t){for(var n,s,o=t[0],i=t[1],b=t[2],d=0,l=[];d<o.length;d++)s=o[d],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&l.push(r[s][0]),r[s]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);u&&u(t);while(l.length)l.shift()();return c.push.apply(c,b||[]),a()}function a(){for(var e,t=0;t<c.length;t++){for(var a=c[t],n=!0,s=1;s<a.length;s++){var o=a[s];0!==r[o]&&(n=!1)}n&&(c.splice(t--,1),e=i(i.s=a[0]))}return e}var n={},s={app:0},r={app:0},c=[];function o(e){return i.p+"js/"+({404:"404",MovieDetail:"MovieDetail"}[e]||e)+"."+{404:"ddd2befa",MovieDetail:"7b00d75e"}[e]+".js"}function i(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.e=function(e){var t=[],a={404:1,MovieDetail:1};s[e]?t.push(s[e]):0!==s[e]&&a[e]&&t.push(s[e]=new Promise((function(t,a){for(var n="css/"+({404:"404",MovieDetail:"MovieDetail"}[e]||e)+"."+{404:"e8c9a077",MovieDetail:"452ef9d9"}[e]+".css",r=i.p+n,c=document.getElementsByTagName("link"),o=0;o<c.length;o++){var b=c[o],d=b.getAttribute("data-href")||b.getAttribute("href");if("stylesheet"===b.rel&&(d===n||d===r))return t()}var l=document.getElementsByTagName("style");for(o=0;o<l.length;o++){b=l[o],d=b.getAttribute("data-href");if(d===n||d===r)return t()}var u=document.createElement("link");u.rel="stylesheet",u.type="text/css",u.onload=t,u.onerror=function(t){var n=t&&t.target&&t.target.src||r,c=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=n,delete s[e],u.parentNode.removeChild(u),a(c)},u.href=r;var j=document.getElementsByTagName("head")[0];j.appendChild(u)})).then((function(){s[e]=0})));var n=r[e];if(0!==n)if(n)t.push(n[2]);else{var c=new Promise((function(t,a){n=r[e]=[t,a]}));t.push(n[2]=c);var b,d=document.createElement("script");d.charset="utf-8",d.timeout=120,i.nc&&d.setAttribute("nonce",i.nc),d.src=o(e);var l=new Error;b=function(t){d.onerror=d.onload=null,clearTimeout(u);var a=r[e];if(0!==a){if(a){var n=t&&("load"===t.type?"missing":t.type),s=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+n+": "+s+")",l.name="ChunkLoadError",l.type=n,l.request=s,a[1](l)}r[e]=void 0}};var u=setTimeout((function(){b({type:"timeout",target:d})}),12e4);d.onerror=d.onload=b,document.head.appendChild(d)}return Promise.all(t)},i.m=e,i.c=n,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(a,n,function(t){return e[t]}.bind(null,n));return a},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/omdb-app/",i.oe=function(e){throw console.error(e),e};var b=window["webpackJsonp"]=window["webpackJsonp"]||[],d=b.push.bind(b);b.push=t,b=b.slice();for(var l=0;l<b.length;l++)t(b[l]);var u=d;c.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},1651:function(e,t,a){"use strict";a("6527")},4678:function(e,t,a){var n={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function s(e){var t=r(e);return a(t)}function r(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}s.keys=function(){return Object.keys(n)},s.resolve=r,e.exports=s,s.id="4678"},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("7a23");function s(e,t,a,s,r,c){var o=Object(n["x"])("Header"),i=Object(n["x"])("router-link"),b=Object(n["x"])("router-view"),d=Object(n["x"])("Footer");return Object(n["q"])(),Object(n["e"])("div",null,[Object(n["h"])(o),Object(n["h"])(i,{to:"/"}),Object(n["h"])(b),Object(n["h"])(d)])}a("b0c0"),a("ac1f"),a("841c");var r=a("cf05"),c=a.n(r),o=Object(n["F"])("data-v-35eb28b5");Object(n["t"])("data-v-35eb28b5");var i={class:"navbar"},b=Object(n["h"])("img",{alt:"Vue logo",src:c.a,class:"logo"},null,-1),d={class:"search"},l={key:0,class:"search-list"},u={class:"results"},j={key:1,src:"https://via.placeholder.com/50x75",alt:"poster",class:""},f={class:"title"};Object(n["r"])();var h=o((function(e,t,a,s,r,c){var h=Object(n["x"])("router-link"),m=Object(n["x"])("font-awesome-icon");return Object(n["q"])(),Object(n["e"])("header",null,[Object(n["h"])("nav",i,[Object(n["h"])(h,{to:"/"},{default:o((function(){return[b]})),_:1}),Object(n["h"])("div",d,[Object(n["E"])(Object(n["h"])("input",{type:"text",class:"search-input",id:"query",placeholder:"Search for a movie","onUpdate:modelValue":t[1]||(t[1]=function(e){return r.keyword=e}),onInput:t[2]||(t[2]=function(){return c.search&&c.search.apply(c,arguments)})},null,544),[[n["B"],r.keyword]]),Object(n["h"])(m,{icon:"search",id:"icon-search"}),r.showSearchBox&&r.suggestions.length?(Object(n["q"])(),Object(n["e"])("div",l,[Object(n["h"])("ul",u,[(Object(n["q"])(!0),Object(n["e"])(n["a"],null,Object(n["w"])(r.suggestions,(function(e,a){return Object(n["q"])(),Object(n["e"])("li",{key:a,class:""},[Object(n["h"])(h,{to:{name:"MovieSingle",params:{id:e.id}}},{default:o((function(){return[Object(n["h"])("span",{class:"",onClick:t[3]||(t[3]=function(e){return r.showSearchBox=!1,r.keyword=""})},[e.poster_path?(Object(n["q"])(),Object(n["e"])("img",{key:0,src:"https://image.tmdb.org/t/p/w92/".concat(e.poster_path),alt:"poster",class:"poster"},null,8,["src"])):(Object(n["q"])(),Object(n["e"])("img",j)),Object(n["h"])("span",f,Object(n["z"])(e.name?e.name:e.original_title),1)])]})),_:2},1032,["to"])])})),128))])])):Object(n["f"])("",!0)])])])})),m=a("2ef0"),p=a.n(m),v=a("bc3a"),O=a.n(v),g={name:"Header",data:function(){return{baseUrl:"https://api.themoviedb.org/3",suggestions:"",keyword:"",showSearchBox:!1}},mounted:function(){var e=this;document.body.addEventListener("keyup",(function(t){27===t.keyCode&&(e.showSearchBox=!1)}))},methods:{search:p.a.debounce((function(e){var t=this;e.target.value.length?O.a.get(this.baseUrl+"/search/movie?api_key=bd208a80386a13918ff04fb3be7750ad&query="+e.target.value).then((function(e){console.log(e),t.showSearchBox=!0,t.suggestions=e.data.results})):this.showSearchBox=!1}),500)}};a("bc97");g.render=h,g.__scopeId="data-v-35eb28b5";var y=g,k=Object(n["F"])("data-v-b74ea48c");Object(n["t"])("data-v-b74ea48c");var w=Object(n["h"])("p",null,[Object(n["g"])("Data: "),Object(n["h"])("a",{class:"link",href:"https://developers.themoviedb.org/3"},"TMDB API")],-1),x=Object(n["h"])("p",null,"2020 by Omdb.com",-1);Object(n["r"])();var _=k((function(e,t,a,s,r,c){return Object(n["q"])(),Object(n["e"])("footer",null,[w,x])})),z={};a("912b");z.render=_,z.__scopeId="data-v-b74ea48c";var M=z,S={name:"App",components:{Header:y,Footer:M}};a("9331");S.render=s;var q=S,D=a("ecee"),B=a("c074"),E=a("ad3d"),P=(a("d3b7"),a("6c02"));function C(e,t,a,s,r,c){var o=Object(n["x"])("MoviesList"),i=Object(n["x"])("router-view");return Object(n["q"])(),Object(n["e"])("div",null,[Object(n["h"])(o),Object(n["h"])(n["b"],{name:"fade",mode:"in-out"},{default:Object(n["D"])((function(){return[Object(n["h"])(i)]})),_:1})])}var L=Object(n["F"])("data-v-59771294");Object(n["t"])("data-v-59771294");var T={class:"movies-wrapper"},A={key:0,class:"movies"},F={class:"content"},N={class:"title link"},U={class:"year"};Object(n["r"])();var I=L((function(e,t,a,s,r,c){var o=Object(n["x"])("router-link");return Object(n["q"])(),Object(n["e"])("div",T,[Object(n["h"])("h1",null,Object(n["z"])(r.title),1),r.movies&&r.movies.length?(Object(n["q"])(),Object(n["e"])("ul",A,[(Object(n["q"])(!0),Object(n["e"])(n["a"],null,Object(n["w"])(r.movies,(function(t){return Object(n["q"])(),Object(n["e"])("li",{movie:t.id,key:t.id,class:"movie"},[Object(n["h"])(o,{to:{name:"MovieSingle",params:{id:t.id},hash:"#movieId"}},{default:L((function(){return[Object(n["h"])("img",{src:"https://image.tmdb.org/t/p/w500/"+t.poster_path,alt:t.title},null,8,["src","alt"])]})),_:2},1032,["to"]),Object(n["h"])("div",F,[Object(n["h"])("p",N,[Object(n["h"])("strong",null,[Object(n["h"])(o,{to:{name:"MovieSingle",params:{id:t.id}}},{default:L((function(){return[Object(n["g"])(Object(n["z"])(t.title),1)]})),_:2},1032,["to"])])]),Object(n["h"])("p",U,Object(n["z"])(e.$filters.formateDate(t.release_date)),1)])],8,["movie"])})),128))])):Object(n["f"])("",!0)])})),H={name:"MoviesList",data:function(){return{title:"Recommended by OMDB",baseUrl:"https://api.themoviedb.org/3",movies:[],errors:[]}},created:function(){var e=this;O.a.get(this.baseUrl+"/list/7069224?api_key=bd208a80386a13918ff04fb3be7750ad").then((function(t){e.movies=t.data.items})).catch((function(t){e.errors.push(t),console.error("There was an error!",t)}))}};a("1651");H.render=I,H.__scopeId="data-v-59771294";var Y=H,J={name:"Home",components:{MoviesList:Y}};a("d370");J.render=C;var V=J,$=[{path:"/",name:"Home",component:V},{path:"/movie/:id",name:"MovieSingle",props:!0,component:function(){return a.e("MovieDetail").then(a.bind(null,"dc92"))}},{path:"/:catchAll(.*)",name:"NotFound",component:function(){return a.e("404").then(a.bind(null,"9703"))}}],K=Object(P["a"])({history:Object(P["b"])(),routes:$,scrollBehavior:function(e,t,a){if(a)return a;var n={};return e.hash?(n.selector=e.hash,!!document.querySelector(e.hash)&&n):void 0}}),R=K,G=a("c1df"),Q=a.n(G);D["c"].add(B["a"]);var W=Object(n["d"])(q).use(R);W.component("font-awesome-icon",E["a"]),W.config.globalProperties.$filters={formateDate:function(e){if(e)return Q()(e).format("YYYY")}},W.mount("#app")},6527:function(e,t,a){},"912b":function(e,t,a){"use strict";a("b157")},9331:function(e,t,a){"use strict";a("bc5b")},b157:function(e,t,a){},ba62:function(e,t,a){},bc5b:function(e,t,a){},bc97:function(e,t,a){"use strict";a("f0fe")},cf05:function(e,t,a){e.exports=a.p+"img/logo.1949d194.png"},d370:function(e,t,a){"use strict";a("ba62")},f0fe:function(e,t,a){}});
//# sourceMappingURL=app.cd92936c.js.map