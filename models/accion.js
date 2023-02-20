const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const accionSchema = new Schema({
    FechReali: String,
    Estado: String,
    Descripcion: String,
    Lugar: String,
    NombreVoluntario: String,
    NombreAnciano: String
})

//Creamos el modelo
const Accion = mongoose.model('Accion', accionSchema, "Accion");

module.exports = Accion;