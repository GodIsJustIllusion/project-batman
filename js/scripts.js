const swiper = new Swiper('.swiper', {
    spaceBetween: 30,
    
    // Optional parameters
    loop: true,
  
    // Navigation arrows
    navigation: {
      nextEl: '.main-slider__wrap'
    },
    breakpoints: {
        320: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        }
    },  
  });

  let burger = document.querySelector ('.menu-burger');
  let closeMenu = document.querySelector ('.header__menu-close');
  let menuMobile = document.querySelector ('.header');

  burger.addEventListener ('click', () => {
      menuMobile.style.display = 'block';
  })

  closeMenu.addEventListener ('click', () => {
    menuMobile.style.display = 'none';
  })

  const modalWindow = document.querySelector('.modal');
  const buttonModal = document.querySelector('.main__button-play');

  buttonModal.addEventListener ('click', (e) => {
      modalWindow.classList.add('active');
  })

  modalWindow.addEventListener('click', (e) => {
      const isModal = e.target.closest('.modal__inner');

      if (!isModal) {
        modalWindow.classList.remove('active');
      }
  })