(window.webpackJsonpweatherapp=window.webpackJsonpweatherapp||[]).push([[0],{10:function(e,t,n){e.exports=n(19)},15:function(e,t,n){},18:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(3),o=n.n(c),s=(n(15),n(1)),i=n.n(s),u=n(4),l=n(5),m=n(6),p=n(8),d=n(7),v=n(9),h=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Get Weather in Your City!"))},y=function(e){return r.a.createElement("form",{onSubmit:e.getWeather},r.a.createElement("input",{type:"text",name:"city",placeholder:"Enter City"}),r.a.createElement("button",null,"Get Weather"))},E=function(e){return r.a.createElement("div",{className:"infoWeath"},e.city&&r.a.createElement("div",null,r.a.createElement("p",null,"City & Country: ",e.city,", ",e.country),r.a.createElement("p",null,"Temperature: ",e.temp," \xb0C"),r.a.createElement("p",null,"Air Pressure: ",e.pressure," hpa"),r.a.createElement("p",null,"Sunset: ",e.sunset)),r.a.createElement("p",{className:"error"},e.error))},f="15b50de70f339c32ce68593327c0e00a",w=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(p.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={temp:void 0,city:void 0,country:void 0,pressure:void 0,sunset:void 0,error:void 0},n.getWeather=function(){var e=Object(u.a)(i.a.mark((function e(t){var a,r,c,o,s,u,l,m;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t.preventDefault(),a=t.target.elements.city.value,e.next=5,fetch("https://api.openweathermap.org/data/2.5/weather?q=".concat(a,"&appid=").concat(f,"&units=metric"));case 5:return r=e.sent,e.next=8,r.json();case 8:c=e.sent,o=new Date(1e3*c.sys.sunset),s=o.getHours(),u="0"+o.getMinutes(),l="0"+o.getSeconds(),m=s+":"+u.substr(-2)+":"+l.substr(-2),n.setState({temp:c.main.temp,city:c.name,country:c.sys.country,pressure:c.main.pressure,sunset:m,error:void 0}),e.next=20;break;case 17:e.prev=17,e.t0=e.catch(0),n.setState({temp:void 0,city:void 0,country:void 0,pressure:void 0,sunset:void 0,error:"Enter Correct City"});case 20:case"end":return e.stop()}}),e,null,[[0,17]])})));return function(t){return e.apply(this,arguments)}}(),n}return Object(v.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"wrapper"},r.a.createElement("div",{className:"main"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm-5 info"},r.a.createElement(h,null)),r.a.createElement("div",{className:"col-sm-7 form"},r.a.createElement(y,{getWeather:this.getWeather}),r.a.createElement(E,this.state))))))}}]),t}(r.a.Component);n(17),n(18),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[10,1,2]]]);
//# sourceMappingURL=main.2a308a26.chunk.js.map