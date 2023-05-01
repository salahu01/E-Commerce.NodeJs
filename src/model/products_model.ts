import { Schema , model } from "mongoose";

const productsSchema = new Schema({
  product: {
    type: String,
    required: true,
  },
  actualPrice: {
    type: Number,
    required: true,
  },
  currentPrice: {
    type: Number,
    required: true,
  },
  offInPercentage: {
    type: String,
    required: true,
  },
  categary: {
    type: String,
    required: true,
  },
  subCategary: {
    type: String,
    required: true,
  },
  flashsale: {
    type: Boolean,
    required: true,
  },
  image: {
    type: Array,
    required: true,
  },
  size: {
    type: Array,
    required: true,
  },
});

export = model("Products", productsSchema);
