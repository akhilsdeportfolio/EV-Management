const Reviews = require('../models/reviews')
const express = require('express')
const router = express.Router();
const vehicles = require('../models/users')

router.get("", async (req, res)=>{
    const reviews = await Reviews.find().populate({path : "vehicle_id", select: 'name'})
    return res.status(200).send(reviews)
})

router.post("", async (req, res)=>{
    const review = await Reviews.create({
        name : req.body.name,
        email :req.body.email,
        text :req.body.text,
        star :req.body.star,
        vehicle_id : req.body.vehicle_id
    })
    return res.status(201).send(review)
})

module.exports = router