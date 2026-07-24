'use strict';

/**
 * API Response Utility
 * Standardises the JSON response shape across all controllers.
 *
 * Usage:
 *   res.status(200).json(apiResponse.success(data));
 *   res.status(400).json(apiResponse.error('Validation failed'));
 */

exports.success = (data, meta = {}) => ({
  status: 'success',
  data,
  ...meta,
});

exports.error = (message, details = null) => ({
  status: 'error',
  message,
  ...(details && { details }),
});
