"use strict";
const mongoose_1 = require("mongoose");
const SubCatogarySchema = new mongoose_1.Schema({
    productid: {
        type: Array,
        required: true,
    },
    subCategary: {
        type: String,
        required: true,
    },
});
module.exports = (0, mongoose_1.model)("subCategaries", SubCatogarySchema);
