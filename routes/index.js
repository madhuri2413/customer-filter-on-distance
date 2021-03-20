import express from 'express';
import customerRoute from './customer.route';
const router = express.Router();
router.use('/customers', customerRoute);
export default router;
