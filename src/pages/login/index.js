import React from 'react';

import { Container } from '../../styles/GlobalStyles';
import { Paragrafo, Title } from './styled';

export default function Login() {
  return (
    <Container>
      <Title isRed={false}>Login</Title>
      <Paragrafo>Bem vindo à página de login!</Paragrafo>
      <button type="button">Enviar</button>
    </Container>
  );
}
