document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll("img[data-src]");

    images.forEach(img => {
        img.src = img.getAttribute("data-src");
        img.removeAttribute("data-src");
        img.onload = () => img.style.opacity = 1;
    });
})