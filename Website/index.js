// ===== TOGGLE BUTTON JS =====
const toggle = document.getElementById('nav-toggle');
const menu = document.getElementById('nav-links');
const header = document.querySelector('header');

toggle.addEventListener('click', () => {
    menu.classList.toggle('open');
    header.classList.toggle('nav-open');
});