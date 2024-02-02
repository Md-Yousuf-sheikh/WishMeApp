import {ScrollView} from 'native-base';
import React from 'react';
import asRoute from 'src/utils/withRoute';

const LoginScreen = () => {
  // const navigation = useNavigation();

  return <ScrollView>{/* <VStack></VStack>; */}</ScrollView>;
};

const loginScreen = asRoute(LoginScreen, 'LoginScreen', {
  title: 'LoginScreen',
  animation: 'slide_from_right',
});

export default loginScreen;
