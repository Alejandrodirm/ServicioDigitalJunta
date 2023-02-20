const express = require('express');
const router = express.Router();
const Campeones = require('../models/voluntarios');
router.get('/', async (req, res) => {
    try {
        const arrayVoluntariosDB = await Voluntarios.find();
        res.render("voluntarios", {
            arrayVoluntarios: arrayVoluntariosDB
        })
    } catch (error) {
        console.error(error)
    }
})
router.get('/crearVoluntario', (req, res) => {
    res.render('crearVoluntario');
})
router.post('/', async (req, res) => {
    const body = req.body
    try {
        const voluntariosDB = new Voluntarios(body)
        await voluntariosDB.save()
        res.redirect('/voluntarios')
    } catch (error) {
        console.log('error', error)
    }
})
router.get('/:id/editar', async (req, res) => {
    const id = req.params.id
    try {
        const voluntariosDB = await Voluntarios.findOne({ _id: id })
        res.render('detalleVoluntario', {
            voluntarios: voluntariosDB,
            error: false
        })
    } catch (error) {
        console.log('Se ha producido un error', error)
        res.render('detalleVoluntario', {
            error: true,
            mensaje: 'Voluntario no encontrado!'
        })
    }
})
router.get('/:id/:nombre', async (req, res) => {
    const id = req.params.id
    try {
        const voluntariosDB = await Voluntarios.findOne({ _id: id })
        const voluntario=voluntariosDB.Nombre;
        res.render('voluntario', {
            voluntario: voluntariosDB,
            error: false
        })
    } catch (error) {
        console.log('Se ha producido un error', error)
        res.render('voluntario', {
            error: true,
            mensaje: 'voluntario no encontrado!'
        })
    }
})
router.delete('/:id', async (req, res) => {
    const id = req.params.id;
    console.log('id desde backend', id)
    try {
        const voluntariosDB = await voluntarios.findByIdAndDelete({ _id: id });
        if (!voluntariosDB) {
            res.json({
                estado: false,
                mensaje: 'No se puede eliminar el voluntario.'
            })
        } else {
            res.json({
                estado: true,
                mensaje: 'voluntario eliminado.'
            })
        }
    } catch (error) {
        console.log(error)
    }
})
router.put('/:id', async (req, res) => {
    const id = req.params.id;
    const body = req.body;
    try {
        const voluntariosDB = await Voluntarios.findByIdAndUpdate(
            id, body, { useFindAndModify: false }
        )
        res.json({
            estado: true,
            mensaje: 'voluntario editado'
        })
    } catch (error) {
        console.log(error)
        res.json({
            estado: false,
            mensaje: 'Problema al editar el voluntario'
        })
    }
})
module.exports = router;