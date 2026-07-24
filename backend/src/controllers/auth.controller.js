'use strict';

/**
 * Auth Controller
 * Handles HTTP layer for authentication endpoints.
 * Business logic lives in src/services/auth.service.js
 */

exports.register = async (req, res, next) => {
  try {
    // TODO: call authService.register(req.body)
    res.status(201).json({ message: 'register — not yet implemented' });
  } catch (err) {
    next(err);
  }
};

exports.login = async (req, res, next) => {
  try {
    // TODO: call authService.login(req.body)
    res.status(200).json({ message: 'login — not yet implemented' });
  } catch (err) {
    next(err);
  }
};

exports.logout = async (req, res, next) => {
  try {
    // TODO: call authService.logout(req.user)
    res.status(200).json({ message: 'logout — not yet implemented' });
  } catch (err) {
    next(err);
  }
};
