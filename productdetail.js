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

// pincode checker

  document.querySelector(".dropdown-content").addEventListener("click", function(e) {
    e.stopPropagation(); // Prevent dropdown from closing
  });


async function findPincode(){
    const pin = document.getElementById("pincodeInput").value.trim();
    const resultCode = document.getElementById("result");
    resultCode.innerHTML = "";

    if(!pin.match(/^\d{6}$/)){
        resultCode.innerHTML = "<p class='error'>Please enter a valid 6-digit pincode.</p>";
        return;
    }

    try{
        const response = await fetch(`https://api.postalpincode.in/pincode/${pin}`);
        const data = await response.json();
        const today = new Date();
        today.setDate(today.getDate() + 5);

const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
const formatted = today.toLocaleDateString('en-GB', options);


        if(data[0].Status === "Success"){
          const postOffice = data[0].PostOffice[0];
          resultCode.innerHTML = `
           <p><strong>City:</strong> ${postOffice.District}</p>
            <p><strong>State:</strong> ${postOffice.State}</p>
            <p><strong>Post Office:</strong> ${postOffice.Name}</p>
            <P class = "div-date1">Delivery by <span class = "div-date" >  ${formatted} </span></p>
          `
        }else{
            resultCode.innerHTML = "<p class='error'>No data found for this pincode.</p>";
        }
    }catch(error){
        console.error(error);
        resultCode.innerHTML = "<p class='error'>Failed to fetch data. Try again later.</p>"
    }
}




