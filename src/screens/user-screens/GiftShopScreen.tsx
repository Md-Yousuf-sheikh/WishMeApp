import Colors from '@theme/colors';
import {Box, HStack, Image, Text, VStack} from 'native-base';
import React from 'react';
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
        // justifyContent={'center'}
        pt={5}
        alignItems={'center'}
        space={1}>
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
          The Gift Shop! Stay connected for updates.
        </Text>
        {/* list */}
        <VStack pt={10} space={3}>
          <HStack justifyContent={'space-around'}>
            <Box
              w={'48%'}
              // minH={'40'}
              py={3}
              rounded={'md'}
              bg={'#FAEFF5'}
              justifyContent={'center'}
              alignItems={'center'}>
              <Image
                alt="icon1"
                source={require('@assets/images/gift/icon1.png')}
                w={'20'}
                h={'20'}
              />
              <Text fontSize={'md'} color={'#CB5E98'}>
                Flowers
              </Text>
            </Box>
            <Box
              w={'48%'}
              // minH={'40'}
              py={3}
              rounded={'md'}
              bg={'#FAEFF5'}
              justifyContent={'center'}
              alignItems={'center'}>
              <Image
                alt="icon2"
                source={require('@assets/images/gift/icon2.png')}
                w={'20'}
                h={'20'}
              />
              <Text fontSize={'md'} color={'#CB5E98'}>
                Cake
              </Text>
            </Box>
          </HStack>
          {/*  */}
          <HStack justifyContent={'space-around'}>
            <Box
              w={'48%'}
              // minH={'40'}
              py={3}
              rounded={'md'}
              bg={'#FAEFF5'}
              justifyContent={'center'}
              alignItems={'center'}>
              <Image
                alt="icon3"
                source={require('@assets/images/gift/icon3.png')}
                w={'20'}
                h={'20'}
              />
              <Text fontSize={'md'} color={'#CB5E98'}>
                Shopping
              </Text>
            </Box>
            <Box
              w={'48%'}
              // minH={'40'}
              py={3}
              rounded={'md'}
              bg={'#FAEFF5'}
              justifyContent={'center'}
              alignItems={'center'}>
              <Image
                alt="icon4"
                source={require('@assets/images/gift/icon4.png')}
                w={'20'}
                h={'20'}
              />
              <Text fontSize={'md'} color={'#CB5E98'}>
                Book
              </Text>
            </Box>
          </HStack>
        </VStack>
      </VStack>
    </Background>
  );
};

const giftShop = asRoute(GiftShopScreen, 'giftShop', {
  title: 'giftShop',
  animation: 'slide_from_right',
});

export default giftShop;
