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

/***/ "./node_modules/css-loader/dist/cjs.js!./dist/style.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./dist/style.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body {\\r\\n    margin:0;\\r\\n    padding:0;\\r\\n    background: #edebd5;\\r\\n    font-family: Verdana, Geneva, Arial, Helvetica, sans-serif;\\r\\n    font-size: 11px;\\r\\n    color: #000;\\r\\n}\\r\\n#container {\\r\\n    width: 100%;\\r\\n    height: 100%;\\r\\n    position: absolute;\\r\\n    top: 0;\\r\\n    left: 0;\\r\\n    overflow: auto;\\r\\n    white-space: nowrap;\\r\\n    text-align: center;\\r\\n    font-size: 0;\\r\\n}\\r\\n.content {   \\r\\n    display: inline-block;\\r\\n    white-space: normal;\\r\\n    vertical-align: middle;\\r\\n    text-align: left;\\r\\n}\\r\\n\\r\\n.light {\\r\\n    background-color: white;  \\r\\n    /*padding: 3px; */\\r\\n    border: 1px solid black;  \\r\\n}\\r\\n\\r\\n.dark {\\r\\n    background-color: grey; \\r\\n    /*padding: 3px;*/\\r\\n    border: 1px solid black;\\r\\n}\\r\\n\\r\\ntable {  \\r\\n    border-collapse: separate;\\r\\n    border: 1px solid black;\\r\\n}\\r\\n\\r\\ntd, th {\\r\\n    width: 80px;\\r\\n    height: 80px;\\r\\n    text-align: center;\\r\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://chess-framework/./dist/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var _i = 0; _i < this.length; _i++) {\n        var id = this[_i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i2 = 0; _i2 < modules.length; _i2++) {\n      var item = [].concat(modules[_i2]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://chess-framework/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://chess-framework/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/img/bB.png":
/*!************************!*\
  !*** ./src/img/bB.png ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"src/img/bB.png\");\n\n//# sourceURL=webpack://chess-framework/./src/img/bB.png?");

/***/ }),

/***/ "./src/img/bW.png":
/*!************************!*\
  !*** ./src/img/bW.png ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"src/img/bW.png\");\n\n//# sourceURL=webpack://chess-framework/./src/img/bW.png?");

/***/ }),

/***/ "./src/img/kB.png":
/*!************************!*\
  !*** ./src/img/kB.png ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"src/img/kB.png\");\n\n//# sourceURL=webpack://chess-framework/./src/img/kB.png?");

/***/ }),

/***/ "./src/img/kW.png":
/*!************************!*\
  !*** ./src/img/kW.png ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"src/img/kW.png\");\n\n//# sourceURL=webpack://chess-framework/./src/img/kW.png?");

/***/ }),

/***/ "./src/img/kingB.png":
/*!***************************!*\
  !*** ./src/img/kingB.png ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"src/img/kingB.png\");\n\n//# sourceURL=webpack://chess-framework/./src/img/kingB.png?");

/***/ }),

/***/ "./src/img/kingW.png":
/*!***************************!*\
  !*** ./src/img/kingW.png ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"src/img/kingW.png\");\n\n//# sourceURL=webpack://chess-framework/./src/img/kingW.png?");

/***/ }),

/***/ "./src/img/pB.png":
/*!************************!*\
  !*** ./src/img/pB.png ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"src/img/pB.png\");\n\n//# sourceURL=webpack://chess-framework/./src/img/pB.png?");

/***/ }),

/***/ "./src/img/pW.png":
/*!************************!*\
  !*** ./src/img/pW.png ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"src/img/pW.png\");\n\n//# sourceURL=webpack://chess-framework/./src/img/pW.png?");

/***/ }),

/***/ "./src/img/qB.png":
/*!************************!*\
  !*** ./src/img/qB.png ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"src/img/qB.png\");\n\n//# sourceURL=webpack://chess-framework/./src/img/qB.png?");

/***/ }),

/***/ "./src/img/qW.png":
/*!************************!*\
  !*** ./src/img/qW.png ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"src/img/qW.png\");\n\n//# sourceURL=webpack://chess-framework/./src/img/qW.png?");

/***/ }),

