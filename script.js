// Scroll Reveal
// Watches for elements with class "reveal" and adds "visible" when they scroll into view

const reveals = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      // Stagger the animation slightly for each element
      setTimeout(() => {
        entry.target.classList.add('visible');
      }, i * 80);
      // Stop watching once it's visible
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

reveals.forEach(el => observer.observe(el));