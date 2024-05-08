//routes/mainRouter.js
const { Router } = require("express");
const getDataClients = require("./getDataClientsRouter");  // Asegúrate de que la ruta está correcta
const authenticationRouter = require("./authenticationRouter")

const mainRouter = Router();


mainRouter.use("/data", getDataClients);

mainRouter.use("/login", authenticationRouter)


module.exports = mainRouter;
