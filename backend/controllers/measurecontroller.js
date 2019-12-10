const Measure = require('../models/measuremodel')

exports.affiche = (req, res) => {
    Measure.find().then(measure => {
            res.send(measure)
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
        type: req.body.type,
        creationDate: Date.now(),
        sensorID: req.body.sensorID,
        value: req.body.value
    });
    put.save().then(measure => {
            res.send(measure)
        })
    }
}

exports.supprime = (req, res) => {
    Measure.findd(req.params.id).then(data => {
            res.send("Mesure supprimée")
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
    Measure.findu(req.params.id, {
        type: req.body.type,
        creationDate: Date.now(),
        sensorID: req.body.sensorID,
        value: req.body.value
    })
    .then(data => {
        res.send(data)
    })
}
}

exports.compte = (req, res) => {
    Measure.count({}, (err, count) => {
        res.json({"count": count})
    })
}