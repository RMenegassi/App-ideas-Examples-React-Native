import React from 'react';

import {Container, Text, ProgressTotal, ProgressActual} from './styles';

interface ClockProps {
  time: number;
  initTime: number;
}

const Clock = ({time, initTime}: ClockProps) => {
  return (
    <Container>
      <Text>
        {Math.floor(time / 60).toLocaleString('en-US', {
          minimumIntegerDigits: 2,
        })}
        :
        {(time % 60).toLocaleString('en-US', {
          minimumIntegerDigits: 2,
        })}
      </Text>
      <ProgressTotal>
        <ProgressActual progress={Math.ceil((time * 100) / initTime)} />
      </ProgressTotal>
    </Container>
  );
};

export default Clock;
