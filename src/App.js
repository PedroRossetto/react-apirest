import React from 'react';
import Login from './pages/login';
import GlobalStyles, { Container } from './styles/GlobalStyles';
import Header from './components/Header';

function App() {
  return (
    <>
      <Header />
      <Container>
        <Login />
        <GlobalStyles />
      </Container>
    </>
  );
}

export default App;
