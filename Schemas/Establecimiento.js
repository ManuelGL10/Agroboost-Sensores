const mongoose = require('mongoose');
require('./Direccion');

const direccion = mongoose.model('direccion');

const establecimiento = new mongoose.Schema({
    nombre:String,
    direccion:[direccion.schema],
    servicios:String
    
});

mongoose.model('establecimiento', establecimiento);