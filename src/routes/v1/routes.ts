import { Router } from 'express';
import vendorRouter from './vendor.router';
import adminRouter from './admin.router';

const router = Router();

router.use('/vendor', vendorRouter);
router.use('/admin', adminRouter);

export default router;
