(this.webpackJsonprmdb=this.webpackJsonprmdb||[]).push([[0],{14:function(e,t,a){e.exports=a.p+"static/media/image-not-found.f183d8a5.svg"},21:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var r=a(0),n=a.n(r),l=function(e){var t=e.height,a=void 0===t?"h-screen":t;return n.a.createElement("div",{className:"".concat(a," flex justify-center items-center")},n.a.createElement("div",{className:"spinner"},n.a.createElement("div",null),n.a.createElement("div",null),n.a.createElement("div",null)))}},22:function(e,t,a){"use strict";a.d(t,"a",(function(){return r})),a.d(t,"b",(function(){return n}));var r=function(e){return e.slice(0,4)},n=function(e){return"".concat(Math.floor(e/60),"h ").concat(e%60,"m")}},23:function(e,t,a){"use strict";a.d(t,"a",(function(){return c})),a.d(t,"b",(function(){return R}));var r=a(24),n=a(0),l=a.n(n),c=function(e,t){var a=Object(n.useState)(t),l=Object(r.a)(a,2),c=l[0],o=l[1];return Object(n.useEffect)((function(){var a=window.setTimeout((function(){o(!t)}),e);return function(){window.clearTimeout(a)}})),c},o=a(13),i=a.n(o),s=a(19),m=a(20),u=a(25),d=document.getElementById("modal-root"),f=function(e){var t=e.children,a=Object(n.useRef)(null);if(null===a.current){var r=document.createElement("div");a.current=r}return Object(n.useEffect)((function(){return d.appendChild(a.current),function(){d.removeChild(a.current)}}),[]),Object(u.createPortal)(l.a.createElement(n.Fragment,null,t),a.current)};function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}function v(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var g=l.a.createElement("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z",clipRule:"evenodd"}),b=function(e){var t=e.svgRef,a=e.title,r=v(e,["svgRef","title"]);return l.a.createElement("svg",p({viewBox:"0 0 20 20",fill:"currentColor",className:"play",ref:t},r),a?l.a.createElement("title",null,a):null,g)},h=l.a.forwardRef((function(e,t){return l.a.createElement(b,p({svgRef:t},e))}));a.p;function y(){return(y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}function x(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var w=l.a.createElement("path",{fillRule:"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",clipRule:"evenodd"}),E=function(e){var t=e.svgRef,a=e.title,r=x(e,["svgRef","title"]);return l.a.createElement("svg",y({viewBox:"0 0 20 20",fill:"currentColor",className:"x w-6 h-6",ref:t},r),a?l.a.createElement("title",null,a):null,w)},O=l.a.forwardRef((function(e,t){return l.a.createElement(E,y({svgRef:t},e))})),j=(a.p,a(4)),k=a(27),N=function(){var e=Object(s.a)(i.a.mark((function e(t,a){var r,n,l,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=fetch("".concat(j.c,"movie/").concat(a,"/videos?api_key=").concat(j.a)),e.next=3,r;case 3:return n=e.sent,e.next=6,n.json();case 6:return l=e.sent,c=l.results.find((function(e){return"Trailer"===e.type})),e.abrupt("return",c);case 9:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),R=function(e){var t=Object(m.b)(["trailer",e],N,{staleTime:1/0}).data,a=Object(n.useState)(!1),c=Object(r.a)(a,2),o=c[0],i=c[1];function s(){i(!0)}function u(){i(!1)}return{showModal:o,showButton:void 0!==t,PlayButton:function(){return l.a.createElement("button",{onClick:s,className:"tracking-widest inline-flex items-center transition-colors duration-500 ease-in-out text-gray-200 hover:text-primary bg-primary hover:bg-secondary border-primary hover:border-primary border py-2 pl-6 pr-8 mr-5 focus:outline-none rounded-sm text-sm lg:mr-8"},l.a.createElement(h,{className:"play w-5 h-5"}),"\xa0PLAY")},TrailerModal:function(){return l.a.createElement(f,null,l.a.createElement("div",{className:"w-screen h-screen px-5 fixed top-0 flex flex-col items-center justify-center z-40 bg-black bg-opacity-50 sm:px-10 md:px-20 lg:px-32 xl:px-40"},l.a.createElement("button",{className:"self-end text-gray-500 transition-colors duration-200 hover:text-gray-100",onClick:u},l.a.createElement(O,{className:"w-10 h-10"})),void 0!==t&&l.a.createElement(k.a,{videoKey:t.key,title:t.name})))}}}},27:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var r=a(0),n=a.n(r),l=Object(r.memo)((function(e){var t=e.title,a=e.videoKey;return n.a.createElement("div",{className:"relative h-0 w-full",style:{paddingBottom:"56.25%"}},n.a.createElement("iframe",{title:t,className:"absolute top-0 left-0 w-full h-full",src:"https://www.youtube-nocookie.com/embed/".concat(a),frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}))}))},33:function(e,t,a){e.exports=a.p+"static/media/jane-doe.bbd131e1.svg"},34:function(e,t,a){e.exports=a.p+"static/media/john-doe.ceb6f6c5.svg"},37:function(e,t,a){"use strict";a.d(t,"a",(function(){return u}));var r=a(0),n=a.n(r),l=a(8),c=a(22),o=a(38),i=a(4),s=a(14),m=a.n(s),u=Object(r.memo)((function(e){var t=e.id,a=e.imageUrl,r=e.language,s=e.releaseDate,u=e.title,d=e.voteAvg;return n.a.createElement("article",{className:"w-full h-full"},n.a.createElement(l.b,{to:"/movie/".concat(t)},n.a.createElement("img",{className:"w-full rounded-md md:rounded-none bg-gray-400",src:a?"".concat(i.b).concat(i.e.sm).concat(a):m.a,alt:u})),n.a.createElement("div",{className:"mt-3 px-2 flex items-center justify-between md:flex-col md:items-start"},n.a.createElement(l.b,{className:"w-3/4 md:w-full",to:"/movie/".concat(t)},n.a.createElement("h2",{className:"text-gray-700 md:text-sm whitespace-no-wrap truncate"},u)),n.a.createElement("div",{className:"w-1/4 md:hidden"},n.a.createElement(o.a,{value:0===d?5:d})),n.a.createElement("p",{className:"hidden md:block md:text-xs md:text-gray-900 md:uppercase"},"".concat(s?Object(c.a)(s):(new Date).getFullYear()+1," ").concat(r))))}))},38:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var r=a(0),n=a.n(r),l=a(42),c=a(23),o=function(e){var t=e.value,a=Object(c.a)(400,!0);return n.a.createElement(l.a,{className:"shadow-2xl",value:a?0:t,maxValue:10,text:"".concat(t),background:!0,backgroundPadding:8,styles:{path:{stroke:"#cc073c",transition:"stroke-dashoffset 0.7s ease 500ms"},text:{fill:"#F3F3F4",fontSize:"1.7rem",dominantBaseline:"middle",textAnchor:"middle"},trail:{stroke:"#00000000"},background:{fill:"#111822"}}})}},4:function(e,t,a){"use strict";a.d(t,"b",(function(){return c})),a.d(t,"c",(function(){return o})),a.d(t,"a",(function(){return i})),a.d(t,"d",(function(){return r})),a.d(t,"e",(function(){return n})),a.d(t,"f",(function(){return l}));var r,n,l,c="https://image.tmdb.org/t/p/",o="https://api.themoviedb.org/3/",i="8159e2d84c680cdf3f26ab87b194850a";!function(e){e.xs="w300",e.sm="w780",e.md="w1280",e.lg="original"}(r||(r={})),function(e){e.xs="w185",e.sm="w342",e.md="w500",e.lg="w780"}(n||(n={})),function(e){e.sm="w185",e.md="h632",e.xl="original"}(l||(l={}))},40:function(e,t,a){"use strict";a.d(t,"a",(function(){return y}));var r=a(0),n=a.n(r),l=a(37),c=a(66),o=a(64),i=a(65),s=a(60),m=a(61),u=a(63),d=a(4),f=a(33),p=a.n(f),v=a(34),g=a.n(v),b=n.a.memo((function(e){var t=e.character,a=e.imageUrl,r=e.name,l=e.gender;return n.a.createElement("article",{className:"w-full h-full flex flex-col"},n.a.createElement("picture",{className:"w-20 h-20 rounded-full overflow-hidden sm:w-24 sm:h-24 md:w-full md:h-auto md:rounded-none"},n.a.createElement("source",{srcSet:a?"".concat(d.b).concat(d.f.md).concat(a):1===l?p.a:g.a,media:"(min-width: 768px)"}),n.a.createElement("img",{className:"h-full w-full object-contain bg-gray-200",src:a?"".concat(d.b).concat(d.f.sm).concat(a):1===l?p.a:g.a,alt:r})),n.a.createElement("h2",{style:{maxHeight:"3rem"},className:"mt-3 text-gray-700 text-center overflow-hidden md:text-sm md:text-left md:truncate"},r),n.a.createElement("p",{className:"hidden md:block md:text-gray-900 md:text-xs md:truncate"},t))})),h=a(27);i.a.use([s.a,m.a,u.a]);var y=function(e){var t=e.data,a=e.title,i=e.cardType,s=e.preRenderedSlides,m=e.breakpointsConfig,u=void 0===m?{0:{slidesPerView:2},470:{slidesPerView:3},649:{slidesPerView:4},768:{slidesPerView:5},1024:{slidesPerView:6},1280:{slidesPerView:7}}:m,d=e.titleClass,f=void 0===d?"":d,p=e.wrapperClass,v=void 0===p?"":p,g=e.sliderClass,y=void 0===g?"":g,x=Object(r.useRef)();return Object(r.useEffect)((function(){var e;null===(e=x.current)||void 0===e||e.updateSlides()}),[t]),n.a.createElement("section",{className:"max-w-screen-lg lg:mx-auto ".concat(v)},n.a.createElement("h2",{className:"text-gray-800 font-light tracking-wider text-lg ".concat(f)},a),n.a.createElement(c.a,{tag:"section",wrapperTag:"ul",className:y,a11y:{enabled:!0},breakpoints:u,mousewheel:{forceToAxis:!0},spaceBetween:15,onInit:function(e){x.current=e},virtual:!!s&&{addSlidesAfter:s,addSlidesBefore:2}},t.length>0&&t.map((function(e){switch(i){case"movie":var t=e,a=t.id,r=t.original_language,c=t.poster_path,s=t.release_date,m=t.title,u=t.vote_average;return n.a.createElement(o.a,{tag:"li",key:a},n.a.createElement(l.a,{id:a,imageUrl:c||"",language:r,releaseDate:s,title:m,voteAvg:u}));case"trailer":var d=e,f=d.name,p=d.key,v=d.id;return n.a.createElement(o.a,{tag:"li",key:v},n.a.createElement(h.a,{videoKey:p,title:f}));default:var g=e,y=g.id,x=g.profile_path,w=g.character,E=g.name,O=g.gender;return n.a.createElement(o.a,{tag:"li",key:y},n.a.createElement(b,{gender:null!==O&&void 0!==O?O:1,imageUrl:x,character:w,name:E}))}}))))}},45:function(e,t,a){e.exports=a(59)},58:function(e,t,a){},59:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),l=a(25),c=a(66),o=a(64),i=a(65),s=a(60),m=a(61),u=a(62),d=a(63),f=a(4),p=a(8),v=a(23),g=a(22),b=a(14),h=a.n(b),y=Object(r.memo)((function(e){var t=e.id,a=e.title,l=e.imageUrl,c=e.description,o=e.score,i=e.releaseDate,s=Object(v.b)(t),m=s.showModal,u=s.showButton,d=s.PlayButton,b=s.TrailerModal;return n.a.createElement(r.Fragment,null,n.a.createElement("article",{className:"mx-2 md:mx-0 relative"},n.a.createElement(p.b,{to:"/movie/".concat(t)},n.a.createElement("picture",null,n.a.createElement("source",{srcSet:l?"".concat(f.b).concat(f.d.lg).concat(l):h.a,media:"(min-width: 1280px)"}),n.a.createElement("source",{srcSet:l?"".concat(f.b).concat(f.d.md).concat(l):h.a,media:"(min-width: 780px)"}),n.a.createElement("img",{className:"relative w-full object-cover object-top shadow-lg rounded-md md:rounded-none md:shadow-none xl:h-screen",src:l?"".concat(f.b).concat(f.d.sm).concat(l):h.a,alt:a}))),n.a.createElement("section",{className:"container mx-auto pt-3 pb-4 px-4 flex justify-between items-center sm:px-6 md:hidden"},n.a.createElement("h2",{className:"text-gray-600 text-xl tracking-wide truncate w-4/6"},a),n.a.createElement("span",{className:"text-gray-700 tracking-wide font-light"},Object(g.a)(i))),n.a.createElement("section",null,n.a.createElement("div",{className:"hidden md:absolute md:top-0 md:w-full md:h-full md:bg-black md:bg-opacity-50 md:block"}),n.a.createElement("div",{className:"hidden md:container md:mb-16 md:block md:absolute md:bottom-0 md:inset-x-0 md:mx-auto md:px-10 lg:mb-24 lg:max-w-screen-lg"},n.a.createElement(p.b,{to:"/movie/".concat(t)},n.a.createElement("h2",{className:"w-3/4 pr-32 leading-none overflow-hidden text-gray-200 text-3xl tracking-widest font-black uppercase lg:text-6xl"},a.length<23?a:"".concat(/[\w &]+/.exec(a)[0]))),n.a.createElement("p",{className:"w-3/4 pr-16 pt-6 tracking-wider text-gray-300 text-sm lg:text-base"},c.length<200?c:"".concat(c.slice(0,197),"...")),n.a.createElement("div",{className:"flex justify-between items-center font-light"},n.a.createElement("p",{className:"text-gray-300 pt-2 tracking-wider text-sm md:text-base"},"TMDb"," ",n.a.createElement("span",{className:"text-gray-200 text-2xl lg:text-4xl pl-2"},0===o?5:o)),u&&n.a.createElement(d,null))))),m&&n.a.createElement(b,null))}));i.a.use([s.a,m.a,u.a,d.a]);var x=function(e){var t=e.data;return n.a.createElement(c.a,{tag:"section",className:"px-4 pb-4 sm:px-8 md:p-0",a11y:{enabled:!0},speed:500,scrollbar:{draggable:!0,dragClass:"swiper-scrollbar-drag bg-primary"},mousewheel:{forceToAxis:!0},virtual:!0},t.slice(0,10).map((function(e){var t=e.id,a=e.title,r=e.backdrop_path,l=e.overview,c=e.vote_average,i=e.release_date;return n.a.createElement(o.a,{key:t},n.a.createElement(y,{id:t.toString(),title:a,releaseDate:i,imageUrl:r,description:l,score:c}))})))},w=a(40),E=a(20),O=a(13),j=a.n(O),k=a(28),N=a(17),R=a(39),P=a(19),S=["now_playing","popular","top_rated","upcoming"],C=function(){var e=Object(P.a)(j.a.mark((function e(){var t,a,r,n,l;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=S.map((function(e){return fetch("".concat(f.c,"movie/").concat(e,"?api_key=").concat(f.a))})),a=fetch("".concat(f.c,"trending/movie/day?api_key=").concat(f.a)),e.next=4,Promise.all([].concat(Object(R.a)(t),[a]));case 4:return r=e.sent,e.next=7,Promise.all(r.map((function(e){return e.json()})));case 7:return n=e.sent,l=Object(N.a)(Object(N.a)({},S.reduce((function(e,t,a){return Object(N.a)(Object(N.a)({},e),{},Object(k.a)({},t,n[a].results))}),{})),{},{trending:n.slice(-1)[0].results}),e.abrupt("return",l);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),B=a(21),M=function(){var e=Object(E.b)("movies",C,{staleTime:1/0}),t=e.isLoading,a=e.data;return t||void 0===a?n.a.createElement(B.a,null):n.a.createElement(r.Fragment,null,n.a.createElement(x,{data:a.trending}),n.a.createElement("div",{className:"pb-8 md:pb-16 md:pt-2"},S.map((function(e){return n.a.createElement(w.a,{key:e,title:e.split("_").join(" "),data:a[e],cardType:"movie",titleClass:"pl-10 pb-3 md:pl-0 md:w-3/4 md:mx-auto md:pb-6 md:text-gray-500 uppercase",sliderClass:"px-5 sm:px-8 md:p-0",wrapperClass:"my-8 md:mx-5 md:my-16",preRenderedSlides:5})}))))},_=a(5),z=function(){var e=Object(_.g)().pathname;return Object(r.useEffect)((function(){window.scrollTo(0,0)}),[e]),n.a.createElement(r.Fragment,null)};function L(){return(L=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}function T(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var A=n.a.createElement("path",{fillRule:"evenodd",d:"M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1z",clipRule:"evenodd"}),D=function(e){var t=e.svgRef,a=e.title,r=T(e,["svgRef","title"]);return n.a.createElement("svg",L({viewBox:"0 0 20 20",fill:"currentColor",className:"menu-alt2",ref:t},r),a?n.a.createElement("title",null,a):null,A)},F=n.a.forwardRef((function(e,t){return n.a.createElement(D,L({svgRef:t},e))})),I=(a.p,function(){return n.a.createElement("header",{className:"md:absolute w-full md:z-40"},n.a.createElement("div",{className:"container mx-auto flex px-5 py-5 items-center justify-between tracking-wide md:justify-start lg:px-10"},n.a.createElement(p.b,{to:"/",className:"flex font-black tracking-widest text-gray-200 items-center text-xl"},n.a.createElement("span",{className:"text-primary"},"R"),"MDB"),n.a.createElement("nav",{className:"hidden md:flex md:items-center md:w-full md:ml-4 md:pl-4 md:border-l md:border-gray-300 md:text-sm md:justify-between"},n.a.createElement(p.c,{to:"/discover",activeClassName:"text-primary",className:"mr-5 transition-colors duration-200 hover:text-primary uppercase"},"Discover"),n.a.createElement("a",{href:"/login",onClick:function(e){e.preventDefault(),alert("Ups! Not Avaliable yet")},className:"uppercase transition-colors duration-200 text-gray-400 font-light text-sm hover:text-primary"},"Sign in")),n.a.createElement(F,{className:"menu-alt2 w-8 h-8 cursor-pointer md:hidden"})))});function V(){return(V=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}function U(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var H=n.a.createElement("path",{stroke:"none",d:"M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"}),W=n.a.createElement("circle",{cx:4,cy:4,r:2,stroke:"none"}),K=function(e){var t=e.svgRef,a=e.title,r=U(e,["svgRef","title"]);return n.a.createElement("svg",V({fill:"currentColor",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:0,viewBox:"0 0 24 24",ref:t},r),a?n.a.createElement("title",null,a):null,H,W)},J=n.a.forwardRef((function(e,t){return n.a.createElement(K,V({svgRef:t},e))}));a.p;function Y(){return(Y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}function $(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var q=n.a.createElement("rect",{width:20,height:20,x:2,y:2,rx:5,ry:5}),G=n.a.createElement("path",{d:"M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"}),Q=function(e){var t=e.svgRef,a=e.title,r=$(e,["svgRef","title"]);return n.a.createElement("svg",Y({fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,viewBox:"0 0 24 24",ref:t},r),a?n.a.createElement("title",null,a):null,q,G)},X=n.a.forwardRef((function(e,t){return n.a.createElement(Q,Y({svgRef:t},e))}));a.p;function Z(){return(Z=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}function ee(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var te=n.a.createElement("path",{d:"M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"}),ae=function(e){var t=e.svgRef,a=e.title,r=ee(e,["svgRef","title"]);return n.a.createElement("svg",Z({fill:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,viewBox:"0 0 24 24",ref:t},r),a?n.a.createElement("title",null,a):null,te)},re=n.a.forwardRef((function(e,t){return n.a.createElement(ae,Z({svgRef:t},e))}));a.p;function ne(){return(ne=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}function le(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var ce=n.a.createElement("path",{d:"M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"}),oe=function(e){var t=e.svgRef,a=e.title,r=le(e,["svgRef","title"]);return n.a.createElement("svg",ne({fill:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,viewBox:"0 0 24 24",ref:t},r),a?n.a.createElement("title",null,a):null,ce)},ie=n.a.forwardRef((function(e,t){return n.a.createElement(oe,ne({svgRef:t},e))})),se=(a.p,function(){return n.a.createElement("footer",{className:"bg-primary"},n.a.createElement("div",{className:"container px-5 py-8 mx-auto flex items-center flex-col sm:flex-row lg:px-10"},n.a.createElement(p.b,{to:"/",className:"flex ml-3 text-xl text-gray-200 font-black tracking-widest items-center md:justify-start justify-center"},"RMDB"),n.a.createElement("p",{className:"text-sm text-gray-300 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4"},"\xa9 2020 Andres Lemus \u2014",n.a.createElement("a",{href:"https://github.com/andresclm/",className:"text-gray-300 hover:text-gray-100 ml-1",rel:"noopener noreferrer",target:"_blank"},"@andresclm")),n.a.createElement("span",{className:"inline-flex mt-4 justify-center sm:ml-auto sm:mt-0"},n.a.createElement("a",{rel:"noopener noreferrer",target:"_blank",href:"https://www.facebook.com/themoviedb/"},n.a.createElement(ie,{className:"w-5 h-5 hover:text-gray-200"})),n.a.createElement("a",{rel:"noopener noreferrer",target:"_blank",href:"https://twitter.com/themoviedb/",className:"ml-3"},n.a.createElement(re,{className:"w-5 h-5 hover:text-gray-200"})),n.a.createElement("a",{rel:"noopener noreferrer",target:"_blank",href:"https://www.instagram.com/imdb/",className:"ml-3"},n.a.createElement(X,{className:"w-5 h-5 hover:text-gray-200"})),n.a.createElement("a",{rel:"noopener noreferrer",target:"_blank",href:"https://www.linkedin.com/in/andresclm/",className:"ml-3"},n.a.createElement(J,{className:"w-5 h-5 hover:text-gray-200"})))))}),me=function(e){var t=e.children;return n.a.createElement(r.Fragment,null,n.a.createElement(I,null),n.a.createElement("main",null,t),n.a.createElement(se,null))},ue=Object(r.lazy)((function(){return a.e(5).then(a.bind(null,252))})),de=Object(r.lazy)((function(){return Promise.all([a.e(2),a.e(4)]).then(a.bind(null,251))})),fe=function(){return n.a.createElement(p.a,{basename:"/rmdb"},n.a.createElement(z,null),n.a.createElement(me,null,n.a.createElement(r.Suspense,{fallback:n.a.createElement(B.a,null)},n.a.createElement(_.d,null,n.a.createElement(_.b,{exact:!0,path:"/"},n.a.createElement(M,null)),n.a.createElement(_.b,{path:"/discover"},n.a.createElement(ue,null)),n.a.createElement(_.b,{path:"/movie/:id"},n.a.createElement(de,null)),n.a.createElement(_.a,{from:"*",to:"/"})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/.exec(window.location.hostname));a(55),a(56),a(57),a(58);Object(l.render)(n.a.createElement(r.StrictMode,null,n.a.createElement(fe,null)),document.getElementById("app-root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[45,1,3]]]);
//# sourceMappingURL=main.e056213c.chunk.js.map