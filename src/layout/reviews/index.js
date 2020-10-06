import 'swiper/swiper-bundle.css'
import Swiper from 'swiper/swiper-bundle'
import './reviews.sass'

class ReviewsSlider {
  constructor($root) {

    this.firstSlider = new Swiper('.reviews-swiper-container', {
      slidesPerView: 1,
      speed: 1000,
      autoplay: {
        delay: 7000,
        disableOnInteraction: false,
      },

      pagination: {
        el: '.swiper-pagination',
        dynamicBullets: 'true',
      },
      loopedSlides: $root.find('.reviews-swiper-slide').length,
      on: {
        init() {}
      }
    })
  }
}

export default ReviewsSlider
