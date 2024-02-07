import bottomTabs from '../BottomTabs/index';
import {IStackNavigationConfig} from 'src/typedef/navigation.types';
import {
  updateWishes,
  profileScreen,
  smsPlanScreen,
} from '@screens/user-screens';

const userScreens = {
  bottomTabs,
  updateWishes,
  profileScreen,
  smsPlanScreen,
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
