//routes/preguntasFrecuentesRouter.js

const { Router } = require("express");

const  preguntasFrecuentes = Router();

const preguntasFrecuentesArray = [
    {
        id: 0,
        pregunta: "¿Qué es una plataforma de intercambio de activos digitales?",
        respuesta: "Una plataforma de intercambio de activos digitales es una plataforma en línea que facilita la compra, venta y negociación de activos virtuales, incluyendo tokens y otros tipos de activos digitales. Estas plataformas actúan como intermediarios entre compradores y vendedores, ofreciendo un entorno seguro para realizar transacciones financieras en el ámbito digital."
    },
    {
        id: 1,
        pregunta: "¿Cómo funcionan las plataformas de intercambio de activos virtuales?",
        respuesta: {
            registroVerificacion: "Los usuarios deben registrarse en la plataforma y, generalmente, completar un proceso de verificación de identidad.",
            depositoDeFondos: "Los usuarios pueden depositar fondos en su cuenta, ya sea en moneda fiduciaria (como USD, EUR, etc.) o en activos virtuales.",
            intercambio: "Se realiza el intercambio de activos según las opciones disponibles en la plataforma.",
            retiroDeFondos: "Los usuarios pueden retirar sus fondos de la plataforma en cualquier momento, transfiriéndolos a sus propias carteras digitales o cuentas bancarias."
        }
    },
    {
        id: 2,
        pregunta: "¿Qué activos virtuales puedo intercambiar en la plataforma?",
        respuesta: "Diversos activos virtuales disponibles, como activos estables y tokens de proyectos digitales reconocidos."
    },
    {
        id: 3,
        pregunta: "¿Cuáles son los requisitos para registrarme en la plataforma?",
        respuesta: "Documentación oficial como cédula o pasaporte, un número de celular y un correo electrónico."
    }
];



preguntasFrecuentes.get("/", (req,res)=>{
    res.json(preguntasFrecuentesArray)
})

module.exports= preguntasFrecuentes;