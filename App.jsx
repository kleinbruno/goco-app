import React from 'react';
import {Routes} from './src/routes';
import {ThemeProvider} from './src/contexts';

function App() {
  return (
    <ThemeProvider>
      <Routes />
    </ThemeProvider>
  );
}

export default App;
