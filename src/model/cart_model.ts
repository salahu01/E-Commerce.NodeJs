import { Schema, model } from "mongoose";


const cartProductSchema = new Schema({
  productId: {
    type: String,
    required: true,
  },
  productQuantity: {
    type: Number,
    required: true,
  },
});

const cartSchema = new Schema({
  products: [cartProductSchema],
});

export = model("cart", cartSchema);
