const News = require('../models/news')
const Comments = require('../models/comments')

const express = require('express')
const router = express.Router();
const upload = require('../middlewares/upload')
// const 

router.get("", async (req, res)=>{
    const news = await News.find().sort({"createdAt": -1}) //.populate({path : "user_id", select: 'name'})
    
    return res.status(200).send(news)
})

router.get("/:id", async (req, res)=>{
    const news = await News.findById(req.params.id) //.populate({path : "user_id", select: 'name'})
    return res.status(200).send(news)
})

//News post
router.post("", async (req, res)=>{
   // const filePaths = req.files.map(file => file.path)

    const news = await News.create({
        title : req.body.title,
        text : req.body.text,
        tags : req.body.tags,
        likes : req.body.likes,
        images : req.body.images,
        user_id : req.body.user_id
    })
    return res.status(201).send(news)
})


//get news and all comments on that news article

router.get("/:id/comments", async(req, res)=>{
    const comments = await Comments.find({news_id: req.params.id}).lean().exec();
    const news = await News.findById(req.params.id)
    return res.status(200).send({ news, comments})
})

module.exports = router