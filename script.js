function wireImageToggles() {
  document.querySelectorAll('.image-toggle').forEach((toggle) => {
    const img = toggle.parentElement.querySelector('img');
    toggle.querySelectorAll('.img-toggle-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        toggle.querySelectorAll('.img-toggle-btn').forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');
        img.src = btn.dataset.image;
      });
    });
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

function wireQuantitySteppers() {
  const MIN_QTY = 0;
  const MAX_QTY = 5;

  document.querySelectorAll('.qty-stepper').forEach((stepper) => {
    const valueEl = stepper.querySelector('.qty-value');
    const decBtn = stepper.querySelector('.qty-decrement');
    const incBtn = stepper.querySelector('.qty-increment');
    let qty = parseInt(valueEl.textContent, 10) || 0;

    const render = () => {
      valueEl.textContent = qty;
      decBtn.disabled = qty <= MIN_QTY;
      incBtn.disabled = qty >= MAX_QTY;
    };

    decBtn.addEventListener('click', () => {
      qty = Math.max(MIN_QTY, qty - 1);
      render();
    });
    incBtn.addEventListener('click', () => {
      qty = Math.min(MAX_QTY, qty + 1);
      render();
    });

    render();
  });
}

function activateTab(targetId) {
  document.querySelectorAll('.tab-btn').forEach((b) => {
    b.classList.toggle('active', b.getAttribute('data-tab') === targetId);
  });
  document.querySelectorAll('.tab-panel').forEach((panel) => {
    panel.classList.toggle('active', panel.id === targetId);
  });
}

function wireCategoryTabs() {
  const tabButtons = document.querySelectorAll('.tab-btn');
  if (!tabButtons.length) return;
  tabButtons.forEach((btn) => {
    btn.addEventListener('click', () => activateTab(btn.getAttribute('data-tab')));
  });
}

function wireSizingGuideLinks() {
  document.querySelectorAll('.sizing-guide-link').forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      activateTab('sizing');
      document.querySelector('.category-nav')?.scrollIntoView({ behavior: 'smooth' });
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  wireImageToggles();
  wireNavToggle();
  wireCategoryTabs();
  wireQuantitySteppers();
  wireSizingGuideLinks();
});
