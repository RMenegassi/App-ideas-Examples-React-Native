import React, {useEffect, useState} from 'react';

import {
  Container,
  ContainerTitle,
  TextSession,
  ContainerButtons,
} from './styles';

import ButtonTime from './Components/ButtonTime';
import Clock from './Components/Clock';
import ButtonActions from './Components/ButtonActions';

function App() {
  const [time, setTime] = useState(60);
  const [minutos, setMinutos] = useState('');
  const [segundos, setSegundos] = useState('');
  const [running, setRunning] = useState(false);
  const [initTime, setInitTime] = useState(60);
  const [session, setSession] = useState(1);

  useEffect(() => {
    console.log(running);
    const timer = running
      ? setInterval(() => {
          setTime(seconds => seconds - 1);
        }, 1000)
      : 1;

    return () => {
      if (running) {
        clearInterval(timer);
      }
    };
  }, [running]);

  if (time <= 0 && running === true) {
    setRunning(false);
  }

  return (
    <Container>
      <ContainerTitle>
        <TextSession>Session {session}</TextSession>
      </ContainerTitle>

      <ContainerButtons>
        <ButtonTime title="Time" timeSession={'17:30'} />
        <ButtonTime title="Break" timeSession={'05:00'} />
      </ContainerButtons>

      <Clock time={time} initTime={initTime} />
      <ContainerButtons>
        <ButtonActions
          title={running ? 'Pause' : 'Start'}
          handleTime={
            running ? () => setRunning(false) : () => setRunning(true)
          }
        />
        <ButtonActions
          title="Reset"
          handleTime={() => {
            setRunning(false);
            setTime(initTime);
          }}
        />
      </ContainerButtons>
    </Container>
  );
}

export default App;
