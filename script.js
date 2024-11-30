document.getElementById('login').addEventListener('input', function(event) {
    const loginValue = event.target.value;
    const loginValidation = document.getElementById('login-validation');

    let validationMessage = '';
    let isValid = true;

    if (loginValue.length < 8) {
        validationMessage = 'Login must be at least 8 characters';
        isValid = false;
    }

    if (loginValue.length > 0 && loginValue[0] !== loginValue[0].toLowerCase()) {
        validationMessage = 'First letter of the login must be lowercase';
        isValid = false;
    }

    const loginRegex = /^[a-zA-Z0-9._]+$/;
    if (!loginRegex.test(loginValue)) {
        validationMessage = 'Login can only contain letters, numbers, (.) and (_)';
        isValid = false;
    }

    if (loginValue.length >= 8 && loginValue[0] === loginValue[0].toLowerCase() && loginRegex.test(loginValue)) {
        validationMessage = 'Valid login';
        isValid = true;
    }

    loginValidation.textContent = validationMessage;
});   


document.getElementById('password').addEventListener('input', function(event) {
    const passwordValue = event.target.value;
    const passwordValidation = document.getElementById('password-validation');

    let validationMessage = '';
    let isValid = true;

    if (passwordValue.length < 8) {
        validationMessage = 'Password must be at least 8 characters';
        isValid = false;
    }

    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[._])[A-Za-z\d._]+$/;
    if (!passwordRegex.test(passwordValue)) {
        validationMessage = 'Password must contain at least one uppercase letter, one digit, and one special character (either "." or "_")';
        isValid = false;
    }

    if (passwordValue.length >= 8 && passwordRegex.test(passwordValue)) {
        validationMessage = 'Valid password';
        isValid = true;
    }

    passwordValidation.textContent = validationMessage;
});