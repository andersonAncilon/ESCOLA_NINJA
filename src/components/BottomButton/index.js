import React from 'react';
import styled from 'styled-components/native';
import { styles } from '../../constants';
import { sizeUtil } from '../../utils';

const Wrapper = styled.TouchableOpacity`
  position: absolute;
  bottom: 0px;
  min-height: ${sizeUtil.verticalScale(50)}px;
  width: 100%;
  background-color: ${styles.secondaryColor};
  justify-content: center;
  align-items: center;
`;

const BottomButtonText = styled.Text`
  font-family: Roboto-Bold;
  font-size: ${sizeUtil.scale(16)}px;
  color: ${styles.white};
`;

const BottomButton = props => {
  const { text, onClick } = props;
  return (
    <Wrapper {...props}>
      <BottomButtonText>{text}</BottomButtonText>
    </Wrapper>
  );
};

export default BottomButton;
