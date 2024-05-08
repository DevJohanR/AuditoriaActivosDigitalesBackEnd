const express = require("express");
const cors = require('cors');
const bodyParser = require('body-parser');
const mainRouter = require("./routes/mainRouter")
const sequelize = require("./config/dbConfig");

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/', mainRouter); // Utiliza el mainRouter





const PORT = process.env.PORT || 3001;
app.listen(PORT, async () => {
    try {
        await sequelize.sync({ force: false }); // Cambia a true si necesitas resetear la base de datos
        console.log(`Servidor corriendo en el puerto ${PORT}`);
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
});
