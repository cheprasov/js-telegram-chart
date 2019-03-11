module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/Chart/Legend/ChartLegend.scss":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/Chart/Legend/ChartLegend.scss ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \"/* Font */\\n/* Spaces */\\n/* Colours */\\n\", \"\"]);\n\n\n\n//# sourceURL=webpack:///./src/Chart/Legend/ChartLegend.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/Chart/Legend/LegendItem.scss":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/Chart/Legend/LegendItem.scss ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \"/* Font */\\n/* Spaces */\\n/* Colours */\\n.ChartLegend-Item {\\n  display: inline-block;\\n  padding: 10px 20px 10px 10px;\\n  box-sizing: border-box;\\n  border: 1px solid #e6ecf0;\\n  border-radius: 25px;\\n  margin: 0 20px 20px 0;\\n  cursor: pointer; }\\n  .ChartLegend-Item-Icon {\\n    position: relative;\\n    display: inline-block;\\n    width: 30px;\\n    height: 30px;\\n    border-radius: 15px;\\n    margin-right: 15px;\\n    vertical-align: middle;\\n    background-color: #43484b;\\n    transition: all 200ms;\\n    background-image: url(\\\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48cGF0aCBmaWxsPSIjZmZmIiBkPSJNMTczLjg5OCA0MzkuNDA0bC0xNjYuNC0xNjYuNGMtOS45OTctOS45OTctOS45OTctMjYuMjA2IDAtMzYuMjA0bDM2LjIwMy0zNi4yMDRjOS45OTctOS45OTggMjYuMjA3LTkuOTk4IDM2LjIwNCAwTDE5MiAzMTIuNjkgNDMyLjA5NSA3Mi41OTZjOS45OTctOS45OTcgMjYuMjA3LTkuOTk3IDM2LjIwNCAwbDM2LjIwMyAzNi4yMDRjOS45OTcgOS45OTcgOS45OTcgMjYuMjA2IDAgMzYuMjA0bC0yOTQuNCAyOTQuNDAxYy05Ljk5OCA5Ljk5Ny0yNi4yMDcgOS45OTctMzYuMjA0LS4wMDF6Ii8+PC9zdmc+\\\");\\n    background-size: 0;\\n    background-repeat: no-repeat;\\n    background-position: center; }\\n    .ChartLegend-Item-Icon:before {\\n      content: '';\\n      display: block;\\n      width: 30px;\\n      height: 30px;\\n      background-color: #fff;\\n      border-radius: 15px;\\n      transform: scale(0.85, 0.85);\\n      transition: all 200ms; }\\n  .ChartLegend-Item.checked .ChartLegend-Item-Icon:before {\\n    transform: scale(0, 0); }\\n  .ChartLegend-Item.checked .ChartLegend-Item-Icon {\\n    background-size: 50%; }\\n  .ChartLegend-Item-Label {\\n    display: inline-block;\\n    vertical-align: middle;\\n    color: #43484b; }\\n\", \"\"]);\n\n\n\n//# sourceURL=webpack:///./src/Chart/Legend/LegendItem.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/Chart/Navigation/ChartNavigation.scss":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/Chart/Navigation/ChartNavigation.scss ***!
  \**********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \"/* Font */\\n/* Spaces */\\n/* Colours */\\n.ChartNavigation {\\n  position: relative;\\n  display: block;\\n  width: 100%;\\n  height: 50px;\\n  box-sizing: border-box;\\n  margin-bottom: 22px; }\\n  .ChartNavigation-SVG {\\n    width: 100%;\\n    height: 100%; }\\n\", \"\"]);\n\n\n\n//# sourceURL=webpack:///./src/Chart/Navigation/ChartNavigation.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/Chart/SimpleChart.scss":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/Chart/SimpleChart.scss ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \"/* Font */\\n/* Spaces */\\n/* Colours */\\n.SimpleChart {\\n  width: 100%;\\n  height: 100%;\\n  font: 1rem/1.2rem \\\"Open Sans\\\", \\\"Lucida Grande\\\", \\\"Lucida Sans Unicode\\\", Arial, Helvetica, Verdana, sans-serif;\\n  user-select: none;\\n  -webkit-tap-highlight-color: transparent; }\\n\", \"\"]);\n\n\n\n//# sourceURL=webpack:///./src/Chart/SimpleChart.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return '@media ' + item[2] + '{' + content + '}';\n      } else {\n        return content;\n      }\n    }).join('');\n  }; // import a list of modules into the list\n\n\n  list.i = function (modules, mediaQuery) {\n    if (typeof modules === 'string') {\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    for (var i = 0; i < this.length; i++) {\n      var id = this[i][0];\n\n      if (id != null) {\n        alreadyImportedModules[id] = true;\n      }\n    }\n\n    for (i = 0; i < modules.length; i++) {\n      var item = modules[i]; // skip already imported module\n      // this implementation is not 100% perfect for weird media query combinations\n      // when a module is imported multiple times with different media queries.\n      // I hope this will never occur (Hey this way we have smaller bundles)\n\n      if (item[0] == null || !alreadyImportedModules[item[0]]) {\n        if (mediaQuery && !item[2]) {\n          item[2] = mediaQuery;\n        } else if (mediaQuery) {\n          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';\n        }\n\n        list.push(item);\n      }\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || '';\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;\n  return '/*# ' + data + ' */';\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/*\n\tMIT License http://www.opensource.org/licenses/mit-license.php\n\tAuthor Tobias Koppers @sokra\n*/\n\nvar stylesInDom = {};\n\nvar\tmemoize = function (fn) {\n\tvar memo;\n\n\treturn function () {\n\t\tif (typeof memo === \"undefined\") memo = fn.apply(this, arguments);\n\t\treturn memo;\n\t};\n};\n\nvar isOldIE = memoize(function () {\n\t// Test for IE <= 9 as proposed by Browserhacks\n\t// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n\t// Tests for existence of standard globals is to allow style-loader\n\t// to operate correctly into non-standard environments\n\t// @see https://github.com/webpack-contrib/style-loader/issues/177\n\treturn window && document && document.all && !window.atob;\n});\n\nvar getTarget = function (target, parent) {\n  if (parent){\n    return parent.querySelector(target);\n  }\n  return document.querySelector(target);\n};\n\nvar getElement = (function (fn) {\n\tvar memo = {};\n\n\treturn function(target, parent) {\n                // If passing function in options, then use it for resolve \"head\" element.\n                // Useful for Shadow Root style i.e\n                // {\n                //   insertInto: function () { return document.querySelector(\"#foo\").shadowRoot }\n                // }\n                if (typeof target === 'function') {\n                        return target();\n                }\n                if (typeof memo[target] === \"undefined\") {\n\t\t\tvar styleTarget = getTarget.call(this, target, parent);\n\t\t\t// Special case to return head of iframe instead of iframe itself\n\t\t\tif (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n\t\t\t\ttry {\n\t\t\t\t\t// This will throw an exception if access to iframe is blocked\n\t\t\t\t\t// due to cross-origin restrictions\n\t\t\t\t\tstyleTarget = styleTarget.contentDocument.head;\n\t\t\t\t} catch(e) {\n\t\t\t\t\tstyleTarget = null;\n\t\t\t\t}\n\t\t\t}\n\t\t\tmemo[target] = styleTarget;\n\t\t}\n\t\treturn memo[target]\n\t};\n})();\n\nvar singleton = null;\nvar\tsingletonCounter = 0;\nvar\tstylesInsertedAtTop = [];\n\nvar\tfixUrls = __webpack_require__(/*! ./urls */ \"./node_modules/style-loader/lib/urls.js\");\n\nmodule.exports = function(list, options) {\n\tif (typeof DEBUG !== \"undefined\" && DEBUG) {\n\t\tif (typeof document !== \"object\") throw new Error(\"The style-loader cannot be used in a non-browser environment\");\n\t}\n\n\toptions = options || {};\n\n\toptions.attrs = typeof options.attrs === \"object\" ? options.attrs : {};\n\n\t// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n\t// tags it will allow on a page\n\tif (!options.singleton && typeof options.singleton !== \"boolean\") options.singleton = isOldIE();\n\n\t// By default, add <style> tags to the <head> element\n        if (!options.insertInto) options.insertInto = \"head\";\n\n\t// By default, add <style> tags to the bottom of the target\n\tif (!options.insertAt) options.insertAt = \"bottom\";\n\n\tvar styles = listToStyles(list, options);\n\n\taddStylesToDom(styles, options);\n\n\treturn function update (newList) {\n\t\tvar mayRemove = [];\n\n\t\tfor (var i = 0; i < styles.length; i++) {\n\t\t\tvar item = styles[i];\n\t\t\tvar domStyle = stylesInDom[item.id];\n\n\t\t\tdomStyle.refs--;\n\t\t\tmayRemove.push(domStyle);\n\t\t}\n\n\t\tif(newList) {\n\t\t\tvar newStyles = listToStyles(newList, options);\n\t\t\taddStylesToDom(newStyles, options);\n\t\t}\n\n\t\tfor (var i = 0; i < mayRemove.length; i++) {\n\t\t\tvar domStyle = mayRemove[i];\n\n\t\t\tif(domStyle.refs === 0) {\n\t\t\t\tfor (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();\n\n\t\t\t\tdelete stylesInDom[domStyle.id];\n\t\t\t}\n\t\t}\n\t};\n};\n\nfunction addStylesToDom (styles, options) {\n\tfor (var i = 0; i < styles.length; i++) {\n\t\tvar item = styles[i];\n\t\tvar domStyle = stylesInDom[item.id];\n\n\t\tif(domStyle) {\n\t\t\tdomStyle.refs++;\n\n\t\t\tfor(var j = 0; j < domStyle.parts.length; j++) {\n\t\t\t\tdomStyle.parts[j](item.parts[j]);\n\t\t\t}\n\n\t\t\tfor(; j < item.parts.length; j++) {\n\t\t\t\tdomStyle.parts.push(addStyle(item.parts[j], options));\n\t\t\t}\n\t\t} else {\n\t\t\tvar parts = [];\n\n\t\t\tfor(var j = 0; j < item.parts.length; j++) {\n\t\t\t\tparts.push(addStyle(item.parts[j], options));\n\t\t\t}\n\n\t\t\tstylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};\n\t\t}\n\t}\n}\n\nfunction listToStyles (list, options) {\n\tvar styles = [];\n\tvar newStyles = {};\n\n\tfor (var i = 0; i < list.length; i++) {\n\t\tvar item = list[i];\n\t\tvar id = options.base ? item[0] + options.base : item[0];\n\t\tvar css = item[1];\n\t\tvar media = item[2];\n\t\tvar sourceMap = item[3];\n\t\tvar part = {css: css, media: media, sourceMap: sourceMap};\n\n\t\tif(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});\n\t\telse newStyles[id].parts.push(part);\n\t}\n\n\treturn styles;\n}\n\nfunction insertStyleElement (options, style) {\n\tvar target = getElement(options.insertInto)\n\n\tif (!target) {\n\t\tthrow new Error(\"Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.\");\n\t}\n\n\tvar lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];\n\n\tif (options.insertAt === \"top\") {\n\t\tif (!lastStyleElementInsertedAtTop) {\n\t\t\ttarget.insertBefore(style, target.firstChild);\n\t\t} else if (lastStyleElementInsertedAtTop.nextSibling) {\n\t\t\ttarget.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);\n\t\t} else {\n\t\t\ttarget.appendChild(style);\n\t\t}\n\t\tstylesInsertedAtTop.push(style);\n\t} else if (options.insertAt === \"bottom\") {\n\t\ttarget.appendChild(style);\n\t} else if (typeof options.insertAt === \"object\" && options.insertAt.before) {\n\t\tvar nextSibling = getElement(options.insertAt.before, target);\n\t\ttarget.insertBefore(style, nextSibling);\n\t} else {\n\t\tthrow new Error(\"[Style Loader]\\n\\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\\n Must be 'top', 'bottom', or Object.\\n (https://github.com/webpack-contrib/style-loader#insertat)\\n\");\n\t}\n}\n\nfunction removeStyleElement (style) {\n\tif (style.parentNode === null) return false;\n\tstyle.parentNode.removeChild(style);\n\n\tvar idx = stylesInsertedAtTop.indexOf(style);\n\tif(idx >= 0) {\n\t\tstylesInsertedAtTop.splice(idx, 1);\n\t}\n}\n\nfunction createStyleElement (options) {\n\tvar style = document.createElement(\"style\");\n\n\tif(options.attrs.type === undefined) {\n\t\toptions.attrs.type = \"text/css\";\n\t}\n\n\tif(options.attrs.nonce === undefined) {\n\t\tvar nonce = getNonce();\n\t\tif (nonce) {\n\t\t\toptions.attrs.nonce = nonce;\n\t\t}\n\t}\n\n\taddAttrs(style, options.attrs);\n\tinsertStyleElement(options, style);\n\n\treturn style;\n}\n\nfunction createLinkElement (options) {\n\tvar link = document.createElement(\"link\");\n\n\tif(options.attrs.type === undefined) {\n\t\toptions.attrs.type = \"text/css\";\n\t}\n\toptions.attrs.rel = \"stylesheet\";\n\n\taddAttrs(link, options.attrs);\n\tinsertStyleElement(options, link);\n\n\treturn link;\n}\n\nfunction addAttrs (el, attrs) {\n\tObject.keys(attrs).forEach(function (key) {\n\t\tel.setAttribute(key, attrs[key]);\n\t});\n}\n\nfunction getNonce() {\n\tif (false) {}\n\n\treturn __webpack_require__.nc;\n}\n\nfunction addStyle (obj, options) {\n\tvar style, update, remove, result;\n\n\t// If a transform function was defined, run it on the css\n\tif (options.transform && obj.css) {\n\t    result = typeof options.transform === 'function'\n\t\t ? options.transform(obj.css) \n\t\t : options.transform.default(obj.css);\n\n\t    if (result) {\n\t    \t// If transform returns a value, use that instead of the original css.\n\t    \t// This allows running runtime transformations on the css.\n\t    \tobj.css = result;\n\t    } else {\n\t    \t// If the transform function returns a falsy value, don't add this css.\n\t    \t// This allows conditional loading of css\n\t    \treturn function() {\n\t    \t\t// noop\n\t    \t};\n\t    }\n\t}\n\n\tif (options.singleton) {\n\t\tvar styleIndex = singletonCounter++;\n\n\t\tstyle = singleton || (singleton = createStyleElement(options));\n\n\t\tupdate = applyToSingletonTag.bind(null, style, styleIndex, false);\n\t\tremove = applyToSingletonTag.bind(null, style, styleIndex, true);\n\n\t} else if (\n\t\tobj.sourceMap &&\n\t\ttypeof URL === \"function\" &&\n\t\ttypeof URL.createObjectURL === \"function\" &&\n\t\ttypeof URL.revokeObjectURL === \"function\" &&\n\t\ttypeof Blob === \"function\" &&\n\t\ttypeof btoa === \"function\"\n\t) {\n\t\tstyle = createLinkElement(options);\n\t\tupdate = updateLink.bind(null, style, options);\n\t\tremove = function () {\n\t\t\tremoveStyleElement(style);\n\n\t\t\tif(style.href) URL.revokeObjectURL(style.href);\n\t\t};\n\t} else {\n\t\tstyle = createStyleElement(options);\n\t\tupdate = applyToTag.bind(null, style);\n\t\tremove = function () {\n\t\t\tremoveStyleElement(style);\n\t\t};\n\t}\n\n\tupdate(obj);\n\n\treturn function updateStyle (newObj) {\n\t\tif (newObj) {\n\t\t\tif (\n\t\t\t\tnewObj.css === obj.css &&\n\t\t\t\tnewObj.media === obj.media &&\n\t\t\t\tnewObj.sourceMap === obj.sourceMap\n\t\t\t) {\n\t\t\t\treturn;\n\t\t\t}\n\n\t\t\tupdate(obj = newObj);\n\t\t} else {\n\t\t\tremove();\n\t\t}\n\t};\n}\n\nvar replaceText = (function () {\n\tvar textStore = [];\n\n\treturn function (index, replacement) {\n\t\ttextStore[index] = replacement;\n\n\t\treturn textStore.filter(Boolean).join('\\n');\n\t};\n})();\n\nfunction applyToSingletonTag (style, index, remove, obj) {\n\tvar css = remove ? \"\" : obj.css;\n\n\tif (style.styleSheet) {\n\t\tstyle.styleSheet.cssText = replaceText(index, css);\n\t} else {\n\t\tvar cssNode = document.createTextNode(css);\n\t\tvar childNodes = style.childNodes;\n\n\t\tif (childNodes[index]) style.removeChild(childNodes[index]);\n\n\t\tif (childNodes.length) {\n\t\t\tstyle.insertBefore(cssNode, childNodes[index]);\n\t\t} else {\n\t\t\tstyle.appendChild(cssNode);\n\t\t}\n\t}\n}\n\nfunction applyToTag (style, obj) {\n\tvar css = obj.css;\n\tvar media = obj.media;\n\n\tif(media) {\n\t\tstyle.setAttribute(\"media\", media)\n\t}\n\n\tif(style.styleSheet) {\n\t\tstyle.styleSheet.cssText = css;\n\t} else {\n\t\twhile(style.firstChild) {\n\t\t\tstyle.removeChild(style.firstChild);\n\t\t}\n\n\t\tstyle.appendChild(document.createTextNode(css));\n\t}\n}\n\nfunction updateLink (link, options, obj) {\n\tvar css = obj.css;\n\tvar sourceMap = obj.sourceMap;\n\n\t/*\n\t\tIf convertToAbsoluteUrls isn't defined, but sourcemaps are enabled\n\t\tand there is no publicPath defined then lets turn convertToAbsoluteUrls\n\t\ton by default.  Otherwise default to the convertToAbsoluteUrls option\n\t\tdirectly\n\t*/\n\tvar autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;\n\n\tif (options.convertToAbsoluteUrls || autoFixUrls) {\n\t\tcss = fixUrls(css);\n\t}\n\n\tif (sourceMap) {\n\t\t// http://stackoverflow.com/a/26603875\n\t\tcss += \"\\n/*# sourceMappingURL=data:application/json;base64,\" + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + \" */\";\n\t}\n\n\tvar blob = new Blob([css], { type: \"text/css\" });\n\n\tvar oldSrc = link.href;\n\n\tlink.href = URL.createObjectURL(blob);\n\n\tif(oldSrc) URL.revokeObjectURL(oldSrc);\n}\n\n\n//# sourceURL=webpack:///./node_modules/style-loader/lib/addStyles.js?");

