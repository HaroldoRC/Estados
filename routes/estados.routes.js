const express = require('express')
const router = express.Router()
const states = require('../models/estado.model')

/* All statess */
router.get('/', async (req, res) => {
    await states.getStates()
    //await states.getStatesPopulation()
    .then(states => res.json({estados: states, success: true}))
    .catch(err => {
        if (err.status) {
            res.status(err.status).json({ message: err.message, success: false })
        } else {
            res.status(500).json({ message: err.message, success: false })
        }
    })
})

// Routes
module.exports = router
