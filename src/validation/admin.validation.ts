import Joi from 'joi';

const idSchema = Joi.object({
    jwtToken: Joi.string().required(),
});

export { idSchema };
