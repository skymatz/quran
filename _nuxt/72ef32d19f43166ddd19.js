(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{183:function(t,n,a){var e=a(201);"string"==typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);(0,a(24).default)("3c0af377",e,!0,{})},200:function(t,n,a){"use strict";var e=a(183);a.n(e).a},201:function(t,n,a){(t.exports=a(23)(!1)).push([t.i,"\n.wrapper[data-v-2ae7be2e] {\n  width: 90%;\n  margin: 1em auto;\n}\n.arabic[data-v-2ae7be2e] {\n  font-size: 4rem;\n  width: 100%;\n  margin-top: 1em;\n  text-align: right;\n}\n.translation[data-v-2ae7be2e] {\n  font-size: 2rem;\n  width: 100%;\n  font-style: italic;\n  margin-top: 1.5em;\n  text-align: left;\n}\n",""])},234:function(t,n,a){"use strict";a.r(n);var e=a(8),i=a.n(e),s=(a(1),a(2),a(3),a(9)),r={name:"AyatKursiPage",head:function(){return{title:"Ayat Kursi | Qur'an Offline"}},data:function(){return{loading:!0}},computed:i()({},Object(s.d)(["ayatKursi"])),mounted:function(){this.onMountedPage()},methods:i()({},Object(s.c)(["setHeaderTitle"]),Object(s.b)(["fetchAyatKursi"]),{onMountedPage:function(){var t=this;this.fetchAyatKursi({success:function(n){t.setHeaderTitle("Ayat Kursi"),setTimeout(function(){t.loading=!1},1e3)}})}})},o=(a(200),a(12)),u=Object(o.a)(r,function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"container"},[n("div",{staticClass:"wrapper"},[n("div",{staticClass:"arabic"},[this._v("\n      "+this._s(this.ayatKursi.arabic)+"\n    ")]),this._v(" "),n("div",{staticClass:"translation"},[this._v("\n      "+this._s(this.ayatKursi.translation)+"\n    ")])])])},[],!1,null,"2ae7be2e",null);u.options.__file="ayat-kursi.vue";n.default=u.exports}}]);