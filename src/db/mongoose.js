
const mongoose = require('mongodb');
const {dbUser, dbPassword, dbURL} = require("../../config")

const uri = "mongodb+srv://"+dbUser+":"+dbPassword+"@"+dbURL+"?retryWrites=true&w=majority";

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
})

module.exports = mongoose