/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n/**\n * When source maps are enabled, `style-loader` uses a link element with a data-uri to\n * embed the css on the page. This breaks all relative urls because now they are relative to a\n * bundle instead of the current page.\n *\n * One solution is to only use full urls, but that may be impossible.\n *\n * Instead, this function \"fixes\" the relative urls to be absolute according to the current page location.\n *\n * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.\n *\n */\n\nmodule.exports = function (css) {\n  // get current location\n  var location = typeof window !== \"undefined\" && window.location;\n\n  if (!location) {\n    throw new Error(\"fixUrls requires window.location\");\n  }\n\n\t// blank or null?\n\tif (!css || typeof css !== \"string\") {\n\t  return css;\n  }\n\n  var baseUrl = location.protocol + \"//\" + location.host;\n  var currentDir = baseUrl + location.pathname.replace(/\\/[^\\/]*$/, \"/\");\n\n\t// convert each url(...)\n\t/*\n\tThis regular expression is just a way to recursively match brackets within\n\ta string.\n\n\t /url\\s*\\(  = Match on the word \"url\" with any whitespace after it and then a parens\n\t   (  = Start a capturing group\n\t     (?:  = Start a non-capturing group\n\t         [^)(]  = Match anything that isn't a parentheses\n\t         |  = OR\n\t         \\(  = Match a start parentheses\n\t             (?:  = Start another non-capturing groups\n\t                 [^)(]+  = Match anything that isn't a parentheses\n\t                 |  = OR\n\t                 \\(  = Match a start parentheses\n\t                     [^)(]*  = Match anything that isn't a parentheses\n\t                 \\)  = Match a end parentheses\n\t             )  = End Group\n              *\\) = Match anything and then a close parens\n          )  = Close non-capturing group\n          *  = Match anything\n       )  = Close capturing group\n\t \\)  = Match a close parens\n\n\t /gi  = Get all matches, not the first.  Be case insensitive.\n\t */\n\tvar fixedCss = css.replace(/url\\s*\\(((?:[^)(]|\\((?:[^)(]+|\\([^)(]*\\))*\\))*)\\)/gi, function(fullMatch, origUrl) {\n\t\t// strip quotes (if they exist)\n\t\tvar unquotedOrigUrl = origUrl\n\t\t\t.trim()\n\t\t\t.replace(/^\"(.*)\"$/, function(o, $1){ return $1; })\n\t\t\t.replace(/^'(.*)'$/, function(o, $1){ return $1; });\n\n\t\t// already a full url? no change\n\t\tif (/^(#|data:|http:\\/\\/|https:\\/\\/|file:\\/\\/\\/|\\s*$)/i.test(unquotedOrigUrl)) {\n\t\t  return fullMatch;\n\t\t}\n\n\t\t// convert the url to a full url\n\t\tvar newUrl;\n\n\t\tif (unquotedOrigUrl.indexOf(\"//\") === 0) {\n\t\t  \t//TODO: should we add protocol?\n\t\t\tnewUrl = unquotedOrigUrl;\n\t\t} else if (unquotedOrigUrl.indexOf(\"/\") === 0) {\n\t\t\t// path should be relative to the base url\n\t\t\tnewUrl = baseUrl + unquotedOrigUrl; // already starts with '/'\n\t\t} else {\n\t\t\t// path should be relative to current directory\n\t\t\tnewUrl = currentDir + unquotedOrigUrl.replace(/^\\.\\//, \"\"); // Strip leading './'\n\t\t}\n\n\t\t// send back the fixed url(...)\n\t\treturn \"url(\" + JSON.stringify(newUrl) + \")\";\n\t});\n\n\t// send back the fixed css\n\treturn fixedCss;\n};\n\n\n//# sourceURL=webpack:///./node_modules/style-loader/lib/urls.js?");

/***/ }),

