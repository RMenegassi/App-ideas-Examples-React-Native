import styled from 'styled-components/native';

interface CircleProps {
  rotateBy: string;
}

export const Container = styled.View`
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const ContainerLeft = styled.View`
  height: 200px;
  width: 100px;
  overflow: hidden;
`;

export const ContainerRight = styled.View`
  height: 200px;
  width: 100px;
  overflow: hidden;
`;

export const CircleLeft = styled.View<CircleProps>`
  position: absolute;
  height: 200px;
  width: 200px;
  border-width: 10px;
  border-radius: 100px;
  border-right-color: white;
  border-top-color: white;
  border-bottom-color: #851ea9;
  border-left-color: #851ea9;
  transform: rotateZ(${props => props.rotateBy});
`;

export const CircleRight = styled.View<CircleProps>`
  position: absolute;
  height: 200px;
  width: 200px;
  right: 0;
  border-width: 10px;
  border-right-color: white;
  border-top-color: white;
  border-bottom-color: #851ea9;
  border-left-color: #851ea9;
  border-radius: 100px;
  transform: rotateZ(${props => props.rotateBy});
`;
