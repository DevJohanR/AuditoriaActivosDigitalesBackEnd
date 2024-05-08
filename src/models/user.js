const { DataTypes } = require ('sequelize');
const sequelize = require('../config/dbConfig');
const bcrypt = require('bcryptjs'); // This must be at the top of your User model file.


const User = sequelize.define ('User', {
    username: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password:{
        type: DataTypes.STRING,
        allowNull: false
    },
}, {
    tableName: 'users',
    timestamps: true
});
// Método para verificar la contraseña
User.prototype.validPassword = async function(password) {
    return await bcrypt.compare(password, this.password);
};

module.exports = User;