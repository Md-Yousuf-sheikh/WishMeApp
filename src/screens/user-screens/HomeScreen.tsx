import React from 'react';
import MainHeader from 'src/components/common/Headers/MainHeader';
import Background from 'src/components/shared/Background';
import asRoute from 'src/utils/withRoute';

const HomeScreen = () => {
  // const navigation = useNavigation();

  return (
    <Background type="scroll">
      <MainHeader />
    </Background>
  );
};

const homeScreen = asRoute(HomeScreen, 'HomeScreen', {
  title: 'HomeScreen',
  animation: 'slide_from_right',
});

export default homeScreen;
