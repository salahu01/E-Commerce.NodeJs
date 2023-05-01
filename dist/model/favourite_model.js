"use strict";
const mongoose_1 = require("mongoose");
const favouriteSchema = new mongoose_1.Schema({
    productIds: {
        type: Array,
        required: true,
    },
});
module.exports = (0, mongoose_1.model)("favourite", favouriteSchema);
