"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[736],{4190:function(r,e,t){t.d(e,{UJ:function(){return v},k:function(){return f},k8:function(){return l},yv:function(){return p},zO:function(){return d}});var n=t(5861),a=t(7757),c=t.n(a),u=t(1912),o=t(9014),i="https://api.themoviedb.org/3/",s="api_key=6e7eaf256e2890a0f83bf0d8fe3fe4d9",f=function(){var r=(0,n.Z)(c().mark((function r(e){var t;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,(0,u.Z)("".concat(i,"trending/all/week?").concat(s),e);case 3:if(void 0!==(t=r.sent).data.results){r.next=6;break}throw new Error("Request failed!!! Probably no internet connection!");case 6:return r.abrupt("return",t.data.results);case 9:return r.prev=9,r.t0=r.catch(0),o.ZP.error(r.t0.message),r.abrupt("return",[]);case 13:case"end":return r.stop()}}),r,null,[[0,9]])})));return function(e){return r.apply(this,arguments)}}(),p=function(){var r=(0,n.Z)(c().mark((function r(e){var t;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,(0,u.Z)("".concat(i,"search/movie?").concat(s,"&page=1&query=").concat(e));case 3:if(void 0!==(t=r.sent).data.results){r.next=6;break}throw new Error("Request failed!!! Probably no internet connection!");case 6:return r.abrupt("return",t.data.results);case 9:return r.prev=9,r.t0=r.catch(0),o.ZP.error(r.t0),r.abrupt("return",[]);case 13:case"end":return r.stop()}}),r,null,[[0,9]])})));return function(e){return r.apply(this,arguments)}}(),l=function(){var r=(0,n.Z)(c().mark((function r(e){var t;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,(0,u.Z)("".concat(i,"movie/").concat(e,"?").concat(s));case 3:if(void 0!==(t=r.sent).data){r.next=6;break}throw new Error("Request failed!!! Probably no internet connection!");case 6:return r.abrupt("return",t.data);case 9:r.prev=9,r.t0=r.catch(0),o.ZP.error(r.t0);case 12:case"end":return r.stop()}}),r,null,[[0,9]])})));return function(e){return r.apply(this,arguments)}}(),v=function(){var r=(0,n.Z)(c().mark((function r(e){var t;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,(0,u.Z)("".concat(i,"movie/").concat(e,"/credits?").concat(s));case 3:if(void 0!==(t=r.sent).data.cast){r.next=6;break}throw new Error("Request failed!!! Probably no internet connection!");case 6:return r.abrupt("return",t.data.cast);case 9:return r.prev=9,r.t0=r.catch(0),o.ZP.error(r.t0),r.abrupt("return",[]);case 13:case"end":return r.stop()}}),r,null,[[0,9]])})));return function(e){return r.apply(this,arguments)}}(),d=function(){var r=(0,n.Z)(c().mark((function r(e){var t;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,(0,u.Z)("".concat(i,"movie/").concat(e,"/reviews?").concat(s));case 3:if(void 0!==(t=r.sent).data.results){r.next=6;break}throw new Error("Request failed!!! Probably no internet connection!");case 6:return r.abrupt("return",t.data.results);case 9:return r.prev=9,r.t0=r.catch(0),o.ZP.error(r.t0),r.abrupt("return",[]);case 13:case"end":return r.stop()}}),r,null,[[0,9]])})));return function(e){return r.apply(this,arguments)}}()},6467:function(r,e,t){t.d(e,{Q:function(){return n}});var n=function(r){for(var e=[],t=r.map((function(r){return r.id})),n=0;n<t.length;n++)for(var a=1;a<t.length;a++)n<a&&t[n]===t[a]&&(e.includes(a)||e.push(a));return r.filter((function(r,t){return!e.includes(t)}))}},2736:function(r,e,t){t.r(e);var n=t(5861),a=t(9439),c=t(7757),u=t.n(c),o=t(2791),i=t(4190),s=t(6467),f=t(7689),p=t(184);e.default=function(){var r=(0,o.useState)([]),e=(0,a.Z)(r,2),t=e[0],c=e[1],l=(0,f.TH)();return(0,o.useEffect)((function(){var r=function(){var r=(0,n.Z)(u().mark((function r(){var e;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,(0,i.zO)(l.state);case 2:e=r.sent,e=(0,s.Q)(e),c(e);case 5:case"end":return r.stop()}}),r)})));return function(){return r.apply(this,arguments)}}();r()}),[l]),(0,p.jsx)(p.Fragment,{children:0===t.length?(0,p.jsx)("h3",{children:"There is no information about the film`s reviews in the database!"}):(0,p.jsx)("ul",{children:t.map((function(r){var e=r.id,t=r.author,n=void 0===t?"Not available":t,a=r.content,c=void 0===a?"Not available":a;return(0,p.jsxs)("li",{children:[(0,p.jsxs)("h3",{children:["Review's name: ",n]}),(0,p.jsxs)("p",{children:[" ",c]})]},e)}))})})}}}]);
//# sourceMappingURL=736.4d8abd93.chunk.js.map