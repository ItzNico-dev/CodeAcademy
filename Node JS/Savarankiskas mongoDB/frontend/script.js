const clickables = document.querySelectorAll(".clickable");





let prevClicked = null;

clickables.forEach(clickable => {

  clickable.addEventListener("click", () => {
    if (prevClicked !== null) {
      prevClicked.classList.remove("blue");
    }
    clickable.classList.add("blue");
    prevClicked = clickable;
  });
});
