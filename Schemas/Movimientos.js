const mongoose = require('mongoose');

const movimientos = new mongoose.Schema({
    fechaMovimiento:{
        type: Date, 
        default:Date.now
    },
    tipoMovimiento:Boolean,
    monto:Number
});

mongoose.model('movimientos', movimientos);

