import {
  welcomeScreen,
  forgotPassword,
  numberOtpVerificationCode,
  resetPassword,
  signInWithNumber,
  signUpScreen,
} from '@screens/auth-screens';
import {IStackNavigationConfig} from 'src/typedef/navigation.types';

export const userScreens = {
  welcomeScreen,
  forgotPassword,
  numberOtpVerificationCode,
  resetPassword,
  signInWithNumber,
  signUpScreen,
};

//  ren
const userRoutes: IStackNavigationConfig = {
  initialRouteName: userScreens.welcomeScreen.name,
  routes: Object?.values(userScreens),
  screenOptions: {
    headerShown: false,
    headerShadowVisible: false,
    headerBackTitleVisible: false,
    animation: 'slide_from_right',
  },
};

export type TAuthRoutes = keyof typeof userScreens;

export default userRoutes;
