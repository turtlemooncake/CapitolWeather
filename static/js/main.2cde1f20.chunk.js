(this.webpackJsonpcountries=this.webpackJsonpcountries||[]).push([[0],{14:function(e,t,n){e.exports=n(37)},37:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),r=n(13),c=n.n(r),o=n(2),u=n(3),i=n.n(u),s=function(e){var t=e.one,n=Object(a.useState)([]),r=Object(o.a)(n,2),c=r[0],u=r[1],s="http://api.weatherstack.com/current?access_key=".concat("793d9c556fe6e7f5e0b924a130e80aaf","&query=").concat(t.capital);return console.log(s),Object(a.useEffect)((function(){console.log("effect"),i.a.get(s).then((function(e){console.log("promise fulfilled"),u(e.data.current)}))}),[]),l.a.createElement("div",null,l.a.createElement("h1",null,"Weather in ",t.capital),l.a.createElement("strong",null,"Temperature:")," ",c.temperature," Celsius",l.a.createElement("div",null,l.a.createElement("img",{src:c.weather_icons,width:"80",alt:"weather icon"})),l.a.createElement("strong",null,"wind:")," ",c.wind_speed," km direction ",c.wind_dir)},m=function(e){var t=e.one;return l.a.createElement("div",null,l.a.createElement("h1",null,t.name," "),l.a.createElement("p",null,"capitol: ",t.capital),l.a.createElement("p",null,"population: ",t.population),l.a.createElement("h1",null,"languages"),l.a.createElement("ul",null,t.languages.map((function(e,t){return l.a.createElement("li",{key:t},e.name)}))),l.a.createElement("img",{src:t.flag,height:"100",alt:"flag"}),l.a.createElement(s,{one:t}))},f=function(e){var t=e.territory,n=e.spec,a=e.buttonfil,r=t;if(n&&(r=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}))),r.length>10&&""!==n)return l.a.createElement("p",null,"Too many matches, specify another filter");if(1===r.length)return l.a.createElement(m,{one:r[0]});return r.map((function(e){return l.a.createElement("li",{key:e.name},e.name,l.a.createElement("button",{onClick:function(){return a(e.name)}},"show"))}))},p=function(e){var t=e.country,n=e.fil,a=e.handle,r=e.buttonFilter;return l.a.createElement("div",null,"find countries ",l.a.createElement("input",{value:n,onChange:a}),l.a.createElement(f,{territory:t,spec:n,buttonfil:r}))};var E=function(){var e=Object(a.useState)([]),t=Object(o.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(""),u=Object(o.a)(c,2),s=u[0],m=u[1];return Object(a.useEffect)((function(){console.log("effect"),i.a.get("https://restcountries.eu/rest/v2/all").then((function(e){console.log("promise fulfilled"),r(e.data)}))}),[]),console.log(n),l.a.createElement("div",null,l.a.createElement("h1",null,"Current Weather Report For Country Capitols"),l.a.createElement("div",null,l.a.createElement(p,{country:n,fil:s,handle:function(e){m(e.target.value)},buttonFilter:m})))};c.a.render(l.a.createElement(E,null),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.2cde1f20.chunk.js.map