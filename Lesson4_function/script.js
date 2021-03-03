(function () {
  console.log("hello");
})();
function executeScript() {
  let table = document.getElementById("table");
  let row = table.insertRow();
  let cell1 = row.insertCell();
  let cell2 = row.insertCell();
  let cell3 = row.insertCell();
  cell1.innerHTML = "123";
  cell2.innerHTML = "Test Name";
  cell3.innerHTML = "99";
}
executeScript();

const users = getUsers();

users.forEach((el) => {
  addUser(el);
});

function addUser(getObj) {
  let newRow = document.createElement("tr");
  newRow.innerHTML = `<td>${getObj.studentNo}</td>
    <td>${getObj.name}</td>
    <td>${getObj.age}</td>
    <td>${getObj.studentNo > 0}</td>
    `;
  document.querySelector("#table").appendChild(newRow);
}
//Add a new function getOldest() that expects an array of userObject as parameter, when
//getOldest() is called, it iterates through the array of objects, and return the oldest person
let age = [];
users.forEach((el) => {
  let age1 = el.age;
  age.push(age1);
});
/**
 *
 * @param {sort array in descending order} arr
 * shift will get the first element of array
 */

function getOldest(arr) {
  let sort = arr.sort((a, b) => b - a);
  console.log(sort.shift());
}
getOldest(age);

//Create a new column to the table name isStaff
let newColumn = document.createElement("th");
newColumn.innerHTML = "isStaff";
document.querySelector("#title").appendChild(newColumn);

users.forEach((el) => {
  addIsstaffInfo(el);
});
function addIsstaffInfo(getObj) {
  let newRow = document.createElement("td");
  if (getObj.studentNo != -1) {
    let x = "notstaff";

    newRow.innerHTML = `<td>${x}</td>`;
    document.querySelector("tr").appendChild(newRow);
  } else {
    newRow.innerHTML = `<td>"staff"</td>`;
    document.querySelector("tr").appendChild(newRow);
  }
}
