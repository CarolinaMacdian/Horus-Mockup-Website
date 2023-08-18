/**
 * Navigation Hamburguer
 * @format
 * */

function myFunction() {
  var x = document.getElementById('horusNavbar');
  if (x.className === 'navbar') {
    x.className += ' responsive';
  } else {
    x.className = 'navbar';
  }
}
