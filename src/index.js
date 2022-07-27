// Modal
(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-about-modal-open]'),
    closeModalBtn: document.querySelector('[data-about-modal-close]'),
    goBackBtn: document.querySelector('[data-about-modal-go-back]'),
    modal: document.querySelector('[data-about-modal]'),
    body: document.querySelector('body'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);
  refs.goBackBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
    refs.body.classList.toggle('no-scroll');
  }
})();

// Mobile_menu
(() => {
  const refs = {
    openMenuBtn: document.querySelector('[data-menu-open]'),
    closeMenuBtn: document.querySelector('[data-menu-close]'),
    menu: document.querySelector('[data-menu]'),
    body: document.querySelector('body'),
    home: document.querySelector('[data-home]'),
    gallery: document.querySelector('[data-gallery]'),
    about: document.querySelector('[data-about]'),
    products: document.querySelector('[data-products]'),
    contacts: document.querySelector('[data-contacts]'),
  };

  refs.openMenuBtn.addEventListener('click', toggleMenu);
  refs.closeMenuBtn.addEventListener('click', toggleMenu);
  refs.home.addEventListener('click', toggleMenu);
  refs.gallery.addEventListener('click', toggleMenu);
  refs.about.addEventListener('click', toggleMenu);
  refs.products.addEventListener('click', toggleMenu);
  refs.contacts.addEventListener('click', toggleMenu);

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
