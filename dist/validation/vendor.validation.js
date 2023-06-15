"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.idSchema = exports.createVendorSchema = void 0;
const tslib_1 = require("tslib");
const joi_1 = tslib_1.__importDefault(require("joi"));
const createVendorSchema = joi_1.default.object({
    name: joi_1.default.string().required(),
    accountNo: joi_1.default.number().integer(),
    bankName: joi_1.default.string(),
    addressLine1: joi_1.default.string(),
    addressLine2: joi_1.default.string(),
    city: joi_1.default.string(),
    country: joi_1.default.string(),
    pinCode: joi_1.default.number().integer(),
});
exports.createVendorSchema = createVendorSchema;
const idSchema = joi_1.default.object({
    id: joi_1.default.string().required(),
});
exports.idSchema = idSchema;
