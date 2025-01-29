const form = document.querySelector("#contact-form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const submitButton = form.querySelector("button[type='submit']");
  submitButton.textContent = "Enviando...";
  submitButton.disabled = true;

  emailjs.sendForm("service_oed6lhv", "template_zyacw2k", form).then(
    function () {
      // Reseta o formulário
      form.reset();
      submitButton.textContent = "Enviar";
      submitButton.disabled = false;

      // Exibe o modal de sucesso
      const successModal = new bootstrap.Modal(
        document.getElementById("successModal")
      );
      successModal.show();
    },
    function (error) {
      console.error("Erro ao enviar o formulário:", error);

      // Exibe o modal de erro
      const errorModal = new bootstrap.Modal(
        document.getElementById("errorModal")
      );
      errorModal.show();

      submitButton.textContent = "Enviar";
      submitButton.disabled = false;
    }
  );
});
