import { createContext, useContext, useState } from 'react';

/**
 * AppContext
 * Holds global UI state: sidebar open/close, active theme, notifications.
 */

const AppContext = createContext(null);

export function useAppContext() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error('useAppContext must be used inside <AppProvider>');
  return ctx;
}

function AppProvider({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => setSidebarOpen((prev) => !prev);

  const value = {
    sidebarOpen,
    toggleSidebar,
    // TODO: add theme, notifications, etc.
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export default AppProvider;
