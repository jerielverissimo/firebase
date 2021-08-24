/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/views/home.view.html":
/*!**********************************!*\
  !*** ./src/views/home.view.html ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Module
var code = "<div>\n  <p>Hello, World! This site uses Javascript!</p>\n</div>\n";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./src/navigation.config.js":
/*!**********************************!*\
  !*** ./src/navigation.config.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "navConfig": () => (/* binding */ navConfig)
/* harmony export */ });
/* harmony import */ var _views_home_view_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./views/home.view.html */ "./src/views/home.view.html");


const MAIN_CONTENT_SECTION = 'section-content';

const navConfig = [['Home', _views_home_view_html__WEBPACK_IMPORTED_MODULE_0__.default, MAIN_CONTENT_SECTION]];


/***/ }),

/***/ "./src/navigation.js":
/*!***************************!*\
  !*** ./src/navigation.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "makeNavView": () => (/* binding */ makeNavView),
/* harmony export */   "makeNavLink": () => (/* binding */ makeNavLink)
/* harmony export */ });
/* harmony import */ var _render_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render.js */ "./src/render.js");
/* harmony import */ var _navigation_config_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navigation.config.js */ "./src/navigation.config.js");



const handleNavClick = (template, id) => {
  return (event) => {
    event.preventDefault();
    (0,_render_js__WEBPACK_IMPORTED_MODULE_0__.renderHtmlTemplate)(template, id);
  };
};

function makeNavView() {
  const wrapper = document.createElement('div');

  _navigation_config_js__WEBPACK_IMPORTED_MODULE_1__.navConfig.forEach((navItem) => {
    const navLink = makeNavView(navItem);
    wrapper.appendChild(navLink);
  });

  return wrapper;
}

function makeNavLink(navItem) {
  const [label, template, id] = navItem;

  const link = document.createElement('a');

  link.textContent = label;
  link.addEventListener('click', handleNavClick(template, id));
  link.setAttribute('style', 'padding 2px; text-decoration: underline;');

  return link;
}


/***/ }),

/***/ "./src/render.js":
/*!***********************!*\
  !*** ./src/render.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderHtmlTemplate": () => (/* binding */ renderHtmlTemplate)
/* harmony export */ });
function renderHtmlTemplate(template, id) {
  const wrapper = document.getElementById(id);
  if (wrapper) {
    wrapper.innerHTML = template;
  }
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _navigation_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navigation.js */ "./src/navigation.js");
/* harmony import */ var _render_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./render.js */ "./src/render.js");
/* harmony import */ var _views_home_view_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./views/home.view.html */ "./src/views/home.view.html");




const program = {
  init: [0],
  update: (message, state) => {
    switch (message) {
      case 'increment':
        return [state + 1];
      case 'decrement':
        return [state - 1];
      case 'reset':
        return [0];
    }
  },
  view: (state, dispatch) => {
    return (0,_navigation_js__WEBPACK_IMPORTED_MODULE_0__.makeNavView)();
  },
};

function run() {
  const navSection = document.getElementById('section-nav');
  const navView = (0,_navigation_js__WEBPACK_IMPORTED_MODULE_0__.makeNavView)();
  navSection?.appendChild(navView);
  (0,_render_js__WEBPACK_IMPORTED_MODULE_1__.renderHtmlTemplate)(_views_home_view_html__WEBPACK_IMPORTED_MODULE_2__.default, 'section-content');
}

