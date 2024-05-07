// controllers/getDataClientsController.js

const { getDataClientsHandler } = require('../handlers/getDataClientsHandler');

const getDataClientsController = async (req, res) => {
    try {
        const data = await getDataClientsHandler();
       // console.log(data);  // ver datos en la consola
        res.json(data);
    } catch (error) {
        console.error("Error en el controlador: ", error); // Mostrará errores en consola
        res.status(500).send("Error al obtener los datos de los clientes");
    }
};

module.exports = {
    getDataClientsController
};
