function toggleDarkMode() {
    var body = document.body;
    body.classList.toggle("dark-mode");

    var darkElements = document.querySelectorAll("dark-element");
    darkElements.forEach(function(element) {
        element.classList.toggle("dark-mode");
    })
}