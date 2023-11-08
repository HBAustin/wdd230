// Define baseURL and linksURL
const baseURL = 'https://hbaustin.github.io/wdd230/';
const linksURL = baseURL + 'data/links.json';

// Fetch and display links data
async function getLinks() {
  try {
    const response = await fetch(linksURL);
    const data = await response.json();
    displayLinks(data);
  } catch (error) {
    console.error('Error fetching links:', error);
  }
}

// Function to display links
function displayLinks(weeks) {
  const linksContainer = document.getElementById('links-container'); 

  weeks.forEach((week) => {
    const weekHeader = document.createElement('h2');
    weekHeader.textContent = `Week ${week.week}`;

    const linksList = document.createElement('ul');

    week.links.forEach((link) => {
      const listItem = document.createElement('li');
      const linkItem = document.createElement('a');
      linkItem.textContent = link.title;
      linkItem.href = link.url;
      linkItem.target = '_blank'; 
      listItem.appendChild(linkItem);
      linksList.appendChild(listItem);
    });

    linksContainer.appendChild(weekHeader);
    linksContainer.appendChild(linksList);
  });
}

getLinks();
