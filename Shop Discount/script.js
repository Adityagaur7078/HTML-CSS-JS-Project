const input = document.getElementById("amount");
const button = document.getElementById("calculateBtn");
const result = document.getElementById("result");

button.addEventListener("click", () => {

    let amount = Number(input.value);
    let discount = 0;

    if (amount >= 5001 && amount <= 7000) {
        discount = 5;
    }
    else if (amount >= 7001 && amount <= 9000) {
        discount = 10;
    }
    else if (amount > 9000) {
        discount = 20;
    }

    const finalAmount = Math.floor(amount - (amount * discount / 100));

    result.textContent = `Final Price: ₹${finalAmount} (Discount: ${discount}%)`;

});