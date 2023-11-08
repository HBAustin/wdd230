const baseURL = "https://hbaustin.github.io/wdd230/"; 
const linksURL = "https://hbaustin.github.io/wdd230/data/links.json"; 


async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    displayLinks(data);
  }
  

getLinks();

function displayLinks(weeks) {
  const linksContainer = document.querySelector('.links-container'); 
  weeks.forEach((week) => {
    const weekElement = document.createElement('div');
    weekElement.classList.add('week'); 
    weekElement.innerHTML = `<h3>Week ${week.lesson}:</h3>`;
    
    week.links.forEach((link) => {
      const linkElement = document.createElement('a');
      linkElement.href = `${baseURL}${link.url}`;
      linkElement.target = '_blank';
      linkElement.textContent = link.title;
      weekElement.appendChild(linkElement);
    });

    linksContainer.appendChild(weekElement);
  });
}