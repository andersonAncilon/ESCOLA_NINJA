import React from 'react';
import styled from 'styled-components/native';
import { styles } from '../../constants';
import { sizeUtil } from '../../utils';

const Wrapper = styled.TouchableOpacity.attrs(() => {})`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  min-height: 0.059%;
  width: ${props => props.width ?? '50%'}
  border: 1px solid ${styles.white};
  border-radius: 16px;
  padding: 10px 30px 10px 30px;
  margin-top: ${props => props.marginTop ?? '0'};
  margin-right: ${props => props.marginRight ?? '0'};
  margin-bottom: ${props => props.marginBottom ?? '0'};
  margin-left: ${props => props.marginLeft ?? '0'};
  background-color: ${props => props.color};
  
`;

const ButtonText = styled.Text`
  font-size: ${sizeUtil.scale(16)}px;
  font-family: Roboto-Bold;
  color: ${styles.white};
  margin-right: 10px;
`;
const ButtonIcon = styled.Image`
  resize-mode: contain;
  width: ${sizeUtil.verticalScale(30)}px;
  height: ${sizeUtil.verticalScale(30)}px;
`;

const DefaultButton = props => {
  const { icon, text } = props;

  return (
    <Wrapper {...props}>
      {text ? <ButtonText>{text}</ButtonText> : null}
      {icon ? <ButtonIcon source={icon} /> : null}
    </Wrapper>
  );
};

export default DefaultButton;
