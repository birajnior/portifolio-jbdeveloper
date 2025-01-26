document
  .querySelector("#contact-form")
  .addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("https://sua-api.com/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        alert("Mensagem enviada com sucesso!");
      } else {
        alert("Falha ao enviar a mensagem. Tente novamente.");
      }
    } catch (error) {
      alert("Ocorreu um erro. Por favro, tente novamente.");
    }
  });
