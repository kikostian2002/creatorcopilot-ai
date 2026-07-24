'use strict';

/**
 * Logger Utility
 * Thin abstraction over console (swap for winston / pino when ready).
 *
 * Usage:
 *   const logger = require('./logger');
 *   logger.info('Server started');
 *   logger.error('Something went wrong', err);
 */

const LOG_LEVELS = { debug: 0, info: 1, warn: 2, error: 3 };
const currentLevel = LOG_LEVELS[process.env.LOG_LEVEL] ?? LOG_LEVELS.debug;

const log = (level, ...args) => {
  if (LOG_LEVELS[level] >= currentLevel) {
    console[level](`[${level.toUpperCase()}]`, ...args);
  }
};

module.exports = {
  debug: (...args) => log('debug', ...args),
  info: (...args) => log('info', ...args),
  warn: (...args) => log('warn', ...args),
  error: (...args) => log('error', ...args),
};
