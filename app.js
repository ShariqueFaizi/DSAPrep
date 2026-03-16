/* ═══════════════════════════════════════════════════════════
   DSA Prep Pro — Application Logic
   ═══════════════════════════════════════════════════════════ */

// ── State Management ─────────────────────────────────────
const STATE_KEY = 'dsaprep_state';

function loadState() {
  try {
    const raw = localStorage.getItem(STATE_KEY);
    if (raw) return JSON.parse(raw);
  } catch (e) { /* ignore */ }
  return {
    solved: [],
    notes: { weak: '', strong: '', revisit: '', general: '' },
    streak: 0,
    lastSolvedDate: null,
    activeNoteCategory: 'weak',
  };
}

function saveState() {
  localStorage.setItem(STATE_KEY, JSON.stringify(state));
}

let state = loadState();

// ── Navigation ───────────────────────────────────────────
function initNav() {
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', e => {
      // External links (home.html, sheet.html) have no data-section — let them navigate normally
      if (!link.dataset.section) return;
      e.preventDefault();
      const section = link.dataset.section;
      switchSection(section);
    });
  });
}

function switchSection(sectionId) {
  // Update nav
  document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
  const activeLink = document.querySelector(`[data-section="${sectionId}"]`);
  if (activeLink) activeLink.classList.add('active');

  // Update sections
  document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
  const activeSection = document.getElementById(`section-${sectionId}`);
  if (activeSection) activeSection.classList.add('active');

  // Lazy-init Monaco editor on first visit
  if (sectionId === 'editor' && !editorInitialized) {
    editorInitialized = true;
    initLanguageSelector();
    initCodeEditor();
  }
}

// ── Dashboard ────────────────────────────────────────────
function updateDashboard() {
  const totalProblems = PROBLEMS.length;
  const solvedCount = state.solved.length;
  const percent = totalProblems > 0 ? Math.round((solvedCount / totalProblems) * 100) : 0;

  const easySolved = state.solved.filter(id => {
    const p = PROBLEMS.find(pr => pr.id === id);
    return p && p.difficulty === 'Easy';
  }).length;

  const mediumSolved = state.solved.filter(id => {
    const p = PROBLEMS.find(pr => pr.id === id);
    return p && p.difficulty === 'Medium';
  }).length;

  const hardSolved = state.solved.filter(id => {
    const p = PROBLEMS.find(pr => pr.id === id);
    return p && p.difficulty === 'Hard';
  }).length;

  // Stat values
  document.getElementById('stat-solved').textContent = solvedCount;
  document.getElementById('stat-easy').textContent = easySolved;
  document.getElementById('stat-medium').textContent = mediumSolved;
  document.getElementById('stat-hard').textContent = hardSolved;
  document.getElementById('stat-percent').textContent = percent + '%';

  // Progress ring
  const ring = document.getElementById('progress-ring');
  if (ring) {
    ring.setAttribute('stroke-dasharray', `${percent}, 100`);
  }

  // Streak
  updateStreak();
  document.getElementById('streak-count').textContent = state.streak;

  // Topic progress bars
  renderTopicBars();

  // Recent activity
  renderRecentActivity();
}

function updateStreak() {
  const today = new Date().toDateString();
  if (state.lastSolvedDate === today) return;
  const yesterday = new Date(Date.now() - 86400000).toDateString();
  if (state.lastSolvedDate === yesterday) {
    // streak continues — will increment on next solve
  } else if (state.lastSolvedDate !== today) {
    // streak broken (if gap > 1 day)
    if (state.lastSolvedDate) {
      const lastDate = new Date(state.lastSolvedDate);
      const diff = Math.floor((Date.now() - lastDate.getTime()) / 86400000);
      if (diff > 1) {
        state.streak = 0;
        saveState();
      }
    }
  }
}

const topicColors = {};
TOPICS.forEach(t => { topicColors[t.id] = t.color; });

