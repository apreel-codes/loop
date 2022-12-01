const hamburger = document.querySelector('.ham-mobile');
const close = document.querySelector('.close');
const modal = document.querySelector('.modal-mobile');

const showModal = () => {
    modal.classList.toggle('modal-hidden');
}

hamburger.addEventListener('click', showModal);

close.addEventListener('click', showModal);