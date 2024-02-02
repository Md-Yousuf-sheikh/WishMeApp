import {NativeStackNavigationOptions} from '@react-navigation/native-stack';
import React from 'react';

export interface TAsRouteProps {
  Component: React.ReactNode;
}

export default function asRoute(
  Component: React.ComponentType<any>,
  routeName: string,
  options?: NativeStackNavigationOptions,
) {
  return {
    name: routeName,
    component: Component,
    options: options,
  };
}