/***/ "./src/Chart/Component/BaseComponent.js":
/*!**********************************************!*\
  !*** ./src/Chart/Component/BaseComponent.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return BaseComponent; });\n/* harmony import */ var _Utils_DocumentHelper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Utils/DocumentHelper */ \"./src/Utils/DocumentHelper.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nvar BaseComponent =\n/*#__PURE__*/\nfunction () {\n  function BaseComponent() {\n    _classCallCheck(this, BaseComponent);\n\n    _defineProperty(this, \"_registeredEventListeners\", []);\n  }\n\n  _createClass(BaseComponent, [{\n    key: \"destroy\",\n    value: function destroy() {\n      this.removeEventListeners();\n    }\n  }, {\n    key: \"addEventListener\",\n    value: function addEventListener(element, type, callback) {\n      element.addEventListener(type, callback);\n\n      this._registeredEventListeners.push({\n        element: element,\n        type: type,\n        callback: callback\n      });\n    }\n  }, {\n    key: \"removeEventListeners\",\n    value: function removeEventListeners() {\n      this._registeredEventListeners.forEach(function (eventListener) {\n        eventListener.element.removeEventListener(eventListener.type, eventListener.callback);\n      });\n    }\n  }, {\n    key: \"addClass\",\n    value: function addClass(element, classes) {\n      return _Utils_DocumentHelper__WEBPACK_IMPORTED_MODULE_0__[\"default\"].addClass(element, classes);\n    }\n  }, {\n    key: \"removeClass\",\n    value: function removeClass(element, classes) {\n      return _Utils_DocumentHelper__WEBPACK_IMPORTED_MODULE_0__[\"default\"].removeClass(element, classes);\n    }\n  }]);\n\n  return BaseComponent;\n}();\n\n\n\n//# sourceURL=webpack:///./src/Chart/Component/BaseComponent.js?");