function renderTopicBars() {
  const container = document.getElementById('topic-bars');
  if (!container) return;
  container.innerHTML = '';

  TOPICS.forEach(topic => {
    const topicProblems = PROBLEMS.filter(p => p.topic === topic.id);
    const topicSolved = topicProblems.filter(p => state.solved.includes(p.id)).length;
    const total = topicProblems.length;
    if (total === 0) return;
    const pct = Math.round((topicSolved / total) * 100);

    const item = document.createElement('div');
    item.className = 'topic-bar-item';
    item.innerHTML = `
      <div class="topic-bar-header">
        <span class="topic-bar-name">${topic.icon} ${topic.name}</span>
        <span class="topic-bar-count">${topicSolved} / ${total}</span>
      </div>
      <div class="topic-bar-track">
        <div class="topic-bar-fill" style="width: ${pct}%; background: ${topic.color};"></div>
      </div>
    `;
    container.appendChild(item);
  });
}

function renderRecentActivity() {
  const container = document.getElementById('activity-list');
  if (!container) return;

  if (state.solved.length === 0) {
    container.innerHTML = '<p class="empty-state">No problems solved yet. Start your journey! 🚀</p>';
    return;
  }

  // Show last 10 solved
  const recent = [...state.solved].reverse().slice(0, 10);
  container.innerHTML = recent.map(id => {
    const p = PROBLEMS.find(pr => pr.id === id);
    if (!p) return '';
    const diffClass = `difficulty-${p.difficulty}`;
    return `
      <div class="activity-item">
        <span class="activity-icon">✅</span>
        <span class="activity-text"><strong>${p.name}</strong> — LC ${p.lc}</span>
        <span class="problem-difficulty ${diffClass}">${p.difficulty}</span>
      </div>
    `;
  }).join('');
}

// ── Problems Section ─────────────────────────────────────
let currentFilters = {
  search: '',
  difficulty: 'all',
  status: 'all',
  company: 'all',
};

function initProblems() {
  renderProblems();
  initFilters();
}

function initFilters() {
  // Search
  const searchInput = document.getElementById('search-input');
  if (searchInput) {
    searchInput.addEventListener('input', e => {
      currentFilters.search = e.target.value.toLowerCase();
      renderProblems();
    });
  }

  // Difficulty chips
  document.querySelectorAll('#difficulty-filter .chip').forEach(chip => {
    chip.addEventListener('click', () => {
      document.querySelectorAll('#difficulty-filter .chip').forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      currentFilters.difficulty = chip.dataset.filter;
      renderProblems();
    });
  });

  // Status chips
  document.querySelectorAll('#status-filter .chip').forEach(chip => {
    chip.addEventListener('click', () => {
      document.querySelectorAll('#status-filter .chip').forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      currentFilters.status = chip.dataset.status;
      renderProblems();
    });
  });

  // Company chips
  document.querySelectorAll('#company-filter .chip').forEach(chip => {
    chip.addEventListener('click', () => {
      document.querySelectorAll('#company-filter .chip').forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      currentFilters.company = chip.dataset.company;
      renderProblems();
    });
  });
}

function filterProblems() {
  return PROBLEMS.filter(p => {
    // Search
    if (currentFilters.search && !p.name.toLowerCase().includes(currentFilters.search) && !`lc ${p.lc}`.includes(currentFilters.search)) {
      return false;
    }
    // Difficulty
    if (currentFilters.difficulty !== 'all' && p.difficulty !== currentFilters.difficulty) {
      return false;
    }
    // Status
    if (currentFilters.status === 'solved' && !state.solved.includes(p.id)) {
      return false;
    }
    if (currentFilters.status === 'unsolved' && state.solved.includes(p.id)) {
      return false;
    }
    // Company
    if (currentFilters.company !== 'all' && !p.companies.includes(currentFilters.company)) {
      return false;
    }
    return true;
  });
}

function renderProblems() {
  const container = document.getElementById('problems-container');
  if (!container) return;
  container.innerHTML = '';

  const filtered = filterProblems();

  // Group by topic
  const grouped = {};
  filtered.forEach(p => {
    if (!grouped[p.topic]) grouped[p.topic] = [];
    grouped[p.topic].push(p);
  });

  TOPICS.forEach(topic => {
    const problems = grouped[topic.id];
    if (!problems || problems.length === 0) return;

    const solvedInTopic = problems.filter(p => state.solved.includes(p.id)).length;

    const group = document.createElement('div');
    group.className = 'topic-group';
    group.innerHTML = `
      <div class="topic-group-header" onclick="toggleGroup(this)">
        <span class="topic-group-title">${topic.icon} ${topic.name}</span>
        <span>
          <span class="topic-group-count">${solvedInTopic}/${problems.length}</span>
          <span class="topic-group-toggle">▼</span>
        </span>
      </div>
      <div class="problems-list">
        ${problems.map(p => renderProblemRow(p)).join('')}
      </div>
    `;
    container.appendChild(group);
  });

  if (Object.keys(grouped).length === 0) {
    container.innerHTML = '<p class="empty-state">No problems match your filters 🔍</p>';
  }
}

