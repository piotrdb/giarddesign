$(document).ready(function () {
  $('.offer-section').removeClass('opacity-0 translate-y-[100%]')
  $('.navbar').removeClass('opacity-0')
  $(window).on('scroll', function () {
    if ($(window).scrollTop() > 1440) {
      $('.about-section').removeClass('translate-x-[-100%]')
    }
  })
})
