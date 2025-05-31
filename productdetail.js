let selector = document.querySelectorAll('.product-image-colorSection-div');
let imgSelector = document.querySelectorAll('.product-image-colorSection');
// let productimage = document.querySelectorAll('.product-image');



imgSelector.forEach(element => {
    element.addEventListener('mouseover', () => {
    element.style.border = "3px solid tomato";
    


    });
    element.addEventListener('mouseout', () => {
        element.style.border = "none";
    });
});



const mainImg = document.getElementById('main-product-image');
const originalSrc = mainImg.src;

document.querySelectorAll('.product-image-colorSection').forEach(function(smallImg) {
    smallImg.addEventListener('mouseenter', function() {
        mainImg.src = this.src;
    });
    smallImg.addEventListener('mouseleave', function() {
        mainImg.src = originalSrc;
    });
});






