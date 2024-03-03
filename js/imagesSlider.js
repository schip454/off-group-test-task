import Swiper from 'swiper';
import 'swiper/css/bundle';
import { Thumbs } from 'swiper/modules';


export const imagesSlider = () => {

  const swiper = new Swiper('.product__thumbs', {
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,

    watchSlidesProgress: true,
  });
  const swiper2 = new Swiper('.product__slider', {
    spaceBetween: 10,
    modules: [Thumbs],
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    thumbs: {
      swiper: swiper,
    },
  });
}