(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{204:function(t,e,r){var content=r(207);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(33).default)("29ebea46",content,!0,{sourceMap:!1})},206:function(t,e,r){"use strict";var n=r(204);r.n(n).a},207:function(t,e,r){(e=r(32)(!1)).push([t.i,".surah__header[data-v-40ddae6c]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.surah__title[data-v-40ddae6c]{font-size:2rem;width:100%;float:right;text-align:right}.surah__title--latin[data-v-40ddae6c]{width:100%;font-size:1.5rem}.surah__trans[data-v-40ddae6c]{font-style:italic;line-height:2}.surah__count[data-v-40ddae6c],.surah__trans[data-v-40ddae6c]{text-align:right}.surah svg[data-v-40ddae6c]{fill:var(--text-color)}",""]),t.exports=e},208:function(t,e,r){"use strict";r(21),r(22),r(13),r(56),r(114);var n=r(26),o=r(34),c=r(27),l=r(28),d=r(14),f=r(3),v=r(15),h=r(7);function _(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}var y=function(t){Object(c.a)(f,t);var e,r=(e=f,function(){var t,r=Object(d.a)(e);if(_()){var n=Object(d.a)(this).constructor;t=Reflect.construct(r,arguments,n)}else t=r.apply(this,arguments);return Object(l.a)(this,t)});function f(){return Object(n.a)(this,f),r.apply(this,arguments)}return Object(o.a)(f,[{key:"doAddToFavorite",value:function(t){this.addToFavorite(t),this.showNotification({title:"Pesan Sukses",message:"Surat berhasil ditambahkan ke daftar favorit."})}},{key:"doRemoveFromfavorite",value:function(t){this.removeFromFavorite(t),this.showNotification({title:"Pesan Sukses",message:"Surat berhasil dihapus dari daftar favorit."})}},{key:"findInFavorite",value:function(t){return!!(this.surahFavorite||[]).find((function(e){return e.index===t.index}))}},{key:"getSurahDetailUrl",value:function(t){return"/".concat(t)}},{key:"goToSurahDetail",value:function(t){var path=this.getSurahDetailUrl(t);this.$router.push(path)}}]),f}(v.Vue);Object(f.a)([Object(v.Prop)({default:function(){return[]}})],y.prototype,"surahArray",void 0),Object(f.a)([h.State],y.prototype,"surahFavorite",void 0),Object(f.a)([h.Action],y.prototype,"addToFavorite",void 0),Object(f.a)([h.Action],y.prototype,"removeFromFavorite",void 0),Object(f.a)([h.Action],y.prototype,"showNotification",void 0);var m=y=Object(f.a)([v.Component],y),x=(r(206),r(19)),component=Object(x.a)(m,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"surah__root"},t._l(t.surahArray,(function(e){return r("a",{key:e.index,staticClass:"surah block_content has-shadow",on:{click:function(r){return r.preventDefault(),t.goToSurahDetail(e.index)}}},[r("div",{staticClass:"surah__header"},[r("div",{staticClass:"surah__index tag_index"},[t._v("\n        "+t._s(e.index)+"\n      ")]),t._v(" "),r("div",{staticClass:"surah__header--right"},[t.findInFavorite(e)?t._e():r("svg",{attrs:{viewBox:"0 0 512 512",width:"30px",height:"30px"},on:{click:function(r){return r.preventDefault(),t.doAddToFavorite(e)}}},[r("path",{attrs:{d:"M463 192H315.9L271.2 58.6C269 52.1 262.9 48 256 48s-13 4.1-15.2 10.6L196.1 192H48c-8.8 0-16 7.2-16 16 0 .9.1 1.9.3 2.7.2 3.5 1.8 7.4 6.7 11.3l120.9 85.2-46.4 134.9c-2.3 6.5 0 13.8 5.5 18 2.9 2.1 5.6 3.9 9 3.9 3.3 0 7.2-1.7 10-3.6l118-84.1 118 84.1c2.8 2 6.7 3.6 10 3.6 3.4 0 6.1-1.7 8.9-3.9 5.6-4.2 7.8-11.4 5.5-18L352 307.2l119.9-86 2.9-2.5c2.6-2.8 5.2-6.6 5.2-10.7 0-8.8-8.2-16-17-16zm-127.2 92.5c-10 7.2-14.2 20.2-10.2 31.8l30.1 87.7c1.3 3.7-2.9 6.8-6.1 4.6l-77.4-55.2c-4.9-3.5-10.6-5.2-16.3-5.2-5.7 0-11.4 1.7-16.2 5.2l-77.4 55.1c-3.2 2.3-7.4-.9-6.1-4.6l30.1-87.7c4-11.8-.2-24.8-10.3-32l-81-57.1c-3.2-2.2-1.6-7.3 2.3-7.3H196c12 0 22.7-7.7 26.5-19.1l29.6-88.2c1.2-3.6 6.4-3.6 7.6 0l29.6 88.2c3.8 11.4 14.5 19.1 26.5 19.1h97.3c3.9 0 5.5 5 2.3 7.2l-79.6 57.5z"}})]),t._v(" "),t.findInFavorite(e)?r("svg",{attrs:{viewBox:"0 0 512 512",width:"30px",height:"30px",fill:"#f5aa1e"},on:{click:function(r){return r.preventDefault(),t.doRemoveFromfavorite(e)}}},[r("path",{attrs:{d:"M463 192H315.9L271.2 58.6C269 52.1 262.9 48 256 48s-13 4.1-15.2 10.6L196.1 192H48c-8.8 0-16 7.2-16 16 0 .9.1 1.9.3 2.7.2 3.5 1.8 7.4 6.7 11.3l120.9 85.2-46.4 134.9c-2.3 6.5 0 13.8 5.5 18 2.9 2.1 5.6 3.9 9 3.9 3.3 0 7.2-1.7 10-3.6l118-84.1 118 84.1c2.8 2 6.7 3.6 10 3.6 3.4 0 6.1-1.7 8.9-3.9 5.6-4.2 7.8-11.4 5.5-18L352 307.2l119.9-86 2.9-2.5c2.6-2.8 5.2-6.6 5.2-10.7 0-8.8-8.2-16-17-16z"}})]):t._e()])]),t._v(" "),r("div",{staticClass:"divider clearfix"},[r("div",{staticClass:"surah__title font-arabic",attrs:{dir:"rtl"}},[t._v("\n        "+t._s(e.arabic)+"\n      ")])]),t._v(" "),r("div",{staticClass:"divider clearfix"},[r("div",{staticClass:"surah__title surah__title--latin"},[t._v("\n        "+t._s(e.latin)+"\n      ")])]),t._v(" "),r("div",{staticClass:"divider clearfix"},[r("div",{staticClass:"surah__trans"},[t._v("\n        ("+t._s(e.translation)+": "+t._s(e.ayah_count)+" Ayat)\n      ")])])])})),0)}),[],!1,null,"40ddae6c",null);e.a=component.exports},214:function(t,e,r){var content=r(247);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(33).default)("90e8d648",content,!0,{sourceMap:!1})},246:function(t,e,r){"use strict";var n=r(214);r.n(n).a},247:function(t,e,r){(e=r(32)(!1)).push([t.i,".feed[data-v-2e426f0e]{display:block;width:90%;margin:1em auto;padding-bottom:1em;border-bottom:1px solid #ccc}.feed__title[data-v-2e426f0e]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;font-size:1.5rem}.feed__title svg[data-v-2e426f0e]{margin-right:.2em}.feed__empty[data-v-2e426f0e]{text-align:left;padding-top:1em;color:var(--text-color);font-style:italic}",""]),t.exports=e},404:function(t,e,r){"use strict";r.r(e);r(21),r(22),r(13),r(56);var n=r(26),o=r(34),c=r(27),l=r(28),d=r(14),f=r(3),v=r(15),h=r(7),_=r(83),y=r.n(_),m=r(208),x=r(35),j=r(44);function k(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}var O=function(t){Object(c.a)(f,t);var e,r=(e=f,function(){var t,r=Object(d.a)(e);if(k()){var n=Object(d.a)(this).constructor;t=Reflect.construct(r,arguments,n)}else t=r.apply(this,arguments);return Object(l.a)(this,t)});function f(){return Object(n.a)(this,f),r.apply(this,arguments)}return Object(o.a)(f,[{key:"head",value:function(){return this.metaHead}},{key:"mounted",value:function(){this.setHeaderTitle(j.a.FAVORITE),this.setPage("favorite")}},{key:"activated",value:function(){this.setHeaderTitle(j.a.FAVORITE),this.setPage("favorite")}},{key:"metaHead",get:function(){var title="Baca berbagai surat favorit dalam Al-Qur'an | Qur'an Web";return{title:title,meta:[{hid:"og:title",property:"og:title",content:title},{hid:"twitter:title",name:"twitter:title",content:title},{hid:"theme-color",name:"theme-color",content:this.settingActiveTheme.bgColor}]}}},{key:"isHaveFav",get:function(){return Object(x.a)(this.surahFavorite)}}]),f}(v.Vue);Object(f.a)([h.State],O.prototype,"settingActiveTheme",void 0),Object(f.a)([h.State],O.prototype,"surahFavorite",void 0),Object(f.a)([h.Mutation],O.prototype,"setHeaderTitle",void 0),Object(f.a)([h.Mutation],O.prototype,"setPage",void 0);var w=O=Object(f.a)([Object(v.Component)({components:{IosStarOutlineIcon:y.a,SurahCard:m.a}})],O),C=(r(246),r(19)),component=Object(C.a)(w,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container"},[e("div",{staticClass:"feed clearfix"},[e("div",{staticClass:"feed__title"},[e("IosStarOutlineIcon",{attrs:{w:"1em",h:"1em"}}),this._v("\n      Surat favorit:\n    ")],1),this._v(" "),e("div",{staticClass:"feed__item clearfix"},[this.isHaveFav?e("SurahCard",{attrs:{"surah-array":this.surahFavorite}}):e("div",{staticClass:"feed__empty"},[this._v("\n        Anda belum punya surat yang ditandai sebagai favorit.\n      ")])],1)])])}),[],!1,null,"2e426f0e",null);e.default=component.exports}}]);