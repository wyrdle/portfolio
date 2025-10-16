// Open up images in a modal
var modal =
document.getElementById('myModal');

var span = document.getElementsByClassName("close")[0];

span.onclick = function() { 
    modal.style.display = "none";
}


var images = document.getElementsByClassName('illustration-gallery-item');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
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