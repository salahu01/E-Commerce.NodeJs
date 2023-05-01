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
var jwt = require("jsonwebtoken");
const auth = (_req, _res, next) => __awaiter(void 0, void 0, void 0, function* () {
    if (_req.headers && _req.headers.get('authorization')) {
        try {
            const token = _req.headers.get('authorization');
            yield jwt.verify(token, 'fake-jwt-secret');
            next();
        }
        catch (error) {
            _res.status(401).json({ error: 'Unauthorized' });
        }
    }
    else {
        _res.status(401).json({ error: 'headers error' });
    }
});
module.exports = auth;
