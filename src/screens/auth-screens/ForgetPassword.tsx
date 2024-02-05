import {ScrollView} from 'native-base';
import React from 'react';
import asRoute from 'src/utils/withRoute';

const ForgetPassword = () => {
  // const navigation = useNavigation();

  return <ScrollView>{/* <VStack></VStack>; */}</ScrollView>;
};

const forgetPassword = asRoute(ForgetPassword, 'forgetPassword', {
  title: 'ForgetPassword',
  animation: 'slide_from_right',
});

export default forgetPassword;
