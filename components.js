/* ============================================================
   NOVAFINANCE — components.js
   Shared navbar + footer + canvas background.
   Edit THIS file only to update nav/footer across all pages.
   ============================================================ */

(function NovaFinanceComponents() {
  'use strict';

  const isHome = window.location.pathname === '/' ||
                 window.location.pathname.endsWith('/index.html');

  /* ══════════════════════════════════════════════
     CANVAS BACKGROUND — financial grid lines
  ══════════════════════════════════════════════ */
  function initCanvas() {
    const canvas = document.getElementById('bgCanvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    function resize() {
      canvas.width  = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    resize();
    window.addEventListener('resize', resize);

    function draw() {
      const W = canvas.width, H = canvas.height;
      ctx.clearRect(0, 0, W, H);

      // Grid lines
      ctx.strokeStyle = 'rgba(0,212,170,0.04)';
      ctx.lineWidth = 1;
      const gridSize = 60;
      for (let x = 0; x < W; x += gridSize) {
        ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, H); ctx.stroke();
      }
      for (let y = 0; y < H; y += gridSize) {
        ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke();
      }

      // Radial gradient overlay
      const g = ctx.createRadialGradient(W * 0.3, H * 0.2, 0, W * 0.3, H * 0.2, W * 0.7);
      g.addColorStop(0, 'rgba(0,212,170,0.04)');
      g.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, W, H);
    }

    draw();
    window.addEventListener('resize', draw);
  }

  /* ══════════════════════════════════════════════
     NAVBAR
  ══════════════════════════════════════════════ */
  const NAVBAR_HTML = `
<nav class="navbar" id="navbar">
  <div class="nav-inner">
    <a href="/" class="nav-logo">
      <span class="logo-icon">
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
          <polygon points="11,1 21,6 21,16 11,21 1,16 1,6" stroke="url(#nf-lg)" stroke-width="1.5" fill="none"/>
          <polyline points="5,14 9,10 13,12 17,7" stroke="url(#nf-lg)" stroke-width="1.5" fill="none" stroke-linecap="round"/>
          <defs>
            <linearGradient id="nf-lg" x1="1" y1="1" x2="21" y2="21">
              <stop stop-color="#00d4aa"/><stop offset="1" stop-color="#f5c842"/>
            </linearGradient>
          </defs>
        </svg>
      </span>
      Nova<span class="logo-accent">Finance</span>
    </a>

    <div class="nav-ticker" id="navTicker">
      <span class="nav-ticker-item"><span class="nav-ticker-sym">S&P 500</span><span class="nav-ticker-val" id="tickerSP">—</span><span class="nav-ticker-chg" id="tickerSPchg">—</span></span>
      <span style="color:rgba(255,255,255,0.1)">|</span>
      <span class="nav-ticker-item"><span class="nav-ticker-sym">EUR/USD</span><span class="nav-ticker-val" id="tickerEUR">—</span></span>
      <span style="color:rgba(255,255,255,0.1)">|</span>
      <span class="nav-ticker-item"><span class="nav-ticker-sym">BTC</span><span class="nav-ticker-val" id="tickerBTC">—</span></span>
    </div>

    <div class="nav-links">
      <a href="/#tools" class="nav-link">Tools</a>
      <a href="/#cat-calculators" class="nav-link">Calculators</a>
      <a href="/#cat-market" class="nav-link">Market</a>
      <a href="/#cat-tax" class="nav-link">Tax & Budget</a>
    </div>

    <button class="nav-burger" id="navBurger" aria-label="Menu">
      <span></span><span></span><span></span>
    </button>
  </div>
  <div class="nav-mobile" id="navMobile">
    <a href="/#tools">Tools</a>
    <a href="/#cat-calculators">Calculators</a>
    <a href="/#cat-market">Market</a>
    <a href="/#cat-tax">Tax & Budget</a>
  </div>
</nav>`;

  /* ══════════════════════════════════════════════
     FOOTER
  ══════════════════════════════════════════════ */
  const YEAR = new Date().getFullYear();
  const FOOTER_HTML = `
<footer class="footer">
  <div class="footer-inner">
    <div class="footer-brand">
      <a href="/" class="nav-logo">Nova<span class="logo-accent">Finance</span></a>
      <p>Free financial calculators and market tools. No account, no tracking, no ads — just useful tools.</p>
    </div>
    <div class="footer-links">
      <div class="fl-col">
        <div class="fl-head">Calculators</div>
        <a href="/tools/compound-interest/compound-interest.html">Compound Interest</a>
        <a href="/tools/loan-simulator/loan-simulator.html">Loan Simulator</a>
        <a href="/tools/savings-calculator/savings-calculator.html">Savings Calculator</a>
        <a href="/tools/retirement-simulator/retirement-simulator.html">Retirement Simulator</a>
      </div>
      <div class="fl-col">
        <div class="fl-head">Market</div>
        <a href="/tools/market-tracker/market-tracker.html">Market Tracker</a>
        <a href="/tools/currency-converter/currency-converter.html">Currency Converter</a>
        <a href="/tools/inflation-calculator/inflation-calculator.html">Inflation Calculator</a>
      </div>
      <div class="fl-col">
        <div class="fl-head">Tax & Budget</div>
        <a href="/tools/vat-calculator/vat-calculator.html">VAT Calculator</a>
        <a href="/tools/budget-planner/budget-planner.html">Budget Planner</a>
      </div>
      <div class="fl-col">
        <div class="fl-head">Nova Suite</div>
        <a href="https://www.novautils.net" target="_blank">NovaUtils</a>
        <a href="/legal/privacy.html">Privacy Policy</a>
        <a href="/legal/terms.html">Terms of Use</a>
      </div>
    </div>
  </div>
  <div class="footer-bottom">
    <span>© ${YEAR} NovaFinance — Free Financial Tools</span>
    <div class="footer-legal">
      <a href="/legal/privacy.html">Privacy</a>
      <span class="footer-legal-sep">·</span>
      <a href="/legal/terms.html">Terms</a>
    </div>
    <span class="footer-tag">No account · No tracking · Always free</span>
  </div>
</footer>`;

  /* ══════════════════════════════════════════════
     INJECT
  ══════════════════════════════════════════════ */
  function inject() {
    // Navbar
    const existingNav = document.getElementById('navbar');
    if (existingNav) existingNav.outerHTML = NAVBAR_HTML;
    else {
      const canvas = document.getElementById('bgCanvas');
      if (canvas) canvas.insertAdjacentHTML('afterend', NAVBAR_HTML);
      else document.body.insertAdjacentHTML('afterbegin', NAVBAR_HTML);
    }

    // Footer
    const existingFooter = document.querySelector('footer.footer');
    if (existingFooter) existingFooter.outerHTML = FOOTER_HTML;
    else document.body.insertAdjacentHTML('beforeend', FOOTER_HTML);

    // Canonical
    const canonical = document.createElement('link');
    canonical.rel  = 'canonical';
    canonical.href = 'https://www.novafinance.net' + window.location.pathname;
    document.head.appendChild(canonical);

    // Navbar scroll effect
    window.addEventListener('scroll', () => {
      document.getElementById('navbar')?.classList.toggle('scrolled', window.scrollY > 20);
    });

    // Burger
    const burger = document.getElementById('navBurger');
    const mobile = document.getElementById('navMobile');
    burger?.addEventListener('click', () => {
      mobile?.classList.toggle('open');
    });

    // Live ticker
    loadTicker();
  }

  /* ══════════════════════════════════════════════
     LIVE TICKER (Yahoo Finance via public proxy)
  ══════════════════════════════════════════════ */
  async function loadTicker() {
    try {
      // EUR/USD rate via open.er-api.com (free, no key)
      const fxRes  = await fetch('https://open.er-api.com/v6/latest/USD');
      const fxData = await fxRes.json();
      if (fxData.rates?.EUR) {
        const eur = (1 / fxData.rates.EUR).toFixed(4);
        const el = document.getElementById('tickerEUR');
        if (el) el.textContent = eur;
      }

      // BTC price via CoinGecko (free, no key)
      const btcRes  = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd');
      const btcData = await btcRes.json();
      if (btcData.bitcoin?.usd) {
        const btc = btcData.bitcoin.usd.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 });
        const el = document.getElementById('tickerBTC');
        if (el) el.textContent = btc;
      }
    } catch { /* silently fail */ }
  }

  /* ── Init ── */
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => { inject(); initCanvas(); });
  } else {
    inject(); initCanvas();
  }

}());
