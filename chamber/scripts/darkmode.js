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

    // Apply rotation to the button based on the dark mode state
    var darkModeButton = document.querySelector('.gg-dark-mode');
    darkModeButton.style.transform = isDarkMode ? 'rotate(180deg)' : 'rotate(0)';
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

    // Set initial rotation based on preferred dark mode setting
    var darkModeButton = document.querySelector('.gg-dark-mode');
    darkModeButton.style.transform = isDarkModePreferred ? 'rotate(180deg)' : 'rotate(0)';
}

document.addEventListener("DOMContentLoaded", applyDarkModeStyles);
