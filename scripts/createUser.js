require('dotenv').config();

const bcrypt = require('bcryptjs');
const sequelize = require('../src/config/dbConfig'); // Ajusta la ruta según la estructura de tu proyecto
const User = require('../src/models/user'); // Ajusta la ruta según la estructura de tu proyecto

async function createUser() {
    try {
        const hashedPassword = await bcrypt.hash('Activos#digitales$', 10); // Hashea la contraseña

        const user = await User.create({
            username: 'adminActivos',
            password: hashedPassword
        });

        console.log('Usuario creado:', user.username);
    } catch (error) {
        console.error('Error al crear el usuario:', error);
    }
}

createUser();
