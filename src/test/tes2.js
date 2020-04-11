const Coctel = require('../models/Coctel');
require('../database/connection');
const find = async () => {
    let res = await Coctel.find();
    console.log(res);
    
    return res;
  };
  
exports.find = find;
  