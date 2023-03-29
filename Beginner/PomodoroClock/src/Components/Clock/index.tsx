import React from 'react';

import ClockCircle from './ClockCircle';

import {Container, Text} from './styles';

interface ClockProps {
  time: number;
  initTime: number;
}

const Clock = ({time, initTime}: ClockProps) => {
  return (
    <Container>
      <Text final={time === 0 ? true : false}>
        {Math.floor(time / 60).toLocaleString('en-US', {
          minimumIntegerDigits: 2,
        })}
        :
        {(time % 60).toLocaleString('en-US', {
          minimumIntegerDigits: 2,
        })}
      </Text>
      <ClockCircle percentage={Math.ceil((time * 100) / initTime)} />
    </Container>
  );
};

export default Clock;