/***/ }),

/***/ "./src/Chart/Legend/ChartLegend.js":
/*!*****************************************!*\
  !*** ./src/Chart/Legend/ChartLegend.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ChartLegend; });\n/* harmony import */ var _ChartLegend_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ChartLegend.scss */ \"./src/Chart/Legend/ChartLegend.scss\");\n/* harmony import */ var _ChartLegend_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ChartLegend_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _LegendItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LegendItem */ \"./src/Chart/Legend/LegendItem.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nvar DEFAULT_CONSTRUCTOR_PARAMS = {\n  container: null,\n  theme: ''\n};\n\nvar ChartLegend =\n/*#__PURE__*/\nfunction () {\n  function ChartLegend(data) {\n    _classCallCheck(this, ChartLegend);\n\n    _defineProperty(this, \"container\", void 0);\n\n    _defineProperty(this, \"data\", void 0);\n\n    _defineProperty(this, \"legends\", []);\n\n    this.data = data;\n  }\n\n  _createClass(ChartLegend, [{\n    key: \"render\",\n    value: function render(container) {\n      var _this = this;\n\n      var divChartLegend = document.createElement('div');\n      divChartLegend.classList.add('ChartLegend');\n      this.data.lines.forEach(function (chartLine) {\n        var legendItem = new _LegendItem__WEBPACK_IMPORTED_MODULE_1__[\"default\"](chartLine);\n\n        _this.legends.push(legendItem);\n\n        legendItem.render(divChartLegend);\n      });\n      container.appendChild(divChartLegend);\n    }\n  }]);\n\n  return ChartLegend;\n}();\n\n\n\n//# sourceURL=webpack:///./src/Chart/Legend/ChartLegend.js?");

