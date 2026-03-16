/* ═══════════════════════════════════════════════════════════
   DSA Prep Pro — Home Page JavaScript
   ═══════════════════════════════════════════════════════════ */

// ── Theme Toggle ──────────────────────────────────────────
const html = document.documentElement;
const themeBtn = document.getElementById('theme-toggle');
const themeIcon = themeBtn.querySelector('.theme-icon');

function setTheme(dark) {
  html.setAttribute('data-theme', dark ? 'dark' : 'light');
  themeIcon.textContent = dark ? '☀️' : '🌙';
  localStorage.setItem('home_theme', dark ? 'dark' : 'light');
}

// Init theme
const savedTheme = localStorage.getItem('home_theme') || 'light';
setTheme(savedTheme === 'dark');

themeBtn.addEventListener('click', () => {
  setTheme(html.getAttribute('data-theme') !== 'dark');
});

// ── Navbar scroll effect ──────────────────────────────────
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 20);
}, { passive: true });

// ── Hamburger Menu ────────────────────────────────────────
const hamburger = document.getElementById('hamburger');
const mobileNav = document.getElementById('mobile-nav');

hamburger.addEventListener('click', () => {
  mobileNav.classList.toggle('open');
});

document.addEventListener('click', e => {
  if (!hamburger.contains(e.target) && !mobileNav.contains(e.target)) {
    mobileNav.classList.remove('open');
  }
});

// ── Animated Counter ──────────────────────────────────────
function animateCounter(el, target, duration = 1500) {
  const start = performance.now();
  const update = now => {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3); // ease-out-cubic
    el.textContent = Math.round(eased * target);
    if (progress < 1) requestAnimationFrame(update);
  };
  requestAnimationFrame(update);
}

// Trigger counters when hero stats come into view
const counters = document.querySelectorAll('.stat-pill-num');
const counterObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const target = parseInt(entry.target.dataset.count, 10);
      animateCounter(entry.target, target);
      counterObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

counters.forEach(c => counterObserver.observe(c));

// ── Steps Data ────────────────────────────────────────────
const STEPS = [
  { num: 1,  name: 'Learn the Basics',        icon: '📚', topics: 6,  problems: 31 },
  { num: 2,  name: 'Sorting Algorithms',       icon: '🔢', topics: 2,  problems: 7  },
  { num: 3,  name: 'Arrays',                   icon: '📦', topics: 3,  problems: 40 },
  { num: 4,  name: 'Binary Search',            icon: '🔍', topics: 4,  problems: 32 },
  { num: 5,  name: 'Strings',                  icon: '🔤', topics: 3,  problems: 28 },
  { num: 6,  name: 'Linked Lists',             icon: '🔗', topics: 4,  problems: 31 },
  { num: 7,  name: 'Recursion & Backtracking', icon: '🔙', topics: 4,  problems: 28 },
  { num: 8,  name: 'Bit Manipulation',         icon: '🔢', topics: 2,  problems: 18 },
  { num: 9,  name: 'Stacks & Queues',          icon: '📚', topics: 4,  problems: 30 },
  { num: 10, name: 'Sliding Window & Two Ptrs',icon: '🪟', topics: 3,  problems: 26 },
  { num: 11, name: 'Heaps',                    icon: '⛰️', topics: 3,  problems: 21 },
  { num: 12, name: 'Graphs',                   icon: '🕸️', topics: 7,  problems: 54 },
  { num: 13, name: 'Dynamic Programming',      icon: '🧠', topics: 10, problems: 56 },
];

function renderSteps() {
  const grid = document.getElementById('steps-grid');
  if (!grid) return;
  grid.innerHTML = STEPS.map(s => `
    <a href="sheet.html#step-${s.num}" class="step-card" style="text-decoration:none">
      <div class="step-card-header">
        <div class="step-num">${s.num}</div>
        <div class="step-name">${s.name}</div>
      </div>
      <div class="step-meta">
        <span class="step-count">📂 <span class="step-count-badge">${s.topics} topics</span></span>
        <span class="step-count">💡 <span class="step-count-badge">${s.problems} problems</span></span>
      </div>
    </a>
  `).join('');
}

// ── Topics Data ───────────────────────────────────────────
const TOPIC_LIST = [
  { icon: '📦', name: 'Arrays',             count: 40 },
  { icon: '🗂️', name: 'Hash Maps',          count: 16 },
  { icon: '👆', name: 'Two Pointers',        count: 12 },
  { icon: '🪟', name: 'Sliding Window',      count: 10 },
  { icon: '🔗', name: 'Linked Lists',        count: 18 },
  { icon: '📚', name: 'Stacks & Queues',     count: 15 },
  { icon: '🌳', name: 'Binary Trees',        count: 20 },
  { icon: '🔍', name: 'Binary Search',       count: 14 },
  { icon: '🕸️', name: 'Graphs',             count: 22 },
  { icon: '🧠', name: 'Dynamic Programming', count: 30 },
  { icon: '🔙', name: 'Backtracking',        count: 12 },
  { icon: '⛰️', name: 'Heaps',              count: 10 },
  { icon: '🌲', name: 'Tries',              count: 6  },
  { icon: '🤝', name: 'Union Find',          count: 8  },
  { icon: '💰', name: 'Greedy',             count: 10 },
  { icon: '📏', name: 'Intervals',           count: 8  },
  { icon: '🔢', name: 'Bit Manipulation',    count: 8  },
];

function renderTopics() {
  const grid = document.getElementById('topics-grid');
  if (!grid) return;
  grid.innerHTML = TOPIC_LIST.map(t => `
    <a href="sheet.html" class="topic-pill">
      <span class="topic-pill-icon">${t.icon}</span>
      <span>${t.name}</span>
      <span class="topic-pill-count">${t.count}</span>
    </a>
  `).join('');
}

// ── Scroll Animations ─────────────────────────────────────
function initScrollAnimations() {
  const style = document.createElement('style');
  style.textContent = `
    .animate-in {
      opacity: 0;
      transform: translateY(24px);
      transition: opacity 0.6s ease, transform 0.6s ease;
    }
    .animate-in.visible {
      opacity: 1;
      transform: translateY(0);
    }
  `;
  document.head.appendChild(style);

  const animTargets = document.querySelectorAll(
    '.feature-card, .step-card, .topic-pill, .testimonial-card, .step-how, .stat-pill'
  );
  animTargets.forEach(el => el.classList.add('animate-in'));

  const observer = new IntersectionObserver(entries => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, (i % 6) * 80);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  animTargets.forEach(el => observer.observe(el));
}

// ── Smooth anchor scroll ──────────────────────────────────
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const id = a.getAttribute('href').slice(1);
    const el = document.getElementById(id);
    if (el) {
      e.preventDefault();
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// ── Init ──────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  renderSteps();
  renderTopics();
  initScrollAnimations();
});
