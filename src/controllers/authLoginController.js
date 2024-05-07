const bcrypt = require('bcryptjs');
const User = require('../models/user'); // Asegúrate de que la ruta al modelo es correcta

const authLoginController = {
    login: async (req, res) => {
        const { username, password } = req.body;
        console.log("Login request received:", req.body);

        try {
            const user = await User.findOne({ where: { username } });
            if (!user) {
                return res.status(404).send('Usuario no encontrado');
            }

            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) {
                return res.status(401).send('Contraseña incorrecta');
            }

            res.send('Login exitoso');
        } catch (error) {
            console.error('Error during login:', error);
            res.status(500).send('Error en el servidor');
        }
    }
};

module.exports = authLoginController;
