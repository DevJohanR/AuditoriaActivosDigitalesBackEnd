require('dotenv').config();
const express = require("express");
const cors = require('cors');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
const sequelize = require('./config/dbConfig');
const User = require('./models/user');

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Ruta de login de prueba
/*
app.post('/login', async (req, res) => {
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
});
*/

// Inicialización y sincronización de la base de datos
sequelize.sync({ force: false })
    .then(() => {
        console.log('Base de datos sincronizada');
    })
    .catch(error => {
        console.error('Error al sincronizar la base de datos:', error);
    });

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
