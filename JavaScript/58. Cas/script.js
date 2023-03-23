let button = document.getElementsByClassName("button")[0];
let container = document.getElementById("toDoContainer");
let input = document.getElementById("input");

button.addEventListener("click", function () {
  let text = document.createElement("li");
  text.textContent = input.value;
  input.value = "";
  text.className = "lista";
  let deleteButton = document.createElement("button");
  deleteButton.className = "deletebtn";
  deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
  text.appendChild(deleteButton);
  container.appendChild(text);
  deleteButton.addEventListener("click", brisi);
  function brisi() {
    deleteButton.parentElement.remove();
  }
  text.addEventListener("dblclick", zavrseno);
  let arrZavrseni;
  function zavrseno() {
    arrZavrseni = deleteButton.parentElement;
    deleteButton.parentElement.style.textDecoration = "line-through";
    return arrZavrseni;
  }
  console.log(arrZavrseni);
});
let form = document.querySelector("form");

const select = document.querySelector(".options");
console.log(select);
const options = select.children;
console.log(options);
Array.from(options).forEach((option) => console.log(option.value));

var buttonElement = document.querySelector(".options");

buttonElement.addEventListener("click", function () {
  var selectElement = document.querySelector("select.options");
  var selectedValue = selectElement.value;
  console.log("Selektovana vrijednost je: " + selectedValue);

  console.log(container.children);
  const allItems = Array.from(container.children);
  if (selectedValue === "completed") {
    allItems.map((item) => (item.style.display = ""));
    const uncompleted = allItems.filter(
      (item) => item.style.textDecoration !== "line-through"
    );
    uncompleted.forEach((item) => (item.style.display = "none"));
  } else if (selectedValue === "uncompleted") {
    allItems.map((item) => (item.style.display = ""));
    const completed = allItems.filter(
      (item) => item.style.textDecoration === "line-through"
    );
    completed.forEach((item) => (item.style.display = "none"));
  } else {
    allItems.map((item) => (item.style.display = ""));
  }
});

// Random broj izmedju 1 i 20:
const randomBr = Math.floor(Math.random() * 20) + 1;
console.log(randomBr);
