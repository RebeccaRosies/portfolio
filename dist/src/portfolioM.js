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

/***/ "./src/portfolioM.js":
/*!***************************!*\
  !*** ./src/portfolioM.js ***!
  \***************************/
/***/ (() => {

eval("let currentSlideMD = 0; // current slide counter\r\nlet currentSlideMG = 0; // current slide counter\r\nlet currentSlideMW = 0; // current slide counter\r\nlet slidersMColl = document.getElementsByClassName(\"sliderM\");\r\nconsole.log(slidersMColl);\r\nlet slidersM = Array.from(slidersMColl)\r\nconsole.log(slidersM);\r\nconst nextSlidesMColl = document.getElementsByClassName(\"goRightMobile\"); // select next slide button\r\nconst nextSlidesM = Array.from(nextSlidesMColl)\r\nconst prevSlidesMColl = document.getElementsByClassName(\"goLeftMobile\"); // select prev slide button\r\nconst prevSlidesM = Array.from(prevSlidesMColl)\r\nconsole.log(prevSlidesM)\r\n\r\nslidersM.forEach(slider => {\r\n    let slidesMColl = slider.children // Select all slides in a slider\r\n    let slidesM = Array.from(slidesMColl)\r\n    /* console.log(slidesM) */\r\n\r\n    slidesM.forEach((slideM, i) => { // slide one shows, slide 2 sits right, slide 3 even further\r\n        slideM.style.transform = `translateX(${i * 100}%)`;\r\n    });\r\n})\r\n\r\nfunction listenToCorrectButtons() {\r\n    nextSlidesM.forEach(nextSlide => //voor elke next button\r\n        nextSlide.addEventListener(\"click\", function () { //luister of erop geklikt word\r\n            if (nextSlide.classList.contains(\"D\")) { //als de button de juiste class heeft \r\n                moveSlider1Right(); //verplaats dan de matching slider\r\n            }\r\n            if (nextSlide.classList.contains(\"G\")) {\r\n                moveSlider2Right();\r\n            }\r\n            if (nextSlide.classList.contains(\"W\")) {\r\n                moveSlider3Right();\r\n            }\r\n        })\r\n    )\r\n\r\n    prevSlidesM.forEach(prevSlide => //voor elke next button\r\n        prevSlide.addEventListener(\"click\", function () { //luister of erop geklikt word\r\n            if (prevSlide.classList.contains(\"D\")) { //als de button de juiste class heeft \r\n                moveSlider1Left(); //verplaats dan de matching slider\r\n            }\r\n            if (prevSlide.classList.contains(\"G\")) {\r\n                moveSlider2Left();\r\n            }\r\n            if (prevSlide.classList.contains(\"W\")) {\r\n                moveSlider3Left();\r\n            }\r\n        })\r\n    )\r\n}\r\nlistenToCorrectButtons();\r\n\r\nfunction moveSlider1Right() {\r\n    let slidesMDColl = document.getElementsByClassName(\"slideMD\")\r\n    let slidesMD = Array.from(slidesMDColl);\r\n    console.log(slidesMD)\r\n\r\n    let maxSlide = slidesMD.length - 1; // maximum number of slides\r\n    console.log(maxSlide)\r\n\r\n    if (currentSlideMD === maxSlide) { // if current slide is last -> reset\r\n        currentSlideMD = 0;\r\n    } else {\r\n        currentSlideMD++;\r\n    }\r\n\r\n    slidesMD.forEach((slide, i) => { //   move slide by -100%\r\n        slide.style.transform = `translateX(${100 * (i - currentSlideMD)}%)`;\r\n    });\r\n}\r\n\r\nfunction moveSlider2Right() {\r\n    let slidesMGColl = document.getElementsByClassName(\"slideMG\")\r\n    let slidesMG = Array.from(slidesMGColl);\r\n    console.log(slidesMG)\r\n\r\n    let maxSlide = slidesMG.length - 1; // maximum number of slides\r\n    console.log(maxSlide)\r\n\r\n    if (currentSlideMG === maxSlide) { // if current slide is last -> reset\r\n        currentSlideMG = 0;\r\n    } else {\r\n        currentSlideMG++;\r\n    }\r\n\r\n    slidesMG.forEach((slide, i) => { //   move slide by -100%\r\n        slide.style.transform = `translateX(${100 * (i - currentSlideMG)}%)`;\r\n    });\r\n}\r\n\r\nfunction moveSlider3Right() {\r\n    let slidesMWColl = document.getElementsByClassName(\"slideMW\")\r\n    let slidesMW = Array.from(slidesMWColl);\r\n    console.log(slidesMW)\r\n\r\n    let maxSlide = slidesMW.length - 1; // maximum number of slides\r\n    console.log(maxSlide)\r\n\r\n    if (currentSlideMW === maxSlide) { // if current slide is last -> reset\r\n        currentSlideMW = 0;\r\n    } else {\r\n        currentSlideMW++;\r\n    }\r\n\r\n    slidesMW.forEach((slide, i) => { //   move slide by -100%\r\n        slide.style.transform = `translateX(${100 * (i - currentSlideMW)}%)`;\r\n    });\r\n}\r\n\r\nfunction moveSlider1Left() {\r\n    let slidesMDColl = document.getElementsByClassName(\"slideMD\")\r\n    let slidesMD = Array.from(slidesMDColl);\r\n    console.log(slidesMD)\r\n\r\n    let maxSlide = slidesMD.length - 1; // maximum number of slides\r\n    console.log(maxSlide)\r\n\r\n    if (currentSlideMD === 0) { // if current slide is last -> reset\r\n        currentSlideMD = maxSlide;\r\n    } else {\r\n        currentSlideMD--;\r\n    }\r\n\r\n    slidesMD.forEach((slide, i) => { //   move slide by -100%\r\n        slide.style.transform = `translateX(${100 * (i - currentSlideMD)}%)`;\r\n    });\r\n}\r\n\r\nfunction moveSlider2Left() {\r\n    let slidesMGColl = document.getElementsByClassName(\"slideMG\")\r\n    let slidesMG = Array.from(slidesMGColl);\r\n    console.log(slidesMG)\r\n\r\n    let maxSlide = slidesMG.length - 1; // maximum number of slides\r\n    console.log(maxSlide)\r\n\r\n    if (currentSlideMG === 0) { // if current slide is last -> reset\r\n        currentSlideMG = maxSlide;\r\n    } else {\r\n        currentSlideMG--;\r\n    }\r\n\r\n    slidesMG.forEach((slide, i) => { //   move slide by -100%\r\n        slide.style.transform = `translateX(${100 * (i - currentSlideMG)}%)`;\r\n    });\r\n}\r\n\r\nfunction moveSlider3Left() {\r\n    let slidesMWColl = document.getElementsByClassName(\"slideMW\")\r\n    let slidesMW = Array.from(slidesMWColl);\r\n    console.log(slidesMW)\r\n\r\n    let maxSlide = slidesMW.length - 1; // maximum number of slides\r\n    console.log(maxSlide)\r\n\r\n    if (currentSlideMW === 0) { // if current slide is last -> reset\r\n        currentSlideMW = maxSlide;\r\n    } else {\r\n        currentSlideMW--;\r\n    }\r\n\r\n    slidesMW.forEach((slide, i) => { //   move slide by -100%\r\n        slide.style.transform = `translateX(${100 * (i - currentSlideMW)}%)`;\r\n    });\r\n}\r\n\n\n//# sourceURL=webpack://website-nodemailerv2/./src/portfolioM.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/portfolioM.js"]();
/******/ 	
/******/ })()
;