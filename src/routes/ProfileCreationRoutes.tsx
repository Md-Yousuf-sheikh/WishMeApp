import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ProfileCreation from '@screens/ProfileCreation/ProfileCreation';

const Stack = createNativeStackNavigator();

export default function ProfileCreationRoutes() {
  return (
    <Stack.Navigator
      screenOptions={
        {
          // headerShown: false,
        }
      }>
      <Stack.Screen
        name="ProfileCreation"
        options={{
          headerTitle: 'Exercises',
        }}
        component={ProfileCreation}
      />
    </Stack.Navigator>
  );
}
