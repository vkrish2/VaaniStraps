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
  wireImageToggles();
  wireNavToggle();
  wireCategoryTabs();
});
