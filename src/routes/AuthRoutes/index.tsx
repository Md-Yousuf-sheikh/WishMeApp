import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import authRoutes from './auth.routes';

export default function AuthRoutes() {
  const Stack = createNativeStackNavigator();
  // const showWelComeScreen = useSelector(selectShowWelcome);

  const routes = authRoutes?.routes.map(screen => {
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
      screenOptions={authRoutes.screenOptions}
      initialRouteName={authRoutes.initialRouteName}>
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
