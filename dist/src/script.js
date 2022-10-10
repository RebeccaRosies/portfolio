/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/script.js":
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
/***/ (() => {

eval("function smoothScrolling() {\r\n\r\n  let anchorlinks = document.querySelectorAll('a[href^=\"#\"]')\r\n\r\n  for (let item of anchorlinks) {\r\n    item.addEventListener('click', (e) => {\r\n      //to get the right css for the nav button (red color and border-top line)\r\n      let prevPageHTMLColl = document.getElementsByClassName(\"thispage\");\r\n      let prevPageArr = Array.from(prevPageHTMLColl);\r\n      for (let prevPage of prevPageArr) {\r\n        prevPage.classList.remove(\"thispage\");\r\n      }\r\n      item.parentElement.classList += \" thispage\";\r\n\r\n      let hashval = item.getAttribute('href');\r\n\r\n      var element = document.querySelector(hashval);\r\n      var headerOffset = 65;\r\n      var elementPosition = element.getBoundingClientRect().top;\r\n      var offsetPosition = elementPosition + window.pageYOffset - headerOffset;\r\n\r\n      window.scrollTo({\r\n        top: offsetPosition,\r\n        behavior: \"smooth\"\r\n      });\r\n      history.pushState(null, null, hashval)\r\n      e.preventDefault()\r\n    })\r\n  }\r\n}\r\n\r\nsmoothScrolling();\r\n\r\nfunction buttonClick() {\r\n  let navbutton = document.getElementById(\"navButton\");\r\n  navbutton.addEventListener(\"click\", function () {\r\n    toggleDropDown();\r\n  });\r\n\r\n  let dropbutton = document.getElementById(\"dropButton\");\r\n  dropbutton.addEventListener(\"click\", function () {\r\n    toggleDropDown();\r\n  });\r\n}\r\n\r\nbuttonClick();\r\n\r\nfunction toggleDropDown() {\r\n  console.log(\"toggle dropdown\");\r\n  let dropdown = document.getElementById(\"myDropdown\");\r\n  let contactLink = document.getElementById(\"contactLink\");\r\n  let navbutton = document.getElementById(\"navButton\");\r\n  if (dropdown.style.display == \"block\") {\r\n    dropdown.style.display = \"none\";\r\n    contactLink.style.color = \"rgba(0,0,0,1)\";\r\n    navbutton.style.display = \"inline-block\";\r\n  } else {\r\n    dropdown.style.display = \"block\";\r\n    contactLink.style.color = \"rgba(0,0,0,0)\";\r\n    navbutton.style.display = \"none\";\r\n  }\r\n}\r\n\r\n//----VIDEO ON HOVER-----------------------------------------------------------------------------\r\n\r\nfunction playHiddenVideo() {\r\n  let picturesHTMLCol = document.getElementsByClassName(\"hiddenVideo\");\r\n  let pictures = Array.from(picturesHTMLCol);\r\n  let videosHTMLCol = document.getElementsByClassName(\"projectVideo\");\r\n  let videos = Array.from(videosHTMLCol);\r\n  for (let picture of pictures) {\r\n    picture.addEventListener('mouseover', (e) => {\r\n      console.log(\"hovering\")\r\n      for (let video of videos) {\r\n        if ((video.id.charAt(0)) == (picture.id.charAt(0))) {\r\n          video.style.display = \"block\";\r\n          video.play();\r\n\r\n          video.addEventListener('mouseout', (e) => {\r\n            video.style.display = \"none\";\r\n            video.pause();\r\n          })\r\n        }\r\n      }\r\n    })\r\n  }\r\n}\r\nplayHiddenVideo();\r\n\r\nfunction showHiddenPicture() {\r\n  let picturesHTMLCol = document.getElementsByClassName(\"hiddenPicture\");\r\n  let pictures = Array.from(picturesHTMLCol);\r\n  let travelPicsHTMLCol = document.getElementsByClassName(\"travelPicture\");\r\n  let travelPics = Array.from(travelPicsHTMLCol);\r\n  for (let picture of pictures) {\r\n    picture.addEventListener('mouseover', (e) => {\r\n      console.log(\"hovering\")\r\n      for (let travelPic of travelPics) {\r\n        if (travelPic.id.charAt(0) == picture.id.charAt(0)) {\r\n          travelPic.style.display = \"block\";\r\n          picture.style.display = \"none\";\r\n\r\n          travelPic.addEventListener('mouseout', (e) => {\r\n            travelPic.style.display = \"none\";\r\n            picture.style.display = \"block\";\r\n          })\r\n        }\r\n      }\r\n    })\r\n  }\r\n}\r\n\r\nshowHiddenPicture();\n\n//# sourceURL=webpack://website-nodemailerv2/./src/script.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/script.js"]();
/******/ 	
/******/ })()
;