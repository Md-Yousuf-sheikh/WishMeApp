import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {authRoute} from './auth.routes';

export default function AuthRoutes() {
  const Stack = createNativeStackNavigator();
  // const showWelComeScreen = useSelector(selectShowWelcome);

  const routes = authRoute?.routes.map(screen => {
    return (
      <Stack.Screen
        key={screen.name}
        name={screen.name}
        component={screen.component}
        options={screen?.options}
      />
    );
  });

  return (
    <Stack.Navigator
      screenOptions={authRoute.screenOptions}
      initialRouteName={authRoute.initialRouteName}>
      {/* {showWelComeScreen ? (
        <Stack.Screen
          name={welcomeScreens.name}
          component={welcomeScreens.component}
          options={welcomeScreens.options}
        />
      ) : null} */}
      {routes}

      {/* {!showWelComeScreen ? routes : null} */}
    </Stack.Navigator>
  );
}
