import styled from 'styled-components/native';
import { styles } from '../../constants';

const InputsWrapper = styled.View`
  margin-top: 0.07%;
`;

const AuthButtonsWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  ]flex-wrap: wrap;
  width: 80%;
`;

const SocialButtonsWrapper = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: wrap;
  width: 80%;
  margin-top: 30px;
`;

const ForgotPasswordButton = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
`;

const ForgotPasswordText = styled.Text`
  font-family: Roboto-Bold;
  color: ${styles.white};
  font-size: 18px;
`;

export {
  InputsWrapper,
  AuthButtonsWrapper,
  SocialButtonsWrapper,
  ForgotPasswordButton,
  ForgotPasswordText,
};
