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
      name: 'Bruno Klein',
      email: 'brunoklein23@gmail.com',
      address: 'Admin Street, 123',
      city: 'Novo Hamburgo',
      state: 'Rio Grande do Sul',
      country: 'Brazil',
      phone: '+55 (51) 99880-1838',
      profilePicture:
        'https://media.licdn.com/dms/image/D4D03AQF_sFR2ARoPug/profile-displayphoto-shrink_800_800/0/1714480328350?e=1724284800&v=beta&t=jyk8GLQRAoxHGgwBnlHPU12zev9w05nbtJaIhBqhCm0',
      bio: 'Over 8 years of experience in front-end development, specializing in React and React Native.',
      socialMedia: {
        twitter: 'https://twitter.com/admin',
        linkedIn: 'https://www.linkedin.com/in/bruno-klein/',
      },
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
