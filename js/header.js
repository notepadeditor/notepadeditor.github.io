(function () {
  const Header = {
    render() {
      return `
      <header class="site-header" id="site-header">
        <div class="header-inner">
          <a href="/" class="logo" aria-label="Notepad Editor Home">
            <span class="logo-icon">
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="4" y="2" width="20" height="24" rx="2" fill="#4A7C59" opacity="0.15"/>
                <rect x="4" y="2" width="20" height="24" rx="2" stroke="#4A7C59" stroke-width="1.5"/>
                <line x1="8" y1="9" x2="20" y2="9" stroke="#4A7C59" stroke-width="1.5" stroke-linecap="round"/>
                <line x1="8" y1="13" x2="20" y2="13" stroke="#4A7C59" stroke-width="1.5" stroke-linecap="round"/>
                <line x1="8" y1="17" x2="16" y2="17" stroke="#4A7C59" stroke-width="1.5" stroke-linecap="round"/>
                <circle cx="21" cy="21" r="5" fill="#C8A951"/>
                <line x1="21" y1="19" x2="21" y2="23" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
                <line x1="19" y1="21" x2="23" y2="21" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
              </svg>
            </span>
            <span class="logo-text">Notepad<em>Editor</em></span>
          </a>
          <nav class="main-nav" id="main-nav" role="navigation" aria-label="Main navigation">
            <ul>
              <li><a href="#editor">Editor</a></li>
              <li><a href="#features">Features</a></li>
              <li><a href="#how-to-use">How to Use</a></li>
              <li><a href="#faq">FAQ</a></li>
            </ul>
          </nav>
          <div class="header-cta">
            <a href="#editor" class="btn-primary">Open Editor</a>
          </div>
          <button class="nav-toggle" id="nav-toggle" aria-label="Toggle navigation" aria-expanded="false">
            <span></span><span></span><span></span>
          </button>
        </div>
      </header>`;
    },
    init() {
      const toggle = document.getElementById('nav-toggle');
      const nav = document.getElementById('main-nav');
      const header = document.getElementById('site-header');
      if (toggle && nav) {
        toggle.addEventListener('click', () => {
          const expanded = toggle.getAttribute('aria-expanded') === 'true';
          toggle.setAttribute('aria-expanded', String(!expanded));
          nav.classList.toggle('open');
          toggle.classList.toggle('active');
        });
        nav.querySelectorAll('a').forEach(link => {
          link.addEventListener('click', () => {
            nav.classList.remove('open');
            toggle.classList.remove('active');
            toggle.setAttribute('aria-expanded', 'false');
          });
        });
      }
      if (header) {
        window.addEventListener('scroll', () => {
          header.classList.toggle('scrolled', window.scrollY > 40);
        });
      }
    }
  };

  document.addEventListener('DOMContentLoaded', () => {
    const placeholder = document.getElementById('header-placeholder');
    if (placeholder) {
      placeholder.innerHTML = Header.render();
      Header.init();
    }
  });
})();
