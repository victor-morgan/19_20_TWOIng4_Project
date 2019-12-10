const mongoose = require('mongoose');

const measureSchema = new mongoose.Schema({
    type: {
        type: String,
        //required: true
    },
    creationDate: {
        type: Date,
        //required: true
    },
    sensorID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'SId'
        //required: true
    },
    value: {
        type: Number,
        //required: true
    }
}, 
{
    collection: 'measures'
})

module.exports = mongoose.model('Measure', measureSchema);