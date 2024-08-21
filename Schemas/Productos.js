const mongoose = require('mongoose');

const productos = new mongoose.Schema({
    idEstablecimiento:String,
    nombre:String,
    precio:Number,
    imagenProducto:String,
    descripcion:String,
    ingredientes:String,
    categoria:String
    
});

mongoose.model('productos', productos);