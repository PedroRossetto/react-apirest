import React from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { Container } from '../../styles/GlobalStyles';
import { Paragrafo, Title } from './styled';

export default function Login() {
  const dispatch = useDispatch();
  function handleClick(e) {
    e.preventDefault();

    dispatch({
      type: 'BOTAO_CLICADO',
    });
  }

  toast.success('Bem vindo ao site em produção ❤️❤️', { toastId: 'toast1' });
  return (
    <Container>
      <Title>Login</Title>
      <Paragrafo>Bem vindo à página de login!</Paragrafo>
      <button type="button" onClick={handleClick}>
        Enviar
      </button>
    </Container>
  );
}
