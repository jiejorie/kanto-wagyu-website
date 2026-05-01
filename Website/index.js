// ===== TOGGLE BUTTON JS =====

// Initialize navigation elements
const toggle = document.getElementById('nav-toggle');
const menu = document.getElementById('nav-links');
const header = document.querySelector('header');

// Listens for a click 
toggle.addEventListener('click', () => {
    menu.classList.toggle('open');
    header.classList.toggle('nav-open');
});


// ===== NAV SCROLL =====

// Listens for a scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.nav-bar');

    // Changes navigation bar appearance after scrolling 50px
    if (window.scrollY > 50) { 
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});


// ===== MENU CATEGORIES FOOD FILTER =====

// Filters menu
function display_menu(menu_category) {
    
    // Hides all categories with the class 'menu-group'
    const category = document.getElementsByClassName("menu-group");
    for (let i = 0; i < category.length; i++) {
        category[i].style.display = "none";
    }

    // Displays the chosen category by id name
    const chosen_category = document.getElementById(menu_category);
    if (chosen_category) {
        chosen_category.style.display = "grid";
    }
}


// ===== OFFER CAROUSEL BUTTON JS =====

// Initialize slide index
let slideIndex = 1;
showSlides(slideIndex);

// Adds the slide index
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Shows current slide index
function currentSlide(n) {
    showSlides(slideIndex = n);
}

// Displays slides 
function showSlides(n) {

    // Initialize Carousel Elements
    let i;
    let slides = document.getElementsByClassName("promotion-offer");
    let dots = document.getElementsByClassName("dot");
    
    // Ensures slide index stays in range
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }

    // Hides previous slide
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // Sets an active dot
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    // Shows current slide
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}


// ===== SUPPORT FAQs =====

function toggleQuestion(btn) {

  //Find the parent FAQ container
  const question = btn.closest('.faq');
  const allQuestions = document.querySelectorAll('.faq');

  // Hide all other questions
  allQuestions.forEach(function(item) {
    if (item !== question) {
      item.classList.remove('show-text');
    }
  });

  // Toggle the clicked question
  question.classList.toggle('show-text');
}
