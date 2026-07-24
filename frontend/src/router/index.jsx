import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AppLayout, AuthLayout } from '@/layouts';

import Welcome   from '@/pages/Welcome';
import Workspace from '@/pages/Workspace';
import Analysis  from '@/pages/Analysis';
import Planner   from '@/pages/Planner';
import History   from '@/pages/History';

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        {/* ── Public (Auth layout) ───────────────────────────── */}
        <Route element={<AuthLayout />}>
          <Route path="/" element={<Welcome />} />
        </Route>

        {/* ── App (Sidebar layout) ──────────────────────────── */}
        <Route element={<AppLayout />}>
          <Route path="/workspace" element={<Workspace />} />
          <Route path="/analysis"  element={<Analysis />} />
          <Route path="/planner"   element={<Planner />} />
          <Route path="/history"   element={<History />} />
        </Route>

        {/* ── Fallback ──────────────────────────────────────── */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
