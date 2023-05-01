"use strict";
const mongoose_1 = require("mongoose");
const flashsaleSchema = new mongoose_1.Schema({
    productIds: {
        type: Array,
        required: true,
    },
});
module.exports = (0, mongoose_1.model)("flash_sale", flashsaleSchema);
