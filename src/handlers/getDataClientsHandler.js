//handlers//getDataClientsHandler.js
const path = require("path");
const XLSX = require("xlsx");

const getDataClientsHandler = (req, res) =>{
    const filePath = path.join(__dirname, '..', '..', 'datos.xlsx');
    const excel = XLSX.readFile(filePath);
    const sheetName = excel.SheetNames[0];
    const datos = XLSX.utils.sheet_to_json(excel.Sheets[sheetName]);
    const jDatos = datos.map(dato => ({
        ...dato,
        FECHA: new Date((dato.FECHA - (25567 + 2)) * 86400 * 1000)
    }));
   res.json(jDatos);


}

module.exports = {
    getDataClientsHandler
}

