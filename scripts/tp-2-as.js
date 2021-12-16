/*
let modal = document.getElementById('conf_modal')
let cancel = document.getElementById('modal-cancel')
let desac = document.getElementById('modal-desac')


function closeModal() {
    cancel.removeEventListener('click', closeModal)
    desac.removeEventListener('click', closeModal)
    modal.classList.fadeOut(500)
}


cancel.addEventListener('click', closeModal)
desac.addEventListener('click', closeModal)



let banner = document.getElementById('banner')
let close = document.getElementById('banner-close')

*/
function closeBanner() {
    close.removeEventListener('click', closeBanner)
    banner.classList.fadeOut(500)
}


close.addEventListener('click', closeBanner)

