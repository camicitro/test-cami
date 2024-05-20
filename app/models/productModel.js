const mongoose = require('mongoose')
const ProductScheme = new mongoose.Schema({
    name: {
        type: String
    },
    quantity: {
        type: Number
    }
},
    {
        timestamps: true,
        versionKey: false
    })

module.exports = mongoose.model('users', ProductScheme)