
  // JavaScript to handle the pop-up navigation
  const navbarToggler = document.querySelector('.navbar-toggler');
  const popUpNav = document.querySelector('.pop-up-nav');

  navbarToggler.addEventListener('click', function () {
    popUpNav.style.display = 'block';
  });

  popUpNav.addEventListener('click', function (event) {
    if (event.target === popUpNav) {
      popUpNav.style.display = 'none';
    }
  });
