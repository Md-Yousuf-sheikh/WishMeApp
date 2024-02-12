import React from 'react';
import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import asRoute from 'src/utils/withRoute';
import scheduledWishes from '@screens/user-screens/ScheduledWishes';
import {
  TabMessageActiveIcon,
  TabMessageIcon,
  TabProfileActiveIcon,
  TabProfileIcon,
  TabCallActiveIcon,
  TabCallIcon,
  TabWishBoxIcon,
  TabWishBoxActiveIcon,
} from 'src/NativeBaseIcon';
import {giftShop} from '@screens/user-screens';
import mobileRecharge from '@screens/user-screens/MobileRecharge';
import {View} from 'native-base';
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
      case 'giftShop':
        return focused ? (
          <View mt={2}>
            <TabWishBoxActiveIcon size={7} />
          </View>
        ) : (
          <View mt={2}>
            <TabWishBoxIcon size={7} />
          </View>
        );
      case 'mobileRecharge':
        return focused ? (
          <TabCallActiveIcon size={5} />
        ) : (
          <TabCallIcon size={5} />
        );
      case 'account':
        return focused ? (
          <TabProfileActiveIcon size={5} />
        ) : (
          <TabProfileIcon size={5} />
        );
      case 'scheduledWishes':
        return focused ? (
          <View mt={1}>
            <TabMessageActiveIcon size={5} />
          </View>
        ) : (
          <View mt={1}>
            <TabMessageIcon size={5} />
          </View>
        );
      default:
        return null;
    }
  },
  headerShown: false,
  tabBarShowLabel: false,
  tabBarHideOnKeyboard: true,
  tabBarStyle: {
    backgroundColor: '#ffff',
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
        name="giftShop"
        options={giftShop.options as any}
        component={giftShop?.component}
      />
      <Tab.Screen
        name="mobileRecharge"
        options={mobileRecharge?.options as any}
        component={mobileRecharge?.component}
      />
      <Tab.Screen
        name="account"
        options={giftShop.options as any}
        component={giftShop?.component}
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
