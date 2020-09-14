import './header.sass';


$(document).ready(() => {
  let $burger = $('.header-burger');
  let $menu = $('.header-menu__items');
  if ($burger) {
    $burger.on('click', () => {
      $burger.toggleClass('close');
      $menu.toggleClass('open-menu');
    })
  }
  $(window).on('resize', () => {
    if ($menu.hasClass('open-menu') && $(document).width() > 879) {
      $burger.removeClass('close');
      $menu.removeClass('open-menu');
    }
  })
})