function renderProblemRow(problem) {
  const isSolved = state.solved.includes(problem.id);
  const solvedClass = isSolved ? 'solved' : '';
  const checkmark = isSolved ? '✓' : '';

  return `
    <div class="problem-row ${solvedClass}" id="problem-${problem.id}">
      <div class="problem-checkbox" onclick="toggleProblem(${problem.id})">${checkmark}</div>
      <span class="problem-number">#${problem.id}</span>
      <span class="problem-name">${problem.name}</span>
      <span class="problem-difficulty difficulty-${problem.difficulty}">${problem.difficulty}</span>
      <span class="problem-lc">LC ${problem.lc}</span>
      <div class="problem-companies">
        ${problem.companies.map(c => `<span class="company-tag">${c}</span>`).join('')}
      </div>
    </div>
  `;
}

function toggleProblem(id) {
  const idx = state.solved.indexOf(id);
  if (idx === -1) {
    const today = new Date().toDateString();
    const alreadySolvedToday = state.lastSolvedDate === today;
    state.solved.push(id);
    state.lastSolvedDate = today;
    // Increment streak only once per calendar day
    if (!alreadySolvedToday) {
      state.streak = (state.streak || 0) + 1;
    }
  } else {
    state.solved.splice(idx, 1);
  }
  saveState();
  renderProblems();
  updateDashboard();
}

function toggleGroup(header) {
  const group = header.parentElement;
  group.classList.toggle('collapsed');
}

// ── Patterns Section ─────────────────────────────────────
function initPatterns() {
  const grid = document.getElementById('patterns-grid');
  if (!grid) return;

  grid.innerHTML = PATTERNS_DATA.map((pattern, i) => `
    <div class="pattern-card" onclick="showPatternDetail(${i})" id="pattern-card-${i}">
      <div class="pattern-icon">${pattern.icon}</div>
      <div class="pattern-name">${pattern.name}</div>
      <div class="pattern-desc">${pattern.description}</div>
      <div class="pattern-meta">
        <span class="pattern-difficulty-label">${pattern.difficulty}</span>
        <span class="pattern-count">${pattern.problems} problems</span>
      </div>
    </div>
  `).join('');
}

function showPatternDetail(index) {
  const pattern = PATTERNS_DATA[index];
  const modal = document.getElementById('pattern-detail-modal');
  const body = document.getElementById('pattern-detail-body');

  body.innerHTML = `
    <h2>${pattern.icon} ${pattern.name}</h2>
    <p>${pattern.description}</p>
    <p style="font-size: 12px; color: var(--text-muted);">${pattern.companies}</p>

    <h3>🎯 When to Use</h3>
    <ul>
      ${pattern.useWhen.map(u => `<li>${u}</li>`).join('')}
    </ul>

    <h3>📝 Code Template</h3>
    <pre><code>${escapeHtml(pattern.template)}</code></pre>
  `;

  modal.classList.remove('hidden');
}

function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

function initPatternModal() {
  const closeBtn = document.getElementById('pattern-modal-close');
  const modal = document.getElementById('pattern-detail-modal');

  if (closeBtn) {
    closeBtn.addEventListener('click', () => modal.classList.add('hidden'));
  }

  if (modal) {
    modal.addEventListener('click', e => {
      if (e.target === modal) modal.classList.add('hidden');
    });
  }
}

// ── Companies Section ────────────────────────────────────
function initCompanies() {
  const grid = document.getElementById('companies-grid');
  if (!grid) return;

  grid.innerHTML = COMPANY_DATA.map(company => `
    <div class="company-card">
      <div class="company-card-header">
        <span class="company-logo">${company.logo}</span>
        <span class="company-name">${company.name}</span>
      </div>
      <ul class="company-tips">
        ${company.tips.map(tip => `
          <li>
            <span class="company-tip-icon">${tip.icon}</span>
            <span>${tip.text}</span>
          </li>
        `).join('')}
      </ul>
    </div>
  `).join('');
}

