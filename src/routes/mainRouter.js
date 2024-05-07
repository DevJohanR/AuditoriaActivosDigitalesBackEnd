//routes/mainRouter.js
const { Router } = require("express");
const getDataClients = require("./getDataClientsRouter");  // Asegúrate de que la ruta está correcta
const authRouter = require('./authRouter')

const mainRouter = Router();


mainRouter.use("/data", getDataClients);
mainRouter.use('/auth', authRouter);

module.exports = mainRouter;
