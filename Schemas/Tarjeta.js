const mongoose = require('mongoose');
require('./Movimientos');

const movimientos= mongoose.model('movimientos');

const tarjeta = new mongoose.Schema({
    codigoTarjeta:String,
    numeroTarjeta:String,
    estadoTarjeta:String,
    cvv:Number,
    ferchaVencimiento:Date,
    fechaObtencion:Date,
    movimientos:[movimientos.schema]
    
});

mongoose.model('tarjeta', tarjeta);