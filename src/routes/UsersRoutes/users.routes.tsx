import bottomTabs from '../BottomTabs/index';
import {IStackNavigationConfig} from 'src/typedef/navigation.types';
import {
  updateWishes,
  profileScreen,
  smsPlanScreen,
  numberUpdate,
  createWishes,
  wishLogScreen,
  notificationScreen,
  myReferralScreen,
  referralSummaryScreen,
  paymentScreen,
} from '@screens/user-screens';

const userScreens = {
  bottomTabs,
  updateWishes,
  profileScreen,
  smsPlanScreen,
  numberUpdate,
  createWishes,
  wishLogScreen,
  notificationScreen,
  myReferralScreen,
  referralSummaryScreen,
  paymentScreen,
};

//  ren
export const userRoutes: IStackNavigationConfig = {
  initialRouteName: userScreens.bottomTabs.name,
  routes: Object?.values(userScreens),
  screenOptions: {
    headerShown: false,
    headerShadowVisible: false,
    headerBackTitleVisible: false,
    animation: 'slide_from_right',
  },
};

export type TUserRoutes = keyof typeof userScreens;
