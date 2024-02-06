import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AuthRoutes from '@routes/AuthRoutes';
import {selectUser} from '@store/features/authSlice';
import {useSelector} from 'react-redux';
import UserRoutes from '@routes/UsersRoutes';
const Stack = createNativeStackNavigator();

export default function RootRoutes() {
  const authUser = useSelector(selectUser);

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      {authUser ? (
        <Stack.Screen name="UserRoute" component={UserRoutes} />
      ) : (
        <Stack.Screen name="AuthRoute" component={AuthRoutes} />
      )}
    </Stack.Navigator>
  );
}
