import React from 'react';
import Login from './pages/login';
import GlobalStyles, { Container } from './styles/GlobalStyles';

function App() {
  return (
    <Container>
      <Login />
      <GlobalStyles />
    </Container>
  );
}

export default App;
