const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://castilho:01001101@castilhocluster0.hpr3m.mongodb.net/?retryWrites=true&w=majority&appName=CastilhoCluster0",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("Conectado ao MongoDB!"))
  .catch((error) => console.error("Erro ao conectar ao MongoDB:", error));

const usuarioSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  senha: { type: String, required: true },
});

const Usuario = mongoose.model("Usuario", usuarioSchema);

module.exports = Usuario;
