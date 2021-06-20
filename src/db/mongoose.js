
const mongoose = require('mongoose')
const {dbUser, dbPassword, dbURL} = require("../../config")

const uri = "mongodb+srv://"+dbUser+":"+dbPassword+"@"+dbURL+"?retryWrites=true&w=majority"

mongoose.connect(uri, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Connected to AtlasDB!")
}).catch((e) => {
    console.log("Unable to establish connection to AtlasDB!")
})

module.exports = mongoose