/***/ "./src/img/rB.png":
/*!************************!*\
  !*** ./src/img/rB.png ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"src/img/rB.png\");\n\n//# sourceURL=webpack://chess-framework/./src/img/rB.png?");

/***/ }),

/***/ "./src/img/rW.png":
/*!************************!*\
  !*** ./src/img/rW.png ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"src/img/rW.png\");\n\n//# sourceURL=webpack://chess-framework/./src/img/rW.png?");

/***/ }),

/***/ "./dist/style.css":
/*!************************!*\
  !*** ./dist/style.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./dist/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://chess-framework/./dist/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://chess-framework/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://chess-framework/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://chess-framework/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://chess-framework/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://chess-framework/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://chess-framework/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/figures/bishop.js":
/*!*******************************!*\
  !*** ./src/figures/bishop.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Bishop)\n/* harmony export */ });\n/* harmony import */ var _figures_figure_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../figures/figure.js */ \"./src/figures/figure.js\");\n/* harmony import */ var _img_bB_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../img/bB.png */ \"./src/img/bB.png\");\n/* harmony import */ var _img_bW_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../img/bW.png */ \"./src/img/bW.png\");\n\r\n\r\n\r\n\r\n\r\nclass Bishop extends _figures_figure_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\r\n    constructor(name, x, y) {\r\n        super(name, x, y);\r\n    }\r\n\r\n    srcB = _img_bB_png__WEBPACK_IMPORTED_MODULE_1__[\"default\"];\r\n    srcW = _img_bW_png__WEBPACK_IMPORTED_MODULE_2__[\"default\"];\r\n\r\n    getName() {\r\n        return this.name;\r\n    }\r\n}\n\n//# sourceURL=webpack://chess-framework/./src/figures/bishop.js?");

/***/ }),

/***/ "./src/figures/figure.js":
/*!*******************************!*\
  !*** ./src/figures/figure.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Figure)\n/* harmony export */ });\nclass Figure {\r\n    constructor(name, x, y) {\r\n        this.name = name;\r\n        this.x = x;\r\n        this.y = y;\r\n    };\r\n\r\n    checkMove() {\r\n        \r\n    };\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://chess-framework/./src/figures/figure.js?");

/***/ }),

/***/ "./src/figures/king.js":
/*!*****************************!*\
  !*** ./src/figures/king.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ King)\n/* harmony export */ });\n/* harmony import */ var _figures_figure_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../figures/figure.js */ \"./src/figures/figure.js\");\n/* harmony import */ var _img_kingB_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../img/kingB.png */ \"./src/img/kingB.png\");\n/* harmony import */ var _img_kingW_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../img/kingW.png */ \"./src/img/kingW.png\");\n\r\n\r\n\r\n\r\n\r\nclass King extends _figures_figure_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\r\n    constructor(name, x, y) {\r\n        super(name, x, y);\r\n    }\r\n\r\n    srcB = _img_kingB_png__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\r\n    srcW = _img_kingW_png__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\r\n\r\n    getName() {\r\n        return this.name;\r\n    }\r\n}\n\n//# sourceURL=webpack://chess-framework/./src/figures/king.js?");

/***/ }),

/***/ "./src/figures/knight.js":
/*!*******************************!*\
  !*** ./src/figures/knight.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Knight)\n/* harmony export */ });\n/* harmony import */ var _figures_figure_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../figures/figure.js */ \"./src/figures/figure.js\");\n/* harmony import */ var _img_kB_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../img/kB.png */ \"./src/img/kB.png\");\n/* harmony import */ var _img_kW_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../img/kW.png */ \"./src/img/kW.png\");\n\r\n\r\n\r\n\r\nclass Knight extends _figures_figure_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\r\n    constructor(name, x, y) {\r\n        super(name, x, y);\r\n    }\r\n\r\n    srcB = _img_kB_png__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\r\n    srcW = _img_kW_png__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\r\n\r\n    getName() {\r\n        return this.name;\r\n    }\r\n}\n\n//# sourceURL=webpack://chess-framework/./src/figures/knight.js?");

/***/ }),

