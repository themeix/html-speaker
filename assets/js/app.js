(function ($) {
  "use strict";

 

    /*  Sticky Header */
    $(window).on('scroll', function () {
      var scroll = $(window).scrollTop();
      if (scroll >= 150) {
        $(".header-bottombar").addClass("header-sticky");
      } else {
        $(".header-bottombar").removeClass("header-sticky");
      }
    });
  /*  Mobile Menu */
  $(".mobile-toggle").on("click", function () {
    $(this).toggleClass("open");
    $(".mobile-menu").slideToggle();
  });
  $(".sub-toggle").on("click", function () {
    if ($(this).text().includes("-")) {
      $(this).text("+")
    } else {
      $(this).text("-")
    }
    $(this).parent().siblings(".dropdown-menu").slideToggle();
  });

  
 

   // Aos Js 
 AOS.init({
  offset: 50,
  delay: 200,
  duration: 2000,
  easing: 'ease',
  once: true,
  mirror: true,
  anchorPlacement: 'top-center',

});





 



  // When the user scrolls the page, execute myFunction 
  window.onscroll = function () {
    myFunction()
  };

  function myFunction() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").style.width = scrolled + "%";
  }
 
  /*=============================================
     	5. Scroll to Top
     ===============================================*/

  function scrolltop() {


    var wind = $(window);

    wind.on("scroll", function () {

      var scrollTop = $(window).scrollTop();

      if (scrollTop >= 500) {

        $(".scroll-top").fadeIn("slow");

      } else {

        $(".scroll-top").fadeOut("slow");
      }

    });

    $(".scroll-top").on("click", function () {

      var bodyTop = $("html, body");

      bodyTop.animate({
        scrollTop: 0
      }, 800, "easeOutCubic");
    });

  }
  scrolltop();


 
}(jQuery));


function toggleModal() {
  document.getElementById('modal').classList.toggle('hidden')
}