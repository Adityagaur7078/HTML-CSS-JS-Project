const button = document.getElementById("generateBtn");
const emojiArea = document.getElementById("emojiArea");

const emojis = [
"😀","😂","😍","😎","🤖","👻","🔥","🌟","🎉","🍕",
"🐶","🐱","🚀","⚡","🌈","🍔","🍩","🦄","🐸","🎧"
];

button.addEventListener("click", () => {

emojiArea.innerHTML = "";   // remove previous emojis

for(let i = 0; i < 120; i++){

const span = document.createElement("span");

const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];

span.textContent = randomEmoji;

emojiArea.appendChild(span);

}

});