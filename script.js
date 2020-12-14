const buttons = document.querySelectorAll("div#pokemon button");
const name = document.querySelector("#name");
const picture = document.querySelector("#picture");
const type = document.querySelector("#type");
const height = document.querySelector("#height");

for (let button of buttons) {
  button.addEventListener("click", getPokemon);
}

async function getPokemon() {
  const response = await fetch(
    "https://pokeapi.co/api/v2/pokemon/" + this.textContent
  );
  const data = await response.json();
  name.textContent = data.name;
  picture.src = data.sprites.front_default;
  type.textContent =
    `type: ${data.types[0].type.name}` +
    (data.types.length > 1 ? ` and ${data.types[1].type.name}` : "");
  height.textContent = `height: ${data.height} decimetres`;
}
