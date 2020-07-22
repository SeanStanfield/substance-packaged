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
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nlet cssPopup = document.querySelector(\".popup\");\r\nlet dimmer = document.querySelector(\".dimmer\");\r\n// console.log(dimmer);\r\n\r\nconst graphBlobs = document.querySelectorAll(\".graphBlob\");\r\nconst desktopGraph = document.querySelector(\".graph\");\r\nlet popupList = document.querySelector(\".popup-list\");\r\n\r\nconst popupObject = {\r\n  Innovation: {\r\n    title: \"Innovation/NPD\",\r\n    points: [\r\n      \"Loads of Stuff\",\r\n      \"Future Gazing\",\r\n      \"Concept Testing\",\r\n      \"Proposition Assessment\",\r\n      \"Blank Sheet of Paper Briefs\",\r\n      \"Sexy Insurance\",\r\n      \"Bank Accounts\",\r\n      \"The Weird and Wonderful\",\r\n    ],\r\n    caseStudies: [\"Innovation B2B\", \"Innovation FMCG\"],\r\n  },\r\n\r\n  Branding: {\r\n    title: \"Branding\",\r\n    points: [\r\n      \"Brand Stretch\",\r\n      \"Line Extensions\",\r\n      \"Making the most of what you've got\",\r\n    ],\r\n    caseStudies: [\"Branding FMCG\"],\r\n  },\r\n  Sensory: {\r\n    title: \"Sensory Testing\",\r\n    points: [\"Touch Smell Sight Sound\", \"The real touchy feely stuff\"],\r\n    caseStudies: [\"Sensory Food\"],\r\n  },\r\n  Ethno: {\r\n    title: \"Ethnographic Immersion\",\r\n    points: [\r\n      \"Engaging with Customers\",\r\n      \"Getting clients to actually meet people\",\r\n      \"Deep dive stuff\",\r\n      \"The Unsexy World\",\r\n    ],\r\n    caseStudies: [\"Ethno Tobacco\", \"Ethno Financial\", \"Ethno Safari\"],\r\n  },\r\n  Equity: {\r\n    title: \"Equity Drivers\",\r\n    points: [\r\n      \"Unpacking the Unconscious\",\r\n      \"Identifying what really matters\",\r\n      \"Helping Manufacturing with What to Dial up\",\r\n    ],\r\n    caseStudies: [\"Equity Telco\"],\r\n  },\r\n  Customer: {\r\n    title: \"Customer Experience\",\r\n    points: [\r\n      \"Moments of Truth\",\r\n      \"Service Recovery\",\r\n      \"Shopping Habits\",\r\n      \"Buying Motivations\",\r\n      \"Sorting Out Your Problems\",\r\n    ],\r\n    caseStudies: [\"Customer Moments of Truth\", \"Buying Habits\"],\r\n  },\r\n  User: {\r\n    title: \"User Experience\",\r\n    points: [\r\n      \"Getting it Right\",\r\n      \"Making Things Consumer Centric\",\r\n      \"Identifying the Red Lines You Can't Cross\",\r\n    ],\r\n    caseStudies: [\"User Experience Online\"],\r\n  },\r\n  Product: {\r\n    title: \"Product Testing\",\r\n    points: [\"Home usage Tests\", \"Which One To Go With Type Tests\"],\r\n    caseStudies: [\"Home Usage test\"],\r\n  },\r\n  Relationships: {\r\n    title: \"Relationships\",\r\n    points: [\r\n      \"Making the Corner Shop Work\",\r\n      \"Understanding Grumpy Retailers\",\r\n      \"Helping Teachers Teach\",\r\n    ],\r\n    caseStudies: [\"Relationships Retail\"],\r\n  },\r\n  Design: {\r\n    title: \"Design\",\r\n    points: [\r\n      \"Pack Design\",\r\n      \"Product Design\",\r\n      \"Web Design\",\r\n      \"Design for Designs Sake\",\r\n    ],\r\n    caseStudies: [\"Pack Design\"],\r\n  },\r\n  SPAM: {\r\n    title: \"S.P.A.M\",\r\n    points: [\r\n      \"Sponsership\",\r\n      \"Promotions\",\r\n      \"Advertising\",\r\n      \"Messaging\",\r\n      \"Sorting Out Your T's & C's\",\r\n    ],\r\n    caseStudies: [\"SPAM Utility\"],\r\n  },\r\n};\r\n\r\nfunction changePopupContents(Blob) {\r\n  let BlobId = Blob.id;\r\n  let newTitle = popupObject[BlobId].title;\r\n  cssPopup.children[0].innerHTML = newTitle;\r\n\r\n  let newBullets = popupObject[BlobId].points;\r\n\r\n  cssPopup.querySelector(\".popup-list\").innerHTML = \"\";\r\n  newBullets.forEach((bullet) => {\r\n    let newPoint = document.createElement(\"li\");\r\n    newPoint.classList.add(\"popup-list-item\");\r\n    newPoint.innerText = bullet;\r\n    popupList.appendChild(newPoint);\r\n  });\r\n\r\n  let newLinks = popupObject[BlobId].caseStudies;\r\n  // console.log(newLinks);\r\n\r\n  let oldLinks = cssPopup.querySelector(\"p\");\r\n  oldLinks.innerHTML = \"\";\r\n\r\n  newLinks.forEach((link) => {\r\n    let newLink = document.createElement(\"a\");\r\n    newLink.classList.add(\"popup-link\");\r\n    newLink.innerText = link;\r\n    newLink.setAttribute(\"href\", \"src/pages/caseStudies/index.html\");\r\n    oldLinks.appendChild(newLink);\r\n    newLink.addEventListener(\"mouseover\", (e) => {\r\n      console.log(\"moused over: \" + link);\r\n      localStorage.setItem(\"linkPressed\", link);\r\n    });\r\n  });\r\n}\r\n\r\n(function () {\r\n  let isPortrait = window.matchMedia(\"all and (orientation: portrait)\").matches;\r\n\r\n  if (isPortrait) {\r\n    graphBlobs.forEach((blob) => {\r\n      blob.addEventListener(\"click\", () => {\r\n        cssPopup.style.opacity = 1;\r\n        dimmer.style.opacity = 0.6;\r\n        cssPopup.style.pointerEvents = \"all\";\r\n        changePopupContents(blob);\r\n        cssPopup.querySelector(\".cross\").addEventListener(\"click\", () => {\r\n          cssPopup.style.opacity = 0;\r\n          dimmer.style.opacity = 0;\r\n\r\n          cssPopup.style.pointerEvents = \"none\";\r\n        });\r\n        cssPopup.classList.remove(\"fade-out\");\r\n        cssPopup.classList.add(\"mobile-popup\");\r\n      });\r\n    });\r\n  } else {\r\n    // HOVER EFFECT FOR LANDSCAPE DEVICES ONLY\r\n    graphBlobs.forEach((blob) => {\r\n      blob.addEventListener(\"mouseover\", (e) => {\r\n        cssPopup.style.top = `${blob.getAttribute(\"y\")}`;\r\n        cssPopup.style.left = `${blob.getAttribute(\"x\")}`;\r\n        changePopupContents(blob);\r\n        cssPopup.classList.remove(\"fade-out\");\r\n      });\r\n\r\n      blob.addEventListener(\"mouseleave\", () => {\r\n        cssPopup.classList.add(\"fade-out\");\r\n      });\r\n    });\r\n  }\r\n})();\r\n\r\nconst box = document.querySelector(\".brandbox\");\r\nconst logoArray = [...document.querySelectorAll(\".brandbox img\")];\r\nconst logoLength = logoArray.length;\r\nlet currentLogo = 0;\r\n\r\nScrollTrigger.create({\r\n  trigger: \".brandbox\",\r\n  start: \"top 70%\",\r\n  onEnter: () => {\r\n    let loop = setInterval(() => {\r\n      logoArray[currentLogo].classList.add(\"active\");\r\n      // console.log(++currentLogo);\r\n      currentLogo++;\r\n      if (currentLogo === logoLength) {\r\n        clearInterval(loop);\r\n      }\r\n    }, 180);\r\n  },\r\n  markers: false,\r\n});\r\n\r\nlet multiTl = gsap.timeline({\r\n  scrollTrigger: {\r\n    trigger: \".multi-board\",\r\n    start: \"bottom bottom\",\r\n  },\r\n});\r\n\r\nmultiTl.to(\".multi-stem-left, .multi-stem-right\", {\r\n  strokeDashoffset: 0,\r\n  duration: 1,\r\n  easing: \"linear\",\r\n});\r\n\r\nmultiTl.from(\r\n  \".multi-node-left, .multi-node-right\",\r\n  {\r\n    opacity: 0,\r\n    scale: 0,\r\n    transformOrigin: \"center center\",\r\n  },\r\n  \"-=0.25\"\r\n);\r\n\r\nmultiTl.from(\r\n  \".panel\",\r\n  {\r\n    opacity: 0,\r\n  },\r\n  \"+=2\"\r\n);\r\n\r\nmultiTl.from(\r\n  \".panel-line\",\r\n  {\r\n    scaleX: 0,\r\n    opacity: 0,\r\n  },\r\n  \"-=0.5\"\r\n);\r\n\r\nlet tl = gsap.timeline({\r\n  scrollTrigger: {\r\n    trigger: \".house\",\r\n    start: \"bottom bottom\",\r\n  },\r\n});\r\n\r\n// gsap.from(\".pin\", { y: -40, duration: 2 });\r\n\r\ntl.to(\r\n  \"#houseStroke\",\r\n  {\r\n    strokeDashoffset: 0,\r\n    duration: 2,\r\n  },\r\n  \"-=2\"\r\n);\r\n\r\ntl.from(\".house-circ\", {\r\n  scaleX: 0,\r\n  scaleY: 0,\r\n  transformOrigin: \"center center\",\r\n});\r\n\r\ntl.from(\r\n  \".house-para\",\r\n  {\r\n    scaleX: 0,\r\n    duration: 2,\r\n  },\r\n  \"-=1\"\r\n);\r\n\r\ntl.fromTo(\r\n  \".pin\",\r\n  {\r\n    y: -30,\r\n    opacity: 0,\r\n    scaleX: 0.7,\r\n    transformOrigin: \"center center\",\r\n    overflow: \"visible\",\r\n  },\r\n  { y: -0, opacity: 1, scaleX: 1 },\r\n  \"-=1\"\r\n);\r\n\r\ntl.from(\"#stem\", { scaleY: 0, transformOrigin: \"bottom\" });\r\ntl.from(\r\n  \"#leaf\",\r\n  { scaleY: 0, scaleX: 0, transformOrigin: \"bottom left\" },\r\n  \"-=0.4\"\r\n);\r\ntl.from(\r\n  \"#flower\",\r\n  { scaleY: 0, scaleX: 0, transformOrigin: \"center\" },\r\n  \"-=0.3\"\r\n);\r\n\r\nlet rectTl = gsap.timeline({\r\n  scrollTrigger: {\r\n    trigger: \".rectangles\",\r\n    start: \"bottom bottom\",\r\n  },\r\n});\r\n\r\nrectTl.to(\".rect-draw-stroke, .circ-draw-stroke\", {\r\n  strokeDashoffset: 0,\r\n  duration: 2.5,\r\n  ease: \"ease-in-out\",\r\n});\r\n\r\nrectTl.to(\r\n  \".ballOne\",\r\n  {\r\n    duration: 3,\r\n    repeat: false,\r\n    yoyo: false,\r\n    ease: \"power1.inOut\",\r\n    motionPath: {\r\n      path: \".ballLineOne\",\r\n      align: \"relative\",\r\n    },\r\n  },\r\n  \"-=2\"\r\n);\r\nrectTl.to(\r\n  \".ballTwo\",\r\n  {\r\n    duration: 3,\r\n    repeat: false,\r\n    yoyo: false,\r\n    ease: \"power1.inOut\",\r\n    motionPath: {\r\n      path: \".ballLineTwo\",\r\n      align: \"relative\",\r\n    },\r\n  },\r\n  \"-=2.5\"\r\n);\r\nrectTl.to(\r\n  \".ballThree\",\r\n  {\r\n    duration: 3,\r\n    repeat: false,\r\n    yoyo: false,\r\n    ease: \"power1.inOut\",\r\n    motionPath: {\r\n      path: \".ballLineThree\",\r\n      align: \"relative\",\r\n    },\r\n  },\r\n  \"-=3\"\r\n);\r\n\r\nrectTl.from(\r\n  \".solid-rect\",\r\n  {\r\n    opacity: 0,\r\n  },\r\n  \"-=2\"\r\n);\r\n\r\nconst strokeItem = document.querySelector(\".multi-stem-right\");\r\nlet strokeLength = strokeItem.getTotalLength();\r\n// console.log(strokeLength);\r\n\n\n//# sourceURL=webpack:///./src/js/main.js?");

/***/ })

/******/ });