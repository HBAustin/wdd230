function toggleDarkMode() {
    var body = document.body;
    var isDarkMode = body.classList.toggle("dark-mode");

    localStorage.setItem("darkMode", isDarkMode);
    
    var darkElements = document.querySelectorAll(".dark-element");
    darkElements.forEach(function(element) {
        element.classList.toggle("dark-mode");
    });
}

var isDarkModePreferred = localStorage.getItem("darkMode") === "true";

var body = document.body;
body.classList.toggle("dark-mode", isDarkModePreferred);

var darkElements = document.querySelectorAll(".dark-element");
darkElements.forEach(function(element) {
    element.classList.toggle("dark-mode", isDarkModePreferred);
});

function applyDarkModeStyles() {
    var isDarkModePreferred = localStorage.getItem("darkMode") === "true";

    var body = document.body;
    body.classList.toggle("dark-mode", isDarkModePreferred);

    var darkElements = document.querySelectorAll(".dark-element");
    darkElements.forEach(function(element) {
        element.classList.toggle("dark-mode", isDarkModePreferred);
    });

    body.style.display = "block";
}

document.addEventListener("DOMContentLoaded", applyDarkModeStyles);
