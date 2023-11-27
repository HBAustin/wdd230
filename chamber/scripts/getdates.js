document.addEventListener("DOMContentLoaded", function () {
    const currentDate = new Date();
    const currentMillis = currentDate.getTime();
    const lastVisitMillis = parseInt(localStorage.getItem("lastVisit"));

    const sidebarMessage = document.getElementById("sidebar-message");
    
    if (sidebarMessage) {
        if (!lastVisitMillis) {
            sidebarMessage.textContent = "Welcome! Let us know if you have any questions.";
        } else {
            const oneDayMillis = 24 * 60 * 60 * 1000;
            const daysSinceLastVisit = Math.floor((currentMillis - lastVisitMillis) / oneDayMillis);

            if (daysSinceLastVisit < 1) {
                sidebarMessage.textContent = "Back so soon! Awesome!";
            } else {
                const message = `You last visited ${daysSinceLastVisit} ${daysSinceLastVisit === 1 ? 'day' : 'days'} ago.`;
                sidebarMessage.textContent = message;
            }
        }

        localStorage.setItem("lastVisit", currentMillis.toString());
    } else {
        console.error("Element with ID 'sidebar-message' not found.");
    }
});
