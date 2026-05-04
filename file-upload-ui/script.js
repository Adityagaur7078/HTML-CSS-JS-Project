const uploadBox = document.getElementById("btn");
const input = document.getElementById("fileInput");

uploadBox.addEventListener("click", () => {
    input.click();
});

input.addEventListener("change", (e) => {
    const file = e.target.files[0];

    if(file){
        uploadBox.textContent = file.name;
        uploadBox.classList.add("active");
    }
});