import React from 'react';
import styled from 'styled-components/native';

import { styles } from '../../constants';

const Wrapper = styled.View`
  flex: 1;
  justify-content: ${props => props.justifyContent ?? 'center'};
  align-items: ${props => props.alignItems ?? 'center'};
  background-color: ${styles.backgroundColor};
  font-family: 'Roboto-Regular';
`;

const DefaultLayout = props => <Wrapper {...props} />;

export default DefaultLayout;
