"use strict";

// Importando dependencias
const express = require("express");

const path = require("path");

// Instancia do Express
const app = express();

// Definindo a porta
const PORT = process.env.PORT || 3150;

// Middleware para analisar os dados JSON
app.use(express.json());


app.use(express.static(path.join(__dirname, "../front-end")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../front-end/login.html"));
});

// Rota para tratar os dados e enviar para o banco
app.post("/submit", (req, res) => {
  const { email, senha } = req.body;

  // Vou definir a logica a baixo
  console.log(`Email: ${email}, Senha: ${senha}`);

  res.send("Cadastro Efetuado");
});

// Rota para buscar os dados no banco
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
