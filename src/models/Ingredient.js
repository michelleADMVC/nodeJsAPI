const mongoose = require ('mongoose');
const {Schema} = mongoose;
ingredientSchema = new Schema({
    name:{type:String,required:true},
    type : {type:String,required:true},
    color :{type:String,required:true},
    description: {type:String, required:true},
    created_at:{type :Date,default : Date.now }
})
module.exports = mongoose.model('Ingredient',ingredientSchema);