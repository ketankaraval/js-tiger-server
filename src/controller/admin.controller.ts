import { AdminModel } from '../model/admin.model';
import { catchAsync } from '../types/miscellaneousInterface';
import { SuccessResponse } from '../utils/apiResponse';
import { AuthFailureError } from '../utils/apiError';
import { JWT_SECRETE_KEY } from '../config';
import * as jwt from 'jsonwebtoken';

import jwt_decode from 'jwt-decode';

export const createAdmin: catchAsync = async (req, res, next) => {
    const { jwtToken } = req.params;
    const userData: { email: string; name: string; picture: string } =
        jwt_decode(jwtToken);
    if (!userData) {
        throw next(new AuthFailureError('Invalid user token'));
    }
    const { email, name, picture } = userData;
    const admin = await AdminModel.findOne({ email }).lean().exec();
    if (!admin) {
        const newAdmin = await AdminModel.create({
            email,
            name,
            picture,
        });
        const jwtAccessToken: any = jwt.sign(
            {
                _id: newAdmin._id,
                email: newAdmin.email,
            },
            JWT_SECRETE_KEY!,
            { expiresIn: '8h' }
        );
        return new SuccessResponse(
            'User created successfully',
            jwtAccessToken
        ).send(res);
    }
    const jwtAccessToken: any = jwt.sign(
        {
            _id: admin._id,
            email: admin.email,
        },
        JWT_SECRETE_KEY!,
        { expiresIn: '8h' }
    );
    return new SuccessResponse(
        'User authenticated successfully',
        jwtAccessToken
    ).send(res);
};
