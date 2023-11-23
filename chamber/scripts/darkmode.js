var darkModeToggle = document.getElementById("darkModeToggle");
darkModeToggle.addEventListener("change", toggleDarkMode);

function toggleDarkMode() {
    var body = document.body;
    var isDarkMode = darkModeToggle.checked;

    body.classList.toggle("dark-mode", isDarkMode);
    localStorage.setItem("darkMode", isDarkMode);
    
    var darkElements = document.querySelectorAll(".dark-element");
    darkElements.forEach(function(element) {
        element.classList.toggle("dark-mode", isDarkMode);
    });
}

function applyDarkModeStyles() {
    var isDarkModePreferred = localStorage.getItem("darkMode") === "true";
    var body = document.body;
    
    darkModeToggle.checked = isDarkModePreferred;
    body.classList.toggle("dark-mode", isDarkModePreferred);

    var darkElements = document.querySelectorAll(".dark-element");
    darkElements.forEach(function(element) {
        element.classList.toggle("dark-mode", isDarkModePreferred);
    });

    body.style.display = "block";
}

document.addEventListener("DOMContentLoaded", applyDarkModeStyles);
