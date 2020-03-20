import React from 'react';
import {
  DefaultLayout,
  NinjaIcon,
  InputText,
  DefaultButton,
  BottomButton,
  InputsWrapper,
} from '../../components';
import { kunaiIcon, googleIcon, facebookIcon } from '../../../assets';

import { styles } from '../../constants';
import {
  AuthButtonsWrapper,
  SocialButtonsWrapper,
  ForgotPasswordButton,
  ForgotPasswordText,
} from './styles';
import { ScrollView } from 'react-native';

const LoginScreen = ({ navigation }) => {
  return (
    <ScrollView style={{ flex: 1 }} contentContainerStyle={{ flexGrow: 1 }}>
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
        <BottomButton
          text="Cadastrar"
          onPress={() => navigation.navigate('signUp')}
        />
      </DefaultLayout>
    </ScrollView>
  );
};

export default LoginScreen;
