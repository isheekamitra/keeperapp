(this.webpackJsonpprojreact6=this.webpackJsonpprojreact6||[]).push([[0],{14:function(e,t,n){},47:function(e,t,n){},55:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n(7),i=n.n(r),j=(n(14),n.p,n(47),n(2));var o=n(39),a=n(23),u=n(35),s=n.n(u),l=function(){return Object(j.jsx)("header",{children:Object(j.jsxs)("h1",{children:[Object(j.jsx)(s.a,{}),"Keeper"]})})},b=function(){var e=(new Date).getFullYear();return Object(j.jsx)("footer",{children:Object(j.jsxs)("p",{children:["Copyright \xa9 ",e]})})},O=n(37),d=n.n(O),f=function(e){return Object(j.jsxs)("div",{className:"note",children:[Object(j.jsxs)("h1",{children:[" ",e.title," "]}),Object(j.jsx)("p",{children:e.content}),Object(j.jsx)("button",{onClick:function(){e.onDelete(e.id)},children:Object(j.jsx)(d.a,{})})]})},h=n(27),x=n(34),p=n(38),v=n.n(p),g=n(72),m=n(73);var C=function(e){var t=Object(c.useState)(!1),n=Object(a.a)(t,2),r=n[0],i=n[1],o=Object(c.useState)({title:"",content:""}),u=Object(a.a)(o,2),s=u[0],l=u[1];function b(e){var t=e.target,n=t.name,c=t.value;l((function(e){return Object(x.a)(Object(x.a)({},e),{},Object(h.a)({},n,c))}))}return Object(j.jsx)("div",{children:Object(j.jsxs)("form",{className:"create-note",children:[r?Object(j.jsx)("input",{name:"title",onChange:b,value:s.title,placeholder:"Title"}):null,Object(j.jsx)("textarea",{name:"content",onClick:function(){i(!0)},onChange:b,value:s.content,placeholder:"Take a note..",rows:r?3:1}),Object(j.jsx)(m.a,{in:r,children:Object(j.jsx)(g.a,{onClick:function(t){e.onAdd(s),l({title:"",content:""}),t.preventDefault()},children:Object(j.jsx)(v.a,{})})})]})})},k=function(){var e=Object(c.useState)([]),t=Object(a.a)(e,2),n=t[0],r=t[1];function i(e){r((function(t){return t.filter((function(t,n){return n!==e}))}))}return Object(j.jsxs)("div",{children:[Object(j.jsx)(l,{}),Object(j.jsx)(C,{onAdd:function(e){r((function(t){return[].concat(Object(o.a)(t),[e])}))}}),n.map((function(e,t){return Object(j.jsx)(f,{id:t,title:e.title,content:e.content,onDelete:i},t)})),Object(j.jsx)(b,{})]})},D=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,75)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,i=t.getLCP,j=t.getTTFB;n(e),c(e),r(e),i(e),j(e)}))};i.a.render(Object(j.jsx)(k,{}),document.getElementById("root")),D()}},[[55,1,2]]]);
//# sourceMappingURL=main.eada5bac.chunk.js.map