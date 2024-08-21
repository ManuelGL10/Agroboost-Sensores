const mongoose = require('mongoose');
require('./Tarjeta');
require('./Direccion');

const tarjeta = mongoose.model('tarjeta')
const direccion = mongoose.model('direccion')

const usuario = new mongoose.Schema({ 
    nombre:String,
    imgPerfil:String,
    email:String,
    telefono:String,
    numeroAK:String,
    estadoEmail:Boolean,
    estadoTelefono:Boolean,
    numeroEmail:Number,
    numeroTelefono:Number,
    password:String,
    direccion:[direccion.schema],
    tarjeta:[tarjeta.schema]
    
});

mongoose.model('usuario', usuario, 'usuario');