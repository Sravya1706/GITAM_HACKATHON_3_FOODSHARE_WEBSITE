function showForm(formId) {
    document.getElementById('mainForm').style.display = 'none';
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('registerForm').style.display = 'none';
    document.getElementById('indiaMap').style.display = 'none';
    document.getElementById('moreAboutUs').style.display = 'none';

    if (formId === 'loginForm') {
        document.getElementById('bgImage').style.backgroundImage = 'url("https://i.pinimg.com/564x/38/b2/f8/38b2f85438d1151108564f05a8dafa4e.jpg")';
    } else if (formId === 'registerForm') {
        document.getElementById('bgImage').style.backgroundImage = 'url("https://i.pinimg.com/564x/0b/af/8b/0baf8bc6414905994c28607a79ad7461.jpg")';
    } else if (formId === 'moreAboutUs') {
        document.getElementById('bgImage').style.backgroundImage = 'url("https://marvel-b1-cdn.bc0a.com/f00000000210829/www.lionsclubs.org/sites/default/files/styles/full_width_image/public/wordpress/2016/11/feeding-hungry.png?itok=Pch3c15a")';
    } else if (formId === 'indiaMap') {
        document.getElementById('bgImage').style.filter = 'blur(8px)';
    }

    document.getElementById(formId).style.display = 'block';
}

function checkLoginForm() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    document.getElementById('loginSubmit').disabled = !username || !password;
}

function checkRegisterForm() {
    const name = document.getElementById('name').value;
    const dob = document.getElementById('dob').value;
    const passwordReg = document.getElementById('passwordReg').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const type = document.querySelector('input[name="type"]:checked');

    let valid = name && dob && passwordReg && confirmPassword && type;
    if (type) {
        if (type.value === 'business') {
            const businessName = document.getElementById('businessName').value;
            const location = document.getElementById('location').value;
            const registerNumber = document.getElementById('registerNumber').value;
            valid = valid && businessName && location && registerNumber;
        } else if (type.value === 'ngo') {
            const ngoName = document.getElementById('ngoName').value;
            const ngoLocation = document.getElementById('ngoLocation').value;
            const ngoRegNumber = document.getElementById('ngoRegNumber').value;
            valid = valid && ngoName && ngoLocation && ngoRegNumber;
        }
    }

    const hasUpperCase = /[A-Z]/.test(passwordReg);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(passwordReg);
    const passwordsMatch = passwordReg === confirmPassword;
    valid = valid && hasUpperCase && hasSpecialChar && passwordsMatch;

    document.getElementById('registerSubmit').disabled = !valid;
}

function showExtraFields(type) {
    document.getElementById('businessFields').style.display = (type === 'business') ? 'block' : 'none';
    document.getElementById('ngoFields').style.display = (type === 'ngo') ? 'block' : 'none';
    checkRegisterForm();
}

function checkPassword() {
    const passwordReg = document.getElementById('passwordReg').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const hasUpperCase = /[A-Z]/.test(passwordReg);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(passwordReg);
    const passwordsMatch = passwordReg === confirmPassword;
    document.getElementById('registerSubmit').disabled = !(hasUpperCase && hasSpecialChar && passwordsMatch);
    checkRegisterForm();
}

function register() {
    // Simulate registration logic
    showForm('indiaMap');
}

function loginAndShowMore() {
    // Simulate login functionality here
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('moreAboutUs').style.display = 'block';
    document.getElementById('bgImage').style.filter = 'blur(8px)';
}

function goToNextPage() {
    window.location.href = 'chatbot.html';
}

// Initial background image for the main form
document.getElementById('bgImage').style.backgroundImage = 'url("https://www.compassion.com/multimedia/hunger-in-asia.jpg")';
