const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const MovieSchema = new Schema ({
    airline: String,
    airport: String,
    flightNo: Number,
    departs: Date
});