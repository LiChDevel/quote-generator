//Elementos del DOM

let cita = document.getElementById("cita");
let autor = document.getElementById("autor");
const button = document.getElementById("nuevaCita");

//frases
const citas = [
  ["The only way to do great work is to love what you do.",
    "Steve Jobs"
  ],
  [
    "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    "Winston Churchill"
  ],
  [
    "Believe you can and you're halfway there.",
    "Theodore Roosevelt",
  ],
  [
    "Do what you can, with what you have, where you are.",
    "Theodore Roosevelt",
  ],
  [
    "It always seems impossible until it’s done.",
    "Nelson Mandela",
  ],
  [
    "We are what we repeatedly do. Excellence, then, is not an act, but a habit.",
    "Aristotle",
  ],
  [
    "Opportunities don't happen. You create them.",
    "Chris Grosser",
  ],
  [
    "Do not go where the path may lead, go instead where there is no path and leave a trail.",
    "Ralph Waldo Emerson",
  ],
  ["The obstacle is the way.", "Marcus Aurelius"],
  ["It is not death that a man should fear, but he should fear never beginning to live.", "Marcus Aurelius"],
  ["We suffer more in imagination than in reality.", "Seneca"],
  ["It’s not what happens to you, but how you react to it that matters.", "Epictetus"],
  ["He who angers you conquers you.", "Epictetus"],
  ["Man conquers the world by conquering himself.", "Zeno of Citium"],
  ["The best revenge is not to be like your enemy.", "Marcus Aurelius"],
  ["Difficulties strengthen the mind, just as labor strengthens the body.", "Seneca"],
  ["If a man does not know to which port he is sailing, no wind is favorable.", "Seneca"],
  ["Stop wasting your time debating what a good man should be. Be one.", "Marcus Aurelius"]
];

//función ejecutada
function generarRandonNum() {
  let randonNumber = Math.floor(Math.random() * citas.length) + 1;
  return randonNumber;
}

//Trigger
button.addEventListener("click", () => {
  let citaRandom = generarRandonNum();
  cita.textContent = citas[citaRandom][0];
  autor.textContent = citas[citaRandom][1];
});
