// Open up images in a modal
var modal =
document.getElementById('myModal');

var span = document.getElementsByClassName("close")[0];

span.onclick = function() { 
    modal.style.display = "none";
}


var images = document.querySelectorAll(".illustration-gallery-item, .project-image");
var modalImg = document.getElementById("img01");
var i;
for (i = 0; i < images.length; i++) {
  images[i].onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    modalImg.alt = this.alt;
    captionText.innerHTML = this.nextElementSibling.innerHTML;
  }
}

var modaltest = document.getElementsByClassName('modal')[0];

modaltest.onclick = function() { 
    modal.style.display = "none";
}

var modaltest = document.getElementsByClassName('modal')[0];

modaltest.onclick = function() { 
    modal.style.display = "none";
}

// Slideshow gallery (Used in project pages)
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("gallerySlides");
  let dots = document.getElementsByClassName("demo");
  let captionText = document.getElementById("gallery-caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"
  }
  for(i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "")
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}

