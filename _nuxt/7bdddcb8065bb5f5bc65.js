(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{213:function(t,e,r){var content=r(235);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(39).default)("3cd82ab4",content,!0,{sourceMap:!1})},214:function(t,e,r){var content=r(237);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(39).default)("7368c424",content,!0,{sourceMap:!1})},234:function(t,e,r){"use strict";var n=r(213);r.n(n).a},235:function(t,e,r){(e=r(38)(!1)).push([t.i,".surah__header[data-v-7dfd9240]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.surah__title[data-v-7dfd9240]{font-size:2rem;width:100%;float:right;text-align:right}.surah__title--latin[data-v-7dfd9240]{width:100%;font-size:1.5rem}.surah__trans[data-v-7dfd9240]{font-style:italic;line-height:2}.surah__count[data-v-7dfd9240],.surah__trans[data-v-7dfd9240]{text-align:right}.surah svg[data-v-7dfd9240]{fill:var(--text-color)}",""]),t.exports=e},236:function(t,e,r){"use strict";var n=r(214);r.n(n).a},237:function(t,e,r){(e=r(38)(!1)).push([t.i,".feed[data-v-68664330]{display:block;width:90%;margin:1em auto;padding-bottom:1em;border-bottom:1px solid #ccc}.feed__title[data-v-68664330]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;font-size:1.5rem}.feed__title svg[data-v-68664330]{margin-right:.2em}.feed__empty[data-v-68664330]{text-align:left;padding-top:1em;color:#333;font-style:italic}",""]),t.exports=e},381:function(t,e,r){"use strict";r.r(e);r(21),r(22),r(14),r(66),r(40);var n=r(6),c=(r(105),r(29)),o=r(32),l=r(30),d=r(31),f=r(19),h=r(7),v=r(20),_=r(15),y=r(108),m=r.n(y),x={translation:"",arabic:"",latin:"",ayah_count:0,index:0,opening:"",closing:""};function k(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}var j=function(t){Object(l.a)(n,t);var e,r=(e=n,function(){var t,r=Object(f.a)(e);if(k()){var n=Object(f.a)(this).constructor;t=Reflect.construct(r,arguments,n)}else t=r.apply(this,arguments);return Object(d.a)(this,t)});function n(){return Object(c.a)(this,n),r.apply(this,arguments)}return Object(o.a)(n,[{key:"getSurahDetailUrl",value:function(t,e){return"/".concat(t,"#verse-").concat(e)}},{key:"goToSurahDetail",value:function(t,e){var path=this.getSurahDetailUrl(t,e);this.$router.push(path)}}]),n}(v.Vue);Object(h.a)([Object(v.Prop)({default:function(){return x}})],j.prototype,"surah",void 0);var O=j=Object(h.a)([v.Component],j),R=(r(234),r(18)),w=Object(R.a)(O,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"surah__root"},[r("a",{staticClass:"surah block_content has-shadow",on:{click:function(e){return e.preventDefault(),t.goToSurahDetail(t.surah.index,t.surah.verse)}}},[r("div",{staticClass:"surah__header"},[r("div",{staticClass:"surah__header--left"},[r("div",{staticClass:"surah__index tag_index",staticStyle:{width:"130px"}},[t._v("\n          Ayat ke "+t._s(t.surah.verse)+"\n        ")])]),t._v(" "),r("div",{staticClass:"surah__header--right"},[r("div",{staticClass:"divider clearfix"},[r("div",{staticClass:"surah__title"},[t._v("\n            "+t._s(t.surah.arabic)+"\n          ")])]),t._v(" "),r("div",{staticClass:"divider clearfix"},[r("div",{staticClass:"surah__title surah__title--latin"},[t._v("\n            "+t._s(t.surah.latin)+"\n          ")])])])])])])}),[],!1,null,"7dfd9240",null).exports,C=r(44),D=r(33);function S(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}var V=function(t){Object(l.a)(n,t);var e,r=(e=n,function(){var t,r=Object(f.a)(e);if(S()){var n=Object(f.a)(this).constructor;t=Reflect.construct(r,arguments,n)}else t=r.apply(this,arguments);return Object(d.a)(this,t)});function n(){return Object(c.a)(this,n),r.apply(this,arguments)}return Object(o.a)(n,[{key:"head",value:function(){return this.metaHead}},{key:"mounted",value:function(){this.setHeaderTitle(C.a.LAST_READ)}},{key:"metaHead",get:function(){var title="Ayat terakhir dibaca | Qur'an Offline";return{title:title,meta:[{hid:"og:title",property:"og:title",content:title},{hid:"twitter:title",name:"twitter:title",content:title},{hid:"theme-color",name:"theme-color",content:this.settingActiveTheme.bgColor}]}}},{key:"isHaveLastRead",get:function(){return Object(D.c)(this.lastReadVerse&&this.lastReadVerse.surah)}},{key:"lastReadVerseData",get:function(){var t=this;if(this.isHaveLastRead){var e=this.allSurahList.find((function(e){return e.index===t.lastReadVerse.surah}));return Object.assign({},e,{verse:this.lastReadVerse.verse})}return null}}]),n}(v.Vue);Object(h.a)([_.State],V.prototype,"settingActiveTheme",void 0),Object(h.a)([_.State],V.prototype,"lastReadVerse",void 0),Object(h.a)([_.Mutation],V.prototype,"setHeaderTitle",void 0);var A=V=Object(h.a)([Object(v.Component)({components:{IosBookmarkIcon:m.a,LastReadCard:w},asyncData:function(){return Object(n.a)(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r.e(17).then(r.t.bind(null,376,3));case 2:return e=t.sent,t.abrupt("return",{allSurahList:e.surah_info.map((function(t,e){return Object.assign({},t,{index:e+1})}))});case 4:case"end":return t.stop()}}),t)})))()}})],V),L=(r(236),Object(R.a)(A,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container"},[e("div",{staticClass:"feed clearfix"},[e("div",{staticClass:"feed__title"},[e("IosBookmarkIcon",{attrs:{w:"1em",h:"1em"}}),this._v("Ayat terakhir dibaca:\n    ")],1),this._v(" "),e("div",{staticClass:"feed__item clearfix"},[this.isHaveLastRead?e("div",[e("LastReadCard",{attrs:{surah:this.lastReadVerseData}})],1):e("div",{staticClass:"feed__empty"},[this._v("\n        Anda belum pernah menandai salah satu ayat sebagai terakhir dibaca.\n      ")])])])])}),[],!1,null,"68664330",null));e.default=L.exports}}]);