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