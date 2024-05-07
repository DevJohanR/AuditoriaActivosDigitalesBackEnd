const express = require("express");
const cors = require('cors');
const XLSX = require("xlsx");
const bodyParser = require('body-parser');
const path = require('path'); // Importa el módulo path

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// Data excel to json
app.get('/datos', (req, res) => {
    // Construye la ruta del archivo usando path.join para asegurarte de que funcione en cualquier sistema operativo
    const filePath = path.join(__dirname, '..', 'datos.xlsx');
    const excel = XLSX.readFile(filePath);
    var nombreHoja = excel.SheetNames;
    let datos = XLSX.utils.sheet_to_json(excel.Sheets[nombreHoja[0]]);
    const jDatos = datos.map(dato => ({
        ...dato,
        FECHA: new Date((dato.FECHA - (25567 + 2)) * 86400 * 1000)
    }));
    res.json(jDatos);
});

const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
