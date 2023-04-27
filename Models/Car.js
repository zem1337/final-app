const mongoose = require('mongoose')

const CarSchema = new mongoose.Schema({
    brand : String,
    model : String,
    picture : String
    
})

module.exports = mongoose.model('Car',CarSchema)