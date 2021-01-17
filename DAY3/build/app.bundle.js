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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: Cannot find module '@babel/preset-env'\nRequire stack:\n- C:\\xampp\\htdocs\\ES6\\node_modules\\@babel\\core\\lib\\config\\files\\plugins.js\n- C:\\xampp\\htdocs\\ES6\\node_modules\\@babel\\core\\lib\\config\\files\\index.js\n- C:\\xampp\\htdocs\\ES6\\node_modules\\@babel\\core\\lib\\index.js\n- C:\\xampp\\htdocs\\ES6\\node_modules\\babel-loader\\lib\\index.js\n- C:\\xampp\\htdocs\\ES6\\node_modules\\loader-runner\\lib\\loadLoader.js\n- C:\\xampp\\htdocs\\ES6\\node_modules\\loader-runner\\lib\\LoaderRunner.js\n- C:\\xampp\\htdocs\\ES6\\node_modules\\webpack\\lib\\NormalModule.js\n- C:\\xampp\\htdocs\\ES6\\node_modules\\webpack\\lib\\NormalModuleFactory.js\n- C:\\xampp\\htdocs\\ES6\\node_modules\\webpack\\lib\\Compiler.js\n- C:\\xampp\\htdocs\\ES6\\node_modules\\webpack\\lib\\webpack.js\n- C:\\xampp\\htdocs\\ES6\\node_modules\\webpack\\bin\\webpack.js\n    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:623:15)\n    at resolve (internal/modules/cjs/helpers.js:21:19)\n    at resolveStandardizedName (C:\\xampp\\htdocs\\ES6\\node_modules\\@babel\\core\\lib\\config\\files\\plugins.js:100:7)\n    at resolvePreset (C:\\xampp\\htdocs\\ES6\\node_modules\\@babel\\core\\lib\\config\\files\\plugins.js:48:10)\n    at loadPreset (C:\\xampp\\htdocs\\ES6\\node_modules\\@babel\\core\\lib\\config\\files\\plugins.js:67:20)\n    at createDescriptor (C:\\xampp\\htdocs\\ES6\\node_modules\\@babel\\core\\lib\\config\\config-descriptors.js:154:9)\n    at C:\\xampp\\htdocs\\ES6\\node_modules\\@babel\\core\\lib\\config\\config-descriptors.js:109:50\n    at Array.map (<anonymous>)\n    at createDescriptors (C:\\xampp\\htdocs\\ES6\\node_modules\\@babel\\core\\lib\\config\\config-descriptors.js:109:29)\n    at createPresetDescriptors (C:\\xampp\\htdocs\\ES6\\node_modules\\@babel\\core\\lib\\config\\config-descriptors.js:101:10)\n    at C:\\xampp\\htdocs\\ES6\\node_modules\\@babel\\core\\lib\\config\\config-descriptors.js:58:104\n    at cachedFunction (C:\\xampp\\htdocs\\ES6\\node_modules\\@babel\\core\\lib\\config\\caching.js:62:27)\n    at cachedFunction.next (<anonymous>)\n    at evaluateSync (C:\\xampp\\htdocs\\ES6\\node_modules\\gensync\\index.js:251:28)\n    at sync (C:\\xampp\\htdocs\\ES6\\node_modules\\gensync\\index.js:89:14)\n    at presets (C:\\xampp\\htdocs\\ES6\\node_modules\\@babel\\core\\lib\\config\\config-descriptors.js:29:84)\n    at mergeChainOpts (C:\\xampp\\htdocs\\ES6\\node_modules\\@babel\\core\\lib\\config\\config-chain.js:416:26)\n    at C:\\xampp\\htdocs\\ES6\\node_modules\\@babel\\core\\lib\\config\\config-chain.js:374:7\n    at Generator.next (<anonymous>)\n    at buildRootChain (C:\\xampp\\htdocs\\ES6\\node_modules\\@babel\\core\\lib\\config\\config-chain.js:73:36)\n    at buildRootChain.next (<anonymous>)\n    at loadPrivatePartialConfig (C:\\xampp\\htdocs\\ES6\\node_modules\\@babel\\core\\lib\\config\\partial.js:101:62)\n    at loadPrivatePartialConfig.next (<anonymous>)\n    at C:\\xampp\\htdocs\\ES6\\node_modules\\@babel\\core\\lib\\config\\partial.js:140:25\n    at Generator.next (<anonymous>)\n    at step (C:\\xampp\\htdocs\\ES6\\node_modules\\gensync\\index.js:261:32)\n    at evaluateAsync (C:\\xampp\\htdocs\\ES6\\node_modules\\gensync\\index.js:291:5)\n    at C:\\xampp\\htdocs\\ES6\\node_modules\\gensync\\index.js:93:9\n    at new Promise (<anonymous>)\n    at async (C:\\xampp\\htdocs\\ES6\\node_modules\\gensync\\index.js:92:14)");

/***/ })
/******/ ]);