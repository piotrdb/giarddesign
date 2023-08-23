jQuery(function () {
  $('.search').on('click', function () {
    $('.search').toggleClass('active')
    $('.search-input').toggleClass('scale-0')
    $('.offer').removeClass('active')
    $('.dropdown-icon').removeClass('active')
  })
})
jQuery(function () {
  $('.close-search').click(function () {
    $('.search').toggleClass('active')
    $('.search-input').toggleClass('scale-0')
  })
})
jQuery(function () {
  $('.offer').on('click', function () {
    $('.offer').toggleClass('active')
    $('.dropdown-icon').toggleClass('active')
    $('.search').removeClass('active')
    $('.search-input').removeClass('scale-0')
  })
})

jQuery(function () {
  $('.offer-section').removeClass('opacity-0 translate-y-[100%]')
  $('.about-section').removeClass('translate-x-[-100%]')
  $('.navbar').removeClass('opacity-0')
})

jQuery(function () {
  $('.open-menu').on('click', function () {
    $('.open-menu').toggleClass('hidden')
    $('.close-menu').toggleClass('hidden')
    $('.mobile-menu').toggleClass('hidden')
  })
  $('.close-menu').on('click', function () {
    $('.open-menu').toggleClass('hidden')
    $('.close-menu').toggleClass('hidden')
    $('.mobile-menu').toggleClass('hidden')
  })
})
