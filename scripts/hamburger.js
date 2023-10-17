const mainnav = document.querySelector(".navbar");
const hamburgerButton = document.querySelector('#menu');

hamburgerButton.addEventListener('click', () => {
    mainnav.classList.toggle('show');
    hamburgerButton.classList.toggle('show');
});