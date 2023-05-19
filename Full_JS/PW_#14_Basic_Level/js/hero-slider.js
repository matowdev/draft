const swiper = new Swiper('.js-hero-slider', {
  // Optional parameters
  slidesPerView: 1,
  spaceBetween: 0,
  loop: true,

  // If we need pagination
  pagination: {
    el: '.js-hero-slider-pagination',
    clickable: 'true',
    type: 'bullets',
  },
});
