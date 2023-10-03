import Swiper from "swiper/bundle";

const testimonials = new Swiper(".swiper-testimonials", {
  slidesPerView: 1,
  spaceBetween: 10,
  grabCursor: true,
  keyboard: {
    enabled: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    760: {
      slidesPerView: 2,
    },
    1004: {
      slidesPerView: 3,
    },
  },
});

// const reviews = new Swiper(".swiper-reviews", {
//   slidesPerView: 1,
//   spaceBetween: 20,
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
// });