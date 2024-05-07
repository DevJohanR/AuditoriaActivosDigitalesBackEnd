//routes/getDataClientsRouter.js

const { Router } = require("express");

const { getDataClientsController } = require('../controllers/getDataClientsController');


const dataClients = Router();

dataClients.get("/", getDataClientsController)

module.exports = dataClients;
