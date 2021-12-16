$('#modal-cancel').on('click', CloseModal)
$('#modal-desac').on('click', CloseModal)

function CloseModal() {
    $('#conf-modal').fadeOut(300)
}

$('#banner-close').on('click', function click() {
    $('#banner').fadeOut(50)
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
