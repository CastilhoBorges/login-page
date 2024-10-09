"use strict";

// Importando dependencias
const express = require("express");

// Instancia do Express
const app = express();

// Definindo a porta 
const PORT = process.env.PORT || 3000;

// Middleware para analisar os dados JSON
app.use(express.json());

// Rota para tratar os dados e enviar para o banco
app.post("/submit", (req, res) => {
  const { email, senha } = req.body;

  // Vou definir a logica a baixo 
  console.log(`Email: ${email}, Senha: ${senha}`);

  res.send("Cadastro Efetuado");
});

// Rota para buscar os dados no banco, tratar e enviar para o cliente 
app.get("/search", (req, res) => {
  const { query } = req.query;

  // Vou definir a logica a baixo 
  console.log(`Buscando por: ${query}`);

  res.send(`Resultado para a busca por: ${query}`);
});

// Inicia o servidor 
app.listen(PORT, () => {
  console.log(`Start server ${PORT}`);
});
