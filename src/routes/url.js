const express = require("express")
const Shorturl = require("../models/shorturl")
const shorten = require("../util/codegen")
const router = new express.Router()

//end-point to add a valid url
router.post("/add", async (req, res) => {
    const link = req.body.link
    var identifier = req.body.identifier? req.body.identifier : shorten(link)

    console.log("Attempting to use identifier:",identifier)

    const existingURL = await Shorturl.find({link})
        if(existingURL.length !== 0) {
            return res.status(400).send({error: "URL has already been shortened!"})
        }
    while(true) {
        const existingIdentifier = await Shorturl.find({identifier})
        console.log(existingIdentifier)
        if (existingIdentifier.length === 0) {
            const shortURL = new Shorturl({ identifier, link})
            await shortURL.save()
            return res.send(shortURL)
        } else if (existingIdentifier[0].identifier === req.body.identifier) {
            return res.status(400).send({error:"Cannot use the given keyword. It's already taken!"})
        }
        identifier = shorten(link)
    }  
})

//end-point to redirect a shortened url to its orginal link
router.get("/:identifier", async (req, res) => {
    const identifier = req.params.identifier
    const originalLink = await Shorturl.findOne({identifier})
    if(!originalLink) {
        return res.status(404).send()
    }
    res.redirect(301, originalLink.link)
})

module.exports = router