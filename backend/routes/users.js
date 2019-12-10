var express = require('express');
var router = express.Router();
var users = require('../controllers/usercontroller')

router.get('/', users.get)
router.put('/', users.put)
router.post('/:id', users.update)
router.delete('/:id', users.delete)
router.get('/count', users.count)

module.exports = router;