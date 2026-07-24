import AppRouter from '@/router';
import AppProvider from '@/context/AppContext';
import AuthProvider from '@/context/AuthContext';

function App() {
  return (
    <AuthProvider>
      <AppProvider>
        <AppRouter />
      </AppProvider>
    </AuthProvider>
  );
}

export default App;
