let imageIndex = 1
showImages(imageIndex)
function plusImages(n) {
  showImages((imageIndex += n))
}
function currentImage(n) {
  showImages((imageIndex = n))
  $('.gallery-overlay').toggleClass('hidden flex')
}
function closeGallery() {
  $('.gallery-overlay').toggleClass('hidden flex')
}
function showImages(n) {
  let i
  let images = document.getElementsByClassName('gallery-image')
  if (n > images.length) {
    imageIndex = 1
  }
  if (n < 1) {
    imageIndex = images.length
  }
  for (i = 0; i < images.length; i++) {
    images[i].style.display = 'none'
  }
  images[imageIndex - 1].style.display = 'block'
}
