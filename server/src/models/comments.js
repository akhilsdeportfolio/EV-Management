const mongoose = require('mongoose')

const commentSchema = new mongoose.Schema({
    name : {type:String, required:true},
    email : {type:String, required:true},
    text : {type:String, required:true},
    news_id : {type:mongoose.Schema.Types.ObjectId, ref:'news', required:true}
},
{
    versionKey:false,
    timestamps:true
})

module.exports = mongoose.model('comments', commentSchema)
