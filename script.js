// ============================================
// EDIT THIS CONFIG with your real payment info
// ============================================
const PAYMENT_CONFIG = {
  venmoUsername: "YOUR-VENMO-USERNAME",   // e.g. "jane-doe-22" (no @)
  paypalMeUsername: "YOUR-PAYPAL-USERNAME" // your PayPal.Me handle
};

function buildVenmoLink(amount, note) {
  const encodedNote = encodeURIComponent(note);
  return `https://venmo.com/${PAYMENT_CONFIG.venmoUsername}?txn=pay&amount=${amount}&note=${encodedNote}`;
}

function buildPaypalLink(amount) {
  return `https://paypal.me/${PAYMENT_CONFIG.paypalMeUsername}/${amount}`;
}

function wirePaymentButtons() {
  document.querySelectorAll('[data-venmo]').forEach((btn) => {
    const amount = btn.getAttribute('data-amount');
    const note = btn.getAttribute('data-note') || 'Order';
    btn.href = buildVenmoLink(amount, note);
    btn.target = "_blank";
    btn.rel = "noopener";
  });
  document.querySelectorAll('[data-paypal]').forEach((btn) => {
    const amount = btn.getAttribute('data-amount');
    btn.href = buildPaypalLink(amount);
    btn.target = "_blank";
    btn.rel = "noopener";
  });
}

function wireNavToggle() {
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');
  if (!toggle || !links) return;
  toggle.addEventListener('click', () => {
    links.classList.toggle('open');
  });
}

function wireCategoryTabs() {
  const tabButtons = document.querySelectorAll('.tab-btn');
  if (!tabButtons.length) return;
  tabButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-tab');

      tabButtons.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');

      document.querySelectorAll('.tab-panel').forEach((panel) => {
        panel.classList.toggle('active', panel.id === targetId);
      });
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  wirePaymentButtons();
  wireNavToggle();
  wireCategoryTabs();
});
