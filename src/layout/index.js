import './base';
import './grid';
import './wrapper';
import './content';
import './header';
import './footer';
import './about';
import './skills';
import './work';
import './work-process';
import './reviews';
import './feedback';
import './home-header';
import './home-works';
import './banner';
import './work-stats';
import './about-me';
import './contact-info';
import './companys';

import ReviewsSlider from './reviews'

let $reviewsSlider = $('.reviews')
if ($reviewsSlider.length) {
  new ReviewsSlider($reviewsSlider)
}

export default () => {
  console.log('init layout');

  let $pathname = window.location.pathname;
  switch ($pathname) {
    case '/about.html':
      $('.header-menu__item').removeClass('header-menu__item--active')
      $(".header-menu__item > a[href$='/about.html']").closest('.header-menu__item').addClass('header-menu__item--active');
      break;
    case '/':
      $('.header-menu__item').removeClass('header-menu__item--active')
      $(".header-menu__item > a[href$='/']").closest('.header-menu__item').addClass('header-menu__item--active');
      break;
    case '/home-page.html':
      $('.header-menu__item').removeClass('header-menu__item--active')
      $(".header-menu__item > a[href$='/home-page.html']").closest('.header-menu__item').addClass('header-menu__item--active');
      break;
    case '/home-page.html':
      $('.header-menu__item').removeClass('header-menu__item--active')
      $(".header-menu__item > a[href$='/home-page.html']").closest('.header-menu__item').addClass('header-menu__item--active');
      break;
    case '/contacts.html':
      $('.header-menu__item').removeClass('header-menu__item--active')
      $(".header-menu__item > a[href$='/contacts.html']").closest('.header-menu__item').addClass('header-menu__item--active');
      break;
    default:
      console.log('error');
  }
};