$('.js-burger').click(function () {
  $('body').toggleClass('header-menu-active');
})

$(document).ready(function(){
  $('.team__slider').slick({
    arrows: false,
    dots: true
  });
});