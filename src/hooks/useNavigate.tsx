import {NavigationContext} from '@react-navigation/native';
import React from 'react';

type TNavigationTypes = 'push' | 'navigate' | 'goBack' | 'replace';

type TUseNavigate = (
  screen?: string,
  params?: any,
  type?: TNavigationTypes,
) => void;

export default function useNavigate(): TUseNavigate {
  const navigation = React.useContext(NavigationContext);
  const navigate = (screen: string, params?: any, type?: TNavigationTypes) => {
    switch (type) {
      case 'navigate':
        navigation?.navigate(screen as string, params);
        break;
      case 'push':
        navigation?.push(screen as string, params);
        break;
      case 'goBack':
        navigation?.goBack();
        break;
      case 'replace':
        navigation?.replace(screen as string, params);
        break;
      default:
        navigation?.navigate(screen as string, params);
        break;
    }
  };
  return navigate;
}
