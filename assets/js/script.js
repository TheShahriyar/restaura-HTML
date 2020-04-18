(function($) {
  "use strict";

  //when dom is ready
  $(document).ready(function() {
    $(window).on("scroll", function() {
      if ($(window).width() > 800) {
        if ($(window).scrollTop() > 100) {
          $("#header").addClass("navbar-bg");
          $("#back-to-top").addClass("reveal");
        } else {
          $("#header").removeClass("navbar-bg");
          $("#back-to-top").removeClass("reveal");
        }
      }
    });

    //Owl Carousel-- Team Member
    $(".testimonial-container").owlCarousel({
      loop: true,
      nav: false,
      dots: true,
      margin: 20,
      autoplay: true,
      autoplayHoverPause: true,
      responsiveClass: true,
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 2
        },
        1200: {
          items: 3
        }
      }
    });

    // Result
    $(".team-container").owlCarousel({
      loop: true,
      nav: false,
      dots: true,
      items: 3,
      margin: 30,
      autoplay: true,
      autoplayHoverPause: true,
      responsiveClass: true,
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 2
        },
        1200: {
          items: 3
        }
      }
    });

    $(".special-dish-container").owlCarousel({
      loop: true,
      nav: false,
      dots: true,
      items: 1,
      margin: 30,
      autoplay: true,
      autoplayHoverPause: true,
      responsiveClass: true
    });

    $("#datepicker").datepicker();
  });
  //dom ready end
})(jQuery);
