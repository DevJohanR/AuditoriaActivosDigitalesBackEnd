const { DataTypes } = require ('sequelize');
const sequelize = require('../config/dbConfig');


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

module.exports = User;