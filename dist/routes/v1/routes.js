"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = require("express");
const vendor_router_1 = tslib_1.__importDefault(require("./vendor.router"));
const router = (0, express_1.Router)();
router.use('/vendor', vendor_router_1.default);
exports.default = router;
