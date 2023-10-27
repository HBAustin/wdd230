const currentYear = new Date().getFullYear();
document.querySelector.innerHTML = `&copy; ${currentYear}`;
const lastModifiedDate = new Date(document.lastModified);
document.querySelector('footer p:nth-child(2)').innerHTML = `Last Modified: ${lastModifiedDate.toLocaleString()}`;

document.addEventListener("DOMContentLoaded", function () {
    const currentDate = new Date();
    const currentMillis = currentDate.getTime();
    const lastVisitMillis = parseInt(localStorage.getItem("lastVisit"));

    if (!lastVisitMillis) {
        document.getElementById("sidebar-message").textContent = "Welcome! Let us know if you have any questions.";
    } else {
        const oneDayMillis = 24 * 60 * 60 * 1000;
        const daysSinceLastVisit = Math.floor((currentMillis - lastVisitMillis) / oneDayMillis);

        if (daysSinceLastVisit < 1) {
            document.getElementById("sidebar-message").textContent = "Back so soon! Awesome!";
        } else {
            const message = `You last visited ${daysSinceLastVisit} ${daysSinceLastVisit === 1 ? 'day' : 'days'} ago.`;
            document.getElementById("sidebar-message").textContent = message;
        }
    }

    localStorage.setItem("lastVisit", currentMillis.toString());
});