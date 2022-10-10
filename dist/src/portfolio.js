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

/***/ "./src/portfolio.js":
/*!**************************!*\
  !*** ./src/portfolio.js ***!
  \**************************/
/***/ (() => {

eval("let currentSlide = 0; // current slide counter\r\nlet slider = document.getElementById(\"slider\");\r\nconst slides = document.querySelectorAll(\".slide\"); // Select all slides\r\nconst nextSlide = document.querySelector(\".btnNext\"); // select next slide button\r\nconst prevSlide = document.querySelector(\".btnPrev\"); // select prev slide button\r\n\r\n\r\nfunction portfolioSlider() {\r\n  let maxSlide = slides.length - 1; // maximum number of slides\r\n\r\n  slides.forEach((slide, i) => { // slide one shows, slide 2 sits right, slide 3 even further\r\n    slide.style.transform = `translateX(${i * 100}%)`;\r\n  });\r\n\r\n  nextSlide.addEventListener(\"click\", function () { // event listener & nav functionality\r\n    if (currentSlide === maxSlide) { // if current slide is last -> reset\r\n      currentSlide = 0;\r\n    } else {\r\n      currentSlide++;\r\n    }\r\n\r\n    if (currentSlide == maxSlide) {\r\n      slider.style.margin = \"0vw 0vw\"\r\n      nextSlide.style.top = \"30.55%\";\r\n      prevSlide.style.top = \"30.55%\";\r\n    } else {\r\n      slider.style.margin = \"5vw 0vw\"\r\n      nextSlide.style.top = \"20%\";\r\n      prevSlide.style.top = \"20%\";\r\n    }\r\n    slides.forEach((slide, i) => { //   move slide by -100%\r\n      slide.style.transform = `translateX(${100 * (i - currentSlide)}%)`;\r\n    });\r\n  });\r\n\r\n\r\n\r\n  prevSlide.addEventListener(\"click\", function () { // event listener & nav functionality\r\n    if (currentSlide === 0) { // if current slide is first -> reset\r\n      currentSlide = maxSlide;\r\n    } else {\r\n      currentSlide--;\r\n    }\r\n\r\n    if (currentSlide == maxSlide) {\r\n      slider.style.margin = \"0vw 0vw\"\r\n      nextSlide.style.top = \"30.55%\";\r\n      prevSlide.style.top = \"30.55%\";\r\n    } else {\r\n      slider.style.margin = \"5vw 0vw\"\r\n      nextSlide.style.top = \"20%\";\r\n      prevSlide.style.top = \"20%\";\r\n    }\r\n    //   move slide by 100%\r\n    slides.forEach((slide, i) => {\r\n      slide.style.transform = `translateX(${100 * (i - currentSlide)}%)`;\r\n    });\r\n  });\r\n\r\n}\r\nportfolioSlider();\r\n\r\nfunction portfolioNav() {\r\n  let threeDButton = document.getElementById(\"threeDButton\");\r\n  let gameButton = document.getElementById(\"gameButton\");\r\n  let webButton = document.getElementById(\"webButton\");\r\n\r\n  threeDButton.addEventListener(\"click\", function () {\r\n    console.log(\"click\");\r\n    currentSlide == 1;\r\n    slides.forEach((slide, i) => { // slide one shows, slide 2 sits right, slide 3 even further\r\n      slide.style.transform = `translateX(${i * 100}%)`;\r\n    });\r\n    slider.style.margin = \"5vw 0vw\"\r\n    nextSlide.style.top = \"20%\";\r\n    prevSlide.style.top = \"20%\";\r\n    threeDButton.classList.add(\"thisSlide\");\r\n    webButton.classList.remove(\"thisSlide\");\r\n    gameButton.classList.remove(\"thisSlide\");\r\n   \r\n  })\r\n\r\n  gameButton.addEventListener(\"click\", function () {\r\n    console.log(\"click\");\r\n    currentSlide == 2;\r\n    slides.forEach((slide, i) => { // slide one shows, slide 2 sits right, slide 3 even further\r\n      slide.style.transform = `translateX(${i * 100 -100}%)`;\r\n    });\r\n    slider.style.margin = \"5vw 0vw\"\r\n    nextSlide.style.top = \"20%\";\r\n    prevSlide.style.top = \"20%\";\r\n    threeDButton.classList.remove(\"thisSlide\");\r\n    webButton.classList.remove(\"thisSlide\");\r\n    gameButton.classList.add(\"thisSlide\");\r\n  })\r\n\r\n  webButton.addEventListener(\"click\", function () {\r\n    console.log(\"click\");\r\n    currentSlide == 3;\r\n    slides.forEach((slide, i) => { // slide one shows, slide 2 sits right, slide 3 even further\r\n      slide.style.transform = `translateX(${i * 100-200}%)`;\r\n    });\r\n    slider.style.margin = \"0vw 0vw\"\r\n    nextSlide.style.top = \"30.55%\";\r\n    prevSlide.style.top = \"30.55%\";\r\n    threeDButton.classList.remove(\"thisSlide\");\r\n    webButton.classList.add(\"thisSlide\");\r\n    gameButton.classList.remove(\"thisSlide\");\r\n  })\r\n}\r\n\r\nportfolioNav();\n\n//# sourceURL=webpack://website-nodemailerv2/./src/portfolio.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/portfolio.js"]();
/******/ 	
/******/ })()
;