import { Router } from 'express';
import {
    createVendor,
    deleteVendor,
    getVendor,
    updateVendor,
} from '../../controller/vendor.controller';
import validate from '../../middleware/validate';
import catchAsync from '../../utils/catchAsync';
import {
    createVendorSchema,
    idSchema,
} from '../../validation/vendor.validation';
import jwtAuth from '../../middleware/isAuth';

const vendorRouter = Router();

vendorRouter.get('/', jwtAuth, catchAsync(getVendor));

vendorRouter.post(
    '/',
    jwtAuth,
    validate({ body: createVendorSchema }),
    catchAsync(createVendor)
);

vendorRouter.patch(
    '/:id',
    jwtAuth,
    validate({ params: idSchema }),
    catchAsync(updateVendor)
);

vendorRouter.delete(
    '/:id',
    jwtAuth,
    validate({ params: idSchema }),
    catchAsync(deleteVendor)
);

export default vendorRouter;
