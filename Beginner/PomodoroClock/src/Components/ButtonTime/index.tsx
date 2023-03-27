import React from 'react';

import {Container, Title, Button, Text} from './styles';

interface ButtonTimeProps {
  title: string;
  timeSession: string;
}

const ButtonTime = ({title, timeSession}: ButtonTimeProps) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Button activeOpacity={0.7}>
        <Text>{timeSession}</Text>
      </Button>
    </Container>
  );
};

export default ButtonTime;
