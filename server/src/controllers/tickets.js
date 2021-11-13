const Tickets = require('../models/tickets')
const express = require('express')
const router = express.Router();
// const news = require('../models/news');


router.get("", async (req, res)=>{
    const tickets = await Tickets.find()
    return res.status(200).send(tickets)
})

router.post("", async (req, res)=>{
    const ticket = await Tickets.create({
        name : req.body.name,
        email :req.body.email,
        phone :req.body.phone,
        problem :req.body.problem,
    })
    return res.status(201).send(ticket)
})

module.exports = router