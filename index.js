
const video = document.getElementById('hoverVideo');

document.querySelector("video").addEventListener("mouseover", () => {
  let video = document.querySelector("video");
  video.play();
});

document.querySelector("video").addEventListener("mouseleave", () => {
  let video = document.querySelector("video");
  video.pause();
});

// countdown timer

// Set the target end date and time for the countdown
const targetDate = new Date("2025-05-01T23:59:59").getTime();

// Update the countdown every second
const countdownInterval = setInterval(() => {
  const now = new Date().getTime();
  const timeRemaining = targetDate - now;

  if (timeRemaining > 0) {
    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;
  } else {
    clearInterval(countdownInterval);
    document.querySelector("h1").innerText = "Offer Has Ended!";
    document.querySelector(".d-flex").style.display = "none";
  }
}, 1000);

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






