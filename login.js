// login page

(() => {
    'use strict';

    // Fetch all forms with the 'needs-validation' class
    const forms = document.querySelectorAll('.needs-validation');

    // Loop over forms and prevent submission if invalid
    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
            }

            form.classList.add('was-validated');
        }, false);
    });
})();



let loginCreateAccount = document.querySelector(".loginform"); 
let linkToLogin = document.getElementById("hacked1");
let realpageLogin = document.querySelector(".loginaccount-small-screen");
let backsignUp = document.querySelector(".backsignUp"); // Fixed method name

linkToLogin.addEventListener("click", function (event) {
    event.preventDefault(); 
    loginCreateAccount.style.display = "none"; 
    realpageLogin.style.display = "block"; 
});

backsignUp.addEventListener("click", () => {
    loginCreateAccount.style.display = "block"; 
    realpageLogin.style.display = "none"; 
});