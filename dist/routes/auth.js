"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const auth_cotroller_1 = __importDefault(require("../controller/auth_cotroller"));
router.route("/signUp").post(auth_cotroller_1.default.signUp);
router.route("/logIn").post(auth_cotroller_1.default.logIn);
module.exports = router;
