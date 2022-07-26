// Mobile_menu
(() => {
  const refs = {
    openMenuBtn: document.querySelector('[data-menu-open]'),
    closeMenuBtn: document.querySelector('[data-menu-close]'),
    menu: document.querySelector('[data-menu]'),
    body: document.querySelector('body'),
  };

  refs.openMenuBtn.addEventListener('click', toggleMenu);
  refs.closeMenuBtn.addEventListener('click', toggleMenu);

  function toggleMenu() {
    refs.menu.classList.toggle('mobile-menu__container-translate');
    refs.body.classList.toggle('no-scroll');
  }
})();

$(document).ready(function () {
  $('.slider-list').slick({
    arrows: false,
    dots: true,
    adaptiveHeight: true,
    initialSlide: 0,
    infinite: true,
    // autoplay: true,
    // autoplaySpeed: 5500,
    // pauseOnFocus: true,
    // pauseOnHover: true,
    // pauseOnDotsHover: true,
  });
});
