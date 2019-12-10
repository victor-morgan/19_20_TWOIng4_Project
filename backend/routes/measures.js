var express = require('express');
var router = express.Router();
var measures = require('../controllers/measurecontroller')

router.get('/', measures.affiche)
router.put('/', measures.ajoute)
router.post('/:id', measures.actualise)
router.delete('/:id', measures.supprime)

module.exports = router;