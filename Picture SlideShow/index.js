let currentSlide = 4;

const turnSlide = (slideId) => {
  // Change background image
  background = document.getElementById("slide__background");
  background.src = `./img/img${slideId}_large.jpg`;

  // Change style for thumb images
  thumbList = document.getElementsByClassName("slide__background--thumb");
  for (i = 0; i < thumbList.length; i++) {
    thumbList[i].style.transform = "translateY(0)";
  }

  document.getElementById(slideId).style.transform = "translateY(-10px)";

  // Reassign current slide
  if (event.type === "click") currentSlide = event.target.id * 1;
  console.log("Current slide: ", currentSlide);
};

document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowRight") {
    currentSlide < 4 ? (currentSlide += 1) : (currentSlide = 1);
  }
  if (event.key === "ArrowLeft") {
    currentSlide > 1 ? (currentSlide -= 1) : (currentSlide = 4);
  }

  turnSlide(currentSlide);
});
