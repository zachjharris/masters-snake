(function(e){function t(t){for(var r,s,i=t[0],l=t[1],c=t[2],d=0,p=[];d<i.length;d++)s=i[d],Object.prototype.hasOwnProperty.call(n,s)&&n[s]&&p.push(n[s][0]),n[s]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);u&&u(t);while(p.length)p.shift()();return o.push.apply(o,c||[]),a()}function a(){for(var e,t=0;t<o.length;t++){for(var a=o[t],r=!0,i=1;i<a.length;i++){var l=a[i];0!==n[l]&&(r=!1)}r&&(o.splice(t--,1),e=s(s.s=a[0]))}return e}var r={},n={app:0},o=[];function s(t){if(r[t])return r[t].exports;var a=r[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=e,s.c=r,s.d=function(e,t,a){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(a,r,function(t){return e[t]}.bind(null,r));return a},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="https://zachjharris.github.io/masters2021/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var c=0;c<i.length;c++)t(i[c]);var u=l;o.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"1f86":function(e,t,a){e.exports=a.p+"img/masters_logo.b10e7411.png"},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-app",[r("v-app-bar",{attrs:{app:""}},[r("v-img",{attrs:{src:a("1f86"),"max-width":"156","max-height":"38",contain:""}}),r("v-spacer"),r("v-tooltip",{attrs:{left:""},scopedSlots:e._u([{key:"activator",fn:function(t){var a=t.on;return[r("v-btn",e._g({attrs:{icon:""},on:{click:function(t){e.playing=!e.playing}}},a),[r("v-icon",[e._v(e._s(e.playing?"mdi-video":"mdi-video-off"))])],1)]}}])},[r("span",[e._v("Toggle Video")])])],1),r("v-main",[r("v-row",{staticClass:"mx-0"},[r("v-col",{attrs:{order:e.$vuetify.breakpoint.mdAndUp?1:2,cols:"12",md:e.playing?6:12}},[r("v-tabs",{model:{value:e.tab,callback:function(t){e.tab=t},expression:"tab"}},[r("v-tab",[e._v("Picks")]),r("v-tab",[e._v("Players")])],1),r("v-row",{staticClass:"mx-0"},[r("v-tabs-items",{attrs:{touchless:""},model:{value:e.tab,callback:function(t){e.tab=t},expression:"tab"}},[r("v-tab-item",[r("player-table",{attrs:{users:e.users,pars:e.pars}})],1),r("v-tab-item",[e.picks.length>0&&e.scores.length>0?r("pick-table",{attrs:{picks:e.players,pars:e.pars}}):e._e()],1)],1)],1)],1),e.playing?r("v-col",{attrs:{cols:"12",md:"6",order:e.$vuetify.breakpoint.smAndDown?1:2}},[r("v-row",{staticClass:"mx-0"},[e.playing?r("v-divider",{attrs:{vertical:""}}):e._e(),r("div",{staticClass:"video-container"},[r("div",{staticClass:"video-wrapper"},[r("video",{staticStyle:{"max-width":"100%",width:"100%"},attrs:{id:"video",autoplay:"",playsinline:"",muted:"",controls:"true"},domProps:{muted:!0}})])]),r("div",[r("v-item-group",{attrs:{"active-class":"selected-video"},model:{value:e.selectedVideos,callback:function(t){e.selectedVideos=t},expression:"selectedVideos"}},[r("v-row",e._l(e.liveVideos,(function(t){return r("v-col",{key:t.channelId,attrs:{cols:"4",sm:"3",md:"3"}},[r("v-item",{attrs:{value:t},scopedSlots:e._u([{key:"default",fn:function(a){var n=a.toggle;return[r("v-img",{attrs:{src:t.imagePath},on:{click:n}},[r("span",{staticClass:"caption",staticStyle:{padding:"3px","background-color":"rgba(0,0,0,.7)",color:"#ffffff"}},[e._v(e._s(t.name))])])]}}],null,!0)})],1)})),1)],1)],1)],1)],1):e._e()],1)],1)],1)},o=[],s=(a("4de4"),a("7db0"),a("4160"),a("caad"),a("c975"),a("d81d"),a("13d5"),a("b0c0"),a("ac1f"),a("2532"),a("5319"),a("159b"),a("96cf"),a("1da1")),i=a("2909"),l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",["table"==e.display?a("v-card",{staticClass:"mt-2"},["table"==e.display?a("v-data-table",{attrs:{items:e.users,headers:e.headers,"hide-default-footer":"","disable-pagination":"","sort-by":"topar","mobile-breakpoint":"0"},scopedSlots:e._u([{key:"body",fn:function(t){var r=t.items;return[a("tbody",[e._l(r,(function(t,r){return[null!=t.picks[0]?a("tr",{key:t.name+"-"+r},[a("td",[e._v(e._s(t.name))]),a("td",{staticClass:"text-center"},[e._v(e._s(t.topar))]),a("td",{staticClass:"text-center"},[e._v(e._s(t.today>0?"+"+t.today:"0"==t.today?"E":t.today))]),e._l(t.picks,(function(n,o){return[a("td",{key:t.name+"-"+r+"-"+o,on:{mouseup:function(t){return e.viewPlayer(n)}}},[null!=n?[a("v-tooltip",{attrs:{top:""},scopedSlots:e._u([{key:"activator",fn:function(t){var r=t.on;return[a("span",e._g({class:{"text-decoration-line-through":n.index>500}},r),[e._v(" "+e._s(n.first_name+" "+n.last_name)),a("br"),""!=n.pos&&""!=n.topar?a("v-chip",{attrs:{"x-small":""}},[e._v(e._s(n.pos)+": "+e._s(n.topar))]):e._e()],1)]}}],null,!0)},[""!=n.pos&&""!=n.today&&""!=n.thru?a("div",[e._v(" Position: "+e._s(n.pos)),a("br"),e._v(" Today: "+e._s(n.today)),a("br"),e._v(" Thru: "+e._s(n.thru)+" ")]):a("div",[e._v(" Tee Time: "+e._s(n.teetime)+" ")])])]:e._e()],2)]}))],2):e._e()]}))],2)]}}],null,!1,3741182714)}):e._e()],1):e._e(),"card"==e.display?a("v-data-iterator",{attrs:{items:e.users,"sort-by":"topar","disable-pagination":"","hide-default-footer":""},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.items;return[a("v-row",{attrs:{"mx-0":"",wrap:""}},e._l(r,(function(t,r){return a("v-col",{key:"card-"+t.name+"-"+r,attrs:{cols:"12",sm:"6",md:"4"}},[a("v-card",[a("v-card-title",[e._v(e._s(t.name))]),a("v-card-text",[a("v-row",{attrs:{"mx-0":"",wrap:""}},[a("v-chip",{staticClass:"mx-2"},[e._v("Today: "+e._s(t.today))]),a("v-chip",{staticClass:"mx-2"},[e._v("Total: "+e._s(t.topar))])],1)],1)],1)],1)})),1)]}}],null,!1,1910259784)}):e._e(),e.showPlayer?a("v-dialog",{attrs:{"max-width":"600"},model:{value:e.showPlayer,callback:function(t){e.showPlayer=t},expression:"showPlayer"}},[a("player",{attrs:{pars:e.pars,player:e.player},on:{cancel:function(t){e.showPlayer=!1}}})],1):e._e()],1)},c=[],u=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-card",[a("v-card-title",[a("span",{staticClass:"title"},[e._v(e._s(e.player.name))]),a("v-spacer"),a("v-btn",{attrs:{icon:"",close:""},on:{click:function(t){return e.$emit("cancel")}}},[a("v-icon",[e._v("mdi-close")])],1)],1),a("v-card-text",[a("v-tabs",{attrs:{"show-arrows":""}},[a("v-tab",[e._v("Round 1")]),a("v-tab",[e._v("Round 2")]),a("v-tab",[e._v("Round 3")]),a("v-tab",[e._v("Round 4")]),e._l(e.rounds,(function(t,r){return a("v-tab-item",{key:r},[a("v-simple-table",[[a("thead",[a("tr",[a("th",[e._v("Hole")]),a("th",[e._v("Par")]),a("th",[e._v("Score")])])]),a("tbody",e._l(t.scores,(function(t,n){return a("tr",{key:"hole-"+(n+1)},[a("td",[e._v(e._s(n+1))]),a("td",[e._v(e._s(e.roundPars[r][n]))]),a("td",[e._v(e._s(t))])])})),0)]],2)],1)}))],2)],1)],1)},d=[],p={props:["player","pars"],computed:{rounds:function(){return[this.player.round1,this.player.round2,this.player.round3,this.player.round4]},roundPars:function(){return[this.pars.round1,this.pars.round2,this.pars.round3,this.pars.round4]}}},v=p,f=a("2877"),m=a("6544"),h=a.n(m),y=a("8336"),g=a("b0af"),b=a("99d9"),_=a("132d"),k=a("1f4f"),w=a("2fa4"),x=a("71a3"),T=a("c671"),V=a("fe57"),P=Object(f["a"])(v,u,d,!1,null,null,null),S=P.exports;h()(P,{VBtn:y["a"],VCard:g["a"],VCardText:b["a"],VCardTitle:b["b"],VIcon:_["a"],VSimpleTable:k["a"],VSpacer:w["a"],VTab:x["a"],VTabItem:T["a"],VTabs:V["a"]});var C={props:["users","pars"],components:{Player:S},data:function(){return{display:"table",showPlayer:!1,player:{},search:"",headers:[{text:"Name",value:"name",width:"160"},{text:"Total",value:"topar",align:"center",width:"100"},{text:"Today",value:"today",align:"center",width:"100"},{text:"Golfer 1",value:"picks[0].name",width:"170"},{text:"Golfer 2",value:"picks[1].name",width:"170"},{text:"Golfer 3",value:"picks[2].name",width:"170"},{text:"Golfer 4",value:"picks[3].name",width:"170"},{text:"Golfer 5",value:"picks[4].name",width:"170"},{text:"Golfer 6",value:"picks[5].name",width:"170"}],touch:!1,clicks:0,clickTimeout:null,count:0}},beforeMount:function(){this.touch=matchMedia("(hover:none),(pointer:coarse)").matches},methods:{viewPlayer:function(e){var t=this;if(this.count<1)return this.count++,void(this.clickTimeout=setTimeout((function(){t.count=0}),1e3));null!=this.clickTimeout&&clearTimeout(this.clickTimeout),this.player=e,this.showPlayer=!0,this.count=0}}},O=C,j=a("cc20"),I=a("62ad"),D=a("c377"),R=a("8fea"),B=a("169a"),$=a("0fd9"),E=a("3a2f"),M=Object(f["a"])(O,l,c,!1,null,null,null),J=M.exports;h()(M,{VCard:g["a"],VCardText:b["a"],VCardTitle:b["b"],VChip:j["a"],VCol:I["a"],VDataIterator:D["a"],VDataTable:R["a"],VDialog:B["a"],VRow:$["a"],VTooltip:E["a"]});var A=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",[a("v-card",{staticClass:"mt-2"},[a("v-data-table",{attrs:{items:e.picks,headers:e.headers,"hide-default-footer":"","disable-pagination":"","sort-by":"topar","mobile-breakpoint":"0"},scopedSlots:e._u([{key:"body",fn:function(t){var r=t.items;return[a("tbody",[e._l(r,(function(t){return[null!=t&&null!=t.name?a("tr",{key:""+t.id},[a("td",{on:{click:function(a){return e.viewPlayer(t)}}},[a("span",{class:{"text-decoration-line-through":t.index>500}},[e._v(e._s(t.name))])]),a("td",{staticClass:"text-center"},[e._v(e._s(t.pos))]),a("td",{staticClass:"text-center"},[e._v(e._s(t.topar))]),a("td",{staticClass:"text-center"},[e._v(e._s(""==t.today?t.teetime:t.today))]),a("td",{staticClass:"text-center"},[e._v(e._s(t.round1Total>0?"+"+t.round1Total:0==t.round1Total?"E":t.round1Total)+" ("+e._s(""!=t.thru&&"Playing"==t.round1.roundStatus?"Thru: "+t.thru:t.round1.roundStatus)+")")]),a("td",{staticClass:"text-center"},[e._v(e._s(t.round2Total>0?"+"+t.round2Total:0==t.round2Total?"E":t.round2Total)+" ("+e._s(""!=t.thru&&"Playing"==t.round2.roundStatus?"Thru: "+t.thru:t.round2.roundStatus)+")")]),a("td",{staticClass:"text-center"},[e._v(e._s(t.round3Total>0?"+"+t.round3Total:0==t.round3Total?"E":t.round3Total)+" ("+e._s(""!=t.thru&&"Playing"==t.round3.roundStatus?"Thru: "+t.thru:t.round3.roundStatus)+")")]),a("td",{staticClass:"text-center"},[e._v(e._s(t.round4Total>0?"+"+t.round4Total:0==t.round4Total?"E":t.round4Total)+" ("+e._s(""!=t.thru&&"Playing"==t.round4.roundStatus?"Thru: "+t.thru:t.round4.roundStatus)+")")]),a("td",{staticClass:"text-left"},[a("v-tooltip",{attrs:{left:"",disabled:0==t.pickedBy.length},scopedSlots:e._u([{key:"activator",fn:function(r){var n=r.on;return[a("span",e._g({},n),[e._v(e._s(t.pickedBy.length)+" "+e._s(t.pickedBy.length>1||0==t.pickedBy.length?"people":"person"))])]}}],null,!0)},[a("div",{staticStyle:{"max-width":"250px"}},[e._v(e._s(t.pickedBy.sort().join(", ")))])])],1)]):e._e()]}))],2)]}}])})],1),e.showPlayer?a("v-dialog",{attrs:{"max-width":"600"},model:{value:e.showPlayer,callback:function(t){e.showPlayer=t},expression:"showPlayer"}},[a("player",{attrs:{pars:e.pars,player:e.player},on:{cancel:function(t){e.showPlayer=!1}}})],1):e._e()],1)},G=[],H={props:["picks","pars"],components:{Player:S},data:function(){return{display:"table",showPlayer:!1,player:{},search:"",headers:[{text:"Name",value:"name",width:"175"},{text:"POS",value:"pos",align:"center",width:"100"},{text:"Total",value:"topar",align:"center",width:"100"},{text:"Today",value:"today",align:"center",width:"100"},{text:"Round 1",value:"round1Total",align:"center"},{text:"Round 2",value:"round2Total",align:"center"},{text:"Round 3",value:"round3Total",align:"center"},{text:"Round 4",value:"round4Total",align:"center"},{text:"Picked By",value:"pickedBy",align:"left"}]}},mounted:function(){console.log("PickTable",this)},methods:{viewPlayer:function(e){this.player=e,this.showPlayer=!0}}},N=H,U=a("a523"),z=Object(f["a"])(N,A,G,!1,null,null,null),K=z.exports;h()(z,{VCard:g["a"],VContainer:U["a"],VDataTable:R["a"],VDialog:B["a"],VTooltip:E["a"]});var q=a("2ef0"),F=a.n(q),L=a("ba56"),Y=a.n(L),Z={name:"App",components:{PlayerTable:J,PickTable:K},data:function(){return{showPlayer:!1,tab:0,player:{},isDarkMode:!1,video:null,playing:!1,muted:!0,isFullScreen:!1,videos:{Featured:"https://ibm1-live-hls.secure.footprint.net/egress/chandler/ibmmasters/live1/fg/master_600.m3u8","Amen Corner":"https://ibm1-live-hls.secure.footprint.net/egress/chandler/ibmmasters/live1/ac/master_5000.m3u8","Holes 4, 5 & 6":"https://ibmlive2021.akamaized.net/hls/live/2013854/456/master_600.m3u8","Holes 15 & 16":"https://ibm1-live-hls.secure.footprint.net/egress/chandler/ibmmasters/live1/1516/master_5000.m3u8"},videoTabs:["Featured","Amen Corner","Holes 4, 5 & 6","Holes 15 & 16"],selectedVideo:0,selectedVideos:{}}},computed:{pars:function(){var e=this.$store.state.pars;return e},scores:function(){var e=this.$store.state.scores,t=this.pars;return e.map((function(e,a){return e.name=e.first_name+" "+e.last_name,e.index=a,e.round1Total=e.round1.scores.reduce((function(e,a,r){var n=t.round1[r];return null!=n&&null!=a?e+(a-n):e}),0),e.round2Total=e.round2.scores.reduce((function(e,a,r){var n=t.round2[r];return null!=n&&null!=a?e+(a-n):e}),0),e.round3Total=e.round3.scores.reduce((function(e,a,r){var n=t.round3[r];return null!=n&&null!=a?e+(a-n):e}),0),e.round4Total=e.round4.scores.reduce((function(e,a,r){var n=t.round4[r];return null!=n&&null!=a?e+(a-n):e}),0),e}))},usersRaw:function(){return this.$store.state.users},users:function(){var e=this.usersRaw,t=this.scores;return e.map((function(e){return e.picks=e.golfers.map((function(e){return F.a.find(t,(function(t){return parseInt(t.id)==e}))})),e.bestPosition="",e.totalStrokes=e.picks.reduce((function(e,t){return null==t||""==t.total?e:e+parseInt(t.total)}),0),e.today=e.picks.reduce((function(e,t){return null==t?e:t.today.indexOf("+")>-1?e+parseInt(t.today.replace("+","")):t.today.indexOf("-")>-1?e-parseInt(t.today.replace("-","")):"E"==t.today||""==t.today?e:void 0}),0),e.topar=e.picks.reduce((function(e,t){return null==t?e:t.topar.indexOf("+")>-1?e+parseInt(t.topar.replace("+","")):t.topar.indexOf("-")>-1?e-parseInt(t.topar.replace("-","")):""==t.topar||"E"==t.topar?e:void 0}),0),e}))},leaders:function(){var e=this.scores;return e.filter((function(e){return"T1"==e.pos||"1"==e.pos}))},players:function(){var e=this.scores,t=this.users;return e.map((function(e){return e.pickedBy=t.filter((function(t){return F.a.includes(t.golfers,e.id)})).map((function(e){return e.name})),e}))},picks:function(){var e=this.users,t=[];return e.forEach((function(e){var a;null!=e.picks[0]&&(a=t).push.apply(a,Object(i["a"])(e.picks))})),console.log("all picks",t),t=F.a.uniqBy(t,"id"),console.log(t),t.length>0&&(t=t.map((function(t){return t.pickedBy=e.filter((function(e){return F.a.includes(e.golfers,t.id)})).map((function(e){return e.name})),t}))),F.a.orderBy(t,["index"],["asc"])},allVideos:function(){var e=JSON.parse(JSON.stringify(this.$store.state.videos));return e.map((function(e){return e.popout="https://www.masters.com/webview/en_US/live/popout/".concat(e.channelId),e}))},liveVideos:function(){return this.allVideos.filter((function(e){return e.live&&"ms"!=e.channelId&&"radio"!=e.channelId}))}},mounted:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return console.log(e),e.retrieveScores(),setInterval((function(){e.retrieveScores()}),6e4),t.next=5,e.$store.dispatch("getVideos");case 5:e.liveVideos.length>0&&(e.selectedVideos=e.liveVideos[0]),e.playing=!1,e.selectedVideo=0;case 8:case"end":return t.stop()}}),t)})))()},beforeDestroy:function(){this.playing=!1},methods:{retrieveScores:function(){this.$store.dispatch("getScores")},toggleMode:function(){this.isDarkMode=!this.isDarkMode,this.$vuetify.theme.dark=this.isDarkMode},showVideo:function(){var e=this;this.$nextTick((function(){var t=document.querySelector("#video");if(0!=e.selectedVideos.desktop.length){var a=e.selectedVideos.desktop[0].url;if(console.log(a),Y.a.isSupported()){var r=new Y.a;r.detachMedia(),r.loadSource(a),r.attachMedia(t)}else t.canPlayType("application/vnd.apple.mpegurl")&&(t.src=a)}}))}},watch:{selectedVideo:function(e,t){console.log("newVal",e,"oldVal",t),console.log(this.videoTabs[e]),e!==t&&this.showVideo(!0)},playing:function(e){e&&this.showVideo()},selectedVideos:function(e,t){F.a.isEqual(e,t)||this.showVideo(!0)}}},W=Z,Q=(a("5c0b"),a("7496")),X=a("40dc"),ee=a("ce7e"),te=a("adda"),ae=a("d903"),re=a("604c"),ne=a("f6c4"),oe=a("aac8"),se=Object(f["a"])(W,n,o,!1,null,null,null),ie=se.exports;h()(se,{VApp:Q["a"],VAppBar:X["a"],VBtn:y["a"],VCol:I["a"],VDivider:ee["a"],VIcon:_["a"],VImg:te["a"],VItem:ae["a"],VItemGroup:re["b"],VMain:ne["a"],VRow:$["a"],VSpacer:w["a"],VTab:x["a"],VTabItem:T["a"],VTabs:V["a"],VTabsItems:oe["a"],VTooltip:E["a"]});var le=a("2f62"),ce=a("616f"),ue=a("bc3a"),de=a.n(ue);r["a"].use(le["a"]);var pe=new le["a"].Store({state:{users:[{name:"Casey Golden",golfers:["30925","33448","28237","48081","29725","25364"]},{name:"Bryan Noller",golfers:["35450","48081","34046","33448","30925","39971"]},{name:"Zach Harris",golfers:["30925","47959","33448","34046","50525","46970"]},{name:"Nik Sekoulopoulos",golfers:["30925","46970","34046","35450","50525","29221"]},{name:"Dominic Hohman",golfers:["30925","46970","20396","21209","39977","33448"]},{name:"Zach Domer",golfers:["50525","30925","35891","28237","46970","34360"]},{name:"Austin Korte",golfers:["33448","34046","29725","30925","34360","48081"]},{name:"Josh Anderson",golfers:["30925","47959","46970","33448","34046","34360"]},{name:"Bryan Noller",golfers:["30925","33448","48081","46970","28237","50525"]},{name:"Will Gandert",golfers:["1810","47959","30925","30911","46970","34046"]},{name:"Paul Harris",golfers:["30925","33448","35450","50525","47959","46970"]},{name:"David Kostanich",golfers:["30925","47959","33448","34046","28237","25364"]},{name:"Jake Proakis",golfers:["46970","47959","50525","30925","25364","40026"]},{name:"Graham Johnston",golfers:["30925","46970","33448","21209","31323","47959"]},{name:"Jason Orzel",golfers:["34046","36689","20396","30925","29725","34360"]},{name:"Jason Orzel - 2",golfers:["30925","47959","46970","33448","28237","34046"]},{name:"Lee Unsinger",golfers:["30925","33448","46970","35450","48081","46717"]},{name:"Eric Spracklen",golfers:["48081","21209","33448","36689","47959","29221"]},{name:"Eric Spracklen - 2",golfers:["48081","32839","34046","47959","1810","24502"]},{name:"Jeremy Krystosik",golfers:["30925","46970","33448","28237","34046","25364"]},{name:"Jeremy Krystosik - 2",golfers:["47959","50525","29725","47483","20396","45526"]},{name:"Dylan Dancer",golfers:["32839","30925","39971","48081","33448","30925"]},{name:"Jordan Lane",golfers:["30925","34046","33448","36689","46046","25804"]},{name:"Alex Harris",golfers:["30925","47959","46970","33448","28237","34046"]}],scores:[],yardages:[],pars:[],videos:[]},mutations:{setScores:function(e,t){e.scores=t},setPars:function(e,t){e.pars=t},setYardages:function(e,t){e.yardages=t},setVideos:function(e,t){e.videos=t}},actions:{getScores:function(e){return Object(s["a"])(regeneratorRuntime.mark((function t(){var a,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,de.a.get("https://www.masters.com/en_US/scores/feeds/2021/scores.json");case 3:a=t.sent,r=a.data,e.commit("setScores",r.data.player),e.commit("setPars",r.data.pars),e.commit("setYardages",r.data.yardages),t.next=13;break;case 10:t.prev=10,t.t0=t["catch"](0),console.log("unable to retrieve scores");case 13:case"end":return t.stop()}}),t,null,[[0,10]])})))()},getVideos:function(e){return Object(s["a"])(regeneratorRuntime.mark((function t(){var a,r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,de.a.get("https://www.masters.com/en_US/cms/feeds/live/liveVideo.json");case 3:a=t.sent,r=a.data,n=r.channels,e.commit("setVideos",n),t.next=12;break;case 9:t.prev=9,t.t0=t["catch"](0),console.log("unable to retrieve videos");case 12:case"end":return t.stop()}}),t,null,[[0,9]])})))()}}}),ve=pe,fe=a("f309");r["a"].use(fe["a"]);var me=new fe["a"]({theme:{themes:{light:{primary:"#006746"}}}});r["a"].use(le["a"]),r["a"].directive("longclick",Object(ce["longClickDirective"])({delay:400,interval:50})),r["a"].config.productionTip=!1,new r["a"]({render:function(e){return e(ie)},vuetify:me,store:ve}).$mount("#app")},"5c0b":function(e,t,a){"use strict";a("9c0c")},"9c0c":function(e,t,a){}});
//# sourceMappingURL=app.ca6fb096.js.map