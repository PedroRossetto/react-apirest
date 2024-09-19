import React from 'react';
import { Title } from './styled';
import { Container } from '../../styles/GlobalStyles';

export default function Page404() {
  return (
    <Container>
      <Title isRed={false}>
        <h1>Infelizmente está página ainda não existe</h1>
      </Title>
    </Container>
  );
}
