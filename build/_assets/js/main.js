/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/Index.js":
/*!*************************!*\
  !*** ./src/js/Index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_polyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/polyfill */ \"./src/js/modules/polyfill.js\");\n/* harmony import */ var _modules_parallax__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/parallax */ \"./src/js/modules/parallax.js\");\n/* harmony import */ var _modules_accordion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/accordion */ \"./src/js/modules/accordion.js\");\n/* harmony import */ var _modules_contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/contact */ \"./src/js/modules/contact.js\");\n\n\n\n\ndocument.addEventListener('DOMContentLoaded', function () {\n  (0,_modules_polyfill__WEBPACK_IMPORTED_MODULE_0__.polyfill)();\n  (0,_modules_parallax__WEBPACK_IMPORTED_MODULE_1__.parallax)();\n  (0,_modules_contact__WEBPACK_IMPORTED_MODULE_3__.contact)();\n  (0,_modules_accordion__WEBPACK_IMPORTED_MODULE_2__.accordion)();\n});\n\n//# sourceURL=webpack://portfolio/./src/js/Index.js?");

/***/ }),

/***/ "./src/js/modules/accordion.js":
/*!*************************************!*\
  !*** ./src/js/modules/accordion.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"accordion\": () => (/* binding */ accordion)\n/* harmony export */ });\nvar accordion = function accordion() {\n  var button = document.querySelectorAll('[data-accord]');\n\n  if (button.length) {\n    button.forEach(function (item) {\n      item.addEventListener('click', function (e) {\n        e.preventDefault();\n        var target = e.target.getAttribute('data-accord');\n        document.getElementById(target).classList.toggle('u-isToggle');\n      });\n    });\n  }\n};\n\n//# sourceURL=webpack://portfolio/./src/js/modules/accordion.js?");

/***/ }),

/***/ "./src/js/modules/contact.js":
/*!***********************************!*\
  !*** ./src/js/modules/contact.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"contact\": () => (/* binding */ contact)\n/* harmony export */ });\nvar contact = function contact() {\n  var form = document.getElementById('form'); // let email, type, phone, name, message;\n\n  var pristine = new Pristine(form, {\n    classTo: 'conSec__tableTd',\n    errorTextParent: 'conSec__tableTd',\n    errorTextClass: 'conSec__errorText'\n  });\n  form.addEventListener('submit', function (e) {\n    e.preventDefault(); // email = form.elements['input-email'].value;\n    // name = form.elements['input-name'].value;\n    // phone = form.elements['input-phone'].value;\n    // type = form.elements['input-type'].value;\n    // message = form.elements['input-message'].value;\n\n    var valid = pristine.validate(); // returns true or false\n    // if(valid) {\n    //     form.submit()\n    //     console.log('pass');\n    // }\n    // else {\n    //     console.log('fail');\n    // }\n  });\n};\n\n//# sourceURL=webpack://portfolio/./src/js/modules/contact.js?");

/***/ }),

/***/ "./src/js/modules/parallax.js":
/*!************************************!*\
  !*** ./src/js/modules/parallax.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"parallax\": () => (/* binding */ parallax)\n/* harmony export */ });\nvar parallax = function parallax() {\n  window.addEventListener(\"scroll\", function () {\n    var distance = window.scrollY;\n    document.querySelector(\".js-panoObj\").style.transform = \"translateY(\".concat(distance * 0.1, \"px)\");\n    document.querySelector(\".js-panoCon\").style.transform = \"translateY(\".concat(distance * 0.3, \"px)\");\n  });\n};\n\n//# sourceURL=webpack://portfolio/./src/js/modules/parallax.js?");

/***/ }),

/***/ "./src/js/modules/polyfill.js":
/*!************************************!*\
  !*** ./src/js/modules/polyfill.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"polyfill\": () => (/* binding */ polyfill)\n/* harmony export */ });\nvar polyfill = function polyfill() {\n  if (window.NodeList && !NodeList.prototype.forEach) {\n    NodeList.prototype.forEach = Array.prototype.forEach;\n  }\n};\n\n//# sourceURL=webpack://portfolio/./src/js/modules/polyfill.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/Index.js");
/******/ 	
/******/ })()
;