const baseURL = 'https://hbaustin.github.io/wdd230/';
const linksURL = baseURL + 'data/links.json';

async function getLinks() {
  try {
    const response = await fetch(linksURL);
    const data = await response.json();
    displayLinks(data.lessons);
  } catch (error) {
    console.error('Error fetching links:', error);
  }
}

function displayLinks(lessons) {
    const linksContainer = document.getElementById('links-container');
  
    let lessonHeading = "";
  
    lessons.forEach((lesson) => {
      const lessonDiv = document.createElement('div');
      lessonDiv.style.marginBottom = '10px';
  
      if (lesson.lesson !== lessonHeading) {
        lessonHeading = lesson.lesson;
  
        const lessonText = document.createElement('span');
        lessonText.textContent = `Lesson ${lesson.lesson}: `;
        lessonDiv.appendChild(lessonText);
      }
  
      lesson.links.forEach((link, index) => {
        const linkItem = document.createElement('a');
        linkItem.textContent = link.title;
        linkItem.href = link.url;
        linkItem.target = '_blank';
        linkItem.style.color = 'purple';
  
        lessonDiv.appendChild(linkItem);
  
        if (index !== lesson.links.length - 1) {
          const separator = document.createElement('span');
          separator.textContent = ' | ';
          lessonDiv.appendChild(separator);
        }
      });
  
      linksContainer.appendChild(lessonDiv);
    });
}

getLinks();
