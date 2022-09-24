const { Schema, default: mongoose } = require("mongoose");

const SubCatogarySchema = new Schema({
  productid: {
    type: Array,
    required: true,
  },
  subCategary: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("subCategaries", SubCatogarySchema);
