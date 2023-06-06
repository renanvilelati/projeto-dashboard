import { BrowserRouter } from 'react-router-dom';
import RouterApp from './routes';

import './App.css';
import AuthProvider from './contexts/AuthContext';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <RouterApp />
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
