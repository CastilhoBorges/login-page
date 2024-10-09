"use strict";

const form = document.querySelector("form");
const senha = document.querySelector("#password").value;

// Verificar dados antes de mandar para o backend
form.addEventListener("submit", (event) => {
  // Expressão regular para validar a senha
  const senhaPadrao =
    /^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&*])[A-Za-z0-9@#$%^&*]{8,16}$/;

  // Validação da senha
  if (!senha.match(senhaPadrao)) {
    alert(
      "Sua senha deve conter pelo menos 1 letra maiuscula, um numero, um caractere especial e entre 8 à 16 caracteres"
    );
    event.preventDefault();
    return;
  }
});

// Enviando os dados para o server como JSON e recebendo
form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const email = document.querySelector("#email").value;

  // Criando o JSON
  const dadosDocadastro = {
    email: email,
    senha: senha,
  };

  try {
    // Enviar o JSON ao servidor como string 
    const response = await fetch("/submit", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(dadosDocadastro),
    });

    // Recebe o resultado do servidor 
    const result = await response.text();
    console.log(result);
  } catch (error) {
    console.error("Erro ao enviar dados: ", error);
  }
});
