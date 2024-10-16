const form = document.getElementById('login-form');
const passwordInput = document.getElementById('password-input');
const messageDiv = document.getElementById('message');

window.onload = () => {
    passwordInput.focus();
};

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const passwordValue = passwordInput.value.trim();
    if (passwordValue === '') {
        showMessage('Please enter the password.', 'error');
        return;
    }
    passwordInput.disabled = true;
    form.querySelector('button').disabled = true;
    setTimeout(() => {
        if (passwordValue.toLowerCase() === decryptPassword()) {
            showMessage('Access Granted! Virus deactivated successfully.', 'success');
        } else {
            showMessage('Incorrect Password. Please try again.', 'error');

            passwordInput.disabled = false;
            form.querySelector('button').disabled = false;
            passwordInput.focus();
        }
    }, 1000);
});

function decryptPassword() {
    let charCodes = [-2, 17, 8, 8, 0, 11, 3, 15];
    let password = '';
    for (let i = 0; i < charCodes.length; i++) {
        password += String.fromCharCode(100 + charCodes[i]);
    }
    return password;
}

function showMessage(message, status) {
    messageDiv.textContent = message;
    messageDiv.className = status;
    messageDiv.style.opacity = 0;
    let opacity = 0;
    const fadeIn = setInterval(() => {
        if (opacity >= 1) {
            clearInterval(fadeIn);
        } else {
            opacity += 0.1;
            messageDiv.style.opacity = opacity;
        }
    }, 30);
}