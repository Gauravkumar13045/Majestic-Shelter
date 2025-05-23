document.addEventListener("scroll", function () {
    document.querySelectorAll(".scroll-animation").forEach((el) => {
        let position = el.getBoundingClientRect().top;
        let windowHeight = window.innerHeight;

        if (position < windowHeight - 100) {
            el.classList.add("show");
        }
    });
});


AOS.init({ duration: 1000 });

// Reveal elements smoothly on scroll
document.addEventListener("scroll", function () {
    document.querySelectorAll(".event").forEach(event => {
        let rect = event.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.8) {
            event.classList.add("visible");
        }
    });
});

