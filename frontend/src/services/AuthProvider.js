import { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';


const AuthContext = createContext({//creo contexto useContext
  auth: null,
  setAuth: () => {},
  user: null,
});

export const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {//uso contexto
  const [auth, setAuth] = useState(null);//indica si esta autenticado
  const [user, setUser] = useState(null);

  useEffect(() => {
    const isAuth = async () => {
        const baseURL = process.env.REACT_APP_API_URL
      try {
        const res = await axios.get(
            `${baseURL}/user/logged-user`,
          { withCredentials: true }
        );
      
        setUser(res.data);
      } catch(error) {
        setUser(null);
      };
    };

    isAuth();
  }, [auth]);

  return (
    <AuthContext.Provider value={{ auth, setAuth, user }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;