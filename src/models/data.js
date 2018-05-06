const mongoose = require('mongoose');

const sepatuSchema = mongoose.Schema({
  id :{
    type : Number,
    index : true
  },
  merk : {
    type : String,
    required : true,
    lowercase : true
  },
  harga : Number
});

module.exports = mongoose.model('data', sepatuSchema);
