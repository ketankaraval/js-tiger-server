import { Router } from 'express';
import validate from '../../middleware/validate';
import catchAsync from '../../utils/catchAsync';
import { idSchema } from '../../validation/admin.validation';
import { createAdmin } from '../../controller/admin.controller';

const adminRouter = Router();

adminRouter.post(
    '/login-with-google/:jwtToken',
    validate({ params: idSchema }),
    catchAsync(createAdmin)
);

export default adminRouter;
