//controllers/authenticationRouter.js


const User = require('../models/user');
const bcrypt = require('bcryptjs');



// Lógica de negocio para el login
async function loginUser(username, password) {
    const user = await User.findOne({ where: { username } });
    if (!user) {
        throw new Error('Usuario no encontrado');
    }
    const valid = await user.validPassword(password);
    if (!valid) {
        throw new Error('Contraseña incorrecta');
    }
    return user;
}

module.exports = { loginUser };
