
const video = document.getElementById('hoverVideo');

video.addEventListener('mouseover', () => {
  video.play(); // Play video on hover
});

video.addEventListener('mouseout', () => {
  video.pause(); // Pause video when hover stops
});


