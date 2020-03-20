import React from 'react';
import styled from 'styled-components/native';
import { styles } from '../../constants';
import { sizeUtil } from '../../utils';

const Wrapper = styled.TextInput.attrs(() => ({
  placeholderTextColor: styles.disableTextColor,
}))`
  background-color: ${styles.inputColor};
  color: ${styles.white};
  font-size: ${sizeUtil.scale(11.6)}px
  border-radius: 16px;
  min-width: 80%;
  min-height: ${sizeUtil.verticalScale(40)}px
  padding-left: 20px;
  padding-right: 20px;
  margin-bottom: 20px;
`;

const InputText = props => <Wrapper {...props} />;

export default InputText;
