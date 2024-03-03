import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {userRoutes} from './users.routes';
import {selectFcmToken, selectUser} from '@store/features/authSlice';
import {useSelector} from 'react-redux';
import {updateRegInformation} from '@screens/user-screens';
import {useAddFcmTokenMutation} from '@store/apis/fcm';

export default function UserRoutes() {
  const Stack = createNativeStackNavigator();
  const authUser = useSelector(selectUser);
  const fcmToken = useSelector(selectFcmToken);
  // const showWelComeScreen = useSelector(selectShowWelcome);
  const [fcmAdd, {}] = useAddFcmTokenMutation();

  React.useEffect(() => {
    const fcmAddFcmToken = async () => {
      try {
        const props = {};
        const res = await fcmAdd(props).unwrap();
        console.log('res', res);
      } catch (error) {}
    };

    if (fcmToken) {
      fcmAddFcmToken();
    }

    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
