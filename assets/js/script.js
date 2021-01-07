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

// Animasi Muncul
$(window).scroll(function () {
  var wScroll = $(this).scrollTop();
  if (wScroll > $('.conten').offset().top - 300) {
    $('.judul').addClass('ada');
    $('.conten').each(function (i) {
      setTimeout(function () {
        $('.conten').eq(i).addClass('ada');
      }, 800 * (i + 1));
    });
  }

  if (wScroll > $('.pilihan').offset().top - 450) {
    $('.pilihan').addClass('pilihan-muncul');
  }

  if (wScroll > $('#home').offset().top - 0) {
    $('.top').addClass('top-muncul');
  }

  if (wScroll > $('.paket').offset().top - 100) {
    $('.judulbelajar').addClass('judulbelajar-muncul');
    $('.paket').each(function (i) {
      setTimeout(function () {
        $('.paket').eq(i).addClass('paket-muncul');
      }, 500 * (i + 1));
    });
  }


});