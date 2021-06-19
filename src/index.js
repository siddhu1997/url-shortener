require("./db/mongoose")
const express = require("express")

const port = process.env.PORT || 3000

const app = express()
app.use(express.json())

app.post("/", async (req, res) => {
    if(req.body.link) {
        console.log(req.body.link)
        res.status(301).redirect("https://google.com")
    } else {
        res.send(400).send("Please provide a link to shorten!")
    }
})

app.listen(port, () => {
    console.log("Server started on port", port)
})