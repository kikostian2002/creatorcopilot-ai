'use strict';

/**
 * User Controller
 * Handles HTTP layer for user profile endpoints.
 * Business logic lives in src/services/user.service.js
 */

exports.getMe = async (req, res, next) => {
  try {
    // TODO: call userService.getById(req.user.id)
    res.status(200).json({ message: 'getMe — not yet implemented' });
  } catch (err) {
    next(err);
  }
};

exports.updateMe = async (req, res, next) => {
  try {
    // TODO: call userService.update(req.user.id, req.body)
    res.status(200).json({ message: 'updateMe — not yet implemented' });
  } catch (err) {
    next(err);
  }
};
