'use strict';
const nav = document.querySelector('#mainNav');
const toggle = document.querySelector('.navbar-toggler');
const menu = document.querySelector('#navbarResponsive');
const links = [...document.querySelectorAll('.nav-link')];
function closeMenu() { menu.classList.remove('show'); toggle.setAttribute('aria-expanded', 'false'); }
toggle.addEventListener('click', () => { const open = menu.classList.toggle('show'); toggle.setAttribute('aria-expanded', String(open)); });
links.forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => { if (event.key === 'Escape' && menu.classList.contains('show')) { closeMenu(); toggle.focus(); } });
window.addEventListener('resize', () => { if (window.innerWidth > 640) closeMenu(); });
function updateNav() {
  nav.classList.toggle('navbar-shrink', window.scrollY > 24);
  let current = '#page-top';
  ['services', 'about'].forEach(id => { if (document.getElementById(id).getBoundingClientRect().top <= 150) current = '#' + id; });
  links.forEach(link => { const active = link.getAttribute('href') === current; link.classList.toggle('active', active); if (active) link.setAttribute('aria-current', 'location'); else link.removeAttribute('aria-current'); });
}
window.addEventListener('scroll', updateNav, { passive: true });
updateNav();
document.getElementById('copyright-year').textContent = new Date().getFullYear();
