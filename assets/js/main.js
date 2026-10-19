/**
 * AMAN STUDIO - Photography Portfolio JavaScript
 * 2026 Luxury Interactive Experience
 */

document.addEventListener('DOMContentLoaded', () => {
  // Initialize all subsystems
  initAudioSynthesizer();
  initCustomCursor();
  initHeaderScroll();
  initMobileMenu();
  renderPortfolio();
  initCategoryFilters();
  initLightbox();
  initBeforeAfterSlider();
  renderCaseStudies();
  renderGearKit();
  renderServices();
  renderTestimonials();
  renderAwards();
  initHeroParallax();
  initBookingForm();
  initNewsletter();
});

/* ==========================================================================
   1. Authentic Mechanical Camera Shutter Audio Synthesizer (Web Audio API)
   ========================================================================== */
let audioCtx = null;
let soundEnabled = true;

function initAudioSynthesizer() {
  const audioToggleBtn = document.getElementById('audioToggleBtn');
  if (!audioToggleBtn) return;

  // Check saved preference
  const savedState = localStorage.getItem('aman_sfx_enabled');
  if (savedState !== null) {
    soundEnabled = savedState === 'true';
    updateAudioBtnUI();
  }

  audioToggleBtn.addEventListener('click', () => {
    soundEnabled = !soundEnabled;
    localStorage.setItem('aman_sfx_enabled', soundEnabled);
    updateAudioBtnUI();
    if (soundEnabled) {
      playShutterSound();
      showToast('Camera Shutter Audio Enabled');
    } else {
      showToast('Camera Shutter Audio Muted');
    }
  });

  // Attach shutter click to hero shutter button
  const heroShutterBtn = document.getElementById('heroShutterBtn');
  if (heroShutterBtn) {
    heroShutterBtn.addEventListener('click', () => {
      playShutterSound(true);
      showToast('Aperture Snapped: 1/250s f/1.4');
    });
  }
}

function updateAudioBtnUI() {
  const btn = document.getElementById('audioToggleBtn');
  const label = document.getElementById('audioToggleLabel');
  if (!btn || !label) return;

  if (soundEnabled) {
    btn.classList.add('playing');
    label.textContent = 'SFX: ON';
  } else {
    btn.classList.remove('playing');
    label.textContent = 'SFX: OFF';
  }
}

function playShutterSound(force = false) {
  if (!soundEnabled && !force) return;

  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;
    if (!audioCtx) {
      audioCtx = new AudioContext();
    }
    if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }

    const now = audioCtx.currentTime;

    // Helper: Generate mechanical shutter click transient
    const triggerMechanicalClick = (startTime, duration, freq, gainVal) => {
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      const filter = audioCtx.createBiquadFilter();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, startTime);
      osc.frequency.exponentialRampToValueAtTime(80, startTime + duration);

      filter.type = 'bandpass';
      filter.frequency.setValueAtTime(1400, startTime);
      filter.Q.setValueAtTime(3.0, startTime);

      gain.gain.setValueAtTime(gainVal, startTime);
      gain.gain.exponentialRampToValueAtTime(0.001, startTime + duration);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(audioCtx.destination);

      osc.start(startTime);
      osc.stop(startTime + duration);
    };

    // First click: mirror slap up
    triggerMechanicalClick(now, 0.04, 1800, 0.25);
    // Curtain travel & mirror slap down
    triggerMechanicalClick(now + 0.055, 0.05, 900, 0.35);
  } catch (err) {
    console.warn('Audio synthesis note:', err);
  }
}

/* ==========================================================================
   2. Interactive Custom Cursor (Magnetic Fluid Cursor)
   ========================================================================== */
