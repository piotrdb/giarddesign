let slideIndex = 0
showDivs(slideIndex)

function plusDivs(n) {
  showDivs((slideIndex += n))
}

function showDivs(n) {
  var i
  var x = document.getElementsByClassName('slides')
  if (x.length <= n) {
    slideIndex = 0
  }
  if (n < 0) {
    slideIndex = x.length - 1
  }
  for (i = 0; i < x.length; i++) {
    if (i < slideIndex) {
      x[i].classList.remove('slide-in', 'slide-right')
      x[i].classList.add('slide-left', 'invisible')
    } else if (i > slideIndex) {
      x[i].classList.remove('slide-in', 'slide-left')
      x[i].classList.add('slide-right', 'invisible')
    } else {
      x[i].classList.remove('slide-right', 'slide-left', 'invisible')
      x[i].classList.add('slide-in')
    }
  }
}
