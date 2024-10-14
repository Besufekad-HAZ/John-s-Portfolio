const services = [
  {
    name: 'Photography',
    description:
      'Capturing stunning images that tell a story and evoke emotions. From portraits to landscapes, we create visual narratives that resonate with viewers.',
    icon: 'ri-camera-lens-line',
    details: [
      {
        img: './assets/img/commercial.jpg',
        text: 'Commercial photography',
      },
      { img: './assets/img/modeling.jpg', text: 'Modeling photography' },
      { img: './assets/img/product.jpg', text: 'Product photography' },
      { img: './assets/img/wedding.jpg', text: 'Wedding photography' },
      {
        img: './assets/img/landscape.jpg',
        text: 'Landscape photography',
      },
      { img: './assets/img/Portrait.jpg', text: 'Portrait photography' },
    ],
  },
  {
    name: 'Videography',
    description:
      'Capturing moments that tell a story and evoke emotions. From portraits to landscapes, we create visual narratives that resonate with viewers.',
    icon: 'ri-video-on-fill',
    details: [
      {
        img: './assets/img/wanchi-run.png',
        text: 'Commercial videography',
        videoUrl: 'https://www.youtube.com/watch?v=VsYujRvZdC0', // YouTube URL
      },
      {
        img: 'path/to/modeling-videography.jpg',
        text: 'Modeling videography',
        videoUrl: 'https://www.youtube.com/watch?v=example2',
      },
      {
        img: './assets/img/product.png',
        text: 'Product videography',
        videoUrl: 'https://www.youtube.com/watch?v=DEKxhJyaDu0',
      },
      {
        img: './assets/img/wedding.jpg',
        text: 'Wedding videography',
        videoUrl: 'https://www.youtube.com/watch?v=example4',
      },
      {
        img: 'path/to/landscape-videography.jpg',
        text: 'Landscape videography',
        videoUrl: 'https://www.youtube.com/watch?v=example5',
      },
      {
        img: 'path/to/portrait-videography.jpg',
        text: 'Portrait videography',
        videoUrl: 'https://www.youtube.com/watch?v=example6',
      },
      {
        img: './assets/img/music-clip.png',
        text: 'Music clip',
        videoUrl: 'https://youtu.be/21wsq7adbzA?si=yzUVh4HC7nC1gSPe',
      },
      {
        img: 'path/to/documentaries.jpg',
        text: 'Documentaries',
        videoUrl: 'https://www.youtube.com/watch?v=example8',
      },
    ],
  },
  {
    name: 'Graphic Design',
    description:
      'Transform your ideas into stunning visuals with our expert graphic design services. From logos to brochures, we bring your vision to life.',
    icon: 'ri-pen-nib-fill',
    details: [
      { img: 'path/to/brand-identity.jpg', text: 'Brand identity' },
      { img: 'path/to/logo-design.jpg', text: 'Logo design' },
      { img: 'path/to/light-box.jpg', text: 'Light box' },
    ],
  },
  {
    name: 'Drone Service',
    description:
      'Leveraging cutting-edge drone technology to capture breathtaking aerial footage and photography. Our drone services provide unique perspectives and high-quality visuals for commercial, modeling, and product videography.',
    icon: 'ri-focus-3-fill',
    details: [
      {
        img: './assets/img/Sebeta-drone.png',
        text: 'Sebeta Drone',
        videoUrl: 'https://youtu.be/ynKFqb0S4zY', // YouTube URL
      },
      {
        img: './assets/img/wanchi.png',
        text: 'Wanchi Grand Bike 2024',
        videoUrl: 'https://www.youtube.com/watch?v=-QHF2cX7ZkA',
      },
    ],
  },
];

function renderServices() {
  const container = document.getElementById('services-container');
  services.forEach((service) => {
    const card = document.createElement('article');
    card.className = 'services__card';
    card.onclick = () =>
      showSlider(service.name.toLowerCase().replace(' ', '-'));
    card.innerHTML = `
      <div class="services__icon">
        <div class="services__circle"></div>
        <i class="${service.icon}"></i>
      </div>
      <h3 class="services__name">${service.name}</h3>
      <p class="services__description">${service.description}</p>
    `;
    container.appendChild(card);
  });
}

function showSlider(serviceName) {
  const slider = document.getElementById('services-slider');
  const wrapper = document.getElementById('swiper-wrapper');
  wrapper.innerHTML = '';

  const service = services.find(
    (s) => s.name.toLowerCase().replace(' ', '-') === serviceName
  );
  service.details.forEach((detail) => {
    const slide = document.createElement('div');
    slide.className = 'swiper-slide';
    slide.innerHTML = `
      <div class="service__image-container">
        <img class="service__image" src="${detail.img}" alt="${
      detail.text
    }" data-video-url="${detail.videoUrl || ''}">
        ${
          detail.videoUrl
            ? '<div class="service__overlay" onclick="window.open(\'' +
              detail.videoUrl +
              '\', \'_blank\')"><i class="ri-youtube-fill"></i> Watch on YouTube</div>'
            : ''
        }
      </div>
      <p>${detail.text}</p>
    `;
    wrapper.appendChild(slide);
  });

  slider.classList.add('active');
  const swiper = new Swiper('.swiper-container', {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    on: {
      slideChange: function () {
        const slides = document.querySelectorAll('.swiper-slide');
        slides.forEach((slide, index) => {
          if (index === swiper.activeIndex) {
            slide.classList.remove('blur');
          } else {
            slide.classList.add('blur');
          }
        });
      },
    },
  });

  // Initial blur setup
  const slides = document.querySelectorAll('.swiper-slide');
  slides.forEach((slide, index) => {
    if (index !== swiper.activeIndex) {
      slide.classList.add('blur');
    }
  });
}

document.addEventListener('DOMContentLoaded', renderServices);

document.addEventListener('click', function (event) {
  if (event.target.classList.contains('service__image')) {
    const videoUrl = event.target.getAttribute('data-video-url');
    if (videoUrl) {
      window.open(videoUrl, '_blank');
    }
  }
});

function hideSlider() {
  const slider = document.getElementById('services-slider');
  slider.classList.remove('active');
}

document.addEventListener('DOMContentLoaded', renderServices);

document.addEventListener('click', function (event) {
  if (event.target.classList.contains('service__image')) {
    const videoUrl = event.target.getAttribute('data-video-url');
    if (videoUrl) {
      window.open(videoUrl, '_blank');
    }
  }
});
