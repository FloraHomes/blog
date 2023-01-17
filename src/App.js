// import './css/App.css';
// import './css/common.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar2 from './components/layouts/Navbar2';
import BlogList from './pages/blogs/list/BlogList';
import HomePage from './pages/home/HomePage';
import BlogDetails from './pages/blogs/details/BlogDetails';
import NewBlog from './pages/blogs/new/NewBlog';
import { QueryClient, QueryClientProvider } from 'react-query';
import WebRoutes from './common/WebRoutes';
import { Categories } from './pages/categories/Categories';
import { Toaster } from 'react-hot-toast';
import { PrivateRoutes } from './components/PrivateRoutes';
import { AdminLogin } from './pages/login/AdminLogin';
import { AuthContext, LoaderContext } from './context';
import { useEffect, useState } from 'react';

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
    <div className='contianer'>
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
              <Navbar2 />
              <Routes>
                <Route path={WebRoutes.home} element={<HomePage />} />
                <Route path={WebRoutes.login} element={<AdminLogin />} />
                <Route path={WebRoutes.blogs} element={<BlogList />} />
                <Route path={WebRoutes.blogDetails} element={<BlogDetails />} />
                <Route element={<PrivateRoutes />}>
                  <Route path={WebRoutes.categories} element={<Categories />} />
                  <Route path={WebRoutes.addBlog} element={<NewBlog />} />
                </Route>
              </Routes>
            </Router>
          </QueryClientProvider>
        </AuthContext.Provider>
      </LoaderContext.Provider>
    </div>
  );
}

export default App;
