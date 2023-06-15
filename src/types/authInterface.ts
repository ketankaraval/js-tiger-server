import { Document } from 'mongoose';

export interface IVendorModel extends Document {
    name: string;
    accountNo: number;
    bankName: string;
    addressLine1: string;
    addressLine2: string;
    city: string;
    country: string;
    pinCode: number;
}
