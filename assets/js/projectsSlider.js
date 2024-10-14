const projects = [
  {
    img: 'assets/img/Adwa.jpg',
    name: 'Adwa Museum',
    skills: [
      'assets/img/skills-photoshop.svg',
      'assets/img/davinci-resolve-12.svg',
      'assets/img/premiere-pro-cc.svg',
    ],
    link: 'https://youtu.be/fI8oxGS1BHI',
  },
  {
    img: 'assets/img/Cultureday.jpg',
    name: 'Ethiopian culture day at Dream Success Academy',
    skills: [
      'assets/img/skills-photoshop.svg',
      'assets/img/adobe-illustrator-cc-3.svg',
      'assets/img/premiere-pro-cc.svg',
    ],
    link: 'https://youtu.be/FmpPMNF8K9Y?si=KM5mFJA2oMmZweFy',
  },
  {
    img: 'assets/img/Prom Night.jpg',
    name: 'Prom night with Dream Success Academy (Ataraxia Batch) 2K24',
    skills: [
      'assets/img/skills-photoshop.svg',
      'assets/img/adobe-illustrator-cc-3.svg',
      'assets/img/premiere-pro-cc.svg',
      'assets/img/davinci-resolve-12.svg',
    ],
    link: 'https://youtu.be/S1dk1Ttm8M8?si=r6gRBZPvJu086vg8',
  },
  {
    img: 'assets/img/horse.jpg',
    name: 'Sandafa Horse Gugs game 2024',
    skills: [
      'assets/img/skills-photoshop.svg',
      'assets/img/adobe-photoshop-lightroom-cc-icon.svg',
    ],
    link: 'https://www.youtube.com/watch?v=0Zw2c-9t4eY',
  },
  {
    img: 'assets/img/bag-show.png',
    name: 'The Bag Show 2024',
    skills: [
      'assets/img/davinci-resolve-12.svg',
      'assets/img/premiere-pro-cc.svg',
    ],
    link: 'https://youtu.be/zgD-uve_reM',
  },
  {
    img: 'assets/img/bgs.jpg',
    name: 'BGS Poultry Farm Advertising video',
    skills: [
      'assets/img/skills-photoshop.svg',
      'assets/img/davinci-resolve-12.svg',
      'assets/img/premiere-pro-cc.svg',
    ],
    link: 'https://youtu.be/89nax7HlsNo?si=FYTi69jXUoOzWF6F',
  },
];

function renderProjects() {
  const container = document.getElementById('projects-container');
  projects.forEach((project) => {
    const projectCard = document.createElement('article');
    projectCard.className = 'projects__card';
    projectCard.innerHTML = `
        <a href="${project.link}" target="_blank" class="projects__image">
          <img src="${project.img}" alt="image" class="projects__img" />
        </a>
        <div class="projects__data">
          <h3 class="projects__name">${project.name}</h3>
          <div class="projects__skills">
            ${project.skills
              .map(
                (skill) =>
                  `<img src="${skill}" alt="image" class="projects__skill" />`
              )
              .join('')}
          </div>
          <a href="${project.link}" target="_blank" class="projects__button">
            <i class="ri-links-fill"></i>
            <span>Visit Project</span>
          </a>
        </div>
      `;
    container.appendChild(projectCard);
  });
}

document.addEventListener('DOMContentLoaded', renderProjects);
