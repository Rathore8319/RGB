const mongoose = require('mongoose')
const Schema = mongoose.Schema({
    id: {
        type: String,
        default: "AnubhavRathore"
    },
    r: {
        type: Number,
        required: true
    },
    g: {
        type: Number,
        required: true
    },
    b: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model('rgbModel', Schema)