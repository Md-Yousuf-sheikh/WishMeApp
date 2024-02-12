import Colors from '@theme/colors';
import {Text, VStack} from 'native-base';
import React from 'react';
import MainHeader from 'src/components/common/Headers/MainHeader';
import Background from 'src/components/shared/Background';
import asRoute from 'src/utils/withRoute';

const MobileRecharge = () => {
  // const navigation = useNavigation();

  return (
    <Background type="normal">
      <MainHeader />
      <VStack
        flex={1}
        h={'full'}
        justifyContent={'center'}
        alignItems={'center'}
        space={2}>
        <Text
          fontWeight={'800'}
          textAlign={'center'}
          fontSize={'2xl'}
          color={Colors.primaryMain}>
          Coming Soon!
        </Text>
        <Text
          w={'60%'}
          fontWeight={'800'}
          textAlign={'center'}
          fontSize={'lg'}
          color={Colors.primaryMain}>
          Stay connected for updates.
        </Text>
      </VStack>
    </Background>
  );
};

const mobileRecharge = asRoute(MobileRecharge, 'mobileRecharge', {
  title: 'mobileRecharge',
  animation: 'slide_from_right',
});

export default mobileRecharge;