// ── Schedule Section ─────────────────────────────────────
function initSchedule() {
  const timeline = document.getElementById('timeline');
  if (!timeline) return;

  timeline.innerHTML = SCHEDULE_DATA.map(item => `
    <div class="timeline-item">
      <div class="timeline-dot"></div>
      <div class="timeline-card">
        <div class="timeline-week">${item.week} — ${item.phase}</div>
        <div class="timeline-title">${item.title}</div>
        <div class="timeline-desc">${item.description}</div>
        <div class="timeline-topics">
          ${item.topics.map(t => `<span class="timeline-topic-tag">${t}</span>`).join('')}
        </div>
      </div>
    </div>
  `).join('');
}

// ── Notes Section ────────────────────────────────────────
function initNotes() {
  const editor = document.getElementById('notes-editor');
  const categories = document.querySelectorAll('.note-cat-btn');

  // Load active category
  const activeCat = state.activeNoteCategory || 'weak';
  if (editor) {
    editor.value = state.notes[activeCat] || '';
  }

  // Set active button
  categories.forEach(btn => {
    btn.classList.toggle('active', btn.dataset.cat === activeCat);
  });

  // Switch category
  categories.forEach(btn => {
    btn.addEventListener('click', () => {
      // Save current
      if (editor) {
        state.notes[state.activeNoteCategory] = editor.value;
      }

      // Switch
      categories.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.activeNoteCategory = btn.dataset.cat;

      if (editor) {
        editor.value = state.notes[btn.dataset.cat] || '';
      }

      saveState();
    });
  });

  // Auto-save on input
  if (editor) {
    editor.addEventListener('input', () => {
      state.notes[state.activeNoteCategory] = editor.value;
      saveState();
    });
  }
}

// ── Reset ────────────────────────────────────────────────
function initReset() {
  const resetBtn = document.getElementById('reset-btn');
  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      if (confirm('⚠️ This will reset ALL your progress, notes, and streak. Are you sure?')) {
        localStorage.removeItem(STATE_KEY);
        state = loadState();
        updateDashboard();
        renderProblems();
        initNotes();
      }
    });
  }
}

// ── Keyboard Shortcuts ───────────────────────────────────
function initKeyboard() {
  document.addEventListener('keydown', e => {
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
    // Don't trigger shortcuts when Monaco editor is focused
    if (document.activeElement?.closest('.monaco-container')) return;

    switch(e.key) {
      case '1': switchSection('dashboard'); break;
      case '2': switchSection('problems'); break;
      case '3': switchSection('editor'); break;
      case '4': switchSection('patterns'); break;
      case '5': switchSection('companies'); break;
      case '6': switchSection('schedule'); break;
      case '7': switchSection('notes'); break;
      case 'Escape':
        document.getElementById('pattern-detail-modal')?.classList.add('hidden');
        break;
    }
  });
}

// ── Initialize ───────────────────────────────────────────
let editorInitialized = false;

document.addEventListener('DOMContentLoaded', () => {
  // Check authentication first
  checkAuth();

  // Initialize app components
  initNav();
  updateDashboard();
  initProblems();
  initPatterns();
  initPatternModal();
  initCompanies();
  initSchedule();
  initNotes();
  initReset();
  initKeyboard();

  // Animate stats on load
  animateCounters();

  // Handle hash navigation (e.g. index.html#section-patterns from home.html)
  const hash = window.location.hash;
  if (hash && hash.startsWith('#section-')) {
    const sectionId = hash.replace('#section-', '');
    switchSection(sectionId);
  }
});

function animateCounters() {
  document.querySelectorAll('.stat-value').forEach(el => {
    const final = parseInt(el.textContent) || 0;
    if (final === 0) return;
    let current = 0;
    const increment = Math.ceil(final / 30);
    const timer = setInterval(() => {
      current += increment;
      if (current >= final) {
        current = final;
        clearInterval(timer);
      }
      el.textContent = current;
    }, 30);
  });
}
