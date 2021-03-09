(function () {
  window.addEventListener("DOMContentLoaded", executeScript);
  const POKEMON_URL = "https://pokeapi.co/api/v2/pokemon?offset=0&limit=1000";

  let pokemons = [];

  async function executeScript() {
    let resp = await fetch(POKEMON_URL); // Promise
    let json = await resp.json(); //

    pokemons = json.results;
    pokemons.forEach(addUser);

    document.querySelectorAll(".user .name").forEach((el) => {
      el.addEventListener("click", async (e) => {
        let resp = await fetch(e.target.getAttribute("data-url"));
        let json = await resp.json();
        document
          .getElementById("current-pokemon")
          .setAttribute("src", json.sprites.front_default);
      });
    });
  }
  /*  .catch((err) => {
        console.log("err", err);
        console.log("An err has occured while trying to fetch random users");
      }); */

  function addUser(user) {
    const newEl = document.createElement("div");
    newEl.className = "user";
    newEl.innerHTML = `<div class="name" data-url="${user.url}">${user.name}</div>`;
    document.getElementById("user-List").appendChild(newEl);
  }

  //usernameClicked.addEventListener();
})();
