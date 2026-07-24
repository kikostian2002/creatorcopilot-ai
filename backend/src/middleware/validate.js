'use strict';

/**
 * Validation Middleware
 * Thin wrapper to plug in a schema validation library (e.g. Joi, Zod).
 * Usage: router.post('/', validate(schema), controller.create)
 */

// TODO: implement validate(schema) that calls schema.parse / schema.validate
//       and calls next(err) on failure

exports.validate = (_schema) => (_req, _res, next) => {
  // placeholder — replace with real validation logic
  next();
};
