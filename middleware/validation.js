import { validationResult, query } from 'express-validator';

export const customerFilterValidationRules = () => {
  return [
    query('rangeInKm')
      .notEmpty()
      .withMessage('rangeInKm is Required')
      .isNumeric(),
  ];
};

export const validateResult = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(400).json({ errors: errors.array() });
    return;
  }
  next();
};
