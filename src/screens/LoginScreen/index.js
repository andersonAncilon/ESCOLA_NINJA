import React from 'react';
import {
  DefaultLayout,
  NinjaIcon,
  InputText,
  DefaultButton,
  BottomButton,
} from '../../components';
import { kunaiIcon, googleIcon, facebookIcon } from '../../../assets';

import { styles } from '../../constants';
import {
  InputsWrapper,
  AuthButtonsWrapper,
  SocialButtonsWrapper,
  ForgotPasswordButton,
  ForgotPasswordText,
} from './styles';

const LoginScreen = props => {
  return (
    <DefaultLayout justifyContent="flex-start">
      <NinjaIcon />

      <InputsWrapper>
        <InputText placeholder="Usuário Ninja (Login)" />
        <InputText placeholder="Código Secreto (Senha)" />
      </InputsWrapper>

      <AuthButtonsWrapper>
        <DefaultButton
          text="Entrar"
          icon={kunaiIcon}
          color={styles.primaryColor}
        />

        <ForgotPasswordButton>
          <ForgotPasswordText>Esqueci a senha</ForgotPasswordText>
        </ForgotPasswordButton>
      </AuthButtonsWrapper>
      <SocialButtonsWrapper>
        <DefaultButton
          icon={googleIcon}
          color={styles.googleColor}
          width="30%"
          marginRight="20px"
        />
        <DefaultButton
          icon={facebookIcon}
          color={styles.facebookColor}
          width="30%"
        />
      </SocialButtonsWrapper>
      <BottomButton text="Cadastrar" />
    </DefaultLayout>
  );
};

export default LoginScreen;
