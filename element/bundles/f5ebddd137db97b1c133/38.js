(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{1554:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return C}));var o=n(13),a=n.n(o),s=n(120),r=n.n(s),l=n(121),i=n(131),c=n(125),u=n(127),m=n(213),d=n(316),b=n(137),h=n(139),g=n(135),p=n(146);class C extends r.a.Component{constructor(e){super(e),a()(this,"updateCurrentRoom",(async e=>{var t,n,o,a;const s=d.a.get();if(!s)return;let r;try{r=await s.getStats()}catch{return}let l=null;e&&(l=e.name);const i=s.crawlingRooms(),c=i.crawlingRooms.size,u=i.totalRooms.size;this.setState({eventIndexSize:null!==(t=null===(n=r)||void 0===n?void 0:n.size)&&void 0!==t?t:0,eventCount:null!==(o=null===(a=r)||void 0===a?void 0:a.eventCount)&&void 0!==o?o:0,crawlingRoomsCount:c,roomCount:u,currentRoom:l})})),a()(this,"onDisable",(async()=>{const e=(await n.e(37).then(n.bind(null,1530))).default;u.b.createDialog(e,void 0,void 0,!1,!0)})),a()(this,"onCrawlerSleepTimeChange",(e=>{this.setState({crawlerSleepTime:parseInt(e.target.value,10)}),c.b.setValue("crawlerSleepTime",null,b.a.DEVICE,e.target.value)})),this.state={eventIndexSize:0,eventCount:0,crawlingRoomsCount:0,roomCount:0,currentRoom:null,crawlerSleepTime:c.b.getValueAt(b.a.DEVICE,"crawlerSleepTime")}}componentWillUnmount(){const e=d.a.get();null!==e&&e.removeListener("changedCheckpoint",this.updateCurrentRoom)}async componentDidMount(){let e=0,t=0,n=0,o=0,a=null;const s=d.a.get();if(null!==s){s.on("changedCheckpoint",this.updateCurrentRoom);try{const t=await s.getStats();t&&(e=t.size,o=t.eventCount)}catch{}const r=s.crawlingRooms();t=r.crawlingRooms.size,n=r.totalRooms.size;const l=s.currentRoom();l&&(a=l.name)}this.setState({eventIndexSize:e,eventCount:o,crawlingRoomsCount:t,roomCount:n,currentRoom:a})}render(){const e=i.b.get().brand;let t;t=null===this.state.currentRoom?Object(l.b)("Not currently indexing messages for any room."):Object(l.b)("Currently indexing: %(currentRoom)s",{currentRoom:this.state.currentRoom});const n=Math.max(0,this.state.roomCount-this.state.crawlingRoomsCount),o=r.a.createElement("div",null,Object(l.b)("%(brand)s is securely caching encrypted messages locally for them to appear in search results:",{brand:e}),r.a.createElement("div",{className:"mx_SettingsTab_subsectionText"},t,r.a.createElement("br",null),Object(l.b)("Space used:")," ",Object(m.a)(this.state.eventIndexSize,0),r.a.createElement("br",null),Object(l.b)("Indexed messages:")," ",Object(m.d)(this.state.eventCount),r.a.createElement("br",null),Object(l.b)("Indexed rooms:")," ",Object(l.b)("%(doneRooms)s out of %(totalRooms)s",{doneRooms:Object(m.d)(n),totalRooms:Object(m.d)(this.state.roomCount)})," ",r.a.createElement("br",null),r.a.createElement(h.a,{label:Object(l.b)("Message downloading sleep time(ms)"),type:"number",value:this.state.crawlerSleepTime.toString(),onChange:this.onCrawlerSleepTimeChange})));return r.a.createElement(g.a,{className:"mx_ManageEventIndexDialog",onFinished:this.props.onFinished,title:Object(l.b)("Message search")},o,r.a.createElement(p.a,{primaryButton:Object(l.b)("Done"),onPrimaryButtonClick:this.props.onFinished,primaryButtonClass:"primary",cancelButton:Object(l.b)("Disable"),onCancel:this.onDisable,cancelButtonClass:"danger"}))}}}}]);
//# sourceMappingURL=38.js.map