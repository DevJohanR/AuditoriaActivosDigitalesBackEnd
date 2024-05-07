const express = require("express");

const cors = require('cors');
var XLSX =  require ("xlsx")
const bodyParser = require('body-parser');
const mysql = require('mysql');
const bcrypt = require('bcryptjs');

const app = express ();

app.use(cors());



//data excel to json
app.get('/datos', (req,res)=>{

    
        const excel = XLSX.readFile("C:\\Users\\ejoha\\OneDrive\\Escritorio\\BackendCryptos\\datos.xlsx");
            
        var nombreHoja = excel.SheetNames;
        
        let datos = XLSX.utils.sheet_to_json(excel.Sheets[nombreHoja[0]]);
        
        const jDatos = [];
        for(let i =0; i < datos.length; i++){
            const dato = datos[i];
            jDatos.push({
                ...dato,
                 FECHA: new Date((dato.FECHA - (25567 + 2)) * 86400 * 1000)
            });
        }
        
       res.json(jDatos)
        
    
});


//middleware para parsear el cuerpo de las solicitudes http
app.use (bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json())






const PORT = 3001;
app.listen(PORT, () =>{
    console.log(`Servidor corriendo en el puerto ${PORT}`);

})



