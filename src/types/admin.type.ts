import { Document } from 'mongoose';

export interface IAdminModel extends Document {
    name: string;
    email: string;
    picture?: string;
}
