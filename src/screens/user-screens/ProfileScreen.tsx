import useNavigate from '@hooks/useNavigate';
import {selectUser} from '@store/features/authSlice';
import {hp, wp} from '@theme/ScreenDimensions';
import Colors from '@theme/colors';
import {Avatar, Box, HStack, Image, Text, VStack} from 'native-base';
import React from 'react';
import {useSelector} from 'react-redux';
import {VerifiedIcon} from 'src/NativeBaseIcon';
import UpdateName from 'src/components/actionSheet/UpdateName';
import UpdateNumber from 'src/components/actionSheet/UpdateNumber';
import Header from 'src/components/headers/Header';
import Background from 'src/components/shared/Background';
import asRoute from 'src/utils/withRoute';

const ProfileScreen = () => {
  //  state
  const navigate = useNavigate();
  const [openNumber, setOpenNumber] = React.useState(false);
  const [openName, setOpenName] = React.useState(false);
  // hooks
  const authUser = useSelector(selectUser);

  return (
    <Background type="scroll">
      <UpdateNumber isOpen={openNumber} onClose={() => setOpenNumber(false)} />
      <UpdateName isOpen={openName} onClose={() => setOpenName(false)} />

      {/* content */}
      <Header />
      <HStack
        borderBottomWidth={1}
        borderColor={'gray.200'}
        p={4}
        alignItems={'center'}
        space={4}>
        <Avatar
          size={'lg'}
          bg="amber.500"
          source={{
            uri: authUser?.avatar,
          }}
          _text={{
            textTransform: 'uppercase',
          }}>
          {authUser?.fullName ? authUser?.fullName.slice(0, 1) : 'N'}
        </Avatar>
        <VStack justifyContent={'centers'}>
          <Text color={'gray.800'} fontSize={'lg'} numberOfLines={1}>
            {authUser?.fullName}
          </Text>
          <Text color={'gray.500'} fontSize={'sm'} numberOfLines={1}>
            Loyalty Pint: 100
          </Text>
        </VStack>
      </HStack>
      <VStack alignItems={'center'} py={4}>
        {/* List 1 */}
        <HStack space={2}>
          {/* row 1 */}
          <VStack
            space={3}
            p={2}
            minH={hp(15)}
            w={wp(46)}
            rounded={'md'}
            backgroundColor={'#F7F7F7'}>
            <HStack minH={'16'} space={2} alignItems={'center'}>
              <Image
                source={{
                  uri: authUser?.avatar,
                }}
                alt="avatar"
                size={'md'}
                bg={'white'}
                w={'12'}
                h={'12'}
                resizeMode={'center'}
                rounded={'full'}
              />
              <Text
                color={'gray.800'}
                w={wp(25)}
                fontSize={'lg'}
                numberOfLines={2}>
                {authUser?.fullName}
              </Text>
            </HStack>
            <Text onPress={() => setOpenName(true)} fontSize={'md'}>
              Want to update{' '}
              <Text fontSize={'md'} color={Colors.buttonColor}>
                Name?
              </Text>
            </Text>
          </VStack>
          {/* row 2 */}
          <VStack
            space={3}
            p={2}
            minH={hp(15)}
            w={wp(46)}
            rounded={'md'}
            bg={Colors.lightBlue}>
            <HStack minH={'16'} space={2} alignItems={'center'}>
              <Image
                alt="phone"
                source={require('@assets/images/icons/phone.png')}
                size={'md'}
                bg={'white'}
                w={'12'}
                h={'12'}
                resizeMode={'center'}
                rounded={'full'}
              />
              <VStack>
                <Text color={'gray.800'} fontSize={'lg'} numberOfLines={1}>
                  {authUser?.mobileNumber}
                </Text>
                <HStack alignItems={'center'} space={1}>
                  <Text color={'green'} fontSize={'lg'} numberOfLines={1}>
                    Verified
                  </Text>
                  <VerifiedIcon size={5} />
                </HStack>
              </VStack>
            </HStack>
            <Text onPress={() => setOpenNumber(true)} fontSize={'md'}>
              Want to update{' '}
              <Text fontSize={'md'} color={Colors.buttonColor}>
                Number?
              </Text>
            </Text>
          </VStack>
        </HStack>
        {/* List 2 */}
        <HStack mt={3} space={2}>
          {/* row 1 */}
          <VStack
            space={3}
            p={2}
            w={wp(46)}
            minH={hp(15)}
            rounded={'md'}
            bg={'gray.100'}>
            <HStack minH={'16'} space={2} alignItems={'center'}>
              <Box rounded={'full'} bg={'white'}>
                <Image
                  alt="sms"
                  source={require('@assets/images/icons/sms.png')}
                  w={'12'}
                  h={'12'}
                  resizeMode={'center'}
                />
              </Box>

              <VStack>
                <Text color={'gray.800'} fontSize={'lg'} numberOfLines={1}>
                  SMS Plan
                </Text>
                <HStack alignItems={'center'} space={1}>
                  <Text
                    color={Colors.primaryMain}
                    fontSize={'lg'}
                    numberOfLines={1}>
                    WishMe Lite
                  </Text>
                </HStack>
              </VStack>
            </HStack>
            <Text fontSize={'md'}>
              Want to update{' '}
              <Text
                onPress={() => navigate('smsPlan')}
                fontSize={'md'}
                color={Colors.buttonColor}>
                Plan?
              </Text>
            </Text>
          </VStack>
          {/* row 2 */}
          <VStack
            space={3}
            p={2}
            w={wp(46)}
            minH={hp(15)}
            rounded={'md'}
            bg={'gray.100'}>
            <HStack minH={'16'} space={2} alignItems={'center'}>
              <Box rounded={'full'} bg={'white'}>
                <Image
                  alt="loyalty"
                  source={require('@assets/images/icons/loyalty.png')}
                  w={'12'}
                  h={'12'}
                  resizeMode={'center'}
                />
              </Box>
              <VStack>
                <Text color={'gray.800'} fontSize={'lg'} numberOfLines={1}>
                  Loyalty Point
                </Text>
              </VStack>
            </HStack>
            <Text fontSize={'md'}>
              You have{' '}
              <Text fontSize={'md'} color={Colors.buttonColor}>
                100 Points.
              </Text>
            </Text>
          </VStack>
        </HStack>
      </VStack>
    </Background>
  );
};

const profileScreen = asRoute(ProfileScreen, 'profileScreen', {
  title: 'ProfileScreen',
  animation: 'slide_from_right',
});

export default profileScreen;
