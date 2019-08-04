(function () {
  var navMain = document.querySelector('.main-nav');
  var headerWrapper = document.querySelector('.page-header__wrapper');
  var navToggle = document.querySelector('.main-nav__toggle');

  navMain.classList.remove('main-nav--nojs');
  headerWrapper.classList.remove('page-header__wrapper--nojs');

  navToggle.addEventListener('click', function () {
    if (navMain.classList.contains('main-nav--closed')) {
      navMain.classList.remove('main-nav--closed');
      navMain.classList.add('main-nav--opened');
      headerWrapper.classList.remove('page-header__wrapper--closed');
      headerWrapper.classList.add('page-header__wrapper--opened');

    } else {
      navMain.classList.add('main-nav--closed');
      navMain.classList.remove('main-nav--opened');
      headerWrapper.classList.remove('page-header__wrapper--opened');
      headerWrapper.classList.add('page-header__wrapper--closed');
    }
  });
})();
