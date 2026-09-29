import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem('bytespace_user');
    return saved ? JSON.parse(saved) : {
      name: 'Sojib Ahmed',
      email: 'sojib.ahmed@example.com',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
      isLoggedIn: true
    };
  });

  useEffect(() => {
    if (user) {
      localStorage.setItem('bytespace_user', JSON.stringify(user));
    } else {
      localStorage.removeItem('bytespace_user');
    }
  }, [user]);

  const login = (email, _password) => {
    const loggedUser = {
      name: email.split('@')[0].replace('.', ' ').toUpperCase(),
      email: email,
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
      isLoggedIn: true
    };
    setUser(loggedUser);
    return loggedUser;
  };

  const signup = (name, email, _password) => {
    const newUser = {
      name: name,
      email: email,
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&auto=format&fit=crop&q=80',
      isLoggedIn: true
    };
    setUser(newUser);
    return newUser;
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
