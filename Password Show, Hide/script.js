const password = document.getElementById("password");
const eyeIcon = document.getElementById("eyeIcon");

eyeIcon.addEventListener("click", function () {

    if(password.type === "password"){
        password.type = "text";
        eyeIcon.src = "assets/eye-open.png";
    } else {
        password.type = "password";
        eyeIcon.src = "assets/eye-close.png";
    }

});