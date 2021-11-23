// Variables
let allPokemon = [];
const theList = document.querySelector(".pokemon-list");

// Create Pokemon
function createPokemon(data) {
    // Creating the LI
    const createLi = document.createElement("li");
    createLi.className = "pokemon";

    // Creating the img
    const createImg = document.createElement("img");
    createImg.className = "pokemon-pic";
    createImg.src = data.image;

    // Creating the text name
    const createName = document.createElement("p");
    createName.className = "pokemon-name";
    createName.innerHTML = data.name.charAt(0).toUpperCase() + data.name.slice(1);

    // Appending everything
    theList.appendChild(createLi);
    createLi.appendChild(createImg);
    createLi.append(createName);

    // Changing bg
    if (data.type === "grass") {
        createLi.style.backgroundColor = "rgb(189, 236, 182)";
    }
    if (data.type === "fire") {
        createLi.style.backgroundColor = "rgb(255, 105, 97)";
    }
    if (data.type === "water" || data.type === "ice") {
        createLi.style.backgroundColor = "rgb(173, 216, 230)";
    }
    if (data.type === "electric") {
        createLi.style.backgroundColor = "#FDFD96";
    }
    if (data.type === "poison" || data.type === "ghost") {
        createLi.style.backgroundColor = "rgb(204, 169, 221)";
    }
    if (data.type === "rock" || data.type === "fighting" || data.type === "ground") {
        createLi.style.backgroundColor = "rgb(131, 105, 83)";
    }
    if (data.type === "dragon") {
        createLi.style.backgroundColor = "rgb(255, 203, 219)";
    }
}

// Fetch pokemon
async function fetchPokemon(pokeId) {
    await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeId}`)
      .then((responde) => responde.json())
      .then((data) => {
         const pokemonObject = {
              name: data.name,
              image: data.sprites.other.home.front_default,
              type: data.types[0].type.name,
          }
          createPokemon(pokemonObject);
      })
};


// Function to get data
async function displayAllPokes() {
    for (let i = 1; i < 152; i += 1) {
        await fetchPokemon(i);
        console.log("teste");
    }
}

displayAllPokes();