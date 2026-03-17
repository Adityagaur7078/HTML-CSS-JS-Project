const input = document.getElementById("noteInput");
const button = document.getElementById("addBtn");
const container = document.getElementById("notesContainer");

button.addEventListener("click", () => {

if(input.value.trim() === "") return;

const div = document.createElement("div");
div.classList.add("note");
div.textContent = input.value;

container.appendChild(div);

input.value = "";

});