function initCustomCursor() {
  const cursor = document.querySelector('.custom-cursor');
  const follower = document.querySelector('.cursor-follower');
  const cursorText = document.querySelector('.cursor-text');
  if (!cursor || !follower) return;

  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let cursorX = mouseX;
  let cursorY = mouseY;
  let followerX = mouseX;
  let followerY = mouseY;

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  const renderCursor = () => {
    cursorX += (mouseX - cursorX) * 0.7;
    cursorY += (mouseY - cursorY) * 0.7;
    followerX += (mouseX - followerX) * 0.18;
    followerY += (mouseY - followerY) * 0.18;

    cursor.style.transform = `translate3d(${cursorX}px, ${cursorY}px, 0) translate(-50%, -50%)`;
    follower.style.transform = `translate3d(${followerX}px, ${followerY}px, 0) translate(-50%, -50%)`;

    requestAnimationFrame(renderCursor);
  };
  requestAnimationFrame(renderCursor);

  // Hover triggers
  const setCursorState = (text = '') => {
    if (text) {
      document.body.classList.add('cursor-hover');
      if (cursorText) cursorText.textContent = text;
    } else {
      document.body.classList.remove('cursor-hover');
      if (cursorText) cursorText.textContent = '';
    }
  };

  document.querySelectorAll('a, button, .filter-btn').forEach((el) => {
    el.addEventListener('mouseenter', () => setCursorState('CLICK'));
    el.addEventListener('mouseleave', () => setCursorState(''));
  });

  document.addEventListener('mouseover', (e) => {
    const galleryItem = e.target.closest('.gallery-item');
    const sliderBox = e.target.closest('.slider-comparison-box');
    
    if (galleryItem) {
      setCursorState('VIEW');
    } else if (sliderBox) {
      setCursorState('DRAG');
    }
  });

  document.addEventListener('mouseout', (e) => {
    if (e.target.closest('.gallery-item') || e.target.closest('.slider-comparison-box')) {
      setCursorState('');
    }
  });
}

/* ==========================================================================
   3. Header & Navigation Controls
   ========================================================================== */
function initHeaderScroll() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  const onScroll = () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

function initMobileMenu() {
  const trigger = document.getElementById('mobileMenuTrigger');
  const drawer = document.getElementById('mobileDrawer');
  if (!trigger || !drawer) return;

  const toggle = () => {
    const isOpen = drawer.classList.contains('open');
    if (isOpen) {
      drawer.classList.remove('open');
      trigger.classList.remove('active');
      document.body.style.overflow = '';
    } else {
      drawer.classList.add('open');
      trigger.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  };

  trigger.addEventListener('click', toggle);

  drawer.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      toggle();
    });
  });
}

/* ==========================================================================
   4. Portfolio Gallery Rendering & Filtering
   ========================================================================== */
let currentCategory = 'all';

function renderPortfolio() {
  const grid = document.getElementById('galleryGrid');
  if (!grid || !AMAN_DATA.portfolio) return;

  const filtered = currentCategory === 'all'
    ? AMAN_DATA.portfolio
    : AMAN_DATA.portfolio.filter((item) => item.category === currentCategory);

  grid.innerHTML = filtered.map((item, index) => {
    return `
      <article class="gallery-item" data-id="${item.id}" data-category="${item.category}" style="animation: fadeInUp 0.5s ease backwards ${index * 0.05}s">
        <div class="gallery-img-box ${item.aspectRatio}">
          <img src="${item.thumbnail}" alt="${item.title} - ${item.subtitle}" loading="lazy">
          <div class="gallery-overlay">
            <div class="gallery-badge-row">
              <span class="gallery-category-pill">${item.categoryLabel}</span>
              <span class="gallery-location-pill">${item.location} • ${item.year}</span>
            </div>
            <h3 class="gallery-item-title">${item.title}</h3>
            <p class="gallery-item-subtitle">${item.subtitle}</p>
            <div class="gallery-exif-pill">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="3"/></svg>
              <span>${item.camera} • ${item.lens}</span>
            </div>
          </div>
        </div>
      </article>
    `;
  }).join('');

  // Attach click to open lightbox
  grid.querySelectorAll('.gallery-item').forEach((itemEl) => {
    itemEl.addEventListener('click', () => {
      const id = itemEl.getAttribute('data-id');
      openLightbox(id);
      playShutterSound();
    });
  });
}

