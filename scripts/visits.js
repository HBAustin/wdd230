const visitCountElement = document.getElementById("visitCount");

if (localStorage.getItem("visitCount")) {
    let visitCount = parseInt(localStorage.getItem("visitCount"));
    visitCount++;
    visitCountElement.textContent = visitCount;
    localStorage.setItem("visitCount", visitCount);
} else {
    visitCountElement.textContent = "1";
    localStorage.setItem("visitCount", 1);
}