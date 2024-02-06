import {
  welcomeScreen,
  forgotPassword,
  numberOtpVerificationCode,
  resetPassword,
  signInWithNumber,
  signUpScreen,
  numberRegister,
  loginScreen,
} from '@screens/auth-screens';
import {IStackNavigationConfig} from 'src/typedef/navigation.types';

const authScreens = {
  welcomeScreen,
  forgotPassword,
  numberOtpVerificationCode,
  resetPassword,
  signInWithNumber,
  signUpScreen,
  numberRegister,
  loginScreen,
};

//  ren
export const authRoute: IStackNavigationConfig = {
  initialRouteName: authScreens.welcomeScreen.name,
  routes: Object?.values(authScreens),
  screenOptions: {
    headerShown: false,
    headerShadowVisible: false,
    headerBackTitleVisible: false,
    animation: 'slide_from_right',
  },
};

export type TAuthRoutes = keyof typeof authScreens;