function initCategoryFilters() {
  const buttons = document.querySelectorAll('.filter-btn');
  if (!buttons.length) return;

  // Calculate counts
  buttons.forEach((btn) => {
    const cat = btn.getAttribute('data-filter');
    const countSpan = btn.querySelector('.filter-count');
    if (countSpan) {
      if (cat === 'all') {
        countSpan.textContent = `(${AMAN_DATA.portfolio.length})`;
      } else {
        const count = AMAN_DATA.portfolio.filter((p) => p.category === cat).length;
        countSpan.textContent = `(${count})`;
      }
    }

    btn.addEventListener('click', () => {
      buttons.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      currentCategory = cat;
      renderPortfolio();
      playShutterSound();
    });
  });
}

/* ==========================================================================
   5. Fullscreen Lightbox Modal
   ========================================================================== */
let activeLightboxIndex = 0;
let currentFilteredList = [];

function initLightbox() {
  const modal = document.getElementById('lightboxModal');
  const closeBtn = document.getElementById('lightboxCloseBtn');
  const prevBtn = document.getElementById('lightboxPrevBtn');
  const nextBtn = document.getElementById('lightboxNextBtn');

  if (!modal) return;

  closeBtn?.addEventListener('click', closeLightbox);
  prevBtn?.addEventListener('click', () => navigateLightbox(-1));
  nextBtn?.addEventListener('click', () => navigateLightbox(1));

  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeLightbox();
  });

  window.addEventListener('keydown', (e) => {
    if (!modal.classList.contains('active')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') navigateLightbox(-1);
    if (e.key === 'ArrowRight') navigateLightbox(1);
  });
}

