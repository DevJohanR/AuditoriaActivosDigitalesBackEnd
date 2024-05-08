//routes/getDataClientsRouter.js

const { Router } = require("express");

const { getDataClientsHandler } = require('../handlers/getDataClientsHandler');


const dataClients = Router();

dataClients.get("/", getDataClientsHandler)

module.exports = dataClients;
