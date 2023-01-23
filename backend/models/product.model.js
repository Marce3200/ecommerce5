const { default: mongoose } = require("mongoose");

const productSchema = mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
  stock:{
    type:Number,
    require: true,
    default: 0
  },
  price:{
    type:Number,
    requiere:true
  },

  img:{
    type:String,
    requiere:true
  }

});
const product = mongoose.model("product", productSchema);
module.exports = product;