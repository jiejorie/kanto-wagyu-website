// ===== TOGGLE BUTTON JS =====
const toggle = document.getElementById('nav-toggle');
const menu = document.getElementById('nav-links');
const header = document.querySelector('header');

toggle.addEventListener('click', () => {
    menu.classList.toggle('open');
    header.classList.toggle('nav-open');
});

// ===== OFFER CAROUSEL BUTTON JS =====

// Declaring Global variables
let scrollContainer = document.querySelector(".gallery")
let backBtn = document.getElementById("back-btn");  
let nextBtn = document.getElementById("next-btn");

let backComputedStyle = window.getComputedStyle(backBtn);
let nextComputedStyle = window.getComputedStyle(nextBtn);


// Adding an event listener with the "wheel" event
scrollContainer.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY;
})

// Event listener that listens for a click from the Next Button, sliding left between the images
nextBtn.addEventListener("click", () => {
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft += 460;
})

// Event listener that listens for a click from the Back Button, sliding right between the images
backBtn.addEventListener("click", () => {
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft -= 460;
})


// ===== MENU CATEGORIES FOOD FILTER =====

function display_menu(menu_category) {
    const category = document.getElementsByClassName("menu-group");
    for (let i = 0; i < category.length; i++) {
        category[i].style.display = "none";
    }

    const chosen_category = document.getElementById(menu_category);
    if (chosen_category) {
        chosen_category.style.display = "grid";
    }
}