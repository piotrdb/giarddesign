var btn = $('#backToTop')
$(window).on('scroll', function () {
  if ($(window).scrollTop() > 1000) {
    btn.removeClass('opacity-0 cursor-default')
    btn.addClass('cursor-pointer')
  } else {
    btn.addClass('opacity-0 disabled cursor-default')
    btn.removeClass('cursor-pointer')
  }
})
btn.on('click', function (e) {
  e.preventDefault()
  $('html, body').animate(
    {
      scrollTop: 0,
    },
    '1000'
  )
})
