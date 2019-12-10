var User = require('../models/usermodel');

exports.affiche = (req, res) => {
    User.find().then(user => {
            res.send(user)
        })
        .catch(err => {
            res.status(400).send('Aucun User')
        })
}

exports.ajoute = (req, res) => {
    if (!req.body.location || !req.body.personsInHouse || !req.body.houseSize) {
        res.status(400).send("Il manque des paramètres")
    }
    else
    {
        const ajout = new User({
            location: req.body.location,
            personsInHouse: req.body.personsInHouse,
            houseSize: req.body.houseSize
        });
        ajout.save().then(user => {
                res.send(user)
            })
    }
    
}

exports.supprime = (req, res) => {
    User.findd(req.params.id).then(data => {
            res.send("User supprimé")
        })
        .catch(err => {
            res.status(400).send('Impossible de supprimer')
        })
}

exports.actualise = (req, res) => {
    if (!req.body.location || !req.body.personsInHouse || !req.body.houseSize) {
        res.status(400).send("Il manque des paramètres")
    }
    else
    {
        User.findu(req.params.id,
        {$set: {
            location: req.body.location,
            personsInHouse: req.body.personsInHouse,
            houseSize: req.body.houseSize
        }})
        .then(data => {
            res.send(data)
        })
    }
}

exports.compte = (req, res) => {
    User.count({}, (err, count) => {
        res.json({"count": count})
    })
}