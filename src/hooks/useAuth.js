import { useContext } from 'react';
import { AuthContext } from '../context';

export const useAuth = () => {
  const { token, setToken, setCurrentUser, currentUser } =
    useContext(AuthContext);

  const userLogin = (data) => {
    localStorage.setItem(process.env.REACT_APP_TOKEN_KEY, data.token);
    localStorage.setItem(process.env.REACT_APP_USER, JSON.stringify(data));
    setToken(data.token);
    setCurrentUser(data);
  };

  const Logout = async () => {
    localStorage.clear();
    setToken('');
    setCurrentUser(null);
  };
  return {
    userLogin,
    Logout,
    token,
    currentUser,
  };
};

export default useAuth;
