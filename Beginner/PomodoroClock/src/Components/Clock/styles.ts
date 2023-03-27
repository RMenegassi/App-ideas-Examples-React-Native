import styled from 'styled-components/native';

interface ProgressActualProps {
  progress: number;
}

export const Container = styled.View`
  align-items: center;
`;

export const Text = styled.Text`
  color: white;
`;

export const ProgressTotal = styled.View`
  background-color: white;
  width: 100%;
  height: 20px;
`;

export const ProgressActual = styled.View<ProgressActualProps>`
  background-color: purple;
  height: 20px;
  width: ${props => `${props.progress}%`};
`;