/***/ }),

/***/ "./src/Chart/Legend/ChartLegend.scss":
/*!*******************************************!*\
  !*** ./src/Chart/Legend/ChartLegend.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/lib/loader.js!./ChartLegend.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/Chart/Legend/ChartLegend.scss\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./src/Chart/Legend/ChartLegend.scss?");

/***/ }),

/***/ "./src/Chart/Legend/LegendItem.js":
/*!****************************************!*\
  !*** ./src/Chart/Legend/LegendItem.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return LegendItem; });\n/* harmony import */ var _LegendItem_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LegendItem.scss */ \"./src/Chart/Legend/LegendItem.scss\");\n/* harmony import */ var _LegendItem_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_LegendItem_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Component_BaseComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Component/BaseComponent */ \"./src/Chart/Component/BaseComponent.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nvar DEFAULT_CONSTRUCTOR_PARAMS = {\n  container: null,\n  theme: ''\n};\n\nvar LegendItem =\n/*#__PURE__*/\nfunction (_BaseComponent) {\n  _inherits(LegendItem, _BaseComponent);\n\n  function LegendItem(lineData) {\n    var _this;\n\n    _classCallCheck(this, LegendItem);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(LegendItem).call(this));\n\n    _defineProperty(_assertThisInitialized(_this), \"container\", void 0);\n\n    _defineProperty(_assertThisInitialized(_this), \"name\", void 0);\n\n    _defineProperty(_assertThisInitialized(_this), \"isChecked\", true);\n\n    _this.name = lineData.name;\n    _this.color = lineData.color;\n    _this.onClick = _this.onClick.bind(_assertThisInitialized(_this));\n    return _this;\n  }\n\n  _createClass(LegendItem, [{\n    key: \"onClick\",\n    value: function onClick(event) {\n      var target = event.currentTarget;\n      this.isChecked = !this.isChecked;\n\n      if (this.isChecked) {\n        this.addClass(target, 'checked');\n      } else {\n        this.removeClass(target, 'checked');\n      }\n    }\n  }, {\n    key: \"render\",\n    value: function render(container) {\n      var divLegend = document.createElement('div');\n      divLegend.classList.add('ChartLegend-Item', 'checked');\n      this.addEventListener(divLegend, 'click', this.onClick);\n      var divIcon = document.createElement('div');\n      divIcon.classList.add('ChartLegend-Item-Icon');\n      divIcon.style.backgroundColor = this.color;\n      divLegend.appendChild(divIcon);\n      var divLabel = document.createElement('div');\n      divLabel.classList.add('ChartLegend-Item-Label');\n      divLabel.appendChild(document.createTextNode(this.name));\n      divLegend.appendChild(divLabel);\n      container.appendChild(divLegend);\n    }\n  }]);\n\n  return LegendItem;\n}(_Component_BaseComponent__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n\n\n\n//# sourceURL=webpack:///./src/Chart/Legend/LegendItem.js?");

