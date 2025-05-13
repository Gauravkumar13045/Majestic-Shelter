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

let dropdownBtn = document.querySelector('.dropdownBtn');
let itemList = document.querySelectorAll('.itemList');

itemList.forEach(item => {
  item.addEventListener('click', function (){

    dropdownBtn.textContent = this.textContent
  });
});

let dropdownBtn2 = document.querySelector('.dropdownBtn2');
let itemList2 = document.querySelectorAll('.itemList2');

itemList2.forEach(item => {
  item.addEventListener('click', function (){

    dropdownBtn2.textContent = this.textContent
  });
});

let gridIcon = document.getElementById("gridIcon");
let listIcon = document.getElementById("listIcon");
let controler = document.querySelectorAll('.controler');

gridIcon.addEventListener("click", () => {
  listIcon.style.display="block";
  gridIcon.style.display="none";
  controler.style.display = "inline-block";

})

listIcon.addEventListener("click", () => {
  listIcon.style.display="none";
  gridIcon.style.display="block";
  controler.style.display = "flex";

})


// const ratingInputs = document.querySelectorAll('input[name="star"]');
//         const ratingValue = document.getElementById("ratingValue");

//         ratingInputs.forEach(input => {
//             input.addEventListener("change", () => {
//                 ratingValue.innerText = input.value;
//             });
//         });

document.querySelectorAll('.rating').forEach(rating => {
      const stars = rating.querySelectorAll('.star');
      let selectedRating = 0;

      stars.forEach(star => {
        star.addEventListener('mouseover', () => {
          const hoverValue = parseInt(star.dataset.rating);
          stars.forEach(s => {
            s.classList.toggle('hover', parseInt(s.dataset.rating) <= hoverValue);
          });
        });

        star.addEventListener('mouseout', () => {
          stars.forEach(s => s.classList.remove('hover'));
        });

        star.addEventListener('click', () => {
          selectedRating = parseInt(star.dataset.rating);
          stars.forEach(s => {
            s.classList.toggle('selected', parseInt(s.dataset.rating) <= selectedRating);
          });
          console.log('Selected rating for', rating.dataset.productId, ':', selectedRating);
        });
      });
    });


    // product manager star rating

   document.querySelectorAll('.rating2').forEach(rating => {
    const stars2 = rating.querySelectorAll('.star2');
    let selectedRating = 0;

    stars2.forEach(star => {
        star.addEventListener('mouseover', () => {
            const hoverValue = parseInt(star.dataset.rating); // ✅ Fix: Using the correct dataset property
            stars2.forEach(s => {
                s.classList.toggle('hover', parseInt(s.dataset.rating) <= hoverValue); // ✅ Fixed comparison
            });
        });

        star.addEventListener('mouseout', () => {
            stars2.forEach(s => s.classList.remove('hover'));
        });

        star.addEventListener('click', () => {
            selectedRating = parseInt(star.dataset.rating);
            stars2.forEach(s => {
                s.classList.toggle('selected', parseInt(s.dataset.rating) <= selectedRating); // ✅ Fix: Using correct dataset reference
            });
            console.log('Selected rating for', rating.dataset.productId, ':', selectedRating);
        });
    });
});