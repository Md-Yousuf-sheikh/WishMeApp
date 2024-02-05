import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import AuthRoutes from '@routes/AuthRoutes';
import UserRoutes from '@routes/UsersRoutes';
// import UserRoutes from '@routes/UsersRoutes';
// import {useSelector} from 'react-redux';
// import {selectUser} from '@store/features/authSlice';
const Stack = createNativeStackNavigator();

export default function RootRoutes() {
  //   const authUser = useSelector(selectUser);

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="UserRoute" component={UserRoutes} />
      {/* <Stack.Screen name="AuthRoute" component={AuthRoutes} /> */}
      {/* {authUser ? (
        <Stack.Screen name="UserRoute" component={UserRoutes} />
      ) : (
        <Stack.Screen name="AuthRoute" component={AuthRoutes} />
      )} */}
    </Stack.Navigator>
  );
}
