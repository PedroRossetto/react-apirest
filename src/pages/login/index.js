import React from 'react';
import { toast } from 'react-toastify';
import { Container } from '../../styles/GlobalStyles';
import { Paragrafo, Title } from './styled';

export default function Login() {
  toast.success('Bem vindo ao site em produção ❤️❤️', { toastId: 'toast1' });
  return (
    <Container>
      <Title>Login</Title>
      <Paragrafo>Bem vindo à página de login!</Paragrafo>
      <button type="button">Enviar</button>
    </Container>
  );
}
