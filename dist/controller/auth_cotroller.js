"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const user_model_1 = __importDefault(require("../model/user_model"));
const bcrypt_1 = __importDefault(require("bcrypt"));
var jwt = require("jsonwebtoken");
const saltRounds = 10;
const signUp = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (!req.body.email || !req.body.name || !req.body.password) {
            res.status(400).json({ success: false, message: "Pass currect data", data: [] });
            return;
        }
        const user = yield user_model_1.default.findOne({ email: req.body.email });
        if (user) {
            res.status(200).json({ success: false, message: "User Already Exists !", data: [] });
            return;
        }
        const password = yield bcrypt_1.default.hash(req.body.password, saltRounds);
        const data = Object.assign(Object.assign({}, req.body), { password });
        const userData = yield user_model_1.default.create(data);
        const token = yield jwt.sign({ user }, "fake-jwt-secret");
        res.status(201).json({
            success: true,
            message: "User Created Succefully ",
            data: {
                name: userData.name,
                email: userData.email,
                id: userData.id,
                access_token: token,
            },
        });
    }
    catch (error) {
        res.status(404).json({ success: false, message: "Something Went Wrong !", data: error });
    }
});
const logIn = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (!req.body.email || !req.body.password) {
            res.status(400).json({ success: false, message: "Pass currect data", data: [] });
            return;
        }
        const user = yield user_model_1.default.findOne({ email: req.body.email });
        if (!user) {
            res.status(204).json({ success: false, message: "User not found !", data: [] });
            return;
        }
        if (!(yield bcrypt_1.default.compare(req.body.password, user.password))) {
            res.status(200).json({ success: false, message: "Wrong password", data: [] });
            return;
        }
        const token = yield jwt.sign({ user }, "fake-jwt-secret");
        res.status(201).json({
            success: true,
            message: "User Successfully Logged ",
            data: {
                name: user.name,
                email: user.email,
                id: user.id,
                access_token: token,
            },
        });
    }
    catch (error) {
        res.status(404).json({ success: false, message: "Something went worng !", data: error });
    }
});
module.exports = { signUp, logIn };
