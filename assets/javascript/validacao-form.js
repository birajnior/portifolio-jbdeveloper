// Seleciona os elementos do formulário
const form = document.querySelector("form");
const nome = document.querySelector("#floatingNome");
const email = document.querySelector("#floatingEmail");
const telefone = document.querySelector("#floatingTelefone");
const textArea = document.querySelector("#textArea");
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Validação simples de email
const selectContato = document.querySelector(".form-select");

// Função para exibir o erro
export function setError(input, mensagem) {
  input.classList.add("is-invalid");
  let errorSpan = input.nextElementSibling; // Pega o próximo elemento, caso exista (label ou mensagem)
  if (errorSpan && errorSpan.tagName === "SPAN") {
    errorSpan.textContent = mensagem;
  } else {
    // Cria um span caso não exista
    const span = document.createElement("span");
    span.className = "text-danger small";
    span.textContent = mensagem;
    input.parentNode.appendChild(span);
  }
}

// Função para remover o erro
export function removerError(input) {
  input.classList.remove("is-invalid");
  let errorSpan = input.parentNode.querySelector(".text-danger");
  if (errorSpan) {
    errorSpan.remove();
  }
}

// Validação do nome
export function validacaoNome() {
  if (nome.value.trim().length < 3) {
    setError(nome, "O nome precisa ter pelo menos 3 caracteres.");
    return false;
  } else {
    removerError(nome);
    return true;
  }
}

// Validação do email
export function validacaoEmail() {
  if (!emailRegex.test(email.value.trim())) {
    setError(email, "Insira um email válido.");
    return false;
  } else {
    removerError(email);
    return true;
  }
}

// Validação do telefone
export function validacaoTelefone() {
  const telefoneLimpo = telefone.value.replace(/\D/g, ""); // Remove caracteres não numéricos
  if (telefoneLimpo.length < 10 || telefoneLimpo.length > 11) {
    setError(telefone, "O telefone deve ter 10 ou 11 dígitos.");
    return false;
  } else {
    removerError(telefone);
    return true;
  }
}

// Validação do select
export function validacaoSelect() {
  if (selectContato.value === "") {
    selectContato.classList.add("is-invalid"); // Adiciona classe para erro visual (se usar Bootstrap)
    alert("Por favor, selecione uma preferência de contato.");
    return false;
  } else {
    selectContato.classList.remove("is-invalid");
    return true;
  }
}

// Validação da mensagem
export function validacaoMensagem() {
  if (textArea.value.trim().length < 10) {
    setError(textArea, "A mensagem precisa ter pelo menos 10 caracteres.");
    return false;
  } else {
    removerError(textArea);
    return true;
  }
}

// Formatação do telefone durante a digitação
export function formatarTelefone() {
  telefone.addEventListener("input", () => {
    let limparValor = telefone.value.replace(/\D/g, "").substring(0, 11);
    let numeros = limparValor.split("");
    let numeroFormatado = "";

    if (numeros.length > 0) {
      numeroFormatado += `(${numeros.slice(0, 2).join("")}) `;
    }

    if (numeros.length > 2) {
      numeroFormatado += `${numeros.slice(2, 7).join("")}`;
    }

    if (numeros.length > 7) {
      numeroFormatado += `-${numeros.slice(7, 11).join("")}`;
    }

    telefone.value = numeroFormatado;
  });
}

// Evento de validação no envio do formulário
export function validarFormulario() {
  form.addEventListener("submit", (event) => {
    event.preventDefault(); // Evita o envio automático do formulário

    // Executa todas as validações
    const nomeValido = validacaoNome();
    const emailValido = validacaoEmail();
    const telefoneValido = validacaoTelefone();
    const mensagemValida = validacaoMensagem();

    // Verifica se todas as validações foram bem-sucedidas
    if (nomeValido && emailValido && telefoneValido && mensagemValida) {
      alert("Formulário enviado com sucesso!");
      form.reset(); // Reseta os campos do formulário
    } else {
      alert("Por favor, corrija os erros antes de enviar.");
    }
  });
}
