// Mobile menu
function toggleMenu() {
  document.getElementById("navMenu").classList.toggle("show");
}

// Dark / Light
function toggleTheme() {
  document.body.classList.toggle("dark");
}

// Sticky shadow
const header = document.querySelector("header");
window.addEventListener("scroll", () => {
  header.classList.toggle("scrolled", window.scrollY > 20);
});

// ScrollTrigger-style animation
const animated = document.querySelectorAll("[data-animate]");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
    }
  });
}, { threshold: 0.2 });

animated.forEach(el => observer.observe(el));