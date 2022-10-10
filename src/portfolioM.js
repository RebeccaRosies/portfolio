let currentSlideMD = 0; // current slide counter
let currentSlideMG = 0; // current slide counter
let currentSlideMW = 0; // current slide counter
let slidersMColl = document.getElementsByClassName("sliderM");
console.log(slidersMColl);
let slidersM = Array.from(slidersMColl)
console.log(slidersM);
const nextSlidesMColl = document.getElementsByClassName("goRightMobile"); // select next slide button
const nextSlidesM = Array.from(nextSlidesMColl)
const prevSlidesMColl = document.getElementsByClassName("goLeftMobile"); // select prev slide button
const prevSlidesM = Array.from(prevSlidesMColl)
console.log(prevSlidesM)

slidersM.forEach(slider => {
    let slidesMColl = slider.children // Select all slides in a slider
    let slidesM = Array.from(slidesMColl)
    /* console.log(slidesM) */

    slidesM.forEach((slideM, i) => { // slide one shows, slide 2 sits right, slide 3 even further
        slideM.style.transform = `translateX(${i * 100}%)`;
    });
})

function listenToCorrectButtons() {
    nextSlidesM.forEach(nextSlide => //voor elke next button
        nextSlide.addEventListener("click", function () { //luister of erop geklikt word
            if (nextSlide.classList.contains("D")) { //als de button de juiste class heeft 
                moveSlider1Right(); //verplaats dan de matching slider
            }
            if (nextSlide.classList.contains("G")) {
                moveSlider2Right();
            }
            if (nextSlide.classList.contains("W")) {
                moveSlider3Right();
            }
        })
    )

    prevSlidesM.forEach(prevSlide => //voor elke next button
        prevSlide.addEventListener("click", function () { //luister of erop geklikt word
            if (prevSlide.classList.contains("D")) { //als de button de juiste class heeft 
                moveSlider1Left(); //verplaats dan de matching slider
            }
            if (prevSlide.classList.contains("G")) {
                moveSlider2Left();
            }
            if (prevSlide.classList.contains("W")) {
                moveSlider3Left();
            }
        })
    )
}
listenToCorrectButtons();

function moveSlider1Right() {
    let slidesMDColl = document.getElementsByClassName("slideMD")
    let slidesMD = Array.from(slidesMDColl);
    console.log(slidesMD)

    let maxSlide = slidesMD.length - 1; // maximum number of slides
    console.log(maxSlide)

    if (currentSlideMD === maxSlide) { // if current slide is last -> reset
        currentSlideMD = 0;
    } else {
        currentSlideMD++;
    }

    slidesMD.forEach((slide, i) => { //   move slide by -100%
        slide.style.transform = `translateX(${100 * (i - currentSlideMD)}%)`;
    });
}

function moveSlider2Right() {
    let slidesMGColl = document.getElementsByClassName("slideMG")
    let slidesMG = Array.from(slidesMGColl);
    console.log(slidesMG)

    let maxSlide = slidesMG.length - 1; // maximum number of slides
    console.log(maxSlide)

    if (currentSlideMG === maxSlide) { // if current slide is last -> reset
        currentSlideMG = 0;
    } else {
        currentSlideMG++;
    }

    slidesMG.forEach((slide, i) => { //   move slide by -100%
        slide.style.transform = `translateX(${100 * (i - currentSlideMG)}%)`;
    });
}

function moveSlider3Right() {
    let slidesMWColl = document.getElementsByClassName("slideMW")
    let slidesMW = Array.from(slidesMWColl);
    console.log(slidesMW)

    let maxSlide = slidesMW.length - 1; // maximum number of slides
    console.log(maxSlide)

    if (currentSlideMW === maxSlide) { // if current slide is last -> reset
        currentSlideMW = 0;
    } else {
        currentSlideMW++;
    }

    slidesMW.forEach((slide, i) => { //   move slide by -100%
        slide.style.transform = `translateX(${100 * (i - currentSlideMW)}%)`;
    });
}

function moveSlider1Left() {
    let slidesMDColl = document.getElementsByClassName("slideMD")
    let slidesMD = Array.from(slidesMDColl);
    console.log(slidesMD)

    let maxSlide = slidesMD.length - 1; // maximum number of slides
    console.log(maxSlide)

    if (currentSlideMD === 0) { // if current slide is last -> reset
        currentSlideMD = maxSlide;
    } else {
        currentSlideMD--;
    }

    slidesMD.forEach((slide, i) => { //   move slide by -100%
        slide.style.transform = `translateX(${100 * (i - currentSlideMD)}%)`;
    });
}

function moveSlider2Left() {
    let slidesMGColl = document.getElementsByClassName("slideMG")
    let slidesMG = Array.from(slidesMGColl);
    console.log(slidesMG)

    let maxSlide = slidesMG.length - 1; // maximum number of slides
    console.log(maxSlide)

    if (currentSlideMG === 0) { // if current slide is last -> reset
        currentSlideMG = maxSlide;
    } else {
        currentSlideMG--;
    }

    slidesMG.forEach((slide, i) => { //   move slide by -100%
        slide.style.transform = `translateX(${100 * (i - currentSlideMG)}%)`;
    });
}

function moveSlider3Left() {
    let slidesMWColl = document.getElementsByClassName("slideMW")
    let slidesMW = Array.from(slidesMWColl);
    console.log(slidesMW)

    let maxSlide = slidesMW.length - 1; // maximum number of slides
    console.log(maxSlide)

    if (currentSlideMW === 0) { // if current slide is last -> reset
        currentSlideMW = maxSlide;
    } else {
        currentSlideMW--;
    }

    slidesMW.forEach((slide, i) => { //   move slide by -100%
        slide.style.transform = `translateX(${100 * (i - currentSlideMW)}%)`;
    });
}
