/**
 * Zentrevo - Main Website JavaScript
 * Extracted from index.html
 */

(function () {
  'use strict';

  function init() {
    /* ── CTA BACKGROUND VIDEO (loads & plays only when scrolled into view) ── */
    (function () {
      const v = document.getElementById('cta-video');
      if (!v) return;
      const io = new IntersectionObserver(entries => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            if (!v.getAttribute('src') && !v.querySelector('source[data-loaded]')) {
              v.load();
              v.querySelector('source').setAttribute('data-loaded', '1');
            }
            v.play().catch(() => {});
          } else {
            v.pause();
          }
        });
      }, { threshold: 0.15 });
      io.observe(v.closest('.cta'));
    })();

    /* ── DETAIL MODAL (Tours / Visa / Destinations) ── */
    (function () {
      const modal = document.getElementById('detail-modal');
      if (!modal) return;
      const imgEl = document.getElementById('detail-modal-img');
      const tagEl = document.getElementById('detail-modal-tag');
      const titleEl = document.getElementById('detail-modal-title');
      const metaEl = document.getElementById('detail-modal-meta');
      const listEl = document.getElementById('detail-modal-list');
      const descEl = document.getElementById('detail-modal-desc');
      const priceEl = document.getElementById('detail-modal-price');
      const ctaEl = document.getElementById('detail-modal-cta');
      const guideEl = document.getElementById('detail-modal-guide');
      const closeBtn = document.getElementById('detail-modal-close');
      const backdrop = document.getElementById('detail-modal-backdrop');

      function openModal(card) {
        const img = card.querySelector('img');
        const title = card.querySelector('h4')?.textContent.trim() || '';
        const waLink = card.querySelector('.pkg-whatsapp');
        imgEl.src = img ? img.src : '';
        imgEl.alt = img ? img.alt : title;
        titleEl.textContent = title;
        listEl.innerHTML = '';
        metaEl.textContent = '';
        priceEl.textContent = '';
        priceEl.style.display = 'none';
        descEl.innerHTML = '';

        if (card.classList.contains('pkg-card')) {
          const tag = card.querySelector('.pkg-tag')?.textContent.trim() || '';
          const duration = card.querySelector('.pkg-duration')?.textContent.trim() || '';
          const includes = Array.from(card.querySelectorAll('.pkg-inc')).map(i => i.textContent.trim());
          const priceHTML = card.querySelector('.pkg-price')?.innerHTML || '';
          const longContent = card.querySelector('.card-long');
          tagEl.textContent = tag;
          tagEl.style.display = tag ? 'inline-block' : 'none';
          metaEl.textContent = duration;
          includes.forEach(inc => {
            const li = document.createElement('li');
            li.textContent = inc;
            listEl.appendChild(li);
          });
          priceEl.innerHTML = priceHTML;
          priceEl.style.display = priceHTML ? 'block' : 'none';
          descEl.innerHTML = longContent ? longContent.innerHTML :
            `<p>A thoughtfully curated ${duration.toLowerCase()} experience featuring ${includes.join(', ').toLowerCase()}. Every detail — from stays to local guides — is arranged by our specialists so all you have to do is enjoy the journey.</p>`;
          ctaEl.textContent = 'Book via WhatsApp';
          const slug = title.toLowerCase().replace(/&/g, '').replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
          const inToursFolder = window.location.pathname.includes('/tours/');
          guideEl.href = inToursFolder ? `${slug}.html` : `tours/${slug}.html`;
          guideEl.style.display = 'block';
        } else if (card.classList.contains('visa-card')) {
          const longContent = card.querySelector('.card-long');
          tagEl.style.display = 'none';
          metaEl.textContent = 'Visa Assistance';
          descEl.innerHTML = longContent ? longContent.innerHTML :
            `<p>${card.querySelector('p')?.textContent.trim() || ''}</p>`;
          ctaEl.textContent = 'Enquire via WhatsApp';
          {
            const slug = title.toLowerCase().replace(/&/g, '').replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
            const inVisaFolder = window.location.pathname.includes('/visa/');
            guideEl.href = inVisaFolder ? `${slug}.html` : `visa/${slug}.html`;
            guideEl.style.display = 'block';
          }
        } else if (card.classList.contains('dest-card')) {
          const country = card.querySelector('.dest-country')?.textContent.trim() || '';
          const longContent = card.querySelector('.card-long');
          tagEl.textContent = country;
          tagEl.style.display = country ? 'inline-block' : 'none';
          metaEl.textContent = '';
          ['Flights', 'Hotels', 'Transfers', 'Guided Experiences'].forEach(inc => {
            const li = document.createElement('li');
            li.textContent = inc;
            listEl.appendChild(li);
          });
          descEl.innerHTML = longContent ? longContent.innerHTML :
            `<p>${card.querySelector('.dest-overlay p')?.textContent.trim() || ''}</p><p>Zentrevo arranges your flights, hotels, transfers and guided experiences in ${title} — everything handled end-to-end so all you have to do is enjoy the trip.</p>`;
          ctaEl.textContent = 'Enquire via WhatsApp';
          {
            const slug = title.toLowerCase().replace(/&/g, '').replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
            const inDestFolder = window.location.pathname.includes('/destinations/');
            guideEl.href = inDestFolder ? `${slug}.html` : `destinations/${slug}.html`;
            guideEl.style.display = 'block';
          }
        }

        ctaEl.href = waLink ? waLink.getAttribute('href') : '#';
        modal.classList.add('open');
        document.body.style.overflow = 'hidden';
      }

      function closeModal() {
        modal.classList.remove('open');
        document.body.style.overflow = '';
      }

      document.querySelectorAll('.pkg-card, .visa-card, .dest-card').forEach(card => {
        card.addEventListener('click', (e) => {
          if (e.target.closest('.pkg-like') || e.target.closest('.pkg-whatsapp')) return;
          openModal(card);
        });
      });

      closeBtn.addEventListener('click', closeModal);
      backdrop.addEventListener('click', closeModal);
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeModal();
      });
    })();

    /* ── IMAGE FALLBACK (graceful degrade if a photo fails to load) ── */
    (function () {
      document.querySelectorAll('img').forEach(img => {
        img.addEventListener('error', function () {
          this.style.background = 'linear-gradient(135deg, rgba(200,151,42,0.15), rgba(14,124,139,0.15))';
          this.style.minHeight = '100%';
          this.style.objectFit = 'cover';
          this.onerror = null;
        }, { once: true });
      });
    })();

    /* ── NAV SERVICES DROPDOWN ── */
    (function () {
      const dropdown = document.querySelector('.nav-dropdown');
      const toggle = document.querySelector('.nav-drop-toggle');
      if (!dropdown || !toggle) return;
      toggle.addEventListener('click', (e) => {
        e.preventDefault();
        dropdown.classList.toggle('open');
      });
      document.addEventListener('click', (e) => {
        if (!dropdown.contains(e.target)) dropdown.classList.remove('open');
      });
    })();

    /* ── AUTO-ADVANCING SLIDERS (tours + visa) ── */
    function initSlider(trackId, prevId, nextId, interval) {
      const track = document.getElementById(trackId);
      const prev = document.getElementById(prevId);
      const next = document.getElementById(nextId);
      if (!track) return;
      function scrollAmount() {
        const card = track.querySelector(':scope > *');
        return card ? card.getBoundingClientRect().width + 24 : 320;
      }
      function atEnd() {
        return track.scrollLeft + track.clientWidth >= track.scrollWidth - 4;
      }
      function advance() {
        if (atEnd()) {
          track.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          track.scrollBy({ left: scrollAmount(), behavior: 'smooth' });
        }
      }
      let timer = setInterval(advance, interval);
      function pause() { clearInterval(timer); }
      function resume() { clearInterval(timer); timer = setInterval(advance, interval); }
      if (prev) prev.addEventListener('click', () => { pause(); track.scrollBy({ left: -scrollAmount(), behavior: 'smooth' }); resume(); });
      if (next) next.addEventListener('click', () => { pause(); advance(); resume(); });
      track.addEventListener('mouseenter', pause);
      track.addEventListener('mouseleave', resume);
      track.addEventListener('touchstart', pause, { passive: true });
      track.addEventListener('touchend', resume, { passive: true });
    }
    initSlider('tours-track', 'tours-prev', 'tours-next', 4200);
    initSlider('dest-track', 'dest-prev', 'dest-next', 3900);
    initSlider('visa-track', 'visa-prev', 'visa-next', 3600);

    /* ── TOUR LIKE BUTTONS ── */
    (function () {
      const likeBtns = document.querySelectorAll('.pkg-like');
      likeBtns.forEach(btn => {
        const card = btn.closest('.pkg-card');
        const key = 'zentrevoLiked:' + (card ? card.dataset.tour : btn.dataset.id);
        if (localStorage.getItem(key)) btn.classList.add('liked');
        btn.addEventListener('click', (e) => {
          e.preventDefault();
          btn.classList.toggle('liked');
          if (btn.classList.contains('liked')) {
            localStorage.setItem(key, '1');
          } else {
            localStorage.removeItem(key);
          }
        });
      });
    })();

    /* ── STARS BACKGROUND ── */
    (function () {
      const c = document.getElementById('stars-canvas');
      const hero = document.querySelector('.hero');
      if (!c || !hero) return;
      function resize() { c.width = hero.offsetWidth; c.height = hero.offsetHeight; }
      resize();
      window.addEventListener('resize', resize);
      const ctx = c.getContext('2d');
      const stars = Array.from({ length: 180 }, () => ({
        x: Math.random() * c.width,
        y: Math.random() * c.height,
        r: Math.random() * 1.2 + 0.2,
        o: Math.random() * 0.6 + 0.2,
        s: Math.random() * 0.003 + 0.001
      }));
      function draw() {
        ctx.clearRect(0, 0, c.width, c.height);
        stars.forEach(s => {
          s.o += s.s;
          if (s.o > 0.8 || s.o < 0.1) s.s = -s.s;
          ctx.beginPath();
          ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(200,151,42,${s.o})`;
          ctx.fill();
        });
        requestAnimationFrame(draw);
      }
      draw();
    })();

    /* ── NAV SCROLL ── */
    window.addEventListener('scroll', () => {
      const nav = document.querySelector('nav');
      if (nav) {
        nav.style.background = window.scrollY > 50 ? 'rgba(10,15,30,0.98)' : 'rgba(10,15,30,0.92)';
      }
    });

    /* ── SCROLL REVEAL ── */
    const reveals = document.querySelectorAll('.reveal');
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12 });
    reveals.forEach(el => io.observe(el));

    /* ── MOBILE NAV AUTO-CLOSE ── */
    document.querySelectorAll('.nav-links a').forEach(a => {
      a.addEventListener('click', () => {
        const navLinks = document.querySelector('.nav-links');
        const navToggle = document.querySelector('.nav-toggle');
        if (navLinks) navLinks.classList.remove('nav-open');
        if (navToggle) navToggle.classList.remove('open');
      });
    });

    /* ── IMAGE LOAD STATE (removes shimmer once loaded) ── */
    document.querySelectorAll('img').forEach(img => {
      if (img.complete && img.naturalWidth > 0) {
        img.classList.add('loaded');
      } else {
        img.addEventListener('load', () => img.classList.add('loaded'), { once: true });
        img.addEventListener('error', () => img.classList.add('loaded'), { once: true });
      }
    });

    /* ── BACK TO TOP ── */
    (function () {
      const btn = document.createElement('button');
      btn.id = 'back-to-top';
      btn.setAttribute('aria-label', 'Back to top');
      btn.innerHTML = '<svg viewBox="0 0 24 24"><path d="M12 19V5M5 12L12 5L19 12" stroke-linecap="round" stroke-linejoin="round"/></svg>';
      document.body.appendChild(btn);
      window.addEventListener('scroll', () => {
        if (window.scrollY > 600) btn.classList.add('show'); else btn.classList.remove('show');
      }, { passive: true });
      btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
    })();

    /* ── STICKY MOBILE BOOKING BAR (guide pages only) ── */
    (function () {
      const ctaBox = document.querySelector('.guide-cta-box');
      const h1 = document.querySelector('.guide-hero h1');
      const heroEl = document.querySelector('.guide-hero');
      if (!ctaBox || !h1 || !heroEl) return;
      const waLink = ctaBox.querySelector('.pkg-whatsapp');
      if (!waLink) return;
      const priceBig = ctaBox.querySelector('.price-big');
      const bar = document.createElement('div');
      bar.className = 'sticky-cta-bar';
      const priceText = priceBig ? priceBig.textContent.trim().split('/')[0].trim() : '';
      bar.innerHTML = `<div class="sc-info"><span class="sc-name">${h1.textContent}</span>${priceText ? `<span class="sc-price">From ${priceText}</span>` : ''}</div><a href="${waLink.getAttribute('href')}" target="_blank" rel="noopener">${waLink.textContent.includes('Book') ? 'Book Now' : 'Enquire Now'}</a>`;
      document.body.appendChild(bar);
      const io = new IntersectionObserver(([entry]) => {
        if (!entry.isIntersecting) bar.classList.add('show'); else bar.classList.remove('show');
      }, { threshold: 0 });
      io.observe(heroEl);
    })();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
