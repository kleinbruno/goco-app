import React from 'react';
import {createContext, useState} from 'react';
import {commonTexts, loginTexts} from '../translations/en';
import {adminEnum} from '../enums';

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
    if (email === adminEnum.ADMIN && password === adminEnum.ADMIN) {
      setFakeUser();
      return commonTexts.success;
    } else {
      return loginTexts.invalidCredentials;
    }
  }

  return (
    <AuthenticationContext.Provider
      value={{user, login, isSignedIn, setIsSignedIn}}>
      {children}
    </AuthenticationContext.Provider>
  );
}
