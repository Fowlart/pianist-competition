/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/index.jsx","vendors~main"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/1163023.png":
/*!*************************!*\
  !*** ./src/1163023.png ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var src = __webpack_require__.p + "1163023-6d687835ae2e2a0d6a89e888a694807d.png";module.exports={src:src,width:3840,height:2160,format:"png",toString:function(){return src;}};

/***/ }),

/***/ "./src/App.jsx":
/*!*********************!*\
  !*** ./src/App.jsx ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_MainSection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/MainSection */ "./src/components/MainSection.jsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _store_CardStore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./store/CardStore */ "./src/store/CardStore.jsx");





function App() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.StrictMode, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_2__["Provider"], {
    store: _store_CardStore__WEBPACK_IMPORTED_MODULE_3__["cardStore"]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_MainSection__WEBPACK_IMPORTED_MODULE_1__["MainSection"], null)));
}

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/components/Card.jsx":
/*!*********************************!*\
  !*** ./src/components/Card.jsx ***!
  \*********************************/
/*! exports provided: Button, Card */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return Button; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Card", function() { return Card; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_icons_all__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/all */ "./node_modules/react-icons/all.js");
/* harmony import */ var _hooks_UseWindowDimensions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hooks/UseWindowDimensions */ "./src/hooks/UseWindowDimensions.jsx");




const FilmWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
  font-size: 20px;
  font-family: 'Jura', sans-serif;
  font-weight: 700;
  color: white;
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
  justify-content: center;
`;
const FilmInfo = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
  text-align: left;
  transition: all 0.5s;
  :hover {
    background-color: black;
  }
`;
const IframeBox = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].iframe`
  width: ${props => props.width};
  height: 480px;
  border: solid white 3px;
`;
const Button = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].button`
  color: white;
  transition: all 0.5s;
  background-color: black;
  font-family: 'Jura', sans-serif;
  font-size: 20px;
  padding-top: 10px;
  :hover {
    color: darkred;
  }`;
const Card = props => {
  const {
    height,
    width
  } = Object(_hooks_UseWindowDimensions__WEBPACK_IMPORTED_MODULE_3__["default"])();
  const [calculatedWidth, setCalculatedWidth] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(640); //handling resize

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (width < 1000) setCalculatedWidth(width - 50);else setCalculatedWidth(640);
  }, [width]);
  const [name] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(props.name);
  const [composition] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(props.composition);
  const [videoUrl] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(props.videoUrl);
  const [showIframe, setShowIframe] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const [openVideoButtonName, setOpenVideoButtonName] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("Відкрити відео");

  const openVideoHandler = () => {
    setShowIframe(!showIframe);

    if (showIframe) {
      setOpenVideoButtonName("Відкрити відео");
    } else {
      setOpenVideoButtonName("Закрити відео");
    }
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FilmWrapper, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FilmInfo, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_all__WEBPACK_IMPORTED_MODULE_2__["BsFillPersonFill"], null), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, name)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_all__WEBPACK_IMPORTED_MODULE_2__["FaBookOpen"], null), " ", composition), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Button, {
    onClick: openVideoHandler,
    value: openVideoButtonName
  }, openVideoButtonName), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), showIframe ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(IframeBox, {
    src: videoUrl,
    width: calculatedWidth
  }) : null));
};

/***/ }),

/***/ "./src/components/InfoPage.jsx":
/*!*************************************!*\
  !*** ./src/components/InfoPage.jsx ***!
  \*************************************/
/*! exports provided: LinkContainer, InfoPage2, InfoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinkContainer", function() { return LinkContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoPage2", function() { return InfoPage2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoPage", function() { return InfoPage; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_all__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/all */ "./node_modules/react-icons/all.js");
/* harmony import */ var _1163023_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../1163023.png */ "./src/1163023.png");
/* harmony import */ var _1163023_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_1163023_png__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _info_page_imgs_judges_2023_jpeg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./info-page-imgs/judges_2023.jpeg */ "./src/components/info-page-imgs/judges_2023.jpeg");
/* harmony import */ var _info_page_imgs_judges_2023_jpeg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_info_page_imgs_judges_2023_jpeg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _rfs_page_imgs_rfs_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./rfs-page-imgs/rfs.png */ "./src/components/rfs-page-imgs/rfs.png");
/* harmony import */ var _rfs_page_imgs_rfs_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_rfs_page_imgs_rfs_png__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _info_page_imgs_Poster_2023_ua_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./info-page-imgs/Poster_2023_ua.png */ "./src/components/info-page-imgs/Poster_2023_ua.png");
/* harmony import */ var _info_page_imgs_Poster_2023_ua_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_info_page_imgs_Poster_2023_ua_png__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _info_page_imgs_poster_2023_en_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./info-page-imgs/poster_2023_en.png */ "./src/components/info-page-imgs/poster_2023_en.png");
/* harmony import */ var _info_page_imgs_poster_2023_en_png__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_info_page_imgs_poster_2023_en_png__WEBPACK_IMPORTED_MODULE_7__);








const LinkContainer = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  background-image: url("${_1163023_png__WEBPACK_IMPORTED_MODULE_3___default.a}");
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const PersonInfoSection = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  display: flex;
  flex-direction: column;
`;

const Person = props => {
  const TextSection = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
      font-family: 'Jura', sans-serif;
      background-color: black;
      color: white;
      box-shadow: darkslategray;
      margin-top: 10px;
      margin-bottom: 80px;
      margin-left: 80px;
      margin-right: 80px;
      font-weight: 1000;
      text-align: center;
      font-size: 25px;
      border-radius: 25px;
    `;
  const Image = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].img`
      margin-top: 20px;
      margin-left: 10%;
      left: 40px;
      width: 210px;
      height: 290px;
      border-radius: 25px;
    `;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Image, {
    src: props.imgUrl
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(TextSection, null, props.text));
};

const Div = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  margin-top: 20px;
  margin-bottom: 20px;
  text-align: left;
  display: flex;
  justify-content: center;
  flex-direction: row;
`;
const Div1 = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])(Div)`
  margin-top: 5px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;
const A = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].a`
  text-align: center;
  font-family: "Segoe UI", serif;
  font-weight: 600;
  margin-top: 10px;
  margin-left: 35px;
  font-size: 25px;
  color: white;
  text-decoration: none;
  transition: all 0.5s;

  :hover {
    color: darkred;
  }
`;
const A1 = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])(A)`
  font-style: normal;
  font-size: 30px;
`;
const P = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  left: 400px;
  font-size: 40px;
  font-family: "Segoe UI", serif;
  font-weight: 600;
  color: white;
  text-align: center;
`;

const Poster = props => {
  const PosterImg = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].img`
      margin-top: 2%;
      margin-right: 5%;
      margin-left: 5%;
      margin-bottom: 5%;
      border-radius: 25px;
      filter: drop-shadow(0 0 10px rgba(100, 0, 0, 0.5));
    `;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PosterImg, {
    src: props.imgUrl
  });
};

const InfoPage2 = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Wrapper, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(LinkContainer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(A, {
    href: "https://docs.google.com/document/d/1_n0nBVRw7cT8-zR_CKBQ1Z8jlty-cyIJ/edit?usp=sharing&ouid=113883921299144449053&rtpof=true&sd=true"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_icons_all__WEBPACK_IMPORTED_MODULE_2__["BiLinkExternal"], null), " \u0423\u0447\u0430\u0441\u043D\u0438\u043A\u0438 \u043F\u0440\u043E\u0435\u043A\u0442\u0443 \xAB\u0420\u0456\u0432\u043D\u0435\u043D\u0441\u044C\u043A\u0456 \u0444\u043E\u0440\u0442\u0435\u043F\u0456\u0430\u043D\u043D\u0456 \u0441\u0442\u0443\u0434\u0456\u0456\u0308\xBB 2023 ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(P, null, "\u0417\u0430\u043F\u0440\u043E\u0448\u0443\u0454\u043C\u043E \u0434\u043E \u0443\u0447\u0430\u0441\u0442\u0456 \u0443 \u043F\u0440\u043E\u0435\u043A\u0442\u0456"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Poster, {
    imgUrl: _rfs_page_imgs_rfs_png__WEBPACK_IMPORTED_MODULE_5___default.a
  }));
};
const InfoPage = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Wrapper, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(LinkContainer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(A, {
    href: "https://docs.google.com/document/d/1auoJ8rWsFopRwbNWrEph_DF6BaofMZah/edit?usp=sharing&ouid=113883921299144449053&rtpof=true&sd=true"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_icons_all__WEBPACK_IMPORTED_MODULE_2__["GiPodiumWinner"], null), " \u041B\u0430\u0443\u0440\u0435\u0430\u0442\u0438 2021 "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(A, {
    href: "https://docs.google.com/document/d/1bb9IOUE7IL996NHuLs2qntV2ZS7SNb8h/edit?usp=share_link&ouid=113883921299144449053&rtpof=true&sd=true"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_icons_all__WEBPACK_IMPORTED_MODULE_2__["BiLinkExternal"], null), " \u041F\u043E\u043B\u043E\u0436\u0435\u043D\u043D\u044F"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(A, {
    href: "https://docs.google.com/document/d/156ZGNdnMajHEzjfjrG7bD_-3v9R1GH4w/edit?usp=share_link&ouid=113883921299144449053&rtpof=true&sd=true"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_icons_all__WEBPACK_IMPORTED_MODULE_2__["BiLinkExternal"], null), " \u041E\u0440\u0433\u0430\u043D\u0456\u0437\u0430\u0446\u0456\u0439\u043D\u0438\u0439 \u043A\u043E\u043C\u0456\u0442\u0435\u0442 \u043A\u043E\u043D\u043A\u0443\u0440\u0441\u0443 ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(P, null, "\u0410\u0444\u0456\u0448\u0430(ua)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Poster, {
    imgUrl: _info_page_imgs_Poster_2023_ua_png__WEBPACK_IMPORTED_MODULE_6___default.a
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(P, null, "\u0410\u0444\u0456\u0448\u0430(eng)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Poster, {
    imgUrl: _info_page_imgs_poster_2023_en_png__WEBPACK_IMPORTED_MODULE_7___default.a
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(P, null, "\u0421\u043A\u043B\u0430\u0434 \u0436\u0443\u0440\u0456"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Poster, {
    imgUrl: _info_page_imgs_judges_2023_jpeg__WEBPACK_IMPORTED_MODULE_4___default.a
  }));
};

/***/ }),

/***/ "./src/components/MainSection.jsx":
/*!****************************************!*\
  !*** ./src/components/MainSection.jsx ***!
  \****************************************/
/*! exports provided: MainSection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainSection", function() { return MainSection; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _ResultsFilter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ResultsFilter */ "./src/components/ResultsFilter.jsx");
/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Card */ "./src/components/Card.jsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _RegularHeader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./RegularHeader */ "./src/components/RegularHeader.jsx");
/* harmony import */ var _InfoPage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./InfoPage */ "./src/components/InfoPage.jsx");
/* harmony import */ var _1163023_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../1163023.png */ "./src/1163023.png");
/* harmony import */ var _1163023_png__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_1163023_png__WEBPACK_IMPORTED_MODULE_7__);








const CommonWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
  background-image: url("${_1163023_png__WEBPACK_IMPORTED_MODULE_7___default.a}");
  min-height: 1000px;
`;
const MainSectionFlex = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
`;
const MainSection = () => {
  const cards = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(state => state.cards);
  const isDataInPlace = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(state => state.isDataInPlace);
  const cardCount = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(state => state.cardCount);
  const sectionsForFilter = [`Архівні відео`, `Номінація "Фортепіано соло"`, `Про конкурс`, "Рівненські фортепіаннні студії"];
  let infoPage = cardCount === -1 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_InfoPage__WEBPACK_IMPORTED_MODULE_6__["InfoPage"], null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_InfoPage__WEBPACK_IMPORTED_MODULE_6__["InfoPage2"], null);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CommonWrapper, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_RegularHeader__WEBPACK_IMPORTED_MODULE_5__["RegularHeader"], {
    cardCount: cardCount
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ResultsFilter__WEBPACK_IMPORTED_MODULE_2__["ResultsFilter"], {
    sections: sectionsForFilter
  }), isDataInPlace ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MainSectionFlex, null, cards.map(card => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Card__WEBPACK_IMPORTED_MODULE_3__["Card"], {
    name: card.name,
    videoUrl: card.videoUrl,
    composition: card.composition,
    key: card.id.$oid
  }))) : infoPage);
};

/***/ }),

/***/ "./src/components/RegularHeader.jsx":
/*!******************************************!*\
  !*** ./src/components/RegularHeader.jsx ***!
  \******************************************/
/*! exports provided: Button, RegularHeader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return Button; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegularHeader", function() { return RegularHeader; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_icons_all__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/all */ "./node_modules/react-icons/all.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _hooks_UseWindowDimensions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../hooks/UseWindowDimensions */ "./src/hooks/UseWindowDimensions.jsx");





const Button = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
  padding-top: 8px;
  text-align: center;
  margin-top: 14px;
  font-size: 25px;
  font-family: "Segoe UI", serif;
  width: 15%;
  border: solid white 2px;
  color: white;
  transition: all 0.5s;

  :hover {
    border: solid darkred 2px;
    color: darkred;
  }`;
const Input = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].input`
  font-size: 15px;
  flex-direction: column;
  color: ${props => props.inputColor || "palevioletred"};
`;
const InputStyle = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
  font-size: 20px;
  display: flex;
  flex-direction: column;
  width: 60%;
  height: 50%;
`;
const InputWraper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  height: 60px;
`;
const StyledSpan = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].span`
  color: white;
  font-size: 25px;
  font-family: "Segoe UI", serif;
`;
const Error = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
  margin-top: 17px;
  font-size: 18px;
  color: red;
  text-align: center;`;
const Warn = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
  margin-top: 17px;
  font-size: 18px;
  color: yellow;
  text-align: center;`;
const RegularHeader = props => {
  const searchField = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  const error = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(state => state.error);
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])();
  const {
    height,
    width
  } = Object(_hooks_UseWindowDimensions__WEBPACK_IMPORTED_MODULE_4__["default"])();

  function handler() {
    let str = String(searchField.current.value);

    if (str.length < 3 || str.includes(" ")) {
      dispatch({
        type: "ERROR",
        msg: "Будь ласка введіть більше 3 символів і не використовуйте пробіл"
      });
    } else {
      dispatch({
        type: "SEARCH",
        query: str
      });
    }
  }

  function handleKeyPress(event) {
    if (event.key === 'Enter') {
      handler();
    }
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(InputWraper, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(InputStyle, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledSpan, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_all__WEBPACK_IMPORTED_MODULE_2__["AiOutlineFileSearch"], null), "\u041F\u043E\u0448\u0443\u043A \u0432\u0456\u0434\u0435\u043E \u043F\u043E \u043F\u0440\u0456\u0437\u0432\u0438\u0449\u0443 \u0443\u0447\u0430\u0441\u043D\u0438\u043A\u0430 "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Input, {
    onKeyPress: handleKeyPress,
    ref: searchField,
    type: "text",
    placeholder: "\u0412\u0432\u0435\u0434\u0456\u0442\u044C \u043F\u0440\u0456\u0437\u0432\u0438\u0449\u0435 \u0443\u0447\u0430\u0441\u043D\u0438\u043A\u0430...",
    inputColor: "black"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Button, {
    value: "",
    onClick: handler
  }, "\u041F\u043E\u0448\u0443\u043A")), error !== "" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Error, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_all__WEBPACK_IMPORTED_MODULE_2__["HiOutlineExclamationCircle"], null), error, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_all__WEBPACK_IMPORTED_MODULE_2__["HiOutlineExclamationCircle"], null)) : null, props.cardCount === 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Warn, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_all__WEBPACK_IMPORTED_MODULE_2__["HiOutlineExclamationCircle"], null), "\u0432\u0456\u0434\u0435\u043E \u043D\u0435 \u0437\u043D\u0430\u0439\u0434\u0435\u043D\u0456", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_all__WEBPACK_IMPORTED_MODULE_2__["HiOutlineExclamationCircle"], null)) : null);
};

/***/ }),

/***/ "./src/components/ResultsFilter.jsx":
/*!******************************************!*\
  !*** ./src/components/ResultsFilter.jsx ***!
  \******************************************/
/*! exports provided: DivThinLine, StyledResultsFilterWrapper, ThinLineInnerDiv, ResultsFilter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DivThinLine", function() { return DivThinLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledResultsFilterWrapper", function() { return StyledResultsFilterWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThinLineInnerDiv", function() { return ThinLineInnerDiv; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResultsFilter", function() { return ResultsFilter; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_icons_all__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/all */ "./node_modules/react-icons/all.js");
/* harmony import */ var _hooks_UseWindowDimensions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../hooks/UseWindowDimensions */ "./src/hooks/UseWindowDimensions.jsx");





const FilterContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
  font-size: 25px;
  font-family: "Segoe UI", serif;
  color: #ffffff;
  display: flex;
  flex-direction: row;
  justify-content: left;
  margin-top: 26px;
  flex-wrap: wrap;`;
const FilterSection = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(FilterContainer)`
  align-self: center;
  margin: 14px;
  color: white;
  transition: all 0.5s;
  :hover {
    color: darkred;
  }
`;
const DivThinLine = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
  width: 100%;
  border: gray solid 1px;
  background-color: gray;
  height: 2%;
  transition: all ease;
`;
const StyledResultsFilterWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
`;
const grow_0 = styled_components__WEBPACK_IMPORTED_MODULE_1__["keyframes"]`
  0% {
    width: 100%;
  }
  100% {
    width: ${props => props.width};
  }
  0% {
    left: 0px;
  }
  100% {
    width: ${props => props.left};
  }
`;
const grow_1 = styled_components__WEBPACK_IMPORTED_MODULE_1__["keyframes"]`
  0% {
    width: 100%;
  }
  100% {
    width: ${props => props.width};
  }
  0% {
    left: 1px;
  }
  100% {
    width: ${props => props.left};
  }
`;
const ThinLineInnerDiv = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
  width: ${props => props.width};
  left: ${props => props.left};
  position: relative;
  border: red solid 1px;
  background-color: red;
  height: 1%;
  animation: ${props => props.animation % 2 === 0 ? grow_0 : grow_1} 0.5s linear;
`;
const ResultsFilter = props => {
  const [sections] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(props.sections);
  const [redLineWidth, setRedLineWidth] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("10px");
  const [redLineLeft, setRedLineLeft] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("10px");
  const [animation, setAnimation] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  const {
    height,
    width
  } = Object(_hooks_UseWindowDimensions__WEBPACK_IMPORTED_MODULE_4__["default"])();
  const markedSectionRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(); //handling redLine on resize

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    reRenderRedLin({
      target: markedSectionRef.current
    });
  }, [width]);
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();

  function reRenderRedLin(event) {
    markedSectionRef.current = event.target;
    let currentSectionWidth = event.target.getBoundingClientRect().width;
    let currentSectionLeft = event.target.getBoundingClientRect().left - 10;
    setRedLineWidth(currentSectionWidth + "px");
    setRedLineLeft(currentSectionLeft + "px");
    let counter = animation + 1;
    setAnimation(counter);
  }

  function onFilterSectionClick(selectedSection, event) {
    reRenderRedLin(event);
    let selectedSectionString = selectedSection.section;
    console.log(selectedSectionString);

    switch (selectedSectionString) {
      case `Рівненські фортепіанні студії`:
        dispatch({
          type: "RFS_PAGE"
        });
        break;

      case `Архівні відео`:
        dispatch({
          type: "ARCHIVE"
        });
        break;

      case `Номінація "Фортепіано соло"`:
        dispatch({
          type: "group-1"
        });
        break;

      case `Номінація "Фортепіанний ансамбль"`:
        dispatch({
          type: "group-2"
        });
        break;

      case `Номінація "Концертмейстер"`:
        dispatch({
          type: "group-3"
        });
        break;
    }
  }

  function renderInfoPage(section) {
    if (section[0] === "Рівненські фортепіаннні студії") {
      reRenderRedLin(section[1]);
      dispatch({
        type: "RFS_PAGE"
      });
    } else {
      reRenderRedLin(section[1]);
      dispatch({
        type: "INFO_PAGE"
      });
    }
  }

  let renderedSections = sections.map(section => section === "Про конкурс" || section === "Рівненські фортепіаннні студії" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FilterSection, {
    onClick: () => {
      let sec = [section, event];
      renderInfoPage(sec);
    },
    key: section
  }, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_all__WEBPACK_IMPORTED_MODULE_3__["FaUniversity"], null), section) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FilterSection, {
    ref: markedSectionRef,
    onClick: e => onFilterSectionClick({
      section
    }, e),
    key: section
  }, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_all__WEBPACK_IMPORTED_MODULE_3__["FaFolder"], null), section));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledResultsFilterWrapper, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FilterContainer, {
    children: renderedSections
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DivThinLine, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ThinLineInnerDiv, {
    width: redLineWidth,
    left: redLineLeft,
    animation: animation
  })));
};

/***/ }),

/***/ "./src/components/info-page-imgs/Poster_2023_ua.png":
/*!**********************************************************!*\
  !*** ./src/components/info-page-imgs/Poster_2023_ua.png ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var src = __webpack_require__.p + "Poster_2023_ua-1d16c9288f08c7f4ed571474f60680d7.png";module.exports={src:src,width:2339,height:3308,format:"png",toString:function(){return src;}};

/***/ }),

/***/ "./src/components/info-page-imgs/judges_2023.jpeg":
/*!********************************************************!*\
  !*** ./src/components/info-page-imgs/judges_2023.jpeg ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var src = __webpack_require__.p + "judges_2023-a78638f599a947cb5b98db9f08e33603.jpeg";module.exports={src:src,width:3600,height:5084,format:"jpeg",toString:function(){return src;}};

/***/ }),

/***/ "./src/components/info-page-imgs/poster_2023_en.png":
/*!**********************************************************!*\
  !*** ./src/components/info-page-imgs/poster_2023_en.png ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var src = __webpack_require__.p + "poster_2023_en-0df79305f73a71c8e1f195c484ccbb5c.png";module.exports={src:src,width:2339,height:3308,format:"png",toString:function(){return src;}};

/***/ }),

/***/ "./src/components/rfs-page-imgs/rfs.png":
/*!**********************************************!*\
  !*** ./src/components/rfs-page-imgs/rfs.png ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var src = __webpack_require__.p + "rfs-23a9ff423b656e4f7a1bd42da964369f.png";module.exports={src:src,width:2700,height:3900,format:"png",toString:function(){return src;}};

/***/ }),

/***/ "./src/hooks/UseWindowDimensions.jsx":
/*!*******************************************!*\
  !*** ./src/hooks/UseWindowDimensions.jsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useWindowDimensions; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function getWindowDimensions() {
  const {
    innerWidth: width,
    innerHeight: height
  } = window;
  return {
    width,
    height
  };
}

function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(getWindowDimensions());
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return windowDimensions;
}

/***/ }),

/***/ "./src/index.jsx":
/*!***********************!*\
  !*** ./src/index.jsx ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App */ "./src/App.jsx");



react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App__WEBPACK_IMPORTED_MODULE_2__["default"], null), document.getElementById('target'));

/***/ }),

/***/ "./src/store/Archive.jsx":
/*!*******************************!*\
  !*** ./src/store/Archive.jsx ***!
  \*******************************/
/*! exports provided: archive */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "archive", function() { return archive; });
let myCards = [{
  "id": {
    "$oid": "609853dc683dda47f8b61307"
  },
  "name": "Агратіна Станіслав, 9 років ",
  "composition": "1)М.Глінка. ''Почуття'',      2)Ю.Щуровський. ''Танок''",
  "videoUrl": "https://drive.google.com/file/d/194yt_sKC5Et3r49zCERsdBZeDQgY-G_i/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "609853dc683dda47f8b61308"
  },
  "name": "Валігура Варвара, 9 років ",
  "composition": "М.Лемішко. ''Коломийка''",
  "videoUrl": "https://drive.google.com/file/d/1c6hTIqDl-cAF3Br3l1c2uwqFZsLVSPTv/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "609853dc683dda47f8b61309"
  },
  "name": "Валігура Варвара, 9 років ",
  "composition": "Т.Максімов. ''Задзеркалля''",
  "videoUrl": "https://drive.google.com/file/d/15Yr6Qxm4rstDOMU2vGn5Jwq5VfUpN2SD/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "609853dc683dda47f8b6130a"
  },
  "name": "Василевська Христина,7 років",
  "composition": "1)В.Гіллок.''Самотня бальна зала'',   2)Т.Ростимашенко.''Чаклун''",
  "videoUrl": "https://drive.google.com/file/d/1GtxUKuUkLKAnh5oCf9FluiUTQoJCTbMM/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "609853dc683dda47f8b6130b"
  },
  "name": "Волинець Олександр, 8 років",
  "composition": "1)Л.Колодуб. ''Аркан'',2)Ф.Рибіцький. ''Реготушка''",
  "videoUrl": "https://drive.google.com/file/d/1_COPePzwdgS7U_OjExOpv8noz1miTe8c/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "609853dc683dda47f8b6130c"
  },
  "name": "Галаган Катерина, 9 років ",
  "composition": "1)Ю.Щуровський. Тема з варіаціями, 2)Г.Кушнаренко. ''Мелодія''",
  "videoUrl": "https://drive.google.com/file/d/1oBlUfXWqlh5uDsDFCXbHgc7XGiAJGbLH/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "609853dc683dda47f8b6130d"
  },
  "name": "Герасименко Олександра, 9 років",
  "composition": " 1)В.Рачковський. Токатина. 2)В.Косенко. ''Мелодія''",
  "videoUrl": "https://drive.google.com/file/d/1DGnsSQGlBu8X_oDPt3YKtKmiVzV-G3qJ/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "609853dc683dda47f8b6130e"
  },
  "name": "Голодовська Софія, 7 років",
  "composition": "1)І.Ванхаль.Рондо, 2)М.Дремлюга.''Весела гра''",
  "videoUrl": "https://drive.google.com/file/d/12Kutj-owpsr8helrm_kFZh1yQwMjEC7A/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "609853dc683dda47f8b6130f"
  },
  "name": "Голуб Аліна, 9 років ",
  "composition": "1)М.Клементі. Сонатина до мажор, Іч., 2)Б.Дваріонас. Прелюдія",
  "videoUrl": "https://drive.google.com/file/d/1uwhKMKdJZIhRznM3VU5mTqEuKxxTesaO/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "609853dc683dda47f8b61310"
  },
  "name": "Григор'єва Катерина, 8 років",
  "composition": "1)Ю.Щуровський. ''Ранок'',   2)І.Королькова.''Горобчик''",
  "videoUrl": "https://drive.google.com/file/d/1aiMv5LwYV9m2wz-SJMGnxfUqIRT9M_Ew/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "609853dc683dda47f8b61311"
  },
  "name": "Данюк Єлизавета, 7 років",
  "composition": "1)М.Любарський.''Танцювальна'', 2) Д.Кабалевський. Вальс",
  "videoUrl": "https://drive.google.com/file/d/1vTk_mAB_ECh9VDwR6EMasY1y21KWrSYH/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "609853dc683dda47f8b61312"
  },
  "name": "Дроган  Мілана, 5 років",
  "composition": "1)М.Майєр. ''Весела гра'', 2)Д.Баштейн. ''Вальс слоненят''",
  "videoUrl": "https://drive.google.com/file/d/1Xb0gIgFyCnLuCxjn5klaeQ0Ll9DskRPz/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "609853dc683dda47f8b61313"
  },
  "name": "Дроздова Єлизавета, 9 років ",
  "composition": "1)Й.С.Бах.Менует. 2)Г.Классен. Полька",
  "videoUrl": "https://drive.google.com/file/d/1r5_18pR7BLxDSDEnMD7rHNGjR9ziEiGn/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "609853dc683dda47f8b61314"
  },
  "name": "Збір Марія, 8 років",
  "composition": "1)О.Гедіке. Сонатина до мажор,    І ч., 2)Р.Шуман.''Перша втрата''",
  "videoUrl": "https://drive.google.com/file/d/1_7qn3fTutdKGcGdbgv13rKokJ8jxgk3a/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "609853dc683dda47f8b61315"
  },
  "name": "Іваньків Олександра, 9 років",
  "composition": "1)А.Діабеллі. Скерцо,  2)О.Гедіке. ''Маленька п'єса''",
  "videoUrl": "https://drive.google.com/file/d/1vYeVkRaV1mb33uJ1DGMr20qoikFCr9Ay/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "609853dc683dda47f8b61316"
  },
  "name": "Іванюк Маріам, 8 років",
  "composition": "С.Майкапар. ''Маленька прелюдія'' соль мінор",
  "videoUrl": "https://drive.google.com/file/d/1rRlLMJjoWwTVup7_vVMD4D3nl2Y-lspO/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "609853dc683dda47f8b61317"
  },
  "name": "Іванюк Маріам, 8 років",
  "composition": " В.Кирейко. ''Стриб-скок''",
  "videoUrl": "https://drive.google.com/file/d/1ImpPq9ncbMh5T1ScAHfDmz57BDlLZCF2/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "609853dc683dda47f8b61318"
  },
  "name": "Ісупова Алісія, 8 років ",
  "composition": "1)К.Рейнеке. ''Гавот'', 2)Й.С.Бах. ''Маленька прелюдія'' до мінор",
  "videoUrl": "https://drive.google.com/file/d/10g9CCJoXRzeG8CiFhgnEBzTQBLIWDanA/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "609853dc683dda47f8b61319"
  },
  "name": "Коваленко Варвара, 8 років",
  "composition": "1)О.Геталова.''Ранок в лісі'',  2)В.Подвала. ''Капризуля''",
  "videoUrl": "https://drive.google.com/file/d/1S38_oECOBo7KGDV1azJUx3zOYwgQEQIV/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "609853dc683dda47f8b6131a"
  },
  "name": "Коренівська Дар'я, 9 років ",
  "composition": "1)Р.Вандал.''Водограй'',         2)П.Захаров.''Знайомий силует''",
  "videoUrl": "https://drive.google.com/file/d/19CAzPCaWrAN_SWzaJFdEpxPIOQw-rfLU/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "609853dc683dda47f8b6131b"
  },
  "name": "Костенко Ярослава, 7 років",
  "composition": " В.Косенко. ''Мелодія''",
  "videoUrl": "https://drive.google.com/file/d/1CddYcoygTctoabGQF7pT2poRvCupVG_c/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "609853dc683dda47f8b6131c"
  },
  "name": "Костенко Ярослава, 7 років ",
  "composition": "Й.Йєнсен.''Чарівний танок''",
  "videoUrl": "https://drive.google.com/file/d/1uB29bTPEiYdugJfLOZl4SQGrFY9nQpr-/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "609853dc683dda47f8b6131d"
  },
  "name": "Латковська Єлизавета, 9 років",
  "composition": "1)В.Косенко. Вальс,    2)О.Гречанінов.''Мій коник''",
  "videoUrl": "https://drive.google.com/file/d/16YAw-q7f8F9JBPmfn8tEkpJT81J7EahA/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "609853dc683dda47f8b6131e"
  },
  "name": "Лішман Дарина, 9 років",
  "composition": "1)В.Подвала.''Марш-гротеск'',          2)С.Майкапар. ''Колискова''",
  "videoUrl": "https://drive.google.com/file/d/1NsWz3TR0SKiTtcNCAJe059bhhFomt_NE/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "609853dc683dda47f8b6131f"
  },
  "name": "Магола Софія, 8 років ",
  "composition": "1)Я.Бобалік.''Святкова полька''; 2)І.Беркович. Сонатина соль мажор",
  "videoUrl": "https://drive.google.com/file/d/1guAxs5g_wbGv_twqiypo0e8FHOwum-Ih/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "609853dc683dda47f8b61320"
  },
  "name": "Мазуренко Майя, 8 років",
  "composition": "1)М. Бобер. ''Агент Х'',          2)І.Іордан. ''Полювання на метелика''",
  "videoUrl": "https://drive.google.com/file/d/1Ie1WCQpgPuLYdKNxVGuLkeIVnYJNZJ9T/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "609853dc683dda47f8b61321"
  },
  "name": "Марченко Єлизавета, 9 років",
  "composition": "1)Й.С.Бах.''Маленька прелюдія'' до мінор, 2)П.Чайковський.''Баба Яга''",
  "videoUrl": "https://drive.google.com/file/d/1ZJo4GULZ9sfcUuApF5jyoHIUV_IKAVrg/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "609853dc683dda47f8b61322"
  },
  "name": "Марчук Максим, 8 років",
  "composition": " Ф. Шпіндлер. Сонатина, тв.157 №4",
  "videoUrl": "https://drive.google.com/file/d/1sC7MUjcknrnZZZ5hfMCXbSvs36KA3ppV/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "609853dc683dda47f8b61323"
  },
  "name": "Марчук Максим, 8 років ",
  "composition": "В. Гіллок. ''Капрічієтто''",
  "videoUrl": "https://drive.google.com/file/d/1YdAihvAQkCT8bbyW44pQi2iZhmX1c3Kz/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "609853dc683dda47f8b61324"
  },
  "name": "Мотузкина Лідія, 9 років ",
  "composition": "О.Білаченко. ''Український танок''",
  "videoUrl": "https://drive.google.com/file/d/1bpO9dHAcbP8KlaWT_1nXXQiZebuD8F0p/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "609853dc683dda47f8b61325"
  },
  "name": "Мотузкина Лідія, 9 років",
  "composition": " В.Моцарт. ''Менует''",
  "videoUrl": "https://drive.google.com/file/d/1C_mxAU65VvvvfiPoRQscKR0oUDWpHDQt/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "609853dc683dda47f8b61326"
  },
  "name": "Новосільська Катерина, 7 років ",
  "composition": "1)М.Клементі. Сонатина тв.36, І-ІІІч., 2)І.Беркович. Прелюдія",
  "videoUrl": "https://drive.google.com/file/d/1Y72CFLOMPibwTUPgWOmsQH3YJPviBjDa/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "609853dc683dda47f8b61327"
  },
  "name": "Ольховська Аніта, 9 років",
  "composition": " І.Павлік. ''Сніжинки''",
  "videoUrl": "https://drive.google.com/file/d/1rs-VgFMnIYZVm9kOjNh6FTl_P0CADRB1/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "609853dc683dda47f8b61328"
  },
  "name": "Ольховська Аніта, 9 років ",
  "composition": "Н. Карпенко. Етюд сі мінор",
  "videoUrl": "https://drive.google.com/file/d/1kS3BqQw4-msMoznO3Nz_iWc5ytlJOFTm/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "609853dc683dda47f8b61329"
  },
  "name": "Остапчук Каріна. 8 років",
  "composition": "1)В.Гіллок ''Дзвіночки'', 2)І.Хуторянський. ''Вогнівочка-стрибунівочка''",
  "videoUrl": "https://drive.google.com/file/d/16RAcN2O6kunKZAFrbgBHsENiZg9iKs4G/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "609853dc683dda47f8b6132a"
  },
  "name": "Охрін Ярема, 8 років",
  "composition": "1) Д.Кабалевський. ''Новела'',      2)С.Майкапар.''Токатина''",
  "videoUrl": "https://drive.google.com/file/d/1zw1JK0J4d8Hk-znbv-5oDna-qL3cwREP/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "609853dc683dda47f8b6132b"
  },
  "name": "Павленко Стефанія, 7 років ",
  "composition": "1)М.Любарський. ''Пісня'',2) Д.Кабалевський.''Клоуни''",
  "videoUrl": "https://drive.google.com/file/d/1ImnwJj2Deqz-TJfvXACCrZpiZNT3BnKH/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "609853dc683dda47f8b6132c"
  },
  "name": "Панькова Анна, 8 років ",
  "composition": "1)Й.С.Бах. ''Маленька прелюдія'' до мінор,        2)Л.Шукайло. ''Інтермецо''",
  "videoUrl": "https://drive.google.com/file/d/1yrAHr6i17NShP5qaImPnWx-xJQjCMMy2/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "609853dc683dda47f8b6132d"
  },
  "name": "Парфьонов Дмитро, 9 років",
  "composition": "1)Н.Владикіна-Бачинська.''Щось сумне'', 2)О.Гедіке. ''Танець''",
  "videoUrl": "https://drive.google.com/file/d/1NDdw57RsrmLrE_yWSG0uFJXEjWcGqGmR/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "609853dc683dda47f8b6132e"
  },
  "name": "Погорєлов Артем, 9 років",
  "composition": "1)Й.С.Бах. ''Менует'', 2)Н.Нижанківський. ''Коломийка''",
  "videoUrl": "https://drive.google.com/file/d/1ne86iM-NUs6NcioBsvUjfQa6Mn7cSAR7/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "609853dc683dda47f8b6132f"
  },
  "name": "Пузанова Марія, 9 років",
  "composition": "1)У. Гіллок. ''Королівський менует'', 2)І.Іордан. «Полювання на метелика»",
  "videoUrl": "https://drive.google.com/file/d/1OGS_fqzJvbB7aNPrexwqDK5x0ls-20CC/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "609853dc683dda47f8b61330"
  },
  "name": "Резнік Тетяна, 9 років",
  "composition": "1)Н.Торопова. Варіації,     2)Д.Кабалевський. ''Маленький жонглер''",
  "videoUrl": "https://drive.google.com/file/d/1xGxNTTtWrhdOu6Y7GueUAgGXvjoLlMBl/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "609853dc683dda47f8b61331"
  },
  "name": "Рибак Анастасія, 8 років",
  "composition": "1).Мелартін.''Ранок'', 2)М.Майєр.''Незвичайна пригода''",
  "videoUrl": "https://drive.google.com/file/d/1uzmVqFVnnQaIGX7o3H-7tNe0kp1ZiUvP/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "609853dc683dda47f8b61332"
  },
  "name": "Ріпний Богдан, 8 років",
  "composition": " 1)І. Беркович. Варіації,     2)Д. Роулі.''В країні гномів''",
  "videoUrl": "https://drive.google.com/file/d/1Qlr1_-pFAlLIixKkhx2-ZxxEYZhAZ9Z7/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "609853dc683dda47f8b61333"
  },
  "name": "Романченко Елисей, 8 років",
  "composition": " 1)Ш.Гуно.''Марш маріонеток'',   2) О.Гречанінов.''Незвичайна пригода''",
  "videoUrl": "https://drive.google.com/file/d/1iI-zjq4QimDL9TLE5BRYurmuAL16fScU/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "609853dc683dda47f8b61334"
  },
  "name": "Сайчук Ярослава, 9 років ",
  "composition": "Т. Максимов.''Баба Яга''",
  "videoUrl": "https://drive.google.com/file/d/1X5C7kfNd3QloZl0TAvN_AQh0-qXtpSSB/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "609853dc683dda47f8b61335"
  },
  "name": "Сайчук Ярослава, 9 років",
  "composition": " К.Роллін. '' Шоколадне печиво''",
  "videoUrl": "https://drive.google.com/file/d/16vYm_EdDx_-3BRHJMyD35k3oC4F2tV56/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "609853dc683dda47f8b61336"
  },
  "name": "Сітшаєва Зарема, 9 років",
  "composition": "1) Л.Бетховен. Сонатина до мажор; 2)К.Слонімський. ''Дюймовочка''",
  "videoUrl": "https://drive.google.com/file/d/1H6edQtsRp0_wcuOYRAEh1lffRz0TXtib/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "609853dc683dda47f8b61337"
  },
  "name": "Смірнова Євгенія, 9 років",
  "composition": "1)В.Квасневський.''Думка'', 2)Д.Александер. ''Зимова рапсодія''",
  "videoUrl": "https://drive.google.com/file/d/16LW9EesPPs1STi6kQpQxdEJzk3PgnHYj/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "609853dc683dda47f8b61338"
  },
  "name": "Стрийська Амелія, 8 років",
  "composition": " 1)В.Косенко.''Дощик'';      2)О.Білаченко. ''Експромт''",
  "videoUrl": "https://drive.google.com/file/d/10h9ONRG2T42vxAlWy4ASP0qga8IU02rv/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "609853dc683dda47f8b61339"
  },
  "name": "Студзинська Єлизавета, 7 років",
  "composition": "1) Л. Моцарт. ''Менует'',    2)У. Гіллок. ''Осінній ескіз''",
  "videoUrl": "https://drive.google.com/file/d/1VdsObub9Z0E7ZM1QYMsfqkaljnnLQ2je/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "609853dc683dda47f8b6133a"
  },
  "name": "Сухан Діана, 8 років ",
  "composition": "1)Л.Шукайло.Варіації на тему В.Шаїнського; 2)Р.Фучс.''Маленьке розбите серце''",
  "videoUrl": "https://drive.google.com/file/d/1Gu5ucoCGFhyEnMh3-IDUJ-uF0Tuj37UZ/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "609853dc683dda47f8b6133b"
  },
  "name": "Терп'як Аарон, 9 років",
  "composition": "1) І.Беркович. Варіації на українську тему; 2)Т.Остен. ''Маленький ельф''",
  "videoUrl": "https://drive.google.com/file/d/1ZtQbNBBgGmOzMWnnHAF-7_CBsXk3Lw-2/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "609853dc683dda47f8b6133c"
  },
  "name": "Тимченко Надія, 8 років ",
  "composition": "1)А.Штогаренко. ''Метелик'', 2)В.Гіллок. ''Місячне сяйво''",
  "videoUrl": "https://drive.google.com/file/d/1PS9AGHyEDqstjqA1MiEbTkp5j1UuShrG/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "609853dc683dda47f8b6133d"
  },
  "name": "Тіщенко Вероніка, 7 років",
  "composition": "1)Й.С.Бах. ''Маленька прелюдія'' до мінор, 2)Л. Шукайло. Варіації",
  "videoUrl": "https://drive.google.com/file/d/1Ftrj9k5jhDxVi5ufhXY3THkwOK8Y12Hm/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "609853dc683dda47f8b6133e"
  },
  "name": "Тодорова Даяна, 6 років",
  "composition": "1)В.Барвінський. ''Зайчик'',          2)М.Любарський. ''Плясова''",
  "videoUrl": "https://drive.google.com/file/d/1PAzIBtjG0NfqazUI25HsRrFVXjLyz2Bi/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "609853dc683dda47f8b6133f"
  },
  "name": "Тонієвич Ксенія, 9 років",
  "composition": "1)О.Спіліоті.''Гуцулята'',   2)В.Гіллок.''У старому Відні''",
  "videoUrl": "https://drive.google.com/file/d/119w3wnHMp6XNWSKKr9VJIoYjVIP9MlAO/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "609853dc683dda47f8b61340"
  },
  "name": "Тютько Володимир, 9 років",
  "composition": "1)Ф.Кулау.Сонатина, тв.55 №3, 2)Р.Лісова.''Веселий настрій''",
  "videoUrl": "https://drive.google.com/file/d/1bg-HK7Lp3UwjGk3MITTdD9eQ7rFdhx1H/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "609853dc683dda47f8b61341"
  },
  "name": "Фесенко Анна, 8 років ",
  "composition": "1)А.Гедіке.Сонатина до мажор,  2)В.Гаврилін. ''Капріччіо''",
  "videoUrl": "https://drive.google.com/file/d/1Ejrq8ZEXBJq_ANfAiY-5jKH7Rs58fLuC/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "609853dc683dda47f8b61342"
  },
  "name": "Чорней Яна, 7 років ",
  "composition": "1)М. Екштейн. ''Каприз гномів'';  2)С.Юферов. ''Ноктюрн''",
  "videoUrl": "https://drive.google.com/file/d/1g6bB7aqWptw5lLnAiXklOFpQl4X0NLKj/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "609853dc683dda47f8b61343"
  },
  "name": "Шкурко Тимофій, 9 років ",
  "composition": "1)Ф.Шопен. ''Вальс'' ля мінор,     2)Л.Шукайло. ''Весела мозаїка''",
  "videoUrl": "https://drive.google.com/file/d/1eJJ44ZbgTrUTdH-tBPKGyc1K_0rryj4_/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "609853dc683dda47f8b61344"
  },
  "name": "Юрчук Яна, 7 років",
  "composition": " 1)М. Клементі. Сонатина, тв.36 №1, І ч.,2)П.Чайковський. ''Вранішня молитва''",
  "videoUrl": "https://drive.google.com/file/d/1oPUuH2qzaQULypvuy3M6Q-f7vvhZlAnx/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985400683dda47f8b61345"
  },
  "name": "Аміхалакіоає Ємельян, 10 років",
  "composition": "1)О.Білаченко.''Осінній ескіз'', 2)М.Кармінський. ''Гумореска''",
  "videoUrl": " https://drive.google.com/file/d/1zfqkyG6BpZ3_1XXdf_FVYOWFmpakjWWP/preview ",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985400683dda47f8b61346"
  },
  "name": "Антонюк Варвара, 12 років ",
  "composition": "І.Плейєль. Сонатина ре мажор",
  "videoUrl": " https://drive.google.com/file/d/1DJeHf3fAuZ55Pf65mMAtw2Pct96dfa-t/preview ",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985400683dda47f8b61347"
  },
  "name": "Антонюк Варвара, 12 років ",
  "composition": "С.Майкапар.''В ковальні''",
  "videoUrl": " https://drive.google.com/file/d/1lXyKuwM_JgxYZl6eWkAseU6vNaWz7pYz/preview ",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985400683dda47f8b61348"
  },
  "name": "Бабчанік Андрій, 10 років ",
  "composition": "1)Д.Чимароза. Сонатина соль мажор. 2)Ю.Білковський. ''Роздуми''",
  "videoUrl": " https://drive.google.com/file/d/1UHAsNKjcJiBgxAdILOsjDERJKQMzeq7A/preview ",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985400683dda47f8b61349"
  },
  "name": "Балута Аліна, 10 років",
  "composition": " 1) Е.Гріг. ''Танець з Йольстера'', 2)Л.Забара.''Ніч яка місячна''",
  "videoUrl": " https://drive.google.com/file/d/1oXGF3m41K-QN8Y1-W_j85DrTjkk88sQX/preview ",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985400683dda47f8b6134a"
  },
  "name": "Басиста Олександра, 12 років",
  "composition": " 1)Ф.Шопен. Вальс, тв.64 №1, 2)С.Борткевич. Прелюдія, тв.6 №1",
  "videoUrl": " https://drive.google.com/file/d/1sPWZSPn4UMJVdfz73graDwdwIxyXgjBY/preview ",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985400683dda47f8b6134b"
  },
  "name": "Білінкевич Наталія, 12 років",
  "composition": "1) М.Лисенко. Елегія,2)К.Черні. Етюд №1 тв.740",
  "videoUrl": " https://drive.google.com/file/d/1AR_WW0CFSSCXzVAfrHXuwBAD-_QC8j6W/preview ",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985400683dda47f8b6134c"
  },
  "name": "Бульковська Марина, 10 років",
  "composition": " Д.Чімароза. Соната соль мажор",
  "videoUrl": " https://drive.google.com/file/d/1boxdtgAdhBIJdtcxdznZHP-q5faqa5QK/preview ",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985400683dda47f8b6134d"
  },
  "name": "Бульковська Марина, 10 років",
  "composition": "К.Габел. ''Дерево життя''",
  "videoUrl": " https://drive.google.com/file/d/1fXZ6NdsN6u78tI6erKEjX2ofesHB2ebh/preview ",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985400683dda47f8b6134e"
  },
  "name": "Вакуленко Аріна, 10 років ",
  "composition": "І.Беркович. Варіації на тему грузинської народної пісні ''Світлячок''",
  "videoUrl": " https://drive.google.com/file/d/1CdtXoVzjEl1YqVCdByxKsZdqEjft1hs6/preview ",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985400683dda47f8b6134f"
  },
  "name": "Вакуленко Аріна, 10 років ",
  "composition": "С.Джоплін.''Артист естради''",
  "videoUrl": " https://drive.google.com/file/d/1GntiYvLzHrUXIsWDfdHp40-tt5yYuigq/preview ",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985400683dda47f8b61350"
  },
  "name": "Васильєва Вероніка, 12 років",
  "composition": "1)Р.Глієр. Прелюдія до мінор;2)С.Джербашян. ''Швидкий рух''",
  "videoUrl": " https://drive.google.com/file/d/1QBgtdhw2IQeTH6QEYnKLGBalX0K2upN4/preview ",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985400683dda47f8b61351"
  },
  "name": "Войтенко Лілія, 10 років",
  "composition": "1) Л. Шукайло.''Поні'', 2)О.Рибалова. ''Непосида''",
  "videoUrl": " https://drive.google.com/file/d/1-L_kJHu1PpkPGRCJ_EfxFLBbmc8fOOwq/preview ",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985400683dda47f8b61352"
  },
  "name": "Войченко Владислав, 11 років",
  "composition": " 1) Й.С.Бах.Двоголосна інвенція фа мажор; 2)Ф.Шопен. Ноктюрн до дієз мінор",
  "videoUrl": " https://drive.google.com/file/d/1wu5klXGG7Bh2fPlR3YbeMlSKZBT8PRnN/preview ",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985400683dda47f8b61353"
  },
  "name": "Вощинський Ілля, 12 років",
  "composition": "1)Е.Гріг. Ноктюрн, 2)М.Римський-Корсаков. ''Політ джмеля''",
  "videoUrl": " https://drive.google.com/file/d/17lbS0L956aNZ9D0GTI-p-k39z4lpehC7/preview ",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985400683dda47f8b61354"
  },
  "name": "Галечев Іван, 11 років",
  "composition": " 1)Обр. Г.Без'язичного. ''Ніч яка місячна'', 2)П.Чайковський. ''Неаполітанська пісенька''",
  "videoUrl": " https://drive.google.com/file/d/14-Z82vYkVF1x2NpnqK1_xhAf2bWuaPQV/preview ",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985400683dda47f8b61355"
  },
  "name": "Гамзалієва Зейнаб, 12 років",
  "composition": "Білорус. нар.пісня ''Бульба'', обр.Д.Льва-Компанійця",
  "videoUrl": " https://drive.google.com/file/d/1dQqGFphOGo0VpGoUd4z4U3en9LTc19pk/preview ",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985400683dda47f8b61356"
  },
  "name": "Гамзалієва Зейнаб, 12 років ",
  "composition": "Й.Гайдн. Менует",
  "videoUrl": " https://drive.google.com/file/d/1Ww_800JPvH69YtjONECJH8VtZ_eZkkyk/preview ",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985400683dda47f8b61357"
  },
  "name": "Гіліна Олександра, 11 років",
  "composition": "1)В.МоцартАрія; 2)Д.Градескі.''Морозиво. Регтайм''",
  "videoUrl": " https://drive.google.com/file/d/1f3K50GVcw8ksdYgRMxV61adRAFH5PKMw/preview ",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985400683dda47f8b61358"
  },
  "name": "Горай Ярослав,12 років",
  "composition": "1)М.Скорик ''Мелодія'',         2) П.Базала. ''Потік''",
  "videoUrl": " https://drive.google.com/file/d/1UCbn7xPvEbrHCpMThnCIj5Qtgn6rVS_f/preview ",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985400683dda47f8b61359"
  },
  "name": "Гоцуленко Вікторія, 12 років",
  "composition": "1)Й.Бах. Двоголосна інвенція ля мінор, 2) Ф.Шопен. Ноктюрн №21",
  "videoUrl": " https://drive.google.com/file/d/171ICM_7Ghrao1RN6ug0XLoRNJKobaRGQ/preview ",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985400683dda47f8b6135a"
  },
  "name": "Гукасян Ліана, 10 років",
  "composition": "А.Хачатурян. \"Андантіно\"",
  "videoUrl": " https://drive.google.com/file/d/12IdAfSi_waU6lrNfUvP2H0x0WO78aMGa/preview ",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985400683dda47f8b6135aa"
  },
  "name": "Гукасян Ліана, 10 років",
  "composition": "Л.Хеллер. Сонатина",
  "videoUrl": " https://drive.google.com/file/d/1ktOVC3TR_AE4uRbG62OxNKVjoNJqiuPm/preview ",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985400683dda47f8b6135b"
  },
  "name": "Гуляєва Єва, 11років",
  "composition": "1)П. Захаров.''Елегія'', 2) Г.Валленгаупт. ''Скерцино''",
  "videoUrl": " https://drive.google.com/file/d/1rbcm7F_BfAeqMEzfQhZ6fF3Y21a7rYsw/preview ",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985400683dda47f8b6135c"
  },
  "name": "Гутник  Кірена, 10 років ",
  "composition": "Л.Шітте.''Танець  гномів''",
  "videoUrl": " https://drive.google.com/file/d/1niDqNiCJu3CLS3EG5BWHuB_Aq7v45Rs3/preview ",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985400683dda47f8b6135d"
  },
  "name": "Гутник Кірена, 10 років",
  "composition": " О.Соловяненко.''Поні біля цирку''",
  "videoUrl": " https://drive.google.com/file/d/1h7q0YaYiy6A6s6Bpw_TxtzrwwS_Az9Lx/preview ",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985400683dda47f8b6135e"
  },
  "name": "Дорошенко Юлія, 10 років",
  "composition": "1) М. Клементі. Сонатина, тв.36 №6, І ч; 2) І.Беркович. Прелюдія, тв.46 №15",
  "videoUrl": " https://drive.google.com/file/d/1GlFCLC3x_1tZCOfmNhN0m4T0POJYBTjN/preview ",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985400683dda47f8b6135f"
  },
  "name": "Дудін Дмитро, 11 років ",
  "composition": "1)Л.Бетховен. Сонатина соль мажор,І-ІІ ч.; 2)С.Прокоф'єв. ''Казочка''",
  "videoUrl": " https://drive.google.com/file/d/1xbm4x-VfzHzuzB4jThbsPh8IaCa94ttB/preview ",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985400683dda47f8b61360"
  },
  "name": "Єрмоленко Дарина, 12 років ",
  "composition": "Й.С. Бах. Арія ре мажор",
  "videoUrl": " https://drive.google.com/file/d/1u7M6CXiysUfJuu6M-AvB774Wen0AnuZN/preview ",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985400683dda47f8b61361"
  },
  "name": "Єрмоленко Дарина, 12 років",
  "composition": "О. Білаш. ''Баркарола''",
  "videoUrl": " https://drive.google.com/file/d/1hORf4uVvoW54pTCxgK2zImgxYxH47Yoo/preview ",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985400683dda47f8b61362"
  },
  "name": "Загаєвська Софія, 12 років ",
  "composition": "1)А.Классен ''Музичний ескіз''№1, 2)О.Кимлик.''Леонтовіана''",
  "videoUrl": " https://drive.google.com/file/d/1w1TPh9JXsAje_KpE9QPp5Iv0EujmvjG-/preview ",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985400683dda47f8b61363"
  },
  "name": "Іваннікова Марія, 11 років",
  "composition": "1)В.Моцарт. Соната №16, І частина,  2)О.Грибоєдов. Вальс",
  "videoUrl": " https://drive.google.com/file/d/1X1vhsTIPkI5zis22JHOXxQUDdOBe9A9G/preview ",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985400683dda47f8b61364"
  },
  "name": "Іванюк Вірсавія,10 років",
  "composition": "1)О.Ходош.''Червона шапочка'', 2)І.Щербаков.''Елегія київських пагорбів''",
  "videoUrl": " https://drive.google.com/file/d/1M7I1QJbFkWBQHwK1lHKoyoE30l-Wc12m/preview ",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985400683dda47f8b61365"
  },
  "name": "Ївженко Ада, 12 років",
  "composition": "1)М.Клементі.Сонатина соль мажор, 2)М.Скорик. ''Народний танець''",
  "videoUrl": " https://drive.google.com/file/d/1kpm6k0MCtujg7sPH9dcodY0kz1BrGEX9/preview ",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985400683dda47f8b61366"
  },
  "name": "Каманчи Єлизавета, 12 років",
  "composition": "1)В.Калістратов.''Коник Горбоконик'', 2)Ю.Весняк. ''Ніжність''",
  "videoUrl": " https://drive.google.com/file/d/1mlWaLYsD8fkBQHgdrX-RfNCkd6wRrPkO/preview ",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985400683dda47f8b61367"
  },
  "name": "Карашкевич Христина, 11 років ",
  "composition": "1)Й.С.Бах. Триголосна інвенція ре мінор, 2)М.Дремлюга. ''Скерцо''",
  "videoUrl": " https://drive.google.com/file/d/1EBGhNIptJSei0GZLKpsfyaIhi3Uae0cH/preview ",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985400683dda47f8b61368"
  },
  "name": "Кіцера Аліна, 11 років",
  "composition": "1)К.Дебюссі ''Романтичний вальс'', 2)Б.Фільц. ''Скерцо''",
  "videoUrl": " https://drive.google.com/file/d/1Novsog_w52pzGkfJ2hZxihv33C2cSf0J/preview ",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985400683dda47f8b61369"
  },
  "name": "Король Єлізавета, 10 років ",
  "composition": "1) П.Чайковський.''Пісня жайворонка''; 2)Л.Шукайло. Прелюдія",
  "videoUrl": " https://drive.google.com/file/d/1kbrGl8_IhfqnjkvTvoWh79mgm9pQ5kTJ/preview ",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985400683dda47f8b6136a"
  },
  "name": "Котляревська Юлія, 11 років",
  "composition": " Й. Гайдн. Соната соль мажор, Іч.",
  "videoUrl": " https://drive.google.com/file/d/1FAWHHKQ5ox0ETJLvurrRgZ2dOm1vtFke/preview ",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985400683dda47f8b6136b"
  },
  "name": "Котляревська Юлія, 11 років ",
  "composition": "'Гандзя'', обр.Є Веврика",
  "videoUrl": " https://drive.google.com/file/d/1kIvdsvIrxeo816d-_MV5nbbcr-aOZhEp/preview ",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985400683dda47f8b6136c"
  },
  "name": "Котова Марія, 10 років ",
  "composition": "1)О.Ключарьов.''Шуралє'', 2)Ф.Мендельсон.''Пісня без слів'', тв.19 №2",
  "videoUrl": " https://drive.google.com/file/d/1Y1cW_2ZiwBEN0Yc1KrWWncX376zgaD5B/preview ",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985400683dda47f8b6136d"
  },
  "name": "Кривобабко Ксенія, 10 років",
  "composition": " Л.Шукайло. ''Весняні  краплинки''",
  "videoUrl": " https://drive.google.com/file/d/1dIJgkLIO2e7lcNpuARjxmudw03xjnc32/preview ",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985400683dda47f8b6136e"
  },
  "name": "Кривобабко Ксенія, 10 років ",
  "composition": "Н.Карпенко. Етюд  ре мінор",
  "videoUrl": " https://drive.google.com/file/d/1B4-EbRYO-bcCjfuppeHXShv5DQzui9hA/preview ",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985400683dda47f8b6136f"
  },
  "name": "Кутковська Лариса, 12 років",
  "composition": " 1)Е.Гріг. ''Ноктюрн'', тв.54 №4, 2)Т.Кулієв. ''Лезгінка''",
  "videoUrl": " https://drive.google.com/file/d/11cmQBdsm2epwZS_mUJx3gp1W582ZyWd7/preview ",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985400683dda47f8b61370"
  },
  "name": "Лiзогуб Арсен, 10 років",
  "composition": "1)Г.Сасько.''Регтайм'', 2)П.Захаров.''Старовинна балада''",
  "videoUrl": " https://drive.google.com/file/d/11SFkWFvWn_UGNJK7c7Z1LlJ2NasM9Ksg/preview ",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985400683dda47f8b61371"
  },
  "name": "Ланський Євген, 10 років ",
  "composition": "1)П.Чайковський.''Ранкова молитва'', тв.39, 2)І.Беркович. Токата ля мінор",
  "videoUrl": " https://drive.google.com/file/d/1VnPFLs5xHCt0TL2sd1E9WWyhTB8kGTuh/preview ",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985400683dda47f8b61372"
  },
  "name": "Левандівська Марта, 10 років ",
  "composition": "В.Барвінський. ''Український танець''",
  "videoUrl": " https://drive.google.com/file/d/1FVjxAeB3dOzJpATDXyI-1ABtRizjzjod/preview ",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985400683dda47f8b61373"
  },
  "name": "Левандівська Марта, 10 років",
  "composition": " Я. Сібеліус. Етюд тв. 76 №2",
  "videoUrl": " https://drive.google.com/file/d/18K7rgRzjCqZ-_5EWr0EoE5JlnTyhgZS4/preview ",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985400683dda47f8b61374"
  },
  "name": "Леза Анна, 11 років ",
  "composition": "1) Ф.Шопен. Ноктюрн №20, 2)П.Захаров. ''Рондо-галоп''",
  "videoUrl": " https://drive.google.com/file/d/1Twf2sJ3_9Ar3oOTmZWKv6q8SMa9fGa-p/preview ",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985400683dda47f8b61375"
  },
  "name": "Ликова Варвара, 11 років",
  "composition": "1) В.Гіллок.''Bill bailey'', 2)Ю.Щуровський. ''Шарманка''",
  "videoUrl": " https://drive.google.com/file/d/1dE5LcfV-T8QhLXiAfn8sxLEMecvgS-hO/preview ",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985400683dda47f8b61376"
  },
  "name": "Лілік Марія-Магдалина, 11 років ",
  "composition": "1)Ф.Шопен. ''Аркуш з альбома'' мі бемоль мажор, 2)М.Колесса. ''Скерцино''",
  "videoUrl": " https://drive.google.com/file/d/1qticduAQQm72Ncy8e-st6nkjqwBrFSTe/preview ",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985400683dda47f8b61377"
  },
  "name": "Макаревич Андрій-Олександр, 11 років ",
  "composition": "1)Й.С.Бах. Триголосна інвенція ре мажор, 2)К.Черні. Етюд №5, тв.299",
  "videoUrl": " https://drive.google.com/file/d/1iVuBPfw4HncPJkJn2yNZZw8UXlUXJHVc/preview ",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985400683dda47f8b61378"
  },
  "name": "Маціборська Анна, 10 років",
  "composition": "1) Й. Бах. Двоголосна інвенція сі бемоль мажор,    2) Ф. Якименко. ''Елегія''",
  "videoUrl": " https://drive.google.com/file/d/1SrYttJFdizsuBe0yNsKrNDgJUP_AihaN/preview ",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985400683dda47f8b61379"
  },
  "name": "Мельник Михайло, 10 років",
  "composition": "1)М.Клементі. сонатина до мажор, 2)В.Косенко. ''Дощик''",
  "videoUrl": " https://drive.google.com/file/d/1c0pWjGogDaEYCRCskzcq9VdUlHy-hshG/preview ",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985400683dda47f8b6137a"
  },
  "name": "Меркулова Марія, 10 років ",
  "composition": "1) Д.Чімароза.Соната соль мажор; 2) М. Жербін. Вальс",
  "videoUrl": " https://drive.google.com/file/d/1j5pED7wQ3AHP0pNx9VO4Pp8dril9aMzf/preview ",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985400683dda47f8b6137b"
  },
  "name": "Мигалюк Ріанна, 11 років",
  "composition": "1)Н.Нижанківський. ''Коломийка'',   2)В.Гіллок.''Карнавал в Ріо''",
  "videoUrl": " https://drive.google.com/file/d/1p5SMOeBaUz0jzX8A0l6X4N9yvtwG0w8m/preview ",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985400683dda47f8b6137c"
  },
  "name": "Миргород Всеволод,12 років",
  "composition": "1)Ф.Кулау. Сонатина фа мажор,І ч.; 2)М.Лисенко. ''Елегія''",
  "videoUrl": " https://drive.google.com/file/d/1kpxsuRJnl3t64lbO8viVgfGsw_aMkRSm/preview ",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985400683dda47f8b6137d"
  },
  "name": "Морозова Тетяна, 11 років ",
  "composition": "Й.Бенда.Сонатина",
  "videoUrl": " https://drive.google.com/file/d/15u4oK4uIv923BbhwHuQxc2kb2zW4DImG/preview ",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985400683dda47f8b6137dd"
  },
  "name": "Морозова Тетяна, 11 років ",
  "composition": "С.Шевченко \"Вечір\"",
  "videoUrl": " https://drive.google.com/file/d/1Fy-L04EAfcq7I1bRpx5pE8lydIByT3SF/preview ",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985400683dda47f8b6137e"
  },
  "name": "Мунтян Наталія, 10 років ",
  "composition": "1)Ю.Щуровський. Тема з варіаціями,       2)Л.Шитте.''Іскри''",
  "videoUrl": " https://drive.google.com/file/d/1VjNHcWWgtmbakUXmpc3h7fhoN5gps9RV/preview ",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985400683dda47f8b6137f"
  },
  "name": "Оборкіна Олександра, 11 років",
  "composition": "1)Е.Гріг.''Мелодія'',    2)Л.Шукайло. ''Багатель'' №5",
  "videoUrl": " https://drive.google.com/file/d/1ch2wvzxtR7ER2-6iDLUgvCAquUiv8dVf/preview ",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985400683dda47f8b61380"
  },
  "name": "Пендюр Софія, 11 років",
  "composition": "1) О.Даргомижський.''Вальс'', 2)М.Скорик.''Народний танець''",
  "videoUrl": " https://drive.google.com/file/d/1sDG6wngpKHcMSOaOi_YlUGkucadBApBJ/preview ",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985400683dda47f8b61381"
  },
  "name": "Перетятько Анастасія, 10 років ",
  "composition": "Е.Гріг. ''Танець із Йольстера''",
  "videoUrl": " https://drive.google.com/file/d/10_Lgv-fLOd3yPAmNmWCd8YN3lSwXHLKG/preview ",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985400683dda47f8b61382"
  },
  "name": "Перетятько Анастасія, 10 років",
  "composition": "М.Клементі. Сонатина №4, тв.36",
  "videoUrl": " https://drive.google.com/file/d/13wsI-ssTPx9ea0qZHFYsvsP2nuPbSDJ7/preview ",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985400683dda47f8b61383"
  },
  "name": "Позняк Веніамін, 10 років",
  "composition": "1) Д.Пуленк. Стаккато. 2) Л.Бетховен. Весела-сумна",
  "videoUrl": " https://drive.google.com/file/d/1vsbc2GvHYArggP57-Z5wFlGwchMpNp3E/preview ",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985400683dda47f8b61384"
  },
  "name": "Прокопюк Марина, 10 років",
  "composition": " 1)І.Білаченко. Експромт. 2)Ю.Щуровський. Танець",
  "videoUrl": " https://drive.google.com/file/d/1Qn9DQL2NHJeOfGHDHYwauZ62vinrflAy/preview ",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985400683dda47f8b61385"
  },
  "name": "Решетнікова Людмила, 11 років",
  "composition": " 1)О.Білаченко.''Осінній ескіз'', 2)О.Польовий.''Полька-бабка''",
  "videoUrl": " https://drive.google.com/file/d/1_XfCK8FK1FLmxbkEB8VTdfa990qJ7xRA/preview ",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985400683dda47f8b61386"
  },
  "name": "Ротар Каріна, 10 років ",
  "composition": "1) Ю.Щуровський. ''Баркарола'', 2) Д.Пешетті. ''Престо''",
  "videoUrl": " https://drive.google.com/file/d/17MF-0z6uAkmKWlpYySWGH8sbOiZ--n9J/preview ",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985400683dda47f8b61387"
  },
  "name": "Савченко Матвій, 11років ",
  "composition": "1)Л.Бетховен. Соната мі бемоль мажор, І ч., 2)І.Щербаков. '' Елегія київських пагорбів''",
  "videoUrl": " https://drive.google.com/file/d/1J_HQk6IS2PZPZUP9uYOP6wkQtR3opo6B/preview ",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985400683dda47f8b61388"
  },
  "name": "Саква Валерія, 11 років ",
  "composition": "1)М.Лансевич.''Прелюдія'', 2)М.Дворжак. ''Джазовий етюд'' ля мажор",
  "videoUrl": " https://drive.google.com/file/d/11tsdLvk25bD8FSDYTXXnypR29gkPtxXs/preview ",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985400683dda47f8b61389"
  },
  "name": "Сартанія Давид, 10 років",
  "composition": " 1)Е.Вагнер.Сонатина до мажор,   2) Р.Вандалл.''Водоспад''",
  "videoUrl": " https://drive.google.com/file/d/1mrESYZIiP1iWenGiZDUIOb0usCJK0dT8/preview ",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985400683dda47f8b6138a"
  },
  "name": "Скороходько Євгенія, 10 років ",
  "composition": "1)Н.Нижанківський. ''Івась грає на чельо'', 2)Ю.Щуровський. ''Токата'' сі мінор",
  "videoUrl": " https://drive.google.com/file/d/1Eif0Z_MiAQVpzbczVSjjbvh1gUxe_E3X/preview ",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985400683dda47f8b6138b"
  },
  "name": "Солоненко Анна, 10 років ",
  "composition": "В.Косенко. ''Петрушка''",
  "videoUrl": " https://drive.google.com/file/d/1tCxp4UbZFZeFMrw6DYNi9VYHYSvYwNQI/preview ",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985400683dda47f8b6138c"
  },
  "name": "Солоненко Анна, 10 років",
  "composition": " Ф. Бургмюллер. ''Балада''",
  "videoUrl": " https://drive.google.com/file/d/1EOH6zhwow4aQZfJes28LxiIBsh5HbfGu/preview ",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985400683dda47f8b6138d"
  },
  "name": "Сорока Марія, 13 років",
  "composition": "1)Д.Циполі. Прелюдія та фуга ре мінор, 2)К.Гурліт. ''Шторм''",
  "videoUrl": " https://drive.google.com/file/d/1tfp_gBRZ1flj-LGqde6EdxQmKTlep0jP/preview ",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985400683dda47f8b6138e"
  },
  "name": "Стецюк Олександра, 12 років ",
  "composition": "1)К.Дебюссі. ''Doctor Gradus ad Parnasum'', 2)Ф.Шопен. ''Вальс'' №9",
  "videoUrl": " https://drive.google.com/file/d/1zxJWyCms7kZhspNBAlzacUnALW8EJAM7/preview ",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985400683dda47f8b6138f"
  },
  "name": "Сторожук Станіслав, 12 років",
  "composition": "1)Е.Гріг. ''Поетична картинка'' №1, 2)А.Кос-Анатольський. ''Полонина''",
  "videoUrl": " https://drive.google.com/file/d/1rtK0vUrAoIlGbUJ5HaUGbQPl1zVmTKKJ/preview ",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985400683dda47f8b61390"
  },
  "name": "Ткаченко Майя, 12 років",
  "composition": "1)В. А. Моцарт. Соната 16 К 545,Іч.; 2)І.Шамо.'' Веснянка''",
  "videoUrl": " https://drive.google.com/file/d/1m6ZsVarNPrcfymO3BkumdKxLJyBTxx5-/preview ",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985400683dda47f8b61391"
  },
  "name": "Унгурян Олександра, 12 років ",
  "composition": "1) О.Грибоєдов. Вальс,          2)М.Сільванський. ''Стрімкий потік''",
  "videoUrl": " https://drive.google.com/file/d/1v2LRVDhFJ2zXN_5wVxAch7X8l0WQ8rOg/preview ",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985400683dda47f8b61392"
  },
  "name": "Федорченко Євгенія, 10 років",
  "composition": " Л.Бетховен. ''Багатель'', тв.119",
  "videoUrl": " https://drive.google.com/file/d/1ZPHGQDAyftoAW0aKOT2snfa8MjgalcZQ/preview ",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985400683dda47f8b61393"
  },
  "name": "Федорченко Євгенія, 10 років",
  "composition": "О.Білаш.''Скерцо''",
  "videoUrl": " https://drive.google.com/file/d/1h1isGwveW1uiW3U2xeO2WWuFxvSSvQ-L/preview ",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985400683dda47f8b61394"
  },
  "name": "Федотова Катерина, 12 років",
  "composition": " 1) С. Борткевич.''Етюд'' фа дієз мінор, 2) Ф.Шопен. ''Ноктюрн''до дієз мінор",
  "videoUrl": " https://drive.google.com/file/d/1eQBXy6khLci4fJNG8BaCM1ZFLkKj0NRw/preview ",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985400683dda47f8b61395"
  },
  "name": "Федчук Аліна, 11 років",
  "composition": "1)А. Діабеллі. Сонатина №1, ІІІ.ч; 2)Дж. Ласт.'' Самотній пастух''",
  "videoUrl": " https://drive.google.com/file/d/1jrFbvdgG2NlU-b416-uR0birDrW-PnIH/preview ",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985400683dda47f8b61396"
  },
  "name": "Федюк Володимир, 12 років",
  "composition": "1) К.М.Вебер.Сонатина до мажор; 2)О.Гончарук. ''Зелений'' із збірки ''Веселка''",
  "videoUrl": " https://drive.google.com/file/d/1H_Iw89xjf1o27PtP_neQI78ByP65yEvY/preview ",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985400683dda47f8b61397"
  },
  "name": "Хоу Жуй, 12 років",
  "composition": "1)П.І.Чайковський. ''Жовтень'', 2)Е.Веврик. ''Гандзя''",
  "videoUrl": " https://drive.google.com/file/d/1XZwWXt6hQASuYftSNr5sTPErstFUV58R/preview ",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985400683dda47f8b61398"
  },
  "name": "Чиж Ніна, 10 років ",
  "composition": "1)Й.Гайдн Соната №4, Іч; 2)Л.Дьяконенко. ''Пробачення у мами''",
  "videoUrl": " https://drive.google.com/file/d/1aIUr0h-N5290B6KaImXkJHmSDik_Uawe/preview ",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985400683dda47f8b61399"
  },
  "name": "Чідера Самуель Умех, 10 років",
  "composition": "1)  П.Чайковський. ''Старовинна французька пісенька''. 2) Д.Кабалевський.''Клоуни''",
  "videoUrl": " https://drive.google.com/file/d/1pLYAmRBXwzIn1x3XHhvLre_ANZJT2p8w/preview ",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985400683dda47f8b6139a"
  },
  "name": "Шаталова Ілона, 10 років",
  "composition": "1)Ф. Гіллер. ''Маленьке рондо''; 2)В. Косенко. ''Вальс'' сі мінор",
  "videoUrl": " https://drive.google.com/file/d/1Ug56cbY1CUBhO1-tZfucRAuAHbIFKz9c/preview ",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985400683dda47f8b6139b"
  },
  "name": "Шевченко Маргарита, 10 років ",
  "composition": "1)С.Баландін. Варіації,          2)Т.Браун. ''Танець вітру''",
  "videoUrl": " https://drive.google.com/file/d/1pkBBqfS-pmFxb5nNdAch9WXUpGqsUxa8/preview ",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985400683dda47f8b6139c"
  },
  "name": "Шепетько Олександр, 11 років ",
  "composition": "1) Ф.Шопен. Мазурка,тв.67 № 4, 2)Е.Гріг. ''Танець із Йольстера''",
  "videoUrl": " https://drive.google.com/file/d/1VbhVjWrUitTo--83I5FWNydQrPC3YGyR/preview ",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985400683dda47f8b6139d"
  },
  "name": "Шумська Надія, 12 років",
  "composition": "1)С.Борткевич.''Темна кімната'', 2)В.Неугасімов.Скерцо",
  "videoUrl": " https://drive.google.com/file/d/1k66-Wry63S8x7t48GWUjY0e6O1xqeUot/preview ",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985428683dda47f8b6139e"
  },
  "name": "Арутюнян Ліда, 14 років",
  "composition": " 1)Й.Гайдн. Соната №20, Іч.; 2)Л.Шукайло.''Ємеля''",
  "videoUrl": " https://drive.google.com/file/d/1Bj568cnRdDZMKrMYfLT8kCbHm4yfXb2k/preview ",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985428683dda47f8b6139f"
  },
  "name": "Базилюк Наталія, 16 років",
  "composition": " 1)Я.Сібеліус. Прелюдія ля мінор,2)І.Беркович. Прелюдія фа дієз мінор",
  "videoUrl": " https://drive.google.com/file/d/1GaWeZbKc6SiIudiYQVBgFxaiOO9SEskA/preview ",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985428683dda47f8b613a0"
  },
  "name": "Білогуб Антон, 13 років ",
  "composition": "Л.Бетховен. Легка соната фа мінор, І ч.",
  "videoUrl": " https://drive.google.com/file/d/1fHUmtMWOjGN9p5xaSrcIOvQEu-koTGaT/preview ",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985428683dda47f8b613a1"
  },
  "name": "Білогуб Антон, 13 років",
  "composition": " О.Строк. ''Місячна рапсодія''",
  "videoUrl": " https://drive.google.com/file/d/1fqnNOFvNnVUcI1LUZ-TqgFzCl5XFE_si/preview ",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985428683dda47f8b613a2"
  },
  "name": "Бірук Таміла, 14 років",
  "composition": "1)М.Клементі.Сонатина, тв.26№3, 2)Я.Сібеліус. ''Ялина''",
  "videoUrl": " https://drive.google.com/file/d/14_B26LPyzQjk_aBZxGFWIq8Rz6KRCBnX/preview ",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985428683dda47f8b613a3"
  },
  "name": "Боровікова Єлизавета, 15 років",
  "composition": " 1)М.Бобер. ''Діамантова рапсодія'', 2)Ф.Сай. ''Чорна земля''",
  "videoUrl": " https://drive.google.com/file/d/1pO1FGqB-K6tth8pPRMBCal_rsceSMx20/preview ",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985428683dda47f8b613a4"
  },
  "name": "Бурухіна Катерина, 13 років",
  "composition": "1) Й.Гайдн. Соната мі мінор, Іч., 2) С.Нікітін.''Наспів''",
  "videoUrl": " https://drive.google.com/file/d/1rpLH63SzNTHeMyXHk7rCheswScKu9_cH/preview ",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985428683dda47f8b613a5"
  },
  "name": "Вашуріна В., 13 років ",
  "composition": "1) В.Косенко. ''Поема-Легенда'', 2) О.Саратський.''Коломийка''",
  "videoUrl": " https://drive.google.com/file/d/1y9kusgtqXgIgfFc16l_5qvgF_Jy62vX7/preview ",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985428683dda47f8b613a6"
  },
  "name": "Вишневська Анна, 13 років ",
  "composition": "Ж. Бізе.''Дзига''",
  "videoUrl": " https://drive.google.com/file/d/1YN-2yp1ocRVE1RdXq2L7sj9q_A8yv5PO/preview ",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985428683dda47f8b613a7"
  },
  "name": "Вишневська Анна, 13 років",
  "composition": "К. Лавалле. ''Метелик''",
  "videoUrl": " https://drive.google.com/file/d/161tFqTFJoja2OVDvHKTtIWPjNQ-2Lfx1/preview ",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985428683dda47f8b613a8"
  },
  "name": "Герасимчук Мілєна, 15 років ",
  "composition": "М.Таравердієв. ''Спогад''",
  "videoUrl": " https://drive.google.com/file/d/1Ao0wOx50UcKLaX8gpE3W9t65DC6KphrM/preview ",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985428683dda47f8b613a9"
  },
  "name": "Герасимчук Мілєна, 15 років",
  "composition": " О.Білаш.''Танець ляльок''",
  "videoUrl": " https://drive.google.com/file/d/1xnbfjBmzclN4-tl6t9EGDm3yjLGjwpR5/preview ",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985428683dda47f8b613aa"
  },
  "name": "Гордієнко Єлизавета, 19 років",
  "composition": "1)Й.С.Бах.Прелюдія і фуга ре мінор, ДТК-І, 2)С.Борткевич. Прелюдія до дієз мінор",
  "videoUrl": " https://drive.google.com/file/d/1oxBe6N3altFp3UktF5FdGYFrdXyHDHWf/preview ",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985428683dda47f8b613ab"
  },
  "name": "Грещак Марія, 14 років",
  "composition": "1)К.Черні. Етюд ля мажор; 2)Ю.Щуровський.''Елегічний прелюд''",
  "videoUrl": " https://drive.google.com/file/d/1IwuLrdPakxH1f6ZPfmw7d7vGchKjoU6m/preview ",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985428683dda47f8b613ac"
  },
  "name": "Дейнега Каріна, 14 років",
  "composition": "1) Л.Бетховен. Соната №14, І ч.; 2) С.Жданов. ''Прелюд''",
  "videoUrl": " https://drive.google.com/file/d/1c5iWC9b5J3Tw3OWTDKSwM95CFTFBly4t/preview ",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985428683dda47f8b613ad"
  },
  "name": "Дячук Зоряна, 13 років ",
  "composition": "1)Ю.Щуровський. ''Ранок'', 2)Н.Нижанківський. ''Коломийка''",
  "videoUrl": " https://drive.google.com/file/d/1SsVrIFRfitLvzM37-UWnfGNcsj07Ou_2/preview ",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985428683dda47f8b613ae"
  },
  "name": "Іщук Катерина, 15 років",
  "composition": " К.Черні. Етюд №1,тв.740",
  "videoUrl": " https://drive.google.com/file/d/1nscqS5e1pUwtdIOSOIeXAVHRGjFu_3Mn/preview ",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985428683dda47f8b613af"
  },
  "name": "Іщук Катерина, 15 років",
  "composition": "Ф.Шопен.''Ларго''",
  "videoUrl": " https://drive.google.com/file/d/1EoKeSr7BIeLw0KsjCtp1DEDJ_8Xggxnq/preview ",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985428683dda47f8b613b0"
  },
  "name": "Іваночко Антоніна, 13 років.",
  "composition": " 1)Й.С.Бах. Прелюдія і фуга до дієз мінор ДТК-І, 2) К.Черні. Етюд №6 тв.740",
  "videoUrl": " https://drive.google.com/file/d/1uTqORJIxI65uKq4-2RqOXnVuXjoQPKkS/preview ",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985428683dda47f8b613b1"
  },
  "name": "Кареліна Крістіна, 13 років",
  "composition": "Й.С. Бах.Прелюдія і фуга ре мінор, ДТК-ІІ",
  "videoUrl": " https://drive.google.com/file/d/1FmhW2Ol9tl-fV7ROatz3mEnb1C0VwAbx/preview ",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985428683dda47f8b613b2"
  },
  "name": "Кареліна Крістіна, 13 років",
  "composition": " В.А. Моцарт. Соната №8, Іч.",
  "videoUrl": " https://drive.google.com/file/d/1jFt0zknGa8vvXxDRKQo5x1Ydzcr-IxHR/preview ",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985428683dda47f8b613b3"
  },
  "name": "Каськів Андрій, 14 років ",
  "composition": "А.Лешгорн. Етюд фа дієз мінор",
  "videoUrl": " https://drive.google.com/file/d/14uKZUG7l1REwDkXkvR6fYBjQiTPZC3ko/preview ",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985428683dda47f8b613b4"
  },
  "name": "Каськів Андрій, 14 років",
  "composition": " К.Дебюссі. ''Місячне сяйво''",
  "videoUrl": " https://drive.google.com/file/d/1SPNLI8VvFhKzpRwN9-iBRuTddPfJuUe-/preview ",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985428683dda47f8b613b5"
  },
  "name": "Кирилова Олександра, 13 років ",
  "composition": "1) Т.Браун. ''Шторм, що наближається'', 2) П.Захаров. ''Рондо-галоп''",
  "videoUrl": " https://drive.google.com/file/d/1WHj--haYnE7pWtfHBoypXnhm7i0insvG/preview ",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985428683dda47f8b613b6"
  },
  "name": "Кондратюк Аліна, 14 років",
  "composition": "1) О.Дюбюк. Варіації, 2) О.Білаш.''Роздум''",
  "videoUrl": " https://drive.google.com/file/d/1RwfSQtTfwWpLDzYyGfmFyOKdy_SrK7SZ/preview ",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985428683dda47f8b613b7"
  },
  "name": "Косенко Аліса, 13 років",
  "composition": "1) А.Караманов. ''Зруйнований храм'', 2)С.Рахманінов. Прелюдія №7, тв.23",
  "videoUrl": " https://drive.google.com/file/d/1-6kYrtQuHZNk5ChAaWLv7IRZzk22Wddh/preview ",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985428683dda47f8b613b8"
  },
  "name": "Кочубей Ярослав, 14 років",
  "composition": "Обр. Є.Веврика.''Молдавські наспіви''",
  "videoUrl": " https://drive.google.com/file/d/19KjKHfI-uij6j3mNCYZ26LLZMoBbYk9r/preview ",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985428683dda47f8b613b9"
  },
  "name": "Кочубей Ярослав, 14 років ",
  "composition": "Ф.Кулау. Сонатина №55",
  "videoUrl": " https://drive.google.com/file/d/1R7HwXpLbO1tiz3KzMg35t4N3Bmx7ABOL/preview ",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985428683dda47f8b613ba"
  },
  "name": "Куліковська Катерина, 14 років",
  "composition": "1) Й.С.Бах. Прелюдія і фуга фа дієз мажор, ДТК-І, 2) С.Борткевич. Етюд №9, тв.15",
  "videoUrl": " https://drive.google.com/file/d/1zQjsqGpWqWYkejPYN_TG-E0mMA8cSj-r/preview ",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985428683dda47f8b613bb"
  },
  "name": "Макаревич Наталія, 15 років ",
  "composition": "1)Й.С.Бах. Прелюдія і фуга ре мінор, ДТК-І, 2)О.Бордюгова. ''Український романс''",
  "videoUrl": " https://drive.google.com/file/d/1irVBVS0WDufWZC2YEB57uUMLWbw8BLnR/preview ",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985428683dda47f8b613bc"
  },
  "name": "Малярчук Єлізавета, 13 років ",
  "composition": "1)С.Борткевич. Етюд №9, тв.15, 2)Ф.Шопен.''Гулянка''",
  "videoUrl": " https://drive.google.com/file/d/1om0hfVgra-VSx6YXhJbpZwLRbe0a8BE-/preview ",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985428683dda47f8b613bd"
  },
  "name": "Опанасюк Тарас, 13 років",
  "composition": "1) П.Захаров. ''Токата-прелюдія'', 2) Е.Гріг. ''Ноктюрн''",
  "videoUrl": " https://drive.google.com/file/d/1gghwyH2Ax-AeVuelbSWsS0oIoAxS_uJD/preview ",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985428683dda47f8b613be"
  },
  "name": "Ослам  Єлизавета, 14 років",
  "composition": "1) П.Чайковський.''Лютий'' із циклу''Пори року'',     2) Н.Лагодюг. ''Танго мрій''",
  "videoUrl": " https://drive.google.com/file/d/1mq4-ZBYZmlnGPzJY1jR_QVr0Gz75aMlX/preview ",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985428683dda47f8b613bf"
  },
  "name": "Панімаш Ірина, 15 років",
  "composition": "1) Й.Гайдн.Соната до мажор (№50), І ч.; 2) С.Рахманінов.''Музичний момент'', тв.16 №4",
  "videoUrl": " https://drive.google.com/file/d/1h_KQ_WpvmjZFsXE4XT_Mdf23sk4K9GTs/preview ",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985428683dda47f8b613c0"
  },
  "name": "Петрусь Наталія, 13 років",
  "composition": "1)Ф.Ліст.''Романс'',     2)Е.Гіллок.''Вальс-етюд''",
  "videoUrl": " https://drive.google.com/file/d/1O15_CujwttaF1BxXgW844w6ABUQkujfb/preview ",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985428683dda47f8b613c1"
  },
  "name": "Прищепа Анна, 14 років",
  "composition": "1) М.Шмітц. Джазова інвенція №13,  2) О.Девіс.''Щасливий день''",
  "videoUrl": " https://drive.google.com/file/d/1JKMIlun3RehERqKaSHpl6SJ6eyuuq3aW/preview ",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985428683dda47f8b613c2"
  },
  "name": "Прокопчук Олександра, 17 років",
  "composition": " В.Верменич. ''Чорнобривці''",
  "videoUrl": " https://drive.google.com/file/d/1FNL7e6qh8SOKlUxMoRtA7rSY8NhanlX-/preview ",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985428683dda47f8b613c3"
  },
  "name": "Прокопчук Олександра, 17 років",
  "composition": " Ф.Шпиндлер. Сонатина,ІІІ ч.",
  "videoUrl": " https://drive.google.com/file/d/1KGMCcN6_BWPdiwzrRIuA3NdxUeJbwI1j/preview ",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985428683dda47f8b613c4"
  },
  "name": "Пучко Софія, 13років ",
  "composition": "1)М. Дворжак. Етюд 2 (2-й зошит), 2)В. Верменич. ''Чорнобривці''",
  "videoUrl": " https://drive.google.com/file/d/14WfsFv4An2FbV_uFjhqREI87-IfzQUb8/preview ",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985428683dda47f8b613c5"
  },
  "name": "Радковська Аліна, 13 років ",
  "composition": "Е. Гріг. Етюд пам'яті Ф.Шопена",
  "videoUrl": " https://drive.google.com/file/d/1_aBN8JgrmFmVfuVYW4s0leNNYxfP59So/preview ",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985428683dda47f8b613c6"
  },
  "name": "Радковська Аліна, 13 років",
  "composition": " Ф.Ліст. ''Сумний степ''",
  "videoUrl": " https://drive.google.com/file/d/1n2mSaPNwrVjlcPAohViYro24WziktB0j/preview ",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985428683dda47f8b613c7"
  },
  "name": "Рибкіна Олександра, 15 років",
  "composition": "1) М. Терещук. ''Фуга Lockdown''; 2)М.Бобер.''Опівнічна рапсодія''",
  "videoUrl": " https://drive.google.com/file/d/1sPVEB2VIt_oDZM0pmBUQ5jUoUBNivTwe/preview ",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985428683dda47f8b613c8"
  },
  "name": "Руссу Ганна, 14 років",
  "composition": "1)Г.Волленгаупт. ''Характерна п'єса у формі етюда'', 2)Ю.Щуровський. ''Елегія''",
  "videoUrl": " https://drive.google.com/file/d/1aEeFiUX_AvRcRMG-4hBA3i8c45EsZH9m/preview ",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985428683dda47f8b613c9"
  },
  "name": "Рущинська Ксенія, 14 років",
  "composition": "Е.Гріг. ''Мелодія''",
  "videoUrl": " https://drive.google.com/file/d/1072JNwvEm6CduA_GePsABu5_Yk6M02zH/preview ",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985428683dda47f8b613ca"
  },
  "name": "Рущинська Ксенія, 14 років ",
  "composition": "Й.С. Бах.''Маленька прелюдія'' до мінор",
  "videoUrl": " https://drive.google.com/file/d/1NDk_jKO5SHbnsaXATA1-YwgKe4bAmIdn/preview ",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985428683dda47f8b613cb"
  },
  "name": "Свинцицька Емілія, 14 років",
  "composition": "1)В.Квасневський.''Думка''; 2)Д.Крамер. ''Танцюючий скрипаль''",
  "videoUrl": " https://drive.google.com/file/d/1algz_oukRxT2kPAFyXoX-QjIA34pICcm/preview ",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985428683dda47f8b613cc"
  },
  "name": "Свиридюк Денис, 16 років",
  "composition": "1)Й.С.Бах. Триголосна інвенція №12, 2)Г.Галинін. ''Арія''",
  "videoUrl": " https://drive.google.com/file/d/146GFgHaXL3xHVFZw-hrHrxk4977lrNgh/preview ",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985428683dda47f8b613cd"
  },
  "name": "Селіванова Анна, 14 років",
  "composition": "1)Ю.Щуровський. ''Елегічний прелюд'' сі мінор, 2)М.Дворжак.''Джазовий етюд'' №6 (2 зошит)",
  "videoUrl": " https://drive.google.com/file/d/1JucNtO1D93kqL8woJbk_BJiDjdgGxsQ6/preview ",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985428683dda47f8b613ce"
  },
  "name": "Семенов Іван, 15 років ",
  "composition": "Е.Дога. ''Сонет''",
  "videoUrl": " https://drive.google.com/file/d/1L0U_HouKRP4y3gPZbVLkzumyYD2ezE2D/preview ",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985428683dda47f8b613cf"
  },
  "name": "Семенов Іван, 15 років ",
  "composition": "І.Мошeлeс. Eтюд №8,тв.70",
  "videoUrl": " https://drive.google.com/file/d/1_fwY3rkpcIlWjc1Ry_Ytihu-owWp2mgk/preview ",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985428683dda47f8b613d0"
  },
  "name": "Симоненко Таміла, 13 років ",
  "composition": "1) Л.Бетховен. Соната №19 тв.49, І частина, 2)П.Чайковський .''Підсніжник'' з циклу ''Пори року''",
  "videoUrl": " https://drive.google.com/file/d/1PmEjgOV2YYZiRIUBpTDIHjur-lzR_flv/preview ",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985428683dda47f8b613d1"
  },
  "name": "Снігур Анна, 13 років",
  "composition": "1)БХаваші. ''Шторм'', 2)Ф.Сай. Варіації",
  "videoUrl": " https://drive.google.com/file/d/1hm_xDHOZTzUCS4UZIso7MHZ3ibkvAIbb/preview ",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985428683dda47f8b613d2"
  },
  "name": "Тернова Ксенія, 14 років ",
  "composition": "1) І.Беркович. Прелюдія №10, 2)Е.Гріг. ''Похід гномів''",
  "videoUrl": " https://drive.google.com/file/d/1jJoY8kdzeUKl5zU5gLe5du8lhGalBIYB/preview ",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985428683dda47f8b613d3"
  },
  "name": "Ткачук Вікторія,  14 років",
  "composition": "1) Ф. Мендельсон.  ''Пісня без слів'', 2) В. Гіллок  ''Вальс-етюд''",
  "videoUrl": " https://drive.google.com/file/d/1Ki5C-tanjxy2My7kZ6kWgYEWMAOEYFc9/preview ",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985428683dda47f8b613d4"
  },
  "name": "Трачук Олександр, 13 років",
  "composition": "П. Захаров.  ''Рондо-галоп''",
  "videoUrl": " https://drive.google.com/file/d/18DlN1b4K1sXrdvvb3A8pHmJFvXwbzYrd/preview ",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985428683dda47f8b613d5"
  },
  "name": "Трачук Олександр, 13 років",
  "composition": " Д.Фільд. ''Ноктюрн'' №5",
  "videoUrl": " https://drive.google.com/file/d/1L3JxoWPr6jxM5Q3pxO0BBX2U4UiFnE_H/preview ",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985428683dda47f8b613d6"
  },
  "name": "Федонюк Олександр, 13 років",
  "composition": "1)Й.Гайдн. Соната №23, фа мажор, Іч.; 2)Й.С.Бах. Прелюдія і фуга №23, ДТК-І",
  "videoUrl": " https://drive.google.com/file/d/1i2fuOPVMqQfINCT2ZJbTJXccz5Afb_h5/preview ",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985428683dda47f8b613d7"
  },
  "name": "Хвостова Олександра, 13 років",
  "composition": "1)Ф.Ліст.Юнацький етюд №2, 2)О.Козаренко-А.Кос-Анатольський. ''Ой ти, дівчино, з горіха зерня''",
  "videoUrl": " https://drive.google.com/file/d/1GnsAZsugdqBLL6hKCGlleA8ZK_qT18Fj/preview ",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985428683dda47f8b613d8"
  },
  "name": "Храменкова Анастасія, 13 років ",
  "composition": "1)В.Коровіцин.''Русалонька'', 2)М.Скорик.''Жартівлива п'єса''",
  "videoUrl": " https://drive.google.com/file/d/1C0uSpeSybfdaIXYlmYwMrZ5JUsdb7Rb9/preview ",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985428683dda47f8b613d9"
  },
  "name": "Хелман Віолета, 13 років",
  "composition": "1)УГіллок.''Пурхаючи в хмарках'', 2)В.Ходош.''Червона шапочка''",
  "videoUrl": " https://drive.google.com/file/d/1zuyEGt3cvZ3sVjKnA3CJTZVL2vEVgXWy/preview ",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985428683dda47f8b613da"
  },
  "name": "Шибанова Варвара, 13 років ",
  "composition": "Ф.Шопен. Ноктюрн №2, тв.9",
  "videoUrl": " https://drive.google.com/file/d/1r1jURFKC555wKMR7ClSymtTG_DWwvgvZ/preview ",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985428683dda47f8b613db"
  },
  "name": "Шибанова Варвара, 13 років",
  "composition": " С.Борткевич.Етюд №7, тв.29",
  "videoUrl": " https://drive.google.com/file/d/1KTUYP3gWn4PTTGG1Y__FKrI1s5GkXBoO/preview ",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985441683dda47f8b613dc"
  },
  "name": "Антонюк Марія, 21 рік",
  "composition": "1) М.Метнер. ''Дві казки'', 2)І.Шамо. ''Токата''",
  "videoUrl": "https://drive.google.com/file/d/1AFVEG3M3gU1yIaIc5YncRhUIAlwf8AVj/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985441683dda47f8b613dd"
  },
  "name": "Бобрішова Інеса, 16 років",
  "composition": " 1) Й.Гайдн. Соната ре мажор, І ч.;   2) С.Прокоф'єв. ''Сарказм'',тв.17 №1",
  "videoUrl": "https://drive.google.com/file/d/19JHuESQVHM6bpupPsvdUn4elQRbgO23e/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985441683dda47f8b613de"
  },
  "name": "Бянова Дарина, 16 років",
  "composition": "1)Ф.Шопен. Ноктюрн, тв.27№2,      2)Д.Задор. Етюд до мінор",
  "videoUrl": "https://drive.google.com/file/d/1-CBceHEbKge32X6ND1F_zFVQ-2Rb44Yw/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985441683dda47f8b613df"
  },
  "name": "Вознюк Ангеліна, 17 років",
  "composition": "1)Я.Степовий. Прелюдія,       2)Я.Сібеліус. Етюд",
  "videoUrl": "https://drive.google.com/file/d/1y7QHtGukJoocS0B_diwzJu-VQY8WB9op/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985441683dda47f8b613e0"
  },
  "name": "Гук Софія, 16 років",
  "composition": " С.Рахманінов. ''Гумореска''",
  "videoUrl": "https://drive.google.com/file/d/1kPQT_uTxaIlalqx_aapSpid2SZgP7jq6/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985441683dda47f8b613e1"
  },
  "name": "Гук Софія, 16 років",
  "composition": " М. Лисенко. ''Журба''",
  "videoUrl": "https://drive.google.com/file/d/1NuhdlOqXePr8exdMp0gXTAl6FfkgkDuN/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985441683dda47f8b613e2"
  },
  "name": "Гулова Ангеліна, 18 років ",
  "composition": "1)Ф. Шопен. Ноктюрн тв.48 №1,     2)П. Санкан. Токата",
  "videoUrl": "https://drive.google.com/file/d/1znh9RU-pCp3rHxqyVuP44D4CkYm59GjN/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985441683dda47f8b613e3"
  },
  "name": "Дановська Ольга, 17 років ",
  "composition": " В.Барвінський Прелюдія №4 ''Хорал''",
  "videoUrl": "https://drive.google.com/file/d/1YLd2FP5IxDneIcOMWgWTgCfubBOYJQPr/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985441683dda47f8b613e4"
  },
  "name": "Дановська Ольга, 17 років",
  "composition": "К.Лядов Прелюдія, тв.39 №4",
  "videoUrl": "https://drive.google.com/file/d/1wogVZv8WVyQtLFsopwaRBx1RQOxlzCFI/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985441683dda47f8b613e5"
  },
  "name": "Дудник Дар'я, 17 років",
  "composition": " В.Барвінський.''Листок з альбома''",
  "videoUrl": "https://drive.google.com/file/d/1l_HE3r0O5usjOHcNuMpNDYg_g6d2S35t/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985441683dda47f8b613e6"
  },
  "name": "Дудник Дар'я, 17 років ",
  "composition": "К.Дебюссі. '' Романтичний вальс''",
  "videoUrl": "https://drive.google.com/file/d/1qLgq9AfD6YXCyPQyFejlyZ8BONuSoN_4/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985441683dda47f8b613e7"
  },
  "name": "Крюкова Марія, 15 років ",
  "composition": "1)С.Борткевич. ''Примхи моря'', 2)Ф.Шопен.Етюд тв.10 №4",
  "videoUrl": "https://drive.google.com/file/d/1-cbo3BZ1EPNYm6NS1eCMm_2HTzHJ7Bek/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985441683dda47f8b613e8"
  },
  "name": "Куліш Поліна, 15 років ",
  "composition": "1)Е.Гріг.''Колискова'', 2)І.Падеревський. ''Скерцино''",
  "videoUrl": "https://drive.google.com/file/d/1NamVVFfAdRfaFuA1uKjlt9QIWgMiSBy6/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985441683dda47f8b613e9"
  },
  "name": "Музиченко Марія, 19 років ",
  "composition": "1)Й.Гайдн. Соната №31, 1ч.; 2)Ф.Шопен.Етюд,тв.10 №5",
  "videoUrl": "https://drive.google.com/file/d/1O-ahfYJNbFf5fSOwSSpffIWWpniBubK8/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985441683dda47f8b613ea"
  },
  "name": "Олійник Олександр, 18 років",
  "composition": "1)Ж.Бізе-В.Горовіц. Варіації на тему з опери ''Кармен'', 2)Л.Ревуцький. Прелюдія фа дієз мінор",
  "videoUrl": "https://drive.google.com/file/d/13JylPdDWgVz6QSHRGVJt7FhdaRelCHSD/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985441683dda47f8b613eb"
  },
  "name": "Смик Анна, 17 років ",
  "composition": "С.Рахманінов. Етюд-картина тв.33 №5, соль мінор",
  "videoUrl": "https://drive.google.com/file/d/1k7okBuyMsFaRt4GwwXUSgYCh5DdY6MN9/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985441683dda47f8b613ec"
  },
  "name": "Смик Анна, 17 років ",
  "composition": "С.Рахманінов. Прелюдія, тв. 32 №12, соль дієз мінор",
  "videoUrl": "https://drive.google.com/file/d/1LYHHVKuUIisadE2fmzwYzmwsS-UwVxVR/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985441683dda47f8b613ed"
  },
  "name": "Тіхонок Єгор, 17 років",
  "composition": "1)С.Борткевич.''Скелі ущелини Уч-Кош'' з сюїти ''Кримські нариси''.тв.8, 2)Ф.Ліст.Трансцендентний етюд №10, фа мінор",
  "videoUrl": "https://drive.google.com/file/d/1xn3TfNH6GFBBQo1vZZNnRRVqbtjGGug2/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985441683dda47f8b613ee"
  },
  "name": "Фащевський Тарас",
  "composition": "С.Рахманінов. ''Етюд-картина'', тв.33 (5)",
  "videoUrl": "https://drive.google.com/file/d/1eqTPXl_RhZQOdVr-lhUQmlOM8coC6FoK/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985441683dda47f8b613ef"
  },
  "name": "Фащевський Тарас",
  "composition": "Л.Ревуцький. Прелюдія, тв.4 (2)",
  "videoUrl": "https://drive.google.com/file/d/1-_boMnoYnk74xDzQy6QlCqVxIP3j4sHx/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985441683dda47f8b613f0"
  },
  "name": "Фесик Назарій, 16 років",
  "composition": "1)С.Борткевич.''Lyrica Nova'',тв.59 №3,4; 2)Ф.Ліст.Трансцендентний етюд №8 ''Дике полювання''",
  "videoUrl": "https://drive.google.com/file/d/1c0sj4AMuDxHApmGT9WShmjJHbEHRzJdC/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985441683dda47f8b613f1"
  },
  "name": "Юзлова Любов, 17 років",
  "composition": " 1) К.Дебюссі. ''Арабеска''№1, 2) Й.Брамс.''Інтермеццо'', тв.117 №2",
  "videoUrl": "https://drive.google.com/file/d/1LADInWpm-jhc1FbRudgqwCMGtzXQDBMS/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985441683dda47f8b613f2"
  },
  "name": "Заєць Марина",
  "composition": "М. Скорик.''Вальс'' з Партити №5",
  "videoUrl": "https://drive.google.com/file/d/11mlZznZboxhzxEBTJ4gUmEtE0JYgQgdh/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985441683dda47f8b613f3"
  },
  "name": "Заєць Марина",
  "composition": "П.Чайковський. ''Думка'', тв.59",
  "videoUrl": "https://drive.google.com/file/d/1PaUp-aqQdCqBt35662yNwJkhaNOAXN_h/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985441683dda47f8b613f4"
  },
  "name": "Логвиновський Євгеній",
  "composition": "Д.Притскер. ''Блюз Пікассо''",
  "videoUrl": "https://drive.google.com/file/d/1e2_4isQzlucLR7kBZX-CHxgqYrBxJRZw/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985441683dda47f8b613f5"
  },
  "name": "Логвиновський Євгеній",
  "composition": "С.Прокоф'єв. Соната №3, тв.28",
  "videoUrl": "https://drive.google.com/file/d/1DLhT9YwR5I9cZxzdNoe22FwS8jpI4YVs/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985441683dda47f8b613f6"
  },
  "name": "Микитюк Анастасія",
  "composition": "М.Раков. ''Концертний етюд''",
  "videoUrl": "https://drive.google.com/file/d/1C8a6TPRM2caQfTOA6zGHvuIjGSoL7C1b/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985441683dda47f8b613f7"
  },
  "name": "Микитюк Анастасія",
  "composition": " Й.С.Бах. Прелюдія і фуга до мінор, ДТК -ІІ",
  "videoUrl": "https://drive.google.com/file/d/1wrqdb_ke2Kch_CfBcmNRH2M580PtZQA1/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985441683dda47f8b613f8"
  },
  "name": "Назаренко Ксенія",
  "composition": "І.Волкова. ''Настрої''",
  "videoUrl": "https://drive.google.com/file/d/1OA8rvN6wwdpOVy1DVDt1zq-4pkeiSr3x/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985441683dda47f8b613f9"
  },
  "name": "Назаренко Ксенія",
  "composition": "Й.Бах. Алеманда",
  "videoUrl": "https://drive.google.com/file/d/10qtURWd3aascq2gwNHxM-FETyQHLB8tD/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985441683dda47f8b613fa"
  },
  "name": "Серов Владислав",
  "composition": "1)Й.С. Бах. Прелюдія і фуга до мінор, ДТК-ІІ, 2)Ф.Шопен. Балада №1, тв.23",
  "videoUrl": "https://drive.google.com/file/d/1atn5yiEcXgjVnFKfM4QWAUS4z_UVTJ_q/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985441683dda47f8b613fb"
  },
  "name": "Тарасов Владислав",
  "composition": "1)С.Рахманінов. ''Етюд-картина'', тв.39 №9, 2)Ф.Шопен. ''Балада'', тв.23 №1",
  "videoUrl": "https://drive.google.com/file/d/19NZ_tEy0O2nRXjCltd_vdWL3SMuBNaCM/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985441683dda47f8b613fc"
  },
  "name": "Гребенюк Г.О.",
  "composition": "1)С.Прокофьев. Соната №2,І ч.;2)   Ф.Ліст.''Етюд за каприсами Паганіні''",
  "videoUrl": "https://drive.google.com/file/d/1ShUYIYP9ngoQZehmCbzP5F3bJAKFh3sN/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985441683dda47f8b613fd"
  },
  "name": "Кондратюк М.О. ",
  "composition": "1)Р.Шуман. ''Романс'', тв.28, 2)В.Косенко. ''Куранта''",
  "videoUrl": "https://drive.google.com/file/d/1FOb41PsmqWO4nyODkOdoMT4SsPp4HX9x/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "60985441683dda47f8b613fe"
  },
  "name": "Опанасенко А.О. ",
  "composition": "1)С.Рахманінов. Прелюдія соль дієз мінор, 2)В.Філіпенко. Токата",
  "videoUrl": "https://drive.google.com/file/d/1VLXELuZcI6Qi2grlwaU-uEwlLv1eSEkX/preview",
  "group": "архів"
}];
let concertmasters = [{
  "id": {
    "$oid": "6098c8f6683dda47f8b613ffaasd"
  },
  "name": "Шевельова Єлізавета, 20 років.",
  "composition": "1) П.Чайковський. Арія Ленського, 2) Г.Хазанова. \" Уздовж вулиці ходу я\"",
  "videoUrl": "https://www.youtube.com/embed/CWX0eRPTCYY",
  "group": "архів"
}, {
  "id": {
    "$oid": "6098c8f6683dda47f8b613ffaas"
  },
  "name": "Закалюжна О.Б",
  "composition": "Г.Венявський. Концертний полонез ре мажор",
  "videoUrl": "https://www.youtube.com/embed/s3clXLT34hY",
  "group": "архів"
}, {
  "id": {
    "$oid": "6098c8f6683dda47f8b613ffaas1"
  },
  "name": "Закалюжна О.Б",
  "composition": "Ж.Масне.\"Роздум\"",
  "videoUrl": "https://www.youtube.com/embed/gDyUCbaneBk",
  "group": "архів"
}, {
  "id": {
    "$oid": "6098c8f6683dda47f8b613ff"
  },
  "name": "Кобзар Ніколь, 14 років",
  "composition": "Ф.Крейслер.''Маленький Віденський марш''",
  "videoUrl": "https://drive.google.com/file/d/1kuSR0VmOMiqIj9YR0u3lvOzq4JG5aLY8/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "6098c8f6683dda47f8b61400"
  },
  "name": "Кобзар Ніколь, 14 років",
  "composition": "Е.Ельгар.''Салют кохання''",
  "videoUrl": "https://drive.google.com/file/d/11gI7Xlj_SLQql2Pi6ETAhSAZTKLMjkBn/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "6098c8f6683dda47f8b61401"
  },
  "name": "Сабо Нестор, 10 років ",
  "composition": "1)В.Кролл. ''Полька віслючка'', 2)В.Цибін(перекл.А.Царенко). ''Листок з альбома''",
  "videoUrl": "https://drive.google.com/file/d/14PR5evrUIRaS1VFUvu0s69HMH7xS3WiI/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "6098c8f6683dda47f8b61402"
  },
  "name": "Смірнова Євгенія, 9 років ",
  "composition": "Л.Бетховен. ''Бабак'',обр. А. Шувалова",
  "videoUrl": "https://drive.google.com/file/d/1ir2aRKco82NwzR2FQH6ApZVHQZYr0L7y/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "6098c8f6683dda47f8b61403"
  },
  "name": "Смірнова Євгенія, 9 років ",
  "composition": "О.Бец. ''Подільські викрутаси''",
  "videoUrl": "https://drive.google.com/file/d/1qJQ9AIWj48pJTMBWfo3h7z6JlKJH980n/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "6098c8f6683dda47f8b61404"
  },
  "name": "Старцев Бенжамін, 11 років ",
  "composition": "1) Ж.Массне. ''Роздум''; 2)Е.Рибкін. ''Формула 1''",
  "videoUrl": "https://drive.google.com/file/d/1L6bxDysN0y2GDSNnRXqGEFbHR7eS-ixs/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "6098c8f6683dda47f8b61405"
  },
  "name": "Власюк Назар, 18 років ",
  "composition": "1)С.Доноті. Арія''O del mio amato ben'',2)Е.Гріг,Г.Х. Андерсен ''Jeg elsker dig''",
  "videoUrl": "https://drive.google.com/file/d/12_MFPU39btJQKvSt2RYzjiU0HaYsa4Og/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "6098c8f6683dda47f8b61406"
  },
  "name": "Дячек Іоанна, 17років ",
  "composition": "1)В.А.Моцарт.Арія''Ridente la calma'', 2)Ф.Надененко, І.Франко.Романс ''Чого являєшся мені у сні''",
  "videoUrl": "https://drive.google.com/file/d/1EQbQKbWivCb-gOQkccICL5APQjgWle9w/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "6098c8f6683dda47f8b61407"
  },
  "name": "Кваша Яна, 16 років",
  "composition": "1)Й.Кванц. Соната ре мажор, І-ІІ ч.; 2)В.Попп. ''Русский вечер''",
  "videoUrl": "https://drive.google.com/file/d/1opL41mLH10Bnr1eMyzOExswFJoTZ_8cS/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "6098c8f6683dda47f8b61408"
  },
  "name": "Колодій Антон, 18 років",
  "composition": "1) П.Чайковський. Романс''Горними тихо летела душа небесами'', 2)С.Рахманінов. ''Елегія'',тв.3№1, обробка для віолончелі та ф-но",
  "videoUrl": "https://drive.google.com/file/d/1lQIzDOiZp-EdXly10SVm4diOj5WCSk3Z/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "6098c8f6683dda47f8b61409"
  },
  "name": "Конюшек Софія, 21 рік",
  "composition": "О.Тактакішвілі. Соната для флейти і фортепіано.",
  "videoUrl": "https://drive.google.com/file/d/1HXE-WblU0-HywgVzCunQniQUCUNXGlNN/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "6098c8f6683dda47f8b6140a"
  },
  "name": "Конюшек Софія, 21 рік ",
  "composition": "Ф.Комлев. ''Мелодія''",
  "videoUrl": "https://drive.google.com/file/d/14q78XKpdFg66VSWkAZq0VeRuKaTcJUpu/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "6098c8f6683dda47f8b6140b"
  },
  "name": "Пчелінцева Адріана, 15 років",
  "composition": "1)В.Моцарт. Арія Блондхен з опери''Викрадення із Сераля'', 2)Р.Глієр.''В порыве нежности сердечной''",
  "videoUrl": "https://drive.google.com/file/d/17mRVxV06v5Mv6_P3C183oMgON-R_u-qO/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "6098c8f6683dda47f8b6140c"
  },
  "name": "Фесик Назарій, 16 років ",
  "composition": "1)Дж.Пуччіні. Арія Тоски; 2)М.де Фалья.''Хота''",
  "videoUrl": "https://drive.google.com/file/d/1BJNsTp4WDxZbAdAnjMLP3hbD63T2eIwY/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "6098c8f6683dda47f8b6140d"
  },
  "name": "Ярошенко Валерія, 19 років",
  "composition": "1)К.Стеценко. ''Сотояла я і слухала весну''; 2)В.Власов. Скерцо для домри та фор",
  "videoUrl": "https://drive.google.com/file/d/1OuDlacDb3i94xNxkowk-jsNktxuQK71L/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "6098c8f6683dda47f8b6140e"
  },
  "name": "Козак Ірина",
  "composition": "Є.Бозза.''Дитячі мрії''",
  "videoUrl": "https://drive.google.com/file/d/1PsoyOIr17OCyN_GhRU_q7IpS4HWwHWUB/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "6098c8f6683dda47f8b6140f"
  },
  "name": "Козак Ірина",
  "composition": "'Ніч яка місячна'', обр. Ю.Островського ",
  "videoUrl": "https://drive.google.com/file/d/1TJKQFEm3a3wziYvI3QfihGxzV2U5QH2n/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "6098c8f6683dda47f8b61410"
  },
  "name": "Микитюк Анастасія ",
  "composition": "1)Н.Бакланов. ''Концертіно'',      2)З.Багіров. ''Романс''",
  "videoUrl": "https://drive.google.com/file/d/1j8_mvZEGTgYI0LFGWFoLbQAgCHpI5C0Z/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "6098c8f6683dda47f8b61411"
  },
  "name": "Сав'юк Власта",
  "composition": "1)В.А. Моцарт. Концерт для фагота з оркестром сі бемоль мажор, Іч.; 2)А.Тансман.Сонатина для фагота і фортепіано,ІІІч.",
  "videoUrl": "https://drive.google.com/file/d/130aZO1nxV4E8HX7hxWaNvVT4bfgkhx4M/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "6098c8f6683dda47f8b61412"
  },
  "name": "Сасюк Юлія",
  "composition": "1)Г.Форе. ''Пробудження'', 2) Б.Барток. ''Шість румунських танців''",
  "videoUrl": "https://drive.google.com/file/d/1ods3tvUDXZdo1yedIVXYcc9Mn77bjh25/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "6098c8f6683dda47f8b61413"
  },
  "name": "Іванова Т.В.",
  "composition": "Е.Северн. ''Польський танець''",
  "videoUrl": "https://drive.google.com/file/d/1xXtvOSAunv56RfAxgV1q7m4iKa09sWH1/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "6098c8f6683dda47f8b61414"
  },
  "name": "Іванова Т.В.",
  "composition": "І.Тамарин ''Старовинний гобелен''",
  "videoUrl": "https://drive.google.com/file/d/149vlM07Gd8S9Cz4tDZ2KyKkguJzyB1uB/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "6098c8f6683dda47f8b61415"
  },
  "name": "Гачик О.А.",
  "composition": "1)Р.Глієр.''Романс'', 2)О.Циганков.''Інтродукція та Чардаш''",
  "videoUrl": "https://drive.google.com/file/d/1Ngs85qpEODEv67a8-daJxZoH6Ko7SUWk/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "6098c8f6683dda47f8b61416"
  },
  "name": "Гриців О.М.",
  "composition": "1)Ф. Крейслер.''Маленький віденський марш'', 2)Л. Ревуцький. ''Інтермецо''",
  "videoUrl": "https://drive.google.com/file/d/1nXkybPZHPOWWUzBED_KKeGF3kO2Ecabj/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "6098c8f6683dda47f8b61417"
  },
  "name": "Кірчанова І.В. ",
  "composition": "1)М.Відмонте.''Par zilo un raibo pasaku'', 2)Губаренко В. Концерт для флейти з камерним оркестром,тв.10",
  "videoUrl": "https://drive.google.com/file/d/1zpMjCauUpbJdufWXfb5Ofm7P9sAYj-iP/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "6098c8f6683dda47f8b61418"
  },
  "name": "Кекух О.В.",
  "composition": "1)І.Вимер. ''Гуцульська рапсодія'', 2)Укр.нар. танець в обр.В.Солонського ''Вечорниці''",
  "videoUrl": "https://drive.google.com/file/d/1dfPx15WQKHfPVtMPWWAAw9sy9UYw5S1e/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "6098c8f6683dda47f8b61419"
  },
  "name": "Лобода Л. М., ",
  "composition": "1)Л.Бетховен, Т.Шевченко. ''Зоре моя вечірняя'', 2)Лемківська народна пісня ''В темну нічку убочи''",
  "videoUrl": "https://drive.google.com/file/d/10gZo53X6EhHwEMpXKwpB2tW2_irVo290/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "6098c8f6683dda47f8b6141a"
  },
  "name": "Любченко М.С. ",
  "composition": "Й.С.Бах. Концерт для скрипки з оркестром ля мінор",
  "videoUrl": "https://drive.google.com/file/d/1wfhuitXL2MwtYdrUHIkVdMxQZpht6jNl/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "6098c8f6683dda47f8b6141b"
  },
  "name": "Любченко М.С.",
  "composition": "Н.Стецюн.    ''Болеро''",
  "videoUrl": "https://drive.google.com/file/d/1bHWUriqKvSTnVnIm47mmLedSi0Nh-XQs/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "6098c8f6683dda47f8b6141c"
  },
  "name": "Михайлова М.В.",
  "composition": "А.Солтан. ''Мелодія''",
  "videoUrl": "https://drive.google.com/file/d/1EoES2mTrWCy9CQcqd9qu366Z1tz6IpRQ/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "6098c8f6683dda47f8b613ffaasda"
  },
  "name": "Михайлова М.В.",
  "composition": "Й. Тамарин. \"Старовинний гобелен\"",
  "videoUrl": "https://drive.google.com/file/d/1u4xJ0vK6deR2XJwGLXFh6sBRePvxGUNr/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "6098c8f6683dda47f8b6141d"
  },
  "name": "Мялькіна Н.О.",
  "composition": "Дж.Вільямс. ''Мелодія''",
  "videoUrl": "https://drive.google.com/file/d/1iM_EF0Vx9-w4DS6HR_ZHRJ-mqJwA-FGp/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "6098c8f6683dda47f8b6141e"
  },
  "name": "Мялькіна Н.О.",
  "composition": "С.Цинцадзе. ''Сачідао''",
  "videoUrl": "https://drive.google.com/file/d/159djSrzI1AvL5pkCl0vnYDsHQLTnd5lo/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "6098c8f6683dda47f8b6141f"
  },
  "name": "Нікітіна І.Р.",
  "composition": "Б.Лятошинський. ''Мелодія''",
  "videoUrl": "https://drive.google.com/file/d/1yQyO0Q65WvHnvY28xBl3shW-Htdu4239/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "6098c8f6683dda47f8b61420"
  },
  "name": "Нікітіна І.Р.",
  "composition": "Сл. А.М'ястківського, муз.В.Верменича ''Підкручу я чорнії вуса''",
  "videoUrl": "https://drive.google.com/file/d/1u_7UQDuOCDqJJj1q5lhEFPEoxd_PU3jY/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "6098c8f6683dda47f8b61421"
  },
  "name": "Саєнко Т.Ю. ",
  "composition": "Ж.Массне. ''Роздум''",
  "videoUrl": "https://drive.google.com/file/d/1JlAoY-AAJEyI-rIRDCu7UnywxvrWEBBw/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "6098c8f6683dda47f8b61422"
  },
  "name": "Саєнко Т.Ю., ",
  "composition": "Т.Чупак. ''Весняний рок-н-ролл''",
  "videoUrl": "https://drive.google.com/file/d/1T5-IUNUuQmUvFVWYlY6SAVej-TIqmbrq/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "6098c8f6683dda47f8b61423"
  },
  "name": "Савчук Т.І.  ",
  "composition": "1)Дж.Вільямс, аранж.А.Теплицької.''Колискова для ангела'', 2)В.Козлов,перекл. для домри Є.Жукова. ''П'єса у стилі фламенко''",
  "videoUrl": "https://drive.google.com/file/d/17Tgiuogivsh3xwjFXi5a1oRU-okkP960/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "6098c8f6683dda47f8b61424"
  },
  "name": "Смірнова І.Ю.",
  "composition": "А. Шумакова. ''Танго Евіти''",
  "videoUrl": "https://drive.google.com/file/d/11CkziRvYJvniW7cia7y9EkI85snLJw7x/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "6098c8f6683dda47f8b61425"
  },
  "name": "Смірнова І.Ю.",
  "composition": "В.Гомоляка. ''Іспанський танець''",
  "videoUrl": "https://drive.google.com/file/d/1iOUJN21BvDdzsL0oP0atvsEmoqgUdpYC/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "6098c8f6683dda47f8b61426"
  },
  "name": "Смолянінова С.М. ",
  "composition": "1)А.Дворжак. Концерт для скрипки ля мінор, І ч.; 2)М.Скорик. ''Карпатська рапсодія''",
  "videoUrl": "https://drive.google.com/file/d/1tlsrMkQp0UVq0ywtJ01LpHKPsmFOpHnO/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "6098c8f6683dda47f8b61427"
  },
  "name": "Старинська М.А. ",
  "composition": "1)Ю.Шинкаренко.Варіації; 2)Е.Боцца.''Арія''",
  "videoUrl": "https://drive.google.com/file/d/1LsWzV_Lt1z0gGXULSegouckY9RZroG7h/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "6098c8f6683dda47f8b61428"
  },
  "name": "Трепак М.І.",
  "composition": "1)Ж.Демерссман. Фантазія, 2)П.Ітурральде. ''Маленький чардаш''",
  "videoUrl": "https://drive.google.com/file/d/1TMSKHpEcmM3K7hiZzyY3g4K_8MtHbH9L/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "6098c8f6683dda47f8b61429"
  },
  "name": "Єрьоміна О.Г. ",
  "composition": "1) М.Дремлюга. Поема-рапсодія, 2) С.Орфеєв.''Веснянка''",
  "videoUrl": "https://drive.google.com/file/d/1Y6OKUOoJb1ju3VzS4FCtO4guBLHD910P/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "6098c8f6683dda47f8b6142a"
  },
  "name": "Кадук Т.Ю.",
  "composition": " 1)К.М.Вебер.Концерт для кларнета №1,І ч.; 2) Я.Мединьш. Романс",
  "videoUrl": "https://drive.google.com/file/d/1kWBHYUYRmXpm5BCGW9bnt8y9rixgPQZ4/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "6098c8f6683dda47f8b6142b"
  },
  "name": "Новікова М.М.",
  "composition": "Обр. Д.Задора. ''Серед села дичка''",
  "videoUrl": "https://drive.google.com/file/d/10aWVlOe3F-ssQhTVqkFng8GJKGJEwU80/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "6098c8f6683dda47f8b6142c"
  },
  "name": "Новікова М.М. ",
  "composition": "П.І.Чайковський.''Забыть так скоро''",
  "videoUrl": "https://drive.google.com/file/d/1tw5MNU-5fuXQoSOHpWtaGvGjZxcfMAfm/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "6098c8f6683dda47f8b6142d"
  },
  "name": "Сирота О.М.",
  "composition": "1)К.Кудрявцев. ''Один день з життя дятла'', 2)О.Бец.''Українське інтермецо''",
  "videoUrl": "https://drive.google.com/file/d/1SejB1id_PU7Xg-w5fzKUvJ0EoOnFsDMC/preview",
  "group": "архів"
}];
let ensemble = [{
  "id": {
    "$oid": "6098d647683dda47f8b61437"
  },
  "name": "Ф-ний дует (Журавель С., Артеменко С.)",
  "composition": "1)Ю.Щуровський. ''Іспанський танець'', 2)Обр.М.Попова. ''Єврейські мотиви''",
  "videoUrl": "https://drive.google.com/file/d/1KvcEE7qPS0raOCqd8saMEHo-y0UDIpCh/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "6098d647683dda47f8b61438"
  },
  "name": "Ф-ний дует  (Пилипчук Н., Кавун Є.)",
  "composition": "1) В.Алексеєв.'' На прогулянці'', 2)О.Петрова. ''Цирк''",
  "videoUrl": "https://drive.google.com/file/d/1nELotwqAz9C7d09G4NVBVvbRyKL958rs/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "6098d647683dda47f8b61439"
  },
  "name": "Ф-ний дует  (Радковська А., Кузьмич). ",
  "composition": "А.Шнітке. ''Шинель''",
  "videoUrl": "https://drive.google.com/file/d/1M4pazNI_Tyv2sDMW9oB9Qem36I5DRZuR/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "6098d647683dda47f8b6143a"
  },
  "name": "Ф-ний дует  (Радковська А., Кузьмич). ",
  "composition": "О. Науменко.''Час великих очікувань''",
  "videoUrl": "https://drive.google.com/file/d/1LBOe_wFlC_yzt_FfkRbC8-90cVu3stVO/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "6098d647683dda47f8b6143b"
  },
  "name": "Ф-ний дует  (Сікора Р. Черепущак М.). ",
  "composition": "1)О.Науменко. ''Коломийка'', 2)Е.Гріг-Г.Фіртич.''Танець Анітри''",
  "videoUrl": "https://drive.google.com/file/d/1ORTzw-plehQvAAOinOrdqnHtnU_oCZj5/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "6098d647683dda47f8b6143c"
  },
  "name": "Ф-ний дует ''Mycraft'' (Єрмоленко Д., Шибанова В.) ",
  "composition": "1)М.Скорик. ''Мелодія'',         2)О.Хромушин. ''Друкарська машинка''",
  "videoUrl": "https://drive.google.com/file/d/1Auvo44aBYTG3vKxsT2hQD0hmkg1Edla7/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "6098d647683dda47f8b6143d"
  },
  "name": "Ф-ний дует (Бондаренко М., Слінченко Ю.) ",
  "composition": "О.Секрет.''Прогулянка Добермана''",
  "videoUrl": "https://drive.google.com/file/d/11QSAdkwn3iu54kR3hxnh3Hg0C_zpP-ZU/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "6098d647683dda47f8b6143e"
  },
  "name": "Ф-ний дует (Бондаренко М., Слінченко Ю.) ",
  "composition": "П.Чайковський.'' Італійська пісенька''",
  "videoUrl": "https://drive.google.com/file/d/1ZT-3uCrzbGJtMc0oLwtgJqTorz9jDYes/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "6098d647683dda47f8b6143f"
  },
  "name": "Ф-ний дует (Вашуріна В., Єжонков А.).",
  "composition": "1) Г.Бєлов.''Урасіма і Чарівна Черепаха'', 2)О. Польовий. ''Подорож в Альпи''",
  "videoUrl": "https://drive.google.com/file/d/1jChvMBrDwyxKk3AJEECSBE7Y_kCLRh8s/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "6098d647683dda47f8b61440"
  },
  "name": "Ф-ний дует (Гембицька О., Кузло К.).",
  "composition": "1)К.Ховард. ''Чарльстон'', 2)Дж. Шірінг. ''Колискова''",
  "videoUrl": "https://drive.google.com/file/d/1tLNVlhurZUdHx44MchS4qm251eS39roQ/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "6098d647683dda47f8b61441"
  },
  "name": "Ф-ний дует (Дерябіна С. та Васильєва В.).",
  "composition": "1)А.Діабеллі. Соната ре мажор, 2)Л.Шукайло. ''Гумореска''",
  "videoUrl": "https://drive.google.com/file/d/1yJQBfg7c_BoQqXMmAYqNYQCnYtawZ9To/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "6098d647683dda47f8b61442"
  },
  "name": "Ф-ний дует (Кришталович М., Кришталович І.) ",
  "composition": "Дж.Гершвін. ''Clap you hand''",
  "videoUrl": "https://drive.google.com/file/d/1MAJeBVnftEdhcio47nDnUgcjGGTwK8Cj/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "6098d647683dda47f8b61443"
  },
  "name": "Ф-ний дует (Кришталович М., Кришталович І.)",
  "composition": "'Колядка'', обр. О.Закалюжної",
  "videoUrl": "https://drive.google.com/file/d/1pqxYZTvFyrrj6dTpT58UUPSOPHM-hZte/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "6098d647683dda47f8b61444"
  },
  "name": "Ф-ний дует (Ланський Є., Ланська О.)",
  "composition": "1)Е.Гріг. Арія із сюїти ''З часів Хольберга'', 2)В.Птушкін. ''Бренфордська відьма''",
  "videoUrl": "https://drive.google.com/file/d/18OUsCGQBs3IhlX6it-s3Txuo07M3Ns0H/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "6098d647683dda47f8b61445"
  },
  "name": "Ф-ний дует (Симоненко Т., Федина А.)",
  "composition": "1) Дж.Гершвін.''Коханий мій''; 2) П.Моріа. ''Манует''",
  "videoUrl": "https://drive.google.com/file/d/1hVekh8_5MOUJDgJtXI8i4GBdRQwCAekt/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "6098d647683dda47f8b61446"
  },
  "name": "Ф-ний дует (Скопець А., Мурзак Ю.). ",
  "composition": "Т.Остен.''Танець ляльок''",
  "videoUrl": "https://drive.google.com/file/d/1EFzyijuwAFNj8v-TlraiI_PkuHGqX94E/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "6098d647683dda47f8b61447"
  },
  "name": "Ф-ний дует (Скопець А. Мурзак Ю.) ",
  "composition": "Л. Жульєва.''Прогулянка з татом''",
  "videoUrl": "https://drive.google.com/file/d/1VZr2V-Hv8MIF8KWgZGfJAyuEE7maqWop/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "6098d647683dda47f8b61448"
  },
  "name": "Ф-ний дует (Троценко А., Якуніна О.В.)",
  "composition": "1)К.М.Вебер. Соната до мажор, І ч.; 2)А.Комлікова. ''Спогад''",
  "videoUrl": "https://drive.google.com/file/d/1aYNB8jH0Jy4SP3ufAceQ-mJ29lPr_rTw/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "6098d647683dda47f8b61449"
  },
  "name": "Ф-ний дует (Філіпов І., Марченко Л.)",
  "composition": "1)Й.С.Бах.''Жарт'' 2)М.Леонтович.''Щедрик''",
  "videoUrl": "https://drive.google.com/file/d/1phWTyIJb7FzqNQFeUqE5x1lYFZ59Wugz/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "6098d647683dda47f8b6144a"
  },
  "name": "Ф-ний дует (Хелман В., Хелман В.)",
  "composition": "1)У.Гіллок.''На паризькому бульварі'', 2)Н.Смірнова.''Бразильський карнавал''",
  "videoUrl": "https://drive.google.com/file/d/17c32CI0m_kNJXZkrHkXQe52TdfHWPl6O/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "6098d647683dda47f8b6144b"
  },
  "name": "Ф-ний квартет ''Sforzando''.",
  "composition": " О.Циганков. ''Тустеп''",
  "videoUrl": "https://drive.google.com/file/d/1UQkZ11UGVlqhR3sradpboQpK9EEyaiqo/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "6098d647683dda47f8b6144c"
  },
  "name": "Ф-ний квартет ''Sforzando''.",
  "composition": "Е. Гріг.''В печері гірського короля''",
  "videoUrl": "https://drive.google.com/file/d/1STLnt8IU5nlY-G1dqfbKuRa1B_Z8TSkY/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "6098d647683dda47f8b6144d"
  },
  "name": "Ф-ний дует (Вихрист М., Фєдосєєв Н.)",
  "composition": "1)С.Прокоф'єв. Марш, 2)В.Лютославський. Варіації на тему Паганіні",
  "videoUrl": "https://drive.google.com/file/d/1nzRHXJKtAbdx7PwbB5d4XFGxBNctpNEk/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "6098d647683dda47f8b6144e"
  },
  "name": "Ф-ний дует (Вітюк В, Березовська Є.)",
  "composition": "1)Й.Бах (Вівальді). Концерт для органа ля мінор, 2)А.П'яцолла. ''Лібертанго''",
  "videoUrl": "https://drive.google.com/file/d/1nf01Ef6OVOyLAJUUjBYyIKNs3MZe_PFv/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "6098d647683dda47f8b6144f"
  },
  "name": "Ф-ний дует (Боровець О., ілюстратор)",
  "composition": "Й.С.Бах.''Арія'' (''Страсті за Матвієм'')",
  "videoUrl": "https://drive.google.com/file/d/1H1akQUdR7QKRO4P3hDY6_tZtmdSrk0J1/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "6098d647683dda47f8b61450"
  },
  "name": "Ф-ний дует (Боровець О.,ілюстратор). ",
  "composition": "К.Орф.''О,Фортуно'' (''Карміна Бурана'')",
  "videoUrl": "https://drive.google.com/file/d/19kOIBTdIKKQZ6nXVgPiZH3Y8mycWpwBy/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "6098d647683dda47f8b61451"
  },
  "name": "Ф-ний дует (Клименко М., Діордієва М.)",
  "composition": "1) С.Рахманінов. ''Вокаліз'', 2)Д.Мійо.''Бразильєра''",
  "videoUrl": "https://drive.google.com/file/d/1u81dAAtlDofq4pnyDtYg-SxGB4jGB3sE/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "6098d647683dda47f8b61452"
  },
  "name": "Ф-ний дует (Козак І., Таєр-Ульянова К.). ",
  "composition": "A.  П'яццола. ''Лібертанго''",
  "videoUrl": "https://drive.google.com/file/d/1y6YqFtBPGMlXzEQL8uu3BL4UkrMze4jb/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "6098d647683dda47f8b61453"
  },
  "name": "Ф-ний дует (Козак І. та Таєр-Ульянова К.). ",
  "composition": "Е. Гріг. ''Норвежський танець''",
  "videoUrl": "https://drive.google.com/file/d/1Ttfi4m7P1ouNJEHDXiJna7X3beQPzrfu/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "6098d647683dda47f8b61454"
  },
  "name": "Ф-ний дует (Костечко А., Кондратюк М. ).",
  "composition": "М. К.Дебюссі. ''У човні''",
  "videoUrl": "https://drive.google.com/file/d/1hRWzCLXIUU6XpDWZ3EisI7Q5NZHzDdio/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "6098d647683dda47f8b61455"
  },
  "name": "Ф-ний дует (Костечко А., Кондратюк М.).",
  "composition": "Ю.Весняк. ''Карлсон''",
  "videoUrl": "https://drive.google.com/file/d/1A31VrR5d5dXT8kQWtNyGkxfy7bKI5MDU/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "6098d647683dda47f8b61456"
  },
  "name": "Ф-ний дует (Мацієвсьа М., Папієва К.). ",
  "composition": "1)М.Метнер.''Російський хоровод'', 2)А.П'яццола.''Велике танго''",
  "videoUrl": "https://drive.google.com/file/d/16AngsasGuAshoDZyg9idljB8xoMDv4vC/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "6098d647683dda47f8b61457"
  },
  "name": "Ф-ний дует  (Касяненко О.В., Гордієнко І.О.) ",
  "composition": "1) А.Бабаджанян. ''Ноктюрн'', 2)Ю. Щуровський. ''Гумористичний танець''",
  "videoUrl": "https://drive.google.com/file/d/1_SXAFQDw_Bm4YK-qcy6Xs4kFoW4H3DaI/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "6098d647683dda47f8b61458"
  },
  "name": "Ф-ний дует ''Елегія''",
  "composition": " 1)М.Скорик. ''Мелодія'', 2)Л.Карпенко.''Віночок улюблених мелодій''",
  "videoUrl": "https://drive.google.com/file/d/1ckZw0HssiyEdbSSHBqOyawqSftAk1wUj/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "6098d647683dda47f8b61459"
  },
  "name": "Ф-ний дует (Григор'єва Г.А. , Якуніна О.В.)",
  "composition": "1)Ф.Шуберт.''Військовий марш'' 2)А.Комлікова. ''На маскараді''",
  "videoUrl": "https://drive.google.com/file/d/1UCaJ_qYUapyM-HBhruWb-h7IFySqk_sU/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "6098d647683dda47f8b6145a"
  },
  "name": "Ф-ний дует (Косенко О.В., Касумова О.Д.).",
  "composition": "1)А. Цфасман. ''Ліричний вальс'', 2)М.Мінков. ''Старий рояль''",
  "videoUrl": "https://drive.google.com/file/d/1zGOKunxIoHd3Uj5FHvdWyN-rvWF7n6V-/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "6098d647683dda47f8b6145b"
  },
  "name": "Ф-ний квартет  (Васенко С., Васенко М., Хавалко Т.,Бичков'як К.). ",
  "composition": "1)А.Вівальді.''Зима''; 2)Ф.Мерк'юра.''Богемна рапсодія''",
  "videoUrl": "https://drive.google.com/file/d/1B96nEC3vKYRd8OgTXgPiVVX8VB-MSSdY/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "6098d647683dda47f8b6145c"
  },
  "name": "Ф-ний квартет ''ALLA BREVE''.",
  "composition": "І.Стравінський.Фрагмент із балету ''Петрушка''",
  "videoUrl": "https://drive.google.com/file/d/1bifW8OBv1E61qd184EaJjsvOtrXrRrkV/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "6098d647683dda47f8b6145d"
  },
  "name": "Ф-ний квартет ''ALLA BREVE''.",
  "composition": "К.Гурлітт.''Віденський вальс''",
  "videoUrl": "https://drive.google.com/file/d/1QjBrKWTkCbiS9Ej5k4pHbHRDsN2D1caM/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "6098d647683dda47f8b6145e"
  },
  "name": "Фортепіанний ансамбль ''ЕКСПРЕСІЯ''.",
  "composition": "О.Науменко. 1)''Часи великих сподівань'', 2)А.П'яццола. ''Лібертанго''",
  "videoUrl": "https://drive.google.com/file/d/1iUlYKrIKsJ1inuCqAOS0MY4LqGrmcp_k/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "6098d647683dda47f8b6145f"
  },
  "name": "Фортепіанний квартет (Щукіна О.,Сердюк Г., Шаповал О., Максименко В.)",
  "composition": "1) Л.Лавіньяк.''Галоп-марш''; 2)Г.Гурліт. Ноктюрн",
  "videoUrl": "https://drive.google.com/file/d/1IYbNIC2Ex6NxxM8ymbCtL2muPAQ4RhMg/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "6098d647683dda47f8b61460"
  },
  "name": "Ф-ний ансамбль ( Смик Л.Ю.,Шекель О.О.). ",
  "composition": "К. Гуаставіно. ''Романс''",
  "videoUrl": "https://drive.google.com/file/d/1dHBznDmpE-0vWyryMf86XCkFb8sP_HY_/preview",
  "group": "архів"
}, {
  "id": {
    "$oid": "6098d647683dda47f8b61461"
  },
  "name": "Ф-ний ансамбль (Смик Л.Ю., Шекель О.О.). ",
  "composition": "О.Цфасман.''Сніжинки''",
  "videoUrl": "https://drive.google.com/file/d/19PTe-J_cS6DTSO6iZFixgb5g4ZxpazRT/preview",
  "group": "архів"
}];
let archive = myCards.concat(concertmasters).concat(ensemble);

/***/ }),

/***/ "./src/store/CardStore.jsx":
/*!*********************************!*\
  !*** ./src/store/CardStore.jsx ***!
  \*********************************/
/*! exports provided: cardStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cardStore", function() { return cardStore; });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _Archive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Archive */ "./src/store/Archive.jsx");
/* harmony import */ var _FortepianoSolo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FortepianoSolo */ "./src/store/FortepianoSolo.jsx");



const group1 = `Номінація "Фортепіано соло"`;
const group2 = `Номінація "Фортепіанний ансамбль"`;
const group3 = `Номінація "Концертмейстер"`;
let myCards = _Archive__WEBPACK_IMPORTED_MODULE_1__["archive"];
myCards = myCards.concat(_FortepianoSolo__WEBPACK_IMPORTED_MODULE_2__["fortepianoSolo"]);
/** CODE **/

function filmReducer(state = {
  cardCount: myCards.length,
  cards: myCards,
  isDataInPlace: true,
  error: ""
}, action) {
  switch (action.type) {
    case 'RFS_PAGE':
      return {
        cardCount: -2,
        cards: [],
        isDataInPlace: false,
        error: ""
      };

    case 'INFO_PAGE':
      return {
        cardCount: -1,
        cards: [],
        isDataInPlace: false,
        error: ""
      };

    case 'ARCHIVE':
      console.log("> Архів");
      let archiveCards = myCards.filter(card => card.group === "архів").slice();
      return {
        cards: archiveCards,
        isDataInPlace: true,
        cardCount: myCards.length,
        error: ""
      };

    case 'ALL':
      console.log("> Усі відео");
      return {
        cards: myCards,
        isDataInPlace: true,
        cardCount: myCards.length,
        error: ""
      };

    case 'group-1':
      let newCards = myCards.filter(card => card.group === group1).slice();
      return {
        cards: newCards,
        isDataInPlace: true,
        cardCount: newCards.length,
        error: ""
      };

    case 'group-2':
      let newCards1 = myCards.filter(card => card.group === group2).slice();
      return {
        cards: newCards1,
        isDataInPlace: true,
        cardCount: newCards1.length,
        error: ""
      };

    case 'group-3':
      let newCards2 = myCards.filter(card => card.group === group3).slice();
      return {
        cards: newCards2,
        isDataInPlace: true,
        cardCount: newCards2.length,
        error: ""
      };

    case 'SEARCH':
      let q = action.query.toLowerCase();
      console.log(`> Пошук: ${q}`);
      let newCards3 = myCards.filter(card => {
        let cardName = card.name.toLowerCase();
        let bool = cardName.startsWith(q) || cardName.includes(q);
        console.log(`Testing ${cardName} on query ${q}, result is ${bool}`);
        return bool;
      });
      return { ...state,
        cards: newCards3,
        isDataInPlace: true,
        cardCount: newCards3.length,
        error: ""
      };

    case 'ERROR':
      console.log(`> Помилка`);
      return {
        error: action.msg,
        cardCount: 1,
        cards: [],
        isDataInPlace: true
      };

    default:
      return {
        cards: myCards,
        isDataInPlace: true,
        cardCount: myCards.length,
        error: ""
      };
  }
}

const cardStore = Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(filmReducer);
cardStore.subscribe(() => console.log("FilmsStore state was changed, number of cards: " + cardStore.getState().cardCount));

/***/ }),

/***/ "./src/store/FortepianoSolo.jsx":
/*!**************************************!*\
  !*** ./src/store/FortepianoSolo.jsx ***!
  \**************************************/
/*! exports provided: fortepianoSolo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fortepianoSolo", function() { return fortepianoSolo; });
let fortepianoSolo = [{
  "videoUrl": "https://youtube.com/shorts/VHtYv6Xo28E?feature=share",
  "composition": "В. Дамкомб. Сонатина до мажор, І частина",
  "name": "Ваширенко Діана, 12.10.2013 р.н.",
  "id": {
    "$oid": "30831872970342"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtu.be/i63bXHyKWoA",
  "composition": "М. Шентюрк (Терещук). «Менует граційної балерини»",
  "name": "Ваширенко Діана, 12.10.2013 р.н.",
  "id": {
    "$oid": "30831873060279"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtu.be/6EdS2G0VHcg",
  "composition": "Й. Бах. Менует соль мажор",
  "name": "Вовк Артур, 20.10.2014 р.н.",
  "id": {
    "$oid": "30831873121713"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtu.be/LFS5rjlFf3Q",
  "composition": "М. Жербін. «Український танець»",
  "name": "Вовк Артур, 20.10.2014 р.н.",
  "id": {
    "$oid": "30831873176885"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtu.be/qTxnzQqFRZY",
  "composition": "Й. Бах. «Маленька прелюдія» соль мінор",
  "name": "Житарюк Кіра, 10.09.2013 р.н.",
  "id": {
    "$oid": "30831873229504"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtu.be/cRbs9DO-M58",
  "composition": "А. Хуторянський. «Вогнівочка-стрибунівочка»",
  "name": "Житарюк Кіра, 10.09.2013 р.н.",
  "id": {
    "$oid": "30831873317268"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtu.be/anoheqQw_Vo",
  "composition": "Л. Шукайло. «Лебідь»",
  "name": "Кисельова Єлизавета, 11.01.2014 р.н.",
  "id": {
    "$oid": "30831873362939"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtu.be/WnZY6n9Cn_4",
  "composition": "О. Гедіке. Етюд до мажор",
  "name": "Кисельова Єлизавета, 11.01.2014 р.н.",
  "id": {
    "$oid": "30831873400646"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtu.be/0iMoae2japo",
  "composition": "С. Майкапар. «В кузні»; Б. Фред. «Танець ельфів»",
  "name": "Кравчук Мілана, 09.01.2015 р.н.",
  "id": {
    "$oid": "30831873462796"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtu.be/RUxZI4i9Kgc",
  "composition": "П. Захаров. «Карусель»",
  "name": "Ліпкан Аліна, 10.10.2014 р.н.",
  "id": {
    "$oid": "30831873498210"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtu.be/CWt9CJJljf4",
  "composition": "Б. Фільц. «Древня казка»",
  "name": "Ліпкан Аліна, 10.10.2014 р.н.",
  "id": {
    "$oid": "30831873545829"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtu.be/l2BujCM4ydk",
  "composition": "Я. Бобалік. «Журавлина пісня»; В. Барвінський. «Сонечко»",
  "name": "Ляшик Анна, 16.06.2013 р.н.",
  "id": {
    "$oid": "30831873587436"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtu.be/OaAd0HOAEtY",
  "composition": "Й.С. Бах. «Маленька прелюдія» до мінор; С. Борткевич. «У склепінні»; К. Черні. Етюд ре мажор, тв. 399",
  "name": "Марущак Вероніка, 22.07.2013 р.н.",
  "id": {
    "$oid": "30831873652874"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtube.com/watch?v=Ita5y9ybU28&feature=share",
  "composition": "Л. Бетховен. Сонатина",
  "name": "Митюк Арсен, 27.06.2014 р.н.",
  "id": {
    "$oid": "30831873715170"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtube.com/watch?v=sJv3PZ8RtS8&feature=share",
  "composition": "В. Косенко. Скерцино",
  "name": "Митюк Арсен, 27.06.2014 р.н.",
  "id": {
    "$oid": "30831873751388"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtu.be/xPJvUsHbtkY",
  "composition": "М. Вербицький, аранж. О. Шавардака. «Гімн України»",
  "name": "Озінковська Вікторія, 22.07.2013 р.н.",
  "id": {
    "$oid": "30831873795231"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtu.be/UA8auGQBg6Q",
  "composition": "Ю. Щуровський. «Шарманка»",
  "name": "Озінковська Вікторія, 22.07.2013 р.н.",
  "id": {
    "$oid": "30831873839182"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtu.be/mAucPI7VmH0",
  "composition": "К. Рейнеке. Сонатина соль мажор, І частина",
  "name": "Осика Роман, 25.06.2014 р.н.",
  "id": {
    "$oid": "30831873878121"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtu.be/1aG7Xyldz-E",
  "composition": "Українська народна пісня в обробці Г. Без\u2019язичного «Їхав козак на війноньку»",
  "name": "Осика Роман, 25.06.2014 р.н.",
  "id": {
    "$oid": "30831873918014"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtube.com/shorts/_WdGfSImyF4",
  "composition": "Ю. Зубай «Бабуся Ягуся»",
  "name": "Остапчук Катерина, 11.08.2013 р.н.",
  "id": {
    "$oid": "30831873949290"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtu.be/M0nxqiXdfzo",
  "composition": "В. Гіллок. Сарабанда",
  "name": "Остапчук Катерина, 11.08.2013 р.н.",
  "id": {
    "$oid": "30831874010494"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtube.com/shorts/MS3jIpoIFY4?feature=share",
  "composition": "А. Роулі. «Китайський хлопчик»",
  "name": "Пархоменко Євгенія, 08.04.2016 р.н.",
  "id": {
    "$oid": "30831874092377"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtube.com/shorts/0n5yyz0F9kg?feature=share",
  "composition": "Л. Шитте. «На скейтборді»",
  "name": "Пархоменко Євгенія, 08.04.2016 р.н.",
  "id": {
    "$oid": "30831874189923"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtu.be/NX2VafSwHSA",
  "composition": "П. Захаров. «Танець маленьких зірочок»",
  "name": "Пісоцька Соломія, 29.03.2016 р.н.",
  "id": {
    "$oid": "30831874242066"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtube.com/shorts/jx_ozYsL5EQ?feature=share",
  "composition": "І. Іордан. «Полювання на метелика»",
  "name": "Пісоцька Соломія, 29.03.2016 р.н.",
  "id": {
    "$oid": "30831874284924"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtube.com/shorts/tOeQT-UIKmA?feature=share",
  "composition": "М. Шентюрк (Терещук). «Грайливе зайченятко»",
  "name": "Примак Юлія, 02.03.2014 р.н.",
  "id": {
    "$oid": "30831874320527"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtu.be/lN4Zv48wPnY",
  "composition": "В. Гіллок. «Drifting clouds»",
  "name": "Примак Юлія, 02.03.2014 р.н.",
  "id": {
    "$oid": "30831874352964"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtu.be/uLQ0Yst_T4Y",
  "composition": "А. Андре. Сонатина соль мажор, І частина",
  "name": "Садовнік Есфір, 25.06.2014 р.н.",
  "id": {
    "$oid": "30831874407567"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtu.be/vaXOj74GjJM",
  "composition": "М. Екштейн. «Каприз гномів»",
  "name": "Садовнік Есфір, 25.06.2014 р.н.",
  "id": {
    "$oid": "30831874453541"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtu.be/1RK5vyNtLew",
  "composition": "Р. Шуман. «Перша втрата»",
  "name": "Садовнік Есфір, 25.06.2014 р.н.",
  "id": {
    "$oid": "30831874488466"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtu.be/BIIoMoGjmCQ",
  "composition": "Я. Бобалік. «Такий чудовий вечір»",
  "name": "Семенчук Вероніка,30.11.2013 р.н.",
  "id": {
    "$oid": "30831874531215"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtu.be/GQZGFR75FlY",
  "composition": "В. Дамкомб. Сонатина до мажор, ІІ,ІІІ частини",
  "name": "Семенчук Вероніка,30.11.2013 р.н.",
  "id": {
    "$oid": "30831874573650"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://www.youtube.com/watch?v=dkOChCdNmCQ",
  "composition": "В. Полянський. «Квітень. Вітерець повіяв» з циклу «Пори року. 12 п\u2019єс для фортепіано в джазових тонах»",
  "name": "Смірнова Аліса, 12.01.2014 р.н.",
  "id": {
    "$oid": "30831874637592"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://www.youtube.com/watch?v=UKwwS9siL40",
  "composition": "К. Черні. Сонатина до мажор",
  "name": "Смірнова Аліса, 12.01.2014 р.н.",
  "id": {
    "$oid": "30831874690514"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtu.be/36lWwvNXnCk",
  "composition": "1. Л. Шукайло. Прелюдія до мажор; Л. Бетховен. 2. Сонатина соль мажор, І частина",
  "name": "Теплицька Злата, 05.04.2015 р.н.",
  "id": {
    "$oid": "30831874738970"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtu.be/RJfXJYjB3ss",
  "composition": "1. І. Кулау. Сонатина соль мажор, І частина; 2. В. Гіллок. «Колібрі»",
  "name": "Ткаченко Діана, 20.08.2013 р.н.",
  "id": {
    "$oid": "30831874782123"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtu.be/SDA36NQmoC4",
  "composition": "1. М. Шентюрк (Терещук). «Маленька серенада»; 2. М. Екштайн. «Каприз гномів»",
  "name": "Турик Анна, 07.11.2013 р.н.",
  "id": {
    "$oid": "30831874837571"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtu.be/9zBiicmaIO0",
  "composition": "1. Ю. Щуровський. Танець; 2. Ф. Шуберт. Скерцо сі бемоль мажор",
  "name": "Удод Дар\u2019я, 03.01.2014 р.н.",
  "id": {
    "$oid": "30831874876086"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtu.be/jZusmJYsdkQ",
  "composition": "1. Українська народна пісня «Над річкою бережком», переклад  І. Берковича за обробкою М. Леонтовича; 2. Обр. Б. Шиптура. Коломийка",
  "name": "Халамейда Лук\u2019ян, 09.07.2014 р.н.",
  "id": {
    "$oid": "30831874927018"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtu.be/pwtGbFLZ69g",
  "composition": "1. І. Беркович. Концерт для фортепіано №2, ІІ частина; 2. Л. Іванюшина. «Карамель»",
  "name": "24.\tХом\u2019як Варвара,18.03.2016 р.н.",
  "id": {
    "$oid": "30831874968045"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtu.be/IQGX6VdiK7s",
  "composition": "Обробка Б. Шиптура. Коломийка",
  "name": "Чулкіна Надія, 17.05.2014 р.н.",
  "id": {
    "$oid": "30831875011911"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtu.be/wuTl2eDjeWw",
  "composition": "К. Вілтон. Сонатина до мажор",
  "name": "Чулкіна Надія, 17.05.2014 р.н.",
  "id": {
    "$oid": "30831875044798"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtube.com/watch?v=FT1tZdP2Vbc&feature=share",
  "composition": "О. Білаченко. Експромт фа мінор",
  "name": "Шамина Маргарита, 08.01.2014 р.н.",
  "id": {
    "$oid": "30831875076899"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtube.com/watch?v=hw-cAvT9HBA&feature=share",
  "composition": "П. Захарова. «Жарт-сувенір»",
  "name": "Шамина Маргарита, 08.01.2014 р.н.",
  "id": {
    "$oid": "30831875118563"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtu.be/V7ytHmu3pCc",
  "composition": "Й.С. Бах. Менует соль мажор",
  "name": "Шпак Денис, 26.09.2014 р.н.",
  "id": {
    "$oid": "30831875156372"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtu.be/SvoWQdkcFMM",
  "composition": "С. Борткевич. «Козак»",
  "name": "Шпак Денис, 26.09.2014 р.н.",
  "id": {
    "$oid": "30831875192121"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtu.be/utJa_A7GPto",
  "composition": "Л. Шітте. Етюд до мажор",
  "name": "Шпак Денис, 26.09.2014 р.н.",
  "id": {
    "$oid": "30831875225039"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtu.be/LTYcN8wEzjQ",
  "composition": "О. Гедіке. Етюд до мажор",
  "name": "Юзвак Єва, 14.06.2015 р.н.",
  "id": {
    "$oid": "30831875256639"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtube.com/shorts/erQmPy6GoxQ?feature=share",
  "composition": "І. Кореневська. «Дощик»",
  "name": "Юзвак Єва, 14.06.2015 р.н.",
  "id": {
    "$oid": "30831875302855"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtu.be/EUIDWQiKpcY",
  "composition": "К. Вілтон. Сонатина до мажор",
  "name": "Якимчук Кароліна, 15.12.2013 р.н.",
  "id": {
    "$oid": "30831875350565"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtu.be/aTtW5BCWXx8",
  "composition": "Л. Шитте. Маленька прелюдія",
  "name": "Якимчук Кароліна, 15.12.2013 р.н.",
  "id": {
    "$oid": "30831875385954"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtu.be/JjWg9VVoAjg",
  "composition": "Дж. Бастьєн. «Бджола»",
  "name": "Якимчук Кароліна, 15.12.2013 р.н.",
  "id": {
    "$oid": "30831875425823"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtu.be/9aGeFVoc0zY",
  "composition": "Д. Чімароза. Соната №15, 2 зошит",
  "name": "Агратіна Станіслав, 24.08.2011 р.н.",
  "id": {
    "$oid": "30831875464003"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtu.be/NW4Q3hwkdCY",
  "composition": "М. Скорик. «Жартівлива п\u2019єса» з циклу «З дитячого альбому»",
  "name": "Агратіна Станіслав, 24.08.2011 р.н.",
  "id": {
    "$oid": "30831875508367"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtu.be/KSisZTyWV4c",
  "composition": "1. Б. Фільц. «Ліричний прелюд»; 2. Ю. Шамо. Токата",
  "name": "Артьомова Дар\u2019я, 26.06.2010 р.н.",
  "id": {
    "$oid": "30831875541640"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtu.be/mpEMcxL9gYU",
  "composition": "1. Й.С. Бах. Арія з «Французької сюїти» до мінор; 2. А. Коломієць. «Гра-веснянка»",
  "name": "Бакаєвич Тимофій, 01.01.2012 р.н.",
  "id": {
    "$oid": "30831875584252"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtu.be/-IKiZqLzdBs",
  "composition": "Н. Нижанківський. Коломийка",
  "name": "Бащій Вікторія, 11.06.2012 р.н.",
  "id": {
    "$oid": "30831875626819"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtu.be/QWck3N5f8WM",
  "composition": "Ф. Бюргмюллер. Етюд",
  "name": "Бащій Вікторія, 11.06.2012 р.н.",
  "id": {
    "$oid": "30831875661199"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://www.youtube.com/watch?v=VylIZoK8hL4&ab_channel=PavelRybak",
  "composition": "П. Чайковський. «Хвороба ляльки»",
  "name": "Безсмольна Зоряна, 22.10.2013 р.н.",
  "id": {
    "$oid": "30831875696590"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://www.youtube.com/watch?v=txm2JB9ChUg&ab_channel=PavelRybak",
  "composition": "М. Мієр. «Downright Happy Rag»",
  "name": "Безсмольна Зоряна, 22.10.2013 р.н.",
  "id": {
    "$oid": "30831875761249"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtu.be/CsaBEtIVMZw",
  "composition": "О. Герасименко. «Море»; 2. Н. Торопова. Токата",
  "name": "Березська Любов, 25.10.2012 р.н.",
  "id": {
    "$oid": "30831875806955"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtube.com/shorts/vhecrrySG7U?feature=share",
  "composition": "Ю. Щуровський. Інвенція",
  "name": "Бондарчук Мирослава, 18.04.2011 р.н.",
  "id": {
    "$oid": "30831875839230"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtu.be/sQPMkTnbM1g",
  "composition": "Ж. Колодуб. Етюд-картинка",
  "name": "Бондарчук Мирослава, 18.04.2011 р.н.",
  "id": {
    "$oid": "30831875868526"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtu.be/1QOgMLy4zjA",
  "composition": "О. Тимошенко. Елегія",
  "name": "Волощук Емілія, 19.06.2011 р.н.",
  "id": {
    "$oid": "30831875910177"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtu.be/VeUx_bBIACE",
  "composition": "Т. Петриненко, обробка М. Шентюрк. «Україна»",
  "name": "Волощук Емілія, 19.06.2011 р.н.",
  "id": {
    "$oid": "30831875976340"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtu.be/a8pwOhSpuss",
  "composition": "1. Ю. Щуровський. Гопак; 2. М. Шентюрк (Терещук). Балада",
  "name": "Гаврилюк Софія, 29.06.2012 р.н.",
  "id": {
    "$oid": "30831876142868"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtu.be/gRhA6bCFlbQ",
  "composition": "1. Л. Шукайло (Терещук). Прелюдія; 2. М. Шентюрк (Терещук). «Танець кульбабок»",
  "name": "Галан Ірина, 17.05.2010 р.н.",
  "id": {
    "$oid": "30831876235484"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtu.be/SysGvuc-AIo",
  "composition": "1. С. Борткевич. «Мрія»; 2. Е. Гріг. «Серце поета»",
  "name": "Гасратов Олексій, 24.08.2010 р.н.",
  "id": {
    "$oid": "30831876284462"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtu.be/aK3jaBSDt48",
  "composition": "1. Й.С. Бах. Двоголосна інвенція до мажор; 2. М. Мошковський. Етюд сі бемоль мажор",
  "name": "Герасименко Олександра, 01.06.2011 р.н.",
  "id": {
    "$oid": "30831876331730"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtu.be/l_44I_7RSTk",
  "composition": "1. Б. Фільц. «Меланхолійний вальс»; 2. Л. Іваненко. «Дощик»",
  "name": "Гладка Дарина, 31.01.2012 р.н.",
  "id": {
    "$oid": "30831876382342"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtu.be/lOTcBimymfY",
  "composition": "1. Й.С. Бах. Маленька прелюдія ре мінор; 2. Ф. Шопен. Cantabile",
  "name": "Гловацька Поліна, 15.12.2010 р.н.",
  "id": {
    "$oid": "30831876451450"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtu.be/OE5yQWtFWq4",
  "composition": "Й.С. Бах. Двоголосна інвенція ля мінор",
  "name": "Григоренко Марія, 13.09.2012 р.н.",
  "id": {
    "$oid": "30831876519547"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtu.be/0y6Umn2J7Hw",
  "composition": "М. Терещук (Шентюрк). «Пробудження» з циклу «Contrego»",
  "name": "Григоренко Марія, 13.09.2012 р.н.",
  "id": {
    "$oid": "30831877530109"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtu.be/x8z5WAwQaXs",
  "composition": "1. Л. Бетховен. Соната №20, тв.49, І частина; 2. О. Білаш. Баркарола",
  "name": "Дейнека Соломія, 19.05.2011 р.н.",
  "id": {
    "$oid": "30831877582235"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtu.be/YJTRfMlqwKE",
  "composition": "1. Ф. Кулау. Сонатина до мажор, тв.55, І частина; 2. Л. Волошина. «Зимовий ранок»",
  "name": "Дишлевий Євген, 30.01.2011 р.н.",
  "id": {
    "$oid": "30831877622334"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtu.be/bQ5kVuuua2w",
  "composition": "С. Людкевич. «Старовинна пісня»",
  "name": "Єрега Мар\u2019яна, 04.08.2012 р.н.",
  "id": {
    "$oid": "30831877657106"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtu.be/RilQDkgz1Xg",
  "composition": "М. Мордасов. «Давним давно»",
  "name": "Єрега Мар\u2019яна, 04.08.2012 р.н.",
  "id": {
    "$oid": "30831877682293"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtu.be/vCuH7rFtALc",
  "composition": "Л. Іваненко. Фантазія на тему української народної пісні «Гандзя»",
  "name": "Жегало Надія, 16.09.2012 р.н.",
  "id": {
    "$oid": "30831877768686"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtu.be/lFhOTWGnQps",
  "composition": "Б. Фільц. «Сумна пісня»",
  "name": "Жегало Надія, 16.09.2012 р.н.",
  "id": {
    "$oid": "30831877803710"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtu.be/UthIv-LwPp8",
  "composition": "Я. Бобалік. «Бурхливий водоспад»",
  "name": "Іванюк Вірсавія, 05.07.2010 р.н.",
  "id": {
    "$oid": "30831877833978"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtu.be/MAvoQAl1q6Y",
  "composition": "І. Щербаков. «Елегія київських пагорбів»",
  "name": "Іванюк Вірсавія, 05.07.2010 р.н.",
  "id": {
    "$oid": "30831877869906"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtu.be/3KsMFoZ2QzE",
  "composition": "В. Гіллок. Фламенго",
  "name": "Іванюк Маріам, 02.04.2013 р.н.",
  "id": {
    "$oid": "30831877896466"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtu.be/-MePEpXlfVU",
  "composition": "І. Беркович. Прелюдія №5 ре мажор",
  "name": "Іванюк Маріам, 02.04.2013 р.н.",
  "id": {
    "$oid": "30831877924945"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtu.be/ehMI9UfWynU",
  "composition": "Ф. Кулау. Сонатина №1",
  "name": "Канцер Богдана, 10.01.2012 р.н.",
  "id": {
    "$oid": "30831877951260"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtu.be/egCevoIZxz4",
  "composition": "М. Завадський. «Шумка»",
  "name": "Канцер Богдана, 10.01.2012 р.н.",
  "id": {
    "$oid": "30831877985855"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtu.be/Kpf_L47zjXk",
  "composition": "1. В. Квасневський. «Думка»; 2. Е. Гріг. «Поетична картинка» №1",
  "name": "Клімович Єлизавета, 12.10.2011 р.н.",
  "id": {
    "$oid": "30831878020382"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtube.com/watch?v=Qj8phsWaDks&feature=share",
  "composition": "Ю Щуровський, Баркарола",
  "name": "Ковальчук Анна, 14.11.2010 р.н.",
  "id": {
    "$oid": "30831878047799"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtu.be/Ou-NwUFU350",
  "composition": "Г. Сасько. Регтайм",
  "name": "Ковальчук Анна, 14.11.2010 р.н.",
  "id": {
    "$oid": "30831878074201"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtu.be/S6NYKOOdGMA",
  "composition": "1. Українська народна пісні в обробці С. Климовського «Їхав    козак за Дунай»; 2. Т. Петриненко, обробка М. Шентюрк. «Україна»",
  "name": "Колесниченко Марк, 25.05.2011 р.н.",
  "id": {
    "$oid": "30831878125209"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtu.be/W3hIUoKY7Z4",
  "composition": "М. Шентюрк (Терещук). «Вальс-каприс»",
  "name": "Кондратюк Вероніка, 14.09.2012 р.н.",
  "id": {
    "$oid": "30831878155711"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtu.be/feULMWozzqo",
  "composition": "М. Майєр. «Фарби осені»",
  "name": "Кондратюк Вероніка, 14.09.2012 р.н.",
  "id": {
    "$oid": "30831878186022"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://www.youtube.com/watch?v=Z2Z7W0IfPqk",
  "composition": "1. Й.С. Бах. Алеманда з «Французької сюїти» мі бемоль мажор; 2. М. Лисенко. Мазурка до мінор",
  "name": "Коцирій Аріна, 20.08.2010 р.н.",
  "id": {
    "$oid": "30831878248609"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtube.com/watch?v=7z6STyDoowg&feature=share",
  "composition": "Л. Шукайло. Марш з сюїти «Цирк»",
  "name": "Кришталь Ян, 21.06.2012 р.н.",
  "id": {
    "$oid": "30831878301451"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtube.com/shorts/BRJ7qwf1uzc?feature=share",
  "composition": "С. Сосніна. «Дракон»",
  "name": "Кришталь Ян, 21.06.2012 р.н.",
  "id": {
    "$oid": "30831878326190"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://www.youtube.com/watch?v=ePDCw1DlCQg",
  "composition": "О. Яковчук. Полонез",
  "name": "Кулик Олеся, 16.01.2011 р.н.",
  "id": {
    "$oid": "30831878360772"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://www.youtube.com/watch?v=yJg3KKvYLig",
  "composition": "Л. Бетховен. «До Елізи»",
  "name": "Кулик Олеся, 16.01.2011 р.н.",
  "id": {
    "$oid": "30831878390516"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtu.be/SYZXb8Y8dSQ",
  "composition": "1. Й.С. Бах. Триголосна інвенція ре мажор; 2. Ф. Шопен. Мазурка, тв.67 №2",
  "name": "Лащ Нана, 01.11.2010 р.н.",
  "id": {
    "$oid": "30831878426536"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtu.be/rLif17n9Pmk",
  "composition": "Р. Глієр. «Ескіз» ре мажор",
  "name": "Легкий Максим, 17.08.2011 р.н.",
  "id": {
    "$oid": "30831878451699"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtu.be/AZmggpzzHVE",
  "composition": "К. Дебюссі. «Маленьке негреня»",
  "name": "Легкий Максим, 17.08.2011 р.н.",
  "id": {
    "$oid": "30831878476266"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtu.be/1kSGsBAU39w",
  "composition": "1. В. Моцарт. Сонатина до мажор, І частина; 2. В. Шукайло. Інтермецо",
  "name": "Мазепа Софія, 30.03.2013 р.н.",
  "id": {
    "$oid": "30831878507172"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtu.be/08Ko68iMFZ0",
  "composition": "Б. Фільц. «Закарпатська новелета» №2",
  "name": "Максютинська Надія, 10.08.2010 р.н.",
  "id": {
    "$oid": "30831878533883"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtube.com/shorts/tbRGr008Shg",
  "composition": "В. Гіллок. «Карнавал в Ріо»",
  "name": "Максютинська Надія, 10.08.2010 р.н.",
  "id": {
    "$oid": "30831878563838"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtu.be/7P5K77MchLM",
  "composition": "Л. Шукайло. «Котик і мишка»",
  "name": "Мєнь Анастасія, 08.03.2013 р.н.",
  "id": {
    "$oid": "30831878587451"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtu.be/3jJCvV1b-9g",
  "composition": "А. Б\u2019єль. Сонатина",
  "name": "Мєнь Анастасія, 08.03.2013 р.н.",
  "id": {
    "$oid": "30831878630783"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtu.be/PCrRWHfNfJc",
  "composition": "М. Дворжак, «Джазовий етюд» №2 до мажор",
  "name": "Нішпал Єва, 09.05.2010 р.н.",
  "id": {
    "$oid": "30831878670883"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtu.be/hm0GqTd8cng",
  "composition": "В. Логін. «Ліричний прелюд»",
  "name": "Нішпал Єва, 09.05.2010 р.н",
  "id": {
    "$oid": "30831878730857"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtu.be/FWscCzcsVlQ",
  "composition": "М. Екштейн. «Каприз гномів»",
  "name": "Олійник Микита, 31.12.2011 р.н. (2 рік навчання)",
  "id": {
    "$oid": "30831878759324"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtu.be/wr_Zv2JgH-c",
  "composition": "І. Новікова. «Гострий ритм»",
  "name": "Олійник Микита, 31.12.2011 р.н. (2 рік навчання)",
  "id": {
    "$oid": "30831878783075"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtu.be/_qxByMmsFwo",
  "composition": "Кимлик. «Мініатюрна Леонтовіана»",
  "name": "Остапчук Христина, 18.08.2011 р.н.",
  "id": {
    "$oid": "30831878807150"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtu.be/C0emBbFYIS0",
  "composition": "К. Гардель. «Por una cabeza»",
  "name": "Остапчук Христина, 18.08.2011 р.н.",
  "id": {
    "$oid": "30831878842650"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtu.be/gL2pMVYNYGM",
  "composition": "К. Нільсен. «Годинник з музикою»",
  "name": "Панченко Зоряна, 05.02.2013 р.н.",
  "id": {
    "$oid": "30831878866211"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtu.be/DqNXKXRvN1s",
  "composition": "Р. Глієр. Прелюдія",
  "name": "Панченко Зоряна, 05.02.2013 р.н.",
  "id": {
    "$oid": "30831878886068"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtu.be/q2dpG2exKGc",
  "composition": "1. Й.С. Бах. Триголосна інвенція №11; 2. Е. Гріг. Етюд, тв. 73 №5 (пам\u2019яті Шопена)",
  "name": "Пасенчук Каріна, 02.03.2011 р.н.",
  "id": {
    "$oid": "30831878929653"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtu.be/PqwGsO8tU7U",
  "composition": "Г. Штьольцель-Й. Бах. Менует соль мінор",
  "name": "Паскар Натан, 07.09.2012 р.н.",
  "id": {
    "$oid": "30831878967432"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtu.be/wEpMjCWi84w",
  "composition": "Л. Шитте. «Танець гномів»",
  "name": "Паскар Натан, 07.09.2012 р.н.",
  "id": {
    "$oid": "30831878989665"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtu.be/6uvluWvQ9cY",
  "composition": "1. Ю. Ремезенко. «Ранок в тумані, птахи над морем»; 2. Т. Остен. «Сон ляльки»",
  "name": "Плисюк Вероніка, 21.10.2011 р.н.",
  "id": {
    "$oid": "30831879029267"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtu.be/CT1O5z6T_Cc",
  "composition": "Ф. Кулау. Варіації соль мажор",
  "name": "Подлевська Карина, 27.07.2010 р.н.",
  "id": {
    "$oid": "30831879060710"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtu.be/bjwwWdL-PxE",
  "composition": "М. Вербицький , обр. для ф-но Б. Шиптура «Ще не вмерла України»",
  "name": "Подлевська Карина, 27.07.2010 р.н.",
  "id": {
    "$oid": "30831879094816"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtube.com/shorts/oPUczWpGT4I?feature=share",
  "composition": "Д. Циполі. Фегета",
  "name": "Проданчук Соня, 09.04.2013 р.н.",
  "id": {
    "$oid": "30831879119695"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtube.com/shorts/UODnXENJP7g?feature=share_",
  "composition": "О. Білаченко. «Дощовий ранок»",
  "name": "Проданчук Соня, 09.04.2013 р.н.",
  "id": {
    "$oid": "30831879143635"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtu.be/v3RyIihnM84",
  "composition": "К. Черні. Етюд №21, тв.299",
  "name": "Рагоза Карина, 15.07.2010 р.н.",
  "id": {
    "$oid": "30831879169874"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtu.be/2JDP6Zb6SE8",
  "composition": "С. Лозбін. Концертний вальс «Наближення»",
  "name": "Рагоза Карина, 15.07.2010 р.н.",
  "id": {
    "$oid": "30831879195084"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtube.com/watch?v=dGHFoiafREw&feature=share",
  "composition": "О. Білаченко, Сонатина ре мажор",
  "name": "Романова Катерина, 14.07.2011 р.н.",
  "id": {
    "$oid": "30831879267723"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtube.com/watch?v=SBnelOV2iIk&feature=share",
  "composition": "М. Шентюрк (Терещук). Експромт",
  "name": "Романова Катерина, 14.07.2011 р.н.",
  "id": {
    "$oid": "30831879323983"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtu.be/IBoHRB46pHQ",
  "composition": "О. Гедіке. Сонатина до мажор",
  "name": "Сєргєєва Яна, 25.09.2012 р.н.",
  "id": {
    "$oid": "30831879348953"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtu.be/gUgsXwZUChM",
  "composition": "Е. Вольф. «Літній вітерець»",
  "name": "Сєргєєва Яна, 25.09.2012 р.н.",
  "id": {
    "$oid": "30831879377790"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtu.be/AkhJZKIlBiU",
  "composition": "Ф. Шпіндлер. Сонатина №1, І частина",
  "name": "Сільковська Єва, 28.07.2012 р.н.",
  "id": {
    "$oid": "30831879414247"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtu.be/TYwLSqd-aOQ",
  "composition": "Ю. Щуровський. «Шарманка»",
  "name": "Сільковська Єва, 28.07.2012 р.н.",
  "id": {
    "$oid": "30831879445337"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://www.youtube.com/watch?v=vJPvIsEvfqg",
  "composition": "Л. Ревуцький. Пісня2. К. Черні. Етюд, тв. 219, №15",
  "name": "Скороходько Євгенія, 24.07.2010 р.н.",
  "id": {
    "$oid": "30831879473214"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://www.youtube.com/watch?v=Yage2KFEoLs&ab_channel=%D0%98%D1%80%D0%B8%D0%BD%D0%B0%D0%A1%D0%BC%D0%B8%D1%80%D0%BD%D0%BE%D0%B2%D0%B0",
  "composition": "Ф. Ліст. «Юнацький етюд» №1",
  "name": "Смірнова Євгенія, 03.03.2012 р.н.",
  "id": {
    "$oid": "30831879526885"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtu.be/Tr28H66VeYk",
  "composition": "Ж.-М. Арно. «Rengaine»",
  "name": "Сухан Діана, 05.12.2012 р.н.",
  "id": {
    "$oid": "30831879559488"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtu.be/y70ZwK_YDek",
  "composition": "Г. Классен. «Вальсик»",
  "name": "Сухан Діана, 05.12.2012 р.н.",
  "id": {
    "$oid": "30831879585470"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtu.be/og7HeEOvdgw",
  "composition": "Г. Без\u2019язичний. «Ой, у вишневому саду»",
  "name": "Тарасюк Єлизавета, 20.02.2012 р.н.",
  "id": {
    "$oid": "30831879610515"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtu.be/5DciRwzSOLY",
  "composition": "Ю. Весняк. «Казочка»",
  "name": "Тарасюк Єлизавета, 20.02.2012 р.н.",
  "id": {
    "$oid": "30831879638422"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtu.be/3WGWA6qy1nM",
  "composition": "І. Волков. «Під дощем»",
  "name": "Федорова Вікторія, 07.01.2013 р.н.",
  "id": {
    "$oid": "30831879662388"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtu.be/nsC7yPPqqeM",
  "composition": "Т. Хаслінгер. Сонатина до мажор",
  "name": "Федорова Вікторія, 07.01.2013 р.н.",
  "id": {
    "$oid": "30831879691718"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtu.be/rDLxvN_KPDQ",
  "composition": "1. Ф. Бургмюллер. «Весняний капіж»; 2. Ю. Щуровський. Танець",
  "name": "Федюк Гліб, 05.07.2012 р.н.",
  "id": {
    "$oid": "30831879755360"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtu.be/hLe8Gg2H_L8",
  "composition": "1. Г. Без\u2019язичний. «Русалонька»",
  "name": "Хвостова Віра, 27.04.2013 р.н.",
  "id": {
    "$oid": "30831879788255"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtu.be/fydxJ1CA8MA",
  "composition": "2. Л. Іваненко. «Бабуся-Ягуся»",
  "name": "Хвостова Віра, 27.04.2013 р.н.",
  "id": {
    "$oid": "30831879810741"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtu.be/YoMfMatGkhw",
  "composition": "Й. Гайдн. Рондо до мажор",
  "name": "Хомік Кіра, 12.03.2011 р.н.",
  "id": {
    "$oid": "30831879861742"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtu.be/YfJu_wsWg68",
  "composition": "О. Білаченко. Вальс",
  "name": "Хомік Кіра, 12.03.2011 р.н.",
  "id": {
    "$oid": "30831879882708"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtu.be/lUz0zMhBkCM",
  "composition": "Г.Ф. Гендель. Сонатина сі бемоль мажор",
  "name": "Черняк Марія, 26.09.2012 р.н.",
  "id": {
    "$oid": "30831879909238"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtu.be/NJ-RiVo5Zak",
  "composition": "А. Лазаренко. Коломийки",
  "name": "Черняк Марія, 26.09.2012 р.н.",
  "id": {
    "$oid": "30831879930808"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtu.be/hHxikFbZtFA",
  "composition": "Ф. Шопен. Полонез соль мінор",
  "name": "Чорней Яна, 09.10.2010 р.н.",
  "id": {
    "$oid": "30831879952851"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtu.be/wlPeU9uoBBs",
  "composition": "Л. Бетховен. Сонатина мі бемоль мажо",
  "name": "Чорней Яна, 09.10.2010 р.н.",
  "id": {
    "$oid": "30831879982166"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://www.youtube.com/watch?v=W0Xc24xQj0I",
  "composition": "1. Й.С. Бах. Двоголосна інвенція ля мінор; 2. П. Захарова. «Вперше на арені»",
  "name": "Якименко Єлизавета, 23.10.2010 р.н.",
  "id": {
    "$oid": "30831880007204"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtu.be/CGLokOBsgyw",
  "composition": "1. М. Лисенко. «Сумний спів»; 2. А. Хачатурян. «Музична картина»",
  "name": "Ямпольська Дар\u2019я, 14.06.2010 р.н.",
  "id": {
    "$oid": "30831880036784"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtu.be/yzJF1-YIAs4",
  "composition": "1. Ф. Мендельсон. «Пісня без слів», тв.30; 2. Л. Забара. Фантазія на тему української народної пісні «Ніч яка місячна»",
  "name": "Акімова Кіра, 31.01.2009 р.н.",
  "id": {
    "$oid": "30831881122350"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtu.be/sp_utk7Sexs",
  "composition": "1. Й. Гайдн. Соната ре мажор, І частина; 2. І. Шамо. «Веснянка»",
  "name": "Бокоч Артем, 21.09.2008 р.н.",
  "id": {
    "$oid": "30831881152490"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtu.be/rHSg0qYE4Eo",
  "composition": "1. Й.С. Бах. Алеманда з Партити до мінор; 2. Ф. Шопен. Ноктюрн до дієз мінор",
  "name": "Борейко Роман, 11.01.2010 р.н.",
  "id": {
    "$oid": "30831881177939"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtu.be/q_eAg80xC8U",
  "composition": "1. Й.С. Бах. Хорал з кантати №147 «Jesus bleibet meine Freude»; 2. І. Шамо. Прелюдія №8 «Andante, Quasi campana»",
  "name": "Верзун-Ролінгер Тереза, 09.10.2009 р.н.",
  "id": {
    "$oid": "30831881206564"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtu.be/1OXyLRQfy1A",
  "composition": "Л. Шітте. Етюд №22, тв.68",
  "name": "Германюк Софія, 21.12.2007 р.н.",
  "id": {
    "$oid": "30831881221500"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtu.be/CRucrUMQc9Q",
  "composition": "Українська народна пісня в обробці О. Саратського «Цвіте  терен»",
  "name": "Германюк Софія, 21.12.2007 р.н.",
  "id": {
    "$oid": "30831881236231"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtu.be/-WCCG7psLus",
  "composition": "Українська народна пісня в обробці Г. Без\u2019язичного «Ой, у   вишневому саду»",
  "name": "Гомілко Анастасія, 08.03.2008 р.н.",
  "id": {
    "$oid": "30831881265322"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtu.be/PFtr7rwgvpI",
  "composition": "Ф. Кулау, Сонатина №1, тв.20",
  "name": "Гомілко Анастасія, 08.03.2008 р.н.",
  "id": {
    "$oid": "30831881278424"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtu.be/8HBVBsTbChc",
  "composition": "Ф. Шопен. Ноктюрн  мі бемоль мажор",
  "name": "Гресько Марія, 22.06.2009 р.н.",
  "id": {
    "$oid": "30831881291555"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtu.be/pzwLeJXVgns",
  "composition": "О. Білаш. «Гуцульська писанка»",
  "name": "Гресько Марія, 22.06.2009 р.н.",
  "id": {
    "$oid": "30831881305250"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtu.be/ektnCnL6yGU",
  "composition": "М. Мошковський. Етюд №6, тв. 72",
  "name": "Гриник Діана, 19.0.2006 р.н.",
  "id": {
    "$oid": "30831881324196"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtu.be/kFCWX_mVtQ4",
  "composition": "О. Козаренко. Вальс",
  "name": "Гриник Діана, 19.0.2006 р.н.",
  "id": {
    "$oid": "30831881339811"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtube.com/watch?v=JKqGLVJBsLk&feature=share",
  "composition": "Д. Щириця. «Український етюд»",
  "name": "Грушковська Валерія, 17.01.2010 р.н.",
  "id": {
    "$oid": "30831881364407"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtube.com/watch?v=GOhPa_AGxuo&feature=share",
  "composition": "Л. Іваненко. «Ей Люлі же мі, люлю»",
  "name": "Грушковська Валерія, 17.01.2010 р.н.",
  "id": {
    "$oid": "30831881429636"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtu.be/Na1AqogGZWc",
  "composition": "1. Й.С. Бах. Триголосна інвенція ре мінор; 2. І. Шамо. «Веснянка»",
  "name": "Діденко Дар\u2019я, 20.05.2009 р.н.",
  "id": {
    "$oid": "30831881450455"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtu.be/NMl5mCYes08",
  "composition": "Е. Брилін. Токата",
  "name": "Дудич Ольга, 14.10.2009 р.н.",
  "id": {
    "$oid": "30831881490071"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtu.be/Mu-pBYdtoXY",
  "composition": "Ф. Мендельсон. «Пісня без слів»",
  "name": "Дудич Ольга, 14.10.2009 р.н.",
  "id": {
    "$oid": "30831881504045"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtu.be/jfrrf0-uzQg",
  "composition": "О. Дюбюк. «Дзиґа»",
  "name": "Єрошкіна Анна, 08.11.2008р.н.",
  "id": {
    "$oid": "30831881526829"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtu.be/36tP_qLEZkQ",
  "composition": "Ф. Ліст. «Втіха» №2",
  "name": "Єрошкіна Анна, 08.11.2008р.н.",
  "id": {
    "$oid": "30831881539938"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtu.be/2SpkICd4wGg",
  "composition": "О. Бордюгова. «Український романс»",
  "name": "Жарій Софія, 18.08.2009р.н.",
  "id": {
    "$oid": "30831881552531"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtu.be/MQ08hvVGFAw",
  "composition": "М. Колесса. Коломийка фа мінор",
  "name": "Жарій Софія, 18.08.2009р.н.",
  "id": {
    "$oid": "30831881564188"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "тв.17 №1",
  "composition": "Х. Альфвен. «Сонячні зайчики» з циклу «Картинки Шхер»,",
  "name": "Канська Анастасія, 23.07.2009р.н.",
  "id": {
    "$oid": "30831881592068"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtu.be/LG4a2ouE4z4",
  "composition": "Я. Бобалік. «Бурхливий водоспад»",
  "name": "Канська Анастасія, 23.07.2009р.н.",
  "id": {
    "$oid": "30831881604315"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtu.be/YKeKkDPLjyQ",
  "composition": "Г. Ліхнер. Рондо «Вдома»",
  "name": "Католик Дарина, 01.09.2009 р.н.",
  "id": {
    "$oid": "30831881618720"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtu.be/63FLGaYxSHA",
  "composition": "М. Майєр. «Індіанська серенада»",
  "name": "Католик Дарина, 01.09.2009 р.н.",
  "id": {
    "$oid": "30831881635333"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtu.be/cDynzX-OPYk",
  "composition": "С. Чернецький, аранж. О. Шавардака.». Ой, у лузі червона калина»",
  "name": "Кісарець Іван, 24.04.2009 р.н.",
  "id": {
    "$oid": "30831881699163"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtu.be/ftFvLXTX29U",
  "composition": "М. Дворжак. «Джазовий етюд» №1 до мажор",
  "name": "Кісарець Іван, 24.04.2009 р.н.",
  "id": {
    "$oid": "30831881751581"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtube.com/watch?v=NHTBv1jGBcY&feature=share",
  "composition": "А. Кореллі. Сарабанда мі мінор",
  "name": "Кічук Роман, 29.10.2008 р.н.",
  "id": {
    "$oid": "30831881776237"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtube.com/watch?v=aZOTWN7L0j0&feature=share",
  "composition": "І. Мохначева. «Літній вечір»",
  "name": "Кічук Роман, 29.10.2008 р.н.",
  "id": {
    "$oid": "30831881794174"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtu.be/0AUNHt52-3U",
  "composition": "1. С. Жданов. Прелюд; 2. А. Бабаджанян. «Вагаршапатський танець»",
  "name": "Клімович Давид, 09.07.2009 р.н.",
  "id": {
    "$oid": "30831881868211"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtu.be/QHdrQkzUTzU",
  "composition": "М. Шентюрк (Терещук). Рапсодія «До світла»",
  "name": "Копиченська Дар\u2019я, 30.04.2009 р.н.",
  "id": {
    "$oid": "30831881915376"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtu.be/NMqx2oU_vfs",
  "composition": "М. Шентюк (Терещук). «Сльози»",
  "name": "Копиченська Дар\u2019я, 30.04.2009 р.н.",
  "id": {
    "$oid": "30831881944201"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtu.be/-j3xD0y9hiY",
  "composition": "1. Й.С. Бах. Прелюдія і фуга до мінор, ДТК-І; 2. Ф. Шопен. Ноктюрн до дієз мінор",
  "name": "Кравчук Марія, 14.06.2008 р.н.",
  "id": {
    "$oid": "30831881977820"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtu.be/QX936YZe7JM",
  "composition": "О. Білаш. «Гуцульська писанка»",
  "name": "Крутенко Дарина, 10.11.2009 р.н.",
  "id": {
    "$oid": "30831882015307"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtu.be/FmDkVvUMRyM",
  "composition": "Т. Афанасенко. «Лебідь»",
  "name": "Крутенко Дарина, 10.11.2009 р.н.",
  "id": {
    "$oid": "30831882071818"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtube.com/watch?v=pM150qdBAMg&feature=share",
  "composition": "І. Шамо. «Весняний дощ» із циклу «Гуцульські акварелі»",
  "name": "Левчук Тимофій, 19.11.2008 р.н.",
  "id": {
    "$oid": "30831882102527"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtu.be/d_pfgbco35I",
  "composition": "І. Беркович. Прелюдія мі мажор",
  "name": "Левчук Тимофій, 19.11.2008 р.н.",
  "id": {
    "$oid": "30831882126229"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtu.be/59GWV5_r-qw",
  "composition": "Г. Гендель-Ю. Хальворсен. Пасакалія ля мінор",
  "name": "Магдисюк Вікторія, 23.10.2008 р.н.",
  "id": {
    "$oid": "30831882159698"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtu.be/fpmaHZg46Dg",
  "composition": "М. Дремлюга. «Лірична пісня»",
  "name": "Магдисюк Вікторія, 23.10.2008 р.н.",
  "id": {
    "$oid": "30831882202161"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtu.be/So_6q1mvlcc",
  "composition": "1. Л. Шукайло. «Токата-Кампана»; 2. Ф. Шопен. «Фантазія-експромт» до дієз мінор",
  "name": "Малярчук Єлізавета, 24.08.2009 р.н.",
  "id": {
    "$oid": "30831882239917"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtu.be/tcDVmn-A0cs",
  "composition": "Й. Гайдн. Соната мі мінор, І частина",
  "name": "Мартинишин Владислав, 08.06.2006 р.н.",
  "id": {
    "$oid": "30831882261768"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtu.be/HnDqDfhvYTg",
  "composition": "О. Лис. «Легенда»",
  "name": "Мартинишин Владислав, 08.06.2006 р.н.",
  "id": {
    "$oid": "30831882291709"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtu.be/mfo8X5DQdM4",
  "composition": "С. Борткевич. Етюд, тв.15 №9",
  "name": "Махніцька Владислава, 03.11.2008 р.н.",
  "id": {
    "$oid": "30831882372457"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtu.be/_mHbxYjXVuo",
  "composition": "Н. Нижанківський. Вальс до дієз мінор",
  "name": "Махніцька Владислава, 03.11.2008 р.н.",
  "id": {
    "$oid": "30831882396821"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtu.be/DYAyPDjeDDo",
  "composition": "Й. С. Бах. Триголосна інвенція ре мажор",
  "name": "Мещеряков Костянтин, 08.08.2008 р.н.",
  "id": {
    "$oid": "30831882422524"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtu.be/1BJArCv39_A",
  "composition": "С. Борткевич. «Прогулянка Алупкою-Східна ідилія» з циклу «Кримські ескізи»",
  "name": "Мещеряков Костянтин, 08.08.2008 р.н.",
  "id": {
    "$oid": "30831882455721"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtu.be/9x-yL2nLTac",
  "composition": "1. Ф. Шопен. Вальс, тв. 69 №2; 2. М. Лисенко. Експромт",
  "name": "Місерук Маріанна, 19.08.2007 р.н.",
  "id": {
    "$oid": "30831882493031"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtu.be/Md8tyQEP3Ig",
  "composition": "1. Л. Ревуцький. Пісня; 2. І. Мохначова. Етюд-картина «Море»",
  "name": "Мох Надія, 01.10.2008 р.н.",
  "id": {
    "$oid": "30831882507246"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtu.be/RO4xKftzrx8",
  "composition": "1. Й. Гайдн. «Угорське рондо» з «Фортепіанного тріо» соль мажор; 2. І. Беркович. Прелюд фа дієз мінор",
  "name": "Опанасюк Кароліна, 05.07.2009 р.н.",
  "id": {
    "$oid": "30831882524231"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtu.be/a9wK8MxX9zM",
  "composition": "1. Ф. Шопен. Фантазія-експромт до дієз мінор; 2. А. Хачатурян. Токата",
  "name": "Опанасюк Тарас, 13.10.2007 р.н.",
  "id": {
    "$oid": "30831882539968"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtu.be/pJSayYXJQz4",
  "composition": "Ю. Щуровський. «Осіння пісня»",
  "name": "Опаряк Ірина, 30.04.2009 р.н.",
  "id": {
    "$oid": "30831882681479"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtu.be/dDOp8M7bDak",
  "composition": "Г. Гендель. Капричіо",
  "name": "Опаряк Ірина, 30.04.2009 р.н.",
  "id": {
    "$oid": "30831882727575"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtube.com/watch?v=_wnM565vWb8&feature=sharе",
  "composition": "1. З. Фібіх. Поема; 2.К. Дебюссі. «Ляльковий кек-уок»",
  "name": "Остапенко Анна, 26.08.2009 р.н. (2-ий рік навчання)",
  "id": {
    "$oid": "30831882744902"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtu.be/tIBHZMVb6Oo",
  "composition": "К. Черні. Етюд №15, тв.299",
  "name": "Панченко Софія, 08.0.2009 р.н.",
  "id": {
    "$oid": "30831882761682"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtu.be/mGPtUUdr4Qo",
  "composition": "І. Шамо. «Гумореска»",
  "name": "Панченко Софія, 08.0.2009 р.н.",
  "id": {
    "$oid": "30831882795603"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtu.be/qfc8tf6nM1Y",
  "composition": "В. Працюк. «Навесні»",
  "name": "Плешко Ігнатій, 23.10.2009 р.н.",
  "id": {
    "$oid": "30831882813598"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtu.be/ETlCVJZ5s9Q",
  "composition": "Ф. Ліст. «Втіха» №2",
  "name": "Плешко Ігнатій, 23.10.2009 р.н.",
  "id": {
    "$oid": "30831882827061"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtu.be/-V3t2fmSvfQ",
  "composition": "Й.С. Бах. Триголосна інвенція мі мінор",
  "name": "Радковська Аліна, 30.07.2017 р.н.",
  "id": {
    "$oid": "30831882840663"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtu.be/C_6Axnz2OMA",
  "composition": "Е. Гріг. «Імпровізація»",
  "name": "Радковська Аліна, 30.07.2017 р.н.",
  "id": {
    "$oid": "30831882855218"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtu.be/D5xBH5Tuh3Q",
  "composition": "Ф. Якименко. «Мрії на березі моря»",
  "name": "Редька Поліна,16.12.2009р.н.",
  "id": {
    "$oid": "30831882865445"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtu.be/gwIWbLXC67k",
  "composition": "Г. Без\u2019язичний. Етюд №17 «Буревісник»",
  "name": "Редька Поліна,16.12.2009р.н.",
  "id": {
    "$oid": "30831882879092"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtube.com/watch?v=6cS6hnR8rKg&amp;feature=share",
  "composition": "1. Ф. Кулау. Сонатина №1, тв.60; 2. К. Вік. Полонез",
  "name": "Робуляк Микола,04.05.2010р.н.",
  "id": {
    "$oid": "30831882896598"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtu.be/PI98GVd9gKs",
  "composition": "Й.С. Бах. Двоголосна інвенція №8, фа мажор",
  "name": "Рупа Альберт, 31.05.2007 р.н.",
  "id": {
    "$oid": "30831882922863"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtu.be/vHZQB9uKwFs",
  "composition": "О. Нежигай. «Прохання»",
  "name": "Рупа Альберт, 31.05.2007 р.н.",
  "id": {
    "$oid": "30831882943664"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://www.youtube.com/@user-bi5rp8mk7u",
  "composition": "1. М. Скорик. «Мелодія»; 2. І. Беркович. Токата ля мінор",
  "name": "Саврай Катерина, 04.07.009 р.н.",
  "id": {
    "$oid": "30831882960991"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtu.be/Yv9Yvs0fd3E",
  "composition": "1. К. Лавалле. Концертний етюд «Метелик»; 2. І. Беркович. Токата ля мінор",
  "name": "Слободянюк Маргарита, 22.09.2008 р.н.",
  "id": {
    "$oid": "30831882978467"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtu.be/xRMkLWBbVcA",
  "composition": "В. Моцарт. Соната сі бемоль мажор, І частина",
  "name": "Ткаченко Аміна, 03.03.2009 р.н.",
  "id": {
    "$oid": "30831882998387"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtu.be/xNr4qmNFAvo",
  "composition": "П. Захаров. Токата-прелюдія",
  "name": "Ткаченко Аміна, 03.03.2009 р.н.",
  "id": {
    "$oid": "30831883021017"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtu.be/gFE1F1Hy7GQ",
  "composition": "Й.Б. Ванхаль. Allegro із Сонатини ля мажор",
  "name": "Троценко Анна, 12.06.2008 р.н.",
  "id": {
    "$oid": "30831883037767"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtu.be/EzbbARksXlE",
  "composition": "А. Комлікова. «Машина часу» (Інвенція з циклу «Інтервалія»)",
  "name": "Троценко Анна, 12.06.2008 р.н.",
  "id": {
    "$oid": "30831883057189"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtu.be/BkoLetJSMJg",
  "composition": "Л. Бетховен. Сонатина фа мажор",
  "name": "Турчик Софія, 18.05.2009 р.н.",
  "id": {
    "$oid": "30831883072910"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtu.be/05UlWKhTt58",
  "composition": "Е. Гріг. Вальс",
  "name": "Турчик Софія, 18.05.2009 р.н.",
  "id": {
    "$oid": "30831883101580"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtu.be/yNovz6UHTY0",
  "composition": "В. Верменич, обробка Г. Без\u2019язичного. «Чорнобривці»",
  "name": "Федоренко Єлизавета, 0.09.2008 р.н.",
  "id": {
    "$oid": "30831883116291"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtu.be/lIqtFtmqXgw",
  "composition": "М. Клементі. Сонатина №3, соль мажор",
  "name": "Федоренко Єлизавета, 0.09.2008 р.н.",
  "id": {
    "$oid": "30831883132098"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtu.be/BftkJayxUWU",
  "composition": "1. Л. Сухощеєва. Етюд; 2. О. Кимлик. «Мініатюрна Леонтовіана»",
  "name": "Чмелюк Анна,22.05.2009р.н.",
  "id": {
    "$oid": "30831883150262"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtu.be/1TKCgrWAjwA;",
  "composition": "Й.С. Бах. Прелюдія і фуга соль мінор з ДТК-І",
  "name": "Шевчук Ніколетта, 26.04.2009 р.н.",
  "id": {
    "$oid": "30831883855646"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://www.youtube.com/watch?v=wgc_kLIIi6g",
  "composition": "С. Борткевич. Етюд фа дієз мінор",
  "name": "Шевчук Ніколетта, 26.04.2009 р.н.",
  "id": {
    "$oid": "30831883910425"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtu.be/27MRJsZUufA",
  "composition": "Й.С. Бах. Прелюдія і фуга соль мінор з ДТК-І",
  "name": "Янчук Валерія, 10.06.2007 р.н.",
  "id": {
    "$oid": "30831883928219"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtu.be/trFPA1Jxxas",
  "composition": "Й. Гайдн. Соната ре мажор, І частина",
  "name": "Янчук Валерія, 10.06.2007 р.н.",
  "id": {
    "$oid": "30831883942113"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtu.be/xbJtxe2S600",
  "composition": "Е. Гріг. «Серце поета»",
  "name": "Біла Ксенія, 15.01.2005 р.н",
  "id": {
    "$oid": "30831884066118"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtube.com/shorts/0N_xV3U5G80?feature=share",
  "composition": "І. Крамер. Етюд №5, ля мінор",
  "name": "Біла Ксенія, 15.01.2005 р.н",
  "id": {
    "$oid": "30831884118812"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtu.be/gcL5IbXixSE",
  "composition": "1. Ф. Шопен. Ноктюрн №2, тв. 9; 2. А. Штогаренко. Поема (присвячується М.Т. Коляді)",
  "name": "Бондаренко Денис, 28.01.2006 р.н.",
  "id": {
    "$oid": "30831884143733"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtu.be/wY9WDih_nvc",
  "composition": "М. Лисенко. «Пісня без слів»",
  "name": "Воронцова Діана, 25.02.2005 р.н.",
  "id": {
    "$oid": "30831884155091"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtu.be/DXvwsOBamJc",
  "composition": "Ф. Мендельсон. «Фантазія-каприс»",
  "name": "Воронцова Діана, 25.02.2005 р.н.",
  "id": {
    "$oid": "30831884189401"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtu.be/pE7P9M1iXRo",
  "composition": "1. Б. Лятошинський. Прелюдія тв.44 №4; 2. Ф.Ліст.«Женевські дзвони» з циклу «Роки мандрівок. Швейцарія»",
  "name": "Грушко Анастасія, 18.01.2006",
  "id": {
    "$oid": "30831884208230"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtube.com/watch?v=JHqajp5YPqg&feature=share",
  "composition": "1. К. Дебюссі. Арабеска №2; 2. С. Борткевич. Етюд №2, тв.15",
  "name": "Гултурян Поліна, 11.10.2006 р.н",
  "id": {
    "$oid": "30831884220813"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://www.youtube.com/watch?v=UEiWcFRcPRw",
  "composition": "М. Колесса. «Три коломийки»",
  "name": "Дашевська Альона, 04.04.2005 р.н.",
  "id": {
    "$oid": "30831884231444"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtu.be/LXO77cqrCYw",
  "composition": "1. В. Косенко. Етюд фа дієз мінор, тв.8; 2. Р. Шуман. «Порив» із циклу «Фантастичні п\u2019єси»",
  "name": "Желязко Софія, 30.09.2006 р.н.",
  "id": {
    "$oid": "30831884250756"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtu.be/kCUxj-9RE3g",
  "composition": "Ф. Шопен. Полонез №1, тв.40",
  "name": "Назарук Ірина, 30.04.2004 р.н.",
  "id": {
    "$oid": "30831884262699"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtu.be/Rj0Twd7Ncw4",
  "composition": "М. Колесса. «Контрасти» з циклу «Картини Гуцульщини»",
  "name": "Назарук Ірина, 30.04.2004 р.н.",
  "id": {
    "$oid": "30831884410302"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtu.be/NmWNVs8QKwA",
  "composition": "1. Ф. Шопен. Полонез, тв.40 №2; 2. Ф. Шопен. Колискова, тв.57",
  "name": "Очкуренко Анжеліка, 02.10.2004 р.н.",
  "id": {
    "$oid": "30831884430377"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtu.be/YfU6GaRdP2A",
  "composition": "Ф. Шопен. Полонез соль дієз мінор",
  "name": "Пастушок Дарина, 07.02.2007 р.н.",
  "id": {
    "$oid": "30831884447025"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtu.be/_wB0gI_sNyY",
  "composition": "В. Барвінський. Прелюдія фа мажор",
  "name": "Пастушок Дарина, 07.02.2007 р.н.",
  "id": {
    "$oid": "30831884457574"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtu.be/WKr6YYC7rQw",
  "composition": "1. А. Коломієць. Етюд-експромт ля бемоль мажор, тв.2; 2. Ф. Шопен. Полонез №1, тв. 26",
  "name": "Собко Анна-Дарина, 22.12.2003 р.н.",
  "id": {
    "$oid": "30831884472298"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtu.be/p6RKAiw5xDs",
  "composition": "1. Е. Гріг. «З юних днів», тв.65; 2. Ф. Шуберт. Експромт №2, тв.90",
  "name": "Тимчук Аня, 07.08.2006 р.н.",
  "id": {
    "$oid": "30831884483373"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtu.be/kKYjehMcx0E",
  "composition": "1. Р. Шуман. «Віденський карнавал», тв.26: І. Allegro; 2. Ю. Іщенко. Прелюдія №14 мі бемоль мінор",
  "name": "Турська Марія, 11.04.2005 р.н.",
  "id": {
    "$oid": "30831884502230"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtu.be/2DO9o_3OHwE",
  "composition": "1. Р. Шуман. Новелетта №1, тв.21; 2. С. Шамінад. Креольський танець, тв.94",
  "name": "Філімончук Ернест, 20.02.2005 р.н.",
  "id": {
    "$oid": "30831884526634"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtu.be/nYIDFqUlz0I",
  "composition": "1. Л. Ревуцький. Прелюдія сі бемоль мінор; 2. К. Дебюссі. Дві арабески",
  "name": "Хрипко Єлизавета, 19.07.2006 р.н.",
  "id": {
    "$oid": "30831884544751"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtu.be/C22SLgWADec",
  "composition": "1. Е. Гріг. Імпровізація на дві норвезькі народні пісні, тв.29; 2. К. Деюссі. Етюд №11",
  "name": "Боднарчук Іванна, 19.01.2004 р.н.",
  "id": {
    "$oid": "30831884561146"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtu.be/kuwFNb83wGM",
  "composition": "Ян Сібеліус. Етюд ля мінор",
  "name": "Ден Ай, 26.01.1997 р.н.",
  "id": {
    "$oid": "30831884571249"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtu.be/9XQIpzitm9E",
  "composition": "С. Борткевич. Прелюдія №3, тв.3",
  "name": "Ден Ай, 26.01.1997 р.н.",
  "id": {
    "$oid": "30831884585962"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtu.be/0zUA_2ik2Uk",
  "composition": "1. Л. Бетховен. Соната №24, тв. 78; 2. М. Лисенко. Рапсодія на українські теми «Думка-шумка», тв.18 №2",
  "name": "Кучерява Марина, 17.08.2000 р.н.",
  "id": {
    "$oid": "30831884605174"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtu.be/tsqRe_YNiRk",
  "composition": "1. М. Скорик. Арія з Партити №5; 2. С. Борткевич. Етюд, тв.15 №9",
  "name": "Матвійчук Ірина, 27.05.2003 р.н.",
  "id": {
    "$oid": "30831884619155"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtu.be/Qw8HwtQYvJA",
  "composition": "Й. Брамс. Рапсодія №2, тв.79",
  "name": "Присакару Надія, 14.02.2002 р.н.",
  "id": {
    "$oid": "30831884629568"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtu.be/dOAQKn_YBAc",
  "composition": "В. Косенко. Етюд фа дієз мінор",
  "name": "Присакару Надія, 14.02.2002 р.н.",
  "id": {
    "$oid": "30831884644739"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtu.be/OppvQHNmaAc",
  "composition": "Ф. Шуберт. Клавірштюк, D 946 №1 Allegro assai, №2 Allegretto, №3 Allegrо",
  "name": "Сасюк Юлія, 15.06.2000 р.н.",
  "id": {
    "$oid": "30831884658330"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtu.be/idEZAASqVIE",
  "composition": "Ф. Ганіцький. «Урочистий полонез»",
  "name": "Нікітіна І.Р.",
  "id": {
    "$oid": "30831884669230"
  },
  "group": "Номінація \"Фортепіано соло\""
}, {
  "videoUrl": "https://youtu.be/wHWzcObokFg",
  "composition": "І. Якушенко. «Сінематограф»",
  "name": "Нікітіна І.Р.",
  "id": {
    "$oid": "30831884679946"
  },
  "group": "Номінація \"Фортепіано соло\""
}];

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjLzExNjMwMjMucG5nIiwid2VicGFjazovLy8uL3NyYy9BcHAuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0NhcmQuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0luZm9QYWdlLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9NYWluU2VjdGlvbi5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvUmVndWxhckhlYWRlci5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvUmVzdWx0c0ZpbHRlci5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaW5mby1wYWdlLWltZ3MvUG9zdGVyXzIwMjNfdWEucG5nIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2luZm8tcGFnZS1pbWdzL2p1ZGdlc18yMDIzLmpwZWciLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaW5mby1wYWdlLWltZ3MvcG9zdGVyXzIwMjNfZW4ucG5nIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3Jmcy1wYWdlLWltZ3MvcmZzLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvaG9va3MvVXNlV2luZG93RGltZW5zaW9ucy5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvc3RvcmUvQXJjaGl2ZS5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0b3JlL0NhcmRTdG9yZS5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0b3JlL0ZvcnRlcGlhbm9Tb2xvLmpzeCJdLCJuYW1lcyI6WyJBcHAiLCJjYXJkU3RvcmUiLCJGaWxtV3JhcHBlciIsInN0eWxlZCIsImRpdiIsIkZpbG1JbmZvIiwiSWZyYW1lQm94IiwiaWZyYW1lIiwicHJvcHMiLCJ3aWR0aCIsIkJ1dHRvbiIsImJ1dHRvbiIsIkNhcmQiLCJoZWlnaHQiLCJ1c2VXaW5kb3dEaW1lbnNpb25zIiwiY2FsY3VsYXRlZFdpZHRoIiwic2V0Q2FsY3VsYXRlZFdpZHRoIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJuYW1lIiwiY29tcG9zaXRpb24iLCJ2aWRlb1VybCIsInNob3dJZnJhbWUiLCJzZXRTaG93SWZyYW1lIiwib3BlblZpZGVvQnV0dG9uTmFtZSIsInNldE9wZW5WaWRlb0J1dHRvbk5hbWUiLCJvcGVuVmlkZW9IYW5kbGVyIiwiTGlua0NvbnRhaW5lciIsIldyYXBwZXIiLCJsb2dvIiwiUGVyc29uSW5mb1NlY3Rpb24iLCJQZXJzb24iLCJUZXh0U2VjdGlvbiIsIkltYWdlIiwiaW1nIiwiaW1nVXJsIiwidGV4dCIsIkRpdiIsIkRpdjEiLCJBIiwiYSIsIkExIiwiUCIsIlBvc3RlciIsIlBvc3RlckltZyIsIkluZm9QYWdlMiIsInBvc3Rlcl8yIiwiSW5mb1BhZ2UiLCJwb3N0ZXJfMSIsInBvc3Rlcl8zIiwianVkZ2VzXzIwMjMiLCJDb21tb25XcmFwcGVyIiwiTWFpblNlY3Rpb25GbGV4IiwiTWFpblNlY3Rpb24iLCJjYXJkcyIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJpc0RhdGFJblBsYWNlIiwiY2FyZENvdW50Iiwic2VjdGlvbnNGb3JGaWx0ZXIiLCJpbmZvUGFnZSIsIm1hcCIsImNhcmQiLCJpZCIsIiRvaWQiLCJJbnB1dCIsImlucHV0IiwiaW5wdXRDb2xvciIsIklucHV0U3R5bGUiLCJJbnB1dFdyYXBlciIsIlN0eWxlZFNwYW4iLCJzcGFuIiwiRXJyb3IiLCJXYXJuIiwiUmVndWxhckhlYWRlciIsInNlYXJjaEZpZWxkIiwidXNlUmVmIiwiZXJyb3IiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwiaGFuZGxlciIsInN0ciIsIlN0cmluZyIsImN1cnJlbnQiLCJ2YWx1ZSIsImxlbmd0aCIsImluY2x1ZGVzIiwidHlwZSIsIm1zZyIsInF1ZXJ5IiwiaGFuZGxlS2V5UHJlc3MiLCJldmVudCIsImtleSIsIkZpbHRlckNvbnRhaW5lciIsIkZpbHRlclNlY3Rpb24iLCJEaXZUaGluTGluZSIsIlN0eWxlZFJlc3VsdHNGaWx0ZXJXcmFwcGVyIiwiZ3Jvd18wIiwia2V5ZnJhbWVzIiwibGVmdCIsImdyb3dfMSIsIlRoaW5MaW5lSW5uZXJEaXYiLCJhbmltYXRpb24iLCJSZXN1bHRzRmlsdGVyIiwic2VjdGlvbnMiLCJyZWRMaW5lV2lkdGgiLCJzZXRSZWRMaW5lV2lkdGgiLCJyZWRMaW5lTGVmdCIsInNldFJlZExpbmVMZWZ0Iiwic2V0QW5pbWF0aW9uIiwibWFya2VkU2VjdGlvblJlZiIsInJlUmVuZGVyUmVkTGluIiwidGFyZ2V0IiwiY3VycmVudFNlY3Rpb25XaWR0aCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImN1cnJlbnRTZWN0aW9uTGVmdCIsImNvdW50ZXIiLCJvbkZpbHRlclNlY3Rpb25DbGljayIsInNlbGVjdGVkU2VjdGlvbiIsInNlbGVjdGVkU2VjdGlvblN0cmluZyIsInNlY3Rpb24iLCJjb25zb2xlIiwibG9nIiwicmVuZGVySW5mb1BhZ2UiLCJyZW5kZXJlZFNlY3Rpb25zIiwic2VjIiwiZSIsImdldFdpbmRvd0RpbWVuc2lvbnMiLCJpbm5lcldpZHRoIiwiaW5uZXJIZWlnaHQiLCJ3aW5kb3ciLCJ3aW5kb3dEaW1lbnNpb25zIiwic2V0V2luZG93RGltZW5zaW9ucyIsImhhbmRsZVJlc2l6ZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiUmVhY3RET00iLCJyZW5kZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwibXlDYXJkcyIsImNvbmNlcnRtYXN0ZXJzIiwiZW5zZW1ibGUiLCJhcmNoaXZlIiwiY29uY2F0IiwiZ3JvdXAxIiwiZ3JvdXAyIiwiZ3JvdXAzIiwiZm9ydGVwaWFub1NvbG8iLCJmaWxtUmVkdWNlciIsImFjdGlvbiIsImFyY2hpdmVDYXJkcyIsImZpbHRlciIsImdyb3VwIiwic2xpY2UiLCJuZXdDYXJkcyIsIm5ld0NhcmRzMSIsIm5ld0NhcmRzMiIsInEiLCJ0b0xvd2VyQ2FzZSIsIm5ld0NhcmRzMyIsImNhcmROYW1lIiwiYm9vbCIsInN0YXJ0c1dpdGgiLCJjcmVhdGVTdG9yZSIsInN1YnNjcmliZSIsImdldFN0YXRlIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSxRQUFRLG9CQUFvQjtRQUM1QjtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLGlCQUFpQiw0QkFBNEI7UUFDN0M7UUFDQTtRQUNBLGtCQUFrQiwyQkFBMkI7UUFDN0M7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7O1FBRUE7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IGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGRhdGEpIHtcbiBcdFx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcbiBcdFx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcbiBcdFx0dmFyIGV4ZWN1dGVNb2R1bGVzID0gZGF0YVsyXTtcblxuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW107XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuIFx0XHRcdH1cbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihkYXRhKTtcblxuIFx0XHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcbiBcdFx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG4gXHRcdH1cblxuIFx0XHQvLyBhZGQgZW50cnkgbW9kdWxlcyBmcm9tIGxvYWRlZCBjaHVuayB0byBkZWZlcnJlZCBsaXN0XG4gXHRcdGRlZmVycmVkTW9kdWxlcy5wdXNoLmFwcGx5KGRlZmVycmVkTW9kdWxlcywgZXhlY3V0ZU1vZHVsZXMgfHwgW10pO1xuXG4gXHRcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gYWxsIGNodW5rcyByZWFkeVxuIFx0XHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiBcdH07XG4gXHRmdW5jdGlvbiBjaGVja0RlZmVycmVkTW9kdWxlcygpIHtcbiBcdFx0dmFyIHJlc3VsdDtcbiBcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGRlZmVycmVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdHZhciBkZWZlcnJlZE1vZHVsZSA9IGRlZmVycmVkTW9kdWxlc1tpXTtcbiBcdFx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcbiBcdFx0XHRmb3IodmFyIGogPSAxOyBqIDwgZGVmZXJyZWRNb2R1bGUubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdHZhciBkZXBJZCA9IGRlZmVycmVkTW9kdWxlW2pdO1xuIFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2RlcElkXSAhPT0gMCkgZnVsZmlsbGVkID0gZmFsc2U7XG4gXHRcdFx0fVxuIFx0XHRcdGlmKGZ1bGZpbGxlZCkge1xuIFx0XHRcdFx0ZGVmZXJyZWRNb2R1bGVzLnNwbGljZShpLS0sIDEpO1xuIFx0XHRcdFx0cmVzdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBkZWZlcnJlZE1vZHVsZVswXSk7XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0cmV0dXJuIHJlc3VsdDtcbiBcdH1cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdC8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuIFx0Ly8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwibWFpblwiOiAwXG4gXHR9O1xuXG4gXHR2YXIgZGVmZXJyZWRNb2R1bGVzID0gW107XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdHZhciBqc29ucEFycmF5ID0gd2luZG93W1wid2VicGFja0pzb25wXCJdID0gd2luZG93W1wid2VicGFja0pzb25wXCJdIHx8IFtdO1xuIFx0dmFyIG9sZEpzb25wRnVuY3Rpb24gPSBqc29ucEFycmF5LnB1c2guYmluZChqc29ucEFycmF5KTtcbiBcdGpzb25wQXJyYXkucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrO1xuIFx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcbiBcdGZvcih2YXIgaSA9IDA7IGkgPCBqc29ucEFycmF5Lmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhqc29ucEFycmF5W2ldKTtcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gb2xkSnNvbnBGdW5jdGlvbjtcblxuXG4gXHQvLyBhZGQgZW50cnkgbW9kdWxlIHRvIGRlZmVycmVkIGxpc3RcbiBcdGRlZmVycmVkTW9kdWxlcy5wdXNoKFtcIi4vc3JjL2luZGV4LmpzeFwiLFwidmVuZG9yc35tYWluXCJdKTtcbiBcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gcmVhZHlcbiBcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIiwidmFyIHNyYyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIxMTYzMDIzLTZkNjg3ODM1YWUyZTJhMGQ2YTg5ZTg4OGE2OTQ4MDdkLnBuZ1wiO21vZHVsZS5leHBvcnRzPXtzcmM6c3JjLHdpZHRoOjM4NDAsaGVpZ2h0OjIxNjAsZm9ybWF0OlwicG5nXCIsdG9TdHJpbmc6ZnVuY3Rpb24oKXtyZXR1cm4gc3JjO319OyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge01haW5TZWN0aW9ufSBmcm9tICcuL2NvbXBvbmVudHMvTWFpblNlY3Rpb24nO1xuaW1wb3J0IHtQcm92aWRlcn0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQge2NhcmRTdG9yZX0gZnJvbSBcIi4vc3RvcmUvQ2FyZFN0b3JlXCI7XG5cbmZ1bmN0aW9uIEFwcCgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8UmVhY3QuU3RyaWN0TW9kZT5cbiAgICAgICAgICAgIDxQcm92aWRlciBzdG9yZT17Y2FyZFN0b3JlfT5cbiAgICAgICAgICAgICAgICA8TWFpblNlY3Rpb24vPlxuICAgICAgICAgICAgPC9Qcm92aWRlcj5cbiAgICAgICAgPC9SZWFjdC5TdHJpY3RNb2RlPlxuICAgICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDtcbiIsImltcG9ydCBSZWFjdCwge3VzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbmltcG9ydCB7QWlGaWxsUGxheVNxdWFyZSwgQnNGaWxsUGVyc29uRmlsbCwgRmFCb29rT3Blbn0gZnJvbSBcInJlYWN0LWljb25zL2FsbFwiO1xuaW1wb3J0IHVzZVdpbmRvd0RpbWVuc2lvbnMgZnJvbSBcIi4uL2hvb2tzL1VzZVdpbmRvd0RpbWVuc2lvbnNcIjtcblxuY29uc3QgRmlsbVdyYXBwZXIgPSBzdHlsZWQuZGl2YFxuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtZmFtaWx5OiAnSnVyYScsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5gO1xuXG5jb25zdCBGaWxtSW5mbyA9IHN0eWxlZC5kaXZgXG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzO1xuICA6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICB9XG5gO1xuXG5cbmNvbnN0IElmcmFtZUJveCA9IHN0eWxlZC5pZnJhbWVgXG4gIHdpZHRoOiAke3Byb3BzID0+IHByb3BzLndpZHRofTtcbiAgaGVpZ2h0OiA0ODBweDtcbiAgYm9yZGVyOiBzb2xpZCB3aGl0ZSAzcHg7XG5gO1xuXG5leHBvcnQgY29uc3QgQnV0dG9uID0gc3R5bGVkLmJ1dHRvbmBcbiAgY29sb3I6IHdoaXRlO1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cztcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIGZvbnQtZmFtaWx5OiAnSnVyYScsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG4gIDpob3ZlciB7XG4gICAgY29sb3I6IGRhcmtyZWQ7XG4gIH1gO1xuXG5leHBvcnQgY29uc3QgQ2FyZCA9IChwcm9wcykgPT4ge1xuXG4gICAgY29uc3Qge2hlaWdodCwgd2lkdGh9ID0gdXNlV2luZG93RGltZW5zaW9ucygpO1xuICAgIGNvbnN0IFtjYWxjdWxhdGVkV2lkdGgsIHNldENhbGN1bGF0ZWRXaWR0aF0gPSB1c2VTdGF0ZSg2NDApO1xuXG4gICAgLy9oYW5kbGluZyByZXNpemVcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZiAod2lkdGggPCAxMDAwKSBzZXRDYWxjdWxhdGVkV2lkdGgod2lkdGggLSA1MCk7XG4gICAgICAgIGVsc2Ugc2V0Q2FsY3VsYXRlZFdpZHRoKDY0MCk7XG4gICAgfSwgW3dpZHRoXSk7XG5cbiAgICBjb25zdCBbbmFtZSxdID0gdXNlU3RhdGUocHJvcHMubmFtZSk7XG4gICAgY29uc3QgW2NvbXBvc2l0aW9uLF0gPSB1c2VTdGF0ZShwcm9wcy5jb21wb3NpdGlvbik7XG4gICAgY29uc3QgW3ZpZGVvVXJsLF0gPSB1c2VTdGF0ZShwcm9wcy52aWRlb1VybCk7XG4gICAgY29uc3QgW3Nob3dJZnJhbWUsIHNldFNob3dJZnJhbWVdID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IFtvcGVuVmlkZW9CdXR0b25OYW1lLCBzZXRPcGVuVmlkZW9CdXR0b25OYW1lXSA9IHVzZVN0YXRlKFwi0JLRltC00LrRgNC40YLQuCDQstGW0LTQtdC+XCIpO1xuXG4gICAgY29uc3Qgb3BlblZpZGVvSGFuZGxlciA9ICgpID0+IHtcbiAgICAgICAgc2V0U2hvd0lmcmFtZSghc2hvd0lmcmFtZSk7XG4gICAgICAgIGlmIChzaG93SWZyYW1lKSB7XG4gICAgICAgICAgICBzZXRPcGVuVmlkZW9CdXR0b25OYW1lKFwi0JLRltC00LrRgNC40YLQuCDQstGW0LTQtdC+XCIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2V0T3BlblZpZGVvQnV0dG9uTmFtZShcItCX0LDQutGA0LjRgtC4INCy0ZbQtNC10L5cIik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8RmlsbVdyYXBwZXI+XG4gICAgICAgICAgICA8RmlsbUluZm8+XG4gICAgICAgICAgICAgICAgPHNwYW4+PEJzRmlsbFBlcnNvbkZpbGwvPiA8Yj57bmFtZX08L2I+PC9zcGFuPlxuICAgICAgICAgICAgICAgIDxici8+XG4gICAgICAgICAgICAgICAgPHNwYW4+PEZhQm9va09wZW4vPiB7Y29tcG9zaXRpb259PC9zcGFuPlxuICAgICAgICAgICAgICAgIDxici8+XG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtvcGVuVmlkZW9IYW5kbGVyfSB2YWx1ZT17b3BlblZpZGVvQnV0dG9uTmFtZX0+e29wZW5WaWRlb0J1dHRvbk5hbWV9PC9CdXR0b24+XG4gICAgICAgICAgICAgICAgPGJyLz5cbiAgICAgICAgICAgICAgICB7c2hvd0lmcmFtZSA/IDxJZnJhbWVCb3ggc3JjPXt2aWRlb1VybH0gd2lkdGg9e2NhbGN1bGF0ZWRXaWR0aH0vPiA6IG51bGx9XG4gICAgICAgICAgICA8L0ZpbG1JbmZvPlxuICAgICAgICA8L0ZpbG1XcmFwcGVyPlxuICAgICk7XG59XG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtCaUxpbmtFeHRlcm5hbCwgR2lQb2RpdW1XaW5uZXJ9IGZyb20gXCJyZWFjdC1pY29ucy9hbGxcIjtcbmltcG9ydCBsb2dvIGZyb20gXCIuLi8xMTYzMDIzLnBuZ1wiO1xuaW1wb3J0IGp1ZGdlc18yMDIzIGZyb20gIFwiLi9pbmZvLXBhZ2UtaW1ncy9qdWRnZXNfMjAyMy5qcGVnXCJcbmltcG9ydCBwb3N0ZXJfMiBmcm9tIFwiLi9yZnMtcGFnZS1pbWdzL3Jmcy5wbmdcIjtcbmltcG9ydCBwb3N0ZXJfMSBmcm9tIFwiLi9pbmZvLXBhZ2UtaW1ncy9Qb3N0ZXJfMjAyM191YS5wbmdcIjtcbmltcG9ydCBwb3N0ZXJfMyBmcm9tIFwiLi9pbmZvLXBhZ2UtaW1ncy9wb3N0ZXJfMjAyM19lbi5wbmdcIlxuXG5leHBvcnQgY29uc3QgTGlua0NvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuYDtcblxuY29uc3QgV3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiR7bG9nb31cIik7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuYDtcblxuY29uc3QgUGVyc29uSW5mb1NlY3Rpb24gPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuYDtcblxuXG5jb25zdCBQZXJzb24gPSAocHJvcHMpID0+IHtcblxuICAgIGNvbnN0IFRleHRTZWN0aW9uID0gc3R5bGVkLmRpdmBcbiAgICAgIGZvbnQtZmFtaWx5OiAnSnVyYScsIHNhbnMtc2VyaWY7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgIGJveC1zaGFkb3c6IGRhcmtzbGF0ZWdyYXk7XG4gICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgbWFyZ2luLWJvdHRvbTogODBweDtcbiAgICAgIG1hcmdpbi1sZWZ0OiA4MHB4O1xuICAgICAgbWFyZ2luLXJpZ2h0OiA4MHB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDEwMDA7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBmb250LXNpemU6IDI1cHg7XG4gICAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICAgIGA7XG5cbiAgICBjb25zdCBJbWFnZSA9IHN0eWxlZC5pbWdgXG4gICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgICAgbWFyZ2luLWxlZnQ6IDEwJTtcbiAgICAgIGxlZnQ6IDQwcHg7XG4gICAgICB3aWR0aDogMjEwcHg7XG4gICAgICBoZWlnaHQ6IDI5MHB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgICBgO1xuXG5cbiAgICByZXR1cm4gKDw+PEltYWdlIHNyYz17cHJvcHMuaW1nVXJsfS8+PFRleHRTZWN0aW9uPntwcm9wcy50ZXh0fTwvVGV4dFNlY3Rpb24+PC8+KTtcblxufVxuXG5jb25zdCBEaXYgPSBzdHlsZWQuZGl2YFxuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbmA7XG5cbmNvbnN0IERpdjEgPSBzdHlsZWQoRGl2KWBcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5gO1xuXG5jb25zdCBBID0gc3R5bGVkLmFgXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1mYW1pbHk6IFwiU2Vnb2UgVUlcIiwgc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIG1hcmdpbi1sZWZ0OiAzNXB4O1xuICBmb250LXNpemU6IDI1cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cztcblxuICA6aG92ZXIge1xuICAgIGNvbG9yOiBkYXJrcmVkO1xuICB9XG5gO1xuXG5jb25zdCBBMSA9IHN0eWxlZChBKWBcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXNpemU6IDMwcHg7XG5gO1xuXG5jb25zdCBQID0gc3R5bGVkLmRpdmBcbiAgbGVmdDogNDAwcHg7XG4gIGZvbnQtc2l6ZTogNDBweDtcbiAgZm9udC1mYW1pbHk6IFwiU2Vnb2UgVUlcIiwgc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuYDtcblxuY29uc3QgUG9zdGVyID0gKHByb3BzKSA9PiB7XG5cbiAgICBjb25zdCBQb3N0ZXJJbWcgPSBzdHlsZWQuaW1nYFxuICAgICAgbWFyZ2luLXRvcDogMiU7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDUlO1xuICAgICAgbWFyZ2luLWxlZnQ6IDUlO1xuICAgICAgbWFyZ2luLWJvdHRvbTogNSU7XG4gICAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICAgICAgZmlsdGVyOiBkcm9wLXNoYWRvdygwIDAgMTBweCByZ2JhKDEwMCwgMCwgMCwgMC41KSk7XG4gICAgYDtcblxuICAgIHJldHVybiAoPFBvc3RlckltZyBzcmM9e3Byb3BzLmltZ1VybH0vPik7XG59XG5cbmV4cG9ydCBjb25zdCBJbmZvUGFnZTIgPSAoKSA9PiB7XG4gICAgcmV0dXJuICg8V3JhcHBlcj5cbiAgICAgICAgICAgIDxMaW5rQ29udGFpbmVyPlxuICAgICAgICAgICAgICAgIDxBIGhyZWY9XCJodHRwczovL2RvY3MuZ29vZ2xlLmNvbS9kb2N1bWVudC9kLzFfbjBuQlZSdzdjVDgtelJfQ0tCUTFaOGpsdHktY3lJSi9lZGl0P3VzcD1zaGFyaW5nJm91aWQ9MTEzODgzOTIxMjk5MTQ0NDQ5MDUzJnJ0cG9mPXRydWUmc2Q9dHJ1ZVwiPlxuICAgICAgICAgICAgICAgICAgICA8QmlMaW5rRXh0ZXJuYWwvPiDQo9GH0LDRgdC90LjQutC4INC/0YDQvtC10LrRgtGDIMKr0KDRltCy0L3QtdC90YHRjNC60ZYg0YTQvtGA0YLQtdC/0ZbQsNC90L3RliDRgdGC0YPQtNGW0ZbMiMK7IDIwMjMgPC9BPlxuICAgICAgICAgICAgPC9MaW5rQ29udGFpbmVyPlxuICAgICAgICAgICAgPGJyLz5cbiAgICAgICAgICAgIDxQPtCX0LDQv9GA0L7RiNGD0ZTQvNC+INC00L4g0YPRh9Cw0YHRgtGWINGDINC/0YDQvtC10LrRgtGWPC9QPlxuICAgICAgICAgICAgPGJyLz5cbiAgICAgICAgICAgIDxQb3N0ZXIgaW1nVXJsPXtwb3N0ZXJfMn0vPlxuICAgICAgICA8L1dyYXBwZXI+XG4gICAgKTtcbn1cblxuXG5leHBvcnQgY29uc3QgSW5mb1BhZ2UgPSAoKSA9PiB7XG4gICAgcmV0dXJuICg8V3JhcHBlcj5cbiAgICAgICAgICAgIDxMaW5rQ29udGFpbmVyPlxuICAgICAgICAgICAgICAgIDxBIGhyZWY9XCJodHRwczovL2RvY3MuZ29vZ2xlLmNvbS9kb2N1bWVudC9kLzFhdW9KOHJXc0ZvcFJ3Yk5XckVwaF9ERjZCYW9mTVphaC9lZGl0P3VzcD1zaGFyaW5nJm91aWQ9MTEzODgzOTIxMjk5MTQ0NDQ5MDUzJnJ0cG9mPXRydWUmc2Q9dHJ1ZVwiPlxuICAgICAgICAgICAgICAgICAgICA8R2lQb2RpdW1XaW5uZXIvPiDQm9Cw0YPRgNC10LDRgtC4IDIwMjEgPC9BPlxuICAgICAgICAgICAgICAgIDxBIGhyZWY9XCJodHRwczovL2RvY3MuZ29vZ2xlLmNvbS9kb2N1bWVudC9kLzFiYjlJT1VFN0lMOTk2Tkh1THMycW50VjJaUzdTTmI4aC9lZGl0P3VzcD1zaGFyZV9saW5rJm91aWQ9MTEzODgzOTIxMjk5MTQ0NDQ5MDUzJnJ0cG9mPXRydWUmc2Q9dHJ1ZVwiPlxuICAgICAgICAgICAgICAgICAgICA8QmlMaW5rRXh0ZXJuYWwvPiDQn9C+0LvQvtC20LXQvdC90Y88L0E+XG4gICAgICAgICAgICAgICAgPEEgaHJlZj1cImh0dHBzOi8vZG9jcy5nb29nbGUuY29tL2RvY3VtZW50L2QvMTU2WkdOZG5NYWpIRXpqZmpyRzdiRF8tM3Y5UjFHSDR3L2VkaXQ/dXNwPXNoYXJlX2xpbmsmb3VpZD0xMTM4ODM5MjEyOTkxNDQ0NDkwNTMmcnRwb2Y9dHJ1ZSZzZD10cnVlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxCaUxpbmtFeHRlcm5hbC8+INCe0YDQs9Cw0L3RltC30LDRhtGW0LnQvdC40Lkg0LrQvtC80ZbRgtC10YIg0LrQvtC90LrRg9GA0YHRgyA8L0E+XG4gICAgICAgICAgICA8L0xpbmtDb250YWluZXI+XG4gICAgICAgICAgICA8YnIvPlxuICAgICAgICAgICAgPFA+0JDRhNGW0YjQsCh1YSk8L1A+XG4gICAgICAgICAgICA8YnIvPlxuICAgICAgICAgICAgPFBvc3RlciBpbWdVcmw9e3Bvc3Rlcl8xfS8+XG4gICAgICAgICAgICA8UD7QkNGE0ZbRiNCwKGVuZyk8L1A+XG4gICAgICAgICAgICA8YnIvPlxuICAgICAgICAgICAgPFBvc3RlciBpbWdVcmw9e3Bvc3Rlcl8zfS8+XG4gICAgICAgICAgICA8YnIvPlxuICAgICAgICAgICAgPFA+0KHQutC70LDQtCDQttGD0YDRljwvUD5cbiAgICAgICAgICAgIDxici8+XG4gICAgICAgICAgICA8UG9zdGVyIGltZ1VybD17anVkZ2VzXzIwMjN9Lz5cbiAgICAgICAgPC9XcmFwcGVyPlxuICAgICk7XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuaW1wb3J0IHtSZXN1bHRzRmlsdGVyfSBmcm9tIFwiLi9SZXN1bHRzRmlsdGVyXCI7XG5pbXBvcnQge0NhcmR9IGZyb20gXCIuL0NhcmRcIjtcbmltcG9ydCB7dXNlU2VsZWN0b3J9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHtSZWd1bGFySGVhZGVyfSBmcm9tIFwiLi9SZWd1bGFySGVhZGVyXCI7XG5pbXBvcnQge0luZm9QYWdlLCBJbmZvUGFnZTJ9IGZyb20gXCIuL0luZm9QYWdlXCI7XG5pbXBvcnQgbG9nbyBmcm9tIFwiLi4vMTE2MzAyMy5wbmdcIjtcblxuY29uc3QgQ29tbW9uV3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiR7bG9nb31cIik7XG4gIG1pbi1oZWlnaHQ6IDEwMDBweDtcbmA7XG5cbmNvbnN0IE1haW5TZWN0aW9uRmxleCA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5gO1xuXG5leHBvcnQgY29uc3QgTWFpblNlY3Rpb24gPSAoKSA9PiB7XG5cbiAgICBjb25zdCBjYXJkcyA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLmNhcmRzKTtcbiAgICBjb25zdCBpc0RhdGFJblBsYWNlID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUuaXNEYXRhSW5QbGFjZSk7XG4gICAgY29uc3QgY2FyZENvdW50ID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUuY2FyZENvdW50KTtcbiAgICBjb25zdCBzZWN0aW9uc0ZvckZpbHRlciA9IFtcbiAgICAgICAgYNCQ0YDRhdGW0LLQvdGWINCy0ZbQtNC10L5gLFxuICAgICAgICBg0J3QvtC80ZbQvdCw0YbRltGPIFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cImAsXG4gICAgICAgIGDQn9GA0L4g0LrQvtC90LrRg9GA0YFgLFxuICAgICAgICBcItCg0ZbQstC90LXQvdGB0YzQutGWINGE0L7RgNGC0LXQv9GW0LDQvdC90L3RliDRgdGC0YPQtNGW0ZdcIl07XG5cbiAgICBsZXQgaW5mb1BhZ2UgPSAoY2FyZENvdW50PT09LTEpPzxJbmZvUGFnZS8+OjxJbmZvUGFnZTIvPlxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPENvbW1vbldyYXBwZXI+XG4gICAgICAgICAgICA8UmVndWxhckhlYWRlciBjYXJkQ291bnQ9e2NhcmRDb3VudH0vPlxuICAgICAgICAgICAgPFJlc3VsdHNGaWx0ZXIgc2VjdGlvbnM9e3NlY3Rpb25zRm9yRmlsdGVyfS8+XG4gICAgICAgICAgICB7aXNEYXRhSW5QbGFjZSA/IChcbiAgICAgICAgICAgICAgICA8TWFpblNlY3Rpb25GbGV4PlxuICAgICAgICAgICAgICAgICAgICB7Y2FyZHMubWFwKGNhcmQgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPENhcmRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPXtjYXJkLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmlkZW9Vcmw9e2NhcmQudmlkZW9Vcmx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9zaXRpb249e2NhcmQuY29tcG9zaXRpb259XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtjYXJkLmlkLiRvaWR9Lz5cbiAgICAgICAgICAgICAgICAgICAgKSl9PC9NYWluU2VjdGlvbkZsZXg+KSA6IGluZm9QYWdlfTwvQ29tbW9uV3JhcHBlcj4pO1xufTtcbiIsImltcG9ydCBSZWFjdCwge3VzZVJlZn0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuaW1wb3J0IHtBaU91dGxpbmVGaWxlU2VhcmNoLCBIaU91dGxpbmVFeGNsYW1hdGlvbkNpcmNsZX0gZnJvbSBcInJlYWN0LWljb25zL2FsbFwiO1xuaW1wb3J0IHt1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3J9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHVzZVdpbmRvd0RpbWVuc2lvbnMgZnJvbSBcIi4uL2hvb2tzL1VzZVdpbmRvd0RpbWVuc2lvbnNcIjtcblxuZXhwb3J0IGNvbnN0IEJ1dHRvbiA9IHN0eWxlZC5kaXZgXG4gIHBhZGRpbmctdG9wOiA4cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMTRweDtcbiAgZm9udC1zaXplOiAyNXB4O1xuICBmb250LWZhbWlseTogXCJTZWdvZSBVSVwiLCBzZXJpZjtcbiAgd2lkdGg6IDE1JTtcbiAgYm9yZGVyOiBzb2xpZCB3aGl0ZSAycHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XG5cbiAgOmhvdmVyIHtcbiAgICBib3JkZXI6IHNvbGlkIGRhcmtyZWQgMnB4O1xuICAgIGNvbG9yOiBkYXJrcmVkO1xuICB9YDtcblxuY29uc3QgSW5wdXQgPSBzdHlsZWQuaW5wdXRgXG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMuaW5wdXRDb2xvciB8fCBcInBhbGV2aW9sZXRyZWRcIn07XG5gO1xuXG5cbmNvbnN0IElucHV0U3R5bGUgPSBzdHlsZWQuZGl2YFxuICBmb250LXNpemU6IDIwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHdpZHRoOiA2MCU7XG4gIGhlaWdodDogNTAlO1xuYDtcblxuY29uc3QgSW5wdXRXcmFwZXIgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGhlaWdodDogNjBweDtcbmA7XG5cbmNvbnN0IFN0eWxlZFNwYW4gPSBzdHlsZWQuc3BhbmBcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDI1cHg7XG4gIGZvbnQtZmFtaWx5OiBcIlNlZ29lIFVJXCIsIHNlcmlmO1xuYDtcblxuY29uc3QgRXJyb3IgPSBzdHlsZWQuZGl2YFxuICBtYXJnaW4tdG9wOiAxN3B4O1xuICBmb250LXNpemU6IDE4cHg7XG4gIGNvbG9yOiByZWQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtgXG5cbmNvbnN0IFdhcm4gPSBzdHlsZWQuZGl2YFxuICBtYXJnaW4tdG9wOiAxN3B4O1xuICBmb250LXNpemU6IDE4cHg7XG4gIGNvbG9yOiB5ZWxsb3c7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtgXG5cbmV4cG9ydCBjb25zdCBSZWd1bGFySGVhZGVyID0gKHByb3BzKSA9PiB7XG5cbiAgICBjb25zdCBzZWFyY2hGaWVsZCA9IHVzZVJlZigpO1xuICAgIGNvbnN0IGVycm9yID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUuZXJyb3IpO1xuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcbiAgICBjb25zdCB7aGVpZ2h0LCB3aWR0aH0gPSB1c2VXaW5kb3dEaW1lbnNpb25zKCk7XG5cbiAgICBmdW5jdGlvbiBoYW5kbGVyKCkge1xuICAgICAgICBsZXQgc3RyID0gU3RyaW5nKHNlYXJjaEZpZWxkLmN1cnJlbnQudmFsdWUpO1xuICAgICAgICBpZiAoc3RyLmxlbmd0aCA8IDMgfHwgc3RyLmluY2x1ZGVzKFwiIFwiKSkge1xuICAgICAgICAgICAgZGlzcGF0Y2goe3R5cGU6IFwiRVJST1JcIiwgbXNnOiBcItCR0YPQtNGMINC70LDRgdC60LAg0LLQstC10LTRltGC0Ywg0LHRltC70YzRiNC1IDMg0YHQuNC80LLQvtC70ZbQsiDRliDQvdC1INCy0LjQutC+0YDQuNGB0YLQvtCy0YPQudGC0LUg0L/RgNC+0LHRltC7XCJ9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGRpc3BhdGNoKHt0eXBlOiBcIlNFQVJDSFwiLCBxdWVyeTogc3RyfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBoYW5kbGVLZXlQcmVzcyhldmVudCkge1xuICAgICAgICBpZiAoZXZlbnQua2V5ID09PSAnRW50ZXInKSB7XG4gICAgICAgICAgICBoYW5kbGVyKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPElucHV0V3JhcGVyPlxuICAgICAgICAgICAgICAgIDxJbnB1dFN0eWxlPlxuICAgICAgICAgICAgICAgICAgICA8U3R5bGVkU3Bhbj48QWlPdXRsaW5lRmlsZVNlYXJjaC8+0J/QvtGI0YPQuiDQstGW0LTQtdC+INC/0L4g0L/RgNGW0LfQstC40YnRgyDRg9GH0LDRgdC90LjQutCwIDwvU3R5bGVkU3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPElucHV0IG9uS2V5UHJlc3M9e2hhbmRsZUtleVByZXNzfSByZWY9e3NlYXJjaEZpZWxkfSB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cItCS0LLQtdC00ZbRgtGMINC/0YDRltC30LLQuNGJ0LUg0YPRh9Cw0YHQvdC40LrQsC4uLlwiIGlucHV0Q29sb3I9XCJibGFja1wiLz5cbiAgICAgICAgICAgICAgICA8L0lucHV0U3R5bGU+XG4gICAgICAgICAgICAgICAgPEJ1dHRvbiB2YWx1ZT1cIlwiIG9uQ2xpY2s9e2hhbmRsZXJ9PtCf0L7RiNGD0Lo8L0J1dHRvbj5cbiAgICAgICAgICAgIDwvSW5wdXRXcmFwZXI+XG4gICAgICAgICAgICB7ZXJyb3IgIT09IFwiXCIgPyA8RXJyb3I+PEhpT3V0bGluZUV4Y2xhbWF0aW9uQ2lyY2xlLz57ZXJyb3J9PEhpT3V0bGluZUV4Y2xhbWF0aW9uQ2lyY2xlLz48L0Vycm9yPiA6IG51bGx9XG4gICAgICAgICAgICB7cHJvcHMuY2FyZENvdW50ID09PSAwID9cbiAgICAgICAgICAgICAgICA8V2Fybj48SGlPdXRsaW5lRXhjbGFtYXRpb25DaXJjbGUvPtCy0ZbQtNC10L4g0L3QtSDQt9C90LDQudC00LXQvdGWPEhpT3V0bGluZUV4Y2xhbWF0aW9uQ2lyY2xlLz48L1dhcm4+IDogbnVsbH1cbiAgICAgICAgPC8+XG4gICAgKVxufVxuIiwiaW1wb3J0IFJlYWN0LCB7dXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZWQsIHtrZXlmcmFtZXN9IGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuaW1wb3J0IHt1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3J9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHtGYUZvbGRlciwgRmFVbml2ZXJzaXR5fSBmcm9tIFwicmVhY3QtaWNvbnMvYWxsXCI7XG5pbXBvcnQgdXNlV2luZG93RGltZW5zaW9ucyBmcm9tIFwiLi4vaG9va3MvVXNlV2luZG93RGltZW5zaW9uc1wiO1xuXG5jb25zdCBGaWx0ZXJDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBmb250LXNpemU6IDI1cHg7XG4gIGZvbnQtZmFtaWx5OiBcIlNlZ29lIFVJXCIsIHNlcmlmO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBsZWZ0O1xuICBtYXJnaW4tdG9wOiAyNnB4O1xuICBmbGV4LXdyYXA6IHdyYXA7YDtcblxuY29uc3QgRmlsdGVyU2VjdGlvbiA9IHN0eWxlZChGaWx0ZXJDb250YWluZXIpYFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIG1hcmdpbjogMTRweDtcbiAgY29sb3I6IHdoaXRlO1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cztcbiAgOmhvdmVyIHtcbiAgICBjb2xvcjogZGFya3JlZDtcbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IERpdlRoaW5MaW5lID0gc3R5bGVkLmRpdmBcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlcjogZ3JheSBzb2xpZCAxcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XG4gIGhlaWdodDogMiU7XG4gIHRyYW5zaXRpb246IGFsbCBlYXNlO1xuYDtcblxuZXhwb3J0IGNvbnN0IFN0eWxlZFJlc3VsdHNGaWx0ZXJXcmFwcGVyID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBtYXJnaW4tdG9wOiAxNXB4O1xuYDtcblxuY29uc3QgZ3Jvd18wID0ga2V5ZnJhbWVzYFxuICAwJSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgMTAwJSB7XG4gICAgd2lkdGg6ICR7cHJvcHMgPT4gcHJvcHMud2lkdGh9O1xuICB9XG4gIDAlIHtcbiAgICBsZWZ0OiAwcHg7XG4gIH1cbiAgMTAwJSB7XG4gICAgd2lkdGg6ICR7cHJvcHMgPT4gcHJvcHMubGVmdH07XG4gIH1cbmA7XG5cbmNvbnN0IGdyb3dfMSA9IGtleWZyYW1lc2BcbiAgMCUge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIDEwMCUge1xuICAgIHdpZHRoOiAke3Byb3BzID0+IHByb3BzLndpZHRofTtcbiAgfVxuICAwJSB7XG4gICAgbGVmdDogMXB4O1xuICB9XG4gIDEwMCUge1xuICAgIHdpZHRoOiAke3Byb3BzID0+IHByb3BzLmxlZnR9O1xuICB9XG5gO1xuXG5cbmV4cG9ydCBjb25zdCBUaGluTGluZUlubmVyRGl2ID0gc3R5bGVkLmRpdmBcbiAgd2lkdGg6ICR7cHJvcHMgPT4gcHJvcHMud2lkdGh9O1xuICBsZWZ0OiAke3Byb3BzID0+IHByb3BzLmxlZnR9O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvcmRlcjogcmVkIHNvbGlkIDFweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICBoZWlnaHQ6IDElO1xuICBhbmltYXRpb246ICR7cHJvcHMgPT4gKHByb3BzLmFuaW1hdGlvbiAlIDIgPT09IDApID8gZ3Jvd18wIDogZ3Jvd18xfSAwLjVzIGxpbmVhcjtcbmA7XG5cbmV4cG9ydCBjb25zdCBSZXN1bHRzRmlsdGVyID0gKHByb3BzKSA9PiB7XG5cbiAgICBjb25zdCBbc2VjdGlvbnMsXSA9IHVzZVN0YXRlKHByb3BzLnNlY3Rpb25zKTtcblxuICAgIGNvbnN0IFtyZWRMaW5lV2lkdGgsIHNldFJlZExpbmVXaWR0aF0gPSB1c2VTdGF0ZShcIjEwcHhcIik7XG4gICAgY29uc3QgW3JlZExpbmVMZWZ0LCBzZXRSZWRMaW5lTGVmdF0gPSB1c2VTdGF0ZShcIjEwcHhcIik7XG4gICAgY29uc3QgW2FuaW1hdGlvbiwgc2V0QW5pbWF0aW9uXSA9IHVzZVN0YXRlKDApO1xuICAgIGNvbnN0IHtoZWlnaHQsIHdpZHRofSA9IHVzZVdpbmRvd0RpbWVuc2lvbnMoKTtcbiAgICBjb25zdCBtYXJrZWRTZWN0aW9uUmVmID0gdXNlUmVmKCk7XG5cbiAgICAvL2hhbmRsaW5nIHJlZExpbmUgb24gcmVzaXplXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgcmVSZW5kZXJSZWRMaW4oe3RhcmdldDptYXJrZWRTZWN0aW9uUmVmLmN1cnJlbnR9KVxuICAgIH0sIFt3aWR0aF0pO1xuXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuXG4gICAgZnVuY3Rpb24gcmVSZW5kZXJSZWRMaW4oZXZlbnQpIHtcbiAgICAgICAgbWFya2VkU2VjdGlvblJlZi5jdXJyZW50ID0gZXZlbnQudGFyZ2V0O1xuICAgICAgICBsZXQgY3VycmVudFNlY3Rpb25XaWR0aCA9IGV2ZW50LnRhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aDtcbiAgICAgICAgbGV0IGN1cnJlbnRTZWN0aW9uTGVmdCA9IGV2ZW50LnRhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0IC0gMTA7XG4gICAgICAgIHNldFJlZExpbmVXaWR0aChjdXJyZW50U2VjdGlvbldpZHRoICsgXCJweFwiKTtcbiAgICAgICAgc2V0UmVkTGluZUxlZnQoY3VycmVudFNlY3Rpb25MZWZ0ICsgXCJweFwiKTtcbiAgICAgICAgbGV0IGNvdW50ZXIgPSBhbmltYXRpb24gKyAxO1xuICAgICAgICBzZXRBbmltYXRpb24oY291bnRlcik7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb25GaWx0ZXJTZWN0aW9uQ2xpY2soc2VsZWN0ZWRTZWN0aW9uLCBldmVudCkge1xuICAgICAgICByZVJlbmRlclJlZExpbihldmVudCk7XG4gICAgICAgIGxldCBzZWxlY3RlZFNlY3Rpb25TdHJpbmcgPSBzZWxlY3RlZFNlY3Rpb24uc2VjdGlvbjtcbiAgICAgICAgY29uc29sZS5sb2coc2VsZWN0ZWRTZWN0aW9uU3RyaW5nKTtcbiAgICAgICAgc3dpdGNoIChzZWxlY3RlZFNlY3Rpb25TdHJpbmcpIHtcbiAgICAgICAgICAgIGNhc2UgYNCg0ZbQstC90LXQvdGB0YzQutGWINGE0L7RgNGC0LXQv9GW0LDQvdC90ZYg0YHRgtGD0LTRltGXYDpcbiAgICAgICAgICAgICAgICBkaXNwYXRjaCh7dHlwZTogXCJSRlNfUEFHRVwifSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIGDQkNGA0YXRltCy0L3RliDQstGW0LTQtdC+YDpcbiAgICAgICAgICAgICAgICBkaXNwYXRjaCh7dHlwZTogXCJBUkNISVZFXCJ9KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgYNCd0L7QvNGW0L3QsNGG0ZbRjyBcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XCJgOlxuICAgICAgICAgICAgICAgIGRpc3BhdGNoKHt0eXBlOiBcImdyb3VwLTFcIn0pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBg0J3QvtC80ZbQvdCw0YbRltGPIFwi0KTQvtGA0YLQtdC/0ZbQsNC90L3QuNC5INCw0L3RgdCw0LzQsdC70YxcImA6XG4gICAgICAgICAgICAgICAgZGlzcGF0Y2goe3R5cGU6IFwiZ3JvdXAtMlwifSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIGDQndC+0LzRltC90LDRhtGW0Y8gXCLQmtC+0L3RhtC10YDRgtC80LXQudGB0YLQtdGAXCJgOlxuICAgICAgICAgICAgICAgIGRpc3BhdGNoKHt0eXBlOiBcImdyb3VwLTNcIn0pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVuZGVySW5mb1BhZ2Uoc2VjdGlvbikge1xuICAgICAgICBpZiAoc2VjdGlvblswXT09PVwi0KDRltCy0L3QtdC90YHRjNC60ZYg0YTQvtGA0YLQtdC/0ZbQsNC90L3QvdGWINGB0YLRg9C00ZbRl1wiKXtcbiAgICAgICAgICAgIHJlUmVuZGVyUmVkTGluKHNlY3Rpb25bMV0pO1xuICAgICAgICAgICAgZGlzcGF0Y2goe3R5cGU6IFwiUkZTX1BBR0VcIn0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmVSZW5kZXJSZWRMaW4oc2VjdGlvblsxXSk7XG4gICAgICAgICAgICBkaXNwYXRjaCh7dHlwZTogXCJJTkZPX1BBR0VcIn0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbGV0IHJlbmRlcmVkU2VjdGlvbnMgPSBzZWN0aW9ucy5tYXAoKHNlY3Rpb24pID0+IChcbiAgICAgICAgc2VjdGlvbiA9PT0gXCLQn9GA0L4g0LrQvtC90LrRg9GA0YFcIiB8fCBzZWN0aW9uID09PSBcItCg0ZbQstC90LXQvdGB0YzQutGWINGE0L7RgNGC0LXQv9GW0LDQvdC90L3RliDRgdGC0YPQtNGW0ZdcIj9cbiAgICAgICAgICAgIDxGaWx0ZXJTZWN0aW9uICBvbkNsaWNrPXsoKT0+IHtcbiAgICAgICAgICAgICAgICBsZXQgc2VjID0gW3NlY3Rpb24sZXZlbnRdXG4gICAgICAgICAgICAgICAgcmVuZGVySW5mb1BhZ2Uoc2VjKVxuXG4gICAgICAgICAgICB9fSBrZXk9e3NlY3Rpb259PiA8RmFVbml2ZXJzaXR5Lz57c2VjdGlvbn08L0ZpbHRlclNlY3Rpb24+XG4gICAgICAgICAgICA6IDxGaWx0ZXJTZWN0aW9uICByZWY9e21hcmtlZFNlY3Rpb25SZWZ9IG9uQ2xpY2s9e2UgPT4gb25GaWx0ZXJTZWN0aW9uQ2xpY2soe3NlY3Rpb259LCBlKX0ga2V5PXtzZWN0aW9ufT4gPEZhRm9sZGVyLz57c2VjdGlvbn08L0ZpbHRlclNlY3Rpb24+XG4gICAgKSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPFN0eWxlZFJlc3VsdHNGaWx0ZXJXcmFwcGVyPlxuICAgICAgICAgICAgICAgIDxGaWx0ZXJDb250YWluZXIgY2hpbGRyZW49e3JlbmRlcmVkU2VjdGlvbnN9Lz5cbiAgICAgICAgICAgIDwvU3R5bGVkUmVzdWx0c0ZpbHRlcldyYXBwZXI+XG4gICAgICAgICAgICA8RGl2VGhpbkxpbmU+PFRoaW5MaW5lSW5uZXJEaXYgd2lkdGg9e3JlZExpbmVXaWR0aH0gbGVmdD17cmVkTGluZUxlZnR9IGFuaW1hdGlvbj17YW5pbWF0aW9ufS8+PC9EaXZUaGluTGluZT5cbiAgICAgICAgPC8+XG4gICAgKTtcbn07XG4iLCJ2YXIgc3JjID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIlBvc3Rlcl8yMDIzX3VhLTFkMTZjOTI4OGYwOGM3ZjRlZDU3MTQ3NGY2MDY4MGQ3LnBuZ1wiO21vZHVsZS5leHBvcnRzPXtzcmM6c3JjLHdpZHRoOjIzMzksaGVpZ2h0OjMzMDgsZm9ybWF0OlwicG5nXCIsdG9TdHJpbmc6ZnVuY3Rpb24oKXtyZXR1cm4gc3JjO319OyIsInZhciBzcmMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwianVkZ2VzXzIwMjMtYTc4NjM4ZjU5OWE5NDdjYjViOThkYjlmMDhlMzM2MDMuanBlZ1wiO21vZHVsZS5leHBvcnRzPXtzcmM6c3JjLHdpZHRoOjM2MDAsaGVpZ2h0OjUwODQsZm9ybWF0OlwianBlZ1wiLHRvU3RyaW5nOmZ1bmN0aW9uKCl7cmV0dXJuIHNyYzt9fTsiLCJ2YXIgc3JjID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInBvc3Rlcl8yMDIzX2VuLTBkZjc5MzA1ZjczYTcxYzhlMWYxOTVjNDg0Y2NiYjVjLnBuZ1wiO21vZHVsZS5leHBvcnRzPXtzcmM6c3JjLHdpZHRoOjIzMzksaGVpZ2h0OjMzMDgsZm9ybWF0OlwicG5nXCIsdG9TdHJpbmc6ZnVuY3Rpb24oKXtyZXR1cm4gc3JjO319OyIsInZhciBzcmMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwicmZzLTIzYTlmZjQyM2I2NTZlNGY3YTFiZDQyZGE5NjQzNjlmLnBuZ1wiO21vZHVsZS5leHBvcnRzPXtzcmM6c3JjLHdpZHRoOjI3MDAsaGVpZ2h0OjM5MDAsZm9ybWF0OlwicG5nXCIsdG9TdHJpbmc6ZnVuY3Rpb24oKXtyZXR1cm4gc3JjO319OyIsImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5cbmZ1bmN0aW9uIGdldFdpbmRvd0RpbWVuc2lvbnMoKSB7XG4gICAgY29uc3QgeyBpbm5lcldpZHRoOiB3aWR0aCwgaW5uZXJIZWlnaHQ6IGhlaWdodCB9ID0gd2luZG93O1xuICAgIHJldHVybiB7XG4gICAgICAgIHdpZHRoLFxuICAgICAgICBoZWlnaHRcbiAgICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1c2VXaW5kb3dEaW1lbnNpb25zKCkge1xuICAgIGNvbnN0IFt3aW5kb3dEaW1lbnNpb25zLCBzZXRXaW5kb3dEaW1lbnNpb25zXSA9IHVzZVN0YXRlKGdldFdpbmRvd0RpbWVuc2lvbnMoKSk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBmdW5jdGlvbiBoYW5kbGVSZXNpemUoKSB7XG4gICAgICAgICAgICBzZXRXaW5kb3dEaW1lbnNpb25zKGdldFdpbmRvd0RpbWVuc2lvbnMoKSk7XG4gICAgICAgIH1cblxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgaGFuZGxlUmVzaXplKTtcbiAgICAgICAgcmV0dXJuICgpID0+IHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCBoYW5kbGVSZXNpemUpO1xuICAgIH0sIFtdKTtcblxuICAgIHJldHVybiB3aW5kb3dEaW1lbnNpb25zO1xufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IEFwcCBmcm9tIFwiLi9BcHBcIjtcblJlYWN0RE9NLnJlbmRlcig8QXBwLz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXJnZXQnKSk7XG5cbiIsImxldCBteUNhcmRzID0gW1xuICAgIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTNkYzY4M2RkYTQ3ZjhiNjEzMDdcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQkNCz0YDQsNGC0ZbQvdCwINCh0YLQsNC90ZbRgdC70LDQsiwgOSDRgNC+0LrRltCyIFwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQnC7Qk9C70ZbQvdC60LAuICcn0J/QvtGH0YPRgtGC0Y8nJywgICAgICAyKdCuLtCp0YPRgNC+0LLRgdGM0LrQuNC5LiAnJ9Ci0LDQvdC+0LonJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xOTR5dF9zS0M1RXQzcjQ5ekNFUnNkQlplRFFnWS1HX2kvcHJldmlld1wiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1M2RjNjgzZGRhNDdmOGI2MTMwOFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCS0LDQu9GW0LPRg9GA0LAg0JLQsNGA0LLQsNGA0LAsIDkg0YDQvtC60ZbQsiBcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCcLtCb0LXQvNGW0YjQutC+LiAnJ9Ca0L7Qu9C+0LzQuNC50LrQsCcnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFjNmhUSXFEbC1jQUYzQnIzbDFjMnV3cUZac0xWU1BUdi9wcmV2aWV3XCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODUzZGM2ODNkZGE0N2Y4YjYxMzA5XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0JLQsNC70ZbQs9GD0YDQsCDQktCw0YDQstCw0YDQsCwgOSDRgNC+0LrRltCyIFwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0KIu0JzQsNC60YHRltC80L7Qsi4gJyfQl9Cw0LTQt9C10YDQutCw0LvQu9GPJydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMTVZcjZReG00cnN0RE9NVTJ2R241SndxNVZmVXBOMlNEL3ByZXZpZXdcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTNkYzY4M2RkYTQ3ZjhiNjEzMGFcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQktCw0YHQuNC70LXQstGB0YzQutCwINCl0YDQuNGB0YLQuNC90LAsNyDRgNC+0LrRltCyXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCSLtCT0ZbQu9C70L7Qui4nJ9Ch0LDQvNC+0YLQvdGPINCx0LDQu9GM0L3QsCDQt9Cw0LvQsCcnLCAgIDIp0KIu0KDQvtGB0YLQuNC80LDRiNC10L3QutC+Licn0KfQsNC60LvRg9C9JydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMUd0eFVLdVVrTEtBbmg1b0NmOUZsdWlVVFFvSkNUYk1NL3ByZXZpZXdcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTNkYzY4M2RkYTQ3ZjhiNjEzMGJcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQktC+0LvQuNC90LXRhtGMINCe0LvQtdC60YHQsNC90LTRgCwgOCDRgNC+0LrRltCyXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCbLtCa0L7Qu9C+0LTRg9CxLiAnJ9CQ0YDQutCw0L0nJywyKdCkLtCg0LjQsdGW0YbRjNC60LjQuS4gJyfQoNC10LPQvtGC0YPRiNC60LAnJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xX0NPUGVQendkZ1M3VV9PakV4T3B2OG5vejFtaVRlOGMvcHJldmlld1wiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1M2RjNjgzZGRhNDdmOGI2MTMwY1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCT0LDQu9Cw0LPQsNC9INCa0LDRgtC10YDQuNC90LAsIDkg0YDQvtC60ZbQsiBcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0K4u0KnRg9GA0L7QstGB0YzQutC40LkuINCi0LXQvNCwINC3INCy0LDRgNGW0LDRhtGW0Y/QvNC4LCAyKdCTLtCa0YPRiNC90LDRgNC10L3QutC+LiAnJ9Cc0LXQu9C+0LTRltGPJydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMW9CbFVmWFdxbGg1dURzREZDWGJIZ2M3WEdpQUpHYkxIL3ByZXZpZXdcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTNkYzY4M2RkYTQ3ZjhiNjEzMGRcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQk9C10YDQsNGB0LjQvNC10L3QutC+INCe0LvQtdC60YHQsNC90LTRgNCwLCA5INGA0L7QutGW0LJcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIiAxKdCSLtCg0LDRh9C60L7QstGB0YzQutC40LkuINCi0L7QutCw0YLQuNC90LAuIDIp0JIu0JrQvtGB0LXQvdC60L4uICcn0JzQtdC70L7QtNGW0Y8nJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xREduc1NRR2xCdThYX29EUHQzWUt0S21pVnpWLUczcUovcHJldmlld1wiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1M2RjNjgzZGRhNDdmOGI2MTMwZVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCT0L7Qu9C+0LTQvtCy0YHRjNC60LAg0KHQvtGE0ZbRjywgNyDRgNC+0LrRltCyXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCGLtCS0LDQvdGF0LDQu9GMLtCg0L7QvdC00L4sIDIp0Jwu0JTRgNC10LzQu9GO0LPQsC4nJ9CS0LXRgdC10LvQsCDQs9GA0LAnJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xMkt1dGotb3dwc3I4aGVscm1fa0ZaaDF5UXdNakVDN0EvcHJldmlld1wiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1M2RjNjgzZGRhNDdmOGI2MTMwZlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCT0L7Qu9GD0LEg0JDQu9GW0L3QsCwgOSDRgNC+0LrRltCyIFwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQnC7QmtC70LXQvNC10L3RgtGWLiDQodC+0L3QsNGC0LjQvdCwINC00L4g0LzQsNC20L7RgCwg0IbRhy4sIDIp0JEu0JTQstCw0YDRltC+0L3QsNGBLiDQn9GA0LXQu9GO0LTRltGPXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzF1d2hLTUtkSlpJaFJ6bk0zVlU1bVRxRXVLeHhUZXNhTy9wcmV2aWV3XCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODUzZGM2ODNkZGE0N2Y4YjYxMzEwXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0JPRgNC40LPQvtGAJ9GU0LLQsCDQmtCw0YLQtdGA0LjQvdCwLCA4INGA0L7QutGW0LJcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0K4u0KnRg9GA0L7QstGB0YzQutC40LkuICcn0KDQsNC90L7QuicnLCAgIDIp0IYu0JrQvtGA0L7Qu9GM0LrQvtCy0LAuJyfQk9C+0YDQvtCx0YfQuNC6JydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMWFpTXY1THdZVjltMnd6LVNKTUdueGZVcUlSVDlNX0V3L3ByZXZpZXdcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTNkYzY4M2RkYTQ3ZjhiNjEzMTFcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQlNCw0L3RjtC6INCE0LvQuNC30LDQstC10YLQsCwgNyDRgNC+0LrRltCyXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCcLtCb0Y7QsdCw0YDRgdGM0LrQuNC5Licn0KLQsNC90YbRjtCy0LDQu9GM0L3QsCcnLCAyKSDQlC7QmtCw0LHQsNC70LXQstGB0YzQutC40LkuINCS0LDQu9GM0YFcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMXZUa19tQUJfRUNoOVZEd1I2RU1hc1kxeTIxS1dyU1lIL3ByZXZpZXdcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTNkYzY4M2RkYTQ3ZjhiNjEzMTJcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQlNGA0L7Qs9Cw0L0gINCc0ZbQu9Cw0L3QsCwgNSDRgNC+0LrRltCyXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCcLtCc0LDQudGU0YAuICcn0JLQtdGB0LXQu9CwINCz0YDQsCcnLCAyKdCULtCR0LDRiNGC0LXQudC9LiAnJ9CS0LDQu9GM0YEg0YHQu9C+0L3QtdC90Y/RgicnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFYYjBnSWdGeUNuTHVDeGpuNWtsYWVRMExsOURza1JQei9wcmV2aWV3XCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODUzZGM2ODNkZGE0N2Y4YjYxMzEzXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0JTRgNC+0LfQtNC+0LLQsCDQhNC70LjQt9Cw0LLQtdGC0LAsIDkg0YDQvtC60ZbQsiBcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0Jku0KEu0JHQsNGFLtCc0LXQvdGD0LXRgi4gMinQky7QmtC70LDRgdGB0LXQvS4g0J/QvtC70YzQutCwXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFyNV8xOHBSN0JMeERTREVuTUQ3ckhOR2pSOXppRWlHbi9wcmV2aWV3XCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODUzZGM2ODNkZGE0N2Y4YjYxMzE0XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0JfQsdGW0YAg0JzQsNGA0ZbRjywgOCDRgNC+0LrRltCyXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCeLtCT0LXQtNGW0LrQtS4g0KHQvtC90LDRgtC40L3QsCDQtNC+INC80LDQttC+0YAsICAgINCGINGHLiwgMinQoC7QqNGD0LzQsNC9Licn0J/QtdGA0YjQsCDQstGC0YDQsNGC0LAnJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xXzdxbjNmVHV0ZEtHY0dkYmd2MTNyS29rSjhqeGdrM2EvcHJldmlld1wiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1M2RjNjgzZGRhNDdmOGI2MTMxNVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCG0LLQsNC90YzQutGW0LIg0J7Qu9C10LrRgdCw0L3QtNGA0LAsIDkg0YDQvtC60ZbQslwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQkC7QlNGW0LDQsdC10LvQu9GWLiDQodC60LXRgNGG0L4sICAyKdCeLtCT0LXQtNGW0LrQtS4gJyfQnNCw0LvQtdC90YzQutCwINC/J9GU0YHQsCcnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzF2WWVWa1JhVjFtYjMzdUoxREdNcjIwcW9pa0ZDcjlBeS9wcmV2aWV3XCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODUzZGM2ODNkZGE0N2Y4YjYxMzE2XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0IbQstCw0L3RjtC6INCc0LDRgNGW0LDQvCwgOCDRgNC+0LrRltCyXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQoS7QnNCw0LnQutCw0L/QsNGALiAnJ9Cc0LDQu9C10L3RjNC60LAg0L/RgNC10LvRjtC00ZbRjycnINGB0L7Qu9GMINC80ZbQvdC+0YBcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMXJSbExNSmpvV3dUVnVwN192Vk1ENEQzbmwyWS1sc3BPL3ByZXZpZXdcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTNkYzY4M2RkYTQ3ZjhiNjEzMTdcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQhtCy0LDQvdGO0Log0JzQsNGA0ZbQsNC8LCA4INGA0L7QutGW0LJcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIiDQki7QmtC40YDQtdC50LrQvi4gJyfQodGC0YDQuNCxLdGB0LrQvtC6JydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMUltcFBxOW5jYk1oNVQxU2NBSGZEbXo1N0JEbExaQ0YyL3ByZXZpZXdcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTNkYzY4M2RkYTQ3ZjhiNjEzMThcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQhtGB0YPQv9C+0LLQsCDQkNC70ZbRgdGW0Y8sIDgg0YDQvtC60ZbQsiBcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0Jou0KDQtdC50L3QtdC60LUuICcn0JPQsNCy0L7RgicnLCAyKdCZLtChLtCR0LDRhS4gJyfQnNCw0LvQtdC90YzQutCwINC/0YDQtdC70Y7QtNGW0Y8nJyDQtNC+INC80ZbQvdC+0YBcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMTBnOUNDSm9YUnplRzhDaUZoZ25FQnpUUUJMSVdEYW5BL3ByZXZpZXdcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTNkYzY4M2RkYTQ3ZjhiNjEzMTlcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQmtC+0LLQsNC70LXQvdC60L4g0JLQsNGA0LLQsNGA0LAsIDgg0YDQvtC60ZbQslwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQni7Qk9C10YLQsNC70L7QstCwLicn0KDQsNC90L7QuiDQsiDQu9GW0YHRlicnLCAgMinQki7Qn9C+0LTQstCw0LvQsC4gJyfQmtCw0L/RgNC40LfRg9C70Y8nJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xUzM4X29FQ09CbzdLR0RWMWF6SlV4M3pPWXdnUUVRSVYvcHJldmlld1wiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1M2RjNjgzZGRhNDdmOGI2MTMxYVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCa0L7RgNC10L3RltCy0YHRjNC60LAg0JTQsNGAJ9GPLCA5INGA0L7QutGW0LIgXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCgLtCS0LDQvdC00LDQuy4nJ9CS0L7QtNC+0LPRgNCw0LknJywgICAgICAgICAyKdCfLtCX0LDRhdCw0YDQvtCyLicn0JfQvdCw0LnQvtC80LjQuSDRgdC40LvRg9C10YInJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xOUNBelBDYVdyQU5fU1d6YUpGZEVweFBJT1F3LXJmTFUvcHJldmlld1wiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1M2RjNjgzZGRhNDdmOGI2MTMxYlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCa0L7RgdGC0LXQvdC60L4g0K/RgNC+0YHQu9Cw0LLQsCwgNyDRgNC+0LrRltCyXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIg0JIu0JrQvtGB0LXQvdC60L4uICcn0JzQtdC70L7QtNGW0Y8nJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xQ2RkWWNveWdUY3RvYWJHUUY3cFQycG9SdkN1cFZHX2MvcHJldmlld1wiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1M2RjNjgzZGRhNDdmOGI2MTMxY1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCa0L7RgdGC0LXQvdC60L4g0K/RgNC+0YHQu9Cw0LLQsCwgNyDRgNC+0LrRltCyIFwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0Jku0JnRlNC90YHQtdC9Licn0KfQsNGA0ZbQstC90LjQuSDRgtCw0L3QvtC6JydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMXVCMjliVFBFaVlkdWdKZkxPWmw0U1FHckZZOW5RcHItL3ByZXZpZXdcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTNkYzY4M2RkYTQ3ZjhiNjEzMWRcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQm9Cw0YLQutC+0LLRgdGM0LrQsCDQhNC70LjQt9Cw0LLQtdGC0LAsIDkg0YDQvtC60ZbQslwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQki7QmtC+0YHQtdC90LrQvi4g0JLQsNC70YzRgSwgICAgMinQni7Qk9GA0LXRh9Cw0L3RltC90L7Qsi4nJ9Cc0ZbQuSDQutC+0L3QuNC6JydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMTZZQXctcTdmOEY5SkJQbWZuOHRFa3BKVDgxSjdFYWhBL3ByZXZpZXdcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTNkYzY4M2RkYTQ3ZjhiNjEzMWVcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQm9GW0YjQvNCw0L0g0JTQsNGA0LjQvdCwLCA5INGA0L7QutGW0LJcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0JIu0J/QvtC00LLQsNC70LAuJyfQnNCw0YDRiC3Qs9GA0L7RgtC10YHQuicnLCAgICAgICAgICAyKdChLtCc0LDQudC60LDQv9Cw0YAuICcn0JrQvtC70LjRgdC60L7QstCwJydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMU5zV3ozVFIwU0tpVHRjTkNBSmUwNTliaGhGb210X05FL3ByZXZpZXdcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTNkYzY4M2RkYTQ3ZjhiNjEzMWZcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQnNCw0LPQvtC70LAg0KHQvtGE0ZbRjywgOCDRgNC+0LrRltCyIFwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQry7QkdC+0LHQsNC70ZbQui4nJ9Ch0LLRj9GC0LrQvtCy0LAg0L/QvtC70YzQutCwJyc7IDIp0IYu0JHQtdGA0LrQvtCy0LjRhy4g0KHQvtC90LDRgtC40L3QsCDRgdC+0LvRjCDQvNCw0LbQvtGAXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFndUF4czVnX3diR3ZfdHdxaXlwbzBlOEZIT3d1bS1JaC9wcmV2aWV3XCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODUzZGM2ODNkZGE0N2Y4YjYxMzIwXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0JzQsNC30YPRgNC10L3QutC+INCc0LDQudGPLCA4INGA0L7QutGW0LJcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0JwuINCR0L7QsdC10YAuICcn0JDQs9C10L3RgiDQpScnLCAgICAgICAgICAyKdCGLtCG0L7RgNC00LDQvS4gJyfQn9C+0LvRjtCy0LDQvdC90Y8g0L3QsCDQvNC10YLQtdC70LjQutCwJydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMUllMVdDUXBnUHVMWWRLTnhWR3VMa2VJVm5ZSk5aSjlUL3ByZXZpZXdcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTNkYzY4M2RkYTQ3ZjhiNjEzMjFcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQnNCw0YDRh9C10L3QutC+INCE0LvQuNC30LDQstC10YLQsCwgOSDRgNC+0LrRltCyXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCZLtChLtCR0LDRhS4nJ9Cc0LDQu9C10L3RjNC60LAg0L/RgNC10LvRjtC00ZbRjycnINC00L4g0LzRltC90L7RgCwgMinQny7Qp9Cw0LnQutC+0LLRgdGM0LrQuNC5Licn0JHQsNCx0LAg0K/Qs9CwJydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMVpKbzRHVUxaOXNmY1V1QXBGNWp5b0hJVVZfSUtBVnJnL3ByZXZpZXdcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTNkYzY4M2RkYTQ3ZjhiNjEzMjJcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQnNCw0YDRh9GD0Log0JzQsNC60YHQuNC8LCA4INGA0L7QutGW0LJcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIiDQpC4g0KjQv9GW0L3QtNC70LXRgC4g0KHQvtC90LDRgtC40L3QsCwg0YLQsi4xNTcg4oSWNFwiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xc0M3TVVqY2tucm5aWlo1aGZNQ1hiU3ZzMzZLQTNwcFYvcHJldmlld1wiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1M2RjNjgzZGRhNDdmOGI2MTMyM1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCc0LDRgNGH0YPQuiDQnNCw0LrRgdC40LwsIDgg0YDQvtC60ZbQsiBcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCSLiDQk9GW0LvQu9C+0LouICcn0JrQsNC/0YDRltGH0ZbRlNGC0YLQvicnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFZZEFpaHZBUWtDVDhiYnlXNDRwUWkyaVpobVgxYzNLei9wcmV2aWV3XCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODUzZGM2ODNkZGE0N2Y4YjYxMzI0XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0JzQvtGC0YPQt9C60LjQvdCwINCb0ZbQtNGW0Y8sIDkg0YDQvtC60ZbQsiBcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCeLtCR0ZbQu9Cw0YfQtdC90LrQvi4gJyfQo9C60YDQsNGX0L3RgdGM0LrQuNC5INGC0LDQvdC+0LonJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xYnBPOWRIQWNiUDhLbGFXVF8xblhYUWlaZWJ1RDhGMHAvcHJldmlld1wiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1M2RjNjgzZGRhNDdmOGI2MTMyNVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCc0L7RgtGD0LfQutC40L3QsCDQm9GW0LTRltGPLCA5INGA0L7QutGW0LJcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIiDQki7QnNC+0YbQsNGA0YIuICcn0JzQtdC90YPQtdGCJydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMUNfbXhBVTY1VnZ2dmZpUG9SUXNjS1Iwb1VEV3BIRFF0L3ByZXZpZXdcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTNkYzY4M2RkYTQ3ZjhiNjEzMjZcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQndC+0LLQvtGB0ZbQu9GM0YHRjNC60LAg0JrQsNGC0LXRgNC40L3QsCwgNyDRgNC+0LrRltCyIFwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQnC7QmtC70LXQvNC10L3RgtGWLiDQodC+0L3QsNGC0LjQvdCwINGC0LIuMzYsINCGLdCG0IbQhtGHLiwgMinQhi7QkdC10YDQutC+0LLQuNGHLiDQn9GA0LXQu9GO0LTRltGPXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFZNzJDRkxPTVBpYndUVVBnV09tc1FIM1lKUHZpQmpEYS9wcmV2aWV3XCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODUzZGM2ODNkZGE0N2Y4YjYxMzI3XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0J7Qu9GM0YXQvtCy0YHRjNC60LAg0JDQvdGW0YLQsCwgOSDRgNC+0LrRltCyXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIg0IYu0J/QsNCy0LvRltC6LiAnJ9Ch0L3RltC20LjQvdC60LgnJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xcnMtVmdGTW5JWVpWbTlrT2pOaDZGVGxfUDBDQURSQjEvcHJldmlld1wiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1M2RjNjgzZGRhNDdmOGI2MTMyOFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCe0LvRjNGF0L7QstGB0YzQutCwINCQ0L3RltGC0LAsIDkg0YDQvtC60ZbQsiBcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCdLiDQmtCw0YDQv9C10L3QutC+LiDQldGC0Y7QtCDRgdGWINC80ZbQvdC+0YBcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMWtTM0JxUXc0LW1zTW96bk8zTnpfaVdjNXl0bEpPRlRtL3ByZXZpZXdcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTNkYzY4M2RkYTQ3ZjhiNjEzMjlcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQntGB0YLQsNC/0YfRg9C6INCa0LDRgNGW0L3QsC4gOCDRgNC+0LrRltCyXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCSLtCT0ZbQu9C70L7QuiAnJ9CU0LfQstGW0L3QvtGH0LrQuCcnLCAyKdCGLtCl0YPRgtC+0YDRj9C90YHRjNC60LjQuS4gJyfQktC+0LPQvdGW0LLQvtGH0LrQsC3RgdGC0YDQuNCx0YPQvdGW0LLQvtGH0LrQsCcnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzE2UkFjTjJPNmt1bktaQUZyYmdCSHNFTmlaZzlpS3M0Ry9wcmV2aWV3XCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODUzZGM2ODNkZGE0N2Y4YjYxMzJhXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0J7RhdGA0ZbQvSDQr9GA0LXQvNCwLCA4INGA0L7QutGW0LJcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEpINCULtCa0LDQsdCw0LvQtdCy0YHRjNC60LjQuS4gJyfQndC+0LLQtdC70LAnJywgICAgICAyKdChLtCc0LDQudC60LDQv9Cw0YAuJyfQotC+0LrQsNGC0LjQvdCwJydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMXp3MUpLMEo0ZDhIay16bmJ2LTVvRG5hLXFMM2N3UkVQL3ByZXZpZXdcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTNkYzY4M2RkYTQ3ZjhiNjEzMmJcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQn9Cw0LLQu9C10L3QutC+INCh0YLQtdGE0LDQvdGW0Y8sIDcg0YDQvtC60ZbQsiBcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0Jwu0JvRjtCx0LDRgNGB0YzQutC40LkuICcn0J/RltGB0L3RjycnLDIpINCULtCa0LDQsdCw0LvQtdCy0YHRjNC60LjQuS4nJ9Ca0LvQvtGD0L3QuCcnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFJbW53SmoyRGVxei1USmZ2WEFDQ3JacGlaTlQzQm5LSC9wcmV2aWV3XCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODUzZGM2ODNkZGE0N2Y4YjYxMzJjXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0J/QsNC90YzQutC+0LLQsCDQkNC90L3QsCwgOCDRgNC+0LrRltCyIFwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQmS7QoS7QkdCw0YUuICcn0JzQsNC70LXQvdGM0LrQsCDQv9GA0LXQu9GO0LTRltGPJycg0LTQviDQvNGW0L3QvtGALCAgICAgICAgMinQmy7QqNGD0LrQsNC50LvQvi4gJyfQhtC90YLQtdGA0LzQtdGG0L4nJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xeXJBSHI2aTE3TlNoUDVxYUltUG5XeC14SlFqQ01NeTIvcHJldmlld1wiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1M2RjNjgzZGRhNDdmOGI2MTMyZFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCf0LDRgNGE0YzQvtC90L7QsiDQlNC80LjRgtGA0L4sIDkg0YDQvtC60ZbQslwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQnS7QktC70LDQtNC40LrRltC90LAt0JHQsNGH0LjQvdGB0YzQutCwLicn0KnQvtGB0Ywg0YHRg9C80L3QtScnLCAyKdCeLtCT0LXQtNGW0LrQtS4gJyfQotCw0L3QtdGG0YwnJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xTkRkdzU3UnNybUxyRV95V1NHMHVGSlhFaldjR3FHbVIvcHJldmlld1wiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1M2RjNjgzZGRhNDdmOGI2MTMyZVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCf0L7Qs9C+0YDRlNC70L7QsiDQkNGA0YLQtdC8LCA5INGA0L7QutGW0LJcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0Jku0KEu0JHQsNGFLiAnJ9Cc0LXQvdGD0LXRgicnLCAyKdCdLtCd0LjQttCw0L3QutGW0LLRgdGM0LrQuNC5LiAnJ9Ca0L7Qu9C+0LzQuNC50LrQsCcnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFuZTg2aU0tTlVzNk5jaW9Cc3ZVamZRYTZNbjdjU0FSNy9wcmV2aWV3XCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODUzZGM2ODNkZGE0N2Y4YjYxMzJmXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0J/Rg9C30LDQvdC+0LLQsCDQnNCw0YDRltGPLCA5INGA0L7QutGW0LJcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0KMuINCT0ZbQu9C70L7Qui4gJyfQmtC+0YDQvtC70ZbQstGB0YzQutC40Lkg0LzQtdC90YPQtdGCJycsIDIp0IYu0IbQvtGA0LTQsNC9LiDCq9Cf0L7Qu9GO0LLQsNC90L3RjyDQvdCwINC80LXRgtC10LvQuNC60LDCu1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xT0dTX2Zxekp2YkI3YU5QcmV4d3FESzV4MGxzLTIwQ0MvcHJldmlld1wiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1M2RjNjgzZGRhNDdmOGI2MTMzMFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCg0LXQt9C90ZbQuiDQotC10YLRj9C90LAsIDkg0YDQvtC60ZbQslwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQnS7QotC+0YDQvtC/0L7QstCwLiDQktCw0YDRltCw0YbRltGXLCAgICAgMinQlC7QmtCw0LHQsNC70LXQstGB0YzQutC40LkuICcn0JzQsNC70LXQvdGM0LrQuNC5INC20L7QvdCz0LvQtdGAJydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMXhHeE5UVHRXcmhkT3U2WTdHdWVVQWdHWHZqb0xsTUJsL3ByZXZpZXdcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTNkYzY4M2RkYTQ3ZjhiNjEzMzFcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQoNC40LHQsNC6INCQ0L3QsNGB0YLQsNGB0ZbRjywgOCDRgNC+0LrRltCyXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxKS7QnNC10LvQsNGA0YLRltC9Licn0KDQsNC90L7QuicnLCAyKdCcLtCc0LDQudGU0YAuJyfQndC10LfQstC40YfQsNC50L3QsCDQv9GA0LjQs9C+0LTQsCcnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzF1em1WcUZWbm5RYUlHWDdvM0gtN3ROZTBrcDFaaVV2UC9wcmV2aWV3XCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODUzZGM2ODNkZGE0N2Y4YjYxMzMyXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0KDRltC/0L3QuNC5INCR0L7Qs9C00LDQvSwgOCDRgNC+0LrRltCyXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIgMSnQhi4g0JHQtdGA0LrQvtCy0LjRhy4g0JLQsNGA0ZbQsNGG0ZbRlywgICAgIDIp0JQuINCg0L7Rg9C70ZYuJyfQkiDQutGA0LDRl9C90ZYg0LPQvdC+0LzRltCyJydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMVFscjFfLXBGQWxMSWl4S2toeDItWnh4RVlaaEFaOVo3L3ByZXZpZXdcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTNkYzY4M2RkYTQ3ZjhiNjEzMzNcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQoNC+0LzQsNC90YfQtdC90LrQviDQldC70LjRgdC10LksIDgg0YDQvtC60ZbQslwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiIDEp0Kgu0JPRg9C90L4uJyfQnNCw0YDRiCDQvNCw0YDRltC+0L3QtdGC0L7QuicnLCAgIDIpINCeLtCT0YDQtdGH0LDQvdGW0L3QvtCyLicn0J3QtdC30LLQuNGH0LDQudC90LAg0L/RgNC40LPQvtC00LAnJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xaUktempxNFFpbURMOVRMRTVCUll1cm11QUwxNmZTY1UvcHJldmlld1wiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1M2RjNjgzZGRhNDdmOGI2MTMzNFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCh0LDQudGH0YPQuiDQr9GA0L7RgdC70LDQstCwLCA5INGA0L7QutGW0LIgXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQoi4g0JzQsNC60YHQuNC80L7Qsi4nJ9CR0LDQsdCwINCv0LPQsCcnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFYNUM3a2ZOZDNRbG9abDBUQXZOX0FRaDAtcVh0cFNTQi9wcmV2aWV3XCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODUzZGM2ODNkZGE0N2Y4YjYxMzM1XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0KHQsNC50YfRg9C6INCv0YDQvtGB0LvQsNCy0LAsIDkg0YDQvtC60ZbQslwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiINCaLtCg0L7Qu9C70ZbQvS4gJycg0KjQvtC60L7Qu9Cw0LTQvdC1INC/0LXRh9C40LLQvicnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzE2dlltX0VkRHhfLTNCUkhKTXlEMzVrM29DNEYydFY1Ni9wcmV2aWV3XCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODUzZGM2ODNkZGE0N2Y4YjYxMzM2XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0KHRltGC0YjQsNGU0LLQsCDQl9Cw0YDQtdC80LAsIDkg0YDQvtC60ZbQslwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSkg0Jsu0JHQtdGC0YXQvtCy0LXQvS4g0KHQvtC90LDRgtC40L3QsCDQtNC+INC80LDQttC+0YA7IDIp0Jou0KHQu9C+0L3RltC80YHRjNC60LjQuS4gJyfQlNGO0LnQvNC+0LLQvtGH0LrQsCcnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFINmVkUXRzUnAwX3djdU9ZUkFFaDFsZmZSejBUWHRpYi9wcmV2aWV3XCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODUzZGM2ODNkZGE0N2Y4YjYxMzM3XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0KHQvNGW0YDQvdC+0LLQsCDQhNCy0LPQtdC90ZbRjywgOSDRgNC+0LrRltCyXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCSLtCa0LLQsNGB0L3QtdCy0YHRjNC60LjQuS4nJ9CU0YPQvNC60LAnJywgMinQlC7QkNC70LXQutGB0LDQvdC00LXRgC4gJyfQl9C40LzQvtCy0LAg0YDQsNC/0YHQvtC00ZbRjycnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzE2TFc5RWVzUFBzMVNUaTZrUXBReGRFSnprM1BnbkhZai9wcmV2aWV3XCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODUzZGM2ODNkZGE0N2Y4YjYxMzM4XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0KHRgtGA0LjQudGB0YzQutCwINCQ0LzQtdC70ZbRjywgOCDRgNC+0LrRltCyXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIgMSnQki7QmtC+0YHQtdC90LrQvi4nJ9CU0L7RidC40LonJzsgICAgICAyKdCeLtCR0ZbQu9Cw0YfQtdC90LrQvi4gJyfQldC60YHQv9GA0L7QvNGCJydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMTBoOU9OUkcyVDQydnhBbFd5NEFTUDBxZ2E4SVUwMnJ2L3ByZXZpZXdcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTNkYzY4M2RkYTQ3ZjhiNjEzMzlcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQodGC0YPQtNC30LjQvdGB0YzQutCwINCE0LvQuNC30LDQstC10YLQsCwgNyDRgNC+0LrRltCyXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxKSDQmy4g0JzQvtGG0LDRgNGCLiAnJ9Cc0LXQvdGD0LXRgicnLCAgICAyKdCjLiDQk9GW0LvQu9C+0LouICcn0J7RgdGW0L3QvdGW0Lkg0LXRgdC60ZbQtycnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFWZHNPYnViOVowRTdaTTFRWU1zZnFrYWxqbm5MUTJqZS9wcmV2aWV3XCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODUzZGM2ODNkZGE0N2Y4YjYxMzNhXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0KHRg9GF0LDQvSDQlNGW0LDQvdCwLCA4INGA0L7QutGW0LIgXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCbLtCo0YPQutCw0LnQu9C+LtCS0LDRgNGW0LDRhtGW0Zcg0L3QsCDRgtC10LzRgyDQki7QqNCw0ZfQvdGB0YzQutC+0LPQvjsgMinQoC7QpNGD0YfRgS4nJ9Cc0LDQu9C10L3RjNC60LUg0YDQvtC30LHQuNGC0LUg0YHQtdGA0YbQtScnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFHdTV1Y29DR0ZoeUVuTWgzLUlEVUotdUYwVHVqMzdVWi9wcmV2aWV3XCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODUzZGM2ODNkZGE0N2Y4YjYxMzNiXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0KLQtdGA0L8n0Y/QuiDQkNCw0YDQvtC9LCA5INGA0L7QutGW0LJcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEpINCGLtCR0LXRgNC60L7QstC40YcuINCS0LDRgNGW0LDRhtGW0Zcg0L3QsCDRg9C60YDQsNGX0L3RgdGM0LrRgyDRgtC10LzRgzsgMinQoi7QntGB0YLQtdC9LiAnJ9Cc0LDQu9C10L3RjNC60LjQuSDQtdC70YzRhCcnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFadFFiTkJCZ0dtT3pNV25uSEFGLTdfQ0JzWGszTHctMi9wcmV2aWV3XCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODUzZGM2ODNkZGE0N2Y4YjYxMzNjXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0KLQuNC80YfQtdC90LrQviDQndCw0LTRltGPLCA4INGA0L7QutGW0LIgXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCQLtCo0YLQvtCz0LDRgNC10L3QutC+LiAnJ9Cc0LXRgtC10LvQuNC6JycsIDIp0JIu0JPRltC70LvQvtC6LiAnJ9Cc0ZbRgdGP0YfQvdC1INGB0Y/QudCy0L4nJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xUFM5QUdIeUVEcXN0anFBMU1pRWJUa3A1ajFVdVNockcvcHJldmlld1wiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1M2RjNjgzZGRhNDdmOGI2MTMzZFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCi0ZbRidC10L3QutC+INCS0LXRgNC+0L3RltC60LAsIDcg0YDQvtC60ZbQslwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQmS7QoS7QkdCw0YUuICcn0JzQsNC70LXQvdGM0LrQsCDQv9GA0LXQu9GO0LTRltGPJycg0LTQviDQvNGW0L3QvtGALCAyKdCbLiDQqNGD0LrQsNC50LvQvi4g0JLQsNGA0ZbQsNGG0ZbRl1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xRnRyajlrNWpoRHhWaTV1ZmhYWTNUSGt3T0s4WTEySG0vcHJldmlld1wiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1M2RjNjgzZGRhNDdmOGI2MTMzZVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCi0L7QtNC+0YDQvtCy0LAg0JTQsNGP0L3QsCwgNiDRgNC+0LrRltCyXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCSLtCR0LDRgNCy0ZbQvdGB0YzQutC40LkuICcn0JfQsNC50YfQuNC6JycsICAgICAgICAgIDIp0Jwu0JvRjtCx0LDRgNGB0YzQutC40LkuICcn0J/Qu9GP0YHQvtCy0LAnJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xUEF6SUJ0akcwTmZxYXpVSTI1SHNSckZWWGpMeXoyQmkvcHJldmlld1wiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1M2RjNjgzZGRhNDdmOGI2MTMzZlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCi0L7QvdGW0ZTQstC40Ycg0JrRgdC10L3RltGPLCA5INGA0L7QutGW0LJcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0J4u0KHQv9GW0LvRltC+0YLRli4nJ9CT0YPRhtGD0LvRj9GC0LAnJywgICAyKdCSLtCT0ZbQu9C70L7Qui4nJ9CjINGB0YLQsNGA0L7QvNGDINCS0ZbQtNC90ZYnJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xMTl3M3duSE1wNlhOV1NLS3I5VkpJb1lqVklQOU1sQU8vcHJldmlld1wiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1M2RjNjgzZGRhNDdmOGI2MTM0MFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCi0Y7RgtGM0LrQviDQktC+0LvQvtC00LjQvNC40YAsIDkg0YDQvtC60ZbQslwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQpC7QmtGD0LvQsNGDLtCh0L7QvdCw0YLQuNC90LAsINGC0LIuNTUg4oSWMywgMinQoC7Qm9GW0YHQvtCy0LAuJyfQktC10YHQtdC70LjQuSDQvdCw0YHRgtGA0ZbQuScnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFiZy1ISzdMcDNVd2pHazNNSVRUZEQ5ZVE3ckZkaHgxSC9wcmV2aWV3XCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODUzZGM2ODNkZGE0N2Y4YjYxMzQxXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0KTQtdGB0LXQvdC60L4g0JDQvdC90LAsIDgg0YDQvtC60ZbQsiBcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0JAu0JPQtdC00ZbQutC1LtCh0L7QvdCw0YLQuNC90LAg0LTQviDQvNCw0LbQvtGALCAgMinQki7Qk9Cw0LLRgNC40LvRltC9LiAnJ9Ca0LDQv9GA0ZbRh9GH0ZbQvicnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFFanJxOFpFWEJKcV9BTmZBaVktNWpLSDdSczU4Zkx1Qy9wcmV2aWV3XCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODUzZGM2ODNkZGE0N2Y4YjYxMzQyXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0KfQvtGA0L3QtdC5INCv0L3QsCwgNyDRgNC+0LrRltCyIFwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQnC4g0JXQutGI0YLQtdC50L0uICcn0JrQsNC/0YDQuNC3INCz0L3QvtC80ZbQsicnOyAgMinQoS7QrtGE0LXRgNC+0LIuICcn0J3QvtC60YLRjtGA0L0nJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xZzZiQjdhcVdwdHc1bExuQWlYa2xPRnBRbDRYME5MS2ovcHJldmlld1wiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1M2RjNjgzZGRhNDdmOGI2MTM0M1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCo0LrRg9GA0LrQviDQotC40LzQvtGE0ZbQuSwgOSDRgNC+0LrRltCyIFwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQpC7QqNC+0L/QtdC9LiAnJ9CS0LDQu9GM0YEnJyDQu9GPINC80ZbQvdC+0YAsICAgICAyKdCbLtCo0YPQutCw0LnQu9C+LiAnJ9CS0LXRgdC10LvQsCDQvNC+0LfQsNGX0LrQsCcnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFlSko0NFpiZ1RyVVRkSC10QlBLR3ljMUtfMHJyeWo0Xy9wcmV2aWV3XCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODUzZGM2ODNkZGE0N2Y4YjYxMzQ0XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0K7RgNGH0YPQuiDQr9C90LAsIDcg0YDQvtC60ZbQslwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiIDEp0JwuINCa0LvQtdC80LXQvdGC0ZYuINCh0L7QvdCw0YLQuNC90LAsINGC0LIuMzYg4oSWMSwg0IYg0YcuLDIp0J8u0KfQsNC50LrQvtCy0YHRjNC60LjQuS4gJyfQktGA0LDQvdGW0YjQvdGPINC80L7Qu9C40YLQstCwJydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMW9QVXVIMnF6YVFVTHlwdnV5M002US1mN3Z2aFpsQW54L3ByZXZpZXdcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQwMDY4M2RkYTQ3ZjhiNjEzNDVcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQkNC80ZbRhdCw0LvQsNC60ZbQvtCw0ZQg0ITQvNC10LvRjNGP0L0sIDEwINGA0L7QutGW0LJcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0J4u0JHRltC70LDRh9C10L3QutC+Licn0J7RgdGW0L3QvdGW0Lkg0LXRgdC60ZbQtycnLCAyKdCcLtCa0LDRgNC80ZbQvdGB0YzQutC40LkuICcn0JPRg9C80L7RgNC10YHQutCwJydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzF6ZnFreUc2QnBaM18xWFhkZl9GVllPV0ZtcGFraldXUC9wcmV2aWV3IFwiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDAwNjgzZGRhNDdmOGI2MTM0NlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCQ0L3RgtC+0L3RjtC6INCS0LDRgNCy0LDRgNCwLCAxMiDRgNC+0LrRltCyIFwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0IYu0J/Qu9C10LnRlNC70YwuINCh0L7QvdCw0YLQuNC90LAg0YDQtSDQvNCw0LbQvtGAXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xREplSGYzZkF1WjU1UGY2NW1NQXR3MlBjdDk2ZGZhLXQvcHJldmlldyBcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQwMDY4M2RkYTQ3ZjhiNjEzNDdcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQkNC90YLQvtC90Y7QuiDQktCw0YDQstCw0YDQsCwgMTIg0YDQvtC60ZbQsiBcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItChLtCc0LDQudC60LDQv9Cw0YAuJyfQkiDQutC+0LLQsNC70YzQvdGWJydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFsWHlLdXdNX0pneFlabDZlV2tBc2VVNnZOYVd6N3BZei9wcmV2aWV3IFwiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDAwNjgzZGRhNDdmOGI2MTM0OFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCR0LDQsdGH0LDQvdGW0Log0JDQvdC00YDRltC5LCAxMCDRgNC+0LrRltCyIFwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQlC7Qp9C40LzQsNGA0L7Qt9CwLiDQodC+0L3QsNGC0LjQvdCwINGB0L7Qu9GMINC80LDQttC+0YAuIDIp0K4u0JHRltC70LrQvtCy0YHRjNC60LjQuS4gJyfQoNC+0LfQtNGD0LzQuCcnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xVUhBc05LamNKaUJneEFkSUxPc2pERVJKS1FNemVxN0EvcHJldmlldyBcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQwMDY4M2RkYTQ3ZjhiNjEzNDlcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQkdCw0LvRg9GC0LAg0JDQu9GW0L3QsCwgMTAg0YDQvtC60ZbQslwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiIDEpINCVLtCT0YDRltCzLiAnJ9Ci0LDQvdC10YbRjCDQtyDQmdC+0LvRjNGB0YLQtdGA0LAnJywgMinQmy7Ql9Cw0LHQsNGA0LAuJyfQndGW0Ycg0Y/QutCwINC80ZbRgdGP0YfQvdCwJydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFvWEdGM200MUstUU44WTEtV19qODVEclRqa2s4OHNRWC9wcmV2aWV3IFwiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDAwNjgzZGRhNDdmOGI2MTM0YVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCR0LDRgdC40YHRgtCwINCe0LvQtdC60YHQsNC90LTRgNCwLCAxMiDRgNC+0LrRltCyXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIgMSnQpC7QqNC+0L/QtdC9LiDQktCw0LvRjNGBLCDRgtCyLjY0IOKEljEsIDIp0KEu0JHQvtGA0YLQutC10LLQuNGHLiDQn9GA0LXQu9GO0LTRltGPLCDRgtCyLjYg4oSWMVwiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMXNQV1pTUG40VU1KVmRmejczZ3JhRHdkd0l4eVhnakJZL3ByZXZpZXcgXCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0MDA2ODNkZGE0N2Y4YjYxMzRiXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0JHRltC70ZbQvdC60LXQstC40Ycg0J3QsNGC0LDQu9GW0Y8sIDEyINGA0L7QutGW0LJcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEpINCcLtCb0LjRgdC10L3QutC+LiDQldC70LXQs9GW0Y8sMinQmi7Qp9C10YDQvdGWLiDQldGC0Y7QtCDihJYxINGC0LIuNzQwXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xQVJfV1cwQ0ZTU0NYelZBZnJIWHV3QkFELV9RQzhqNlcvcHJldmlldyBcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQwMDY4M2RkYTQ3ZjhiNjEzNGNcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQkdGD0LvRjNC60L7QstGB0YzQutCwINCc0LDRgNC40L3QsCwgMTAg0YDQvtC60ZbQslwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiINCULtCn0ZbQvNCw0YDQvtC30LAuINCh0L7QvdCw0YLQsCDRgdC+0LvRjCDQvNCw0LbQvtGAXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xYm94ZHRnQWRoQklKZHRjeGR6blpIUC1xNWZhcWE1UUsvcHJldmlldyBcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQwMDY4M2RkYTQ3ZjhiNjEzNGRcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQkdGD0LvRjNC60L7QstGB0YzQutCwINCc0LDRgNC40L3QsCwgMTAg0YDQvtC60ZbQslwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0Jou0JPQsNCx0LXQuy4gJyfQlNC10YDQtdCy0L4g0LbQuNGC0YLRjycnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xZlhaNk5kc042dTc4dEk2ZXJLRWpYMm9mZXNIQjJlYmgvcHJldmlldyBcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQwMDY4M2RkYTQ3ZjhiNjEzNGVcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQktCw0LrRg9C70LXQvdC60L4g0JDRgNGW0L3QsCwgMTAg0YDQvtC60ZbQsiBcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCGLtCR0LXRgNC60L7QstC40YcuINCS0LDRgNGW0LDRhtGW0Zcg0L3QsCDRgtC10LzRgyDQs9GA0YPQt9C40L3RgdGM0LrQvtGXINC90LDRgNC+0LTQvdC+0Zcg0L/RltGB0L3RliAnJ9Ch0LLRltGC0LvRj9GH0L7QuicnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xQ2R0WG9WempFbDFZcVZDZEJ5eEtzWmRxRWpmdDFoczYvcHJldmlldyBcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQwMDY4M2RkYTQ3ZjhiNjEzNGZcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQktCw0LrRg9C70LXQvdC60L4g0JDRgNGW0L3QsCwgMTAg0YDQvtC60ZbQsiBcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItChLtCU0LbQvtC/0LvRltC9Licn0JDRgNGC0LjRgdGCINC10YHRgtGA0LDQtNC4JydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFHbnRpWXZMekhyVVhJc1dEZmRIcDQwLXR0NXlZdWlncS9wcmV2aWV3IFwiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDAwNjgzZGRhNDdmOGI2MTM1MFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCS0LDRgdC40LvRjNGU0LLQsCDQktC10YDQvtC90ZbQutCwLCAxMiDRgNC+0LrRltCyXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCgLtCT0LvRltGU0YAuINCf0YDQtdC70Y7QtNGW0Y8g0LTQviDQvNGW0L3QvtGAOzIp0KEu0JTQttC10YDQsdCw0YjRj9C9LiAnJ9Co0LLQuNC00LrQuNC5INGA0YPRhScnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xUUJndGRodzJJUWVUSDZRRVluS0xHQmFsWDBLMnVwTjQvcHJldmlldyBcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQwMDY4M2RkYTQ3ZjhiNjEzNTFcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQktC+0LnRgtC10L3QutC+INCb0ZbQu9GW0Y8sIDEwINGA0L7QutGW0LJcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEpINCbLiDQqNGD0LrQsNC50LvQvi4nJ9Cf0L7QvdGWJycsIDIp0J4u0KDQuNCx0LDQu9C+0LLQsC4gJyfQndC10L/QvtGB0LjQtNCwJydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzEtTF9rSkh1MVBwa1BHUkNKX0VmeEZMQmJtYzhmT093cS9wcmV2aWV3IFwiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDAwNjgzZGRhNDdmOGI2MTM1MlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCS0L7QudGH0LXQvdC60L4g0JLQu9Cw0LTQuNGB0LvQsNCyLCAxMSDRgNC+0LrRltCyXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIgMSkg0Jku0KEu0JHQsNGFLtCU0LLQvtCz0L7Qu9C+0YHQvdCwINGW0L3QstC10L3RhtGW0Y8g0YTQsCDQvNCw0LbQvtGAOyAyKdCkLtCo0L7Qv9C10L0uINCd0L7QutGC0Y7RgNC9INC00L4g0LTRltGU0Lcg0LzRltC90L7RgFwiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMXd1NWtsWEdHN0JoMmZQbFIzWWJlTWxTS1pCVDhQUm5OL3ByZXZpZXcgXCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0MDA2ODNkZGE0N2Y4YjYxMzUzXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0JLQvtGJ0LjQvdGB0YzQutC40Lkg0IbQu9C70Y8sIDEyINGA0L7QutGW0LJcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0JUu0JPRgNGW0LMuINCd0L7QutGC0Y7RgNC9LCAyKdCcLtCg0LjQvNGB0YzQutC40Lkt0JrQvtGA0YHQsNC60L7Qsi4gJyfQn9C+0LvRltGCINC00LbQvNC10LvRjycnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xN2xiUzBMOTU2YU5aOUQwR1RJLXAtazM5ejRscGVoQzcvcHJldmlldyBcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQwMDY4M2RkYTQ3ZjhiNjEzNTRcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQk9Cw0LvQtdGH0LXQsiDQhtCy0LDQvSwgMTEg0YDQvtC60ZbQslwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiIDEp0J7QsdGALiDQky7QkdC10Lcn0Y/Qt9C40YfQvdC+0LPQvi4gJyfQndGW0Ycg0Y/QutCwINC80ZbRgdGP0YfQvdCwJycsIDIp0J8u0KfQsNC50LrQvtCy0YHRjNC60LjQuS4gJyfQndC10LDQv9C+0LvRltGC0LDQvdGB0YzQutCwINC/0ZbRgdC10L3RjNC60LAnJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMTQtWjgydllrVkYxeDJOcG5xSzFfeGhBZjJiV3VhUFFWL3ByZXZpZXcgXCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0MDA2ODNkZGE0N2Y4YjYxMzU1XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0JPQsNC80LfQsNC70ZbRlNCy0LAg0JfQtdC50L3QsNCxLCAxMiDRgNC+0LrRltCyXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQkdGW0LvQvtGA0YPRgS4g0L3QsNGALtC/0ZbRgdC90Y8gJyfQkdGD0LvRjNCx0LAnJywg0L7QsdGALtCULtCb0YzQstCwLdCa0L7QvNC/0LDQvdGW0LnRhtGPXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xZFFxR0ZwaE9HbzBWcEdvVWQ0ejRVM2VuOUxUYzE5cGsvcHJldmlldyBcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQwMDY4M2RkYTQ3ZjhiNjEzNTZcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQk9Cw0LzQt9Cw0LvRltGU0LLQsCDQl9C10LnQvdCw0LEsIDEyINGA0L7QutGW0LIgXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQmS7Qk9Cw0LnQtNC9LiDQnNC10L3Rg9C10YJcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFXd184MDBKUHZINjlZdGpPTkVDSkg4VnRaX2Vaa2t5ay9wcmV2aWV3IFwiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDAwNjgzZGRhNDdmOGI2MTM1N1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCT0ZbQu9GW0L3QsCDQntC70LXQutGB0LDQvdC00YDQsCwgMTEg0YDQvtC60ZbQslwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQki7QnNC+0YbQsNGA0YLQkNGA0ZbRjzsgMinQlC7Qk9GA0LDQtNC10YHQutGWLicn0JzQvtGA0L7Qt9C40LLQvi4g0KDQtdCz0YLQsNC50LwnJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMWYzSzUwR1Zjdzhrc2RZZ1JNeFY2MWFkUkFGSDVQS013L3ByZXZpZXcgXCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0MDA2ODNkZGE0N2Y4YjYxMzU4XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0JPQvtGA0LDQuSDQr9GA0L7RgdC70LDQsiwxMiDRgNC+0LrRltCyXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCcLtCh0LrQvtGA0LjQuiAnJ9Cc0LXQu9C+0LTRltGPJycsICAgICAgICAgMikg0J8u0JHQsNC30LDQu9CwLiAnJ9Cf0L7RgtGW0LonJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMVVDYm43eFB2RWJySENwTVRobkNJajVRdGduNnJWU19mL3ByZXZpZXcgXCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0MDA2ODNkZGE0N2Y4YjYxMzU5XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0JPQvtGG0YPQu9C10L3QutC+INCS0ZbQutGC0L7RgNGW0Y8sIDEyINGA0L7QutGW0LJcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0Jku0JHQsNGFLiDQlNCy0L7Qs9C+0LvQvtGB0L3QsCDRltC90LLQtdC90YbRltGPINC70Y8g0LzRltC90L7RgCwgMikg0KQu0KjQvtC/0LXQvS4g0J3QvtC60YLRjtGA0L0g4oSWMjFcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzE3MUlDTV83R2hyYW8xUk42dWcwWExvUk5KS29iYVJHUS9wcmV2aWV3IFwiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDAwNjgzZGRhNDdmOGI2MTM1YVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCT0YPQutCw0YHRj9C9INCb0ZbQsNC90LAsIDEwINGA0L7QutGW0LJcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCQLtCl0LDRh9Cw0YLRg9GA0Y/QvS4gXFxcItCQ0L3QtNCw0L3RgtGW0L3QvlxcXCJcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzEySWRBZlNpX3dhVTZsck5mVXZQMkgweDBXTzc4YU1HYS9wcmV2aWV3IFwiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0MDA2ODNkZGE0N2Y4YjYxMzVhYVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCT0YPQutCw0YHRj9C9INCb0ZbQsNC90LAsIDEwINGA0L7QutGW0LJcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCbLtCl0LXQu9C70LXRgC4g0KHQvtC90LDRgtC40L3QsFwiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMWt0T1ZDM1RSX0FFNHVSYkc2Mk94TktWam9OSnFpdVBtL3ByZXZpZXcgXCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0MDA2ODNkZGE0N2Y4YjYxMzViXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0JPRg9C70Y/RlNCy0LAg0ITQstCwLCAxMdGA0L7QutGW0LJcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0J8uINCX0LDRhdCw0YDQvtCyLicn0JXQu9C10LPRltGPJycsIDIpINCTLtCS0LDQu9C70LXQvdCz0LDRg9C/0YIuICcn0KHQutC10YDRhtC40L3QvicnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xcmJjbTdGX0JmQWVxTUV6ZlFoWjZmRjNZMjFhN3JZc3cvcHJldmlldyBcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQwMDY4M2RkYTQ3ZjhiNjEzNWNcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQk9GD0YLQvdC40LogINCa0ZbRgNC10L3QsCwgMTAg0YDQvtC60ZbQsiBcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCbLtCo0ZbRgtGC0LUuJyfQotCw0L3QtdGG0YwgINCz0L3QvtC80ZbQsicnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xbmlEcU5pQ0p1M0NMUzNFRzVCV0h1Ql9BcTd2NDVSczMvcHJldmlldyBcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQwMDY4M2RkYTQ3ZjhiNjEzNWRcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQk9GD0YLQvdC40Log0JrRltGA0LXQvdCwLCAxMCDRgNC+0LrRltCyXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIg0J4u0KHQvtC70L7QstGP0L3QtdC90LrQvi4nJ9Cf0L7QvdGWINCx0ZbQu9GPINGG0LjRgNC60YMnJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMWg3cTBZYVlpeTZBNnM2QnB3X1R4dHpyd3dTX0F6OUx4L3ByZXZpZXcgXCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0MDA2ODNkZGE0N2Y4YjYxMzVlXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0JTQvtGA0L7RiNC10L3QutC+INCu0LvRltGPLCAxMCDRgNC+0LrRltCyXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxKSDQnC4g0JrQu9C10LzQtdC90YLRli4g0KHQvtC90LDRgtC40L3QsCwg0YLQsi4zNiDihJY2LCDQhiDRhzsgMikg0IYu0JHQtdGA0LrQvtCy0LjRhy4g0J/RgNC10LvRjtC00ZbRjywg0YLQsi40NiDihJYxNVwiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMUdsRkNMQzN4XzF0WkNPZm1OaE4wbTRUMFBPSllCVGpOL3ByZXZpZXcgXCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0MDA2ODNkZGE0N2Y4YjYxMzVmXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0JTRg9C00ZbQvSDQlNC80LjRgtGA0L4sIDExINGA0L7QutGW0LIgXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCbLtCR0LXRgtGF0L7QstC10L0uINCh0L7QvdCw0YLQuNC90LAg0YHQvtC70Ywg0LzQsNC20L7RgCzQhi3QhtCGINGHLjsgMinQoS7Qn9GA0L7QutC+0YQn0ZTQsi4gJyfQmtCw0LfQvtGH0LrQsCcnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xeGJtNHgtVmZ6SHp1ekI0alRoYnNQaDhJYUNhOTR0dEIvcHJldmlldyBcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQwMDY4M2RkYTQ3ZjhiNjEzNjBcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQhNGA0LzQvtC70LXQvdC60L4g0JTQsNGA0LjQvdCwLCAxMiDRgNC+0LrRltCyIFwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0Jku0KEuINCR0LDRhS4g0JDRgNGW0Y8g0YDQtSDQvNCw0LbQvtGAXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xdTdNNkNYaXlzVWZKdXU2TS1BdkI3NzRXZW4wQW51Wk4vcHJldmlldyBcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQwMDY4M2RkYTQ3ZjhiNjEzNjFcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQhNGA0LzQvtC70LXQvdC60L4g0JTQsNGA0LjQvdCwLCAxMiDRgNC+0LrRltCyXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQni4g0JHRltC70LDRiC4gJyfQkdCw0YDQutCw0YDQvtC70LAnJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMWhPUmY0dVZ2b1c1NHBUQ3hnSzJ6SW1neFl4SDQ3WW9vL3ByZXZpZXcgXCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0MDA2ODNkZGE0N2Y4YjYxMzYyXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0JfQsNCz0LDRlNCy0YHRjNC60LAg0KHQvtGE0ZbRjywgMTIg0YDQvtC60ZbQsiBcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0JAu0JrQu9Cw0YHRgdC10L0gJyfQnNGD0LfQuNGH0L3QuNC5INC10YHQutGW0LcnJ+KEljEsIDIp0J4u0JrQuNC80LvQuNC6Licn0JvQtdC+0L3RgtC+0LLRltCw0L3QsCcnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xdzFUUGg5SlhzQWplX0twRTlRUHA1SXYwRXVqbXZqRy0vcHJldmlldyBcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQwMDY4M2RkYTQ3ZjhiNjEzNjNcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQhtCy0LDQvdC90ZbQutC+0LLQsCDQnNCw0YDRltGPLCAxMSDRgNC+0LrRltCyXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCSLtCc0L7RhtCw0YDRgi4g0KHQvtC90LDRgtCwIOKEljE2LCDQhiDRh9Cw0YHRgtC40L3QsCwgIDIp0J4u0JPRgNC40LHQvtGU0LTQvtCyLiDQktCw0LvRjNGBXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xWDF2aHNUSVBrSTV6aXMyMkpIT1h4UVVEZE9CZTlBOUcvcHJldmlldyBcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQwMDY4M2RkYTQ3ZjhiNjEzNjRcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQhtCy0LDQvdGO0Log0JLRltGA0YHQsNCy0ZbRjywxMCDRgNC+0LrRltCyXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCeLtCl0L7QtNC+0YguJyfQp9C10YDQstC+0L3QsCDRiNCw0L/QvtGH0LrQsCcnLCAyKdCGLtCp0LXRgNCx0LDQutC+0LIuJyfQldC70LXQs9GW0Y8g0LrQuNGX0LLRgdGM0LrQuNGFINC/0LDQs9C+0YDQsdGW0LInJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMU03STFRSmJGa1dCUUh3SzFsSEtveW9FMzBsLVdjMTJtL3ByZXZpZXcgXCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0MDA2ODNkZGE0N2Y4YjYxMzY1XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0IfQstC20LXQvdC60L4g0JDQtNCwLCAxMiDRgNC+0LrRltCyXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCcLtCa0LvQtdC80LXQvdGC0ZYu0KHQvtC90LDRgtC40L3QsCDRgdC+0LvRjCDQvNCw0LbQvtGALCAyKdCcLtCh0LrQvtGA0LjQui4gJyfQndCw0YDQvtC00L3QuNC5INGC0LDQvdC10YbRjCcnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xa3BtNmswTUN0dWpnN3NQSDlkY29kWTBrejFCckdFWDkvcHJldmlldyBcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQwMDY4M2RkYTQ3ZjhiNjEzNjZcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQmtCw0LzQsNC90YfQuCDQhNC70LjQt9Cw0LLQtdGC0LAsIDEyINGA0L7QutGW0LJcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0JIu0JrQsNC70ZbRgdGC0YDQsNGC0L7Qsi4nJ9Ca0L7QvdC40Log0JPQvtGA0LHQvtC60L7QvdC40LonJywgMinQri7QktC10YHQvdGP0LouICcn0J3RltC20L3RltGB0YLRjCcnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xbWxXYUxZc0Q4ZmtCUUhnZHJYLVJmTkNrZDZ3UnJQa08vcHJldmlldyBcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQwMDY4M2RkYTQ3ZjhiNjEzNjdcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQmtCw0YDQsNGI0LrQtdCy0LjRhyDQpdGA0LjRgdGC0LjQvdCwLCAxMSDRgNC+0LrRltCyIFwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQmS7QoS7QkdCw0YUuINCi0YDQuNCz0L7Qu9C+0YHQvdCwINGW0L3QstC10L3RhtGW0Y8g0YDQtSDQvNGW0L3QvtGALCAyKdCcLtCU0YDQtdC80LvRjtCz0LAuICcn0KHQutC10YDRhtC+JydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFFQkdoTklwdEpTZWkwR1pMS3BzZnlhSWhpM1VhZTBjSC9wcmV2aWV3IFwiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDAwNjgzZGRhNDdmOGI2MTM2OFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCa0ZbRhtC10YDQsCDQkNC70ZbQvdCwLCAxMSDRgNC+0LrRltCyXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCaLtCU0LXQsdGO0YHRgdGWICcn0KDQvtC80LDQvdGC0LjRh9C90LjQuSDQstCw0LvRjNGBJycsIDIp0JEu0KTRltC70YzRhi4gJyfQodC60LXRgNGG0L4nJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMU5vdnNvZ193NTJwekdrZkoyaFp4aWh2MzNDMmNTZjBKL3ByZXZpZXcgXCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0MDA2ODNkZGE0N2Y4YjYxMzY5XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0JrQvtGA0L7Qu9GMINCE0LvRltC30LDQstC10YLQsCwgMTAg0YDQvtC60ZbQsiBcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEpINCfLtCn0LDQudC60L7QstGB0YzQutC40LkuJyfQn9GW0YHQvdGPINC20LDQudCy0L7RgNC+0L3QutCwJyc7IDIp0Jsu0KjRg9C60LDQudC70L4uINCf0YDQtdC70Y7QtNGW0Y9cIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFrYnJHbDhfSWhmcW5qa3ZUdm9XaDc5bWdtOXBRNWtUSi9wcmV2aWV3IFwiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDAwNjgzZGRhNDdmOGI2MTM2YVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCa0L7RgtC70Y/RgNC10LLRgdGM0LrQsCDQrtC70ZbRjywgMTEg0YDQvtC60ZbQslwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiINCZLiDQk9Cw0LnQtNC9LiDQodC+0L3QsNGC0LAg0YHQvtC70Ywg0LzQsNC20L7RgCwg0IbRhy5cIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFGQVdISEtRNW94MEVUSkx2dXJyUmdaMmRPbTF2dEZrZS9wcmV2aWV3IFwiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDAwNjgzZGRhNDdmOGI2MTM2YlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCa0L7RgtC70Y/RgNC10LLRgdGM0LrQsCDQrtC70ZbRjywgMTEg0YDQvtC60ZbQsiBcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIifQk9Cw0L3QtNC30Y8nJywg0L7QsdGALtCEINCS0LXQstGA0LjQutCwXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xa0l2ZHN2SXJ4ZW84MTZkLV9NVjVuYmJjci1hT1poRXAvcHJldmlldyBcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQwMDY4M2RkYTQ3ZjhiNjEzNmNcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQmtC+0YLQvtCy0LAg0JzQsNGA0ZbRjywgMTAg0YDQvtC60ZbQsiBcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0J4u0JrQu9GO0YfQsNGA0YzQvtCyLicn0KjRg9GA0LDQu9GUJycsIDIp0KQu0JzQtdC90LTQtdC70YzRgdC+0L0uJyfQn9GW0YHQvdGPINCx0LXQtyDRgdC70ZbQsicnLCDRgtCyLjE5IOKEljJcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFZMWNXXzJaaXdCRU4wWWMxS3JXV25jWDM3NnpnYUQ1Qi9wcmV2aWV3IFwiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDAwNjgzZGRhNDdmOGI2MTM2ZFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCa0YDQuNCy0L7QsdCw0LHQutC+INCa0YHQtdC90ZbRjywgMTAg0YDQvtC60ZbQslwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiINCbLtCo0YPQutCw0LnQu9C+LiAnJ9CS0LXRgdC90Y/QvdGWICDQutGA0LDQv9C70LjQvdC60LgnJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMWRJSmdrTElPMmU3bGNOcHVBUmp4bXVkdzAzeGpuYzMyL3ByZXZpZXcgXCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0MDA2ODNkZGE0N2Y4YjYxMzZlXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0JrRgNC40LLQvtCx0LDQsdC60L4g0JrRgdC10L3RltGPLCAxMCDRgNC+0LrRltCyIFwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0J0u0JrQsNGA0L/QtdC90LrQvi4g0JXRgtGO0LQgINGA0LUg0LzRltC90L7RgFwiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMUI0LUViUllPLWJjQ2pmdXBwZUhYU2h2NURRenVpOWhBL3ByZXZpZXcgXCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0MDA2ODNkZGE0N2Y4YjYxMzZmXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0JrRg9GC0LrQvtCy0YHRjNC60LAg0JvQsNGA0LjRgdCwLCAxMiDRgNC+0LrRltCyXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIgMSnQlS7Qk9GA0ZbQsy4gJyfQndC+0LrRgtGO0YDQvScnLCDRgtCyLjU0IOKEljQsIDIp0KIu0JrRg9C70ZbRlNCyLiAnJ9Cb0LXQt9Cz0ZbQvdC60LAnJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMTFjbVFCZHNtMmVwd1pTX21VSngzZ3AxVzU4Mlp5V2Q3L3ByZXZpZXcgXCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0MDA2ODNkZGE0N2Y4YjYxMzcwXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0Jtp0LfQvtCz0YPQsSDQkNGA0YHQtdC9LCAxMCDRgNC+0LrRltCyXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCTLtCh0LDRgdGM0LrQvi4nJ9Cg0LXQs9GC0LDQudC8JycsIDIp0J8u0JfQsNGF0LDRgNC+0LIuJyfQodGC0LDRgNC+0LLQuNC90L3QsCDQsdCw0LvQsNC00LAnJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMTFTRmtXRnZXbl9VR05KSzdjN1oxTGxKMk5hc005S3NnL3ByZXZpZXcgXCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0MDA2ODNkZGE0N2Y4YjYxMzcxXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0JvQsNC90YHRjNC60LjQuSDQhNCy0LPQtdC9LCAxMCDRgNC+0LrRltCyIFwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQny7Qp9Cw0LnQutC+0LLRgdGM0LrQuNC5Licn0KDQsNC90LrQvtCy0LAg0LzQvtC70LjRgtCy0LAnJywg0YLQsi4zOSwgMinQhi7QkdC10YDQutC+0LLQuNGHLiDQotC+0LrQsNGC0LAg0LvRjyDQvNGW0L3QvtGAXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xVm5QRkxzNXhIQ3QwVEwyc2QxRTlXV3loVEI4a0dUdWgvcHJldmlldyBcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQwMDY4M2RkYTQ3ZjhiNjEzNzJcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQm9C10LLQsNC90LTRltCy0YHRjNC60LAg0JzQsNGA0YLQsCwgMTAg0YDQvtC60ZbQsiBcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCSLtCR0LDRgNCy0ZbQvdGB0YzQutC40LkuICcn0KPQutGA0LDRl9C90YHRjNC60LjQuSDRgtCw0L3QtdGG0YwnJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMUZWanhBZUIzZE96SnBBVERYeUktMUFCdFJpemp6am9kL3ByZXZpZXcgXCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0MDA2ODNkZGE0N2Y4YjYxMzczXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0JvQtdCy0LDQvdC00ZbQstGB0YzQutCwINCc0LDRgNGC0LAsIDEwINGA0L7QutGW0LJcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIiDQry4g0KHRltCx0LXQu9GW0YPRgS4g0JXRgtGO0LQg0YLQsi4gNzYg4oSWMlwiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMThLN3JnUnpqQ3FaLV81RVdyMEVvRTVKbG5UeWhnWlM0L3ByZXZpZXcgXCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0MDA2ODNkZGE0N2Y4YjYxMzc0XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0JvQtdC30LAg0JDQvdC90LAsIDExINGA0L7QutGW0LIgXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxKSDQpC7QqNC+0L/QtdC9LiDQndC+0LrRgtGO0YDQvSDihJYyMCwgMinQny7Ql9Cw0YXQsNGA0L7Qsi4gJyfQoNC+0L3QtNC+LdCz0LDQu9C+0L8nJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMVR3ZjJzSjNfOUFyM29PVG1aV0t2NnE4U01hOWZHYS1wL3ByZXZpZXcgXCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0MDA2ODNkZGE0N2Y4YjYxMzc1XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0JvQuNC60L7QstCwINCS0LDRgNCy0LDRgNCwLCAxMSDRgNC+0LrRltCyXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxKSDQki7Qk9GW0LvQu9C+0LouJydCaWxsIGJhaWxleScnLCAyKdCuLtCp0YPRgNC+0LLRgdGM0LrQuNC5LiAnJ9Co0LDRgNC80LDQvdC60LAnJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMWRFNUxjZlYtVDhRaExYaUFmbjhzeExFTWVjdmdTLWhPL3ByZXZpZXcgXCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0MDA2ODNkZGE0N2Y4YjYxMzc2XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0JvRltC70ZbQuiDQnNCw0YDRltGPLdCc0LDQs9C00LDQu9C40L3QsCwgMTEg0YDQvtC60ZbQsiBcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0KQu0KjQvtC/0LXQvS4gJyfQkNGA0LrRg9GIINC3INCw0LvRjNCx0L7QvNCwJycg0LzRliDQsdC10LzQvtC70Ywg0LzQsNC20L7RgCwgMinQnC7QmtC+0LvQtdGB0YHQsC4gJyfQodC60LXRgNGG0LjQvdC+JydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFxdGljZHVBUVFtNzJOY3k4ZS1zdDZua2pxd0JyRlNUZS9wcmV2aWV3IFwiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDAwNjgzZGRhNDdmOGI2MTM3N1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCc0LDQutCw0YDQtdCy0LjRhyDQkNC90LTRgNGW0Lkt0J7Qu9C10LrRgdCw0L3QtNGALCAxMSDRgNC+0LrRltCyIFwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQmS7QoS7QkdCw0YUuINCi0YDQuNCz0L7Qu9C+0YHQvdCwINGW0L3QstC10L3RhtGW0Y8g0YDQtSDQvNCw0LbQvtGALCAyKdCaLtCn0LXRgNC90ZYuINCV0YLRjtC0IOKEljUsINGC0LIuMjk5XCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xaVZ1QlBmdzRIbmNQSmtKbjJ5TlpadzhVWGxVWEpIVmMvcHJldmlldyBcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQwMDY4M2RkYTQ3ZjhiNjEzNzhcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQnNCw0YbRltCx0L7RgNGB0YzQutCwINCQ0L3QvdCwLCAxMCDRgNC+0LrRltCyXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxKSDQmS4g0JHQsNGFLiDQlNCy0L7Qs9C+0LvQvtGB0L3QsCDRltC90LLQtdC90YbRltGPINGB0ZYg0LHQtdC80L7Qu9GMINC80LDQttC+0YAsICAgIDIpINCkLiDQr9C60LjQvNC10L3QutC+LiAnJ9CV0LvQtdCz0ZbRjycnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xU3JZdHRKRmRpenN1QmUweU5zS3JORGdKVVBfQWloYU4vcHJldmlldyBcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQwMDY4M2RkYTQ3ZjhiNjEzNzlcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQnNC10LvRjNC90LjQuiDQnNC40YXQsNC50LvQviwgMTAg0YDQvtC60ZbQslwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQnC7QmtC70LXQvNC10L3RgtGWLiDRgdC+0L3QsNGC0LjQvdCwINC00L4g0LzQsNC20L7RgCwgMinQki7QmtC+0YHQtdC90LrQvi4gJyfQlNC+0YnQuNC6JydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFjMHBXakdvZ0RhRVlDUkNza3pjcTlWZFVsSHktaHNoRy9wcmV2aWV3IFwiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDAwNjgzZGRhNDdmOGI2MTM3YVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCc0LXRgNC60YPQu9C+0LLQsCDQnNCw0YDRltGPLCAxMCDRgNC+0LrRltCyIFwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSkg0JQu0KfRltC80LDRgNC+0LfQsC7QodC+0L3QsNGC0LAg0YHQvtC70Ywg0LzQsNC20L7RgDsgMikg0JwuINCW0LXRgNCx0ZbQvS4g0JLQsNC70YzRgVwiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMWo1cEVEN3dRM0FIUDBwTng5Vk80UHA4ZHJpbDlhTXpmL3ByZXZpZXcgXCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0MDA2ODNkZGE0N2Y4YjYxMzdiXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0JzQuNCz0LDQu9GO0Log0KDRltCw0L3QvdCwLCAxMSDRgNC+0LrRltCyXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCdLtCd0LjQttCw0L3QutGW0LLRgdGM0LrQuNC5LiAnJ9Ca0L7Qu9C+0LzQuNC50LrQsCcnLCAgIDIp0JIu0JPRltC70LvQvtC6Licn0JrQsNGA0L3QsNCy0LDQuyDQsiDQoNGW0L4nJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMXA1U01PZUJhVXowanpYOEEwbDZYNE45eXZ0d0cwdzhtL3ByZXZpZXcgXCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0MDA2ODNkZGE0N2Y4YjYxMzdjXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0JzQuNGA0LPQvtGA0L7QtCDQktGB0LXQstC+0LvQvtC0LDEyINGA0L7QutGW0LJcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0KQu0JrRg9C70LDRgy4g0KHQvtC90LDRgtC40L3QsCDRhNCwINC80LDQttC+0YAs0IYg0YcuOyAyKdCcLtCb0LjRgdC10L3QutC+LiAnJ9CV0LvQtdCz0ZbRjycnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xa3B4c3VSSm5sM3Q2NGxiTzh2aVZnZkdzd19hTWtSU20vcHJldmlldyBcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQwMDY4M2RkYTQ3ZjhiNjEzN2RcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQnNC+0YDQvtC30L7QstCwINCi0LXRgtGP0L3QsCwgMTEg0YDQvtC60ZbQsiBcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCZLtCR0LXQvdC00LAu0KHQvtC90LDRgtC40L3QsFwiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMTV1NG9LNHVJdjkyM0JiaHdIdVF4YzJrYjJ6VzRESW1HL3ByZXZpZXcgXCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0MDA2ODNkZGE0N2Y4YjYxMzdkZFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCc0L7RgNC+0LfQvtCy0LAg0KLQtdGC0Y/QvdCwLCAxMSDRgNC+0LrRltCyIFwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0KEu0KjQtdCy0YfQtdC90LrQviBcXFwi0JLQtdGH0ZbRgFxcXCJcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFGeS1MMDRFQWZjcTdJMWJScHg1cEU4bHlkSUJ5VDNTRi9wcmV2aWV3IFwiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDAwNjgzZGRhNDdmOGI2MTM3ZVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCc0YPQvdGC0Y/QvSDQndCw0YLQsNC70ZbRjywgMTAg0YDQvtC60ZbQsiBcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0K4u0KnRg9GA0L7QstGB0YzQutC40LkuINCi0LXQvNCwINC3INCy0LDRgNGW0LDRhtGW0Y/QvNC4LCAgICAgICAyKdCbLtCo0LjRgtGC0LUuJyfQhtGB0LrRgNC4JydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFWak5IY1dXZ3RtYmFrVVhtcGMzaDdmaG9ONWdwczlSVi9wcmV2aWV3IFwiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDAwNjgzZGRhNDdmOGI2MTM3ZlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCe0LHQvtGA0LrRltC90LAg0J7Qu9C10LrRgdCw0L3QtNGA0LAsIDExINGA0L7QutGW0LJcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0JUu0JPRgNGW0LMuJyfQnNC10LvQvtC00ZbRjycnLCAgICAyKdCbLtCo0YPQutCw0LnQu9C+LiAnJ9CR0LDQs9Cw0YLQtdC70YwnJyDihJY1XCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xY2gyd3Z6eHRSN0VSMi02aURMVWd2Q0FxdVVpdjhkVmYvcHJldmlldyBcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQwMDY4M2RkYTQ3ZjhiNjEzODBcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQn9C10L3QtNGO0YAg0KHQvtGE0ZbRjywgMTEg0YDQvtC60ZbQslwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSkg0J4u0JTQsNGA0LPQvtC80LjQttGB0YzQutC40LkuJyfQktCw0LvRjNGBJycsIDIp0Jwu0KHQutC+0YDQuNC6Licn0J3QsNGA0L7QtNC90LjQuSDRgtCw0L3QtdGG0YwnJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMXNERzZ3bmdwS0hjTVNPYU9pX1lsVUdrdWNhZEJBcEJKL3ByZXZpZXcgXCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0MDA2ODNkZGE0N2Y4YjYxMzgxXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0J/QtdGA0LXRgtGP0YLRjNC60L4g0JDQvdCw0YHRgtCw0YHRltGPLCAxMCDRgNC+0LrRltCyIFwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0JUu0JPRgNGW0LMuICcn0KLQsNC90LXRhtGMINGW0Lcg0JnQvtC70YzRgdGC0LXRgNCwJydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzEwX0xndi1mTE9kM3lQQW1ObVdDZDhZTjNsU3dYSExLRy9wcmV2aWV3IFwiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDAwNjgzZGRhNDdmOGI2MTM4MlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCf0LXRgNC10YLRj9GC0YzQutC+INCQ0L3QsNGB0YLQsNGB0ZbRjywgMTAg0YDQvtC60ZbQslwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0Jwu0JrQu9C10LzQtdC90YLRli4g0KHQvtC90LDRgtC40L3QsCDihJY0LCDRgtCyLjM2XCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xM3dzSS1zc1RQeDllYTBxWkhGWXN2c1AybnVQYlNESjcvcHJldmlldyBcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQwMDY4M2RkYTQ3ZjhiNjEzODNcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQn9C+0LfQvdGP0Log0JLQtdC90ZbQsNC80ZbQvSwgMTAg0YDQvtC60ZbQslwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSkg0JQu0J/Rg9C70LXQvdC6LiDQodGC0LDQutC60LDRgtC+LiAyKSDQmy7QkdC10YLRhdC+0LLQtdC9LiDQktC10YHQtdC70LAt0YHRg9C80L3QsFwiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMXZzYmMyR3ZIWUFyZ2dQNTctWjV3RmxHd2NoTXBOcDNFL3ByZXZpZXcgXCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0MDA2ODNkZGE0N2Y4YjYxMzg0XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0J/RgNC+0LrQvtC/0Y7QuiDQnNCw0YDQuNC90LAsIDEwINGA0L7QutGW0LJcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIiAxKdCGLtCR0ZbQu9Cw0YfQtdC90LrQvi4g0JXQutGB0L/RgNC+0LzRgi4gMinQri7QqdGD0YDQvtCy0YHRjNC60LjQuS4g0KLQsNC90LXRhtGMXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xUW45RFFMMk5ISmVPZkdIREhZd2F1WjYydmlucmZsQXkvcHJldmlldyBcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQwMDY4M2RkYTQ3ZjhiNjEzODVcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQoNC10YjQtdGC0L3RltC60L7QstCwINCb0Y7QtNC80LjQu9CwLCAxMSDRgNC+0LrRltCyXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIgMSnQni7QkdGW0LvQsNGH0LXQvdC60L4uJyfQntGB0ZbQvdC90ZbQuSDQtdGB0LrRltC3JycsIDIp0J4u0J/QvtC70YzQvtCy0LjQuS4nJ9Cf0L7Qu9GM0LrQsC3QsdCw0LHQutCwJydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFfWGZDSzhGSzFGTG14YmtFQjhWVGRmYTk5MHFKN3hSQS9wcmV2aWV3IFwiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDAwNjgzZGRhNDdmOGI2MTM4NlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCg0L7RgtCw0YAg0JrQsNGA0ZbQvdCwLCAxMCDRgNC+0LrRltCyIFwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSkg0K4u0KnRg9GA0L7QstGB0YzQutC40LkuICcn0JHQsNGA0LrQsNGA0L7Qu9CwJycsIDIpINCULtCf0LXRiNC10YLRgtGWLiAnJ9Cf0YDQtdGB0YLQvicnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xN01GLTB6NnVBa21LV2xwWXlTV0dIOHNiT2laLS1uOUovcHJldmlldyBcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQwMDY4M2RkYTQ3ZjhiNjEzODdcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQodCw0LLRh9C10L3QutC+INCc0LDRgtCy0ZbQuSwgMTHRgNC+0LrRltCyIFwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQmy7QkdC10YLRhdC+0LLQtdC9LiDQodC+0L3QsNGC0LAg0LzRliDQsdC10LzQvtC70Ywg0LzQsNC20L7RgCwg0IYg0YcuLCAyKdCGLtCp0LXRgNCx0LDQutC+0LIuICcnINCV0LvQtdCz0ZbRjyDQutC40ZfQstGB0YzQutC40YUg0L/QsNCz0L7RgNCx0ZbQsicnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xSl9IUWs2SVMyUFpQWlVQOXVZT1A2d2tRdFIzb3BvNkIvcHJldmlldyBcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQwMDY4M2RkYTQ3ZjhiNjEzODhcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQodCw0LrQstCwINCS0LDQu9C10YDRltGPLCAxMSDRgNC+0LrRltCyIFwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQnC7Qm9Cw0L3RgdC10LLQuNGHLicn0J/RgNC10LvRjtC00ZbRjycnLCAyKdCcLtCU0LLQvtGA0LbQsNC6LiAnJ9CU0LbQsNC30L7QstC40Lkg0LXRgtGO0LQnJyDQu9GPINC80LDQttC+0YBcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzExdHNkTHZrMjViRDhGU0RZVFhYbnlwUjI5Z2tQdHhYcy9wcmV2aWV3IFwiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDAwNjgzZGRhNDdmOGI2MTM4OVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCh0LDRgNGC0LDQvdGW0Y8g0JTQsNCy0LjQtCwgMTAg0YDQvtC60ZbQslwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiIDEp0JUu0JLQsNCz0L3QtdGALtCh0L7QvdCw0YLQuNC90LAg0LTQviDQvNCw0LbQvtGALCAgIDIpINCgLtCS0LDQvdC00LDQu9C7Licn0JLQvtC00L7RgdC/0LDQtCcnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xbXJFU1laSWlQMWlXZW5HaVpEVUlPYjB1c0NKSzBkVDgvcHJldmlldyBcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQwMDY4M2RkYTQ3ZjhiNjEzOGFcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQodC60L7RgNC+0YXQvtC00YzQutC+INCE0LLQs9C10L3RltGPLCAxMCDRgNC+0LrRltCyIFwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQnS7QndC40LbQsNC90LrRltCy0YHRjNC60LjQuS4gJyfQhtCy0LDRgdGMINCz0YDQsNGUINC90LAg0YfQtdC70YzQvicnLCAyKdCuLtCp0YPRgNC+0LLRgdGM0LrQuNC5LiAnJ9Ci0L7QutCw0YLQsCcnINGB0ZYg0LzRltC90L7RgFwiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMUVpZjBaX01pQVFWcHpiY3pWU2pqYnZoMWdVeGVfRTNYL3ByZXZpZXcgXCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0MDA2ODNkZGE0N2Y4YjYxMzhiXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0KHQvtC70L7QvdC10L3QutC+INCQ0L3QvdCwLCAxMCDRgNC+0LrRltCyIFwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0JIu0JrQvtGB0LXQvdC60L4uICcn0J/QtdGC0YDRg9GI0LrQsCcnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xdEN4cDRVYlpGWmVGTXJ3NkRZTmk5VllIWVN2WXdOUUkvcHJldmlldyBcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQwMDY4M2RkYTQ3ZjhiNjEzOGNcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQodC+0LvQvtC90LXQvdC60L4g0JDQvdC90LAsIDEwINGA0L7QutGW0LJcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIiDQpC4g0JHRg9GA0LPQvNGO0LvQu9C10YAuICcn0JHQsNC70LDQtNCwJydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFFT0g2emh3b3c0YVFaZkplczI4THhpSUJzaDVIYmZHdS9wcmV2aWV3IFwiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDAwNjgzZGRhNDdmOGI2MTM4ZFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCh0L7RgNC+0LrQsCDQnNCw0YDRltGPLCAxMyDRgNC+0LrRltCyXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCULtCm0LjQv9C+0LvRli4g0J/RgNC10LvRjtC00ZbRjyDRgtCwINGE0YPQs9CwINGA0LUg0LzRltC90L7RgCwgMinQmi7Qk9GD0YDQu9GW0YIuICcn0KjRgtC+0YDQvCcnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xdGZwX2dCUloxZmxqLUxHcWRlNkVkeFFtS1RsZXAwalAvcHJldmlldyBcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQwMDY4M2RkYTQ3ZjhiNjEzOGVcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQodGC0LXRhtGO0Log0J7Qu9C10LrRgdCw0L3QtNGA0LAsIDEyINGA0L7QutGW0LIgXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCaLtCU0LXQsdGO0YHRgdGWLiAnJ0RvY3RvciBHcmFkdXMgYWQgUGFybmFzdW0nJywgMinQpC7QqNC+0L/QtdC9LiAnJ9CS0LDQu9GM0YEnJyDihJY5XCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xenhKV3lDbXM3a1poc3BOQkFsemFjVW5BTFc4RUpBTTcvcHJldmlldyBcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQwMDY4M2RkYTQ3ZjhiNjEzOGZcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQodGC0L7RgNC+0LbRg9C6INCh0YLQsNC90ZbRgdC70LDQsiwgMTIg0YDQvtC60ZbQslwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQlS7Qk9GA0ZbQsy4gJyfQn9C+0LXRgtC40YfQvdCwINC60LDRgNGC0LjQvdC60LAnJyDihJYxLCAyKdCQLtCa0L7RgS3QkNC90LDRgtC+0LvRjNGB0YzQutC40LkuICcn0J/QvtC70L7QvdC40L3QsCcnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xcnRLMHZVckFvSWxHYlVKNUhhVUdiUVBsMXpWbVRLS0ovcHJldmlldyBcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQwMDY4M2RkYTQ3ZjhiNjEzOTBcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQotC60LDRh9C10L3QutC+INCc0LDQudGPLCAxMiDRgNC+0LrRltCyXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCSLiDQkC4g0JzQvtGG0LDRgNGCLiDQodC+0L3QsNGC0LAgMTYg0JogNTQ1LNCG0YcuOyAyKdCGLtCo0LDQvNC+LicnINCS0LXRgdC90Y/QvdC60LAnJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMW02WnNWYXJOUHJjZnltTzNCa3VtZEt4TEp5QlR4eDUtL3ByZXZpZXcgXCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0MDA2ODNkZGE0N2Y4YjYxMzkxXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0KPQvdCz0YPRgNGP0L0g0J7Qu9C10LrRgdCw0L3QtNGA0LAsIDEyINGA0L7QutGW0LIgXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxKSDQni7Qk9GA0LjQsdC+0ZTQtNC+0LIuINCS0LDQu9GM0YEsICAgICAgICAgIDIp0Jwu0KHRltC70YzQstCw0L3RgdGM0LrQuNC5LiAnJ9Ch0YLRgNGW0LzQutC40Lkg0L/QvtGC0ZbQuicnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xdjJMUlZEaEZKMnpYTl81d1Z4QWNoN1g4bDBXUThyT2cvcHJldmlldyBcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQwMDY4M2RkYTQ3ZjhiNjEzOTJcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQpNC10LTQvtGA0YfQtdC90LrQviDQhNCy0LPQtdC90ZbRjywgMTAg0YDQvtC60ZbQslwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiINCbLtCR0LXRgtGF0L7QstC10L0uICcn0JHQsNCz0LDRgtC10LvRjCcnLCDRgtCyLjExOVwiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMVpQSEdRREF5ZnRvQVcwYUtPVDJzbmZhOE1qZ2FsY1pRL3ByZXZpZXcgXCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0MDA2ODNkZGE0N2Y4YjYxMzkzXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0KTQtdC00L7RgNGH0LXQvdC60L4g0ITQstCz0LXQvdGW0Y8sIDEwINGA0L7QutGW0LJcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCeLtCR0ZbQu9Cw0YguJyfQodC60LXRgNGG0L4nJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMWgxaXNHd3ZlVzF1aVczVTJ4ZU8yV1d1Rnh2U1N2US1ML3ByZXZpZXcgXCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0MDA2ODNkZGE0N2Y4YjYxMzk0XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0KTQtdC00L7RgtC+0LLQsCDQmtCw0YLQtdGA0LjQvdCwLCAxMiDRgNC+0LrRltCyXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIgMSkg0KEuINCR0L7RgNGC0LrQtdCy0LjRhy4nJ9CV0YLRjtC0Jycg0YTQsCDQtNGW0ZTQtyDQvNGW0L3QvtGALCAyKSDQpC7QqNC+0L/QtdC9LiAnJ9Cd0L7QutGC0Y7RgNC9JyfQtNC+INC00ZbRlNC3INC80ZbQvdC+0YBcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFlUUJYeTZraExjaTRmSk5HOEJhQ00xWkZMa0tqME5Sdy9wcmV2aWV3IFwiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDAwNjgzZGRhNDdmOGI2MTM5NVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCk0LXQtNGH0YPQuiDQkNC70ZbQvdCwLCAxMSDRgNC+0LrRltCyXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCQLiDQlNGW0LDQsdC10LvQu9GWLiDQodC+0L3QsNGC0LjQvdCwIOKEljEsINCG0IbQhi7RhzsgMinQlNC2LiDQm9Cw0YHRgi4nJyDQodCw0LzQvtGC0L3RltC5INC/0LDRgdGC0YPRhScnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xanJGYnZkZ0cyTmxVLWI0MTYtdVIwYmlyRHJXLVBuSUgvcHJldmlldyBcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQwMDY4M2RkYTQ3ZjhiNjEzOTZcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQpNC10LTRjtC6INCS0L7Qu9C+0LTQuNC80LjRgCwgMTIg0YDQvtC60ZbQslwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSkg0Jou0Jwu0JLQtdCx0LXRgC7QodC+0L3QsNGC0LjQvdCwINC00L4g0LzQsNC20L7RgDsgMinQni7Qk9C+0L3Rh9Cw0YDRg9C6LiAnJ9CX0LXQu9C10L3QuNC5Jycg0ZbQtyDQt9Cx0ZbRgNC60LggJyfQktC10YHQtdC70LrQsCcnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xSF9Jdzg5eGpmMW8yN1B0UF9uZVFJNzhCeVA2NXlFdlkvcHJldmlldyBcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQwMDY4M2RkYTQ3ZjhiNjEzOTdcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQpdC+0YMg0JbRg9C5LCAxMiDRgNC+0LrRltCyXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCfLtCGLtCn0LDQudC60L7QstGB0YzQutC40LkuICcn0JbQvtCy0YLQtdC90YwnJywgMinQlS7QktC10LLRgNC40LouICcn0JPQsNC90LTQt9GPJydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFYWndXWHQ2aFFBU3VZZnRTTnI1c1RQRXJzdEZVVjU4Ui9wcmV2aWV3IFwiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDAwNjgzZGRhNDdmOGI2MTM5OFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCn0LjQtiDQndGW0L3QsCwgMTAg0YDQvtC60ZbQsiBcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0Jku0JPQsNC50LTQvSDQodC+0L3QsNGC0LAg4oSWNCwg0IbRhzsgMinQmy7QlNGM0Y/QutC+0L3QtdC90LrQvi4gJyfQn9GA0L7QsdCw0YfQtdC90L3RjyDRgyDQvNCw0LzQuCcnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xYUlVcjBoLU41MjkwQjZLYUltWGtKSG1TRGlrX1Vhd2UvcHJldmlldyBcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQwMDY4M2RkYTQ3ZjhiNjEzOTlcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQp9GW0LTQtdGA0LAg0KHQsNC80YPQtdC70Ywg0KPQvNC10YUsIDEwINGA0L7QutGW0LJcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEpICDQny7Qp9Cw0LnQutC+0LLRgdGM0LrQuNC5LiAnJ9Ch0YLQsNGA0L7QstC40L3QvdCwINGE0YDQsNC90YbRg9C30YzQutCwINC/0ZbRgdC10L3RjNC60LAnJy4gMikg0JQu0JrQsNCx0LDQu9C10LLRgdGM0LrQuNC5Licn0JrQu9C+0YPQvdC4JydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFwTFlBbVJCWHd6SW4xeDNYSGh2THJlX0FOWkpUMnA4dy9wcmV2aWV3IFwiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDAwNjgzZGRhNDdmOGI2MTM5YVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCo0LDRgtCw0LvQvtCy0LAg0IbQu9C+0L3QsCwgMTAg0YDQvtC60ZbQslwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQpC4g0JPRltC70LvQtdGALiAnJ9Cc0LDQu9C10L3RjNC60LUg0YDQvtC90LTQvicnOyAyKdCSLiDQmtC+0YHQtdC90LrQvi4gJyfQktCw0LvRjNGBJycg0YHRliDQvNGW0L3QvtGAXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xVWc1NmNiWTFDVUJoTzEtdFpmdWNSQXVBSGJJRkt6OWMvcHJldmlldyBcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQwMDY4M2RkYTQ3ZjhiNjEzOWJcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQqNC10LLRh9C10L3QutC+INCc0LDRgNCz0LDRgNC40YLQsCwgMTAg0YDQvtC60ZbQsiBcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0KEu0JHQsNC70LDQvdC00ZbQvS4g0JLQsNGA0ZbQsNGG0ZbRlywgICAgICAgICAgMinQoi7QkdGA0LDRg9C9LiAnJ9Ci0LDQvdC10YbRjCDQstGW0YLRgNGDJydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFwa0JCcWZTLXBtRnhiNW5OZEFjaDlXWFVwR3FzVXhhOC9wcmV2aWV3IFwiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDAwNjgzZGRhNDdmOGI2MTM5Y1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCo0LXQv9C10YLRjNC60L4g0J7Qu9C10LrRgdCw0L3QtNGALCAxMSDRgNC+0LrRltCyIFwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSkg0KQu0KjQvtC/0LXQvS4g0JzQsNC30YPRgNC60LAs0YLQsi42NyDihJYgNCwgMinQlS7Qk9GA0ZbQsy4gJyfQotCw0L3QtdGG0Ywg0ZbQtyDQmdC+0LvRjNGB0YLQtdGA0LAnJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMVZiaFZqV3JVaXRUby0tODNJNUZXTnlkUXJQQzNZR3lSL3ByZXZpZXcgXCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0MDA2ODNkZGE0N2Y4YjYxMzlkXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0KjRg9C80YHRjNC60LAg0J3QsNC00ZbRjywgMTIg0YDQvtC60ZbQslwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQoS7QkdC+0YDRgtC60LXQstC40YcuJyfQotC10LzQvdCwINC60ZbQvNC90LDRgtCwJycsIDIp0JIu0J3QtdGD0LPQsNGB0ZbQvNC+0LIu0KHQutC10YDRhtC+XCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xazY2LVdyeTYzUzh4N3Q0OEdXVWpZMGU2TzF4cWVVb3QvcHJldmlldyBcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQyODY4M2RkYTQ3ZjhiNjEzOWVcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQkNGA0YPRgtGO0L3Rj9C9INCb0ZbQtNCwLCAxNCDRgNC+0LrRltCyXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIgMSnQmS7Qk9Cw0LnQtNC9LiDQodC+0L3QsNGC0LAg4oSWMjAsINCG0YcuOyAyKdCbLtCo0YPQutCw0LnQu9C+Licn0ITQvNC10LvRjycnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xQmo1NjhjblJkRFpNS3JNWWZMVDhrQ2JIbTR5ZlhiMmsvcHJldmlldyBcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQyODY4M2RkYTQ3ZjhiNjEzOWZcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQkdCw0LfQuNC70Y7QuiDQndCw0YLQsNC70ZbRjywgMTYg0YDQvtC60ZbQslwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiIDEp0K8u0KHRltCx0LXQu9GW0YPRgS4g0J/RgNC10LvRjtC00ZbRjyDQu9GPINC80ZbQvdC+0YAsMinQhi7QkdC10YDQutC+0LLQuNGHLiDQn9GA0LXQu9GO0LTRltGPINGE0LAg0LTRltGU0Lcg0LzRltC90L7RgFwiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMUdhV2VaYktjNlNpSXVkaVlRVkJnRnhhaU9POVNFc2tBL3ByZXZpZXcgXCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0Mjg2ODNkZGE0N2Y4YjYxM2EwXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0JHRltC70L7Qs9GD0LEg0JDQvdGC0L7QvSwgMTMg0YDQvtC60ZbQsiBcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCbLtCR0LXRgtGF0L7QstC10L0uINCb0LXQs9C60LAg0YHQvtC90LDRgtCwINGE0LAg0LzRltC90L7RgCwg0IYg0YcuXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xZkhVbXRNV09qR045cDV4YVNyY0lPdlFFdS1rb1RHYVQvcHJldmlldyBcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQyODY4M2RkYTQ3ZjhiNjEzYTFcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQkdGW0LvQvtCz0YPQsSDQkNC90YLQvtC9LCAxMyDRgNC+0LrRltCyXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIg0J4u0KHRgtGA0L7Qui4gJyfQnNGW0YHRj9GH0L3QsCDRgNCw0L/RgdC+0LTRltGPJydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFmcW5OT0Z2Tm5WVWNJMUxVWi1UcWdGekNsNVhGRV9zaS9wcmV2aWV3IFwiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDI4NjgzZGRhNDdmOGI2MTNhMlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCR0ZbRgNGD0Log0KLQsNC80ZbQu9CwLCAxNCDRgNC+0LrRltCyXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCcLtCa0LvQtdC80LXQvdGC0ZYu0KHQvtC90LDRgtC40L3QsCwg0YLQsi4yNuKEljMsIDIp0K8u0KHRltCx0LXQu9GW0YPRgS4gJyfQr9C70LjQvdCwJydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzE0X0IyNkxQeXpRamtfYUJaeEdGV0lxOFJ6NktSQ0JuWC9wcmV2aWV3IFwiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDI4NjgzZGRhNDdmOGI2MTNhM1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCR0L7RgNC+0LLRltC60L7QstCwINCE0LvQuNC30LDQstC10YLQsCwgMTUg0YDQvtC60ZbQslwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiIDEp0Jwu0JHQvtCx0LXRgC4gJyfQlNGW0LDQvNCw0L3RgtC+0LLQsCDRgNCw0L/RgdC+0LTRltGPJycsIDIp0KQu0KHQsNC5LiAnJ9Cn0L7RgNC90LAg0LfQtdC80LvRjycnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xcE8xRkdxQi1LNnR0aDhwUFJNQkNhbF9yc2NlU014MjAvcHJldmlldyBcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQyODY4M2RkYTQ3ZjhiNjEzYTRcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQkdGD0YDRg9GF0ZbQvdCwINCa0LDRgtC10YDQuNC90LAsIDEzINGA0L7QutGW0LJcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEpINCZLtCT0LDQudC00L0uINCh0L7QvdCw0YLQsCDQvNGWINC80ZbQvdC+0YAsINCG0YcuLCAyKSDQoS7QndGW0LrRltGC0ZbQvS4nJ9Cd0LDRgdC/0ZbQsicnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xcnBMSDYzU3pOVEhlTXlYSGs3ckNoZXN3U2NLdTlfY0gvcHJldmlldyBcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQyODY4M2RkYTQ3ZjhiNjEzYTVcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQktCw0YjRg9GA0ZbQvdCwINCSLiwgMTMg0YDQvtC60ZbQsiBcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEpINCSLtCa0L7RgdC10L3QutC+LiAnJ9Cf0L7QtdC80LAt0JvQtdCz0LXQvdC00LAnJywgMikg0J4u0KHQsNGA0LDRgtGB0YzQutC40LkuJyfQmtC+0LvQvtC80LjQudC60LAnJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMXk5a3VzZ3RxWGdJZ2ZGYzE2bF81cXZnRl9KeTYydlg3L3ByZXZpZXcgXCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0Mjg2ODNkZGE0N2Y4YjYxM2E2XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0JLQuNGI0L3QtdCy0YHRjNC60LAg0JDQvdC90LAsIDEzINGA0L7QutGW0LIgXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQli4g0JHRltC30LUuJyfQlNC30LjQs9CwJydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFZTi0yeXAxb2NSVkUxUmRYcTJMN3NqOXFfQTh5djVQTy9wcmV2aWV3IFwiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDI4NjgzZGRhNDdmOGI2MTNhN1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCS0LjRiNC90LXQstGB0YzQutCwINCQ0L3QvdCwLCAxMyDRgNC+0LrRltCyXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQmi4g0JvQsNCy0LDQu9C70LUuICcn0JzQtdGC0LXQu9C40LonJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMTYxdEZxVEZKb2phMk9WRHZIS1R0SVdQak5RLTJMZngxL3ByZXZpZXcgXCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0Mjg2ODNkZGE0N2Y4YjYxM2E4XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0JPQtdGA0LDRgdC40LzRh9GD0Log0JzRltC70ZTQvdCwLCAxNSDRgNC+0LrRltCyIFwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0Jwu0KLQsNGA0LDQstC10YDQtNGW0ZTQsi4gJyfQodC/0L7Qs9Cw0LQnJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMUFvMHdPeDUwVWNLTGFYOGdwRTNXOXQ2NURDNktwaHJNL3ByZXZpZXcgXCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0Mjg2ODNkZGE0N2Y4YjYxM2E5XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0JPQtdGA0LDRgdC40LzRh9GD0Log0JzRltC70ZTQvdCwLCAxNSDRgNC+0LrRltCyXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIg0J4u0JHRltC70LDRiC4nJ9Ci0LDQvdC10YbRjCDQu9GP0LvRjNC+0LonJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMXhuYmZqQm16Y2xONC10bDZ0OUVHRG0zeWpMR2p3cFI1L3ByZXZpZXcgXCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0Mjg2ODNkZGE0N2Y4YjYxM2FhXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0JPQvtGA0LTRltGU0L3QutC+INCE0LvQuNC30LDQstC10YLQsCwgMTkg0YDQvtC60ZbQslwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQmS7QoS7QkdCw0YUu0J/RgNC10LvRjtC00ZbRjyDRliDRhNGD0LPQsCDRgNC1INC80ZbQvdC+0YAsINCU0KLQmi3QhiwgMinQoS7QkdC+0YDRgtC60LXQstC40YcuINCf0YDQtdC70Y7QtNGW0Y8g0LTQviDQtNGW0ZTQtyDQvNGW0L3QvtGAXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xb3hCZTZOM2FsdEZwM1VrdEY1RmRHWUZyZFh5SERIV2YvcHJldmlldyBcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQyODY4M2RkYTQ3ZjhiNjEzYWJcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQk9GA0LXRidCw0Log0JzQsNGA0ZbRjywgMTQg0YDQvtC60ZbQslwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQmi7Qp9C10YDQvdGWLiDQldGC0Y7QtCDQu9GPINC80LDQttC+0YA7IDIp0K4u0KnRg9GA0L7QstGB0YzQutC40LkuJyfQldC70LXQs9GW0YfQvdC40Lkg0L/RgNC10LvRjtC0JydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFJd3VMcmRQYWt4SDFmNlpQZm13N2Q3dkdjaEtqb1U2bS9wcmV2aWV3IFwiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDI4NjgzZGRhNDdmOGI2MTNhY1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCU0LXQudC90LXQs9CwINCa0LDRgNGW0L3QsCwgMTQg0YDQvtC60ZbQslwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSkg0Jsu0JHQtdGC0YXQvtCy0LXQvS4g0KHQvtC90LDRgtCwIOKEljE0LCDQhiDRhy47IDIpINChLtCW0LTQsNC90L7Qsi4gJyfQn9GA0LXQu9GO0LQnJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMWM1aVdDOWI1SjNUdzNPV1RES1N3TTk1Q0ZURkJseTR0L3ByZXZpZXcgXCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0Mjg2ODNkZGE0N2Y4YjYxM2FkXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0JTRj9GH0YPQuiDQl9C+0YDRj9C90LAsIDEzINGA0L7QutGW0LIgXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCuLtCp0YPRgNC+0LLRgdGM0LrQuNC5LiAnJ9Cg0LDQvdC+0LonJywgMinQnS7QndC40LbQsNC90LrRltCy0YHRjNC60LjQuS4gJyfQmtC+0LvQvtC80LjQudC60LAnJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMVNzVnJJRlJmaXRMdnpNMzctVVduZkdOY3NqMDdPdV8yL3ByZXZpZXcgXCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0Mjg2ODNkZGE0N2Y4YjYxM2FlXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0IbRidGD0Log0JrQsNGC0LXRgNC40L3QsCwgMTUg0YDQvtC60ZbQslwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiINCaLtCn0LXRgNC90ZYuINCV0YLRjtC0IOKEljEs0YLQsi43NDBcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFuc2NxUzVlMXBVd3RkSU9TT0llWEFWSFJHakZ1XzNNbi9wcmV2aWV3IFwiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDI4NjgzZGRhNDdmOGI2MTNhZlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCG0YnRg9C6INCa0LDRgtC10YDQuNC90LAsIDE1INGA0L7QutGW0LJcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCkLtCo0L7Qv9C10L0uJyfQm9Cw0YDQs9C+JydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFFb0tlU3I3QkllTHcwS3NqQ3RwMURFREpfOFhnZ3hucS9wcmV2aWV3IFwiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDI4NjgzZGRhNDdmOGI2MTNiMFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCG0LLQsNC90L7Rh9C60L4g0JDQvdGC0L7QvdGW0L3QsCwgMTMg0YDQvtC60ZbQsi5cIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIiAxKdCZLtChLtCR0LDRhS4g0J/RgNC10LvRjtC00ZbRjyDRliDRhNGD0LPQsCDQtNC+INC00ZbRlNC3INC80ZbQvdC+0YAg0JTQotCaLdCGLCAyKSDQmi7Qp9C10YDQvdGWLiDQldGC0Y7QtCDihJY2INGC0LIuNzQwXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xdVRxT1JKSXhJNjV1S3E0LTJScU9YblZ1WGpvUVBLa1MvcHJldmlldyBcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQyODY4M2RkYTQ3ZjhiNjEzYjFcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQmtCw0YDQtdC70ZbQvdCwINCa0YDRltGB0YLRltC90LAsIDEzINGA0L7QutGW0LJcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCZLtChLiDQkdCw0YUu0J/RgNC10LvRjtC00ZbRjyDRliDRhNGD0LPQsCDRgNC1INC80ZbQvdC+0YAsINCU0KLQmi3QhtCGXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xRm1oVzJPbDl0bC1mVjdST2F0ejNtRW5iMUMwVndBYngvcHJldmlldyBcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQyODY4M2RkYTQ3ZjhiNjEzYjJcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQmtCw0YDQtdC70ZbQvdCwINCa0YDRltGB0YLRltC90LAsIDEzINGA0L7QutGW0LJcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIiDQki7QkC4g0JzQvtGG0LDRgNGCLiDQodC+0L3QsNGC0LAg4oSWOCwg0IbRhy5cIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFqRnQwemtuR2E4dnZYeERSS1FvNXgxWWR6Y3ItSXhIUi9wcmV2aWV3IFwiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDI4NjgzZGRhNDdmOGI2MTNiM1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCa0LDRgdGM0LrRltCyINCQ0L3QtNGA0ZbQuSwgMTQg0YDQvtC60ZbQsiBcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCQLtCb0LXRiNCz0L7RgNC9LiDQldGC0Y7QtCDRhNCwINC00ZbRlNC3INC80ZbQvdC+0YBcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzE0dUtaVUc3bDFSRXdEa1hrdlI2ZllCalFpVFBaQzNrby9wcmV2aWV3IFwiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDI4NjgzZGRhNDdmOGI2MTNiNFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCa0LDRgdGM0LrRltCyINCQ0L3QtNGA0ZbQuSwgMTQg0YDQvtC60ZbQslwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiINCaLtCU0LXQsdGO0YHRgdGWLiAnJ9Cc0ZbRgdGP0YfQvdC1INGB0Y/QudCy0L4nJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMVNQTkxJOFZ2RmhLenBSd045LWlCUnVUZGRQZkp1VWUtL3ByZXZpZXcgXCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0Mjg2ODNkZGE0N2Y4YjYxM2I1XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0JrQuNGA0LjQu9C+0LLQsCDQntC70LXQutGB0LDQvdC00YDQsCwgMTMg0YDQvtC60ZbQsiBcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEpINCiLtCR0YDQsNGD0L0uICcn0KjRgtC+0YDQvCwg0YnQviDQvdCw0LHQu9C40LbQsNGU0YLRjNGB0Y8nJywgMikg0J8u0JfQsNGF0LDRgNC+0LIuICcn0KDQvtC90LTQvi3Qs9Cw0LvQvtC/JydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFXSGotLWhhWW5FN3BXdGZIQm95cFhuaG03aTBpbnN2Ry9wcmV2aWV3IFwiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDI4NjgzZGRhNDdmOGI2MTNiNlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCa0L7QvdC00YDQsNGC0Y7QuiDQkNC70ZbQvdCwLCAxNCDRgNC+0LrRltCyXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxKSDQni7QlNGO0LHRjtC6LiDQktCw0YDRltCw0YbRltGXLCAyKSDQni7QkdGW0LvQsNGILicn0KDQvtC30LTRg9C8JydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFSd2ZTUXRUZndXcExEell5R2ZtRnlPS2R5X1NySzdTWi9wcmV2aWV3IFwiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDI4NjgzZGRhNDdmOGI2MTNiN1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCa0L7RgdC10L3QutC+INCQ0LvRltGB0LAsIDEzINGA0L7QutGW0LJcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEpINCQLtCa0LDRgNCw0LzQsNC90L7Qsi4gJyfQl9GA0YPQudC90L7QstCw0L3QuNC5INGF0YDQsNC8JycsIDIp0KEu0KDQsNGF0LzQsNC90ZbQvdC+0LIuINCf0YDQtdC70Y7QtNGW0Y8g4oSWNywg0YLQsi4yM1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMS02a1lydFF1SFpOazVDaEFhV0x2N0lSWnprMjJXZGRoL3ByZXZpZXcgXCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0Mjg2ODNkZGE0N2Y4YjYxM2I4XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0JrQvtGH0YPQsdC10Lkg0K/RgNC+0YHQu9Cw0LIsIDE0INGA0L7QutGW0LJcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCe0LHRgC4g0IQu0JLQtdCy0YDQuNC60LAuJyfQnNC+0LvQtNCw0LLRgdGM0LrRliDQvdCw0YHQv9GW0LLQuCcnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xOUtqS0hmSS11aWo2ajNtTkNZWjI2TExaTW9CYllrOXIvcHJldmlldyBcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQyODY4M2RkYTQ3ZjhiNjEzYjlcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQmtC+0YfRg9Cx0LXQuSDQr9GA0L7RgdC70LDQsiwgMTQg0YDQvtC60ZbQsiBcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCkLtCa0YPQu9Cw0YMuINCh0L7QvdCw0YLQuNC90LAg4oSWNTVcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFSN0h3WHBMYk8xdGl6M0t6TWczNXQ0TjNCbXg3QUJPTC9wcmV2aWV3IFwiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDI4NjgzZGRhNDdmOGI2MTNiYVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCa0YPQu9GW0LrQvtCy0YHRjNC60LAg0JrQsNGC0LXRgNC40L3QsCwgMTQg0YDQvtC60ZbQslwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSkg0Jku0KEu0JHQsNGFLiDQn9GA0LXQu9GO0LTRltGPINGWINGE0YPQs9CwINGE0LAg0LTRltGU0Lcg0LzQsNC20L7RgCwg0JTQotCaLdCGLCAyKSDQoS7QkdC+0YDRgtC60LXQstC40YcuINCV0YLRjtC0IOKEljksINGC0LIuMTVcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzF6UWpzcUdwV3FXWWtlalBZTl9URy1FMG1NQThjU2otci9wcmV2aWV3IFwiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDI4NjgzZGRhNDdmOGI2MTNiYlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCc0LDQutCw0YDQtdCy0LjRhyDQndCw0YLQsNC70ZbRjywgMTUg0YDQvtC60ZbQsiBcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0Jku0KEu0JHQsNGFLiDQn9GA0LXQu9GO0LTRltGPINGWINGE0YPQs9CwINGA0LUg0LzRltC90L7RgCwg0JTQotCaLdCGLCAyKdCeLtCR0L7RgNC00Y7Qs9C+0LLQsC4gJyfQo9C60YDQsNGX0L3RgdGM0LrQuNC5INGA0L7QvNCw0L3RgScnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xaXJWQlZTMFdEdWZXWkMyWUVCNTd1VU1MV2J3OEJMblIvcHJldmlldyBcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQyODY4M2RkYTQ3ZjhiNjEzYmNcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQnNCw0LvRj9GA0YfRg9C6INCE0LvRltC30LDQstC10YLQsCwgMTMg0YDQvtC60ZbQsiBcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0KEu0JHQvtGA0YLQutC10LLQuNGHLiDQldGC0Y7QtCDihJY5LCDRgtCyLjE1LCAyKdCkLtCo0L7Qv9C10L0uJyfQk9GD0LvRj9C90LrQsCcnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xb20waGZWZ3JhLVZTeDZZWGhKYnBad0xSYmUwYThCRS0vcHJldmlldyBcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQyODY4M2RkYTQ3ZjhiNjEzYmRcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQntC/0LDQvdCw0YHRjtC6INCi0LDRgNCw0YEsIDEzINGA0L7QutGW0LJcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEpINCfLtCX0LDRhdCw0YDQvtCyLiAnJ9Ci0L7QutCw0YLQsC3Qv9GA0LXQu9GO0LTRltGPJycsIDIpINCVLtCT0YDRltCzLiAnJ9Cd0L7QutGC0Y7RgNC9JydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFnZ2h3eUgyQXgtQWVWdWVsYlNXc1Mwb0lvQXhTX3VKRC9wcmV2aWV3IFwiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDI4NjgzZGRhNDdmOGI2MTNiZVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCe0YHQu9Cw0LwgINCE0LvQuNC30LDQstC10YLQsCwgMTQg0YDQvtC60ZbQslwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSkg0J8u0KfQsNC50LrQvtCy0YHRjNC60LjQuS4nJ9Cb0Y7RgtC40LknJyDRltC3INGG0LjQutC70YMnJ9Cf0L7RgNC4INGA0L7QutGDJycsICAgICAyKSDQnS7Qm9Cw0LPQvtC00Y7Qsy4gJyfQotCw0L3Qs9C+INC80YDRltC5JydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFtcTQtWkJZWm1sbkdQekpZMWpSX1FWcjBHejc1YU1sWC9wcmV2aWV3IFwiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDI4NjgzZGRhNDdmOGI2MTNiZlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCf0LDQvdGW0LzQsNGIINCG0YDQuNC90LAsIDE1INGA0L7QutGW0LJcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEpINCZLtCT0LDQudC00L0u0KHQvtC90LDRgtCwINC00L4g0LzQsNC20L7RgCAo4oSWNTApLCDQhiDRhy47IDIpINChLtCg0LDRhdC80LDQvdGW0L3QvtCyLicn0JzRg9C30LjRh9C90LjQuSDQvNC+0LzQtdC90YInJywg0YLQsi4xNiDihJY0XCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xaF9LUV9XcHZtalpGc1hFNFhUX01kZjIzc2s0SzlHVHMvcHJldmlldyBcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQyODY4M2RkYTQ3ZjhiNjEzYzBcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQn9C10YLRgNGD0YHRjCDQndCw0YLQsNC70ZbRjywgMTMg0YDQvtC60ZbQslwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQpC7Qm9GW0YHRgi4nJ9Cg0L7QvNCw0L3RgScnLCAgICAgMinQlS7Qk9GW0LvQu9C+0LouJyfQktCw0LvRjNGBLdC10YLRjtC0JydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFPMTVfQ3Vqd3R0YUYxQnhYZ1c4NDR3NkFCVVFrdWpmYi9wcmV2aWV3IFwiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDI4NjgzZGRhNDdmOGI2MTNjMVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCf0YDQuNGJ0LXQv9CwINCQ0L3QvdCwLCAxNCDRgNC+0LrRltCyXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxKSDQnC7QqNC80ZbRgtGGLiDQlNC20LDQt9C+0LLQsCDRltC90LLQtdC90YbRltGPIOKEljEzLCAgMikg0J4u0JTQtdCy0ZbRgS4nJ9Cp0LDRgdC70LjQstC40Lkg0LTQtdC90YwnJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMUpLTUlsdW4zUmVoRVJxS2FTSHBsNlNKNmV5dXVxM2FXL3ByZXZpZXcgXCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0Mjg2ODNkZGE0N2Y4YjYxM2MyXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0J/RgNC+0LrQvtC/0YfRg9C6INCe0LvQtdC60YHQsNC90LTRgNCwLCAxNyDRgNC+0LrRltCyXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIg0JIu0JLQtdGA0LzQtdC90LjRhy4gJyfQp9C+0YDQvdC+0LHRgNC40LLRhtGWJydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFGTkw3ZTZxaDhTT0tsVXhNb1J0QTdyU1k4TmhhbmxYLS9wcmV2aWV3IFwiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDI4NjgzZGRhNDdmOGI2MTNjM1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCf0YDQvtC60L7Qv9GH0YPQuiDQntC70LXQutGB0LDQvdC00YDQsCwgMTcg0YDQvtC60ZbQslwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiINCkLtCo0L/QuNC90LTQu9C10YAuINCh0L7QvdCw0YLQuNC90LAs0IbQhtCGINGHLlwiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMUtHTUNjTjZfQldQZGl3enJSSXVBM05keFVlSmJ3STFqL3ByZXZpZXcgXCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0Mjg2ODNkZGE0N2Y4YjYxM2M0XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0J/Rg9GH0LrQviDQodC+0YTRltGPLCAxM9GA0L7QutGW0LIgXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCcLiDQlNCy0L7RgNC20LDQui4g0JXRgtGO0LQgMiAoMi3QuSDQt9C+0YjQuNGCKSwgMinQki4g0JLQtdGA0LzQtdC90LjRhy4gJyfQp9C+0YDQvdC+0LHRgNC40LLRhtGWJydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzE0V2ZzRnY0QW4yRmJWX3VGamhxUkVJODctSWZ6UVViOC9wcmV2aWV3IFwiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDI4NjgzZGRhNDdmOGI2MTNjNVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCg0LDQtNC60L7QstGB0YzQutCwINCQ0LvRltC90LAsIDEzINGA0L7QutGW0LIgXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQlS4g0JPRgNGW0LMuINCV0YLRjtC0INC/0LDQvCfRj9GC0ZYg0KQu0KjQvtC/0LXQvdCwXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xX2FCTjhKZ3JtRm1WZnVWWVc0czBsZU5OWXhmUDU5U28vcHJldmlldyBcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQyODY4M2RkYTQ3ZjhiNjEzYzZcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQoNCw0LTQutC+0LLRgdGM0LrQsCDQkNC70ZbQvdCwLCAxMyDRgNC+0LrRltCyXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIg0KQu0JvRltGB0YIuICcn0KHRg9C80L3QuNC5INGB0YLQtdC/JydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFuMm1TYVBOd3JWamxjUEFvaFZpWXJvMjRXemlrdEIwai9wcmV2aWV3IFwiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDI4NjgzZGRhNDdmOGI2MTNjN1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCg0LjQsdC60ZbQvdCwINCe0LvQtdC60YHQsNC90LTRgNCwLCAxNSDRgNC+0LrRltCyXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxKSDQnC4g0KLQtdGA0LXRidGD0LouICcn0KTRg9Cz0LAgTG9ja2Rvd24nJzsgMinQnC7QkdC+0LHQtdGALicn0J7Qv9GW0LLQvdGW0YfQvdCwINGA0LDQv9GB0L7QtNGW0Y8nJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMXNQVkVCMlZJdF9vRFpNMHBtQlVRNWpVb1VCTml2VHdlL3ByZXZpZXcgXCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0Mjg2ODNkZGE0N2Y4YjYxM2M4XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0KDRg9GB0YHRgyDQk9Cw0L3QvdCwLCAxNCDRgNC+0LrRltCyXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCTLtCS0L7Qu9C70LXQvdCz0LDRg9C/0YIuICcn0KXQsNGA0LDQutGC0LXRgNC90LAg0L8n0ZTRgdCwINGDINGE0L7RgNC80ZYg0LXRgtGO0LTQsCcnLCAyKdCuLtCp0YPRgNC+0LLRgdGM0LrQuNC5LiAnJ9CV0LvQtdCz0ZbRjycnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xYUVlRmlVWF9BdlJjUk1HLTRoQkEzaThjNDVFc1pIOW0vcHJldmlldyBcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQyODY4M2RkYTQ3ZjhiNjEzYzlcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQoNGD0YnQuNC90YHRjNC60LAg0JrRgdC10L3RltGPLCAxNCDRgNC+0LrRltCyXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQlS7Qk9GA0ZbQsy4gJyfQnNC10LvQvtC00ZbRjycnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xMDcySk53dkVtNkNkdUFfR2VQc0FCdTVfWWs2TTAyekgvcHJldmlldyBcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQyODY4M2RkYTQ3ZjhiNjEzY2FcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQoNGD0YnQuNC90YHRjNC60LAg0JrRgdC10L3RltGPLCAxNCDRgNC+0LrRltCyIFwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0Jku0KEuINCR0LDRhS4nJ9Cc0LDQu9C10L3RjNC60LAg0L/RgNC10LvRjtC00ZbRjycnINC00L4g0LzRltC90L7RgFwiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMU5Ea19qS081U0hibnNhWEFUQTEtWXdnS2U0YkFtSWRuL3ByZXZpZXcgXCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0Mjg2ODNkZGE0N2Y4YjYxM2NiXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0KHQstC40L3RhtC40YbRjNC60LAg0JXQvNGW0LvRltGPLCAxNCDRgNC+0LrRltCyXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCSLtCa0LLQsNGB0L3QtdCy0YHRjNC60LjQuS4nJ9CU0YPQvNC60LAnJzsgMinQlC7QmtGA0LDQvNC10YAuICcn0KLQsNC90YbRjtGO0YfQuNC5INGB0LrRgNC40L/QsNC70YwnJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMWFsZ3pfb3VrUnhUMmtQQUZ5WG9YLVFqSUEzNHBJQ2NtL3ByZXZpZXcgXCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0Mjg2ODNkZGE0N2Y4YjYxM2NjXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0KHQstC40YDQuNC00Y7QuiDQlNC10L3QuNGBLCAxNiDRgNC+0LrRltCyXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCZLtChLtCR0LDRhS4g0KLRgNC40LPQvtC70L7RgdC90LAg0ZbQvdCy0LXQvdGG0ZbRjyDihJYxMiwgMinQky7Qk9Cw0LvQuNC90ZbQvS4gJyfQkNGA0ZbRjycnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xNDZHRmdIYVhMM3hIVkZady1ockhyeGs0OTc3bHJOZ2gvcHJldmlldyBcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQyODY4M2RkYTQ3ZjhiNjEzY2RcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQodC10LvRltCy0LDQvdC+0LLQsCDQkNC90L3QsCwgMTQg0YDQvtC60ZbQslwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQri7QqdGD0YDQvtCy0YHRjNC60LjQuS4gJyfQldC70LXQs9GW0YfQvdC40Lkg0L/RgNC10LvRjtC0Jycg0YHRliDQvNGW0L3QvtGALCAyKdCcLtCU0LLQvtGA0LbQsNC6Licn0JTQttCw0LfQvtCy0LjQuSDQtdGC0Y7QtCcnIOKEljYgKDIg0LfQvtGI0LjRgilcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFKdWNOdE8xRDkza3FMOHdvSmJrX0JKaURqZGdHeHNRNi9wcmV2aWV3IFwiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDI4NjgzZGRhNDdmOGI2MTNjZVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCh0LXQvNC10L3QvtCyINCG0LLQsNC9LCAxNSDRgNC+0LrRltCyIFwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0JUu0JTQvtCz0LAuICcn0KHQvtC90LXRgicnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xTDBVX0hvdUtSUDR5M2dQWmJWTGt6dW15WUQyZXpFMkQvcHJldmlldyBcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQyODY4M2RkYTQ3ZjhiNjEzY2ZcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQodC10LzQtdC90L7QsiDQhtCy0LDQvSwgMTUg0YDQvtC60ZbQsiBcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCGLtCc0L7RiGXQu2XRgS4gRdGC0Y7QtCDihJY4LNGC0LIuNzBcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFfZndZM3JrcGNJbFdqYzFSeV9ZdGlodS1vd1dwMm1nay9wcmV2aWV3IFwiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDI4NjgzZGRhNDdmOGI2MTNkMFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCh0LjQvNC+0L3QtdC90LrQviDQotCw0LzRltC70LAsIDEzINGA0L7QutGW0LIgXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxKSDQmy7QkdC10YLRhdC+0LLQtdC9LiDQodC+0L3QsNGC0LAg4oSWMTkg0YLQsi40OSwg0IYg0YfQsNGB0YLQuNC90LAsIDIp0J8u0KfQsNC50LrQvtCy0YHRjNC60LjQuSAuJyfQn9GW0LTRgdC90ZbQttC90LjQuicnINC3INGG0LjQutC70YMgJyfQn9C+0YDQuCDRgNC+0LrRgycnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xUG1FamdPVjJZWVppUklVQnBURElIanVyLWx6Ul9mbHYvcHJldmlldyBcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQyODY4M2RkYTQ3ZjhiNjEzZDFcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQodC90ZbQs9GD0YAg0JDQvdC90LAsIDEzINGA0L7QutGW0LJcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0JHQpdCw0LLQsNGI0ZYuICcn0KjRgtC+0YDQvCcnLCAyKdCkLtCh0LDQuS4g0JLQsNGA0ZbQsNGG0ZbRl1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMWhtX3hESE9aVHpVQ1M0VVpJc283TUhaM2lia3ZBSWJiL3ByZXZpZXcgXCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0Mjg2ODNkZGE0N2Y4YjYxM2QyXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0KLQtdGA0L3QvtCy0LAg0JrRgdC10L3RltGPLCAxNCDRgNC+0LrRltCyIFwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSkg0IYu0JHQtdGA0LrQvtCy0LjRhy4g0J/RgNC10LvRjtC00ZbRjyDihJYxMCwgMinQlS7Qk9GA0ZbQsy4gJyfQn9C+0YXRltC0INCz0L3QvtC80ZbQsicnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xakpvWThrZHplVUtsNXpVNWdMZTVkdThsaEdhbEJJWUIvcHJldmlldyBcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQyODY4M2RkYTQ3ZjhiNjEzZDNcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQotC60LDRh9GD0Log0JLRltC60YLQvtGA0ZbRjywgIDE0INGA0L7QutGW0LJcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEpINCkLiDQnNC10L3QtNC10LvRjNGB0L7QvS4gICcn0J/RltGB0L3RjyDQsdC10Lcg0YHQu9GW0LInJywgMikg0JIuINCT0ZbQu9C70L7QuiAgJyfQktCw0LvRjNGBLdC10YLRjtC0JydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFLaTVDLXRhbmp4eTJNeTdrWjZrV2dZRVdNQU9FWUZjOS9wcmV2aWV3IFwiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDI4NjgzZGRhNDdmOGI2MTNkNFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCi0YDQsNGH0YPQuiDQntC70LXQutGB0LDQvdC00YAsIDEzINGA0L7QutGW0LJcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCfLiDQl9Cw0YXQsNGA0L7Qsi4gICcn0KDQvtC90LTQvi3Qs9Cw0LvQvtC/JydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzE4RGxOMWI0SzFzWHJkdnZiM0E4cEhtSkZ2WHdiellyZC9wcmV2aWV3IFwiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDI4NjgzZGRhNDdmOGI2MTNkNVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCi0YDQsNGH0YPQuiDQntC70LXQutGB0LDQvdC00YAsIDEzINGA0L7QutGW0LJcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIiDQlC7QpNGW0LvRjNC0LiAnJ9Cd0L7QutGC0Y7RgNC9Jycg4oSWNVwiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMUwzSnhvV1ByNmp4TTVRM3B4TzBCQlgyVTRVaUZuRV9IL3ByZXZpZXcgXCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0Mjg2ODNkZGE0N2Y4YjYxM2Q2XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0KTQtdC00L7QvdGO0Log0J7Qu9C10LrRgdCw0L3QtNGALCAxMyDRgNC+0LrRltCyXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCZLtCT0LDQudC00L0uINCh0L7QvdCw0YLQsCDihJYyMywg0YTQsCDQvNCw0LbQvtGALCDQhtGHLjsgMinQmS7QoS7QkdCw0YUuINCf0YDQtdC70Y7QtNGW0Y8g0ZYg0YTRg9Cz0LAg4oSWMjMsINCU0KLQmi3QhlwiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMWkyZnVPUFZNcVFmSU5DVDJaSmJUSlhjY3o1QWZiX2g1L3ByZXZpZXcgXCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0Mjg2ODNkZGE0N2Y4YjYxM2Q3XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0KXQstC+0YHRgtC+0LLQsCDQntC70LXQutGB0LDQvdC00YDQsCwgMTMg0YDQvtC60ZbQslwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQpC7Qm9GW0YHRgi7QrtC90LDRhtGM0LrQuNC5INC10YLRjtC0IOKEljIsIDIp0J4u0JrQvtC30LDRgNC10L3QutC+LdCQLtCa0L7RgS3QkNC90LDRgtC+0LvRjNGB0YzQutC40LkuICcn0J7QuSDRgtC4LCDQtNGW0LLRh9C40L3Qviwg0Lcg0LPQvtGA0ZbRhdCwINC30LXRgNC90Y8nJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMUduc0Fac3VnZHFCTEw2aEtDR2xsZUE4WktfcVQxOEZqL3ByZXZpZXcgXCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0Mjg2ODNkZGE0N2Y4YjYxM2Q4XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0KXRgNCw0LzQtdC90LrQvtCy0LAg0JDQvdCw0YHRgtCw0YHRltGPLCAxMyDRgNC+0LrRltCyIFwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQki7QmtC+0YDQvtCy0ZbRhtC40L0uJyfQoNGD0YHQsNC70L7QvdGM0LrQsCcnLCAyKdCcLtCh0LrQvtGA0LjQui4nJ9CW0LDRgNGC0ZbQstC70LjQstCwINC/J9GU0YHQsCcnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCIgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xQzB1U3BlU3liZmRhSVhZbG1Zd01yWjVKVXNkYjdSYjkvcHJldmlldyBcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQyODY4M2RkYTQ3ZjhiNjEzZDlcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQpdC10LvQvNCw0L0g0JLRltC+0LvQtdGC0LAsIDEzINGA0L7QutGW0LJcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0KPQk9GW0LvQu9C+0LouJyfQn9GD0YDRhdCw0Y7Rh9C4INCyINGF0LzQsNGA0LrQsNGFJycsIDIp0JIu0KXQvtC00L7RiC4nJ9Cn0LXRgNCy0L7QvdCwINGI0LDQv9C+0YfQutCwJydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzF6dXlFR3QzY3ZaM3NWaktuQTNDSlRaVkwydkVWZ1hXeS9wcmV2aWV3IFwiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDI4NjgzZGRhNDdmOGI2MTNkYVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCo0LjQsdCw0L3QvtCy0LAg0JLQsNGA0LLQsNGA0LAsIDEzINGA0L7QutGW0LIgXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQpC7QqNC+0L/QtdC9LiDQndC+0LrRgtGO0YDQvSDihJYyLCDRgtCyLjlcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcIiBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFyMWpVUkZLQzU1NXdLTVI3Q2xTeW10VEdfRFd3dmd2Wi9wcmV2aWV3IFwiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDI4NjgzZGRhNDdmOGI2MTNkYlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCo0LjQsdCw0L3QvtCy0LAg0JLQsNGA0LLQsNGA0LAsIDEzINGA0L7QutGW0LJcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIiDQoS7QkdC+0YDRgtC60LXQstC40Ycu0JXRgtGO0LQg4oSWNywg0YLQsi4yOVwiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMUtUVVlQM2dXbjRQVFRHRzFZX19GS3JJMXM1R2tYQm9PL3ByZXZpZXcgXCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0NDE2ODNkZGE0N2Y4YjYxM2RjXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0JDQvdGC0L7QvdGO0Log0JzQsNGA0ZbRjywgMjEg0YDRltC6XCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxKSDQnC7QnNC10YLQvdC10YAuICcn0JTQstGWINC60LDQt9C60LgnJywgMinQhi7QqNCw0LzQvi4gJyfQotC+0LrQsNGC0LAnJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xQUZWRUczTTNnVTF5SWFJYzVZbmNSaFVJQWx3ZjhBVmovcHJldmlld1wiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDQxNjgzZGRhNDdmOGI2MTNkZFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCR0L7QsdGA0ZbRiNC+0LLQsCDQhtC90LXRgdCwLCAxNiDRgNC+0LrRltCyXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIgMSkg0Jku0JPQsNC50LTQvS4g0KHQvtC90LDRgtCwINGA0LUg0LzQsNC20L7RgCwg0IYg0YcuOyAgIDIpINChLtCf0YDQvtC60L7RhCfRlNCyLiAnJ9Ch0LDRgNC60LDQt9C8Jycs0YLQsi4xNyDihJYxXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzE5Skh1RVNRVkhNNmJwdXBQc3ZkVW40ZWxRUmJnTzIzZS9wcmV2aWV3XCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0NDE2ODNkZGE0N2Y4YjYxM2RlXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0JHRj9C90L7QstCwINCU0LDRgNC40L3QsCwgMTYg0YDQvtC60ZbQslwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQpC7QqNC+0L/QtdC9LiDQndC+0LrRgtGO0YDQvSwg0YLQsi4yN+KEljIsICAgICAgMinQlC7Ql9Cw0LTQvtGALiDQldGC0Y7QtCDQtNC+INC80ZbQvdC+0YBcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMS1DQmNlSEViS2dlMzJYNk5EMUZfekZWUS0yUmI0NFl3L3ByZXZpZXdcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQ0MTY4M2RkYTQ3ZjhiNjEzZGZcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQktC+0LfQvdGO0Log0JDQvdCz0LXQu9GW0L3QsCwgMTcg0YDQvtC60ZbQslwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQry7QodGC0LXQv9C+0LLQuNC5LiDQn9GA0LXQu9GO0LTRltGPLCAgICAgICAyKdCvLtCh0ZbQsdC10LvRltGD0YEuINCV0YLRjtC0XCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzF5N1FIdEd1a0pvb2NTMEJfZGl3ekp1LVZRWThXQjlvcC9wcmV2aWV3XCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0NDE2ODNkZGE0N2Y4YjYxM2UwXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0JPRg9C6INCh0L7RhNGW0Y8sIDE2INGA0L7QutGW0LJcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIiDQoS7QoNCw0YXQvNCw0L3RltC90L7Qsi4gJyfQk9GD0LzQvtGA0LXRgdC60LAnJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xa1BRVF91VHhhSWxhbHF4X2FhcFNwaWQyU1pnUDdqcTYvcHJldmlld1wiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDQxNjgzZGRhNDdmOGI2MTNlMVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCT0YPQuiDQodC+0YTRltGPLCAxNiDRgNC+0LrRltCyXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIg0JwuINCb0LjRgdC10L3QutC+LiAnJ9CW0YPRgNCx0LAnJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xTnVoZGxPcVhlUHI4ZXhkTXAwZ1hUQWw2RmZrZ2tEdU4vcHJldmlld1wiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDQxNjgzZGRhNDdmOGI2MTNlMlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCT0YPQu9C+0LLQsCDQkNC90LPQtdC70ZbQvdCwLCAxOCDRgNC+0LrRltCyIFwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQpC4g0KjQvtC/0LXQvS4g0J3QvtC60YLRjtGA0L0g0YLQsi40OCDihJYxLCAgICAgMinQny4g0KHQsNC90LrQsNC9LiDQotC+0LrQsNGC0LBcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMXpuaDlSVS1wQ3Azckh4cXlWdVA0NEQ0Q2tZbTU5R2pOL3ByZXZpZXdcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQ0MTY4M2RkYTQ3ZjhiNjEzZTNcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQlNCw0L3QvtCy0YHRjNC60LAg0J7Qu9GM0LPQsCwgMTcg0YDQvtC60ZbQsiBcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIiDQki7QkdCw0YDQstGW0L3RgdGM0LrQuNC5INCf0YDQtdC70Y7QtNGW0Y8g4oSWNCAnJ9Cl0L7RgNCw0LsnJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xWUxkMkZQNUl4RG5lSWNPTVdnV1RnQ2Z1YkJPWUpRUHIvcHJldmlld1wiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDQxNjgzZGRhNDdmOGI2MTNlNFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCU0LDQvdC+0LLRgdGM0LrQsCDQntC70YzQs9CwLCAxNyDRgNC+0LrRltCyXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQmi7Qm9GP0LTQvtCyINCf0YDQtdC70Y7QtNGW0Y8sINGC0LIuMzkg4oSWNFwiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xd29nVlp2OFdWeVF0TEZzb3B3YVJCeDFSUU94bHpDRkkvcHJldmlld1wiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDQxNjgzZGRhNDdmOGI2MTNlNVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCU0YPQtNC90LjQuiDQlNCw0YAn0Y8sIDE3INGA0L7QutGW0LJcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIiDQki7QkdCw0YDQstGW0L3RgdGM0LrQuNC5Licn0JvQuNGB0YLQvtC6INC3INCw0LvRjNCx0L7QvNCwJydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMWxfSEUzcjBPNXVzak9IY051TXBORFlnX2c2ZDJTMzV0L3ByZXZpZXdcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQ0MTY4M2RkYTQ3ZjhiNjEzZTZcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQlNGD0LTQvdC40Log0JTQsNGAJ9GPLCAxNyDRgNC+0LrRltCyIFwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0Jou0JTQtdCx0Y7RgdGB0ZYuICcnINCg0L7QvNCw0L3RgtC40YfQvdC40Lkg0LLQsNC70YzRgScnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFxTGdxOUFmRDZZWEN5UFF5RmVqbHlaOEJPTnVTb05fNC9wcmV2aWV3XCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0NDE2ODNkZGE0N2Y4YjYxM2U3XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0JrRgNGO0LrQvtCy0LAg0JzQsNGA0ZbRjywgMTUg0YDQvtC60ZbQsiBcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0KEu0JHQvtGA0YLQutC10LLQuNGHLiAnJ9Cf0YDQuNC80YXQuCDQvNC+0YDRjycnLCAyKdCkLtCo0L7Qv9C10L0u0JXRgtGO0LQg0YLQsi4xMCDihJY0XCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzEtY2JvM0JaMUVQTlltNk5TMWVDTW1fMkhUekhKN0Jlay9wcmV2aWV3XCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0NDE2ODNkZGE0N2Y4YjYxM2U4XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0JrRg9C70ZbRiCDQn9C+0LvRltC90LAsIDE1INGA0L7QutGW0LIgXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCVLtCT0YDRltCzLicn0JrQvtC70LjRgdC60L7QstCwJycsIDIp0IYu0J/QsNC00LXRgNC10LLRgdGM0LrQuNC5LiAnJ9Ch0LrQtdGA0YbQuNC90L4nJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xTmFtVlZGZkFkUmZhRnVBMXVLamx0OVFJV2dNaVNCeTYvcHJldmlld1wiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDQxNjgzZGRhNDdmOGI2MTNlOVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCc0YPQt9C40YfQtdC90LrQviDQnNCw0YDRltGPLCAxOSDRgNC+0LrRltCyIFwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQmS7Qk9Cw0LnQtNC9LiDQodC+0L3QsNGC0LAg4oSWMzEsIDHRhy47IDIp0KQu0KjQvtC/0LXQvS7QldGC0Y7QtCzRgtCyLjEwIOKEljVcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMU8tYWhmWUpOYkZmNWZTT3dTU3BmZklXV3BuaUJ1Yks4L3ByZXZpZXdcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQ0MTY4M2RkYTQ3ZjhiNjEzZWFcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQntC70ZbQudC90LjQuiDQntC70LXQutGB0LDQvdC00YAsIDE4INGA0L7QutGW0LJcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0JYu0JHRltC30LUt0JIu0JPQvtGA0L7QstGW0YYuINCS0LDRgNGW0LDRhtGW0Zcg0L3QsCDRgtC10LzRgyDQtyDQvtC/0LXRgNC4ICcn0JrQsNGA0LzQtdC9JycsIDIp0Jsu0KDQtdCy0YPRhtGM0LrQuNC5LiDQn9GA0LXQu9GO0LTRltGPINGE0LAg0LTRltGU0Lcg0LzRltC90L7RgFwiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xM0p5bFBkRFdnVno2UVNIUkdWSnQ3RmhkYVJlbENIU0QvcHJldmlld1wiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDQxNjgzZGRhNDdmOGI2MTNlYlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCh0LzQuNC6INCQ0L3QvdCwLCAxNyDRgNC+0LrRltCyIFwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0KEu0KDQsNGF0LzQsNC90ZbQvdC+0LIuINCV0YLRjtC0LdC60LDRgNGC0LjQvdCwINGC0LIuMzMg4oSWNSwg0YHQvtC70Ywg0LzRltC90L7RgFwiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xazdva0J1eU1zRmFSdDRHd3dYVVNnWUNoNURkWTZNTjkvcHJldmlld1wiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDQxNjgzZGRhNDdmOGI2MTNlY1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCh0LzQuNC6INCQ0L3QvdCwLCAxNyDRgNC+0LrRltCyIFwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0KEu0KDQsNGF0LzQsNC90ZbQvdC+0LIuINCf0YDQtdC70Y7QtNGW0Y8sINGC0LIuIDMyIOKEljEyLCDRgdC+0LvRjCDQtNGW0ZTQtyDQvNGW0L3QvtGAXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFMWUhIVkt1VUlpc2FkRTJmbXp3WXptd3NTLVV3VnhWUi9wcmV2aWV3XCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0NDE2ODNkZGE0N2Y4YjYxM2VkXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0KLRltGF0L7QvdC+0Log0ITQs9C+0YAsIDE3INGA0L7QutGW0LJcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0KEu0JHQvtGA0YLQutC10LLQuNGHLicn0KHQutC10LvRliDRg9GJ0LXQu9C40L3QuCDQo9GHLdCa0L7RiCcnINC3INGB0Y7Rl9GC0LggJyfQmtGA0LjQvNGB0YzQutGWINC90LDRgNC40YHQuCcnLtGC0LIuOCwgMinQpC7Qm9GW0YHRgi7QotGA0LDQvdGB0YbQtdC90LTQtdC90YLQvdC40Lkg0LXRgtGO0LQg4oSWMTAsINGE0LAg0LzRltC90L7RgFwiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xeG4zVGZOSDZHRkJCUW8xdlpaTm5SUlZxYnRqR0d1ZzIvcHJldmlld1wiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDQxNjgzZGRhNDdmOGI2MTNlZVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCk0LDRidC10LLRgdGM0LrQuNC5INCi0LDRgNCw0YFcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItChLtCg0LDRhdC80LDQvdGW0L3QvtCyLiAnJ9CV0YLRjtC0LdC60LDRgNGC0LjQvdCwJycsINGC0LIuMzMgKDUpXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFlcVRQWGxfUmhaUU9kVnItbGhVUW1sT004Y29DNkZvSy9wcmV2aWV3XCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0NDE2ODNkZGE0N2Y4YjYxM2VmXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0KTQsNGJ0LXQstGB0YzQutC40Lkg0KLQsNGA0LDRgVwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0Jsu0KDQtdCy0YPRhtGM0LrQuNC5LiDQn9GA0LXQu9GO0LTRltGPLCDRgtCyLjQgKDIpXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzEtX2JvTW5vWW5rNzR4RHpReTZRbENxVnhJUDNqNHNIeC9wcmV2aWV3XCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0NDE2ODNkZGE0N2Y4YjYxM2YwXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0KTQtdGB0LjQuiDQndCw0LfQsNGA0ZbQuSwgMTYg0YDQvtC60ZbQslwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQoS7QkdC+0YDRgtC60LXQstC40YcuJydMeXJpY2EgTm92YScnLNGC0LIuNTkg4oSWMyw0OyAyKdCkLtCb0ZbRgdGCLtCi0YDQsNC90YHRhtC10L3QtNC10L3RgtC90LjQuSDQtdGC0Y7QtCDihJY4ICcn0JTQuNC60LUg0L/QvtC70Y7QstCw0L3QvdGPJydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMWMwc2o0QU11RHhIQXBtR1Q5V1NobWpKSGJFSFJ6SmRDL3ByZXZpZXdcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQ0MTY4M2RkYTQ3ZjhiNjEzZjFcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQrtC30LvQvtCy0LAg0JvRjtCx0L7QsiwgMTcg0YDQvtC60ZbQslwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiIDEpINCaLtCU0LXQsdGO0YHRgdGWLiAnJ9CQ0YDQsNCx0LXRgdC60LAnJ+KEljEsIDIpINCZLtCR0YDQsNC80YEuJyfQhtC90YLQtdGA0LzQtdGG0YbQvicnLCDRgtCyLjExNyDihJYyXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFMQURJbldwbS1qaGMxRmJSdWRncXdDTUd0elhRREJNUy9wcmV2aWV3XCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0NDE2ODNkZGE0N2Y4YjYxM2YyXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0JfQsNGU0YbRjCDQnNCw0YDQuNC90LBcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCcLiDQodC60L7RgNC40LouJyfQktCw0LvRjNGBJycg0Lcg0J/QsNGA0YLQuNGC0Lgg4oSWNVwiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xMW1sWnpuWmJveGh6eEVCVEo0Z1VtRXRFMEpZZ1FnZGgvcHJldmlld1wiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDQxNjgzZGRhNDdmOGI2MTNmM1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCX0LDRlNGG0Ywg0JzQsNGA0LjQvdCwXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQny7Qp9Cw0LnQutC+0LLRgdGM0LrQuNC5LiAnJ9CU0YPQvNC60LAnJywg0YLQsi41OVwiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xUGFVcC1hcVFkQ3FCdDM1NjYyeU53SmtoYU5PQVhOX2gvcHJldmlld1wiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOTg1NDQxNjgzZGRhNDdmOGI2MTNmNFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCb0L7Qs9Cy0LjQvdC+0LLRgdGM0LrQuNC5INCE0LLQs9C10L3RltC5XCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQlC7Qn9GA0LjRgtGB0LrQtdGALiAnJ9CR0LvRjtC3INCf0ZbQutCw0YHRgdC+JydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMWUyXzRpc1F6bHVjTFI3a0JaWC1DSHhncVlyQnhKUlp3L3ByZXZpZXdcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQ0MTY4M2RkYTQ3ZjhiNjEzZjVcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQm9C+0LPQstC40L3QvtCy0YHRjNC60LjQuSDQhNCy0LPQtdC90ZbQuVwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0KEu0J/RgNC+0LrQvtGEJ9GU0LIuINCh0L7QvdCw0YLQsCDihJYzLCDRgtCyLjI4XCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFETGhUOVl3UjVJOWNaeHpkTm9lMjJGd1M4anBJNFlWcy9wcmV2aWV3XCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0NDE2ODNkZGE0N2Y4YjYxM2Y2XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0JzQuNC60LjRgtGO0Log0JDQvdCw0YHRgtCw0YHRltGPXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQnC7QoNCw0LrQvtCyLiAnJ9Ca0L7QvdGG0LXRgNGC0L3QuNC5INC10YLRjtC0JydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMUM4YTZUUFJNMmNhUWZUT0E2ekdIdnVJakdTb0w3QzFiL3ByZXZpZXdcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQ0MTY4M2RkYTQ3ZjhiNjEzZjdcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQnNC40LrQuNGC0Y7QuiDQkNC90LDRgdGC0LDRgdGW0Y9cIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIiDQmS7QoS7QkdCw0YUuINCf0YDQtdC70Y7QtNGW0Y8g0ZYg0YTRg9Cz0LAg0LTQviDQvNGW0L3QvtGALCDQlNCi0JogLdCG0IZcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMXdycWRiX2tlMktjaF9DZkJjbU5SSDJNNTgwUHRaUUExL3ByZXZpZXdcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQ0MTY4M2RkYTQ3ZjhiNjEzZjhcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQndCw0LfQsNGA0LXQvdC60L4g0JrRgdC10L3RltGPXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQhi7QktC+0LvQutC+0LLQsC4gJyfQndCw0YHRgtGA0L7RlycnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFPQThydk42d3dkcE9WeTFEVkR0MXpxLTRwa2VpU3IzeC9wcmV2aWV3XCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0NDE2ODNkZGE0N2Y4YjYxM2Y5XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0J3QsNC30LDRgNC10L3QutC+INCa0YHQtdC90ZbRj1wiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0Jku0JHQsNGFLiDQkNC70LXQvNCw0L3QtNCwXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzEwcXRVUldkM2Fhc2NxMmd3Tkh4TS1GRVR5UUhMQjh0RC9wcmV2aWV3XCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0NDE2ODNkZGE0N2Y4YjYxM2ZhXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0KHQtdGA0L7QsiDQktC70LDQtNC40YHQu9Cw0LJcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0Jku0KEuINCR0LDRhS4g0J/RgNC10LvRjtC00ZbRjyDRliDRhNGD0LPQsCDQtNC+INC80ZbQvdC+0YAsINCU0KLQmi3QhtCGLCAyKdCkLtCo0L7Qv9C10L0uINCR0LDQu9Cw0LTQsCDihJYxLCDRgtCyLjIzXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFhdG41eWlFY1hnalZuRktmTTRRV0FVUzR6X1VWVEpfcS9wcmV2aWV3XCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0NDE2ODNkZGE0N2Y4YjYxM2ZiXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0KLQsNGA0LDRgdC+0LIg0JLQu9Cw0LTQuNGB0LvQsNCyXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdChLtCg0LDRhdC80LDQvdGW0L3QvtCyLiAnJ9CV0YLRjtC0LdC60LDRgNGC0LjQvdCwJycsINGC0LIuMzkg4oSWOSwgMinQpC7QqNC+0L/QtdC9LiAnJ9CR0LDQu9Cw0LTQsCcnLCDRgtCyLjIzIOKEljFcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMTlOWl90RXkwTzJuUlhqQ2x0ZF92ZFdMM1NNdUJOYUNNL3ByZXZpZXdcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4NTQ0MTY4M2RkYTQ3ZjhiNjEzZmNcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQk9GA0LXQsdC10L3RjtC6INCTLtCeLlwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQoS7Qn9GA0L7QutC+0YTRjNC10LIuINCh0L7QvdCw0YLQsCDihJYyLNCGINGHLjsyKSAgINCkLtCb0ZbRgdGCLicn0JXRgtGO0LQg0LfQsCDQutCw0L/RgNC40YHQsNC80Lgg0J/QsNCz0LDQvdGW0L3RlicnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFTaFVZSVlQOW5nb1FaZWhtQ2J6UDVGM2JKQUtGaDNzTi9wcmV2aWV3XCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0NDE2ODNkZGE0N2Y4YjYxM2ZkXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0JrQvtC90LTRgNCw0YLRjtC6INCcLtCeLiBcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0KAu0KjRg9C80LDQvS4gJyfQoNC+0LzQsNC90YEnJywg0YLQsi4yOCwgMinQki7QmtC+0YHQtdC90LrQvi4gJyfQmtGD0YDQsNC90YLQsCcnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFGT2I0MVBzbXFXTzRueU9Ea09kb01UNFNzUHA0SFg5eC9wcmV2aWV3XCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5ODU0NDE2ODNkZGE0N2Y4YjYxM2ZlXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0J7Qv9Cw0L3QsNGB0LXQvdC60L4g0JAu0J4uIFwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQoS7QoNCw0YXQvNCw0L3RltC90L7Qsi4g0J/RgNC10LvRjtC00ZbRjyDRgdC+0LvRjCDQtNGW0ZTQtyDQvNGW0L3QvtGALCAyKdCSLtCk0ZbQu9GW0L/QtdC90LrQvi4g0KLQvtC60LDRgtCwXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFWTFhFTHVaY0k2UWkyZ3Jsd2FVLXVFd2xMdjFlU0VrWC9wcmV2aWV3XCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9XG5dO1xuXG5sZXQgY29uY2VydG1hc3RlcnMgPSBbXG4gICAge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOThjOGY2NjgzZGRhNDdmOGI2MTNmZmFhc2RcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQqNC10LLQtdC70YzQvtCy0LAg0ITQu9GW0LfQsNCy0LXRgtCwLCAyMCDRgNC+0LrRltCyLlwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSkg0J8u0KfQsNC50LrQvtCy0YHRjNC60LjQuS4g0JDRgNGW0Y8g0JvQtdC90YHRjNC60L7Qs9C+LCAyKSDQky7QpdCw0LfQsNC90L7QstCwLiBcXFwiINCj0LfQtNC+0LLQtiDQstGD0LvQuNGG0ZYg0YXQvtC00YMg0Y9cXFwiXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC9DV1gwZVJQVENZWVwiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOThjOGY2NjgzZGRhNDdmOGI2MTNmZmFhc1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCX0LDQutCw0LvRjtC20L3QsCDQni7QkVwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0JMu0JLQtdC90Y/QstGB0YzQutC40LkuINCa0L7QvdGG0LXRgNGC0L3QuNC5INC/0L7Qu9C+0L3QtdC3INGA0LUg0LzQsNC20L7RgFwiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly93d3cueW91dHViZS5jb20vZW1iZWQvczNjbFhMVDM0aFlcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4YzhmNjY4M2RkYTQ3ZjhiNjEzZmZhYXMxXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0JfQsNC60LDQu9GO0LbQvdCwINCeLtCRXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQli7QnNCw0YHQvdC1LlxcXCLQoNC+0LfQtNGD0LxcXFwiXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC9nRHlVQ2JhbmVCa1wiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOThjOGY2NjgzZGRhNDdmOGI2MTNmZlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCa0L7QsdC30LDRgCDQndGW0LrQvtC70YwsIDE0INGA0L7QutGW0LJcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCkLtCa0YDQtdC50YHQu9C10YAuJyfQnNCw0LvQtdC90YzQutC40Lkg0JLRltC00LXQvdGB0YzQutC40Lkg0LzQsNGA0YgnJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xa3VTUjBWbU9NaXFJajlZUjB1M2x2T3pxNEpHNWFMWTgvcHJldmlld1wiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOThjOGY2NjgzZGRhNDdmOGI2MTQwMFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCa0L7QsdC30LDRgCDQndGW0LrQvtC70YwsIDE0INGA0L7QutGW0LJcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCVLtCV0LvRjNCz0LDRgC4nJ9Ch0LDQu9GO0YIg0LrQvtGF0LDQvdC90Y8nJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xMWdJN1hsal9TTFFxbDJQaTZFVEFoU0FaVEtMTWprQm4vcHJldmlld1wiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOThjOGY2NjgzZGRhNDdmOGI2MTQwMVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCh0LDQsdC+INCd0LXRgdGC0L7RgCwgMTAg0YDQvtC60ZbQsiBcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0JIu0JrRgNC+0LvQuy4gJyfQn9C+0LvRjNC60LAg0LLRltGB0LvRjtGH0LrQsCcnLCAyKdCSLtCm0LjQsdGW0L0o0L/QtdGA0LXQutC7LtCQLtCm0LDRgNC10L3QutC+KS4gJyfQm9C40YHRgtC+0Log0Lcg0LDQu9GM0LHQvtC80LAnJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xNFBSNWV2clVJUmFTMVZGVXZ1MHM2OUhNSDd4UzNXaUkvcHJldmlld1wiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOThjOGY2NjgzZGRhNDdmOGI2MTQwMlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCh0LzRltGA0L3QvtCy0LAg0ITQstCz0LXQvdGW0Y8sIDkg0YDQvtC60ZbQsiBcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCbLtCR0LXRgtGF0L7QstC10L0uICcn0JHQsNCx0LDQuicnLNC+0LHRgC4g0JAuINCo0YPQstCw0LvQvtCy0LBcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMWlyMmFSS2NvODJOd3pSMkZRSDZBcFpWSFFaWXIwTDd5L3ByZXZpZXdcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4YzhmNjY4M2RkYTQ3ZjhiNjE0MDNcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQodC80ZbRgNC90L7QstCwINCE0LLQs9C10L3RltGPLCA5INGA0L7QutGW0LIgXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQni7QkdC10YYuICcn0J/QvtC00ZbQu9GM0YHRjNC60ZYg0LLQuNC60YDRg9GC0LDRgdC4JydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMXFKUTlBSVdqNDhwSlRNQldmbzNoN3o2SmxLSkg5ODBuL3ByZXZpZXdcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4YzhmNjY4M2RkYTQ3ZjhiNjE0MDRcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQodGC0LDRgNGG0LXQsiDQkdC10L3QttCw0LzRltC9LCAxMSDRgNC+0LrRltCyIFwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSkg0JYu0JzQsNGB0YHQvdC1LiAnJ9Cg0L7Qt9C00YPQvCcnOyAyKdCVLtCg0LjQsdC60ZbQvS4gJyfQpNC+0YDQvNGD0LvQsCAxJydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMUw2YnhEeXNOMHkyR0RTTm5SWHFHRUZiSFI3ZVMtaXhzL3ByZXZpZXdcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4YzhmNjY4M2RkYTQ3ZjhiNjE0MDVcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQktC70LDRgdGO0Log0J3QsNC30LDRgCwgMTgg0YDQvtC60ZbQsiBcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0KEu0JTQvtC90L7RgtGWLiDQkNGA0ZbRjycnTyBkZWwgbWlvIGFtYXRvIGJlbicnLDIp0JUu0JPRgNGW0LMs0JMu0KUuINCQ0L3QtNC10YDRgdC10L0gJydKZWcgZWxza2VyIGRpZycnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzEyX01GUFUzOWJ0SlFLdlN0MlJZemppVTBIYVlzYTRPZy9wcmV2aWV3XCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5OGM4ZjY2ODNkZGE0N2Y4YjYxNDA2XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0JTRj9GH0LXQuiDQhtC+0LDQvdC90LAsIDE30YDQvtC60ZbQsiBcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0JIu0JAu0JzQvtGG0LDRgNGCLtCQ0YDRltGPJydSaWRlbnRlIGxhIGNhbG1hJycsIDIp0KQu0J3QsNC00LXQvdC10L3QutC+LCDQhi7QpNGA0LDQvdC60L4u0KDQvtC80LDQvdGBICcn0KfQvtCz0L4g0Y/QstC70Y/RlNGI0YHRjyDQvNC10L3RliDRgyDRgdC90ZYnJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xRVFiUUtiV2l2Q2ItZ09Ra2NjSUNMNUFQUWpnV2xlOXcvcHJldmlld1wiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOThjOGY2NjgzZGRhNDdmOGI2MTQwN1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCa0LLQsNGI0LAg0K/QvdCwLCAxNiDRgNC+0LrRltCyXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCZLtCa0LLQsNC90YYuINCh0L7QvdCw0YLQsCDRgNC1INC80LDQttC+0YAsINCGLdCG0IYg0YcuOyAyKdCSLtCf0L7Qv9C/LiAnJ9Cg0YPRgdGB0LrQuNC5INCy0LXRh9C10YAnJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xb3BMNDFtTEgxMEJucjFlTXl6T0V4c3dGSm9UWl84Y1MvcHJldmlld1wiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOThjOGY2NjgzZGRhNDdmOGI2MTQwOFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCa0L7Qu9C+0LTRltC5INCQ0L3RgtC+0L0sIDE4INGA0L7QutGW0LJcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEpINCfLtCn0LDQudC60L7QstGB0YzQutC40LkuINCg0L7QvNCw0L3RgScn0JPQvtGA0L3QuNC80Lgg0YLQuNGF0L4g0LvQtdGC0LXQu9CwINC00YPRiNCwINC90LXQsdC10YHQsNC80LgnJywgMinQoS7QoNCw0YXQvNCw0L3RltC90L7Qsi4gJyfQldC70LXQs9GW0Y8nJyzRgtCyLjPihJYxLCDQvtCx0YDQvtCx0LrQsCDQtNC70Y8g0LLRltC+0LvQvtC90YfQtdC70ZYg0YLQsCDRhC3QvdC+XCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFsUUl6RE9pWnAtRWRYbHkxMFNWbTRkaU9qNVdDU2szWi9wcmV2aWV3XCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5OGM4ZjY2ODNkZGE0N2Y4YjYxNDA5XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0JrQvtC90Y7RiNC10Log0KHQvtGE0ZbRjywgMjEg0YDRltC6XCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQni7QotCw0LrRgtCw0LrRltGI0LLRltC70ZYuINCh0L7QvdCw0YLQsCDQtNC70Y8g0YTQu9C10LnRgtC4INGWINGE0L7RgNGC0LXQv9GW0LDQvdC+LlwiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xSFhFLVdibFUwLUh5d2dWekN1blFuaVFVQ1VOWEdsTk4vcHJldmlld1wiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOThjOGY2NjgzZGRhNDdmOGI2MTQwYVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCa0L7QvdGO0YjQtdC6INCh0L7RhNGW0Y8sIDIxINGA0ZbQuiBcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCkLtCa0L7QvNC70LXQsi4gJyfQnNC10LvQvtC00ZbRjycnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzE0cTc4WEtwZEZnNjZWU1drQVpxMFZlUnVLYVRjSlVwdS9wcmV2aWV3XCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5OGM4ZjY2ODNkZGE0N2Y4YjYxNDBiXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0J/Rh9C10LvRltC90YbQtdCy0LAg0JDQtNGA0ZbQsNC90LAsIDE1INGA0L7QutGW0LJcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0JIu0JzQvtGG0LDRgNGCLiDQkNGA0ZbRjyDQkdC70L7QvdC00YXQtdC9INC3INC+0L/QtdGA0LgnJ9CS0LjQutGA0LDQtNC10L3QvdGPINGW0Lcg0KHQtdGA0LDQu9GPJycsIDIp0KAu0JPQu9GW0ZTRgC4nJ9CSINC/0L7RgNGL0LLQtSDQvdC10LbQvdC+0YHRgtC4INGB0LXRgNC00LXRh9C90L7QuScnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzE3bVJWeFYwNnY1TXY2X1AzQzE4M29NZ09OLVJfdS1xTy9wcmV2aWV3XCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5OGM4ZjY2ODNkZGE0N2Y4YjYxNDBjXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0KTQtdGB0LjQuiDQndCw0LfQsNGA0ZbQuSwgMTYg0YDQvtC60ZbQsiBcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0JTQti7Qn9GD0YfRh9GW0L3Rli4g0JDRgNGW0Y8g0KLQvtGB0LrQuDsgMinQnC7QtNC1INCk0LDQu9GM0Y8uJyfQpdC+0YLQsCcnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFCSk5zVHA0V0R4WmJBZEFuak1MUDNoYkQ2M1QyZUl3WS9wcmV2aWV3XCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5OGM4ZjY2ODNkZGE0N2Y4YjYxNDBkXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0K/RgNC+0YjQtdC90LrQviDQktCw0LvQtdGA0ZbRjywgMTkg0YDQvtC60ZbQslwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQmi7QodGC0LXRhtC10L3QutC+LiAnJ9Ch0L7RgtC+0Y/Qu9CwINGPINGWINGB0LvRg9GF0LDQu9CwINCy0LXRgdC90YMnJzsgMinQki7QktC70LDRgdC+0LIuINCh0LrQtdGA0YbQviDQtNC70Y8g0LTQvtC80YDQuCDRgtCwINGE0L7RgFwiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xT3VEbGFjRGIzaTk0eE54a293ay1qc05rdHh1UUs3MUwvcHJldmlld1wiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOThjOGY2NjgzZGRhNDdmOGI2MTQwZVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCa0L7Qt9Cw0Log0IbRgNC40L3QsFwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0IQu0JHQvtC30LfQsC4nJ9CU0LjRgtGP0YfRliDQvNGA0ZbRlycnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFQc295T0lyMTdPQ3lOX0doUlVfcTdJcFM0SFd3SFdVQi9wcmV2aWV3XCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5OGM4ZjY2ODNkZGE0N2Y4YjYxNDBmXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0JrQvtC30LDQuiDQhtGA0LjQvdCwXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIn0J3RltGHINGP0LrQsCDQvNGW0YHRj9GH0L3QsCcnLCDQvtCx0YAuINCuLtCe0YHRgtGA0L7QstGB0YzQutC+0LPQviBcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMVRKS1FGRW0zYTN3emlZdkkzUWZpaEd4elYyVTVRSDJuL3ByZXZpZXdcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4YzhmNjY4M2RkYTQ3ZjhiNjE0MTBcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQnNC40LrQuNGC0Y7QuiDQkNC90LDRgdGC0LDRgdGW0Y8gXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCdLtCR0LDQutC70LDQvdC+0LIuICcn0JrQvtC90YbQtdGA0YLRltC90L4nJywgICAgICAyKdCXLtCR0LDQs9GW0YDQvtCyLiAnJ9Cg0L7QvNCw0L3RgScnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFqOF9tdlpFR1RnWUkwTEZHV0ZvTGJRQWdDSHBJNUMwWi9wcmV2aWV3XCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5OGM4ZjY2ODNkZGE0N2Y4YjYxNDExXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0KHQsNCyJ9GO0Log0JLQu9Cw0YHRgtCwXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCSLtCQLiDQnNC+0YbQsNGA0YIuINCa0L7QvdGG0LXRgNGCINC00LvRjyDRhNCw0LPQvtGC0LAg0Lcg0L7RgNC60LXRgdGC0YDQvtC8INGB0ZYg0LHQtdC80L7Qu9GMINC80LDQttC+0YAsINCG0YcuOyAyKdCQLtCi0LDQvdGB0LzQsNC9LtCh0L7QvdCw0YLQuNC90LAg0LTQu9GPINGE0LDQs9C+0YLQsCDRliDRhNC+0YDRgtC10L/RltCw0L3QvizQhtCG0IbRhy5cIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMTMwYVpPMW54VjRFOEhYN2h4V2FOdlZUNGJmZ2toeDRNL3ByZXZpZXdcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4YzhmNjY4M2RkYTQ3ZjhiNjE0MTJcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQodCw0YHRjtC6INCu0LvRltGPXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCTLtCk0L7RgNC1LiAnJ9Cf0YDQvtCx0YPQtNC20LXQvdC90Y8nJywgMikg0JEu0JHQsNGA0YLQvtC6LiAnJ9Co0ZbRgdGC0Ywg0YDRg9C80YPQvdGB0YzQutC40YUg0YLQsNC90YbRltCyJydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMW9kczN0dlVEWFpkbzF5ZWRJVlhZY2M5TW43N2JqaDI1L3ByZXZpZXdcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4YzhmNjY4M2RkYTQ3ZjhiNjE0MTNcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQhtCy0LDQvdC+0LLQsCDQoi7Qki5cIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCVLtCh0LXQstC10YDQvS4gJyfQn9C+0LvRjNGB0YzQutC40Lkg0YLQsNC90LXRhtGMJydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMXhYdHZPU0F1bnY1NlJmQXhnVjFxN200aUthMDlzV0gxL3ByZXZpZXdcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4YzhmNjY4M2RkYTQ3ZjhiNjE0MTRcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQhtCy0LDQvdC+0LLQsCDQoi7Qki5cIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCGLtCi0LDQvNCw0YDQuNC9ICcn0KHRgtCw0YDQvtCy0LjQvdC90LjQuSDQs9C+0LHQtdC70LXQvScnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzE0OXZsTTA3R2Q4UzlDejR0RFoyS3lLa2d1Snp5QjF1Qi9wcmV2aWV3XCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5OGM4ZjY2ODNkZGE0N2Y4YjYxNDE1XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0JPQsNGH0LjQuiDQni7QkC5cIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0KAu0JPQu9GW0ZTRgC4nJ9Cg0L7QvNCw0L3RgScnLCAyKdCeLtCm0LjQs9Cw0L3QutC+0LIuJyfQhtC90YLRgNC+0LTRg9C60YbRltGPINGC0LAg0KfQsNGA0LTQsNGIJydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMU5nczg1cXBFT0RFdjY3YTgtZGFKeFpvSDZLbzdTVVdrL3ByZXZpZXdcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4YzhmNjY4M2RkYTQ3ZjhiNjE0MTZcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQk9GA0LjRhtGW0LIg0J4u0JwuXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCkLiDQmtGA0LXQudGB0LvQtdGALicn0JzQsNC70LXQvdGM0LrQuNC5INCy0ZbQtNC10L3RgdGM0LrQuNC5INC80LDRgNGIJycsIDIp0JsuINCg0LXQstGD0YbRjNC60LjQuS4gJyfQhtC90YLQtdGA0LzQtdGG0L4nJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xblhreWJQWkhQT1dXVXpCRURfS0tlR0Yza08yRWNhYmovcHJldmlld1wiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOThjOGY2NjgzZGRhNDdmOGI2MTQxN1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCa0ZbRgNGH0LDQvdC+0LLQsCDQhi7Qki4gXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCcLtCS0ZbQtNC80L7QvdGC0LUuJydQYXIgemlsbyB1biByYWlibyBwYXNha3UnJywgMinQk9GD0LHQsNGA0LXQvdC60L4g0JIuINCa0L7QvdGG0LXRgNGCINC00LvRjyDRhNC70LXQudGC0Lgg0Lcg0LrQsNC80LXRgNC90LjQvCDQvtGA0LrQtdGB0YLRgNC+0Lws0YLQsi4xMFwiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xenBNakNhdVVwYkpkdWZXWGZiNU9mbTdQOXNBWWotaVAvcHJldmlld1wiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOThjOGY2NjgzZGRhNDdmOGI2MTQxOFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCa0LXQutGD0YUg0J4u0JIuXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdCGLtCS0LjQvNC10YAuICcn0JPRg9GG0YPQu9GM0YHRjNC60LAg0YDQsNC/0YHQvtC00ZbRjycnLCAyKdCj0LrRgC7QvdCw0YAuINGC0LDQvdC10YbRjCDQsiDQvtCx0YAu0JIu0KHQvtC70L7QvdGB0YzQutC+0LPQviAnJ9CS0LXRh9C+0YDQvdC40YbRlicnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFkZlB4MTVXUUtIZlBWdE1QV1dBQXc5c3k5VVl3NVMxZS9wcmV2aWV3XCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5OGM4ZjY2ODNkZGE0N2Y4YjYxNDE5XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0JvQvtCx0L7QtNCwINCbLiDQnC4sIFwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQmy7QkdC10YLRhdC+0LLQtdC9LCDQoi7QqNC10LLRh9C10L3QutC+LiAnJ9CX0L7RgNC1INC80L7RjyDQstC10YfRltGA0L3Rj9GPJycsIDIp0JvQtdC80LrRltCy0YHRjNC60LAg0L3QsNGA0L7QtNC90LAg0L/RltGB0L3RjyAnJ9CSINGC0LXQvNC90YMg0L3RltGH0LrRgyDRg9Cx0L7Rh9C4JydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMTBnWm81M1g2RWhId0VNcFhLd3BCMnRXMl9pclZvMjkwL3ByZXZpZXdcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4YzhmNjY4M2RkYTQ3ZjhiNjE0MWFcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQm9GO0LHRh9C10L3QutC+INCcLtChLiBcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCZLtChLtCR0LDRhS4g0JrQvtC90YbQtdGA0YIg0LTQu9GPINGB0LrRgNC40L/QutC4INC3INC+0YDQutC10YHRgtGA0L7QvCDQu9GPINC80ZbQvdC+0YBcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMXdmaHVpdFhMMk13dFlkclVISWtWZE14UVpwaHQ2ak5sL3ByZXZpZXdcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4YzhmNjY4M2RkYTQ3ZjhiNjE0MWJcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQm9GO0LHRh9C10L3QutC+INCcLtChLlwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0J0u0KHRgtC10YbRjtC9LiAgICAnJ9CR0L7Qu9C10YDQvicnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFiSFdVcmlxS3ZTVG5WbkltNDdtbUxlZFNpME5oLVhRcy9wcmV2aWV3XCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5OGM4ZjY2ODNkZGE0N2Y4YjYxNDFjXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0JzQuNGF0LDQudC70L7QstCwINCcLtCSLlwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0JAu0KHQvtC70YLQsNC9LiAnJ9Cc0LXQu9C+0LTRltGPJydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMUVvRVMybVRyV0N5OUNRY3FkOXF1MzY2WjF0ejZJcFJRL3ByZXZpZXdcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4YzhmNjY4M2RkYTQ3ZjhiNjEzZmZhYXNkYVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCc0LjRhdCw0LnQu9C+0LLQsCDQnC7Qki5cIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCZLiDQotCw0LzQsNGA0LjQvS4gXFxcItCh0YLQsNGA0L7QstC40L3QvdC40Lkg0LPQvtCx0LXQu9C10L1cXFwiXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzF1NHhKMHZLNmRlUjJYSndHTFhGaDZzQlJlUHZ4R1VOci9wcmV2aWV3XCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5OGM4ZjY2ODNkZGE0N2Y4YjYxNDFkXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0JzRj9C70YzQutGW0L3QsCDQnS7Qni5cIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCU0LYu0JLRltC70YzRj9C80YEuICcn0JzQtdC70L7QtNGW0Y8nJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xaU1fRUYwVng5LXc0RFM2SFJfWkhSSi1tcUp3QS1GR3AvcHJldmlld1wiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOThjOGY2NjgzZGRhNDdmOGI2MTQxZVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCc0Y/Qu9GM0LrRltC90LAg0J0u0J4uXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQoS7QptC40L3RhtCw0LTQt9C1LiAnJ9Ch0LDRh9GW0LTQsNC+JydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMTU5ZGpTcnpJMUF2TDVwa0NsMHZuWURzSFFMVG5kNWxvL3ByZXZpZXdcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4YzhmNjY4M2RkYTQ3ZjhiNjE0MWZcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQndGW0LrRltGC0ZbQvdCwINCGLtCgLlwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0JEu0JvRj9GC0L7RiNC40L3RgdGM0LrQuNC5LiAnJ9Cc0LXQu9C+0LTRltGPJydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMXlReU8wUTY1V3ZIbnZZMjh4Qmwzc2hXLUh0ZHU0MjM5L3ByZXZpZXdcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4YzhmNjY4M2RkYTQ3ZjhiNjE0MjBcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQndGW0LrRltGC0ZbQvdCwINCGLtCgLlwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0KHQuy4g0JAu0Jwn0Y/RgdGC0LrRltCy0YHRjNC60L7Qs9C+LCDQvNGD0Lcu0JIu0JLQtdGA0LzQtdC90LjRh9CwICcn0J/RltC00LrRgNGD0YfRgyDRjyDRh9C+0YDQvdGW0Zcg0LLRg9GB0LAnJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xdV83VVFEdU9DRHFKSmoxcTVsaEVGUEVveGRfUFUzalkvcHJldmlld1wiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOThjOGY2NjgzZGRhNDdmOGI2MTQyMVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCh0LDRlNC90LrQviDQoi7Qri4gXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQli7QnNCw0YHRgdC90LUuICcn0KDQvtC30LTRg9C8JydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMUpsQW9ZLUFBSkV5SS1ySVJEQ3U3VW55d3h2cldFQkJ3L3ByZXZpZXdcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4YzhmNjY4M2RkYTQ3ZjhiNjE0MjJcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQodCw0ZTQvdC60L4g0KIu0K4uLCBcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCiLtCn0YPQv9Cw0LouICcn0JLQtdGB0L3Rj9C90LjQuSDRgNC+0Lot0L0t0YDQvtC70LsnJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xVDUtSVVOVXVRbVV2RlZXWWxZNlNBVmVqLVRJcW1icnEvcHJldmlld1wiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOThjOGY2NjgzZGRhNDdmOGI2MTQyM1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCh0LDQstGH0YPQuiDQoi7Qhi4gIFwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQlNC2LtCS0ZbQu9GM0Y/QvNGBLCDQsNGA0LDQvdC2LtCQLtCi0LXQv9C70LjRhtGM0LrQvtGXLicn0JrQvtC70LjRgdC60L7QstCwINC00LvRjyDQsNC90LPQtdC70LAnJywgMinQki7QmtC+0LfQu9C+0LIs0L/QtdGA0LXQutC7LiDQtNC70Y8g0LTQvtC80YDQuCDQhC7QltGD0LrQvtCy0LAuICcn0J8n0ZTRgdCwINGDINGB0YLQuNC70ZYg0YTQu9Cw0LzQtdC90LrQvicnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzE3VGdpdW9naXZzaDN4d2pGWGk1YTFvUlUtb2trUDk2MC9wcmV2aWV3XCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5OGM4ZjY2ODNkZGE0N2Y4YjYxNDI0XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0KHQvNGW0YDQvdC+0LLQsCDQhi7Qri5cIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCQLiDQqNGD0LzQsNC60L7QstCwLiAnJ9Ci0LDQvdCz0L4g0JXQstGW0YLQuCcnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzExQ2t6aVJ2WUp2bmlXN2NpYTd5OUVrSTg1c25MSnc3eC9wcmV2aWV3XCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5OGM4ZjY2ODNkZGE0N2Y4YjYxNDI1XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0KHQvNGW0YDQvdC+0LLQsCDQhi7Qri5cIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCSLtCT0L7QvNC+0LvRj9C60LAuICcn0IbRgdC/0LDQvdGB0YzQutC40Lkg0YLQsNC90LXRhtGMJydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMWlPVUpOMjFCdkRkenNMMG9QMGF0dnNFbW9xZ1VkcFlDL3ByZXZpZXdcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4YzhmNjY4M2RkYTQ3ZjhiNjE0MjZcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQodC80L7Qu9GP0L3RltC90L7QstCwINChLtCcLiBcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0JAu0JTQstC+0YDQttCw0LouINCa0L7QvdGG0LXRgNGCINC00LvRjyDRgdC60YDQuNC/0LrQuCDQu9GPINC80ZbQvdC+0YAsINCGINGHLjsgMinQnC7QodC60L7RgNC40LouICcn0JrQsNGA0L/QsNGC0YHRjNC60LAg0YDQsNC/0YHQvtC00ZbRjycnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzF0bHNyTWtRcDBVVnEweXd0SjAxTHBIS1BzbUZPcEhuTy9wcmV2aWV3XCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5OGM4ZjY2ODNkZGE0N2Y4YjYxNDI3XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0KHRgtCw0YDQuNC90YHRjNC60LAg0Jwu0JAuIFwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQri7QqNC40L3QutCw0YDQtdC90LrQvi7QktCw0YDRltCw0YbRltGXOyAyKdCVLtCR0L7RhtGG0LAuJyfQkNGA0ZbRjycnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFMc1d6Vl9MdDF6MGdHWFVMU2Vnb3Vja1k5Ulpyb0c3aC9wcmV2aWV3XCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5OGM4ZjY2ODNkZGE0N2Y4YjYxNDI4XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0KLRgNC10L/QsNC6INCcLtCGLlwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQli7QlNC10LzQtdGA0YHRgdC80LDQvS4g0KTQsNC90YLQsNC30ZbRjywgMinQny7QhtGC0YPRgNGA0LDQu9GM0LTQtS4gJyfQnNCw0LvQtdC90YzQutC40Lkg0YfQsNGA0LTQsNGIJydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMVRNU0tIcEVjbU0zSzdoaVp6eVkzZzRLXzhNdEhiSDlML3ByZXZpZXdcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4YzhmNjY4M2RkYTQ3ZjhiNjE0MjlcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQhNGA0YzQvtC80ZbQvdCwINCeLtCTLiBcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEpINCcLtCU0YDQtdC80LvRjtCz0LAuINCf0L7QtdC80LAt0YDQsNC/0YHQvtC00ZbRjywgMikg0KEu0J7RgNGE0LXRlNCyLicn0JLQtdGB0L3Rj9C90LrQsCcnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFZNk9LVU9vSmIxanUzVnpTNEZDdE80Z3VCTEhEOTEwUC9wcmV2aWV3XCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5OGM4ZjY2ODNkZGE0N2Y4YjYxNDJhXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0JrQsNC00YPQuiDQoi7Qri5cIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIiAxKdCaLtCcLtCS0LXQsdC10YAu0JrQvtC90YbQtdGA0YIg0LTQu9GPINC60LvQsNGA0L3QtdGC0LAg4oSWMSzQhiDRhy47IDIpINCvLtCc0LXQtNC40L3RjNGILiDQoNC+0LzQsNC90YFcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMWtXQkhZVVlSbVhwbTVCQ0dXOWJudDh5OXJpeGdQUVo0L3ByZXZpZXdcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4YzhmNjY4M2RkYTQ3ZjhiNjE0MmJcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQndC+0LLRltC60L7QstCwINCcLtCcLlwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0J7QsdGALiDQlC7Ql9Cw0LTQvtGA0LAuICcn0KHQtdGA0LXQtCDRgdC10LvQsCDQtNC40YfQutCwJydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMTBhV1ZsT2UzRi1zc1FoVFZxa0ZuZzhHSktHSkV3VTgwL3ByZXZpZXdcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4YzhmNjY4M2RkYTQ3ZjhiNjE0MmNcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQndC+0LLRltC60L7QstCwINCcLtCcLiBcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCfLtCGLtCn0LDQudC60L7QstGB0YzQutC40LkuJyfQl9Cw0LHRi9GC0Ywg0YLQsNC6INGB0LrQvtGA0L4nJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xdHc1TU5VLTVmdVhRb1NPSHBXdGFHdkdqWnhjZk1BZm0vcHJldmlld1wiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOThjOGY2NjgzZGRhNDdmOGI2MTQyZFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCh0LjRgNC+0YLQsCDQni7QnC5cIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0Jou0JrRg9C00YDRj9Cy0YbQtdCyLiAnJ9Ce0LTQuNC9INC00LXQvdGMINC3INC20LjRgtGC0Y8g0LTRj9GC0LvQsCcnLCAyKdCeLtCR0LXRhi4nJ9Cj0LrRgNCw0ZfQvdGB0YzQutC1INGW0L3RgtC10YDQvNC10YbQvicnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFTZWpCMWlkX1BVN1hnLXc1ZnpLVXZKMEVvT25Gc0RNQy9wcmV2aWV3XCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9XTtcblxubGV0IGVuc2VtYmxlID0gW1xuICAgIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4ZDY0NzY4M2RkYTQ3ZjhiNjE0MzdcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQpC3QvdC40Lkg0LTRg9C10YIgKNCW0YPRgNCw0LLQtdC70Ywg0KEuLCDQkNGA0YLQtdC80LXQvdC60L4g0KEuKVwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQri7QqdGD0YDQvtCy0YHRjNC60LjQuS4gJyfQhtGB0L/QsNC90YHRjNC60LjQuSDRgtCw0L3QtdGG0YwnJywgMinQntCx0YAu0Jwu0J/QvtC/0L7QstCwLiAnJ9CE0LLRgNC10LnRgdGM0LrRliDQvNC+0YLQuNCy0LgnJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xS3ZjRUU3cVBTMHJhT0NxZDhzYU1FSG8teTBVRElwQ2gvcHJldmlld1wiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOThkNjQ3NjgzZGRhNDdmOGI2MTQzOFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCkLdC90LjQuSDQtNGD0LXRgiAgKNCf0LjQu9C40L/Rh9GD0Log0J0uLCDQmtCw0LLRg9C9INCELilcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEpINCSLtCQ0LvQtdC60YHQtdGU0LIuJycg0J3QsCDQv9GA0L7Qs9GD0LvRj9C90YbRlicnLCAyKdCeLtCf0LXRgtGA0L7QstCwLiAnJ9Cm0LjRgNC6JydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMW5FTG90d3FBejlDN2QwOUc0TlZCVnZiUnlLTDk1OHJzL3ByZXZpZXdcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4ZDY0NzY4M2RkYTQ3ZjhiNjE0MzlcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQpC3QvdC40Lkg0LTRg9C10YIgICjQoNCw0LTQutC+0LLRgdGM0LrQsCDQkC4sINCa0YPQt9GM0LzQuNGHKS4gXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQkC7QqNC90ZbRgtC60LUuICcn0KjQuNC90LXQu9GMJydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMU00cGF6TklfVHl2MnNETVc5b0I5UWVtMzZJNURSWnVSL3ByZXZpZXdcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4ZDY0NzY4M2RkYTQ3ZjhiNjE0M2FcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQpC3QvdC40Lkg0LTRg9C10YIgICjQoNCw0LTQutC+0LLRgdGM0LrQsCDQkC4sINCa0YPQt9GM0LzQuNGHKS4gXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQni4g0J3QsNGD0LzQtdC90LrQvi4nJ9Cn0LDRgSDQstC10LvQuNC60LjRhSDQvtGH0ZbQutGD0LLQsNC90YwnJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xTEJPZV93RmxDX3l6dF9GZmtSYkM4LTkwY1Z1M3N0Vk8vcHJldmlld1wiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOThkNjQ3NjgzZGRhNDdmOGI2MTQzYlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCkLdC90LjQuSDQtNGD0LXRgiAgKNCh0ZbQutC+0YDQsCDQoC4g0KfQtdGA0LXQv9GD0YnQsNC6INCcLikuIFwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQni7QndCw0YPQvNC10L3QutC+LiAnJ9Ca0L7Qu9C+0LzQuNC50LrQsCcnLCAyKdCVLtCT0YDRltCzLdCTLtCk0ZbRgNGC0LjRhy4nJ9Ci0LDQvdC10YbRjCDQkNC90ZbRgtGA0LgnJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xT1JUenctcGxlaFF2QUFPaW5PcmRxbkh0blVfb0NaajUvcHJldmlld1wiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOThkNjQ3NjgzZGRhNDdmOGI2MTQzY1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCkLdC90LjQuSDQtNGD0LXRgiAnJ015Y3JhZnQnJyAo0ITRgNC80L7Qu9C10L3QutC+INCULiwg0KjQuNCx0LDQvdC+0LLQsCDQki4pIFwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQnC7QodC60L7RgNC40LouICcn0JzQtdC70L7QtNGW0Y8nJywgICAgICAgICAyKdCeLtCl0YDQvtC80YPRiNC40L0uICcn0JTRgNGD0LrQsNGA0YHRjNC60LAg0LzQsNGI0LjQvdC60LAnJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xQXV2bzQ0YUJZVEczdkt4c1QyaFFEMGhta2cxRWRsYTcvcHJldmlld1wiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOThkNjQ3NjgzZGRhNDdmOGI2MTQzZFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCkLdC90LjQuSDQtNGD0LXRgiAo0JHQvtC90LTQsNGA0LXQvdC60L4g0JwuLCDQodC70ZbQvdGH0LXQvdC60L4g0K4uKSBcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCeLtCh0LXQutGA0LXRgi4nJ9Cf0YDQvtCz0YPQu9GP0L3QutCwINCU0L7QsdC10YDQvNCw0L3QsCcnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzExUVNBZGt3bjNpdTU0a1IzaHhuaDNIZzBDX3pwUC1aVS9wcmV2aWV3XCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5OGQ2NDc2ODNkZGE0N2Y4YjYxNDNlXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0KQt0L3QuNC5INC00YPQtdGCICjQkdC+0L3QtNCw0YDQtdC90LrQviDQnC4sINCh0LvRltC90YfQtdC90LrQviDQri4pIFwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0J8u0KfQsNC50LrQvtCy0YHRjNC60LjQuS4nJyDQhtGC0LDQu9GW0LnRgdGM0LrQsCDQv9GW0YHQtdC90YzQutCwJydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMVpULTN1Q3J6YkdKdE1jMG9Md3RnSnFUb3J6OWpEWWVzL3ByZXZpZXdcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4ZDY0NzY4M2RkYTQ3ZjhiNjE0M2ZcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQpC3QvdC40Lkg0LTRg9C10YIgKNCS0LDRiNGD0YDRltC90LAg0JIuLCDQhNC20L7QvdC60L7QsiDQkC4pLlwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSkg0JMu0JHRlNC70L7Qsi4nJ9Cj0YDQsNGB0ZbQvNCwINGWINCn0LDRgNGW0LLQvdCwINCn0LXRgNC10L/QsNGF0LAnJywgMinQni4g0J/QvtC70YzQvtCy0LjQuS4gJyfQn9C+0LTQvtGA0L7QtiDQsiDQkNC70YzQv9C4JydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMWpDaHZNQnJEd3l4S2szQUpFRUNTQkU3WV9rQ0xSaDhzL3ByZXZpZXdcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4ZDY0NzY4M2RkYTQ3ZjhiNjE0NDBcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQpC3QvdC40Lkg0LTRg9C10YIgKNCT0LXQvNCx0LjRhtGM0LrQsCDQni4sINCa0YPQt9C70L4g0JouKS5cIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0Jou0KXQvtCy0LDRgNC0LiAnJ9Cn0LDRgNC70YzRgdGC0L7QvScnLCAyKdCU0LYuINCo0ZbRgNGW0L3Qsy4gJyfQmtC+0LvQuNGB0LrQvtCy0LAnJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xdExOVmxodXJaVWRIeDQ0TWNoUzRxbTI1MWVTMzlyb1EvcHJldmlld1wiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOThkNjQ3NjgzZGRhNDdmOGI2MTQ0MVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCkLdC90LjQuSDQtNGD0LXRgiAo0JTQtdGA0Y/QsdGW0L3QsCDQoS4g0YLQsCDQktCw0YHQuNC70YzRlNCy0LAg0JIuKS5cIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0JAu0JTRltCw0LHQtdC70LvRli4g0KHQvtC90LDRgtCwINGA0LUg0LzQsNC20L7RgCwgMinQmy7QqNGD0LrQsNC50LvQvi4gJyfQk9GD0LzQvtGA0LXRgdC60LAnJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xeUpRQmZnN2NfQm9RcVhNbUFZcU5ZUUNuWXRhd1o5VG8vcHJldmlld1wiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOThkNjQ3NjgzZGRhNDdmOGI2MTQ0MlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCkLdC90LjQuSDQtNGD0LXRgiAo0JrRgNC40YjRgtCw0LvQvtCy0LjRhyDQnC4sINCa0YDQuNGI0YLQsNC70L7QstC40Ycg0IYuKSBcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCU0LYu0JPQtdGA0YjQstGW0L0uICcnQ2xhcCB5b3UgaGFuZCcnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFNQUplQlZuZnRFZGhjaW80N25EblVnY2pHR1R3SzhDai9wcmV2aWV3XCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5OGQ2NDc2ODNkZGE0N2Y4YjYxNDQzXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0KQt0L3QuNC5INC00YPQtdGCICjQmtGA0LjRiNGC0LDQu9C+0LLQuNGHINCcLiwg0JrRgNC40YjRgtCw0LvQvtCy0LjRhyDQhi4pXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIn0JrQvtC70Y/QtNC60LAnJywg0L7QsdGALiDQni7Ql9Cw0LrQsNC70Y7QttC90L7Rl1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xcHF4WVpUdkZ5cnJqNmRUcFQ1OFVVUFNPUEhNLWhadGUvcHJldmlld1wiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOThkNjQ3NjgzZGRhNDdmOGI2MTQ0NFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCkLdC90LjQuSDQtNGD0LXRgiAo0JvQsNC90YHRjNC60LjQuSDQhC4sINCb0LDQvdGB0YzQutCwINCeLilcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0JUu0JPRgNGW0LMuINCQ0YDRltGPINGW0Lcg0YHRjtGX0YLQuCAnJ9CXINGH0LDRgdGW0LIg0KXQvtC70YzQsdC10YDQs9CwJycsIDIp0JIu0J/RgtGD0YjQutGW0L0uICcn0JHRgNC10L3RhNC+0YDQtNGB0YzQutCwINCy0ZbQtNGM0LzQsCcnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzE4T1VzQ0dRQnMzSWhsWDZpdC1zM1R4dW8wN00zTnMwSC9wcmV2aWV3XCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5OGQ2NDc2ODNkZGE0N2Y4YjYxNDQ1XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0KQt0L3QuNC5INC00YPQtdGCICjQodC40LzQvtC90LXQvdC60L4g0KIuLCDQpNC10LTQuNC90LAg0JAuKVwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSkg0JTQti7Qk9C10YDRiNCy0ZbQvS4nJ9Ca0L7RhdCw0L3QuNC5INC80ZbQuScnOyAyKSDQny7QnNC+0YDRltCwLiAnJ9Cc0LDQvdGD0LXRgicnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFoVmVraDhfNU1PVUpEZ0p0WEk4aTRHQmRSUXdDQWVrdC9wcmV2aWV3XCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5OGQ2NDc2ODNkZGE0N2Y4YjYxNDQ2XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0KQt0L3QuNC5INC00YPQtdGCICjQodC60L7Qv9C10YbRjCDQkC4sINCc0YPRgNC30LDQuiDQri4pLiBcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCiLtCe0YHRgtC10L0uJyfQotCw0L3QtdGG0Ywg0LvRj9C70YzQvtC6JydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMUVGenlpanV3QUZOajh2LVRscmFpSV9Qa3VIR3FYOTRFL3ByZXZpZXdcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4ZDY0NzY4M2RkYTQ3ZjhiNjE0NDdcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQpC3QvdC40Lkg0LTRg9C10YIgKNCh0LrQvtC/0LXRhtGMINCQLiDQnNGD0YDQt9Cw0Log0K4uKSBcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCbLiDQltGD0LvRjNGU0LLQsC4nJ9Cf0YDQvtCz0YPQu9GP0L3QutCwINC3INGC0LDRgtC+0LwnJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xVlpyMlYtSHY4TUlGOEtXZ1pHZkpBeXVFRTdtYXFXb3AvcHJldmlld1wiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOThkNjQ3NjgzZGRhNDdmOGI2MTQ0OFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCkLdC90LjQuSDQtNGD0LXRgiAo0KLRgNC+0YbQtdC90LrQviDQkC4sINCv0LrRg9C90ZbQvdCwINCeLtCSLilcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0Jou0Jwu0JLQtdCx0LXRgC4g0KHQvtC90LDRgtCwINC00L4g0LzQsNC20L7RgCwg0IYg0YcuOyAyKdCQLtCa0L7QvNC70ZbQutC+0LLQsC4gJyfQodC/0L7Qs9Cw0LQnJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xYVlOQjhqSDBKeTRTUDN1ZkFjZVEtbUoyOWxQcl9yVHcvcHJldmlld1wiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOThkNjQ3NjgzZGRhNDdmOGI2MTQ0OVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCkLdC90LjQuSDQtNGD0LXRgiAo0KTRltC70ZbQv9C+0LIg0IYuLCDQnNCw0YDRh9C10L3QutC+INCbLilcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0Jku0KEu0JHQsNGFLicn0JbQsNGA0YInJyAyKdCcLtCb0LXQvtC90YLQvtCy0LjRhy4nJ9Cp0LXQtNGA0LjQuicnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFwaFdUeUlKYjdGenFOUUZlVXFFNXgxbFlGWjU5V3Vnei9wcmV2aWV3XCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5OGQ2NDc2ODNkZGE0N2Y4YjYxNDRhXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0KQt0L3QuNC5INC00YPQtdGCICjQpdC10LvQvNCw0L0g0JIuLCDQpdC10LvQvNCw0L0g0JIuKVwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQoy7Qk9GW0LvQu9C+0LouJyfQndCwINC/0LDRgNC40LfRjNC60L7QvNGDINCx0YPQu9GM0LLQsNGA0ZYnJywgMinQnS7QodC80ZbRgNC90L7QstCwLicn0JHRgNCw0LfQuNC70YzRgdGM0LrQuNC5INC60LDRgNC90LDQstCw0LsnJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xN2MzMkNJMG1fa05KWFprckhrWFFlNTJUZGZIV1BsNk8vcHJldmlld1wiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOThkNjQ3NjgzZGRhNDdmOGI2MTQ0YlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCkLdC90LjQuSDQutCy0LDRgNGC0LXRgiAnJ1Nmb3J6YW5kbycnLlwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiINCeLtCm0LjQs9Cw0L3QutC+0LIuICcn0KLRg9GB0YLQtdC/JydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMVVRa1oxMVVHVmxxaFIzc3JhZHBib1FwSzlFRXlhaXFvL3ByZXZpZXdcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4ZDY0NzY4M2RkYTQ3ZjhiNjE0NGNcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQpC3QvdC40Lkg0LrQstCw0YDRgtC10YIgJydTZm9yemFuZG8nJy5cIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCVLiDQk9GA0ZbQsy4nJ9CSINC/0LXRh9C10YDRliDQs9GW0YDRgdGM0LrQvtCz0L4g0LrQvtGA0L7Qu9GPJydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMVNUTG50OElVNW5sWS1HMWRxZmJLdVJhMUJfWjhUU2tZL3ByZXZpZXdcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4ZDY0NzY4M2RkYTQ3ZjhiNjE0NGRcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQpC3QvdC40Lkg0LTRg9C10YIgKNCS0LjRhdGA0LjRgdGCINCcLiwg0KTRlNC00L7RgdGU0ZTQsiDQnS4pXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxKdChLtCf0YDQvtC60L7RhCfRlNCyLiDQnNCw0YDRiCwgMinQki7Qm9GO0YLQvtGB0LvQsNCy0YHRjNC60LjQuS4g0JLQsNGA0ZbQsNGG0ZbRlyDQvdCwINGC0LXQvNGDINCf0LDQs9Cw0L3RltC90ZZcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMW56UkhYSkt0QWJkeDdQd2JCNWQ0WEZHeEJOY3RwTkVrL3ByZXZpZXdcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4ZDY0NzY4M2RkYTQ3ZjhiNjE0NGVcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQpC3QvdC40Lkg0LTRg9C10YIgKNCS0ZbRgtGO0Log0JIsINCR0LXRgNC10LfQvtCy0YHRjNC60LAg0IQuKVwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQmS7QkdCw0YUgKNCS0ZbQstCw0LvRjNC00ZYpLiDQmtC+0L3RhtC10YDRgiDQtNC70Y8g0L7RgNCz0LDQvdCwINC70Y8g0LzRltC90L7RgCwgMinQkC7QnyfRj9GG0L7Qu9C70LAuICcn0JvRltCx0LXRgNGC0LDQvdCz0L4nJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xbmYwMUVmNk9WT3lMQUpVVWpCWXlJS05zM01aZV9QRnYvcHJldmlld1wiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOThkNjQ3NjgzZGRhNDdmOGI2MTQ0ZlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCkLdC90LjQuSDQtNGD0LXRgiAo0JHQvtGA0L7QstC10YbRjCDQni4sINGW0LvRjtGB0YLRgNCw0YLQvtGAKVwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0Jku0KEu0JHQsNGFLicn0JDRgNGW0Y8nJyAoJyfQodGC0YDQsNGB0YLRliDQt9CwINCc0LDRgtCy0ZbRlNC8JycpXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFIMWFrUVVkUjdRS1JPNFAzaERZNl90WnRtZFNyazBKMS9wcmV2aWV3XCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5OGQ2NDc2ODNkZGE0N2Y4YjYxNDUwXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0KQt0L3QuNC5INC00YPQtdGCICjQkdC+0YDQvtCy0LXRhtGMINCeLizRltC70Y7RgdGC0YDQsNGC0L7RgCkuIFwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0Jou0J7RgNGELicn0J4s0KTQvtGA0YLRg9C90L4nJyAoJyfQmtCw0YDQvNGW0L3QsCDQkdGD0YDQsNC90LAnJylcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMTlrT0lCVGRJS0tRWjZuWFZnUGlaSDNZOG15Y1dwd0J5L3ByZXZpZXdcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4ZDY0NzY4M2RkYTQ3ZjhiNjE0NTFcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQpC3QvdC40Lkg0LTRg9C10YIgKNCa0LvQuNC80LXQvdC60L4g0JwuLCDQlNGW0L7RgNC00ZbRlNCy0LAg0JwuKVwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSkg0KEu0KDQsNGF0LzQsNC90ZbQvdC+0LIuICcn0JLQvtC60LDQu9GW0LcnJywgMinQlC7QnNGW0LnQvi4nJ9CR0YDQsNC30LjQu9GM0ZTRgNCwJydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMXU4MWRBQXRsRG9mcTRwbnlEdFlnLVN4R0I0akdCM3NFL3ByZXZpZXdcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4ZDY0NzY4M2RkYTQ3ZjhiNjE0NTJcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQpC3QvdC40Lkg0LTRg9C10YIgKNCa0L7Qt9Cw0Log0IYuLCDQotCw0ZTRgC3Qo9C70YzRj9C90L7QstCwINCaLikuIFwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiQS4gINCfJ9GP0YbRhtC+0LvQsC4gJyfQm9GW0LHQtdGA0YLQsNC90LPQvicnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzF5NllxRnRCUEdNbFh6RVFMOHV1M0JMNFVrck16ZTRqYi9wcmV2aWV3XCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5OGQ2NDc2ODNkZGE0N2Y4YjYxNDUzXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0KQt0L3QuNC5INC00YPQtdGCICjQmtC+0LfQsNC6INCGLiDRgtCwINCi0LDRlNGALdCj0LvRjNGP0L3QvtCy0LAg0JouKS4gXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQlS4g0JPRgNGW0LMuICcn0J3QvtGA0LLQtdC20YHRjNC60LjQuSDRgtCw0L3QtdGG0YwnJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xVHRmaTRtN1Axb3VOSkVIRFhpSm5hN1gzYmVRUHpyZnUvcHJldmlld1wiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOThkNjQ3NjgzZGRhNDdmOGI2MTQ1NFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCkLdC90LjQuSDQtNGD0LXRgiAo0JrQvtGB0YLQtdGH0LrQviDQkC4sINCa0L7QvdC00YDQsNGC0Y7QuiDQnC4gKS5cIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCcLiDQmi7QlNC10LHRjtGB0YHRli4gJyfQoyDRh9C+0LLQvdGWJydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMWhSV3pDTFhJVVU2WHBEV1ozRWlzSTdRNU5aSHpEZGlvL3ByZXZpZXdcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4ZDY0NzY4M2RkYTQ3ZjhiNjE0NTVcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQpC3QvdC40Lkg0LTRg9C10YIgKNCa0L7RgdGC0LXRh9C60L4g0JAuLCDQmtC+0L3QtNGA0LDRgtGO0Log0JwuKS5cIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCuLtCS0LXRgdC90Y/Qui4gJyfQmtCw0YDQu9GB0L7QvScnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFBMzFWclI1ZDVkWFQ4a1FXdE55R2t4Znk3YktJNU1EVS9wcmV2aWV3XCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5OGQ2NDc2ODNkZGE0N2Y4YjYxNDU2XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0KQt0L3QuNC5INC00YPQtdGCICjQnNCw0YbRltGU0LLRgdGM0LAg0JwuLCDQn9Cw0L/RltGU0LLQsCDQmi4pLiBcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEp0Jwu0JzQtdGC0L3QtdGALicn0KDQvtGB0ZbQudGB0YzQutC40Lkg0YXQvtGA0L7QstC+0LQnJywgMinQkC7QnyfRj9GG0YbQvtC70LAuJyfQktC10LvQuNC60LUg0YLQsNC90LPQvicnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzE2QW5nc2FzR3VBc2hvRFp5ZzlpZGxqQjh4b01EdjR2Qy9wcmV2aWV3XCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5OGQ2NDc2ODNkZGE0N2Y4YjYxNDU3XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0KQt0L3QuNC5INC00YPQtdGCICAo0JrQsNGB0Y/QvdC10L3QutC+INCeLtCSLiwg0JPQvtGA0LTRltGU0L3QutC+INCGLtCeLikgXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxKSDQkC7QkdCw0LHQsNC00LbQsNC90Y/QvS4gJyfQndC+0LrRgtGO0YDQvScnLCAyKdCuLiDQqdGD0YDQvtCy0YHRjNC60LjQuS4gJyfQk9GD0LzQvtGA0LjRgdGC0LjRh9C90LjQuSDRgtCw0L3QtdGG0YwnJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xX1NYQUZRRHdfQm00WUstcWN5NlhzNGtGb1c0SDNEYUkvcHJldmlld1wiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOThkNjQ3NjgzZGRhNDdmOGI2MTQ1OFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCkLdC90LjQuSDQtNGD0LXRgiAnJ9CV0LvQtdCz0ZbRjycnXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIgMSnQnC7QodC60L7RgNC40LouICcn0JzQtdC70L7QtNGW0Y8nJywgMinQmy7QmtCw0YDQv9C10L3QutC+Licn0JLRltC90L7Rh9C+0Log0YPQu9GO0LHQu9C10L3QuNGFINC80LXQu9C+0LTRltC5JydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMWNrWncwSHNzaXlFZGJTU0hCcU95YXdxU2Z0QWsxd1VqL3ByZXZpZXdcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4ZDY0NzY4M2RkYTQ3ZjhiNjE0NTlcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQpC3QvdC40Lkg0LTRg9C10YIgKNCT0YDQuNCz0L7RgCfRlNCy0LAg0JMu0JAuICwg0K/QutGD0L3RltC90LAg0J4u0JIuKVwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQpC7QqNGD0LHQtdGA0YIuJyfQktGW0LnRgdGM0LrQvtCy0LjQuSDQvNCw0YDRiCcnIDIp0JAu0JrQvtC80LvRltC60L7QstCwLiAnJ9Cd0LAg0LzQsNGB0LrQsNGA0LDQtNGWJydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMVVDYUpfcVlVYXB5TS1IQmhydVdiLWg3SUZ5U3FrX3NVL3ByZXZpZXdcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4ZDY0NzY4M2RkYTQ3ZjhiNjE0NWFcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQpC3QvdC40Lkg0LTRg9C10YIgKNCa0L7RgdC10L3QutC+INCeLtCSLiwg0JrQsNGB0YPQvNC+0LLQsCDQni7QlC4pLlwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQkC4g0KbRhNCw0YHQvNCw0L0uICcn0JvRltGA0LjRh9C90LjQuSDQstCw0LvRjNGBJycsIDIp0Jwu0JzRltC90LrQvtCyLiAnJ9Ch0YLQsNGA0LjQuSDRgNC+0Y/Qu9GMJydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMXpHT0t1bnhJb0hkM1VqNUZIdmRXeU4tcnZXRjduNlYtL3ByZXZpZXdcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4ZDY0NzY4M2RkYTQ3ZjhiNjE0NWJcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQpC3QvdC40Lkg0LrQstCw0YDRgtC10YIgICjQktCw0YHQtdC90LrQviDQoS4sINCS0LDRgdC10L3QutC+INCcLiwg0KXQsNCy0LDQu9C60L4g0KIuLNCR0LjRh9C60L7QsifRj9C6INCaLikuIFwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMSnQkC7QktGW0LLQsNC70YzQtNGWLicn0JfQuNC80LAnJzsgMinQpC7QnNC10YDQuifRjtGA0LAuJyfQkdC+0LPQtdC80L3QsCDRgNCw0L/RgdC+0LTRltGPJydcIixcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMUI5Nm5FQzN2S1lSZDhPZ1RYZ1BpVlZYOFZCLU1TU2RZL3ByZXZpZXdcIixcbiAgICAgICAgXCJncm91cFwiOiBcItCw0YDRhdGW0LJcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCI2MDk4ZDY0NzY4M2RkYTQ3ZjhiNjE0NWNcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjogXCLQpC3QvdC40Lkg0LrQstCw0YDRgtC10YIgJydBTExBIEJSRVZFJycuXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQhi7QodGC0YDQsNCy0ZbQvdGB0YzQutC40Lku0KTRgNCw0LPQvNC10L3RgiDRltC3INCx0LDQu9C10YLRgyAnJ9Cf0LXRgtGA0YPRiNC60LAnJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xYmlmVzhPQnYxRTYxcWQxODRFYUpqc3ZPdHJYclJya1YvcHJldmlld1wiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOThkNjQ3NjgzZGRhNDdmOGI2MTQ1ZFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCkLdC90LjQuSDQutCy0LDRgNGC0LXRgiAnJ0FMTEEgQlJFVkUnJy5cIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCaLtCT0YPRgNC70ZbRgtGCLicn0JLRltC00LXQvdGB0YzQutC40Lkg0LLQsNC70YzRgScnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFRakJyS1dUa0NiaVM5RWo1azRwSGJIUkRzTjJEMWNhTS9wcmV2aWV3XCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiNjA5OGQ2NDc2ODNkZGE0N2Y4YjYxNDVlXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IFwi0KTQvtGA0YLQtdC/0ZbQsNC90L3QuNC5INCw0L3RgdCw0LzQsdC70YwgJyfQldCa0KHQn9Cg0JXQodCG0K8nJy5cIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCeLtCd0LDRg9C80LXQvdC60L4uIDEpJyfQp9Cw0YHQuCDQstC10LvQuNC60LjRhSDRgdC/0L7QtNGW0LLQsNC90YwnJywgMinQkC7QnyfRj9GG0YbQvtC70LAuICcn0JvRltCx0LXRgNGC0LDQvdCz0L4nJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xaVVsWUtySUtzSjFpbnVDcUFPUzBNWTRMcUdybWNwX2svcHJldmlld1wiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOThkNjQ3NjgzZGRhNDdmOGI2MTQ1ZlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCk0L7RgNGC0LXQv9GW0LDQvdC90LjQuSDQutCy0LDRgNGC0LXRgiAo0KnRg9C60ZbQvdCwINCeLizQodC10YDQtNGO0Log0JMuLCDQqNCw0L/QvtCy0LDQuyDQni4sINCc0LDQutGB0LjQvNC10L3QutC+INCSLilcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEpINCbLtCb0LDQstGW0L3RjNGP0LouJyfQk9Cw0LvQvtC/LdC80LDRgNGIJyc7IDIp0JMu0JPRg9GA0LvRltGCLiDQndC+0LrRgtGO0YDQvVwiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xSVliTklDMkV4Nk54eE04eW1iQ3RMMm11UEFRNFJoTWcvcHJldmlld1wiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOThkNjQ3NjgzZGRhNDdmOGI2MTQ2MFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCkLdC90LjQuSDQsNC90YHQsNC80LHQu9GMICgg0KHQvNC40Log0Jsu0K4uLNCo0LXQutC10LvRjCDQni7Qni4pLiBcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCaLiDQk9GD0LDRgdGC0LDQstGW0L3Qvi4gJyfQoNC+0LzQsNC90YEnJ1wiLFxuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xZEhCem5EbXBFLTB2V3lyeU1mODZYQ2tGYjhzUF9IWV8vcHJldmlld1wiLFxuICAgICAgICBcImdyb3VwXCI6IFwi0LDRgNGF0ZbQslwiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjYwOThkNjQ3NjgzZGRhNDdmOGI2MTQ2MVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiBcItCkLdC90LjQuSDQsNC90YHQsNC80LHQu9GMICjQodC80LjQuiDQmy7Qri4sINCo0LXQutC10LvRjCDQni7Qni4pLiBcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCeLtCm0YTQsNGB0LzQsNC9Licn0KHQvdGW0LbQuNC90LrQuCcnXCIsXG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzE5UFRlLUpfY1M2RFRTTzZpWkZpeGdiNWc0WnhwYXpSVC9wcmV2aWV3XCIsXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQsNGA0YXRltCyXCJcbiAgICB9XG5dO1xuXG5leHBvcnQgbGV0IGFyY2hpdmUgPSBteUNhcmRzLmNvbmNhdChjb25jZXJ0bWFzdGVycykuY29uY2F0KGVuc2VtYmxlKSIsImltcG9ydCB7Y3JlYXRlU3RvcmV9IGZyb20gJ3JlZHV4J1xuaW1wb3J0IHthcmNoaXZlfSBmcm9tIFwiLi9BcmNoaXZlXCI7XG5pbXBvcnQge2ZvcnRlcGlhbm9Tb2xvfSBmcm9tIFwiLi9Gb3J0ZXBpYW5vU29sb1wiO1xuXG5jb25zdCBncm91cDEgPSBg0J3QvtC80ZbQvdCw0YbRltGPIFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cImA7XG5jb25zdCBncm91cDIgPSBg0J3QvtC80ZbQvdCw0YbRltGPIFwi0KTQvtGA0YLQtdC/0ZbQsNC90L3QuNC5INCw0L3RgdCw0LzQsdC70YxcImA7XG5jb25zdCBncm91cDMgPSBg0J3QvtC80ZbQvdCw0YbRltGPIFwi0JrQvtC90YbQtdGA0YLQvNC10LnRgdGC0LXRgFwiYDtcblxubGV0IG15Q2FyZHMgPSBhcmNoaXZlO1xubXlDYXJkcyA9IG15Q2FyZHMuY29uY2F0KGZvcnRlcGlhbm9Tb2xvKVxuXG4vKiogQ09ERSAqKi9cbmZ1bmN0aW9uIGZpbG1SZWR1Y2VyKHN0YXRlID0ge2NhcmRDb3VudDogbXlDYXJkcy5sZW5ndGgsIGNhcmRzOiBteUNhcmRzLCBpc0RhdGFJblBsYWNlOiB0cnVlLCBlcnJvcjogXCJcIn0sIGFjdGlvbikge1xuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgICAgY2FzZSAnUkZTX1BBR0UnOlxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBjYXJkQ291bnQ6IC0yLFxuICAgICAgICAgICAgICAgIGNhcmRzOiBbXSxcbiAgICAgICAgICAgICAgICBpc0RhdGFJblBsYWNlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBlcnJvcjogXCJcIlxuICAgICAgICAgICAgfTtcbiAgICAgICAgY2FzZSAnSU5GT19QQUdFJzpcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgY2FyZENvdW50OiAtMSxcbiAgICAgICAgICAgICAgICBjYXJkczogW10sXG4gICAgICAgICAgICAgICAgaXNEYXRhSW5QbGFjZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgZXJyb3I6IFwiXCJcbiAgICAgICAgICAgIH07XG4gICAgICAgIGNhc2UgJ0FSQ0hJVkUnOlxuICAgICAgICAgICAgY29uc29sZS5sb2coXCI+INCQ0YDRhdGW0LJcIik7XG4gICAgICAgICAgICBsZXQgYXJjaGl2ZUNhcmRzID0gbXlDYXJkcy5maWx0ZXIoY2FyZCA9PiBjYXJkLmdyb3VwID09PSBcItCw0YDRhdGW0LJcIikuc2xpY2UoKTtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgY2FyZHM6IGFyY2hpdmVDYXJkcyxcbiAgICAgICAgICAgICAgICBpc0RhdGFJblBsYWNlOiB0cnVlLFxuICAgICAgICAgICAgICAgIGNhcmRDb3VudDogbXlDYXJkcy5sZW5ndGgsXG4gICAgICAgICAgICAgICAgZXJyb3I6IFwiXCJcbiAgICAgICAgICAgIH07XG4gICAgICAgIGNhc2UgJ0FMTCc6XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIj4g0KPRgdGWINCy0ZbQtNC10L5cIik7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGNhcmRzOiBteUNhcmRzLFxuICAgICAgICAgICAgICAgIGlzRGF0YUluUGxhY2U6IHRydWUsXG4gICAgICAgICAgICAgICAgY2FyZENvdW50OiBteUNhcmRzLmxlbmd0aCxcbiAgICAgICAgICAgICAgICBlcnJvcjogXCJcIlxuICAgICAgICAgICAgfTtcbiAgICAgICAgY2FzZSAnZ3JvdXAtMSc6XG4gICAgICAgICAgICBsZXQgbmV3Q2FyZHMgPSBteUNhcmRzLmZpbHRlcihjYXJkID0+IGNhcmQuZ3JvdXAgPT09IGdyb3VwMSkuc2xpY2UoKTtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgY2FyZHM6IG5ld0NhcmRzLFxuICAgICAgICAgICAgICAgIGlzRGF0YUluUGxhY2U6IHRydWUsXG4gICAgICAgICAgICAgICAgY2FyZENvdW50OiBuZXdDYXJkcy5sZW5ndGgsXG4gICAgICAgICAgICAgICAgZXJyb3I6IFwiXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgY2FzZSAnZ3JvdXAtMic6XG4gICAgICAgICAgICBsZXQgbmV3Q2FyZHMxID0gbXlDYXJkcy5maWx0ZXIoY2FyZCA9PiBjYXJkLmdyb3VwID09PSBncm91cDIpLnNsaWNlKCk7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGNhcmRzOiBuZXdDYXJkczEsXG4gICAgICAgICAgICAgICAgaXNEYXRhSW5QbGFjZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBjYXJkQ291bnQ6IG5ld0NhcmRzMS5sZW5ndGgsXG4gICAgICAgICAgICAgICAgZXJyb3I6IFwiXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgY2FzZSAnZ3JvdXAtMyc6XG4gICAgICAgICAgICBsZXQgbmV3Q2FyZHMyID0gbXlDYXJkcy5maWx0ZXIoY2FyZCA9PiBjYXJkLmdyb3VwID09PSBncm91cDMpLnNsaWNlKCk7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGNhcmRzOiBuZXdDYXJkczIsXG4gICAgICAgICAgICAgICAgaXNEYXRhSW5QbGFjZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBjYXJkQ291bnQ6IG5ld0NhcmRzMi5sZW5ndGgsXG4gICAgICAgICAgICAgICAgZXJyb3I6IFwiXCIsXG4gICAgICAgICAgICB9XG4gICAgICAgIGNhc2UgJ1NFQVJDSCc6XG4gICAgICAgICAgICBsZXQgcSA9IGFjdGlvbi5xdWVyeS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coYD4g0J/QvtGI0YPQujogJHtxfWApO1xuICAgICAgICAgICAgbGV0IG5ld0NhcmRzMyA9IG15Q2FyZHMuZmlsdGVyKGNhcmQgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBjYXJkTmFtZSA9IGNhcmQubmFtZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgICAgICAgIGxldCBib29sID0gKGNhcmROYW1lLnN0YXJ0c1dpdGgocSkgfHwgY2FyZE5hbWUuaW5jbHVkZXMocSkpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBUZXN0aW5nICR7Y2FyZE5hbWV9IG9uIHF1ZXJ5ICR7cX0sIHJlc3VsdCBpcyAke2Jvb2x9YClcbiAgICAgICAgICAgICAgICByZXR1cm4gYm9vbDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgICAgICBjYXJkczogbmV3Q2FyZHMzLFxuICAgICAgICAgICAgICAgIGlzRGF0YUluUGxhY2U6IHRydWUsXG4gICAgICAgICAgICAgICAgY2FyZENvdW50OiBuZXdDYXJkczMubGVuZ3RoLFxuICAgICAgICAgICAgICAgIGVycm9yOiBcIlwiXG4gICAgICAgICAgICB9XG4gICAgICAgIGNhc2UgJ0VSUk9SJzpcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGA+INCf0L7QvNC40LvQutCwYCk7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGVycm9yOiBhY3Rpb24ubXNnLFxuICAgICAgICAgICAgICAgIGNhcmRDb3VudDogMSxcbiAgICAgICAgICAgICAgICBjYXJkczogW10sXG4gICAgICAgICAgICAgICAgaXNEYXRhSW5QbGFjZTogdHJ1ZSxcbiAgICAgICAgICAgIH1cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgY2FyZHM6IG15Q2FyZHMsXG4gICAgICAgICAgICAgICAgaXNEYXRhSW5QbGFjZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBjYXJkQ291bnQ6IG15Q2FyZHMubGVuZ3RoLFxuICAgICAgICAgICAgICAgIGVycm9yOiBcIlwiXG4gICAgICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgY29uc3QgY2FyZFN0b3JlID0gY3JlYXRlU3RvcmUoZmlsbVJlZHVjZXIpO1xuXG5jYXJkU3RvcmUuc3Vic2NyaWJlKCgpID0+XG4gICAgY29uc29sZS5sb2coXCJGaWxtc1N0b3JlIHN0YXRlIHdhcyBjaGFuZ2VkLCBudW1iZXIgb2YgY2FyZHM6IFwiICsgY2FyZFN0b3JlLmdldFN0YXRlKCkuY2FyZENvdW50KVxuKTtcblxuXG5cblxuXG4iLCJleHBvcnQgbGV0IGZvcnRlcGlhbm9Tb2xvID0gW1xuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHViZS5jb20vc2hvcnRzL1ZIdFl2NlhvMjhFP2ZlYXR1cmU9c2hhcmVcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCSLiDQlNCw0LzQutC+0LzQsS4g0KHQvtC90LDRgtC40L3QsCDQtNC+INC80LDQttC+0YAsINCGINGH0LDRgdGC0LjQvdCwXCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCS0LDRiNC40YDQtdC90LrQviDQlNGW0LDQvdCwLCAxMi4xMC4yMDEzINGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjMwODMxODcyOTcwMzQyXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHUuYmUvaTYzYlhIeUtXb0FcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCcLiDQqNC10L3RgtGO0YDQuiAo0KLQtdGA0LXRidGD0LopLiDCq9Cc0LXQvdGD0LXRgiDQs9GA0LDRhtGW0LnQvdC+0Zcg0LHQsNC70LXRgNC40L3QuMK7XCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCS0LDRiNC40YDQtdC90LrQviDQlNGW0LDQvdCwLCAxMi4xMC4yMDEzINGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjMwODMxODczMDYwMjc5XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHUuYmUvNkVkUzJHMFZIY2dcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCZLiDQkdCw0YUuINCc0LXQvdGD0LXRgiDRgdC+0LvRjCDQvNCw0LbQvtGAXCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCS0L7QstC6INCQ0YDRgtGD0YAsIDIwLjEwLjIwMTQg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiMzA4MzE4NzMxMjE3MTNcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly95b3V0dS5iZS9MRlM1cmpsRmYzUVwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0JwuINCW0LXRgNCx0ZbQvS4gwqvQo9C60YDQsNGX0L3RgdGM0LrQuNC5INGC0LDQvdC10YbRjMK7XCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCS0L7QstC6INCQ0YDRgtGD0YAsIDIwLjEwLjIwMTQg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiMzA4MzE4NzMxNzY4ODVcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly95b3V0dS5iZS9xVHhuelFxRlJaWVwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0JkuINCR0LDRhS4gwqvQnNCw0LvQtdC90YzQutCwINC/0YDQtdC70Y7QtNGW0Y/CuyDRgdC+0LvRjCDQvNGW0L3QvtGAXCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCW0LjRgtCw0YDRjtC6INCa0ZbRgNCwLCAxMC4wOS4yMDEzINGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjMwODMxODczMjI5NTA0XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHUuYmUvY1JiczlETy1NNThcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCQLiDQpdGD0YLQvtGA0Y/QvdGB0YzQutC40LkuIMKr0JLQvtCz0L3RltCy0L7Rh9C60LAt0YHRgtGA0LjQsdGD0L3RltCy0L7Rh9C60LDCu1wiLFxuICAgICAgICBcIm5hbWVcIjogXCLQltC40YLQsNGA0Y7QuiDQmtGW0YDQsCwgMTAuMDkuMjAxMyDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCIzMDgzMTg3MzMxNzI2OFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1LmJlL2Fub2hlcVF3X1ZvXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQmy4g0KjRg9C60LDQudC70L4uIMKr0JvQtdCx0ZbQtNGMwrtcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0JrQuNGB0LXQu9GM0L7QstCwINCE0LvQuNC30LDQstC10YLQsCwgMTEuMDEuMjAxNCDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCIzMDgzMTg3MzM2MjkzOVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1LmJlL1duWlk2bjlDbl80XCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQni4g0JPQtdC00ZbQutC1LiDQldGC0Y7QtCDQtNC+INC80LDQttC+0YBcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0JrQuNGB0LXQu9GM0L7QstCwINCE0LvQuNC30LDQstC10YLQsCwgMTEuMDEuMjAxNCDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCIzMDgzMTg3MzQwMDY0NlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1LmJlLzBpTW9hZTJqYXBvXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQoS4g0JzQsNC50LrQsNC/0LDRgC4gwqvQkiDQutGD0LfQvdGWwrs7INCRLiDQpNGA0LXQtC4gwqvQotCw0L3QtdGG0Ywg0LXQu9GM0YTRltCywrtcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0JrRgNCw0LLRh9GD0Log0JzRltC70LDQvdCwLCAwOS4wMS4yMDE1INGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjMwODMxODczNDYyNzk2XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHUuYmUvUlV4Wkk0aTlLZ2NcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCfLiDQl9Cw0YXQsNGA0L7Qsi4gwqvQmtCw0YDRg9GB0LXQu9GMwrtcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0JvRltC/0LrQsNC9INCQ0LvRltC90LAsIDEwLjEwLjIwMTQg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiMzA4MzE4NzM0OTgyMTBcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly95b3V0dS5iZS9DV3Q5Q0pKbGpmNFwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0JEuINCk0ZbQu9GM0YYuIMKr0JTRgNC10LLQvdGPINC60LDQt9C60LDCu1wiLFxuICAgICAgICBcIm5hbWVcIjogXCLQm9GW0L/QutCw0L0g0JDQu9GW0L3QsCwgMTAuMTAuMjAxNCDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCIzMDgzMTg3MzU0NTgyOVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1LmJlL2wyQnVqQ000eWRrXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQry4g0JHQvtCx0LDQu9GW0LouIMKr0JbRg9GA0LDQstC70LjQvdCwINC/0ZbRgdC90Y/Cuzsg0JIuINCR0LDRgNCy0ZbQvdGB0YzQutC40LkuIMKr0KHQvtC90LXRh9C60L7Cu1wiLFxuICAgICAgICBcIm5hbWVcIjogXCLQm9GP0YjQuNC6INCQ0L3QvdCwLCAxNi4wNi4yMDEzINGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjMwODMxODczNTg3NDM2XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHUuYmUvT2FBZDBIT0FFdFlcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCZLtChLiDQkdCw0YUuIMKr0JzQsNC70LXQvdGM0LrQsCDQv9GA0LXQu9GO0LTRltGPwrsg0LTQviDQvNGW0L3QvtGAOyDQoS4g0JHQvtGA0YLQutC10LLQuNGHLiDCq9CjINGB0LrQu9C10L/RltC90L3RlsK7OyDQmi4g0KfQtdGA0L3Rli4g0JXRgtGO0LQg0YDQtSDQvNCw0LbQvtGALCDRgtCyLiAzOTlcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0JzQsNGA0YPRidCw0Log0JLQtdGA0L7QvdGW0LrQsCwgMjIuMDcuMjAxMyDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCIzMDgzMTg3MzY1Mjg3NFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1YmUuY29tL3dhdGNoP3Y9SXRhNXk5eWJVMjgmZmVhdHVyZT1zaGFyZVwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0JsuINCR0LXRgtGF0L7QstC10L0uINCh0L7QvdCw0YLQuNC90LBcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0JzQuNGC0Y7QuiDQkNGA0YHQtdC9LCAyNy4wNi4yMDE0INGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjMwODMxODczNzE1MTcwXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHViZS5jb20vd2F0Y2g/dj1zSnYzUFo4UnRTOCZmZWF0dXJlPXNoYXJlXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQki4g0JrQvtGB0LXQvdC60L4uINCh0LrQtdGA0YbQuNC90L5cIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0JzQuNGC0Y7QuiDQkNGA0YHQtdC9LCAyNy4wNi4yMDE0INGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjMwODMxODczNzUxMzg4XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHUuYmUveFBKdlVzSGJ0a1lcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCcLiDQktC10YDQsdC40YbRjNC60LjQuSwg0LDRgNCw0L3Qti4g0J4uINCo0LDQstCw0YDQtNCw0LrQsC4gwqvQk9GW0LzQvSDQo9C60YDQsNGX0L3QuMK7XCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCe0LfRltC90LrQvtCy0YHRjNC60LAg0JLRltC60YLQvtGA0ZbRjywgMjIuMDcuMjAxMyDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCIzMDgzMTg3Mzc5NTIzMVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1LmJlL1VBOGF1R1FCZzZRXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQri4g0KnRg9GA0L7QstGB0YzQutC40LkuIMKr0KjQsNGA0LzQsNC90LrQsMK7XCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCe0LfRltC90LrQvtCy0YHRjNC60LAg0JLRltC60YLQvtGA0ZbRjywgMjIuMDcuMjAxMyDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCIzMDgzMTg3MzgzOTE4MlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1LmJlL21BdWNQSTdWbUgwXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQmi4g0KDQtdC50L3QtdC60LUuINCh0L7QvdCw0YLQuNC90LAg0YHQvtC70Ywg0LzQsNC20L7RgCwg0IYg0YfQsNGB0YLQuNC90LBcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0J7RgdC40LrQsCDQoNC+0LzQsNC9LCAyNS4wNi4yMDE0INGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjMwODMxODczODc4MTIxXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHUuYmUvMWFHN1h5bGR6LUVcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCj0LrRgNCw0ZfQvdGB0YzQutCwINC90LDRgNC+0LTQvdCwINC/0ZbRgdC90Y8g0LIg0L7QsdGA0L7QsdGG0ZYg0JMuINCR0LXQt1xcdTIwMTnRj9C30LjRh9C90L7Qs9C+IMKr0IfRhdCw0LIg0LrQvtC30LDQuiDQvdCwINCy0ZbQudC90L7QvdGM0LrRg8K7XCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCe0YHQuNC60LAg0KDQvtC80LDQvSwgMjUuMDYuMjAxNCDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCIzMDgzMTg3MzkxODAxNFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1YmUuY29tL3Nob3J0cy9fV2RHZlNJbXlGNFwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0K4uINCX0YPQsdCw0LkgwqvQkdCw0LHRg9GB0Y8g0K/Qs9GD0YHRj8K7XCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCe0YHRgtCw0L/Rh9GD0Log0JrQsNGC0LXRgNC40L3QsCwgMTEuMDguMjAxMyDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCIzMDgzMTg3Mzk0OTI5MFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1LmJlL00wbnhxaVhkZnpvXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQki4g0JPRltC70LvQvtC6LiDQodCw0YDQsNCx0LDQvdC00LBcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0J7RgdGC0LDQv9GH0YPQuiDQmtCw0YLQtdGA0LjQvdCwLCAxMS4wOC4yMDEzINGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjMwODMxODc0MDEwNDk0XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHViZS5jb20vc2hvcnRzL01TM2pJcG9JRlk0P2ZlYXR1cmU9c2hhcmVcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCQLiDQoNC+0YPQu9GWLiDCq9Ca0LjRgtCw0LnRgdGM0LrQuNC5INGF0LvQvtC/0YfQuNC6wrtcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0J/QsNGA0YXQvtC80LXQvdC60L4g0ITQstCz0LXQvdGW0Y8sIDA4LjA0LjIwMTYg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiMzA4MzE4NzQwOTIzNzdcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly95b3V0dWJlLmNvbS9zaG9ydHMvMG41eXl6MEY5a2c/ZmVhdHVyZT1zaGFyZVwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0JsuINCo0LjRgtGC0LUuIMKr0J3QsCDRgdC60LXQudGC0LHQvtGA0LTRlsK7XCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCf0LDRgNGF0L7QvNC10L3QutC+INCE0LLQs9C10L3RltGPLCAwOC4wNC4yMDE2INGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjMwODMxODc0MTg5OTIzXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHUuYmUvTlgyVmFmU3dIU0FcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCfLiDQl9Cw0YXQsNGA0L7Qsi4gwqvQotCw0L3QtdGG0Ywg0LzQsNC70LXQvdGM0LrQuNGFINC30ZbRgNC+0YfQvtC6wrtcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0J/RltGB0L7RhtGM0LrQsCDQodC+0LvQvtC80ZbRjywgMjkuMDMuMjAxNiDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCIzMDgzMTg3NDI0MjA2NlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1YmUuY29tL3Nob3J0cy9qeF9vellzTDVFUT9mZWF0dXJlPXNoYXJlXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQhi4g0IbQvtGA0LTQsNC9LiDCq9Cf0L7Qu9GO0LLQsNC90L3RjyDQvdCwINC80LXRgtC10LvQuNC60LDCu1wiLFxuICAgICAgICBcIm5hbWVcIjogXCLQn9GW0YHQvtGG0YzQutCwINCh0L7Qu9C+0LzRltGPLCAyOS4wMy4yMDE2INGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjMwODMxODc0Mjg0OTI0XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHViZS5jb20vc2hvcnRzL3RPZVFULVVJS21BP2ZlYXR1cmU9c2hhcmVcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCcLiDQqNC10L3RgtGO0YDQuiAo0KLQtdGA0LXRidGD0LopLiDCq9CT0YDQsNC50LvQuNCy0LUg0LfQsNC50YfQtdC90Y/RgtC60L7Cu1wiLFxuICAgICAgICBcIm5hbWVcIjogXCLQn9GA0LjQvNCw0Log0K7Qu9GW0Y8sIDAyLjAzLjIwMTQg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiMzA4MzE4NzQzMjA1MjdcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly95b3V0dS5iZS9sTjRadjQ4d1BuWVwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0JIuINCT0ZbQu9C70L7Qui4gwqtEcmlmdGluZyBjbG91ZHPCu1wiLFxuICAgICAgICBcIm5hbWVcIjogXCLQn9GA0LjQvNCw0Log0K7Qu9GW0Y8sIDAyLjAzLjIwMTQg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiMzA4MzE4NzQzNTI5NjRcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly95b3V0dS5iZS91TFEwWXN0X1Q0WVwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0JAuINCQ0L3QtNGA0LUuINCh0L7QvdCw0YLQuNC90LAg0YHQvtC70Ywg0LzQsNC20L7RgCwg0IYg0YfQsNGB0YLQuNC90LBcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0KHQsNC00L7QstC90ZbQuiDQldGB0YTRltGALCAyNS4wNi4yMDE0INGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjMwODMxODc0NDA3NTY3XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHUuYmUvdmFYT2o3NEdqSk1cIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCcLiDQldC60YjRgtC10LnQvS4gwqvQmtCw0L/RgNC40Lcg0LPQvdC+0LzRltCywrtcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0KHQsNC00L7QstC90ZbQuiDQldGB0YTRltGALCAyNS4wNi4yMDE0INGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjMwODMxODc0NDUzNTQxXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHUuYmUvMVJLNXZ5TnRMZXdcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCgLiDQqNGD0LzQsNC9LiDCq9Cf0LXRgNGI0LAg0LLRgtGA0LDRgtCwwrtcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0KHQsNC00L7QstC90ZbQuiDQldGB0YTRltGALCAyNS4wNi4yMDE0INGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjMwODMxODc0NDg4NDY2XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHUuYmUvQklJb01vR2ptQ1FcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCvLiDQkdC+0LHQsNC70ZbQui4gwqvQotCw0LrQuNC5INGH0YPQtNC+0LLQuNC5INCy0LXRh9GW0YDCu1wiLFxuICAgICAgICBcIm5hbWVcIjogXCLQodC10LzQtdC90YfRg9C6INCS0LXRgNC+0L3RltC60LAsMzAuMTEuMjAxMyDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCIzMDgzMTg3NDUzMTIxNVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1LmJlL0dRWkdGUjc1RmxZXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQki4g0JTQsNC80LrQvtC80LEuINCh0L7QvdCw0YLQuNC90LAg0LTQviDQvNCw0LbQvtGALCDQhtCGLNCG0IbQhiDRh9Cw0YHRgtC40L3QuFwiLFxuICAgICAgICBcIm5hbWVcIjogXCLQodC10LzQtdC90YfRg9C6INCS0LXRgNC+0L3RltC60LAsMzAuMTEuMjAxMyDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCIzMDgzMTg3NDU3MzY1MFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3d3dy55b3V0dWJlLmNvbS93YXRjaD92PWRrT0NoQ2RObUNRXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQki4g0J/QvtC70Y/QvdGB0YzQutC40LkuIMKr0JrQstGW0YLQtdC90YwuINCS0ZbRgtC10YDQtdGG0Ywg0L/QvtCy0ZbRj9Cywrsg0Lcg0YbQuNC60LvRgyDCq9Cf0L7RgNC4INGA0L7QutGDLiAxMiDQv1xcdTIwMTnRlNGBINC00LvRjyDRhNC+0YDRgtC10L/RltCw0L3QviDQsiDQtNC20LDQt9C+0LLQuNGFINGC0L7QvdCw0YXCu1wiLFxuICAgICAgICBcIm5hbWVcIjogXCLQodC80ZbRgNC90L7QstCwINCQ0LvRltGB0LAsIDEyLjAxLjIwMTQg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiMzA4MzE4NzQ2Mzc1OTJcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly93d3cueW91dHViZS5jb20vd2F0Y2g/dj1VS3d3UzlzaUw0MFwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0JouINCn0LXRgNC90ZYuINCh0L7QvdCw0YLQuNC90LAg0LTQviDQvNCw0LbQvtGAXCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCh0LzRltGA0L3QvtCy0LAg0JDQu9GW0YHQsCwgMTIuMDEuMjAxNCDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCIzMDgzMTg3NDY5MDUxNFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1LmJlLzM2bFd3dk5YbkNrXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxLiDQmy4g0KjRg9C60LDQudC70L4uINCf0YDQtdC70Y7QtNGW0Y8g0LTQviDQvNCw0LbQvtGAOyDQmy4g0JHQtdGC0YXQvtCy0LXQvS4gMi4g0KHQvtC90LDRgtC40L3QsCDRgdC+0LvRjCDQvNCw0LbQvtGALCDQhiDRh9Cw0YHRgtC40L3QsFwiLFxuICAgICAgICBcIm5hbWVcIjogXCLQotC10L/Qu9C40YbRjNC60LAg0JfQu9Cw0YLQsCwgMDUuMDQuMjAxNSDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCIzMDgzMTg3NDczODk3MFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1LmJlL1JKZlhKWWpCM3NzXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxLiDQhi4g0JrRg9C70LDRgy4g0KHQvtC90LDRgtC40L3QsCDRgdC+0LvRjCDQvNCw0LbQvtGALCDQhiDRh9Cw0YHRgtC40L3QsDsgMi4g0JIuINCT0ZbQu9C70L7Qui4gwqvQmtC+0LvRltCx0YDRlsK7XCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCi0LrQsNGH0LXQvdC60L4g0JTRltCw0L3QsCwgMjAuMDguMjAxMyDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCIzMDgzMTg3NDc4MjEyM1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1LmJlL1NEQTM2TlFtb0M0XCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxLiDQnC4g0KjQtdC90YLRjtGA0LogKNCi0LXRgNC10YnRg9C6KS4gwqvQnNCw0LvQtdC90YzQutCwINGB0LXRgNC10L3QsNC00LDCuzsgMi4g0JwuINCV0LrRiNGC0LDQudC9LiDCq9Ca0LDQv9GA0LjQtyDQs9C90L7QvNGW0LLCu1wiLFxuICAgICAgICBcIm5hbWVcIjogXCLQotGD0YDQuNC6INCQ0L3QvdCwLCAwNy4xMS4yMDEzINGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjMwODMxODc0ODM3NTcxXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHUuYmUvOXpCaWljbWFJTzBcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEuINCuLiDQqdGD0YDQvtCy0YHRjNC60LjQuS4g0KLQsNC90LXRhtGMOyAyLiDQpC4g0KjRg9Cx0LXRgNGCLiDQodC60LXRgNGG0L4g0YHRliDQsdC10LzQvtC70Ywg0LzQsNC20L7RgFwiLFxuICAgICAgICBcIm5hbWVcIjogXCLQo9C00L7QtCDQlNCw0YBcXHUyMDE50Y8sIDAzLjAxLjIwMTQg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiMzA4MzE4NzQ4NzYwODZcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly95b3V0dS5iZS9qWnVzbUpZc2RrUVwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMS4g0KPQutGA0LDRl9C90YHRjNC60LAg0L3QsNGA0L7QtNC90LAg0L/RltGB0L3RjyDCq9Cd0LDQtCDRgNGW0YfQutC+0Y4g0LHQtdGA0LXQttC60L7QvMK7LCDQv9C10YDQtdC60LvQsNC0ICDQhi4g0JHQtdGA0LrQvtCy0LjRh9CwINC30LAg0L7QsdGA0L7QsdC60L7RjiDQnC4g0JvQtdC+0L3RgtC+0LLQuNGH0LA7IDIuINCe0LHRgC4g0JEuINCo0LjQv9GC0YPRgNCwLiDQmtC+0LvQvtC80LjQudC60LBcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0KXQsNC70LDQvNC10LnQtNCwINCb0YPQulxcdTIwMTnRj9C9LCAwOS4wNy4yMDE0INGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjMwODMxODc0OTI3MDE4XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHUuYmUvcHd0R2JGTFo2OWdcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEuINCGLiDQkdC10YDQutC+0LLQuNGHLiDQmtC+0L3RhtC10YDRgiDQtNC70Y8g0YTQvtGA0YLQtdC/0ZbQsNC90L4g4oSWMiwg0IbQhiDRh9Cw0YHRgtC40L3QsDsgMi4g0JsuINCG0LLQsNC90Y7RiNC40L3QsC4gwqvQmtCw0YDQsNC80LXQu9GMwrtcIixcbiAgICAgICAgXCJuYW1lXCI6IFwiMjQuXFx00KXQvtC8XFx1MjAxOdGP0Log0JLQsNGA0LLQsNGA0LAsMTguMDMuMjAxNiDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCIzMDgzMTg3NDk2ODA0NVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1LmJlL0lRR1g2VmRpSzdzXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQntCx0YDQvtCx0LrQsCDQkS4g0KjQuNC/0YLRg9GA0LAuINCa0L7Qu9C+0LzQuNC50LrQsFwiLFxuICAgICAgICBcIm5hbWVcIjogXCLQp9GD0LvQutGW0L3QsCDQndCw0LTRltGPLCAxNy4wNS4yMDE0INGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjMwODMxODc1MDExOTExXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHUuYmUvd3VUbDJlRGplV3dcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCaLiDQktGW0LvRgtC+0L0uINCh0L7QvdCw0YLQuNC90LAg0LTQviDQvNCw0LbQvtGAXCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCn0YPQu9C60ZbQvdCwINCd0LDQtNGW0Y8sIDE3LjA1LjIwMTQg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiMzA4MzE4NzUwNDQ3OThcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly95b3V0dWJlLmNvbS93YXRjaD92PUZUMXRaZFAyVmJjJmZlYXR1cmU9c2hhcmVcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCeLiDQkdGW0LvQsNGH0LXQvdC60L4uINCV0LrRgdC/0YDQvtC80YIg0YTQsCDQvNGW0L3QvtGAXCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCo0LDQvNC40L3QsCDQnNCw0YDQs9Cw0YDQuNGC0LAsIDA4LjAxLjIwMTQg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiMzA4MzE4NzUwNzY4OTlcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly95b3V0dWJlLmNvbS93YXRjaD92PWh3LWNBdlQ5SEJBJmZlYXR1cmU9c2hhcmVcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCfLiDQl9Cw0YXQsNGA0L7QstCwLiDCq9CW0LDRgNGCLdGB0YPQstC10L3RltGAwrtcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0KjQsNC80LjQvdCwINCc0LDRgNCz0LDRgNC40YLQsCwgMDguMDEuMjAxNCDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCIzMDgzMTg3NTExODU2M1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1LmJlL1Y3eXRIbXUzcENjXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQmS7QoS4g0JHQsNGFLiDQnNC10L3Rg9C10YIg0YHQvtC70Ywg0LzQsNC20L7RgFwiLFxuICAgICAgICBcIm5hbWVcIjogXCLQqNC/0LDQuiDQlNC10L3QuNGBLCAyNi4wOS4yMDE0INGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjMwODMxODc1MTU2MzcyXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHUuYmUvU3ZvV1Fka2NGTU1cIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItChLiDQkdC+0YDRgtC60LXQstC40YcuIMKr0JrQvtC30LDQusK7XCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCo0L/QsNC6INCU0LXQvdC40YEsIDI2LjA5LjIwMTQg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiMzA4MzE4NzUxOTIxMjFcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly95b3V0dS5iZS91dEphX0E3R1B0b1wiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0JsuINCo0ZbRgtGC0LUuINCV0YLRjtC0INC00L4g0LzQsNC20L7RgFwiLFxuICAgICAgICBcIm5hbWVcIjogXCLQqNC/0LDQuiDQlNC10L3QuNGBLCAyNi4wOS4yMDE0INGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjMwODMxODc1MjI1MDM5XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHUuYmUvTFRZY044d0V6alFcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCeLiDQk9C10LTRltC60LUuINCV0YLRjtC0INC00L4g0LzQsNC20L7RgFwiLFxuICAgICAgICBcIm5hbWVcIjogXCLQrtC30LLQsNC6INCE0LLQsCwgMTQuMDYuMjAxNSDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCIzMDgzMTg3NTI1NjYzOVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1YmUuY29tL3Nob3J0cy9lclFtUHk2R294UT9mZWF0dXJlPXNoYXJlXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQhi4g0JrQvtGA0LXQvdC10LLRgdGM0LrQsC4gwqvQlNC+0YnQuNC6wrtcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0K7Qt9Cy0LDQuiDQhNCy0LAsIDE0LjA2LjIwMTUg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiMzA4MzE4NzUzMDI4NTVcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly95b3V0dS5iZS9FVUlEV1FpS3BjWVwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0JouINCS0ZbQu9GC0L7QvS4g0KHQvtC90LDRgtC40L3QsCDQtNC+INC80LDQttC+0YBcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0K/QutC40LzRh9GD0Log0JrQsNGA0L7Qu9GW0L3QsCwgMTUuMTIuMjAxMyDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCIzMDgzMTg3NTM1MDU2NVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1LmJlL2FUdFc1QkNXWHg4XCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQmy4g0KjQuNGC0YLQtS4g0JzQsNC70LXQvdGM0LrQsCDQv9GA0LXQu9GO0LTRltGPXCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCv0LrQuNC80YfRg9C6INCa0LDRgNC+0LvRltC90LAsIDE1LjEyLjIwMTMg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiMzA4MzE4NzUzODU5NTRcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly95b3V0dS5iZS9KaldnOVZWb0FqZ1wiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0JTQti4g0JHQsNGB0YLRjNGU0L0uIMKr0JHQtNC20L7Qu9CwwrtcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0K/QutC40LzRh9GD0Log0JrQsNGA0L7Qu9GW0L3QsCwgMTUuMTIuMjAxMyDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCIzMDgzMTg3NTQyNTgyM1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1LmJlLzlhR2VGVm9jMHpZXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQlC4g0KfRltC80LDRgNC+0LfQsC4g0KHQvtC90LDRgtCwIOKEljE1LCAyINC30L7RiNC40YJcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0JDQs9GA0LDRgtGW0L3QsCDQodGC0LDQvdGW0YHQu9Cw0LIsIDI0LjA4LjIwMTEg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiMzA4MzE4NzU0NjQwMDNcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly95b3V0dS5iZS9OVzRRM2h3a2RDWVwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0JwuINCh0LrQvtGA0LjQui4gwqvQltCw0YDRgtGW0LLQu9C40LLQsCDQv1xcdTIwMTnRlNGB0LDCuyDQtyDRhtC40LrQu9GDIMKr0Jcg0LTQuNGC0Y/Rh9C+0LPQviDQsNC70YzQsdC+0LzRg8K7XCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCQ0LPRgNCw0YLRltC90LAg0KHRgtCw0L3RltGB0LvQsNCyLCAyNC4wOC4yMDExINGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjMwODMxODc1NTA4MzY3XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHUuYmUvS1Npc1pUeVdWNGNcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEuINCRLiDQpNGW0LvRjNGGLiDCq9Cb0ZbRgNC40YfQvdC40Lkg0L/RgNC10LvRjtC0wrs7IDIuINCuLiDQqNCw0LzQvi4g0KLQvtC60LDRgtCwXCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCQ0YDRgtGM0L7QvNC+0LLQsCDQlNCw0YBcXHUyMDE50Y8sIDI2LjA2LjIwMTAg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiMzA4MzE4NzU1NDE2NDBcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly95b3V0dS5iZS9tcEVNY3hMOWdZVVwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMS4g0Jku0KEuINCR0LDRhS4g0JDRgNGW0Y8g0LcgwqvQpNGA0LDQvdGG0YPQt9GM0LrQvtGXINGB0Y7Rl9GC0LjCuyDQtNC+INC80ZbQvdC+0YA7IDIuINCQLiDQmtC+0LvQvtC80ZbRlNGG0YwuIMKr0JPRgNCwLdCy0LXRgdC90Y/QvdC60LDCu1wiLFxuICAgICAgICBcIm5hbWVcIjogXCLQkdCw0LrQsNGU0LLQuNGHINCi0LjQvNC+0YTRltC5LCAwMS4wMS4yMDEyINGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjMwODMxODc1NTg0MjUyXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHUuYmUvLUlLaVpxTHpkQnNcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCdLiDQndC40LbQsNC90LrRltCy0YHRjNC60LjQuS4g0JrQvtC70L7QvNC40LnQutCwXCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCR0LDRidGW0Lkg0JLRltC60YLQvtGA0ZbRjywgMTEuMDYuMjAxMiDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCIzMDgzMTg3NTYyNjgxOVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1LmJlL1FXY2szTjVmOFdNXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQpC4g0JHRjtGA0LPQvNGO0LvQu9C10YAuINCV0YLRjtC0XCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCR0LDRidGW0Lkg0JLRltC60YLQvtGA0ZbRjywgMTEuMDYuMjAxMiDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCIzMDgzMTg3NTY2MTE5OVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3d3dy55b3V0dWJlLmNvbS93YXRjaD92PVZ5bElab0s4aEw0JmFiX2NoYW5uZWw9UGF2ZWxSeWJha1wiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0J8uINCn0LDQudC60L7QstGB0YzQutC40LkuIMKr0KXQstC+0YDQvtCx0LAg0LvRj9C70YzQutC4wrtcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0JHQtdC30YHQvNC+0LvRjNC90LAg0JfQvtGA0Y/QvdCwLCAyMi4xMC4yMDEzINGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjMwODMxODc1Njk2NTkwXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9dHhtMkpCOUNoVWcmYWJfY2hhbm5lbD1QYXZlbFJ5YmFrXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQnC4g0JzRltGU0YAuIMKrRG93bnJpZ2h0IEhhcHB5IFJhZ8K7XCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCR0LXQt9GB0LzQvtC70YzQvdCwINCX0L7RgNGP0L3QsCwgMjIuMTAuMjAxMyDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCIzMDgzMTg3NTc2MTI0OVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1LmJlL0NzYUJFdElWTVp3XCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQni4g0JPQtdGA0LDRgdC40LzQtdC90LrQvi4gwqvQnNC+0YDQtcK7OyAyLiDQnS4g0KLQvtGA0L7Qv9C+0LLQsC4g0KLQvtC60LDRgtCwXCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCR0LXRgNC10LfRgdGM0LrQsCDQm9GO0LHQvtCyLCAyNS4xMC4yMDEyINGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjMwODMxODc1ODA2OTU1XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHViZS5jb20vc2hvcnRzL3ZoZWNycnlTRzdVP2ZlYXR1cmU9c2hhcmVcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCuLiDQqdGD0YDQvtCy0YHRjNC60LjQuS4g0IbQvdCy0LXQvdGG0ZbRj1wiLFxuICAgICAgICBcIm5hbWVcIjogXCLQkdC+0L3QtNCw0YDRh9GD0Log0JzQuNGA0L7RgdC70LDQstCwLCAxOC4wNC4yMDExINGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjMwODMxODc1ODM5MjMwXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHUuYmUvc1FQTWtUbmJNMWdcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCWLiDQmtC+0LvQvtC00YPQsS4g0JXRgtGO0LQt0LrQsNGA0YLQuNC90LrQsFwiLFxuICAgICAgICBcIm5hbWVcIjogXCLQkdC+0L3QtNCw0YDRh9GD0Log0JzQuNGA0L7RgdC70LDQstCwLCAxOC4wNC4yMDExINGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjMwODMxODc1ODY4NTI2XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHUuYmUvMVFPZ01MeTR6akFcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCeLiDQotC40LzQvtGI0LXQvdC60L4uINCV0LvQtdCz0ZbRj1wiLFxuICAgICAgICBcIm5hbWVcIjogXCLQktC+0LvQvtGJ0YPQuiDQldC80ZbQu9GW0Y8sIDE5LjA2LjIwMTEg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiMzA4MzE4NzU5MTAxNzdcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly95b3V0dS5iZS9WZVV4X2JCSUFDRVwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0KIuINCf0LXRgtGA0LjQvdC10L3QutC+LCDQvtCx0YDQvtCx0LrQsCDQnC4g0KjQtdC90YLRjtGA0LouIMKr0KPQutGA0LDRl9C90LDCu1wiLFxuICAgICAgICBcIm5hbWVcIjogXCLQktC+0LvQvtGJ0YPQuiDQldC80ZbQu9GW0Y8sIDE5LjA2LjIwMTEg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiMzA4MzE4NzU5NzYzNDBcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly95b3V0dS5iZS9hOHB3T2hTcHVzc1wiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMS4g0K4uINCp0YPRgNC+0LLRgdGM0LrQuNC5LiDQk9C+0L/QsNC6OyAyLiDQnC4g0KjQtdC90YLRjtGA0LogKNCi0LXRgNC10YnRg9C6KS4g0JHQsNC70LDQtNCwXCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCT0LDQstGA0LjQu9GO0Log0KHQvtGE0ZbRjywgMjkuMDYuMjAxMiDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCIzMDgzMTg3NjE0Mjg2OFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1LmJlL2dSaEE2YkNGbGJRXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxLiDQmy4g0KjRg9C60LDQudC70L4gKNCi0LXRgNC10YnRg9C6KS4g0J/RgNC10LvRjtC00ZbRjzsgMi4g0JwuINCo0LXQvdGC0Y7RgNC6ICjQotC10YDQtdGJ0YPQuikuIMKr0KLQsNC90LXRhtGMINC60YPQu9GM0LHQsNCx0L7QusK7XCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCT0LDQu9Cw0L0g0IbRgNC40L3QsCwgMTcuMDUuMjAxMCDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCIzMDgzMTg3NjIzNTQ4NFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1LmJlL1N5c0d2dWMtQUlvXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxLiDQoS4g0JHQvtGA0YLQutC10LLQuNGHLiDCq9Cc0YDRltGPwrs7IDIuINCVLiDQk9GA0ZbQsy4gwqvQodC10YDRhtC1INC/0L7QtdGC0LDCu1wiLFxuICAgICAgICBcIm5hbWVcIjogXCLQk9Cw0YHRgNCw0YLQvtCyINCe0LvQtdC60YHRltC5LCAyNC4wOC4yMDEwINGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjMwODMxODc2Mjg0NDYyXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHUuYmUvYUszamFCU0R0NDhcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEuINCZLtChLiDQkdCw0YUuINCU0LLQvtCz0L7Qu9C+0YHQvdCwINGW0L3QstC10L3RhtGW0Y8g0LTQviDQvNCw0LbQvtGAOyAyLiDQnC4g0JzQvtGI0LrQvtCy0YHRjNC60LjQuS4g0JXRgtGO0LQg0YHRliDQsdC10LzQvtC70Ywg0LzQsNC20L7RgFwiLFxuICAgICAgICBcIm5hbWVcIjogXCLQk9C10YDQsNGB0LjQvNC10L3QutC+INCe0LvQtdC60YHQsNC90LTRgNCwLCAwMS4wNi4yMDExINGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjMwODMxODc2MzMxNzMwXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHUuYmUvbF80NElfN1JTVGtcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEuINCRLiDQpNGW0LvRjNGGLiDCq9Cc0LXQu9Cw0L3RhdC+0LvRltC50L3QuNC5INCy0LDQu9GM0YHCuzsgMi4g0JsuINCG0LLQsNC90LXQvdC60L4uIMKr0JTQvtGJ0LjQusK7XCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCT0LvQsNC00LrQsCDQlNCw0YDQuNC90LAsIDMxLjAxLjIwMTIg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiMzA4MzE4NzYzODIzNDJcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly95b3V0dS5iZS9sT1RjQmlteW1mWVwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMS4g0Jku0KEuINCR0LDRhS4g0JzQsNC70LXQvdGM0LrQsCDQv9GA0LXQu9GO0LTRltGPINGA0LUg0LzRltC90L7RgDsgMi4g0KQuINCo0L7Qv9C10L0uIENhbnRhYmlsZVwiLFxuICAgICAgICBcIm5hbWVcIjogXCLQk9C70L7QstCw0YbRjNC60LAg0J/QvtC70ZbQvdCwLCAxNS4xMi4yMDEwINGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjMwODMxODc2NDUxNDUwXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHUuYmUvT0U1eVFXdEZXcTRcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCZLtChLiDQkdCw0YUuINCU0LLQvtCz0L7Qu9C+0YHQvdCwINGW0L3QstC10L3RhtGW0Y8g0LvRjyDQvNGW0L3QvtGAXCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCT0YDQuNCz0L7RgNC10L3QutC+INCc0LDRgNGW0Y8sIDEzLjA5LjIwMTIg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiMzA4MzE4NzY1MTk1NDdcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly95b3V0dS5iZS8weTZVbW4ySjdId1wiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0JwuINCi0LXRgNC10YnRg9C6ICjQqNC10L3RgtGO0YDQuikuIMKr0J/RgNC+0LHRg9C00LbQtdC90L3Rj8K7INC3INGG0LjQutC70YMgwqtDb250cmVnb8K7XCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCT0YDQuNCz0L7RgNC10L3QutC+INCc0LDRgNGW0Y8sIDEzLjA5LjIwMTIg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiMzA4MzE4Nzc1MzAxMDlcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly95b3V0dS5iZS94OHo1V0F3UWFYc1wiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMS4g0JsuINCR0LXRgtGF0L7QstC10L0uINCh0L7QvdCw0YLQsCDihJYyMCwg0YLQsi40OSwg0IYg0YfQsNGB0YLQuNC90LA7IDIuINCeLiDQkdGW0LvQsNGILiDQkdCw0YDQutCw0YDQvtC70LBcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0JTQtdC50L3QtdC60LAg0KHQvtC70L7QvNGW0Y8sIDE5LjA1LjIwMTEg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiMzA4MzE4Nzc1ODIyMzVcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly95b3V0dS5iZS9ZSlRSZk1scXdLRVwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMS4g0KQuINCa0YPQu9Cw0YMuINCh0L7QvdCw0YLQuNC90LAg0LTQviDQvNCw0LbQvtGALCDRgtCyLjU1LCDQhiDRh9Cw0YHRgtC40L3QsDsgMi4g0JsuINCS0L7Qu9C+0YjQuNC90LAuIMKr0JfQuNC80L7QstC40Lkg0YDQsNC90L7QusK7XCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCU0LjRiNC70LXQstC40Lkg0ITQstCz0LXQvSwgMzAuMDEuMjAxMSDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCIzMDgzMTg3NzYyMjMzNFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1LmJlL2JRNWtWdXV1YTJ3XCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQoS4g0JvRjtC00LrQtdCy0LjRhy4gwqvQodGC0LDRgNC+0LLQuNC90L3QsCDQv9GW0YHQvdGPwrtcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0ITRgNC10LPQsCDQnNCw0YBcXHUyMDE50Y/QvdCwLCAwNC4wOC4yMDEyINGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjMwODMxODc3NjU3MTA2XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHUuYmUvUmlsUURrZ3oxWGdcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCcLiDQnNC+0YDQtNCw0YHQvtCyLiDCq9CU0LDQstC90LjQvCDQtNCw0LLQvdC+wrtcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0ITRgNC10LPQsCDQnNCw0YBcXHUyMDE50Y/QvdCwLCAwNC4wOC4yMDEyINGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjMwODMxODc3NjgyMjkzXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHUuYmUvdkN1SDdyRnRBTGNcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCbLiDQhtCy0LDQvdC10L3QutC+LiDQpNCw0L3RgtCw0LfRltGPINC90LAg0YLQtdC80YMg0YPQutGA0LDRl9C90YHRjNC60L7RlyDQvdCw0YDQvtC00L3QvtGXINC/0ZbRgdC90ZYgwqvQk9Cw0L3QtNC30Y/Cu1wiLFxuICAgICAgICBcIm5hbWVcIjogXCLQltC10LPQsNC70L4g0J3QsNC00ZbRjywgMTYuMDkuMjAxMiDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCIzMDgzMTg3Nzc2ODY4NlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1LmJlL2xGaE9UV0duUXBzXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQkS4g0KTRltC70YzRhi4gwqvQodGD0LzQvdCwINC/0ZbRgdC90Y/Cu1wiLFxuICAgICAgICBcIm5hbWVcIjogXCLQltC10LPQsNC70L4g0J3QsNC00ZbRjywgMTYuMDkuMjAxMiDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCIzMDgzMTg3NzgwMzcxMFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1LmJlL1V0aEl2LUx3UHA4XCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQry4g0JHQvtCx0LDQu9GW0LouIMKr0JHRg9GA0YXQu9C40LLQuNC5INCy0L7QtNC+0YHQv9Cw0LTCu1wiLFxuICAgICAgICBcIm5hbWVcIjogXCLQhtCy0LDQvdGO0Log0JLRltGA0YHQsNCy0ZbRjywgMDUuMDcuMjAxMCDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCIzMDgzMTg3NzgzMzk3OFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1LmJlL01Bdm9RQWwxcTZZXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQhi4g0KnQtdGA0LHQsNC60L7Qsi4gwqvQldC70LXQs9GW0Y8g0LrQuNGX0LLRgdGM0LrQuNGFINC/0LDQs9C+0YDQsdGW0LLCu1wiLFxuICAgICAgICBcIm5hbWVcIjogXCLQhtCy0LDQvdGO0Log0JLRltGA0YHQsNCy0ZbRjywgMDUuMDcuMjAxMCDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCIzMDgzMTg3Nzg2OTkwNlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1LmJlLzNLc01Gb1oyUXpFXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQki4g0JPRltC70LvQvtC6LiDQpNC70LDQvNC10L3Qs9C+XCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCG0LLQsNC90Y7QuiDQnNCw0YDRltCw0LwsIDAyLjA0LjIwMTMg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiMzA4MzE4Nzc4OTY0NjZcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly95b3V0dS5iZS8tTWVQRXBYbGZWVVwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0IYuINCR0LXRgNC60L7QstC40YcuINCf0YDQtdC70Y7QtNGW0Y8g4oSWNSDRgNC1INC80LDQttC+0YBcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0IbQstCw0L3RjtC6INCc0LDRgNGW0LDQvCwgMDIuMDQuMjAxMyDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCIzMDgzMTg3NzkyNDk0NVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1LmJlL2VoTUk5VWZXeW5VXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQpC4g0JrRg9C70LDRgy4g0KHQvtC90LDRgtC40L3QsCDihJYxXCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCa0LDQvdGG0LXRgCDQkdC+0LPQtNCw0L3QsCwgMTAuMDEuMjAxMiDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCIzMDgzMTg3Nzk1MTI2MFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1LmJlL2VnQ2V2b0laeHo0XCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQnC4g0JfQsNCy0LDQtNGB0YzQutC40LkuIMKr0KjRg9C80LrQsMK7XCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCa0LDQvdGG0LXRgCDQkdC+0LPQtNCw0L3QsCwgMTAuMDEuMjAxMiDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCIzMDgzMTg3Nzk4NTg1NVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1LmJlL0twZl9MNDd6alhrXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxLiDQki4g0JrQstCw0YHQvdC10LLRgdGM0LrQuNC5LiDCq9CU0YPQvNC60LDCuzsgMi4g0JUuINCT0YDRltCzLiDCq9Cf0L7QtdGC0LjRh9C90LAg0LrQsNGA0YLQuNC90LrQsMK7IOKEljFcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0JrQu9GW0LzQvtCy0LjRhyDQhNC70LjQt9Cw0LLQtdGC0LAsIDEyLjEwLjIwMTEg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiMzA4MzE4NzgwMjAzODJcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly95b3V0dWJlLmNvbS93YXRjaD92PVFqOHBoc1dhRGtzJmZlYXR1cmU9c2hhcmVcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCuINCp0YPRgNC+0LLRgdGM0LrQuNC5LCDQkdCw0YDQutCw0YDQvtC70LBcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0JrQvtCy0LDQu9GM0YfRg9C6INCQ0L3QvdCwLCAxNC4xMS4yMDEwINGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjMwODMxODc4MDQ3Nzk5XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHUuYmUvT3UtTndVRlUzNTBcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCTLiDQodCw0YHRjNC60L4uINCg0LXQs9GC0LDQudC8XCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCa0L7QstCw0LvRjNGH0YPQuiDQkNC90L3QsCwgMTQuMTEuMjAxMCDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCIzMDgzMTg3ODA3NDIwMVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1LmJlL1M2TllLT09kR01BXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxLiDQo9C60YDQsNGX0L3RgdGM0LrQsCDQvdCw0YDQvtC00L3QsCDQv9GW0YHQvdGWINCyINC+0LHRgNC+0LHRhtGWINChLiDQmtC70LjQvNC+0LLRgdGM0LrQvtCz0L4gwqvQh9GF0LDQsiAgICDQutC+0LfQsNC6INC30LAg0JTRg9C90LDQucK7OyAyLiDQoi4g0J/QtdGC0YDQuNC90LXQvdC60L4sINC+0LHRgNC+0LHQutCwINCcLiDQqNC10L3RgtGO0YDQui4gwqvQo9C60YDQsNGX0L3QsMK7XCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCa0L7Qu9C10YHQvdC40YfQtdC90LrQviDQnNCw0YDQuiwgMjUuMDUuMjAxMSDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCIzMDgzMTg3ODEyNTIwOVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1LmJlL1czaElVb0tZN1o0XCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQnC4g0KjQtdC90YLRjtGA0LogKNCi0LXRgNC10YnRg9C6KS4gwqvQktCw0LvRjNGBLdC60LDQv9GA0LjRgcK7XCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCa0L7QvdC00YDQsNGC0Y7QuiDQktC10YDQvtC90ZbQutCwLCAxNC4wOS4yMDEyINGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjMwODMxODc4MTU1NzExXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHUuYmUvZmVVTE1Xb3p6cW9cIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCcLiDQnNCw0LnRlNGALiDCq9Ck0LDRgNCx0Lgg0L7RgdC10L3RlsK7XCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCa0L7QvdC00YDQsNGC0Y7QuiDQktC10YDQvtC90ZbQutCwLCAxNC4wOS4yMDEyINGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjMwODMxODc4MTg2MDIyXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9WjJaN1cwSWZQcWtcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEuINCZLtChLiDQkdCw0YUuINCQ0LvQtdC80LDQvdC00LAg0LcgwqvQpNGA0LDQvdGG0YPQt9GM0LrQvtGXINGB0Y7Rl9GC0LjCuyDQvNGWINCx0LXQvNC+0LvRjCDQvNCw0LbQvtGAOyAyLiDQnC4g0JvQuNGB0LXQvdC60L4uINCc0LDQt9GD0YDQutCwINC00L4g0LzRltC90L7RgFwiLFxuICAgICAgICBcIm5hbWVcIjogXCLQmtC+0YbQuNGA0ZbQuSDQkNGA0ZbQvdCwLCAyMC4wOC4yMDEwINGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjMwODMxODc4MjQ4NjA5XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHViZS5jb20vd2F0Y2g/dj03ejZTVHlEb293ZyZmZWF0dXJlPXNoYXJlXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQmy4g0KjRg9C60LDQudC70L4uINCc0LDRgNGIINC3INGB0Y7Rl9GC0LggwqvQptC40YDQusK7XCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCa0YDQuNGI0YLQsNC70Ywg0K/QvSwgMjEuMDYuMjAxMiDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCIzMDgzMTg3ODMwMTQ1MVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1YmUuY29tL3Nob3J0cy9CUko3cXdmMXV6Yz9mZWF0dXJlPXNoYXJlXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQoS4g0KHQvtGB0L3RltC90LAuIMKr0JTRgNCw0LrQvtC9wrtcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0JrRgNC40YjRgtCw0LvRjCDQr9C9LCAyMS4wNi4yMDEyINGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjMwODMxODc4MzI2MTkwXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9ZVBEQ3cxRGxDUWdcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCeLiDQr9C60L7QstGH0YPQui4g0J/QvtC70L7QvdC10LdcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0JrRg9C70LjQuiDQntC70LXRgdGPLCAxNi4wMS4yMDExINGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjMwODMxODc4MzYwNzcyXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9eUpnM0tLdllMaWdcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCbLiDQkdC10YLRhdC+0LLQtdC9LiDCq9CU0L4g0JXQu9GW0LfQuMK7XCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCa0YPQu9C40Log0J7Qu9C10YHRjywgMTYuMDEuMjAxMSDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCIzMDgzMTg3ODM5MDUxNlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1LmJlL1NZWlhiOFk4ZFNRXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxLiDQmS7QoS4g0JHQsNGFLiDQotGA0LjQs9C+0LvQvtGB0L3QsCDRltC90LLQtdC90YbRltGPINGA0LUg0LzQsNC20L7RgDsgMi4g0KQuINCo0L7Qv9C10L0uINCc0LDQt9GD0YDQutCwLCDRgtCyLjY3IOKEljJcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0JvQsNGJINCd0LDQvdCwLCAwMS4xMS4yMDEwINGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjMwODMxODc4NDI2NTM2XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHUuYmUvckxpZjE3bjlQbWtcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCgLiDQk9C70ZbRlNGALiDCq9CV0YHQutGW0LfCuyDRgNC1INC80LDQttC+0YBcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0JvQtdCz0LrQuNC5INCc0LDQutGB0LjQvCwgMTcuMDguMjAxMSDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCIzMDgzMTg3ODQ1MTY5OVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1LmJlL0FabWdncHp6SFZFXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQmi4g0JTQtdCx0Y7RgdGB0ZYuIMKr0JzQsNC70LXQvdGM0LrQtSDQvdC10LPRgNC10L3Rj8K7XCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCb0LXQs9C60LjQuSDQnNCw0LrRgdC40LwsIDE3LjA4LjIwMTEg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiMzA4MzE4Nzg0NzYyNjZcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly95b3V0dS5iZS8xa1NHc0JBVTM5d1wiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMS4g0JIuINCc0L7RhtCw0YDRgi4g0KHQvtC90LDRgtC40L3QsCDQtNC+INC80LDQttC+0YAsINCGINGH0LDRgdGC0LjQvdCwOyAyLiDQki4g0KjRg9C60LDQudC70L4uINCG0L3RgtC10YDQvNC10YbQvlwiLFxuICAgICAgICBcIm5hbWVcIjogXCLQnNCw0LfQtdC/0LAg0KHQvtGE0ZbRjywgMzAuMDMuMjAxMyDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCIzMDgzMTg3ODUwNzE3MlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1LmJlLzA4S282OGlNRlowXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQkS4g0KTRltC70YzRhi4gwqvQl9Cw0LrQsNGA0L/QsNGC0YHRjNC60LAg0L3QvtCy0LXQu9C10YLQsMK7IOKEljJcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0JzQsNC60YHRjtGC0LjQvdGB0YzQutCwINCd0LDQtNGW0Y8sIDEwLjA4LjIwMTAg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiMzA4MzE4Nzg1MzM4ODNcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly95b3V0dWJlLmNvbS9zaG9ydHMvdGJSR3IwMDhTaGdcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCSLiDQk9GW0LvQu9C+0LouIMKr0JrQsNGA0L3QsNCy0LDQuyDQsiDQoNGW0L7Cu1wiLFxuICAgICAgICBcIm5hbWVcIjogXCLQnNCw0LrRgdGO0YLQuNC90YHRjNC60LAg0J3QsNC00ZbRjywgMTAuMDguMjAxMCDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCIzMDgzMTg3ODU2MzgzOFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1LmJlLzdQNUs3N01jaExNXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQmy4g0KjRg9C60LDQudC70L4uIMKr0JrQvtGC0LjQuiDRliDQvNC40YjQutCwwrtcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0JzRlNC90Ywg0JDQvdCw0YHRgtCw0YHRltGPLCAwOC4wMy4yMDEzINGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjMwODMxODc4NTg3NDUxXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHUuYmUvM2pKQ3ZWMWItOWdcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCQLiDQkVxcdTIwMTnRlNC70YwuINCh0L7QvdCw0YLQuNC90LBcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0JzRlNC90Ywg0JDQvdCw0YHRgtCw0YHRltGPLCAwOC4wMy4yMDEzINGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjMwODMxODc4NjMwNzgzXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHUuYmUvUENyUldIZk5mSmNcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCcLiDQlNCy0L7RgNC20LDQuiwgwqvQlNC20LDQt9C+0LLQuNC5INC10YLRjtC0wrsg4oSWMiDQtNC+INC80LDQttC+0YBcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0J3RltGI0L/QsNC7INCE0LLQsCwgMDkuMDUuMjAxMCDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCIzMDgzMTg3ODY3MDg4M1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1LmJlL2htMEdxVGQ4Y25nXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQki4g0JvQvtCz0ZbQvS4gwqvQm9GW0YDQuNGH0L3QuNC5INC/0YDQtdC70Y7QtMK7XCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCd0ZbRiNC/0LDQuyDQhNCy0LAsIDA5LjA1LjIwMTAg0YAu0L1cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCIzMDgzMTg3ODczMDg1N1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1LmJlL0ZXc2NDemNzVmxRXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQnC4g0JXQutGI0YLQtdC50L0uIMKr0JrQsNC/0YDQuNC3INCz0L3QvtC80ZbQssK7XCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCe0LvRltC50L3QuNC6INCc0LjQutC40YLQsCwgMzEuMTIuMjAxMSDRgC7QvS4gKDIg0YDRltC6INC90LDQstGH0LDQvdC90Y8pXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiMzA4MzE4Nzg3NTkzMjRcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly95b3V0dS5iZS93cl9adjJKZ0gtY1wiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0IYuINCd0L7QstGW0LrQvtCy0LAuIMKr0JPQvtGB0YLRgNC40Lkg0YDQuNGC0LzCu1wiLFxuICAgICAgICBcIm5hbWVcIjogXCLQntC70ZbQudC90LjQuiDQnNC40LrQuNGC0LAsIDMxLjEyLjIwMTEg0YAu0L0uICgyINGA0ZbQuiDQvdCw0LLRh9Cw0L3QvdGPKVwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjMwODMxODc4NzgzMDc1XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHUuYmUvX3F4QnlNbXNGd29cIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCa0LjQvNC70LjQui4gwqvQnNGW0L3RltCw0YLRjtGA0L3QsCDQm9C10L7QvdGC0L7QstGW0LDQvdCwwrtcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0J7RgdGC0LDQv9GH0YPQuiDQpdGA0LjRgdGC0LjQvdCwLCAxOC4wOC4yMDExINGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjMwODMxODc4ODA3MTUwXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHUuYmUvQzBlbUJiRllJUzBcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCaLiDQk9Cw0YDQtNC10LvRjC4gwqtQb3IgdW5hIGNhYmV6YcK7XCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCe0YHRgtCw0L/Rh9GD0Log0KXRgNC40YHRgtC40L3QsCwgMTguMDguMjAxMSDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCIzMDgzMTg3ODg0MjY1MFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1LmJlL2dMMnBNVllOWUdNXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQmi4g0J3RltC70YzRgdC10L0uIMKr0JPQvtC00LjQvdC90LjQuiDQtyDQvNGD0LfQuNC60L7RjsK7XCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCf0LDQvdGH0LXQvdC60L4g0JfQvtGA0Y/QvdCwLCAwNS4wMi4yMDEzINGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjMwODMxODc4ODY2MjExXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHUuYmUvRHFOWEtYUnZOMXNcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCgLiDQk9C70ZbRlNGALiDQn9GA0LXQu9GO0LTRltGPXCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCf0LDQvdGH0LXQvdC60L4g0JfQvtGA0Y/QvdCwLCAwNS4wMi4yMDEzINGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjMwODMxODc4ODg2MDY4XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHUuYmUvcTJkcEcyZXhLR2NcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEuINCZLtChLiDQkdCw0YUuINCi0YDQuNCz0L7Qu9C+0YHQvdCwINGW0L3QstC10L3RhtGW0Y8g4oSWMTE7IDIuINCVLiDQk9GA0ZbQsy4g0JXRgtGO0LQsINGC0LIuIDczIOKEljUgKNC/0LDQvFxcdTIwMTnRj9GC0ZYg0KjQvtC/0LXQvdCwKVwiLFxuICAgICAgICBcIm5hbWVcIjogXCLQn9Cw0YHQtdC90YfRg9C6INCa0LDRgNGW0L3QsCwgMDIuMDMuMjAxMSDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCIzMDgzMTg3ODkyOTY1M1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1LmJlL1Bxd0dzTzh0VTdVXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQky4g0KjRgtGM0L7Qu9GM0YbQtdC70Ywt0JkuINCR0LDRhS4g0JzQtdC90YPQtdGCINGB0L7Qu9GMINC80ZbQvdC+0YBcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0J/QsNGB0LrQsNGAINCd0LDRgtCw0L0sIDA3LjA5LjIwMTIg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiMzA4MzE4Nzg5Njc0MzJcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly95b3V0dS5iZS93RXBNakNXaTg0d1wiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0JsuINCo0LjRgtGC0LUuIMKr0KLQsNC90LXRhtGMINCz0L3QvtC80ZbQssK7XCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCf0LDRgdC60LDRgCDQndCw0YLQsNC9LCAwNy4wOS4yMDEyINGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjMwODMxODc4OTg5NjY1XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHUuYmUvNnV2bHVXdlE5Y1lcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEuINCuLiDQoNC10LzQtdC30LXQvdC60L4uIMKr0KDQsNC90L7QuiDQsiDRgtGD0LzQsNC90ZYsINC/0YLQsNGF0Lgg0L3QsNC0INC80L7RgNC10LzCuzsgMi4g0KIuINCe0YHRgtC10L0uIMKr0KHQvtC9INC70Y/Qu9GM0LrQuMK7XCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCf0LvQuNGB0Y7QuiDQktC10YDQvtC90ZbQutCwLCAyMS4xMC4yMDExINGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjMwODMxODc5MDI5MjY3XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHUuYmUvQ1QxTzV6NlRfQ2NcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCkLiDQmtGD0LvQsNGDLiDQktCw0YDRltCw0YbRltGXINGB0L7Qu9GMINC80LDQttC+0YBcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0J/QvtC00LvQtdCy0YHRjNC60LAg0JrQsNGA0LjQvdCwLCAyNy4wNy4yMDEwINGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjMwODMxODc5MDYwNzEwXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHUuYmUvYmp3d1dkTC1QeEVcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCcLiDQktC10YDQsdC40YbRjNC60LjQuSAsINC+0LHRgC4g0LTQu9GPINGELdC90L4g0JEuINCo0LjQv9GC0YPRgNCwIMKr0KnQtSDQvdC1INCy0LzQtdGA0LvQsCDQo9C60YDQsNGX0L3QuMK7XCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCf0L7QtNC70LXQstGB0YzQutCwINCa0LDRgNC40L3QsCwgMjcuMDcuMjAxMCDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCIzMDgzMTg3OTA5NDgxNlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1YmUuY29tL3Nob3J0cy9vUFVjeldwR1Q0ST9mZWF0dXJlPXNoYXJlXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQlC4g0KbQuNC/0L7Qu9GWLiDQpNC10LPQtdGC0LBcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0J/RgNC+0LTQsNC90YfRg9C6INCh0L7QvdGPLCAwOS4wNC4yMDEzINGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjMwODMxODc5MTE5Njk1XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHViZS5jb20vc2hvcnRzL1VPRG5YRU5KUDdnP2ZlYXR1cmU9c2hhcmVfXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQni4g0JHRltC70LDRh9C10L3QutC+LiDCq9CU0L7RidC+0LLQuNC5INGA0LDQvdC+0LrCu1wiLFxuICAgICAgICBcIm5hbWVcIjogXCLQn9GA0L7QtNCw0L3Rh9GD0Log0KHQvtC90Y8sIDA5LjA0LjIwMTMg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiMzA4MzE4NzkxNDM2MzVcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly95b3V0dS5iZS92M1J5SWlobk04NFwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0JouINCn0LXRgNC90ZYuINCV0YLRjtC0IOKEljIxLCDRgtCyLjI5OVwiLFxuICAgICAgICBcIm5hbWVcIjogXCLQoNCw0LPQvtC30LAg0JrQsNGA0LjQvdCwLCAxNS4wNy4yMDEwINGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjMwODMxODc5MTY5ODc0XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHUuYmUvMkpEUDZaYjZTRThcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItChLiDQm9C+0LfQsdGW0L0uINCa0L7QvdGG0LXRgNGC0L3QuNC5INCy0LDQu9GM0YEgwqvQndCw0LHQu9C40LbQtdC90L3Rj8K7XCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCg0LDQs9C+0LfQsCDQmtCw0YDQuNC90LAsIDE1LjA3LjIwMTAg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiMzA4MzE4NzkxOTUwODRcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly95b3V0dWJlLmNvbS93YXRjaD92PWRHSEZvaWFmUkV3JmZlYXR1cmU9c2hhcmVcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCeLiDQkdGW0LvQsNGH0LXQvdC60L4sINCh0L7QvdCw0YLQuNC90LAg0YDQtSDQvNCw0LbQvtGAXCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCg0L7QvNCw0L3QvtCy0LAg0JrQsNGC0LXRgNC40L3QsCwgMTQuMDcuMjAxMSDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCIzMDgzMTg3OTI2NzcyM1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1YmUuY29tL3dhdGNoP3Y9U0JuZWxPVjJpSWsmZmVhdHVyZT1zaGFyZVwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0JwuINCo0LXQvdGC0Y7RgNC6ICjQotC10YDQtdGJ0YPQuikuINCV0LrRgdC/0YDQvtC80YJcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0KDQvtC80LDQvdC+0LLQsCDQmtCw0YLQtdGA0LjQvdCwLCAxNC4wNy4yMDExINGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjMwODMxODc5MzIzOTgzXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHUuYmUvSUJvSFJCNDZwSFFcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCeLiDQk9C10LTRltC60LUuINCh0L7QvdCw0YLQuNC90LAg0LTQviDQvNCw0LbQvtGAXCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCh0ZTRgNCz0ZTRlNCy0LAg0K/QvdCwLCAyNS4wOS4yMDEyINGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjMwODMxODc5MzQ4OTUzXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHUuYmUvZ1Vnc1h3WlVDaE1cIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCVLiDQktC+0LvRjNGELiDCq9Cb0ZbRgtC90ZbQuSDQstGW0YLQtdGA0LXRhtGMwrtcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0KHRlNGA0LPRlNGU0LLQsCDQr9C90LAsIDI1LjA5LjIwMTIg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiMzA4MzE4NzkzNzc3OTBcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly95b3V0dS5iZS9Ba2hKWktJbEJpVVwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0KQuINCo0L/RltC90LTQu9C10YAuINCh0L7QvdCw0YLQuNC90LAg4oSWMSwg0IYg0YfQsNGB0YLQuNC90LBcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0KHRltC70YzQutC+0LLRgdGM0LrQsCDQhNCy0LAsIDI4LjA3LjIwMTIg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiMzA4MzE4Nzk0MTQyNDdcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly95b3V0dS5iZS9UWXdMU3FkLWFPUVwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0K4uINCp0YPRgNC+0LLRgdGM0LrQuNC5LiDCq9Co0LDRgNC80LDQvdC60LDCu1wiLFxuICAgICAgICBcIm5hbWVcIjogXCLQodGW0LvRjNC60L7QstGB0YzQutCwINCE0LLQsCwgMjguMDcuMjAxMiDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCIzMDgzMTg3OTQ0NTMzN1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3d3dy55b3V0dWJlLmNvbS93YXRjaD92PXZKUHZJc0V2ZnFnXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQmy4g0KDQtdCy0YPRhtGM0LrQuNC5LiDQn9GW0YHQvdGPMi4g0JouINCn0LXRgNC90ZYuINCV0YLRjtC0LCDRgtCyLiAyMTksIOKEljE1XCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCh0LrQvtGA0L7RhdC+0LTRjNC60L4g0ITQstCz0LXQvdGW0Y8sIDI0LjA3LjIwMTAg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiMzA4MzE4Nzk0NzMyMTRcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly93d3cueW91dHViZS5jb20vd2F0Y2g/dj1ZYWdlMktGRW9McyZhYl9jaGFubmVsPSVEMCU5OCVEMSU4MCVEMCVCOCVEMCVCRCVEMCVCMCVEMCVBMSVEMCVCQyVEMCVCOCVEMSU4MCVEMCVCRCVEMCVCRSVEMCVCMiVEMCVCMFwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0KQuINCb0ZbRgdGCLiDCq9Cu0L3QsNGG0YzQutC40Lkg0LXRgtGO0LTCuyDihJYxXCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCh0LzRltGA0L3QvtCy0LAg0ITQstCz0LXQvdGW0Y8sIDAzLjAzLjIwMTIg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiMzA4MzE4Nzk1MjY4ODVcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly95b3V0dS5iZS9UcjI4SDY2VmVZa1wiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0JYuLdCcLiDQkNGA0L3Qvi4gwqtSZW5nYWluZcK7XCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCh0YPRhdCw0L0g0JTRltCw0L3QsCwgMDUuMTIuMjAxMiDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCIzMDgzMTg3OTU1OTQ4OFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1LmJlL3k3MFp3S19ZRGVrXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQky4g0JrQu9Cw0YHRgdC10L0uIMKr0JLQsNC70YzRgdC40LrCu1wiLFxuICAgICAgICBcIm5hbWVcIjogXCLQodGD0YXQsNC9INCU0ZbQsNC90LAsIDA1LjEyLjIwMTIg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiMzA4MzE4Nzk1ODU0NzBcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly95b3V0dS5iZS9vZzdIZUVPdmRnd1wiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0JMuINCR0LXQt1xcdTIwMTnRj9C30LjRh9C90LjQuS4gwqvQntC5LCDRgyDQstC40YjQvdC10LLQvtC80YMg0YHQsNC00YPCu1wiLFxuICAgICAgICBcIm5hbWVcIjogXCLQotCw0YDQsNGB0Y7QuiDQhNC70LjQt9Cw0LLQtdGC0LAsIDIwLjAyLjIwMTIg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiMzA4MzE4Nzk2MTA1MTVcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly95b3V0dS5iZS81RGNpUnd6U09MWVwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0K4uINCS0LXRgdC90Y/Qui4gwqvQmtCw0LfQvtGH0LrQsMK7XCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCi0LDRgNCw0YHRjtC6INCE0LvQuNC30LDQstC10YLQsCwgMjAuMDIuMjAxMiDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCIzMDgzMTg3OTYzODQyMlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1LmJlLzNXR1dBNnF5MW5NXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQhi4g0JLQvtC70LrQvtCyLiDCq9Cf0ZbQtCDQtNC+0YnQtdC8wrtcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0KTQtdC00L7RgNC+0LLQsCDQktGW0LrRgtC+0YDRltGPLCAwNy4wMS4yMDEzINGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjMwODMxODc5NjYyMzg4XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHUuYmUvbnNDN3lQUHFxZU1cIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCiLiDQpdCw0YHQu9GW0L3Qs9C10YAuINCh0L7QvdCw0YLQuNC90LAg0LTQviDQvNCw0LbQvtGAXCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCk0LXQtNC+0YDQvtCy0LAg0JLRltC60YLQvtGA0ZbRjywgMDcuMDEuMjAxMyDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCIzMDgzMTg3OTY5MTcxOFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1LmJlL3JETHh2Tl9LUERRXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxLiDQpC4g0JHRg9GA0LPQvNGO0LvQu9C10YAuIMKr0JLQtdGB0L3Rj9C90LjQuSDQutCw0L/RltC2wrs7IDIuINCuLiDQqdGD0YDQvtCy0YHRjNC60LjQuS4g0KLQsNC90LXRhtGMXCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCk0LXQtNGO0Log0JPQu9GW0LEsIDA1LjA3LjIwMTIg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiMzA4MzE4Nzk3NTUzNjBcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly95b3V0dS5iZS9oTGU4R2cySF9MOFwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMS4g0JMuINCR0LXQt1xcdTIwMTnRj9C30LjRh9C90LjQuS4gwqvQoNGD0YHQsNC70L7QvdGM0LrQsMK7XCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCl0LLQvtGB0YLQvtCy0LAg0JLRltGA0LAsIDI3LjA0LjIwMTMg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiMzA4MzE4Nzk3ODgyNTVcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly95b3V0dS5iZS9meWR4SjFDQThNQVwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMi4g0JsuINCG0LLQsNC90LXQvdC60L4uIMKr0JHQsNCx0YPRgdGPLdCv0LPRg9GB0Y/Cu1wiLFxuICAgICAgICBcIm5hbWVcIjogXCLQpdCy0L7RgdGC0L7QstCwINCS0ZbRgNCwLCAyNy4wNC4yMDEzINGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjMwODMxODc5ODEwNzQxXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHUuYmUvWW9NZk1hdEdraHdcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCZLiDQk9Cw0LnQtNC9LiDQoNC+0L3QtNC+INC00L4g0LzQsNC20L7RgFwiLFxuICAgICAgICBcIm5hbWVcIjogXCLQpdC+0LzRltC6INCa0ZbRgNCwLCAxMi4wMy4yMDExINGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjMwODMxODc5ODYxNzQyXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHUuYmUvWWZKdV93c1dnNjhcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCeLiDQkdGW0LvQsNGH0LXQvdC60L4uINCS0LDQu9GM0YFcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0KXQvtC80ZbQuiDQmtGW0YDQsCwgMTIuMDMuMjAxMSDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCIzMDgzMTg3OTg4MjcwOFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1LmJlL2xVejB6TWhCa0NNXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQky7QpC4g0JPQtdC90LTQtdC70YwuINCh0L7QvdCw0YLQuNC90LAg0YHRliDQsdC10LzQvtC70Ywg0LzQsNC20L7RgFwiLFxuICAgICAgICBcIm5hbWVcIjogXCLQp9C10YDQvdGP0Log0JzQsNGA0ZbRjywgMjYuMDkuMjAxMiDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCIzMDgzMTg3OTkwOTIzOFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1LmJlL05KLVJpVm81WmFrXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQkC4g0JvQsNC30LDRgNC10L3QutC+LiDQmtC+0LvQvtC80LjQudC60LhcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0KfQtdGA0L3Rj9C6INCc0LDRgNGW0Y8sIDI2LjA5LjIwMTIg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiMzA4MzE4Nzk5MzA4MDhcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly95b3V0dS5iZS9oSHhpa0ZiWnRGQVwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0KQuINCo0L7Qv9C10L0uINCf0L7Qu9C+0L3QtdC3INGB0L7Qu9GMINC80ZbQvdC+0YBcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0KfQvtGA0L3QtdC5INCv0L3QsCwgMDkuMTAuMjAxMCDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCIzMDgzMTg3OTk1Mjg1MVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1LmJlL3dsUGVVOXVvQkJzXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQmy4g0JHQtdGC0YXQvtCy0LXQvS4g0KHQvtC90LDRgtC40L3QsCDQvNGWINCx0LXQvNC+0LvRjCDQvNCw0LbQvlwiLFxuICAgICAgICBcIm5hbWVcIjogXCLQp9C+0YDQvdC10Lkg0K/QvdCwLCAwOS4xMC4yMDEwINGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjMwODMxODc5OTgyMTY2XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9VzBYYzI0eFFqMElcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEuINCZLtChLiDQkdCw0YUuINCU0LLQvtCz0L7Qu9C+0YHQvdCwINGW0L3QstC10L3RhtGW0Y8g0LvRjyDQvNGW0L3QvtGAOyAyLiDQny4g0JfQsNGF0LDRgNC+0LLQsC4gwqvQktC/0LXRgNGI0LUg0L3QsCDQsNGA0LXQvdGWwrtcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0K/QutC40LzQtdC90LrQviDQhNC70LjQt9Cw0LLQtdGC0LAsIDIzLjEwLjIwMTAg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiMzA4MzE4ODAwMDcyMDRcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly95b3V0dS5iZS9DR0xva09Cc2d5d1wiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMS4g0JwuINCb0LjRgdC10L3QutC+LiDCq9Ch0YPQvNC90LjQuSDRgdC/0ZbQssK7OyAyLiDQkC4g0KXQsNGH0LDRgtGD0YDRj9C9LiDCq9Cc0YPQt9C40YfQvdCwINC60LDRgNGC0LjQvdCwwrtcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0K/QvNC/0L7Qu9GM0YHRjNC60LAg0JTQsNGAXFx1MjAxOdGPLCAxNC4wNi4yMDEwINGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjMwODMxODgwMDM2Nzg0XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHUuYmUveXpKRjEtWUlBczRcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEuINCkLiDQnNC10L3QtNC10LvRjNGB0L7QvS4gwqvQn9GW0YHQvdGPINCx0LXQtyDRgdC70ZbQssK7LCDRgtCyLjMwOyAyLiDQmy4g0JfQsNCx0LDRgNCwLiDQpNCw0L3RgtCw0LfRltGPINC90LAg0YLQtdC80YMg0YPQutGA0LDRl9C90YHRjNC60L7RlyDQvdCw0YDQvtC00L3QvtGXINC/0ZbRgdC90ZYgwqvQndGW0Ycg0Y/QutCwINC80ZbRgdGP0YfQvdCwwrtcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0JDQutGW0LzQvtCy0LAg0JrRltGA0LAsIDMxLjAxLjIwMDkg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiMzA4MzE4ODExMjIzNTBcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly95b3V0dS5iZS9zcF91dGs3U2V4c1wiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMS4g0JkuINCT0LDQudC00L0uINCh0L7QvdCw0YLQsCDRgNC1INC80LDQttC+0YAsINCGINGH0LDRgdGC0LjQvdCwOyAyLiDQhi4g0KjQsNC80L4uIMKr0JLQtdGB0L3Rj9C90LrQsMK7XCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCR0L7QutC+0Ycg0JDRgNGC0LXQvCwgMjEuMDkuMjAwOCDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCIzMDgzMTg4MTE1MjQ5MFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1LmJlL3JIU2cwcVlFNEVvXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxLiDQmS7QoS4g0JHQsNGFLiDQkNC70LXQvNCw0L3QtNCwINC3INCf0LDRgNGC0LjRgtC4INC00L4g0LzRltC90L7RgDsgMi4g0KQuINCo0L7Qv9C10L0uINCd0L7QutGC0Y7RgNC9INC00L4g0LTRltGU0Lcg0LzRltC90L7RgFwiLFxuICAgICAgICBcIm5hbWVcIjogXCLQkdC+0YDQtdC50LrQviDQoNC+0LzQsNC9LCAxMS4wMS4yMDEwINGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjMwODMxODgxMTc3OTM5XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHUuYmUvcV9lQWc4MHhDOFVcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEuINCZLtChLiDQkdCw0YUuINCl0L7RgNCw0Lsg0Lcg0LrQsNC90YLQsNGC0Lgg4oSWMTQ3IMKrSmVzdXMgYmxlaWJldCBtZWluZSBGcmV1ZGXCuzsgMi4g0IYuINCo0LDQvNC+LiDQn9GA0LXQu9GO0LTRltGPIOKEljggwqtBbmRhbnRlLCBRdWFzaSBjYW1wYW5hwrtcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0JLQtdGA0LfRg9C9LdCg0L7Qu9GW0L3Qs9C10YAg0KLQtdGA0LXQt9CwLCAwOS4xMC4yMDA5INGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjMwODMxODgxMjA2NTY0XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHUuYmUvMU9YeUxSUWZ5MUFcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCbLiDQqNGW0YLRgtC1LiDQldGC0Y7QtCDihJYyMiwg0YLQsi42OFwiLFxuICAgICAgICBcIm5hbWVcIjogXCLQk9C10YDQvNCw0L3RjtC6INCh0L7RhNGW0Y8sIDIxLjEyLjIwMDcg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiMzA4MzE4ODEyMjE1MDBcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly95b3V0dS5iZS9DUnVjclVNUWM5UVwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0KPQutGA0LDRl9C90YHRjNC60LAg0L3QsNGA0L7QtNC90LAg0L/RltGB0L3RjyDQsiDQvtCx0YDQvtCx0YbRliDQni4g0KHQsNGA0LDRgtGB0YzQutC+0LPQviDCq9Cm0LLRltGC0LUgINGC0LXRgNC10L3Cu1wiLFxuICAgICAgICBcIm5hbWVcIjogXCLQk9C10YDQvNCw0L3RjtC6INCh0L7RhNGW0Y8sIDIxLjEyLjIwMDcg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiMzA4MzE4ODEyMzYyMzFcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly95b3V0dS5iZS8tV0NDRzdwc0x1c1wiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0KPQutGA0LDRl9C90YHRjNC60LAg0L3QsNGA0L7QtNC90LAg0L/RltGB0L3RjyDQsiDQvtCx0YDQvtCx0YbRliDQky4g0JHQtdC3XFx1MjAxOdGP0LfQuNGH0L3QvtCz0L4gwqvQntC5LCDRgyAgINCy0LjRiNC90LXQstC+0LzRgyDRgdCw0LTRg8K7XCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCT0L7QvNGW0LvQutC+INCQ0L3QsNGB0YLQsNGB0ZbRjywgMDguMDMuMjAwOCDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCIzMDgzMTg4MTI2NTMyMlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1LmJlL1BGdHI3cndndnBJXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQpC4g0JrRg9C70LDRgywg0KHQvtC90LDRgtC40L3QsCDihJYxLCDRgtCyLjIwXCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCT0L7QvNGW0LvQutC+INCQ0L3QsNGB0YLQsNGB0ZbRjywgMDguMDMuMjAwOCDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCIzMDgzMTg4MTI3ODQyNFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1LmJlLzhIQlZCc1RiQ2hjXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQpC4g0KjQvtC/0LXQvS4g0J3QvtC60YLRjtGA0L0gINC80ZYg0LHQtdC80L7Qu9GMINC80LDQttC+0YBcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0JPRgNC10YHRjNC60L4g0JzQsNGA0ZbRjywgMjIuMDYuMjAwOSDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCIzMDgzMTg4MTI5MTU1NVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1LmJlL3B6d0xlSlhWZ25zXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQni4g0JHRltC70LDRiC4gwqvQk9GD0YbRg9C70YzRgdGM0LrQsCDQv9C40YHQsNC90LrQsMK7XCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCT0YDQtdGB0YzQutC+INCc0LDRgNGW0Y8sIDIyLjA2LjIwMDkg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiMzA4MzE4ODEzMDUyNTBcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly95b3V0dS5iZS9la3RuQ25MNnlHVVwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0JwuINCc0L7RiNC60L7QstGB0YzQutC40LkuINCV0YLRjtC0IOKEljYsINGC0LIuIDcyXCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCT0YDQuNC90LjQuiDQlNGW0LDQvdCwLCAxOS4wLjIwMDYg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiMzA4MzE4ODEzMjQxOTZcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly95b3V0dS5iZS9rRkNXWF9tVnRRNFwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0J4uINCa0L7Qt9Cw0YDQtdC90LrQvi4g0JLQsNC70YzRgVwiLFxuICAgICAgICBcIm5hbWVcIjogXCLQk9GA0LjQvdC40Log0JTRltCw0L3QsCwgMTkuMC4yMDA2INGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjMwODMxODgxMzM5ODExXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHViZS5jb20vd2F0Y2g/dj1KS3FHTFZKQnNMayZmZWF0dXJlPXNoYXJlXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQlC4g0KnQuNGA0LjRhtGPLiDCq9Cj0LrRgNCw0ZfQvdGB0YzQutC40Lkg0LXRgtGO0LTCu1wiLFxuICAgICAgICBcIm5hbWVcIjogXCLQk9GA0YPRiNC60L7QstGB0YzQutCwINCS0LDQu9C10YDRltGPLCAxNy4wMS4yMDEwINGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjMwODMxODgxMzY0NDA3XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHViZS5jb20vd2F0Y2g/dj1HT2hQYV9BR3h1byZmZWF0dXJlPXNoYXJlXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQmy4g0IbQstCw0L3QtdC90LrQvi4gwqvQldC5INCb0Y7Qu9GWINC20LUg0LzRliwg0LvRjtC70Y7Cu1wiLFxuICAgICAgICBcIm5hbWVcIjogXCLQk9GA0YPRiNC60L7QstGB0YzQutCwINCS0LDQu9C10YDRltGPLCAxNy4wMS4yMDEwINGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjMwODMxODgxNDI5NjM2XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHUuYmUvTmExQXFvZ0daV2NcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEuINCZLtChLiDQkdCw0YUuINCi0YDQuNCz0L7Qu9C+0YHQvdCwINGW0L3QstC10L3RhtGW0Y8g0YDQtSDQvNGW0L3QvtGAOyAyLiDQhi4g0KjQsNC80L4uIMKr0JLQtdGB0L3Rj9C90LrQsMK7XCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCU0ZbQtNC10L3QutC+INCU0LDRgFxcdTIwMTnRjywgMjAuMDUuMjAwOSDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCIzMDgzMTg4MTQ1MDQ1NVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1LmJlL05NbDVtQ1llczA4XCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQlS4g0JHRgNC40LvRltC9LiDQotC+0LrQsNGC0LBcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0JTRg9C00LjRhyDQntC70YzQs9CwLCAxNC4xMC4yMDA5INGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjMwODMxODgxNDkwMDcxXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHUuYmUvTXUtcEJZZHRvWFlcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCkLiDQnNC10L3QtNC10LvRjNGB0L7QvS4gwqvQn9GW0YHQvdGPINCx0LXQtyDRgdC70ZbQssK7XCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCU0YPQtNC40Ycg0J7Qu9GM0LPQsCwgMTQuMTAuMjAwOSDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCIzMDgzMTg4MTUwNDA0NVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1LmJlL2pmcnJmMC11elFnXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQni4g0JTRjtCx0Y7Qui4gwqvQlNC30LjSkdCwwrtcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0ITRgNC+0YjQutGW0L3QsCDQkNC90L3QsCwgMDguMTEuMjAwONGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjMwODMxODgxNTI2ODI5XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHUuYmUvMzZ0UF9xTEVaa1FcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCkLiDQm9GW0YHRgi4gwqvQktGC0ZbRhdCwwrsg4oSWMlwiLFxuICAgICAgICBcIm5hbWVcIjogXCLQhNGA0L7RiNC60ZbQvdCwINCQ0L3QvdCwLCAwOC4xMS4yMDA40YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiMzA4MzE4ODE1Mzk5MzhcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly95b3V0dS5iZS8yU3BrSUNkNHdHZ1wiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0J4uINCR0L7RgNC00Y7Qs9C+0LLQsC4gwqvQo9C60YDQsNGX0L3RgdGM0LrQuNC5INGA0L7QvNCw0L3RgcK7XCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCW0LDRgNGW0Lkg0KHQvtGE0ZbRjywgMTguMDguMjAwOdGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjMwODMxODgxNTUyNTMxXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHUuYmUvTVEwOGh2VkdGQXdcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCcLiDQmtC+0LvQtdGB0YHQsC4g0JrQvtC70L7QvNC40LnQutCwINGE0LAg0LzRltC90L7RgFwiLFxuICAgICAgICBcIm5hbWVcIjogXCLQltCw0YDRltC5INCh0L7RhNGW0Y8sIDE4LjA4LjIwMDnRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCIzMDgzMTg4MTU2NDE4OFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCLRgtCyLjE3IOKEljFcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItClLiDQkNC70YzRhNCy0LXQvS4gwqvQodC+0L3Rj9GH0L3RliDQt9Cw0LnRh9C40LrQuMK7INC3INGG0LjQutC70YMgwqvQmtCw0YDRgtC40L3QutC4INCo0YXQtdGAwrssXCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCa0LDQvdGB0YzQutCwINCQ0L3QsNGB0YLQsNGB0ZbRjywgMjMuMDcuMjAwOdGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjMwODMxODgxNTkyMDY4XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHUuYmUvTEc0YTJvdUU0ejRcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCvLiDQkdC+0LHQsNC70ZbQui4gwqvQkdGD0YDRhdC70LjQstC40Lkg0LLQvtC00L7RgdC/0LDQtMK7XCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCa0LDQvdGB0YzQutCwINCQ0L3QsNGB0YLQsNGB0ZbRjywgMjMuMDcuMjAwOdGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjMwODMxODgxNjA0MzE1XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHUuYmUvWUtlS2tEUExqeVFcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCTLiDQm9GW0YXQvdC10YAuINCg0L7QvdC00L4gwqvQktC00L7QvNCwwrtcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0JrQsNGC0L7Qu9C40Log0JTQsNGA0LjQvdCwLCAwMS4wOS4yMDA5INGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjMwODMxODgxNjE4NzIwXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHUuYmUvNjNGTEdhWXhTSEFcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCcLiDQnNCw0LnRlNGALiDCq9CG0L3QtNGW0LDQvdGB0YzQutCwINGB0LXRgNC10L3QsNC00LDCu1wiLFxuICAgICAgICBcIm5hbWVcIjogXCLQmtCw0YLQvtC70LjQuiDQlNCw0YDQuNC90LAsIDAxLjA5LjIwMDkg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiMzA4MzE4ODE2MzUzMzNcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly95b3V0dS5iZS9jRHluelgtT1BZa1wiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0KEuINCn0LXRgNC90LXRhtGM0LrQuNC5LCDQsNGA0LDQvdC2LiDQni4g0KjQsNCy0LDRgNC00LDQutCwLsK7LiDQntC5LCDRgyDQu9GD0LfRliDRh9C10YDQstC+0L3QsCDQutCw0LvQuNC90LDCu1wiLFxuICAgICAgICBcIm5hbWVcIjogXCLQmtGW0YHQsNGA0LXRhtGMINCG0LLQsNC9LCAyNC4wNC4yMDA5INGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjMwODMxODgxNjk5MTYzXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHUuYmUvZnRGdkxYVFgyOVVcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCcLiDQlNCy0L7RgNC20LDQui4gwqvQlNC20LDQt9C+0LLQuNC5INC10YLRjtC0wrsg4oSWMSDQtNC+INC80LDQttC+0YBcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0JrRltGB0LDRgNC10YbRjCDQhtCy0LDQvSwgMjQuMDQuMjAwOSDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCIzMDgzMTg4MTc1MTU4MVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1YmUuY29tL3dhdGNoP3Y9TkhUQnYxakdCY1kmZmVhdHVyZT1zaGFyZVwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0JAuINCa0L7RgNC10LvQu9GWLiDQodCw0YDQsNCx0LDQvdC00LAg0LzRliDQvNGW0L3QvtGAXCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCa0ZbRh9GD0Log0KDQvtC80LDQvSwgMjkuMTAuMjAwOCDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCIzMDgzMTg4MTc3NjIzN1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1YmUuY29tL3dhdGNoP3Y9YVpPVFdON0wwajAmZmVhdHVyZT1zaGFyZVwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0IYuINCc0L7RhdC90LDRh9C10LLQsC4gwqvQm9GW0YLQvdGW0Lkg0LLQtdGH0ZbRgMK7XCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCa0ZbRh9GD0Log0KDQvtC80LDQvSwgMjkuMTAuMjAwOCDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCIzMDgzMTg4MTc5NDE3NFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1LmJlLzBBVU5IdDUyLTNVXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxLiDQoS4g0JbQtNCw0L3QvtCyLiDQn9GA0LXQu9GO0LQ7IDIuINCQLiDQkdCw0LHQsNC00LbQsNC90Y/QvS4gwqvQktCw0LPQsNGA0YjQsNC/0LDRgtGB0YzQutC40Lkg0YLQsNC90LXRhtGMwrtcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0JrQu9GW0LzQvtCy0LjRhyDQlNCw0LLQuNC0LCAwOS4wNy4yMDA5INGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjMwODMxODgxODY4MjExXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHUuYmUvUUhkclFrelVUelVcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCcLiDQqNC10L3RgtGO0YDQuiAo0KLQtdGA0LXRidGD0LopLiDQoNCw0L/RgdC+0LTRltGPIMKr0JTQviDRgdCy0ZbRgtC70LDCu1wiLFxuICAgICAgICBcIm5hbWVcIjogXCLQmtC+0L/QuNGH0LXQvdGB0YzQutCwINCU0LDRgFxcdTIwMTnRjywgMzAuMDQuMjAwOSDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCIzMDgzMTg4MTkxNTM3NlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1LmJlL05NcXgyb1VfdmZzXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQnC4g0KjQtdC90YLRjtC6ICjQotC10YDQtdGJ0YPQuikuIMKr0KHQu9GM0L7Qt9C4wrtcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0JrQvtC/0LjRh9C10L3RgdGM0LrQsCDQlNCw0YBcXHUyMDE50Y8sIDMwLjA0LjIwMDkg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiMzA4MzE4ODE5NDQyMDFcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly95b3V0dS5iZS8tajN4RDB5OWhpWVwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMS4g0Jku0KEuINCR0LDRhS4g0J/RgNC10LvRjtC00ZbRjyDRliDRhNGD0LPQsCDQtNC+INC80ZbQvdC+0YAsINCU0KLQmi3QhjsgMi4g0KQuINCo0L7Qv9C10L0uINCd0L7QutGC0Y7RgNC9INC00L4g0LTRltGU0Lcg0LzRltC90L7RgFwiLFxuICAgICAgICBcIm5hbWVcIjogXCLQmtGA0LDQstGH0YPQuiDQnNCw0YDRltGPLCAxNC4wNi4yMDA4INGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjMwODMxODgxOTc3ODIwXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHUuYmUvUVg5MzZZWmU3Sk1cIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCeLiDQkdGW0LvQsNGILiDCq9CT0YPRhtGD0LvRjNGB0YzQutCwINC/0LjRgdCw0L3QutCwwrtcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0JrRgNGD0YLQtdC90LrQviDQlNCw0YDQuNC90LAsIDEwLjExLjIwMDkg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiMzA4MzE4ODIwMTUzMDdcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly95b3V0dS5iZS9GbURrVnZVTVJ5TVwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0KIuINCQ0YTQsNC90LDRgdC10L3QutC+LiDCq9Cb0LXQsdGW0LTRjMK7XCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCa0YDRg9GC0LXQvdC60L4g0JTQsNGA0LjQvdCwLCAxMC4xMS4yMDA5INGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjMwODMxODgyMDcxODE4XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHViZS5jb20vd2F0Y2g/dj1wTTE1MHFkQkFNZyZmZWF0dXJlPXNoYXJlXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQhi4g0KjQsNC80L4uIMKr0JLQtdGB0L3Rj9C90LjQuSDQtNC+0YnCuyDRltC3INGG0LjQutC70YMgwqvQk9GD0YbRg9C70YzRgdGM0LrRliDQsNC60LLQsNGA0LXQu9GWwrtcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0JvQtdCy0YfRg9C6INCi0LjQvNC+0YTRltC5LCAxOS4xMS4yMDA4INGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjMwODMxODgyMTAyNTI3XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHUuYmUvZF9wZmdiY28zNUlcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCGLiDQkdC10YDQutC+0LLQuNGHLiDQn9GA0LXQu9GO0LTRltGPINC80ZYg0LzQsNC20L7RgFwiLFxuICAgICAgICBcIm5hbWVcIjogXCLQm9C10LLRh9GD0Log0KLQuNC80L7RhNGW0LksIDE5LjExLjIwMDgg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiMzA4MzE4ODIxMjYyMjlcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly95b3V0dS5iZS81OUdXVjVfci1xd1wiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0JMuINCT0LXQvdC00LXQu9GMLdCuLiDQpdCw0LvRjNCy0L7RgNGB0LXQvS4g0J/QsNGB0LDQutCw0LvRltGPINC70Y8g0LzRltC90L7RgFwiLFxuICAgICAgICBcIm5hbWVcIjogXCLQnNCw0LPQtNC40YHRjtC6INCS0ZbQutGC0L7RgNGW0Y8sIDIzLjEwLjIwMDgg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiMzA4MzE4ODIxNTk2OThcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly95b3V0dS5iZS9mcG1hSFpnNDZEZ1wiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0JwuINCU0YDQtdC80LvRjtCz0LAuIMKr0JvRltGA0LjRh9C90LAg0L/RltGB0L3Rj8K7XCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCc0LDQs9C00LjRgdGO0Log0JLRltC60YLQvtGA0ZbRjywgMjMuMTAuMjAwOCDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCIzMDgzMTg4MjIwMjE2MVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1LmJlL1NvXzZxMW12bGNjXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxLiDQmy4g0KjRg9C60LDQudC70L4uIMKr0KLQvtC60LDRgtCwLdCa0LDQvNC/0LDQvdCwwrs7IDIuINCkLiDQqNC+0L/QtdC9LiDCq9Ck0LDQvdGC0LDQt9GW0Y8t0LXQutGB0L/RgNC+0LzRgsK7INC00L4g0LTRltGU0Lcg0LzRltC90L7RgFwiLFxuICAgICAgICBcIm5hbWVcIjogXCLQnNCw0LvRj9GA0YfRg9C6INCE0LvRltC30LDQstC10YLQsCwgMjQuMDguMjAwOSDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCIzMDgzMTg4MjIzOTkxN1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1LmJlL3RjRFZtbi1BMGNzXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQmS4g0JPQsNC50LTQvS4g0KHQvtC90LDRgtCwINC80ZYg0LzRltC90L7RgCwg0IYg0YfQsNGB0YLQuNC90LBcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0JzQsNGA0YLQuNC90LjRiNC40L0g0JLQu9Cw0LTQuNGB0LvQsNCyLCAwOC4wNi4yMDA2INGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjMwODMxODgyMjYxNzY4XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHUuYmUvSG5EcURmaHZZVGdcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCeLiDQm9C40YEuIMKr0JvQtdCz0LXQvdC00LDCu1wiLFxuICAgICAgICBcIm5hbWVcIjogXCLQnNCw0YDRgtC40L3QuNGI0LjQvSDQktC70LDQtNC40YHQu9Cw0LIsIDA4LjA2LjIwMDYg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiMzA4MzE4ODIyOTE3MDlcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly95b3V0dS5iZS9tZm84WDVEUWRNNFwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0KEuINCR0L7RgNGC0LrQtdCy0LjRhy4g0JXRgtGO0LQsINGC0LIuMTUg4oSWOVwiLFxuICAgICAgICBcIm5hbWVcIjogXCLQnNCw0YXQvdGW0YbRjNC60LAg0JLQu9Cw0LTQuNGB0LvQsNCy0LAsIDAzLjExLjIwMDgg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiMzA4MzE4ODIzNzI0NTdcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly95b3V0dS5iZS9fbUhieFlqWFZ1b1wiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0J0uINCd0LjQttCw0L3QutGW0LLRgdGM0LrQuNC5LiDQktCw0LvRjNGBINC00L4g0LTRltGU0Lcg0LzRltC90L7RgFwiLFxuICAgICAgICBcIm5hbWVcIjogXCLQnNCw0YXQvdGW0YbRjNC60LAg0JLQu9Cw0LTQuNGB0LvQsNCy0LAsIDAzLjExLjIwMDgg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiMzA4MzE4ODIzOTY4MjFcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly95b3V0dS5iZS9EWUF5UERqZUREb1wiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0JkuINChLiDQkdCw0YUuINCi0YDQuNCz0L7Qu9C+0YHQvdCwINGW0L3QstC10L3RhtGW0Y8g0YDQtSDQvNCw0LbQvtGAXCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCc0LXRidC10YDRj9C60L7QsiDQmtC+0YHRgtGP0L3RgtC40L0sIDA4LjA4LjIwMDgg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiMzA4MzE4ODI0MjI1MjRcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly95b3V0dS5iZS8xQkpBckN2MzlfQVwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0KEuINCR0L7RgNGC0LrQtdCy0LjRhy4gwqvQn9GA0L7Qs9GD0LvRj9C90LrQsCDQkNC70YPQv9C60L7Rji3QodGF0ZbQtNC90LAg0ZbQtNC40LvRltGPwrsg0Lcg0YbQuNC60LvRgyDCq9Ca0YDQuNC80YHRjNC60ZYg0LXRgdC60ZbQt9C4wrtcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0JzQtdGJ0LXRgNGP0LrQvtCyINCa0L7RgdGC0Y/QvdGC0LjQvSwgMDguMDguMjAwOCDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCIzMDgzMTg4MjQ1NTcyMVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1LmJlLzl4LXlMMm5MVGFjXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxLiDQpC4g0KjQvtC/0LXQvS4g0JLQsNC70YzRgSwg0YLQsi4gNjkg4oSWMjsgMi4g0JwuINCb0LjRgdC10L3QutC+LiDQldC60YHQv9GA0L7QvNGCXCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCc0ZbRgdC10YDRg9C6INCc0LDRgNGW0LDQvdC90LAsIDE5LjA4LjIwMDcg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiMzA4MzE4ODI0OTMwMzFcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly95b3V0dS5iZS9NZDh0eVFFUDNJZ1wiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMS4g0JsuINCg0LXQstGD0YbRjNC60LjQuS4g0J/RltGB0L3RjzsgMi4g0IYuINCc0L7RhdC90LDRh9C+0LLQsC4g0JXRgtGO0LQt0LrQsNGA0YLQuNC90LAgwqvQnNC+0YDQtcK7XCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCc0L7RhSDQndCw0LTRltGPLCAwMS4xMC4yMDA4INGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjMwODMxODgyNTA3MjQ2XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHUuYmUvUk80eEtmdHpyeDhcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEuINCZLiDQk9Cw0LnQtNC9LiDCq9Cj0LPQvtGA0YHRjNC60LUg0YDQvtC90LTQvsK7INC3IMKr0KTQvtGA0YLQtdC/0ZbQsNC90L3QvtCz0L4g0YLRgNGW0L7CuyDRgdC+0LvRjCDQvNCw0LbQvtGAOyAyLiDQhi4g0JHQtdGA0LrQvtCy0LjRhy4g0J/RgNC10LvRjtC0INGE0LAg0LTRltGU0Lcg0LzRltC90L7RgFwiLFxuICAgICAgICBcIm5hbWVcIjogXCLQntC/0LDQvdCw0YHRjtC6INCa0LDRgNC+0LvRltC90LAsIDA1LjA3LjIwMDkg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiMzA4MzE4ODI1MjQyMzFcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly95b3V0dS5iZS9hOXdLOE14WDl6TVwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMS4g0KQuINCo0L7Qv9C10L0uINCk0LDQvdGC0LDQt9GW0Y8t0LXQutGB0L/RgNC+0LzRgiDQtNC+INC00ZbRlNC3INC80ZbQvdC+0YA7IDIuINCQLiDQpdCw0YfQsNGC0YPRgNGP0L0uINCi0L7QutCw0YLQsFwiLFxuICAgICAgICBcIm5hbWVcIjogXCLQntC/0LDQvdCw0YHRjtC6INCi0LDRgNCw0YEsIDEzLjEwLjIwMDcg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiMzA4MzE4ODI1Mzk5NjhcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly95b3V0dS5iZS9wSlNheVlYSlF6NFwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0K4uINCp0YPRgNC+0LLRgdGM0LrQuNC5LiDCq9Ce0YHRltC90L3RjyDQv9GW0YHQvdGPwrtcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0J7Qv9Cw0YDRj9C6INCG0YDQuNC90LAsIDMwLjA0LjIwMDkg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiMzA4MzE4ODI2ODE0NzlcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly95b3V0dS5iZS9kRE9wOE03YkRha1wiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0JMuINCT0LXQvdC00LXQu9GMLiDQmtCw0L/RgNC40YfRltC+XCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCe0L/QsNGA0Y/QuiDQhtGA0LjQvdCwLCAzMC4wNC4yMDA5INGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjMwODMxODgyNzI3NTc1XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHViZS5jb20vd2F0Y2g/dj1fd25NNTY1dldiOCZmZWF0dXJlPXNoYXLQtVwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMS4g0JcuINCk0ZbQsdGW0YUuINCf0L7QtdC80LA7IDIu0JouINCU0LXQsdGO0YHRgdGWLiDCq9Cb0Y/Qu9GM0LrQvtCy0LjQuSDQutC10Lot0YPQvtC6wrtcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0J7RgdGC0LDQv9C10L3QutC+INCQ0L3QvdCwLCAyNi4wOC4yMDA5INGALtC9LiAoMi3QuNC5INGA0ZbQuiDQvdCw0LLRh9Cw0L3QvdGPKVwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjMwODMxODgyNzQ0OTAyXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHUuYmUvdElCSFpNVmI2T29cIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCaLiDQp9C10YDQvdGWLiDQldGC0Y7QtCDihJYxNSwg0YLQsi4yOTlcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0J/QsNC90YfQtdC90LrQviDQodC+0YTRltGPLCAwOC4wLjIwMDkg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiMzA4MzE4ODI3NjE2ODJcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly95b3V0dS5iZS9tR1B0VVVkcjRRb1wiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0IYuINCo0LDQvNC+LiDCq9CT0YPQvNC+0YDQtdGB0LrQsMK7XCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCf0LDQvdGH0LXQvdC60L4g0KHQvtGE0ZbRjywgMDguMC4yMDA5INGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjMwODMxODgyNzk1NjAzXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHUuYmUvcWZjOHRmNm5NMVlcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCSLiDQn9GA0LDRhtGO0LouIMKr0J3QsNCy0LXRgdC90ZbCu1wiLFxuICAgICAgICBcIm5hbWVcIjogXCLQn9C70LXRiNC60L4g0IbQs9C90LDRgtGW0LksIDIzLjEwLjIwMDkg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiMzA4MzE4ODI4MTM1OThcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly95b3V0dS5iZS9FVGxDVkpaNXM5UVwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0KQuINCb0ZbRgdGCLiDCq9CS0YLRltGF0LDCuyDihJYyXCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCf0LvQtdGI0LrQviDQhtCz0L3QsNGC0ZbQuSwgMjMuMTAuMjAwOSDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCIzMDgzMTg4MjgyNzA2MVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1LmJlLy1WM3QyZm1TdmZRXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQmS7QoS4g0JHQsNGFLiDQotGA0LjQs9C+0LvQvtGB0L3QsCDRltC90LLQtdC90YbRltGPINC80ZYg0LzRltC90L7RgFwiLFxuICAgICAgICBcIm5hbWVcIjogXCLQoNCw0LTQutC+0LLRgdGM0LrQsCDQkNC70ZbQvdCwLCAzMC4wNy4yMDE3INGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjMwODMxODgyODQwNjYzXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHUuYmUvQ182QXhuejJPTUFcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCVLiDQk9GA0ZbQsy4gwqvQhtC80L/RgNC+0LLRltC30LDRhtGW0Y/Cu1wiLFxuICAgICAgICBcIm5hbWVcIjogXCLQoNCw0LTQutC+0LLRgdGM0LrQsCDQkNC70ZbQvdCwLCAzMC4wNy4yMDE3INGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjMwODMxODgyODU1MjE4XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHUuYmUvRDV4Qkg1VHVoM1FcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCkLiDQr9C60LjQvNC10L3QutC+LiDCq9Cc0YDRltGXINC90LAg0LHQtdGA0LXQt9GWINC80L7RgNGPwrtcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0KDQtdC00YzQutCwINCf0L7Qu9GW0L3QsCwxNi4xMi4yMDA50YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiMzA4MzE4ODI4NjU0NDVcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly95b3V0dS5iZS9nd0lXYkxYQzY3a1wiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0JMuINCR0LXQt1xcdTIwMTnRj9C30LjRh9C90LjQuS4g0JXRgtGO0LQg4oSWMTcgwqvQkdGD0YDQtdCy0ZbRgdC90LjQusK7XCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCg0LXQtNGM0LrQsCDQn9C+0LvRltC90LAsMTYuMTIuMjAwOdGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjMwODMxODgyODc5MDkyXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHViZS5jb20vd2F0Y2g/dj02Y1M2aG5SOHJLZyZhbXA7ZmVhdHVyZT1zaGFyZVwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMS4g0KQuINCa0YPQu9Cw0YMuINCh0L7QvdCw0YLQuNC90LAg4oSWMSwg0YLQsi42MDsgMi4g0JouINCS0ZbQui4g0J/QvtC70L7QvdC10LdcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0KDQvtCx0YPQu9GP0Log0JzQuNC60L7Qu9CwLDA0LjA1LjIwMTDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCIzMDgzMTg4Mjg5NjU5OFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1LmJlL1BJOThHVmQ5Z0tzXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQmS7QoS4g0JHQsNGFLiDQlNCy0L7Qs9C+0LvQvtGB0L3QsCDRltC90LLQtdC90YbRltGPIOKEljgsINGE0LAg0LzQsNC20L7RgFwiLFxuICAgICAgICBcIm5hbWVcIjogXCLQoNGD0L/QsCDQkNC70YzQsdC10YDRgiwgMzEuMDUuMjAwNyDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCIzMDgzMTg4MjkyMjg2M1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1LmJlL3ZIWlFCOXVLd0ZzXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQni4g0J3QtdC20LjQs9Cw0LkuIMKr0J/RgNC+0YXQsNC90L3Rj8K7XCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCg0YPQv9CwINCQ0LvRjNCx0LXRgNGCLCAzMS4wNS4yMDA3INGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjMwODMxODgyOTQzNjY0XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL0B1c2VyLWJpNXJwOG1rN3VcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEuINCcLiDQodC60L7RgNC40LouIMKr0JzQtdC70L7QtNGW0Y/CuzsgMi4g0IYuINCR0LXRgNC60L7QstC40YcuINCi0L7QutCw0YLQsCDQu9GPINC80ZbQvdC+0YBcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0KHQsNCy0YDQsNC5INCa0LDRgtC10YDQuNC90LAsIDA0LjA3LjAwOSDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCIzMDgzMTg4Mjk2MDk5MVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1LmJlL1l2OVl2czBmZDNFXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxLiDQmi4g0JvQsNCy0LDQu9C70LUuINCa0L7QvdGG0LXRgNGC0L3QuNC5INC10YLRjtC0IMKr0JzQtdGC0LXQu9C40LrCuzsgMi4g0IYuINCR0LXRgNC60L7QstC40YcuINCi0L7QutCw0YLQsCDQu9GPINC80ZbQvdC+0YBcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0KHQu9C+0LHQvtC00Y/QvdGO0Log0JzQsNGA0LPQsNGA0LjRgtCwLCAyMi4wOS4yMDA4INGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjMwODMxODgyOTc4NDY3XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHUuYmUveFJNa0xXQmJWY0FcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCSLiDQnNC+0YbQsNGA0YIuINCh0L7QvdCw0YLQsCDRgdGWINCx0LXQvNC+0LvRjCDQvNCw0LbQvtGALCDQhiDRh9Cw0YHRgtC40L3QsFwiLFxuICAgICAgICBcIm5hbWVcIjogXCLQotC60LDRh9C10L3QutC+INCQ0LzRltC90LAsIDAzLjAzLjIwMDkg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiMzA4MzE4ODI5OTgzODdcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly95b3V0dS5iZS94TnI0cW1ORkF2b1wiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0J8uINCX0LDRhdCw0YDQvtCyLiDQotC+0LrQsNGC0LAt0L/RgNC10LvRjtC00ZbRj1wiLFxuICAgICAgICBcIm5hbWVcIjogXCLQotC60LDRh9C10L3QutC+INCQ0LzRltC90LAsIDAzLjAzLjIwMDkg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiMzA4MzE4ODMwMjEwMTdcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly95b3V0dS5iZS9nRkUxRjFIeTdHUVwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0Jku0JEuINCS0LDQvdGF0LDQu9GMLiBBbGxlZ3JvINGW0Lcg0KHQvtC90LDRgtC40L3QuCDQu9GPINC80LDQttC+0YBcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0KLRgNC+0YbQtdC90LrQviDQkNC90L3QsCwgMTIuMDYuMjAwOCDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCIzMDgzMTg4MzAzNzc2N1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1LmJlL0V6YmJBUmtzWGxFXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQkC4g0JrQvtC80LvRltC60L7QstCwLiDCq9Cc0LDRiNC40L3QsCDRh9Cw0YHRg8K7ICjQhtC90LLQtdC90YbRltGPINC3INGG0LjQutC70YMgwqvQhtC90YLQtdGA0LLQsNC70ZbRj8K7KVwiLFxuICAgICAgICBcIm5hbWVcIjogXCLQotGA0L7RhtC10L3QutC+INCQ0L3QvdCwLCAxMi4wNi4yMDA4INGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjMwODMxODgzMDU3MTg5XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHUuYmUvQmtvTGV0SlNNSmdcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCbLiDQkdC10YLRhdC+0LLQtdC9LiDQodC+0L3QsNGC0LjQvdCwINGE0LAg0LzQsNC20L7RgFwiLFxuICAgICAgICBcIm5hbWVcIjogXCLQotGD0YDRh9C40Log0KHQvtGE0ZbRjywgMTguMDUuMjAwOSDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCIzMDgzMTg4MzA3MjkxMFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1LmJlLzA1VWxXS2hUdDU4XCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQlS4g0JPRgNGW0LMuINCS0LDQu9GM0YFcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0KLRg9GA0YfQuNC6INCh0L7RhNGW0Y8sIDE4LjA1LjIwMDkg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiMzA4MzE4ODMxMDE1ODBcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly95b3V0dS5iZS95Tm92ejZVSFRZMFwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0JIuINCS0LXRgNC80LXQvdC40YcsINC+0LHRgNC+0LHQutCwINCTLiDQkdC10LdcXHUyMDE50Y/Qt9C40YfQvdC+0LPQvi4gwqvQp9C+0YDQvdC+0LHRgNC40LLRhtGWwrtcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0KTQtdC00L7RgNC10L3QutC+INCE0LvQuNC30LDQstC10YLQsCwgMC4wOS4yMDA4INGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjMwODMxODgzMTE2MjkxXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHUuYmUvbElxdEZ0bXFYZ3dcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCcLiDQmtC70LXQvNC10L3RgtGWLiDQodC+0L3QsNGC0LjQvdCwIOKEljMsINGB0L7Qu9GMINC80LDQttC+0YBcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0KTQtdC00L7RgNC10L3QutC+INCE0LvQuNC30LDQstC10YLQsCwgMC4wOS4yMDA4INGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjMwODMxODgzMTMyMDk4XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHUuYmUvQmZ0a0pheXhVV1VcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEuINCbLiDQodGD0YXQvtGJ0LXRlNCy0LAuINCV0YLRjtC0OyAyLiDQni4g0JrQuNC80LvQuNC6LiDCq9Cc0ZbQvdGW0LDRgtGO0YDQvdCwINCb0LXQvtC90YLQvtCy0ZbQsNC90LDCu1wiLFxuICAgICAgICBcIm5hbWVcIjogXCLQp9C80LXQu9GO0Log0JDQvdC90LAsMjIuMDUuMjAwOdGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjMwODMxODgzMTUwMjYyXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHUuYmUvMVRLQ2dyV0Fqd0E7XCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQmS7QoS4g0JHQsNGFLiDQn9GA0LXQu9GO0LTRltGPINGWINGE0YPQs9CwINGB0L7Qu9GMINC80ZbQvdC+0YAg0Lcg0JTQotCaLdCGXCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCo0LXQstGH0YPQuiDQndGW0LrQvtC70LXRgtGC0LAsIDI2LjA0LjIwMDkg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiMzA4MzE4ODM4NTU2NDZcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly93d3cueW91dHViZS5jb20vd2F0Y2g/dj13Z2Nfa0xJSWk2Z1wiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0KEuINCR0L7RgNGC0LrQtdCy0LjRhy4g0JXRgtGO0LQg0YTQsCDQtNGW0ZTQtyDQvNGW0L3QvtGAXCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCo0LXQstGH0YPQuiDQndGW0LrQvtC70LXRgtGC0LAsIDI2LjA0LjIwMDkg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiMzA4MzE4ODM5MTA0MjVcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly95b3V0dS5iZS8yN01SSnNaVXVmQVwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0Jku0KEuINCR0LDRhS4g0J/RgNC10LvRjtC00ZbRjyDRliDRhNGD0LPQsCDRgdC+0LvRjCDQvNGW0L3QvtGAINC3INCU0KLQmi3QhlwiLFxuICAgICAgICBcIm5hbWVcIjogXCLQr9C90YfRg9C6INCS0LDQu9C10YDRltGPLCAxMC4wNi4yMDA3INGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjMwODMxODgzOTI4MjE5XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHUuYmUvdHJGUEExSnh4YXNcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCZLiDQk9Cw0LnQtNC9LiDQodC+0L3QsNGC0LAg0YDQtSDQvNCw0LbQvtGALCDQhiDRh9Cw0YHRgtC40L3QsFwiLFxuICAgICAgICBcIm5hbWVcIjogXCLQr9C90YfRg9C6INCS0LDQu9C10YDRltGPLCAxMC4wNi4yMDA3INGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjMwODMxODgzOTQyMTEzXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHUuYmUveGJKdHhlMlM2MDBcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCVLiDQk9GA0ZbQsy4gwqvQodC10YDRhtC1INC/0L7QtdGC0LDCu1wiLFxuICAgICAgICBcIm5hbWVcIjogXCLQkdGW0LvQsCDQmtGB0LXQvdGW0Y8sIDE1LjAxLjIwMDUg0YAu0L1cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCIzMDgzMTg4NDA2NjExOFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1YmUuY29tL3Nob3J0cy8wTl94VjNVNUc4MD9mZWF0dXJlPXNoYXJlXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQhi4g0JrRgNCw0LzQtdGALiDQldGC0Y7QtCDihJY1LCDQu9GPINC80ZbQvdC+0YBcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0JHRltC70LAg0JrRgdC10L3RltGPLCAxNS4wMS4yMDA1INGALtC9XCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiMzA4MzE4ODQxMTg4MTJcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly95b3V0dS5iZS9nY0w1SWJYaXhTRVwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMS4g0KQuINCo0L7Qv9C10L0uINCd0L7QutGC0Y7RgNC9IOKEljIsINGC0LIuIDk7IDIuINCQLiDQqNGC0L7Qs9Cw0YDQtdC90LrQvi4g0J/QvtC10LzQsCAo0L/RgNC40YHQstGP0YfRg9GU0YLRjNGB0Y8g0Jwu0KIuINCa0L7Qu9GP0LTRlilcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0JHQvtC90LTQsNGA0LXQvdC60L4g0JTQtdC90LjRgSwgMjguMDEuMjAwNiDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCIzMDgzMTg4NDE0MzczM1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1LmJlL3dZOVdEaWhfbnZjXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQnC4g0JvQuNGB0LXQvdC60L4uIMKr0J/RltGB0L3RjyDQsdC10Lcg0YHQu9GW0LLCu1wiLFxuICAgICAgICBcIm5hbWVcIjogXCLQktC+0YDQvtC90YbQvtCy0LAg0JTRltCw0L3QsCwgMjUuMDIuMjAwNSDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCIzMDgzMTg4NDE1NTA5MVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1LmJlL0RYdndzT0JhbUpjXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCLQpC4g0JzQtdC90LTQtdC70YzRgdC+0L0uIMKr0KTQsNC90YLQsNC30ZbRjy3QutCw0L/RgNC40YHCu1wiLFxuICAgICAgICBcIm5hbWVcIjogXCLQktC+0YDQvtC90YbQvtCy0LAg0JTRltCw0L3QsCwgMjUuMDIuMjAwNSDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCIzMDgzMTg4NDE4OTQwMVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1LmJlL3BFN1A5TTFpWFJvXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxLiDQkS4g0JvRj9GC0L7RiNC40L3RgdGM0LrQuNC5LiDQn9GA0LXQu9GO0LTRltGPINGC0LIuNDQg4oSWNDsgMi4g0KQu0JvRltGB0YIuwqvQltC10L3QtdCy0YHRjNC60ZYg0LTQt9Cy0L7QvdC4wrsg0Lcg0YbQuNC60LvRgyDCq9Cg0L7QutC4INC80LDQvdC00YDRltCy0L7Qui4g0KjQstC10LnRhtCw0YDRltGPwrtcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0JPRgNGD0YjQutC+INCQ0L3QsNGB0YLQsNGB0ZbRjywgMTguMDEuMjAwNlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjMwODMxODg0MjA4MjMwXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHViZS5jb20vd2F0Y2g/dj1KSHFhanA1WVBxZyZmZWF0dXJlPXNoYXJlXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxLiDQmi4g0JTQtdCx0Y7RgdGB0ZYuINCQ0YDQsNCx0LXRgdC60LAg4oSWMjsgMi4g0KEuINCR0L7RgNGC0LrQtdCy0LjRhy4g0JXRgtGO0LQg4oSWMiwg0YLQsi4xNVwiLFxuICAgICAgICBcIm5hbWVcIjogXCLQk9GD0LvRgtGD0YDRj9C9INCf0L7Qu9GW0L3QsCwgMTEuMTAuMjAwNiDRgC7QvVwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjMwODMxODg0MjIwODEzXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9VUVpV2NGUmNQUndcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCcLiDQmtC+0LvQtdGB0YHQsC4gwqvQotGA0Lgg0LrQvtC70L7QvNC40LnQutC4wrtcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0JTQsNGI0LXQstGB0YzQutCwINCQ0LvRjNC+0L3QsCwgMDQuMDQuMjAwNSDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCIzMDgzMTg4NDIzMTQ0NFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1LmJlL0xYTzc3Y3FyQ1l3XCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxLiDQki4g0JrQvtGB0LXQvdC60L4uINCV0YLRjtC0INGE0LAg0LTRltGU0Lcg0LzRltC90L7RgCwg0YLQsi44OyAyLiDQoC4g0KjRg9C80LDQvS4gwqvQn9C+0YDQuNCywrsg0ZbQtyDRhtC40LrQu9GDIMKr0KTQsNC90YLQsNGB0YLQuNGH0L3RliDQv1xcdTIwMTnRlNGB0LjCu1wiLFxuICAgICAgICBcIm5hbWVcIjogXCLQltC10LvRj9C30LrQviDQodC+0YTRltGPLCAzMC4wOS4yMDA2INGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjMwODMxODg0MjUwNzU2XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHUuYmUva0NVeGotOVJFM2dcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCkLiDQqNC+0L/QtdC9LiDQn9C+0LvQvtC90LXQtyDihJYxLCDRgtCyLjQwXCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCd0LDQt9Cw0YDRg9C6INCG0YDQuNC90LAsIDMwLjA0LjIwMDQg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiMzA4MzE4ODQyNjI2OTlcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly95b3V0dS5iZS9SajBUd2Q3TmN3NFwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0JwuINCa0L7Qu9C10YHRgdCwLiDCq9Ca0L7QvdGC0YDQsNGB0YLQuMK7INC3INGG0LjQutC70YMgwqvQmtCw0YDRgtC40L3QuCDQk9GD0YbRg9C70YzRidC40L3QuMK7XCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCd0LDQt9Cw0YDRg9C6INCG0YDQuNC90LAsIDMwLjA0LjIwMDQg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiMzA4MzE4ODQ0MTAzMDJcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly95b3V0dS5iZS9ObVdOVnM4UUt3QVwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMS4g0KQuINCo0L7Qv9C10L0uINCf0L7Qu9C+0L3QtdC3LCDRgtCyLjQwIOKEljI7IDIuINCkLiDQqNC+0L/QtdC9LiDQmtC+0LvQuNGB0LrQvtCy0LAsINGC0LIuNTdcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0J7Rh9C60YPRgNC10L3QutC+INCQ0L3QttC10LvRltC60LAsIDAyLjEwLjIwMDQg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiMzA4MzE4ODQ0MzAzNzdcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly95b3V0dS5iZS9ZZlU2R2FSZFAyQVwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0KQuINCo0L7Qv9C10L0uINCf0L7Qu9C+0L3QtdC3INGB0L7Qu9GMINC00ZbRlNC3INC80ZbQvdC+0YBcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0J/QsNGB0YLRg9GI0L7QuiDQlNCw0YDQuNC90LAsIDA3LjAyLjIwMDcg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiMzA4MzE4ODQ0NDcwMjVcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly95b3V0dS5iZS9fd0IwZ0lfc055WVwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0JIuINCR0LDRgNCy0ZbQvdGB0YzQutC40LkuINCf0YDQtdC70Y7QtNGW0Y8g0YTQsCDQvNCw0LbQvtGAXCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCf0LDRgdGC0YPRiNC+0Log0JTQsNGA0LjQvdCwLCAwNy4wMi4yMDA3INGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjMwODMxODg0NDU3NTc0XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHUuYmUvV0tyNllZQzdyUXdcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEuINCQLiDQmtC+0LvQvtC80ZbRlNGG0YwuINCV0YLRjtC0LdC10LrRgdC/0YDQvtC80YIg0LvRjyDQsdC10LzQvtC70Ywg0LzQsNC20L7RgCwg0YLQsi4yOyAyLiDQpC4g0KjQvtC/0LXQvS4g0J/QvtC70L7QvdC10Lcg4oSWMSwg0YLQsi4gMjZcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0KHQvtCx0LrQviDQkNC90L3QsC3QlNCw0YDQuNC90LAsIDIyLjEyLjIwMDMg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiMzA4MzE4ODQ0NzIyOThcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly95b3V0dS5iZS9wNlJLQWl3NXhEc1wiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMS4g0JUuINCT0YDRltCzLiDCq9CXINGO0L3QuNGFINC00L3RltCywrssINGC0LIuNjU7IDIuINCkLiDQqNGD0LHQtdGA0YIuINCV0LrRgdC/0YDQvtC80YIg4oSWMiwg0YLQsi45MFwiLFxuICAgICAgICBcIm5hbWVcIjogXCLQotC40LzRh9GD0Log0JDQvdGPLCAwNy4wOC4yMDA2INGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjMwODMxODg0NDgzMzczXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHUuYmUva0tZamVoTWN4MEVcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEuINCgLiDQqNGD0LzQsNC9LiDCq9CS0ZbQtNC10L3RgdGM0LrQuNC5INC60LDRgNC90LDQstCw0LvCuywg0YLQsi4yNjog0IYuIEFsbGVncm87IDIuINCuLiDQhtGJ0LXQvdC60L4uINCf0YDQtdC70Y7QtNGW0Y8g4oSWMTQg0LzRliDQsdC10LzQvtC70Ywg0LzRltC90L7RgFwiLFxuICAgICAgICBcIm5hbWVcIjogXCLQotGD0YDRgdGM0LrQsCDQnNCw0YDRltGPLCAxMS4wNC4yMDA1INGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjMwODMxODg0NTAyMjMwXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHUuYmUvMkRPOW9fM09Id0VcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcIjEuINCgLiDQqNGD0LzQsNC9LiDQndC+0LLQtdC70LXRgtGC0LAg4oSWMSwg0YLQsi4yMTsgMi4g0KEuINCo0LDQvNGW0L3QsNC0LiDQmtGA0LXQvtC70YzRgdGM0LrQuNC5INGC0LDQvdC10YbRjCwg0YLQsi45NFwiLFxuICAgICAgICBcIm5hbWVcIjogXCLQpNGW0LvRltC80L7QvdGH0YPQuiDQldGA0L3QtdGB0YIsIDIwLjAyLjIwMDUg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiMzA4MzE4ODQ1MjY2MzRcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly95b3V0dS5iZS9uWUlERnFVbHowSVwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMS4g0JsuINCg0LXQstGD0YbRjNC60LjQuS4g0J/RgNC10LvRjtC00ZbRjyDRgdGWINCx0LXQvNC+0LvRjCDQvNGW0L3QvtGAOyAyLiDQmi4g0JTQtdCx0Y7RgdGB0ZYuINCU0LLRliDQsNGA0LDQsdC10YHQutC4XCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCl0YDQuNC/0LrQviDQhNC70LjQt9Cw0LLQtdGC0LAsIDE5LjA3LjIwMDYg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiMzA4MzE4ODQ1NDQ3NTFcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly95b3V0dS5iZS9DMjJTTGdXQURlY1wiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMS4g0JUuINCT0YDRltCzLiDQhtC80L/RgNC+0LLRltC30LDRhtGW0Y8g0L3QsCDQtNCy0ZYg0L3QvtGA0LLQtdC30YzQutGWINC90LDRgNC+0LTQvdGWINC/0ZbRgdC90ZYsINGC0LIuMjk7IDIuINCaLiDQlNC10Y7RgdGB0ZYuINCV0YLRjtC0IOKEljExXCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCR0L7QtNC90LDRgNGH0YPQuiDQhtCy0LDQvdC90LAsIDE5LjAxLjIwMDQg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiMzA4MzE4ODQ1NjExNDZcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly95b3V0dS5iZS9rdXdGTmI4M3dHTVwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0K/QvSDQodGW0LHQtdC70ZbRg9GBLiDQldGC0Y7QtCDQu9GPINC80ZbQvdC+0YBcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0JTQtdC9INCQ0LksIDI2LjAxLjE5OTcg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiMzA4MzE4ODQ1NzEyNDlcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly95b3V0dS5iZS85WFFJcHppdG05RVwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0KEuINCR0L7RgNGC0LrQtdCy0LjRhy4g0J/RgNC10LvRjtC00ZbRjyDihJYzLCDRgtCyLjNcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0JTQtdC9INCQ0LksIDI2LjAxLjE5OTcg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiMzA4MzE4ODQ1ODU5NjJcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly95b3V0dS5iZS8welVBXzJpazJVa1wiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwiMS4g0JsuINCR0LXRgtGF0L7QstC10L0uINCh0L7QvdCw0YLQsCDihJYyNCwg0YLQsi4gNzg7IDIuINCcLiDQm9C40YHQtdC90LrQvi4g0KDQsNC/0YHQvtC00ZbRjyDQvdCwINGD0LrRgNCw0ZfQvdGB0YzQutGWINGC0LXQvNC4IMKr0JTRg9C80LrQsC3RiNGD0LzQutCwwrssINGC0LIuMTgg4oSWMlwiLFxuICAgICAgICBcIm5hbWVcIjogXCLQmtGD0YfQtdGA0Y/QstCwINCc0LDRgNC40L3QsCwgMTcuMDguMjAwMCDRgC7QvS5cIixcbiAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICBcIiRvaWRcIjogXCIzMDgzMTg4NDYwNTE3NFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ3JvdXBcIjogXCLQndC+0LzRltC90LDRhtGW0Y8gXFxcItCk0L7RgNGC0LXQv9GW0LDQvdC+INGB0L7Qu9C+XFxcIlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidmlkZW9VcmxcIjogXCJodHRwczovL3lvdXR1LmJlL3RzcVJlX1lOaVJrXCIsXG4gICAgICAgIFwiY29tcG9zaXRpb25cIjogXCIxLiDQnC4g0KHQutC+0YDQuNC6LiDQkNGA0ZbRjyDQtyDQn9Cw0YDRgtC40YLQuCDihJY1OyAyLiDQoS4g0JHQvtGA0YLQutC10LLQuNGHLiDQldGC0Y7QtCwg0YLQsi4xNSDihJY5XCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCc0LDRgtCy0ZbQudGH0YPQuiDQhtGA0LjQvdCwLCAyNy4wNS4yMDAzINGALtC9LlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjMwODMxODg0NjE5MTU1XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHUuYmUvUXc4SHd0UVl2SkFcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCZLiDQkdGA0LDQvNGBLiDQoNCw0L/RgdC+0LTRltGPIOKEljIsINGC0LIuNzlcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0J/RgNC40YHQsNC60LDRgNGDINCd0LDQtNGW0Y8sIDE0LjAyLjIwMDIg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiMzA4MzE4ODQ2Mjk1NjhcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly95b3V0dS5iZS9kT0FRS25fWUJBY1wiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0JIuINCa0L7RgdC10L3QutC+LiDQldGC0Y7QtCDRhNCwINC00ZbRlNC3INC80ZbQvdC+0YBcIixcbiAgICAgICAgXCJuYW1lXCI6IFwi0J/RgNC40YHQsNC60LDRgNGDINCd0LDQtNGW0Y8sIDE0LjAyLjIwMDIg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiMzA4MzE4ODQ2NDQ3MzlcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly95b3V0dS5iZS9PcHB2UUhObWFBY1wiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0KQuINCo0YPQsdC10YDRgi4g0JrQu9Cw0LLRltGA0YjRgtGO0LosIEQgOTQ2IOKEljEgQWxsZWdybyBhc3NhaSwg4oSWMiBBbGxlZ3JldHRvLCDihJYzIEFsbGVnctC+XCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCh0LDRgdGO0Log0K7Qu9GW0Y8sIDE1LjA2LjIwMDAg0YAu0L0uXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiMzA4MzE4ODQ2NTgzMzBcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInZpZGVvVXJsXCI6IFwiaHR0cHM6Ly95b3V0dS5iZS9pZEVaQUFTcVZJRVwiLFxuICAgICAgICBcImNvbXBvc2l0aW9uXCI6IFwi0KQuINCT0LDQvdGW0YbRjNC60LjQuS4gwqvQo9GA0L7Rh9C40YHRgtC40Lkg0L/QvtC70L7QvdC10LfCu1wiLFxuICAgICAgICBcIm5hbWVcIjogXCLQndGW0LrRltGC0ZbQvdCwINCGLtCgLlwiLFxuICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgIFwiJG9pZFwiOiBcIjMwODMxODg0NjY5MjMwXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJncm91cFwiOiBcItCd0L7QvNGW0L3QsNGG0ZbRjyBcXFwi0KTQvtGA0YLQtdC/0ZbQsNC90L4g0YHQvtC70L5cXFwiXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ2aWRlb1VybFwiOiBcImh0dHBzOi8veW91dHUuYmUvd0hXemNPYm9rRmdcIixcbiAgICAgICAgXCJjb21wb3NpdGlvblwiOiBcItCGLiDQr9C60YPRiNC10L3QutC+LiDCq9Ch0ZbQvdC10LzQsNGC0L7Qs9GA0LDRhMK7XCIsXG4gICAgICAgIFwibmFtZVwiOiBcItCd0ZbQutGW0YLRltC90LAg0IYu0KAuXCIsXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgXCIkb2lkXCI6IFwiMzA4MzE4ODQ2Nzk5NDZcIlxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VwXCI6IFwi0J3QvtC80ZbQvdCw0YbRltGPIFxcXCLQpNC+0YDRgtC10L/RltCw0L3QviDRgdC+0LvQvlxcXCJcIlxuICAgIH1cbl0iXSwic291cmNlUm9vdCI6IiJ9