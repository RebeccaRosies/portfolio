let currentSlide = 0; // current slide counter
let slider = document.getElementById("slider");
const slides = document.querySelectorAll(".slide"); // Select all slides
const nextSlide = document.querySelector(".btnNext"); // select next slide button
const prevSlide = document.querySelector(".btnPrev"); // select prev slide button


function portfolioSlider() {
  let maxSlide = slides.length - 1; // maximum number of slides

  slides.forEach((slide, i) => { // slide one shows, slide 2 sits right, slide 3 even further
    slide.style.transform = `translateX(${i * 100}%)`;
  });

  nextSlide.addEventListener("click", function () { // event listener & nav functionality
    if (currentSlide === maxSlide) { // if current slide is last -> reset
      currentSlide = 0;
    } else {
      currentSlide++;
    }

    if (currentSlide == maxSlide) {
      slider.style.margin = "0vw 0vw"
      nextSlide.style.top = "30.55%";
      prevSlide.style.top = "30.55%";
    } else {
      slider.style.margin = "5vw 0vw"
      nextSlide.style.top = "20%";
      prevSlide.style.top = "20%";
    }
    slides.forEach((slide, i) => { //   move slide by -100%
      slide.style.transform = `translateX(${100 * (i - currentSlide)}%)`;
    });
  });



  prevSlide.addEventListener("click", function () { // event listener & nav functionality
    if (currentSlide === 0) { // if current slide is first -> reset
      currentSlide = maxSlide;
    } else {
      currentSlide--;
    }

    if (currentSlide == maxSlide) {
      slider.style.margin = "0vw 0vw"
      nextSlide.style.top = "30.55%";
      prevSlide.style.top = "30.55%";
    } else {
      slider.style.margin = "5vw 0vw"
      nextSlide.style.top = "20%";
      prevSlide.style.top = "20%";
    }
    //   move slide by 100%
    slides.forEach((slide, i) => {
      slide.style.transform = `translateX(${100 * (i - currentSlide)}%)`;
    });
  });

}
portfolioSlider();

function portfolioNav() {
  let threeDButton = document.getElementById("threeDButton");
  let gameButton = document.getElementById("gameButton");
  let webButton = document.getElementById("webButton");

  threeDButton.addEventListener("click", function () {
    console.log("click");
    currentSlide == 1;
    slides.forEach((slide, i) => { // slide one shows, slide 2 sits right, slide 3 even further
      slide.style.transform = `translateX(${i * 100}%)`;
    });
    slider.style.margin = "5vw 0vw"
    nextSlide.style.top = "20%";
    prevSlide.style.top = "20%";
    threeDButton.classList.add("thisSlide");
    webButton.classList.remove("thisSlide");
    gameButton.classList.remove("thisSlide");
   
  })

  gameButton.addEventListener("click", function () {
    console.log("click");
    currentSlide == 2;
    slides.forEach((slide, i) => { // slide one shows, slide 2 sits right, slide 3 even further
      slide.style.transform = `translateX(${i * 100 -100}%)`;
    });
    slider.style.margin = "5vw 0vw"
    nextSlide.style.top = "20%";
    prevSlide.style.top = "20%";
    threeDButton.classList.remove("thisSlide");
    webButton.classList.remove("thisSlide");
    gameButton.classList.add("thisSlide");
  })

  webButton.addEventListener("click", function () {
    console.log("click");
    currentSlide == 3;
    slides.forEach((slide, i) => { // slide one shows, slide 2 sits right, slide 3 even further
      slide.style.transform = `translateX(${i * 100-200}%)`;
    });
    slider.style.margin = "0vw 0vw"
    nextSlide.style.top = "30.55%";
    prevSlide.style.top = "30.55%";
    threeDButton.classList.remove("thisSlide");
    webButton.classList.add("thisSlide");
    gameButton.classList.remove("thisSlide");
  })
}

portfolioNav();