(function () {
  const Footer = {
    render() {
      const year = new Date().getFullYear();
      return `
      <footer class="site-footer">
        <div class="footer-wave">
          <svg viewBox="0 0 1440 60" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" fill="#2D4A35"/>
          </svg>
        </div>
        <div class="footer-body">
          <div class="footer-inner">
            <div class="footer-brand">
              <a href="/" class="footer-logo">Notepad<em>Editor</em></a>
              <p>A free, fast, and feature-rich online text editor. Write, format, and export your notes from any device — no login required.</p>
              <div class="footer-badges">
                <span class="badge">✓ Free Forever</span>
                <span class="badge">✓ No Login</span>
                <span class="badge">✓ Auto-Save</span>
              </div>
            </div>
            <div class="footer-links">
              <h4>Editor Tools</h4>
              <ul>
                <li><a href="#editor">Online Notepad</a></li>
                <li><a href="#editor">Text Editor Online</a></li>
                <li><a href="#editor">Notepad Online Free</a></li>
                <li><a href="#editor">Simple Text Editor</a></li>
              </ul>
            </div>
            <div class="footer-links">
              <h4>Features</h4>
              <ul>
                <li><a href="#features">Word Count Tool</a></li>
                <li><a href="#features">Find & Replace</a></li>
                <li><a href="#features">Download as TXT</a></li>
                <li><a href="#features">Auto Save</a></li>
              </ul>
            </div>
            <div class="footer-links">
              <h4>Resources</h4>
              <ul>
                <li><a href="#how-to-use">How to Use</a></li>
                <li><a href="#faq">FAQ</a></li>
                <li><a href="#tips">Writing Tips</a></li>
                <li><a href="#about">About</a></li>
              </ul>
            </div>
          </div>
          <div class="footer-bottom">
            <p>&copy; ${year} NotepadEditor.github.io — Free Online Notepad &amp; Text Editor. All rights reserved.</p>
            <div class="related-tools">
              <span>Also try:</span>
              <a href="https://notetxt.github.io" target="_blank" rel="noopener">NoteTxt</a>
              <a href="https://memonotepad.github.io" target="_blank" rel="noopener">Memo Notepad</a>
              <a href="https://randomwheel.github.io" target="_blank" rel="noopener">Random Wheel</a>
            </div>
          </div>
        </div>
      </footer>`;
    },
    init() {}
  };

  document.addEventListener('DOMContentLoaded', () => {
    const placeholder = document.getElementById('footer-placeholder');
    if (placeholder) {
      placeholder.innerHTML = Footer.render();
      Footer.init();
    }
  });
})();
