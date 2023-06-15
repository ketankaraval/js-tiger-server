"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = require("express");
const vendor_controller_1 = require("../../controller/vendor.controller");
const validate_1 = tslib_1.__importDefault(require("../../middleware/validate"));
const catchAsync_1 = tslib_1.__importDefault(require("../../utils/catchAsync"));
const vendor_validation_1 = require("../../validation/vendor.validation");
const vendorRouter = (0, express_1.Router)();
vendorRouter.post('/', (0, validate_1.default)({ body: vendor_validation_1.createVendorSchema }), (0, catchAsync_1.default)(vendor_controller_1.createVendor));
vendorRouter.patch('/:id', (0, validate_1.default)({ params: vendor_validation_1.idSchema }), (0, catchAsync_1.default)(vendor_controller_1.updateVendor));
vendorRouter.delete('/:id', (0, validate_1.default)({ params: vendor_validation_1.idSchema }), (0, catchAsync_1.default)(vendor_controller_1.deleteVendor));
exports.default = vendorRouter;
