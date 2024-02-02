import {ScrollView} from 'native-base';
import React from 'react';
import asRoute from 'src/utils/withRoute';

const SignInWithNumber = () => {
  // const navigation = useNavigation();

  return <ScrollView>{/* <VStack></VStack>; */}</ScrollView>;
};

const signInWithNumber = asRoute(SignInWithNumber, 'SignInWithNumber', {
  title: 'SignInWithNumber',
  animation: 'slide_from_right',
});

export default signInWithNumber;
