(this["webpackJsonpDog-shop"]=this["webpackJsonpDog-shop"]||[]).push([[3],{79:function(A,e,s){"use strict";s.r(e);var t=s(0),c=s(1),a=s(14),o=s(4),g=s(11),i=s(26),n=s(7),l=s.n(n);e.default=function(){var A=Object(o.b)(),e=Object(o.c)((function(A){return A.dogs.nextDogs.slice(0,4)})),s=Object(c.useRef)(null);Object(c.useEffect)((function(){A(Object(g.f)())}),[A]);var n=e.map((function(A){return Object(t.jsx)("article",{className:l.a.dogArticle,children:Object(t.jsx)(a.b,{to:"/".concat(A.id),dog:A,children:Object(t.jsx)("img",{className:l.a.dogArticleImg,src:A.url,alt:A.id})})},A.id)})),r=Object(o.c)((function(A){return A.dogs.loaders.loadingNextDogs})),d=Object(o.c)((function(A){return A.dogs.errors.loadingNextDogs}));return d?Object(t.jsx)(i.a,{msg:d}):Object(t.jsxs)("div",{className:l.a.dogsContainer,children:[Object(t.jsxs)("p",{className:l.a.nextDogsHeading,ref:s,children:["Other random dogs",Object(t.jsx)("br",{}),Object(t.jsxs)("button",{className:l.a.button,type:"button",onClick:function(e){e.preventDefault(),A(Object(g.f)()),window.scrollTo(0,s.current.offsetTop)},disabled:r,children:[Object(t.jsx)("img",{className:l.a.buttonIcon,src:"data:image/png;base64,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",alt:"Refresh icon",width:"20",height:"20"}),"Load others"]})]}),Object(t.jsx)("div",{className:l.a.dogsGridContainer,children:n})]})}}}]);
//# sourceMappingURL=3.d9035878.chunk.js.map