function smoothScrolling() {

  let anchorlinks = document.querySelectorAll('a[href^="#"]')

  for (let item of anchorlinks) {
    item.addEventListener('click', (e) => {
      //to get the right css for the nav button (red color and border-top line)
      let prevPageHTMLColl = document.getElementsByClassName("thispage");
      let prevPageArr = Array.from(prevPageHTMLColl);
      for (let prevPage of prevPageArr) {
        prevPage.classList.remove("thispage");
      }
      item.parentElement.classList += " thispage";

      let hashval = item.getAttribute('href');

      var element = document.querySelector(hashval);
      var headerOffset = 65;
      var elementPosition = element.getBoundingClientRect().top;
      var offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      history.pushState(null, null, hashval)
      e.preventDefault()
    })
  }
}

smoothScrolling();

function buttonClick() {
  let navbutton = document.getElementById("navButton");
  navbutton.addEventListener("click", function () {
    toggleDropDown();
  });

  let dropbutton = document.getElementById("dropButton");
  dropbutton.addEventListener("click", function () {
    toggleDropDown();
  });
}

buttonClick();

function toggleDropDown() {
  console.log("toggle dropdown");
  let dropdown = document.getElementById("myDropdown");
  let contactLink = document.getElementById("contactLink");
  let navbutton = document.getElementById("navButton");
  if (dropdown.style.display == "block") {
    dropdown.style.display = "none";
    contactLink.style.color = "rgba(0,0,0,1)";
    navbutton.style.display = "inline-block";
  } else {
    dropdown.style.display = "block";
    contactLink.style.color = "rgba(0,0,0,0)";
    navbutton.style.display = "none";
  }
}

//----VIDEO ON HOVER-----------------------------------------------------------------------------

function playHiddenVideo() {
  let picturesHTMLCol = document.getElementsByClassName("hiddenVideo");
  let pictures = Array.from(picturesHTMLCol);
  let videosHTMLCol = document.getElementsByClassName("projectVideo");
  let videos = Array.from(videosHTMLCol);
  for (let picture of pictures) {
    picture.addEventListener('mouseover', (e) => {
      console.log("hovering")
      for (let video of videos) {
        if ((video.id.charAt(0)) == (picture.id.charAt(0))) {
          video.style.display = "block";
          video.play();

          video.addEventListener('mouseout', (e) => {
            video.style.display = "none";
            video.pause();
          })
        }
      }
    })
  }
}
playHiddenVideo();

function showHiddenPicture() {
  let picturesHTMLCol = document.getElementsByClassName("hiddenPicture");
  let pictures = Array.from(picturesHTMLCol);
  let travelPicsHTMLCol = document.getElementsByClassName("travelPicture");
  let travelPics = Array.from(travelPicsHTMLCol);
  for (let picture of pictures) {
    picture.addEventListener('mouseover', (e) => {
      console.log("hovering")
      for (let travelPic of travelPics) {
        if (travelPic.id.charAt(0) == picture.id.charAt(0)) {
          travelPic.style.display = "block";
          picture.style.display = "none";

          travelPic.addEventListener('mouseout', (e) => {
            travelPic.style.display = "none";
            picture.style.display = "block";
          })
        }
      }
    })
  }
}

showHiddenPicture();