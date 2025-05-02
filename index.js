
const video = document.getElementById('hoverVideo');

document.querySelector("video").addEventListener("mouseover", () => {
  let video = document.querySelector("video");
  video.play();
});

document.querySelector("video").addEventListener("mouseleave", () => {
  let video = document.querySelector("video");
  video.pause();
});



// Function to animate the count
// Function to animate the count
function animateCount(elementId, start, end, duration, step = 10) {
  const element = document.querySelector(`.${elementId}`);
  const range = end - start;
  const stepTime = Math.abs(Math.floor(duration / range));
  let current = start;
  const timer = setInterval(() => {
    current += step; // Increment by the specified step
    element.textContent = current;
    if (current >= end) {
      element.textContent = end; // Ensure the final value is correct
      clearInterval(timer);
    }
  }, stepTime);
}

// Function to check if an element is visible in the viewport
// Flag to ensure counting starts only once
let hasAnimated = false;

// Function to animate the count
function animateCount(elementId, start, end, duration, step = 10) {
  const element = document.querySelector(`.${elementId}`);
  const range = end - start;
  const stepTime = Math.abs(Math.floor(duration / range));
  let current = start;
  const timer = setInterval(() => {
    current += step; // Increment by the specified step
    element.textContent = current;
    if (current >= end) {
      element.textContent = end; // Ensure the final value is correct
      clearInterval(timer);
    }
  }, stepTime);
}

// Function to check if an element is visible in the viewport
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return rect.top <= window.innerHeight && rect.bottom >= 0;
}

// Add the scroll listener
window.addEventListener("scroll", () => {
  const quantityConsumer = document.querySelector(".quantityConsumer");
  if (!hasAnimated && isInViewport(quantityConsumer)) {
    // Start counting when the section is in view
    animateCount("project1", 0, 1280, 1100);
    animateCount("project2", 0, 1420, 1100);
    animateCount("employee", 0, 100, 3000,);
    animateCount("employee2", 0, 3000, 1100);

    // Set the flag to true so animation doesn't trigger again
    hasAnimated = true;
  }
});


const toastTrigger = document.getElementById('liveToastBtn')
const toastLiveExample = document.getElementById('liveToast')

if (toastTrigger) {
  const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
  toastTrigger.addEventListener('click', () => {
    toastBootstrap.show()
  })
}


document.addEventListener("scroll", function () {
  document.querySelectorAll(".scroll-animation").forEach((el) => {
      let position = el.getBoundingClientRect().top;
      let windowHeight = window.innerHeight;

      if (position < windowHeight - 100) {
          el.classList.add("show");
      }
  });
});




