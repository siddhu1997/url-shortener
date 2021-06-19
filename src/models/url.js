const mongoose = require("mongoose")

const urlSchema = mongoose.Schema({
    link: {
        type: String,
        required: true,
        unique: true
    },
    owner: {
        ref: "User",
        required: true
    }
}, {
    timestamps: true
})

const url = mongoose.model('URL', urlSchema)

module.exports = url