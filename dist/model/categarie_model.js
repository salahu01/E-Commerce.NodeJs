"use strict";
const mongoose_1 = require("mongoose");
const catogarySchema = new mongoose_1.Schema({
    subCategoryIds: {
        type: Array,
        required: true,
    },
    categary: {
        type: String,
        required: true,
    },
});
module.exports = (0, mongoose_1.model)("Categaries", catogarySchema);
