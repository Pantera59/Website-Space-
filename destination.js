const tabs = document.querySelectorAll('.tab-list button');
const destName = document.getElementById('dest-name');
const destDescription = document.getElementById('dest-description');
const destDistance = document.getElementById('dest-distance');
const destTravel = document.getElementById('dest-travel');
const destImage = document.getElementById('dest-image');
const destSource = document.getElementById('dest-source');

fetch('./starter-code/data.json')
  .then(response => response.json())
  .then(data => {
    const destinations = data.destinations;

    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        
        tabs.forEach(t => t.setAttribute('aria-selected', 'false'));
        
        tab.setAttribute('aria-selected', 'true');

        const index = tab.getAttribute('data-index');
        const currentDestination = destinations[index];

        destName.textContent = currentDestination.name;
        destDescription.textContent = currentDestination.description;
        destDistance.textContent = currentDestination.distance;
        destTravel.textContent = currentDestination.travel;

        destImage.src = currentDestination.images.png;
        destImage.alt = currentDestination.name;
        destSource.srcset = currentDestination.images.webp;
      });
    });
  })
  .catch(error => console.error('Error al cargar el JSON:', error));
