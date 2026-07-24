'use strict';

/**
 * Content Controller
 * Handles HTTP layer for content endpoints.
 * Business logic lives in src/services/content.service.js
 */

exports.getAll = async (req, res, next) => {
  try {
    // TODO: call contentService.getAll(req.user.id)
    res.status(200).json({ message: 'getAll — not yet implemented' });
  } catch (err) {
    next(err);
  }
};

exports.create = async (req, res, next) => {
  try {
    // TODO: call contentService.create(req.user.id, req.body)
    res.status(201).json({ message: 'create — not yet implemented' });
  } catch (err) {
    next(err);
  }
};

exports.getOne = async (req, res, next) => {
  try {
    // TODO: call contentService.getOne(req.user.id, req.params.id)
    res.status(200).json({ message: 'getOne — not yet implemented' });
  } catch (err) {
    next(err);
  }
};

exports.update = async (req, res, next) => {
  try {
    // TODO: call contentService.update(req.user.id, req.params.id, req.body)
    res.status(200).json({ message: 'update — not yet implemented' });
  } catch (err) {
    next(err);
  }
};

exports.remove = async (req, res, next) => {
  try {
    // TODO: call contentService.remove(req.user.id, req.params.id)
    res.status(204).send();
  } catch (err) {
    next(err);
  }
};
