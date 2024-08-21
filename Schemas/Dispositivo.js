const mongoose = require('mongoose')

const dispositivo = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId, 
    nombre_dispositivo:String, 
    datos:[Number], 
    id_cultivo: mongoose.Schema.Types.ObjectId,
    id_usuario: mongoose.Schema.Types.ObjectId
}); 

mongoose.model('dispositivo', dispositivo, 'Dispositivo')