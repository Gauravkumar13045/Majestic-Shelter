// Format to use 

document.addEventListener("scroll", function () {
    document.querySelectorAll(".scroll-animation").forEach((el) => {
      let position = el.getBoundingClientRect().top;
      let windowHeight = window.innerHeight;
  
      if (position < windowHeight - 100) {
        el.classList.add("show");
      }
    });
  });