(this.webpackJsonpinterruptible_rendering=this.webpackJsonpinterruptible_rendering||[]).push([[0],{21:function(e,t,n){e.exports=n(45)},26:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){"use strict";n.r(t);for(var r=n(0),a=n.n(r),l=n(17),c=n.n(l),i=(n(26),n(4)),o=n(7),u=n(6),d=new(n(18).LoremIpsum)({sentencesPerParagraph:{max:8,min:4},wordsPerSentence:{max:16,min:4}}),m=[],s=function e(t){return t.indexOf(" ")>=0?t.split(" ").map((function(t){return e(t)})).join(" "):t.charAt(0).toUpperCase()+t.slice(1)},f=0;f<300;f++)m.push({id:Math.random(),title:s(d.generateWords(Math.ceil(4*Math.random()))),body:d.generateParagraphs(2+Math.floor(2*Math.random()))});var h=m;var g=function(){var e=Object(r.useState)(window.innerWidth),t=Object(u.a)(e,2),n=t[0],a=t[1];return Object(r.useEffect)((function(){var e=function(){return a(window.innerWidth)};return window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}}),[]),n},b=function(e){return a.a.createElement("div",null,a.a.createElement(i.b,{to:"".concat("/interruptible_rendering","/")},"<<< Back To Home Page"))},p=function(e){for(var t=e.body,n=e.lag,r=e.length,l=e.title,c=performance.now();performance.now()-c<n;);return a.a.createElement("article",null,a.a.createElement("h3",null,l),a.a.createElement("p",null,t.slice(0,r)+" ..."))},E=a.a.memo((function(e){var t=e.articles,n=e.articleLength,r=e.filterText,l=e.lag;return a.a.createElement(a.a.Fragment,null,!t.length&&a.a.createElement("p",null,"No results for ",r),t.map((function(e){return a.a.createElement(p,{key:e.id,body:e.body,lag:l,length:n,title:e.title})})))}));E.propTypes={};var v=E,w=function(e){var t=e.articles,n=e.articleLength,r=e.handleChange,l=e.filterText,c=e.lag,i=e.searchText,o=e.title;return a.a.createElement("div",null,a.a.createElement(b,null),a.a.createElement("h2",null,o),a.a.createElement("h4",null,"Find me articles about",a.a.createElement("input",{type:"text",value:i,onChange:r})),a.a.createElement(v,{articles:t,articleLength:n,filterText:l,lag:c}))},M=function(){var e=Object(r.useState)(""),t=Object(u.a)(e,2),n=t[0],l=t[1],c=g(),i=Math.floor(Math.pow(c,1.5)/35),o=h.filter((function(e){return e.title.toLowerCase().includes(n.toLowerCase())}));return a.a.createElement(w,{articles:o,articleLength:i,filterText:n,handleChange:function(e){var t=e.target.value;l(t)},lag:4,searchText:n,title:"Blocking Mode Article Finder"})},C=function(e){var t=e.fast,n=Object(r.useState)(""),l=Object(u.a)(n,2),c=l[0],i=l[1],o=Object(r.useDeferredValue)(c,{timeoutMs:5e3}),d=g(),m=Math.floor(Math.pow(d,1.5)/35),s=Object(r.useMemo)((function(){return h.filter((function(e){return e.title.toLowerCase().includes(o.toLowerCase())}))}),[o]),f=t?"Concurrent Mode Article Finder (High Performance)":"Concurrent Mode Article Finder";return a.a.createElement(w,{articles:s,articleLength:m,filterText:o,handleChange:function(e){var t=e.target.value;i(t)},lag:t?1:4,searchText:c,title:f})},j=n(47),x=function(e){var t=e.fast,n=Object(r.useState)(""),l=Object(u.a)(n,2),c=l[0],i=l[1],o=Object(j.a)(c,1e3),d=Object(u.a)(o,1)[0],m=g(),s=Math.floor(Math.pow(m,1.5)/35),f=Object(r.useMemo)((function(){return h.filter((function(e){return e.title.toLowerCase().includes(d.toLowerCase())}))}),[d]),b=t?"Debounced Article Finder (High Performance)":"Debounced Article Finder";return a.a.createElement(w,{articles:f,articleLength:s,handleChange:function(e){var t=e.target.value;i(t)},filterText:d,lag:t?1:4,searchText:c,title:b})},L=function(){return a.a.createElement("ul",null,a.a.createElement("li",null,a.a.createElement(i.b,{to:"".concat("/interruptible_rendering","blocking")},"Blocking Mode Article Finder")),a.a.createElement("li",null,a.a.createElement(i.b,{to:"".concat("/interruptible_rendering","concurrent")},"Concurrent Mode Article Finder")),a.a.createElement("li",null,a.a.createElement(i.b,{to:"".concat("/interruptible_rendering","/debounced")},"Debounced Article Finder")),a.a.createElement("li",null,a.a.createElement(i.b,{to:"".concat("/interruptible_rendering","/debounced-fast")},"Debounced Article Finder (High Performance)")),a.a.createElement("li",null,a.a.createElement(i.b,{to:"".concat("/interruptible_rendering","/concurrent-fast")},"Concurrent Mode Article Finder (High Performance)")))},O=(n(44),function(){return a.a.createElement("div",{className:"App"},a.a.createElement("h1",null,"Interruptible Rendering (useDeferredValue) Demo"),a.a.createElement(i.a,null,a.a.createElement(o.c,null,a.a.createElement(o.a,{path:"".concat("/interruptible_rendering","/blocking")},a.a.createElement(M,null)),a.a.createElement(o.a,{path:"".concat("/interruptible_rendering","/concurrent")},a.a.createElement(C,null)),a.a.createElement(o.a,{path:"".concat("/interruptible_rendering","/debounced")},a.a.createElement(x,null)),a.a.createElement(o.a,{path:"".concat("/interruptible_rendering","/debounced-fast")},a.a.createElement(x,{fast:!0})),a.a.createElement(o.a,{path:"".concat("/interruptible_rendering","/concurrent-fast")},a.a.createElement(C,{fast:!0})),a.a.createElement(o.a,{path:"".concat("/interruptible_rendering","/")},a.a.createElement(L,null)))))});c.a.createRoot(document.getElementById("root")).render(a.a.createElement(O,null))}},[[21,1,2]]]);
//# sourceMappingURL=main.768193d1.chunk.js.map