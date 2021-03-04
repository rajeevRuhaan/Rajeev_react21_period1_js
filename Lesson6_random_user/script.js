(function () {
  document.addEventListener("DOMContentLoaded", executeScript);

  function executeScript() {
    fetch("https://randomuser.me/api/?results=10")
      .then((resp) => resp.json())
      .then((json) => {
        json.results.forEach(addUser);
      });
  }

  function addUser(user) {
    const newEl = document.createElement("div");
    newEl.className = "user";
    newEl.innerHTML = `
        <div class="profile-image">
            <img src="${user.picture.large}"/>
        </div>
        <div class="first-name">${user.name.first}</div>
        <div class="last-name">${user.name.last}</div>
        <div class="email">${user.email}</div>
        <div class="phone">${user.phone}2</div>
    `;
    document.getElementById("user-List").appendChild(newEl);
  }
})();
