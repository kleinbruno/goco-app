import React from 'react';
import {createContext, useState} from 'react';

export const AuthenticationContext = createContext();

export function AuthenticationProvider({children}) {
  const [user, setUser] = useState({});
  const [isSignedIn, setIsSignedIn] = useState(false);

  function setFakeUser() {
    setUser({
      name: 'Admin User',
      email: 'admin@admin.com',
      address: 'Admin Street, 123',
      city: 'Admin City',
      state: 'Admin State',
      country: 'Admin Country',
      phone: '123456789',
    });
  }

  function login(email, password) {
    if (email === 'admin' && password === 'admin') {
      setFakeUser();
      setIsSignedIn(true);
      return 'Success';
    } else {
      return 'Invalid credentials';
    }
  }

  return (
    <AuthenticationContext.Provider
      value={{user, login, isSignedIn, setIsSignedIn}}>
      {children}
    </AuthenticationContext.Provider>
  );
}
