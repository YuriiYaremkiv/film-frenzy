"use strict";(self.webpackChunkmovies=self.webpackChunkmovies||[]).push([[54],{4562:function(n,e,r){r.d(e,{j:function(){return a}});var t=r(184),a=function(){return(0,t.jsx)("div",{children:"Error. Sorry no find any films"})}},1287:function(n,e,r){r.d(e,{a:function(){return u}});var t=r(8593),a="Loader_loader__DwtSp",c=r(184),u=function(){return(0,c.jsx)("div",{className:a,children:(0,c.jsx)(t.s5,{strokeColor:"grey",strokeWidth:"5",animationDuration:"0.75",width:"96",visible:!0})})}},9054:function(n,e,r){r.r(e),r.d(e,{default:function(){return h}});var t=r(5861),a=r(885),c=r(4687),u=r.n(c),s=r(2791),o=r(7689),i=r(1287),f=r(4562),p=r(184),l=function(){return(0,p.jsx)("p",{children:"We don't have any reviews for this movie!"})},v=r(9392),h=function(){var n=(0,s.useState)([]),e=(0,a.Z)(n,2),r=e[0],c=e[1],h=(0,s.useState)(!1),d=(0,a.Z)(h,2),x=d[0],k=d[1],w=(0,s.useState)(!1),m=(0,a.Z)(w,2),j=m[0],b=m[1],g=(0,o.UO)().movieId;return(0,s.useEffect)((function(){k(!0),(0,t.Z)(u().mark((function n(){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,v.nL)(g);case 3:e=n.sent,c(e),k(!1),n.next=12;break;case 8:n.prev=8,n.t0=n.catch(0),k(!1),b(!0);case 12:case"end":return n.stop()}}),n,null,[[0,8]])})))()}),[g]),(0,p.jsxs)(p.Fragment,{children:[x?(0,p.jsx)(i.a,{}):null,j?(0,p.jsx)(f.j,{}):null,x||r.length?null:(0,p.jsx)(l,{}),(0,p.jsx)("ul",{children:r.length?r.map((function(n){var e=n.id,r=n.author,t=n.content;return(0,p.jsxs)("li",{children:[(0,p.jsx)("b",{children:r}),(0,p.jsx)("p",{children:t})]},e)})):null})]})}},9392:function(n,e,r){r.d(e,{Jz:function(){return p},Nr:function(){return i},bt:function(){return o},nL:function(){return f}});var t=r(5861),a=r(4687),c=r.n(a),u="https://api.themoviedb.org/3/",s="d08efe59ac708d7aace6afed9ba7eae9",o=function(){var n=(0,t.Z)(c().mark((function n(e){var r,t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(u,"movie/").concat(e,"?api_key=").concat(s,"&language=en-US"));case 2:if(!(r=n.sent).ok){n.next=8;break}return n.next=6,r.json();case 6:return t=n.sent,n.abrupt("return",t);case 8:throw new Error("Error responsive");case 9:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),i=function(){var n=(0,t.Z)(c().mark((function n(e){var r,t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(u,"movie/").concat(e,"/credits?api_key=").concat(s,"&language=en-US"));case 2:if(!(r=n.sent).ok){n.next=8;break}return n.next=6,r.json();case 6:return t=n.sent,n.abrupt("return",t.cast);case 8:throw new Error("Error responsive");case 9:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,t.Z)(c().mark((function n(e){var r,t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(u,"movie/").concat(e,"/reviews?api_key=").concat(s,"&language=en-US&page=1"));case 2:if(!(r=n.sent).ok){n.next=8;break}return n.next=6,r.json();case 6:return t=n.sent,n.abrupt("return",t.results);case 8:throw new Error("Error responsive");case 9:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,t.Z)(c().mark((function n(e){var r,t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(u,"search/movie?api_key=").concat(s,"&language=en-US&query=").concat(e,"&page=1&include_adult=false"));case 2:if(!(r=n.sent).ok){n.next=8;break}return n.next=6,r.json();case 6:return t=n.sent,n.abrupt("return",t.results);case 8:throw new Error("Error responsive");case 9:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=54.ef791fce.chunk.js.map