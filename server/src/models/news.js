const mongoose = require('mongoose')
// const users = require('./users')


const newsSchema = new mongoose.Schema({
    title : {type:String, required:true},
    text : {type:String, required:true},
    tags : {type:String, required:true},
    likes : {type:Number},
    images : [{type:String, required:true}],
    user_id : {type:mongoose.Schema.Types.ObjectId, ref:'users', required:true}
},
{
    versionKey:false,
    timestamps:true
})

module.exports = mongoose.model('news', newsSchema)