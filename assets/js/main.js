const header = document.querySelector('[data-header]');
const toggle = document.querySelector('.nav-toggle');
const menu = document.querySelector('[data-nav-menu]');
const links = menu?.querySelectorAll('a') ?? [];

function setMenu(open) {
  menu?.classList.toggle('is-open', open);
  document.body.classList.toggle('menu-open', open);
  toggle?.setAttribute('aria-expanded', String(open));
  toggle?.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
}

toggle?.addEventListener('click', () => {
  setMenu(!menu?.classList.contains('is-open'));
});

links.forEach((link) => link.addEventListener('click', () => setMenu(false)));

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') setMenu(false);
});

const updateHeader = () => {
  header?.classList.toggle('is-scrolled', window.scrollY > 12);
};
updateHeader();
window.addEventListener('scroll', updateHeader, { passive: true });

const revealItems = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.14 });

  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add('is-visible'));
}
