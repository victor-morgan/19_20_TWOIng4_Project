const Sensor = require('../models/sensormodel')

exports.get = (req, res) => {
    Sensor.find().then(doc => {
            res.send(doc)
        })
}

exports.put = (req, res) => {
    const put = new Measure({
        creationDate: Date.now(),
        location: req.body.location,
        userID: req.body.userID
    });
    put.save().then(doc => {
            res.send(doc)
        })
}

exports.delete = (req, res) => {
    console.log("Rentrez l'Id du Sensor à supprimer : " + req.params.id)
    Sensor.findd(req.params.id).then(data => {
            res.send("Sensor supprimé")
        })
}

exports.update = (req, res) => {
    console.log("Rentrez l'Id du Sensor à update : " + req.params.id)
    Sensor.findu(req.params.id, {
        location: req.body.location,
        personsInHouse: req.body.personsInHouse,
        houseSize: req.body.houseSize
    })
    .then(data => {
        res.send(data)
    })
}

exports.count = (req, res) => {
    Sensor.count({}, (err, count) => {
        res.json({"count": count})
    })
}