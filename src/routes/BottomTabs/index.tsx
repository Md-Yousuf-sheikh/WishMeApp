import React from 'react';
import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import asRoute from 'src/utils/withRoute';
import {homeScreen} from '@screens/user-screens';
import createWishes from '@screens/user-screens/CreateWishes';
import scheduledWishes from '@screens/user-screens/ScheduledWishes';
import Colors from '@theme/colors';
import {
  TabMessageActiveIcon,
  WishBoxActiveIcon,
  WishBoxIcon,
  TabMessageIcon,
  TabBirthCakeIcon,
  TabBirthCakeActiveIcon,
} from 'src/NativeBaseIcon';
// tab
const Tab = createBottomTabNavigator();

type TBottomTabNavigationOptions = (options: {
  route: any;
  focused: boolean;
  color: string;
  size: number;
}) => BottomTabNavigationOptions;

const taborOptions: TBottomTabNavigationOptions = ({route}) => ({
  tabBarIcon: ({focused}) => {
    switch (route.name) {
      case 'home':
        return focused ? (
          <WishBoxActiveIcon size={6} />
        ) : (
          <WishBoxIcon size={6} />
        );
      case 'createWishes':
        return focused ? (
          <WishBoxActiveIcon size={6} />
        ) : (
          <WishBoxIcon size={6} />
        );
      case 'birthWishes':
        return focused ? (
          <TabBirthCakeActiveIcon size={6} />
        ) : (
          <TabBirthCakeIcon size={6} />
        );
      case 'scheduledWishes':
        return focused ? (
          <TabMessageActiveIcon size={7} />
        ) : (
          <TabMessageIcon size={7} />
        );
      default:
        return null;
    }
  },
  headerShown: false,
  tabBarShowLabel: false,
  tabBarStyle: {
    backgroundColor: Colors.primaryMain,
    height: 60,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
});

function BottomRoutes() {
  return (
    <Tab.Navigator
      screenOptions={taborOptions as any}
      initialRouteName={'scheduledWishes'}
      backBehavior="initialRoute">
      <Tab.Screen
        name="scheduledWishes"
        options={scheduledWishes?.options as any}
        component={scheduledWishes?.component}
      />
      <Tab.Screen
        name="home"
        options={homeScreen.options as any}
        component={homeScreen?.component}
      />
      <Tab.Screen
        name="birthWishes"
        options={homeScreen.options as any}
        component={homeScreen?.component}
      />
      <Tab.Screen
        name="createWishes"
        options={createWishes?.options as any}
        component={createWishes?.component}
      />
    </Tab.Navigator>
  );
}

const bottomTabs = asRoute(BottomRoutes, 'bottomTabs', {
  title: 'Home',
  animation: 'slide_from_right',
  headerShown: false,
});

export default bottomTabs;
