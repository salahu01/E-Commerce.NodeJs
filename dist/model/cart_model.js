"use strict";
const mongoose_1 = require("mongoose");
const cartProductSchema = new mongoose_1.Schema({
    productId: {
        type: String,
        required: true,
    },
    productQuantity: {
        type: String,
        required: true,
    },
});
const cartSchema = new mongoose_1.Schema({
    products: [cartProductSchema],
});
module.exports = (0, mongoose_1.model)("cart", cartSchema);
