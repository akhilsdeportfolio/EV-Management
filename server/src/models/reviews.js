const mongoose = require('mongoose')

const reviewSchema = new mongoose.Schema({
    name : {type:String, required:true},
    email : {type:String, required:true},
    text : {type:String, required:true},
    star : {type:Number, required:true},
    vehicle_id : {type:mongoose.Schema.Types.ObjectId, ref:'vehicles', required:true}
},
{
    versionKey:false,
    timestamps:true
})

module.exports = mongoose.model('reviews', reviewSchema)
