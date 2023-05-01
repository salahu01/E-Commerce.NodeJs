"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const cart_controller_1 = __importDefault(require("../controller/cart_controller"));
const auth_middleware_1 = __importDefault(require("../middleware/auth_middleware"));
router
    .use(auth_middleware_1.default)
    .route("/:id")
    .get(cart_controller_1.default.getOne)
    .post(cart_controller_1.default.addOne);
module.exports = router;
