'use strict';

const { Router } = require('express');
const authController = require('../controllers/auth.controller');

const router = Router();

// POST /api/v1/auth/register
router.post('/register', authController.register);

// POST /api/v1/auth/login
router.post('/login', authController.login);

// POST /api/v1/auth/logout
router.post('/logout', authController.logout);

module.exports = router;
