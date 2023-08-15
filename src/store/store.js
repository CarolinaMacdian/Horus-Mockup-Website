/** @format */

function myFunction() {
  var menuIcon = document.querySelector('.icon-navbar');
  var navbarLinks = document.querySelectorAll('.navbar a');

  menuIcon.classList.toggle('active');

  navbarLinks.forEach(function (link) {
    link.classList.toggle('bold-link');
  });
}
