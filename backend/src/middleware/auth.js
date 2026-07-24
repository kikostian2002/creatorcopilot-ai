'use strict';

/**
 * Auth Middleware
 * Validates the JWT token attached to incoming requests.
 * Attaches the decoded user payload to req.user.
 */

exports.authenticate = (req, res, next) => {
  // TODO: extract Bearer token from Authorization header,
  //       verify with jwt.verify, attach decoded payload to req.user
  next();
};

/**
 * Role-based authorisation factory.
 * Usage: router.use(authorize('admin'))
 */
exports.authorize = (...roles) => (req, res, next) => {
  // TODO: check req.user.role against allowed roles
  next();
};
