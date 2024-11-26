(function(){var e={207:function(e,n,t){"use strict";var r=t(5130),o=t(6768);const u={class:"home-container"};function a(e,n,t,r,a,s){const i=(0,o.g2)("router-view");return(0,o.uX)(),(0,o.CE)("div",u,[n[0]||(n[0]=(0,o.Lk)("nav",{class:"navbar"},[(0,o.Lk)("h1",null,"UNSW Courses")],-1)),(0,o.bF)(i)])}var s={name:"App"},i=t(1241);const c=(0,i.A)(s,[["render",a]]);var l=c,d=t(1387),f=t(4232);const p={class:"content"},v={class:"courses-section"},m={class:"section-header"},h={class:"filter-group"},g={class:"custom-select"},y=["value"],C={class:"course-list"},b=["onClick"],k={class:"term"};function L(e,n,t,u,a,s){return(0,o.uX)(),(0,o.CE)("div",p,[(0,o.Lk)("div",v,[(0,o.Lk)("div",m,[n[2]||(n[2]=(0,o.Lk)("h2",null,"Tutoring Courses",-1)),(0,o.Lk)("div",h,[(0,o.Lk)("div",g,[(0,o.bo)((0,o.Lk)("select",{"onUpdate:modelValue":n[0]||(n[0]=e=>a.selectedYear=e),class:"year-selector"},[n[1]||(n[1]=(0,o.Lk)("option",{value:"all"},"All Years",-1)),((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(s.availableYears,(e=>((0,o.uX)(),(0,o.CE)("option",{key:e,value:e},(0,f.v_)(e),9,y)))),128))],512),[[r.u1,a.selectedYear]])])])]),(0,o.Lk)("div",C,[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(s.filteredTutoringCourses,(e=>((0,o.uX)(),(0,o.CE)("div",{key:`${e.code}-${e.term}`,class:"course-card",onClick:n=>s.goToCourse(e)},[(0,o.Lk)("h3",null,(0,f.v_)(e.code),1),(0,o.Lk)("p",null,(0,f.v_)(e.name),1),(0,o.Lk)("span",k,(0,f.v_)(e.term),1)],8,b)))),128))])])])}t(4114),t(7642),t(8004),t(3853),t(5876),t(2475),t(5024),t(1698),t(8992),t(4520),t(1454);var T={name:"HomePage",data(){return{selectedYear:"all",tutoringCourses:[{code:"DPST1091",name:"Programming Fundamentals",type:"tutoring",term:"24T3",year:"2024"},{code:"DPST1091",name:"Programming Fundamentals",type:"tutoring",term:"23T3",year:"2023"}],learningCourses:[{code:"COMP3121",name:"Computer Science Project",term:"24T3",type:"learning",year:"2024"}],outsideCourses:[{code:"cs441n",name:"Deep Learning",term:"semester 1",type:"outside",year:"2024"}]}},computed:{availableYears(){const e=new Set(this.tutoringCourses.map((e=>e.year)));return Array.from(e).sort().reverse()},filteredTutoringCourses(){return"all"===this.selectedYear?this.tutoringCourses:this.tutoringCourses.filter((e=>e.year===this.selectedYear))}},methods:{goToCourse(e){const n=`${e.code}${e.term}`;this.$router.push(`/course/${e.type}/${n}`)}}};const E=(0,i.A)(T,[["render",L],["__scopeId","data-v-a9a029f0"]]);var w=E;const O={class:"course-detail"},_={class:"course-header"};function A(e,n,t,r,u,a){return(0,o.uX)(),(0,o.CE)("div",O,[(0,o.Lk)("div",_,[(0,o.Lk)("button",{class:"back-button",onClick:n[0]||(n[0]=n=>e.$router.go(-1))},"Back"),(0,o.Lk)("h2",null,(0,f.v_)(r.courseCode),1)]),((0,o.uX)(),(0,o.Wv)(o.tY,null,{default:(0,o.k6)((()=>[((0,o.uX)(),(0,o.Wv)((0,o.$y)(r.courseComponent),{courseCode:r.courseCode,courseType:r.courseType},null,8,["courseCode","courseType"]))])),fallback:(0,o.k6)((()=>n[1]||(n[1]=[(0,o.Lk)("div",null,"Loading...",-1)]))),_:1}))])}var P={name:"CourseDetail",setup(){const e=(0,d.lq)(),n=(0,o.EW)((()=>e.params.type)),r=(0,o.EW)((()=>e.params.code)),u=(0,o.$V)((()=>t(3167)(`./${e.params.code}Detail.vue`)));return{courseType:n,courseCode:r,courseComponent:u}}};const S=(0,i.A)(P,[["render",A],["__scopeId","data-v-0ba76c22"]]);var j=S;const D=[{path:"/",name:"Home",component:w},{path:"/course/:type/:code",name:"CourseDetail",component:j},{path:"/course/:courseCode/revision/:revisionId",name:"CourseRevision",component:()=>t.e(131).then(t.bind(t,7131))}],N=(0,d.aE)({history:(0,d.LA)(),routes:D});var $=N;const F=(0,r.Ef)(l);F.use($),F.mount("#app")},3167:function(e,n,t){var r={"./DPST109124T3Detail.vue":[1798,798]};function o(e){if(!t.o(r,e))return Promise.resolve().then((function(){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}));var n=r[e],o=n[0];return t.e(n[1]).then((function(){return t(o)}))}o.keys=function(){return Object.keys(r)},o.id=3167,e.exports=o}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var u=n[r]={exports:{}};return e[r].call(u.exports,u,u.exports,t),u.exports}t.m=e,function(){var e=[];t.O=function(n,r,o,u){if(!r){var a=1/0;for(l=0;l<e.length;l++){r=e[l][0],o=e[l][1],u=e[l][2];for(var s=!0,i=0;i<r.length;i++)(!1&u||a>=u)&&Object.keys(t.O).every((function(e){return t.O[e](r[i])}))?r.splice(i--,1):(s=!1,u<a&&(a=u));if(s){e.splice(l--,1);var c=o();void 0!==c&&(n=c)}}return n}u=u||0;for(var l=e.length;l>0&&e[l-1][2]>u;l--)e[l]=e[l-1];e[l]=[r,o,u]}}(),function(){t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,{a:n}),n}}(),function(){t.d=function(e,n){for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}}(),function(){t.f={},t.e=function(e){return Promise.all(Object.keys(t.f).reduce((function(n,r){return t.f[r](e,n),n}),[]))}}(),function(){t.u=function(e){return"js/"+e+"."+{131:"b35cd3ff",798:"008686b5"}[e]+".js"}}(),function(){t.miniCssF=function(e){return"css/"+e+"."+{131:"f6d9a72d",798:"47a54024"}[e]+".css"}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){var e={},n="unswcourses:";t.l=function(r,o,u,a){if(e[r])e[r].push(o);else{var s,i;if(void 0!==u)for(var c=document.getElementsByTagName("script"),l=0;l<c.length;l++){var d=c[l];if(d.getAttribute("src")==r||d.getAttribute("data-webpack")==n+u){s=d;break}}s||(i=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,t.nc&&s.setAttribute("nonce",t.nc),s.setAttribute("data-webpack",n+u),s.src=r),e[r]=[o];var f=function(n,t){s.onerror=s.onload=null,clearTimeout(p);var o=e[r];if(delete e[r],s.parentNode&&s.parentNode.removeChild(s),o&&o.forEach((function(e){return e(t)})),n)return n(t)},p=setTimeout(f.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=f.bind(null,s.onerror),s.onload=f.bind(null,s.onload),i&&document.head.appendChild(s)}}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){t.p="/unswcourses/"}(),function(){if("undefined"!==typeof document){var e=function(e,n,r,o,u){var a=document.createElement("link");a.rel="stylesheet",a.type="text/css",t.nc&&(a.nonce=t.nc);var s=function(t){if(a.onerror=a.onload=null,"load"===t.type)o();else{var r=t&&t.type,s=t&&t.target&&t.target.href||n,i=new Error("Loading CSS chunk "+e+" failed.\n("+r+": "+s+")");i.name="ChunkLoadError",i.code="CSS_CHUNK_LOAD_FAILED",i.type=r,i.request=s,a.parentNode&&a.parentNode.removeChild(a),u(i)}};return a.onerror=a.onload=s,a.href=n,r?r.parentNode.insertBefore(a,r.nextSibling):document.head.appendChild(a),a},n=function(e,n){for(var t=document.getElementsByTagName("link"),r=0;r<t.length;r++){var o=t[r],u=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(u===e||u===n))return o}var a=document.getElementsByTagName("style");for(r=0;r<a.length;r++){o=a[r],u=o.getAttribute("data-href");if(u===e||u===n)return o}},r=function(r){return new Promise((function(o,u){var a=t.miniCssF(r),s=t.p+a;if(n(a,s))return o();e(r,s,null,o,u)}))},o={524:0};t.f.miniCss=function(e,n){var t={131:1,798:1};o[e]?n.push(o[e]):0!==o[e]&&t[e]&&n.push(o[e]=r(e).then((function(){o[e]=0}),(function(n){throw delete o[e],n})))}}}(),function(){var e={524:0};t.f.j=function(n,r){var o=t.o(e,n)?e[n]:void 0;if(0!==o)if(o)r.push(o[2]);else{var u=new Promise((function(t,r){o=e[n]=[t,r]}));r.push(o[2]=u);var a=t.p+t.u(n),s=new Error,i=function(r){if(t.o(e,n)&&(o=e[n],0!==o&&(e[n]=void 0),o)){var u=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.src;s.message="Loading chunk "+n+" failed.\n("+u+": "+a+")",s.name="ChunkLoadError",s.type=u,s.request=a,o[1](s)}};t.l(a,i,"chunk-"+n,n)}},t.O.j=function(n){return 0===e[n]};var n=function(n,r){var o,u,a=r[0],s=r[1],i=r[2],c=0;if(a.some((function(n){return 0!==e[n]}))){for(o in s)t.o(s,o)&&(t.m[o]=s[o]);if(i)var l=i(t)}for(n&&n(r);c<a.length;c++)u=a[c],t.o(e,u)&&e[u]&&e[u][0](),e[u]=0;return t.O(l)},r=self["webpackChunkunswcourses"]=self["webpackChunkunswcourses"]||[];r.forEach(n.bind(null,0)),r.push=n.bind(null,r.push.bind(r))}();var r=t.O(void 0,[504],(function(){return t(207)}));r=t.O(r)})();
//# sourceMappingURL=app.8f3e689c.js.map