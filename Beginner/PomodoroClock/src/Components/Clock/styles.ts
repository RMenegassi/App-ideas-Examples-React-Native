import styled from 'styled-components/native';

interface TextProps {
  final: boolean;
}

export const Container = styled.View`
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;
`;

export const Text = styled.Text<TextProps>`
  color: ${props => (props.final ? '#000' : '#fff')};
  position: absolute;
  font-size: 48px;
  font-weight: bold;
`;
