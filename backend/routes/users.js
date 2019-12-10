var express = require('express');
var router = express.Router();
var users = require('../controllers/usercontroller')

router.get('/', users.affiche)
router.put('/', users.ajoute)
router.post('/:id', users.actualise)
router.delete('/:id', users.supprime)
router.get('/count', users.compte)

module.exports = router;
