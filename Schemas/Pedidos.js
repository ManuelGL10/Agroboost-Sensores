const mongoose = require('mongoose');

require('./Productos');
const productos = mongoose.model('productos')

const pedidos = new mongoose.Schema({
    id_usuario:String,
    codigoTarjeta:String, 
    estado:String,
    fecha:Date,
    productos:[productos.schema],
    total_Final:String

    
    
});

mongoose.model('pedidos', pedidos, 'pedidos');