const target = document.querySelector('.typewriter');
const text = "Welkom bij How to Hack";
let i = 0;

function type() {
  if (i < text.length) {
    target.textContent += text.charAt(i);
    i++;
    setTimeout(type, 80);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  type();
  setupScrollAnimations();
});

function setupScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in');
      }
    });
  }, {
    threshold: 0.1
  });

  const elementsToAnimate = document.querySelectorAll('.feature-card, .blog-placeholder');
  elementsToAnimate.forEach(el => {
    observer.observe(el);
  });
}
