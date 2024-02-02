import {ScrollView} from 'native-base';
import React from 'react';
import asRoute from 'src/utils/withRoute';

const HomeScreen = () => {
  // const navigation = useNavigation();

  return <ScrollView>{/* <VStack></VStack>; */}</ScrollView>;
};

const homeScreen = asRoute(HomeScreen, 'HomeScreen', {
  title: 'HomeScreen',
  animation: 'slide_from_right',
});

export default homeScreen;
