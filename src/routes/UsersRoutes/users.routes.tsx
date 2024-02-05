import bottomTabs from '../BottomTabs/index';
import {IStackNavigationConfig} from 'src/typedef/navigation.types';

export const userScreens = {
  bottomTabs,
};

//  ren
const userRoutes: IStackNavigationConfig = {
  initialRouteName: userScreens.bottomTabs.name,
  routes: Object?.values(userScreens),
  screenOptions: {
    headerShown: false,
    headerShadowVisible: false,
    headerBackTitleVisible: false,
    animation: 'slide_from_right',
  },
};

export type TAuthRoutes = keyof typeof userScreens;

export default userRoutes;
