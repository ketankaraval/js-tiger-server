"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteVendor = exports.updateVendor = exports.createVendor = exports.getVendor = void 0;
const apiError_1 = require("../utils/apiError");
const apiResponse_1 = require("../utils/apiResponse");
const vendor_model_1 = require("../model/vendor.model");
const getVendor = async (req, res, next) => {
    const vendors = await vendor_model_1.VendorModel.find({}).lean().exec();
    if (!vendors) {
        throw next(new apiError_1.BadRequestError('Error while fetching vendors'));
    }
    return new apiResponse_1.SuccessResponse('Success', vendors.map((vendor) => ({ ...vendor, id: vendor._id.toString() }))).send(res);
};
exports.getVendor = getVendor;
const createVendor = async (req, res, next) => {
    const vendor = await vendor_model_1.VendorModel.findOne({ name: req.body.name })
        .lean()
        .exec();
    if (vendor) {
        throw next(new apiError_1.BadRequestError('Vendor with this name already exists'));
    }
    const newVendor = await vendor_model_1.VendorModel.create(req.body);
    if (!newVendor) {
        throw next(new apiError_1.NoDataError('Failed to create vendor'));
    }
    return new apiResponse_1.SuccessResponse('Vendor created successfully', newVendor).send(res);
};
exports.createVendor = createVendor;
const updateVendor = async (req, res, next) => {
    const { id } = req.params;
    const update = await vendor_model_1.VendorModel.findByIdAndUpdate(id, req.body)
        .lean()
        .exec();
    if (!update) {
        throw next(new apiError_1.InternalError('Error while updating vendor'));
    }
    return new apiResponse_1.SuccessResponse('Vendor updated successfully', {
        update,
    }).send(res);
};
exports.updateVendor = updateVendor;
const deleteVendor = async (req, res, next) => {
    const { id } = req.params;
    const deletedVendor = await vendor_model_1.VendorModel.findByIdAndDelete(id).lean().exec();
    if (!deletedVendor) {
        throw next(new apiError_1.InternalError('Error while deleting vendor'));
    }
    return new apiResponse_1.SuccessResponse('Vendor deleted successfully', {
        deletedVendor,
    }).send(res);
};
exports.deleteVendor = deleteVendor;
