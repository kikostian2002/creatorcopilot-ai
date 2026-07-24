# CreatorCopilot AI — Frontend

React + Vite frontend scaffold for CreatorCopilot AI.

## Getting Started

```bash
# Install dependencies
npm install

# Copy env template
cp .env.example .env

# Start dev server (http://localhost:5173)
npm run dev
```

## Environment Variables

| Variable       | Description                          | Default               |
|----------------|--------------------------------------|-----------------------|
| `VITE_API_URL` | Backend API base URL                 | `/api/v1` (proxied)   |

The Vite dev server proxies `/api` → `http://localhost:3000` automatically.

## Project Structure

```
src/
├── assets/           Static assets (images, fonts, icons)
├── components/
│   ├── common/       Button, Spinner, PageHeader
│   ├── chat/         ChatInput, ChatMessage
│   ├── cards/        ContentCard, StatCard
│   └── timeline/     TimelineItem
├── context/          AppContext, AuthContext
├── hooks/            useApp, useAuth, useFetch
├── layouts/          AppLayout (sidebar), AuthLayout (centred card)
├── pages/            Welcome, Workspace, Analysis, Planner, History
├── router/           React Router v6 config
├── services/         api.js, auth.service.js, content.service.js
└── styles/           tokens.css, index.css
```
