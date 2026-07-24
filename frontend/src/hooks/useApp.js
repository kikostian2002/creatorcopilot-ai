import { useAppContext } from '@/context/AppContext';

/**
 * useApp
 * Convenience wrapper — exposes global app state (sidebar, theme, etc.)
 */
function useApp() {
  return useAppContext();
}

export default useApp;
