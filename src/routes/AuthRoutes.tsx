import {View, Text} from 'react-native';
import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import WelcomeScreen from '@screens/Auth/WelcomeScreen';
import LoginScreen from '@screens/Auth/LoginScreen';
import RegisterScreen from '@screens/Auth/RegisterScreen';
import ForgetPassword from '@screens/Auth/ForgetPassword';
import EmailOtpVerify from '@screens/Auth/EmailOtpVerify';
import ResetPassword from '@screens/Auth/ResetPassword';

const Stack = createNativeStackNavigator();

export default function AuthRoutes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="ForgetPassword" component={ForgetPassword} />
      <Stack.Screen name="EmailOtpVerify" component={EmailOtpVerify} />
      <Stack.Screen name="ResetPassword" component={ResetPassword} />
    </Stack.Navigator>
  );
}
