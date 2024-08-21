const mongoose = require('mongoose');

const notificaciones = new mongoose.Schema({
    id_usuario:String,
    titulo:String,
    contenido:String,
    fecha:Date
    
});

mongoose.model('notificaciones', notificaciones);