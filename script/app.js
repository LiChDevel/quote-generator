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
  ["El obstáculo es el camino.", "Marco Aurelio"],
  ["No es la muerte lo que un hombre debe temer, sino no comenzar a vivir.", "Marco Aurelio"],
  ["Sufrimos más en la imaginación que en la realidad.", "Séneca"],
  ["No es lo que te sucede, sino cómo reaccionas a ello lo que importa.", "Epicteto"],
  ["Quien te enoja, te conquista.", "Epicteto"],
  ["El hombre conquista el mundo conquistándose a sí mismo.", "Zenón de Citio"],
  ["La mejor venganza es no ser como tu enemigo.", "Marco Aurelio"],
  ["Las dificultades fortalecen la mente, así como el trabajo fortalece el cuerpo.", "Séneca"],
  ["Si un hombre no sabe a qué puerto se dirige, ningún viento le es favorable.", "Séneca"],
  ["No pierdas más tiempo discutiendo sobre lo que es un buen hombre. Sé uno.", "Marco Aurelio"]
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
