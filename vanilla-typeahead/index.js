const characters = [];
const list = document.getElementById("list");
const search = document.querySelector("input");
let selected = document.createElement("li");
console.dir(search);

fetch = fetch("https://www.swapi.co/api/people")
  .then(response => response.json())
  .then(response => {
    characters.push(...response.results);
  });

function render(arr) {
  const html = arr.join("");
  list.innerHTML = html;
}

function filterText() {
  const filtered = characters
    .filter(val => val.name.toLowerCase().includes(this.value.toLowerCase()))
    .map(val => `<li>${val.name}</li>`);
  if (filtered.length > 0) {
    render(filtered);
  } else {
    list.innerHTML = "";
  }
}

function hideList() {
  if (search.value === "" || list.innerHTML === "") {
    list.style.display = "none";
  } else {
    list.style.display = "block";
  }
}

function selector(selected) {}

list.style.display = "none";
search.addEventListener("keyup", filterText);
search.addEventListener("keyup", hideList);
