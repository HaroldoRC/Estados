const express = require('express')
const router = express.Router()
module.exports = router
router.use('/estados', require('./estados.routes'))
router.use('/populacao', require('./populacao.routes'))
