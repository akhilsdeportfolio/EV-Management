const mongoose = require('mongoose')

const ticketSchema = new mongoose.Schema({
    name : {type:String, required:true},
    phone : {type:Number, required:true},
    email : {type:String, required:true},
    problem : {type:String, required:true},
},
{
    versionKey:false,
    timestamps:true
})

module.exports = mongoose.model('tickets', ticketSchema)
