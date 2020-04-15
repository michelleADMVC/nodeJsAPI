const mongoose = require ('mongoose');
const {Schema} = mongoose;
glassSchema = new Schema({
    name_es:{type:String,required:true},
    name_en:{type:String,required:true},
    model:{type:String,required:true},
    view_model:{type:String,required:true},
    capacity:{type:Number,required:true},
    description_es:{type:String,required:true},
    description_en:{type:String,required:true},
    created_at:{type :Date,default : Date.now }
})
module.exports = mongoose.model('Glass',glassSchema);