// List of images in the 'impact squad' folder
const imageList = [
  "PXL_20250528_140645062.jpg",
  "PXL_20250528_140648212.MP.jpg",
  "PXL_20250604_082808638.MP.jpg",
  "PXL_20250604_082820931.jpg",
  "PXL_20250604_135543590.jpg",
  "PXL_20250604_135557961.jpg",
  "PXL_20250604_135559569.MP.jpg",
  "PXL_20250604_135604359.jpg",
  "PXL_20250604_135605298.jpg",
  "PXL_20250604_135636780.jpg",
  "PXL_20250604_135641096.jpg",
  "PXL_20250604_135912557.jpg",
  "PXL_20250620_095642978.MP.jpg",
  "PXL_20250620_095645208.MP.jpg",
  "PXL_20250620_095646199.jpg",
  "PXL_20250620_102822149.jpg",
  "PXL_20250620_102823444.jpg",
  "PXL_20250620_102826461.jpg",
  "PXL_20250620_102836926.jpg",
  "PXL_20250620_103045408.jpg",
  "PXL_20250620_103054537.PORTRAIT.ORIGINAL.jpg",
  "PXL_20250620_103343971.MP.jpg",
  "PXL_20250620_103428780.jpg",
  "PXL_20250620_103527719.jpg",
  "PXL_20250620_103530118.jpg",
  "PXL_20250620_103603153.jpg",
  "PXL_20250620_103606286.jpg",
  "PXL_20250620_103615243.jpg",
  "PXL_20250620_103740382.jpg",
  "PXL_20250620_104200155.MP.jpg",
  "PXL_20250620_104201703.jpg",
  "PXL_20250620_104203426.jpg",
  "PXL_20250620_104205691.jpg",
  "PXL_20250620_104805469.jpg",
  "PXL_20250620_104806224.jpg",
  "PXL_20250620_105141292.jpg",
  "PXL_20250620_105143780.jpg",
  "PXL_20250620_105144916.jpg",
  "PXL_20250620_105205025.jpg",
  "PXL_20250620_105208112.MP.jpg",
  "PXL_20250620_105209534.jpg",
  "PXL_20250620_105210696.jpg",
  "PXL_20250624_145739408.MP.jpg",
  "PXL_20250624_145745829.MP.jpg",
  "PXL_20250624_145756450.jpg",
  "PXL_20250624_145824480.MP.jpg",
  "PXL_20250624_145832391.jpg",
  "PXL_20250624_145841286.jpg",
  "PXL_20250624_145848293.jpg",
  "PXL_20250624_145851453.jpg",
  "PXL_20250624_145853758.jpg",
  "PXL_20250624_151446581.jpg",
  "PXL_20250624_151453117.jpg",
  "PXL_20250624_151456439.MP.jpg",
  "PXL_20250624_151457531.jpg",
  "PXL_20250624_151530828.jpg",
  "PXL_20250624_151547789.MP.jpg",
  "PXL_20250624_151558964.jpg",
  "PXL_20250707_111612460.jpg",
  "PXL_20250707_111626769.jpg",
  "PXL_20250707_111653337.NIGHT.jpg",
  "PXL_20250707_111813698.MP.jpg",
  "PXL_20250707_111904404.jpg",
  "PXL_20250707_111906630.MP.jpg",
  "PXL_20250714_110251900.MP.jpg",
  "PXL_20250714_110253462.MP.jpg",
  "PXL_20250714_110319778.jpg",
  "PXL_20250714_110330946.jpg",
  "PXL_20250714_110400870.MP.jpg",
  "PXL_20250714_110422482.jpg",
  "PXL_20250714_110434791.MP.jpg",
  "PXL_20250714_110449909.jpg",
  "PXL_20250714_111609729.PORTRAIT.jpg",
  "PXL_20250714_111611265.PORTRAIT.jpg",
  "WhatsApp Image 2025-05-26 at 15.13.22_3582e864.jpg",
  "WhatsApp Image 2025-05-26 at 15.13.23_0e8a2905.jpg",
  "WhatsApp Image 2025-05-26 at 15.13.23_d02996bc.jpg",
  "WhatsApp Image 2025-05-26 at 15.13.25_a8e51e41.jpg",
  "WhatsApp Image 2025-05-26 at 15.13.27_2d05831e.jpg",
  "WhatsApp Image 2025-05-26 at 15.13.27_b597a278.jpg",
  "WhatsApp Image 2025-05-26 at 15.13.27_c0bb99f1.jpg",
  "WhatsApp Image 2025-05-26 at 15.13.30_08fd670d.jpg"
];

const galleryGrid = document.getElementById('gallery-grid');
const basePath = '../tegra-website/assets/images/impact squad/';

// Carousel images (excluded from queue/grid)
const carouselImages = [
  "WhatsApp Image 2025-05-26 at 15.13.25_a8e51e41.jpg",
  "WhatsApp Image 2025-05-26 at 15.13.27_2d05831e.jpg",
  "PXL_20250620_105141292.jpg",
  "PXL_20250714_110251900.MP.jpg"
];

// Filter out carousel images for queue/grid
const queueImages = imageList.filter(img => !carouselImages.includes(img));

// --- Horizontal Queue Logic with Glider.js ---
const queue = document.getElementById('horizontal-queue');
const queueWrapper = document.getElementById('horizontal-queue-wrapper');
const queuePrev = document.getElementById('queue-prev');
const queueNext = document.getElementById('queue-next');

