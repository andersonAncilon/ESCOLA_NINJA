import React from 'react';
import styled from 'styled-components/native';
import { styles } from '../../constants';

const Wrapper = styled.TextInput.attrs(() => ({
  placeholderTextColor: styles.disableTextColor,
}))`
  background-color: ${styles.inputColor};
  color: ${styles.white};
  border-radius: 16px;
  min-width: 80%;
  padding-left: 20px;
  padding-right: 20px;
  margin-bottom: 20px;
`;

const InputText = props => <Wrapper {...props} />;

export default InputText;
