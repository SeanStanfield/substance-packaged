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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./main.js */ \"./src/js/main.js\");\r\n\n\n//# sourceURL=webpack:///./src/js/app.js?");

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("let cssPopup = document.querySelector(\".popup\");\r\nlet dimmer = document.querySelector(\".dimmer\");\r\nconsole.log(dimmer);\r\n\r\nconst graphBlobs = document.querySelectorAll(\".graphBlob\");\r\nconst desktopGraph = document.querySelector(\".graph\");\r\nlet popupList = document.querySelector(\".popup-list\");\r\n\r\nconst popupObject = {\r\n  Innovation: {\r\n    title: \"Innovation/NPD\",\r\n    points: [\r\n      \"Loads of Stuff\",\r\n      \"Future Gazing\",\r\n      \"Concept Testing\",\r\n      \"Proposition Assessment\",\r\n      \"Blank Sheet of Paper Briefs\",\r\n      \"Sexy Insurance\",\r\n      \"Bank Accounts\",\r\n      \"The Weird and Wonderful\",\r\n    ],\r\n    caseStudies: [\"Tacticle Dynamics\"],\r\n  },\r\n\r\n  Branding: {\r\n    title: \"Branding\",\r\n    points: [\r\n      \"Brand Stretch\",\r\n      \"Line Extensions\",\r\n      \"Making the most of what you've got\",\r\n    ],\r\n    caseStudies: [\"Branding Case Study\"],\r\n  },\r\n  Sensory: {\r\n    title: \"Sensory Testing\",\r\n    points: [\"Touch Smell Sight Sound\", \"The real touchy feely stuff\"],\r\n    caseStudies: [\"Sensory study\"],\r\n  },\r\n  Ethno: {\r\n    title: \"Ethnographic Immersion\",\r\n    points: [\r\n      \"Engaging with Customers\",\r\n      \"Getting clients to actually meet people\",\r\n      \"Deep dive stuff\",\r\n      \"The Unsexy World\",\r\n    ],\r\n    caseStudies: [\"Ethno Case study\"],\r\n  },\r\n  Equity: {\r\n    title: \"Equity Drivers\",\r\n    points: [\r\n      \"Unpacking the Unconscious\",\r\n      \"Identifying what really matters\",\r\n      \"Helping Manufacturing with What to Dial up\",\r\n    ],\r\n    caseStudies: [\"Equity case study\"],\r\n  },\r\n  Customer: {\r\n    title: \"Customer Experience\",\r\n    points: [\r\n      \"Moments of Truth\",\r\n      \"Service Recovery\",\r\n      \"Shopping Habits\",\r\n      \"Buying Motivations\",\r\n      \"Sorting Out Your Problems\",\r\n    ],\r\n    caseStudies: [\"Customer case study\"],\r\n  },\r\n  User: {\r\n    title: \"User Experience\",\r\n    points: [\r\n      \"Getting it Right\",\r\n      \"Making Things Consumer Centric\",\r\n      \"Identifying the Red Lines You Can't Cross\",\r\n    ],\r\n    caseStudies: [\"User case study\"],\r\n  },\r\n  Product: {\r\n    title: \"Product Testing\",\r\n    points: [\"Home usage Tests\", \"Which One To Go With Type Tests\"],\r\n    caseStudies: [\"Product case study\"],\r\n  },\r\n  Relationships: {\r\n    title: \"Relationships\",\r\n    points: [\r\n      \"Making the Corner Shop Work\",\r\n      \"Understanding Grumpy Retailers\",\r\n      \"Helping Teachers Teach\",\r\n    ],\r\n    caseStudies: [\"Relationships case study\", \"Relationships 2\"],\r\n  },\r\n  Design: {\r\n    title: \"Design\",\r\n    points: [\r\n      \"Pack Design\",\r\n      \"Product Design\",\r\n      \"Web Design\",\r\n      \"Design for Designs Sake\",\r\n    ],\r\n    caseStudies: [\"Design case study\"],\r\n  },\r\n  SPAM: {\r\n    title: \"S.P.A.M\",\r\n    points: [\r\n      \"Sponsership\",\r\n      \"Promotions\",\r\n      \"Advertising\",\r\n      \"Messaging\",\r\n      \"Sorting Out Your T's & C's\",\r\n    ],\r\n    caseStudies: [\"SPAM case study\"],\r\n  },\r\n};\r\n\r\nfunction changePopupContents(Blob) {\r\n  let BlobId = Blob.id;\r\n  console.log(BlobId);\r\n  let newTitle = popupObject[BlobId].title;\r\n  cssPopup.children[0].innerHTML = newTitle;\r\n\r\n  let newBullets = popupObject[BlobId].points;\r\n\r\n  cssPopup.querySelector(\".popup-list\").innerHTML = \"\";\r\n  newBullets.forEach((bullet) => {\r\n    let newPoint = document.createElement(\"li\");\r\n    newPoint.classList.add(\"popup-list-item\");\r\n    newPoint.innerText = bullet;\r\n    popupList.appendChild(newPoint);\r\n  });\r\n\r\n  let newLinks = popupObject[BlobId].caseStudies;\r\n\r\n  let oldLinks = cssPopup.querySelector(\"p\");\r\n  oldLinks.innerHTML = \"\";\r\n\r\n  newLinks.forEach((link) => {\r\n    let newLink = document.createElement(\"a\");\r\n    newLink.classList.add(\"popup-link\");\r\n    newLink.innerText = link;\r\n    newLink.setAttribute(\"href\", \"https://www.google.com\");\r\n    oldLinks.appendChild(newLink);\r\n  });\r\n}\r\n\r\n(function () {\r\n  let isPortrait = window.matchMedia(\"all and (orientation: portrait)\").matches;\r\n\r\n  if (isPortrait) {\r\n    console.log(\"IM PORTRAIT\");\r\n    graphBlobs.forEach((blob) => {\r\n      blob.addEventListener(\"click\", () => {\r\n        cssPopup.style.opacity = 1;\r\n        dimmer.style.opacity = 0.6;\r\n        cssPopup.style.pointerEvents = \"all\";\r\n        changePopupContents(blob);\r\n        cssPopup.querySelector(\".cross\").addEventListener(\"click\", () => {\r\n          cssPopup.style.opacity = 0;\r\n          dimmer.style.opacity = 0;\r\n\r\n          cssPopup.style.pointerEvents = \"none\";\r\n        });\r\n        cssPopup.classList.remove(\"fade-out\");\r\n        cssPopup.classList.add(\"mobile-popup\");\r\n      });\r\n    });\r\n  } else {\r\n    // HOVER EFFECT FOR LANDSCAPE DEVICES ONLY\r\n    graphBlobs.forEach((blob) => {\r\n      blob.addEventListener(\"mouseover\", (e) => {\r\n        // let popup = createPopup(blob);\r\n        // console.log(popup);\r\n        // desktopGraph.appendChild(popup);\r\n        cssPopup.style.top = `${blob.getAttribute(\"y\")}`;\r\n        cssPopup.style.left = `${blob.getAttribute(\"x\")}`;\r\n        changePopupContents(blob);\r\n        cssPopup.classList.remove(\"fade-out\");\r\n      });\r\n\r\n      blob.addEventListener(\"mouseleave\", () => {\r\n        cssPopup.classList.add(\"fade-out\");\r\n      });\r\n    });\r\n  }\r\n})();\r\n\r\nconst box = document.querySelector(\".brandbox\");\r\nconst logoArray = [...document.querySelectorAll(\".brandbox img\")];\r\nconst logoLength = logoArray.length;\r\nlet currentLogo = 0;\r\nconsole.log(logoArray);\r\n\r\nlet loop = setInterval(() => {\r\n  logoArray[currentLogo].classList.add(\"active\");\r\n  console.log(++currentLogo);\r\n  if (currentLogo === logoLength) {\r\n    clearInterval(loop);\r\n  }\r\n}, 180);\r\n\n\n//# sourceURL=webpack:///./src/js/main.js?");

/***/ })

/******/ });