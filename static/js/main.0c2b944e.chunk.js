(this["webpackJsonpredux-counter-app"]=this["webpackJsonpredux-counter-app"]||[]).push([[0],[function(e,t,n){"use strict";(function(e,r){var o,i=n(1);o="undefined"!==typeof self?self:"undefined"!==typeof window?window:"undefined"!==typeof e?e:r;var c=Object(i.a)(o);t.a=c}).call(this,n(3),n(4)(e))},function(e,t,n){"use strict";function r(e){var t,n=e.Symbol;return"function"===typeof n?n.observable?t=n.observable:(t=n("observable"),n.observable=t):t="@@observable",t}n.d(t,"a",(function(){return r}))},function(e,t,n){e.exports=n(5)},function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"===typeof window&&(n=window)}e.exports=n},function(e,t){e.exports=function(e){if(!e.webpackPolyfill){var t=Object.create(e);t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),Object.defineProperty(t,"exports",{enumerable:!0}),t.webpackPolyfill=1}return t}},function(e,t,n){"use strict";n.r(t);var r=n(0),o=function(){return Math.random().toString(36).substring(7).split("").join(".")},i={INIT:"@@redux/INIT"+o(),REPLACE:"@@redux/REPLACE"+o(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+o()}};function c(e){if("object"!==typeof e||null===e)return!1;for(var t=e;null!==Object.getPrototypeOf(t);)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t}var u=function e(t,n,o){var u;if("function"===typeof n&&"function"===typeof o||"function"===typeof o&&"function"===typeof arguments[3])throw new Error("It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function.");if("function"===typeof n&&"undefined"===typeof o&&(o=n,n=void 0),"undefined"!==typeof o){if("function"!==typeof o)throw new Error("Expected the enhancer to be a function.");return o(e)(t,n)}if("function"!==typeof t)throw new Error("Expected the reducer to be a function.");var s=t,f=n,a=[],d=a,p=!1;function l(){d===a&&(d=a.slice())}function h(){if(p)throw new Error("You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");return f}function b(e){if("function"!==typeof e)throw new Error("Expected the listener to be a function.");if(p)throw new Error("You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api-reference/store#subscribelistener for more details.");var t=!0;return l(),d.push(e),function(){if(t){if(p)throw new Error("You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api-reference/store#subscribelistener for more details.");t=!1,l();var n=d.indexOf(e);d.splice(n,1),a=null}}}function y(e){if(!c(e))throw new Error("Actions must be plain objects. Use custom middleware for async actions.");if("undefined"===typeof e.type)throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');if(p)throw new Error("Reducers may not dispatch actions.");try{p=!0,f=s(f,e)}finally{p=!1}for(var t=a=d,n=0;n<t.length;n++){(0,t[n])()}return e}function w(e){if("function"!==typeof e)throw new Error("Expected the nextReducer to be a function.");s=e,y({type:i.REPLACE})}function E(){var e,t=b;return(e={subscribe:function(e){if("object"!==typeof e||null===e)throw new TypeError("Expected the observer to be an object.");function n(){e.next&&e.next(h())}return n(),{unsubscribe:t(n)}}})[r.a]=function(){return this},e}return y({type:i.INIT}),(u={dispatch:y,subscribe:b,getState:h,replaceReducer:w})[r.a]=E,u}((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INC":return e+1;case"DEC":return e-1;case"RESET":return 0;default:return e}}));document.querySelector("#dec").addEventListener("click",(function(){u.dispatch({type:"DEC"})})),document.querySelector("#inc").addEventListener("click",(function(){u.dispatch({type:"INC"})})),document.querySelector("#reset").addEventListener("click",(function(){u.dispatch({type:"RESET"})}));u.subscribe((function(){document.querySelector("#counter").textContent=u.getState()}))}],[[2,1]]]);
//# sourceMappingURL=main.0c2b944e.chunk.js.map