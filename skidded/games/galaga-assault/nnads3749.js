var nnsdkCom={second:60,timeCount:0,gameFlag:!1,init:function(){vigoo.Login(e=>{const o=e.appid,t=e.openid,n=e.token;console.log("appid"+o),console.log("openid"+t),console.log("token"+n)}),this.logReport.logStart(),this.logReport.customEvent("101","е€ќе§‹еЊ–е®Њж€ђ"),setTimeout(()=>{vigoo.HideLoading(),this.logReport.customEvent("102","йљђи—Џvigooз•Њйќў")},1e3)},showTitleAdv(){vigoo.ShowTitleAdv(e=>{const o=e.type;console.log(o)})},showScreenVideo:function(e){vigoo.ShowScreenVideo(e,e=>{const o=e.type;"2"!==o&&"3"!==o||this.logReport.onAdClick()})}};nnsdkCom.logReport={lastTime:Date.now(),uuid:function(){return localStorage.getItem("uuid")||this.getUuid()},logStart:function(){SeasunDcLogger.config({appId:"999075",appVersion:"1.1.1",channel:"vigoo"}),SeasunDcLogger.start()},roleLogin:function(){SeasunDcLogger.push({msgType:"role.login",accountId:this.uuid()})},customEvent:function(e,o){SeasunDcLogger.push({msgType:"custom.event",accountId:this.uuid(),eventId:"loading_transform",eventDesc:"е‰Ќз«ЇеЉ иЅЅиЅ¬еЊ–",eventBody:{eventTargetId:e,eventTargetName:o,loadingTime:parseInt((Date.now()-this.lastTime)/1e3)}})},onAdClick:function(){SeasunDcLogger.push({msgType:"custom.event",accountId:this.uuid(),eventId:"ad.click",eventDesc:"зЋ©е®¶з‚№е‡»е№їе‘Љ",eventBody:{eventTargetId:"1",eventTargetName:"жЏ’е±Џе№їе‘Љеј№е‡є"}})},onAdWatch:function(){SeasunDcLogger.push({msgType:"custom.event",accountId:this.uuid(),eventId:"ad.watch",eventDesc:"vgoo",eventBody:{eventTargetId:"",eventTargetName:""}})},getUuid:function(){let e=[];for(let o=0;o<36;o++)e[o]="0123456789abcdef".substr(Math.floor(16*Math.random()),1);e[14]="4",e[19]="0123456789abcdef".substr(3&e[19]|8,1),e[8]=e[13]=e[18]=e[23]="-";let o=e.join("");return localStorage.setItem("uuid",o),o}},nnsdkCom.init();