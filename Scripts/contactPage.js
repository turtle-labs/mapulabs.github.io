// ---------------------------------------------------------------------- //
// --------------------- Contact-Page > Contact Form -------------------- //
// ---------------------------------------------------------------------- //

// Animation if submit successful -> Also see CSS Code

const formFields = document.querySelectorAll('.formField');

EL('#contactFormSubmit').onclick = () => {

        // Checks if all input fields are valid
        if (EL('form').checkValidity()) {

            // If VALID > Submut animation
            EL('#contactFormSucces').style.display = 'flex';

            setTimeout( () => {
                EL('#contactFormSucces').style.opacity = '1';
                EL('#contactFormSuccesLogo').style.transform = 'rotateY(720deg)';
            }, 500);

        } else {

            // If INVALID > Highlight invalid fields
            for (let i = 0; i < formFields.length; i++) {
                formFields[i].classList.add('redIfInvalid');
            }

        }
}
