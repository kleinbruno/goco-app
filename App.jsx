import React from 'react';
import {Routes} from './src/routes';
import {ThemeProvider, AuthenticationProvider} from './src/contexts';

function App() {
  return (
    <ThemeProvider>
      <AuthenticationProvider>
        <Routes />
      </AuthenticationProvider>
    </ThemeProvider>
  );
}

export default App;
