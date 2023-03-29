import React from 'react';

import {Button, Text} from './styles';

interface ButtonActionsProps {
  title: string;
  handleTime: () => void;
  disabled: boolean;
}

const ButtonActions = ({title, handleTime, disabled}: ButtonActionsProps) => {
  return (
    <>
      <Button activeOpacity={0.7} onPress={handleTime} disabled={disabled}>
        <Text>{title}</Text>
      </Button>
    </>
  );
};

export default ButtonActions;
