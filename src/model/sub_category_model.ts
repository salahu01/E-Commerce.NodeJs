import { Schema, model } from "mongoose";

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

export = model("subCategaries", SubCatogarySchema);
