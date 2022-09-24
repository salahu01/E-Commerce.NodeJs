const { Schema, default: mongoose } = require("mongoose");

const flashsaleSchema = new Schema({
  productIds: {
    type: Array,
    required: true,
  },
});

module.exports = mongoose.model("flash_sale", flashsaleSchema);
