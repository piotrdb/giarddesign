jQuery(function () {
  $('.expand-projects').on('click', function () {
    $('.projects-overlay').toggleClass('opacity-50')
  })
  $('.expand-projects').on('click', function () {
    $('.projects-overlay').toggleClass('opacity-0 mb-[400px]')
    $('.projects-overlay').toggleClass('sm:mb-[840px]')
    $('.expand-projects').toggleClass('hidden')
    $('.hide-projects').toggleClass('hidden flex')
    $('.contact-section').toggleClass('mt-[-400px]')
    $('.contact-section').toggleClass('sm:mt-[-840px]')
  })
  $('.hide-projects').on('hover', function () {
    $('.projects-overlay').toggleClass('opacity-100')
  })
  $('.hide-projects').on('click', function () {
    $('.projects-overlay').toggleClass('opacity-0 mb-[400px]')
    $('.projects-overlay').toggleClass('sm:mb-[840px]')
    $('.expand-projects').toggleClass('hidden')
    $('.hide-projects').toggleClass('hidden flex')
    $('.contact-section').toggleClass('mt-[-400px]')
    $('.contact-section').toggleClass('sm:mt-[-840px]')
  })
})

var container = document.querySelector('.js-masonry')
var msnry = new Masonry(container, {
  columnWidth: 200,
  itemSelector: '.item',
})

msnry.imagesLoaded()(function () {
  msnry.masonry()
})

imagesLoaded(document.querySelector('.js-masonry'), function (instance) {
  console.log('all images are loaded')
})
