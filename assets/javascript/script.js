import {
  validacaoNome,
  validacaoEmail,
  validacaoTelefone,
  validacaoMensagem,
  validacaoSelect,
  formatarTelefone,
  validarFormulario,
} from "./validacao-form.js";
document.addEventListener("DOMContentLoaded", () => {
  // Chama as validações específicas ao sair do campo
  document
    .querySelector("#floatingNome")
    .addEventListener("blur", validacaoNome);
  document
    .querySelector("#floatingEmail")
    .addEventListener("blur", validacaoEmail);
  document
    .querySelector("#floatingTelefone")
    .addEventListener("blur", validacaoTelefone);
  document
    .querySelector("#textArea")
    .addEventListener("blur", validacaoMensagem);

  // Inicializa a formatação do telefone
  formatarTelefone();

  // Validação geral no envio do formulário
  validarFormulario();
});
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

document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll(".navbar-nav .nav-item .nav-link"); // Seleciona todos os links dentro dos itens do nav

  // Função para remover a classe 'active' de todos os itens
  const removeActiveClass = () => {
    navLinks.forEach((link) => link.classList.remove("active"));
  };

  // Adiciona um evento de clique a cada link do nav
  navLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      const targetId = link.getAttribute("href"); // Obtém o valor do href (ex: #contato)

      // Verifica se o link é uma âncora (começa com #)
      if (targetId && targetId.startsWith("#")) {
        removeActiveClass(); // Remove a classe 'active' de todos os links
        link.classList.add("active"); // Adiciona a classe 'active' ao link clicado

        // Adiciona a classe 'active' ao item pai (<li>) do link clicado
        const parentItem = link.closest(".nav-item");
        if (parentItem) {
          parentItem.classList.add("active");
        }

        // Rola a página até a seção correspondente
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth" });
        }
      }
    });
  });
});
