const tabs = document.querySelectorAll('.number-indicators button');
const techName = document.getElementById('tech-name');
const techDescription = document.getElementById('tech-description');
const techImage = document.getElementById('tech-image');

let currentTechIndex = 0;
let technologyData = [];

const updateTechImage = (tech) => {
  if (!tech) return;
  
  if (window.innerWidth >= 992) {
    techImage.src = tech.images.portrait;
  } else {
    techImage.src = tech.images.landscape;
  }
  techImage.alt = tech.name;
};

fetch('./starter-code/data.json')
  .then(response => response.json())
  .then(data => {
    technologyData = data.technology;
    updateTechImage(technologyData[currentTechIndex]);

    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        tabs.forEach(t => {
          t.setAttribute('aria-selected', 'false');
          t.classList.remove('active');
        });
        
        tab.setAttribute('aria-selected', 'true');
        tab.classList.add('active');

        currentTechIndex = parseInt(tab.getAttribute('data-index'));
        const tech = technologyData[currentTechIndex];

        techName.textContent = tech.name;
        techDescription.textContent = tech.description;
        updateTechImage(tech);
      });
    });

    window.addEventListener('resize', () => {
      updateTechImage(technologyData[currentTechIndex]);
    });
  })
  .catch(error => console.error('Error al cargar el JSON:', error));
