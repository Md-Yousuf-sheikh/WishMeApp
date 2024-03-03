import React from 'react';
import {NativeBaseProvider} from 'native-base';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import theme from '@theme/index';
import SplashScreen from 'react-native-splash-screen';
import store from '@store/index';
import RootRoutes from '@routes/LayoutRoute';
import {Platform} from 'react-native';
import BackgroundService from 'src/utils/BackgroundService';

export default function App() {
  React.useEffect(() => {
    if (Platform.OS === 'android') {
      SplashScreen?.hide();
    }
  }, []);
  //
  // React.useEffect(() => {
  //   messaging().onMessage(onMessageReceived);
  // }, []);

  // useEffect(() => {
  //   notifee.onForegroundEvent(handleNotification);
  // }, []);

  const prefixes = ['wishme://', 'https://wishme.doubletree.xyz/'];

  const config = {
    screens: {
      AuthRoute: {
        screens: {
          registerScreen: 'sign-up/:code',
          welcomeScreen: 'welcome',
          forgotPassword: 'forgot-password',
          numberOtpVerificationCode: 'number-otp-verification',
          resetPassword: 'reset-password',
          signInWithNumber: 'sign-in-with-number',
          numberRegister: 'number-register',
          loginScreen: 'login',
        },
      },
      UserRoute: {
        screens: {
          updateWishes: 'update-wishes',
          profileScreen: 'profile',
          smsPlanScreen: 'sms-plan',
          numberUpdate: 'number-update',
          createWishes: 'create-wishes',
          wishLogScreen: 'wish-log',
          notificationScreen: 'notification',
          myReferralScreen: 'my-referral',
          referralSummaryScreen: 'referral-summary',
          paymentScreen: 'payment',
        },
      },
    },
  };

  const linking = {
    prefixes,
    config,
  };

  return (
    <>
      <Provider store={store}>
        <NavigationContainer linking={linking}>
          <NativeBaseProvider theme={theme}>
            <RootRoutes />
          </NativeBaseProvider>
        </NavigationContainer>
        <BackgroundService />
      </Provider>
    </>
  );
}
