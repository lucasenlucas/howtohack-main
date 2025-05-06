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

document.addEventListener('DOMContentLoaded', type);
