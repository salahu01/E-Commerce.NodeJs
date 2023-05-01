import { Schema , model } from "mongoose";

const favouriteSchema = new Schema({
    productIds: {
        type: Array,
        required: true,
      },
});

export = model("favourite", favouriteSchema);
