"use strict";

// Importando dependencias
const express = require("express");
const path = require("path");
const bcrypt = require("bcrypt");

// Instancia do Express
const app = express();

// Definindo a porta
const PORT = process.env.PORT || 3150;

// Middleware para analisar os dados JSON
app.use(express.json());

// Enviar arquivos para o front
app.use(express.static(path.join(__dirname, "../front-end")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../front-end/login.html"));
});

// Rota para tratar os dados e enviar para o banco
app.post("/submit", async (req, res) => {
  const { email, senha } = req.body;
  // Vou definir a logica a baixo
  try {
    const saltRounds = 12;
    const salt = await bcrypt.genSalt(saltRounds);
    const hashSenha = await bcrypt.hash(senha, salt);

    console.log(`Email: ${email}, Senha: ${hashSenha}, Salt: ${salt}`);
    res.send(`Cadastro efetuado!`);
  } catch (err) {
    console.error(err);
    res.status(500).send("Erro no cadastro");
  }
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
