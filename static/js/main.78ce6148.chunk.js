(this["webpackJsonpsrt-cleaner"]=this["webpackJsonpsrt-cleaner"]||[]).push([[0],[,,,,,,,,,,function(e,t,a){e.exports=a(19)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(3),s=a.n(l),c=(a(15),a(16),a(17),a(4)),u=a(5),o=a(6),i=a(9),m=a(7),h=a(1),d=a(8),b=(a(18),function(e){function t(){var e;return Object(u.a)(this,t),(e=Object(i.a)(this,Object(m.a)(t).call(this))).handleChange=function(t){var a=t.target,n=a.name,r=a.value;e.setState(Object(c.a)({},n,r))},e.srtCleaner=function(e){var t=[],a=[],n=RegExp(/[\:>]/g),r=RegExp(/[a-zA-Z]/g),l=e.split("\n");console.log(l);for(var s=0;s<l.length;s++)n.test(l[s])?t.push(l[s]):r.test(l[s])&&a.push(l[s]);return[t,a]},e.handleSubmit=function(t){t.preventDefault();var a=e.srtCleaner(e.state.body);e.setState({resultTimeCodes:a[0],resultText:a[1]})},e.state={body:"",resultTimeCodes:[],resultText:[]},e.handleChange=e.handleChange.bind(Object(h.a)(e)),e.handleSubmit=e.handleSubmit.bind(Object(h.a)(e)),e.srtCleaner=e.srtCleaner.bind(Object(h.a)(e)),e}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.state.resultText.map((function(e){return r.a.createElement("p",null,e)})),t=this.state.resultTimeCodes.map((function(e){return r.a.createElement("p",null,e)}));return r.a.createElement("div",{className:"cleaner-master m-0"},r.a.createElement("form",{onSubmit:this.handleSubmit,className:"flex flex-col flex-center"},r.a.createElement("h2",null,"Paste Here:"),r.a.createElement("textarea",{rows:"10",name:"body",value:this.state.body,onChange:this.handleChange}),r.a.createElement("input",{className:"submit-button m-0",type:"submit",value:"Submit"})),r.a.createElement("div",null,r.a.createElement("h2",null,"Result:"),r.a.createElement("div",{className:"flex flex-row space-around"},r.a.createElement("div",null,t),r.a.createElement("div",null,e))))}}]),t}(n.Component));var f=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("h1",null,"YouTube SRT Cleaner"),r.a.createElement("p",null,"Paste in the text from a YouTube-generated .srt files and get back readable text. Happy birthday."),r.a.createElement(b,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[10,1,2]]]);
//# sourceMappingURL=main.78ce6148.chunk.js.map