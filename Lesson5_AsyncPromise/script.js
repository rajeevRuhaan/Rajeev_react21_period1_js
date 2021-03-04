(function () {
  window.addEventListener("DOMContentLoaded", executeScript);
  let userNameClicked = document.getElementsByTagName("a");

  function executeScript() {
    fetch("https://pokeapi.co/api/v2/pokemon?offset=0&limit=1000") // Promise
      .then((resp) => resp.json()) //
      .then((json) => {
        // users = json.results;
        // console.log(users);
        json.results.forEach(addUser);
      });
  }
  /*  .catch((err) => {
        console.log("err", err);
        console.log("An err has occured while trying to fetch random users");
      }); */

  function addUser(user) {
    const newEl = document.createElement("div");
    newEl.className = "user";
    newEl.innerHTML = `<a href="#">${user.name}</a>`;
    document.getElementById("user-List").appendChild(newEl);
  }

  usernameClicked.addEventListener();
})();
