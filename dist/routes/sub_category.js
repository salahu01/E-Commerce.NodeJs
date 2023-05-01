"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = __importDefault(require("express"));
const sub_category_controller_1 = __importDefault(require("../controller/sub_category_controller"));
const router = express_1.default.Router();
router
    .route("/")
    .get(sub_category_controller_1.default.getAllSubCategories);
router
    .route("/:id")
    .get(sub_category_controller_1.default.getOneSubCategory);
module.exports = router;
