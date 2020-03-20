import React from 'react';
import {
  DefaultLayout,
  NinjaIcon,
  InputsWrapper,
  InputText,
  BottomButton,
} from '../../components';

const SignUpScreen = ({ navigation }) => {
  return (
    <DefaultLayout>
      <NinjaIcon />
      <InputsWrapper>
        <InputText placeholder="Usuário Ninja (Login)" />
        <InputText placeholder="E-mail" />
        <InputText placeholder="Código Secreto (Senha)" />
        <InputText placeholder="Repetir Código Secreto" />
      </InputsWrapper>
      <BottomButton
        text="Finalizar Cadastro"
        onPress={() => navigation.navigate('signUp')}
      />
    </DefaultLayout>
  );
};

export default SignUpScreen;
