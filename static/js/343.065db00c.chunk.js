"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[343],{9042:function(t,e,n){n.d(e,{LI:function(){return f},Mc:function(){return p},OC:function(){return l},vw:function(){return i}});var r=n(5861),a=n(7757),c=n.n(a),u=n(4569),o=n.n(u),s="13376ece24dd3764203e2484d15e71b5",i=function(){var t=(0,r.Z)(c().mark((function t(){var e,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o().get("https://api.themoviedb.org/3/trending/movie/day?api_key=".concat(s));case 3:return e=t.sent,n=e.data.results,t.abrupt("return",n);case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(){return t.apply(this,arguments)}}(),p=function(){var t=(0,r.Z)(c().mark((function t(e){var n,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o().get("https://api.themoviedb.org/3/movie/".concat(e,"?api_key=").concat(s));case 3:return n=t.sent,r=n.data,t.abrupt("return",r);case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}(),l=function(){var t=(0,r.Z)(c().mark((function t(e,n){var r,a;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o().get("https://api.themoviedb.org/3/movie/".concat(e,"/").concat(n,"?api_key=").concat(s));case 3:return r=t.sent,a=r.data,t.abrupt("return",a);case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e,n){return t.apply(this,arguments)}}(),f=function(){var t=(0,r.Z)(c().mark((function t(e){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o().get("https://api.themoviedb.org/3/search/movie?api_key=".concat(s,"&query=").concat(e,"&page=1&include_adult=false"));case 3:return n=t.sent,t.abrupt("return",n.data.results);case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()},6343:function(t,e,n){n.r(e),n.d(e,{default:function(){return f}});var r=n(5861),a=n(885),c=n(7757),u=n.n(c),o=n(2791),s=n(6871),i=n(9042),p=n(184),l=function(t){var e=t.movieCast;return(0,p.jsx)(p.Fragment,{children:e&&(0,p.jsx)("ul",{children:e.map((function(t){var e=t.id,n=t.profile_path,r=t.name,a=t.character;return(0,p.jsxs)("li",{children:[(0,p.jsx)("img",{src:n?"https://image.tmdb.org/t/p/w185".concat(n):"https://nowywilczak.pl/wp-content/uploads/2016/04/default-placeholder.png",alt:"unavailable",width:"185"}),(0,p.jsx)("p",{children:r}),(0,p.jsx)("p",{children:"Character: ".concat(a)})]},e)}))})})},f=function(){var t=(0,o.useState)([]),e=(0,a.Z)(t,2),n=e[0],c=e[1],f=(0,s.UO)().movieId;return(0,o.useEffect)((function(){var t=function(){var t=(0,r.Z)(u().mark((function t(){var e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,i.OC)(f,"credits");case 2:e=t.sent,c(e);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();t()}),[f]),(0,p.jsx)("div",{children:n.cast&&(0,p.jsx)(l,{movieCast:n.cast})})}}}]);
//# sourceMappingURL=343.065db00c.chunk.js.map