import React from 'react';
import { Paragrafo, Title } from './styled';

export default function Login() {
  return (
    <>
      <Title isRed={false}>
        Login
        <small>Oie</small>
      </Title>
      <Paragrafo>Lorem ipsum dolor sit amet.</Paragrafo>
      <button type="button">Enviar</button>
    </>
  );
}
