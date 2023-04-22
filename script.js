const validateForm = () => {
    const form = document.querySelector('form');
    const name = document.getElementById('userName');
    const password = document.getElementById('userPassword');
    const signin = document.getElementById('signInButton');
    const login = document.getElementById('loginButton');

    const showError = ( input, message ) => {
        input.classList.add("error");
        alert(message);
        console.log("Error");
    }

    const showSuccess = ( input ) => {
        input.classList.add("success");
    }

    form.addEventListener = ( 'submit', () => {
        const nameValue = name.value.trim();
        const passwordValue = password.value.trim();

        if ( nameValue === '' ) {
            showError( nameValue, "Enter a valid Name.");
        } else {
            showSuccess( nameValue );
        }

        if ( passwordValue === '' ) {
            showError( passwordValue, "Enter a valid Password.");
        } else {
            showSuccess( passwordValue );
        }
    });

    login.onclick = () => {
        formValidation();
    }

}

const myCarouselElement = document.querySelector('#myCarousel')

const carousel = new bootstrap.Carousel(myCarouselElement, {
  interval: 2000,
  touch: false
})