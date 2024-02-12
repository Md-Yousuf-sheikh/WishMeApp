import Colors from '@theme/colors';
import {Text, VStack} from 'native-base';
import React from 'react';
import {GiftBoxIcon} from 'src/NativeBaseIcon';
import MainHeader from 'src/components/common/Headers/MainHeader';
import Background from 'src/components/shared/Background';
import asRoute from 'src/utils/withRoute';

const GiftShopScreen = () => {
  // const navigation = useNavigation();

  return (
    <Background type="normal">
      <MainHeader />
      <VStack
        flex={1}
        h={'full'}
        justifyContent={'center'}
        alignItems={'center'}
        space={5}>
        <Text
          fontWeight={'800'}
          textAlign={'center'}
          fontSize={'2xl'}
          color={Colors.primaryMain}>
          Gift Shop
        </Text>
        <GiftBoxIcon size={24} />
        <Text
          w={'60%'}
          fontWeight={'800'}
          textAlign={'center'}
          fontSize={'lg'}
          color={Colors.primaryMain}>
          Coming soon: The Gift Shop! Stay connected for updates.
        </Text>
      </VStack>
    </Background>
  );
};

const giftShop = asRoute(GiftShopScreen, 'giftShop', {
  title: 'giftShop',
  animation: 'slide_from_right',
});

export default giftShop;
