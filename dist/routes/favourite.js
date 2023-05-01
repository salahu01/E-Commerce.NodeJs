"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = __importDefault(require("express"));
const favourite_controller_1 = __importDefault(require("../controller/favourite_controller"));
const auth_middleware_1 = __importDefault(require("../middleware/auth_middleware"));
const router = express_1.default.Router();
router
    .use(auth_middleware_1.default)
    .route("/:id")
    .get(favourite_controller_1.default.getOne)
    .post(favourite_controller_1.default.addOne);
module.exports = router;
