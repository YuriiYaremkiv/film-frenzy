"use strict";(self.webpackChunkmovies=self.webpackChunkmovies||[]).push([[89],{4873:function(e,t){var r={mediaType:{all:"all",movie:"movie",tv:"tv"},mediaTime:{day:"day",week:"week"},movieType:{now_playing:"now_playing",popular:"popular",top_rated:"top_rated",upcoming:"upcoming"},searchType:{movie:"movie",tv:"tv",people:"person"},tvType:{latest:"latest",airing_today:"airing_today",on_the_air:"on_the_air",popular:"popular",top_rated:"top_rated"},sectionBgImage:function(e){return"url(https://image.tmdb.org/t/p/w1920_and_h427_multi_faces/".concat(e,")")},personImage:function(e){return"https://image.tmdb.org/t/p/w138_and_h175_face/".concat(e)},personDetailImage:function(e){return"https://image.tmdb.org/t/p/w300_and_h450_bestv2/".concat(e)},avatarImage:function(e){return"https://image.tmdb.org/t/p/w64_and_h64_face/".concat(e)},posterImage:function(e){return"https://image.tmdb.org/t/p/w500/".concat(e)},backdropPath:function(e){return"https://image.tmdb.org/t/p/original".concat(e)},youtubePath:function(e){return"https://www.youtube.com/embed/".concat(e,"?controls=0")}};t.Z=r},9407:function(e,t,r){r.d(t,{t:function(){return i}});var a=r(9434),o={button__light:"ButtonLoadMore_button__light__ei+Qo",button__dark:"ButtonLoadMore_button__dark__MnsbM",button__red:"ButtonLoadMore_button__red__8-AFT"},n=r(184),i=function(e){var t=e.handleLoadMore,r=(e.isLoading,(0,a.v9)((function(e){return e.themeMode})).themeMode);return(0,n.jsx)("button",{onClick:t,className:o["button__".concat(r)],children:(0,n.jsx)("span",{children:"Load More"})})}},1046:function(e,t,r){r.d(t,{$:function(){return d}});var a=r(1413),o=r(9434),n=r(4873),i=r(4323),c={container:"ListNavigation_container__84+14",selector:"ListNavigation_selector__uNdM5",activeTitle__light:"ListNavigation_activeTitle__light__X8zvM",activeTitle__dark:"ListNavigation_activeTitle__dark__-TMQu",activeTitle__red:"ListNavigation_activeTitle__red__OX3jV",disableTitle__light:"ListNavigation_disableTitle__light__n03ww",disableTitle__dark:"ListNavigation_disableTitle__dark__KJx6Q",disableTitle__red:"ListNavigation_disableTitle__red__-Ir29",select__input:"ListNavigation_select__input__S2evw"},l=r(184),s=[{category:"Popular",type:n.Z.movieType.popular},{category:"Top Rated",type:n.Z.movieType.top_rated}],d=function(e){var t=e.title,r=e.type,n=e.handleChangeType,d=e.categories,_=(0,o.v9)((function(e){return e.themeMode})).themeMode,g=d||s,u=function(e){n(e.target.value)};return(0,l.jsxs)("div",{className:c.container,children:[t?(0,l.jsx)("h2",{style:(0,a.Z)({},i.Z.textColor[_]),children:t}):null,g.length?(0,l.jsxs)("div",{className:c.selector,children:[(0,l.jsxs)("label",{children:[(0,l.jsx)("h3",{className:r===g[0].type?c["activeTitle__".concat(_)]:c["disableTitle__".concat(_)],children:g[0].category}),(0,l.jsx)("input",{type:"radio",checked:r===g[0].type,name:"list",value:g[0].type,onChange:u,className:c.select__input})]}),(0,l.jsxs)("label",{children:[(0,l.jsx)("h3",{className:r===g[1].type?c["activeTitle__".concat(_)]:c["disableTitle__".concat(_)],children:g[1].category}),(0,l.jsx)("input",{type:"radio",checked:r===g[1].type,name:"list",value:g[1].type,onChange:u,className:c.select__input})]}),g[2]?(0,l.jsxs)("label",{children:[(0,l.jsx)("h3",{className:r===g[2].type?c["activeTitle__".concat(_)]:c["disableTitle__".concat(_)],children:g[2].category}),(0,l.jsx)("input",{type:"radio",checked:r===g[2].type,name:"list",value:g[2].type,onChange:u,className:c.select__input})]}):null,g[3]?(0,l.jsxs)("label",{children:[(0,l.jsx)("h3",{className:r===g[3].type?c["activeTitle__".concat(_)]:c["disableTitle__".concat(_)],children:g[3].category}),(0,l.jsx)("input",{type:"radio",checked:r===g[3].type,name:"list",value:g[3].type,onChange:u,className:c.select__input})]}):null,g[4]?(0,l.jsxs)("label",{children:[(0,l.jsx)("h3",{className:r===g[4].type?c["activeTitle__".concat(_)]:c["disableTitle__".concat(_)],children:g[4].category}),(0,l.jsx)("input",{type:"radio",checked:r===g[4].type,name:"list",value:g[4].type,onChange:u,className:c.select__input})]}):null]}):null]})}},2183:function(e,t,r){r.d(t,{k:function(){return T}});var a=r(1413),o=r(9434),n=r(1087),i=r(6667),c=r(1582),l=r(151),s=r(4873),d=r(4323),_="SectionMoviesList_list__ekz+i",g="SectionMoviesList_list__item__nSO5m",u="SectionMoviesList_list__link__LeNqU",p="SectionMoviesList_card__ZW-tT",h="SectionMoviesList_description__KIN3m",b="SectionMoviesList_image__e1D17",m="SectionMoviesList_card__tumb__YhZ-M",v="SectionMoviesList_rating__2zufy",f="SectionMoviesList_card__container__1hmiV",k="SectionMoviesList_rating__text__48Bl6",y="SectionMoviesList_rating__icon__Rmq2O",x="SectionMoviesList_date__sGIQq",C="SectionMoviesList_title__FI9m4",j=r(184),T=function(e){var t=e.movies,r=(0,o.v9)((function(e){return e.themeMode})).themeMode;return(0,j.jsx)("section",{children:(0,j.jsx)("ul",{className:_,children:t.map((function(e,t){var o,_=e.id,T=e.title,N=e.name,L=e.poster_path,M=e.release_date,S=e.first_air_date,I=e.vote_average;return(0,j.jsx)("li",{className:g,children:(0,j.jsx)(n.rU,{className:u,to:"/".concat(S?"tv":"movie","/").concat(_),children:(0,j.jsx)("div",{className:p,children:(0,j.jsxs)("div",{className:f,children:[(0,j.jsx)("img",{src:s.Z.posterImage(L),alt:T,className:b,onError:function(e){e.target.onerror=null,e.target.src!==i&&(e.target.src=null,e.target.src=i)}}),(0,j.jsx)("div",{className:h,children:(0,j.jsxs)(c.Z,{spacing:1,className:v,children:[(0,j.jsx)("p",{style:(0,a.Z)({},d.Z.style.textColorAccent[r]),className:k,children:null===I||void 0===I?void 0:I.toFixed(1)}),(0,j.jsx)(l.Z,{fontSize:"medium",style:(0,a.Z)({},d.Z.style.textColorAccent[r]),className:y})]})}),(0,j.jsxs)("div",{className:m,children:[(0,j.jsx)("p",{style:(0,a.Z)({},d.Z.style.textColorAccent[r]),className:x,children:null===(o=S||M)||void 0===o?void 0:o.slice(0,4)}),(0,j.jsx)("p",{style:(0,a.Z)({},d.Z.style.textColorAccent[r]),className:C,children:T||N})]})]})})})},t)}))})})}},4323:function(e,t){t.Z={style:{backgroundColorHeader:{light:{backgroundColor:"#fff"},dark:{backgroundColor:"#050505"},red:{backgroundColor:"#050505"}},backgroundColorMain:{light:{backgroundColor:"rgba(0, 0, 0, 0.04)"},dark:{backgroundColor:"#000"},red:{backgroundColor:"#000"}},backgroundColorSecondary:{light:{backgroundColor:"#fafafa"},dark:{backgroundColor:"#212121"},red:{backgroundColor:"#212121"}},backgroundColorModal:{light:{backgroundColor:"rgba(0, 0, 0, 0.35)"},dark:{backgroundColor:"rgba(0, 0, 0, 0.8)"},red:{backgroundColor:"rgba(0, 0, 0, 0.8)"}},backgroundColorMenu:{light:{backgroundColor:"#fff"},dark:{backgroundColor:"rgb(19, 19, 19)",backgroundImage:"linear-gradient(rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.15))"},red:{backgroundColor:"rgb(19, 19, 19)",backgroundImage:"linear-gradient(rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.15))"}},backgroundColorAccent:{light:{backgroundColor:"#01b4e4","&:hover":{backgroundColor:"#40c4ff"}},dark:{backgroundColor:"#01b4e4","&:hover":{backgroundColor:"#40c4ff"}},red:{backgroundColor:"#d50000","&:hover":{backgroundColor:"#e53935"}}},textColorSecondary:{light:{color:"#000"},dark:{color:"#000"},red:{color:"#fff"}},textColorAccent:{light:{color:"#01b4e4"},dark:{color:"#01b4e4"},red:{color:"#d50000"}},textColorAndHover:{light:{color:"red",transition:"color 0.2s ease-in-out"},dark:{color:"red",transition:"color 0.2s ease-in-out"},red:{color:"red",transition:"color 0.2s ease-in-out"}},gradientBgImage:{light:{backgroundImage:"linear-gradient(to top, rgba(245,245,245,1), rgba(0,0,0,0))"},dark:{backgroundImage:"linear-gradient(to top, rgba(0,0,0,1), rgba(0,0,0,0))"},red:{backgroundImage:"linear-gradient(to top, rgba(0,0,0,1), rgba(0,0,0,0))"}},horizontalGradientBgImage:{light:{backgroundImage:"linear-gradient(to right, rgba(245,245,245,0.8), rgba(0,0,0,0))"},dark:{backgroundImage:"linear-gradient(to right, rgba(0,0,0,0.8), rgba(0,0,0,0))"},red:{backgroundImage:"linear-gradient(to right, rgba(0,0,0,0.8), rgba(0,0,0,0))"}},verticalGradientBgImage:{light:{backgroundImage:"linear-gradient(to top, rgba(245,245,245,0.9), rgba(0,0,0,0))"},dark:{backgroundImage:"linear-gradient(to top, rgba(0,0,0,0.9), rgba(0,0,0,0))"},red:{backgroundImage:"linear-gradient(to top, rgba(0,0,0,0.9), rgba(0,0,0,0))"}},horizontalGradientBgProgress:{light:{backgroundImage:"linear-gradient(to top, rgba(245,245,245,0.95), rgba(245,245,245,0.3))"},dark:{backgroundImage:"linear-gradient(to top, rgba(0,0,0,0.9), rgba(0,0,0,0))"},red:{backgroundImage:"linear-gradient(to top, rgba(0,0,0,0.9), rgba(0,0,0,0))"}}},bgAccent:{light:{backgroundColor:"#01b4e4","&:hover":{backgroundColor:"#40c4ff"}},dark:{backgroundColor:"#01b4e4","&:hover":{backgroundColor:"#40c4ff"}},red:{backgroundColor:"#d50000","&:hover":{backgroundColor:"#e53935"}}},bgSecondary:{light:{backgroundColor:"rgba(3, 37, 65, 1)"},dark:{backgroundColor:"#01b4e4"},red:{backgroundColor:"#d50000"}},bgAccentHover:{light:{"&:hover":{backgroundColor:"#40c4ff"}},dark:{"&:hover":{backgroundColor:"#40c4ff"}},red:{"&:hover":{backgroundColor:"#e53935"}}},bgBorderAccent:{light:{border:"1px solid #01b4e4"},dark:{border:"1px solid #01b4e4"},red:{border:"1px solid #d50000"}},textColor:{light:{color:"#000"},dark:{color:"#fff"},red:{color:"#fff"}},color:{red:"#d50000",blue:"rgba(1, 180, 228, 1)"},themeConfig:{light:"light",dark:"dark",red:"red"}}},3089:function(e,t,r){r.r(t),r.d(t,{default:function(){return C}});var a,o=r(885),n=r(2791),i=r(9434),c=r(1046),l={form:"InputSearch_form__4g3U2",input__light:"InputSearch_input__light__asRhP",input__dark:"InputSearch_input__dark__36q0a",input__red:"InputSearch_input__red__J-U-d",button__light:"InputSearch_button__light__hidYq",button__dark:"InputSearch_button__dark__2ojDl",button__red:"InputSearch_button__red__3CRBO"},s=r(184),d=function(e){e.query;var t=e.handleChangeQuery,r=(0,n.useState)(""),a=(0,o.Z)(r,2),c=a[0],d=a[1],_=(0,i.v9)((function(e){return e.themeMode})).themeMode;return(0,s.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t(c),d("")},className:l.form,children:[(0,s.jsx)("input",{type:"text",value:c,onChange:function(e){d(e.target.value)},className:l["input__".concat(_)]}),(0,s.jsx)("button",{type:"submit",className:l["button__".concat(_)],children:"Search"})]})},_=r(2183),g=r(1087),u=r(4873),p={list:"SectionPeopleList_list__3Vpwg",list__item:"SectionPeopleList_list__item__I2HvI",list__container:"SectionPeopleList_list__container__EADW-",list__link:"SectionPeopleList_list__link__USI6C",list__title:"SectionPeopleList_list__title__5neMF",card__tumb:"SectionPeopleList_card__tumb__whdmu",title__light:"SectionPeopleList_title__light__Z54OU",title__dark:"SectionPeopleList_title__dark__zwIAr",title__red:"SectionPeopleList_title__red__SlLk9"},h=function(e){var t=e.people,r=void 0===t?[]:t,a=(0,i.v9)((function(e){return e.themeMode})).themeMode;return(0,s.jsx)("section",{children:(0,s.jsx)("ul",{className:p.list,children:r.map((function(e){var t=e.id,r=e.name,o=e.original_name,n=e.profile_path;return(0,s.jsx)("li",{className:p.list__item,children:(0,s.jsx)("div",{className:p.list__container,children:(0,s.jsx)(g.rU,{style:{backgroundImage:"url(".concat(u.Z.personDetailImage(n),")")},className:p.list__link,to:"/person/".concat(t),children:(0,s.jsx)("div",{className:p.card__tumb,children:(0,s.jsx)("p",{className:p["title__".concat(a)],children:r||o})})})})},t)}))})})},b=r(9407),m=r(168),v=r(6934),f=r(7246),k=function(e){var t=e.currentPage,r=e.allPages,o=e.paginationPage,n=(0,i.v9)((function(e){return e.themeMode})).themeMode;var c=(0,v.ZP)(f.Z)(a||(a=(0,m.Z)(["\n    .MuiPaginationItem-text {\n      color: ",";\n    }\n    .Mui-selected {\n      background-color: "," !important;\n      color: #fff;\n    }\n    .MuiButtonBase-root:hover {\n      background-color: "," !important;\n      color: #fff;\n    }\n  "])),"light"===n?"#000":"dark"===n?"#fff":"#d50000","red"===n?"#d50000":"rgba(1, 180, 228, 1)","light"===n||"dark"===n?"#40c4ff":"#ff1744");return(0,s.jsx)(c,{showFirstButton:!0,showLastButton:!0,page:t,count:r,onChange:function(e,t){console.log(t),o(t)}})},y=r(6839),x=r(2242),C=function(){var e=(0,n.useState)(u.Z.searchType.movie),t=(0,o.Z)(e,2),r=t[0],a=t[1],l=(0,i.I0)(),g=(0,i.v9)((function(e){return e.search.media})),p=(0,i.v9)((function(e){return e.search.people})),m=(0,i.v9)((function(e){return e.search.query})),v=(0,i.v9)((function(e){return e.search.page})),f=(0,i.v9)((function(e){return e.search.totalPages})),C=(0,i.v9)((function(e){return e.search.isLoading})),j=(0,i.v9)((function(e){return e.search.notFoundNothing})),T=(0,i.v9)((function(e){return e.search.error}));(0,n.useEffect)((function(){m&&(r===u.Z.searchType.people?l((0,y.kC)({searchType:r,query:m,page:v})):l((0,y.Jn)({searchType:r,query:m,page:v})))}),[m,r]);return(0,s.jsxs)("div",{className:"container",children:[(0,s.jsx)("div",{style:{display:"flex",justifyContent:"right"},children:(0,s.jsx)(c.$,{type:r,handleChangeType:function(e){a(e),l((0,x.YA)(1))},categories:[{category:"Movie",type:u.Z.searchType.movie},{category:"TV Series",type:u.Z.searchType.tv},{category:"People",type:u.Z.searchType.people}]})}),(0,s.jsx)("div",{style:{margin:"0 auto",maxWidth:"750px"},children:(0,s.jsx)(d,{query:m,handleChangeQuery:function(e){l((0,x._L)(e)),l((0,x.YA)(1))}})}),r!==u.Z.searchType.people?(0,s.jsx)(_.k,{movies:g}):(0,s.jsx)(h,{people:p}),j&&(0,s.jsx)("p",{style:{color:"red",textAlign:"center"},children:"Nothing found. Please try again."}),C||!g.length&&!p.length?null:(0,s.jsx)("div",{style:{display:"flex",justifyContent:"center",padding:"8px 0 "},children:(0,s.jsx)(b.t,{handleLoadMore:function(){l((0,x.YA)(v+1)),r===u.Z.searchType.people?l((0,y.Tj)({searchType:r,query:m,page:v+1})):l((0,y.Po)({searchType:r,query:m,page:v+1}))},isLoading:C})}),C||!g.length&&!p.length?null:(0,s.jsx)("div",{style:{display:"flex",justifyContent:"center",padding:"8px 0 "},children:(0,s.jsx)(k,{currentPage:v,allPages:f,paginationPage:function(e){v!==e&&(l((0,x.YA)(e)),r===u.Z.searchType.people?l((0,y.kC)({searchType:r,query:m,page:e})):l((0,y.Jn)({searchType:r,query:m,page:e})))}})}),T&&(0,s.jsx)("p",{children:T})]})}},151:function(e,t,r){var a=r(4836);t.Z=void 0;var o=a(r(5649)),n=r(184),i=(0,o.default)((0,n.jsx)("path",{d:"M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"}),"Star");t.Z=i},6667:function(e,t,r){e.exports=r.p+"static/media/not-found.c72681a4cd7a7785be13.jpg"}}]);
//# sourceMappingURL=89.4b2dc45e.chunk.js.map