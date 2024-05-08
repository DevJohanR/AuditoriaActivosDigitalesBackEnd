//routes/mainRouter.js
const { Router } = require("express");
const getDataClients = require("./getDataClientsRouter");  // Asegúrate de que la ruta está correcta


const mainRouter = Router();


mainRouter.use("/data", getDataClients);


module.exports = mainRouter;
