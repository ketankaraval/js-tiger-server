import { catchAsync } from '../types/miscellaneousInterface';
import { BadRequestError, InternalError, NoDataError } from '../utils/apiError';
import { SuccessResponse } from '../utils/apiResponse';
import { VendorModel } from '../model/vendor.model';

export const createVendor: catchAsync = async (req, res, next) => {
    const vendor = await VendorModel.findOne({ name: req.body.name })
        .lean()
        .exec();
    if (vendor) {
        throw next(new BadRequestError('Vendor with this name already exists'));
    }
    const newVendor = await VendorModel.create(req.body);
    if (!newVendor) {
        throw next(new NoDataError('Failed to create vendor'));
    }
    return new SuccessResponse('Vendor created successfully', newVendor).send(
        res
    );
};

export const updateVendor: catchAsync = async (req, res, next) => {
    const { id } = req.params;
    const update = await VendorModel.findByIdAndUpdate(id, req.body)
        .lean()
        .exec();
    if (!update) {
        throw next(new InternalError('Error while updating vendor'));
    }
    return new SuccessResponse('Vendor updated successfully', {
        update,
    }).send(res);
};

export const deleteVendor: catchAsync = async (req, res, next) => {
    const { id } = req.params;
    const deletedVendor = await VendorModel.findByIdAndDelete(id).lean().exec();
    if (!deletedVendor) {
        throw next(new InternalError('Error while deleting vendor'));
    }
    return new SuccessResponse('Vendor deleted successfully', {
        deletedVendor,
    }).send(res);
};
