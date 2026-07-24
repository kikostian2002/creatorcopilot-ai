import { createContext, useContext, useState } from 'react';

/**
 * AuthContext
 * Holds the authenticated user and session helpers.
 */

const AuthContext = createContext(null);

export function useAuthContext() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuthContext must be used inside <AuthProvider>');
  return ctx;
}

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

  const login = (userData, accessToken) => {
    setUser(userData);
    setToken(accessToken);
    // TODO: persist to localStorage / cookie
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    // TODO: clear persisted session
  };

  const value = {
    user,
    token,
    isAuthenticated: !!user,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthProvider;
