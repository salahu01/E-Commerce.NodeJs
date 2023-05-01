import { Schema , model } from "mongoose";

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

export = model("Categaries", catogarySchema);
