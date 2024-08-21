const mongoose = require('mongoose');

const usuarios = new mongoose.Schema({
    nombre:String,
    pass:String
});

mongoose.model('usuarios', usuarios);



