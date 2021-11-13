const Vehicle = require('../models/vehicles')
const Reviews = require('../models/reviews')
const Gallery = require('../models/gallery')

const express = require('express')
const router = express.Router();
const upload = require('../middlewares/upload')


router.get("", async (req, res)=>{
    const vehicles = await Vehicle.find()
    return res.status(200).send(vehicles)
})

router.get("/tag/:id", async (req, res)=>{
    if(req.params.id == 'all'){
    vehicles = await Vehicle.find()
    } else vehicles = await Vehicle.find({tag : req.params.id})

    return res.status(200).send(vehicles)
})

router.get("/:id", async (req, res)=>{
    const reviews = await Reviews.find({vehicle_id: req.params.id}) //.lean().exec();
    let rating_sum = 0
    let count = 0

    for(var i=0; i< reviews.length; i++ ){
        rating_sum += +reviews[i].star
        count++
    }

    let rating = Math.floor(rating_sum/count)

    // rating = reviews.length
    const vehicles = await Vehicle.findById(req.params.id)
    return res.status(200).send({vehicles, rating})
})


router.post("", upload.any('images') , async (req, res)=>{
    // const filePaths = req.files.map(file => file.path)

    const vehicles = await Vehicle.create({
        name : req.body.name,
        price : req.body.price,
        key_specs : req.body.key_specs,
        images : req.body.images,
        features : req.body.features,
        update : req.body.update,
        tag : req.body.tag,
        location : req.body.location
    })
    return res.status(201).send(vehicles)
})

//get all reviews on a vehicle
router.get("/:id/reviews", async (req, res)=>{

    const reviews = await Reviews.find({vehicle_id: req.params.id}).lean().exec();
    const vehicle = await Vehicle.findById(req.params.id)
    return res.status(200).send({vehicle, reviews})
})


router.get("/:id/gallery", async (req, res)=>{
    const gallery = await Gallery.find({vehicle_id: req.params.id}).lean().exec();
    const vehicle = await Vehicle.findById(req.params.id)
    return res.status(200).send({vehicle, gallery})
})


module.exports = router