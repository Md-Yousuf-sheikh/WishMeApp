import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {userRoutes} from './users.routes';
import {selectUser} from '@store/features/authSlice';
import {useSelector} from 'react-redux';
import {updateRegInformation} from '@screens/user-screens';

export default function UserRoutes() {
  const Stack = createNativeStackNavigator();
  const authUser = useSelector(selectUser);

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
  //console.log('authUser', authUser);

  return (
    <Stack.Navigator
      screenOptions={userRoutes.screenOptions}
      initialRouteName={userRoutes.initialRouteName}>
      {!authUser?.fullName ? (
        <Stack.Screen
          name={updateRegInformation.name}
          component={updateRegInformation.component}
          options={updateRegInformation.options}
        />
      ) : (
        routes
      )}

      {/* {authUser?.fullName ?  : null} */}
    </Stack.Navigator>
  );
}
