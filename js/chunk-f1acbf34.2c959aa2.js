(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f1acbf34"],{"20d6":function(e,t,n){"use strict";var r=n("5ca1"),i=n("0a49")(6),a="findIndex",o=!0;a in[]&&Array(1)[a]((function(){o=!1})),r(r.P+r.F*o,"Array",{findIndex:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}}),n("9c6c")(a)},2464:function(e,t,n){var r=n("95df");"string"===typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);var i=n("499e").default;i("1d5e4436",r,!0,{sourceMap:!1,shadowMode:!1})},"417e":function(e,t,n){"use strict";var r=n("d282"),i=n("ad06"),a=n("8bbf"),o=n.n(a);function s(e){var t=[];function n(e){e.forEach((function(e){t.push(e),e.children&&n(e.children)}))}return n(e),t}function c(e,t){var n,r;void 0===t&&(t={});var i=t.indexKey||"index";return o.a.extend({inject:(n={},n[e]={default:null},n),computed:(r={parent:function(){return this.disableBindRelation?null:this[e]}},r[i]=function(){return this.bindRelation(),this.parent.children.indexOf(this)},r),mounted:function(){this.bindRelation()},beforeDestroy:function(){var e=this;this.parent&&(this.parent.children=this.parent.children.filter((function(t){return t!==e})))},methods:{bindRelation:function(){if(this.parent&&-1===this.parent.children.indexOf(this)){var e=[].concat(this.parent.children,[this]),t=s(this.parent.slots());e.sort((function(e,n){return t.indexOf(e.$vnode)-t.indexOf(n.$vnode)})),this.parent.children=e}}}})}var u=n("ea8e"),l=function(e){var t=e.parent,n=e.bem,r=e.role;return{mixins:[c(t)],props:{name:null,value:null,disabled:Boolean,iconSize:[Number,String],checkedColor:String,labelPosition:String,labelDisabled:Boolean,shape:{type:String,default:"round"},bindGroup:{type:Boolean,default:!0}},computed:{disableBindRelation:function(){return!this.bindGroup},isDisabled:function(){return this.parent&&this.parent.disabled||this.disabled},iconStyle:function(){var e=this.checkedColor||this.parent&&this.parent.checkedColor;if(e&&this.checked&&!this.isDisabled)return{borderColor:e,backgroundColor:e}},tabindex:function(){return this.isDisabled||"radio"===r&&!this.checked?-1:0}},methods:{onClick:function(e){var t=this.$refs.label,n=e.target,r=t&&(t===n||t.contains(n));this.isDisabled||r&&this.labelDisabled||this.toggle(),this.$emit("click",e)}},render:function(){var e=arguments[0],t=this.slots,a=this.checked,o=t("icon",{checked:a})||e(i["a"],{attrs:{name:"success"},style:this.iconStyle}),s=t()&&e("span",{ref:"label",class:n("label",[this.labelPosition,{disabled:this.isDisabled}])},[t()]),c=this.iconSize||this.parent&&this.parent.iconSize,l=[e("div",{class:n("icon",[this.shape,{disabled:this.isDisabled,checked:a}]),style:{fontSize:Object(u["a"])(c)}},[o])];return"left"===this.labelPosition?l.unshift(s):l.push(s),e("div",{attrs:{role:r,tabindex:this.tabindex,"aria-checked":String(this.checked)},class:n(),on:{click:this.onClick}},[l])}}},d=Object(r["a"])("checkbox"),h=d[0],f=d[1];t["a"]=h({mixins:[l({bem:f,role:"checkbox",parent:"vanCheckbox"})],computed:{checked:{get:function(){return this.parent?-1!==this.parent.value.indexOf(this.name):this.value},set:function(e){this.parent?this.setParentValue(e):this.$emit("input",e)}}},watch:{value:function(e){this.$emit("change",e)}},methods:{toggle:function(e){var t=this;void 0===e&&(e=!this.checked),clearTimeout(this.toggleTask),this.toggleTask=setTimeout((function(){t.checked=e}))},setParentValue:function(e){var t=this.parent,n=t.value.slice();if(e){if(t.max&&n.length>=t.max)return;-1===n.indexOf(this.name)&&(n.push(this.name),t.$emit("input",n))}else{var r=n.indexOf(this.name);-1!==r&&(n.splice(r,1),t.$emit("input",n))}}}})},7520:function(e,t){var n={default:this,call:function(e,t,n){var r="";"function"==typeof t&&(n=t,t={});var i={data:void 0===t?null:t};if("function"==typeof n){var a="dscb"+window.dscb++;window[a]=n,i["_dscbstub"]=a}return i=JSON.stringify(i),window._dsbridge?r=_dsbridge.call(e,i):(window._dswk||-1!=navigator.userAgent.indexOf("_dsbridge"))&&(r=prompt("_dsbridge="+e,i)),JSON.parse(r||"{}").data},register:function(e,t,r){var i=r?window._dsaf:window._dsf;window._dsInit||(window._dsInit=!0,setTimeout((function(){n.call("_dsb.dsinit")}),0)),"object"==typeof t?i._obs[e]=t:i[e]=t},registerAsyn:function(e,t){this.register(e,t,!0)},hasNativeMethod:function(e,t){return this.call("_dsb.hasNativeMethod",{name:e,type:t||"all"})},disableJavascriptDialogBlock:function(e){this.call("_dsb.disableJavascriptDialogBlock",{disable:!1!==e})}};!function(){if(!window._dsf){var e={_dsf:{_obs:{}},_dsaf:{_obs:{}},dscb:0,dsBridge:n,close:function(){n.call("_dsb.closePage")},_handleMessageFromNative:function(e){var t=JSON.parse(e.data),r={id:e.callbackId,complete:!0},i=this._dsf[e.method],a=this._dsaf[e.method],o=function(e,i){r.data=e.apply(i,t),n.call("_dsb.returnValue",r)},s=function(e,i){t.push((function(e,t){r.data=e,r.complete=!1!==t,n.call("_dsb.returnValue",r)})),e.apply(i,t)};if(i)o(i,this._dsf);else if(a)s(a,this._dsaf);else{var c=e.method.split(".");if(c.length<2)return;var u=c.pop(),l=c.join("."),d=this._dsf._obs,h=d[l]||{},f=h[u];if(f&&"function"==typeof f)return void o(f,h);if(d=this._dsaf._obs,h=d[l]||{},f=h[u],f&&"function"==typeof f)return void s(f,h)}}};for(var t in e)window[t]=e[t];n.register("_hasJavascriptMethod",(function(e,t){var n=e.split(".");if(n.length<2)return!(!_dsf[n]&&!_dsaf[n]);e=n.pop();var r=n.join("."),i=_dsf._obs[r]||_dsaf._obs[r];return i&&!!i[e]}))}}(),e.exports=n},"95df":function(e,t,n){t=e.exports=n("2350")(!1),t.push([e.i,".van-checkbox{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;overflow:hidden;-webkit-user-select:none;user-select:none}.van-checkbox__icon{-webkit-box-flex:0;-webkit-flex:none;flex:none;height:1em;font-size:5.333vw;line-height:1em}.van-checkbox__icon .van-icon{display:block;box-sizing:border-box;width:1.25em;height:1.25em;color:transparent;font-size:.8em;line-height:inherit;text-align:center;border:1px solid #e5e5e5;-webkit-transition-duration:.2s;transition-duration:.2s;-webkit-transition-property:color,border-color,background-color;transition-property:color,border-color,background-color}.van-checkbox__icon--round .van-icon{border-radius:100%}.van-checkbox__icon--checked .van-icon{color:#fff;background-color:#1989fa;border-color:#1989fa}.van-checkbox__icon--disabled .van-icon{background-color:#ebedf0;border-color:#c8c9cc}.van-checkbox__icon--disabled.van-checkbox__icon--checked .van-icon{color:#c8c9cc}.van-checkbox__label{margin-left:2.133vw;color:#323233;line-height:5.333vw}.van-checkbox__label--left{margin:0 2.133vw 0 0}.van-checkbox__label--disabled{color:#c8c9cc}",""])},9753:function(e,t,n){"use strict";n("3cd0"),n("5cc2"),n("2464")},ecb3:function(e,t,n){"use strict";n("96cf");var r=n("3b8d"),i=n("d225"),a=n("b0b4"),o=(n("7514"),n("20d6"),n("4c65")),s=function(){function e(){Object(i["a"])(this,e)}return Object(a["a"])(e,[{key:"create",value:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(t,n){var r,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(o["a"])();case 2:return r=e.sent,e.next=5,r.getFromIndex("notebooks","id",n);case 5:if(i=e.sent,!i){e.next=10;break}return i.notes.push(t),e.next=10,r.put("notebooks",i);case 10:case"end":return e.stop()}}),e)})));function t(t,n){return e.apply(this,arguments)}return t}()},{key:"edit",value:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(t,n){var r,i,a,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(o["a"])();case 2:return r=e.sent,i=t.id,e.next=6,r.getFromIndex("notebooks","id",n);case 6:if(a=e.sent,!a){e.next=12;break}return s=a.notes.findIndex((function(e){return e.id===i})),a.notes[s]=Object.assign({},a.notes[s],t),e.next=12,r.put("notebooks",a);case 12:case"end":return e.stop()}}),e)})));function t(t,n){return e.apply(this,arguments)}return t}()},{key:"get",value:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(t,n){var r,i,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(o["a"])();case 2:return r=e.sent,e.next=5,r.getFromIndex("notebooks","id",t);case 5:if(i=e.sent,!i){e.next=9;break}return a=i.notes.find((function(e){return e.id===n})),e.abrupt("return",a);case 9:case"end":return e.stop()}}),e)})));function t(t,n){return e.apply(this,arguments)}return t}()},{key:"delete",value:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(t,n){var r,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(o["a"])();case 2:return r=e.sent,e.next=5,r.getFromIndex("notebooks","id",t);case 5:if(i=e.sent,!i){e.next=10;break}return i.notes=i.notes.filter((function(e){return e.id!==n})),e.next=10,r.put("notebooks",i);case 10:case"end":return e.stop()}}),e)})));function t(t,n){return e.apply(this,arguments)}return t}()}]),e}(),c=(n("6762"),n("2fdb"),n("9ab4")),u=n("8bbf"),l=n.n(u),d=n("7520"),h=n.n(d),f={6e3:"任务已成功添加到手机日历中",6001:"系统版本太低，不支持设置日历",6002:"日历打开失败，请稍后重试",6003:"任务添加失败",6004:"日历同步参数错误",6005:"未知错误，可能是没有日历相关权限"},p=f,b=function(){function e(){Object(i["a"])(this,e)}return Object(a["a"])(e,[{key:"syncCalendar",value:function(e,t){var n=this,i=function(){var i=Object(r["a"])(regeneratorRuntime.mark((function r(i){var a;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(a=p[i],l.a.prototype.$toast(a),6e3===i){r.next=6;break}n.errorReport(a,"syncCalendar",e),r.next=8;break;case 6:return r.next=8,t();case 8:case"end":return r.stop()}}),r)})));return function(e){return i.apply(this,arguments)}}();h.a.call("syncCalendar",e,i)}},{key:"errorReport",value:function(e,t,n){if(window.$sentry){var r={error:new Error(e),type:"callNative",methodName:t,params:JSON.stringify(n)};window.$sentry.log(r)}}}]),e}();function v(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:["android","ios"];return function(t,n,r){return e.includes(window.$platform)||(r.value=function(){return l.a.prototype.$toast("当前处在 ".concat(window.$platform," 环境，无法调用接口哦"))}),r}}Object(c["b"])([v()],b.prototype,"syncCalendar",null);var w=n("83f4"),g=function(){function e(t,n){Object(i["a"])(this,e),this.noteService=t,this.nativeService=n}return Object(a["a"])(e,[{key:"saveNote",value:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(t,n,r){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(e.prev=0,!r){e.next=6;break}return e.next=4,this.noteService.edit(t,n);case 4:e.next=8;break;case 6:return e.next=8,this.noteService.create(t,n);case 8:e.next=14;break;case 10:throw e.prev=10,e.t0=e["catch"](0),window.$sentry.log({error:e.t0,fileName:"/github/workspace/src/use-cases/note-interactor.ts",lineNo:10,scope:"NoteInteractor -> value -> _saveNote"}),e.t0;case 14:case"end":return e.stop()}}),e,this,[[0,10]])})));function t(t,n,r){return e.apply(this,arguments)}return t}()},{key:"getNote",value:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(t,n){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.noteService.get(t,n);case 3:if(r=e.sent,!r){e.next=6;break}return e.abrupt("return",new w["a"](r));case 6:e.next=12;break;case 8:throw e.prev=8,e.t0=e["catch"](0),window.$sentry.log({error:e.t0,fileName:"/github/workspace/src/use-cases/note-interactor.ts",lineNo:23,scope:"NoteInteractor -> value -> _getNote"}),e.t0;case 12:case"end":return e.stop()}}),e,this,[[0,8]])})));function t(t,n){return e.apply(this,arguments)}return t}()},{key:"deleteNote",value:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(t,n){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.noteService.delete(t,n);case 3:e.next=9;break;case 5:throw e.prev=5,e.t0=e["catch"](0),window.$sentry.log({error:e.t0,fileName:"/github/workspace/src/use-cases/note-interactor.ts",lineNo:34,scope:"NoteInteractor -> value -> _deleteNote"}),e.t0;case 9:case"end":return e.stop()}}),e,this,[[0,5]])})));function t(t,n){return e.apply(this,arguments)}return t}()},{key:"toggleDoneStatus",value:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(t,n){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.getNote(t,n);case 3:if(r=e.sent,!r){e.next=8;break}return r.isDone=!r.isDone,e.next=8,this.saveNote(r,t,!0);case 8:e.next=14;break;case 10:throw e.prev=10,e.t0=e["catch"](0),window.$sentry.log({error:e.t0,fileName:"/github/workspace/src/use-cases/note-interactor.ts",lineNo:42,scope:"NoteInteractor -> value -> _toggleDoneStatus"}),e.t0;case 14:case"end":return e.stop()}}),e,this,[[0,10]])})));function t(t,n){return e.apply(this,arguments)}return t}()},{key:"changeSyncStatus",value:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(t,n,r){var i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.getNote(t,n);case 3:if(i=e.sent,!i){e.next=8;break}return i.isSync=r,e.next=8,this.saveNote(i,t,!0);case 8:e.next=14;break;case 10:throw e.prev=10,e.t0=e["catch"](0),window.$sentry.log({error:e.t0,fileName:"/github/workspace/src/use-cases/note-interactor.ts",lineNo:54,scope:"NoteInteractor -> value -> _changeSyncStatus"}),e.t0;case 14:case"end":return e.stop()}}),e,this,[[0,10]])})));function t(t,n,r){return e.apply(this,arguments)}return t}()},{key:"syncCalendar",value:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(t,n){var i,a=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return i=t.id,e.prev=1,e.next=4,this.nativeService.syncCalendar(t,Object(r["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,a.changeSyncStatus(n,i,!0);case 2:case"end":return e.stop()}}),e)}))));case 4:e.next=10;break;case 6:throw e.prev=6,e.t0=e["catch"](1),window.$sentry.log({error:e.t0,fileName:"/github/workspace/src/use-cases/note-interactor.ts",lineNo:67,scope:"NoteInteractor -> value -> _syncCalendar"}),e.t0;case 10:case"end":return e.stop()}}),e,this,[[1,6]])})));function t(t,n){return e.apply(this,arguments)}return t}()}]),e}(),k=new g(new s,new b);t["a"]=k}}]);
//# sourceMappingURL=chunk-f1acbf34.2c959aa2.js.map