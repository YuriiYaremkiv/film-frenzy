"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[341],{562:function(e,n,t){t.d(n,{j:function(){return a}});var r=t(184),a=function(){return(0,r.jsx)("div",{children:"Error. Sorry no find any films"})}},287:function(e,n,t){t.d(n,{a:function(){return s}});var r=t(402),a="Loader_loader__DwtSp",i=t(184),s=function(){return(0,i.jsx)("div",{className:a,children:(0,i.jsx)(r.s5,{strokeColor:"grey",strokeWidth:"5",animationDuration:"0.75",width:"96",visible:!0})})}},0:function(e,n,t){t.d(n,{Jz:function(){return _},LZ:function(){return o},Nr:function(){return l},bt:function(){return u},nL:function(){return d}});var r=t(861),a=t(757),i=t.n(a),s="https://api.themoviedb.org/3/",c="d08efe59ac708d7aace6afed9ba7eae9",o=function(){var e=(0,r.Z)(i().mark((function e(){var n,t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(s,"trending/all/day?api_key=").concat(c));case 2:if(!(n=e.sent).ok){e.next=8;break}return e.next=6,n.json();case 6:return t=e.sent,e.abrupt("return",t.results);case 8:throw new Error("Error responsive");case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),u=function(){var e=(0,r.Z)(i().mark((function e(n){var t,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(s,"movie/").concat(n,"?api_key=").concat(c,"&language=en-US"));case 2:if(!(t=e.sent).ok){e.next=8;break}return e.next=6,t.json();case 6:return r=e.sent,e.abrupt("return",r);case 8:throw new Error("Error responsive");case 9:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(i().mark((function e(n){var t,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(s,"movie/").concat(n,"/credits?api_key=").concat(c,"&language=en-US"));case 2:if(!(t=e.sent).ok){e.next=8;break}return e.next=6,t.json();case 6:return r=e.sent,e.abrupt("return",r.cast);case 8:throw new Error("Error responsive");case 9:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),d=function(){var e=(0,r.Z)(i().mark((function e(n){var t,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(s,"movie/").concat(n,"/reviews?api_key=").concat(c,"&language=en-US&page=1"));case 2:if(!(t=e.sent).ok){e.next=8;break}return e.next=6,t.json();case 6:return r=e.sent,e.abrupt("return",r.results);case 8:throw new Error("Error responsive");case 9:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),_=function(){var e=(0,r.Z)(i().mark((function e(n){var t,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(s,"search/movie?api_key=").concat(c,"&language=en-US&query=").concat(n,"&page=1&include_adult=false"));case 2:if(!(t=e.sent).ok){e.next=8;break}return e.next=6,t.json();case 6:return r=e.sent,e.abrupt("return",r.results);case 8:throw new Error("Error responsive");case 9:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()},341:function(e,n,t){t.r(n),t.d(n,{default:function(){return m}});var r=t(861),a=t(885),i=t(757),s=t.n(i),c=t(689),o=t(791),u=t(731),l=t(983),d=t(820),_={container:"MovieDetail_container__4E0BG",details__btn:"MovieDetail_details__btn__ULY2E",details__icon:"MovieDetail_details__icon__jI728",details__container:"MovieDetail_details__container__GEGVE",details:"MovieDetail_details__q9gSE",details__title:"MovieDetail_details__title__9wAW9",additional:"MovieDetail_additional__HsqcX",additional__link:"MovieDetail_additional__link__-hGvY"},f=t(184),v=function(e){var n=e.movieInfo,t=n.title,r=n.release_date,a=n.vote_average,i=n.overview,s=n.genres,o=n.poster_path,v=(0,c.TH)(),p=(0,c.s0)();return(0,f.jsxs)("div",{className:_.details,children:[(0,f.jsxs)("button",{className:_.details__btn,type:"button",onClick:function(){var e,n;p(null!==(e=null===v||void 0===v||null===(n=v.state)||void 0===n?void 0:n.from)&&void 0!==e?e:"/")},children:[(0,f.jsx)(l.Pd.Provider,{value:{size:"20px"},children:(0,f.jsx)(d.kyg,{className:_.details__icon})}),"Go back"]}),(0,f.jsxs)("div",{className:_.details__container,children:[(0,f.jsx)("img",{src:"https://image.tmdb.org/t/p/w500/".concat(o),alt:t,width:"300px",heigth:"450px"}),(0,f.jsxs)("div",{className:_.details,children:[(0,f.jsx)("h2",{className:_.details__title,children:"".concat(t," (").concat(parseInt(r),")")}),(0,f.jsxs)("p",{children:["User score:",10*a?" ".concat((10*a).toFixed(2),"%"):" no rating"]}),(0,f.jsx)("b",{children:"Overview"}),(0,f.jsx)("p",{children:i}),(0,f.jsx)("b",{children:"Genres"}),(0,f.jsx)("p",{children:s&&s.map((function(e){return e.name})).join(", ")})]})]}),(0,f.jsxs)("div",{className:_.additional,children:[(0,f.jsx)("p",{className:_.additional__title,children:"Additional information"}),(0,f.jsxs)("ul",{children:[(0,f.jsx)("li",{children:(0,f.jsx)(u.rU,{className:_.additional__link,to:"cast",state:v.state,children:"Cast"})}),(0,f.jsx)("li",{children:(0,f.jsx)(u.rU,{className:_.additional__link,to:"reviews",state:v.state,children:"Reviews"})})]})]}),(0,f.jsx)(c.j3,{})]})},p=t(287),h=t(562),x=t(0),m=function(){var e=(0,o.useState)(null),n=(0,a.Z)(e,2),t=n[0],i=n[1],u=(0,o.useState)(!1),l=(0,a.Z)(u,2),d=l[0],_=l[1],m=(0,o.useState)(!1),j=(0,a.Z)(m,2),k=j[0],w=j[1],b=(0,c.UO)().movieId;return(0,o.useEffect)((function(){_(!0),(0,r.Z)(s().mark((function e(){var n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,x.bt)(b);case 3:n=e.sent,i(n),_(!1),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),_(!1),w(!0);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})))()}),[b]),(0,f.jsxs)(f.Fragment,{children:[d?(0,f.jsx)(p.a,{}):null,k?(0,f.jsx)(h.j,{}):null,t&&!k?(0,f.jsx)(v,{movieInfo:t}):null]})}}}]);
//# sourceMappingURL=341.a04cb9ff.chunk.js.map