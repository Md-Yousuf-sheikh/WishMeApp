import {ScrollView} from 'native-base';
import React from 'react';
import asRoute from 'src/utils/withRoute';

const RegisterScreen = () => {
  // const navigation = useNavigation();

  return <ScrollView>{/* <VStack></VStack>; */}</ScrollView>;
};

const registerScreen = asRoute(RegisterScreen, 'RegisterScreen', {
  title: 'RegisterScreen',
  animation: 'slide_from_right',
});

export default registerScreen;
