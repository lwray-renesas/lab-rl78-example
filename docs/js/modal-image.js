// Get the modal
var modal = document.getElementById("image-modal");

// Get all the small images (thumbnails)
var images = document.getElementsByClassName("thumbnails");
// Get the modal image area
var modalImg = document.getElementById("modal-image-area");
// Get the modal caption
var captionText = document.getElementById("caption");

// Go through all of the images with the thumbnail class
for (var i = 0; i < images.length; i++) {
  var img = images[i];
  // and attach the click listener the the images.
  img.onclick = function(evt) {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  }
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}