/***/ }),

/***/ "./src/Chart/Legend/LegendItem.scss":
/*!******************************************!*\
  !*** ./src/Chart/Legend/LegendItem.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/lib/loader.js!./LegendItem.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/Chart/Legend/LegendItem.scss\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./src/Chart/Legend/LegendItem.scss?");

/***/ }),

/***/ "./src/Chart/Navigation/ChartNavigation.js":
/*!*************************************************!*\
  !*** ./src/Chart/Navigation/ChartNavigation.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ChartNavigation; });\n/* harmony import */ var _ChartNavigation_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ChartNavigation.scss */ \"./src/Chart/Navigation/ChartNavigation.scss\");\n/* harmony import */ var _ChartNavigation_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ChartNavigation_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Utils_SVGHelper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Utils/SVGHelper */ \"./src/Utils/SVGHelper.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n\nvar ChartNavigation =\n/*#__PURE__*/\nfunction () {\n  function ChartNavigation(data) {\n    _classCallCheck(this, ChartNavigation);\n\n    this.data = data;\n  }\n\n  _createClass(ChartNavigation, [{\n    key: \"render\",\n    value: function render(container) {\n      var divNavigation = document.createElement('div');\n      divNavigation.classList.add('ChartNavigation');\n      container.appendChild(divNavigation);\n      var width = divNavigation.clientWidth;\n      var height = divNavigation.clientHeight;\n      var svg = _Utils_SVGHelper__WEBPACK_IMPORTED_MODULE_1__[\"default\"].createSVGBox(this.data, width, height);\n      svg.classList.add('ChartNavigation-SVG');\n      divNavigation.appendChild(svg);\n    }\n  }]);\n\n  return ChartNavigation;\n}();\n\n\n\n//# sourceURL=webpack:///./src/Chart/Navigation/ChartNavigation.js?");

