var express = require('express');
var router = express.Router();
var measures = require('../controllers/measurecontroller')

router.get('/', measures.get)
router.put('/', measures.put)
router.post('/:id', measures.update)
router.delete('/:id', measures.delete)

module.exports = router;