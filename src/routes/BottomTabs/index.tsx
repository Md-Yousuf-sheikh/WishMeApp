import React from 'react';
import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import asRoute from 'src/utils/withRoute';
import {welcomeScreen} from '@screens/auth-screens';
// import {
//   ChartFillIcon,
//   ChartIcon,
//   ExerciseFillIcon,
//   ExerciseIcon,
//   HistoryFillIcon,
//   HistoryIcon,
//   MealFillIcon,
//   MealIcon,
//   PhoneFillIcon,
//   PhoneIcon,
//   ProfileFillIcon,
//   ProfileIcon,
// } from '@assets/icons';

// tab
const Tab = createBottomTabNavigator();

type TBottomTabNavigationOptions = (options: {
  route: any;
  focused: boolean;
  color: string;
  size: number;
}) => BottomTabNavigationOptions;

const taborOptions: TBottomTabNavigationOptions = ({route}) => ({
  // tabBarIcon: ({focused, size}) => {
  //   switch (route.name) {
  //     case 'MealPlan':
  //       return focused ? (
  //         <MealFillIcon height={size} width={size} />
  //       ) : (
  //         <MealIcon height={size} width={size} />
  //       );
  //     case 'Exercise':
  //       return focused ? (
  //         <ExerciseFillIcon height={size} width={size} />
  //       ) : (
  //         <ExerciseIcon height={size} width={size} />
  //       );
  //     case 'Program':
  //       return focused ? (
  //         <ChartFillIcon height={size} width={size} />
  //       ) : (
  //         <ChartIcon height={size} width={size} />
  //       );
  //     case 'History':
  //       return focused ? (
  //         <HistoryFillIcon height={size} width={size} />
  //       ) : (
  //         <HistoryIcon height={size} width={size} />
  //       );
  //     case 'Call':
  //       return focused ? (
  //         <PhoneFillIcon height={size} width={size} />
  //       ) : (
  //         <PhoneIcon height={size} width={size} />
  //       );
  //     case 'Profile':
  //       return focused ? (
  //         <ProfileFillIcon height={size} width={size} />
  //       ) : (
  //         <ProfileIcon height={size} width={size} />
  //       );
  //     default:
  //       return null;
  //   }
  // },
  title: '',
  headerShown: false,
  tabBarStyle: {
    backgroundColor: '#F0118B',
    height: 65,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
});

function BottomRoutes() {
  return (
    <Tab.Navigator
      screenOptions={taborOptions as any}
      initialRouteName={'Home'}
      backBehavior="initialRoute">
      <Tab.Screen
        name="Order"
        options={welcomeScreen?.options as any}
        component={welcomeScreen?.component}
      />
      <Tab.Screen
        name="Home"
        options={welcomeScreen.options as any}
        component={welcomeScreen?.component}
      />
      <Tab.Screen
        name="Account"
        options={welcomeScreen?.options as any}
        component={welcomeScreen?.component}
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
