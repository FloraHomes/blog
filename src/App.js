// import './css/App.css';
// import './css/common.css';
import { BrowserRouter as Router } from 'react-router-dom';

import { QueryClient, QueryClientProvider } from 'react-query';

import { Toaster } from 'react-hot-toast';

import { AuthContext, LoaderContext } from './context';
import { useEffect, useState } from 'react';
import { Routing } from './components/routing/Routing';

const queryClient = new QueryClient();

function App() {
  const [token, setToken] = useState('');
  const [currentUser, setCurrentUser] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getLoginState();
  }, []);

  const getLoginState = async () => {
    const token = await localStorage.getItem(process.env.REACT_APP_TOKEN_KEY);
    const user = await localStorage.getItem(process.env.REACT_APP_BLOG_ADMIN);
    if (token) {
      setToken(token);
      setCurrentUser(JSON.parse(user));
    }
  };

  return (
    <LoaderContext.Provider value={{ loading, setLoading }}>
      <AuthContext.Provider
        value={{
          token,
          setToken,
          currentUser,
          setCurrentUser,
        }}
      >
        <QueryClientProvider client={queryClient}>
          <Toaster position='top-right' />
          <Router>
            <Routing />
          </Router>
        </QueryClientProvider>
      </AuthContext.Provider>
    </LoaderContext.Provider>
  );
}

export default App;
