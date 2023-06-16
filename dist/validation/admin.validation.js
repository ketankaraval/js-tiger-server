"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.idSchema = void 0;
const tslib_1 = require("tslib");
const joi_1 = tslib_1.__importDefault(require("joi"));
const idSchema = joi_1.default.object({
    jwtToken: joi_1.default.string().required(),
});
exports.idSchema = idSchema;
