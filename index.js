
const video = document.getElementById('hoverVideo');

document.querySelector("video").addEventListener("mouseover", () => {
  let video = document.querySelector("video");
  video.play();
});

document.querySelector("video").addEventListener("mouseleave", () => {
  let video = document.querySelector("video");
  video.pause();
});





