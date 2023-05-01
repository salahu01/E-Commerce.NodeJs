import { Schema , model } from "mongoose";

const flashsaleSchema = new Schema({
  productIds: {
    type: Array,
    required: true,
  },
});

export = model("flash_sale", flashsaleSchema);
