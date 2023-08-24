var macy = Macy({
  container: '#projects-masonry',
  trueOrder: true,
  waitForImages: false,
  margin: 1,
  columns: 3,
  breakAt: {
    940: 2,
  },
})

$(document).ready(function () {
  $('.expand-projects').hover(function () {
    $('.projects-overlay').toggleClass('opacity-50')
  })
  $('.expand-projects').click(function () {
    $('.projects-overlay').toggleClass('opacity-0 mb-[400px]')
    $('.projects-overlay').toggleClass('sm:mb-[840px]')
    $('.expand-projects').toggleClass('hidden')
    $('.hide-projects').toggleClass('hidden flex')
    $('.contact-section').toggleClass('mt-[-400px]')
    $('.contact-section').toggleClass('sm:mt-[-840px]')
  })
  $('.hide-projects').hover(function () {
    $('.projects-overlay').toggleClass('opacity-100')
  })
  $('.hide-projects').click(function () {
    $('.projects-overlay').toggleClass('opacity-0 mb-[400px]')
    $('.projects-overlay').toggleClass('sm:mb-[840px]')
    $('.expand-projects').toggleClass('hidden')
    $('.hide-projects').toggleClass('hidden flex')
    $('.contact-section').toggleClass('mt-[-400px]')
    $('.contact-section').toggleClass('sm:mt-[-840px]')
  })
})
