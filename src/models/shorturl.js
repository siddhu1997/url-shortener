const mongoose = require("mongoose")
const urlSchema = mongoose.Schema({
    identifier: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    link: {
        type: String,
        unique: true,
        required: true,
        trim: true
    }
}, {
    timestamps: true
})

const Shorturl = mongoose.model('shorturl', urlSchema)

module.exports = Shorturl