const mongoose = require('mongoose');

const sensorSchema = new mongoose.Schema({
    creationDate: {
        type: Date,
        //required: true
    },
    location: {
        type: String,
        //required: true
    },
    userID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'UId'
        //required: true
    }
}, 
{
    collection: 'sensors'
})

module.exports = mongoose.model('Sensor', sensorSchema);