const form = document.getElementById('form');
let validate = false;
const username = document.getElementById('username');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();

    if (!validate) {
        location.replace('http://127.0.0.1:5500/?username=&email=se&phone=s')
    }

});
const setError = (element, message) => {
    validate = true;
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}
const setSuccess = element => {

    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};
const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
const validateInputs = () => {

    validate = false;

    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const phoneValue = phone.value.trim();
    

    if(usernameValue === '') {
        setError(username, 'Username is required');

    } else {
        setSuccess(username);
    }

    if(emailValue === '') {
        setError(email, 'Email is required');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
    } else {
        setSuccess(email);
    }
    
    if(phoneValue === '') {
        setError(phone, 'Phone number is required');
    } else if (phoneValue.length < 10 ) {
        setError(phone, 'Phone number must be at least 10 character.')
    } else {
        setSuccess(phone);
    }


    
};


 