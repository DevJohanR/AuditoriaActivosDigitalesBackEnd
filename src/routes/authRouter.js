const express = require('express');
const authLoginController = require('../controllers/authLoginController');
const router = express.Router();

router.post('/login', authLoginController.login);

module.exports = router;
