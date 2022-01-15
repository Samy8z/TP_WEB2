$(document).ready(function () { 

  //Header Mobile Menu (SECTION 1 MOBILE PART)
  $( "#mobile-menu" ).css({
    left: "15px",
    top: "15px"
  })

  $('#mobile-menu-close').on('click', function click() {
    $('#mobile-menu').animate({
      opacity: 0,
      "left": "15px",
      "top": "15px",
      height: "-=2%",
      width: "-=2%"
    }, 100, function() {
      $('#mobile-menu').css('display', 'none');
    });
  })

  $('#mobile-menu-open').on('click', function click() {
    $('#mobile-menu').css('z-index', 9999);
    
    // The same works with hidden
    if ($('#mobile-menu').is(":hidden")) {
      $( "#mobile-menu" ).animate({
        opacity: 1,
        left: "10px",
        "top": "10px",
        height: "+=2%",
        width: "+=2%"
        }, 200
      );
      $('#mobile-menu').css('display', 'block')
    }
  });

  //Make Menu follow scrolling
  jQuery(function($) {
    $(window).scroll(function fix_element() {
      $('#mobile-menu').css(
        $(window).scrollTop() > 100
          ? { 'position': 'fixed', 'top': '10px' }
          : { 'position': 'relative', 'top': 'auto' }
      );
      return fix_element;
    }());
  });
})