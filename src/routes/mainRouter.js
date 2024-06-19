//routes/mainRouter.js
const { Router } = require("express");
const getDataClients = require("./getDataClientsRouter");  // Asegúrate de que la ruta está correcta
const authenticationRouter = require("./authenticationRouter")
const preguntasFrecuentesRouter = require("./preguntasFrecuentesRouter")

const mainRouter = Router();

//W
mainRouter.use("/data", getDataClients);
mainRouter.use("/login", authenticationRouter)
mainRouter.use("/preguntas", preguntasFrecuentesRouter)
//J


module.exports = mainRouter;
