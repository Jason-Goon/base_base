// src/scripts/main.js

const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');
const mobileMenu = document.getElementById('mobile-menu');

menuToggle.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
});
