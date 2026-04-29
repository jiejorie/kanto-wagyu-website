// ===== TOGGLE BUTTON JS =====
const toggle = document.getElementById('nav-toggle');
const menu = document.getElementById('nav-links');
const header = document.querySelector('header');

toggle.addEventListener('click', () => {
    menu.classList.toggle('open');
    header.classList.toggle('nav-open');
});

// ===== MENU CATEGORIES FOOD FILTER =====

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

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}


function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("promotion-offer");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
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

  allQuestions.style.animation = "showAnswer 1s ease";
}

window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    // Select the navigation bar element correctly
    const nav = document.querySelector(".nav-bar"); 
    
    if(!nav) {console.log("no nav")};

    // Check scroll position from the top
    if (window.scrollY > 0) {
        nav.classList.add("black-nav");
    } else {
        nav.classList.remove("black-nav");
    }
}
