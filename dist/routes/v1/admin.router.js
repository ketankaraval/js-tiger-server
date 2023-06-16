"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = require("express");
const validate_1 = tslib_1.__importDefault(require("../../middleware/validate"));
const catchAsync_1 = tslib_1.__importDefault(require("../../utils/catchAsync"));
const admin_validation_1 = require("../../validation/admin.validation");
const admin_controller_1 = require("../../controller/admin.controller");
const adminRouter = (0, express_1.Router)();
adminRouter.post('/login-with-google/:jwtToken', (0, validate_1.default)({ params: admin_validation_1.idSchema }), (0, catchAsync_1.default)(admin_controller_1.createAdmin));
exports.default = adminRouter;
