const mainnav = document.querySelector('.nav');
const menuButton = document.querySelector('#menu');

menuButton.addEventListener('click', () => {
    mainnav.classList.toggle('show');
    menuButton.classList.toggle('show');
});
