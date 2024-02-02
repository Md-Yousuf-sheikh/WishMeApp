import {ScrollView} from 'native-base';
import React from 'react';
import asRoute from 'src/utils/withRoute';

const ResetPassword = () => {
  // const navigation = useNavigation();

  return <ScrollView>{/* <VStack></VStack>; */}</ScrollView>;
};

const resetPassword = asRoute(ResetPassword, 'ResetPassword', {
  title: 'ResetPassword',
  animation: 'slide_from_right',
});

export default resetPassword;
