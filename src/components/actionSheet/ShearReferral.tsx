/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  Button,
  HStack,
  Image,
  Modal,
  Pressable,
  Text,
  VStack,
} from 'native-base';
import {hp, wp} from '@theme/ScreenDimensions';
import {
  Alert,
  Clipboard,
  KeyboardAvoidingView,
  Linking,
  Share,
} from 'react-native';
import Colors from '@theme/colors';
import useNavigate from '@hooks/useNavigate';

interface IProps {
  isOpen: boolean;
  onClose: () => void;
  data?: {
    fullName: string;
    link: string;
    receiveValue: number;
  };
}

export default function ShearReferral({isOpen, onClose, data}: IProps) {
  // Hooks
  const navigate = useNavigate();
  //
  const copyLinkToClipboard = async () => {
    if (data?.link) {
      await Clipboard.setString(data.link);
      Alert.alert(
        'Link Copied',
        'The referral link has been copied to the clipboard.',
      );
    }
  };

  const shareOnSocialMedia = async () => {
    if (data?.link) {
      try {
        await Share.share({
          message: `Check out WishMe! Join using my referral link: ${data.link}`,
        });
      } catch (error) {
        console.error('Error sharing on social media', error);
      }
    }
  };
  const openReferralLink = async () => {
    if (data?.link) {
      try {
        await Linking.openURL(data.link);
      } catch (error) {
        console.error('Error opening referral link', error);
      }
    }
  };
  return (
    <Modal
      zIndex={99}
      isOpen={isOpen}
      onClose={onClose}
      justifyContent={'flex-end'}>
      <>
        <KeyboardAvoidingView behavior="padding" enabled>
          <VStack
            w={wp(100)}
            minH="70%"
            p={3}
            bg={'white'}
            style={{
              borderTopRightRadius: 30,
              borderTopLeftRadius: 30,
              marginBottom: hp(-8),
            }}>
            <>
              <HStack justifyContent={'flex-end'}>
                <Pressable onPress={onClose} pr={1}>
                  <Text color={'gray.400'}>Close</Text>
                </Pressable>
              </HStack>
              {/* title */}
              <VStack space={3}>
                <Text
                  w={'90%'}
                  alignSelf={'center'}
                  fontSize={'2xl'}
                  color={'gray.800'}
                  textAlign={'center'}>
                  My Referral
                </Text>
                <Text
                  w={'90%'}
                  alignSelf={'center'}
                  fontSize={'md'}
                  color={'gray.700'}
                  textAlign={'center'}>
                  {data?.fullName}, refer a friend and receive a{' '}
                  {data?.receiveValue} WishMe SMS!
                </Text>
                <Text
                  w={'90%'}
                  alignSelf={'center'}
                  fontSize={'md'}
                  color={'gray.700'}
                  textAlign={'center'}>
                  Copy the links below to refer your friend to WishMe. You'll
                  both receive a {data?.receiveValue} WishMe SMS once your
                  friend successfully registers with us.
                </Text>
                <Pressable onPress={() => shareOnSocialMedia()}>
                  <Text
                    mt={3}
                    w={'90%'}
                    alignSelf={'center'}
                    fontSize={'2xl'}
                    color={'#8C51A5'}
                    textAlign={'center'}>
                    👇🏻 Share Your Link 👇🏻
                  </Text>
                  <Image
                    source={require('@assets/images/social-icon.png')}
                    w={wp(60)}
                    h={wp(14)}
                    alignSelf={'center'}
                    resizeMode={'contain'}
                  />
                </Pressable>
                {/* Button box */}
                <VStack bg={Colors.lightBlue} p={4} rounded={'md'}>
                  <Button
                    px={4}
                    py={3}
                    borderRadius={'full'}
                    variant={'unstyled'}
                    onPress={() => openReferralLink()}
                    _text={{
                      fontSize: 'sm',
                      color: 'gray.700',
                      textDecorationLine: 'underline',
                    }}>
                    {data?.link}
                  </Button>
                  <Button
                    px={4}
                    py={3}
                    borderRadius={'full'}
                    onPress={() => copyLinkToClipboard()}
                    _text={{fontSize: 'md', color: 'white'}}
                    background={Colors.buttonColor}>
                    Copy Link
                  </Button>
                </VStack>
                <Text
                  onPress={() => {
                    onClose();
                    navigate('referralSummary');
                  }}
                  w={'90%'}
                  alignSelf={'center'}
                  fontSize={'md'}
                  textDecorationLine={'underline'}
                  color={'gray.700'}
                  textAlign={'center'}>
                  My Referral Summary
                </Text>
              </VStack>
            </>
          </VStack>
        </KeyboardAvoidingView>
      </>
    </Modal>
  );
}
