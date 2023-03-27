import React, {useEffect, useState} from 'react';
import {Button, Text, TextInput, View} from 'react-native';

function App() {
  const [time, setTime] = useState(1500);
  const [minutos, setMinutos] = useState('');
  const [segundos, setSegundos] = useState('');
  const [running, setRunning] = useState(false);
  const [minPorc, setMinPorc] = useState(1500);

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

  console.log(Math.ceil((time * 100) / minPorc));

  return (
    <View>
      <TextInput
        placeholder="insert minutos - padrao 25:00"
        keyboardType="numeric"
        onChangeText={text => setMinutos(text)}
        value={minutos}
      />
      <TextInput
        placeholder="insert Segundos - padrao 00:00"
        keyboardType="numeric"
        onChangeText={text => setSegundos(text)}
        value={segundos}
      />
      <Button
        title="Change Time"
        onPress={() => {
          const newTime = parseInt(minutos) * 60 + parseInt(segundos);
          setTime(newTime);
          setMinPorc(newTime);
        }}
      />
      <Text>Sessão 1</Text>
      <Text>
        {Math.floor(time / 60).toLocaleString('en-US', {
          minimumIntegerDigits: 2,
        })}
        :
        {(time % 60).toLocaleString('en-US', {
          minimumIntegerDigits: 2,
        })}
      </Text>
      <View>
        <View style={{backgroundColor: '#aaa', width: '100%', height: 20}}>
          <View
            style={{
              backgroundColor: 'purple',
              width: `${Math.ceil((time * 100) / minPorc)}%`,
              height: 20,
            }}
          />
        </View>
      </View>

      <Button
        title="Start"
        onPress={() => {
          if (!running) {
            setRunning(true);
          }
        }}
      />
      <Button
        title="Pause"
        onPress={() => {
          setRunning(false);
        }}
      />
      <Button
        title="Reset"
        onPress={() => {
          setRunning(false);
          setTime(minPorc);
        }}
      />
    </View>
  );
}

export default App;
