const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const volunSchema = new Schema({
    Nombre: String,
    Telefono: String,
    Correo: String,
    Dni: String,
    Formacion: String,
    Experiencia: String
})

//Creamos el modelo
const Voluntarios = mongoose.model('Voluntarios', volunSchema, "Voluntarios");

module.exports = Voluntarios;