/***/ }),

/***/ "./src/Chart/Navigation/ChartNavigation.scss":
/*!***************************************************!*\
  !*** ./src/Chart/Navigation/ChartNavigation.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/lib/loader.js!./ChartNavigation.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/Chart/Navigation/ChartNavigation.scss\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./src/Chart/Navigation/ChartNavigation.scss?");

/***/ }),

/***/ "./src/Chart/SimpleChart.js":
/*!**********************************!*\
  !*** ./src/Chart/SimpleChart.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return SimpleChart; });\n/* harmony import */ var _Legend_ChartLegend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Legend/ChartLegend */ \"./src/Chart/Legend/ChartLegend.js\");\n/* harmony import */ var _Navigation_ChartNavigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Navigation/ChartNavigation */ \"./src/Chart/Navigation/ChartNavigation.js\");\n/* harmony import */ var _SimpleChart_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SimpleChart.scss */ \"./src/Chart/SimpleChart.scss\");\n/* harmony import */ var _SimpleChart_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_SimpleChart_scss__WEBPACK_IMPORTED_MODULE_2__);\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\nvar DEFAULT_CONSTRUCTOR_PARAMS = {\n  data: null\n};\n\nvar SimpleChart =\n/*#__PURE__*/\nfunction () {\n  function SimpleChart(data) {\n    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n\n    _classCallCheck(this, SimpleChart);\n\n    _defineProperty(this, \"data\", void 0);\n\n    _defineProperty(this, \"chartLegend\", void 0);\n\n    _defineProperty(this, \"chartNavigation\", void 0);\n\n    this.data = data;\n\n    var params = _objectSpread({}, DEFAULT_CONSTRUCTOR_PARAMS, options);\n\n    this.chartLegend = new _Legend_ChartLegend__WEBPACK_IMPORTED_MODULE_0__[\"default\"](data);\n    this.chartNavigation = new _Navigation_ChartNavigation__WEBPACK_IMPORTED_MODULE_1__[\"default\"](data);\n  }\n\n  _createClass(SimpleChart, [{\n    key: \"render\",\n    value: function render(container) {\n      var divChart = document.createElement('div');\n      container.appendChild(divChart);\n      divChart.classList.add('SimpleChart');\n      this.chartNavigation.render(divChart);\n      this.chartLegend.render(divChart);\n    }\n  }]);\n\n  return SimpleChart;\n}();\n\n\n\n//# sourceURL=webpack:///./src/Chart/SimpleChart.js?");

/***/ }),

/***/ "./src/Chart/SimpleChart.scss":
/*!************************************!*\
  !*** ./src/Chart/SimpleChart.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/lib/loader.js!./SimpleChart.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/Chart/SimpleChart.scss\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./src/Chart/SimpleChart.scss?");

/***/ }),

