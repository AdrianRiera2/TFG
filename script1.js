window.onscroll = function() {myFunction()};

var header = document.getElementById("header-banner");


function myFunction() {
  if (window.pageYOffset > 360) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}