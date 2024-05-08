const { Router } = require("express");
const { authHandler } = require('../handlers/authHandler');

const authenticationRouter = Router();

authenticationRouter.post("/", authHandler)

module.exports = authenticationRouter;