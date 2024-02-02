import {
  welcomeScreen,
  forgotPassword,
  numberOtpVerificationCode,
  resetPassword,
  signInWithNumber,
  signUpScreen,
} from '@screens/auth-screens';
import {IStackNavigationConfig} from 'src/typedef/navigation.types';

export const authScreens = {
  welcomeScreen,
  forgotPassword,
  numberOtpVerificationCode,
  resetPassword,
  signInWithNumber,
  signUpScreen,
};

//  ren
const authRoute: IStackNavigationConfig = {
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

export default authRoute;
