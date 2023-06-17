"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createAdmin = void 0;
const tslib_1 = require("tslib");
const admin_model_1 = require("../model/admin.model");
const apiResponse_1 = require("../utils/apiResponse");
const apiError_1 = require("../utils/apiError");
const config_1 = require("../config");
const jwt = tslib_1.__importStar(require("jsonwebtoken"));
const jwt_decode_1 = tslib_1.__importDefault(require("jwt-decode"));
const createAdmin = async (req, res, next) => {
    const { jwtToken } = req.params;
    const userData = (0, jwt_decode_1.default)(jwtToken);
    if (!userData) {
        throw next(new apiError_1.AuthFailureError('Invalid user token'));
    }
    const { email, name, picture } = userData;
    const admin = await admin_model_1.AdminModel.findOne({ email }).lean().exec();
    if (!admin) {
        const newAdmin = await admin_model_1.AdminModel.create({
            email,
            name,
            picture,
        });
        const jwtAccessToken = jwt.sign({
            _id: newAdmin._id,
            email: newAdmin.email,
        }, config_1.JWT_SECRETE_KEY, { expiresIn: '8h' });
        return new apiResponse_1.SuccessResponse('User created successfully', jwtAccessToken).send(res);
    }
    const jwtAccessToken = jwt.sign({
        _id: admin._id,
        email: admin.email,
    }, config_1.JWT_SECRETE_KEY, { expiresIn: '8h' });
    return new apiResponse_1.SuccessResponse('User authenticated successfully', jwtAccessToken).send(res);
};
exports.createAdmin = createAdmin;
