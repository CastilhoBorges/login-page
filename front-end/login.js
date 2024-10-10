"use strict";

const form = document.querySelector("form");

// Verificar dados antes de mandar para o backend
form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const email = document.querySelector("#email");
  const senha = document.querySelector("#password");
  const p = document.querySelector("#respostaDeCadastro");
  // Atualizando o valor da senha aqui

  // Expressão regular para validar a senha
  const senhaPadrao =
    /^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&*])[A-Za-z0-9@#$%^&*]{8,16}$/;

  // Validação da senha
  if (!senha.value.match(senhaPadrao)) {
    alert(
      "Sua senha deve conter pelo menos 1 letra maiúscula, um número, um caractere especial e entre 8 à 16 caracteres"
    );
    return; // Não envia os dados se a senha não for válida
  }

  // Criando o JSON
  const dadosDocadastro = {
    email: email.value,
    senha: senha.value,
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
    if (response.ok) {
      const result = await response.text();

      p.innerHTML = result;
      email.value = "";
      senha.value = "";
    } else {
      console.error(`Erro no envio: ${response.status}`);
    }

    setTimeout(() => {
      p.innerText = "";
    }, 3000);
    
  } catch (error) {
    console.error("Erro ao enviar dados: ", error.message);
  }
});
