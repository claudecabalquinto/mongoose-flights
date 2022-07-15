const mongoose = require('mongoose');

const Schema = mongoose.Schema ({
    airline: String,
    airport: String,
    flightNo: Number,
    departs: Date
});