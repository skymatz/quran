(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{213:function(t,e,n){var content=n(233);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(33).default)("54a21436",content,!0,{sourceMap:!1})},232:function(t,e,n){"use strict";var r=n(213);n.n(r).a},233:function(t,e,n){(e=n(32)(!1)).push([t.i,".search[data-v-58ce3349]{display:block;text-align:center;width:90%;margin:1em auto}.search input[data-v-58ce3349]{-webkit-appearance:none;width:100%;padding:1rem;outline:none;background-color:#fff;font-size:1rem;border-radius:4px;color:var(--bg-color);border:1px solid var(--text-color)}.search__title[data-v-58ce3349]{font-size:1rem;margin-bottom:.5em}.search__result[data-v-58ce3349],.search__title[data-v-58ce3349]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;margin-top:1em}.search__result[data-v-58ce3349]{-ms-flex-wrap:wrap;flex-wrap:wrap}.search__result a[data-v-58ce3349]{background-color:var(--text-color);color:#000;margin:1em 1em 0 0}.item[data-v-58ce3349],.search__result a[data-v-58ce3349]{text-decoration:none;border-radius:.25em;padding:1.5em}.item[data-v-58ce3349]{text-align:center;width:100%;margin:1em 0 0;background:var(--bg-card-color);color:var(--text-color)}.item__title[data-v-58ce3349]{font-size:1rem}.collapsible[data-v-58ce3349]{margin-top:1em;padding:1em;border-radius:.25em;color:var(--text-color)}.arabic[data-v-58ce3349]{font-size:2rem;width:100%;text-align:right}.latin[data-v-58ce3349]{font-size:1.3rem;margin-top:1.5em}.latin[data-v-58ce3349],.translation[data-v-58ce3349]{width:100%;text-align:left}.translation[data-v-58ce3349]{margin-top:2em;font-size:.9rem;font-style:italic}@-webkit-keyframes bounce-data-v-58ce3349{0%,20%,53%,80%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1);-webkit-transform:translateZ(0);transform:translateZ(0)}40%,43%{-webkit-animation-timing-function:cubic-bezier(.755,.05,.855,.06);animation-timing-function:cubic-bezier(.755,.05,.855,.06);-webkit-transform:translate3d(0,-30px,0);transform:translate3d(0,-30px,0)}70%{-webkit-animation-timing-function:cubic-bezier(.755,.05,.855,.06);animation-timing-function:cubic-bezier(.755,.05,.855,.06);-webkit-transform:translate3d(0,-15px,0);transform:translate3d(0,-15px,0)}90%{-webkit-transform:translate3d(0,-4px,0);transform:translate3d(0,-4px,0)}}@keyframes bounce-data-v-58ce3349{0%,20%,53%,80%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1);-webkit-transform:translateZ(0);transform:translateZ(0)}40%,43%{-webkit-animation-timing-function:cubic-bezier(.755,.05,.855,.06);animation-timing-function:cubic-bezier(.755,.05,.855,.06);-webkit-transform:translate3d(0,-30px,0);transform:translate3d(0,-30px,0)}70%{-webkit-animation-timing-function:cubic-bezier(.755,.05,.855,.06);animation-timing-function:cubic-bezier(.755,.05,.855,.06);-webkit-transform:translate3d(0,-15px,0);transform:translate3d(0,-15px,0)}90%{-webkit-transform:translate3d(0,-4px,0);transform:translate3d(0,-4px,0)}}.bounce[data-v-58ce3349]{-webkit-animation-name:bounce-data-v-58ce3349;animation-name:bounce-data-v-58ce3349;-webkit-transform-origin:center bottom;transform-origin:center bottom;-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-fill-mode:both;animation-fill-mode:both}",""]),t.exports=e},389:function(t,e,n){"use strict";n.r(e);n(21),n(22),n(13),n(56),n(40);var r=n(6),o=(n(67),n(94),n(26)),c=n(34),l=n(27),d=n(28),m=n(14),f=n(3),v=n(15),h=n(7),x=n(35);function w(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}var k=function(t){Object(l.a)(r,t);var e,n=(e=r,function(){var t,n=Object(m.a)(e);if(w()){var r=Object(m.a)(this).constructor;t=Reflect.construct(n,arguments,r)}else t=n.apply(this,arguments);return Object(d.a)(this,t)});function r(){var t;return Object(o.a)(this,r),(t=n.apply(this,arguments)).searchText="",t.expandedData={title:""},t}return Object(c.a)(r,[{key:"head",value:function(){return this.metaHead}},{key:"onClickDoa",value:function(t){this.isExpanded(t.title)?this.expandedData={title:""}:this.expandedData=t}},{key:"isExpanded",value:function(title){return title===this.expandedData.title}},{key:"mounted",value:function(){this.setHeaderTitle("Do'a Harian"),this.setPage("daily-doa")}},{key:"activated",value:function(){this.setHeaderTitle("Do'a Harian"),this.setPage("daily-doa")}},{key:"metaHead",get:function(){var title="Daftar bacaan do'a sehari-hari beserta terjemahan | Qur'an Offline";return{title:title,meta:[{hid:"og:title",property:"og:title",content:title},{hid:"twitter:title",name:"twitter:title",content:title},{hid:"theme-color",name:"theme-color",content:this.settingActiveTheme.bgColor}]}}},{key:"filteredDailyDoa",get:function(){var t=this;return Object(x.b)(this.searchText)&&this.searchText.length>=3?this.dailyDoa.filter((function(e){return Object(x.e)(e.title).includes(Object(x.e)(t.searchText))})):this.dailyDoa||[]}}]),r}(v.Vue);Object(f.a)([h.State],k.prototype,"settingActiveTheme",void 0),Object(f.a)([h.Mutation],k.prototype,"setHeaderTitle",void 0),Object(f.a)([h.Mutation],k.prototype,"setPage",void 0);var y=k=Object(f.a)([Object(v.Component)({asyncData:function(){return Object(r.a)(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.e(4).then(n.t.bind(null,381,3));case 2:return e=t.sent,t.abrupt("return",{dailyDoa:e.data});case 4:case"end":return t.stop()}}),t)})))()}})],k),_=(n(232),n(19)),component=Object(_.a)(y,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container daily-doa"},[n("div",{staticClass:"search clearfix"},[n("label",{staticClass:"search__title",attrs:{for:"search-daily-doa"}},[t._v("\n      Pencarian cepat\n    ")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.searchText,expression:"searchText"}],attrs:{id:"search-daily-doa",type:"search",name:"search",placeholder:"Cari doa harian"},domProps:{value:t.searchText},on:{input:function(e){e.target.composing||(t.searchText=e.target.value)}}})]),t._v(" "),n("div",{staticClass:"wrapper"},[n("div",{staticClass:"wrapper__item"},t._l(t.filteredDailyDoa,(function(e){return n("div",{key:e.title,staticClass:"item",on:{click:function(n){return t.onClickDoa(e)}}},[n("div",{staticClass:"item__title"},[t._v("\n          "+t._s(e.title)+"\n        ")]),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.isExpanded(e.title),expression:"isExpanded(item.title)"}],staticClass:"collapsible bounce"},[n("div",{staticClass:"arabic font-arabic"},[t._v("\n            "+t._s(e.arabic)+"\n          ")]),t._v(" "),n("div",{staticClass:"latin"},[t._v("\n            "+t._s(e.latin)+"\n          ")]),t._v(" "),n("div",{staticClass:"translation"},[t._v("\n            "+t._s(e.translation)+"\n          ")])])])})),0)])])}),[],!1,null,"58ce3349",null);e.default=component.exports}}]);