import Swiper from 'swiper';
import 'swiper/css/bundle';
import { Thumbs } from 'swiper/modules';


export const imagesSlider = () => {
  // var swiper = new Swiper(".product__thumbs", {
  //   spaceBetween: 10,
  //   slidesPerView: 4,
  //   freeMode: true,
  //   watchSlidesProgress: true,
  // });
  // var swiper2 = new Swiper(".product__slider", {
  //   spaceBetween: 10,
  //   thumbs: {
  //     swiper: swiper,
  //   },
  // });
  var swiper = new Swiper('.product__thumbs', {
    loop: true,
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,

    watchSlidesProgress: true,
  });
  var swiper2 = new Swiper('.product__slider', {
    loop: true,
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