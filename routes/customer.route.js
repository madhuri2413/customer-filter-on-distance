import express from 'express';
import * as customerController from '../controller/customer.controller';
import {
  customerFilterValidationRules,
  validateResult,
} from '../middleware/validation';
const router = express.Router();
router.get(
  '/',
  customerFilterValidationRules(),
  validateResult,
  customerController.getSortedCustomerList
);
export default router;
