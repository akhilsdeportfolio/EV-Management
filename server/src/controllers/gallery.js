const Gallery = require('../models/gallery')
const express = require('express')
const router = express.Router();
const upload = require('../middlewares/upload')


router.post("", async(req, res)=>{
    //const filePaths = req.files.map(file => file.path)

    const gallery = await Gallery.create({
        vehicle_id : req.body.vehicle_id,
        exterior : req.body.exterior,
        interior : req.body.interior,
        color : req.body.color,
        road_test : req.body.road_test,
        videos : req.body.video
    })

    return res.status(201).send(gallery)
})

//find gallery using vehicle id
router.get("/:id", async (req, res)=>{
    const gallery = await Gallery.find({vehicle_id : req.params.id})
    return res.status(200).send(gallery)
})

module.exports = router