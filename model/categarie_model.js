const { Schema, default: mongoose } = require("mongoose");

const catogarySchema = new Schema({
  subCategoryIds: {
    type: Array,
    required: true,
  },
  categary: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Categaries", catogarySchema);
