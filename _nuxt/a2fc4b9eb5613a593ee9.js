(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{221:function(t,e,n){var content=n(260);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(33).default)("de660172",content,!0,{sourceMap:!1})},259:function(t,e,n){"use strict";var r=n(221);n.n(r).a},260:function(t,e,n){(e=n(32)(!1)).push([t.i,".item[data-v-8107bdfe]{text-decoration:none;border-radius:.25em;padding:1em;font-size:1.3rem;width:100%;margin:1em 0 0;background:var(--bg-card-color);color:var(--text-color)}.item__title[data-v-8107bdfe]{font-size:1rem}.collapsible[data-v-8107bdfe]{margin-top:1em;color:var(--text-color)}.arabic[data-v-8107bdfe]{font-size:1.5rem;width:100%;text-align:right}.translation[data-v-8107bdfe]{margin-top:2em;font-size:.9rem;width:100%;font-style:italic;text-align:left}",""]),t.exports=e},414:function(t,e,n){"use strict";n.r(e);n(21),n(22),n(13),n(56),n(40);var r=n(7),o=n(26),c=n(34),l=n(27),d=n(28),f=n(14),h=n(3),v=n(15),m=n(8);function y(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}var w=function(t){Object(l.a)(r,t);var e,n=(e=r,function(){var t,n=Object(f.a)(e);if(y()){var r=Object(f.a)(this).constructor;t=Reflect.construct(n,arguments,r)}else t=n.apply(this,arguments);return Object(d.a)(this,t)});function r(){var t;return Object(o.a)(this,r),(t=n.apply(this,arguments)).expandedData={id:0},t}return Object(c.a)(r,[{key:"head",value:function(){return this.metaHead}},{key:"onClickItem",value:function(t){this.isExpanded(t.id)?this.expandedData={id:0}:this.expandedData=t}},{key:"isExpanded",value:function(t){return t===this.expandedData.id}},{key:"mounted",value:function(){this.setHeaderTitle("Tahlil"),this.setPage("tahlil")}},{key:"activated",value:function(){this.setHeaderTitle("Tahlil"),this.setPage("tahlil")}},{key:"metaHead",get:function(){var title="Daftar lengkap bacaan Tahlil beserta terjemahan | Qur'an Web";return{title:title,meta:[{hid:"description",name:"description",content:"Daftar lengkap bacaan Tahlil beserta terjemahan, baca langsung dari web browser Anda, tanpa iklan, tanpa analitik, gratis sepenuhnya"},{hid:"og:title",property:"og:title",content:title},{hid:"twitter:title",name:"twitter:title",content:title},{hid:"theme-color",name:"theme-color",content:this.settingActiveTheme.bgColor}]}}}]),r}(v.Vue);Object(h.a)([m.State],w.prototype,"settingActiveTheme",void 0),Object(h.a)([m.Mutation],w.prototype,"setHeaderTitle",void 0),Object(h.a)([m.Mutation],w.prototype,"setPage",void 0);var x=w=Object(h.a)([Object(v.Component)({asyncData:function(){return Object(r.a)(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.e(137).then(n.t.bind(null,402,3));case 2:return e=t.sent,t.abrupt("return",{tahlilData:e.data});case 4:case"end":return t.stop()}}),t)})))()}})],w),k=(n(259),n(19)),component=Object(k.a)(x,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container tahlil"},[n("div",{staticClass:"wrapper"},[n("div",{staticClass:"wrapper__item"},t._l(t.tahlilData,(function(e){return n("div",{key:e.id,staticClass:"item",on:{click:function(n){return t.onClickItem(e)}}},[n("div",{staticClass:"item__title"},[t._v("\n          "+t._s(e.title)+"\n        ")]),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.isExpanded(e.id),expression:"isExpanded(item.id)"}],staticClass:"collapsible"},[n("div",{staticClass:"arabic font-arabic"},[t._v("\n            "+t._s(e.arabic)+"\n          ")]),t._v(" "),n("div",{staticClass:"translation"},[t._v("\n            "+t._s(e.translation)+"\n          ")])])])})),0)])])}),[],!1,null,"8107bdfe",null);e.default=component.exports}}]);