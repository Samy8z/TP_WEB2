
$('#solutions').on('click', function click() {
    $('#navSolutions').fadeToggle(500)
    $('#navMore').fadeOut(500)
})

$('#more').on('click', function click() {
    $('#navMore').fadeToggle(500)
    $('#navSolution').fadeOut(500)
})

$(document.body).click(function(e) {
    if(!$(e.target).is($('#more'))&&!$.contains($('#more')[0],e.target) && !$(e.target).is($('#navMore'))&&!$.contains($('#navMore')[0],e.target) ) {
        $('#navMore').fadeOut(500)
    }
    if(!$(e.target).is($('#solutions'))&&!$.contains($('#solutions')[0],e.target) && !$(e.target).is($('#navSolutions'))&&!$.contains($('#navSolutions')[0],e.target) ) {
        $('#navSolutions').fadeOut(500)
    }
})