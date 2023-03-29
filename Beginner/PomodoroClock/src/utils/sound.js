import alarm from '../assets/alarm.mp3';
import Sound from 'react-native-sound';

Sound.setCategory('Playback');
const alarmSound = new Sound(alarm, error => {
  if (error) {
    console.log('failed to load the sound', error);
    return;
  }
});
alarmSound.setVolume(0.5);

export const playPause = () => {
  alarmSound.play(success => {
    if (success) {
      console.log('success');
    } else {
      console.log('failed');
    }
  });
};
