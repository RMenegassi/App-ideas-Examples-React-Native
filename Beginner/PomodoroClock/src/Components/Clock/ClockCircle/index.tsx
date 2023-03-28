import React from 'react';

import {
  Container,
  ContainerLeft,
  ContainerRight,
  CircleLeft,
  CircleRight,
} from './styles';

interface ClockCircleProps {
  percentage: number;
}

const ClockCircle = ({percentage = 100}: ClockCircleProps) => {
  let rotateRight = '';
  let rotateLeft = '';

  if (percentage > 50) {
    rotateRight = `${45}deg`;
    rotateLeft = `${45 + (percentage - 50) * 3.6}deg`;
  } else {
    rotateRight = `${-135 + percentage * 3.6}deg`;
    rotateLeft = `${45}deg`;
  }

  return (
    <Container>
      <ContainerLeft>
        <CircleLeft rotateBy={rotateLeft} />
      </ContainerLeft>
      <ContainerRight>
        <CircleRight rotateBy={rotateRight} />
      </ContainerRight>
    </Container>
  );
};

export default ClockCircle;
