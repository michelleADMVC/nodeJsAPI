const mongoose = require ('mongoose');
const {Schema} = mongoose;
stepSchema = new Schema({
    description:{type:[String],required:true},
    created_at:{type :Date,default : Date.now }
})
module.exports = mongoose.model('step',stepSchema);