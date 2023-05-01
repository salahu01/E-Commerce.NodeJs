"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = __importDefault(require("express"));
const flash_sale_controller_1 = __importDefault(require("../controller/flash_sale_controller"));
const router = express_1.default.Router();
router
    .route("/")
    .get(flash_sale_controller_1.default.getAllFalshProducts);
router
    .route("/:id")
    .get(flash_sale_controller_1.default.getOneFlashProduct);
module.exports = router;
