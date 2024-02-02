import React from 'react';
import {NativeBaseProvider} from 'native-base';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import theme from '@theme/index';

import store from '@store/index';
import Routes from '@routes/index';

export default function App() {
  return (
    <>
      <Provider store={store}>
        <NavigationContainer>
          <NativeBaseProvider theme={theme}>
            <Routes />
          </NativeBaseProvider>
        </NavigationContainer>
      </Provider>
    </>
  );
}
