const express = require("express");
const cors = require('cors');
const bodyParser = require('body-parser');
const mainRouter = require("./routes/mainRouter")


const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/', mainRouter); // Utiliza el mainRouter



const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
