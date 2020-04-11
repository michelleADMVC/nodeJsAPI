const mongoose = require ('mongoose');
const {Schema} = mongoose;
const coctelSchema = new Schema({
    name:{type:String,required:true},
    description: {type:String, required:true},
    premium:{type :Boolean,default : false},
    views : {type:Number,default : 0},
    created_at:{type :Date,default : Date.now },
   
})
module.exports = mongoose.model('Coctel',coctelSchema);   