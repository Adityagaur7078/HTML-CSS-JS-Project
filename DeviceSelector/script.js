const select = document.getElementById("deviceSelect");
const heading = document.querySelector("h1");

select.addEventListener("change", (a) => {
    heading.textContent = `${a.target.value} Device Selected`;

    heading.classList.add("change");

    setTimeout(() => {
        heading.classList.remove("change");
    }, 200);
});