/***/ "./src/figures/pawn.js":
/*!*****************************!*\
  !*** ./src/figures/pawn.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Pawn)\n/* harmony export */ });\n/* harmony import */ var _figures_figure_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../figures/figure.js */ \"./src/figures/figure.js\");\n/* harmony import */ var _img_pB_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../img/pB.png */ \"./src/img/pB.png\");\n/* harmony import */ var _img_pW_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../img/pW.png */ \"./src/img/pW.png\");\n\r\n\r\n\r\n\r\nclass Pawn extends _figures_figure_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\r\n    constructor(name, x, y) {\r\n        super(name, x, y);\r\n    }\r\n\r\n    srcB = _img_pB_png__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\r\n    srcW = _img_pW_png__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\r\n\r\n    getName() {\r\n        return this.name;\r\n    }\r\n\r\n    checkMove(x, y) {\r\n        \r\n    }\r\n}\n\n//# sourceURL=webpack://chess-framework/./src/figures/pawn.js?");

/***/ }),

/***/ "./src/figures/queen.js":
/*!******************************!*\
  !*** ./src/figures/queen.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Queen)\n/* harmony export */ });\n/* harmony import */ var _figures_figure_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../figures/figure.js */ \"./src/figures/figure.js\");\n/* harmony import */ var _img_qB_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../img/qB.png */ \"./src/img/qB.png\");\n/* harmony import */ var _img_qW_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../img/qW.png */ \"./src/img/qW.png\");\n\r\n\r\n\r\n\r\nclass Queen extends _figures_figure_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\r\n    constructor(name, x, y) {\r\n        super(name, x, y);\r\n    }\r\n\r\n    srcB = _img_qB_png__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\r\n    srcW = _img_qW_png__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\r\n\r\n    getName() {\r\n        return this.name;\r\n    }\r\n}\n\n//# sourceURL=webpack://chess-framework/./src/figures/queen.js?");

/***/ }),

/***/ "./src/figures/rook.js":
/*!*****************************!*\
  !*** ./src/figures/rook.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Rook)\n/* harmony export */ });\n/* harmony import */ var _figures_figure_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../figures/figure.js */ \"./src/figures/figure.js\");\n/* harmony import */ var _img_rB_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../img/rB.png */ \"./src/img/rB.png\");\n/* harmony import */ var _img_rW_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../img/rW.png */ \"./src/img/rW.png\");\n\r\n\r\n\r\n\r\nclass Rook extends _figures_figure_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\r\n    constructor(name, x, y) {\r\n        super(name, x, y);\r\n    }\r\n\r\n    srcB = _img_rB_png__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\r\n    srcW = _img_rW_png__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\r\n\r\n    getName() {\r\n        return this.name;\r\n    }\r\n}\n\n//# sourceURL=webpack://chess-framework/./src/figures/rook.js?");

/***/ }),

/***/ "./src/game/controller.js":
/*!********************************!*\
  !*** ./src/game/controller.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ \"./src/game/game.js\");\n/* harmony import */ var _dist_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../dist/style.css */ \"./dist/style.css\");\n\r\n\r\n\r\n\r\nfunction startControl() {\r\n    var inception = confirm(\"Готовы начать игру?\");\r\n    if (inception == true) {\r\n        var choise = prompt(\"Черные или белые?\", \"Черные\");\r\n    }\r\n}\r\n\r\nvar game = new _game__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"Chess\");\r\ngame.draw();\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://chess-framework/./src/game/controller.js?");

/***/ }),