// Render queue images as Glider slides
queue.innerHTML = '';
queueImages.forEach((img, i) => {
  const imgDiv = document.createElement('div');
  imgDiv.className = 'queue-img-wrap mx-2';
  imgDiv.innerHTML = `<img src="${basePath + img}" alt="Queue ${i+1}" class="queue-img" loading="lazy">`;
  imgDiv.onclick = () => {
    GLightbox({
      elements: [{ href: basePath + img, type: 'image' }],
      openEffect: 'zoom',
      closeEffect: 'fade',
      width: '90vw',
      height: '80vh',
    }).open();
  };
  queue.appendChild(imgDiv);
});

// Initialize Glider.js for smooth, responsive, touch-friendly slider
window.addEventListener('DOMContentLoaded', function() {
  const glider = new Glider(queue, {
    slidesToShow: 2,
    slidesToScroll: 1,
    draggable: true,
    scrollLock: true,
    dots: null,
    arrows: {
      prev: queuePrev,
      next: queueNext
    },
    responsive: [
      { breakpoint: 900, settings: { slidesToShow: 4 } },
      { breakpoint: 1200, settings: { slidesToShow: 6 } }
    ]
  });

  // Auto-scroll logic
  let autoScroll = setInterval(() => {
    glider.scrollItem(glider.slide + 1);
  }, 3000);

  function pauseAutoScroll() {
    clearInterval(autoScroll);
    autoScroll = null;
    setTimeout(() => {
      if (!autoScroll) {
        autoScroll = setInterval(() => {
          glider.scrollItem(glider.slide + 1);
        }, 3000);
      }
    }, 5000);
  }

  // Pause auto-scroll on user interaction
  [queuePrev, queueNext, queue].forEach(el => {
    if (el) {
      el.addEventListener('mousedown', pauseAutoScroll);
      el.addEventListener('touchstart', pauseAutoScroll);
      el.addEventListener('wheel', pauseAutoScroll);
    }
  });
});

// // --- Main Gallery Grid: Exclude carousel images ---
// galleryGrid.innerHTML = '';
// imageList.forEach((img, i) => {
//   if (carouselImages.includes(img)) return;
//   const col = document.createElement('div');
//   col.className = 'col-6 col-sm-4 col-md-3 col-lg-2 mb-4';
//   col.innerHTML = `
//     <a href="${basePath + img}" class="glightbox" data-gallery="impact-squad" data-title="${img}">
//       <div class="gallery-img-wrap" style="animation-delay:${i * 60}ms">
//         <img src="${basePath + img}" alt="Impact Squad ${i+1}" class="img-fluid gallery-img">
//       </div>
//     </a>
//   `;
//   galleryGrid.appendChild(col);
// });

// Animate grid images on load
window.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.gallery-img-wrap').forEach((el, i) => {
    setTimeout(() => {
      el.classList.add('show');
    }, i * 60);
  });
  GLightbox({ selector: '.glightbox', touchNavigation: true, loop: true, zoomable: true });
});

// Parallax/tilt effect on hover
function addTiltEffect() {
  document.querySelectorAll('.gallery-img-wrap').forEach(el => {
    el.addEventListener('mousemove', e => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const xc = rect.width/2;
      const yc = rect.height/2;
      const dx = (x-xc)/xc;
      const dy = (y-yc)/yc;
      el.style.transform = `rotateY(${dx*8}deg) rotateX(${-dy*8}deg) scale(1.04)`;
    });
    el.addEventListener('mouseleave', () => {
      el.style.transform = '';
    });
  });
}
addTiltEffect();

// --- Parallax effect for carousel images ---
function addCarouselParallax() {
  const carousel = document.getElementById('impactCarousel');
  if (!carousel) return;
  carousel.addEventListener('mousemove', e => {
    document.querySelectorAll('.carousel-parallax').forEach(box => {
      const rect = box.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      box.style.transform = `translateY(${y*18}px) translateX(${x*18}px) scale(1.03)`;
    });
  });
  carousel.addEventListener('mouseleave', () => {
    document.querySelectorAll('.carousel-parallax').forEach(box => {
      box.style.transform = '';
    });
  });
}
addCarouselParallax();

// --- Motion Image Section ---
const motionContainer = document.querySelector('.motion-image-container');
const motionScroll = document.querySelector('.motion-image-scroll');
const motionImg = document.querySelector('.motion-image');
const motionScrollbar = document.querySelector('.motion-scrollbar');
if (motionContainer && motionScroll && motionImg) {
  // Set up scrollable area
  motionScroll.style.height = '320px';
  motionScroll.style.overflowY = 'hidden';
  motionScrollbar.style.display = 'none';
  let isMotionHover = false;
  motionContainer.addEventListener('mouseenter', () => {
    motionScroll.style.overflowY = 'scroll';
    motionScrollbar.style.display = 'block';
    isMotionHover = true;
  });
  motionContainer.addEventListener('mouseleave', () => {
    motionScroll.style.overflowY = 'hidden';
    motionScrollbar.style.display = 'none';
    isMotionHover = false;
    motionScroll.scrollTop = 0;
    motionImg.style.objectPosition = 'center top';
  });
  motionScroll.addEventListener('scroll', () => {
    // Animate image position as if it's a video
    const maxScroll = motionScroll.scrollHeight - motionScroll.clientHeight;
    const percent = motionScroll.scrollTop / maxScroll;
    motionImg.style.objectPosition = `center ${percent*100}%`;
  });
}

// --- Motion Video Section ---
// No custom controls needed; let the video use its default browser controls. 

// --- Fade-in-on-scroll effect ---
function fadeInOnScroll() {
  const faders = document.querySelectorAll('.fade-in-section');
  const observer = new window.IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  faders.forEach(el => observer.observe(el));
}
window.addEventListener('DOMContentLoaded', fadeInOnScroll); 