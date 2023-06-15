"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VendorModel = void 0;
const mongoose_1 = require("mongoose");
const vendorSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    accountNo: Number,
    bankName: String,
    addressLine1: String,
    addressLine2: String,
    city: String,
    country: String,
    pinCode: Number,
}, {
    timestamps: true,
});
exports.VendorModel = (0, mongoose_1.model)('vendor', vendorSchema);
