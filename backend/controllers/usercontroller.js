const User = require('../models/usermodel')

exports.get = (req, res) => {
    User.find().then(doc => {
            res.send(doc)
        })
}

exports.put = (req, res) => {
    const put = new Measure({
        location: req.body.location,
        personsInHouse: req.body.personsInHouse,
        houseSize: req.body.houseSize
    });
    put.save().then(doc => {
            res.send(doc)
        })
}

exports.delete = (req, res) => {
    console.log("Rentrez l'Id du User à supprimer : " + req.params.id)
    User.findd(req.params.id).then(data => {
            res.send("User supprimé")
        })
}

exports.update = (req, res) => {
    console.log("Rentrez l'Id du User à update : " + req.params.id)
    User.findu(req.params.id, {
        location: req.body.location,
        personsInHouse: req.body.personsInHouse,
        houseSize: req.body.houseSize
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