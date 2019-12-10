var express = require('express');
var router = express.Router();
var sensors = require('../controllers/sensorcontroller')

router.get('/', sensors.get)
router.put('/', sensors.put)
router.post('/:id', sensors.update)
router.delete('/:id', sensors.delete)

module.exports = router;