(this["webpackJsonpcoin-flip-app"]=this["webpackJsonpcoin-flip-app"]||[]).push([[0],[,,,,,,,,function(e,t,n){e.exports=n.p+"static/media/bitcoin.74d5c9f8.jpg"},function(e,t,n){e.exports=n.p+"static/media/ethereum.520a65ef.jpg"},function(e,t,n){e.exports=n(18)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(7),c=n.n(r),o=(n(15),n(16),n(1)),s=n(2),l=n(3),u=n(4),p=n(5);n(17);var h=function(e){Object(p.a)(n,e);var t=Object(u.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return i.a.createElement("div",{className:"Coin"},i.a.createElement("img",{src:this.props.info.imgSrc,alt:this.props.info.sides}))}}]),n}(a.Component),d=n(8),f=n.n(d),m=n(9),v=n.n(m),b=function(e){Object(p.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).state={currCoin:null,nFlips:0,nHeads:0,nTails:0},a.handleClick=a.handleClick.bind(Object(l.a)(a)),a}return Object(s.a)(n,[{key:"flipCoin",value:function(){var e,t=(e=this.props.sides)[Math.floor(Math.random()*e.length)];this.setState((function(e){return{currCoin:t,nFlips:e.nFlips+1,nHeads:e.nHeads+("heads"===t.side?1:0),nTails:e.nTails+("tails"===t.side?1:0)}}))}},{key:"handleClick",value:function(e){this.flipCoin()}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("h2",null,"Let's flip a crypto coin!"),this.state.currCoin&&i.a.createElement(h,{info:this.state.currCoin}),i.a.createElement("button",{onClick:this.handleClick},"Flip Me!"),i.a.createElement("p",null,"Out of ",this.state.nFlips," flips, there have been ",this.state.nHeads," bitcoins and ",this.state.nTails," ethereums."))}}]),n}(a.Component);b.defaultProps={sides:[{side:"heads",imgSrc:"".concat(f.a)},{side:"tails",imgSrc:"".concat(v.a)}]};var C=b;var k=function(){return i.a.createElement("div",{className:"App"},i.a.createElement(C,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(k,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[10,1,2]]]);
//# sourceMappingURL=main.c1be976d.chunk.js.map