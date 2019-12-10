var express = require('express');
var router = express.Router();

<<<<<<< Updated upstream
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
=======
router.get('/', users.affiche)
router.put('/', users.ajoute)
router.post('/:id', users.actualise)
router.delete('/:id', users.supprime)
router.get('/count', users.compte)
>>>>>>> Stashed changes

module.exports = router;
