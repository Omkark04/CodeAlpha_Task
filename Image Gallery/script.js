const galleryImages = document.querySelectorAll('.gallery img');

// Create lightbox elements
const lightbox = document.createElement('div');
lightbox.id = 'lightbox';
lightbox.style.display = 'none';
lightbox.innerHTML = `
  <div class="lightbox-content">
    <span class="close">&times;</span>
    <img src="" alt="Gallery Image" class="lightbox-img">
    <div class="lightbox-nav">
      <button class="prev">&#10094;</button>
      <button class="next">&#10095;</button>
    </div>
  </div>
`;
document.body.appendChild(lightbox);

const lightboxImg = lightbox.querySelector('.lightbox-img');
const closeBtn = lightbox.querySelector('.close');
const prevBtn = lightbox.querySelector('.prev');
const nextBtn = lightbox.querySelector('.next');

let currentIndex = 0;

function showLightbox(index) {
  currentIndex = index;
  lightboxImg.src = galleryImages[currentIndex].src;
  lightbox.style.display = 'flex';
}

galleryImages.forEach((img, idx) => {
  img.addEventListener('click', () => showLightbox(idx));
});

closeBtn.addEventListener('click', () => {
  lightbox.style.display = 'none';
});

prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
  lightboxImg.src = galleryImages[currentIndex].src;
});

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % galleryImages.length;
  lightboxImg.src = galleryImages[currentIndex].src;
});

// Optional: Close lightbox when clicking outside the image
lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) lightbox.style.display = 'none';
});