(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-49bc004e"],{"2cd8":function(t,e,s){},cc54:function(t,e,s){"use strict";var n=s("2cd8"),r=s.n(n);r.a},dca17:function(t,e,s){"use strict";s.r(e);var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-tour",{attrs:{name:"vuexyTour",steps:t.steps},scopedSlots:t._u([{key:"default",fn:function(e){return[s("transition",{attrs:{name:"fade"}},t._l(e.steps,(function(n,r){return e.currentStep===r?s("v-step",{key:r,attrs:{step:n,"previous-step":e.previousStep,"next-step":e.nextStep,stop:e.stop,"is-first":e.isFirst,"is-last":e.isLast,labels:e.labels}},[s("div",{staticClass:"flex justify-center",attrs:{slot:"actions"},slot:"actions"},[e.currentStep!=e.steps.length-1?s("vs-button",{staticClass:"mr-3",attrs:{size:"small","icon-pack":"feather",icon:"icon-x","icon-after":"",color:"#fff",type:"border"},on:{click:e.stop}},[t._v("\n                        Skip\n                    ")]):t._e(),e.currentStep?s("vs-button",{staticClass:"mr-3",attrs:{size:"small","icon-pack":"feather",icon:"icon-chevrons-left",color:"#fff",type:"border"},on:{click:e.previousStep}},[t._v("\n                        Previous\n                    ")]):t._e(),e.currentStep!=e.steps.length-1?s("vs-button",{staticClass:"btn-tour-next",attrs:{size:"small","icon-pack":"feather",icon:"icon-chevrons-right","icon-after":"",color:"#fff",type:"border"},on:{click:e.nextStep}},[t._v("\n                        Next\n                    ")]):t._e(),e.currentStep==e.steps.length-1?s("vs-button",{staticClass:"btn-tour-finish",attrs:{size:"small","icon-pack":"feather",icon:"icon-check-circle","icon-after":"",color:"#fff",type:"border"},on:{click:e.stop}},[t._v("\n                        Finish\n                    ")]):t._e()],1)]):t._e()})),1)]}}])})},r=[],o={name:"vx-tour",props:{steps:{required:!0,type:Array}},watch:{"$route.path":function(){this.$tours["vuexyTour"].stop()}},mounted:function(){this.$tours["vuexyTour"].start()}},c=o,i=(s("cc54"),s("2877")),a=Object(i["a"])(c,n,r,!1,null,null,null);e["default"]=a.exports}}]);
//# sourceMappingURL=chunk-49bc004e.9312359f.js.map