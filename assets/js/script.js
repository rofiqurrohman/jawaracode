//Mengganti warna navbar saat di scroll

var navbar = document.querySelector("nav");
var iconList = document.getElementById("iconList");

window.onscroll = function () {
  if (window.pageYOffset > 50) {
    navbar.classList.add("navbarku");
    navbar.classList.add("fixed-top");
    iconList.style.color = "black";
  } else {
    navbar.classList.remove("navbarku");
    navbar.classList.remove("fixed-top");
    iconList.style.color = "white";
  }
};
