const { Schema, default: mongoose } = require("mongoose");

const favouriteSchema = new Schema({
    productIds: {
        type: Array,
        required: true,
      },
});

module.exports = mongoose.model("favourite", favouriteSchema);
