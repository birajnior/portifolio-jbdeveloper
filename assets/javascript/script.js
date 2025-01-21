const inputCheck = document.querySelector("#modoNoturno");
const elemento = document.querySelector("body");

inputCheck.addEventListener("click", () => {
  const modo = inputCheck.checked ? "dark" : "light";
  elemento.setAttribute("data-bs-theme", modo);
});

// Seleciona todos os inputs do tipo checkbox e radio
document
  .querySelectorAll('input[type="checkbox"], input[type="radio"]')
  .forEach(function (input) {
    input.addEventListener("click", function () {
      // Remove o foco do input
      input.blur();
    });
  });
