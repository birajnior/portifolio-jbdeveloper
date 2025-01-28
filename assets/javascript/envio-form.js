emailjs.init("thyVc0i-BBT0D-l2g");

const form = document.querySelector("#contact-form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const submitButton = form.querySelector("button[type='submit']");
  submitButton.textContent = "Enviando...";
  submitButton.desabled = true;

  emailjs.sendForm("service_oed6lhv", "template_zyacw2k", form).then(
    function () {
      alert("Formulario enviado com sucesso!");
      form.reset();
      submitButton.textContent = "Enviar";
      submitButton.desabled = false;
    },
    function (error) {
      console.error("Erro ao enviar o formulário:", error);
      alert(
        "Houve um erro ao enviar o formulário. Tente novamente mais tarde."
      );
      submitButton.textContent = "Enviar";
      submitButton.disabled = false;
    }
  );
});
