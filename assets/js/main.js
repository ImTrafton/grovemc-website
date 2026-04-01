const navItems = [
  { href: 'index.html', label: 'Home', key: 'home' },
  { href: 'forums.html', label: 'Forums', key: 'forums' },
  { href: 'store.html', label: 'Store', key: 'store' },
  { href: 'vote.html', label: 'Vote', key: 'vote' },
  { href: 'wiki.html', label: 'Wiki', key: 'wiki' },
];

function renderHeader() {
  const page = document.body.dataset.page;
  const header = document.getElementById('site-header');
  header.innerHTML = `
    <header class="site-header">
      <div class="container nav">
        <a class="brand" href="index.html">Grove<span>MC</span></a>
        <button id="menu-btn" class="btn menu-btn" aria-label="Toggle menu">Menu</button>
        <nav id="main-nav" class="nav-links" aria-label="Main navigation">
          ${navItems
            .map(
              (item) => `<a class="nav-link ${item.key === page ? 'active' : ''}" href="${item.href}">${item.label}</a>`
            )
            .join('')}
          <span class="server-chip">IP: play.grovemc.net</span>
          <a class="btn btn-primary" href="index.html#join">Play</a>
        </nav>
      </div>
    </header>`;

  const menuBtn = document.getElementById('menu-btn');
  const nav = document.getElementById('main-nav');
  menuBtn?.addEventListener('click', () => nav.classList.toggle('open'));
}

function renderFooter() {
  const footer = document.getElementById('site-footer');
  footer.innerHTML = `
    <footer class="site-footer">
      <div class="container footer-grid">
        <div>
          <h4>GroveMC</h4>
          <p class="muted">Premium Minecraft progression server built for competitive longevity.</p>
        </div>
        <div>
          <h4>Explore</h4>
          <a href="index.html">Home</a>
          <a href="forums.html">Forums</a>
          <a href="wiki.html">Wiki</a>
        </div>
        <div>
          <h4>Community</h4>
          <a href="vote.html">Vote</a>
          <a href="#">Discord (Soon)</a>
          <a href="#">X / Twitter (Soon)</a>
        </div>
        <div>
          <h4>Legal</h4>
          <a href="#">Terms</a>
          <a href="#">Privacy</a>
          <a href="#">Refund Policy</a>
        </div>
      </div>
    </footer>`;
}

function setupCopyIp() {
  const button = document.getElementById('copy-ip');
  const ip = document.getElementById('server-ip')?.textContent;
  if (!button || !ip) return;

  button.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(ip);
      button.textContent = 'Copied';
      setTimeout(() => (button.textContent = 'Copy IP'), 1300);
    } catch {
      button.textContent = 'Copy failed';
    }
  });
}

renderHeader();
renderFooter();
setupCopyIp();
