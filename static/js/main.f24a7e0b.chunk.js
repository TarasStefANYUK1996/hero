(this.webpackJsonphero_admin_panel=this.webpackJsonphero_admin_panel||[]).push([[0],{24:function(e,t,n){},25:function(e,t,n){},26:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(6),s=n.n(r),i=n(3),o=n(2),l=n(13),b=n(10),u=n.n(b),d=n(11),j=function(){return{request:Object(a.useCallback)(function(){var e=Object(d.a)(u.a.mark((function e(t){var n,a,c,r,s,i=arguments;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=i.length>1&&void 0!==i[1]?i[1]:"GET",a=i.length>2&&void 0!==i[2]?i[2]:null,c=i.length>3&&void 0!==i[3]?i[3]:{"Content-Type":"application/json"},e.prev=3,e.next=6,fetch(t,{method:n,body:a,headers:c});case 6:if((r=e.sent).ok){e.next=9;break}throw new Error("Could not fetch ".concat(t,", status: ").concat(r.status));case 9:return e.next=11,r.json();case 11:return s=e.sent,e.abrupt("return",s);case 15:throw e.prev=15,e.t0=e.catch(3),e.t0;case 18:case"end":return e.stop()}}),e,null,[[3,15]])})));return function(t){return e.apply(this,arguments)}}(),[])}},h=function(e){return{type:"HEROES_SORT",payload:e}},O=n(1),m=function(e){var t,n=e.id,a=(e.heroes,e.name),c=e.description,r=e.element,s=Object(i.b)(),o=j().request;switch(r){case"fire":t="bg-danger bg-gradient";break;case"water":t="bg-primary bg-gradient";break;case"wind":t="bg-success bg-gradient";break;case"earth":t="bg-secondary bg-gradient";break;default:t="bg-warning bg-gradient"}return Object(O.jsxs)("li",{className:"card flex-row mb-4 shadow-lg text-white ".concat(t),children:[Object(O.jsx)("img",{src:"http://www.stpaulsteinbach.org/wp-content/uploads/2014/09/unknown-hero.jpg",className:"img-fluid w-25 d-inline",alt:"unknown hero",style:{objectFit:"cover"}}),Object(O.jsxs)("div",{className:"card-body",children:[Object(O.jsx)("h3",{className:"card-title",children:a}),Object(O.jsx)("p",{className:"card-text",children:c})]}),Object(O.jsx)("span",{className:"position-absolute top-0 start-100 translate-middle badge border rounded-pill bg-light",children:Object(O.jsx)("button",{type:"button",className:"btn-close btn-close","aria-label":"Close",onClick:function(){s(function(e,t){return{type:"HEROES_CLOSE",payload:t}}(0,n)),o("http://localhost:3003/heroes/"+n,"DELETE")}})})]})},f=function(){return Object(O.jsx)("div",{className:"spinner-border mx-auto mt-5",role:"status",children:Object(O.jsx)("span",{className:"visually-hidden",children:"Loading..."})})},p=function(){var e=Object(i.c)((function(e){return e})),t=e.heroes,n=e.heroesLoadingStatus,c=e.filters,r=Object(i.b)(),s=j().request;if(Object(a.useEffect)((function(){r({type:"HEROES_FETCHING"}),s("http://localhost:3003/heroes/").then((function(e){r(function(e){return{type:"HEROES_FETCHED",payload:e}}(e))})).catch((function(){return r({type:"HEROES_FETCHING_ERROR"})}))}),[r,s]),"loading"===n)return Object(O.jsx)(f,{});if("error"===n)return Object(O.jsx)("h5",{className:"text-center mt-5",children:"\u041e\u0448\u0438\u0431\u043a\u0430 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438"});var b,u=function(e){return 0===e.length?Object(O.jsx)("h5",{className:"text-center mt-5",children:"\u0413\u0435\u0440\u043e\u0435\u0432 \u043f\u043e\u043a\u0430 \u043d\u0435\u0442"}):e.map((function(e){var n=e.id,a=Object(l.a)(e,["id"]);return Object(O.jsx)(m,Object(o.a)({id:n,heroes:t},a),n)}))};return b="All"===c.type?u(t):u(c.arr),Object(O.jsx)("ul",{children:b})},x=n(4),g=function(){var e=Object(i.b)(),t=j().request,n=Object(a.useState)([]),c=Object(x.a)(n,2),r=c[0],s=c[1],l=Object(a.useState)({name:"",text:"",element:""}),b=Object(x.a)(l,2),u=b[0],d=b[1];Object(a.useEffect)((function(){t("http://localhost:3003/filters/").then((function(e){s(e)}))}),[t]);var h=r.map((function(e,t){return Object.entries(e).map((function(e){var t=Object(x.a)(e,2),n=t[0],a=t[1];return Object(O.jsx)("option",{value:n,children:a},n)}))}));return Object(O.jsxs)("form",{className:"border p-4 shadow-lg rounded",children:[Object(O.jsxs)("div",{className:"mb-3",children:[Object(O.jsx)("label",{htmlFor:"name",className:"form-label fs-4",children:"\u0418\u043c\u044f \u043d\u043e\u0432\u043e\u0433\u043e \u0433\u0435\u0440\u043e\u044f"}),Object(O.jsx)("input",{required:!0,type:"text",name:"name",className:"form-control",id:"name",placeholder:"\u041a\u0430\u043a \u043c\u0435\u043d\u044f \u0437\u043e\u0432\u0443\u0442?",value:u.name,onChange:function(e){d((function(t){return Object(o.a)(Object(o.a)({},t),{},{name:e.target.value})}))}})]}),Object(O.jsxs)("div",{className:"mb-3",children:[Object(O.jsx)("label",{htmlFor:"text",className:"form-label fs-4",children:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435"}),Object(O.jsx)("textarea",{required:!0,name:"text",className:"form-control",id:"text",value:u.text,placeholder:"\u0427\u0442\u043e \u044f \u0443\u043c\u0435\u044e?",onChange:function(e){d((function(t){return Object(o.a)(Object(o.a)({},t),{},{text:e.target.value})})),console.log(u)},style:{height:"130px"}})]}),Object(O.jsxs)("div",{className:"mb-3",children:[Object(O.jsx)("label",{htmlFor:"element",className:"form-label",children:"\u0412\u044b\u0431\u0440\u0430\u0442\u044c \u044d\u043b\u0435\u043c\u0435\u043d\u0442 \u0433\u0435\u0440\u043e\u044f"}),Object(O.jsxs)("select",{value:u.element,required:!0,className:"form-select",id:"element",name:"element",onChange:function(e){d((function(t){return Object(o.a)(Object(o.a)({},t),{},{element:e.target.value})}))},children:[Object(O.jsx)("option",{children:"\u042f \u0432\u043b\u0430\u0434\u0435\u044e \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u043e\u043c..."}),h]})]}),Object(O.jsx)("button",{onClick:function(n){n.preventDefault(),t("http://localhost:3003/heroes/","POST",JSON.stringify(u)),e(function(e){return{type:"HEROES_ADD",payload:e}}(u))},type:"submit",className:"btn btn-primary",children:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c"})]})},E=n(5),v=n.n(E),y=function(){var e=Object(i.b)(),t=Object(a.useState)("btn-outline-dark"),n=Object(x.a)(t,2),c=n[0],r=n[1],s=function(e){r(e)};return Object(O.jsx)("div",{className:"card shadow-lg mt-4",children:Object(O.jsxs)("div",{className:"card-body",children:[Object(O.jsx)("p",{className:"card-text",children:"\u041e\u0442\u0444\u0438\u043b\u044c\u0442\u0440\u0443\u0439\u0442\u0435 \u0433\u0435\u0440\u043e\u0435\u0432 \u043f\u043e \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0430\u043c"}),Object(O.jsxs)("div",{className:"btn-group",children:[Object(O.jsx)("button",{className:v()("btn btn-outline-dark",{active:"btn-outline-dark"===c}),onClick:function(){e(h("All")),s((function(){s("btn-outline-dark")}))},children:"\u0412\u0441\u0435"}),Object(O.jsx)("button",{className:v()("btn btn-danger",{active:"btn-danger"===c}),onClick:function(){s((function(){s("btn-danger")})),e(h("fire"))},children:"\u041e\u0433\u043e\u043d\u044c"}),Object(O.jsx)("button",{className:v()("btn btn-primary",{active:"btn-primary"===c}),onClick:function(){s((function(){s("btn-primary")})),e(h("water"))},children:"\u0412\u043e\u0434\u0430"}),Object(O.jsx)("button",{className:v()("btn btn-success",{active:"btn-success"===c}),onClick:function(){s((function(){s("btn-success")})),e(h("wind"))},children:"\u0412\u0435\u0442\u0435\u0440"}),Object(O.jsx)("button",{className:v()("btn btn-secondary",{active:"btn-secondary"===c}),onClick:function(){s((function(){s("btn-secondary")})),e(h("earth"))},children:"\u0417\u0435\u043c\u043b\u044f"})]})]})})},N=(n(24),function(){return Object(O.jsx)("main",{className:"app",children:Object(O.jsxs)("div",{className:"content",children:[Object(O.jsx)(p,{}),Object(O.jsxs)("div",{className:"content__interactive",children:[Object(O.jsx)(g,{}),Object(O.jsx)(y,{})]})]})})}),_=n(12),S=n(28),w={heroes:[{id:1,name:"\u041f\u0435\u0440\u0432\u044b\u0439 \u0433\u0435\u0440\u043e\u0439",description:"\u041f\u0435\u0440\u0432\u044b\u0439 \u0433\u0435\u0440\u043e\u0439 \u0432 \u0440\u0435\u0439\u0442\u0438\u043d\u0433\u0435!",element:"fire"},{name:"fghfgh",text:"\u043d\u0440\u0435\u043f\u043a\u0430\u043f\u0435",element:"fire",id:2}],heroesLoadingStatus:"idle",filters:{type:"All",arr:[]}},k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"HEROES_FETCHING":return Object(o.a)(Object(o.a)({},e),{},{heroesLoadingStatus:"loading"});case"HEROES_FETCHED":return Object(o.a)(Object(o.a)({},e),{},{heroes:t.payload,heroesLoadingStatus:"idle"});case"HEROES_SORT":var n=e.heroes.filter((function(e){return e.element===t.payload}));if("All"!==t.payload)return 0===n.length?Object(o.a)(Object(o.a)({},e),{},{filters:{arr:[],type:t.payload}}):Object(o.a)(Object(o.a)({},e),{},{filters:{arr:n,type:t.payload}});console.log("\u043f\u043e\u043f\u0430\u043b\u0438");var a=e.heroes;return Object(o.a)(Object(o.a)({},e),{},{filters:{arr:a,type:"All"}});case"HEROES_FETCHING_ERROR":return Object(o.a)(Object(o.a)({},e),{},{heroesLoadingStatus:"error"});case"HEROES_CLOSE":var c=e.heroes.filter((function(e){return e.id!==t.payload}));return Object(o.a)(Object(o.a)({},e),{},{heroes:c});case"HEROES_ADD":return t.payload.id=Object(S.a)(),e.heroes.push(t.payload),Object(o.a)({},e);default:return e}},C=Object(_.a)(k,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());n(25);s.a.render(Object(O.jsx)(c.a.StrictMode,{children:Object(O.jsx)(i.a,{store:C,children:Object(O.jsx)(N,{})})}),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.f24a7e0b.chunk.js.map