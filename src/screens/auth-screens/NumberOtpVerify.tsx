import {ScrollView} from 'native-base';
import React from 'react';
import asRoute from 'src/utils/withRoute';

const NumberOtpVerify = () => {
  // const navigation = useNavigation();

  return <ScrollView>{/* <VStack></VStack>; */}</ScrollView>;
};

const numberOtpVerify = asRoute(NumberOtpVerify, 'NumberOtpVerify', {
  title: 'NumberOtpVerify',
  animation: 'slide_from_right',
});

export default numberOtpVerify;
