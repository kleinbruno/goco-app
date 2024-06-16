import React from 'react';
import {Routes} from './src/routes';
import {ThemaProvider} from './src/contexts';

function App() {
  return (
    <ThemaProvider>
      <Routes />
    </ThemaProvider>
  );
}

export default App;
