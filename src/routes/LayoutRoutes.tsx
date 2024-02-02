import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomTabs from './BottomTabs';
import Blogs from '@screens/User/Blogs';
import Calendar from '@screens/User/Calendar';
import SettingsScreen from '@screens/User/SettingsScreen';
import CreateMealPlan from '@screens/User/CreateMealPlan';
import CirCuit from '@screens/User/CirCuit';
import Warmup from '@screens/User/Warmup';
import ExerciseDetails from '@screens/User/ExerciseDetails';
import BlogDetails from '@screens/User/BlogDetails';
import EditProfile from '@screens/User/EditProfile';
import ChangePassword from '@screens/User/ChangePassword';
import NotificationPreference from '@screens/User/NotificationPreference';
import PrivacySecurity from '@screens/User/PrivacySecurity';
import HelpSupport from '@screens/User/HelpSupport';
import Header from 'src/components/headers/Header';

const Stack = createNativeStackNavigator();

export default function LayoutRoutes() {
  return (
    <Stack.Navigator screenOptions={{}}>
      <Stack.Screen
        name="BottomTab"
        component={BottomTabs}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="CreateMealPlan"
        options={{
          header: props => {
            return <Header title={'Create Meal Plan'} />;
          },
        }}
        component={CreateMealPlan}
      />
      <Stack.Screen
        name="SettingsScreen"
        options={{
          header: props => {
            return <Header title={'Settings'} />;
          },
        }}
        component={SettingsScreen}
      />
      <Stack.Screen name="Calendar" component={Calendar} />
      <Stack.Screen
        name="Blogs"
        options={{
          header: props => {
            return <Header title={'Blogs'} />;
          },
        }}
        component={Blogs}
      />
      <Stack.Screen
        name="BlogDetails"
        options={{
          header: props => {
            return <Header title={'Blog Details'} />;
          },
        }}
        component={BlogDetails}
      />
      <Stack.Screen name="CirCuit" component={CirCuit} />
      <Stack.Screen name="Warmup" component={Warmup} />
      <Stack.Screen
        name="ExerciseDetails"
        component={ExerciseDetails}
        options={{
          header: props => {
            return <Header title={'Exercise Details'} />;
          },
        }}
      />
      <Stack.Screen
        name="EditProfile"
        component={EditProfile}
        options={{
          header: props => {
            return <Header title={'Edit Profile'} />;
          },
        }}
      />
      <Stack.Screen
        name="ChangePassword"
        component={ChangePassword}
        options={{
          header: props => {
            return <Header title={'Change Password'} />;
          },
        }}
      />
      <Stack.Screen
        name="NotificationPreference"
        component={NotificationPreference}
        options={{
          header: props => {
            return <Header title={'Notification Preference'} />;
          },
        }}
      />
      <Stack.Screen
        name="PrivacySecurity"
        component={PrivacySecurity}
        options={{
          header: props => {
            return <Header title={'Privacy & Security'} />;
          },
        }}
      />
      <Stack.Screen
        name="HelpSupport"
        component={HelpSupport}
        options={{
          header: props => {
            return <Header title={'Help & Support'} />;
          },
        }}
      />
    </Stack.Navigator>
  );
}
