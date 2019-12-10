const Sensor = require('../models/sensormodel')

exports.affiche = (req, res) => {
    Sensor.find().then(sensor => {
            res.send(sensor)
        })
        .catch(err => {
            res.status(400).send('Aucun Sensor')
        })
}

exports.ajoute = (req, res) => {
    if (!req.body.location || !req.body.personsInHouse || !req.body.houseSize) {
        res.status(400).send("Il manque des paramètres")
    }
    else
    {
    const put = new Measure({
        creationDate: Date.now(),
        location: req.body.location,
        userID: req.body.userID
    });
    put.save().then(sensor => {
            res.send(sensor)
        })
    }
}

exports.supprime = (req, res) => {
    Sensor.findd(req.params.id).then(data => {
            res.send("Sensor supprimé")
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
    Sensor.findu(req.params.id, {
        location: req.body.location,
        personsInHouse: req.body.personsInHouse,
        houseSize: req.body.houseSize
    })
    .then(data => {
        res.send(data)
    })
    }
}

exports.compte = (req, res) => {
    Sensor.count({}, (err, count) => {
        res.json({"count": count})
    })
}