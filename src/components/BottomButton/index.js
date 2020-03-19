import React from 'react';
import styled from 'styled-components/native';
import { Text, Dimensions } from 'react-native';
import { styles } from '../../constants';

const height = Dimensions.get('window').height;

const Wrapper = styled.TouchableOpacity`
  position: absolute;
  bottom: 0px;
  min-height: ${height / 15}px;
  width: 100%;
  background-color: ${styles.secondaryColor};
  justify-content: center;
  align-items: center;
`;

const BottomButtonText = styled.Text`
  font-family: Roboto-Bold;
  font-size: 20px;
  color: ${styles.white};
`;

const BottomButton = props => {
  const { text } = props;
  return (
    <Wrapper {...props}>
      <BottomButtonText>{text}</BottomButtonText>
    </Wrapper>
  );
};

export default BottomButton;