/***/ "./src/Utils/DataConverter.js":
/*!************************************!*\
  !*** ./src/Utils/DataConverter.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return DataConverter; });\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance\"); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }\n\nfunction _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); }\n\nfunction _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter); }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar CHART_DATA_TYPE_X = 'x';\nvar CHART_DATA_TYPE_LINE = 'line';\n\nvar DataConverter =\n/*#__PURE__*/\nfunction () {\n  function DataConverter() {\n    _classCallCheck(this, DataConverter);\n  }\n\n  _createClass(DataConverter, null, [{\n    key: \"prepareChartData\",\n    value: function prepareChartData(rawChartData) {\n      var _this = this;\n\n      if (!rawChartData || !rawChartData.types || !rawChartData.columns) {\n        return null;\n      }\n\n      var keys = Object.keys(rawChartData.types);\n\n      if (!keys.length) {\n        return null;\n      }\n\n      var chartLines = [];\n      var chartObjects = {\n        lines: chartLines,\n        minValue: Infinity,\n        maxValue: -Infinity\n      };\n      rawChartData.columns.forEach(function (_ref) {\n        var _ref2 = _toArray(_ref),\n            key = _ref2[0],\n            data = _ref2.slice(1);\n\n        var type = rawChartData.types[key];\n\n        if (type === CHART_DATA_TYPE_LINE) {\n          var lineData = _this.createLineObject(rawChartData, key, data);\n\n          chartObjects.lines.push(lineData);\n          chartObjects.minValue = Math.min(chartObjects.minValue, lineData.minValue);\n          chartObjects.maxValue = Math.max(chartObjects.maxValue, lineData.maxValue);\n        }\n\n        if (type === CHART_DATA_TYPE_X) {\n          if (!chartObjects.x) {\n            chartObjects.x = data;\n          }\n        }\n      });\n      return Object.freeze(chartObjects);\n    }\n  }, {\n    key: \"getRandomColor\",\n    value: function getRandomColor() {\n      var rgb = [0, 0, 0].map(function () {\n        return Math.round(Math.random() * 15).toString(16).repeat(2);\n      });\n      return \"#\".concat(rgb.join(''));\n    }\n  }, {\n    key: \"createLineObject\",\n    value: function createLineObject(rawChartData, key, values) {\n      var line = {\n        key: key,\n        values: values,\n        minValue: Math.min.apply(Math, _toConsumableArray(values)),\n        maxValue: Math.max.apply(Math, _toConsumableArray(values)),\n        name: rawChartData.names[key] || 'unnamed',\n        color: rawChartData.colors[key] || this.getRandomColor()\n      };\n      return Object.freeze(line);\n    }\n  }]);\n\n  return DataConverter;\n}();\n\n\n\n//# sourceURL=webpack:///./src/Utils/DataConverter.js?");

/***/ }),

/***/ "./src/Utils/DocumentHelper.js":
/*!*************************************!*\
  !*** ./src/Utils/DocumentHelper.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return DocumentHelper; });\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance\"); }\n\nfunction _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar DocumentHelper =\n/*#__PURE__*/\nfunction () {\n  function DocumentHelper() {\n    _classCallCheck(this, DocumentHelper);\n  }\n\n  _createClass(DocumentHelper, null, [{\n    key: \"update\",\n    value: function update(callback) {\n      return new Promise(function (resolve) {\n        window.requestAnimationFrame(function () {\n          resolve(callback());\n        });\n      });\n    }\n  }, {\n    key: \"addClass\",\n    value: function addClass(element, classes) {\n      return this.update(function () {\n        if (Array.isArray(classes)) {\n          var _element$classList;\n\n          (_element$classList = element.classList).add.apply(_element$classList, _toConsumableArray(classes));\n        } else {\n          element.classList.add(classes);\n        }\n      });\n    }\n  }, {\n    key: \"removeClass\",\n    value: function removeClass(element, classes) {\n      return this.update(function () {\n        if (Array.isArray(classes)) {\n          var _element$classList2;\n\n          (_element$classList2 = element.classList).remove.apply(_element$classList2, _toConsumableArray(classes));\n        } else {\n          element.classList.remove(classes);\n        }\n      });\n    }\n  }]);\n\n  return DocumentHelper;\n}();\n\n\n\n//# sourceURL=webpack:///./src/Utils/DocumentHelper.js?");

/***/ }),

/***/ "./src/Utils/SVGHelper.js":
/*!********************************!*\
  !*** ./src/Utils/SVGHelper.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return SVGHelper; });\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); }\n\nfunction _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar SVG_NS = 'http://www.w3.org/2000/svg';\n\nvar SVGHelper =\n/*#__PURE__*/\nfunction () {\n  function SVGHelper() {\n    _classCallCheck(this, SVGHelper);\n  }\n\n  _createClass(SVGHelper, null, [{\n    key: \"createNode\",\n    value: function createNode(nodeTag) {\n      var attributes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n      var node = document.createElementNS(SVG_NS, nodeTag);\n      Object.entries(attributes).forEach(function (_ref) {\n        var _ref2 = _slicedToArray(_ref, 2),\n            key = _ref2[0],\n            value = _ref2[1];\n\n        node.setAttributeNS(null, key, value);\n      });\n      return node;\n    }\n  }, {\n    key: \"createPolyline\",\n    value: function createPolyline(chartLine, width, height, maxValue, minValue) {\n      var scaleY = height / (maxValue - minValue || 1);\n      var scaleX = width / (chartLine.values.length - 1 || 1);\n      var polyline = this.createNode('polyline', {\n        fill: 'none',\n        stroke: chartLine.color,\n        'stroke-width': 2,\n        points: chartLine.values.map(function (value, index) {\n          var x = index * scaleX;\n          var y = height - (value - minValue) * scaleY;\n          return \"\".concat(x, \",\").concat(y);\n        }).join(' ')\n      });\n      return polyline;\n    }\n  }, {\n    key: \"createSVGBox\",\n    value: function createSVGBox(chartData, width, height) {\n      var _this = this;\n\n      var svg = this.createNode('svg', {\n        viewBox: \"0 0 \".concat(width, \" \").concat(height)\n      });\n      chartData.lines.forEach(function (chartLine) {\n        svg.appendChild(_this.createPolyline(chartLine, width, height, chartData.maxValue, chartData.minValue));\n      });\n      console.log(svg);\n      return svg;\n    }\n  }]);\n\n  return SVGHelper;\n}();\n\n\n\n//# sourceURL=webpack:///./src/Utils/SVGHelper.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: SimpleChart, DataConverter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Chart_SimpleChart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Chart/SimpleChart */ \"./src/Chart/SimpleChart.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"SimpleChart\", function() { return _Chart_SimpleChart__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n/* harmony import */ var _Utils_DataConverter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Utils/DataConverter */ \"./src/Utils/DataConverter.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"DataConverter\", function() { return _Utils_DataConverter__WEBPACK_IMPORTED_MODULE_1__[\"default\"]; });\n\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });