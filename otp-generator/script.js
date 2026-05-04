const button = document.getElementById("generateBtn");
const otpText = document.getElementById("otp");

button.addEventListener("click", () => {

const otp = Math.floor(1000 + Math.random() * 9000);

otpText.textContent = otp;

});