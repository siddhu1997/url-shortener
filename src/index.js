require("./db/mongoose")
const cors = require("cors")
const express = require("express")
const urlRouter = require("./routes/url")

const port = process.env.PORT || 3000

const app = express()
app.use(express.json())
app.use(urlRouter)
app.use(cors)

app.listen(port, () => {
    console.log("Server started on port", port)
})