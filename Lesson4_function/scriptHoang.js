(function () {
  window.addEventListener("DOMContentLoaded", (event) => {
    console.log("Hello");

    let users = getUser();
    users.forEach(addUser);
    console.log(getOldest(users));
  });
})();

//function used to get oldest person from users
function getOldest(userObj) {
  let oldest = userObj[0];
  for (let i = 0; i < userObj.length; i++) {
    if (userObj[i].age > oldest.age) {
      oldest = userObj[i];
    }
  }
  return oldest;
}

function addUser(userObj) {
  let newRow = document.createElement("tr");
  newRow.innerHTML = `<td>${userObj.studentNo}</td>
                        <td>${userObj.name}</td>
                        <td>${userObj.age}</td>`;

  document.getElementById("table").appendChild(newRow);
}

function getUser() {
  return [
    {
      studentNo: 123,
      name: "harry",
      age: 15,
    },
    {
      studentNo: 234,
      name: "Ron",
      age: 16,
    },
    {
      studentNo: 135,
      name: "Hermione",
      age: 17,
    },
    {
      studentNo: -1,
      name: "Snape",
      age: 55,
    },
    {
      studentNo: -1,
      name: "Hagrid",
      age: 65,
    },
  ];
}
