import {NativeStackNavigationOptions} from '@react-navigation/native-stack';

export interface IReactNavigationRoute {
  name: string;
  component: React.ComponentType<any>;
  options?: NativeStackNavigationOptions;
}

export interface IReactNavigationRoutes {
  [key: string]: IReactNavigationRoute;
}

export interface IStackNavigationConfig {
  initialRouteName: string;
  routes: IReactNavigationRoute[];
  screenOptions?: NativeStackNavigationOptions;
}

export interface IPropsWishItem {
  createdAt: string;
  wishId: string;
  receiver: {
    fullName: string;
    number: string;
  };
  scheduleDate: string;
  status: string;
  wish: {
    message: string;
    messageType: string;
    typeId: string;
    type: string;
  };
}

export interface IPropsSmsPlan {
  smsPlanNumber: string;
  image: string;
  name: string;
  quantity: number;
  regularPrice: string;
  salePrice: string;
  summary: string;
}
