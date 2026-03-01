const passwordBox = document.getElementById("passwordBox");
const length = 12;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "@#$%^&*()_+~|}{[]></-=";

const addCharcters = upperCase + lowerCase + numbers + symbols;

const eyeIcon = document.getElementById("eyeIcon");



// Generate Password

function createPassword() {
    let password = "";



    password += upperCase[Math.floor(Math.random() * upperCase.length)];

    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];

    password += numbers[Math.floor(Math.random() * numbers.length)];

    password += symbols[Math.floor(Math.random() * symbols.length)];

    while (password.length < length) {
        password += addCharcters[Math.floor(Math.random() * addCharcters.length)];
    }

    passwordBox.value = password;
    
    return password;
}


function copyPassword() {
    if (passwordBox.value === "") {
        alert("Generate a password first!");
        return;
    } else {
        passwordBox.select();
        document.execCommand("copy")
        alert("Password copied!")
    }
}


eyeIcon.addEventListener("click", () => {
    if (passwordBox.type === "password") {
        passwordBox.type = "text";
        eyeIcon.textContent = "🙈"; // Now password visible
    } else {
        passwordBox.type = "password";
        eyeIcon.textContent = "👁️"; // Now password hidden
    }
});