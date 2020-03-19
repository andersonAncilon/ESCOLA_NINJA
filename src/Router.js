import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreen } from './screens';

const AuthenticationStack = createStackNavigator();

const Router = () => {
  return (
    <AuthenticationStack.Navigator
      initialRouteName="login"
      screenOptions={{
        headerShown: false,
      }}>
      <AuthenticationStack.Screen
        name="login"
        component={LoginScreen}
        options={{ title: 'overview' }}
      />
    </AuthenticationStack.Navigator>
  );
};

export default Router;
