'use strict';

require('dotenv').config();
const app = require('./app');

const PORT = process.env.PORT || 3000;

const server = app.listen(PORT, () => {
  console.log(
    `[server] CreatorCopilot AI backend running on port ${PORT} — env: ${process.env.NODE_ENV || 'development'}`
  );
});

// ─── Graceful Shutdown ────────────────────────────────────────────────────────
process.on('SIGTERM', () => {
  console.log('[server] SIGTERM received — shutting down gracefully...');
  server.close(() => {
    console.log('[server] Server closed.');
    process.exit(0);
  });
});

process.on('SIGINT', () => {
  console.log('[server] SIGINT received — shutting down gracefully...');
  server.close(() => {
    console.log('[server] Server closed.');
    process.exit(0);
  });
});

module.exports = server;
