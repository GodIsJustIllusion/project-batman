const swiper = new Swiper('.swiper', {
    slidesPerView: 2,
    spaceBetween: 30,
    
    // Optional parameters
    loop: true,
  
    // Navigation arrows
    navigation: {
      nextEl: '.main-slider__wrap'
    },
    breakpoints: {
        480: {
          slidesPerView: 1,
          spaceBetween: 0,
        }
    }
  });