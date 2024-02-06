import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {userRoutes} from './users.routes';

export default function UserRoutes() {
  const Stack = createNativeStackNavigator();
  // const showWelComeScreen = useSelector(selectShowWelcome);

  const routes = userRoutes?.routes.map(screen => {
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
      screenOptions={userRoutes.screenOptions}
      initialRouteName={userRoutes.initialRouteName}>
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
