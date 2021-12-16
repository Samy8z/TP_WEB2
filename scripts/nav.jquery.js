$('#conf-modal').fadeIn(300)

$('#modal-cancel').on('click', CloseModal)
$('#modal-desac').on('click', CloseModal)

function CloseModal() {
    $('#conf-modal').fadeOut(200)
}

$('#banner-close').on('click', function click() {
    $('#banner').fadeOut(80)
})
$('#banner-close')

$('#solutions').on('click', function click() {
    $('#navSolutions').fadeToggle(100)
    $('#navMore').fadeOut(100)
})

$('#more').on('click', function click() {
    $('#navMore').fadeToggle(100)
    $('#navSolution').fadeOut(100)
})

$(document.body).click(function(e) {
    if(!$(e.target).is($('#more'))&&!$.contains($('#more')[0],e.target) && !$(e.target).is($('#navMore'))&&!$.contains($('#navMore')[0],e.target) ) {
        $('#navMore').fadeOut(100)
    }
    if(!$(e.target).is($('#solutions'))&&!$.contains($('#solutions')[0],e.target) && !$(e.target).is($('#navSolutions'))&&!$.contains($('#navSolutions')[0],e.target) ) {
        $('#navSolutions').fadeOut(100)
    }
})

$("#myform").validate({
    rules: {
      firstName: {
        required: true,
        minlength: 2,
        maxlength: 24
      },
      lastName: {
        required: true,
        minlength: 2,
        maxlength: 32
      },
      emailAddress: {
        required: true,
        email: true,
        maxlength: 64
      },
      streetAddress: {
        required: true,
        minlength: 8,
        maxlength: 86
      },
      city: {
        required: true,
        maxlength: 32
      },
      region: {
        required: true,
        minlength: 2,
        maxlength: 24
      },
      postalCode: {
        required: true,
        number: true,
        minlength: 4,
        maxlength: 12
      }
    },
    messages: {
      firstName: {
        required: "Please specify your first name",
        
      },
      lastName: {
        required: "Please specify your last name",
      },
      emailAddress: {
        required: "We can't contact you without your email address !",
        email: "Your email address must look like john@doe.com"
      },
      streetAddress: {
        required: "Please specify your street address",
      },
      city: {
        required: "Please specify your city",
      },
      region: {
        required: "Please specify your region/province",
      },
      postalCode: {
        required: "Please specify your ZIP/Postal code",
        number: "A ZIP/Postal code if often a number..."
      },
    }
  });
  