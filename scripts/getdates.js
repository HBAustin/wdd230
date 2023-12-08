const currentYear = new Date().getFullYear();
document.querySelector.innerHTML = `&copy; ${currentYear}`;
const lastModifiedDate = new Date(document.lastModified);
document.querySelector('footer p:nth-child(2)').innerHTML = `Last Modified: ${lastModifiedDate.toLocaleString()}`;