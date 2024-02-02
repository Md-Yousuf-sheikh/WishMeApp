import {Dimensions, ImageBackground, StyleSheet} from 'react-native';
import React from 'react';
import {
  Button,
  Factory,
  HStack,
  Image,
  Text,
  VStack,
  useToast,
} from 'native-base';
import {useNavigation} from '@react-navigation/native';
import {useVerifyOtpMutation} from '@store/apis/auth';
import OtpInputs from 'react-native-otp-inputs';
import useShowModal from '@hooks/useShowModal';
import useShowToastMessage from '@hooks/useShowToastMessage';
import {PostV1AuthVerifyOtpErrorResponse} from '@store/schema';

const FBgImage = Factory(ImageBackground);
//
const WIDTH = Dimensions.get('window').width * 0.8;
const INPUT_BOX_WIDTH = Math.floor(WIDTH / 6);

// func
export default function EmailOtpVerify({route}) {
  const navigation = useNavigation();
  const toast = useShowToastMessage();

  // Otp
  const otpValue = React.useRef('');
  const handleOTPChange = (otp: string) => {
    otpValue.current = otp;
  };
  // APIS
  const [verifyOtp, {isLoading}] = useVerifyOtpMutation();

  const handelVerifyOtp = async () => {
    const body: {email: string; otp: string; otpToken: string} = {
      email: route?.params?.data?.email,
      otp: otpValue?.current,
      otpToken: route?.params?.data?.otpToken,
    };

    try {
      const res = await verifyOtp({...body}).unwrap();
      console.log('res-', res);
      // @ts-ignore
      navigation.navigate('ResetPassword', {
        data: body,
      });
      toast(res?.data.message);
    } catch (err: any) {
      const error = err as PostV1AuthVerifyOtpErrorResponse;
      toast(error.error.message, 'error');
    }
  };

  return (
    <FBgImage
      source={require('@assets/images/screen2.png')}
      flex={1}
      resizeMode="cover"
      alignItems="center">
      <Image
        source={require('@assets/images/logo.png')}
        alt="logo"
        mt={16}
        height={100}
        width={100}
      />

      <VStack w="100%" px={4} mt={10}>
        <Text fontSize="2xl" color="white" fontWeight={700}>
          OTP
        </Text>
        <Text color="gray.4">Please enter your otp to verification</Text>

        <VStack mt={10}>
          <HStack pb={10}>
            <OtpInputs
              handleChange={handleOTPChange}
              numberOfInputs={6}
              inputStyles={[styles.inputStyle]}
            />
          </HStack>

          <VStack space={2} alignItems="center">
            <Text
              onPress={() => navigation.navigate('ForgetPassword')}
              color="white"
              fontSize="sm">
              {/* {isRunning
              ? `Re-send timer: ${minutes}:${seconds}`
              : 'Re-send timer?'} */}
            </Text>
          </VStack>
          {/* button */}
          <Button
            w="full"
            bg={'secondary.100'}
            rounded={8}
            py={3}
            mt={10}
            _text={{color: 'black', fontWeight: 700}}
            _pressed={{bg: '#68696B90'}}
            isLoading={isLoading}
            onPress={handelVerifyOtp}>
            Submit
          </Button>
        </VStack>
      </VStack>
    </FBgImage>
  );
}

const styles = StyleSheet.create({
  inputStyle: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginHorizontal: 5,
    borderWidth: 2,
    // backgroundColor: '#fff',
    borderColor: '#EACA9A',
    height: INPUT_BOX_WIDTH,
    width: INPUT_BOX_WIDTH,
    maxWidth: 50,
    color: '#fff',
    borderRadius: 10,
    textAlign: 'center',
  },
});
