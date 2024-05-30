// nav menu appear
document.addEventListener('DOMContentLoaded', function() {
  const hamburger = document.querySelector('.hamburger-menu');
  const navLinks = document.querySelector('.nav-links');
  
  hamburger.addEventListener('click', function() {
    navLinks.classList.toggle('active');
  });
});





// dark and light mood 
document.addEventListener('DOMContentLoaded', () => {
  const themeToggleButton = document.getElementById('theme-toggle-button');
  const themeIcon = document.getElementById('theme-icon');

  themeToggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    if (document.body.classList.contains('dark-theme')) {
      themeIcon.classList.remove('bx-sun');
      themeIcon.classList.add('bx-moon');
    } else {
      themeIcon.classList.remove('bx-moon');
      themeIcon.classList.add('bx-sun');
    }
  });
})

// aos scorll animation
AOS.init();


// image slider in team members  a
var swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  pagination: {
      el: '.swiper-pagination',
      clickable: true,
  },
  navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
  },
  breakpoints: {
      640: {
          slidesPerView: 1,
          spaceBetween: 20,
      },
      768: {
          slidesPerView: 2,
          spaceBetween: 30,
      },
      1024: {
          slidesPerView: 3,
          spaceBetween: 40,
      },
  },
});

// scroll the last menu
function scrollToTop() {
  window.scrollTo({
      top: 0,
      behavior: "smooth"
  });
}