// Importando Modulos
const express = require("express");
const app = express();
const cors = require("cors");
const { PORT } = require("dotenv").config().parsed;

// Ativando Middlewares
app.use(express.json(), cors());

// Rotas
const vehiclesRouter = require("../routes/vehiclesRoutes");
app.use("/vehicles", vehiclesRouter);

// Inicializando a Aplicacao
app.listen(PORT,
    console.log(`Server running at port ${PORT}...`));
