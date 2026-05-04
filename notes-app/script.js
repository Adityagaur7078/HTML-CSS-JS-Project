const input = document.getElementById("noteInput");
const button = document.getElementById("addBtn");
const container = document.getElementById("notesContainer");

let notes = JSON.parse(localStorage.getItem("notes")) || [];

function renderNotes(){
container.innerHTML = "";

notes.forEach((note, index) => {

const div = document.createElement("div");
div.classList.add("note");

const text = document.createElement("p");
text.textContent = note;

const delBtn = document.createElement("button");
delBtn.textContent = "Delete";

delBtn.onclick = () => {
notes.splice(index,1);
localStorage.setItem("notes", JSON.stringify(notes));
renderNotes();
};

div.appendChild(text);
div.appendChild(delBtn);

container.appendChild(div);

});
}

button.addEventListener("click", () => {

if(input.value.trim() === "") return;

notes.push(input.value);

localStorage.setItem("notes", JSON.stringify(notes));

input.value = "";

renderNotes();
});

renderNotes();