const tabs = document.querySelectorAll('[role="tab"]');
const crewRole = document.getElementById('crew-role');
const crewName = document.getElementById('crew-name');
const crewBio  = document.getElementById('crew-bio');
const crewImg  = document.getElementById('crew-image');
const crewSource = document.querySelector('picture source');

fetch('./starter-code/data.json')
  .then(response => response.json())
  .then(data => {
    const crewData = data.crew;

    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        tabs.forEach(t => t.setAttribute('aria-selected', 'false'));
        
        tab.setAttribute('aria-selected', 'true');

        const index = parseInt(tab.dataset.index);
        const member = crewData[index];

        crewRole.textContent = member.role;
        crewName.textContent = member.name;
        crewBio.textContent  = member.bio;
        crewImg.src       = member.images.png;
        crewImg.alt       = member.name;
        crewSource.srcset = member.images.webp;
      });
    });
  })
  .catch(error => console.error('Error al cargar el JSON:', error));
