(this["webpackJsonpwebsite-portfolio"]=this["webpackJsonpwebsite-portfolio"]||[]).push([[0],{21:function(e,t,a){e.exports=a.p+"static/media/me.0ee5a875.jpg"},22:function(e,t,a){e.exports=a.p+"static/media/project1.bfce7a88.png"},23:function(e,t,a){e.exports=a.p+"static/media/LIRIbot.9851f2fd.png"},24:function(e,t,a){e.exports=a.p+"static/media/train.0824c898.png"},25:function(e,t,a){e.exports=a.p+"static/media/resume.df2a8845.pdf"},26:function(e,t,a){e.exports=a(38)},31:function(e,t,a){},32:function(e,t,a){},38:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(18),l=a.n(r),i=(a(31),a(32),a(12)),o=a(1),m=a(3),s=a(4),u=a(6),p=a(5),h=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return c.a.createElement("li",{id:this.props.item},c.a.createElement(i.b,{to:this.props.tolink,onClick:this.props.activec.bind(this,this.props.item)},this.props.item))}}]),a}(n.Component),d=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).activeitem=function(e){n.state.NavItemActive.length>0&&document.getElementById(n.state.NavItemActive).classList.remove("active"),n.setState({NavItemActive:e},(function(){document.getElementById(n.state.NavItemActive).classList.add("active")}))},n.state={NavItemActive:""},n}return Object(s.a)(a,[{key:"render",value:function(){return c.a.createElement("nav",null,c.a.createElement("ul",null,c.a.createElement(h,{item:"Home",tolink:"/",activec:this.activeitem}),c.a.createElement(h,{item:"About",tolink:"/about",activec:this.activeitem}),c.a.createElement(h,{item:"Skills",tolink:"/skills",activec:this.activeitem}),c.a.createElement(h,{item:"Project",tolink:"/project",activec:this.activeitem}),c.a.createElement(h,{item:"Contact",tolink:"/contact",activec:this.activeitem})))}}]),a}(n.Component),E=a(20),v=a.n(E),b=a(21),f=a.n(b),g=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{className:"condiv home"},c.a.createElement("img",{src:f.a,className:"profilepic"}),c.a.createElement(v.a,{className:"typingeffect",text:["Hello, I'm Reid Burns","I am a web developer"],speed:100,eraseDelay:700}))}}]),a}(n.Component),j=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{className:"condiv"},c.a.createElement("h1",{className:"subtopic"},"About Me"),c.a.createElement("h2",null,"Hey there, "),c.a.createElement("h2",null,"I'm Reid Burns"),c.a.createElement("br",null),c.a.createElement("h3",null,c.a.createElement("u",null,"Full Stack Web Developer")),c.a.createElement("br",null),c.a.createElement("p",null,"I've lived in Okinawa, Japan for over 18 years and consider it home. I can still speak, read, and write Japanese even though I've forgotten so much since moving to the states 4 years ago.",c.a.createElement("br",null),"Since I can remember I've always enjoyed creating and building things whether it's from building a drift car to building programs with code. One of my long-term goals is to start a programming career back home in Japan."))}}]),a}(n.Component),k=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).state={myskills:["HTML","CSS","JS","REACT JS","FIREBASE","MONGO"]},n}return Object(s.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{className:"condiv skills"},c.a.createElement("h1",{className:"subtopic"},"My Skills"),c.a.createElement("ul",null,this.state.myskills.map((function(e){return c.a.createElement("li",null,e)}))))}}]),a}(n.Component),O=a(22),y=a.n(O),I=a(23),w=a.n(I),N=a(24),C=a.n(N),R=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{className:"condiv"},c.a.createElement("h1",{className:"subtopic"},"Projects"),c.a.createElement("h2",null,c.a.createElement("p",null,"Meme Generator: Type any word and receive a random Gif and Reddit Comment")),c.a.createElement("h3",null,c.a.createElement("a",{href:"https://github.com/ChristineDang/OdincoGaming"}," Meme Generator")),c.a.createElement("img",{src:y.a,className:"memepic"}),c.a.createElement("br",null),c.a.createElement("h2",null,c.a.createElement("p",null,"LIRI Bot: LIRI will be a command line node app that takes in parameters and give you back data.")),c.a.createElement("h3",null,c.a.createElement("a",{href:"https://github.com/Magnanimous19/LIRIBot"}," LIRI Bot")),c.a.createElement("img",{src:w.a,className:"LIRIpic"}),c.a.createElement("br",null),c.a.createElement("h2",null,c.a.createElement("p",null,"Train Scheduler: Uses Firebase to add and host arrival/departure times of trains")),c.a.createElement("h3",null,c.a.createElement("a",{href:"https://github.com/Magnanimous19/TrainScheduler"}," Train Scheduler")),c.a.createElement("img",{src:C.a,className:"trainpic"}))}}]),a}(n.Component),S=a(25),M=a.n(S),B=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{className:"condiv"},c.a.createElement("h1",{className:"subtopic"},"Contact Me"),c.a.createElement("h2",null,"Email  :   reidburnsy19@hotmail.com"),c.a.createElement("h2",null,"Github   :  ",c.a.createElement("a",{href:"https://github.com/Magnanimous19?tab=repositories"}," Magnanimous19")," "),c.a.createElement("h2",null,"Linkedin    : ",c.a.createElement("a",{href:"https://www.linkedin.com/in/reid-burns-79b86219a/"},"Reid Burns")),c.a.createElement("h2",null,"Resume  : ",c.a.createElement("a",{href:M.a},"Resume")))}}]),a}(n.Component);var A=function(){return c.a.createElement(i.a,null,c.a.createElement("div",{className:"App"},c.a.createElement(d,null),c.a.createElement(o.a,{exact:!0,path:"/"},c.a.createElement(g,null)),c.a.createElement(o.a,{path:"/about"},c.a.createElement(j,null)),c.a.createElement(o.a,{path:"/skills"},c.a.createElement(k,null)),c.a.createElement(o.a,{path:"/project"},c.a.createElement(R,null)),c.a.createElement(o.a,{path:"/contact"},c.a.createElement(B,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(A,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[26,1,2]]]);
//# sourceMappingURL=main.fbcdf081.chunk.js.map