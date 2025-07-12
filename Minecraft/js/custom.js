
$(function() {
  "use strict";
  
  $(window).on("scroll", function() {
      // On scroll smooth header
      if($(window).scrollTop() > 50) {
          $(".header-nav").addClass("header-fix");
      } else {
         $(".header-nav").removeClass("header-fix");
      }
      // On scroll auto close menu
      if($('.navbar-collapse').hasClass('show')){
        $('#navbar .navbar-toggler').click();
      }
  });
      // On click menu close
  $('#navbar ul li a').click(function(){
    if($('.navbar-collapse').hasClass('show')){
      $('#navbar .navbar-toggler').click();
    }
  });

});

  // On Counter animation
$('.countdown-content>h6').each(function () {
  $(this).prop('Counter',0).animate({
    Counter: $(this).text()
  }, {
    duration: 4000,
    easing: 'swing',
    step: function (now) {
      $(this).text(Math.ceil(now));
    }
  });
});