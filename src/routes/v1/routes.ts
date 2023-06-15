import { Router } from 'express';
import vendorRouter from './vendor.router';

const router = Router();

router.use('/vendor', vendorRouter);

export default router;
