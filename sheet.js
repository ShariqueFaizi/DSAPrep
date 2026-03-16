/* ═══════════════════════════════════════════════════════════
   DSA Prep Pro — A2Z Sheet Page Logic
   ═══════════════════════════════════════════════════════════ */

const STORAGE_KEY = 'dsaprep_sheet_v1';

// ── State ────────────────────────────────────────────────
let sheetState = loadSheetState();
let currentDiff = 'all';
let currentStatus = 'all';
let searchQuery = '';

function loadSheetState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return JSON.parse(raw);
  } catch (e) {}
  return { solved: {}, bookmarked: {} };
}

function saveSheetState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(sheetState));
}

// ── Theme (same as home.js) ──────────────────────────────
const html = document.documentElement;
const themeBtn = document.getElementById('theme-toggle');
const themeIcon = themeBtn ? themeBtn.querySelector('.theme-icon') : null;

function setTheme(dark) {
  html.setAttribute('data-theme', dark ? 'dark' : 'light');
  if (themeIcon) themeIcon.textContent = dark ? '☀️' : '🌙';
  localStorage.setItem('home_theme', dark ? 'dark' : 'light');
}

const savedTheme = localStorage.getItem('home_theme') || 'light';
setTheme(savedTheme === 'dark');

if (themeBtn) {
  themeBtn.addEventListener('click', () => {
    setTheme(html.getAttribute('data-theme') !== 'dark');
  });
}

// ── Hamburger ────────────────────────────────────────────
const hamburger = document.getElementById('hamburger');
const mobileNav = document.getElementById('mobile-nav');
if (hamburger && mobileNav) {
  hamburger.addEventListener('click', () => mobileNav.classList.toggle('open'));
}

// ── Navbar scroll ────────────────────────────────────────
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (navbar) navbar.classList.toggle('scrolled', window.scrollY > 20);
}, { passive: true });

// ── Sidebar toggle (mobile) ──────────────────────────────
const sidebarToggleBtn = document.getElementById('sidebar-toggle-btn');
const sheetSidebar = document.getElementById('sheet-sidebar');

if (sidebarToggleBtn) {
  sidebarToggleBtn.addEventListener('click', () => {
    sheetSidebar.classList.toggle('open');
  });
}

document.addEventListener('click', e => {
  if (sheetSidebar && sheetSidebar.classList.contains('open')) {
    if (!sheetSidebar.contains(e.target) && !sidebarToggleBtn.contains(e.target)) {
      sheetSidebar.classList.remove('open');
    }
  }
});

// ── Stats Calculation ────────────────────────────────────
function calcStats() {
  const stats = { total: 0, solved: 0, easy: 0, medium: 0, hard: 0 };
  for (const step of A2Z_SHEET) {
    for (const sub of step.subtopics) {
      for (const p of sub.problems) {
        stats.total++;
        if (sheetState.solved[p.id]) {
          stats.solved++;
          if (p.diff === 'Easy') stats.easy++;
          else if (p.diff === 'Medium') stats.medium++;
          else if (p.diff === 'Hard') stats.hard++;
        }
      }
    }
  }
  return stats;
}

function updateGlobalStats() {
  const stats = calcStats();
  const pct = stats.total > 0 ? Math.round((stats.solved / stats.total) * 100) : 0;

  setText('sg-total', stats.total);
  setText('sg-solved', stats.solved);
  setText('sg-pct', pct + '%');
  setText('sg-easy', stats.easy);
  setText('sg-medium', stats.medium);
  setText('sg-hard', stats.hard);

  // Sidebar progress
  const fill = document.getElementById('sidebar-progress-fill');
  const text = document.getElementById('sidebar-progress-text');
  if (fill) fill.style.width = pct + '%';
  if (text) text.textContent = `${stats.solved} / ${stats.total} solved`;
}

function getStepStats(step) {
  let total = 0, solved = 0;
  for (const sub of step.subtopics) {
    for (const p of sub.problems) {
      total++;
      if (sheetState.solved[p.id]) solved++;
    }
  }
  return { total, solved, pct: total > 0 ? Math.round((solved / total) * 100) : 0 };
}

