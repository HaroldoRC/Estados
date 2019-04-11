const express = require('express')
const router = express.Router()
const population = require('../models/populacao.model')

/* Get population */
router.get('/:estado', async (req, res) => {
    const estado = req.params.estado.toUpperCase()
    await population.getPopulation(estado)
    .then(state => res.json({estado: state, success: true}))
    .catch(err => {
        if (err.status) {
            res.status(err.status).json({ message: err.message, success: false })
        }
        res.status(500).json({ message: err.message, success: false })
    })
})

// Routes
module.exports = router
