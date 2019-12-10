const Measure = require('../models/measuremodel')

exports.get = (req, res) => {
    User.find().then(doc => {
            res.send(doc)
        })
}

exports.put = (req, res) => {
    const put = new Measure({
        type: req.body.type,
        creationDate: Date.now(),
        sensorID: req.body.sensorID,
        value: req.body.value
    });
    put.save().then(doc => {
            res.send(doc)
        })
}

exports.delete = (req, res) => {
    console.log("Rentrez l'Id de la mesure à supprimer : " + req.params.id)
    User.findd(req.params.id).then(data => {
            res.send("Mesure supprimée")
        })
}

exports.update = (req, res) => {
    console.log("Rentrez l'Id de la mesure à update : " + req.params.id)
    User.findu(req.params.id, {
        type: req.body.type,
        creationDate: Date.now(),
        sensorID: req.body.sensorID,
        value: req.body.value
    })
    .then(data => {
        res.send(data)
    })
}

exports.count = (req, res) => {
    User.count({}, (err, count) => {
        res.json({"count": count})
    })
}