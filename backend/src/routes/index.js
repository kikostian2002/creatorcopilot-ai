'use strict';

const { Router } = require('express');

const authRoutes = require('./auth.routes');
const contentRoutes = require('./content.routes');
const userRoutes = require('./user.routes');

const router = Router();

router.use('/auth', authRoutes);
router.use('/content', contentRoutes);
router.use('/users', userRoutes);

module.exports = router;
