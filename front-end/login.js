"use strict";

const form = document.querySelector("form");

// Verificar dados antes de mandar para o backend
form.addEventListener("submit", (event) => {
  const email = document.querySelector("#email").value;
  const senha = document.querySelector("#password").value;

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
