const mainnav = document.querySelector('.navigation')
const hamburgerButton = document.querySelector ('#menu');

hamburgerButton.addEventListener('click', () => {
    mainnav.classList.toggle('show');
    hamburgerButton.classList.toggle('show')
})