function generatePoem(event) {
  event.preventDefault();
  alert("generatePoem");
}
let poemformElement = document.querySelector("#poem-generator-form");
poemformElement.addEventListener("submit", generatePoem);
