const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const destinationSchema = new Schema ({
    airline: {
        type: String,
        enum: ['Delta', 'American', 'Southwest', 'United']
    },
    airport: {
        type: String,
        enum: ['SFO', 'OAK', 'LAX', 'HNL'],
        default: 'SFO'
    },
    flightNo: {
        type: Number,
        required: true,
        min: 10,
        max: 999
    },
    arrival: {
        type: Date,
        default: Date.now() + 365*24*60*60000
    }
});

const flightSchema = new Schema({
    airline: {
        type: String,
        enum: ['Delta', 'American', 'Southwest', 'United']
    },
    airport: {
        type: String,
        enum: ['SFO', 'OAK', 'LAX', 'HNL'],
        default: 'SFO'
    },
    flightNo: {
        type: Number,
        required: true,
        min: 10,
        max: 999
    },
    departs: {
        type: Date,
        default: Date.now() + 365*24*60*60000
    },
    destinations: [destinationSchema],

});


module.exports = mongoose.model('Flight', flightSchema);