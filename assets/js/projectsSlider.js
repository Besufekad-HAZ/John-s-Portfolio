const projects = [
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
    img: 'assets/img/Cultural.jpg',
    name: 'Ethiopian Cultural Festival',
    skills: [
      'assets/img/skills-photoshop.svg',
      'assets/img/adobe-photoshop-lightroom-cc-icon.svg',
    ],
    link: 'https://youtu.be/9uz_FPiJnhU',
  },
  {
    img: 'assets/img/Boni Beauty Bar.jpg',
    name: 'Boni Beauty Bar Advertising Video',
    skills: [
      'assets/img/davinci-resolve-12.svg',
      'assets/img/premiere-pro-cc.svg',
    ],
    link: 'https://youtu.be/Of-GrgXueUs?si=yozSNEYcZ3x3uxjh',
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
