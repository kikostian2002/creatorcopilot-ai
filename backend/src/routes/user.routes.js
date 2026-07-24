'use strict';

const { Router } = require('express');
const userController = require('../controllers/user.controller');
const { authenticate } = require('../middleware/auth');

const router = Router();

// GET  /api/v1/users/me         — get the authenticated user's profile
router.get('/me', authenticate, userController.getMe);

// PATCH /api/v1/users/me        — update the authenticated user's profile
router.patch('/me', authenticate, userController.updateMe);

module.exports = router;
