import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { SignInScreen, SignUpScreen } from './screens';

const AuthenticationStack = createStackNavigator();

const Router = () => {
  return (
    <AuthenticationStack.Navigator
      initialRouteName="login"
      screenOptions={{
        headerShown: false,
      }}>
      <AuthenticationStack.Screen name="signIn" component={SignInScreen} />
      <AuthenticationStack.Screen name="signUp" component={SignUpScreen} />
    </AuthenticationStack.Navigator>
  );
};

export default Router;
