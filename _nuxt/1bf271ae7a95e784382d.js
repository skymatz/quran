(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{221:function(t,e,r){var content=r(266);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(33).default)("a9e40ff8",content,!0,{sourceMap:!1})},223:function(t,e,r){var content=r(270);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(33).default)("0b92118d",content,!0,{sourceMap:!1})},224:function(t,e,r){var content=r(272);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(33).default)("160d1686",content,!0,{sourceMap:!1})},265:function(t,e,r){"use strict";var n=r(221);r.n(n).a},266:function(t,e,r){(e=r(32)(!1)).push([t.i,".verse__header[data-v-13f11734]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.verse__arabic[data-v-13f11734]{font-size:2rem;width:100%;float:right;text-align:right;margin-top:.25em}",""]),t.exports=e},269:function(t,e,r){"use strict";var n=r(223);r.n(n).a},270:function(t,e,r){(e=r(32)(!1)).push([t.i,'.surah_nav[data-v-7d5d59fc]{position:fixed;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;bottom:0;left:auto;z-index:10;margin:0;height:60px;text-align:center;width:100%;max-width:500px;background:var(--bg-card-color)}.surah_nav[data-v-7d5d59fc],.surah_nav_item[data-v-7d5d59fc]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;color:var(--text-color)}.surah_nav_title[data-v-7d5d59fc]{font-size:2rem}.surah_nav_next[data-v-7d5d59fc],.surah_nav_prev[data-v-7d5d59fc]{text-decoration:none}.surah_nav_next span[data-v-7d5d59fc],.surah_nav_prev span[data-v-7d5d59fc]{padding:0 .25em;font-size:2rem}.select[data-v-7d5d59fc]{-webkit-appearance:none;padding:.5em 1.5rem .5em .5rem;outline:none;border:none;background-color:#fff;font-size:1rem;border-radius:4px;margin-left:.5em;background-image:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAGCAYAAAARx7TFAAAAAXNSR0IArs4c6QAAAJ1JREFUCB1jzMnJCWdkZBSdPHnyFAYk0NDQwPbmzZuVTExMk5iA4p7//v2bDFScC1OzatUqZqCC5f////cHyikwiYiIJAFNWgIUmARSCKQZDx48OAdIBwJNSZ8yZcp8RpBuoNFMQJ0LgRIxQO4hILYFKsgEOmEmSJ4ZRBw4cOC/l5fXxu/fvysDub5Ak3OAJswAyWEAkIm5ublu6BIADTRHW7YWzxEAAAAASUVORK5CYII=");background-position:right 7px center;background-repeat:no-repeat;color:var(--bg-color);border:1px solid var(--text-color)}@media screen and (max-width:480px){.text-nav[data-v-7d5d59fc]{display:none}}',""]),t.exports=e},271:function(t,e,r){"use strict";var n=r(224);r.n(n).a},272:function(t,e,r){(e=r(32)(!1)).push([t.i,".detail__content[data-v-46af0487]{width:90%;margin:0 auto;padding-bottom:2em}",""]),t.exports=e},395:function(t,e,r){"use strict";r.r(e);r(21),r(22),r(13),r(56),r(40);var n=r(6),o=(r(114),r(205),r(26)),c=r(34),d=r(27),l=r(28),h=r(14),f=r(3),v=r(15),m=r(7),y=r(227),_=r.n(y),j=r(228),x=r.n(j),O=r(229),A=r.n(O),S=r(230),k=r(44),I=r(234);function w(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}var C=function(t){Object(d.a)(n,t);var e,r=(e=n,function(){var t,r=Object(h.a)(e);if(w()){var n=Object(h.a)(this).constructor;t=Reflect.construct(r,arguments,n)}else t=r.apply(this,arguments);return Object(l.a)(this,t)});function n(){var t;return Object(o.a)(this,n),(t=r.apply(this,arguments)).AppConstant=k.a,t.audios=S.a.availableAudio,t.clickedAudioIcon=1e6,t}return Object(c.a)(n,[{key:"onClickAudioIcon",value:function(t){var e=this;this.timeout&&clearTimeout(this.timeout),this.clickedAudioIcon=t,this.timeout=setTimeout((function(){e.clickedAudioIcon=1e6}),5e3)}},{key:"onClickAudioItem",value:function(t,e){if("kemenag"===t.id){var r=S.a.getAudioFromKemenag(this.surahId,e);window.location.href=r}}},{key:"getTranslation",value:function(t){return this.translations.id.text[t]}},{key:"getTafsir",value:function(t){return this.tafsir.id.kemenag.text[t]}},{key:"doSetLastReadVerse",value:function(data){this.setLastReadVerse(data),this.showNotification({title:"Pesan Sukses",message:"Ayat telah ditambahkan ke terakhir dibaca."})}},{key:"shareVerse",value:function(t,e){var data={title:"QS ".concat(this.surahId,":").concat(e),text:"\n".concat(t,"\n\nTerjemahan: ").concat(this.getTranslation(e)," (QS ").concat(this.surahId,":").concat(e,")\n\n\n"),url:"https://quran-offline.netlify.app/".concat(this.surahId,"#verse-").concat(e)};this.shareViaWebshare(data)}}]),n}(v.Vue);Object(f.a)([Object(v.Prop)({type:[Object,Array],default:function(){return{}}})],C.prototype,"verseArray",void 0),Object(f.a)([Object(v.Prop)({type:Object,default:function(){return{}}})],C.prototype,"translations",void 0),Object(f.a)([Object(v.Prop)({type:Object,default:function(){return{}}})],C.prototype,"tafsir",void 0),Object(f.a)([Object(v.Prop)({type:Number,default:1})],C.prototype,"surahId",void 0),Object(f.a)([m.State],C.prototype,"surahFavorite",void 0),Object(f.a)([m.State],C.prototype,"isSupportWebShare",void 0),Object(f.a)([m.State],C.prototype,"settingShowTranslation",void 0),Object(f.a)([m.State],C.prototype,"settingShowTafsir",void 0),Object(f.a)([m.Action],C.prototype,"setLastReadVerse",void 0),Object(f.a)([m.Action],C.prototype,"showNotification",void 0),Object(f.a)([m.Action],C.prototype,"shareViaWebshare",void 0);var R=C=Object(f.a)([Object(v.Component)({components:{MdShareIcon:_.a,MdBookmarkIcon:x.a,MdVolumeHighIcon:A.a,SingleVerse:I.a}})],C),T=(r(265),r(19)),V=Object(T.a)(R,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"verse__root"},[1!==t.surahId&&9!==t.surahId?r("div",{staticClass:"verse block_content has-shadow"},[r("div",{staticClass:"divider clearfix"},[r("div",{staticClass:"verse__arabic font-arabic",staticStyle:{"text-align":"center"},attrs:{dir:"rtl"}},[t._v("\n        "+t._s(t.AppConstant.BISMILLAH)+"\n      ")])])]):t._e(),t._v(" "),t._l(t.verseArray,(function(e,n){return r("div",{key:n},[r("SingleVerse",{attrs:{verse:e,"verse-index":n,"surah-id":t.surahId,translations:t.translations,tafsir:t.tafsir}})],1)}))],2)}),[],!1,null,"13f11734",null).exports,P=r(235),B=(r(58),r(57),r(115)),N=r.n(B),H=r(231),M=r.n(H);function L(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}var D=function(t){Object(d.a)(n,t);var e,r=(e=n,function(){var t,r=Object(h.a)(e);if(L()){var n=Object(h.a)(this).constructor;t=Reflect.construct(r,arguments,n)}else t=r.apply(this,arguments);return Object(l.a)(this,t)});function n(){var t;return Object(o.a)(this,n),(t=r.apply(this,arguments)).selectedVerse=1,t}return Object(c.a)(n,[{key:"onChildChanged",value:function(t){window.location.href="#verse-".concat(t)}},{key:"isHavePrev",get:function(){return this.surahId>1}},{key:"isHaveNext",get:function(){return this.surahId<114}},{key:"arrayAyah",get:function(){return Array.from({length:this.verseCount},(function(t,e){return e+1}))}}]),n}(v.Vue);Object(f.a)([Object(v.Prop)({type:Number,default:1})],D.prototype,"surahId",void 0),Object(f.a)([Object(v.Prop)({type:Object,default:function(){return{arabic:""}}})],D.prototype,"nextSurah",void 0),Object(f.a)([Object(v.Prop)({type:Object,default:function(){return{arabic:""}}})],D.prototype,"prevSurah",void 0),Object(f.a)([Object(v.Prop)({type:Number,default:0})],D.prototype,"verseCount",void 0),Object(f.a)([Object(v.Watch)("selectedVerse")],D.prototype,"onChildChanged",null);var Q=D=Object(f.a)([Object(v.Component)({components:{MdArrowBackIcon:N.a,MdArrowForwardIcon:M.a}})],D),F=(r(269),Object(T.a)(Q,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"surah_nav"},[r("nuxt-link",{staticClass:"surah_nav_item surah_nav_prev",attrs:{to:"/"+(t.surahId-1)}},[t.isHavePrev?r("MdArrowBackIcon",{attrs:{w:"30px",h:"30px"}}):t._e(),t._v(" "),t.prevSurah?r("span",{staticClass:"text-nav"},[t._v("\n      "+t._s(t.prevSurah.arabic)+"\n    ")]):t._e()],1),t._v(" "),r("div",{staticClass:"surah_nav_item surah_nav_center"},[r("select",{directives:[{name:"model",rawName:"v-model",value:t.selectedVerse,expression:"selectedVerse"}],staticClass:"select",attrs:{name:"verse-select"},on:{change:function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.selectedVerse=e.target.multiple?r:r[0]}}},t._l(t.arrayAyah,(function(e){return r("option",{key:e,domProps:{value:e}},[t._v("\n        "+t._s(e)+"\n      ")])})),0)]),t._v(" "),r("nuxt-link",{staticClass:"surah_nav_item surah_nav_next",attrs:{to:"/"+(t.surahId+1)}},[t.nextSurah?r("span",{staticClass:"text-nav"},[t._v("\n      "+t._s(t.nextSurah.arabic)+"\n    ")]):t._e(),t._v(" "),t.isHaveNext?r("MdArrowForwardIcon",{attrs:{w:"30px",h:"30px"}}):t._e()],1)],1)}),[],!1,null,"7d5d59fc",null).exports),W=r(35),E=r(232);function J(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}var z=function(t){Object(d.a)(n,t);var e,r=(e=n,function(){var t,r=Object(h.a)(e);if(J()){var n=Object(h.a)(this).constructor;t=Reflect.construct(r,arguments,n)}else t=r.apply(this,arguments);return Object(l.a)(this,t)});function n(){var t;return Object(o.a)(this,n),(t=r.apply(this,arguments)).loading=!0,t}return Object(c.a)(n,[{key:"head",value:function(){return this.metaHead}},{key:"mounted",value:function(){this.setHeaderTitle("".concat(this.surahId,": ").concat(this.currentSurah.name_latin)),this.setPage("surah-detail")}},{key:"activated",value:function(){this.setHeaderTitle("".concat(this.surahId,": ").concat(this.currentSurah.name_latin)),this.setPage("surah-detail")}},{key:"metaHead",get:function(){var title="Baca Qur'an Surat ".concat(this.currentSurah.name_latin," | Qur'an Web");return{title:title,meta:[{hid:"description",name:"description",content:"Baca Qur'an, Terjemahan Bahasa Indonesia dan Tafsir Surat ".concat(this.currentSurah.name_latin," Berdasarkan Data dari Kemenag")},{hid:"og:title",property:"og:title",content:title},{hid:"twitter:title",name:"twitter:title",content:title},{hid:"theme-color",name:"theme-color",content:this.settingActiveTheme.bgColor}]}}},{key:"surahId",get:function(){var t=0;return Object(W.c)(this.$route.params&&this.$route.params.surahid)&&(t=Number(this.$route.params.surahid)),t}},{key:"isValidSurah",get:function(){return this.surahId>0&&this.surahId<=114}},{key:"prevSurah",get:function(){var t=this;return Object(W.a)(this.allSurahList)&&this.surahId>1?this.allSurahList.find((function(e){return e.index===t.surahId-1})):null}},{key:"nextSurah",get:function(){var t=this;return Object(W.a)(this.allSurahList)&&this.surahId<114?this.allSurahList.find((function(e){return e.index===t.surahId+1})):null}}]),n}(v.Vue);Object(f.a)([m.State],z.prototype,"settingActiveTheme",void 0),Object(f.a)([m.Mutation],z.prototype,"setHeaderTitle",void 0),Object(f.a)([m.Mutation],z.prototype,"setPage",void 0);var K=z=Object(f.a)([Object(v.Component)({components:{VerseCard:V,SurahHeader:P.a,SurahNavigation:F},asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var n,o,c,title,d;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.params,e.next=3,r(233)("./".concat(n.surahid,".json"));case 3:return o=e.sent,e.next=6,r.e(0).then(r.t.bind(null,391,3));case 6:return c=e.sent,title="Baca Qur'an Surat ".concat(o[n.surahid].name_latin," | Qur'an Web"),d="Baca Qur'an, Terjemahan Bahasa Indonesia dan Tafsir Surat ".concat(o[n.surahid].name_latin," Berdasarkan Data dari Kemenag"),e.abrupt("return",{allSurahList:c.surah_info.map((function(t,e){return Object.assign({},t,{index:e+1})})),currentSurah:o[n.surahid],jsonldBreadcrumb:Object(E.b)({categoryTitle:"Daftar Surat",categorySlug:"all-surah",title:"".concat(o[n.surahid].name_latin),slug:"".concat(n.surahid)}),jsonLdArticle:Object(E.a)({desc:"".concat(d),cover:"meta-image.png",title:"".concat(title),slug:"".concat(n.surahid)})});case 10:case"end":return e.stop()}}),e)})))()}})],z),Z=(r(271),Object(T.a)(K,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"container"},[r("div",{staticClass:"detail"},[r("SurahHeader",{attrs:{"surah-number":Number(t.currentSurah.number),"surah-name":t.currentSurah.name,"surah-latin":t.currentSurah.name_latin,"surah-translation":t.currentSurah.translations.id.name}}),t._v(" "),r("div",{staticClass:"detail__content"},[r("VerseCard",{attrs:{"verse-array":t.currentSurah.text,"surah-id":t.surahId,translations:t.currentSurah.translations,tafsir:t.currentSurah.tafsir}})],1),t._v(" "),r("SurahNavigation",{attrs:{"surah-id":t.surahId,"next-surah":t.nextSurah,"prev-surah":t.prevSurah,"verse-count":Number(t.currentSurah.number_of_ayah)}})],1),t._v(" "),r("script",{attrs:{type:"application/ld+json"},domProps:{innerHTML:t._s(t.jsonldBreadcrumb)}}),t._v(" "),r("script",{attrs:{type:"application/ld+json"},domProps:{innerHTML:t._s(t.jsonLdArticle)}})])}),[],!1,null,"46af0487",null));e.default=Z.exports}}]);