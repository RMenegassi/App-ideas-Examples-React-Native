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

import {playPause} from './utils/sound';

function App() {
  const [time, setTime] = useState(10);
  const [running, setRunning] = useState(false);
  const [initTime, setInitTime] = useState(10);
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
    playPause();
    setTimeout(() => {
      if (initTime !== 10) {
        setTime(10);
        setInitTime(10);
        setSession(session + 1);
      } else {
        setTime(5);
        setInitTime(5);
      }
      setRunning(true);
    }, 1000);
  }

  return (
    <Container>
      <ContainerTitle>
        <TextSession>
          {initTime === 5 ? 'Break' : `Sessão ${session}`}
        </TextSession>
      </ContainerTitle>

      <ContainerButtons>
        <ButtonTime title="Time" timeSession={'17:30'} />
        <ButtonTime title="Break" timeSession={'05:00'} />
      </ContainerButtons>

      <Clock time={time} initTime={initTime} />
      <ContainerButtons>
        <ButtonActions
          title={running ? 'Pause' : 'Start'}
          disabled={time === 0 ? true : false}
          handleTime={
            running ? () => setRunning(false) : () => setRunning(true)
          }
        />
        <ButtonActions
          title="Reset"
          disabled={time === 0 ? true : false}
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