/***/ "./src/game/dom.js":
/*!*************************!*\
  !*** ./src/game/dom.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ workWithDOM)\n/* harmony export */ });\n/* harmony import */ var _figures_bishop_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../figures/bishop.js */ \"./src/figures/bishop.js\");\n/* harmony import */ var _figures_king_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../figures/king.js */ \"./src/figures/king.js\");\n/* harmony import */ var _figures_knight_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../figures/knight.js */ \"./src/figures/knight.js\");\n/* harmony import */ var _figures_pawn_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../figures/pawn.js */ \"./src/figures/pawn.js\");\n/* harmony import */ var _figures_queen_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../figures/queen.js */ \"./src/figures/queen.js\");\n/* harmony import */ var _figures_rook_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../figures/rook.js */ \"./src/figures/rook.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nclass workWithDOM {\r\n\r\n    createElement(name, place) {\r\n        let element = document.createElement(name);\r\n        let node = document.getElementById(place);\r\n        try {\r\n            node.appendChild(element);\r\n            console.log(\"Element add\");\r\n        } catch {\r\n            console.log(\"Element not added\");\r\n        }\r\n    }\r\n\r\n    createTableFromArray(array) {\r\n        let m = 0;\r\n        let element = document.getElementsByTagName('table')[0];\r\n        for (let i = 0; i < array.length; i++) {\r\n            let tr = document.createElement('tr');\r\n            for (let j = 0; j < array.length; j++) {\r\n                let td = document.createElement('td');\r\n                let img = document.createElement('img');\r\n                if (m % 2 == 0) {\r\n                    td.className = \"light\";\r\n                } else {\r\n                    td.className = \"dark\";\r\n                }\r\n                switch (array[i][j].figure) {\r\n                    case 'pB':\r\n                        td.appendChild(img);\r\n                        let pawnB = new _figures_pawn_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"](\"Pawn\");\r\n                        img.src = pawnB.srcB;\r\n                        img.id = pawnB.getName() + i + j\r\n                        td.setAttribute(\"data-x\", i);\r\n                        td.setAttribute(\"data-y\", j);\r\n                        td.setAttribute(\"figure\", pawnB.getName());\r\n                        td.setAttribute(\"color\", \"Black\");\r\n                        td.id = array[i][j].mark;\r\n                        break;\r\n                    case 'rB':\r\n                        td.appendChild(img);\r\n                        let rookB = new _figures_rook_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"](\"Rook\");\r\n                        img.src = rookB.srcB;\r\n                        img.id = rookB.getName() + i + j;\r\n                        td.setAttribute(\"data-x\", i);\r\n                        td.setAttribute(\"data-y\", j);\r\n                        td.setAttribute(\"figure\", rookB.getName());\r\n                        td.setAttribute(\"color\", \"Black\");\r\n                        td.id = array[i][j].mark;\r\n                        break;\r\n                    case 'kB':\r\n                        td.appendChild(img);\r\n                        let knightB = new _figures_knight_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"](\"Knight\");\r\n                        img.src = knightB.srcB;\r\n                        img.id = knightB.getName() + i + j;\r\n                        td.setAttribute(\"data-x\", i);\r\n                        td.setAttribute(\"data-y\", j);\r\n                        td.setAttribute(\"figure\", knightB.getName());\r\n                        td.setAttribute(\"color\", \"Black\");\r\n                        td.id = array[i][j].mark;\r\n                        break;\r\n                    case 'bB':\r\n                        td.appendChild(img);\r\n                        let bishopB = new _figures_bishop_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"Bishop\");\r\n                        img.src = bishopB.srcB;\r\n                        img.id = bishopB.getName() + i + j;\r\n                        td.setAttribute(\"data-x\", i);\r\n                        td.setAttribute(\"data-y\", j);\r\n                        td.setAttribute(\"figure\", bishopB.getName());\r\n                        td.setAttribute(\"color\", \"Black\");\r\n                        td.id = array[i][j].mark;\r\n                        break;\r\n                    case 'qB':\r\n                        td.appendChild(img);\r\n                        let queenB = new _figures_queen_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"](\"Queen\");\r\n                        img.src = queenB.srcB;\r\n                        img.id = queenB.getName() + i + j;\r\n                        td.setAttribute(\"data-x\", i);\r\n                        td.setAttribute(\"data-y\", j);\r\n                        td.setAttribute(\"figure\", queenB.getName());\r\n                        td.setAttribute(\"color\", \"Black\");\r\n                        td.id = array[i][j].mark;\r\n                        break;\r\n                    case 'kingB':\r\n                        td.appendChild(img);\r\n                        let kingB = new _figures_king_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\"King\");\r\n                        img.src = kingB.srcB;\r\n                        img.id = kingB.getName() + i + j;\r\n                        td.setAttribute(\"data-x\", i);\r\n                        td.setAttribute(\"data-y\", j);\r\n                        td.setAttribute(\"figure\", kingB.getName());\r\n                        td.setAttribute(\"color\", \"Black\");\r\n                        td.id = array[i][j].mark;\r\n                        break;\r\n                    case 'pW':\r\n                        td.appendChild(img);\r\n                        let pawnW = new _figures_pawn_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"](\"Pawn\");\r\n                        img.src = pawnW.srcW;\r\n                        img.id = pawnW.getName() + i + j;\r\n                        td.setAttribute(\"data-x\", i);\r\n                        td.setAttribute(\"data-y\", j);\r\n                        td.setAttribute(\"figure\", pawnW.getName());\r\n                        td.setAttribute(\"color\", \"White\");\r\n                        td.id = array[i][j].mark;\r\n                        break;\r\n                    case 'rW':\r\n                        td.appendChild(img);\r\n                        let rookW = new _figures_rook_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"](\"Rook\");\r\n                        img.src = rookW.srcW;\r\n                        img.id = rookW.getName() + i + j;\r\n                        td.setAttribute(\"data-x\", i);\r\n                        td.setAttribute(\"data-y\", j);\r\n                        td.setAttribute(\"figure\", rookW.getName());\r\n                        td.setAttribute(\"color\", \"White\");\r\n                        td.id = array[i][j].mark;\r\n                        break;\r\n                    case 'kW':\r\n                        td.appendChild(img);\r\n                        let knightW = new _figures_knight_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"](\"Knight\");\r\n                        img.src = knightW.srcW;\r\n                        img.id = knightW.getName() + i + j;\r\n                        td.setAttribute(\"data-x\", i);\r\n                        td.setAttribute(\"data-y\", j);\r\n                        td.setAttribute(\"figure\", knightW.getName());\r\n                        td.setAttribute(\"color\", \"White\");\r\n                        td.id = array[i][j].mark;\r\n                        break;\r\n                    case 'bW':\r\n                        td.appendChild(img);\r\n                        let bishopW = new _figures_bishop_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"Bishop\");\r\n                        img.src = bishopW.srcW;\r\n                        img.id = bishopW.getName() + i + j;\r\n                        td.setAttribute(\"data-x\", i);\r\n                        td.setAttribute(\"data-y\", j);\r\n                        td.setAttribute(\"figure\", bishopW.getName());\r\n                        td.setAttribute(\"color\", \"White\");\r\n                        td.id = array[i][j].mark;\r\n                        break;\r\n                    case 'qW':\r\n                        td.appendChild(img);\r\n                        let queenW = new _figures_queen_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"](\"Queen\");\r\n                        img.src = queenW.srcW;\r\n                        img.id = queenW.getName() + i + j;\r\n                        td.setAttribute(\"data-x\", i);\r\n                        td.setAttribute(\"data-y\", j);\r\n                        td.setAttribute(\"figure\", queenW.getName());\r\n                        td.setAttribute(\"color\", \"White\");\r\n                        td.id = array[i][j].mark;\r\n                        break;\r\n                    case 'kingW':\r\n                        td.appendChild(img);\r\n                        let kingW = new _figures_king_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\"King\");\r\n                        img.src = kingW.srcW;\r\n                        img.id = kingW.getName() + i + j;\r\n                        td.setAttribute(\"data-x\", i);\r\n                        td.setAttribute(\"data-y\", j);\r\n                        td.setAttribute(\"figure\", kingW.getName());\r\n                        td.setAttribute(\"color\", \"White\");\r\n                        td.id = array[i][j].mark;\r\n                        break;\r\n                    case 0:\r\n                        td.id = array[i][j].mark;\r\n                        td.setAttribute(\"data-x\", i);\r\n                        td.setAttribute(\"data-y\", j);\r\n                        break;\r\n                }\r\n                m++;\r\n                tr.appendChild(td);\r\n            }\r\n            m++;\r\n            element.appendChild(tr);\r\n        }\r\n    }\r\n\r\n    addDragAndDropOnTable() {\r\n        let element = document.getElementsByTagName('table')[0];\r\n        const tdElements = element.getElementsByTagName('td');\r\n        for (let td of tdElements) {\r\n            var allowdrop = function (event) {\r\n                event.preventDefault();\r\n            }\r\n\r\n            var drag = function (event) {\r\n                event.dataTransfer.setData('id', event.target.id);\r\n                event.dataTransfer.setData('className', event.target.className);\r\n            }\r\n\r\n            var drop = function (event) {\r\n                let idOld = event.target.id;\r\n                let elementOld = document.getElementById(idOld);\r\n                let itemId = event.dataTransfer.getData('id');\r\n                let newElement = document.getElementById(itemId);\r\n                let itemClassName = event.dataTransfer.getData('className');\r\n\r\n                if (itemClassName == 'Black') {\r\n                    if (event.target.className == 'Black') {\r\n                    } else {\r\n                        event.target.append(document.getElementById(itemId));\r\n                    }\r\n                    if (event.target.className == 'White') {\r\n                        alert(\"Съел\");\r\n                        event.target.append(document.getElementById(itemId));\r\n                        td.removeChild(elementOld);\r\n                        td.appendChild(newElement);\r\n                    }\r\n                }\r\n                if (itemClassName == 'White') {\r\n                    if (event.target.className == 'White') {\r\n                    }\r\n                    else {\r\n                        event.target.append(document.getElementById(itemId));\r\n                    }\r\n                    if (event.target.className == 'Black') {\r\n                        alert(\"Съел\");\r\n                        event.target.append(document.getElementById(itemId));\r\n                        td.removeChild(elementOld);\r\n                        td.appendChild(newElement);\r\n                    }\r\n                }\r\n            }\r\n            td.draggable = true;\r\n            td.ondragover = allowdrop;\r\n            td.ondrop = drop;\r\n            td.ondragstart = drag;\r\n        }\r\n    }\r\n\r\n    showMoves() {\r\n        let element = document.getElementsByTagName('table')[0];\r\n        const tdElements = element.getElementsByTagName('td');\r\n        for (let td of tdElements) {\r\n            td.onmouseover = () => {\r\n                switch (td.getAttribute('Figure')) {\r\n                    case 'Pawn':\r\n                        const xP = Number(td.dataset.x);\r\n                        const yP = Number(td.dataset.y);\r\n                        const tdMoveP = document.querySelectorAll(`td[data-y=\"${yP}\"][data-x=\"${xP + 1}\"], td[data-y=\"${yP}\"][data-x=\"${xP + 2}\"]`);\r\n                        tdMoveP.forEach((td) => { td.style.backgroundColor = \"yellow\"; });\r\n                        console.log(tdMoveP);\r\n                        break;\r\n                    case 'Rook':\r\n                        const xR = Number(td.dataset.x);\r\n                        const yR = Number(td.dataset.y);\r\n                        const tdMoveR = document.querySelectorAll(`td[data-y=\"${yR}\"], td[data-x=\"${xR}\"] `);\r\n                        tdMoveR.forEach((td) => { td.style.backgroundColor = \"yellow\"; });\r\n                        break;\r\n                    case 'Knight':\r\n                        //const xK = Number(td.dataset.x);\r\n                        //const yK = Number(td.dataset.y);\r\n                        //const tdMoveK = document.querySelectorAll(`td[data-y=\"${xK}\"], td[data-x=\"${yK}\"] `);\r\n                        //tdMoveK.forEach((td) => { td.style.backgroundColor = \"yellow\"; });\r\n                        break;\r\n                    case 'Bishop':\r\n\r\n                        break;\r\n                    case 'Quenn':\r\n\r\n                        break;\r\n                    case 'King':\r\n\r\n                        break;\r\n                    case 0:\r\n\r\n                        break;\r\n                }\r\n                td.onmouseout = () => {\r\n                    Array.prototype.forEach.call(tdElements, (td) => td.style.backgroundColor = \"\"); s\r\n                }\r\n            }\r\n            /* td.addEventListener(\"mouseout\", () => {\r\n                Array.prototype.forEach.call(tdElements, (td) => td.style.backgroundColor = \"\");s\r\n            }) */\r\n        }\r\n    }\r\n\r\n    deleteElement(name, place) {\r\n        let element = document.createElement(name);\r\n        let node = document.getElementById(place);\r\n        try {\r\n            node.removeChild(element);\r\n            console.log(\"Element delete\");\r\n        } catch {\r\n            console.log(\"Element not found or not deleted\");\r\n        }\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://chess-framework/./src/game/dom.js?");

