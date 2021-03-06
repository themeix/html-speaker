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



/*  Sticky icon */
$(window).on('scroll', function () {
  var scroll = $(window).scrollTop();
  if (scroll >= 250) {
    $(".sticky-icon").addClass("header-sticky-icon");
  } else {
    $(".sticky-icon").removeClass("header-sticky-icon");
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


  /*  Video-popup  */
  $('.video-popup').magnificPopup({
    type: 'iframe',
    closeOnContentClick: true,
    mainClass: 'mfp-fade',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0, 1]
    }
  }); 

  $('.popup-link-false').magnificPopup({
    modal: false
  });

  
  $(".container-video, .video-container").fitVids();




  //Logo Slider

  $('.logo-slider').slick({
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    speed: 1000,
    slidesToShow: 8,
    arrows: false,
    dots: false,
    prevArrow: $('.slider-prev'),
    nextArrow: $('.slider-next'),
    responsive: [{
        breakpoint: 991,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 3
        }
      }
    ]
  });
  $('.testimonial-slider').slick({
    autoplay:false,
    autoplaySpeed: 2000,
    infinite: true,
    speed: 1000,
    slidesToShow: 2,
    arrows: true,
    dots: false,
    prevArrow: $('.slider-prev'),
    nextArrow: $('.slider-next'),
    responsive: [{
        breakpoint: 991,
        settings: {
          slidesToShow: 1
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });

  $('.relatated-articles-slider').slick({
    autoplay:false,
    autoplaySpeed: 2000,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    arrows: true,
    dots: false,
    prevArrow: $('.slider-prev'),
    nextArrow: $('.slider-next'),
    responsive: [{
        breakpoint: 991,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });


  
 /* Aos Js */
 AOS.init({
  offset: 50,
  delay: 0,
  duration: 400,
  easing: 'ease-in-out',
  debounceDelay: 20,
  throttleDelay: 50,
  once: true,
  mirror: false,
  anchorPlacement: 'top-bottom',
});

 
  
  $(document).ready(function () {
    $('select').niceSelect();

  });




 /*=====| Popup |=====*/
 $('.portfolio-popup-icon').magnificPopup({
  type: 'image',
  closeOnContentClick: true,
  mainClass: 'mfp-fade',
  gallery: {
    enabled: true,
    navigateByImgClick: true,
    preload: [0, 1]
  }
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
