import { useAuthContext } from '@/context/AuthContext';

/**
 * useAuth
 * Convenience wrapper — exposes auth state (user, login, logout, isAuthenticated.)
 */
function useAuth() {
  return useAuthContext();
}

export default useAuth;
