$(document).ready(function () { 
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
      $('#mobile-menu').hide()
    })
  })

  $('#mobile-menu-open').on('click', function click() {
    $('#mobile-menu').css('z-index', 9999);
    $('#mobile-menu').show()
    $( "#mobile-menu" ).animate({
      opacity: 1,
      left: "10px",
      "top": "10px",
      height: "+=2%",
      width: "+=2%"
      }, 200
    );
  });

  var documentHeight = 0;
  var topPadding = 15;
  $(function() {
      var offset = $("#mobile-menu").offset();
      documentHeight = $(document).height();
      $(window).scroll(function() {
          var sideBarHeight = $("#mobile-menu").height();
          if ($(window).scrollTop() > offset.top) {
              var newPosition = ($(window).scrollTop() - offset.top) + topPadding;
              var maxPosition = documentHeight - (sideBarHeight + 100);
              if (newPosition > maxPosition) {
                  newPosition = maxPosition;
              }
              $("#mobile-menu").stop().animate({
                  marginTop: newPosition
              });
          } else {
              $("#mobile-menu").stop().animate({
                  marginTop: 0
              });
          };
      });
  });
})