import { model, Schema } from 'mongoose';
import { IVendorModel } from '../types/vendor.type';

const vendorSchema = new Schema(
    {
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
    },
    {
        timestamps: true,
    }
);

export const VendorModel = model<IVendorModel>('vendor', vendorSchema);
