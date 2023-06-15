import { Router } from 'express';
import {
    createVendor,
    deleteVendor,
    updateVendor,
} from '../../controller/vendor.controller';
import validate from '../../middleware/validate';
import catchAsync from '../../utils/catchAsync';
import {
    createVendorSchema,
    idSchema,
} from '../../validation/vendor.validation';

const vendorRouter = Router();

vendorRouter.post(
    '/',
    validate({ body: createVendorSchema }),
    catchAsync(createVendor)
);

vendorRouter.patch(
    '/:id',
    validate({ params: idSchema }),
    catchAsync(updateVendor)
);

vendorRouter.delete(
    '/:id',
    validate({ params: idSchema }),
    catchAsync(deleteVendor)
);

export default vendorRouter;
