const services = [
  {
    name: 'Photography',
    description:
      'Capturing stunning images that tell a story and evoke emotions. From portraits to landscapes, we create visual narratives that resonate with viewers.',
    icon: 'ri-camera-lens-line',
    details: [
      {
        img: './assets/img/Boni Beauty Bar.jpg',
        text: 'Commercial photography',
      },
      { img: './assets/img/modeling.jpg', text: 'Modeling photography' },
      { img: 'path/to/product-photography.jpg', text: 'Product photography' },
      { img: './assets/img/wedding.jpg', text: 'Wedding photography' },
      {
        img: 'path/to/landscape-photography.jpg',
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
        img: 'path/to/commercial-videography.jpg',
        text: 'Commercial videography',
      },
      { img: 'path/to/modeling-videography.jpg', text: 'Modeling videography' },
      { img: 'path/to/product-videography.jpg', text: 'Product videography' },
      { img: 'path/to/wedding-videography.jpg', text: 'Wedding videography' },
      {
        img: 'path/to/landscape-videography.jpg',
        text: 'Landscape videography',
      },
      { img: 'path/to/portrait-videography.jpg', text: 'Portrait videography' },
      { img: 'path/to/music-clip.jpg', text: 'Music clip' },
      { img: 'path/to/documentaries.jpg', text: 'Documentaries' },
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
      <img class="service__image" src="${detail.img}" alt="${detail.text}">
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

function hideSlider() {
  const slider = document.getElementById('services-slider');
  slider.classList.remove('active');
}

document.addEventListener('DOMContentLoaded', renderServices);