function openLightbox(itemId) {
  const modal = document.getElementById('lightboxModal');
  if (!modal) return;

  currentFilteredList = currentCategory === 'all'
    ? AMAN_DATA.portfolio
    : AMAN_DATA.portfolio.filter((i) => i.category === currentCategory);

  activeLightboxIndex = currentFilteredList.findIndex((i) => i.id === itemId);
  if (activeLightboxIndex === -1) activeLightboxIndex = 0;

  populateLightboxItem(currentFilteredList[activeLightboxIndex]);
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function populateLightboxItem(item) {
  if (!item) return;

  const img = document.getElementById('lightboxImg');
  const category = document.getElementById('lightboxCategory');
  const title = document.getElementById('lightboxTitle');
  const subtitle = document.getElementById('lightboxSubtitle');
  const desc = document.getElementById('lightboxDesc');
  const exifCamera = document.getElementById('lightboxExifCamera');
  const exifLens = document.getElementById('lightboxExifLens');
  const exifSettings = document.getElementById('lightboxExifSettings');
  const exifLocation = document.getElementById('lightboxExifLocation');
  const exifClient = document.getElementById('lightboxExifClient');

  if (img) {
    img.src = item.image;
    img.alt = item.title;
  }
  if (category) category.textContent = item.categoryLabel;
  if (title) title.textContent = item.title;
  if (subtitle) subtitle.textContent = item.subtitle;
  if (desc) desc.textContent = item.description;
  if (exifCamera) exifCamera.textContent = item.camera;
  if (exifLens) exifLens.textContent = item.lens;
  if (exifSettings) exifSettings.textContent = item.settings;
  if (exifLocation) exifLocation.textContent = `${item.location} (${item.year})`;
  if (exifClient) exifClient.textContent = item.client;
}

function navigateLightbox(direction) {
  if (!currentFilteredList.length) return;
  activeLightboxIndex = (activeLightboxIndex + direction + currentFilteredList.length) % currentFilteredList.length;
  populateLightboxItem(currentFilteredList[activeLightboxIndex]);
  playShutterSound();
}

function closeLightbox() {
  const modal = document.getElementById('lightboxModal');
  if (!modal) return;
  modal.classList.remove('active');
  document.body.style.overflow = '';
}

/* ==========================================================================
   6. Draggable Before / After Retouching Slider
   ========================================================================== */
function initBeforeAfterSlider() {
  const container = document.getElementById('beforeAfterContainer');
  const beforeLayer = document.getElementById('beforeLayer');
  const handleLine = document.getElementById('sliderHandle');
  if (!container || !beforeLayer || !handleLine) return;

  let isDragging = false;

  const setSliderPosition = (xPos) => {
    const rect = container.getBoundingClientRect();
    let offsetX = xPos - rect.left;
    if (offsetX < 0) offsetX = 0;
    if (offsetX > rect.width) offsetX = rect.width;

    const percentage = (offsetX / rect.width) * 100;
    beforeLayer.style.width = `${percentage}%`;
    handleLine.style.left = `${percentage}%`;
  };

  const onStart = (e) => {
    isDragging = true;
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    setSliderPosition(clientX);
  };

  const onMove = (e) => {
    if (!isDragging) return;
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    setSliderPosition(clientX);
  };

  const onEnd = () => {
    isDragging = false;
  };

  container.addEventListener('mousedown', onStart);
  window.addEventListener('mousemove', onMove);
  window.addEventListener('mouseup', onEnd);

  container.addEventListener('touchstart', onStart, { passive: true });
  window.addEventListener('touchmove', onMove, { passive: true });
  window.addEventListener('touchend', onEnd);
}

/* ==========================================================================
   7. Case Studies Rendering
   ========================================================================== */
function renderCaseStudies() {
  const container = document.getElementById('caseStudiesList');
  if (!container || !AMAN_DATA.caseStudies) return;

  container.innerHTML = AMAN_DATA.caseStudies.map((cs, idx) => {
    const isReversed = idx % 2 === 1 ? 'reversed' : '';
    return `
      <article class="case-study-card ${isReversed}">
        <div class="case-study-visual">
          <img src="${cs.coverImage}" alt="${cs.title}" loading="lazy">
        </div>
        <div class="case-study-content">
          <span class="section-eyebrow">Case Study 0${idx + 1}</span>
          <h3 class="section-heading" style="font-size: 2.2rem; margin-bottom: 0.5rem;">${cs.title}</h3>
          <p class="case-tagline">${cs.tagline}</p>
          <p class="case-synopsis">${cs.synopsis}</p>
          <div class="case-metrics-grid">
            ${cs.metrics.map((m) => `
              <div class="case-metric-box">
                <span class="case-metric-label">${m.label}</span>
                <span class="case-metric-val">${m.val}</span>
              </div>
            `).join('')}
          </div>
        </div>
      </article>
    `;
  }).join('');
}

/* ==========================================================================
   8. Camera Arsenal & Gear Kit Rendering
   ========================================================================== */
function renderGearKit() {
  const container = document.getElementById('gearKitGrid');
  if (!container || !AMAN_DATA.gearKit) return;

  container.innerHTML = AMAN_DATA.gearKit.map((col) => {
    return `
      <div class="gear-column">
        <h3 class="gear-col-title">${col.category}</h3>
        <div class="gear-list">
          ${col.items.map((item) => `
            <div class="gear-item-card">
              <div class="gear-item-head">
                <span class="gear-item-name">${item.name}</span>
                <span class="gear-item-badge">${item.badge}</span>
              </div>
              <p class="gear-item-specs">${item.specs}</p>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }).join('');
}

/* ==========================================================================
   9. Services & Investment Packages
   ========================================================================== */
function renderServices() {
  const container = document.getElementById('servicesGrid');
  if (!container || !AMAN_DATA.services) return;

  container.innerHTML = AMAN_DATA.services.map((srv) => {
    const featuredClass = srv.popular ? 'featured-package' : '';
    return `
      <div class="service-card ${featuredClass}">
        <span class="service-tier-badge">${srv.tier}</span>
        <h3 class="service-title">${srv.title}</h3>
        <div class="service-price-box">
          <div class="service-price">${srv.price}</div>
          <div class="service-turnaround">Turnaround: ${srv.turnaround}</div>
        </div>
        <ul class="service-deliverables">
          ${srv.deliverables.map((d) => `<li>${d}</li>`).join('')}
        </ul>
        <p class="service-ideal">${srv.idealFor}</p>
        <button class="btn-primary select-service-btn" data-title="${srv.title}" style="width: 100%;">
          Inquire This Package
        </button>
      </div>
    `;
  }).join('');

  container.querySelectorAll('.select-service-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const title = btn.getAttribute('data-title');
      const select = document.getElementById('shootType');
      if (select) {
        // Pre-select service
        for (let i = 0; i < select.options.length; i++) {
          if (select.options[i].text.toLowerCase().includes(title.toLowerCase().split(' ')[0])) {
            select.selectedIndex = i;
            break;
          }
        }
      }
      document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
    });
  });
}

