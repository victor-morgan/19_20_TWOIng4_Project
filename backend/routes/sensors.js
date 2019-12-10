var express = require('express');
var router = express.Router();
var sensors = require('../controllers/sensorcontroller')

router.get('/', sensors.affiche)
router.put('/', sensors.ajoute)
router.post('/:id', sensors.actualise)
router.delete('/:id', sensors.supprime)

module.exports = router;