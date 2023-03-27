import React from 'react';

import {Button, Text} from './styles';

interface ButtonActionsProps {
  title: string;
  handleTime: () => void;
}

const ButtonActions = ({title, handleTime}: ButtonActionsProps) => {
  return (
    <>
      <Button activeOpacity={0.7} onPress={handleTime}>
        <Text>{title}</Text>
      </Button>
    </>
  );
};

export default ButtonActions;
