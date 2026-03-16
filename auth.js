/* ═══════════════════════════════════════════════════════════
   DSA Prep Pro — Google Authentication
   ═══════════════════════════════════════════════════════════
   Uses Google Identity Services (GIS) for client-side auth.
   
   SETUP INSTRUCTIONS:
   1. Go to https://console.cloud.google.com/
   2. Create a new project (or select existing)
   3. Go to APIs & Services → Credentials
   4. Create OAuth 2.0 Client ID (Web application)
   5. Add your domain to Authorized JavaScript origins:
      - http://localhost (for local dev)
      - https://yourdomain.com (for production)
   6. Copy the Client ID and paste below
   ═══════════════════════════════════════════════════════════ */

// ══════════════════════════════════════════════════════════
// ⚠️  REPLACE THIS with your own Google OAuth Client ID
// ══════════════════════════════════════════════════════════
const GOOGLE_CLIENT_ID = 'YOUR_GOOGLE_CLIENT_ID.apps.googleusercontent.com';

const AUTH_KEY = 'dsaprep_user';

// ── Auth State ───────────────────────────────────────────
function getUser() {
  try {
    const raw = localStorage.getItem(AUTH_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch (e) {
    return null;
  }
}

function setUser(user) {
  localStorage.setItem(AUTH_KEY, JSON.stringify(user));
}

function clearUser() {
  localStorage.removeItem(AUTH_KEY);
}

// ── JWT Decode (Google ID Token) ─────────────────────────
function decodeJwtPayload(token) {
  try {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(
      atob(base64).split('').map(c =>
        '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)
      ).join('')
    );
    return JSON.parse(jsonPayload);
  } catch (e) {
    console.error('JWT decode failed:', e);
    return null;
  }
}

// ── Google Sign-In Callback ──────────────────────────────
function handleGoogleCredentialResponse(response) {
  const payload = decodeJwtPayload(response.credential);
  if (!payload) return;

  const user = {
    name: payload.name,
    email: payload.email,
    picture: payload.picture,
    given_name: payload.given_name,
    loginTime: new Date().toISOString(),
  };

  setUser(user);
  onAuthStateChanged(user);
}

// ── Initialize Google Sign-In ────────────────────────────
function initGoogleAuth() {
  if (typeof google === 'undefined' || !google.accounts) {
    console.warn('Google Identity Services not loaded. Auth features disabled.');
    // If Google SDK fails to load, allow guest access
    enableGuestMode();
    return;
  }

  google.accounts.id.initialize({
    client_id: GOOGLE_CLIENT_ID,
    callback: handleGoogleCredentialResponse,
    auto_select: true,
    cancel_on_tap_outside: false,
  });

  // Render the sign-in button in the login overlay
  const btnContainer = document.getElementById('google-signin-btn');
  if (btnContainer) {
    google.accounts.id.renderButton(btnContainer, {
      theme: 'filled_black',
      size: 'large',
      shape: 'pill',
      width: 300,
      text: 'signin_with',
      logo_alignment: 'left',
    });
  }

  // Also try One Tap prompt
  google.accounts.id.prompt();
}

// ── Guest Mode ───────────────────────────────────────────
function enableGuestMode() {
  const guestBtn = document.getElementById('guest-login-btn');
  if (guestBtn) {
    guestBtn.style.display = 'inline-flex';
  }
}

function loginAsGuest() {
  const user = {
    name: 'Guest User',
    email: 'guest@dsaprep.pro',
    picture: null,
    given_name: 'Guest',
    loginTime: new Date().toISOString(),
    isGuest: true,
  };
  setUser(user);
  onAuthStateChanged(user);
}

// ── Logout ───────────────────────────────────────────────
function logout() {
  clearUser();

  if (typeof google !== 'undefined' && google.accounts) {
    google.accounts.id.disableAutoSelect();
  }

  onAuthStateChanged(null);
}

// ── Auth State Changed Handler ───────────────────────────
function onAuthStateChanged(user) {
  const loginOverlay = document.getElementById('login-overlay');
  const appContainer = document.getElementById('app-container');
  const userProfile = document.getElementById('user-profile');
  const userAvatar = document.getElementById('user-avatar');
  const userName = document.getElementById('user-name');
  const mainHeading = document.getElementById('main-heading');

  if (user) {
    // Hide login, show app
    if (loginOverlay) loginOverlay.classList.add('hidden');
    if (appContainer) appContainer.classList.remove('hidden');

    // Update sidebar profile
    if (userProfile) userProfile.classList.remove('hidden');
    if (userName) userName.textContent = user.given_name || user.name;
    if (userAvatar) {
      if (user.picture) {
        userAvatar.innerHTML = `<img src="${user.picture}" alt="${user.name}" referrerpolicy="no-referrer" />`;
      } else {
        userAvatar.innerHTML = `<span class="avatar-fallback">${(user.given_name || 'G')[0]}</span>`;
      }
    }

    // Update welcome message
    if (mainHeading) {
      mainHeading.innerHTML = `Welcome Back, <span class="gradient-text">${user.given_name || 'Champion'}</span> 🔥`;
    }
  } else {
    // Show login, hide app
    if (loginOverlay) loginOverlay.classList.remove('hidden');
    if (appContainer) appContainer.classList.add('hidden');
    if (userProfile) userProfile.classList.add('hidden');
  }
}

// ── Check Auth on Page Load ──────────────────────────────
function checkAuth() {
  const user = getUser();
  if (user) {
    onAuthStateChanged(user);
  } else {
    onAuthStateChanged(null);
    // Initialize Google Sign-In after a slight delay for SDK to load
    setTimeout(initGoogleAuth, 500);
  }
}