/* ==========================================================================
   10. Testimonials & Awards
   ========================================================================== */
function renderTestimonials() {
  const container = document.getElementById('testimonialsGrid');
  if (!container || !AMAN_DATA.testimonials) return;

  container.innerHTML = AMAN_DATA.testimonials.map((t) => {
    return `
      <div class="testimonial-card">
        <div>
          <div class="testimonial-stars">★★★★★</div>
          <p class="testimonial-quote">"${t.quote}"</p>
        </div>
        <div class="testimonial-author">
          <img src="${t.avatar}" alt="${t.client}" class="author-avatar" loading="lazy">
          <div>
            <div class="author-name">${t.client}</div>
            <div class="author-role">${t.title}, ${t.company}</div>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

function renderAwards() {
  const container = document.getElementById('awardsList');
  if (!container || !AMAN_DATA.awards) return;

  container.innerHTML = AMAN_DATA.awards.map((a) => {
    return `
      <div class="award-row">
        <span class="award-year">${a.year}</span>
        <span class="award-title">${a.title}</span>
        <span class="award-org">${a.organization} (${a.location})</span>
      </div>
    `;
  }).join('');
}

/* ==========================================================================
   11. Hero 3D Parallax Tilt Effect
   ========================================================================== */
function initHeroParallax() {
  const card = document.querySelector('.hero-visual-card');
  if (!card) return;

  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    const tiltX = (y / (rect.height / 2)) * -6;
    const tiltY = (x / (rect.width / 2)) * 6;

    card.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(1.02, 1.02, 1.02)`;
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
  });
}

/* ==========================================================================
   12. Booking Form Submission & Confirmation Modal
   ========================================================================== */
function initBookingForm() {
  const form = document.getElementById('bookingForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    playShutterSound();

    const name = document.getElementById('clientName')?.value || 'Client';
    const email = document.getElementById('clientEmail')?.value || '';
    const shootType = document.getElementById('shootType')?.value || 'Commission';
    const refCode = 'AMAN-' + Math.floor(100000 + Math.random() * 900000);

    // Show simulated confirmation modal
    alert(`Thank you, ${name}!\n\nYour consultation inquiry for "${shootType}" has been received.\nReference Code: ${refCode}\n\nOur studio manager will review your creative brief and reply to ${email} within 24 hours with dates, lookbook moodboards, and contract parameters.`);

    form.reset();
    showToast(`Booking Inquiry Submitted: Ref #${refCode}`);
  });
}

/* ==========================================================================
   13. Newsletter & Toast Notification
   ========================================================================== */
function initNewsletter() {
  const form = document.getElementById('newsletterForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = form.querySelector('input[type="email"]')?.value;
    if (email) {
      playShutterSound();
      showToast('Subscribed to The Darkroom Dispatch!');
      form.reset();
    }
  });
}

let toastTimer = null;
function showToast(message) {
  let toast = document.getElementById('toastNotice');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toastNotice';
    toast.className = 'toast-notice';
    document.body.appendChild(toast);
  }

  toast.innerHTML = `
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#c5a059" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
    <span>${message}</span>
  `;

  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toast.classList.remove('show');
  }, 4000);
}
