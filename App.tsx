import React from 'react';
import {NativeBaseProvider} from 'native-base';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import theme from '@theme/index';
import SplashScreen from 'react-native-splash-screen';
import store from '@store/index';
import RootRoutes from '@routes/LayoutRoute';
import {Platform} from 'react-native';

export default function App() {
  React.useEffect(() => {
    if (Platform.OS === 'android') {
      SplashScreen?.hide();
    }
  }, []);

  return (
    <>
      <Provider store={store}>
        <NavigationContainer>
          <NativeBaseProvider theme={theme}>
            <RootRoutes />
          </NativeBaseProvider>
        </NavigationContainer>
      </Provider>
    </>
  );
}
