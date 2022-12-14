/*
Add functionality in JS for slider to: 
1. Toolbar button hides/shows toolbar; 
2. Back button shows rewinds to previous img; 
3. Pause/play button changes icon and stops/starts carousel; 
4. Forward button takes to next image immediately. 
5. Shuffle button takes to one random image. And after that images goes in order. (Not random all the time, but just one image). 
6. Add functionality to use .fade class to make fade in, fade out between slides. 
*/

//Your JS goes here



//!selectors
const toolbar = document.querySelector('#toolbar')
const previousButton = document.querySelector("#slider-previous");
const playPauseIcon = document.querySelector("#slider-toggle i");
const pauseButton = document.querySelector('#slider-toggle')
const forwardButton = document.querySelector('#slider-next')
const shuffleButton = document.querySelector('#slider-random')


//!listeners
toolbar.addEventListener('click', toggleTools)
previousButton.addEventListener("click", showPrevious);
pauseButton.addEventListener('click', togglePause)
forwardButton.addEventListener('click', changeImage)
shuffleButton.addEventListener('click', shuffleImage)




const images = [
    "https://github.com/Marijus84/JS-Carousel-starter/blob/master/images/1.jpg?raw=true",
    "https://github.com/Marijus84/JS-Carousel-starter/blob/master/images/2.jpg?raw=true",
    "https://github.com/Marijus84/JS-Carousel-starter/blob/master/images/3.jpg?raw=true",
    "https://github.com/Marijus84/JS-Carousel-starter/blob/master/images/4.jpg?raw=true",
    "https://github.com/Marijus84/JS-Carousel-starter/blob/master/images/5.jpg?raw=true",
    "https://github.com/Marijus84/JS-Carousel-starter/blob/master/images/6.jpg?raw=true",
  ];
  
  let imageIndex = 0;

  const imageElement = document.querySelector("img");
  imageElement.src = images[imageIndex];
  const intervalID = setInterval(changeImage, 2000);
  
  function changeImage() {
    imageIndex++;
    if (imageIndex >= images.length) {
      imageIndex = 0;
    }
    imageElement.src = images[imageIndex];
}
  

//!1. Toolbar button hides/shows toolbar; 



function toggleTools() {
    document.querySelector('nav').classList.toggle('hide')
}

//!2. Back button shows rewinds to previous img;



function showPrevious() {
  imageIndex--;
  if (imageIndex < 0) {
    imageIndex = images.length - 1;
  }

    imageElement.src = images[imageIndex];
    intervalID = setInterval(changeImage, 2000)
}

//!3. Pause/play button changes icon and stops/starts carousel;

playPauseIcon.classList.add('fa-pause')
playPauseIcon.classList.remove('fa-play')


let pause = false

function togglePause() {
    playPauseIcon.classList.toggle('fa-pause')
    playPauseIcon.classList.toggle('fa-play')

    pause = !pause

    if (pause) {
        clearInterval(intervalID)
    } else {
        setInterval(changeImage, 2000)
    }
}

//!4. Forward button takes to next image immediately.


function shuffleImage() {
    imageIndex = Math.floor(Math.random() * images.length)


    imageElement.src = images[imageIndex];
}

//!6. Add functionality to use .fade class to make fade in, fade out between slides.

imageElement.addEventListener('load', fadeImage)

function fadeImage() {
    imageElement.classList.toggle('fade')
}