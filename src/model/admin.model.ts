import { model, Schema } from 'mongoose';
import { IAdminModel } from '../types/admin.type';

const adminSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            require: true,
            unique: true,
        },
        picture: String,
    },
    {
        timestamps: true,
    }
);

export const AdminModel = model<IAdminModel>('admin', adminSchema);
