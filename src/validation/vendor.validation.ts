import Joi from 'joi';

const createVendorSchema = Joi.object({
    name: Joi.string().required(),
    accountNo: Joi.number().integer(),
    bankName: Joi.string(),
    addressLine1: Joi.string(),
    addressLine2: Joi.string(),
    city: Joi.string(),
    country: Joi.string(),
    pinCode: Joi.number().integer(),
});

const idSchema = Joi.object({
    id: Joi.string().required(),
});

export { createVendorSchema, idSchema };
