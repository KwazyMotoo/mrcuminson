(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{487:function(t,e,n){"use strict";n.r(e),n.d(e,"DefaultOptions",(function(){return c})),n.d(e,"default",(function(){return h}));var i=n(13),s=n.n(i),o=n(143);function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){s()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}const c={maxCount:50,gravity:.005};class h{constructor(t){var e=this;s()(this,"options",void 0),s()(this,"context",null),s()(this,"particles",[]),s()(this,"lastAnimationTime",0),s()(this,"isRunning",!1),s()(this,"start",(async function(t){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3e3;if(!t)return;e.context=t.getContext("2d"),e.particles=[];const i=e.options.maxCount;for(;e.particles.length<i;)e.particles.push(e.resetParticle({},t.width,t.height));e.isRunning=!0,requestAnimationFrame(e.renderLoop),n&&window.setTimeout(e.stop,n)})),s()(this,"stop",(async()=>{this.isRunning=!1})),s()(this,"resetParticle",((t,e,n)=>(t.x=Math.random()*e,t.y=Math.random()*-n,t.xCol=t.x,t.gravity=this.options.gravity+6*Math.random()+4,t))),s()(this,"renderLoop",(()=>{if(this.context&&this.context.canvas)if(0===this.particles.length)this.context.clearRect(0,0,this.context.canvas.width,this.context.canvas.height);else{(Date.now()-this.lastAnimationTime>=15||!this.lastAnimationTime)&&(this.context.clearRect(0,0,this.context.canvas.width,this.context.canvas.height),this.lastAnimationTime=Date.now(),this.animateAndRenderInvaders()),requestAnimationFrame(this.renderLoop)}})),this.options=a(a({},c),t)}animateAndRenderInvaders(){if(this.context&&this.context.canvas){this.context.font="50px Twemoji";for(const t of Object(o.b)(this.particles))t.y+=t.gravity,this.context.save(),this.context.fillText("👾",t.x,t.y),this.context.restore()}}}}}]);
//# sourceMappingURL=6.js.map