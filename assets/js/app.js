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


  /*  Video-popup  */
  $('.video-popup').magnificPopup({
    type: 'iframe'
  });

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
          slidesToShow: 1
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
  $(document).ready(function () {
    $('select').niceSelect();
  });

  if ($('#countdown-day').length > 0) {
    (function () {
      const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;

      let birthday = "Sep 30, 2021 00:00:00",
        countDown = new Date(birthday).getTime(),
        x = setInterval(function () {

          let now = new Date().getTime(),
            distance = countDown - now;

          document.getElementById("days").innerText = Math.floor(distance / (day)),
            document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
            document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
            document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);

          //do something later when date is reached
          if (distance < 0) {
            let headline = document.getElementById("headline"),
              countdown = document.getElementById("countdown"),
              content = document.getElementById("content");

            headline.innerText = "It's my birthday!";
            countdown.style.display = "none";
            content.style.display = "block";

            clearInterval(x);
          }
          //seconds
        }, 0)
    }());
  }



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