function setText(id, val) {
  const el = document.getElementById(id);
  if (el) el.textContent = val;
}

// ── Sidebar Navigation ───────────────────────────────────
function renderSidebar() {
  const nav = document.getElementById('sidebar-steps');
  if (!nav) return;

  nav.innerHTML = A2Z_SHEET.map(step => {
    const st = getStepStats(step);
    return `
      <a href="#step-${step.id}" class="sidebar-step-item" data-step="${step.id}">
        <span class="sidebar-step-num">${step.id}</span>
        ${step.title}
        <span class="sidebar-step-progress">${st.solved}/${st.total}</span>
      </a>
    `;
  }).join('');

  nav.querySelectorAll('.sidebar-step-item').forEach(item => {
    item.addEventListener('click', e => {
      e.preventDefault();
      const stepEl = document.getElementById(`step-${item.dataset.step}`);
      if (stepEl) {
        stepEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
      nav.querySelectorAll('.sidebar-step-item').forEach(i => i.classList.remove('active'));
      item.classList.add('active');
      if (sheetSidebar) sheetSidebar.classList.remove('open');
    });
  });
}

// ── Build LC Link ────────────────────────────────────────
function lcLink(num) {
  if (!num) return '';
  return `<a href="https://leetcode.com/problems/" target="_blank" class="link-btn link-btn-lc" title="LeetCode #${num}">LC #${num}</a>`;
}

// ── Highlight search match ────────────────────────────────
function highlight(text, query) {
  if (!query) return text;
  const escaped = query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  return text.replace(new RegExp(escaped, 'gi'), m => `<span class="search-highlight">${m}</span>`);
}

// ── Problem Row ──────────────────────────────────────────
function buildProblemRow(p, rowIndex) {
  const solved = !!sheetState.solved[p.id];
  const bookmarked = !!sheetState.bookmarked[p.id];

  // Filtering
  if (currentDiff !== 'all' && p.diff !== currentDiff) return '';
  if (currentStatus === 'solved' && !solved) return '';
  if (currentStatus === 'unsolved' && solved) return '';
  if (currentStatus === 'bookmark' && !bookmarked) return '';
  if (searchQuery && !p.name.toLowerCase().includes(searchQuery.toLowerCase())) return '';

  const rowClass = solved ? 'solved-row' : (bookmarked ? 'bookmarked-row' : '');
  const nameDisplay = highlight(p.name, searchQuery);
  const nameClass = solved ? 'problem-name solved' : 'problem-name';

  return `
    <tr class="${rowClass}" data-id="${p.id}">
      <td class="col-check">
        <input type="checkbox" class="problem-check" data-id="${p.id}" ${solved ? 'checked' : ''}>
      </td>
      <td class="col-num">${rowIndex + 1}</td>
      <td class="col-name">
        <span class="${nameClass}">${nameDisplay}</span>
        ${p.note ? `<span style="font-size:11px;color:var(--text-muted);display:block;margin-top:2px">${p.note}</span>` : ''}
      </td>
      <td class="col-diff">
        <span class="diff-badge diff-${p.diff.toLowerCase()}">${p.diff}</span>
      </td>
      <td class="col-links">
        ${p.lc ? `<a href="https://leetcode.com/problems/" target="_blank" class="link-btn link-btn-lc">LC #${p.lc}</a>` : ''}
        ${p.gfg ? `<a href="https://www.geeksforgeeks.org/${p.gfg}" target="_blank" class="link-btn link-btn-gfg">GFG</a>` : ''}
        ${!p.lc && !p.gfg ? '<span style="color:var(--text-muted);font-size:12px">—</span>' : ''}
      </td>
      <td class="col-actions">
        <button class="action-btn bookmark-btn" data-id="${p.id}" title="${bookmarked ? 'Remove bookmark' : 'Bookmark'}">
          ${bookmarked ? '🔖' : '🔗'}
        </button>
      </td>
    </tr>
  `;
}

// ── Build Problem Table ──────────────────────────────────
function buildProblemTable(problems) {
  const rows = problems.map((p, i) => buildProblemRow(p, i)).filter(Boolean);
  if (rows.length === 0) return `<div class="no-results">No problems match the current filter.</div>`;

  return `
    <div class="problem-table-wrap">
      <table class="problem-table">
        <thead>
          <tr>
            <th class="col-check">Done</th>
            <th class="col-num">#</th>
            <th class="col-name">Problem</th>
            <th class="col-diff">Difficulty</th>
            <th class="col-links">Links</th>
            <th class="col-actions">Save</th>
          </tr>
        </thead>
        <tbody>
          ${rows.join('')}
        </tbody>
      </table>
    </div>
  `;
}

// ── Render Steps ─────────────────────────────────────────
function renderSteps() {
  const container = document.getElementById('steps-container');
  if (!container) return;

  container.innerHTML = A2Z_SHEET.map(step => {
    const st = getStepStats(step);
    const isCollapsed = false; // default expanded

    const subtopicsHtml = step.subtopics.map(sub => {
      const tableHtml = buildProblemTable(sub.problems);
      return `
        <div class="sub-step" id="sub-${sub.id}">
          <div class="sub-step-header" data-sub="${sub.id}">
            <span class="sub-step-icon">${sub.icon}</span>
            <span class="sub-step-name">${sub.name}</span>
            <span class="sub-step-count">${sub.problems.length} problems</span>
            <span class="sub-step-chevron">▾</span>
          </div>
          <div class="sub-step-body">
            ${tableHtml}
          </div>
        </div>
      `;
    }).join('');

    return `
      <div class="step-block${isCollapsed ? ' collapsed' : ''}" id="step-${step.id}">
        <div class="step-block-header" data-step="${step.id}">
          <div class="step-block-num">${step.id}</div>
          <div class="step-block-title">${step.icon} ${step.title}</div>
          <div class="step-block-meta">
            <span class="step-block-count">${st.solved}/${st.total} solved</span>
            <div class="step-block-mini-bar">
              <div class="step-block-mini-fill" style="width:${st.pct}%"></div>
            </div>
            <span class="step-block-pct">${st.pct}%</span>
          </div>
          <span class="step-block-chevron">▾</span>
        </div>
        <div class="step-block-body">
          ${subtopicsHtml}
        </div>
      </div>
    `;
  }).join('');

  attachEventListeners();
}

// ── Event Listeners ──────────────────────────────────────
function attachEventListeners() {
  const container = document.getElementById('steps-container');
  if (!container) return;

  // Step collapse/expand
  container.querySelectorAll('.step-block-header').forEach(header => {
    header.addEventListener('click', () => {
      const block = header.closest('.step-block');
      block.classList.toggle('collapsed');
    });
  });

  // Sub-step collapse/expand
  container.querySelectorAll('.sub-step-header').forEach(header => {
    header.addEventListener('click', () => {
      const sub = header.closest('.sub-step');
      sub.classList.toggle('sub-collapsed');
    });
  });

  // Checkboxes
  container.querySelectorAll('.problem-check').forEach(cb => {
    cb.addEventListener('change', () => {
      const id = cb.dataset.id;
      if (cb.checked) {
        sheetState.solved[id] = Date.now();
      } else {
        delete sheetState.solved[id];
      }
      saveSheetState();
      updateRowStyling(cb, id);
      updateStepProgress(cb);
      updateGlobalStats();
      renderSidebar();
    });
  });

  // Bookmark buttons
  container.querySelectorAll('.bookmark-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.dataset.id;
      if (sheetState.bookmarked[id]) {
        delete sheetState.bookmarked[id];
        btn.textContent = '🔗';
        btn.title = 'Bookmark';
      } else {
        sheetState.bookmarked[id] = true;
        btn.textContent = '🔖';
        btn.title = 'Remove bookmark';
      }
      saveSheetState();
      const row = btn.closest('tr');
      if (row) {
        row.classList.toggle('bookmarked-row', !!sheetState.bookmarked[id]);
        if (sheetState.solved[id]) row.classList.add('solved-row');
      }
    });
  });
}

function updateRowStyling(cb, id) {
  const row = cb.closest('tr');
  if (!row) return;
  row.classList.toggle('solved-row', !!sheetState.solved[id]);
  const nameEl = row.querySelector('.problem-name');
  if (nameEl) nameEl.classList.toggle('solved', !!sheetState.solved[id]);
}

function updateStepProgress(el) {
  const stepBlock = el.closest('.step-block');
  if (!stepBlock) return;
  const stepId = parseInt(stepBlock.id.replace('step-', ''));
  const step = A2Z_SHEET.find(s => s.id === stepId);
  if (!step) return;
  const st = getStepStats(step);
  const countEl = stepBlock.querySelector('.step-block-count');
  const fillEl = stepBlock.querySelector('.step-block-mini-fill');
  const pctEl = stepBlock.querySelector('.step-block-pct');
  if (countEl) countEl.textContent = `${st.solved}/${st.total} solved`;
  if (fillEl) fillEl.style.width = st.pct + '%';
  if (pctEl) pctEl.textContent = st.pct + '%';
}

// ── Filters ──────────────────────────────────────────────
function initFilters() {
  // Difficulty filter
  document.querySelectorAll('[data-diff]').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('[data-diff]').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentDiff = btn.dataset.diff;
      renderSteps();
    });
  });

  // Status filter
  document.querySelectorAll('[data-status]').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('[data-status]').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentStatus = btn.dataset.status;
      renderSteps();
    });
  });

  // Search
  const mainSearch = document.getElementById('main-search');
  if (mainSearch) {
    mainSearch.addEventListener('input', () => {
      searchQuery = mainSearch.value.trim();
      if (searchQuery) {
        // Auto-expand all when searching
        document.querySelectorAll('.step-block').forEach(b => b.classList.remove('collapsed'));
        document.querySelectorAll('.sub-step').forEach(b => b.classList.remove('sub-collapsed'));
      }
      renderSteps();
    });
  }

  // Sidebar search
  const sideSearch = document.getElementById('sidebar-search');
  if (sideSearch) {
    sideSearch.addEventListener('input', () => {
      const q = sideSearch.value.toLowerCase();
      document.querySelectorAll('.sidebar-step-item').forEach(item => {
        item.style.display = item.textContent.toLowerCase().includes(q) ? '' : 'none';
      });
    });
  }

  // Collapse/Expand all
  const collapseBtn = document.getElementById('collapse-all-btn');
  const expandBtn = document.getElementById('expand-all-btn');
  if (collapseBtn) {
    collapseBtn.addEventListener('click', () => {
      document.querySelectorAll('.step-block').forEach(b => b.classList.add('collapsed'));
    });
  }
  if (expandBtn) {
    expandBtn.addEventListener('click', () => {
      document.querySelectorAll('.step-block').forEach(b => b.classList.remove('collapsed'));
    });
  }
}

// ── Scroll tracking (active sidebar item) ────────────────
function initScrollTracking() {
  const stepIds = A2Z_SHEET.map(s => `step-${s.id}`);
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        const stepNum = id.replace('step-', '');
        document.querySelectorAll('.sidebar-step-item').forEach(item => {
          item.classList.toggle('active', item.dataset.step === stepNum);
        });
      }
    });
  }, { threshold: 0.1, rootMargin: '-80px 0px -60% 0px' });

  stepIds.forEach(id => {
    const el = document.getElementById(id);
    if (el) observer.observe(el);
  });
}

// ── Handle hash navigation ────────────────────────────────
function handleHashNav() {
  const hash = window.location.hash;
  if (hash && hash.startsWith('#step-')) {
    setTimeout(() => {
      const el = document.querySelector(hash);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 300);
  }
}

// ── Init ─────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  renderSidebar();
  renderSteps();
  updateGlobalStats();
  initFilters();
  initScrollTracking();
  handleHashNav();
});
