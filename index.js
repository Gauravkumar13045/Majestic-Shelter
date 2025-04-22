
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