run();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxJQUFJOzs7Ozs7Ozs7Ozs7Ozs7QUNIK0I7O0FBRWxEOztBQUVPLDRCQUE0QiwwREFBWTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSkU7QUFDRTs7QUFFbkQ7QUFDQTtBQUNBO0FBQ0EsSUFBSSw4REFBa0I7QUFDdEI7QUFDQTs7QUFFTztBQUNQOztBQUVBLEVBQUUsb0VBQWlCO0FBQ25CO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7O0FBRU87QUFDUDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsMkNBQTJDLDJCQUEyQjs7QUFFdEU7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDL0JPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztVQ0xBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7OztBQ04yRDtBQUNWO0FBQ0M7O0FBRWxEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxXQUFXLDJEQUFXO0FBQ3RCLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0Esa0JBQWtCLDJEQUFXO0FBQzdCO0FBQ0EsRUFBRSw4REFBa0IsQ0FBQywwREFBWTtBQUNqQzs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL2ZpcmViYXNlLy4vc3JjL3ZpZXdzL2hvbWUudmlldy5odG1sIiwid2VicGFjazovL2ZpcmViYXNlLy4vc3JjL25hdmlnYXRpb24uY29uZmlnLmpzIiwid2VicGFjazovL2ZpcmViYXNlLy4vc3JjL25hdmlnYXRpb24uanMiLCJ3ZWJwYWNrOi8vZmlyZWJhc2UvLi9zcmMvcmVuZGVyLmpzIiwid2VicGFjazovL2ZpcmViYXNlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2ZpcmViYXNlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9maXJlYmFzZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2ZpcmViYXNlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZmlyZWJhc2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gTW9kdWxlXG52YXIgY29kZSA9IFwiPGRpdj5cXG4gIDxwPkhlbGxvLCBXb3JsZCEgVGhpcyBzaXRlIHVzZXMgSmF2YXNjcmlwdCE8L3A+XFxuPC9kaXY+XFxuXCI7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBjb2RlOyIsImltcG9ydCBob21lVGVtcGxhdGUgZnJvbSAnLi92aWV3cy9ob21lLnZpZXcuaHRtbCc7XG5cbmNvbnN0IE1BSU5fQ09OVEVOVF9TRUNUSU9OID0gJ3NlY3Rpb24tY29udGVudCc7XG5cbmV4cG9ydCBjb25zdCBuYXZDb25maWcgPSBbWydIb21lJywgaG9tZVRlbXBsYXRlLCBNQUlOX0NPTlRFTlRfU0VDVElPTl1dO1xuIiwiaW1wb3J0IHsgcmVuZGVySHRtbFRlbXBsYXRlIH0gZnJvbSAnLi9yZW5kZXIuanMnO1xuaW1wb3J0IHsgbmF2Q29uZmlnIH0gZnJvbSAnLi9uYXZpZ2F0aW9uLmNvbmZpZy5qcyc7XG5cbmNvbnN0IGhhbmRsZU5hdkNsaWNrID0gKHRlbXBsYXRlLCBpZCkgPT4ge1xuICByZXR1cm4gKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICByZW5kZXJIdG1sVGVtcGxhdGUodGVtcGxhdGUsIGlkKTtcbiAgfTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBtYWtlTmF2VmlldygpIHtcbiAgY29uc3Qgd3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gIG5hdkNvbmZpZy5mb3JFYWNoKChuYXZJdGVtKSA9PiB7XG4gICAgY29uc3QgbmF2TGluayA9IG1ha2VOYXZWaWV3KG5hdkl0ZW0pO1xuICAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQobmF2TGluayk7XG4gIH0pO1xuXG4gIHJldHVybiB3cmFwcGVyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWFrZU5hdkxpbmsobmF2SXRlbSkge1xuICBjb25zdCBbbGFiZWwsIHRlbXBsYXRlLCBpZF0gPSBuYXZJdGVtO1xuXG4gIGNvbnN0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG5cbiAgbGluay50ZXh0Q29udGVudCA9IGxhYmVsO1xuICBsaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlTmF2Q2xpY2sodGVtcGxhdGUsIGlkKSk7XG4gIGxpbmsuc2V0QXR0cmlidXRlKCdzdHlsZScsICdwYWRkaW5nIDJweDsgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7Jyk7XG5cbiAgcmV0dXJuIGxpbms7XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gcmVuZGVySHRtbFRlbXBsYXRlKHRlbXBsYXRlLCBpZCkge1xuICBjb25zdCB3cmFwcGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpO1xuICBpZiAod3JhcHBlcikge1xuICAgIHdyYXBwZXIuaW5uZXJIVE1MID0gdGVtcGxhdGU7XG4gIH1cbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgbWFrZU5hdlZpZXcsIG1ha2VOYXZMaW5rIH0gZnJvbSAnLi9uYXZpZ2F0aW9uLmpzJztcbmltcG9ydCB7IHJlbmRlckh0bWxUZW1wbGF0ZSB9IGZyb20gJy4vcmVuZGVyLmpzJztcbmltcG9ydCBob21lVGVtcGxhdGUgZnJvbSAnLi92aWV3cy9ob21lLnZpZXcuaHRtbCc7XG5cbmNvbnN0IHByb2dyYW0gPSB7XG4gIGluaXQ6IFswXSxcbiAgdXBkYXRlOiAobWVzc2FnZSwgc3RhdGUpID0+IHtcbiAgICBzd2l0Y2ggKG1lc3NhZ2UpIHtcbiAgICAgIGNhc2UgJ2luY3JlbWVudCc6XG4gICAgICAgIHJldHVybiBbc3RhdGUgKyAxXTtcbiAgICAgIGNhc2UgJ2RlY3JlbWVudCc6XG4gICAgICAgIHJldHVybiBbc3RhdGUgLSAxXTtcbiAgICAgIGNhc2UgJ3Jlc2V0JzpcbiAgICAgICAgcmV0dXJuIFswXTtcbiAgICB9XG4gIH0sXG4gIHZpZXc6IChzdGF0ZSwgZGlzcGF0Y2gpID0+IHtcbiAgICByZXR1cm4gbWFrZU5hdlZpZXcoKTtcbiAgfSxcbn07XG5cbmZ1bmN0aW9uIHJ1bigpIHtcbiAgY29uc3QgbmF2U2VjdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWN0aW9uLW5hdicpO1xuICBjb25zdCBuYXZWaWV3ID0gbWFrZU5hdlZpZXcoKTtcbiAgbmF2U2VjdGlvbj8uYXBwZW5kQ2hpbGQobmF2Vmlldyk7XG4gIHJlbmRlckh0bWxUZW1wbGF0ZShob21lVGVtcGxhdGUsICdzZWN0aW9uLWNvbnRlbnQnKTtcbn1cblxucnVuKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=