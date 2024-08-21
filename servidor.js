const express = require('express')
const app = express();
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
require('./Schemas/Usuario'); 
require('./Schemas/Pedidos');
require('./Schemas/Dispositivo')
const Usuario = mongoose.model('usuario'); 
const Pedidos = mongoose.model('pedidos'); 
const Dispositivo = mongoose.model('dispositivo');


app.use(bodyParser.json())

const mongURI = "mongodb+srv://edgarAlvar:13fkjZ855oJbNAUD@cluster0.vrxx0za.mongodb.net/AgroBoost"
mongoose.connect(mongURI,{
    useNewUrlParser : true,
    useUnifiedTopology : true
})

const db = mongoose.connection;


mongoose.connection.on("connected",() =>{
    console.log("Connect Success")
})

mongoose.connection.on("error",(err) =>{
    console.log("error",err)
})


app.post('/dato_humedad', async (req, res) => {
    console.log(req.body); 

    const { idHumedad, porcentaje } = req.body; 

    try {
        const objectId = new mongoose.Types.ObjectId(idHumedad);
        console.log(`Converted objectId: ${objectId}`);

        // Buscar el dispositivo específico
        const dispositivo = await Dispositivo.findOne({ "_id": objectId });
        if (!dispositivo) {
            console.log('No se encontró el dispositivo con el ID proporcionado.');
            return res.status(404).send('Dispositivo no encontrado');
        }

        console.log('Dispositivo encontrado, actualizando datos...');

        // Actualizar datos del dispositivo
        const result = await Dispositivo.updateOne(
            { "_id": objectId },
            { $push: { datos: porcentaje } }
        );

        console.log('Captura de Humedad Exitosa', result);
        res.status(200).send(result);
    } catch (error) {
        console.log('error al guardar registro', error);
        res.status(500).send('error al guardar dato', error);
    }
});



app.post('/dato_temperatura', async (req, res) => {
    console.log(req.body);

    const { idTemperatura, grados } = req.body;

    try {
        const objectId = new mongoose.Types.ObjectId(idTemperatura);
        console.log(`Converted objectId: ${objectId}`);

        // Buscar el dispositivo específico
        const dispositivo = await Dispositivo.findOne({ "_id": objectId });
        if (!dispositivo) {
            console.log('No se encontró el dispositivo con el ID proporcionado.');
            return res.status(404).send('Dispositivo no encontrado');
        }

        console.log('Dispositivo encontrado, actualizando datos...');

        // Actualizar datos del dispositivo
        const result = await Dispositivo.updateOne(
            { "_id": objectId },
            { $push: { datos: grados } }
        );

        console.log('Captura de Temperatura Exitosa', result);
        res.status(200).send(result);
    } catch (error) {
        console.log('error al guardar registro', error);
        res.status(500).send('error al guardar dato', error);
    }
});



app.listen(3000,'192.168.50.138',() =>{
    console.log("Listening on 3000")
})  