/***/ }),

/***/ "./src/game/game.js":
/*!**************************!*\
  !*** ./src/game/game.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Game)\n/* harmony export */ });\n/* harmony import */ var _game_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../game/dom */ \"./src/game/dom.js\");\n\r\n\r\nvar chessBoardFiguresArray = [\r\n    [{ figure: \"rB\", mark: \"A8\" }, { figure: \"kB\", mark: \"B8\" }, { figure: \"bB\", mark: \"C8\" }, { figure: \"qB\", mark: \"D8\" }, { figure: \"kingB\", mark: \"E8\" }, { figure: \"bB\", mark: \"F8\" }, { figure: \"kB\", mark: \"G8\" }, { figure: \"rB\", mark: \"H8\" }],\r\n    [{ figure: \"pB\", mark: \"A7\" }, { figure: \"pB\", mark: \"B7\" }, { figure: \"pB\", mark: \"C7\" }, { figure: \"pB\", mark: \"D7\" }, { figure: \"pB\", mark: \"E7\" }, { figure: \"pB\", mark: \"F7\" }, { figure: \"pB\", mark: \"G7\" }, { figure: \"pB\", mark: \"H7\" }],\r\n    [{ figure: 0, mark: \"A6\" }, { figure: 0, mark: \"B6\" }, { figure: 0, mark: \"C6\" }, { figure: 0, mark: \"D6\" }, { figure: 0, mark: \"E6\" }, { figure: 0, mark: \"F6\" }, { figure: 0, mark: \"G6\" }, { figure: 0, mark: \"H6\" }],\r\n    [{ figure: 0, mark: \"A5\" }, { figure: 0, mark: \"B5\" }, { figure: 0, mark: \"C5\" }, { figure: 0, mark: \"D5\" }, { figure: 0, mark: \"E5\" }, { figure: 0, mark: \"F5\" }, { figure: 0, mark: \"G5\" }, { figure: 0, mark: \"H5\" }],\r\n    [{ figure: 0, mark: \"A4\" }, { figure: 0, mark: \"B4\" }, { figure: 0, mark: \"C4\" }, { figure: 0, mark: \"D4\" }, { figure: 0, mark: \"E4\" }, { figure: 0, mark: \"F4\" }, { figure: 0, mark: \"G4\" }, { figure: 0, mark: \"H4\" }],\r\n    [{ figure: 0, mark: \"A3\" }, { figure: 0, mark: \"B3\" }, { figure: 0, mark: \"C3\" }, { figure: 0, mark: \"D3\" }, { figure: 0, mark: \"E3\" }, { figure: 0, mark: \"F3\" }, { figure: 0, mark: \"G3\" }, { figure: 0, mark: \"H3\" }],\r\n    [{ figure: \"pW\", mark: \"A2\" }, { figure: \"pW\", mark: \"B2\" }, { figure: \"pW\", mark: \"C2\" }, { figure: \"pW\", mark: \"D2\" }, { figure: \"pW\", mark: \"E2\" }, { figure: \"pW\", mark: \"F2\" }, { figure: \"pW\", mark: \"G2\" }, { figure: \"pW\", mark: \"H2\" }],\r\n    [{ figure: \"rW\", mark: \"A1\" }, { figure: \"kW\", mark: \"B1\" }, { figure: \"bW\", mark: \"C1\" }, { figure: \"qW\", mark: \"D1\" }, { figure: \"kingW\", mark: \"E1\" }, { figure: \"bW\", mark: \"F1\" }, { figure: \"kW\", mark: \"G1\" }, { figure: \"rW\", mark: \"H1\" }],\r\n]\r\n\r\nclass Game {\r\n    constructor(name) {\r\n        this.name = name;\r\n    }\r\n\r\n    draw() {\r\n        var dom = new _game_dom__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\r\n        dom.createElement(\"table\", \"content\");\r\n        dom.createTableFromArray(chessBoardFiguresArray);\r\n        dom.addDragAndDropOnTable();\r\n        dom.showMoves();\r\n    }\r\n}\r\n\r\n\n\n//# sourceURL=webpack://chess-framework/./src/game/game.js?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/game/controller.js");
/******/ 	
/******/ })()
;