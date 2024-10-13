const seeMoreBtn = document.getElementById('see-more-btn');
const infoDescription = document.getElementById('info-description');

seeMoreBtn.addEventListener('click', () => {
  infoDescription.classList.toggle('expanded');
  seeMoreBtn.textContent = infoDescription.classList.contains('expanded')
    ? 'See Less'
    : 'See More';
});
