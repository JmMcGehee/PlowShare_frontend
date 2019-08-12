(window.webpackJsonpplowshare_client=window.webpackJsonpplowshare_client||[]).push([[0],{10:function(e,t,a){e.exports=a(18)},15:function(e,t,a){},17:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(8),c=a.n(l),o=(a(15),a(1)),i=a(2),u=a(4),s=a(3),m=a(5),h=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,"Nav Component"))}}]),t}(n.Component),d="http://localhost:3000",f=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={listings:[]},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.getListings()}},{key:"getListings",value:function(){var e=this;fetch(d+"/equipment").then(function(e){return e.json()}).then(function(t){return e.setState({listings:t})}).catch(function(e){return console.log(e)})}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Index Page"),this.state.listings.map(function(e){return r.a.createElement("div",{key:e.id},r.a.createElement("h3",null,e.title),r.a.createElement("img",{src:e.img,alt:e.title}),r.a.createElement("h5",null,"Description"),r.a.createElement("p",null,e.year," ",e.make," ",e.model),r.a.createElement("h4",null,"Rate"),r.a.createElement("p",null,"$",e.rate,"/day"))}))}}]),t}(n.Component),p=a(6),g=a.n(p),y=(a(17),function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={dateContext:g()(),today:g()(),showMonthPopup:!1,showYearPopup:!1},a.weekdaysShort=g.a.weekdaysShort(),a.weekdays=g.a.weekdays(),a.months=g.a.months(),a.year=function(){return a.state.dateContext.format("Y")},a.month=function(){return a.state.dateContext.format("MMMM")},a.daysInMonth=function(){return a.state.dateContext.daysInMonth()},a.currentDay=function(){return a.state.dateContext.format("D")},a.currentDate=function(){return console.log("currentDate: ",a.state.dateContext.get("date")),a.state.dateContext.get("date")},a.firstDayOfMonth=function(){var e=a.state.dateContext;return g()(e).startOf("month").format("d")},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){for(var e=this.weekdaysShort.map(function(e){return r.a.createElement("td",{key:e,className:"week-day"},e)}),t=[],a=0;a<this.firstDayOfMonth();a++)t.push(r.a.createElement("td",{key:99*a,className:"emptySlot"},""));for(var n=[],l=1;l<=this.daysInMonth();l++){var c=l==this.currentDay()?"day current-day":"day";n.push(r.a.createElement("td",{key:l,className:c},r.a.createElement("span",null,l)))}var o=[].concat(t,n),i=[],u=[];o.forEach(function(e,t){if(t%7!==0)u.push(e);else{var a=u.slice();i.push(a),(u=[]).push(e)}if(t===o.length-1){var n=u.slice();i.push(n)}});var s=i.map(function(e,t){return r.a.createElement("tr",{key:100*t},e)});return r.a.createElement("div",{className:"calendar-container"},r.a.createElement("table",{className:"calendar"},r.a.createElement("thead",null,r.a.createElement("tr",{className:"calendar-header"})),r.a.createElement("tbody",null,r.a.createElement("tr",null,e),s)))}}]),t}(n.Component)),b=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"Show Page"),r.a.createElement(y,null))}}]),t}(n.Component),E=a(9),v=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={title:"",img:"",make:"",model:"",year:0,rate:0},a.handleChange=function(e){a.setState(Object(E.a)({},e.target.id,e.target.value))},a.handleSubmit=function(e){e.preventDefault();var t={title:a.state.title,img:a.state.img,make:a.state.make,model:a.state.model,year:a.state.year,rate:a.state.rate};console.log(t),fetch(d+"/equipment",{body:JSON.stringify(t),method:"POST",headers:{Accept:"application/json, text/plain, */*","Content-Type":"application/json"}}).then(function(e){return e.json()}).then(function(e){return console.log(e)}).catch(function(e){return console.log(e)})},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h3",null,"Create a New Listing"),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("label",{htmlFor:"title"},"Title:"),r.a.createElement("input",{type:"text",value:this.state.title,onChange:this.handleChange,id:"title"}),r.a.createElement("br",null),r.a.createElement("label",{htmlFor:"img"},"Image URL:"),r.a.createElement("input",{type:"text",value:this.state.img,onChange:this.handleChange,id:"img"}),r.a.createElement("br",null),r.a.createElement("label",{htmlFor:"make"},"Make:"),r.a.createElement("input",{type:"text",value:this.state.make,onChange:this.handleChange,id:"make"}),r.a.createElement("br",null),r.a.createElement("label",{htmlFor:"model"},"Model:"),r.a.createElement("input",{type:"text",value:this.state.model,onChange:this.handleChange,id:"model"}),r.a.createElement("br",null),r.a.createElement("label",{htmlFor:"year"},"Year:"),r.a.createElement("input",{type:"number",value:this.state.year,onChange:this.handleChange,id:"year"}),r.a.createElement("br",null),r.a.createElement("label",{htmlFor:"rate"},"Cost per Day:"),r.a.createElement("input",{type:"number",value:this.state.rate,onChange:this.handleChange,id:"rate"}),r.a.createElement("br",null),r.a.createElement("input",{type:"submit"})))}}]),t}(n.Component),O=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={formVisible:!1},a.toggleForm=function(){a.setState({formVisible:!a.state.formVisible})},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,"New Page"),this.state.formVisible?r.a.createElement(v,null):r.a.createElement("button",{onClick:this.toggleForm},"Add New Listing"))}}]),t}(n.Component),j=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={listings:[]},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(h,null),r.a.createElement(b,null),r.a.createElement(O,null),r.a.createElement(f,{getListings:this.getListings}))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[10,1,2]]]);
//# sourceMappingURL=main.4c428d17.chunk.js.map