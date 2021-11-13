const mongoose = require('mongoose')

const gallerySchema = new mongoose.Schema({
    vehicle_id : {type:mongoose.Schema.Types.ObjectId, ref:'vehicles', required:true},
    exterior : [{type:String, required:true}],
    interior : [{type:String, required:true}],
    color : [{type:String, required:true}],
    road_test : [{type:String, required:true}],
    videos : [{type:String, required:true}],
    // type :
},
{
    versionKey:false
})

module.exports = mongoose.model('gallery', gallerySchema)