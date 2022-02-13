const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    spaceBetween: 0,
    
    // Optional parameters
    loop: true,
  
    // Navigation arrows
    navigation: {
      nextEl: '.main-slider__wrap'
    },
    breakpoints: {
        480: {
          slidesPerView: 2,
          spaceBetween: 30,
        }
    },
  });