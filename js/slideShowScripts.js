/*

   The Groom Room
   Author: Steven Richard
   Date:   Dec 09, 2023
   Filename: slideShowScripts.js

*/

/* script for slide show fades in and goes to a new image every 2 seconds automatically */
let slideIndex = 0;

function SlideShow() {

  let i;
  let slides = document.getElementsByClassName("slides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  slides[slideIndex-1].style.display = "block";  
  setTimeout(SlideShow, 2000); // Change image every 2 seconds
}


