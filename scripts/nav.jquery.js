
$('#solutions').on('click', function click() {
    $('#navSolutions').toggle()
    $('#navMore').classList.add('hidden')
})

$('#more').on('click', function click() {
    $('#navMore').toggle()
    $('#navSolution').classList.add('hidden')
})