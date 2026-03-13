const button = document.getElementById("generateBtn");
const emojiArea = document.getElementById("emojiArea");

const emojis = [
"😀","😂","😍","😎","🤖","👻","🔥","🌟","🎉","🍕",
"🐶","🐱","🚀","⚡","🌈","🍔","🍩","🦄","🐸","🎧"
];

button.addEventListener("click", () => {

emojiArea.innerHTML = "";

for(let i = 0; i < 120; i++){

const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];

const span = document.createElement("span");
span.textContent = randomEmoji;

emojiArea.appendChild(span);

}

});