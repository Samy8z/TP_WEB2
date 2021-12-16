
let modal = document.getElementById('conf_modal')
let cancel = document.getElementById('modal-cancel')
let desac = document.getElementById('modal-desac')


function closeModal() {
    cancel.removeEventListener('click', closeModal)
    desac.removeEventListener('click', closeModal)
    modal.classList.add('hidden')
}


cancel.addEventListener('click', closeModal)
desac.addEventListener('click', closeModal)



let banner = document.getElementById('banner')
let close = document.getElementById('banner-close')


function closeBanner() {
    close.removeEventListener('click', closeBanner)
    banner.classList.add('hidden')
}


close.addEventListener('click', closeBanner)


/*
let solutions = document.getElementById('solutions')
let nav_solutions = document.getElementById('nav-solutions')


function closeSolutionsNav() {
    close.removeEventListener('click', closeSolutionsNav)
    nav_solutions.classList.add('hidden')
}


close.addEventListener('click', closeSolutionsNav)*/

