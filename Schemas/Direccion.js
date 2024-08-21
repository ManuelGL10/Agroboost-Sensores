const mongoose = require('mongoose');

const direccion = new mongoose.Schema({
    estado:String,
    municipio:String,
    codigoPostal:Number,
    colonia:String,
    numeroExterior:String,
    numeroInterior:String

});

mongoose.model('direccion', direccion);

