document.addEventListener("scroll", function () {
  document.querySelectorAll(".scroll-animation").forEach((el) => {
    let position = el.getBoundingClientRect().top;
    let windowHeight = window.innerHeight;

    if (position < windowHeight - 100) {
      el.classList.add("show");
    }
  });
});

// Select all checkboxes and their corresponding labels
let ticks = document.querySelectorAll(".tick");
let letChecks = document.querySelectorAll(".letCheck");

ticks.forEach((tick, index) => {
  tick.addEventListener("change", () => {

    if (tick.checked) {
      letChecks[index].style.fontWeight = "bold";
    } else {
      letChecks[index].style.fontWeight = "500";
    }
  });
});

// Typing effect

const words = ["Now", "Today", "More", "Fast"];
let currentIndex = 0;
const dynamicText = document.getElementById("dynamic-text");
let isDeleting = true;
let charIndex = words[currentIndex].length;

function type() {
  let currentWord = words[currentIndex];

  if (isDeleting) {
    dynamicText.textContent = currentWord.substring(0, charIndex - 1);
    charIndex--;

    if (charIndex === 0) {
      isDeleting = false;
      currentIndex = (currentIndex + 1) % words.length;
    }
  } else {
    dynamicText.textContent = words[currentIndex].substring(0, charIndex + 1);
    charIndex++;

    if (charIndex === words[currentIndex].length) {
      isDeleting = true;
      setTimeout(type, 1000);
      return;
    }
  }

  setTimeout(type, isDeleting ? 100 : 150);
}

type();


let up = document.getElementById("up");
let down = document.getElementById("down");

up.addEventListener("click", () => {
  
down.style.display="block";
up.style.display="none";


});

down.addEventListener("click", () => {
  
up.style.display="block";
down.style.display="none";


});