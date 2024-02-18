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
  receiver: {
    avatar: string;
    fullName: string;
    number: string;
  };
  scheduleDate: string;
  sender: {
    avatar: string;
    fullName: string;
    number: string;
  };
  status: 'pending' | 'delivered' | 'failed' | 'canceled' | 'inactive';
  wish: {
    message: string;
    messageType: 'mobile' | 'app';
    type: string;
    typeId: number;
  };
  wishId: string;
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

export interface IUser {
  avatar: string;
  createdAt: string;
  fullName: string;
  firstName: string;
  lastName: string;
  mobileNumber: string;
  welcomeMessageRead: boolean;
}
