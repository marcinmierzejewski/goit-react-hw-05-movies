"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[50],{9042:function(n,e,t){t.d(e,{LI:function(){return d},Mc:function(){return p},OC:function(){return l},vw:function(){return s}});var r=t(5861),c=t(7757),a=t.n(c),o=t(4569),u=t.n(o),i="13376ece24dd3764203e2484d15e71b5",s=function(){var n=(0,r.Z)(a().mark((function n(){var e,t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,u().get("https://api.themoviedb.org/3/trending/movie/day?api_key=".concat(i));case 3:return e=n.sent,t=e.data.results,n.abrupt("return",t);case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(a().mark((function n(e){var t,r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,u().get("https://api.themoviedb.org/3/movie/".concat(e,"?api_key=").concat(i));case 3:return t=n.sent,r=t.data,n.abrupt("return",r);case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(a().mark((function n(e,t){var r,c;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,u().get("https://api.themoviedb.org/3/movie/".concat(e,"/").concat(t,"?api_key=").concat(i));case 3:return r=n.sent,c=r.data,n.abrupt("return",c);case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(e,t){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(a().mark((function n(e){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,u().get("https://api.themoviedb.org/3/search/movie?api_key=".concat(i,"&query=").concat(e,"&page=1&include_adult=false"));case 3:return t=n.sent,n.abrupt("return",t.data.results);case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}()},6050:function(n,e,t){t.r(e),t.d(e,{default:function(){return x}});var r,c,a=t(5861),o=t(885),u=t(7757),i=t.n(u),s=t(2791),p=t(501),l=t(6871),d=t(9042),f=t(168),h=t(6444),v=h.ZP.input(r||(r=(0,f.Z)(["\n  display: inline-block;\n  width: 280px;\n  height: 30px;\n  margin-top: 5px;\n  border: 2px solid rgba(188, 184, 184, 0.989);\n  padding-left: 20px;\n  outline: none;\n  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  &:focus,\n  &:hover {\n    border: 2px solid rgb(75, 62, 142);\n  }\n"]))),b=h.ZP.button(c||(c=(0,f.Z)(["\n  display: inline-block;\n  width: 60px;\n  height: 36px;\n  color: black;\n  border: 2px solid rgba(188, 184, 184, 0.989);\n  background-color: transparent;\n  background-size: 40%;\n  background-repeat: no-repeat;\n  background-position: center;\n  opacity: 0.6;\n  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  cursor: pointer;\n  outline: none;\n}\n\n  &:hover,\n  &:focus {\n    opacity: 1;\n    color: white;\n    background-color: rgb(75, 62, 142);\n  }\n"]))),g=t(184),x=function(){var n=(0,l.TH)(),e=(0,s.useState)(""),t=(0,o.Z)(e,2),r=t[0],c=t[1],u=(0,p.lr)(),f=(0,o.Z)(u,2),h=f[0],x=f[1],m=(0,s.useState)([]),k=(0,o.Z)(m,2),y=k[0],w=k[1];return(0,s.useEffect)((function(){if(""!==h){var n=function(){var n=(0,a.Z)(i().mark((function n(){var e,t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!(e=h.get("query"))){n.next=6;break}return n.next=4,(0,d.LI)(e);case 4:t=n.sent,w(t);case 6:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();n()}}),[h]),(0,g.jsxs)("div",{children:[(0,g.jsxs)("form",{onSubmit:function(n){n.preventDefault(),x(r?{query:r}:""),c("")},children:[(0,g.jsx)(v,{type:"text",value:r,onChange:function(n){c(n.target.value)}}),(0,g.jsx)(b,{children:"Search"})]}),(0,g.jsx)("main",{children:y.map((function(e){return(0,g.jsx)("ul",{children:(0,g.jsx)("li",{children:(0,g.jsx)(p.rU,{to:"/movies/".concat(e.id),state:{from:n},children:(0,g.jsx)("h4",{children:e.title})})})},e.id)}))})]})}}}]);
//# sourceMappingURL=50.909548ee.chunk.js.map