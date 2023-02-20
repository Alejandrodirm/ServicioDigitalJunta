const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const personamayorSchema = new Schema({
    Nombre: String,
    Patologia: String
})

//Creamos el modelo
const Personamayor = mongoose.model('Personamayor', personamayorSchema, "Personamayor");

module.exports = Personamayor;