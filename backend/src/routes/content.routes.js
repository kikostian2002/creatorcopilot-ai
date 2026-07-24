'use strict';

const { Router } = require('express');
const contentController = require('../controllers/content.controller');
const { authenticate } = require('../middleware/auth');

const router = Router();

// All content routes require authentication
router.use(authenticate);

// GET  /api/v1/content          — list all content for the authenticated user
router.get('/', contentController.getAll);

// POST /api/v1/content          — create / generate new content
router.post('/', contentController.create);

// GET  /api/v1/content/:id      — get a single content item
router.get('/:id', contentController.getOne);

// PATCH /api/v1/content/:id     — update a content item
router.patch('/:id', contentController.update);

// DELETE /api/v1/content/:id    — delete a content item
router.delete('/:id', contentController.remove);

module.exports = router;
